/**
 * 行为分析模块
 */
import './style'
import template from './view'
import Highcharts from 'highcharts'
import 'bootstrap'
import $ from 'jquery'
import moment from  'moment'

export default StiVue.app({

	template,

	data() {

		return {

            showTable:true,
            tempArr1:[],
            tempArr2:[],
            selectionlist:[],          
            aa: false,
            alertTip: true,
            warn: false,
            baseMsg:{},
            baseDetail:{},
            detail:{},
			rule: '',
			level: '',
			ip: '',
            oldstime: '',
            oldetime: '',
			startTime: {
                time: ''
				// time: moment().subtract(30, 'day').format("YYYY-MM-DD HH:mm")
			},
			endTime: {
                time: ''
				// time: moment().format("YYYY-MM-DD HH:mm")
			},
			timeoption: {
				type: 'min',
				week: [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ],
				month: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
				format: 'YYYY-MM-DD HH:mm',
                buttons:{
                    ok:'确定',
                    cancel:'取消',
                    clear: '清除'
                }
			},
            start_min_date: '',
            start_max_date: moment().format("YYYY-MM-DD HH:mm"),
            end_min_date: '',
            end_max_date: moment().format("YYYY-MM-DD HH:mm"),
            limit: [{
                type: 'fromto',
                from: '',
                to: moment().format("YYYY-MM-DD HH:mm")
            }],
            limitEnd: [{
                type: 'fromto',
                from: this.oldstime,
                to: moment().format("YYYY-MM-DD HH:mm")
            }],
            alertTableShow: true,
			datas: [],
            tableList1:[
                {
                    id: 'alarm_find_time',
                    label: 'MD5',
                    width: '150'
                },
                {
                    id: 'alarm_rank',
                    label:'源IP',
                    width:'150'
                },
                {
                    id: 'alarm_name',
                    label:'目的IP',
                    width:'150'
                },
                {
                    id: 'alarm_desc',
                    label: '发现时间',
                    width: '100'
                },
                {
                    id: 'alarm_src_ip',
                    label: '是否恶意',
                    width: '150'
                },
                {
                    id: 'alarm_dst_ip',
                    label: '家族名称',
                    width: '150'
                },
                {
                    id: 'alarm_src_port',
                    label: '文件类型',
                    width: '120'
                },
                // {
                //     id: 'alarm_find_time',
                //     label: '告警时间',
                //     width: '180'
                // },
                // {
                //     id: 'alarm_rank',
                //     label:'告警级别',
                //     width:'100'
                // },
                // {
                //     id: 'alarm_name',
                //     label:'告警名称',
                //     width:'200'
                // },
                // {
                //     id: 'alarm_desc',
                //     label: '告警描述',
                //     width: '100'
                // },
                // {
                //     id: 'alarm_src_ip',
                //     label: '源IP',
                //     width: '150'
                // },
                // {
                //     id: 'alarm_dst_ip',
                //     label: '目的IP',
                //     width: '150'
                // },
                // {
                //     id: 'alarm_src_port',
                //     label: '源端口',
                //     width: '120'
                // },
                {
                    id: 'alarm_dst_port',
                    label: '目的端口',
                    width: '120'
                },
                {
                    id: 'alarm_type',
                    label: '告警类型',
                    width: '200'
                },
                {
                    id: 'http_cmd',
                    label: '请求方法',
                    width: '100'
                },
                {
                    id: 'http_uri',
                    label: '请求URL',
                    width: '500'
                },
                {
                    id: 'http_host',
                    label: 'host字段',
                    width: '200'
                },
                {
                    id: 'http_rescode',
                    label: '响应码',
                    width: '100'
                },
                {
                    id: 'http_ua',
                    label: 'USERAGENT字段',
                    width: '500'
                },
                {
                    id: 'alarm_number',
                    label: '告警编号',
                    width: '230'
                },
                {
                    id: 'alarm_unit_name',
                    label: '单位名称',
                    width: '180'
                },
                {
                    id: 'info_system_name',
                    label: '信息系统名称',
                    width: '180'
                },
                {
                    id: 'alarm_asset',
                    label: '受影响资产',
                    width: '180'
                },
                {
                    id: 'alarm_field',
                    label: '受影响范围',
                    width: '180'
                },
                {
                    id: 'alarm_report_time',
                    label: '报告时间',
                    width: '200'
                },
                {
                    id: 'alarm_evidence',
                    label: '证据',
                    width: '180'
                },
                {
                    id: 'handle_time_desc',
                    label: '处理时间要求',
                    width: '180'
                },
                {
                    id: 'log_id',
                    label: '日志Id',
                    width: '100'
                },
                {
                    id: 'log_type',
                    label: '日志类型',
                    width: '120'
                },
                {
                    id: 'alarm_happen_time',
                    label: '产生时间',
                    width: '200'
                },
                {
                    id: 'device_ip',
                    label: '设备Ip',
                    width: '180'
                },
                {
                    id: 'device_name',
                    label: '设备名称',
                    width: '180'
                },
                {
                    id: 'device_type',
                    label: '设备类型',
                    width: '180'
                },
                {
                    id: 'alarm_source',
                    label: '告警来源',
                    width: '180'
                }
            ],
            tableList2:[
                {
                    id: 'alarm_find_time',
                    label: '告警时间',
                    width: '180'
                },
                {
                    id: 'alarm_rank', 
                    label:'告警级别',
                    width:'100'
                },
                {
                    id: 'alarm_name', 
                    label:'告警名称',
                    width:'200'
                },
                {
                    id: 'alarm_desc',
                    label: '告警描述',
                    width: '100'
                },
                {
                    id: 'alarm_src_ip',
                    label: '源IP',
                    width: '150'
                },
                {
                    id: 'alarm_dst_ip',
                    label: '目的IP',
                    width: '150'
                },
                {
                    id: 'alarm_src_port',
                    label: '源端口',
                    width: '120'
                },
                {
                    id: 'alarm_dst_port',
                    label: '目的端口',
                    width: '120'
                },
                {
                    id: 'alarm_type',
                    label: '告警类型',
                    width: '200'
                },
                {
                    id: 'http_cmd',
                    label: '请求方法',
                    width: '100'
                },
                {
                    id: 'http_uri',
                    label: '请求URL',
                    width: '500'
                },
                {
                    id: 'http_host',
                    label: 'host字段',
                    width: '200'
                },
                {
                    id: 'http_rescode',
                    label: '响应码',
                    width: '100'
                },
                {
                    id: 'http_ua',
                    label: 'USERAGENT字段',
                    width: '500'
                },
                {
                    id: 'alarm_number',
                    label: '告警编号',
                    width: '230'
                },
                {
                    id: 'alarm_unit_name',
                    label: '单位名称',
                    width: '180'
                },
                {
                    id: 'info_system_name',
                    label: '信息系统名称',
                    width: '180'
                },
                {
                    id: 'alarm_asset',
                    label: '受影响资产',
                    width: '180'
                },
                {
                    id: 'alarm_field',
                    label: '受影响范围',
                    width: '180'
                },
                {
                    id: 'alarm_report_time',
                    label: '报告时间',
                    width: '200'
                },
                {
                    id: 'alarm_evidence',
                    label: '证据',
                    width: '180'
                },
                {
                    id: 'handle_time_desc',
                    label: '处理时间要求',
                    width: '180'
                },
                {
                    id: 'log_id',
                    label: '日志Id',
                    width: '100'
                },
                {
                    id: 'log_type',
                    label: '日志类型',
                    width: '120'
                },
                {
                    id: 'alarm_happen_time',
                    label: '产生时间',
                    width: '200'
                },
                {
                    id: 'device_ip',
                    label: '设备Ip',
                    width: '180'
                },
                {
                    id: 'device_name',
                    label: '设备名称',
                    width: '180'
                },
                {
                    id: 'device_type',
                    label: '设备类型',
                    width: '180'
                },
                {
                    id: 'alarm_source',
                    label: '告警来源',
                    width: '180'
                }
            ]
		}
	},
	methods: {
		showDetail(colData) {
            this.baseDetail = colData.data
            let that = this,
                rule_id = colData.data.rule_id

                if(rule_id === null || rule_id === ''){
                    that.warn = true
                    
                    return
                }
            rule_id = JSON.stringify(rule_id)

            http.get('/alarm_display_detail/', {
                data:{ rule_id:rule_id }
            }).then(res => {
                if(res.success){
                    // that.detail_01 = res.data[0]
                    // that.detail_02 = res.data[1]
                    that.detail = res.data[0]
                    that.warn = false
                }
                
            })
            
		},

		compare(a, b, desc) {

			if(a < b) {

				return desc * 1
			} else if(a > b) {

				return desc * -1
			}

			return 0
		},

		beforeSend(xhr) {

		},

        //图表
		draw(id, text, data){
			Highcharts.chart( id, {
                chart: {
                    type: 'column',
                    height: '300',
                    events: {
                        load: function (e) {
                            if (!e.target.series.length) {
                                let nodataNode = document.createElement('div')

                                nodataNode.className = 'no-data'

                                nodataNode.innerHTML = '没有数据'
                                e.target.container.appendChild(nodataNode)

                            }
                        }
                    }
                },
                title: {
                    text: text,
                    style:{
                        fontStyle:'normal'
                    }
                },
                xAxis: {
                    /*title: {
                        text: '告警类型',
                        style:{
                            fontStyle: 'normal'
                        },
                    },*/
                    categories: ['告警类型'],
                    labels: {
                      style: {
                          fontStyle: 'normal'
                      }
                    },
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '数量(条)',
                        style:{
                            fontStyle: 'normal',
                        },
                    },
                    crosshair: true
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: true,
                    align: 'left',
                    layout: 'horizontal',
                    itemStyle: {
                        fontStyle:'normal'
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                /*tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><table>',
                    pointFormat: '<tr><td style="color:{point.color};padding:0">{point.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} 条</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },*/
                series: data
            })			
		},

		search(){
            // 查询参数
            if(this.startTime.time == '' ||  this.endTime.time == ''){
                this.confirmTime('请输入完整时间')

                return
            }         
            //限制时间在30天之内
            if(this.startTime.time !== '' &&  this.endTime.time !== ''){
                
                let date = new Date(new Date(this.startTime.time).getTime() + 1000 * 24 * 3600 * 30),
                    Y = date.getFullYear(),
                    M = date.getMonth() + 1,
                    D = date.getDate(),
                    endtime = Y + "-" + (M >= 10 ? M : '0' + M) + '-' + (D >= 10 ? D : '0'+ D)

                    if(this.endTime.time > endtime){
                        this.confirmTime('只能选择30天之内的日期', 'end', '结束日期')

                        return 
                    }                
            }
            let params = {
                alarm_src_ip:this.ip,
                alarm_rank:this.level,
                start_time:this.startTime.time,
                end_time:this.endTime.time
            }

            this.$refs.table.search(params)
		},
        exported(){
            let html = ''

            if(this.startTime.time == '' || this.endTime.time == ''){
                this.confirmTime('请输入完整时间')

                return
            }
            
            //限制时间在30天之内
            if(this.startTime.time !== '' &&  this.endTime.time !== ''){
                
                let date = new Date(new Date(this.startTime.time).getTime() + 1000 * 24 * 3600 * 30),
                    Y = date.getFullYear(),
                    M = date.getMonth() + 1,
                    D = date.getDate(),
                    endtime = Y + "-" + (M >= 10 ? M : '0' + M) + '-' + (D >= 10 ? D : '0'+ D)

                    if(this.endTime.time > endtime){
                        this.confirmTime('只能选择30天之内的日期', 'end', '结束日期')

                        return 
                    }                
            }

            let params = {
                alarm_src_ip:this.ip,
                alarm_rank:this.level,
                start_time:this.startTime.time,
                end_time:this.endTime.time
            }

            for(let k in params){
                if(params[k] != ''){
                    html += k + '=' + params[k] + '&'  
                }
            }
            html += 'access_token=1125F8D88DC19F818F6A26425C49256D&userId=999'
            html = '/attack/app/alarm_manage/?' + html
            //提示条数过多是否继续下载
            http.get('/alarm_manage_count/', {
                data: params
            }).then(res => {
                if(res.success){
                    if(res.data.count < 10000){
                        this.$refs.changeHref.href = html
                        this.$refs.changeHref.click()
                                              
                    }else if(res.data.count > 10000 && res.data.count < 60000){
                        this.$root.confirm({title: '提示', content: '当前下载数量过大, 下载速度较慢, 您确定要继续下载吗?'}).then(() => {
                        this.$refs.changeHref.href = html
                        this.$refs.changeHref.click()

                       }).catch(() => {
                            return 
                       })
                    }else{
                        this.$root.confirm({title: '提示', content: '当前下载数量过大, 请缩小时间范围'}).then(() => {

                                return
                       }).catch(() => {

                            return 
                       })
                    }
                }
            })
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
        confirmTime(content, time, oldtime){
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
        },
        startoldtime(val){
            this.oldstime = val
        },
        endoldtime(val){
            this.oldetime = val
        },
        sureTable(){
            let that = this,
                table = $(that.$refs.table1)

            that.tempArr1 = []
            that.tempArr2 = []
            that.tableList1 = that.tableList2

            $(this.$refs.selectionBox).children('.active').map(function(i, v){
                that.tempArr1.push($(v).index())
            })

            //赋值给selectionlist，便于取消操作
            that.selectionlist = that.tempArr1

            //判断是否选中
            if(that.tempArr1.length == 0){
                that.alertTableShow = false
                that.$nextTick(function(){
                   that.alertTableShow = true
                   
                })

                return
            }

            //移除已加载的
            table.find('tr').map(function(i, v){

                $(v).children().each(function(i1, v1){
                    if(i1 != 0){
                        $(v1).remove()
                    }else{
                        $(v1).css('width', '79')
                    }
                })

            })
            table.find('colgroup').remove()

            //将选中的赋值给tableList1
            that.tableList1.map(function(v1, i){
                that.tempArr1.map(function(v2, j){
                    if( i == v2 ){
                        that.tempArr2.push(v1)
                    }
                })
            })
            that.tableList1 = that.tempArr2

            //判断宽度，大于table宽度，出现滚动条
            let totalWidth = 0

            that.tempArr2.map(function(v, i){              
                totalWidth += +(v.width)
            })
            //没超过总宽度，就给详情固定宽度

            if(totalWidth > $(this.$refs.alertBox).width()){
                $('<colgroup></colgroup>').insertBefore(table.find('thead'))
                $('<colgroup></colgroup>').insertBefore(table.find('tbody'))
                $('<col>').attr('width', '80').appendTo($(table.find('thead')[0]).prev())
                $('<col>').attr('width', '80').appendTo($(table.find('tbody')[0]).prev())
 
                that.tempArr2.map(function(v, i){  
                       
                    $('<col>').attr('width', v.width).appendTo($(table.find('thead')[0]).prev())
                    $('<col>').attr('width', v.width).appendTo($(table.find('tbody')[0]).prev())
                })             
                $('<col>').attr('width', '17').appendTo($(table.find('thead')[0]).prev())
                $(table.find('thead')[0]).find('tr').append('<th></th>')
            }

            //更新表格
            that.showTable = false
            this.$nextTick(function(){
               that.showTable = true
               that.$refs.table.search()
               
            })

            //$(this.$refs.selectionBox).children().removeClass('active') 
        },
        cancelTable(){
            let that = this
            
            //完美！！！
            $(that.$refs.selectionBox).children().removeClass('active')
            $(that.$refs.selectionBox).children().map(function(i, v1){
                that.tempArr1.map(function(v2, j){
                    if(v2 == i){
                        $(v1).addClass('active')
                    }
                })
            })

            return
        }
	},
    created(){

        http.get('/alarm_stat/').then(res => {
            if(res.success){
                let lastHour = res.data.onehour,
                    lastDay = res.data.oneday,
                    lastWeek = res.data.oneweek,
                    hourData = [],
                    dayData = [],
                    weekData = []

                lastHour.map( (item) => {

                    hourData.push({
                        name: item.name,
                        data: item.data
                    })
                });
                lastDay.map( (item) => {

                    dayData.push({
                        name: item.name,
                        data: item.data
                    })
                });
                lastWeek.map( (item) => {

                    weekData.push({
                        name: item.name,
                        data: item.data
                    })
                });

                this.$nextTick(()=>{
                    this.draw('lastHour', '近一小时统计', hourData)
                    this.draw('lastDay', '近一天统计', dayData)
                    this.draw('lastWeek', '近一周统计', weekData)
                })
            }
        })
    },

	mounted() {

		// this.startTime.time = "开始时间"
		// this.endTime.time = "结束时间"

        $(this.$refs.selectionBox).children().click(function(){
            $(this).toggleClass('active')
        }) 
        $(this.$refs.detailMsg).find('td:even').css('background', '#eee')
        $(this.$refs.detailMsg).find('td:even').width(100)
	}
})