define([
  'app/app'
], function(app) {
  'use strict';

  var Session = function () {
    this.create = function (sessionId, userId, userRole) {
      this.id = sessionId;
      this.userId = userId;
      this.userRole = userRole;
    };
    this.destroy = function () {
      this.id = null;
      this.userId = null;
      this.userRole = null;
    };
    return this;
  }

  return app.service('Session', Session);

});
