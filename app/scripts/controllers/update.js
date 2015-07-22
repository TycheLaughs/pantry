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

      $scope.pressedKeyForUpdate = function(e){

        if(e.which === 13){
          $scope.handleUpdate();
        }
      };
      $scope.handleUpdate = function(){
        //calling addNewFood to catch user error rather than
        //updateFood. If the food they want to update isn't in
        //list, it adds it. Otherwise, it updates the amount
        //or removes based on the entered amount
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
