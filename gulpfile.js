const { series, parallel, watch } = require('gulp');


// Pull in each task
const clean   = require('./gulp-tasks/clean.js');
const styles  = require('./gulp-tasks/styles.js');
const scripts = require('./gulp-tasks/scripts.js');
const images  = require('./gulp-tasks/images.js');


// Set each directory and contents that we want to watch and assign the relevant task. `ignoreInitial` set to true will prevent the task being run when we run `gulp watch`, but it will run when a file changes
const watcher = () => {
  watch('./src/styles/**/**/*.scss', {ignoreInitial: true}, styles);
  watch('./src/scripts/**/**/*.js', {ignoreInitial: true}, scripts);
  watch('./src/images/**/**/*.*', {ignoreInitial: true}, images);
};


// The default (if someone just runs `gulp`) is to run each task in parrallel after cleaning our public folder
exports.default = series(clean, parallel(styles, scripts, images));


// The default (if someone just runs `gulp`) is to run each task in parrallel after cleaning our public folder also instructs gulp to watch directories and act accordingly
exports.dev = series(clean, parallel(styles, scripts, images, watcher));


// This is our watcher task that instructs gulp to watch directories and act accordingly
exports.watch = watcher;