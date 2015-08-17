(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('cdFilterPanel', cdFilterPanel);

    function cdFilterPanel() {
        var directive = {
            restrict: 'E',
            scope: {
              'selectorConfig': '=',
              'events': '=',
            },
            templateUrl: 'views/widgets/cd-filter-panel.html',
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

        activate();

        function activate() {

        }

    }
})();
