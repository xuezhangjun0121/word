import { parseUrl } from 'utils'

const href = {

	inserted(el, binding) {

		let { value = '' } = binding

		el.setAttribute('href', parseUrl(value))
	}
}

export {

	href
}