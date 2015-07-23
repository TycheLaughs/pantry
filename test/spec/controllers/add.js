'use strict';

describe('Controller: addCtrl', function () {

  // load the controller's module
  beforeEach(module('pantryApp'));

  var addCtrl,
    scope, inventory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _inventory_) {
    scope = $rootScope.$new();
    inventory = _inventory_;
    addCtrl = $controller('addCtrl', {
      $scope: scope

      // place here mocked dependencies
    });
  }));

  it('should initialize an empty string for entered values in the scope', function () {
    expect(scope.entered).toBe('');

  });

  describe('Function: handleEntry', function(){
    beforeEach(function () {
      expect(inventory.Inventory().length).toBe(0);
      expect(inventory.enteredFood()).toBe('');
      expect(inventory.enteredAmount()).toBe('');
      expect(scope.entered).toBe('');
    });
        it('should send input to the service to ADD new food', function () {
          scope.entered = "3 apples";
          scope.handleEntry();
          expect(inventory.Inventory().length).toBe(1);
          expect(inventory.Inventory()[0].name).toBe('apples');
          expect(inventory.Inventory()[0].servings).toBe('3');

        });
    });

  describe('Function: pressedKey', function(){
    var e = {"which": 13};
    var f = {"which": 17};
    beforeEach(function() {

      spyOn(scope, 'handleEntry').and.callFake(function () {
        return "A";
      });
    });

      it('should call the handleEntry function when the enter key is pressed', function () {

        scope.pressedKey(e);
        expect(scope.handleEntry).toHaveBeenCalled();
      });

      it('should not call the handleEntry function when any other key is pressed', function () {
        scope.pressedKey(f);
        expect(scope.handleEntry).not.toHaveBeenCalled();
      });
    });
});


