/**
* @ngdoc object
* @name cedarApp.core
* @description
* the core module is used to register all dependencies for the cedar application
*
* @requires ngAnimate
* @requires ngCookies
* @requires ngResource
* @requires ngRoute
* @requires ngSanitize
* @requires ngTouch
* @requires ui.router
* @requires ui.bootstrap
* @requires angular-loading-bar
* @requires eehNavigation
* @requires pascalprecht.translate
* @requires uiGmapgoogle-maps
* @requires ui.slider
**/

(function() {
    'use strict';

    angular
        .module('cedarApp.core', [
            /*
            * Angular Modules
            */
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            /*
            * Our reusable croos app
            */


            /*
            * #rd party modules
            */
            'ui.router',
            'ui.bootstrap',
            'angular-loading-bar',
            'eehNavigation',
            'pascalprecht.translate',
            'uiGmapgoogle-maps',
            'ui.slider'
        ]);
})();
