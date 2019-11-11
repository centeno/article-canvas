'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MyCtrl1', ['$scope', function($scope) {

}])

.controller('MyCtrl2', ['$scope', 'AuthService', function($scope, AuthService) {	
	$scope.credentials = {
		username: '',
		password: ''
	};
	$scope.login = function (credentials) {
		AuthService.login(credentials).then(function (user) {
			//$scope.setCurrentUser(user);
			//TODO: Redirect to HomeUser
		}, function () {
			//TODO: Setar mensagem de erro.
		});
	};
}])

.controller('MyCtrl3', ['$scope', 'LoginFactory', function($scope, LoginFactory) {
	$scope.types = LoginFactory.query();
}])

.controller('MyCtrl4', ['$scope', '$location', 'Session', function($scope, $location, Session) {
	Session.destroy();
	$location.path('/home');
}])
;
