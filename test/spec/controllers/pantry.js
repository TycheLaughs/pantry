'use strict';

describe('Controller: pantryCtrl', function () {

  // load the controller's module
  beforeEach(module('pantryApp'));

  var pantryCtrl,
    scope, inventory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _inventory_) {
    scope = $rootScope.$new();
    inventory = _inventory_;
    pantryCtrl = $controller('pantryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should get the pantry inventory and attach it to the scope', function () {

    scope.pantry = inventory.Inventory();
    expect(scope.pantry.length).toBe(0);
  });
  describe('Function: clearInventory()', function(){
  beforeEach(function(){
    expect(inventory.Inventory().length).toBe(0);
    expect(inventory.enteredFood()).toBe('');
    expect(inventory.enteredAmount()).toBe('');
    scope.pantry = inventory.Inventory();
    expect(scope.pantry.length).toBe(0);

  });


      it('should clear the pantry', function(){

        inventory.addNewFood("8 grapefruits");
        inventory.addNewFood("7 apples");
        expect(inventory.Inventory().length).toBe(2);
        scope.pantry = inventory.Inventory();
        expect(scope.pantry.length).toBe(2);
        scope.clearInventory();
        expect(inventory.Inventory().length).toBe(0);
        scope.pantry = inventory.Inventory();
        expect(scope.pantry.length).toBe(0);

      });
  });
});
