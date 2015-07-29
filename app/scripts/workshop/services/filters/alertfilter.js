'use strict';

/**
 * @ngdoc service
 * @name cedarTechWebApp.alertFilter
 * @description
 * # alertFilter
 * Factory in the cedarTechWebApp.
 */
angular.module('cedarTechWebApp')
  .factory('alertFilter', function () {

    var alertFilterFactory = {};

    var _activeAlerts = function() {
      return {
        whenOff: { $ne: null }
      };
    }

    var _activeObjectAlerts = function(objectId){
      return angular.extend({},_activeAlerts(), _objectAlerts(objectId));
    }

    var _objectAlerts = function(objectId){
      return {
        "objectId": objectId
      }
    }

    alertFilterFactory.activeObjectAlerts = _activeObjectAlerts;
    alertFilterFactory.objectAlerts = _objectAlerts;
    alertFilterFactory.activeAlerts = _activeAlerts;


    // Public API here
    return alertFilterFactory
  });
