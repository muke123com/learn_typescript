let webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: ["./app.ts"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loaders: "ts-loader" },
        ]
    },
    watch: true
};