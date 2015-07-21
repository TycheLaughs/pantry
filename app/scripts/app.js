'use strict';

/**
 * @ngdoc overview
 * @name pantryApp
 * @description
 * # pantryApp
 *
 * Main module of the application.
 */
angular
  .module('pantryApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
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
