'use strict';

/**
 * @ngdoc directive
 * @name moodleAppApp.directive:watchForChanges
 * @description
 * # watchForChanges
 */
angular.module('moodleAppApp')
  .directive('watchForChanges', function ($rootScope, $http) {

  	$rootScope.answers = [];

    return {
            link: function(scope, element, attrs, count) {
                element.on('change', function (e) {

                  scope.value = e.target.value;
                  scope.name = e.target.name;


                  if($rootScope.answers.length == 0) {

                  	$rootScope.answers.push({name: scope.name,
                        					value: scope.value
          	              	      });

                  } else {

                  	function findAnswer (answer) {
                      return answer.name === scope.name;
                    }

                    var foundAnswer = $rootScope.answers.find(findAnswer);

                    if (foundAnswer) {
                      console.log('Ya hay uno');
                      foundAnswer.value = scope.value;
                    } else {
                      $rootScope.answers.push({name: scope.name,
                                    value: scope.value
                                    });
                    }

                  }

                  //console.log($rootScope.answers);

                }) 
                
            }
          
        }
  });


//console.log(scope.name + ': ' + scope.value);
// &data[2][name]=q28:1_answer&data[2][value]=2
