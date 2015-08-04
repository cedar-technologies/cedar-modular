'use strict';

describe('factory:alertFilter', function(){

  // load the service module
  beforeEach(module('cedarTechWebApp'));

  var alertFilter, objectId;

  beforeEach(inject(function(_alertFilter_) {
      alertFilter = _alertFilter_;
      objectId = "55b300bac0d235ca84b59fa4";
  }));

  it('Should return a filter to get all active alerts', function(){

    var expectedFilter = { whenOff: { $ne: null } };
    var filter = alertFilter.activeAlerts();
    expect(filter).toEqual(expectedFilter);

  });

  it('Should return a filter with an object id', function(){

    var expectedFilter  =  {"objectId": objectId};
    var filter = alertFilter.objectAlerts(objectId);
    expect(filter).toEqual(expectedFilter);

  });

  it('Should return a filter of active alerts for an object id', function(){

    var expectedFilter  =  { whenOff: { $ne: null }, "objectId": objectId };
    var filter = alertFilter.activeObjectAlerts(objectId);
    expect(filter).toEqual(expectedFilter);

  });


});
