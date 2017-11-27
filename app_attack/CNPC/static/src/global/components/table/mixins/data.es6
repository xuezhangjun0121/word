export default {

	computed: {

		/**
		 * 客户端数据集
		 * @return {[type]} [description]
		 */
		clientDataSet() {

			const datas = this.datas.slice((this.page - 1) * this.pageSize,  this.page * this.pageSize)
			
			//数据发生变化之后重置状态
			this.clearState(datas)
			this.reset()

			return datas
		}
	},

	watch: {

		/**
		 * 监听本地数据集变化
		 * @param  {[type]} val [description]
		 * @return {[type]}     [description]
		 */
		datas(val) {

			this.setDatas(val)
			this._turn2page()
		}
	},

	methods: {

		/**
		 * 初始化数据
		 * @return {[type]} [description]
		 */
		initDatas() {

			if(this.isClient) {

				//加载本地数据
				this.fillDatas()
			} else {

				//加载服务端数据
				this.fetchDatas()
			}
		},

		/**
		 * 本地填充数据
		 * @return {[type]} [description]
		 */
		fillDatas() {

			this.setDatas(this.datas)
			this.sortDatas(this.colSort)
		},

		/**
		 * 服务端抓取数据
		 * @return {[type]} [description]
		 */
		fetchDatas() {

			const { url, page, pageSize: size, sort, desc, params, filters } = this

			this.isLoading = true

			return http[this.method.toLowerCase()](url, {

				data: {

					page,
					size,
					sort,
					desc,
					...params,
					...filters
				},
				beforeSend: this.beforeSend
			}).then((res) => {

				//更新数据
				this.isLoading = false
				this.afterSend && this.afterSend(res)
				this.reset()
				this.setDatas(res.data, res.count)
				this.serverDataSet = res.data
			})
		},

		/**
		 * 扩展数据
		 * @param {[type]} datas  [description]
		 * @param {[type]} len [description]
		 */
		setDatas(datas, len) {

			this.count = len || datas.length
			this.extendState(datas)
		},

		/**
		 * 数据排序
		 * @param  {[type]} col [description]
		 * @return {[type]}     [description]
		 */
		sortDatas(col) {

			if(!col) {

				return false
			}

			let field = col.id,
				desc = col.desc ? 1 : -1

			this.sort = field
			this.desc = col.desc

			if(this.isClient) {

				//本地排序
				this.datas.sort((a, b) => {

					return col.compare.call(this, a[field], b[field], desc)
				})
			} else {

				//服务端跳转首页
				this._turn2page()
			}
		},

		/**
		 * 增加展开和选中响应式属性
		 * 增加索引属性
		 * 并将数据状态复位
		 * @param  {[type]} datas [description]
		 * @return {[type]}         [description]
		 */
		extendState(datas) {

			datas.forEach((data, index) => {

				this._setReactiveProps(data, {
					'_expandState': false,
					'_chckedState': false,
					'_hoverState': false
				})
				data['_data_index'] = index //不做响应式处理
			})
		},

		/**
		 * 清除数据状态
		 * @param  {[type]} datas [description]
		 * @return {[type]}         [description]
		 */
		clearState(datas) {

			datas.forEach((data, index) => {

				data['_expandState'] = false
				data['_chckedState'] = false
				data['_hoverState'] = false
			})
		}
	}
}
