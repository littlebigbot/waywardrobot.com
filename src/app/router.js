define([
  'app/app',
  'app/controllers/comic',
  'app/controllers/archives',
  'app/controllers/comic-edit',
  'app/controllers/comic-create'
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
      })
      .state('comic-create', {
        url: '/create',
        templateUrl: 'app/partials/comic-edit.html',
        controller: 'ComicCreateCtrl as ctrl',
        data: {
          pageTitle: 'Create Comic'
        }
      });
    // $locationProvider.html5Mode(true);
  }

  return app.config(router);
});
