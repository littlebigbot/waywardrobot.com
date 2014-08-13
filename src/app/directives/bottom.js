define([
  'app/app'
], function(app) {
  'use strict';

  var bottomDirective = function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: 'app/partials/bottom.html',
      link: function () {

      }
    };
  }

  return app.directive('bottom', bottomDirective);
});
