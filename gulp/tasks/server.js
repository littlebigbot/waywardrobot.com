gulp.task('server', function() {
  connect.server({
    livereload: true,
    root: isProd ? paths.build : paths.src
  });
});
