const gulp = require('gulp');
const clean = require('gulp-clean');


gulp.task('clean:dev', ['clean:html:dev', 'clean:scripts:dev', 'clean:styles:dev']);


//gulp.task('clean:dev', ['clean:scripts:dev']);


gulp.task('clean:html:dev', (done) => 
	gulp.src('./public/*.html', {read: false})
			   .pipe(clean()))

gulp.task('clean:scripts:dev', (done) => 
	gulp.src('./public/scripts', {read: false})
			   .pipe(clean()))

gulp.task('clean:styles:dev', (done) => 
	gulp.src('./public/styles', {read: false})
			   .pipe(clean()))

