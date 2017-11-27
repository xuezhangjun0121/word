/**
 * StiVue
 * 基于Vue2.x，兼容1.x
 */
import Vue from 'vue'
import ejs from 'ejs'
import { mapState, mapGetters, mapActions } from 'vuex'

import Sti from 'plugins/Sti'
import web from './templates/web'
import adapter from './stiAdapter'
import initApp from './modules/App'
import initComponent from './modules/Component'
import initVisualize from './modules/Visualize'
import confirmMixin from 'components/confirm/confirmMixin'

let defaultTemp = ejs.render(web, {

	development: process.env.NODE_ENV !== 'production'
})

class StiVue {

	constructor({

		el = '#sti-web',
		template = defaultTemp,
		plugins = [],
		store = null,
		router = null
	} = {}) {

		plugins.forEach(plugin => {

			Vue.use(plugin)
		})

		Vue.use(Sti)

		this.app = new Vue({

			el,
			template,
			store,
			router,
			computed: {

				...mapState({

					isLogin: state => state.isLogin,
					theme: state => state.theme,
					locale: state => state.locale
				})
			},
			mixins: [confirmMixin]
		})
	}
}

StiVue.version = '1.0.0'

StiVue.$mapState = mapState

StiVue.$mapGetters = mapGetters

StiVue.$mapActions = mapActions

StiVue.$adapter = adapter

StiVue.$compile = function(template, data, options) {

	return ejs.render(template, data, options)
}

StiVue.$assign = function(basic, options) {

	return  _.merge(

		basic,
		options
	)
}

initApp(StiVue)
initComponent(StiVue)
initVisualize(StiVue)

export default StiVue

