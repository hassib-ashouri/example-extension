const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry:{
        foreground: './js/foreground.js',
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                // look for .css or .scss files
                test: /\.(css|scss)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                    loader: "style-loader",
                    },
                    {
                    loader: "css-loader",
                    },
                    {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: [ "@babel/preset-react"],
                    },
                },
                ],
            }]
    },
    plugins:[
        new CopyWebpackPlugin({
            patterns: [
              { from: "manifest.json", to: "[name][ext]" },
              { from: "icons", to: "icons" },
            //   { from: "css", to: "css" },
              { from: "src", to: "src"},
              { from: "_locales", to : "_locales"},
              { from: "js/background.js", to: "[name][ext]"}
            ],
          }),
    ],
    resolve: {
        alias: {
            'handlebars/runtime': 'handlebars/dist/cjs/handlebars.runtime',
            'handlebars': 'handlebars/dist/cjs/handlebars.runtime',
        }
    }
}