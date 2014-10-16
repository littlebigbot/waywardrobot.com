gulp.task('html', function() {
  gulp.src(paths.src + 'index.html')
    .pipe(usemin())
    .pipe(gulp.dest(paths.build));
});
