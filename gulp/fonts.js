let gulp = require('gulp');


gulp.task('fonts:copy', () =>
    gulp.src('./app/client/fonts/*.*')
        .pipe(gulp.dest('./public/fonts')));
