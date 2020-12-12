'use strict';
const gulp = require('gulp'),
      prefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      cssnano = require('gulp-cssnano'), //!!!!!!!!!!!!
      uglify = require('gulp-uglify'),
      imagemin = require('gulp-imagemin'),
      rename = require('gulp-rename'),
      svgmin = require('gulp-svgmin'),
      cheerio = require('gulp-cheerio'),
      svgsprite = require('gulp-svg-sprite'),
      concat = require('gulp-concat'),
      pump = require('pump'),
      browserSync = require('browser-sync').create();
const path = {
      src: {
        js: './_source/js/**/*.js',
        style: './_source/css/**/*\.scss',
        css: './_source/css/**/*\.css',
        img: './_source/img/**/*.*',
        svg: './_source/svg/**/*\.svg',
        font: './_source/font/**/*\.*',
        module: './_source/module/**/*.*',
        favicon: './_source/favicon/*.*'
      },
      build: {
        js: './_assets/js/',
        style: './_assets/css/',
        css: './_assets/css/',
        img: './_assets/img/',
        svg: './_assets/svg/',
        font: './_assets/font/',
        module: './_assets/module/',
        favicon: './_assets/favicon/'
      }
};

gulp.task('js:work:build', function(cb) {
    pump([
        gulp.src(path.src.js),
        concat('bundle.min.js'),
        browserSync.stream(),
        gulp.dest(path.build.js)
    ], cb);
});

gulp.task('js:build', function(cb) {
    pump([
        gulp.src(path.src.js),
        uglify(),
        concat('bundle.min.js'),
        browserSync.stream(),
        gulp.dest(path.build.js)
    ], cb);
});
gulp.task('style:build', function(cb) {

    pump([
        gulp.src(path.src.style),
        sass({
            outputStyle: 'compressed'
        }),
        prefixer({
            browserlist: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],
            cascade: false
        }),
        browserSync.stream(),
        gulp.dest(path.build.style)

    ], cb);
});
gulp.task('css:build', function(cb) {
    pump([
        gulp.src(path.src.css),
        prefixer({
            browsers: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],
            cascade: false
        }),
        cssnano(),
        browserSync.stream(),

        gulp.dest(path.build.css)
    ], cb);
});
gulp.task('img:build', function(cb) {
    pump([
        gulp.src(path.src.img),
        imagemin(),
        rename(function(path) {
            path.extname = (path.extname + "").toLowerCase();
        }),
        browserSync.stream(),

        gulp.dest(path.build.img)
    ], cb);
});
gulp.task('img:work:build', function(cb) {
    pump([
        gulp.src(path.src.img),
        rename(function(path) {
            path.extname = (path.extname + "").toLowerCase();
        }),
        browserSync.stream(),

        gulp.dest(path.build.img)
    ], cb);
});
gulp.task('svg:build', function(cb) {
    pump([
        gulp.src(path.src.svg),
        svgmin({
            js2svg: {
                pretty: true
            }
        }),
        cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }),
        svgsprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg"
                }
            }
        }),
        browserSync.stream(),

        gulp.dest(path.build.svg)
    ], cb);
});
gulp.task('font:build', function(cb) {
    pump([
        gulp.src(path.src.font),
        gulp.dest(path.build.font)
    ], cb);
});
gulp.task('module:build', function(cb) {
    pump([
        gulp.src(path.src.module),
        browserSync.stream(),

        gulp.dest(path.build.module)
    ], cb);
});
gulp.task('favicon:build', function(cb) {
    pump([
        gulp.src(path.src.favicon),
        gulp.dest(path.build.favicon)
    ], cb);
});
gulp.task('build:all', gulp.series('js:build', 'style:build', 'css:build', 'img:build', 'svg:build', 'font:build', 'module:build', 'favicon:build'));


gulp.task('watch:all', function(done) {

    gulp.watch(path.src.style, gulp.series('js:work:build'));

    gulp.watch(path.src.style, gulp.series('style:build'));

    gulp.watch(path.src.style, gulp.series('css:build'));

    gulp.watch(path.src.style, gulp.series('img:work:build'));

    gulp.watch(path.src.style, gulp.series('svg:build'));

    gulp.watch(path.src.style, gulp.series('font:build'));

    gulp.watch(path.src.style, gulp.series('module:build'));

    gulp.watch('./index.html', function(done) {
      browserSync.reload();
      done();
    });

    done();

});

gulp.task('sync', function(done) {
  browserSync.init({
    server: {
      baseDir: './'
    },
    port: 3000
  })
  done();
})

gulp.task('default', gulp.parallel('build:all', 'watch:all', 'sync'));
