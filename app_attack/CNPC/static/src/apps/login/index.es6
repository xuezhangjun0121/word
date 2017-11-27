import './style'
import template from './view'
import { mapActions } from 'vuex'
import { setCookie, getCookie } from 'utils'

/**
 * 设置token
 * @param {[type]} token [description]
 * @param {Number} days  [description]
 */
function setToken(token, days = 30) {

	setCookie('access_token', token, days)
}

/**
 * 设置userId
 * @param {[type]} token [description]
 * @param {Number} days  [description]
 */
function setUserId(token, days = 30) {

	setCookie('user_id', token, days)
}

export default {

	template,

	data() {

		return {

			username: '',
			password: '',
			authcode: '',
			verification: '',
			info: ''
		}
	},

	methods: {

		...mapActions({

			updateLogin: 'updateLogin'
		}),

		login() {

			http.post('/login/', {

				data: {

					username: this.username,
					password: this.password
				}
			}).then(res => {

				/*
				 * 登录成功
				 * 更新token
				 * 先用万能token
				 */
				setToken('1125F8D88DC19F818F6A26425C49256D')
				//setToken(res.data['access_token'])
				setUserId(res.data['userId'])
				this.updateLogin(true)
				this.$router.back()
			}, res => {

				//登录失败
				this.info = res.message
			})
		}
	}
}