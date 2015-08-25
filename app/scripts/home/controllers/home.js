'use strict';

/**
 * @ngdoc function
 * @name cedarTechWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cedarTechWebApp
 */
angular.module('cedarTechWebApp').controller('HomeCtrl', ['$scope','$modal','$log', function ($scope, $modal, $log) {

  $scope.alerts = [
    { type: 'danger', msg: 'This page is under Construction' }
  ];

  $scope.cdFitlerModel = {
    firstTab: {
    }
  };

  $scope.prSelectorDefinition = {
    categories : [
      {
        title: 'firstTab',
        ative: true,
        controls: [
          {
              title: 'wate',
              type: 'slider',
              options: {
                min: 0,
                max: 5,
                range: 'min'
              }
          },
          {
              title: 'second control',
              type: 'slider',
              options: {
                min: 0,
                max: 5,
                range: 'min'
              }
          }
        ]
      },
      {
        title: 'secondTab',
        active: false,
        controls: [
          {
              title: 'third control',
              type: 'slider',
              options: {
                min: 0,
                max: 5,
                range: 'min'
              }
          }
        ]
      }
    ]
  };

  // this is a commen

  $scope.fitlerPanel = {
    events:{
      execute: function(){
        alert('executed');
      },
      save : function(){
        alert('updated!');
      }
    }
  };

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {
    var modalInstance;
    var modalScope = $scope.$new();
    modalScope.ok = function (selectedItem) {
            modalInstance.close(selectedItem);
    };
    modalScope.cancel = function () {
            modalInstance.dismiss('cancel');
    };

    modalScope.test = function (selectedItem) {
      $scope.selected = selectedItem;
    }

    modalInstance = $modal.open({
      template: '<cd-info-panel></cd-info-panel>',
      size: size,
      scope: modalScope,
      animation: false,
      backdrop: false
      }
    );

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


}]);
