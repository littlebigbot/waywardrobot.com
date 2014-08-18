define([
  'angular',
  'angular-ui-router',
  'app/providers/config'
], function(angular) {
    'use strict';

    var app = angular.module('app', [
      'ui.router',
      'config'
    ]).run(function($rootScope){
      $rootScope.$on('$stateChangeStart',
      // function(event, toState, toParams, fromState, fromParams){
      function(event, toState, toParams, fromState, fromParams){
        if(toState.name !== 'comic' && toState.name != 'index') {
          $rootScope.currentPageTitle = toState.data.pageTitle
        }
      })
    });

    return app;
});
