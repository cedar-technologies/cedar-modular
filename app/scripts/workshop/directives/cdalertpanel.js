'use strict';

/**
 * @ngdoc directive
 * @name cedarTechWebApp.directive:cdBuildingDetails
 * @description
 * # cdBuildingDetails
 */
angular.module('cedarTechWebApp')
  .directive('cdAlertPanel',['$compile','alertService', function ($compile, alertService) {
    return {
      templateUrl: 'views/workshop/templates/alert/alertPanel.html',
      restrict: 'E',
      scope: {
        objectid: '='
      },
      link: function (scope, elements, attrs) {

        scope.test = "before";

        scope.$watch("objectid",function(newValue,oldValue) {


          if(typeof scope.objectid !== 'undefined'){
            scope.test = scope.objectid;
            scope.alerts = alertService.getActiveObjectAlerts(newValue);
          }
        });
      }
    };
  }]);
