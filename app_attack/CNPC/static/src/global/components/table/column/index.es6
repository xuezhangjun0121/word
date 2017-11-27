import { getClosestVueParent } from 'utils'
import { FIX_WIDTH } from '../variable'

export default {

	name: 'sti-column',

	render(){},

	props: {

		//数据字段
		id: null,

		//列名展示
		label: String,

		//是否可排序
		sortable: {

			type: Boolean,
			default: false
		},

		//是否可过滤
		filterable: {

			type: Boolean,
			default: false
		},

		//是否固定列
		fixed: {

			type: Boolean,
			default: false
		},

		//固定列摆放位置
		ltr: {

			type: Boolean,
			default: true
		},

		//是否降序排列
		desc: {

			type: Boolean,
			default: false
		},

		//列宽
		width: {

			default: 0
		},

		//特殊数据列
		type: String,

		//排序算法
		compare: {

			type: Function,
			default: function(a, b, desc) {

				if(a < b) {

					return desc * 1
				} else if(a > b) {

					return desc * -1
				}

				return 0
			}
		}

	},

	data() {

		return {

			realWidth: this.width
		}
	},

	methods: {

		getColData() {

			return {

				id: this.id, //id字段
				label: this.label, //列名称
				width: isNaN(this.width) ? FIX_WIDTH : this.width, //列宽
				realWidth: this.realWidth, //真实列宽
				fixed: this.fixed, //固定列
				ltr: this.ltr, //固定列位置
				sortable: this.sortable, //排序状态
				filterable: this.filterable, //过滤字段
				desc: this.desc, //排序顺序
				type: this.type, //类型
				compare: this.compare, //排序实现
				template: this.$scopedSlots.default //模板节点
			}
		}
	},

	mounted() {

		let colData = this.getColData()

		this.parentTable = getClosestVueParent(this.$parent, 'sti-table')

		if (!this.parentTable) {

			throw new Error('column组件必须作为table的子组件!')
		}

		this.parentTable.registryColumn(colData)
    }
}