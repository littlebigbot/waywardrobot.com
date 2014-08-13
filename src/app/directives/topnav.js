define([
  'app/app'
], function(app) {
  'use strict';

  var topNavDirective = function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: 'app/partials/topnav.html',
      link: function () {

      }
    };
  }

  return app.directive('topNav', topNavDirective);
});
