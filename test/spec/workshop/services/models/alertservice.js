'use strict';

describe('factory:alertService', function(){

  // load the service module
  beforeEach(module('cedarTechWebApp'));

  var alertService, objectId;

  beforeEach(inject(function(_alertService_) {
      alertService = _alertService_;
  }));

  module(function($provide) {
  $provide.service('util', function() {
    this.isNumber = jasmine.createSpy('isNumber').andCallFake(function(num) {
      //a fake implementation
    });
    this.isDate = jasmine.createSpy('isDate').andCallFake(function(num) {
      //a fake implementation
    });
  });
});

  it('Should return a filter to get all active alerts', function(){

    var expectedFilter = { whenOff: { $ne: null } };
    var filter = alertFilter.activeAlerts();
    expect(filter).toEqual(expectedFilter);

  });



});
