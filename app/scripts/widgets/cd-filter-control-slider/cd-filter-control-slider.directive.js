(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('cdFilterControlSlider', cdFilterControlSlider);

    function cdFilterControlSlider() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'views/widgets/cd-filter-control-slider.html',
            scope: {
              'options':'='
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm'
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = [];

    function Controller() {
        var vm = this;

        vm.value = 1;



        activate();

        function activate() {



        }
    }
})();
