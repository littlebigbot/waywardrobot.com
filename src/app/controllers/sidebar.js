define([
  'app/app',
  'app/providers/comics',
  'app/providers/currentComic'
], function(app, comicsFactory) {
  'use strict';

  /**
   * @class SidebarCtrl
   * @classdesc Controller for the Sidebar view
   * @ngInject
   */
  var SidebarCtrl = function ($scope, comicsFactory, environment, currentComicService) {
    var _this = this;

    _this.page = 0;

    console.log(currentComicService.getId());

    $scope.loadMoreComics = function(){
      _this.loadMoreComics();
    }
    if(typeof _this.comics === 'undefined') {
      comicsFactory.getComics(_this.page, 10)
        .then(function (response) {
          _this.comics = response.data;
        }, function (error) {
          console.log(error);
        });
    }
  }

  SidebarCtrl.prototype.loadMoreComics = function() {

  }

  return app.controller('SidebarCtrl', SidebarCtrl);
});
