(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('cdFilterControl', cdFilterControl);

    function cdFilterControl() {
        var directive = {
            restrict: 'E',
            templateUrl: 'views/widgets/cd-filter-control.html',
            scope: {
              'control': '='
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm'
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['$scope'];

    function Controller($scope) {
        var vm = this;

        vm.name = '';

        activate();

        function activate() {
          vm.name = $scope.control.title + 'control'
        }
    }
})();
