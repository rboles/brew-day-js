'use strict';

angular.module('brewDayJsApp')
  .directive('highlighter', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      scope: {
        model: '@highlighter'
      },
      link: function(scope, element) {
        scope.$watch('model', function(nv, ov) {
          if ( nv !== ov ) {
            element.addClass('highlight');

            $timeout(function() {
              element.removeClass('highlight');
            }, 1000);
          }
        });
      }
    };
  }]
);
