var gulp = require('gulp');
var imagemin = require('gulp-imagemin'); //npm install gulp-imagemin --save-dev //https://www.npmjs.com/package/gulp-imagemin/
var newer = require('gulp-newer'); //npm install gulp-newer --save-dev // https://www.npmjs.com/package/gulp-newer/
var del = require('del'); //npm install del --save-dev //https://www.npmjs.com/package/del

var wf_configuration = require('./wf_configuration.js');





var fileImg = [
    wf_configuration.development + 'img/*',
    wf_configuration.development + 'img/**',
    wf_configuration.development + 'img/**/*',
    wf_configuration.development + 'img/**/*.*'
];

var fileImgPublic = [
    wf_configuration.homologation + 'img/*',
    wf_configuration.homologation + 'img/**',
    wf_configuration.homologation + 'img/**/*',
    wf_configuration.homologation + 'img/**/*.*'
];


function clean(path) {
    return del(path, { force: true }); // returns a promise
}

gulp.task('wf_image_clean', function () {
    var files = [wf_configuration.homologation + 'img/**'];
    return clean(files);
});

gulp.task('wf_image_move', function (done) {
    return gulp
        .src(wf_configuration.development + 'img/**/*.*')
        .pipe(gulp.dest(wf_configuration.homologation + "img/"));
    done();
});


// fix enoent problem: node node_modules/optipng-bin/lib/install.js
gulp.task('wf_image_imagemin', function () {
    return gulp
        .src(wf_configuration.homologation + 'img/**')
        // .pipe(newer(wf_configuration.production + "img/"))
        .pipe(imagemin())
        .pipe(gulp.dest(wf_configuration.production + "img/"));
});

gulp.task('wf_image', gulp.series(
    'wf_image_clean',
    'wf_image_move',
    'wf_beep'
));



module.exports = {
    fileImg: fileImg,
    fileImgPublic: fileImgPublic,
};