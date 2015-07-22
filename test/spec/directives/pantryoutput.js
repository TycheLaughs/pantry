'use strict';

describe('Directive: pantryOutput', function () {

  // load the directive's module
  beforeEach(module('pantryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should render on the page', inject(function ($compile) {
    element = angular.element('<pantry-output></pantry-output>');
    element = $compile(element)(scope);
    expect(element.text().trim()).toBe('Pantry            Clear');
  }));

  it('should display content according to the referenced model', function($compile){
    element = angular.element('<pantry-output></pantry-output>');
    scope.pantry = [{"name": "grapefruits", "servings":"8"}];
    element = $compile(element)(scope);
    element = element.find('span').text().replace(/^\s+|\s+$/g, '');
    expect(element).toBe('grapefruits8');

  });


});
