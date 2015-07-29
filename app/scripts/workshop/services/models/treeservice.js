'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.treeService
 * @description
 * # treeService
 * Service in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .service('treeService',['$resource','myConfig', function ($resource, myConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var serviceBase = myConfig.backend + 'trees';

    var actions = {
      'get':    {
        method:'GET',
        isArray: true
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

    return $resource(serviceBase,null,actions);

  }]);
