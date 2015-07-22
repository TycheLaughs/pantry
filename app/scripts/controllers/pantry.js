'use strict';

/**
 * @ngdoc function
 * @name pantryApp.controller:PantryCtrl
 * @description
 * # PantryCtrl
 * Controller of the pantryApp
 */
angular.module('pantryApp')
  .controller('pantryCtrl', function($scope, inventory){
    $scope.pantry = inventory.Inventory();

    $scope.clearInventory = function(){
      inventory.clearPantry();
    };
  });
