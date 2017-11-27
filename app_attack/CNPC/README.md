# STI-WEB前端开发环境

该项目提供了express搭建的一个本地node服务器，方便本地调试，同时使用gulp+webpack构建前端，提高编译效率，前端框架采用Vue2.0。

## 安装依赖

1. 开发环境依赖

	clone到本地之后，在项目根目录下执行如下命令：
	
	```
	npm install
	```
2. gulp全局安装
	
	gulp工具采用4.0版本，如果之前安装过gulp，请移除之前版本再执行如下命令：

	```
	npm install gulp-cli -g
	```

## 使用

1. 项目结构

```
|-bin 服务端命令集
|-routes 路由集合
|	|-datats 本地数据路由
|	|-index 主页路由
|-static 静态文件
|	|-css css文件（基础样式库）
|   |-dist 前端编译文件
|	|-fonts 字体文件
|	|-img 图片
|	|-src 前端es6文件
|-test 测试用例
|   |-mocha.opts mocha配置文件
|   |-commonjs 符合commonjs语法规范的测试用例
|   |-es6 符合ES6语法规范的测试用例
|-views 服务端模板文件
|-.babelrc babel配置文件
|-.eslintrc eslint配置文件
|-app.js 服务端入口文件
|-config.yml 项目配置文件
|-gulpfile gulp配置文件
|-karma.conf.js karma配置文件
|-layout.ejs 模板文件
|-nodemon.json nodemon配置文件
```
2. 命令

```
npm start
```
进入开发模式，启动本地服务，开启热替换功能

```
npm run start:app
```
启动express本地服务

```
npm test
```
执行测试

```
npm run karma
```
启动karma

```
npm run dll
```
单独打包第三方库

```
npm run build
```
将前端代码编译到`dev`目录下，省去不必要的操作

```
npm run build:pro
```
将前端代码编译到`pro`目录下，进行压缩、混淆、hash处理

```
npm run build:css
```
编译平台样式库

Change Logs

* 0.0.2:文件结构调整
* 0.0.1:项目首次创建

<!-- 增加两个：高危ip、行为分析（分两个页面：攻击告警、恶意文件）
支持导出啥的东西 -->

