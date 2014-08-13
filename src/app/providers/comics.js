  // This factory gets stripped down data for comics
  // (thumbnails, title, series, #, date, tags.
  // Basically everything but comments/post
  // though we might be able to afford that?

define(['app/app'], function(app) {
  var comicsFactory = function ($q, $http) {
    return {
      getComics: function () {
        var deferred  = $q.defer(),
          httpPromise = $http.get('/api/comics.json');

        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      },
      getComic: function (id) {

        var deferred  = $q.defer(),
          httpPromise = $http.get('/api/comic.json' + (typeof id !== 'undefined' ? '/' + id : '' ));

        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      }
    }
  }

  comicsFactory.$inject = ['$q', '$http'];

  app.factory('comicsFactory', comicsFactory);
});
