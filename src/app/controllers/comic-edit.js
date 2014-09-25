define([
  'angular',
  'app/app',
  'app/providers/comics-factory',
  'app/providers/comics-persister'
], function(angular, app) {
  'use strict';

  /**
   * @class ComicCtrl
   * @classdesc Controller for the comic view
   * @ngInject
   */
  var ComicEditCtrl = function($scope, $rootScope, $stateParams, comicsFactory, comicsPersister) {
    var _this = this;
    $scope.id = $stateParams.id;

    $rootScope.data.currentPageTitle = '';

    if($rootScope.data.comics.length) {
      if(typeof $scope.id === 'undefined') {
        $rootScope.data.comic = $rootScope.data.comics[0];
        $scope.id = $rootScope.data.comic.id;
      }
      else {
        $rootScope.data.comics.some(function(comic, i) {
          if(comic.id === $scope.id) {
            return $rootScope.data.comic = comic;
          }
        });
      }
      $scope.comic = $rootScope.data.comic;
      $rootScope.data.currentPageTitle = 'Edit ' + $rootScope.data.comic.title;
    }
    else {
      comicsFactory.getComic($scope.id)
        .then(function (response) {
          $rootScope.data.comic = response.data[0];
          $rootScope.data.currentPageTitle = 'Edit ' + $rootScope.data.comic.title;
          $scope.id = $rootScope.data.comic.id;
          $scope.comic = $rootScope.data.comic;
        }, function (error) {
          console.log(error);
        });
    }

    $scope.save = function(comic) {
      return _this.save(comic);
    }

    _this.$scope = $scope;
    _this.$rootScope = $rootScope;
    _this.comicsPersister = comicsPersister;
  };

  ComicEditCtrl.prototype = {
    save: function(comic) {
      var _this = this;
      _this.comicsPersister.updateComic(comic);
    }
  };

  return app.controller('ComicEditCtrl', ComicEditCtrl);
});
