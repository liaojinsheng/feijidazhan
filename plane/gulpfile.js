var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件


//压缩js
gulp.task('jsTask', function(){
	gulp.src('js/*.js')
	.pipe(babel({presets:['es2015']})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest/js'));
});
//gulp.task('default', ['jsTask']); 
//压缩CSS

var minifyCss = require('gulp-minify-css'); //css 压缩插件
gulp.task('cssTask', function(){
gulp.src('index.css')
.pipe(minifyCss())
.pipe(gulp.dest('dest/css'));
});

gulp.task('default', ['jsTask', 'cssTask']);