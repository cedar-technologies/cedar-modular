'use strict';

describe('Service: buildingTypeService', function () {

  // load the service's module
  beforeEach(module('cedarTechWebApp'));

  // instantiate service
  var buildingTypeService;
  beforeEach(inject(function (_buildingTypeService_) {
    buildingTypeService = _buildingTypeService_;
  }));

  it('should do something', function () {
    expect(!!buildingTypeService).toBe(true);
  });

});
