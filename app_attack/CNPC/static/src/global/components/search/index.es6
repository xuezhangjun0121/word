import { mapState } from 'vuex'

import './style'
import template from './view'
import { highlight } from 'filters'
import { fuzzy, getParents } from 'utils'

export default {
	
	template,

	data() {

		return {

			active: false,
			focused: false,
			param: '',
			index: 0,
			contents: []
		}
	},

	props: {

		keyCode: {

			default: 81 //Q按键
		}
	},

	watch: {

		active(value) {

			this.param = ''
			this.contents = []
			this.focused = false

			if(value) {

				this.$nextTick(() => {

					this.$refs.container.focus()
				})
			}
		},

		param(value) {

			this.index = 0
			this.search(value)
		}
	},

	computed: {

		...mapState({

			menuList: 'searchList'
		}),

		hlContents() {

			return this.contents.map(content => {

				return this.highlight(content.text, this.param)
			})
		}
	},

	methods: {

		highlight,

		focus() {

			this.focused = true
		},

		over($index) {

			this.index = $index
		},

		esc(e) {

			const KEYCODE = 27 //ESC键

			if(e.keyCode == KEYCODE) {

				this.active = false
			}
		},

		operate(e) {

			if(e.ctrlKey && e.keyCode == this.keyCode) {

				this.active = !this.active
			}
		},

		up() {

			let len = this.contents.length

			if(len == 0) {

				return
			}

			if(this.index == 0) {

				return this.index = len - 1
			}

			this.index--
		},

		down() {

			let len = this.contents.length

			if(len == 0) {

				return
			}

			if(this.index == len - 1) {

				return this.index = 0
			}

			this.index++
		},

		enter() {

			let menu = this.contents[this.index]

			window.location.href = this.$parseUrl(menu.path)
		},

		search(value) {

			//TODO查询
			let matches = fuzzy(this.menuList, 'text', value)

			this.contents = matches.map(menu => {

				menu.parents = [

					{
						path: '/',
						text: '全部'
					}
				]

				menu.parents.push(...getParents(this.menuList, menu))

				return menu
			})
		}
	},

	created() {

		document.body.addEventListener('keydown', this.operate)

		document.body.addEventListener('keyup', this.esc)
	},

	beforeDestory() {

		document.body.removeEventListener('keydown', this.operate)

		document.body.removeEventListener('keyup', this.esc)
	}
}