import './style'
import template from './view'

const NAV_HEIGHT = 40

export default {

	template,

	data() {

		return {

			tabList: [],
			activeTab: null,
			activeTabIndex: 0,
			activeTabStyle: null,
			activeIndexStyle: null
		}
	},

	props: {

		direction: {

			type: String,
			default: 'top'
		},

		align: {

			type: String,
			default: 'left'
		}

	},

	computed: {

		tabsStyle() {

			switch(this.direction){

				case 'top':

					return {

						tabs: null,

						nav: {

							height: NAV_HEIGHT + 'px'
						},

						content: null
					}
				case 'bottom':

					return {

						tabs: {

							height: '100%',
							paddingBottom: NAV_HEIGHT + 'px'
						},

						nav: {

							height: NAV_HEIGHT + 'px',
							position: 'absolute',
							bottom: 0
						},

						content: {
							
							height: '100%',
							overflowY: 'auto'
						}
					}
				default:

					return {

						tabs: null,

						nav: {

							height: NAV_HEIGHT + 'px'
						},

						content: null
					}
			}
		},
	},

	methods: {

		checkTab(tab) {

			let len = this.tabList.length,
				i = 0

			for(; i < len; i++) {

				if(this.tabList[i].id === tab.id) {

					return {

						exists: true,
						index: i
					}
				}
			}

			return {

				exists: false,
				index: null
			}
		},

		registryTab(tab) {

			let result = this.checkTab(tab)

			if(result.exists) {

				this.updateTab(result.index, tab)
			} else {

				this.tabList.push(tab)

				if(tab.active) {

					this.setActiveTab(tab)
				}
			}
		},

		updateTab(index, tab) {

			Object.assign(this.tabList[index], tab)
		},

		calcActiveIndexStyle(index) {

			let tab = this.$refs.headers[index]

			this.activeIndexStyle = {

				width: tab.offsetWidth + 'px',
				left: tab.offsetLeft + 'px',
				top: this.direction === 'bottom' ? 0 : null
			}
		},

		calcTabsPos() {

			this.tabList.forEach((tab, index) => {

				tab.el.style.left = index * 100 + '%'
			})
		},

		calcActiveTabStyle(index) {

			if(this.direction === 'bottom') {

				this.activeTabStyle = {

					marginLeft: index ? -(100 * index) + '%' : null,
					height: '100%'
				}
			}

			this.activeTabStyle = {

				marginLeft: index ? -(100 * index) + '%' : null,
				height: this.tabList[index].el.offsetHeight + 'px'
			}
		},

		setActiveTab(tab, $index = 0) {

			this.activeTab = tab
			this.activeTabIndex = $index

			this.$nextTick(() => {

				this.calcTabsPos()
				this.calcActiveTabStyle($index)
				this.calcActiveIndexStyle($index)
			})

			this.$emit('tab.change', tab, $index)
		}
	},

	mounted() {

		if(!this.activeTab) {

			this.setActiveTab(this.tabList[0])
		}

		// this.$nextTick(() => {
		// 	if (this.tabList.length && !this.activeTab) {
        //
		// 		this.setActiveTab(this.tabList[0])
		// 	}
		// });
	}
}