import template from './view'
import { getClosestVueParent } from 'utils'

export default {

	name: 'sti-table-pagination',

	template,

	props: {

		count: {

			default: 0
		},
		page: {

			default: 1
		},
		pageSize: {

			default: 10
		},
		toolbar: {

			type: Object,
			default() {

				return {}
			}
		}
	},

	data() {

		return {

			curSize: 10,
			curPage: 1,
			filterState: false
		}
	},

	computed: {

		totalPage: function() {

            return Math.ceil( this.count / this.curSize )
        }
	},

	watch: {

		page(val) {

			this.curPage = this.validate(val)
		}
	},

	methods: {

		pre() {

			this.curPage > 1 && this.$emit('page', --this.curPage)
		},

		next() {

			this.curPage < this.totalPage && this.$emit('page', ++this.curPage)
		},

		turn2page() {

			this.curPage = this.validate(this.curPage)

			this.$emit('page', this.curPage)
		},

		validate(val) {

			if(isNaN(val) || val < 1) {

				return 1
			}

			if(val > this.totalPage) {

				return this.totalPage
			}

			return val
		},

		switchFilter() {

			this.filterState = !this.filterState
			this.parentTable.switchFilter(this.filterState)
		}
	},

	created() {

		this.curPage = this.page
		this.curSize = this.pageSize
	},

	mounted() {

		this.parentTable = getClosestVueParent(this.$parent, 'sti-table')

		if (!this.parentTable) {

			throw new Error('pagination组件必须作为table的子组件!')
		}
	}
}