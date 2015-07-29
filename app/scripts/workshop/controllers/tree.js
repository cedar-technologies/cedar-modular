'use strict';

/**
 * @ngdoc function
 * @name cedarTechWebApp.controller:TreeCtrl
 * @description
 * # TreeCtrl
 * Controller of the cedarTechWebApp
 */
angular.module('cedarTechWebApp')
  .controller('TreeCtrl',  ['$scope','treeService',  function ($scope, treeService) {

    $scope.trees = treeService.get();


  }]);
