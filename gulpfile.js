var gulp=require('gulp');
var sass=require('gulp-sass');
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");

gulp.task("copy-index",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\duowei"));
});

gulp.task("copy-phpwork",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\duowei\\php"));
});

gulp.task("copy-allphpwork",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\duowei"));
});


gulp.task("jstext",function(){
	gulp.src("js/*.js")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\duowei\\js"));
});


//合并文件
// gulp.task("concatjs",function(){
// 	gulp.src(["js/index.js","js/goods.js"])
// 		.pipe(concat("concat.js"))
// 		.pipe(gulp.dest("D:\\phpStudy\\WWW\\duowei\\js"));
// });

//合并并压缩文件
// gulp.task("concatanguglifyjs",function(){
// 	gulp.src(["js/index.js","js/goods.js"])
// 		.pipe(concat("concat.js"))
// 		.pipe(uglify())
// 		.pipe(gulp.dest("D:\\phpStudy\\WWW\\duowei\\js"));
// });
gulp.task("sassfiles",function(){
	gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("css"));
});


gulp.task("sassfile",function(){
	gulp.src("css/*.css")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\duowei\\css"));
});



gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\duowei\\img"));
});

// gulp.task("bat",["copy-index","copy-img"],function(){

// });

gulp.task("watchall",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("php/*.php",["copy-phpwork"]);
	gulp.watch("*.php",["copy-allphpwork"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("sass/*.scss",["sassfiles"]);
	gulp.watch("css/*.css",["sassfile"]);
	gulp.watch("js/*.js",["jstext"]);
	
	// gulp.watch(["js/index.js","js/goods.js"],["concatjs"]);
	// gulp.watch(["js/index.js","js/goods.js"],["concatanguglifyjs"]);
});