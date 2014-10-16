gulp.task('watch', function() {

  watch({
    glob: paths.app + 'partials/**/*.html',
    name: 'partials watcher'
  }, function(files) {
    if(isProd) return gulp.start('partials');
  })
    .pipe(gulpIf(isProd, wait(1000)))
    .pipe(connect.reload());

  watch({
    glob: paths.app + 'styles/**/*.scss',
    name: 'styles watcher'
  }, function(files) {
    return gulp.start('styles');
  })
    .pipe(wait(1000))
    .pipe(connect.reload());

  watch({
    glob: paths.app + '**/*.js',
    name: 'scripts watcher'
  }, function(files) {
      if(isProd) return gulp.start('scripts')
  })
    .pipe(gulpIf(isProd, wait(1000))) // Because tasks don't finish when they say
    .pipe(connect.reload());
});
