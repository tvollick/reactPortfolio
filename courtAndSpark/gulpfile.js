var gulp = require('gulp'), 
		gutil = require('gulp-util'), 
		source = require('vinyl-source-stream'), 
		browserify = require('browserify'), 
		watchify = require('watchify'), 
		reactify = require('reactify'), 
		notifier = require('node-notifier'), 
		concat = require('gulp-concat'), 
		sass = require('gulp-sass'), 
		watch = require('gulp-watch'); 


// TRANSPILE AND BUNDLE REACT JSX

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  notifier.notify({title: title, message: message});
};
var bundler = watchify(browserify({
	entries:['./src/app.jsx'], 
	transform: [reactify], 
	extensions: ['.jsx'], 
	debug: true, // change to false for production?
	cache: {}, 
	packageCache: {}, 
	fullPaths: true
})); 
function bundle () { 
	return bundler
		.bundle()
		.on('error', notify)
		.pipe(source('main.js'))
		.pipe(gulp.dest('./'))
}
bundler.on('update', bundle); 
gulp.task('build', function () { 
	bundle(); 
}); 

// SASS
gulp.task('sass', function () { 
	gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./'));
})

// WATCH FOR CHANGES 
gulp.task('watch', function () { 
	gulp.watch('./sass/**/*.scss', ['sass']); 
}); 

gulp.task('default', ['build', 'sass', 'watch']); 
