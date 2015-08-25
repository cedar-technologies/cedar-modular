
 (function() {
     'use strict';

    angular
        .module('app.widget')
        .directive('cdInfoPanel', cdInfoPanel);

   function cdInfoPanel() {
       var directive = {
        restrict: 'E',
        templateUrl: 'views/widget/infoPanel/infoPanel.html',
        scope: '=',
        link: linkFunc,
        controller: Controller,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      function linkFunc(scope, el, attr, ctrl) {
          el.parent().draggable();
      };

    };

    Controller.$inject = ['$scope'];


    function Controller($scope) {

      var vm = this;

      $scope.selected = {
        item: $scope.items[0]
      };
    };

})();
