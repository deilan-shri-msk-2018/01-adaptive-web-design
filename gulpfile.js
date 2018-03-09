const gulp = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const path = require('path');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const src = 'src';
const dest = 'dist';

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: dest
    },
    notify: false
  });

  gulp.watch(`${src}/styles/**/*.pcss`, ['styles']);
  gulp.watch(`${src}/*.html`, ['html', 'reload']);
});

gulp.task('reload', (done) => {
  reload();
  done();
})

gulp.task('default', ['clean', 'build']);

gulp.task('build', ['html', 'styles']);

gulp.task('clean', () => {
  return del([
    path.join(dest, '**/*')
  ]);
});

gulp.task('html', () => {
  return gulp.src('src/*.html', {
      base: 'src'
    })
    .pipe(gulp.dest(dest));
});

gulp.task('styles', () => {
  return gulp.src('src/styles/*.pcss')
    .pipe(postcss())
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(gulp.dest(dest))
    .pipe(reload({
      stream: true
    }));
});