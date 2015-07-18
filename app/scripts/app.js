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
    'angular-loading-bar'
  ]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");


    $stateProvider
    .state('home', {
      url: "/",
      views: {
        "mainView": {
          template: 'views/main.html',
          controller: 'MainCtrl'
        },
      }
    })
    .state('about', {
      url: "/about",
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
    });

  });
