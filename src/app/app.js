define([
  // Note to self, don't include anything that
  // depends on 'app/app'
  'angular',
  'angular-ui-router',
  'app/providers/config'
], function(angular) {
    'use strict';

    var app = angular.module('app', [
      'ui.router',
      'config'
    ])
      .run(function($rootScope){
        $rootScope.data = {};
        $rootScope.data.comics = {};
        $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
          if(toState.name !== 'comic' && toState.name != 'index') {
            $rootScope.data.currentPageTitle = toState.data.pageTitle;
          }
        });
      });

    return app;
});
