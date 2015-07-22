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
    $scope.updateMe='';
    $scope.removeMe = '';
    $scope.pressedKey = function(e){
      if(e.which=== 13){
        $scope.handleEntry();
      }
    };
    $scope.handleEntry = function(){
      inventory.addNewFood($scope.entered);
      $scope.entered = '';
    };

    $scope.clearInventory = function(){
      inventory.clearPantry();
    };
    $scope.pressedKeyForUpdate = function(e){

        if(e.which=== 13){
          $scope.handleUpdate();
        }
    };
      $scope.handleUpdate = function(){

        inventory.addNewFood($scope.updateMe);
        $scope.updateMe = '';
    };
    $scope.pressedKeyForRemoval = function(e){
        if(e.which === 13){
          $scope.handleRemove();
        }

      };
      $scope.handleRemove = function(){
        inventory.removeFood($scope.removeMe);
        $scope.removeMe = '';
    };
  });
