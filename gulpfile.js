var gulp = require('gulp'),
    sass = require('gulp-sass'),
    baseUrl = 'page/',
    endUrl = 'public/';

gulp.task('toSass',function(){
    gulp.src(baseUrl+'**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(endUrl))
})
gulp.task('default',['toSass']);