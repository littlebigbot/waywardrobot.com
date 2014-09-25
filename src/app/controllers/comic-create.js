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
  var ComicCreateCtrl = function($scope, comicsPersister) {
    var _this = this;

    $scope.save = function(comic) {
      return _this.save(comic);
    }
    _this.comicsPersister = comicsPersister;
  };

  ComicCreateCtrl.prototype = {
    save: function(comic) {
      var _this = this;
      _this.comicsPersister.updateComic(comic);
    }
  };

  return app.controller('ComicCreateCtrl', ComicCreateCtrl);
});
