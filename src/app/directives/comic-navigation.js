define([
  'app/app',
  'jquery'
], function(app, $) {
  'use strict';

  var comicNavigationDirective = function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: 'app/partials/comic-navigation.html',
      link: function ($scope) {
        // @TODO: NOT THIS MESS.
        var win = $(window);
        var nav = $('.navigation');
        var previous = $('.navigation .previous');
        var next = $('.navigation .next');
        var theComic = $('.the-comic');
        var header = $('header');
        var previousLeft = previous.offset().left;
        var arrowOriginalOffset = parseInt(previous.css('left'));
        var nextRight = win.width() - next.offset().left - next.width();
        var headerHeight = header.height();
        var theComicOffsetTop = 0;
        var navArrowOffsetTop = 0;

        var theComicLeft = function() {
          return theComic.offset().left;
        }
        var theComicRight = function() {
          return win.width() - (theComic.offset().left + theComic.width()) - next.width();
        }

        win.on(
          'resize',
          function() {
            nextRight =  theComicRight() + arrowOriginalOffset - next.width();
            previousLeft = theComicLeft() + arrowOriginalOffset;
            win.trigger('scroll');
          }
        );

        win.on(
          'scroll',
          function(){

            navArrowOffsetTop = (navArrowOffsetTop === 0)  ? previous.offset().top : navArrowOffsetTop;
            theComicOffsetTop = (theComicOffsetTop === 0)  ? theComic.offset().top : theComicOffsetTop;
            var navTop = navArrowOffsetTop - theComicOffsetTop + headerHeight;

            if(win.scrollTop() >= theComicOffsetTop - headerHeight) {
              nav
                .addClass('fixed');

              previous
                .css({
                  'top': navTop,
                  'left': previousLeft
                });

              next
                .css({
                  'top': navTop,
                  'right': nextRight
                });

            }
            else {
              nav
                .removeClass('fixed');

              previous
                .removeAttr('style');
              next
                .removeAttr('style');
            }
          }
        );

        $scope.$on(
          '$destroy',
          function() {
            win
              .off('scroll')
              .off('resize');
          }
        );
      }
    };
  }

  return app.directive('comicNavigation', comicNavigationDirective);
});
