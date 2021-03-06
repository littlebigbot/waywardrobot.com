define([
  // Note to self, don't include anything that
  // depends on 'app/app'
  'angular',
  'angular-ui-router',
  'app/providers/config',
  'angular-sanitize',
  'angular-touch'
], function(angular) {
    'use strict';

    var app = angular.module('app', [
      'ui.router',
      'config',
      'ngSanitize',
      'ngTouch'
    ])
      .run(function($rootScope){
        $rootScope.data = {};
        $rootScope.data.comics = {};
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
          if(toState.name !== 'comic' && toState.name !== 'index' && toState.name !== 'comic-edit') {
            $rootScope.data.currentPageTitle = toState.data.pageTitle;
          }
        });
      });

    return app;
});
