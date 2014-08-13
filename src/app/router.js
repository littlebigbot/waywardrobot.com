define([
  'app/app',
  'app/controllers/comic'
  ], function(app) {
  'use strict';

  var router = function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'app/partials/comic.html',
        controller: 'ComicCtrl as comic'
      })
    $locationProvider.html5Mode(true);
  }

  return app.config(router);
});
