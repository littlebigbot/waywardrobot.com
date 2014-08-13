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

angular
  .module('app')
  .directive('bottom', bottomDirective);
