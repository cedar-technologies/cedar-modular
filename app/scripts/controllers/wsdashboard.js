'use strict';

/**
 * @ngdoc function
 * @name cedarTechWebApp.controller:WsdashboardCtrl
 * @description
 * # WsdashboardCtrl
 * Controller of the cedarTechWebApp
 */
angular.module('cedarTechWebApp')
  .controller('WsdashboardCtrl',['$scope','$timeout','buildingService','buildingTypeService', function ($scope,$timeout, buildingService, buildingTypeService) {

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
        clusterOptions: {
          title: 'Hi I am a Cluster!',
          gridSize: 60,
          ignoreHidden: true,
          minimumClusterSize: 2},
        events: {
          idle : function(){
            $timeout(function(){
              $scope.getBuildings = buildingService.getBuildingForMap($scope.map.bounds);
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
      events:{
        click: function(marker, eventName, model, originalEventArgs){
          $scope.model = model.properties;
        }
      }
    }


    $scope.options = {
      scrollwheel: false
    };

    $scope.test = 'test';



  }]);
