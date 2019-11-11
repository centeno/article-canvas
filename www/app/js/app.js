'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
	'ngRoute',
	'ngCookies',
	'ngResource',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
])


.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'partials/partial1.html',
		controller: 'MyCtrl1',
	});
	
	$routeProvider.when('/login', {
		templateUrl: 'partials/partial2.html',
		controller: 'MyCtrl2'
	});
	
	$routeProvider.when('/account', {
		templateUrl: 'partials/partial3.html',
		controller: 'MyCtrl3',
		authenticate : true
	});
	
	$routeProvider.when('/logout', {
		templateUrl: 'partials/partial3.html',
		controller: 'MyCtrl4',
	});
	
	$routeProvider.otherwise({redirectTo: '/home'});
}])

.run(['$rootScope', '$location', 'Session', function ($rootScope, $location, Session) {
	$rootScope.$on('$routeChangeSuccess', function (event, next) {
		//console.log("CurrentUser:" + SessionService.CurrentUser())
		var authenticate = angular.isDefined(next.authenticate) ? next.authenticate : false;
		if(authenticate && !Session.isAuthenticated())
			$location.path("/home");
	});
}])

;