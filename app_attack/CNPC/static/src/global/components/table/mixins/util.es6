import { getScrollBar, hasScroll, calculateWidth } from '../layout'

export default {
	
	methods: {

		/**
		 * 设置响应式属性
		 * @param {[type]} data  [description]
		 * @param {[type]} prop  [description]
		 * @param {[type]} value [description]
		 */
		_setReactiveProp(data, prop, value) {

			if(data.hasOwnProperty(prop)) {
				data[prop] = value
			} else {
				this.$set(data, prop, value)
			}
		},

		/**
		 * [setReactiveProps description]
		 * @param {[type]} data  [description]
		 * @param {[type]} props [description]
		 */
		_setReactiveProps(data, props) {

			for(let prop in props) {

				if(props.hasOwnProperty(prop)) {

					let value = props[prop]

					this._setReactiveProp(data, prop, value)
				}
			}
		},

		/**
		 * 设置排序字段
		 */
		_setSort() {

			if(!this.initSort) {

				return null
			}

			const sortCol = this.cols.find(col => col.id == this.initSort)

			sortCol.desc = this.initDesc

			return sortCol
		},

		_calculateWidth() {

			const maxWidth = this.$el.clientWidth, //初始化容器最大宽度
				totalWidth = calculateWidth(maxWidth, this.cols)

			this.realWidth = Math.min(totalWidth, maxWidth)
			this.scrollY = hasScroll(this.tbodyDom, 'vertical')
			this.scrollX = totalWidth > maxWidth
		},

		_getScrollBar() {

			return getScrollBar()
		},

		_hasScroll(el, direction = 'horizontal') {

			return hasScroll(el, direction)
		},

		/**
		 * 注册列
		 * @param  {[type]} column [description]
		 * @return {[type]}        [description]
		 */
		registryColumn(column) {

			if(column.type == "side") {

				this.side = true
				this.sideWidth = column.width || 300
				this.sideTemplate = column.template

				return
			}

			if(column.type == "checkbox") {

				this.checkField = column.id
			}

			if(column.fixed && column.ltr) {

				//设置左固定列
				this.fixedLTRCols.push(column)
			} else if(column.fixed && !column.ltr) {

				//设置右固定列
				this.fixedRTLCols.push(column)
			} else {

				//设置普通列
				this.cols.push(column)
			}
		}
	}
}