define([
  'app/app',
  'app/providers/comics-factory'
], function(app, comicsFactory) {
  'use strict';

  /**
   * @class ArchivesCtrl
   * @classdesc Controller for the archives view
   * @ngInject
   */
  var ArchivesCtrl = function ($rootScope, comicsFactory) {
    var _this = this;

    if(!$rootScope.data.comics.length) {
      comicsFactory.fetchComics()
        .then(function (response) {
          $rootScope.data.comics = response.data;
        }, function (error) {
          console.log(error);
        });
    }
  }

  return app.controller('ArchivesCtrl', ArchivesCtrl);
});
