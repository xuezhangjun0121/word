/**
 * 导航栏
 *
 * by zhangdi
 */
import { mapGetters } from 'vuex'

import './style'
import template from './view'
 
export default {

	name: 'app-nav-bar',

	template,

	data() {

		return {

			navList: []
		}
	},

	methods: {

		registryNav(nav) {
			
			this.navList.push(nav)
		}
	}
}