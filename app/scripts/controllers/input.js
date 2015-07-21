'use strict';

/**
 * @ngdoc function
 * @name pantryApp.controller:InputCtrl
 * @description
 * # InputCtrl
 * Controller of the pantryApp
 */
angular.module('pantryApp')
  .controller('inputCtrl', function($scope, inventory){
    $scope.entered = '';
    $scope.pressedKey = function(e){
      if(e.which== 13){
        $scope.handleEntry();
      }
    };
    $scope.handleEntry = function(){
      inventory.processEntry($scope.entered);
      $scope.entered = '';
      inventory.addNewFood();
      console.log(JSON.stringify(inventory.Inventory()));
    };
  });
