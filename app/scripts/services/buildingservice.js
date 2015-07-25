'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.buildingService
 * @description
 * # buildingService
 * Factory in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .factory('buildingService', ['workshopapi','buildingFilter',function (workshopapi,buildingFilter) {


    var buildingServiceFactory = {};

    var buildingResource = workshopapi.buildingRessource;

    var _get = function(){
      return buildingResource.get();
    }

    var _getBuildingForMap = function(bounds){
        var filter =   encodeURIComponent(JSON.stringify(buildingFilter.googleMapBoundFilter(bounds)));
        return buildingResource.queryGeoJson({query: filter});
    }

    buildingServiceFactory.getBuildingForMap = _getBuildingForMap;
    buildingServiceFactory.get = _get;


    // Public API here
    return buildingServiceFactory;
  }]);
