define([
  'app/app'
], function(app) {
  'use strict';

  var USER_ROLES = {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
  };

  return app.constant('USER_ROLES', USER_ROLES);

});
