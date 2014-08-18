define([
  'app/app'
], function(app) {
  'use strict';

  // This factory gets stripped down data for comics
  // (thumbnails, title, series, #, date, tags.
  // Basically everything but comments/post
  // though we might be able to afford that?

  var currentComicService = function () {
    var currentComic;

    return {
        getCurrentComic: function () {
            return currentComic;
        },
        setCurrentComic: function(value) {
            currentComic = value;
        },
        isCurrentComic: function(value) {
          return currentComic === value;
        }
    };
  }

  app.factory('currentComicService', currentComicService);
});
