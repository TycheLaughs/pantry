'use strict';

/**
 * @ngdoc function
 * @name pantryApp.controller:ConsumptionCtrl
 * @description
 * # ConsumptionCtrl
 * Controller of the pantryApp
 */
angular.module('pantryApp')
  .controller('consumptionCtrl', function($scope, inventory){
    $scope.recipes = inventory.Recipes();
    $scope.ingredientList = [];
    //$scope.ingredientInput = '';
    //$scope.amountInput = '';
    $scope.createRecipeToggle = false;
    $scope.editRecipeToggle = false;


    $scope.createIngredient = function () {

      var ingrProto = {
        "name":"food",
        "amount":"number"
      };
      ingrProto.name = $scope.ingredientInput;
      ingrProto.amount = $scope.amountInput;
      //console.log($scope.amountInput);
      //console.log($scope.ingredientInput);
      $scope.ingredientList.push(ingrProto);
      $scope.ingredientInput = '';
      $scope.amountInput = '';
      // console.log(JSON.stringify($scope.ingredientList));
    };

    $scope.toggleCreate = function(){
      if($scope.createRecipeToggle){
        $scope.createRecipeToggle = false;
      }
      else{
        $scope.createRecipeToggle = true;
      }
      $scope.editRecipeToggle = false;
    };
    $scope.toggleEdit = function(){
      if($scope.editRecipeToggle){
        $scope.editRecipeToggle = false;
      }
      else{
        $scope.editRecipeToggle = true;
        $scope.createRecipeToggle = false;
      }
      $scope.createRecipeToggle = false;
    };
    $scope.saveRecipe = function () {
      inventory.addNewRecipe($scope.ingredientList, $scope.recipeInput);
      var i = $scope.ingredientList.length;
      $scope.ingredientInput = '';
      $scope.amountInput = '';
      for( i; i > 0; i--){
        $scope.ingredientList.pop();
      }
      $scope.recipeInput = '';
      $scope.createRecipeToggle = false;
    };
    $scope.saveEditedRecipe= function (){
      var ind = $scope.recipes.indexOf($scope.selectedRecipe);
      inventory.updateRecipe(ind, $scope.selectedRecipe);
      $scope.editRecipeToggle = false;

    };
    $scope.cookStuff= function(){
      var err = {};
      err = inventory.consumeFood($scope.selectedRecipe);
      $scope.cookMessage = err;
      console.log(JSON.stringify($scope.cookMessage));
    };
  });
