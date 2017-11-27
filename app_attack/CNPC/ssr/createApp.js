/**
 * [Vue description]
 * @type {[type]}
 */
const Vue = require('vue')
const createRouter = require('./createRouter')

module.exports = function createApp (context) {

	const router = createRouter()

	const app = new Vue({
    
		router,
		data: {
		  url: context.url
		},
		template: `<div>The visited URL is: {{ url }}</div>`
	})

	return {

		app,
		router
	} 
}