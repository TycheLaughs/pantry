'use strict';

describe('Service: inventory', function () {

  // load the service's module
  beforeEach(module('pantryApp'));

  // instantiate service
  var inventory;
  beforeEach(inject(function (_inventory_) {
    inventory =_inventory_;
  }));

  it('should initially have an empty inventory array', function () {
    expect(inventory.Inventory().length).toBe(0);

  });

  it('should have two default recipe objects', function(){
    expect(inventory.Recipes().length).toBe(2);
  });

  it('should have a function that splits input into amount and food', function(){
    var entered = "3 apples";
    inventory.processEntry(entered);
    expect(inventory.enteredFood()).toBe('apples');
    expect(inventory.enteredAmount()).toBe('3');
  });

  it('should have a function that adds items to the inventory', function (){
    var i = [];
    inventory.food = "oranges";
    inventory.numFood = "7";
    inventory.addNewFood();
    i = inventory.Inventory();
   // console.log(JSON.stringify(i));
    expect(i.length).toBe(1);
    expect(i[0].name).toBe('oranges');
    expect(i[0].servings).toBe('7');

  });

  it('should update food already in pantry based on entry', function (){
    var i=[];
    inventory.food = "oranges";
    inventory.numFood = "7";
    inventory.addNewFood();
    inventory.food = "apples";
    inventory.numFood = "4";
    inventory.addNewFood();
    inventory.food = "oranges";
    inventory.numFood = "3";
    inventory.addNewFood();
    i = inventory.Inventory();
    expect(i.length).toBe(2);
    expect(i[0].servings).toBe(10);
  });

  it('should remove items from pantry when 0 is typed asthe amount to add', function(){
    var i = [];
    inventory.food = "oranges";
    inventory.numFood = "7";
    inventory.addNewFood();
    inventory.food = "apples";
    inventory.numFood = "4";
    inventory.addNewFood();
    inventory.food = "oranges";
    inventory.numFood = "3";
    inventory.addNewFood();
    i = inventory.Inventory();
    expect(i.length).toBe(2);
    expect(i[0].servings).toBe(10);
    inventory.food = "apples";
    inventory.numFood = "0";
    inventory.addNewFood();
    i = inventory.Inventory();
    expect(i.length).toBe(1);
  });

  it('should have a function to empty the inventory', function(){
    var i = [];
    inventory.food = "oranges";
    inventory.numFood = "7";
    inventory.addNewFood();
    inventory.food = "apples";
    inventory.numFood = "4";
    inventory.addNewFood();
    inventory.food = "oranges";
    inventory.numFood = "3";
    inventory.addNewFood();
    i = inventory.Inventory();
    expect(i.length).toBe(2);
    inventory.clearPantry();
    i = inventory.Inventory();
    expect(i.length).toBe(0);
  });

  it('should remove items from the list if the sum of the update amount and the current amount is less than or equal to zero', function() {
    var i = [];
    inventory.food = "oranges";
    inventory.numFood = "7";
    inventory.addNewFood();
    i = inventory.Inventory();
    expect(i.length).toBe(1);
    inventory.food = "oranges";
    inventory.numFood = "-8";
    inventory.addNewFood();
    i = inventory.Inventory();
    expect(i.length).toBe(0);

  });

  it('should not perform any actions upon the list if handed invalid input', function(){
    var i = [];
    inventory.food = "oranges";
    inventory.numFood = "7";
    inventory.addNewFood();
    i = inventory.Inventory();
    expect(i.length).toBe(1);
   // console.log(JSON.stringify(i));
    inventory.food = "oranges";
    inventory.numFood = "A";
    inventory.addNewFood();
    i = inventory.Inventory();
   // console.log(JSON.stringify(i));
    expect(i[0].servings).toBe('7');

    inventory.numFood = "4apples";
    inventory.food = '';
    inventory.addNewFood();
    i = inventory.Inventory();
    // console.log(JSON.stringify(i));
    expect(i.length).toBe(1);
  });

  it('should have a helper function that clears out the two entered values in the service', function(){
    inventory.food = "oranges";
    inventory.numFood = "7";
    inventory.finishProcess();
    expect(inventory.food).toBe('');
    expect(inventory.numFood).toBe('');
  });
/*
  it('should be able to create a new recipe and add it to those stored when given ingredients and a recipe name', function (){
    inventory.recipes = [];
    var name = "Too many apples";
    var ingredients = [{"name":"apples", "servings":"84"}];
    inventory.addNewRecipe(ingredients, name);
    expect(inventory.recipes.length).toBe(1);

  });*/

});
