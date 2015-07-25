'use strict';

describe('Service: buildingFilter', function () {

  // load the service's module
  beforeEach(module('cedarTechWebApp'));

  // instantiate service
  var buildingFilter;
  beforeEach(inject(function (_buildingFilter_) {
    buildingFilter = _buildingFilter_;
  }));

  it('should do something', function () {
    expect(!!buildingFilter).toBe(true);
  });

});
