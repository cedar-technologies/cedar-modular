'use strict';

describe('Controller: WorkshopCtrl', function () {

  // load the controller's module
  beforeEach(module('cedarTechWebApp'));

  var WorkshopCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkshopCtrl = $controller('WorkshopCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkshopCtrl.awesomeThings.length).toBe(3);
  });
});
