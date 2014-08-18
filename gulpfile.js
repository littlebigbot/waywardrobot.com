var gulp          = require('gulp'),
    concat        = require('gulp-concat'),
    sourcemaps    = require('gulp-sourcemaps'),
    uglify        = require('gulp-uglify'),
    ngAnnotate    = require('gulp-ng-annotate'),
    watch         = require('gulp-watch'),
    wait          = require('gulp-wait'),
    connect       = require('gulp-connect'),
    wrapper       = require('gulp-wrapper'),
    rjs           = require('gulp-requirejs'),
    usemin        = require('gulp-usemin'),
    rev           = require('gulp-rev'),
    templateCache = require('gulp-angular-templatecache'),
    sass          = require('gulp-ruby-sass'),
    gulpIf        = require('gulp-if'),
    replace       = require('gulp-replace'),
    argv          = require('yargs').argv;

// Config
var paths = {
  src: 'src/',
  app: 'src/app/',
  build: 'dist/'
};

// Nicer name.
if(argv.prod) {
  var isProd = argv.prod;
}

gulp.task('styles', function() {
  gulp.src([
    paths.app + 'styles/app.scss'
  ])
      .pipe(sass())
      .on('error', function(err) { console.log(err.message); })
      .pipe(gulp.dest(isProd ? paths.build + 'css/' : paths.app + 'styles/'));
});

gulp.task('html', function() {
  gulp.src(paths.src + 'index.html')
    .pipe(usemin())
    .pipe(gulp.dest(paths.build));
});

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

gulp.task('server', function() {
  connect.server({
    livereload: true,
    root: isProd ? paths.build : paths.src
  });
});

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

gulp.task('watch-partials', function() {
  watch({
    glob: paths.app + 'partials/**/*.html',
    name: 'partials watcher'
  }, function(files) {
    if(isProd) return gulp.start('partials');
  })
    .pipe(gulpIf(isProd, wait(1000)))
    .pipe(connect.reload());
});

gulp.task('watch-styles', function() {
  watch({
    glob: paths.app + 'styles/**/*.scss',
    name: 'styles watcher'
  }, function(files) {
    return gulp.start('styles');
  })
    .pipe(wait(1000))
    .pipe(connect.reload());
});

gulp.task('watch-scripts', function() {
  watch({
    glob: paths.app + '**/*.js',
    name: 'scripts watcher'
  }, function(files) {
      if(isProd) return gulp.start('scripts')
  })
    .pipe(gulpIf(isProd, wait(1000))) // Because tasks don't finish when they say
    .pipe(connect.reload());
});

gulp.task('copy-images', function() {
  gulp.src([
    paths.src + 'images/**/*.{png,gif,jpg,jpeg,svg,ico}'
  ])
      .pipe(gulp.dest(paths.build + 'images'));
});

gulp.task('config-replace', ['scripts'], function(){
  gulp.src([paths.build + 'js/main.js'])
    .pipe(wait(1000))
    .pipe(replace(/environments\.development/g, 'environments.production'))
    .pipe(gulp.dest(paths.build + 'js'));
});


gulp.task('build', function() {
  isProd = true;
  gulp.start('styles')
  gulp.start('scripts')
  gulp.start('html')
  gulp.start('copy-images')
  gulp.start('config-replace')
});

gulp.task('default', [
  'server',
  'watch'
]);

gulp.task('watch', [
  'watch-styles',
  'watch-scripts',
  'watch-partials'
]);
