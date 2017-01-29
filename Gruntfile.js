module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean:pre', 'compass', 'uglify']);

  grunt.initConfig({
    uglify: {
      js: {
        files: {
          'js/build/base.min.js': ['js/source/*']
        }
      }
    },

    clean: {
      pre: {
        src: ['js/build/*', '!js/build', 'styles/css/*', '!styles/css/'],
      },
     post: {
        src: [''],
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'styles/sass',
          cssDir: 'styles/css',
          environment: 'production',
          outputStyle: 'compressed',
          config: 'config.rb'
        }
      },
    },

    watch: {
      sass: {
        files: ['styles/**/*.scss'],
        tasks: ['compass']
      }
    }
  });
}
