'use strict';

/**
 * @ngdoc directive
 * @name cedarTechWebApp.directive:cdBuildingDetails
 * @description
 * # cdBuildingDetails
 */
angular.module('cedarTechWebApp')
  .directive('cdBuildingDetails', function () {
    return {
      templateUrl: 'views/workshop/templates/building.html',
      restrict: 'E',
      scope: {
        building: '=building'
      }
    };
  });
