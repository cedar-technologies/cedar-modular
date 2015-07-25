'use strict';

describe('Service: workshopapi', function () {

  // load the service's module
  beforeEach(module('cedarTechWebApp'));

  // instantiate service
  var workshopapi;
  beforeEach(inject(function (_workshopapi_) {
    workshopapi = _workshopapi_;
  }));

  it('should do something', function () {
    expect(!!workshopapi).toBe(true);
  });

});
