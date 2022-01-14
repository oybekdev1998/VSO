const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
  return src('./src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./src/css'))
    .pipe(browserSync.stream());
};

function watcher(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  watch('./src/css/**/*.scss', style);
  watch('./*.html').on('change', browserSync.reload);
  watch('./*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watcher;