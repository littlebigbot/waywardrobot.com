define([
  'app/app'
], function(app) {
  'use strict';

  /**
   * @class AppCtrl
   * @classdesc Controller for the comic view
   * @ngInject
   */
  var AppCtrl = function($scope) {
    var _this = this;
    $scope.navigate = function($event) {
      _this.navigate($event);
    }

    _this.$scope = $scope;
  };

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
