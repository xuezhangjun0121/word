/**
 * 平台级插件
 * 基础服务扩展
 * 
 * by zhangdi 
 */

import config from 'global/config'
/*组件*/
import StiIcon from 'components/icon' 
import StiCard from 'components/card'
import StiNotice from 'components/notice'
import StiAssist from 'components/assist'
import StiDrag from 'components/drag'
import StiConsole from 'components/console'
import StiProgress from 'components/progress'
import StiTabs from 'components/tabs'
import StiTab from 'components/tabs/tab'
import StiButton from 'components/button'
import StiSwitch from 'components/switch'
import StiSection from 'components/section'
import { 
	StiTable as StiTable, 
	StiColumn as StiColumn
} from 'components/table'
import StiDashboard from 'components/dashboard'
import StiDashaside from 'components/dashboard/aside'
import StiSearch from 'components/search'
import StiLoading from 'components/loading'
import { 
	
	validator as StiValidator, 
	validRule as StiValidRule 
} from 'components/validator'
import { 
	
	jqGrid as StiJqGrid, 
	jqCol as StiJqCol
} from 'components/grid'
import myDatepicker from 'components/timepicker/vue-datepicker-es6.vue'
import StiConfirm from 'components/confirm'

/*服务*/
import { subscribe, publish, dispatch, broadcast, listen, trigger } from 'event'
import { setParam, getParam } from 'router/param'
import { remove } from './array'
import { parseUrl } from 'utils'
/*过滤器*/
import {

	capitalize,
	uppercase,
	lowercase,
	currency,
	json,
	toPixel
} from 'filters'
/*指令*/
import {

	href
} from 'directives'

let Sti = {

	install: (Vue, option) => {

		//注册系统服务
		Vue.prototype.$subscribe = subscribe
		Vue.prototype.$publish = publish
		Vue.prototype.$dispatch = dispatch
		Vue.prototype.$broadcast = broadcast
		Vue.prototype.$listen = listen
		Vue.prototype.$trigger = trigger
		Vue.prototype.$setParam = setParam
		Vue.prototype.$getParam = getParam
		Vue.prototype.$remove = remove
		Vue.prototype.$parseUrl = parseUrl
		Vue.prototype.$config = config
		Object.defineProperty(Vue.prototype, '$config', {

			writable: false
		})
		
		//注册全局组件
		Vue.component('sti-icon', StiIcon)
		Vue.component('sti-card', StiCard)
		Vue.component('sti-notice', StiNotice)
		Vue.component('sti-assist', StiAssist)
		Vue.component('sti-drag', StiDrag)
		Vue.component('sti-console', StiConsole)
		Vue.component('sti-progress', StiProgress)
		Vue.component('sti-tab', StiTab)
		Vue.component('sti-tabs', StiTabs)
		Vue.component('sti-table', StiTable)
		Vue.component('sti-column', StiColumn)
		Vue.component('sti-validator', StiValidator)
		Vue.component('sti-validrule', StiValidRule)
		Vue.component('sti-grid', StiJqGrid)
		Vue.component('sti-col', StiJqCol)
		Vue.component('sti-search', StiSearch)
		Vue.component('sti-loading', StiLoading)
		Vue.component('sti-dashboard', StiDashboard)
		Vue.component('sti-dashaside', StiDashaside)
		Vue.component('sti-button', StiButton)
		Vue.component('sti-switch', StiSwitch)
		Vue.component('sti-section', StiSection)
		Vue.component('date-picker', myDatepicker)
		Vue.component('sti-confirm', StiConfirm)

		//注册全局过滤器
		Vue.filter('capitalize', capitalize)
		Vue.filter('uppercase', uppercase)
		Vue.filter('lowercase', lowercase)
		Vue.filter('currency', currency)
		Vue.filter('json', json)
		Vue.filter('toPixel', toPixel)

		//注册全局指令
		Vue.directive('href', href)
	}
}

export default Sti