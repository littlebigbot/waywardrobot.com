define([
  'app/app'
], function(app) {
  var scroller = function() {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        elem.bind('scroll', function () {
          console.log("I was scrolled");
        });
      }
    };
  };

  return app.directive('scroller', scroller);
});
