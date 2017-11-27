import apps from 'router/routes'

let app = _.cloneDeep(apps),
	index = 0

export default function permissionFilter(to, from, done, store) {

	$.ajax('mock/permissions')
	.then(res => {

		//过滤权限，用于搜索功能
		function findSearchList(){
			let result = [],
				permissionList = _.cloneDeep(res.data)

			//console.log(list, app)
			//找第一级，一般来说是大屏或者小屏
			Object.keys(permissionList).forEach((val) => {
				//console.log(val)
				
				let permissionType = permissionList[val],
					toFilterList = app[val]

				//第二级，每个app的操作
				//toFilterList和findType分别对应routes配置的内容和permission的内容
				Object.keys(permissionType).forEach((Aval) => {
					let parentid = index

					//将该app push进去，主要是为了取中文text
					toFilterList.forEach((Rval) => {
						if(Rval.path == Aval){

							if(Rval.meta == undefined || Rval.meta.text == undefined){
								throw Error('请在router/routes里配置[ ' + Aval + ' ]meta.text的属性')
							}

							let path = Aval
							
							//如果是大屏，path还要拼一个val的值
							if(val != 'apps'){
								path = val + '/' + path
							}

							result.push({
								id: index++,
								path: path,
								text: Rval.meta == undefined ? '' : Rval.meta.text
							})
						}
					})

					//有子节点的app
					if(permissionType[Aval].length != 0){
						let tmp = permissionType[Aval],
							RList = null

						//找到route中对应的数组，主要是为了取中文text
						toFilterList.forEach((Rval) => {
							if(Rval.path == Aval){
								RList = Rval.children
							}
						})

						//遍历每个菜单的页面，push进去
						tmp.forEach((Pval) => {
							RList.forEach((Rval) => {							
								if(Rval.path == Pval.menu_path){
									
									if(Rval.meta == undefined || Rval.meta.text == undefined){
										throw Error('请在router/routes里配置[ ' + Pval.menu_path + ' ]meta.text的属性')
									}

									result.push({
										id: index++,
										path: Aval + '/' + Pval.menu_path,
										text: Rval.meta == undefined ? '' : Rval.meta.text,
										pid: parentid
									})
								}
							})
							
						})
					}
				})
			})

			//存权限和用于搜索的权限列表
			store.dispatch('updatePermission', [ result, res.data ])
			console.log(store.state.searchList)
		}

		findSearchList()

		done()
	})
}