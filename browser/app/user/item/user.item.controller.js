'use strict';

app.controller('UserItemCtrl', function ($scope, $state, currentUser) {
	$scope.save = function () {
		$scope.user.save();
	}
	$scope.removeUser = function () {
		$scope.user.destroy().then(function () {
			$scope.user.isDestroyed = true;
		});
	};
	// // console.log($scope.user);
	console.log('currentUser.user:',currentUser.user);
	console.log('user', $scope.user)

	$scope.showRemoveButton = (currentUser.user===undefined)?false:((currentUser.user._id === $scope.user._id)?true:false);
	// $scope.showRemoveButton = false;
	// // console.log($scope.user.showRemoveButton)
});