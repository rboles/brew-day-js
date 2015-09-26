'use strict';

/**
 * @ngdoc function
 * @name brewDayJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the brewDayJsApp
 */
angular.module('brewDayJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
