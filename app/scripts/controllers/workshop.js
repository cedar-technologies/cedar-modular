'use strict';

/**
 * @ngdoc function
 * @name cedarTechWebApp.controller:WorkshopCtrl
 * @description
 * # WorkshopCtrl
 * Controller of the cedarTechWebApp
 */
angular.module('cedarTechWebApp')
  .controller('WorkshopCtrl', ['$scope',  function ($scope) {

    $scope.sidebarmenu = {
      name: 'workshop',
      searchInputIsVisible: false,
      menuItemCollapsedIcon: "fa-arrow-circle-o-down",
      menuItemExpandedIcon: "fa-arrow-circle-o-left",
      sidebarCollapsedIcon: "fa-arrow-right",
      sidebarExpandedIcon: "fa-arrow-left"
    };



  }]);
