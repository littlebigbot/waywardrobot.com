gulp.task('config-replace', ['scripts'], function(){
  gulp.src([paths.build + 'js/main.js'])
    .pipe(wait(1000))
    .pipe(replace(/environments\.development/g, 'environments.production'))
    .pipe(gulp.dest(paths.build + 'js'));
});
