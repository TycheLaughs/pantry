'use strict';

describe('Service: inventory', function () {

  // load the service's module
  beforeEach(module('pantryApp'));

  // instantiate service
  var inventory, i;

  beforeEach(inject(function (_inventory_) {
    inventory = _inventory_;
  }));

  it('should initially have an empty inventory array (check using getter)', function () {
    expect(inventory.Inventory().length).toBe(0);

  });




  /*

  Functions:

   */



  describe('Functions: ', function(){

    beforeEach(function () {
      i = '';
      expect(inventory.Inventory().length).toBe(0);
      expect(inventory.enteredFood()).toBe('');
      expect(inventory.enteredAmount()).toBe('');


    });

    describe('Function: enteredFood(entered)', function(){
      it('should have functions that split input into amount and food', function () {
        inventory.processFood("3 apples");
        expect(inventory.enteredFood()).toBe('apples');

      });
    });

    describe('Function: enteredAmount(entered)', function(){
      it('should have functions that split input into amount and food', function () {
        inventory.processAmount("3 apples");
        expect(inventory.enteredAmount()).toBe('3');
      });
    });
    describe('Function: processAmount(entered)', function(){
      it('should split input into amount and food', function () {
        inventory.processAmount("3 apples");
        expect(inventory.enteredAmount()).toBe('3');
      });
    });

    describe('Function: processFood(entered)', function(){
      it('should  split input into amount and food ', function () {
        inventory.processAmount("3 apples");
        inventory.processFood("3 apples");
        expect(inventory.enteredFood()).toBe('apples');

      });
    });

    describe('Function: findFood(foodName)', function(){
      it('should have a helper function that returns the index of a food if found in the pantry and -1 if not', function () {
        inventory.addNewFood("7 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(1);
        expect(inventory.findFood("oranges")).toBe(0);
        expect(inventory.findFood("apples")).toBe(-1);

      });
    });

    describe('Function: addNewFood', function(){
      it('should remove items from the list if the sum of the update amount and the current amount is less than or equal to zero', function () {
        inventory.addNewFood("7 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(1);
        inventory.addNewFood("-8 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(0);

      });

      it('should remove items from pantry when 0 is input as the amount', function () {
        inventory.addNewFood("7 oranges");
        inventory.addNewFood("4 apples");
        inventory.addNewFood("3 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(2);
        expect(i[0].servings).toBe(10);
        inventory.addNewFood("0 apples");
        i = inventory.Inventory();
        expect(i.length).toBe(1);
      });

      it('should have a function that adds items to the inventory', function () {
        inventory.addNewFood("7 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(1);
        expect(i[0].name).toBe('oranges');
        expect(i[0].servings).toBe('7');
      });

      it('should not perform any actions upon the list if handed invalid input', function () {
        inventory.addNewFood("7 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(1);
        inventory.addNewFood("A oranges");
        i = inventory.Inventory();
        expect(i[0].servings).toBe('7');
        inventory.addNewFood("4apples");
        i = inventory.Inventory();
        expect(i.length).toBe(1);
      });

      it('should not add new items of a negative amount to the list', function(){
        inventory.addNewFood("-8 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(0);
      });

      it('should update food already in pantry based on entry', function () {
        inventory.addNewFood("7 oranges");
        inventory.addNewFood("4 apples");
        inventory.addNewFood("3 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(2);
        expect(i[0].servings).toBe(10);
      });

    });

    describe('Function:updateFood(entry)', function(){
      it('should update food already in pantry based on entry', function () {
        inventory.addNewFood("7 oranges");
        inventory.addNewFood("4 apples");
        inventory.updateFood("3 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(2);
        expect(i[0].servings).toBe(10);
      });


      it('should not perform any actions upon the list if handed invalid input', function () {
        inventory.addNewFood("7 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(1);
        inventory.updateFood("Aoranges");
        i = inventory.Inventory();
        expect(i[0].servings).toBe('7');
        expect(i.length).toBe(1);
        inventory.updateFood("A oranges");
        i = inventory.Inventory();
        expect(i[0].servings).toBe('7');
        expect(i.length).toBe(1);
      });

      it('should remove items from pantry when 0 is input as the amount', function () {
        inventory.addNewFood("7 oranges");
        inventory.addNewFood("4 apples");
        inventory.addNewFood("3 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(2);
        expect(i[0].servings).toBe(10);
        inventory.updateFood("0 apples");
        i = inventory.Inventory();
        expect(i.length).toBe(1);
      });

    });

    describe('removeFood(foo)', function(){

      it('should remove items from the pantry upon receiving valid input', function(){
        inventory.addNewFood("7 oranges");
        inventory.addNewFood("4 apples");
        inventory.addNewFood("3 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(2);
        expect(i[0].servings).toBe(10);
          inventory.removeFood('oranges');
          i = inventory.Inventory();
          expect(i.length).toBe(1);

      });
      it('should not remove items from the pantry upon receiving invalid input', function(){
        inventory.addNewFood("7 oranges");
        inventory.addNewFood("4 apples");
        inventory.addNewFood("3 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(2);
        expect(i[0].servings).toBe(10);
        inventory.removeFood('aranges');
        i = inventory.Inventory();
        expect(i.length).toBe(2);
        inventory.removeFood('6');
        i = inventory.Inventory();
        expect(i.length).toBe(2);
        inventory.removeFood('a');
        i = inventory.Inventory();
        expect(i.length).toBe(2);
      });

      it('should not remove any items if the item in the input is not in the list', function () {
        inventory.addNewFood("7 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(1);
        inventory.removeFood("grapefruits");
        expect(i.length).toBe(1);
      });
    });

  describe('Function: finishProcess()', function(){
    it('should have a helper function that clears out the two entered values in the service', function () {
      inventory.food = "oranges";
      inventory.numFood = "7";
      inventory.finishProcess();
      expect(inventory.enteredFood()).toBe('');
      expect(inventory.enteredAmount()).toBe('');
    });
  });
    describe('Function: clearPantry()', function(){

      it('should have a function to empty the inventory', function () {
        inventory.addNewFood("7 oranges");
        inventory.addNewFood("4 apples");
        inventory.addNewFood("3 oranges");
        i = inventory.Inventory();
        expect(i.length).toBe(2);
        inventory.clearPantry();
        i = inventory.Inventory();
        expect(i.length).toBe(0);
      });
    });
  });

});
