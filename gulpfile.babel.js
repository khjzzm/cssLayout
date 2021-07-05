'use strict';
import gulp from "gulp"
import del from "del";
import ws from "gulp-webserver";
import image from "gulp-image";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import bro from "gulp-bro";
import babelify from "babelify";
import uglifyify from "uglifyify";
import ghPages from "gulp-gh-pages";

let sass = require('gulp-sass')(require('dart-sass'));

const routes = {
    css: {
        watch: "src/scss/**/*.scss",
        src: ["src/scss/styles.scss"],
        dest: "dist/css"
    },
    img: {
        src: "src/img/*",
        dest: "dist/img"
    },
    js: {
        watch: "src/js/**/*.js",
        src: "src/js/*",
        dest: "dist/js"
    }
};

const styles = () =>
    gulp
        .src(routes.css.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                flexbox: true,
                browsers: ["last 2 versions"],
                grid: "autoplace"
            })
        )
        .pipe(minify())
        .pipe(gulp.dest(routes.css.dest));

const img = async () => {
    gulp.src(routes.img.src)
        .pipe(image())
        .pipe(gulp.dest(routes.img.dest));
}

const js = async () => {
    gulp.src(routes.js.src)
        .pipe(bro({
            transform: [
                babelify.configure({presets: ['@babel/preset-env']}),
                ['uglifyify', {global: true}]
            ]
        }))
        .pipe(gulp.dest(routes.js.dest));
}


const webServer = () => {
    gulp
        .src("public")
        .pipe(ws({livereload: true, open: true}))
}

const gh = async () => {
    gulp
        .src("dist/**/*")
        .pipe(ghPages());
}

const watch = () => {
    gulp.watch(routes.css.watch, styles);
    gulp.watch(routes.img.src, img);
    gulp.watch(routes.js.watch, js);
};

const clean = () => del(["dist/css", "dist/js"]);

const prepare = gulp.parallel([clean, img]);

const assets = gulp.parallel([styles, js]);

const live = gulp.parallel([webServer, watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
export const deploay =  gulp.series([build, gh])