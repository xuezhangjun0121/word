import { getClosestVueParent } from 'utils'
import StiCheckbox from '../checkbox'
import { addResize, removeResize } from 'utils'

export default {

	name: 'sti-tbody',

	render(h) {

		return (

			<div class="sti-table-body" 
				// style={{'max-height': this.maxHeight + 'px'}} 
				>
				<table cellspacing="0" cellpadding="0" border="0" ref="table">
					<colgroup>
					{
						//设置列宽
						this.cols.map((col, index) => {

							if(index == this.cols.length - 1) {

								if(!this.scrollX && this.scrollY) {

									return <col width={col.realWidth - this.scrollBar} />
								}
							}

							return <col width={col.realWidth} />
						})
					}
					</colgroup>
					<tbody>
					{
						this.dataSet.map((data, index) => {

							return data._expand
								//渲染详细行
								? <tr class="table-expand-content">
									<td colspan={this.cols.length}>{this.compile(data.template, data, index)}</td>
								</tr>
								//渲染数据行
								: <tr class={{hover: data._hoverState}}
									onMouseenter={this.mouseenterHandler.bind(this, data)}
									onMouseleave={this.mouseleaveHandler.bind(this, data)}
									onDblclick={this.dblclickHandler.bind(this, data, index)}
									>
									{
										this.cols.map(col => 
											<td style="text-align:center">
											{
												col.type == 'expand' 
												//渲染展开列
												? <i 
													class={[ "table-expand", "fa", data._expandState ? 'fa-caret-down' : 'fa-caret-right' ]} 
													aria-hidden="true" 
													onClick={this.expand.bind(this, data, index, col.template)}
													onDblclick={event => event.stopPropagation()}></i>
												: col.type == 'checkbox' 
												//渲染多选框
												? <sti-checkbox 
													value={data._chckedState} 
													nativeOnClick={this.check.bind(this, data[col.id], data, index)}
													nativeOnDblclick={event => event.stopPropagation()}/>
												: col.template
												//渲染模板列 
												? this.compile(col.template, data, index) 
												//渲染数据列
												: this.output(col, data, index)
											}
											</td>
										)
									}
								</tr>
						})
					}
					</tbody>
				</table>
			</div>
		)
	},

	props: {

		cols: Array,
		datas: Array,
		page: null,
		maxHeight: null,
		fixed: {

			type: Boolean,
			default: false
		},
		scrollBar: null,
		scrollY: {
			type: Boolean,
			default: false
		},
		scrollX: {

			type: Boolean,
			default: false
		}
	},

	data() {

		return {

			dataSet: []
		}
	},

	watch: {

		datas(val) {

			//数据拷贝
			this.dataSet = val.slice()
		}
	},

	components: {

		StiCheckbox
	},

	methods: {

		/**
		 * 模板内容
		 * @return {[type]} [description]
		 */
		compile(template, data, index) {

			return template({
				
				data,
				index
			})
		},

		/**
		 * 表格内容直出
		 * @param  {[type]} col   [description]
		 * @param  {[type]} data  [description]
		 * @param  {[type]} index [description]
		 * @return {[type]}       [description]
		 */
		output(col, data, index) {

			if(col.id === '$index') {

				return data['_data_index'] + 1
			}

			return data[col.id]
		},

		/**
		 * 下拉展开内容
		 * @param  {[type]} data  [description]
		 * @param  {[type]} index [description]
		 * @return {[type]}       [description]
		 */
		expand(data, index, template, event) {

			data._expandState = !data._expandState

			if(data._expandState) {

				//插入元素
				this.dataSet.splice(index + 1, 0, Object.assign({}, data, {

					_expand: true,
					template: template
				}))
			} else {

				//插入元素
				this.dataSet.splice(index + 1, 1)
			}
			
			//调用table的expand方法
			this.parentTable.expand(data, index)

			event.stopPropagation()
		},

		check(value, data, index, event) {

			data._chckedState = event.target.checked

			this.parentTable.check(value, data._chckedState, data, index)

			event.stopPropagation()
		},

		checkAll(state) {

			this.dataSet.forEach(data => {

				data._chckedState = state
			})
		},

		mouseenterHandler(data) {

			data._hoverState = true
		},

		mouseleaveHandler(data) {

			data._hoverState = false
		},

		dblclickHandler(data, index) {

			this.parentTable.toggleSide(true, data, index)
		}
	},

	mounted() {

		this.parentTable = getClosestVueParent(this.$parent, 'sti-table')

		if (!this.parentTable) {

			throw new Error('tbody组件必须作为table的子组件!')
		}
		this.dataSet = this.datas.slice()
		this.triggerResize = _.throttle(() => {

			this.$emit('bodyResize')
		}, 10)
		addResize(this.$refs.table, this.triggerResize.bind(this))
	},

	beforeDestory() {

		removeResize(this.$refs.table, this.triggerResize)
	}
}