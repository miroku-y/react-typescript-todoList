const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    }
}
