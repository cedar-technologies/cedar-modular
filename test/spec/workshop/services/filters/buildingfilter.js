'use strict';

describe('factory:buildingFilter', function(){

  // load the service module
  beforeEach(module('cedarTechWebApp'));

  var buildingFilter,
      buildingTypes = [{"_id":"55b300bac0d235ca84b59fa4","name":"Sawmill","__v":0,"active":true,"visible":true},{"_id":"55b301abc0d235ca84b59fa5","name":"Distribution Centre","__v":0,"active":true,"visible":false}],
      googleMapBounds = {
                          northeast: {
                            latitude: 60.90,
                            longitude: -95.27
                          },
                          southwest: {
                            latitude: 38.77,
                            longitude: -139.83
                          }
                        },
      googleMapBoundsOverLatitude180 = {
                          northeast: {
                            latitude: 56.72,
                            longitude: -40.73
                          },
                          southwest: {
                            latitude: -57.92,
                            longitude: 141.02
                          }
                        };


  beforeEach(inject(function(_buildingFilter_) {
      buildingFilter = _buildingFilter_;
  }));

  it('Should return a filter of all visible building type contained in the array', function(){

    var expectedFilter = {
            "buildingType":
            {
              "$in": ["Sawmill"]
            }
          };
    var filter = buildingFilter.buildingTypeFilter(buildingTypes, true);
    expect(filter).toEqual(expectedFilter);

  });

  it('Should return a filter of all building type contained in the array', function(){

    var expectedFilter = {
            "buildingType":
            {
              "$in": ["Sawmill","Distribution Centre"]
            }
          };
    var filter = buildingFilter.buildingTypeFilter(buildingTypes, false);
    expect(filter).toEqual(expectedFilter);

  });

  it('Should return a filter based on google map bound object', function(){

    var expectedFilter = {
                  "lat": {
                    "$gt": googleMapBounds.southwest.latitude,
                    "$lt": googleMapBounds.northeast.latitude
                  },
                  "lng": {
                    "$gt": googleMapBounds.southwest.longitude,
                    "$lt": googleMapBounds.northeast.longitude
                  }
                };
    var filter = buildingFilter.googleMapBoundFilter(googleMapBounds);
    expect(filter).toEqual(expectedFilter);

  });

  it('Should return a filter based on google map bound object overlapping the latitude 180', function(){

    var expectedFilter = {
                  "lat": {
                    "$gt": googleMapBoundsOverLatitude180.southwest.latitude,
                    "$lt": googleMapBoundsOverLatitude180.northeast.latitude
                  },
                  "$or":
                    [
                      {
                        "lng": {
                          "$gt": -180,
                          "$lt": googleMapBoundsOverLatitude180.northeast.longitude
                        }
                      },
                      {
                        "lng": {
                          "$gt": googleMapBoundsOverLatitude180.southwest.longitude,
                          "$lt": 180
                        }
                      }
                    ]
                };
    var filter = buildingFilter.googleMapBoundFilter(googleMapBoundsOverLatitude180);
    expect(filter).toEqual(expectedFilter);

  });

});
