/**
 * 基于Vue-material主题配置文件
 * 
 */
import { STI_THEME_DEFAULT, STI_THEME_LIGHT, STI_THEME_GOOGLE } from 'constant'

export default {

	[STI_THEME_DEFAULT]: {

		primary: {
			color: 'blue',
			hue: 500
		},
		accent: {
			color: 'blue',
			hue: 100,
			textColor: 'white'
		},
		warn: 'red',
		background: {

			color: 'grey',
			hue: 100
		},
	},
	[STI_THEME_LIGHT]: {

		primary: {

			color: 'blue',
			hue: 100,
		},
		accent: 'pink',
		warn: 'red',
		notice: 'yellow',
		background: {

			color: 'grey',
			hue: 100
		}
	},
	[STI_THEME_GOOGLE]: {

		primary: {

			color: 'blue',
			hue: 100,
		},
		accent: 'pink',
		warn: 'red',
		notice: 'yellow',
		background: {

			color: 'grey',
			hue: 100
		}
	}
}