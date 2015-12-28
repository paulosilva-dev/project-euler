/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');
    
// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    
    browserSync.init({
        server: "./public/"
    });
    
    gulp.watch('source/js/**/*.js', ['concatJS']);
    gulp.watch('source/scss/**/*.scss', ['sass']);    
    gulp.watch(['./public/*.html','./public/assets/css/*.css','./public/assets/js/*.js']).on('change', browserSync.reload);
});


// Static server - browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});

//  configure the sass compiler task
gulp.task('sass', function() {
    gulp.src('source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./public/assets/css/'));
});

// concatinating js files
 
gulp.task('concatJS', function() {
  return gulp.src('./source/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/assets/js/'));
});