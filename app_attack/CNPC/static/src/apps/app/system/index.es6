/**
 * 系统模块
 */

import './style'
import template from './view'
import sySlide from './slideNav/index'

export default StiVue.app({

	template,

	components: {

		sySlide
	},
	
	created () {

        let that = this

        $.ajaxSetup({
            headers: {
               'X-XSRF-TOKEN': that.cookieSet() 
            }
        })
    },

	methods: {
		cookieSet () {

            let cookieList = document.cookie.split(';');
            let xsrf_name = 'XSRF-TOKEN';
            let xsrf_token = '';

            for (let i = 0; i < cookieList.length; i++) {
                if (cookieList[i].match('XSRF-TOKEN')) {

                    let cookie_str = cookieList[i]

                    xsrf_token = cookie_str.substring(cookie_str.search('=')+1, cookie_str.length)

                    return xsrf_token
                }
            }
        },
	}
})

