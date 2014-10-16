gulp.task('scripts', ['partials'], function() {
  rjs({
    mainConfigFile: 'src/main.js',
    baseUrl: 'src',
    name: 'main',
    out: 'main.js'
  })
    .pipe(gulpIf(isProd, gulp.src(paths.build + 'js/templates.js')))
    .pipe(concat('main.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(ngAnnotate())
    .pipe(gulpIf(isProd, wrapper({
      header: '(function(){ \'use strict\';',
      footer: '})();'
    })))
    .pipe(gulp.dest(paths.build + 'js/'));
});
