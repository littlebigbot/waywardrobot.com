gulp.task('symlink', function() {
  gulp.src(paths.build + 'fonts/*')
    .pipe(symlink(paths.src + 'fonts/'));

  gulp.src(paths.build + 'images/comics')
    .pipe(symlink(paths.src + 'images'));

});
