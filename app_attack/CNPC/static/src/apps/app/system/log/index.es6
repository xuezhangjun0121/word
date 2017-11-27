/**
 * 系统日志
 */

import './style'
import template from './view'
import moment from  'moment'

export default StiVue.app({

    template: template,

    data() {
        return {
            alert: {
                title: '提示',
                contentHtml: '请输入完整时间',
                ok: '确认'
            },
            level: '',
            oldstime: '',
            oldetime: '',
            startTime: {
                time: ''
            },
            endTime: {
                time: ''
            },
            timeoption: {
                type: 'min',
                week: [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ],
                month: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
                format: 'YYYY-MM-DD HH:mm',
                buttons: {
                    ok: '确认',
                    cancel: '取消',
                    clear: '清除'
                },
            },
            start_min_date: '',
            start_max_date: moment().format("YYYY-MM-DD HH:mm"),
            end_min_date: '',
            end_max_date: moment().format("YYYY-MM-DD HH:mm"),
            limit: [{
                type: 'fromto',
                from: '',
                to: new Date()
            }]
        }
    },
    
    methods: {

        openDialog(ref) {
            this.$refs[ref].open();
        },
        closeDialog(ref) {
            this.$refs[ref].close();
        },
        onOpen() {
            // console.log('Opened');
        },
        onClose(type) {

            // this.startTime.time = this.getCurDate()
            // this.endTime.time = this.getCurDate()
        },
        /*getCurDate () {

            let showDate = new Date(),
                year = showDate.getFullYear(),
                month = ((showDate.getMonth() + 1) < 10 ? '0' : '') + (showDate.getMonth() + 1),
                day = (showDate.getDate() < 10 ? '0' : '') + showDate.getDate(),
                hour = (showDate.getHours() < 10 ? '0' : '') + showDate.getHours(),
                minutes = (showDate.getMinutes() < 10 ? '0' : '') + showDate.getMinutes(),
                lastDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes

            return lastDate
        },*/

        compare(a, b, desc) {

            if(a < b) {

                return desc * 1
            } else if(a > b) {

                return desc * -1
            }

            return 0
        },
        stime(val){
            if(val){
                this.end_min_date = moment(this.startTime.time).subtract(1, 'day')
                this.end_max_date = moment(this.startTime.time).add(30, 'day')
                if(this.end_max_date > moment()){
                    this.end_max_date = moment()
                }
                this.end_min_date = this.end_min_date.toString()
                this.end_max_date = this.end_max_date.toString()
            }else{
                this.end_min_date = ''
                this.end_max_date = moment()
                this.end_max_date = this.end_max_date.toString()
            }
            
        },
        etime(val){
            if(val){
                this.start_max_date = this.endTime.time
                this.start_min_date = moment(this.endTime.time).subtract(30, 'day')
                this.start_min_date = this.start_min_date.toString()
            }else{
                this.start_max_date = moment()
                this.start_min_date = ''
                this.start_max_date = this.start_max_date.toString()
            }
        },

        startoldtime(val){
            this.oldstime = val
        },
        endoldtime(val){
            this.oldetime = val
        },

        limitST() {

            if(this.endTime.time < this.startTime.time){

                this.alert.contentHtml = '开始日期要大于结束日期'
                this.openDialog('dialog1')
                
                return
            }
        },
        limitET() {

            if(this.endTime.time < this.startTime.time){

                this.alert.contentHtml = '结束日期要大于开始日期'
                this.openDialog('dialog1')
            }
        },
        /*confirmTime(content, time, oldtime){
            this.$root.confirm({title: '提示', content: content}).then(() => {
                if(time == 'start'){
                    this.startTime.time = oldtime
                }
                if(time == 'end'){
                    this.endTime.time = oldtime
                }
            }).catch(() => {
                 if(time == 'start'){
                    this.startTime.time = oldtime
                }
                if(time == 'end'){
                    this.endTime.time = oldtime
                }
            })
        },*/

        searchLog() {

            // 查询参数
            if(this.startTime.time == '' ||  this.endTime.time == ''){
                
                this.alert.contentHtml = '请输入完整时间'
                this.openDialog('dialog1')

                return
            }            
            //限制时间在30天之内
            /*if(this.startTime.time !== '' &&  this.endTime.time !== ''){
                
                let date = new Date(new Date(this.startTime.time).getTime() + 1000 * 24 * 3600 * 30),
                    Y = date.getFullYear(),
                    M = date.getMonth() + 1,
                    D = date.getDate(),
                    endtime = Y + "-" + (M >= 10 ? M : '0' + M) + '-' + (D >= 10 ? D : '0'+ D)

                    if(this.endTime.time > endtime){

                        this.alert.contentHtml = '只能选择30天之内的日期'
                        this.openDialog('dialog1')

                        return 
                    }                
            }*/

            let params = {
                start_time: this.startTime.time,
                end_time: this.endTime.time
            }

            this.$refs.searchLog.search(params)

        },
        search () {
            this.$refs.searchLog.search()

            this.startTime.time = ''
            this.endTime.time = ''
            this.start_min_date =  ''
            this.end_min_date =  ''
            this.start_max_date = moment()
            this.end_max_date = moment()
            this.start_max_date = this.start_max_date.toString()
            this.end_max_date = this.end_max_date.toString()
        },

        detailShow(data, index){
            // console.log(data);
        }
    },

    mounted() {

        // this.startTime.time = this.getCurDate()
        // this.endTime.time = this.getCurDate()
    }
})