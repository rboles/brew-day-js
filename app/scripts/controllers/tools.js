'use strict';

/**
 * @ngdoc function
 * @name brewDayJsApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller for tools view
 */
angular.module('brewDayJsApp')
  .controller('ToolsCtrl', function ($scope) {

    $scope.tools = [];
});

angular.module('brewDayJsApp')
  .controller('AbvCalcCtrl', function ($scope, CalcService) {
    $scope.og = 1.060;
    $scope.fg = 1.010;
    $scope.ogTemp = 65;
    $scope.fgTemp = 65;
    $scope.$algorithm = 'daniels';  // daniels || papazian

    $scope.degreesC = (function() {
      var l = [];
      for ( var i = 0; i < 101; i++ ) {
        l[i] = i;
      }
      return l;
    })();

    $scope.degreesF = (function() {
      var l = [];
      for ( var i = 32; i < 213; i++ ) {
        l[i] = i;
      }
      return l;
    })();

    $scope.abv = function() {
      var og = parseFloat($scope.og);
      var fg = parseFloat($scope.fg);
      var ogTemp = parseInt($scope.ogTemp);
      var fgTemp = parseInt($scope.fgTemp);

      var ogAdj = CalcService.calcGravityTemperatureAdjust(og, ogTemp);
      var fgAdj = CalcService.calcGravityTemperatureAdjust(fg, fgTemp);

      if ( $scope.algorithm === 'papazian' ) {
        return CalcService.calcAbvPapazian(ogAdj, fgAdj).toFixed(3);
      } else {
        return CalcService.calcAbvDaniels(ogAdj, fgAdj).toFixed(3);
      }
    };
});
