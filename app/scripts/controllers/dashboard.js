'use strict';

/**
 * @ngdoc function
 * @name moodleAppApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the moodleAppApp
 */
angular.module('moodleAppApp')
  .controller('DashboardCtrl', function ($scope, $location, WS, $http) {

  	var username= $.jStorage.get('username', '');
  	var token = $.jStorage.get('session', '');

  	var req = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.GETUSER + '&field=username' + '&values[0]=' + username;

  	$http.get(req).then(function(response) {

  		$scope.fullname = response.data[0].fullname
  		var userid = response.data[0].id

  		var req2 = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.GETCURSOS + '&userid=' + userid;

  		$http.get(req2).then(function (response) {
  			$scope.cursos = response.data;
  		})

  		
  	})

  	


  });
