'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.buildingTypeService
 * @description
 * # buildingTypeService
 * Factory in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .factory('buildingTypeService',
  [
    'workshopapi',
    'buildingTypeFilter',
    function (
      workshopapi,
      buildingTypeFilter
    ) {

      var buildingTypeServiceFactory = {};

      var buildingTypeResource = workshopapi.buildingTypeResource;

      var _get = function(){
        return buildingTypeResource.get();
      }

      var _query = function(filter){
        var URIencodedFilter = encodeURIComponent(JSON.stringify(filter));
        return buildingTypeResource.query({filter: URIencodedFilter});
      }

      var _getActive = function(){
        var filter = buildingTypeFilter.activeBuildingType();
        return _query(filter);
      }

      var _findOne = function(id){
        return buildingTypeResource.findOne({"id": id})
      }

      buildingTypeServiceFactory.get = _get;
      buildingTypeServiceFactory.query = _query;
      buildingTypeServiceFactory.getActive = _getActive;
      buildingTypeServiceFactory.findOne = _findOne;

      // Public API here
      return buildingTypeServiceFactory;
  }]);
