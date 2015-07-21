'use strict';

/**
 * @ngdoc service
 * @name pantryApp.inventory
 * @description
 * # inventory
 * Service in the pantryApp.
 */
angular.module('pantryApp')
  .service('inventory', function(){
    var inv = [];
    var recipes = [
      {"name":"Pasta with red sauce",
        "ingredients":[
          {
            "name":"pasta",
            "amount":"7"
          },
          {
            "name":"tomatoes",
            "amount":"10"
          },
          {
            "name":"garlic",
            "amount":"3"
          },
          {
            "name":"onions",
            "amount":"1"
          }
        ]},
      {"name":"Fruit salad",
        "ingredients":[
          {
            "name":"oranges",
            "amount":"1"
          },
          {
            "name":"apples",
            "amount":"2"
          },
          {
            "name":"peaches",
            "amount":"1"
          },
          {
            "name":"kiwi",
            "amount":"2"
          },
          {
            "name":"grapes",
            "amount":"1"
          },
          {
            "name":"cherries",
            "amount":"2"
          },
          {
            "name":"bananas",
            "amount":"1"
          }
        ]}
    ];
    var food = '';
    var numFood = '';

    return{
      Recipes: function(){
        return recipes;
      },
      Inventory: function(){
        return inv;
      },
      enteredFood: function(){
        return food;
      },
      enteredAmount: function(){
        return numFood;
      },
      processEntry: function(entered){
        var i = 0;
        if(entered.trim() !== ''){
          for(i; i < entered.length && entered[i] !== ' '; i++){
            numFood+= entered[i];
          }
          if(!Number(numFood) && numFood !=='0'){
            numFood = '';
            return 'NO';
          }
          for(i; i < entered.length; i++){
            food += entered[i].toLowerCase();
          }
          food = food.trim();
          //console.log(food+' '+ numFood);
        }
      },
      addNewFood: function(){
        var i = 0;
        var found = -1;
        //console.log(this.food);
        //console.log(this.numFood);
        if(Number(this.numFood)|| this.numFood === '0') {
          for (i; i < inv.length; i++) {
            if (inv[i].name === this.food) {
              found = i;
            }
          }
          if (found !== -1) {
            this.updateFood();
          }
          else {
            var foodProto = {
              "name": "foodName",
              "servings": "0"
            };

            foodProto.name = this.food;
            foodProto.servings = this.numFood;
            inv.push(foodProto);
            this.finishProcess();
          }
        }
      },
      updateFood: function(){
        if(Number(this.numFood) !== 0){

          var i;
          var index = 0;
          var amount = 0;
          for(i=0; i < inv.length; i++)
          {
            if(inv[i].name === this.food){
              index = i;
            }
          }
          amount += Number(inv[index].servings);
          amount += Number(this.numFood);
         if(amount > 0) {
           inv[index].servings = amount;
           this.finishProcess();
         }
          else this.removeFood();
        }
        else this.removeFood();
      },
      removeFood: function(){
        var i = 0;
        var index = 0;
        for(i; i < inv.length; i++)
        {
          if(inv[i].name === this.food.trim()){
            index = i;
          }
        }
        inv.splice(index, 1);
        this.finishProcess();
      },
      finishProcess: function(){
        this.food = '';
        this.numFood = '';
      },
      clearPantry: function(){
        var i = inv.length;
        for(i; i > 0; i--){
          inv.pop();
        }
        this.finishProcess();

      }
      /*,
      consumeFood: function(recipeObj){
        var i, j;
        var foundIngr = false;
        var message = [];
        //does the pantry have all the ingredients?
        if(inv.length >= recipeObj.ingredients.length ){
          for(i= 0; i < recipeObj.ingredients.length; i++){
            foundIngr = false;
            for(j= 0; j< inv.length; j++){
              if(recipeObj.ingredients[i].name === inv[j].name){
                foundIngr = true;
              }
            } if(!foundIngr){
              message.push('You need '+ inv[j].servings + ' '+ inv[j].name + ' to make this recipe.');
            }
          }
          //if it does
          if(message === []){
            for(i=0; i < recipeObj.ingredients.length; i++){
              for(j = 0; j< inv.length; j++){
                if(recipeObj.ingredients[i].name === inv[j].name){
                  if(inv[j].servings < recipeObj.ingredients[i].amount){ //is there enough of each ingredient?
                    message.push('You need '+ (-(inv[j].servings - recipeObj.ingredients[i].amount)) + ' more '+ ingredients[j].name + ' to make this recipe.');
                  }
                }
              }
            }
            if(message === []){//if we've still hit no errors
              for(i=0; i < recipeObj.ingredients.length; i++){
                for(j = 0; j< inv.length; j++) {
                  //actually perform the updates
                  if (inv[j].name === recipeObj.ingredients[i].name) {

                    if (inv[j].servings >= recipeObj.ingredients[i].amount) {
                      var amt = 0;
                      amt = Number(inv[j].servings);
                      amt -= Number(recipeObj.ingredients[i].amount);
                      inv[j].servings = amt;
                    }
                  }
                }
              }
            }
          }
        }
        return message;
      },
      addNewRecipe: function(list, name){
        var recipeProto={
          "name": name,
          "ingredients": list
        };
        recipes.push(recipeProto);
      },
      updateRecipe: function(index, recipeObj){
        recipes[index]= recipeObj;
      }
*/
    };
  });