/**
 * 过滤器插件
 *
 * 注册的插件必须满足
 * 过滤结束必须调用done函数，跳转到下一个过滤器，否则无法继续执行
 */
import loginFilters from './login'
import permissionFilters from './permission'

let authfilters = [

	function before(to, from, done, store) {

		store.dispatch('updatePaths', to.matched.map(route => route.path))
		done()
	},

	loginFilters,
	//permissionFilters,

	function after(to, from, done) {

		done()
	}
]

/**
 * 将过滤器统一转换为promise对象
 * @param  {[type]}   to       [description]
 * @param  {[type]}   from     [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function makePromise(to, from, callback, store){

	return new Promise((resolve, reject) => {

		callback(to, from, resolve, store)

	}).catch(error => {

		console.log('error')
	})
}

async function go(to, from, filters, store) {

	let i = 0,
		len = filters.length

	for(; i < len; i++) {

		let result = await makePromise(to, from, filters[i], store)

		//过滤失败
		if(typeof result === 'boolean' && !result) {

			return false
		}

		//发生跳转
		if(typeof result === 'string' || typeof result === 'object') {

			return result
		}
	}

}

function filter(to, from, store) {

	let rootRoute = to.matched[0]

	if(to.meta.requestAuth) {

		return go(to, from, authfilters, store)
	}
}

export default filter