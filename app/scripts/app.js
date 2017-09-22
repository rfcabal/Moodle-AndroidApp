'use strict';

/**
 * @ngdoc overview
 * @name moodleAppApp
 * @description
 * # moodleAppApp
 *
 * Main module of the application.
 */
angular
  .module('moodleAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
         resolve: {
            "check": function($location) {
                var session = $.jStorage.get('session', '');
                if(session){
                    $location.path('/dashboard');
                } 
            }
        },
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
      })
      .when('/dashboard', {
         resolve: {
            "check": function($location) {
                var session = $.jStorage.get('session', '');
                if(!session){
                    $location.path('/');
                  }
               
            }
        },
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
      })
       .when('/curso/:id', {
         resolve: {
            "check": function($location) {
                var session = $.jStorage.get('session', '');
                if(!session){
                    $location.path('/');
                  }
               
            }
        },
        templateUrl: 'views/curso.html',
        controller: 'CursoCtrl',
      })
       .when('/curso/:idCurso/:modName/:idCont', {
         resolve: {
            "check": function($location) {
                var session = $.jStorage.get('session', '');
                if(!session){
                    $location.path('/');
                  }
               
            }
        },
        templateUrl: 'views/contenido.html',
        controller: 'ContenidoCtrl',
      })
       .when('/quiz/revisar/:idAttempt', {
         resolve: {
            "check": function($location) {
                var session = $.jStorage.get('session', '');
                if(!session){
                    $location.path('/');
                  }
               
            }
        },
        templateUrl: 'views/revisar.html',
        controller: 'RevisarCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });


angular.element(document).ready(function () {
    if (navigator.userAgent.match(/(iOS|iPhone|iPod|iPad|Android|BlackBerry)/)) {

      document.addEventListener('deviceready', function () {

       console.log('This is mobile app');

        angular.bootstrap(document.body, ['moodleAppApp']);

      }, false);

    } else {

      console.log('This is web app');

      angular.bootstrap(document.body, ['moodleAppApp']);
      
    }
  });

