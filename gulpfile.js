var gulp = require('gulp');
var mochaSelenium = require('gulp-mocha-selenium');

gulp.task('test-frontend', function() {
  return gulp.src('test/selenium-test.js', {read: false})
    .pipe(mochaSelenium({
      useChaining: true,
      timeout: 60e3,
      browserName: 'chrome'
    }));

});