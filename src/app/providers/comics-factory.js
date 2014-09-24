define([
  'app/app'
], function(app) {
  'use strict';

  // This factory gets stripped down data for comics
  // (thumbnails, title, series, #, date, tags.
  // Basically everything but comments/post
  // though we might be able to afford that?

  var comicsFactory = function($http, environment) {
    var urlBase = environment.api + '/comics';
    return {
      getComics: function() {
        return $http.get(urlBase)
      },
      getComic: function(id, forceFetch, successCallback, failureCallback) {
        return $http.get(urlBase + ((typeof id !== 'undefined') ? '/' + id : '/newest'));
      }
    };
  }

  app.factory('comicsFactory', comicsFactory);
});
