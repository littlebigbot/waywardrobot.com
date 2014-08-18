define([
  'angular',
  'app/app',
  'app/providers/comics',
  'app/providers/currentComic'
], function(angular, app, comicsFactory) {
  'use strict';

  /**
   * @class ComicCtrl
   * @classdesc Controller for the comic view
   * @ngInject
   */
  var ComicCtrl = function($stateParams, comicsFactory, currentComicService) {
    var _this = this;

    comicsFactory.getComic($stateParams.id)
      .then(function (response) {
        _this.comic = response.data[0];
      }, function (error) {
        console.log(error);
      });

  }

  return app.controller('ComicCtrl', ComicCtrl);
});
