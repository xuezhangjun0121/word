/**
 * 规则模块
 */
import template from './view'
import './style'
import stiButton from 'components/button'

export default StiVue.app({

	template,

	components: {
		stiButton
	},

	data(){
		return {
			name: '',
			vuln_level: '',
			enabled: '',
			levels: []
		}
	},

	methods: {

		searchRule() {

			let params = {

				name: this.name,
				vuln_level: this.vuln_level,
				enabled: 1
			}

			this.$refs.tableRule.search(params)

			/*this.name = ''
			this.vuln_level = ''
			this.enabled = ''*/
		},

		/*phone(scope) {

			console.log(scope)
		},*/

		compare(a, b, desc) {

			if(a < b) {

				return desc * 1
			} else if(a > b) {

				return desc * -1
			}

			return 0
		},

		/*formatter(data) {

			return data.data.enabled === 1 ? true : false
		},

		tableSwitch(scope) {

			// console.log(scope)

			let url = '/rule_manage/'
			let settings = {
				userId: 2,
				access_token: '1125F8D88DC19F818F6A26425C49256D',
				data: {
					id: scope.data.id,
					enable: +!scope.data.enabled
				}

			}
			let args = [ url, settings ]

			http.get(...args).then(res => {

			})
		},*/

		/*detailShow(data, index){
			console.log(data)
			id = data.id

			if(id === ''){
				this.warn = true

				return
			}

			http.get('/rule_display/').then(res => {
				if(res.success){
					this.detail = res.data
					that.warn = false
				}

			})
		},*/

		// 数组去重
		getDistinct(target, source) {
			let value

			for(value of source) {

				if(!target.includes(value)) {
					target.push(value)
				}
			}
		},

		detailShow(data, index){
			// console.log(data);
		}
	},

	created() {
		http.get('/rule_display/')
			.then(res => {
				if (res.success) {
					let levels = [], length = res.data.length

					for (let i = 0; i < length; i++) {
						let level = res.data[i].vuln_level;

						levels.push(level)
					}

					this.getDistinct(this.levels, levels)
					// console.log(this.levels);
				}
			})
	}
})