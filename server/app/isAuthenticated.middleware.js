'use strict';



var isAuthenticated = function(req, res, next){
	if(req.session.userId){
		next();
	} else{
		res.status(401).send();
	}
}

module.exports = isAuthenticated;