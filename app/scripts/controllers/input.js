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
      if(e.which=== 13){
        $scope.handleEntry();
      }
    };
    $scope.handleEntry = function(){
      inventory.addNewFood($scope.entered);
      console.log(JSON.stringify(inventory.Inventory()));
      $scope.entered = '';
    };

    $scope.clearInventory = function(){
      inventory.clearPantry();

    };
  });
