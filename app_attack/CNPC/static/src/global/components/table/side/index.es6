/**
 * 列表侧边栏
 */
import { getClosestVueParent } from 'utils'

export default {

	name: 'sti-table-side',

	render() {

		return (
			<div class={[ 'sti-table-side', this.type, this.active ? 'active' : null ]}>
				
				<div class="table-side-container"
					style={{width: this.width + 'px', right: this.active ? 0 : -this.width + 'px'}}
					>
					{this.template && this.data && this.compile(this.template, this.data, this.index)}
				</div>
				{
					this.type === 'cover'
					?<div class="table-side-mask"
						onClick={this.clickHandler.bind(this)}
					></div>
					:<div class="table-side-button" onClick={this.clickHandler.bind(this)}>
						<i class="fa fa-angle-double-up fa-lg"></i>
					</div>
				}
			</div>
		)
	},

	props: {

		active: {

			type: Boolean,
			default: false
		},
		width: null,
		template: null,
		data: null,
		index: null,
		type: {

			type: String,
			default: 'expand'
		}
	},

	methods: {

		compile(template, data = {}, index) {

			return template({
				
				data,
				index
			})
		},

		clickHandler() {

			this.parentTable.toggleSide(false)
		}
	},

	mounted() {

		this.parentTable = getClosestVueParent(this.$parent, 'sti-table')

		if (!this.parentTable) {

			throw new Error('side组件必须作为table的子组件!')
		}
	}
}