var express = require('express')
var router = express.Router()

const createApp = require('../ssr/createApp')

const template = 
`
<!DOCTYPE html>
<html lang="en">
  <head>
  	<title>{{title}}</title>
  </head>
  <body>
    <!--vue-ssr-outlet-->
  </body>
</html>

`

router.use(function timeLog(req, res, next) {

	//避免全局单例上下文
	//造成数据共享
	const context = {

		title: 'SSR'
	}

  	// Step 1: Create a Vue instance
  	//
  	// 通用app代码编写
  	// 
  	// 每次请求要新创建一个app示例，防止不同请求之间的状态污染
  	// 
  	// 由于服务端的特殊性，在渲染app之前数据已经取到
  	// 同事为了节省数据响应处理的开销
  	// 服务端的数据响应式默认是关闭的
  	// 
  	// 生命周期只存在beforeCreate和created
  	// 
  	// directive的使用依赖于DOM，因此在服务端因尽量避免使用指令，通过component代替
  	// 
  	// router，store，event bus同样遵循该原则，保证每次请求都是全新的实例
	const { app } = createApp(context)

	// Step 2: Create a renderer
	// 默认只生成一个Vue app
	const renderer = require('vue-server-renderer').createRenderer({

		//设置模板
		template
	})

	// Step 3: Render the Vue instance to HTML
	// param app vue-component
	// param context render context object
	// param callback 
	renderer.renderToString(app, context, (err, html) => {
		if (err) throw err
		res.send(html)
	})
});

module.exports = router