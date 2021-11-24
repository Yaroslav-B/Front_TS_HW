const path = require('path');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: "./modules/main.js",
        basket: "./modules/basket.js",
        addNewProduct: "./modules/addNewProduct.js",
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
    // devtool: "source-map"
}