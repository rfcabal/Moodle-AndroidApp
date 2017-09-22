'use strict';

/**
 * @ngdoc function
 * @name moodleAppApp.controller:CursoCtrl
 * @description
 * # CursoCtrl
 * Controller of the moodleAppApp
 */
angular.module('moodleAppApp')
  .controller('CursoCtrl', function ($routeParams, WS, $scope, $http) {
   		
   		$scope.idCurso = $routeParams.id;
   		var token = $.jStorage.get('session', '');
   		$scope.showConte = false;

   		var req = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.INFOCURSO + '&courseid=' + $scope.idCurso;

   		$http.get(req).then( function(response) {
   			console.log(response.data);
   			$scope.contenidos = response.data;
   		})

   		$scope.showCont = function () {
   			if($scope.showConte == false) {
   				$scope.showConte = true;
   			} else {
   				$scope.showConte = false;
   			}
   		}


  });
