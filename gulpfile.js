/**
 * Created by meitaiqiao on 2017/3/15.
 */

//
// var gulp = require('gulp');
// var scp = require('gulp-scp2');
//
// gulp.task('default', function () {
//   gulp.src('ceshi/**/*')
//     .pipe(scp({
//       host: '211.157.179.215',
//       port: '21522',
//       username: 'root',
//       password: 'e-eduspace@ADMIN.',
//       dest: '/opt/tomcat-7777-keepMark/webapps'
//     }))
//     .on('error', function(err) {
//       console.log(err);
//     });
// });


var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');

gulp.task('default', function () {
  return gulp.src('ceshi/**/*')
    .pipe(ftp({
      host: '211.157.179.215',
      port: '21522',
      user: 'root',
      pass: 'e-eduspace@ADMIN.',
      remotePath: '/opt/tomcat-7777-keepMark/webapps'
    }))
    // you need to have some kind of stream after gulp-ftp to make sure it's flushed
    // this can be a gulp plugin, gulp.dest, or any kind of stream
    // here we use a passthrough stream
    .pipe(gutil.noop());
});
