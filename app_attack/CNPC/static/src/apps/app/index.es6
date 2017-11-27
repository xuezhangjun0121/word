 /**
 * 内容区组件
 * 二级路由入口
 *
 * by zhangdi
 */
import template from './view'
import { STI_THEME_DEFAULT } from 'constant'
import appHeader from './components/header'
import appNavBar from './components/navBar'
import appNav from './components/navBar/nav'
import appSide from './components/side'
import { browserIs } from 'utils'

export default StiVue.component({

	template,

	computed: {

		...StiVue.$mapState({

			theme: state => state.theme
		})
	},

	components: {

		appHeader,
		appNavBar,
		appNav,
		appSide
	}
})
