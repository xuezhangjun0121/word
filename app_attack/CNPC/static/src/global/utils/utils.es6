/**
 * 工具库
 *
 * by zhangdi
 */
import 'utils/classList'
import Fuse from 'fuse.js'
import CryptoJS from 'crypto-js'
import resizeEvent from './detect-element-resize'

import { STI_BASEURL, STI_ROUTE_SEC } from 'constant'

const serialize = JSON.stringify,
	deserialize = JSON.parse,
	rawToString = Object.prototype.toString,
	addResize = resizeEvent.addResizeListener,
	removeResise = resizeEvent.removeResizeListener

function typeis(target) {

	const isAny = /^\[object (\w+)\]$/,
		result = isAny.exec(rawToString.call(target))

	return result ? result[1].toLowerCase() : 'unknown'
}

/**
 * 是否在浏览器环境
 * @return {[type]} [description]
 */
function inBrowser() {

	return typeof window !== 'undefined' &&
		Object.prototype.toString.call(window) !== '[object Object]'
}

/**
 * 检测浏览器版本
 * @return {[type]} [description]
 */
function browserIs() {

	let browser = {}

	if(!inBrowser) {

		return browser
	}

	let nav = navigator.userAgent.toLowerCase()

	let result

	(result = nav.match(/rv:([\d.]+)\) like gecko/)) ? browser.ie = result[1] :
	(result = nav.match(/msie ([\d.]+)/)) ? browser.ie = result[1] :
    (result = nav.match(/firefox\/([\d.]+)/)) ? browser.firefox = result[1] :
    (result = nav.match(/chrome\/([\d.]+)/)) ? browser.chrome = result[1] :
    (result = nav.match(/opera.([\d.]+)/)) ? browser.opera = result[1] :
    (result = nav.match(/version\/([\d.]+).*safari/)) ? browser.safari = result[1] : 0

	return browser
}

/**
 * 加密信息
 * @param  {[type]} content [description]
 * @return {[type]}         [description]
 */
function encrypt(content) {

	if(typeof content === 'object') {

		return CryptoJS.AES.encrypt(serialize(content), STI_ROUTE_SEC).toString()
	}

	return CryptoJS.AES.encrypt(content.toString(), STI_ROUTE_SEC).toString()
}

/**
 * 解密信息
 * @param  {[type]} content [description]
 * @return {[type]}         [description]
 */
function decrypt(content) {

	try {

		return deserialize(CryptoJS.AES.decrypt(content, STI_ROUTE_SEC).toString(CryptoJS.enc.Utf8))
	} catch(e) {

		return CryptoJS.AES.decrypt(content, STI_ROUTE_SEC).toString(CryptoJS.enc.Utf8)
	}

}

/**
 * 类数组对象转为数组
 * @param  {[type]} list  [description]
 * @param  {[type]} start [description]
 * @return {[type]}       [description]
 */
function toArray(list, start) {

	start = start || 0
	let i = list.length - start,
		ret = new Array(i)

	while (i--) {
		ret[i] = list[i + start]
	}

	return ret
}

/**
 * 转数字类型
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
function toNumber (value) {

	if (typeof value !== 'string') {

		return value
	} 

	let parsed = Number(value)

	return isNaN(parsed)
		? value
		: parsed
}

/**
 * 判断是对象、数组、字符串否存在指定值
 * @param  {[type]} val    [description]
 * @param  {[type]} search [description]
 * @return {[type]}        [description]
 */
function contains (val, search) {

	let i

	if (_.isPlainObject(val)) {

		let keys = Object.keys(val)

		i = keys.length

		while (i--) {

			if (contains(val[keys[i]], search)) {

				return true
			}
		}
	} else if (_.isArray(val)) {

		i = val.length

		while (i--) {

			if (contains(val[i], search)) {

				return true
			}
		}
	} else if (val !== null) {

		return val.toString().toLowerCase().indexOf(search) > -1
	}
}

/**
 * 地址路径拼接函数
 * @param  {...[type]} paths [description]
 * @return {[type]}          [description]
 */
function pathJoin(...paths) {

	let separator = '/',
		regexp = /^\//g

	return paths.reduce((url, path) => {

		return url + separator + path.replace(regexp, '')
	}, '')
}

/**
 * 查找满足条件最近的父组件
 * @param  {[type]} $parent  [description]
 * @param  {[type]} cssClass [description]
 * @return {[type]}          [description]
 */
function getClosestVueParent($parent, cssClass) {

	if (!$parent || !$parent.$el) {

		return false
	}

	if ($parent._uid === 0) {

		return false
	}

	if ($parent.$el.classList.contains(cssClass)) {

		return $parent
	}

	return getClosestVueParent($parent.$parent, cssClass)
}

/**
 * fuse模糊匹配
 * @param  {[type]} array [description]
 * @param  {[type]} field [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
function fuzzy(array, field = [
    "title"
], query) {

	if(typeof field === 'string') {

		field = [field]
	}

	let options = {

		shouldSort: true,
		threshold: 0.6,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		minMatchCharLength: 1,
		keys: field
	}

	let fuse = new Fuse(array, options)

	return fuse.search(query)
}

/**
 * 获取源的所有祖先数据
 * @param  {[type]} array    集合
 * @param  {[type]} source   源
 * @param  {String} identity 标示
 * @return {[type]}          [description]
 */
function getParents(array, source, {

	id = 'id',
	parentId = 'pid'
} = {}) {

	let pid = source[parentId]

	if(pid == undefined) {

		//undefined, null
		return []
	}

	/*eslint no-shadow: "off"*/
	let parents = [],
		parent = _.find(array, _.matchesProperty(id, pid))

	if(parent) {

		parents.push(parent)
		parents.push(...getParents(array, parent, {

			id,
			parentId
		}))
	}

	return parents
}

/**
 * url拼接
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
function parseUrl(url) {

	return url.startsWith('/') ? url : STI_BASEURL + '/' + url
}

/**
 * 设置cookie
 * @param {[type]} name    [description]
 * @param {[type]} value   [description]
 * @param {[type]} expires [description]
 */
function setCookie(cookieName, value, expires = 30) {

	let exp = new Date()

	exp.setTime(exp.getTime() + expires * 24 * 60 * 60 * 1000)

	document.cookie = `${cookieName}=${encrypt(value)};expires=${exp.toGMTString()};path=/`
}

/**
 * 获取cookie
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function getCookie(cookieName) {

	let result,
		reg = new RegExp(`(^|)${cookieName}=([^;]*)(;|$)`)

	result = document.cookie.match(reg)

	if(result) {

		return decrypt(result[2])
	}

	return null
}

/**
 * 删除cookie
 * @param  {[type]} cookieName [description]
 * @return {[type]}            [description]
 */
function deleteCookie(cookieName) {

	let exp = new Date(),
		cookie = getCookie(name)

	exp.setTime(exp.getTime() - 1)

	if(cookie !== null) {

		/*eslint space-infix-ops: "off"*/
		document.cookie= `${cookieName}=${encrypt(cookie)};expires=${exp.toGMTString()};path=/`
	}
}

/**
 * [addMouseWheel description]
 * @param {[type]}   element  [description]
 * @param {Function} callback [description]
 */
function addMouseWheel(element, callback) {

	if (element && element.addEventListener) {

		element.addEventListener(browserIs().firefox ? 'DOMMouseScroll' : 'mousewheel', callback)
	}
}

/**
 * [removeMouseWheel description]
 * @param  {[type]}   element  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function removeMouseWheel(element, callback) {

	if (element && element.removeEventListener) {

		element.removeEventListener(browserIs().firefox ? 'DOMMouseScroll' : 'mousewheel', callback)
	}
}

export {

	inBrowser,
	browserIs,
	typeis,
	pathJoin,
	toNumber,
	toArray,
	getClosestVueParent,
	fuzzy,
	getParents,
	parseUrl,
	addMouseWheel,
	removeMouseWheel,
	setCookie,
	getCookie,
	deleteCookie,
	addResize,
	removeResise,
	encrypt,
	decrypt
}
