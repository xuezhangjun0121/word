/**
 * 大屏app
 */
import template from '../templates/visualize'

export default function initVisualize(StiVue) {

	StiVue.visualize = function(options = {}) {

		let compTemp

		if(options.template) {

			compTemp = options.template
			delete options.template
		}

		//基础配置
		let basic = {

				computed: {

					...this.$mapState({

						//为每个app注入登录信息、用户信息
						isLogin: state => state.isLogin,
						user: state => state.user
					})
				},

				template: this.$compile(template, {
					
					compTemp: compTemp
				})
			}

		StiVue.$adapter(options)

		return StiVue.$assign(basic, options)
	}
}

