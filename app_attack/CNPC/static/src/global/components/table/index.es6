/**
 * 表格组件
 * 支持本地数据，服务端数据，分页，排序，展开功能
 *
 * 通过props传递的数据，一定要拷贝，避免污染
 *
 * 事件
 * 	table.expand args1 行数据 args2 索引
 * 	table.check args1 id args2 状态 args3 行数据 args4 索引
 * 	table.check.all args1 选中数据id集
 * 	table.check.change args1 实际选中数据id集
 */
import './style'
import dataMixin from './mixins/data'
import utilMixin from './mixins/util'
import StiTableFilter from './filter'
import StiTheader from './theader'
import StiTbody from './tbody'
import StiTableSide from './side'
import StiFixedTable from './fixedTable'
import StiTablePagination from './pagination'
import StiTableLoading from './loading'
import StiTableNoty from './noty'
import { FIX_WIDTH } from './variable'
import { typeis, addResize, removeResize, addMouseWheel, removeMouseWheel } from 'utils'

export const StiTable =  {

	name: 'sti-table',

	render(h){

		return (
			<div class="sti-table">
				{this.$slots.default}
				{/*过滤工具条*/}
				<sti-table-filter ref="filter"></sti-table-filter>
				<div class="sti-table-content" style={{width: this.realWidth + 'px'}}>
					{/*列表头部*/}
					<sti-theader 
						cols={this.cols} 
						sort={this.initSort}
						scrollX={this.scrollX} 
						scrollY={this.scrollY}
						scrollBar={this.scrollBar}
						ref="theader"
					></sti-theader>
					{/*列表数据*/}
					<sti-tbody 
						cols={this.cols}
						datas={this.isClient ? this.clientDataSet : this.serverDataSet}
						page={this.page}
						max-height={this.maxHeight}
						scrollX={this.scrollX}
						scrollY={this.scrollY}
						scrollBar={this.scrollBar} 
						nativeOnScroll={_.throttle(this.scrollHandler, 10)}
						onBodyResize={this.resizeHandler}
						ref="tbody"
					></sti-tbody>
					{
						/*左侧固定列*/
						this.fixedLTRCols.length > 0 
						? <sti-fixed-table
							cols={this.fixedLTRCols} 
							datas={this.isClient ? this.clientDataSet : this.serverDataSet}
							sort={this.initSort}
							width={this.fixedLTRWidth}
							max-height={this.scrollX ? this.maxHeight - this.scrollBar : this.maxHeight} 
							scrollX={this.scrollX}
							ref="fixLTRTable"
							></sti-fixed-table>
						: null
					}	
					{
						/*右侧固定列*/
						this.fixedRTLCols.length > 0 
						? <sti-fixed-table
							ltr={false}
							cols={this.fixedRTLCols} 
							datas={this.isClient ? this.clientDataSet : this.serverDataSet}
							sort={this.initSort}
							width={this.scrollX ? this.fixedRTLWidth + this.scrollBar : this.fixedRTLWidth}
							max-height={this.scrollX ? this.maxHeight - this.scrollBar : this.maxHeight} 
							scrollY={this.scrollY}
							scrollBar={this.scrollBar}
							ref="fixRTLTable"
							></sti-fixed-table>
						: null
					}
				</div>
				{/*分页工具条*/}
				<sti-table-pagination 
					count={this.count}
					page={this.page}
					pageSize={this.pageSize}
					toolbar={this.toolbar}
					onPage={this._turn2page}
					onSize={this.changeSize}
					ref="pagination"
				></sti-table-pagination>
				<sti-table-side
					active={this.sideState}
					width={this.sideWidth}
					template={this.sideTemplate}
					data={this.sideData}
					index={this.sideIndex}
				></sti-table-side>
				<sti-table-loading isLoading={!this.isClient && this.isLoading}></sti-table-loading>
				{/*提示框*/}
				<sti-table-noty ref="noty"></sti-table-noty>
			</div>
		)
	},

	props: {

		maxHeight: {
			default: 400
		}, //最高高度，用于列表垂直滚动显示
		url: String, //服务端接口地址
		datas: Array, //本地数据集
		method: {

			default: 'GET'
		}, //请求数据方式
		primaryKey: String, //数据唯一标示
		maxFilter: {
			default: 5
		}, //过滤最大数量
		toolbar: {
			type: Object,
			default() {

				return {
					filter: true
				}
			}
		}, //工具条配置
		beforeSend: Function, //数据接口调用之前
		afterSend: Function, //数据接口调用之后
		initPage: {
			default: 1
		}, //初始化页码
		initSize: {
			default: 10
		}, //每页显示数量
		initSort: {
			type: String,
			default: ''
		}, //排序字段
		initDesc: {
			type: Boolean,
			default: true
		}, //排序规则
		initParams: Object //初始化参数
	},

	data() {

		return {
			cols: [], // 数据列
			colSort: null, // 排序列
			fixedLTRCols: [], // 左固定数据列
			fixedRTLCols: [], // 右固定数据列
			checkField: 'id', // 多选关联字段
			checkIds: [], // 选中数据集
			serverDataSet: [], // 服务端数据集
			params: {}, // 查询参数
			filters: {}, // 过滤条件
            count: 0, // 数据总数
            pageSize: 10, // 每页显示数量
            page: 1, // 当前页
            sort: '', // 排序字段
            desc: true, // 排序规则
            realWidth: null, // 实际宽度
            scrollBar: 0, // 滚动条宽度
            scrollY: false, 
            scrollX: false,
            side: false,
            sideState: false, 
            sideWidth: 0,
            sideTemplate: null,
            sideData: {},
            sideIndex: 0,
            isLoading: true
		}
	},

	computed: {

		/**
		 * 列表数据来源判断
		 * @return {Boolean} [description]
		 */
		isClient() {

			return typeis(this.datas) === 'array'
		},

		/**
		 * 左侧固定列表宽度
		 * @return {[type]} [description]
		 */
		fixedLTRWidth() {

			return this.fixedLTRCols.reduce((sum, col) => {

				return sum + parseInt(col.width)
			}, 0)
		},

		/**
		 * 右侧固定列宽度
		 * @return {[type]} [description]
		 */
		fixedRTLWidth() {

			return this.fixedRTLCols.reduce((sum, col) => {

				return sum + parseInt(col.width)
			}, 0)
		}
	},

	watch: {

		/**
		 * 监听选中集合变化
		 * @param  {[type]} val [description]
		 * @return {[type]}     [description]
		 */
		checkIds(val) {

			this.$broadcast('table.checkAll', this.isClient 
									? val.length == this.clientDataSet.length
									: val.length == this.serverDataSet.length)
			this.$emit('table.check.change', val)
		}
	},

	mixins: [ dataMixin, utilMixin ],

	components: {

		StiTableFilter,
		StiTableSide,
		StiTheader,
		StiTbody,
		StiFixedTable,
		StiTableNoty,
		StiTableLoading,
		StiTablePagination
	},

	methods: {

		/**
		 * 初始化列表
		 * @return {[type]} [description]
		 */
		init() {

			//初始化分页属性
			this.page = this.initPage
			this.pageSize = this.initSize
			this.sort = this.initSort
			this.desc = this.initDesc
			
			this.tbodyDom = this.$refs.tbody.$el 
			this.theaderDom = this.$refs.theader.$el
			this.params = this.initParams
			this.cols = this.fixedLTRCols.concat(this.cols, this.fixedRTLCols)
			this.colSort = this._setSort()
			this.scrollBar = this._getScrollBar()
			this._calculateWidth()
		},

		/**
		 * 重置
		 * @return {[type]} [description]
		 */
		reset() {

			this.checkIds = []
			this.sideState = false
			this.sideData = null
		},

		/**
		 * 跳转到指定页
		 * @param  {[type]} curPage [description]
		 * @return {[type]}         [description]
		 */
		_turn2page(curPage = 1) {

			this.page = curPage
			if(!this.isClient) {
				//服务端分页需重新抓取数据
				this.fetchDatas()
			}
		},

		/**
		 * 搜索操作
		 * @param  {[type]} params [description]
		 * @return {[type]}        [description]
		 */
		search(params) {

			this.params = params
			this.reset()
			this._turn2page()
		},

		/**
		 * 过滤操作
		 * @param  {[type]} filters [description]
		 * @return {[type]}         [description]
		 */
		filter(filters) {

			const _filter = {}

			//过滤器条件处理
			filters.forEach(filter => {

				let content = _filter[filter.id]

				if(content === undefined) {

					_filter[filter.id] = filter.content
				} else {

					_filter[filter.id] = [].concat(content, filter.content)
				}
			})

			this.filters = _filter
			this._turn2page()
		},

		/**
		 * 排序操作
		 * @return {[type]} [description]
		 */
		sortCol(col) {

			this.sortDatas(col)
			this.$emit('table.sort')
		},

		/**
		 * 侧边栏功能
		 * @param  {[type]} state [description]
		 * @param  {[type]} data  [description]
		 * @param  {[type]} index [description]
		 * @return {[type]}       [description]
		 */
		toggleSide(state, data, index) {

			if(!this.side) {

				return
			}

			this.sideState = state
			data !== undefined && (this.sideData = data)
			index !== undefined && (this.sideindex = index)
		},

		/**
		 * 过滤功能开启
		 * @param  {[type]} state [description]
		 * @return {[type]}       [description]
		 */
		switchFilter(state) {

			this.$refs.theader.switchFilter(state)
			this.$refs.filter.switchFilter(state)
		},

		/**
		 * 展开操作
		 * @return {[type]} [description]
		 */
		expand(data, index) {
			
			this.$emit('table-expand', data, index)
		},

		/**
		 * 单选操作
		 * 更新checkIds
		 * @param  {[type]} value 值
		 * @param  {[type]} state 状态
		 * @param  {[type]} data  数据
		 * @param  {[type]} index 索引
		 * @return {[type]}       [description]
		 */
		check(value, state, data, index) {

			let checkIds = this.checkIds,
				_index = checkIds.indexOf(value)

			if(state) {

				//不存在则添加
				checkIds.push(value)
			} else {

				//存在则删除
				checkIds.splice(_index, 1)
			}

			this.$emit('check', value, state, data, index)
		},

		/**
		 * 全选操作
		 * 更新checkIds以及表头的全选状态
		 * @return {[type]} [description]
		 */
		checkAll(state) {

			let checkField = this.checkField,
				dataSet = this.isClient ? this.clientDataSet : this.serverDataSet
				
			//设置选中ids
			if(state) {

				dataSet.forEach(data => {

					const _value = data[checkField],
						_index = this.checkIds.indexOf(_value)

					if(_index == -1) {

						this.checkIds.push(_value)
					}
				})
			} else {

				this.checkIds = []
			}

			this.$refs.tbody.checkAll(state)
			this.$emit('table.check.all', this.checkIds)
		},

		/**
		 * 改变数据条数
		 * @param  {[type]} size [description]
		 * @return {[type]}      [description]
		 */
		changeSize(size) {

			this.pageSize = size
			this._turn2page()
		},

		/**
		 * 提示信息
		 * @param  {[type]} content [description]
		 * @param  {[type]} type    [description]
		 * @return {[type]}         [description]
		 */
		noty(content, type) {

			this.$refs.noty.noty(content, type)
		},

		resizeHandler() {

			this.scrollY = this._hasScroll(this.tbodyDom, 'vertical')
		},

		scrollHandler() {

			let tbodyDom = this.tbodyDom,
				theaderDom = this.theaderDom

			theaderDom.scrollLeft = tbodyDom.scrollLeft

			if(this.$refs.fixLTRTable) {

				let fixedLTRDom = this.$refs.fixLTRTable.$refs.tbody.$el

				fixedLTRDom.scrollTop = tbodyDom.scrollTop
			}

			if(this.$refs.fixRTLTable) {

				let fixedRTLDom = this.$refs.fixRTLTable.$refs.tbody.$el

				fixedRTLDom.scrollTop = tbodyDom.scrollTop
			}
		}
	},

	mounted() {

		this.init()
		this.initDatas()
		this.reCalcWidth = _.throttle(() => {

			this._calculateWidth()
		}, 10)
		addResize(this.$el, this.reCalcWidth.bind(this))
	},

	beforeDestory() {

		removeResize(this.$el, this.reCalcWidth)
	}
}

export { default as StiColumn } from './column'
