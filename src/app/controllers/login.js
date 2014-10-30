define([
  'app/app',
  'app/providers/auth-events',
  'app/providers/auth-service',
  'app/providers/session'
], function(app) {
  'use strict';

  var LoginController = function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
      username: '',
      password: ''
    };
    $scope.login = function (credentials) {
      AuthService.login(credentials).then(function (user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };
  };

  return app.controller('LoginController', LoginController);
});

