gulp.task('copy-images', function() {
  gulp.src([
    paths.src + 'images/**/*.{png,gif,jpg,jpeg,svg,ico}'
  ])
    .pipe(gulp.dest(paths.build + 'images'));
});
