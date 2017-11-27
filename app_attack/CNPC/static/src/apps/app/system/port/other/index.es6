/*
 * 接口配置
 * */

import template from './view'
// import './style.less'

export default StiVue.app({

    template,

    data(){
        return {
            alert: {
                title: '提示',
                contentHtml: '提交成功',
                ok: '确认'
            },
            datasOther: []
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

        otherAdd(value, state, data, index) {
            // console.log(value, state, data, index)
        },

        confirmData() {
            this.$root.confirm({title: '提示', content: '确认删除吗？'}).then(() => {

                let url = '/data_config/'
                let url_data = {
                    type: this.datasOther[0].type,
                    id: this.$refs.tableData.checkIds
                }
                let settings = {
                    userId: 2,
                    access_token: '1125F8D88DC19F818F6A26425C49256D',
                    url_data: JSON.stringify(url_data)
                }

                url += '?' + $.param(settings)

                http.delete(url)
                    .then(res => {
                        if(res.success) {
                            http.get('/system/interface_display/')
                                .then(res => {

                                    if(res.success) {
                                        this.datasOther = res.data.other
                                    }
                                })
                        }
                    })

            }).catch(() => {
                // alert('删除失败')
            })
        },
        addData() {

            if(this.datasOther.length == 0){

                this.$router.push({name: 'addother'})

                return
            }

            this.alert.contentHtml = '数据转发地址已存在'
            this.openDialog('dialog1')
        },
        deleteData() {
            if(0 == this.$refs.tableData.checkIds.length) {

                this.alert.contentHtml = '请选择要删除的数据'
                this.openDialog('dialog1')

                return
            }

            this.confirmData()
        },
        editData(scope) {

            this.$router.push({name: 'editother', params: {

                id: scope.data.id,
                ip: scope.data.ip,
                port: scope.data.port,
                queuename: scope.data.queuename
            }})
        }
    },

    created () {

        http.get('/system/interface_display/')
            .then(res => {

                // console.log(res)
                if(res.success) {
                    this.datasOther = res.data.other
                }
            })
    }
})