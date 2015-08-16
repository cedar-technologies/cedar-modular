'use strict';

/**
 * @ngdoc function
 * @name cedarTechWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cedarTechWebApp
 */
angular.module('cedarTechWebApp').controller('HomeCtrl', ['$scope', function ($scope) {

  $scope.alerts = [
    { type: 'danger', msg: 'This page is under Construction' }
  ];


  $scope.prSelectorDefinition = {
    categories : [
      {
        title: 'firstTab',
        ative: true,
        filters: [
          {
            title: 'wate'
          }
        ]
      },
      {
        title: 'secondTab',
        active: false,
        filter: []
      }
    ]
  };


  $scope.execute = function(){
    alert('executed');
  }


  $scope.save = function(){
    alert('updated!');
  };

}]);
