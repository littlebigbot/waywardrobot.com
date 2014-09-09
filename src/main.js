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
    'app/directives/lazy-load-src',
    'app/directives/comic-navigation',
    // Not a directive, but lazy load shit is weird
    // @TODO: Don't have jquery as dep here
    'jquery'
  ]
});

require([
  'angular',
  'app/router',
  'app/controllers/app'
], function (angular) {
  angular.bootstrap(document, ['app']);
});
