import store from 'store'
import router from 'router'
import proxyAjax from './proxy'
import noty from 'global/noty'
import { 
	STI_STORAGE, 
	STI_SERVER_ERROR, 
	STI_FORMAT_ERROR, 
	STI_FORMAT_HINT, 
	STI_PROCESS_ERROR, 
	STI_PROCESS_HINT 
} from 'constant'
import { getCookie } from 'utils'
import { HttpLogger } from 'utils/Logger'

const serialize = JSON.stringify,
	deserialize = JSON.parse,
	separator = '-'

const infomations = {

	'failed': {
		error: STI_PROCESS_ERROR,
		hint: STI_PROCESS_HINT
	},
	'process.error': {
		error: STI_PROCESS_ERROR,
		hint: STI_PROCESS_HINT
	},
	'format.error': {
		error: STI_FORMAT_ERROR,
		hint: STI_FORMAT_HINT
	}
}

let _csrfToken, logger

/**
 * 获取token
 * @return {[type]} [description]
 */
function getToken() {

	return getCookie('access_token')
}

/**
 * 获取userId
 * @return {[type]} [description]
 */
function getUserId() {

	return getCookie('user_id')
}

//代理ajax操作，配置公共参数、注册公共回调函数
proxyAjax({

	param: {

		'access_token': getToken,
		'userId': getUserId
	},
	beforeHandler: function(xhr) {

		logger = new HttpLogger()
	},
	alwaysHandler: function(url, data, state, xhr) {

		logger.request(url)
		logger.elapse()
	},
	successHandler: function(url, data, state, xhr) {

		logger.state(state)
		logger.response(data)
	},
	errorHandler: function(url, xhr, state, errorThrown) {

		noty({

			title: STI_SERVER_ERROR,
			text: `${url}<br/>${xhr.status} ${errorThrown}`,
			type: state
		})
		logger.state(state)
	}
})

/**
 * request请求
 * @param  {[type]} url      [description]
 * @param  {[type]} settings [description]
 * @return {[type]}          [description]
 */
let request = function(url, settings) {

	let promise = new Promise((resolve, reject) => {

		$.ajax(url, settings)
		.done(function(res, status) {

			if(typeof status === 'undefined') {

				//服务端出错
				return reject(res)
			}

			const response = {
				url,
				res,
				state: 'success'
			}

			//请求结果处理
			request.checkState(response)
					.parseResponse(response)
					.checkResult(response)
					.checkFormat(response)

			if(response.state !== 'success') {

				//请求处理异常
				const infomation = infomations[response.state]
				
				noty({

					title: STI_SERVER_ERROR,
					text: `${url}<br/>${infomation.error}<br/>${infomation.hint}`,
					type: noty.ERROR
				})
				reject(response.res)
			} else {

				//请求正确返回
				resolve(response.res)
			}
		})
	})

	return promise
}

/**
 * 接口状态检查
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
request.checkState = function(response) {

	response.state = response.res ? 'success' : 'failed'

	return request
}

/**
 * 接口处理结果检查
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
request.checkResult = function(response) {

	const { url, res, state } = response

	if(state === 'success') {

		response.state = !res.success ? 'process.error' : 'success'
	}

	return request
}

/**
 * 接口数据结构检查
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
request.checkFormat = function(response) {

	const { url, res, state } = response

	if(state === 'success') {

		response.state = !res.data ? 'format.error' : 'success'
	}

	return request
}

/**
 * 接口数据处理
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
request.parseResponse = function(response) {

	const { res, done, state } = response

	if(state === 'success') {

		response.res = typeof res === 'string' ? JSON.parse(res) : res
	}

	return request
}

/**
 * http工具函数
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
let http = function (url, settings) {

	// let { data } = settings

	// this.$setParam(url, data)

	return request(url, settings)
}

Object.defineProperty(http, 'csrfToken', {

	enumerable: false,
	configurable: false,
	get() {

		return getToken()
	}
})

/**
 * GET操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
http.get = function(...args) {

	let [ url, settings ] = args

	return request(url, {

				...settings,
				type: 'GET'
			})
}

/**
 * POST操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
http.post = function(...args) {

	let [ url, settings ] = args

	return request(url, {
		
				...settings,
				type: 'POST'
			})
}

/**
 * PUT操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
http.put = function(...args) {

	let [ url, settings ] = args

	return request(url, {
		
				...settings,
				type: 'PUT'
			})
}

/**
 * 删除操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
http.delete = function(...args) {

	let [ url, settings ] = args

	return request(url, {
		
				...settings,
				type: 'DELETE'
			})
}

/**
 * POSTJSON操作
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
http.postJson = function(...args) {

	let [ url, settings ] = args

	return request(url, {
		
				...settings,
				type: 'POST',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json'
			})
}

/**
 * 本地存储
 * @param {[type]} key   [description]
 * @param {[type]} value [description]
 */
http.setItem = function(key, value) {

	localStorage.setItem(STI_STORAGE + separator + key, serialize(value))
}

/**
 * [getItem description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
http.getItem = function(key) {

	return deserialize(localStorage.getItem(STI_STORAGE + separator + key))
}

/**
 * [remove description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
http.remove = function(key) {

	localStorage.removeItem(STI_STORAGE + separator + key)
}

/**
 * 清除缓存
 * @return {[type]} [description]
 */
http.clear = function() {

	localStorage.clear()
}

export default http
