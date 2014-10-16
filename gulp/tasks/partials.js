gulp.task('partials', function() {
  if(isProd) {
    gulp.src([
      paths.app + 'partials/**/*.html'
    ])
      .pipe(templateCache('templates.js', {
        module: 'app'
      }))
      .pipe(gulp.dest(paths.build + 'js/'));
  }
});
