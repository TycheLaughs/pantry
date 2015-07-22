'use strict';

describe('Controller: inputCtrl', function () {

  // load the controller's module
  beforeEach(module('pantryApp'));

  var InputCtrl,
    scope, inventory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _inventory_) {
    scope = $rootScope.$new();
    inventory = _inventory_;
    InputCtrl = $controller('inputCtrl', {
      $scope: scope

      // place here mocked dependencies
    });
  }));

  it('should initialize an empty string for entered values in the scope', function () {
    expect(scope.entered).toBe('');

  });

  it('should send input to the service to ADD new food', function(){
    scope.entered = "3 apples";
    scope.handleEntry();

    expect(inventory.Inventory().length).toBe(1);
    expect(inventory.Inventory()[0].name).toBe('apples');
    expect(inventory.Inventory()[0].servings).toBe('3');

  });


  it('should send input to the service to UPDATE existing fod amounts', function(){
    scope.updateMe = "3 apples";
    scope.entered = scope.updateMe;
    scope.handleEntry();
    scope.handleUpdate();
    expect(inventory.Inventory().length).toBe(1);
    expect(inventory.Inventory()[0].name).toBe('apples');
    expect(inventory.Inventory()[0].servings).toBe(6);
  });

  it('should send input to the service to REMOVE named food', function(){
    scope.entered = "3 apples";
    scope.removeMe = "apples";
    scope.handleEntry();
    expect(inventory.Inventory().length).toBe(1);
    expect(inventory.Inventory()[0].name).toBe('apples');
    scope.handleRemove();
    expect(inventory.Inventory().length).toBe(0);
  });

});
