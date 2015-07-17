'use strict';

app.controller('LoginCtrl', function ($scope, Auth, $state,currentUser) {
	$scope.loginUser = function (userData) {
		Auth.login(userData)
		.then(function (loggedinUser) {
			// console.log(currentUser);
			currentUser.user= loggedinUser;
			// console.log(currentUser);
			$state.go('user', {id: loggedinUser._id});
		})
		.catch(function (e) {
			console.log('error logging in', e);
		});
	};
});