/**
 * app注册
 *
 * by zhangdi
 */

const routes = {

	apps: [
		{
			path: '/assay',
			name: 'assay',
			component: resolve => {
				//require.ensure(dep, cb, name)
				//dep,文件路径
				//cb,执行
				//name,包名，确保同一个app的内容打包成一个文件
				require.ensure(['apps/app/assay'], () => {

					resolve(require('apps/app/assay'))
				}, 'assay')
			},
			meta: {

				text: '',
			},
			children: [
				{
					path: 'attack_alert',
					name: 'attack_alert',
					defaultView: true,
					component: resolve => {

						require.ensure(['apps/app/assay/attack_alert'], () => {

							resolve(require('apps/app/assay/attack_alert'))
						}, 'assay')

					},
					meta: {

						text: ''
					}
				},
				{
					path: 'malignity_file',
					name: 'malignity_file',
					defaultView: true,
					component: resolve => {

						require.ensure(['apps/app/assay/malignity_file'], () => {

							resolve(require('apps/app/assay/malignity_file'))
						}, 'assay')
					},
					meta: {

						text: ''
					}
				},
				]
		},
		{
			path: '/ip',
			name: 'ip',
			component: resolve => {
				//require.ensure(dep, cb, name)
				//dep,文件路径
				//cb,执行
				//name,包名，确保同一个app的内容打包成一个文件
				require.ensure(['apps/app/ip'], () => {

					resolve(require('apps/app/ip'))
				}, 'ip')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/alert',
			name: 'alert',
			component: resolve => {
				//require.ensure(dep, cb, name)
				//dep,文件路径
				//cb,执行
				//name,包名，确保同一个app的内容打包成一个文件
				require.ensure(['apps/app/alert'], () => {

					resolve(require('apps/app/alert'))
				}, 'alert')
			},
			meta: {
				
				text: '',
			}
		},
		{
			path: '/rule',
			name: 'rule',
			component: resolve => {
				//require.ensure(dep, cb, name)
				//dep,文件路径
				//cb,执行
				//name,包名，确保同一个app的内容打包成一个文件
				require.ensure(['apps/app/rule'], () => {

					resolve(require('apps/app/rule'))
				}, 'rule')
			},
			meta: {
				
				text: '',
			}
		},
		{
			path: '/system',
			name: 'system',
			component: resolve => {
				//require.ensure(dep, cb, name)
				//dep,文件路径
				//cb,执行
				//name,包名，确保同一个app的内容打包成一个文件
				require.ensure(['apps/app/system'], () => {

					resolve(require('apps/app/system'))
				}, 'system')
			},
			meta: {

				text: '',
			},
			children: [
				{
					path: 'config',
					name: 'config',
					defaultView: true,
					component: resolve => {

						require.ensure(['apps/app/system/config'], () => {

							resolve(require('apps/app/system/config'))
						}, 'system')

					},
					meta: {

						text: ''
					}
				},
				{
					path: 'user',
					name: 'user',
					component: resolve => {

						require.ensure(['apps/app/system/user'], () => {

							resolve(require('apps/app/system/user'))
						}, 'system')

					},
					meta: {

						text: ''
					}
				},
				{
					path: 'port/hdfs',
					name: 'hdfs',
					component: resolve => {

						require.ensure(['apps/app/system/port/hdfs'], () => {

							resolve(require('apps/app/system/port/hdfs'))
						}, 'system')

					},
					meta: {

						text: ''
					}
				},
				{
					path: 'port/kafka',
					name: 'kafka',
					component: resolve => {

						require.ensure(['apps/app/system/port/kafka'], () => {

							resolve(require('apps/app/system/port/kafka'))
						}, 'system')

					},
					meta: {

						text: ''
					}
				},
				{
					path: 'port/other',
					name: 'other',
					component: resolve => {

						require.ensure(['apps/app/system/port/other'], () => {

							resolve(require('apps/app/system/port/other'))
						}, 'system')

					},
					meta: {

						text: ''
					}
				},
				{
					path: 'log',
					component: resolve => {

						require.ensure(['apps/app/system/log'], () => {

							resolve(require('apps/app/system/log'))
						}, 'system')

					},
					meta: {

						text: ''
					}
				}
			]
		},
		{
			path: '/detail',
			name: 'detail',
			component: resolve => {
				//require.ensure(dep, cb, name)
				//dep,文件路径
				//cb,执行
				//name,包名，确保同一个app的内容打包成一个文件
				require.ensure(['apps/app/user'], () => {

					resolve(require('apps/app/user'))
				}, 'user')
			},
			meta: {
				
				text: '',
			}
		},
		{
			path: '/system/config/addapp',
			name: 'addapp',
			component: resolve => {
				require.ensure(['apps/app/system/config/addapp'], () => {

					resolve(require('apps/app/system/config/addapp'))
				}, 'addapp')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/system/config/editapp',
			name: 'editapp',
			component: resolve => {
				require.ensure(['apps/app/system/config/editapp'], () => {

					resolve(require('apps/app/system/config/editapp'))
				}, 'editapp')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/system/user/adduser',
			name: 'adduser',
			component: resolve => {
				require.ensure(['apps/app/system/user/adduser'], () => {

					resolve(require('apps/app/system/user/adduser'))
				}, 'adduser')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/system/user/edituser/',
			name: 'edituser',
			component: resolve => {
				require.ensure(['apps/app/system/user/edituser'], () => {

					resolve(require('apps/app/system/user/edituser'))
				}, 'edituser')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/system/port/addhdfs',
			name: 'addhdfs',
			component: resolve => {
				require.ensure(['apps/app/system/port/hdfs/addhdfs/'], () => {

					resolve(require('apps/app/system/port/hdfs/addhdfs/'))
				}, 'addhdfs')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/system/port/edithdfs/',
			name: 'edithdfs',
			component: resolve => {
				require.ensure(['apps/app/system/port/hdfs/edithdfs/'], () => {

					resolve(require('apps/app/system/port/hdfs/edithdfs/'))
				}, 'edithdfs')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/system/port/addkafka/',
			name: 'addkafka',
			component: resolve => {
				require.ensure(['apps/app/system/port/kafka/addkafka/'], () => {

					resolve(require('apps/app/system/port/kafka/addkafka/'))
				}, 'addkafka')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/system/port/editkafka/',
			name: 'editkafka',
			component: resolve => {
				require.ensure(['apps/app/system/port/kafka/editkafka/'], () => {

					resolve(require('apps/app/system/port/kafka/editkafka/'))
				}, 'editkafka')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/system/port/addother/',
			name: 'addother',
			component: resolve => {
				require.ensure(['apps/app/system/port/other/addother/'], () => {

					resolve(require('apps/app/system/port/other/addother/'))
				}, 'addother')
			},
			meta: {

				text: '',
			}
		},
		{
			path: '/system/port/editother/',
			name: 'editother',
			component: resolve => {
				require.ensure(['apps/app/system/port/other/editother/'], () => {

					resolve(require('apps/app/system/port/other/editother/'))
				}, 'editother')
			},
			meta: {

				text: '',
			}
		}
	]
}

export default routes
