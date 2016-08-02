var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');


var paths = {
    scss: {
        library: './src/scss',
        user: './styleguides/**/*.scss',
        destination: './public/styleguides'
    }
}

gulp.task('scss', function() {
        return gulp.src(paths.scss.user)
            .pipe(sass({includePaths: [paths.scss.library]}))
            .pipe(gulp.dest(paths.scss.destination))
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(paths.scss.destination));
});