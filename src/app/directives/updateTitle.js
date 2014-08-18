define([
  'app/app'
], function(app) {

  var updateTitle = function($rootScope) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState, toParams, fromState, fromParams) {
          var title = 'Wayward Robot';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;
          element.text(title)
        };

        $rootScope.$on('$stateChangeStart', listener);
      }
    }
  };

  app.directive('updateTitle', updateTitle);
});
