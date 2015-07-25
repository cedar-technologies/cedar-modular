'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.buildingService
 * @description
 * # buildingService
 * Factory in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .factory('buildingService', ['workshopapi','buildingFilter', function(workshopapi,buildingFilter) {


    var buildingServiceFactory = {};

    var buildingResource = workshopapi.buildingRessource;

    var _get = function(){
      return buildingResource.get();
    }

    var _query = function(filter){
      var URIencodedFilter = encodeURIComponent(JSON.stringify(filter));
      return buildingResource.queryGeoJson({query: URIencodedFilter});
    }

    var _getBuildingForMap = function(bounds){
        var filter =   buildingFilter.googleMapBoundFilter(bounds);
        return _query(filter);
    }

    var _getBuidingForDash = function(bounds, buildingTypes){
      var filter = buildingFilter.customDashFilter(bounds, buildingTypes);
      return _query(filter);
    }

    buildingServiceFactory.getBuildingForMap = _getBuildingForMap;
    buildingServiceFactory.getBuidingForDash = _getBuidingForDash;
    buildingServiceFactory.query = _query;
    buildingServiceFactory.get = _get;


    // Public API here
    return buildingServiceFactory;
  }]);
