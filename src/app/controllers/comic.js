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

    $scope.$on('nextComic', function(event) {
      this.nextComic(event);
    });

    $scope.$on('previousComic', function(event) {
      _this.prevComic(event);
    });

    $scope.nextComic = function() {
      _this.nextComic();
    };

    $scope.prevComic = function() {
      _this.prevComic();
    };

    $scope.isLast = function() {
      return _this.isLast();
    };
    $scope.isFirst = function() {
      return _this.isFirst();
    };

    _this.comicId = id;
    _this.$rootScope = $rootScope;
    _this.$state = $state;
  }

  ComicCtrl.prototype = {
    isFirst: function() {
      if(!this.$rootScope.data.comics.length) {
        return false;
      }
      var comicsLength = this.$rootScope.data.comics;
      return (this.comicId === this.$rootScope.data.comics[comicsLength - 1]);
    },
    isLast: function() {
      if(!this.$rootScope.data.comics.length) {
        return false;
      }
      return (this.comicId === this.$rootScope.data.comics[0].id);
    },
    nextComic: function(event) {
      var _this = this;
      _this.$rootScope.data.comics.some(function(comic, i) {
        if(comic.id === _this.$rootScope.data.comic.id) {
          if(i - 1 >= 0) {
            var prevComic = _this.$rootScope.data.comics[i - 1];
            return _this.$state.go('comic', {id: prevComic.id, slug: prevComic.slug});
          }
          else {
            return i;
          }
        }
      });
    },
    prevComic: function(event) {
      var _this = this;
      _this.$rootScope.data.comics.some(function(comic, i) {
        if(comic.id === _this.$rootScope.data.comic.id) {
          if(i + 1 < _this.$rootScope.data.comics.length) {
            var nextComic = _this.$rootScope.data.comics[i + 1];
            return _this.$state.go('comic', {id: nextComic.id, slug: nextComic.slug});
          }
          else {
            return i;
          }
        }
      });
    }
  };

  return app.controller('ComicCtrl', ComicCtrl);
});
