'use strict';

describe('Controller: WsdashboardCtrl', function () {


  // load the controller's module
  beforeEach(module('cedarTechWebApp'));
  //beforeEach(module('buildingService'));

  var WsdashboardCtrl,
    scope, $httpBackend,
    xyzPhoneData = function() {
          return [{
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
          },{
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
          }]
        };


  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://ec2-52-25-100-45.us-west-2.compute.amazonaws.com:8080/api/buildings').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    WsdashboardCtrl = $controller('WsdashboardCtrl', {
      $scope: scope
      // place here mocked dependencies

    });
  }));

  it('should create "phones" model with 2 phones fetched from xhr', function () {
    //expect(scope.buildings).toEqual([]);
    $httpBackend.flush();
    expect(scope.buildings).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  });



});
