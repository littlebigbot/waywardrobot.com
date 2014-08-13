define([
  'app/app'
  'app/controllers/sidebar'
], function(app, SidebarCtrl) {
  'use strict';

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

  return app.directive('sidebar', sidebarDirective);
});
