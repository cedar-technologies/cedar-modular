(function() {
    'use strict';

    angular
        .module('cedarApp.test')
        .controller('TestController', Controller);

    Controller.$inject = ['$scope', '$interval'];

    function Controller($scope, $interval) {
        var vm = this;

        vm.submitForm = submitForm;

        activate();

        $scope.total = 0;


        $scope.incremental = "{'background-color':'blue'}";

        var stop;
        $scope.fight = function() {
          // Don't start a new fight if we are already fighting
          if ( angular.isDefined(stop) ) return;
          var z = 150;
          stop = $interval(function() {
            if ($scope.total < 100) {
              $scope.total ++;
              $scope.incremental = '{width: ' +  $scope.total + '%;}';
            } else {
              $scope.stopFight();
            }
            z = z - 100;
          }, z);
        };

        $scope.defight = function() {
          // Don't start a new fight if we are already fighting
          if ( angular.isDefined(stop) ) return;
          var z = 150;
          stop = $interval(function() {
            if ($scope.total > 0) {
              $scope.total --;
              $scope.incremental = '{width: ' +  $scope.total + '%;}';
            } else {
              $scope.stopFight();
            }
          }, z);
        };

        $scope.stopFight = function() {
          if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
          }
        };

        $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopFight();
        });

        function activate() {

        }

        function submitForm(isValid){

          alert(isValid);

        }

    }
})();
