
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

            hdfs: {

                username: '',
                ip: '',
                port: '',
                password: '',
                file_path: ''
            },
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

            let valueIP = this.hdfs.ip.trim();

            if(!this.isIP(valueIP)){

                // console.log('false');
                this.errIp = true

                return
            }

            this.errIp = false
        },
        /*控制端口输入框清除图标显示状态*/
        checkedPort() {
            let valuePort = this.hdfs.port.trim()

            if(!this.isPort(valuePort)){

                // console.log('false');
                this.errPort = true

                return
            }

            this.errPort = false
        },

        /*弹框方法*/
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
            this.$router.push({ name: 'hdfs' })
        },

        submitHdfs: function () {

            if(this.errIp || this.errPort){

                return
            }

            let url = '/hdfs_config/'
            let hdfs_data = {
                username: this.hdfs.username,
                ip: this.hdfs.ip,
                port: this.hdfs.port,
                password: this.hdfs.password,
                file_path: this.hdfs.file_path
            }
            let settings = {
                userId: 2,
                access_token: '1125F8D88DC19F818F6A26425C49256D',
                data: {
                    hdfs_data: JSON.stringify(hdfs_data)
                }
            }
            let args = [ url, settings ]

            if(this.hdfs.ip === '' || this.hdfs.port === '' || this.hdfs.file_path === '') {

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

