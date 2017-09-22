'use strict';

/**
 * @ngdoc function
 * @name moodleAppApp.controller:RevisarCtrl
 * @description
 * # RevisarCtrl
 * Controller of the moodleAppApp
 */
angular.module('moodleAppApp')
  .controller('RevisarCtrl', function ($routeParams, $scope, $http, WS, $sce) {

  	var idAttempt = $routeParams.idAttempt;
  	var token = $.jStorage.get('session', '');

  	var reqAttempt = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.REVIEW_ATTEMPT + '&page=0' 
  					 + '&attemptid=' + idAttempt;

  	$http.get(reqAttempt).then(function(response) {
  		
  		$scope.attempt = response.data
  		$sce.trustAsHtml = $sce.trustAsHtml;
		$scope.questions = response.data.questions;

  		console.log(response.data);
  		
  	})
   
  });
