'use strict';

/**
 * @ngdoc function
 * @name cedarTechWebApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the cedarTechWebApp
 */
angular.module('cedarTechWebApp')
  .controller('ContactCtrl', ['$scope', function ($scope) {
      $scope.contact = {
        name: '',
        email: '',
        title: '',
        message: '',
      }
  }]);
