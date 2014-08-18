define([
  'app/app'
], function(app) {
  'use strict';

  // This factory gets stripped down data for comics
  // (thumbnails, title, series, #, date, tags.
  // Basically everything but comments/post
  // though we might be able to afford that?

  var comicsFactory = function ($q, $http, environment) {
    return {
      getComics: function (page, number) {

        var deferred    = $q.defer();

        var parameters = '';

        if(typeof page !== 'undefined') {
          if(typeof number !== 'undefined') {
            number = 10;
          }
          parameters = '/' + number + '/' + page;
        }

        var httpPromise = $http.get(environment.api + '/comics' + parameters);

        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      },
      getComic: function (id) {

        var deferred    = $q.defer(),
            httpPromise = $http.get(environment.api + '/comic' + (typeof id !== 'undefined' ? '/' + id : '' ));

        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      }
    }
  }

  app.factory('comicsFactory', comicsFactory);
});
