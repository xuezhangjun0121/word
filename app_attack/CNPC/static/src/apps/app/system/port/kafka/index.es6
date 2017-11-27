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
            datasKafka: [],
            kafka: {
                id: '',
                username: '',
                ip: '',
                port: '',
                password: '',
                topic: '',
                queuename: ''
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

        kafkaAdd(value, state, data, index) {
            // console.log(value, state, data, index)
        },

        confirmKafka() {
            this.$root.confirm({title: '提示', content: '确认删除吗？'}).then(() => {

                let url = '/kafka_config/'
                let kafka_data = {
                    type: 'kafka',
                    id: this.$refs.tableKafka.checkIds
                }
                let settings = {
                    userId: 2,
                    access_token: '1125F8D88DC19F818F6A26425C49256D',
                    kafka_data: JSON.stringify(kafka_data)
                }

                url += '?' + $.param(settings)

                http.delete(url)
                    .then(res => {
                        if(res.success) {
                            http.get('/system/interface_display/')
                                .then(res => {

                                    // console.log(res)
                                    if(res.success) {
                                        this.datasKafka = res.data.KAFKA
                                    }
                                })
                        }
                    })

            }).catch(() => {
                // alert('删除失败')
            })
        },
        addKafka() {

            if(this.datasKafka.length == 0){

                this.$router.push({name: 'addkafka'})

                return
            }

            this.alert.contentHtml = 'KAFKA地址已存在'
            this.openDialog('dialog1')
        },
        deleteKafka() {

            if(0 == this.$refs.tableKafka.checkIds.length) {

                this.alert.contentHtml = '请选择要删除的数据'
                this.openDialog('dialog1')

                return
            }

            this.confirmKafka()
        },
        editKafka(scope) {

            this.$router.push({name: 'editkafka', params: {

                id: scope.data.id,
                username: scope.data.username,
                ip: scope.data.ip,
                port: scope.data.port,
                password: scope.data.password,
                topic: scope.data.topic,
                queuename: scope.data.queuename
            }})
        },
    },

    created () {

        http.get('/system/interface_display/')
            .then(res => {

                // console.log(res)
                if(res.success) {
                    this.datasKafka = res.data.KAFKA
                }
            })
    }
})