gulp.task('copy-fonts', function() {
  gulp.src([
    //Glob format important to keep font-awesome folder
    paths.src + 'vendor/**/font-awesome/fonts/*{eot,svg,ttf,woff}'
  ])
      .pipe(gulp.dest(paths.build + 'fonts'));
});
