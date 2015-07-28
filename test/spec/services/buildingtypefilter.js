'use strict';

describe('Service: buildingTypeFilter', function () {

  // load the service's module
  beforeEach(module('cedarTechWebApp'));

  // instantiate service
  var buildingTypeFilter;
  beforeEach(inject(function (_buildingTypeFilter_) {
    buildingTypeFilter = _buildingTypeFilter_;
  }));

  it('should do something', function () {
    expect(!!buildingTypeFilter).toBe(true);
  });

});
