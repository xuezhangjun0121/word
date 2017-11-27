/**
 * 用户管理
 */

import template from './view'
import './style.less'

export default StiVue.app({

    template,

    data () {
      return {

          alert: {
              title: '提示',
              contentHtml: '提交成功',
              ok: '确认'
          },

          id: '',
          username: '',
          name: '',
          perm_data: ''
      }
    },

    methods: {
        
        openDialog(ref) {
            this.$refs[ref].open();
        },
        onOpen() {
            // console.log('Opened');
        },
        onClose() {
            // console.log('Closed');
        },

        add(value, state, data, index) {
            // console.log(value, state, data, index)
        },

        deleteConfirm() {
            this.$root.confirm({title: '提示', content: '确认删除吗？'}).then(() => {
                let url = '/system_manage/users/'
                let settings = {
                    userId: 2,
                    access_token: '1125F8D88DC19F818F6A26425C49256D',
                    data: {
                        id: JSON.stringify(this.$refs.tableUsers.checkIds)
                    }
                }
                let args = [ url, settings ]

                // console.log(settings.data);
                // console.log(args);

                http.delete(...args)
                    .then(res => {

                        if(res.success) {
                            this.$refs.tableUsers.search()
                        }
                    })

            }).catch(() => {
                // alert('删除失败')
            })
        },

        deleteUsers() {
            
            // console.log(this.$refs.tableUsers.checkIds);
            if(0 === this.$refs.tableUsers.checkIds.length) {

                this.alert.contentHtml = '请选择要删除的数据'
                this.openDialog('dialog1')

                return
            }

            this.deleteConfirm()
        },

        editUsers(scope) {

            this.$router.push({name: 'edituser', params: {
                id: scope.data.id,
                username: scope.data.username,
                name: scope.data.name,
                perm_data: scope.data.perm_data
            }})
        }
    }

    /*created () {

        http.get('/system_manage/users')
            .then(res => {
                // this.users = res.data.users
                //     console.log(res)
                // res.data.users.forEach((item, index) => {
                //     this.users.push(item)
                // })
                // console.log(this.users)
            }, (error) => {
                //    弹窗提示您网络不好
            })

    }*/
    /*methods: {
        addUser: function() {
            let formData = JSON.stringify(this.item) // 这里才是你的表单数据
            // let args = [ 'url', this.user1 ]

            // http.post(...args)
            //     .then((res) => {
            //         console.log(res.data.success)
            //         if (res.data.data.token === 'success') {
            //             // this.users.push(this.item)
            //                 return;
            //         }

            //     }, (error) => {
            //
            //     })
            http.post('/system_manage/users', formData).then((res) => {
                // success callback
                // console.log(res)
                // res.data.users.push(formData)
                // this.users = res.data.users
                // console.log(this.users)
                // this.users = res.data.users
            }, (error) => {
                // error callback
            })
        },
        deleteUser: function () {
            http.post('/system_manage/users')
                .then((res) => {

                }, (error) => {

                })

        },
        checkedAll () {
            this.users.forEach((item, index) => {
                item.checked = this.checkAll
            })
        },
        checkItem () {

            for (let i = 0; i< this.users.length; i++) {
                if (!this.users[i].checked) {
                    this.checkAll = false

                    return
                }

            }
            this.checkAll = true
        }
    },*/

})