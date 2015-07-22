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
      processAmount: function(entered){
        var i = 0;
        numFood = '';
        if(entered.trim() !== ''){
          for(i; i < entered.length && entered[i] !== ' '; i++){
            numFood+= entered[i];
          }
          if(!Number(numFood) && numFood !=='0'){
            numFood = '';
            return '';
          }
        }
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
          //console.log(food+' '+ numFood);
        }
        return food;
      },

      addNewFood: function(entered){
        var i = 0;
        var found = -1;
        var am, foo;
        this.processAmount(entered);
        this.processFood(entered);
        am = this.enteredAmount();
        foo = this.enteredFood();
        //console.log(this.enteredFood());
        //console.log(this.enteredAmount());
        if(am !== '' && foo !== ''){
          if(Number(am)|| am === '0') {
            for (i; i < inv.length; i++) {
              if (inv[i].name === foo) {
                found = i;
              }
            }
            if (found !== -1) {
              this.updateFood(am, foo);
            }
            else {
              var foodProto = {
                "name": "foodName",
                "servings": "0"
              };

              foodProto.name = foo;
              foodProto.servings = am;
              inv.push(foodProto);
              this.finishProcess();
            }
          }
        }
      },
      updateFood: function(a, f){
        if(Number(a) !== 0){
          var i;
          var index = 0;
          var amount = 0;
          for(i=0; i < inv.length; i++)
          {
            if(inv[i].name === f){
              index = i;
            }
          }
          amount += Number(inv[index].servings);
          amount += Number(a);
         if(amount > 0) {
           inv[index].servings = amount;
           this.finishProcess();
         }
          else {
           this.removeFood(f);
         }
        }
        else {
          this.removeFood(f);
        }
      },
      removeFood: function(foo){
        var i = 0;
        var index = 0;
        for(i; i < inv.length; i++)
        {
          if(inv[i].name === foo){
            index = i;
          }
        }
        inv.splice(index, 1);
        this.finishProcess();
      },
      finishProcess: function(){
        //console.log(JSON.stringify(inv));
        food = '';
        numFood = '';
      },
      clearPantry: function(){
        //console.log(JSON.stringify(inv));
        var i = inv.length;
        for(i; i > 0; i--){
          inv.pop();
          //console.log(JSON.stringify(inv));
        }
        this.finishProcess();

      }

    };
  });
