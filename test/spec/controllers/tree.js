'use strict';

describe('Controller: TreeCtrl', function () {

  // load the controller's module
  beforeEach(module('cedarTechWebApp'));

  var TreeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TreeCtrl = $controller('TreeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TreeCtrl.awesomeThings.length).toBe(3);
  });
});
