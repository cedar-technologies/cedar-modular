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

    var _buildingTypeFilter = function (buildingTypes){

      return {
              'buildingTypes':
              {
                $in: buildingTypes
              }
            }
    }

    var _googleMapBoundFilter = function(bounds){
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
    }

    var _customDashFilter = function(bounds, buildingTypes){

      return angular.extend({}, _googleMapBoundFilter(bounds), _buildingTypeFilter(buildingTypes));

    }


    buildingFilterFactory.googleMapBoundFilter = _googleMapBoundFilter;
    buildingFilterFactory.buildingTypeFilter = _buildingTypeFilter;
    buildingFilterFactory.customDashFilter = _customDashFilter;

    // Public API here
    return buildingFilterFactory;
  });
