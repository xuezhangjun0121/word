/**
 * 快捷操作面板
 * 1.app快速切换
 *
 * by zhangdi
 */
import { mapState, mapActions } from 'vuex'

import './style'
import template from './view'
import { 

	STI_THEME_DEFAULT, 
	STI_THEME_LIGHT,
	STI_THEME_GOOGLE,
	STI_LOCALE_CN, 
	STI_LOCALE_EN 
} from 'constant'

export default {

	name: 'app-side',

	template,

	data() {

		return {

			radio2: 1,

			themes: [

				STI_THEME_DEFAULT, 
				STI_THEME_LIGHT,
				STI_THEME_GOOGLE
			]
		}
	},

	computed: {

		...mapState({

			locale: state => state.locale,
			vtheme: state => state.theme,
		})
	},

	methods: {

		...mapActions({

			updateTheme: 'updateTheme',
			updateLocale: 'updateLocale'
		}),

		nav(path) {

			this.$router.push(path)
		},

		clear() {

			http.clear()
			window.history.go(0)
		}
	},

	mounted() {

		this.$subscribe('sidenav.open', function() {

			this.$refs.sidenav && this.$refs.sidenav.toggle()
		})
	}
}