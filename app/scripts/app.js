'use strict';

/**
 * @ngdoc overview
 * @name brewDayJsApp
 * @description
 * # brewDayJsApp
 *
 * Main module of the application.
 */
angular
  .module('brewDayJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'brewDayJsApp.calcService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/brew.html',
        controller: 'BrewCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/hops', {
        templateUrl: 'views/hops.html',
        controller: 'HopCtrl'
      })
      .when('/tools', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
