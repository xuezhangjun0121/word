/**
 * 小屏app
 */
export default function initComponent(StiVue) {

	StiVue.component = function(options) {

		let basic = {

			computed: {

				...this.$mapState({

					//为每个app注入登录信息、用户信息
					isLogin: state => state.isLogin,
					user: state => state.user
				})
			},

			beforeRouteLeave(to, from, next) {

				if(to.meta.confirm) {

					//TODO 判断是否需要确认提示
				}

				next()
			}
		}

		StiVue.$adapter(options)

		return StiVue.$assign(basic, options)
	}
}

