/*
 * hdfs配置
 * */

import template from './view'
import './style.less'

export default StiVue.app({

    template,

    data(){
        return {
            alert: {
                title: '提示',
                contentHtml: '提交成功',
                ok: '确认'
            },
            datasHdfs: [],
            hdfs: {
                id: '',
                username: '',
                ip: '',
                port: '',
                password: '',
                file_path: ''
            }
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

        hdfsAdd(value, state, data, index) {
            // console.log(value, state, data, index)
        },

        confirmHdfs() {
            this.$root.confirm({title: '提示', content: '确认删除吗？'}).then(() => {

                let url = '/hdfs_config/'
                let hdfs_data = {
                    type: 'hdfs',
                    id: this.$refs.tableHdfs.checkIds
                }
                let settings = {
                    userId: 2,
                    access_token: '1125F8D88DC19F818F6A26425C49256D',
                    hdfs_data: JSON.stringify(hdfs_data)
                }

                url += '?' + $.param(settings)

                http.delete(url)
                    .then(res => {
                        if(res.success) {
                            http.get('/system/interface_display/')
                                .then(res => {

                                    // console.log(res)
                                    if(res.success) {
                                        this.datasHdfs = res.data.HDFS
                                    }
                                })
                        }
                    })

            }).catch(() => {
                // alert('删除失败')
            })
        },

        addHdfs() {

            // console.log(this.datasHdfs.length);
            if(this.datasHdfs.length == 0){

                this.$router.push({name: 'addhdfs'})

                return
            }

            this.alert.contentHtml = 'HDFS地址已存在'
            this.openDialog('dialog1')
        },
        deleteHdfs() {

            if(0 === this.$refs.tableHdfs.checkIds.length) {

                this.alert.contentHtml = '请选择要删除的数据'
                this.openDialog('dialog1')

                return
            }

            this.confirmHdfs()
        },
        editHdfs(scope) {
            // console.log(scope);
            this.$router.push({name: 'edithdfs', params: {
                id: scope.data.id,
                username: scope.data.username,
                ip: scope.data.ip,
                port: scope.data.port,
                password: scope.data.password,
                file_path: scope.data.file_path
            }})
        }
    },

    created () {

        http.get('/system/interface_display/')
            .then(res => {

                if(res.success) {
                    this.datasHdfs = res.data.HDFS
                }
            })
    }
})