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

}]);
