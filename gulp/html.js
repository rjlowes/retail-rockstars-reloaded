const gulp = require('gulp');


gulp.task('html:dev', () => 
    gulp.src('./app/client/index.html')
        .pipe(gulp.dest('./public/')));