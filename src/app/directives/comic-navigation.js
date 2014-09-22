define([
  'app/app',
  'jquery'
], function(app, $) {
  'use strict';

  var comicNavigationDirective = function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: 'app/partials/comic-navigation.html'
    };
  }

  return app.directive('comicNavigation', comicNavigationDirective);
});
