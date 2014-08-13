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

angular
  .module('app')
  .directive('topNav', topNavDirective);
