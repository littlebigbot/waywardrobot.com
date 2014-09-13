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
  var ComicEditCtrl = function($state, $scope, $rootScope, $stateParams, comicsFactory) {
    var _this = this;
    $scope.id = $stateParams.id;

    $rootScope.currentPageTitle = '';

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
      $rootScope.currentPageTitle = $rootScope.data.comic.title;
    }
    else {
      comicsFactory.getComic($scope.id)
        .then(function (response) {
          $rootScope.data.comic = response.data[0];
          $rootScope.data.currentPageTitle = $rootScope.data.comic.title;
          $scope.id = $rootScope.data.comic.id;
        }, function (error) {
          console.log(error);
        });
    }

    _this.$scope = $scope;
    _this.$rootScope = $rootScope;
    _this.$state = $state;
  };

  return app.controller('ComicEditCtrl', ComicEditCtrl);
});
