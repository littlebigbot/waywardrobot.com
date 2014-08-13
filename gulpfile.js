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
    sass          = require('gulp-sass'),
    bourbon       = require('node-bourbon').includePaths,
    gif           = require('gulp-if'),
    argv          = require('yargs').argv;

// Config
var paths = {
  src: 'src/',
  app: 'src/app/',
  build: 'dist/',
  ignore: {
    styles: '!./app/styles/*/_*.scss'
  }
};

// Nicer name.
if(argv.prod) {
  var isProd = argv.prod;
}

gulp.task('styles', function() {
  gulp.src([
    paths.app + 'styles/**/*.scss',
    paths.ignore.styles
  ])
    .pipe(sass({
      includePaths: ['styles'].concat(bourbon)
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(isProd ? paths.build + 'css/' : paths.app + 'styles/'));
    // .pipe(gif(isProd, rev()))
    // .pipe(gif(isProd, gulp.dest(paths.build + 'css/')))
    // .pipe(gif(isProd, rev.manifest()))
    // .pipe(gif(isProd, gulp.dest(paths.build + 'assets/')))
});

gulp.task('html', function() {
  gulp.src(paths.src + 'index.html')
    .pipe(usemin({
      css: ['styles'],
      js: ['scripts']
    }))
    .pipe(gulp.dest(paths.build));
});

gulp.task('scripts', function() {
  rjs({
    mainConfigFile: 'src/main.js',
    baseUrl: 'src',
    name: 'main',
    out: 'main.js'
  })
    .pipe(uglify({
          mangle: false
        }))
    .pipe(ngAnnotate())
    // .pipe(wrapper({
    //   header: '(function(){ \'use strict\';',
    //   footer: '})();'
    // }))
    .pipe(gulp.dest(paths.build + 'js/'));
});

gulp.task('server', function() {
    connect.server({
        livereload: true,
        root: isProd ? paths.build : paths.src
    });
});


gulp.task('watch', ['watch-styles', 'watch-scripts', 'watch-partials']);

gulp.task('partials', function() {
  gulp.src([
    paths.app + 'partials/**/*.html'
  ])
    .pipe(templateCache('templates.js', {
      module: 'app'
    }))
    .pipe(gulp.dest(paths.build + 'js/'))
});

gulp.task('watch-partials', function() {
  watch({
    glob: paths.app + 'partials/**/*.html',
    name: 'partials watcher',
    verbose: true
  }, function(files) {
    if(isProd) return gulp.start('partials');
  })
    .pipe(gif(isProd, wait(1000)))
    .pipe(connect.reload());
});

gulp.task('watch-styles', function() {
  watch({
    glob: paths.app + 'styles/**/*.scss',
    name: 'styles watcher',
    verbose: true
    }, function(files){
      return gulp.start('styles');
    })
    .pipe(wait(1000))
    .pipe(connect.reload());
});

gulp.task('watch-scripts', function() {
  watch({
    glob: paths.src + '**/*.js',
    name: 'scripts watcher',
    verbose: true
    }, function(files){
      if(isProd) return gulp.start('scripts')
    })
    .pipe(gif(isProd, wait(1000))) // Because the 'js' task is a filthy liar
    .pipe(watch())
    .pipe(connect.reload());
});

gulp.task('build', function() {
  isProd = true;
  gulp.start('styles')
  gulp.start('scripts')
  gulp.start('html')
});

gulp.task('default', [
  'server',
  'watch'
]);
