(function() {
  'use strict';

  angular
  .module('stakeholder.core')
  .controller('LayoutController', Controller);

  Controller.$inject = [];

  function Controller() {
    var vm = this;

    vm.sidebarmenu = {
      name: 'stakeholder',
      navclass: "navbar-inverse",
      searchInputIsVisible: false,
      menuItemCollapsedIcon: "fa-arrow-circle-o-down",
      menuItemExpandedIcon: "fa-arrow-circle-o-left",
      sidebarCollapsedIcon: "fa-arrow-right",
      sidebarExpandedIcon: "fa-arrow-left"
    };

    activate();

    function activate() {

    }
  }
})();
