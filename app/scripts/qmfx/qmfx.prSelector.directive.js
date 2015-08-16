(function() {
    'use strict';

    angular
        .module('qmfx.module')
        .directive('prSelector', prSelector);

    function prSelector() {
        var directive = {
            restrict: 'E',
            scope: {
              'selectorConfig': '=',
              'save': '&onSave',
              'execute': '&onExecute'
            },
            templateUrl: 'views/qmfx/prSelector.html',
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
