'use strict';

describe('Controller: DashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('cedarTechWebApp'));

  var DashboardCtrl,
    scope,
    $httpBackend,
    myresult;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    myresult = [{"_id":"55b300bac0d235ca84b59fa4","name":"tewt","__v":0,"active":true,"visible":true},{"_id":"55b301abc0d235ca84b59fa5","name":"Distribution Centre","__v":0,"active":true,"visible":true}]
    $httpBackend.when('GET', 'http://ec2-52-25-100-45.us-west-2.compute.amazonaws.com:8080/api/buildingTypes?filter=%257B%2522active%2522%253Atrue%257D')
      .respond(myresult);

    DashboardCtrl = $controller('DashboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should get an array of active buildingtype', function () {

    $httpBackend.flush();
    expect(angular.equals(scope.buildingTypes, myresult)).toBe(true);
  });
});
