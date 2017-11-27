/**
 * app入口文件
 * 1.第三方插件注册
 * 
 * by zhangdi 03/01/17
 */
//第三方依赖
import store from 'store' //vuex
import theme from 'theme' //vue-material
import i18n from 'i18n' //vue-i18n
import router from 'router' //vue-router
import Notifications from 'vue-notification' //vue-notification
//平台依赖
import StiVue from 'StiVue'

//初始化国际化插件
i18n.init(store, 'locale')
//初始化主题插件
theme.init(store, 'theme')
//初始化app
let app = new StiVue({

	store,
	router,
	plugins: [Notifications]
})
