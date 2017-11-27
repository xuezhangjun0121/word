import { getClosestVueParent } from 'utils'
import template from './view'

export default {

	name: 'sti-theader',

	template,

	props: {

		cols: Array, 
		sort: String,
		fixed: {

			type: Boolean,
			default: false
		},
		scrollY: {

			type: Boolean,
			default: false
		},
		scrollX: {

			type: Boolean,
			default: false
		},
		scrollBar: null
	},

	data() {

		return {

			checkState: false,
			curSortCol: false,
			filterabled: false,
			filterId: ''
		}
	},

	methods: {

		sortCol(col){

			col.desc = !col.desc
			this.curSortCol = col.id
			//调用table的排序方法
			this.parentTable.sortCol(col)
		},

		checkAll() {

			this.parentTable.checkAll(this.checkState)
		},

		switchFilter(state) {

			if(!state) {

				this.filterId = ''
				this.filterLabel = ''
			}
			this.filterabled = state
		},

		enableFilter(col) {

			if(this.filterabled) {

				if(col.filterable) {

					this.filterId = col.id
					this.filterLabel = col.label
					this.$publish('table.filter', col.id, col.label)
				} else {

					this.parentTable.noty(this.$t('commons.filterAlert'))
				}				
			}
		}	
	},

	created() {

		this.$on('table.checkAll', state => {

			this.checkState = state
		})
	},

	mounted() {

		this.parentTable = getClosestVueParent(this.$parent, 'sti-table')

		if (!this.parentTable) {

			throw new Error('theader组件必须作为table的子组件!')
		}

		this.curSortCol = this.sort
    }
}