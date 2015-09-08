(function() {
    'use strict';

    var core = angular.module('stakeholder.core');

    core.config(function (
      $stateProvider,
      $urlRouterProvider,
      uiGmapGoogleMapApiProvider,
      cfpLoadingBarProvider) {

      $urlRouterProvider.otherwise("/");


      $stateProvider
      .state('stakeholder', {
            abstract: true,
            templateUrl: 'app.html'
      }).state('stakeholder.layout', {
            abstract: true,
            views: {
              "headerView":{
                templateUrl: 'core/layout/layout.html'
              },
              "sidebarView":{
                  templateUrl: 'core/layout/sidebar.html'
              }
            }
      }).state('stakeholder.layout.main', {
            url: '/',
            controller: 'MainController',
            templateUrl: 'core/main/main.html'
      });



      cfpLoadingBarProvider.includeSpinner = false;

    });

})();
