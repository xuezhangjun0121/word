/**
 * 导航栏
 *
 * by zhangdi
 */
import { mapState } from 'vuex'

import template from './view'
import { getClosestVueParent, pathJoin } from 'utils'

const PREFIX = '/'
 
export default {

	name: 'app-nav',

	template,

	props: {

		//tabid
		id: {

			type: String,
			required: true
		},

		//tab标签
		label: String,

		//tab图标
		icon: {

			type: String,
			default: ''
		},

		//导航地址
		url: {

			type: String,
			default: '/'
		},

		//是否禁用
		disabled: {

			type: Boolean,
			default: false
		}
	},

	data() {

		return {

			active: false
		}
	},

	computed: {

		...mapState({

			paths: state => state.paths,
		}),

		fullUrl() {

			const base = this.$router.history.base

			return pathJoin(base, this.url)

		},

		navClass() {

			return {

				active: this.active,
				disabled: this.disabled
			}
		},

		iconClass() {

			let begin = 0,
				prefix = 'fa-'

			return this.icon.slice(begin, prefix.length) === prefix 
				? this.icon 
				: prefix + this.icon
		}
	},

	watch: {

		'paths'(val){

			this.setActive(val[1])
		}
	},

	methods: {

		setActive(path) {

			this.active = (path == PREFIX + this.id || path == this.url)
		},

		getNavData() {

			return {

				id: this.id,
				el: this.$el,
				label: this.label,
				icon: this.icon,
				url: this.url,
				active: this.active,
				disable: this.disable
			}
		},

		nav() {

			this.$router.push(this.url || '/')
		}
	},

	created() {

		this.setActive(this.paths[1])
	},

	mounted() {

		let navData = this.getNavData()

		this.parentNavBar = getClosestVueParent(this.$parent, 'sti-nav-bar')

		if (!this.parentNavBar) {

			throw new Error('nav组件必须作为navBar的子组件!')
		}

		this.parentNavBar.registryNav(navData)
    }
}