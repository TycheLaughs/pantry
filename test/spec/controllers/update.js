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

  it('should initialize a variable called updateMe to empty string and attach it to the scope', function(){
    expect(scope.updateMe).toBe('');

  });

  it('should initialize a variable called removeMe to empty string and attach it to the scope', function(){
    expect(scope.removeMe).toBe('');

  });
describe('Function: handleUpdate', function() {
  beforeEach(function () {
    expect(inventory.Inventory().length).toBe(0);
    expect(inventory.enteredFood()).toBe('');
    expect(inventory.enteredAmount()).toBe('');
    expect(scope.removeMe).toBe('');
    expect(scope.updateMe).toBe('');
  });
  it('should send input to the service to UPDATE existing food amounts', function () {

    scope.updateMe = "3 apples";
    scope.handleUpdate();
    scope.updateMe = "3 apples";
    scope.handleUpdate();
    expect(inventory.Inventory().length).toBe(1);
    expect(inventory.Inventory()[0].name).toBe('apples');
    expect(inventory.Inventory()[0].servings).toBe(6);

  });
});
  describe('Function: handleRemove', function(){
    beforeEach(function(){
      expect(inventory.Inventory().length).toBe(0);
      expect(inventory.enteredFood()).toBe('');
      expect(inventory.enteredAmount()).toBe('');
      expect(scope.removeMe).toBe('');
      expect(scope.updateMe).toBe('');
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

  describe('Function: pressedKeyForUpdate', function() {
    var e = {"which": 13};
    var f = {"which": 17};
    beforeEach(function () {

      spyOn(scope, 'handleUpdate').and.callFake(function () {
        return "A";
      });
    });
    it('should call the handleUpdate function when the enter key is pressed', function () {
      scope.pressedKeyForUpdate(e);
      expect(scope.handleUpdate).toHaveBeenCalled();

    });

    it('should not call the handleUpdate function when any other key than enter is pressed', function () {
      scope.pressedKeyForUpdate(f);
      expect(scope.handleUpdate).not.toHaveBeenCalled();
    });
  });

    describe('Function: pressedKeyForRemoval', function(){
      var e ={"which" : 13};
      var f = {"which" : 17};
      beforeEach(function(){

        spyOn(scope, 'handleRemove').and.callFake(function() {
          return "A";
        });
      });
    it('should call the handleRemove function when the enter key is pressed', function(){

      scope.pressedKeyForRemoval(e);
      expect(scope.handleRemove).toHaveBeenCalled();

    });

    it('should not call the handleRemove function when any other key than enter is pressed', function(){

      scope.pressedKeyForRemoval(f);
      expect(scope.handleRemove).not.toHaveBeenCalled();
    });
  });

});
