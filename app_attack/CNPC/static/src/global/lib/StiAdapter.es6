/**
 * 兼容vuex 1.x
 * @param  {[type]} vuex [description]
 * @return {[type]}         [description]
 */
function vuexAdapter(options) {

	let { vuex, computed = {}, methods = {} } = options

	if(vuex) {

		delete options.vuex 

		let { getters = {}, actions = {} } = vuex,
			getterKeys = Object.keys(getters),
			actionKeys = Object.keys(actions)

		assem(getterKeys, computed, function(key) {

			return this.$store.getters[key]
		})

		assem(actionKeys, computed, function(key) {

			return this.$store.dispatch(key)
		})
	}

	function assem(keys, attr, callback) {

		while(keys.length > 0) {

			let key = keys.shift(),
				_data = options[attr][key]

			if(_data) {

				throw Error(key + '计算属性或方法已存在，请选择其他命名')
			}

			options[attr][key] = function(){

				return callback.bind(this, key)
			}
		}
	}

	return options
}

/**
 * 生命周期适配器
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
function lifecycleAdapter(options) {

	let {

		init,
		beforeCompile,
		compiled,
		ready,
		attached,
		detached,
	} = options

	if(attached || detached) {

		throw Error('attached或detached在Vue2.x已不再支持')
	}

	if(typeof init === 'function') {

		let _beforeCreate = options.beforeCreate

		options.beforeCreate = function() {

			init.call(this)
			_beforeCreate && _beforeCreate.call(this)
		}
	}

	if(typeof beforeCompile === 'function') {

		let _beforeMount = options.beforeMount

		options.beforeMount = function() {

			beforeCompile.call(this)
			_beforeMount && _beforeMount.call(this)
		}
	}

	if(typeof ready === 'function') {

		let _mounted = options.mounted

		options.mounted = function() {

			ready.call(this)
			_mounted && _mounted.call(this)
		}
	}

	return options
}

/**
 * 兼容1.x配置适配器
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
function stiAdapter(options) {

	vuexAdapter(options)
	lifecycleAdapter(options)

	return options
}

export default stiAdapter