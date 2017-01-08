var gulp = require('gulp'),
    sass = require('gulp-sass-china'),
    baseUrl = 'src/app/',
    endUrl = 'src/assets/';

gulp.task('toSass',function(){
    gulp.src(baseUrl+'*.scss')
        .pipe(sass({
            outputStyle : 'compact'
        }))
        .pipe(gulp.dest(endUrl+'css'))
})
gulp.task('default',['toSass']);