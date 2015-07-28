'use strict';

/**
 * @ngdoc directive
 * @name cedarTechWebApp.directive:cdBuildingDetails
 * @description
 * # cdBuildingDetails
 */
angular.module('cedarTechWebApp')
  .directive('cdContactForm', function () {
    return {
      templateUrl: 'views/contact/templates/contactForm.html',
      restrict: 'E',
      scope: {
        contact: '='
      }
    };
  });
