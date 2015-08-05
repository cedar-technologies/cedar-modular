'use strict';

describe('factory:buildingTypeFilter', function(){

  // load the service module
  beforeEach(module('cedarTechWebApp'));

  var buildingTypeFilter;

  beforeEach(inject(function(_buildingTypeFilter_) {
      buildingTypeFilter = _buildingTypeFilter_;
  }));

  it('Should return a filter of all visible building type contained in the array', function(){

    var expectedFilter = {
      "active": true
    };
    var filter = buildingTypeFilter.activeBuildingType();
    expect(filter).toEqual(expectedFilter);

  });

});
