/**
 *
 * webpack.config.js 
 *
 * by hahacoo
 */

var path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	DirectoryNameAsMain = require('webpack-directory-name-as-main'),
	autoprefix = require('autoprefixer')

var extend = require('./extend')

var package = require('./package')

function generator(config, options) {

	var src = config.src,
    	pro = config.pro,
    	dev = config.dev

    var alias = {}

    for(var k in src.alias) {

    	alias[k] = path.resolve(src.alias[k])
    }

    for(var k in src.moduleAlias) {

    	alias[k] = src.moduleAlias[k]
    }

    return extend({

			entry: {
		        main: [src.index], //入口文件
		        site: [ 'config' ], //配置文件
		        vendor: src.vendor //第三方库
		    },

		    output: {
		        path: dev.root, //输出路径
		        publicPath: dev.publicPath, //webpack加载资源路径前缀
		        filename: '[name].js', //bundle文件名
		        chunkFilename: '[id].js' //chunk文件名
		    },

		    watch: true,

		    devtool: '#cheap-eval-source-map', //sourcemap生成方式

		    module: {
		        noParse: /\.doc\.html$/,
		        preLoaders: [
		        	{
						test: /\.es6$/,
						exclude: /(node_modules|libs)/,
						loader: "eslint-loader",
					}
		        ],
		        loaders: [
		        	{
						test: /\.vue$/,
						loader: 'vue-loader'
					},
		        	{
				        test: /\.json$/,
				        loader: 'json-loader'
			      	},
		        	{
						test: /\.css$/,
						loader: "style-loader!css-loader!postcss-loader"
					},
		        	{
						test: /\.less$/,
						//modules&localIdentName=[path][name][local][hash:base64:5]路径|文件名|样式名|编码截取
						//实现css模块化
						loader: "style-loader!css-loader!postcss-loader!less-loader"
					},	{
						test: /\.es6$/,
						exclude: /(node_modules|libs)/,
						loader: "babel-loader",
						query: {
							cacheDirectory: true,
							plugins: [
								['transform-runtime', {

									"helpers": true,
						 		    "polyfill": false,
						 		    "regenerator": true,
						 		    "moduleName": "babel-runtime"
								}],
								[path.resolve('./babel-plugin-try-catch'), {
									
									"enable": true,
						 			"errorHandler": "stiError",
 									"throwError": true
						 		}]
							]
						}
					}, {
		                //文件加载器，处理文件静态资源
		                //name: 打包后文件名称
		                //publicPath: 打包后文件绝对路径
		                //文件输出地址按name属性来决定
		                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		                loader: 'file-loader?name=/static/fonts/[name].[ext]'
		            }, {
		                //图片加载器，更适合图片，
		                //特点：可以将较小的图片转成base64（data-src），减少http请求
		                //如下配置，将小于8192KB的图片转成base64码
		                test: /\.(png|jpg|jpeg|svg|gif)$/,
		                loader: 'url-loader?limit=8192&name=../../img/[name].[ext]'
		            }, {
		                test: /\.(html|tpl)$/,
		                loader: "html?attrs=img:src img:data-src" //处理html中img的资源加载
		            }

		        ]
		    },

		    plugins: [
		    	new webpack.ResolverPlugin([
		    		new DirectoryNameAsMain()
		    	]),
		    	new webpack.BannerPlugin(
`${package.name}
Version ${package.version}
Created by ${package.author}`, {

		    		entryOnly: true
		    	}),
		    	//将jquery作为全局导出，使所有模块可以任意调用，不需要import(require)
		    	//不是将变量绑定到window上，而是在webpack.global上
		    	//导出http全局变量
		    	//增加promise,fetch,Proxy的polyfill
		    	new webpack.ProvidePlugin({
					$: "jquery",
					jQuery: "jquery",
					"window.jQuery": "jquery",
					_: 'lodash',
					http: 'http',
					'StiVue': 'StiVue'
				}),
		    	// commons chunk
		        new webpack.optimize.CommonsChunkPlugin({
		            names: ['config', 'vendor']
		        }),
		    	//webpack1.0 required
		    	new webpack.optimize.OccurenceOrderPlugin(),
		    	new webpack.HotModuleReplacementPlugin(),
		    	new webpack.NoErrorsPlugin()
		    ], 

		    postcss: function() {

		    	return [autoprefix()]
		    },

		    resolve: {
		        //自己代码模块配置
		        root: [
		            path.resolve(src.root), //src
		            path.resolve('./node_modules')
		        ],

		        alias: alias,

		        extensions: ['', '.js', '.es6', '.less', '.html', '.json']
		    },
		    
		    resolveLoader: {
		        //loader模块的配置，eg.style-loader
		        root: path.resolve(__dirname, src.loaderMoules || 'node_modules')
		    }
		}, options)
}

module.exports = generator
