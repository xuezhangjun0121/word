import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { STI_LOCALE_PLATFORM, STI_LOCALE_ATTACK } from 'constant'
import { platform as c_platform, attack as c_attack } from './locales/commons'
import { platform as b_platform, attack as b_attack } from './locales/button'

Vue.use(VueI18n)

//注册国际化文件
Vue.locale(STI_LOCALE_PLATFORM, {

	commons: c_platform,
	button: b_platform,
})

Vue.locale(STI_LOCALE_ATTACK, {

	commons: c_attack,
	button: b_attack
})

let i18n = {

	init( store, field = 'locale' ) {

		if(typeof store === 'undefined') {

			throw Error('国际化初始化前必须完成store的创建')
		}

		//设置初始化语言
		Vue.config.lang = store.state[field]

		//动态设置语言
		store.watch(state => state[field], locale => Vue.config.lang = locale)
	}
}

export default i18n