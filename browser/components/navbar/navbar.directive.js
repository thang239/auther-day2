'use strict';

app.directive('navbar', function (Auth,currentUser) {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/navbar/navbar.html',
		link: function (scope) {
			scope.logout = Auth.logout;
			// console.log(currentUser.user);
			console.log('hideSignupButton',scope.hideSignupButton)
			scope.hideSignupButton=currentUser.user?true:false;
			console.log('hideSignupButton',scope.hideSignupButton)
		}
	}
});