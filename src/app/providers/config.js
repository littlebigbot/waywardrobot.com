define([
  'angular'
], function(angular) {
  'use strict';

  var config = angular.module('config', []);

  var environments = {
    development: {
      'api': 'http://localhost:9001/api/v1'
    },
    production: {
      'api': 'http://api.waywardrobot.com'
    }
  };

  var configs = {
    title: 'Wayward Robot',
    pageSize: 100
  };

  var environment = environments.development;

  return config.constant('environment', environment);
});
