'use strict';

describe('Controller: consumptionCtrl', function () {

  // load the controller's module
  beforeEach(module('pantryApp'));

  var consumptionCtrl,
    scope, inventory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _inventory_) {
    scope = $rootScope.$new();
    inventory = _inventory_;
   consumptionCtrl = $controller('consumptionCtrl', {
      $scope: scope

      // place here mocked dependencies
    });
  }));
/*
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
