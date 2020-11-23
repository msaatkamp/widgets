const path = require('path');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");


const output = {
    path: __dirname + '/dist',
    filename: 'bundle.js'
}
module.exports = {
    entry: './src/index.js',
    output: output,
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /server/],
                resolve: { extensions: [".js", ".jsx"] },
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ['style-loader', 'css-loader',  'sass-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        })
    ],
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    mode: 'development',
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    devServer: {
        contentBase: './src',
        publicPath: '/dist',
        inline: true,
        port: 3000,
        hot: true
    }
};