var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),   // allows automatic prefixing
    postcss= require('gulp-postcss'),
    cssvars = require('postcss-simple-vars'), // allows variables in css
    nested = require('postcss-nested'),       // allows for nested css code
    cssImport = require('postcss-import'),    // enable inline-importing of css files
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');


gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
          .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
          .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
          })
          .pipe(gulp.dest('./app/temp/styles'));
});