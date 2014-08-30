define([
  'angular',
  'app/app',
  'app/providers/comics-factory'
], function(angular, app) {
  'use strict';

  /**
   * @class ComicCtrl
   * @classdesc Controller for the comic view
   * @ngInject
   */
  var ComicCtrl = function($state, $scope, $rootScope, $stateParams, comicsFactory) {
    var _this = this;
    var id = $stateParams.id;

    $rootScope.currentPageTitle = '';
    if($rootScope.data.comics.length) {
      $rootScope.data.comics.some(function(comic, i) {
        if(comic.id === id) {
          return $rootScope.data.comic = comic;
        }
      });
      $rootScope.currentPageTitle = $rootScope.data.comic.title;
    }
    else {
      comicsFactory.getComic(id)
        .then(function (response) {
          $rootScope.data.comic = response.data[0];
          $rootScope.data.currentPageTitle = $rootScope.data.comic.title;
        }, function (error) {
          console.log(error);
        });
    }

    console.log($state);
    // $rootScope.broadcast('adjustSidebar');

    $scope.$on('previousComic', function(event) {
      $rootScope.data.comics.some(function(comic, i) {
        if(comic.id === $rootScope.data.comic.id) {
          if(i - 1 > 0) {
            var prevComic = $rootScope.data.comics[i - 1];
            $state.go('comic', {id: prevComic.id, slug: prevComic.slug});
          }
          else {
            return i;
          }
        }
      });
    });

    $scope.$on('nextComic', function(event) {
      $rootScope.data.comics.some(function(comic, i) {
        if(comic.id === $rootScope.data.comic.id) {
          if(i + 1 < $rootScope.data.comics.length) {
            var nextComic = $rootScope.data.comics[i + 1];
            $state.go('comic', {id: nextComic.id, slug: nextComic.slug});
          }
          else {
            return i;
          }
        }
      });
    });

  }

  return app.controller('ComicCtrl', ComicCtrl);
});
