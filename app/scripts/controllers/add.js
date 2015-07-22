'use strict';

/**
 * @ngdoc function
 * @name pantryApp.controller:AddCtrl
 * @description
 * # InputCtrl
 * Controller of the pantryApp
 */
angular.module('pantryApp')
  .controller('addCtrl', function($scope, inventory){
    $scope.entered = '';
    $scope.pressedKey = function(e){
      if(e.which=== 13){
        $scope.handleEntry();
      }
    };
    $scope.handleEntry = function(){
      inventory.addNewFood($scope.entered);
      $scope.entered = '';
    };
  });
