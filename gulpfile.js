var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	minifycss = require ('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	spriter = require('gulp-css-spriter'),
	browserSync = require('browser-sync').create(),
	fileinclude = require('gulp-file-include'),
	postcss = require('gulp-postcss'),
	gutil = require('gulp-util');

	//postcss的小插件
  alias = require('postcss-alias'),
  crip = require('postcss-crip'),
  magician = require('postcss-font-magician'),
  triangle = require('postcss-triangle'),
  circle = require('postcss-circle'),
  linkColors = require('postcss-all-link-colors'),
  center = require('postcss-center'),
  clearfix = require('postcss-clearfix'),
  position = require('postcss-position'),
  size = require('postcss-size'),
  // verthorz = require('postcss-verthorz'),
  colorShort = require('postcss-color-short');
	autoprefixer = require('autoprefixer'),
	cssnext = require('cssnext'),
	precss = require('precss');

//img处理
gulp.task('img',function(){
	var imgDrc = 'drc/img/**',
		imgSrc = 'src/img';
	gulp.src(imgDrc)
	 .pipe(imagemin())
	 .pipe(gulp.dest(imgSrc));
});


//运行注解是彩色的
gulp.task('default', function () {
    gutil.log('message');
    gutil.log(gutil.colors.red('error'));
    gutil.log(gutil.colors.green('message:') + "some");
});

gulp.task('css', function () {
	//安装postcss插件的地方
  var processors = [
			alias,
      crip,
      magician,
      triangle,
      circle,
      linkColors,
      center,
      clearfix,
      position,
      size,
      // verthorz,
      colorShort,
			autoprefixer,
  		cssnext,
  		precss
  ];
  return gulp.src('./drc/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./src/css/'));
});

//js处理
gulp.task('js',function(){
	var jsDrc = 'drc/js/*.js';
		jsSrc = 'src/js/';
	gulp.src(jsDrc)
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest(jsSrc));
});


// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./src/css', './src/js', './src/img','./src/*.html'], {read: false})
        .pipe(clean());
});

//默认运行程序
gulp.task('default',['clean'],function(){
	gulp.start('postcss','html','less','css','img','js');
});

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
    	files: "./drc/**",
        server: {
            baseDir: "src/"  //index.html在哪里
        }
    });
});


//配置 HTML 模块化处理  引导时这么写 “@@include('templates/footer.html')”
gulp.task('html',function(){
	gulp.src('./drc/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./src'));

});


//监听任务，运行语句 gulp watch

gulp.task('watch',['browser-sync'], function(){
		gulp.start('css','html','img','js');

	//监听html
	gulp.watch('./drc/*.html',function(){
		gulp.run('html');

	});

	//监听css
	gulp.watch('./drc/css/**',function(){
		gulp.run('css');
	});


	//监听js
	gulp.watch('./drc/js/*.js',function(){
		gulp.run('js');
	});

	//监听img
	gulp.watch('./drc/img/**',function(){
		gulp.run('img');
	});

});
