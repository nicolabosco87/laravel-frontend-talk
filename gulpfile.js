require('es6-promise').polyfill();
var gulp = require('gulp');
var elixir = require('laravel-elixir');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var psi = require('psi');
require('laravel-elixir-livereload');
var csslint = require('gulp-csslint');
var gutil = require('gulp-util');

/*
Select more browser to support with autoprefixer
elixir.config.css.autoprefix = {
    enabled: true, //default, this is only here so you know how to disable
    options: {
        cascade: true,
        browsers: ['last 2 versions', '> 1%']
    }
};*/

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//Esempio configurazione
//elixir.config.assetsPath = './support/resources/assets';

elixir(function(mix) {

    //compilazione singolo sass
    mix.sass('app.scss');

    //compilazione di più sass
    //mix.sass(['app.scss','print.sass']);

    //compilazione coffeScript
    //mix.coffee('caffe.coffee');

    //mix di due javascript
    //mix.scripts([
    //    "module1.js",
    //    "module2.js"
    //]);


    //////////////////////////
    // Esempio flow completo
    //////////////////////////

    //dichiarazione task di gulp per imagemin
    /*gulp.task('imagemin', function() {
        return gulp.src('public/img/!*')
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [
                    {removeViewBox: false},
                    {cleanupIDs: false}
                ],
                use: [pngquant()]
            }))
            .pipe(gulp.dest('public/img/'));
    });*/

    //utility e dichiarazione task di gulp per CssLint
    /*var customReporter = function(file) {
        gutil.log(gutil.colors.cyan(file.csslint.errorCount)+' errors in '+gutil.colors.magenta(file.path));

        file.csslint.results.forEach(function(result) {
            gutil.log(result.error.message+' on line '+result.error.line);
        });
    };

    gulp.task('csslint', function() {
        gulp.src('public/css/*.css')
            .pipe(csslint())
            .pipe(csslint.reporter(customReporter));
    });*/


    //compilazione sass
    //mix.sass('app.scss')

    //Mix file sass compilati con animate.css (libreria esterna)
    // (css da concatenare, css di destinazione, path in cui far eseguire il task)
    /*mix.styles([
        'public/css/app.css',
        'resources/assets/vendor/animate.css/animate.css'
    ], 'public/css/all.css', './' );*/


    //compile coffescript
    //mix.coffee('caffe.coffee');

    //mix caffe.js con jquery (libreria esterna)
    /*mix.scripts(['public/js/caffe.js',
    'resources/assets/vendor/jquery/dist/jquery.js'
    ],'public/js/all.js','./');*/

    //versioning dei files (unire tutti i versioning in un array)
    //mix.version(['css/all.css','js/all.js']);

    //copia immagini nella cartella pubblica
    //mix.copy('resources/assets/img', 'public/img', './');



    //eseguo il task gulp imagemin
    //mix.task('imagemin');

    //livereload!
    //mix.livereload();

    //eseguo i test phpUnit
    //mix.phpUnit();

    //esegue task di gulp
    //mix.task("prod-psi");

    //Css lint
    //mix.task("csslint");
});


//create the gulp task
/*gulp.task("prod-psi", function() {

    // get the PageSpeed Insights report
    psi.output('www.laravelverona.xyz').then(function() {
        console.log('done');
    });

});*/
