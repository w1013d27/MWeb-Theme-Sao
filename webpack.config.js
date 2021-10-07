const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{index:['./src/index.js'],
        sao:['./src/sao.less'],
        ['sox-x']:['./src/sao-x.less']
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"[name].css"
        }),
        new CleanWebpackPlugin()
    ]


}