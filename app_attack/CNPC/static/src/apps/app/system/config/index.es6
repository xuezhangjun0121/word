/*
* 常规配置
* */

import template from './view'
import './style'
import sySwitch from '../../components/switch/index'

export default StiVue.app({

    template,

    data() {
        return {

            alert: {
                title: '提示',
                contentHtml: '提交成功',
                ok: '确认'
            },

            days_limit: '',
            rate: {
                upper_limit: '',
                after_delete: ''
            },
            lengthArr: [ 30, 60, 90, 180, 360 ],
            app_data: {

                id: '',
                username: '',
                ip: '',
                port: '',
                file_path: ''
            },
            scopeData: null,
            topic: '',
            reset: true,
            outside: false,
            loading: false
        }
    },

    components: {
        sySwitch
    },
    
    methods: {

        openDialog(ref) {
            this.$refs[ref].open();
        },
        openDialog2(ref) {
            this.$refs[ref].open();
        },
        closeDialog(ref) {
            this.reset = false
            this.$nextTick(()=>{
                this.reset = true
            })
            this.$refs[ref].close();

            this.topic = ''
        },
        closeDialog2(ref) {

            // console.log(this.topic);
            if(this.topic === 'hdfs' || this.topic ==='kafka'){

                this.$refs[ref].close();
                this.tableSwitch2(this.scopeData, this.topic)
                this.loading = true

                this.topic = ''

                return
            }

            this.reset = false
            this.$nextTick(()=>{
                this.reset = true
            })
            this.$refs[ref].close();

            this.topic = ''
        },
        onOpen() {
            // console.log('Opened');
        },
        onClose(type) {
            // console.log('Closed', type);
        },
        onClose2(type) {

            this.reset = false
            this.$nextTick(()=>{
                this.reset = true
            })
        },

        add (value, state, data, index) {

            // console.log(value, state, data, index)

        },

        rateConfirm() {
            this.$root.confirm({title: '提示', content: '请同时输入1—100之间的整数；且上限需大于余量'}).then(() => {

                let url = '/databases_manage/'
                let settings = {
                    userId: 2,
                    access_token: '1125F8D88DC19F818F6A26425C49256D'

                }
                let args = [ url, settings ]

                http.get(...args)
                    .then((res) => {

                        if(res.success) {

                            this.rate.upper_limit = res.data.upper_limit
                            this.rate.after_delete = res.data.after_delete
                            this.days_limit = res.data.days_limit
                        }
                    })
            }).catch(() => {

                let url = '/databases_manage/'
                let settings = {
                    userId: 2,
                    access_token: '1125F8D88DC19F818F6A26425C49256D'

                }
                let args = [ url, settings ]

                http.get(...args)
                    .then((res) => {

                        if(res.success) {

                            this.rate.upper_limit = res.data.upper_limit
                            this.rate.after_delete = res.data.after_delete
                            this.days_limit = res.data.days_limit
                        }
                    })
            })
        },

        test(num1, num2){

            num1 = Number(num1)
            num2 = Number(num2)

            let reg = /^((?!0)\d{1,2}|100)$/
            
            // console.log('num1.match(reg): ' + reg.test(num1));
            // console.log('num2.match(reg): ' + reg.test(num2));
            // console.log('(num1 > num2): ' + (num1 > num2))

            if(reg.test(num1) && reg.test(num2) && (num1 > num2)){

                return true
            }

            this.rateConfirm()

            return false
        },

        submitRate () {
            
            // console.log(this.rate.upper_limit);
            // console.log(this.rate.after_delete);
            
            let result = this.test(this.rate.upper_limit, this.rate.after_delete)

            // console.log(result);

            let url = '/databases_manage/'
            let settings = {
                userId: 2,
                access_token: '1125F8D88DC19F818F6A26425C49256D',
                data: {
                    upper_limit: this.rate.upper_limit,
                    after_delete: this.rate.after_delete,
                    days_limit: this.days_limit
                }
            }
            let args = [ url, settings ]

            result && http.post(...args)
                .then((res) => {

                    // console.log(res)
                    if(res.success) {

                        this.alert.contentHtml = '提交成功'
                        this.openDialog('dialog1')

                        this.rate.upper_limit = res.data.upper_limit
                        this.rate.after_delete = res.data.after_delete
                        this.days_limit = res.data.days_limit
                    }
                })
        },

        deleteConfirm(scope) {
            // console.log(scope);
            this.$root.confirm({title: '提示', content: '确认删除吗？'}).then(() => {

                let url = '/system_manage/'
                let settings = {
                    userId: 2,
                    access_token: '1125F8D88DC19F818F6A26425C49256D',
                    app_data: JSON.stringify({

                        id: this.$refs.tableApp.checkIds,
                        type: "register_attack"
                    })
                }

                url += '?' + $.param(settings)

                http.delete(url)
                    .then(res => {
                        if(res.success) {
                            this.$refs.tableApp.search()
                        }
                    })

            }).catch(() => {
                // alert('删除失败')
            })
        },

        deleteApp() {

            if(0 === this.$refs.tableApp.checkIds.length) {

                this.alert.contentHtml = '请选择要删除的数据'
                this.openDialog('dialog1')

                return
            }

            this.deleteConfirm()
        },

        editApp(scope) {
            // console.log(scope);
            this.$router.push({name: 'editapp', params: {

                id: scope.data.id,
                username: scope.data.username,
                ip: scope.data.ip,
                port: scope.data.port,
                file_path: scope.data.file_path
            }})
        },

        formatter(data) {

            return data.data.status === 1 ? true : false
        },
        tableSwitch(scope) {

            this.scopeData = scope
            
            if(scope.data.status === 1){

                this.$root.confirm({title: '提示', content: '确认关闭吗？'}).then(() => {

                    this.tableSwitch2(this.scopeData, this.scopeData.data.topic)
                    this.loading = true
                }).catch(() => {

                    this.reset = false
                    this.$nextTick(()=>{
                        this.reset = true
                    })
                })

                return
            }

            this.openDialog2('dialog2')
        },

        tableSwitch2(scope, topic) {

             let url = ""

             url += 'http://' + scope.data.ip + ':' + scope.data.port + '/' + scope.data.username + '/app/system_manage_status/'

             let settings = {
                 userId: 2,
                 access_token: '1125F8D88DC19F818F6A26425C49256D',
                 data: {
                     id: scope.data.id,
                     status: scope.data.status === 1 ? 0 : 1,
                     topic
                 }
             }
             
             // console.log(settings);
             let args = [ url, settings ]

             http.post(...args).then(res => {

                 if(res.success) {

                     scope.data.status = settings.data.status
                     this.loading = false

                     this.$refs.tableApp.search()
                 }
             }, error => {
                 // console.log(error);

                 this.loading = false

                 this.alert.contentHtml = '请检查输入的内容是否正确'
                 this.openDialog('dialog3')
             })
        },
    },

    created () {

        let url = '/databases_manage/'
        let settings = {
            userId: 2,
            access_token: '1125F8D88DC19F818F6A26425C49256D'

        }
        let args = [ url, settings ]

        http.get(...args)
            .then((res) => {

                if(res.success) {

                    this.rate.upper_limit = res.data.upper_limit
                    this.rate.after_delete = res.data.after_delete
                    this.days_limit = res.data.days_limit
                }
            })
    }
})