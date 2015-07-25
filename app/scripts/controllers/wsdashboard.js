'use strict';

/**
 * @ngdoc function
 * @name cedarTechWebApp.controller:WsdashboardCtrl
 * @description
 * # WsdashboardCtrl
 * Controller of the cedarTechWebApp
 */
angular.module('cedarTechWebApp')
  .controller('WsdashboardCtrl',
    [
      '$scope',
      '$timeout',
      'buildingService',
      'buildingTypeService',
      function (
        $scope,
        $timeout,
        buildingService,
        buildingTypeService) {

      $scope.buildings;

      $scope.buildingTypes = buildingTypeService.get();

      //$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
      angular.extend($scope, {
        map: {
          center: {
            latitude: 51.142207,
            longitude: -114.232893
          },
          zoom: 8,
          bounds: {},
          doClusterRandomMarkers: true,
          events: {
            idle : function(){
              $timeout(function(){
                $scope.getBuildings = buildingService.getBuidingForDash($scope.map.bounds, $scope.buildingTypes);
                $scope.getBuildings.$promise.then(function(result){
                  $scope.buildings = result.features;
                });
                $scope.$apply();
              });
            }
          }
        }
      });

      $scope.buildingMarkers = {
        clusterOptions: {
          title: 'Click to zoom on buildings',
          gridSize: 40,
          ignoreHidden: true,
          minimumClusterSize: 2},
        events:{
          click: function(marker, eventName, model, originalEventArgs){
            $scope.model = model.properties;
          }
        }
      }


      $scope.options = {
        scrollwheel: false
      };

  }]);
