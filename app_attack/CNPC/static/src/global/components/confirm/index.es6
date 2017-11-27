import template from './view'
import './style.less'

export default {
	props: [ 'title', 'content' ],

	template,

	data() {
		return {
			ok: '确认',
			cancel: '取消'
		}
	},

	methods: {
		onOpen() {
		},
		onClose(type) {
			//console.log('Closed', type);
		}
	}
}