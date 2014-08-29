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
  var ComicCtrl = function($rootScope, $stateParams, comicsFactory) {
    var _this = this;
    var id = $stateParams.id;

    $rootScope.currentPageTitle = '';
    console.log($rootScope.data.comics);
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

  }

  return app.controller('ComicCtrl', ComicCtrl);
});
