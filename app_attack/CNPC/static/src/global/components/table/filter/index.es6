import template from './view'
import { getClosestVueParent } from 'utils'

export default {

	name: 'sti-table-filter',

	template,

	data() {

		return {

			filterabled: false,
			filters: [],
			filterId: '',
			filterLabel: '',
			filterInput: ''
		}
	},

	methods: {

		switchFilter(state) {

			if(!state) {

				this.filterId = ''
				this.filterLabel = ''
			}
			this.filterLabel = '过滤'
			this.filterabled = state
		},

		/**
		 * 添加filter
		 */
		addFilter() {

			if(!this.filterId) {

				return this.parentTable.noty(this.$t('commons.filterError'))
			}

			this.filters.push({

				id: this.filterId,
				label: this.filterLabel,
				content: this.filterInput
			})

			this.filterInput = ''
			this.filter()
		},

		/**
		 * 删除filter
		 * @param  {[type]} filter [description]
		 * @param  {[type]} index  [description]
		 * @return {[type]}        [description]
		 */
		removeFilter(filter, index) {

			this.filters.splice(index, 1)
			this.filter()
		},

		/**
		 * 过滤
		 * @return {[type]} [description]
		 */
		filter() {

			this.parentTable.filter(this.filters)
		}
	},

	created() {

		this.$subscribe('table.filter', (id, label) => {

			this.filterId = id,
			this.filterLabel = label
		})
	},

	mounted() {

		this.parentTable = getClosestVueParent(this.$parent, 'sti-table')

		if (!this.parentTable) {

			throw new Error('filter组件必须作为table的子组件!')
		}
    }
}