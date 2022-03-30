import webpack from "webpack-stream"

const babelOptions = (preset) => {
    const opts = {
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-proposal-class-properties"],
    }

    if (preset) {
        opts.presets.push(preset)
    }

    return opts
}

const jsLoaders = () => {
    const loaders = [
        {
            loader: "babel-loader",
            options: babelOptions(),
        },
    ]
    return loaders
}

export const json = () => {
    return app.gulp
        .src(app.path.src.json)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "JS",
                    message: "Error: <%= error.message %>",
                })
            )
        )

        .pipe(app.gulp.dest(app.path.build.json))

        .pipe(app.plugins.browsersync.stream())
}
