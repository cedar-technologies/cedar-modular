'use strict';

/**
 * @ngdoc overview
 * @name cedarTechWebApp
 * @description
 * # cedarTechWebApp
 *
 * Main module of the application.
 */
angular.module('cedarTechWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'eehNavigation',
    'pascalprecht.translate',
    'uiGmapgoogle-maps'
  ]).config(function ($stateProvider, $urlRouterProvider, eehNavigationProvider, uiGmapGoogleMapApiProvider) {

    $urlRouterProvider.otherwise("/");


    $stateProvider
    .state('home', {
      url: "/",
      views: {
        "mainView": {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        },
      }
    })
    .state('workshop',{
      url: "/workshop",
      views: {
        "mainView" : {
          templateUrl: 'views/workshop/index.html',
          controller: 'WorkshopCtrl'
        }
      }
    })
    .state('workshop.dash', {
      url: "/dash",
      views: {
        "workshopView@workshop": {
          templateUrl: 'views/workshop/dash.html',
          controller: 'WsdashboardCtrl'
        },
      }
    })
    .state('workshop.tree', {
      url: "/tree",
      views: {
        "workshopView@workshop": {
          templateUrl: 'views/workshop/tree.html',
          controller: 'TreeCtrl'
        },
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
    });


    eehNavigationProvider
    .menuItem('workshop.dashboard', {
        text: 'Deashboard',
        state: 'workshop.dash',
        iconClass: 'fa-home'
    })
    .menuItem('workshop.tree', {
        text: 'Trees',
        state: 'workshop.tree',
        iconClass: 'fa-tree'
    });


  }).constant('myConfig',{
    'backend': 'http://ec2-52-25-100-45.us-west-2.compute.amazonaws.com:8080/api/'
  });
