'use strict';

/**
 * @ngdoc filter
 * @name moodleAppApp.filter:sanitize
 * @function
 * @description
 * # sanitize
 * Filter in the moodleAppApp.
 */
angular.module('moodleAppApp')
  .filter('sanitize', function ($sce) {
    return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
    }
  });
