export default {

	data() {
		return {
			confirmTitle: '提示',
			confirmContent: '确认操作？'
		}
	},

	methods: {
		confirm(options = {}){
			//修改提示内容
			this.$root.confirmTitle = options.title == undefined ? this.$root.confirmTitle : options.title
			this.$root.confirmContent = options.content == undefined ? this.$root.confirmContent : options.content

			let that = this,
				childRef = null

			//找到该子组件的refs
			for(let i = 0; i < this.$children.length; i++){
				if(this.$children[i].$refs.hasOwnProperty('sti-confirm')){
					childRef = this.$children[i].$refs['sti-confirm']
				}
			}

			//解绑所有事件，为了防止没点击缺关闭提示窗
			$(childRef.$el).find('.md-dialog-actions button').unbind('click')

			//给两个按钮绑事件
			let dialog = new Promise(function(resolve, reject){
				childRef.open()
				
				$(childRef.$el).find('.md-dialog-actions button:first').one('click', function(){
					reject()
				})

				$(childRef.$el).find('.md-dialog-actions button:last').one('click', function(){
					resolve()
				})
			})

			return dialog
		}
	}
}