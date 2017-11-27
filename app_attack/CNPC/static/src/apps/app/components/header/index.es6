/**
 * 头部组件
 *
 * by zhangdi
 */
import { mapState, mapActions } from 'vuex'

import { 

	STI_THEME_DEFAULT, 
	STI_THEME_DARK, 
	STI_THEME_LIGHT, 
	STI_LOCALE_CN, 
	STI_LOCALE_EN 
} from 'constant'
import { deleteCookie } from 'utils'
import './style'
import template from './view'
import stiIcon from 'components/icon'

//定义点击其他部分，下拉框收起的事件
const clickfnc = function(event){
	event.data.vueObj.showMsg = false
}

export default {

	template,

	data(){
		return {
			showMsg: false,
			userName: '362',
			logoutApi: '',
		}
	},

	watch: {
		showMsg(val){
			let that = this

			if(val){
				$('body').bind('click', {vueObj: that}, clickfnc)
			} else{
				$('body').unbind('click', clickfnc)
			}
		}
	},

	components: {

		stiIcon
	},

	mounted(){
		this.logoutApi = location.origin+'/api/logout'

		let that = this

		http(location.origin+'/authorization-backend/api/user').then(res =>{
			if(res.success){
				this.userName = res.data.userName
			}
		})
	},

	computed: {

		...mapState({

			locale: state => state.locale,
			theme: state => state.theme,
		})
	},

	methods: {

		...mapActions({

			updateTheme: 'updateTheme',
			updateLocale: 'updateLocale',
			updateLogin: 'updateLogin'
		}),

		toggleTheme() {
			
			let themes = [ STI_THEME_DEFAULT, STI_THEME_DARK ]
			
			this.updateTheme(themes.filter(item => item !== this.theme)[0])
		},

		toggleLocale() {

			let locales = [ STI_LOCALE_CN, STI_LOCALE_EN ]

			this.updateLocale(locales.filter(item => item !== this.locale)[0])
		},

		goHome() {

			this.$router.push({

				path: '/'
			})
		},

		open() {

			this.$publish('sidenav.open')
		},

		exit() {
			
			deleteCookie('access_token')
			deleteCookie('user_id')
			// this.updateLogin(false)
			// window.location.href = window.location.protocol + '//' + window.location.host + '/api/logout';
			// location.href = ;
			http(location.origin + '/api/logout').then(res=>{
				location.href = location.origin
			})
		},

		personal(){
			this.showMsg = !this.showMsg
		},

		userDetail(){
			this.$router.push('/detail')
		}
	}
}

