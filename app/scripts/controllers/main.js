'use strict';

/**
 * @ngdoc function
 * @name moodleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodleAppApp
 */
angular.module('moodleAppApp')

  .constant('WS', {
  	
  		NAME: 'moodle_mobile_app',
	  	LOGIN: "https://comunidaddeaprendizaje.cl/ac-cap/login/token.php",
	  	URL: "https://comunidaddeaprendizaje.cl/ac-cap/webservice/rest/server.php",
	  	GETUSER: "core_user_get_users_by_field",
	  	GETCURSOS: "core_enrol_get_users_courses",
	  	INFOCURSO: "core_course_get_contents",
	  	STARQUIZ: "mod_quiz_start_attempt",
	  	GETQUIZ: "mod_quiz_get_attempt_data",
	  	COMPLETEQUIZZ: "mod_quiz_process_attempt",
      SAVEANSWERS: "mod_quiz_save_attempt",
      ATTEMPTS: "mod_quiz_get_user_attempts",
      REVIEW_ATTEMPT: "mod_quiz_get_attempt_review"

	  })

  .controller('MainCtrl', function ($scope, $location) {

 	$scope.logout = function() {
    $.jStorage.deleteKey('session', '');
    $.jStorage.deleteKey('username', '');
    $location.path('/');
  	}

  	$scope.goBack =  function() {
  		window.history.back();
  	}

  });

