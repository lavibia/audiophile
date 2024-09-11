const path = require('path');
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

// Function to get HTML files from a directory
const getHtmlFiles = () => {
  const htmlFiles = fs.readdirSync(path.resolve(__dirname, 'src/pages')).filter(file => file.endsWith('.html'));
  return htmlFiles;
};

// Function to generate HtmlWebpackPlugin instances for each HTML file
const createHtmlPlugins = () => {
  const htmlFiles = getHtmlFiles();
  return htmlFiles.map(file => {
    const fileName = path.basename(file, '.html');
    return new HtmlWebpackPlugin({
      filename: file,
      template: path.resolve(__dirname, `src/pages/${file}`),
      inject: 'body',
      chunks: [fileName, 'script'] // Includes both the specific JS file and the common JS file
    });
  });
};

module.exports = {
  entry: {
    script: './src/scripts/script.js',
    category: './src/scripts/category.js'
  },
  devServer: {
    static: './dist',
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Audiophile | audio gear',
  //     template: "src/index.html",
  //   }),
  //   new CopyPlugin({
  //     patterns: [
  //       {
  //         from: './src/data.json',
  //         to: path.resolve(__dirname, "dist"),

  //       },
  //     ],
  //   }),
  // ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    ...createHtmlPlugins()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }, {
        test: /\.json$/i,
        type: "asset/resource",
      },

    ],

  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`
      new JsonMinimizerPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js']
  }
};