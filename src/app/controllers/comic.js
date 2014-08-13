define([
  'app/app',
  'app/providers/comics'
], function(app, comicsFactory) {
  'use strict';

  /**
   * @class ComicCtrl
   * @classdesc Controller for the comic view
   * @ngInject
   */
  var ComicCtrl = function ($scope, comicsFactory) {
    // // $http.get('/api/comic') when API is implemented
    // $http.get('/api/comics.json')
    //   .success(function(data){
    //     // $scope.comic = data.comic; when API is implemented
    //     $scope.comic = data[0];
    //   });

    // alert('what')

    comicsFactory.getComic()
      .then(function (response) {
        $scope.currentComic = response.data;
        window.r = response;
      }, function (error) {
        console.log(error);
      });
  }

  return app.controller('ComicCtrl', ComicCtrl);
});
