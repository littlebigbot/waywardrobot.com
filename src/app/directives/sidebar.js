define([
  'app/app',
  'jquery',
  'app/controllers/sidebar'
], function(app, $) {
  'use strict';

  var sidebarDirective = function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: 'app/partials/sidebar.html',
      controller: 'SidebarCtrl',
      controllerAs: 'ctrl',
      link: function ($scope) {
        $scope.toggleSidebar = function(){
          $('.container').toggleClass('open-sidebar');
        };
        // $().

      }
    };
  }

  return app.directive('sidebar', sidebarDirective);
});
