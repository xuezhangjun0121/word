import './style'
import template from './view'

export default {

	template,

	data() {

		return {

			enable: true
		}
	},

	computed: {

		atttach() {

			let currentName = this.$router.currentRoute.name

			return currentName !== 'login' 
				&& currentName !== 'error'
		}
	},

	methods: {

		animationend() {

			this.enable = false
		}
	}
}