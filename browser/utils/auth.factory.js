'use strict';

app.factory('Auth', function (User, $http, $state) {
	return {
		signup: function (credentials) {
			return new User(credentials).save();
		},
		login: function (credentials) {
			return $http.post('/auth/login', credentials)
			.then(function (response) {
				return response.data;
			});
		},
		logout: function () {
			$http.get('/auth/logout').then(function () {
				$state.go('home');
			});
		}
	}
});