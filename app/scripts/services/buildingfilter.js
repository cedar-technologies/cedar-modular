'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.buildingFilter
 * @description
 * # buildingFilter
 * Factory in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .factory('buildingFilter', function () {

    var buildingFilterFactory = {};

    var _buildingTypeFilter = function (buildingTypes, onlyVisible){

      var types = [];

      if(onlyVisible){
        angular.forEach(buildingTypes, function(building, index){
          if(building.visible){
            types.push(building.name);
          }
        })
      } else {
        angular.forEach(buildingTypes, function(building, index){
          types.push(building.name);
        })
      }

      return {
              'buildingType':
              {
                $in: types
              }
            };
    }

    var _googleMapBoundFilter = function(bounds){

      if(bounds.southwest.longitude < bounds.northeast.longitude){
        return {
                  "lat": {
                    "$gt": bounds.southwest.latitude,
                    "$lt": bounds.northeast.latitude
                  },
                  "lng": {
                    "$gt": bounds.southwest.longitude,
                    "$lt": bounds.northeast.longitude
                  }
                };
      } else {
        return {
                  "lat": {
                    "$gt": bounds.southwest.latitude,
                    "$lt": bounds.northeast.latitude
                  },
                  $or:
                    [
                      {
                        "lng": {
                          "$gt": -180,
                          "$lt": bounds.northeast.longitude
                        }
                      },
                      {
                        "lng": {
                          "$gt": bounds.southwest.longitude,
                          "$lt": 180
                        }
                      }
                    ]
                };
        }
    }

    var _customDashFilter = function(bounds, buildingTypes){
      return angular.extend({}, _googleMapBoundFilter(bounds), _buildingTypeFilter(buildingTypes, true));
    }


    buildingFilterFactory.googleMapBoundFilter = _googleMapBoundFilter;
    buildingFilterFactory.buildingTypeFilter = _buildingTypeFilter;
    buildingFilterFactory.customDashFilter = _customDashFilter;

    // Public API here
    return buildingFilterFactory;
  });
