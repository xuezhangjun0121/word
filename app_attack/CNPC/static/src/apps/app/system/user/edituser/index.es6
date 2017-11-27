
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
                id: '',
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
            // console.log(this.item);
            let url = '/system_manage/users/'
            let settings = {
                userId: 2,
                access_token: '1125F8D88DC19F818F6A26425C49256D',
                data: this.item
            }
            let args = [ url, settings ]

            if(this.item.id === undefined || this.item.id === '') {

                this.alert.contentHtml = '请选择要编辑的数据'
                this.openDialog('dialog2')

                return
            }
            if(this.item.username === '' || this.item.name === '' || this.item.perm_data === '') {

                this.alert.contentHtml = '请先输入完整数据'
                this.openDialog('dialog1')

                return
            }

            this.$root.confirm({title: '提示', content: '确认修改吗？'}).then(() => {

                http.put(...args)
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
    },

    created() {

        // console.log(this.item);
        this.item.id = this.$route.params.id
        this.item.username = this.$route.params.username
        this.item.name = this.$route.params.name
        this.item.perm_data = this.$route.params.perm_data

    }
})

