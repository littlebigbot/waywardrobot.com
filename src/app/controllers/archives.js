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

  }

  return app.controller('ArchivesCtrl', ArchivesCtrl);
});
