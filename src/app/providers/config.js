define([
  'angular'
], function(angular) {

  var config = angular.module('config', []);

  var environments = {
    development: {
      'api': 'http://localhost:9001/api/v1'
    },
    production: {
      'api': 'http://api.waywardrobot.com'
    }
  };

  var environment = environments.development;

  return config.constant('environment', environment);
});
