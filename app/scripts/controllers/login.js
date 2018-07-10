'use strict';

/**
 * @ngdoc function
 * @name moodleAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the moodleAppApp
 */
angular.module('moodleAppApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $http, WS, $location) {

  	$scope.currentPath = $location.url();
  	console.log($scope.currentPath);

  	$scope.login = function() {

  		var username = $scope.username;
  		var password = $scope.password;

  		postCredentials(username, password);

  	}

  	function postCredentials(username, password, callback) {


  		// NO ES LA FORMA IDEAL -> Buscar otra
  		var req = WS.LOGIN + '?username=' + username + '&password=' + password + '&service=' + WS.NAME;

  		$http.post(req).then( function(response) {
  			var login = response.data;
  			if(login.token) {
  				//console.log(login.token);
  				$.jStorage.set('session', login.token);
  				$.jStorage.set('username', username);
  				$location.path('/dashboard');
  			} else {
  				//console.log(login.error)
  				$scope.failauth = true;
  			}

  		})
         
  	}

  });
