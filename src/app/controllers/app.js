define([
  'app/app',
  'app/providers/user-roles',
  'app/providers/auth-service'
], function(app) {
  'use strict';

  /**
   * @class AppCtrl
   * @classdesc Controller for the comic view
   * @ngInject
   */
  var AppCtrl = function($scope, USER_ROLES, AuthService) {
    var _this = this;
    $scope.navigate = function($event) {
      _this.navigate($event);
    }

    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };

    _this.$scope = $scope;
  };

  // @TODO: Only call this when it's on a comics state
  AppCtrl.prototype.navigate = function($event) {
    var keycode = $event.keyCode;

    if(keycode === 37) {
      this.$scope.$broadcast('previousComic');
    }
    else if(keycode === 39) {
      this.$scope.$broadcast('nextComic');
    }

  };

  return app.controller('AppCtrl', AppCtrl);
});
