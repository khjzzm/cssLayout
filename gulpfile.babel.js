'use strict';
import gulp from "gulp"
import del from "del";
import ws from "gulp-webserver";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

let sass = require('gulp-sass')(require('dart-sass'));

const routes = {
    css: {
        watch: "src/scss/*",
        src: "src/scss/*.scss",
        dest: "dist/css"
    },
    js :{

    },
    assert : {

    }
};

const styles = () =>
    gulp
        .src(routes.css.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                flexbox: true,
                grid: "autoplace"
            })
        )
        .pipe(minify())
        .pipe(gulp.dest(routes.css.dest));

const webServer = () =>{
    gulp
        .src("public")
        .pipe(ws({livereload: true, open: true}))
}

const watch = () => {
    gulp.watch(routes.css.watch, styles);
};

const clean = () => del(["dist/css", "dist/js"]);

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const postDev = gulp.series([webServer, watch]);

export const dev = gulp.series([prepare, assets, postDev]);
