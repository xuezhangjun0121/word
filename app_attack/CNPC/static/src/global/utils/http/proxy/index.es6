/**
 * 增加jquery.ajax代理
 * 确保平台所有请求可控（平台自身数据接口，第三方库）
 * 
 */
import { STI_AJAX_TIMEOUT, STI_AJAX_BASEURL } from 'constant'
import { pathJoin } from 'utils'

function proxyAjax({

	param = {},
	beforeHandler = () => void(0),
	alwaysHandler = () => void(0),
	successHandler = () => void(0),
	errorHandler = () => void(0)
} = {}) {

	let handler = {

		apply(target, thisBinding, args) {

			if(args === undefined || args.length === 0) {

				throw Error('参数不能为空！')
			}

			let [ url, settings = {} ] = args

			let _beforeSend = settings.beforeSend

			let logger, _param = {}

			for(let k in param) {

				if(param.hasOwnProperty(k)) {

					let value = param[k]

					if(typeof value === 'function') {

						_param[k] = value.call(null)
					} else {

						_param[k] = value
					}
				}
			}

			if (!/^http(s)?:\/\//.test(url)) {

				//设置url
				url = pathJoin(STI_AJAX_BASEURL, url)
			}

			//设置通用参数
			Object.assign(settings, {

				data: {

					...settings.data,
					..._param
				},

				beforeSend: function(xhr) {

					beforeHandler(xhr)
					_beforeSend && _beforeSend(xhr)
				},

				timeout: STI_AJAX_TIMEOUT
			})

			let deferred = Reflect.apply(target, thisBinding, [ url, settings ])
						.always(function(data, state, xhr) {

							alwaysHandler(url, data, state, xhr)
						})
						.done(function(data, state, xhr) {

							successHandler(url, data, state, xhr)
						})
						.catch(function(xhr, state, errorThrown) {

							errorHandler(url, xhr, state, errorThrown)
						})

			return deferred
		}
	}

	$.ajax = new Proxy($.ajax, handler)
}

export default proxyAjax

