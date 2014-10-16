//Need some sort of setup task to link dist/fonts -> src/fonts and dist/images/comics -> src/images/comics
gulp.task('symlink', function() {
  gulp.src(paths.build + 'fonts')
    .pipe(symlink(paths.src + 'fonts'));

  gulp.src(paths.build + 'images/comics')
    .pipe(symlink(paths.src + 'images/comics'));

});
