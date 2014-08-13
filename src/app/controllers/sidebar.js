/**
 * @class SidebarCtrl
 * @classdesc Controller for the sidebar view
 * @ngInject
 */
var SidebarCtrl = function ($scope, comicsFactory) {

	if(typeof $scope.comics === 'undefined') {
		comicsFactory.getComics()
		  .then(function (response) {
		    $scope.comics = response.data;
		  }, function (error) {
		    console.log(error);
		  });
	}
}

SidebarCtrl.$inject = ['$scope', 'comicsFactory'];

angular
  .module('app')
  .controller('SidebarCtrl', SidebarCtrl);
