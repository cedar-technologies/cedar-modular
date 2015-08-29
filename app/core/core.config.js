(function() {
    'use strict';

    var core = angular.module('cedarApp.core');

    core.config(function (
      $stateProvider,
      $urlRouterProvider,
      eehNavigationProvider,
      uiGmapGoogleMapApiProvider,
      cfpLoadingBarProvider) {

      $urlRouterProvider.otherwise("/");


      $stateProvider
      .state('home', {
        url: "/",
        views: {
          "mainView": {
            templateUrl: 'views/home/index.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('workshop',{
        url: "/workshop",
        views: {
          "mainView" : {
            templateUrl: 'views/workshop/layout.html',
            controller: 'WorkshopLayoutCtrl'
          },
          "workshopView@workshop": {
            templateUrl: 'views/workshop/index.html',
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('workshop.dashboard', {
        url: "/dash",
        views: {
          "workshopView@workshop": {
            templateUrl: 'views/workshop/dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('workshop.tree', {
        url: "/tree",
        views: {
          "workshopView@workshop": {
            templateUrl: 'views/workshop/tree.html',
            controller: 'TreeCtrl'
          }
        }
      }).state('contact', {
        url: "/contact",
        views: {
          "mainView": {
            templateUrl: 'views/contact/contact.html',
            controller: 'ContactCtrl'
          }
        }
      }).state('test', {
        url: "/test",
        views: {
          "mainView": {
            templateUrl: 'components/test/test.html',
            controller: 'TestController',
            controllerAs: 'test'
          }
        }
      });

      eehNavigationProvider.iconBaseClass('fa');

      eehNavigationProvider
      .menuItem('cedar.home', {
          text: 'Home',
          state: 'home',
          iconClass: 'fa-home'
      })
      .menuItem('cedar.workshop', {
          text: 'Workshop',
          state: 'workshop',
          iconClass: 'fa-gear'
      })
      .menuItem('cedar.contact', {
          text: 'Contact',
          state: 'contact',
          iconClass: 'fa-gear'
      })
      .menuItem('cedar.test', {
          text: 'Test',
          state: 'test',
          iconClass: 'fa-gear'
      });


      eehNavigationProvider
      .menuItem('workshop.dashboard', {
          text: 'Dashboard',
          state: 'workshop.dashboard',
          iconClass: 'fa-dashboard'
      })
      .menuItem('workshop.tree', {
          text: 'Trees',
          state: 'workshop.tree',
          iconClass: 'fa-tree'
      });

      cfpLoadingBarProvider.includeSpinner = false;

    });

})();
