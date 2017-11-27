import { FIX_WIDTH } from './variable'

let scrollBarWidth

/**
 * 计算滚动条宽度
 * @return {[type]} [description]
 */
export function getScrollBar() {

	if (scrollBarWidth !== undefined) {

		return scrollBarWidth
	}

	const outer = document.createElement('div')

	outer.style.visibility = 'hidden'
	outer.style.width = '100px'
	outer.style.height = '100px'
	outer.style.position = 'absolute'
	outer.style.top = '-9999px'
	outer.style.overflow = 'scroll'

	const inner = document.createElement('div')

	inner.style.width = '101px'
	inner.style.height = '100px'

	document.body.appendChild(outer)
	outer.appendChild(inner)

	const offsetHeight = outer.offsetHeight,
		clientHeight = outer.clientHeight

	outer.parentNode.removeChild(outer)

	return scrollBarWidth = offsetHeight - clientHeight
}

/**
 * 判断元素是否滚动
 * @param  {[type]}  el        [description]
 * @param  {String}  direction [description]
 * @return {Boolean}           [description]
 */
export function hasScroll(el, direction = 'horizontal') {

	if(direction == 'horizontal') {

		return el.scrollWidth > el.clientWidth
	}

	return el.scrollHeight > el.clientHeight
}

/**
 * 计算列宽
 * @param  {[type]} maxWidth [description]
 * @param  {[type]} cols     [description]
 * @return {[type]}          [description]
 */
export function calculateWidth(maxWidth, cols) {

	let emptyCols = cols.filter(col => col.width == 0), //未设置宽
		widthSum = cols.reduce((sum, col) => sum += parseInt(col.width), 0), //各列总和
		len = emptyCols.length,
		totalWidth = 0

	cols.forEach(col => {

		if(col.width == 0) {

			col.realWidth = widthSum < maxWidth ? Math.max(Math.floor((maxWidth - widthSum) / len), FIX_WIDTH) : FIX_WIDTH
		}

		totalWidth += parseInt(col.realWidth)
	})

	return totalWidth
}
