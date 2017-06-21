// Get Gulp and dependencies in node_modules
var gulp          = require( 'gulp' ),
    gulp_stylus   = require( 'gulp-stylus' ),
    connect       = require( 'gulp-connect-php'),
    browserSync   = require( 'browser-sync'),
    httpProxy     = require( 'http-proxy'),
    useref        = require('gulp-useref'),
    uglify        = require('gulp-uglify')
    gulp_css_nano = require( 'gulp-cssnano' ),
    gulp_rename   = require( 'gulp-rename'  ),
    gulp_concat   = require( 'gulp-concat'  ),
    gulp_uglify   = require( 'gulp-uglify'  ),
    gulp_plumber  = require( 'gulp-plumber' ),
    gulp_stylus   = require( 'gulp-stylus'  );


// Execute " $ gulp default " tu run all taks
gulp.task( 'default', [ 'stylus', 'watch', 'browserSync' ] );

// CSS task
gulp.task( 'stylus', function()
{
    gulp.src(                       './app/stylus/main.styl' )   // get .styl files in app/stylus
        .pipe( gulp_stylus(         { compress: true         } ) ) // Convert to CSS
        .pipe( gulp.dest(           './app/css'              ) ) // Put it in CSS folder
        .pipe(browserSync.reload(   {stream: true            }));
} );

// Server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

// Watch task
gulp.task( 'watch', [ 'browserSync', 'stylus', ], function()
{
    gulp.watch( './app/stylus/**', [ 'stylus' ] );
} );

// Execute " $ gulp default " tu run all taks
gulp.task( 'default', [ 'stylus', 'watch', 'browserSync' ] );
