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
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'addCtrl',
        controllerAs: 'add'
      })
      .when('/update', {
        templateUrl: 'views/update.html',
        controller: 'updateCtrl',
        controllerAs: 'update'
      })
      .otherwise({
        redirectTo: '/add'
      });
  });
