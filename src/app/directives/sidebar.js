var sidebarDirective = function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: 'app/partials/sidebar.html',
    controller: SidebarCtrl,
    controllerAs: 'comics',
    link: function () {

    }
  };
}

angular
  .module('app')
  .directive('sidebar', sidebarDirective);