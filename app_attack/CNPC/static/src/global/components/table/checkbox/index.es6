import template from './view'

export default {

	name: 'sti-checkbox',

	template,

	props: {

		value: null
	},

	computed: {

		model() {

			return this.value
		}
	}
}