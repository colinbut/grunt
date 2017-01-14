// wrapper function
module.exports = function(grunt) {

  // project configuration - define tasks here
  // Grunt tasks (most of them) rely on configuration data (configuration object)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // loading the plugin that does that uglify job
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // set default Task
  grunt.registerTask('default', ['uglify']);

  grunt.registerTask('logging', 'Log some stuff', function() {
    grunt.log.write('Logging some stuff').ok();
  });

};
