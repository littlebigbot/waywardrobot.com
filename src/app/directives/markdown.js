define([
  'app/app',
  'showdown'
], function(app) {
  'use strict';

  var markdown = function () {
    var converter = new Showdown.converter();
    return {
      restrict: 'A',
      scope: { link:'@' },
      link: function (scope, element, attrs) {
        var htmlText = converter.makeHtml(element.html());
        element.html(htmlText);
      }
    };
  };

  return app.directive('markdown', markdown);
});
