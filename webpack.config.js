const path = require('path');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: "./modules/main.ts",
        basket: "./modules/basket.ts",
        addNewProduct: "./modules/addNewProduct.ts",
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          }
    },
    devtool: 'inline-source-map',
}