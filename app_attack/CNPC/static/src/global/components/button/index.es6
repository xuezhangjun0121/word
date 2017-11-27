import './style'
import template from './view'

const CLASS_PRE = 'md-'

export default {

	template,

	props: {

		type: String
	},

	computed: {

		className() {

			return [this.type === undefined ? null : CLASS_PRE + this.type]
		}
	},

	methods: {

		clickevent(){
			
			this.$emit('clickevent')
		}
	}
}