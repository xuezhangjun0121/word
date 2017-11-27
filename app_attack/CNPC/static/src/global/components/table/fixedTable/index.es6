import StiTheader from '../theader'
import StiTbody from '../tbody'

export default {

	name: 'sti-fixed-table',

	render() {

		return (

			<div class={[ "sti-fixed-table", this.ltr ? "fix-left" : "fix-right", this.scrollY ? 'is-scroll' : null ]} 
				style={(!this.ltr && this.scrollY) 
					? {width: this.width - this.scrollBar  + 'px', right: this.scrollBar + 'px'}
					: {width: this.width + 'px'}}>
				{(!this.ltr && this.scrollY) 
					? <div class="fixed-patch" style={{width: this.scrollBar + 'px', right: -this.scrollBar + 'px'}}></div> 
					: null
				}
				<sti-theader 
					cols={this.cols} 
					sort={this.initSort}
					scrollBar={this.scrollBar}
					ref="theader"
				></sti-theader>
				<sti-tbody 
					cols={this.cols}
					datas={this.datas}
					page={this.page}
					max-height={this.maxHeight}
					scrollY={this.scrollY}
					scrollBar={this.scrollBar}
					ref="tbody"
				></sti-tbody>
			</div>
		)
	},

	props: {

		width: Number,
		cols: Array,
		sort: String,
		maxHeight: null,
		initSort: String,
		datas: Array,
		page: null,
		ltr: {

			type: Boolean,
			default: true
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

			filterable: false
		}
	},

	watch: {

		scrollY(val) {

			console.log(val)
		},

		maxHeight(val) {

			console.log(val)
		}
	},

	components: {

		StiTheader,
		StiTbody
	},

	methods: {

		switchFilter(state) {

			this.filterable = state
		}
	},

	mounted() {

		this.tbodyDom = this.$refs.tbody.$el
	}
}