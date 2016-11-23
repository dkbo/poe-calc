var gulp = require('gulp'),      
    jshint = require('gulp-jshint'),        
    imagemin = require('gulp-imagemin'),    //圖片壓縮用
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),        //合並用       
    notify = require('gulp-notify'),        //通知用
    cache = require('gulp-cache'),          
    livereload = require('gulp-livereload'),//即時更新
    del = require('del'),
    watch = require('gulp-watch'),                   //刪除   
    uglify = require('gulp-uglify'),       //JS最簡壓縮用
    webserver = require('gulp-webserver'), //內建伺服器用
    jade = require('gulp-jade'),           //html 用 
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');
    babel = require('gulp-babel');       //babel
var init = {
  jade : {
    name : 'jade',
    src : 'app/jade/**/*.jade',
    message : 'html task ok',
    dest : ''
  },
  babel : {
    name : 'babel',
    src : 'app/babel/**/*.js',
    concat : 'js/all.js',
    message : 'babel task ok',
    dest : ''
  },
  compass : {
    name : 'compass',
    src : 'app/sass/**/*.sass',
    config_file: 'app/sass/config.rb',
    css: '',
    sass: 'app/sass',
    sourcemap: true,
    style: 'compressed',
    comments: false,
    require: ['susy'],
    message : 'css task ok'
  },
  webServer : {
    name : 'webserver',
    src : '',
    port : 81,
    livereload : true
  },

}
gulp.task(init.webServer.name, ()=> {
  var x = init.webServer;
  gulp.src(x.src)
    .pipe(webserver({
         port: x.port, 
         livereload: x.livereload,
    }));
});
gulp.task(init.jade.name, ()=> {
  var x = init.jade;
  gulp.src(x.src)
     .pipe(jade())
     .pipe(gulp.dest(x.dest))
     .pipe(notify({ message: x.message }))
     .pipe(livereload());
});
gulp.task(init.babel.name, ()=> {
    var x = init.babel
    gulp.src(x.src) 
    .pipe(babel()) 
    .pipe(uglify())
    .pipe(gulp.dest(x.dest))
    .pipe(notify({ message: x.message }))
    .pipe(livereload());
});
gulp.task('sass', ()=> {
    gulp.src('app/sass/**/*.sass')
        .pipe(plumber())
        .pipe(sass({
                outputStyle: 'compressed',
                includePaths: [
                    'node_modules/susy/sass'
                ]
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('app/'))
        .pipe(livereload());
});
gulp.task('css', ()=> {
    var processors = [
        autoprefixer({
            browsers: ['last 1 version']
        })
    ];
        gulp.src('app/css/**/*.css')
            .pipe(plumber())
            .pipe(postcss(processors))
            .pipe(gulp.dest('css/'));

});
gulp.task('del', (cb)=> {
    del([
        '.sass-cache'
    ], cb)
});
gulp.task('watch',  ()=> { 
  gulp.watch('app/jade/**/*.jade', ['jade']);
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/css/**/*.css', ['css']);
  gulp.watch('app/coffeescripts/**/*.coffee', ['coffee']);
  gulp.watch('app/babel/**/*.js', ['babel']);
  gulp.watch('app/images/**/*', ['images']);
  livereload.listen();
});
 // Default task
gulp.task('default', ['jade','sass','babel','webserver','watch'])

