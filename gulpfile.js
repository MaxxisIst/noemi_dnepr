import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
// import gulpImg from 'gulp-image';

const html = () => gulp
    .src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

const css = () => gulp
    .src([
        'src/styles/index.min.css',
        'src/styles/normalize.css'
    ])
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream());

const js = () => gulp
    .src('src/scripts/**/*.js')
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.stream());

const copy = () => gulp
    .src([
        'src/fonts/**/*',
        'src/images/**/*'
    ], {
        base: 'src'
    })
    .pipe(gulp.dest('dist'));


// const img = () => gulp
//     .src('src/images/**/*.{jpg, jpeg, png, svg, gif}')
//     .pipe(gulpImg())
//     .pipe(gulp.dest('dist/images'));

const server = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
};

const clear = () => del('dist/**/*');

gulp.watch('src/*.html', html);
gulp.watch('src/styles/**/*.css', css);
gulp.watch('src/scripts/**/*.js', js);

export default gulp.series(clear, gulp.parallel(html, css, js, copy), server);//,img
