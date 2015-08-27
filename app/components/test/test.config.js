(function() {
    'use strict';

    var core = angular.module('cedarApp.test');

    core.config(function (
      $stateProvider,
      $urlRouterProvider) {

      $stateProvider
      .state('test', {
        url: "/test",
        views: {
          "mainView": {
            templateUrl: '/test.html',
            controller: 'TestCtrl'
          }
        }
      });


    });

})();
