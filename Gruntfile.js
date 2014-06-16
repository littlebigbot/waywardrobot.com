'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var config = {
      dev: 'src',
      prod: 'build'
  }

  grunt.initConfig({
      config: config,
      watch: {
          emberTemplates: {
              files: '<%= config.dev %>/scripts/app/templates/**/*.hbs',
              tasks: ['emberTemplates']
          },
          neuter: {
              files: ['<%= config.dev %>/scripts/{,*/}*.js'],
              tasks: ['neuter']
          },
          livereload: {
              options: {
                  livereload: LIVERELOAD_PORT
              },
              files: [
                  '.tmp/scripts/*.js',
                  '<%= config.dev %>/*.html',
                  '{.tmp,<%= config.dev %>}/styles/{,*/}*.css',
                  '<%= config.dev %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
              ]
          }
      },
      connect: {
          options: {
              port: 9000,
              // change this to '0.0.0.0' to access the server from outside
              hostname: 'localhost'
          },
          livereload: {
              options: {
                  middleware: function (connect) {
                      return [
                          lrSnippet,
                          mountFolder(connect, '.tmp'),
                          mountFolder(connect, config.dev)
                      ];
                  }
              }
          },
          test: {
              options: {
                  middleware: function (connect) {
                      return [
                          mountFolder(connect, 'test'),
                          mountFolder(connect, '.tmp')
                      ];
                  }
              }
          },
          prod: {
              options: {
                  middleware: function (connect) {
                      return [
                          mountFolder(connect, config.prod)
                      ];
                  }
              }
          }
      },
      open: {
          server: {
              path: 'http://localhost:<%= connect.options.port %>'
          }
      },
      clean: {
          prod: {
              files: [{
                  dot: true,
                  src: [
                      '.tmp',
                      '<%= config.prod %>/*',
                      '!<%= config.prod %>/.git*'
                  ]
              }]
          },
          server: '.tmp'
      },
      jshint: {
          options: {
              jshintrc: '.jshintrc',
              reporter: require('jshint-stylish')
          },
          all: [
              'Gruntfile.js',
              '<%= config.dev %>/scripts/{,*/}*.js',
              '!<%= config.dev %>/scripts/vendor/*',
              'test/spec/{,*/}*.js'
          ]
      },
      mocha: {
          all: {
              options: {
                  run: true,
                  urls: ['http://localhost:<%= connect.options.port %>/index.html']
              }
          }
      },
      // not used since Uglify task does concat,
      // but still available if needed
      /*concat: {
          prod: {}
      },*/
      // not enabled since usemin task does concat and uglify
      // check index.html to edit your build targets
      // enable this task if you prefer defining your build targets here
      /*uglify: {
          prod: {}
      },*/
      rev: {
          prod: {
              files: {
                  src: [
                      '<%= config.prod %>/scripts/{,*/}*.js',
                      '<%= config.prod %>/styles/{,*/}*.css',
                      '<%= config.prod %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                      '<%= config.prod %>/styles/fonts/*'
                  ]
              }
          }
      },
      useminPrepare: {
          html: '.tmp/index.html',
          options: {
              dest: '<%= config.prod %>'
          }
      },
      usemin: {
          html: ['<%= config.prod %>/{,*/}*.html'],
          css: ['<%= config.prod %>/styles/{,*/}*.css'],
          options: {
              dirs: ['<%= config.prod %>']
          }
      },
      imagemin: {
          prod: {
              files: [{
                  expand: true,
                  cwd: '<%= config.dev %>/images',
                  src: '{,*/}*.{png,jpg,jpeg}',
                  dest: '<%= config.prod %>/images'
              }]
          }
      },
      svgmin: {
          prod: {
              files: [{
                  expand: true,
                  cwd: '<%= config.dev %>/images',
                  src: '{,*/}*.svg',
                  dest: '<%= config.prod %>/images'
              }]
          }
      },
      cssmin: {
          prod: {
              files: {
                  '<%= config.prod %>/styles/main.css': [
                      '.tmp/styles/{,*/}*.css',
                      '<%= config.dev %>/styles/{,*/}*.css'
                  ]
              }
          }
      },
      replace: {
        dev: {
          options: {
            variables: {
              ember: 'bower_components/ember/ember.js',
              ember_data: 'bower_components/ember-data/ember-data.js'
            }
          },
          files: [
            {src: '<%= config.dev %>/index.html', dest: '.tmp/index.html'}
          ]
        },
        prod: {
          options: {
            variables: {
              ember: 'bower_components/ember/ember.prod.js',
              ember_data: 'bower_components/ember-data/ember-data.prod.js'
            }
          },
          files: [
            {src: '<%= config.dev %>/index.html', dest: '.tmp/index.html'}
          ]
        }
      },
      // Put files not handled in other tasks here
      copy: {
          prod: {
              files: [
                  {
                      expand: true,
                      dot: true,
                      cwd: '<%= config.dev %>',
                      dest: '<%= config.prod %>',
                      src: [
                          '*.{ico,txt}',
                          '.htaccess',
                          'images/{,*/}*.{webp,gif}',
                          'styles/fonts/*'
                      ]
                  }
              ]
          }
      },
      bower: {
          install: {
              options: {
                  targetDir: '<%= config.dev %>/scripts/vendor',
                  verbose: true,
                  cleanBowerDir: true,
                  install: true,
                  bowerOptions: {
                      production: false
                  }
              }
          }
      },
      concurrent: {
          server: [
              'emberTemplates',
          ],
          test: [
              'emberTemplates',
          ],
          prod: [
              'emberTemplates',
              'imagemin',
              'svgmin',
          ]
      },
      emberTemplates: {
          options: {
              templateName: function (sourceFile) {
                  var templatePath = config.dev + '/templates/';
                  return sourceFile.replace(templatePath, '');
              }
          },
          prod: {
              files: {
                  '.tmp/scripts/templates.js': '<%= config.dev %>/templates/**/*.hbs'
              }
          }
      },
      neuter: {
          dev: {
              options: {
                  filepathTransform: function (filepath) {
                      return config.dev + '/' + filepath;
                  }
              },
              src: '<%= config.dev %>/scripts/app.js',
              dest: '.tmp/scripts/main.js'
          }
      }
  });


  grunt.registerTask('serve', function (target) {
      if (target === 'build') {
          return grunt.task.run(['build', 'open', 'connect:prod:keepalive']);
      }

      grunt.task.run([
          'clean:server',
          'replace:dev',
          'concurrent:server',
          'neuter:dev',
          'connect:livereload',
          'open',
          'watch'
      ]);
  });

  grunt.registerTask('install', [
    'bower:install'
  ]);

  grunt.registerTask('test', [
      'clean:server',
      'replace:dev',
      'concurrent:test',
      'connect:test',
      'neuter:dev',
      'mocha'
  ]);

  grunt.registerTask('build', [
      'clean:prod',
      'replace:prod',
      'useminPrepare',
      'concurrent:prod',
      'neuter:dev',
      'concat',
      'cssmin',
      'uglify',
      'copy',
      'rev',
      'usemin'
  ]);

  grunt.registerTask('default', [
      'jshint',
      'test',
      'build'
  ]);

};