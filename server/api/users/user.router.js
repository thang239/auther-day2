'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');
var User = require('./user.model');
var isAuthenticated = require('../../app/isAuthenticated.middleware');
// var isAuthenticated = function(req, res, next){
// 	if(req.session.userId){
// 		next();
// 	} else{
// 		res.status(401).send();
// 	}
// }


router.param('id', function (req, res, next, id) {
	console.log('check 1:',req.session);
	User.findById(id).exec()
	.then(function (user) {
		if (!user) throw HttpError(404);
		else {
			req.requestedUser = user;
			next();
		}
	})
	.then(null, next);
});

router.get('/', function (req, res, next) {
	User.find({}).exec()
	.then(function (users) {
		res.json(users);
	})
	.then(null, next);
});

router.post('/', function (req, res, next) {
	console.log(req.requestedUser);
	User.create(req.body)
	.then(function (user) {
		res.status(201).json(user);
	})
	.then(null, next);
});

router.get('/:id', function (req, res, next) {
	req.requestedUser.getStories().then(function (stories) {
		var obj = req.requestedUser.toObject();
		obj.stories = stories;
		res.json(obj);
	})
	.then(null, next);
});

router.put('/:id', function (req, res, next) {
	console.log('req.body', req.body);
	_.extend(req.requestedUser, req.body);
	req.requestedUser.save()
	.then(function (user) {
		res.json(user);
	})
	.then(null, next);
});

// router.delete('/:id', isAutw)
router.delete('/:id',isAuthenticated);
router.delete('/:id', function (req, res, next) {
		req.requestedUser.remove()
		.then(function () {
			res.status(200).end();
		})
		.then(null, next);
});

module.exports = router;