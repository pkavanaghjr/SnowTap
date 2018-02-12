/****************************************
        DEPENDENCIES
*****************************************/
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');


/****************************************
        SOURCE PATHS
*****************************************/
// -------- CSS / SCSS ----------
var input_sass_stylesheet = './src/sass/style.scss';
var input_sass_components = './src/sass/**/*.scss';
var input_vendor_css = './src/vendor/css/**/*.css';

// ----- MOBILE -----
var mobile_input_sass_stylesheet = './mobile/src/sass/style.scss';
var mobile_input_sass_components = './mobile/src/sass/**/*.scss';
var mobile_input_vendor_css = './mobile/src/vendor/css/**/*.css';


// -------- JS ----------
var input_custom_js =   [
                            // './src/js/*.js',
                             './src/js/custom_behaviors.js',
                             './src/js/custom_behaviorsTweens.js',
                        ];
var input_vendor_js =  [
                            // './src/vendor/js/**/*.js',
                            './src/vendor/js/jquery.easing.1.3.js',
                            './src/vendor/js/TweenMax.min.js',
                            './src/vendor/js/jquery.gsap.min.js',
                            './src/vendor/js/EasePack.min.js',
                            './src/vendor/js/jquery.scrollmagic.min.js',

                            // './src/vendor/js/jquery.scrollmagic.debug.js',
                            // './src/vendor/js/retina.min.js',
                        ];

// ----- MOBILE -----
var mobile_input_custom_js =   [
                            // './mobile/src/js/*.js',
                             './mobile/src/js/custom_behaviorsMobile.js',
                             './mobile/src/js/custom_behaviorsTablet.js',
                        ];
var mobile_input_vendor_js =  [
                            // './mobile/src/vendor/js/**/*.js',
                            './mobile/src/vendor/js/jquery-2.1.3.min.js',
                            './mobile/src/vendor/js/jquery.mobile.custom.min.js',
                            './mobile/src/vendor/js/jquery.easing.1.3.js',
                            './mobile/src/vendor/js/jquery.scrollmagic.min.js',
                            // './mobile/src/vendor/js/jquery.scrollmagic.debug.js',
                        ];

/****************************************
        DISTRIBUTION DIRECTORIES
*****************************************/
// Location of where compiled production files should be placed
var destination_sass = './dist/css/';
var destination_js = './dist/js/';

var mobile_destination_sass = './mobile/dist/css/';
var mobile_destination_js = './mobile/dist/js/';


/****************************************
        TASKS
*****************************************/

// COMPILE SASS :: UN-MINIFIED & MINIFIED
gulp.task('sass', function() {
    return gulp
        .src(input_sass_stylesheet)
        .pipe(sass({
            sourceComments: 'map',
            sourceMap: 'sass',
            outputStyle: 'nested'
        })
        .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename('styles_snow.css'))
        .pipe(gulp.dest(destination_sass))

        // minify for production
        .pipe(rename('styles_snow.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest(destination_sass));
});

// SASS - MOBILE
gulp.task('sass-mobile', function() {
    return gulp
        .src(mobile_input_sass_stylesheet)
        .pipe(sass({
            sourceComments: 'map',
            sourceMap: 'sass',
            outputStyle: 'nested'
        })
        .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename('mobile_styles_snow.css'))
        .pipe(gulp.dest(mobile_destination_sass))

        // minify for production
        .pipe(rename('mobile_styles_snow.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest(mobile_destination_sass));
});


// COMPILE CUSTOM JS :: UN-MINIFIED & MINIFIED
gulp.task('scripts', function() {
return gulp.src(input_custom_js)
    .pipe(concat('custom.js'))
    .pipe(gulp.dest(destination_js))

    // minify for production
    .pipe(rename('custom.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destination_js));
});

// CUSTOM JS MOBILE
gulp.task('scripts-mobile', function() {
return gulp.src(mobile_input_custom_js)
    .pipe(concat('mobile_custom.js'))
    .pipe(gulp.dest(mobile_destination_js))

    // minify for production
    .pipe(rename('mobile_custom.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(mobile_destination_js));
});


// COMPILE & MINIFY VENDOR JS
gulp.task('vendor-scripts', function() {
    return gulp.src(input_vendor_js)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(destination_js))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destination_js));
});

// VENDOR JS MOBILE
gulp.task('vendor-scripts-mobile', function() {
    return gulp.src(mobile_input_vendor_js)
        .pipe(concat('mobile_vendor.js'))
        .pipe(gulp.dest(mobile_destination_js))
        .pipe(rename('mobile_vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(mobile_destination_js));
});


// COMPILE & MINIFY VENDOR & MISC CSS
gulp.task('vendor-css', function() {
    return gulp.src(input_vendor_css)
        .pipe(concat('vendor.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest(destination_sass));
});

// VENDOR CSS - MOBILE
gulp.task('vendor-css-mobile', function() {
    return gulp.src(mobile_input_vendor_css)
        .pipe(concat('mobile_vendor.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest(mobile_destination_sass));
});


/****************************************
        WATCH TASK
*****************************************/
// WATCH AND LOG SOURCE FILE CHANGES
gulp.task('watch', function () {
    gulp.watch(input_custom_js, ['scripts']).on('change', function(event){ console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
    gulp.watch(mobile_input_custom_js, ['scripts-mobile']).on('change', function(event){ console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
    gulp.watch(input_vendor_js, ['vendor-scripts']).on('change', function(event){ console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
    gulp.watch(mobile_input_vendor_js, ['vendor-scripts-mobile']).on('change', function(event){ console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
    gulp.watch(input_sass_components, ['sass']).on('change', function(event){ console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
    gulp.watch(mobile_input_sass_components, ['sass-mobile']).on('change', function(event){ console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
    gulp.watch(input_sass_stylesheet, ['sass']).on('change', function(event){ console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
    gulp.watch(mobile_input_sass_stylesheet, ['sass-mobile']).on('change', function(event){ console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
});

// COMPILES SCSS, CSS & JS, does NOT watch for file changes
gulp.task('build', ['sass', 'scripts', 'vendor-scripts', 'vendor-css']);
gulp.task('build-mobile', ['sass-mobile', 'scripts-mobile', 'vendor-scripts-mobile', 'vendor-css-mobile']);

// DEFAULT GULP TASK
gulp.task('default', ['build', 'build-mobile', 'watch']);
