define([
  'app/app',
  'app/providers/comics',
  'jquery'
], function(app, comicsFactory) {
  'use strict';

  /**
   * @class ArchivesCtrl
   * @classdesc Controller for the archives view
   * @ngInject
   */
  var ArchivesCtrl = function ($scope, comicsFactory, environment) {
    var _this = this;

    if(typeof _this.comics === 'undefined') {
      comicsFactory.getComics()
        .then(function (response) {
          _this.comics = response.data;
        }, function (error) {
          console.log(error);
        });
    }
  }

  return app.controller('ArchivesCtrl', ArchivesCtrl);
});
