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
    var food = '';
    var numFood = '';

    return{

      Inventory: function(){
        return inv;
      },

      enteredFood: function(){
        return food;
      },

      enteredAmount: function(){
        return numFood;
      },

      processAmount: function(entered){
        var i = 0;
        numFood = '';
        if(entered.trim() !== ''){
          for(i; i < entered.length && entered[i] !== ' '; i++){
            numFood+= entered[i];
          }
          if(!Number(numFood) &&  numFood !=='0' ){

            numFood = '';
          }
        }
        return numFood;
      },

      processFood: function(entered){
        var i = 0;
        food = '';
        if(entered.trim() !== ''){
          for(i; i < entered.length && entered[i] !== ' '; i++){}
          for(i; i < entered.length; i++){
            food += entered[i].toLowerCase();
          }
          food = food.trim();
        }
        return food;
      },

      findFood: function(foodName){
        var found = -1;
        var i = 0;
        for (i; i < inv.length; i++) {
          if (inv[i].name === foodName) {
            found = i;
          }
        }
        return found;
      },

      addNewFood: function(entered){
        var am, foo;
        var foodProto = {
          "name": "foodName",
          "servings": "0"
        };
        am = this.processAmount(entered);
        foo = this.processFood(entered);

        if(am !== '' && foo !== ''){
          if(Number(am)|| am === '0') {
           var found = this.findFood(foo);
            if (found !== -1) {
              this.updateFood(entered);
            }
            else {
              if(am > 0){
                foodProto.name = foo;
                foodProto.servings = am;
                inv.push(foodProto);
              }
            }
          }
        }
        this.finishProcess();
      },

      updateFood: function(entry){
        var a, f;
        f = this.processFood(entry);
        a = this.processAmount(entry);
        if(Number(a) && a !== ''){
          var index = this.findFood(f);
          var amount = Number(inv[index].servings);
          amount += Number(a);
          if(amount > 0) {
           inv[index].servings = amount;
           this.finishProcess();
          }
          else {
            if(a !== ''){
              this.removeFood(f);
            }
          }
        }
        else {
          if(a !== ''){
            this.removeFood(f);
          }
        }
      },

      removeFood: function(foo){
        var index = this.findFood(foo);
        if(index !== -1) {
          inv.splice(index, 1);
        }
        this.finishProcess();
      },

      finishProcess: function(){
        food = '';
        numFood = '';
      },

      clearPantry: function(){
        var i = inv.length;
        for(i; i > 0; i--){
          inv.pop();
        }
        this.finishProcess();
      }
    };
  });
