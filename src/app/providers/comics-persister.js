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
      return $http.post(urlBase + '/' + $rootScope.data.comic.id, {comic:$rootScope.data.comic});
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

// To test update
// curl -X POST http://localhost:9001/api/v1/comics/5 -d '{"comic":{"comic_full": "testing_f.jpg","comic_medium": "testing_m.jpg","comic_thumb": "testing_t.jpg","id": "5","post_content": "Lorem ipsum Laborum in ut laboris amet amet enim in officia magna labore pariatur Duis est sed consectetur occaecat eiusmod dolore dolor nostrud Excepteur consequat fugiat officia.","post_date": "2012-06-03","slug": "lorem-ipsum-sint-minim-cillum-eiusmod-cupidatat","subtitle": "Lorem ipsutdsfd das","title": "4th Down"}}' -H 'Content-Type: application/json' -w "\n"
