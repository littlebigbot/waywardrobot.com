define([
  'app/app',
  'showdown'
], function(app) {
  'use strict';

  var markdown = function () {
    var converter = new Showdown.converter();
    return function(input) {
      if(typeof input === 'undefined') return '';
      return converter.makeHtml(input);
    }
  };

  return app.filter('markdown', markdown);
});
