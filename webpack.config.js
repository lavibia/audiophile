const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
  mode: "production",
  entry: {
    script: './src/scripts/script.js',
    category: './src/scripts/category.js',
    product: './src/scripts/product.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // Correct routes for assets
  },
  devServer: {
    static: './dist',
  },


  plugins: [

    ...createHtmlPlugins(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }, // Keep assets structure

      ]
    })
  ],
  module: {
    rules: [
      // Rule for JS files, transpile with Babel if needed
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // Rule for importing JSON files
      {
        test: /\.json$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src/assets', // Menține structura folderului în dist
              outputPath: 'assets', // Fișierele imagini în `dist/assets`
              publicPath: '/assets'
            }
          }
        ]
      },
    ],
  },


  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.js']
  }
};