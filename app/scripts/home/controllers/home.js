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


  $scope.execute = function(){
    alert('executed');
  }


  $scope.save = function(){
    alert('updated!');
  };

}]);
