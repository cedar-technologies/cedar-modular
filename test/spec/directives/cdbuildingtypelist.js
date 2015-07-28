'use strict';

describe('Directive: cdBuildingTypeList', function () {

  // load the directive's module
  beforeEach(module('cedarTechWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cd-building-type-list></cd-building-type-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cdBuildingTypeList directive');
  }));
});
