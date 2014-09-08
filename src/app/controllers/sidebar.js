define([
  'angular',
  'app/app',
  'app/providers/comics-factory'
], function(angular, app) {
  'use strict';

  /**
   * @class SidebarCtrl
   * @classdesc Controller for the Sidebar view
   * @ngInject
   */
  var SidebarCtrl = function ($rootScope, comicsFactory, $state, $scope) {
    var _this = this;
    $scope.$state = $state;
    comicsFactory.getComics()
      .then(function(result) {
        $rootScope.data.comics = result.data;

      }, function(error) {
        console.log(error);
      });

  };

  return app.controller('SidebarCtrl', SidebarCtrl);
});
