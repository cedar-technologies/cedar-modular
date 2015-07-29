'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.alertService
 * @description
 * # alertService
 * Factory in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .factory('alertService',
  [
    'workshopapi',
    'alertFilter',
    function (
      workshopapi,
      alertFilter
    ) {

      var alertServiceFactory = {};

      var alertResource = workshopapi.alertResource;

      var _get = function(){
        return alertResource.get();
      }

      var _query = function(filter){
        var URIencodedFilter = encodeURIComponent(JSON.stringify(filter));
        return alertResource.query({filter: URIencodedFilter});
      }

      var _getActiveObjectAlerts = function(objectId){
        var filter = alertFilter.activeObjectAlerts(objectId);
        return _query(filter);
      }

      var _findOne = function(id){
        return alertResource.findOne({"id": id})
      }

      alertServiceFactory.get = _get;
      alertServiceFactory.query = _query;
      alertServiceFactory.getActiveObjectAlerts = _getActiveObjectAlerts;
      alertServiceFactory.findOne = _findOne;

      // Public API here
      return alertServiceFactory;
  }]);
