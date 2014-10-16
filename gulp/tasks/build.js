gulp.task('build', function() {
  GLOBAL.isProd = true;
  gulp.start('styles')
  gulp.start('scripts')
  gulp.start('html')
  gulp.start('copy-images')
  gulp.start('config-replace')
});
