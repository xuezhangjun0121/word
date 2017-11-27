/**
 * 小屏app
 */
import template from '../templates/app'
import appMenu from 'apps/app/components/menu'
import breadcNav from 'apps/app/components/bcNav'

export default function initApp(StiVue) {

	StiVue.app = function(options = {}) {

		let basic = {

			computed: {

				...this.$mapState({

					//为每个app注入登录信息、用户信息
					isLogin: state => state.isLogin,
					user: state => state.user
				})
			}
		}

		StiVue.$adapter(options)

		return StiVue.$assign(basic, options)
	}

}

