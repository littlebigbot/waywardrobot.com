gulp.task('styles', function() {
  gulp.src([
    paths.app + 'styles/app.scss'
  ])
    .pipe(sass())
    .on('error', function(err) { console.log(err.message); })
    .pipe(gulp.dest(isProd ? paths.build + 'css/' : paths.src + 'css/'));
});
