'use strict';

app.controller('SignupCtrl', function ($scope, Auth, $state,currentUser,$rootScope) {
	$scope.signupUser = function (userData) {
		Auth.signup(userData)
		.then(function (signedupUser) {
			currentUser.user = signedupUser;
			$state.go('user', {id: signedupUser._id});
		});
	};
});