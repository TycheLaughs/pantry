'use strict';

describe('Controller: UpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('pantryApp'));

  var updateCtrl,
    scope, inventory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _inventory_) {
    scope = $rootScope.$new();
    inventory = _inventory_;
    updateCtrl = $controller('updateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should send input to the service to UPDATE existing food amounts', function(){
    scope.updateMe = "3 apples";
    scope.handleUpdate();
    scope.updateMe = "3 apples";
    scope.handleUpdate();
    expect(inventory.Inventory().length).toBe(1);
    expect(inventory.Inventory()[0].name).toBe('apples');
    expect(inventory.Inventory()[0].servings).toBe(6);
  });

  it('should send input to the service to REMOVE named food', function(){
    scope.updateMe = "3 apples";
    scope.removeMe = "apples";
    scope.handleUpdate();
    expect(inventory.Inventory().length).toBe(1);
    expect(inventory.Inventory()[0].name).toBe('apples');
    scope.handleRemove();
    expect(inventory.Inventory().length).toBe(0);
  });
});
