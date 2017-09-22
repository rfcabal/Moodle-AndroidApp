'use strict';

/**
 * @ngdoc function
 * @name moodleAppApp.controller:ContenidoCtrl
 * @description
 * # ContenidoCtrl
 * Controller of the moodleAppApp
 */
angular.module('moodleAppApp')
  .controller('ContenidoCtrl', function ($scope, $http, $routeParams, WS, $sce, $location, $rootScope) {

  		var idCurso = $routeParams.idCurso;
  		var idCont = $routeParams.idCont;
  		var token = $.jStorage.get('session', '');
  		$scope.modName = $routeParams.modName;

  		//Añadir otros parametro ver en documentación API

  		var req = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.INFOCURSO + '&courseid=' + idCurso
  				  +'&options[0][name]=modid&options[0][value]=' + idCont;

   		$http.get(req).then( function(response) {
   			//console.log(response.data);
   			var contenidos = response.data;

   			angular.forEach(contenidos, function (contenido, contenidoIndex) {
				        angular.forEach(contenido.modules, function (module, moduleIndex) {
				            if (module.id == idCont) {

				            	console.log(module);

				            	if (module.modname == 'resource') {

				            		$scope.linkDownload = module.contents[0].fileurl + '&token=' + token;
				            		$scope.name = module.name;

				            	}

				            	if (module.modname == 'quiz') {

				            		var quizId = module.instance;
				            		$scope.showquiz = false;

				            		var reqAttempts = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.ATTEMPTS
					            				   + '&quizid=' + quizId + '&userid=2' + '&status=all' +'&includepreviews=1';

					            	console.log(reqAttempts);

					            	$http.get(reqAttempts).then( function(response) {

					            		$scope.attempts = response.data.attempts

					            		console.log($scope.attempts);

					            		if($scope.attempts.length > 0) {
					            			$scope.showAttemps = true;
					            		}

					            	})

				            		$scope.startquiz = function() {

				            			$scope.showquiz = true;

					            		var req2 = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.STARQUIZ 
					            				   + '&quizid=' + quizId;

					            		$http.get(req2).then(function(response) {

					            			console.log(response.data);

					            			var attemptid = response.data.attempt.id;

					            			var req3 = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.GETQUIZ 
					            					   + '&attemptid=' + attemptid + '&page=0';

					            			$http.get(req3).then(function(response) {

					            				console.log(response.data);
					            				$sce.trustAsHtml = $sce.trustAsHtml;
					            				$scope.questions = response.data.questions;
										    	$scope.uniqueid = response.data.attempt.uniqueid;

					            			})

					            			

					            			
					            			
					            			$scope.submit = function() {

					            				var datas = $rootScope.answers

					            				console.log(datas);	

					            				angular.forEach(datas, function(data, dataIndex) {

					            					var question = data.name.substr(0,6);
					            					var qNumber = data.name.substr(5,1);

					            					console.log(question);
					            					console.log(qNumber);

					            					var reqAnswer = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.SAVEANSWERS
								                      + '&data[0][name]=slots&data[0][value]=' + qNumber + '&data[1][name]=' + question + '_:sequencecheck&data[1][value]=1' 
								                      + '&data[2][name]=' + data.name + '&data[2][value]=' + data.value + '&attemptid=' + attemptid;

								                	console.log(reqAnswer);

								                	$http.post(reqAnswer).then( function(response) {
								                		console.log(response.data);
								                	})	

					            				})					            				
					            							            			

												var finish = '&finishattempt=1';

												var sendAnswers = WS.URL + '?moodlewsrestformat=json&wstoken=' + token + '&wsfunction=' + WS.COMPLETEQUIZZ 
															 	  + '&attemptid=' + attemptid + finish;												

												
												// Cosulta para enviar preguntas
												// &data[0][name]=slots&data[0][value]=3
												// &data[1][name]=q15:3_:sequencecheck&data[1][value]=1 
												// &data[2][name]=q15:3_answer&data[2][value]=5

												
												$http.get(sendAnswers).then(function (response) {
											    	console.log(response.data);
											    	alert('Tus respuestas han sido guardadas');
											    	$location.path('/curso/' + idCurso);
											    })
										
											}

				            			})
					            	}
				            		
				            	}


				            }
				        });
				    });


   		})




  		
    
  });
