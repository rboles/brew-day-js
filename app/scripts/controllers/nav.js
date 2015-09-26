'use strict';

/**
 * @ngdoc function
 * @name brewDayJsApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller for navigation widgets
 */
angular.module('brewDayJsApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  });
