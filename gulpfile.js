const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concatCss = require('gulp-concat-css');
const purgecss = require('gulp-purgecss')

// SCSS'leri CSS'e çevirir
// SCSS'leri CSS'e çevirir
// SCSS'leri CSS'e çevirir
function style() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}
// SCSS'leri CSS'e çevirir
// SCSS'leri CSS'e çevirir
// SCSS'leri CSS'e çevirir

// Tüm CSS'leri birleştirir.
// Tüm CSS'leri birleştirir.
// Tüm CSS'leri birleştirir.
gulp.task('birlestir', function () {
    return gulp.src('css/**/*.css')
        .pipe(concatCss("styles.css"))
        .pipe(gulp.dest('css/'));
});
// Tüm CSS'leri birleştirir.
// Tüm CSS'leri birleştirir.
// Tüm CSS'leri birleştirir.

// Localhost 3000'i aktif eder ve anlık görüntüleme olanağı tanır.
// Localhost 3000'i aktif eder ve anlık görüntüleme olanağı tanır.
// Localhost 3000'i aktif eder ve anlık görüntüleme olanağı tanır.
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
// Localhost 3000'i aktif eder ve anlık görüntüleme olanağı tanır.
// Localhost 3000'i aktif eder ve anlık görüntüleme olanağı tanır.

// index.html'deki classlara bakıp kullanılan classların stillerini build klasörünün altında bundle.css dosyasında birleştirir.
// index.html'deki classlara bakıp kullanılan classların stillerini build klasörünün altında bundle.css dosyasında birleştirir.
gulp.task('purgecss', () => {
    return gulp
        .src('css/styles.css')
        .pipe(
            purgecss({
                content: ['index.html']
            })
        )
        .pipe(gulp.dest('build/'))
});
// index.html'deki classlara bakıp kullanılan classların stillerini build klasörünün altında bundle.css dosyasında birleştirir.
// index.html'deki classlara bakıp kullanılan classların stillerini build klasörünün altında bundle.css dosyasında birleştirir.


exports.style = style;
exports.watch = watch;


