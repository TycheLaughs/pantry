'use strict';

/**
 * @ngdoc function
 * @name pantryApp.controller:UpdateCtrl
 * @description
 * # DerpCtrl
 * Controller of the pantryApp
 */
angular.module('pantryApp')
  .controller('updateCtrl', function($scope, inventory){
      $scope.updateMe='';
      $scope.removeMe = '';

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
