/*
 * Created By MengHao  2017.7.4
 * switch组件
 * params: [type, checkedStatus]
 *         type: [String] primary/warn 决定样式
 *         checkedStatus：[Boolean] 当前按钮的状态
 * 通过@clickevent自行绑方法
 * 如果用在table里。eg:<sti-switch @clickevent="tableSwitch(colData)" type="primary" :checked-status="formatter(ColData)"></sti-switch>
 * 如果单独使用，通过checkedStatus双向绑定状态。eg:<sti-switch type="primary" :checked-status.sync="status"></sti-switch>
 */
import './style'
import template from './view'

const CLASS_PRE = 'md-',
		initId = () =>{
			return 'STI-' + (Math.random() + '').substr(-4)
		}

export default {

	template,

	data(){
		return {
			id: initId(),
			Schecked: this.checkedStatus
		}
	},

	props: {

		type: String,
		checkedStatus: {
			type : Boolean,
			default : false
		},
	},

	computed: {

		className() {

			return [this.type === undefined ? null : CLASS_PRE + this.type]
		}
	},

	watch: {
		Schecked(val){
			this.$emit('update:checkedStatus', val)
		}
	},

	methods: {

		clickevent(){
			this.$emit('clickevent')
		}
	}
}