'use strict';

describe('Service: treeService', function () {

  // load the service's module
  beforeEach(module('cedarTechWebApp'));

  // instantiate service
  var treeService;
  beforeEach(inject(function (_treeService_) {
    treeService = _treeService_;
  }));

  it('should do something', function () {
    expect(!!treeService).toBe(true);
  });

});
