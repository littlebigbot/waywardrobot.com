define([
  'app/app'
], function(app) {
  'use strict';

  // This factory gets stripped down data for comics
  // (thumbnails, title, series, #, date, tags.
  // Basically everything but comments/post
  // though we might be able to afford that?

  var currentComicService = function ($stateParams) {
    console.log($stateParams)
    var currentComic = $stateParams.id;

    return {
        getId: function () {
            return currentComic;
        },
        setId: function(value) {
            currentComic = value;
        }
    };
  }

  app.factory('currentComicService', currentComicService);
});
