/**
 * noty
 */
import Vue from 'vue'

let notyVm = new Vue()

function notify({

	title = '',
	text = '',
	type = ''
} = {}) {

	notyVm.$notify({
		
		title,
		text,
		type
	})
}

notify.SUCCESS = 'success'
notify.INFO = 'info'
notify.WARN = 'warn'
notify.ERROR = 'error'

export default notify
