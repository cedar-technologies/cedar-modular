'use strict';

/**
 * @ngdoc directive
 * @name cedarTechWebApp.directive:cdBuildingTypeList
 * @description
 * # cdBuildingTypeList
 */
angular.module('cedarTechWebApp')
  .directive('cdBuildingTypeList', function () {
    return {
      templateUrl: 'views/workshop/templates/buildingTypeList.html',
      restrict: 'E',
      scope: {
        buildingtypes: '=',
        onclick: '='
      }
    };
  });
