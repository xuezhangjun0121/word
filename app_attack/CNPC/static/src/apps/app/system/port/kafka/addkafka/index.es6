
import './style.less'
import template from './view'

export default StiVue.app({

    template,

    data () {
        return {

            alert: {
                title: '提示',
                contentHtml: '提交成功',
                ok: '确认'
            },
            username: '',
            ip: '',
            port: '',
            password: '',
            topic: '',
            queuename: '',
            errIp: false,
            errPort: false
        }
    },

    methods: {

        /*ip号校验*/
        isIP(ip) {

            let reSpaceCheck = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;

            if (reSpaceCheck.test(ip)) {

                ip.match(reSpaceCheck);

                if (RegExp.$1 <= 255 && RegExp.$1 >= 0
                    && RegExp.$2 <= 255 && RegExp.$2 >= 0
                    && RegExp.$3 <= 255 && RegExp.$3 >= 0
                    && RegExp.$4 <= 255 && RegExp.$4 >= 0) {

                    return true;
                }

                return false;

            }

            return false;
        },

        /*端口号校验*/
        isPort(str) {
            let parten = /^(\d)+$/g

            if(parten.test(str) && parseInt(str) <= 65535 && parseInt(str) >= 0) {

                return true;
            }

            return false;
        },

        /*控制ip输入框清除图标显示状态*/
        checkedIP() {

            let valueIP = this.ip.trim();

            if(!this.isIP(valueIP)){

                // console.log('false');
                this.errIp = true

                return
            }

            this.errIp = false
        },
        /*控制端口输入框清除图标显示状态*/
        checkedPort() {
            let valuePort = this.port.trim()

            if(!this.isPort(valuePort)){

                // console.log('false');
                this.errPort = true

                return
            }

            this.errPort = false
        },

        openDialog(ref) {
            this.$refs[ref].open();
        },
        onOpen() {
            // console.log('Opened');
        },
        onClose() {
            // console.log('Closed');
        },
        onClose2() {
            // console.log('Closed');
            this.$router.push({ name: 'kafka' })
        },

        submitKafka: function () {

            if(this.errIp || this.errPort){

                return
            }
            let url = '/kafka_config/'
            let kafka_data = {
                username: this.username,
                ip: this.ip,
                port: this.port,
                password: this.password,
                topic: this.topic,
                queuename: this.queuename
            }
            let settings = {
                userId: 2,
                access_token: '1125F8D88DC19F818F6A26425C49256D',
                data: {

                    kafka_data: JSON.stringify(kafka_data)
                }
            }
            let args = [ url, settings ]

            if(this.ip === '' || this.port === '' || this.queuename === '') {

                this.alert.contentHtml = '请先输入完整数据'
                this.openDialog('dialog1')

                return
            }

            this.$root.confirm({title: '提示', content: '确认提交吗？'}).then(() => {

                http.post(...args)
                    .then(res => {
                        if(res.success) {

                            this.alert.contentHtml = '提交成功'
                            this.openDialog('dialog2')

                            return
                        }
                    }, error => {

                        // console.log(error.message);
                        this.alert.contentHtml = error.message
                        this.openDialog('dialog1')
                    })

            }).catch(() => {

            })
        }
    }
})

