requirejs.config({
  paths: {
    'angular': 'vendor/angular/angular',
    'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-ui-router': {
      deps: [
        'angular'
      ]
    }
  },
  deps: [
    'app/directives/bottom',
    'app/directives/sidebar',
    'app/directives/topnav'
  ]
});

require([
  'angular',
  'app/router'
], function (angular) {
  angular.bootstrap(document, ['app']);
});
