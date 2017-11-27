import template from './view'

export default {

	name: 'sti-table-noty',

	template,

	props: {

		delay: {

			type: Number,
			default: 3000
		}
	},

	data() {

		return {

			type: '',
			content: '',
			enable: false
		}
	},

	methods: {

		noty(content, type) {

			clearTimeout(this.timeout)
			this.enable = true
			this.type = type
			this.content = content
			this.timeout = setTimeout(()=> {

				clearTimeout(this.timeout)
				this.timeout = null
				this.enable = false
			}, this.delay)
		}
	},

	beforeDestory() {

		this.timeout && clearTimeout(this.timeout)
	}
}