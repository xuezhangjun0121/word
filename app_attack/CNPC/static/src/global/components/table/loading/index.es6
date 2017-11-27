/**
 * 加载效果
 */
import template from './view'

export default {

	name: 'sti-table-loading',

	template,

	props: {

		type: {

			default: 'circle'
		},

		isLoading: {

			default: false
		}
	}
}