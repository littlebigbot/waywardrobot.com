requirejs.config({
  paths: {
    'angular': 'vendor/angular/angular',
    'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
    'jquery': 'vendor/jquery/dist/jquery.min',
    'bootstrap': 'vendor/bootstrap-sass/dist/js/bootstrap.min'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-ui-router': {
      deps: [
        'angular'
      ]
    },
    'bootstrap': {
      deps: [
        'jquery'
      ]
    },
    'jquery': {
      exports: '$'
    }
  },
  deps: [
    // Adding directives hurr
    'app/directives/bottom',
    'app/directives/sidebar',
    'app/directives/topnav',
    'app/directives/scroller',
    'app/directives/updateTitle'
  ]
});

require([
  'angular',
  'app/router'
], function (angular) {
  angular.bootstrap(document, ['app']);
});
