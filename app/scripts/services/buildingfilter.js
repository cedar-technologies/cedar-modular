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

    buildingFilterFactory.googleMapBoundFilter = _googleMapBoundFilter;

    // Public API here
    return buildingFilterFactory;
  });
