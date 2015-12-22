'use strict';

/**
 * @ngdoc overview
 * @name multiNavigationApp
 * @description
 * # multiNavigationApp
 *
 * Main module of the application.
 */
angular
  .module('multiNavigationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
