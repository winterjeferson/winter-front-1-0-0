var gulp = require('gulp');
var del = require('del'); //npm install del --save-dev //https://www.npmjs.com/package/del

var wf_configuration = require('./wf_configuration.js');





var fileOther = [
    wf_configuration.development + 'other/.htaccess',
    wf_configuration.development + 'other/*',
    wf_configuration.development + 'other/**',
    wf_configuration.development + 'other/**/*',
    wf_configuration.development + 'other/**/*.*'
];

var fileOtherPublic = [
    wf_configuration.homologation + '.htaccess',
    wf_configuration.homologation + '*.htaccess',
    wf_configuration.homologation + '*.txt'
];


function clean(path) {
    return del(path, {force: true}); // returns a promise
}

gulp.task('wf_other_clean', function () {
    return clean(fileOtherPublic);
});

gulp.task('wf_other_move', function (done) {
    return gulp
            .src(fileOther)
            .pipe(gulp.dest(wf_configuration.homologation));
    done();
});

gulp.task('wf_other', gulp.series(
        'wf_other_clean',
        'wf_other_move',
        'wf_beep'
        ));



module.exports = {
    fileOther: fileOther,
    fileOtherPublic: fileOtherPublic,
};