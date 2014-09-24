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
    $scope.id = $stateParams.id;

    $rootScope.data.currentPageTitle = '';

    $scope.$watch('id', function(newId, oldId) {
      $scope.isFirst = _this.isFirst();
      $scope.isLast = _this.isLast();
    });

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
      $rootScope.data.currentPageTitle = $rootScope.data.comic.title;
    }
    else {
      comicsFactory.getComic($scope.id)
        .then(function (response) {
          $rootScope.data.comic = response.data[0];
          $rootScope.data.currentPageTitle = $rootScope.data.comic.title;
          $scope.id = $rootScope.data.comic.id;
          $scope.isFirst = _this.isFirst();
          $scope.isLast = _this.isLast();
        }, function (error) {
          console.log(error);
        });
    }

    $scope.$on('nextComic', function(event) {
      _this.nextComic(event);
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

    _this.$scope = $scope;
    _this.$rootScope = $rootScope;
    _this.$state = $state;
  }

  ComicCtrl.prototype = {
    isFirst: function(id) {
      if(!this.$rootScope.data.comics.length) {
        return false;
      }
      var comicsLength = this.$rootScope.data.comics.length;
      if(typeof id === 'undefined') id = this.$rootScope.data.comics[comicsLength - 1].id;
      return (this.$scope.id === id);
    },
    isLast: function(id) {
      if(!this.$rootScope.data.comics.length) {
        return false;
      }
      if(typeof id === 'undefined') id = this.$rootScope.data.comics[0].id;
      return (this.$scope.id === id);
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
