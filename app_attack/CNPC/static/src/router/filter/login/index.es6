import { setCookie, getCookie } from 'utils'

export default function loginFilter(to, from, done) {

	// http.get('login/state')
	// .then(res => {

	// 	if(res.username) {

	// 		done()
	// 	} else {

	// 		done('/login')
	// 	}
	// }, res => {

	// 	done('/login')
	// })
	let accessToken = getCookie('access_token')

	setCookie('user_id', 999, 30)
	setCookie('access_token', '1125F8D88DC19F818F6A26425C49256D', 30)

	if(accessToken === null) {

		done('/login')
	} else {

		done()
	}
}