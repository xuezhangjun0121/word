
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
            item: {
                username: '',
                name: '',
                perm_data: ''
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
        onClose2() {
            // console.log('Closed');
            this.$router.push({ name: 'user' })
        },

        submitUser: function () {

            let url = '/system_manage/users/'
            let settings = {
                userId: 2,
                access_token: '1125F8D88DC19F818F6A26425C49256D',
                data: this.item

            }
            let args = [ url, settings ]

            if(this.item.username === '' || this.item.name === '' || this.item.perm_data === '') {

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

