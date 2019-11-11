'use strict';

angular.module('myApp.services', []).value('version', '0.1')

.service('AuthService', ['$http', 'Session', function ($http, Session) {
	this.login = function (credentials) {
		var user = {
			id: 1,
			name: 'Centeno',
			role: 'admin'
		};
		return $http
			.get('http://api.skatespot.me/types/', credentials)
			.then(function (res) {
				Session.create(user);
				//Session.create(res.id, res.user.id, res.user.role);
				return user;//res.user;
			});
	};

	this.logout = function(){
		SessionService.destroy();
	}
	return this;
}])

.service('Session', ['$cookieStore', function ($cookieStore) {

	this.create = function (user) {
		this.currentUser = user;
		$cookieStore.put('user', user);
	};
	
	this.destroy = function () {
		this.currentUser = null;
		$cookieStore.remove('user');
	};

	this.isAuthenticated = function(){
		return !!this.CurrentUser();
	}

	this.CurrentUser = function(){
		if(!this.currentUser)
			this.currentUser = $cookieStore.get('user');
		
		return this.currentUser;
	}

	return this;
}])

.factory('LoginFactory', ['$resource', function($resource){
	return $resource('http://api.skatespot.me/types/', {}, {});
}])