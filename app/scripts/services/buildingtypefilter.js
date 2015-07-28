'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.buildingTypeFilter
 * @description
 * # buildingTypeFilter
 * Factory in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .factory('buildingTypeFilter', function () {

    var buildingTypeFilterFactory = {};


    var _activeBuildingType = function() {
      return {
        "active": true
      };
    }


    buildingTypeFilterFactory.activeBuildingType = _activeBuildingType;


    // Public API here
    return buildingTypeFilterFactory
  });
