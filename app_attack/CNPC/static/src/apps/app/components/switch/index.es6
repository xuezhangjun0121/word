import template from './view'
import { mdSwitch } from 'vue-material'

export default {

	template,

	component: {
		mdSwitch
	},

	data (){
		return {
			switchState: this.checkedStatus
		}
	},

	props: {
		checkedStatus: {
			type : Boolean,
			default : false
		},
		id: {
			type: String
		},
		className: {
			type: String
		}
	},

	watch: {
		switchState(val){
			
			this.$emit('change', val)
		}
	}
}