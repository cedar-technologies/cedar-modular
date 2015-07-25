'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.workshopapi
 * @description
 * # workshopapi
 * Factory in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .factory('workshopapi', ['$resource','myConfig',function ($resource, myConfig) {


    var workshopApiFactory = {};
    var serviceBase = myConfig.backend;

    // building ressource
    var buildingRoute = serviceBase + 'buildings';

    var buildingActions  = {
      'get':    {
        method:'GET',
        isArray: true
      },
      'findOne': {
        method:'GET',
        url: serviceBase + '/:id'
      },
      'save':   {
        method:'POST'
      },
      'update':  {
        method:'PUT',
        url: buildingRoute + '/:id'
      },
      'delete': {
        method:'DELETE',
        url: buildingRoute + '/:id'
      },
      'geoJson': {
        method: 'GET',
        url: buildingRoute + '/geoJson'
      },
      'queryGeoJson':{
        method: 'GET',
        url: buildingRoute + '/geoJson/:query'
      }

    };

    var _buildingRessource = $resource(buildingRoute,null,buildingActions);

    workshopApiFactory.buildingRessource = _buildingRessource;

    // tree resource
    var treeRoute = serviceBase + 'trees';

    var treeActions = {
      'get':    {
        method:'GET',
        isArray: true
      },
      'findOne': {
        method:'GET',
        url: serviceBase + '/:id'
      },
      'save':   {
        method:'POST'
      },
      'update':  {
        method:'PUT',
        url: serviceBase + '/:id'
      },
      'delete': {
        method:'DELETE',
        url: serviceBase + '/:id'
      }
    };

    var _treeResource = $resource(treeRoute,null,treeActions);

    workshopApiFactory.treeResource = _treeResource;

    //buildingType resource
    var buildingTypeRoute = serviceBase + 'buildingTypes';

    var buildingTypeActions = {
      'get':    {
        method:'GET',
        isArray: true
      },
      'findOne': {
        method:'GET',
        url: serviceBase + '/:id'
      },
      'save':   {
        method:'POST'
      },
      'update':  {
        method:'PUT',
        url: serviceBase + '/:id'
      },
      'delete': {
        method:'DELETE',
        url: serviceBase + '/:id'
      }
    };

    var _buildingTypeResource = $resource(buildingTypeRoute,null,buildingTypeActions);

    workshopApiFactory.buildingTypeResource = _buildingTypeResource;

    // Public API here
    return workshopApiFactory;

  }]);
