define([
  'app/app'
], function(app) {
  'use strict';

  // This factory gets stripped down data for comics
  // (thumbnails, title, series, #, date, tags.
  // Basically everything but comments/post
  // though we might be able to afford that?

  var comicsPersister = function($http, environment, $rootScope, $state) {
    var urlBase = environment.api + '/comics';
    this.updateComic = function(updatedComic) {
      // @TODO: hookup persistence right.
      $rootScope.data.comics.some(function(comic, i) {
        if(comic.id === $rootScope.data.comic.id) {
          return $rootScope.data.comics[i] = $rootScope.data.comic;
        }
      });
      $state.go('comic',{id:$rootScope.data.comic.id, slug: $rootScope.data.comic.slug});
      console.log($rootScope.data.comic);
      return $http.post(urlBase + '/' + $rootScope.data.comic.id, $rootScope.data.comic);
    },
    this.addComic = function(comic) {
      // return $http.put(urlBase, comic);
    },
    this.deleteComic = function(id) {
      // return $http.delete(urlBase, + '/' + id);
    }
  };

  app.service('comicsPersister', comicsPersister);
});
