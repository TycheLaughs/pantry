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


});
