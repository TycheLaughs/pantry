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
    //console.log(JSON.stringify(scope.pantry));
    expect(scope.pantry.length).toBe(0);
  });
});
