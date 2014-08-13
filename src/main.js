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
    'app/controllers/comic'
  ]
});

require(['angular', 'app/app', 'app/router'], function (angular) {
  angular.bootstrap(document, ['app']);
});
