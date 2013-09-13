/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: [
          'lib/underscore-min.js',
          'lib/backbone-min.js',
          'lib/modernizr.js',
          'lib/showdown.js',
          'lib/bootstrap.min.js',
          'lib/ZeroClipboard.min.js',
          'views/*.js',
          'app/<%= pkg.name %>.js'
        ],
        dest: '<%= pkg.name %>.js'
      }
    },
    strip : {
      main : {
        src: '<%= concat.dist.dest %>',
        dest: '<%= concat.dist.dest %>'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: true,
        compress: true
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      // lib_test: {
      //   src: ['lib/**/*.js', 'test/**/*.js']
      // }
    },
    // qunit: {
    //   files: ['test/**/*.html']
    // },
    less: {
      options: {
        compress: true,
      },
      src: {
        expand: true,
        cwd:    "../css",
        src:    "*.less",
        dest:   "../css",
        ext:    ".css"
      }
    },
    watch: {
      gruntfile: {
        files: [
          '<%= jshint.gruntfile.src %>',
          'lib/<%= pkg.name %>.js',
          'views/*.js',
          '../css/style.less'
        ],
        tasks: ['jshint:gruntfile', 'concat', 'uglify', 'less']
      },
      // lib_test: {
      //   files: '<%= jshint.lib_test.src %>',
      //   tasks: ['jshint:lib_test', 'qunit']
      // }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-strip');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'strip', 'uglify', 'less']);
};
