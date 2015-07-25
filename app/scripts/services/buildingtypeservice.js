'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.buildingTypeService
 * @description
 * # buildingTypeService
 * Factory in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .factory('buildingTypeService',['workshopapi', function (workshopapi) {

    var buildingTypeServiceFactory = {};

    var buildingTypeResource = workshopapi.buildingTypeResource;

    var _get = function(){
      return buildingTypeResource.get();
    }

    var _findOne = function(id){
      return buildingTypeResource.findOne({"id": id})
    }

    buildingTypeServiceFactory.get = _get;
    buildingTypeServiceFactory.findOne = _findOne;

    // Public API here
    return buildingTypeServiceFactory;
  }]);
