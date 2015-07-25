'use strict';

/**
 * @ngdoc function
 * @name cedarTechWebApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the cedarTechWebApp
 */
angular.module('cedarTechWebApp')
  .controller('IndexCtrl', ['$scope', function ($scope) {
      $scope.navbarBrand = {
        text: 'Cedar Technologies',
        state: 'home'
      }
  }]);
