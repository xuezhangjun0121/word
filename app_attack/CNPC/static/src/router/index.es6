import Router from 'lib/StiRouter'
import store from 'store/index'
import App from 'apps/app'
import HomePage from 'apps/app/home'
import LoginPage from 'apps/login'
import ErrorPage from 'apps/error'
import routes from './routes'

import log from './log'
import filter from './filter'
import { before as paramBefore } from './param'
import { getCookie } from 'utils'

let router = new Router({store: store})
.register('', App, {
			
	children: [

		{
			path: '',
			component: HomePage,
			meta: {
				requestAuth: true,
				text: '首页',
			}
		},
		{
			path: '/home',
			name: 'home',
			component: HomePage,
			meta: {
				requestAuth: true,
				text: '首页',
			}
		},
		...Router.setMetas(routes.apps, {

			requestAuth: true, 
			progress: {

				color: '#455A64'
			}
		})
	]
})
.register('/login', LoginPage, {
	name: 'login',
	beforeEnter(to, from, next) {

		if(getCookie('access_token') === null) {

			next()
		} else {
			
			router.router.push('home')
		}
	}
})
.register('*', ErrorPage, {	name: 'error' })
.before(log)
.before(filter)
.before(paramBefore)

export default router.router

