const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  console.log(process.env.NODE_ENV)
  console.log(argv.mode);
  return {
    entry: './src/index.js', // 入口文件
    // devtool: argv.mode === 'develpment' ? 'cheap-module-eval-source-map' : false, // 代码与文件的映射关系，便于调试
    resolve: {
      extensions: ['.js', '.vue', '.json', '.css', '.less'], // import 文件没有后缀名则去找.js的同名文件，没找到再去找.vue，以此类推
      alias: { // 别名
        '@': path.resolve(__dirname, './src'),
        'Style': path.resolve(__dirname, './src/assets/styles')
      },
      mainFiles: ['index', 'view'] // import 文件夹时，找文件夹中index开头的文件，没有再找view
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          include: [path.resolve(__dirname, './src')]
        },
        {
          test: /\.less$/,
          loader: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  require('autoprefixer'),
                ]
              }
            },
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|jpeg)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash:7].[ext]', // placeholder 占位符
              outputPath: 'images/', // 打包文件名
              limit: 10000 // 小于10000b则打包到js文件里，大于则使用file-loader的打包方式打包到images里
            },
          },
        },
        {
          test: /\.(eot|woff2?|ttf|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:7].min.[ext]',
              outputPath: 'fonts/',
              limit: 10000
            }
          },
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './html/index.html',
        filename: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static', // 在dist目录生成report.html文件
        openAnalyzer: false // 是否自动打开
      })
    ],
    output: {
      filename: '[name].[hash].js',  // 打包后文件名称
      chunkFilename: '[name].js',  // 间接引用的文件会走这个配置
      path: path.resolve(__dirname, './dist'), // 打包后文件夹存放路径
      publicPath: '/' // cdn提供url
    },
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      hot: true, // 热更新，不刷新页面
      port: 3000
    }
  }
}
