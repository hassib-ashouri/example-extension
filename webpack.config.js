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