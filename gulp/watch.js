const gulp = require('gulp');


gulp.task('watch', (done) => {
	gulp.watch('app/client/scripts/**/*.js', ['scripts:dev']);
	gulp.watch('app/client/scripts/**/*.html', ['scripts:dev']);
	gulp.watch('app/client/sass/**/*.scss', ['sass:dev']);
	gulp.watch('app/client/images/**/*.*', ['images:copy']);
	gulp.watch('app/client/*.html', ['html:dev']);
    gulp.watch('app/client/fonts/*.*', ['fonts:copy']);
});