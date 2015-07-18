'use strict';

/**
 * @ngdoc function
 * @name cedarTechWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cedarTechWebApp
 */
angular.module('cedarTechWebApp').controller('MainCtrl', ['$scope', function ($scope) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];


}]);
