define([
  'angular',
  'angular-ui-router',
  'app/providers/config'
], function(angular) {
    'use strict';

    var app = angular.module('app', [
      'ui.router',
      'config'
    ]);

    return app;
});
