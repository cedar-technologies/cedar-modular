(function() {
    'use strict';

    angular
        .module('app.core', [
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
