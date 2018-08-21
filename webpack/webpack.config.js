var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query  :{
                    presets:['react','es2015']
                }
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            },{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },{
                test: /\.scss$/,
                loader: 'style!css!sass'
            },{
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}