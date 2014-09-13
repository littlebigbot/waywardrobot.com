define([
  'app/app',
  'app/controllers/comic',
  'app/controllers/archives',
  'app/controllers/comic-edit'
  ], function(app) {
  'use strict';

  var router = function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $stateProvider
      .state('index', {
        url: '',
        templateUrl: 'app/partials/comic.html',
        controller: 'ComicCtrl as ctrl'
      })
      .state('comic', {
        url: '/:id/:slug',
        templateUrl: 'app/partials/comic.html',
        controller: 'ComicCtrl as ctrl'
      })
      .state('comic-edit', {
        url: '/edit/:id/:slug',
        templateUrl: 'app/partials/comic-edit.html',
        controller: 'ComicEditCtrl as ctrl'
      })
      .state('archives', {
        url: '/archives',
        templateUrl: 'app/partials/archives.html',
        controller: 'ArchivesCtrl as ctrl',
        data: {
          pageTitle: 'Archives'
        }
      });
    // $locationProvider.html5Mode(true);
  }

  return app.config(router);
});
