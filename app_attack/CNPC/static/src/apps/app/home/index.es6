/**
 * 首页
 */
import './style'
import template from './view'
import Highcharts from 'highstock'
import highchartmore from 'highchartmore'
import highchart3d from 'highchart3d'
import { mdSpinner } from 'vue-material'
highchartmore(Highcharts)
highchart3d(Highcharts)
export default StiVue.app({

    template,
    
    data() {
        return {
            status: '',
            app: '',
            ip: '',
            alarm_count: 0,
            read_count: 0,
            timerPie: null,
            loadCpu: true,
            loadSpeed: true,
            loadMemory: true,
            loadDisk: true
        }
    },

    methods: {
        //cpu
        drawCpu(id, text, cpuArr) {
            let that = this

            Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            })
            // Create the chart
            Highcharts.stockChart('usecpu', {
                chart: {
                    height: 260,
                    marginBottom:5,
                    //type:'line',
                    //backgroundColor:'',
                    events: {
                        load: function() {
                            that.loadCpu = false
                            // set up the updating of the chart each second
                            let series = this.series[0]
                           
                            that.timerCpu = setInterval(function() {
                                let x = (new Date()).getTime() // current time
                              
                                http.get('/system_display/').then(res => {
                                    if (res.success) {
                                        let y = res.data.CPU

                                        series.addPoint([ x, y ], true, true)
                                    }
                                })
                            }, 1000)
                        }
                    }
                },
                yAxis: {
                    tickPixelInterval: 50 //刻度之间间隔为20px
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    barBackgroundColor: '#fff',
                    //barBorderRadius: 7,
                    barBorderWidth: 0,
                    buttonBackgroundColor: '#fff',
                    buttonBorderWidth: 0,
                    buttonArrowColor: '#fff',
                    //buttonBorderRadius: 7,
                    rifleColor: '#fff',
                    trackBackgroundColor: '#fff',
                    trackBorderWidth: 0,
                    //trackBorderColor: 'silver',
                    //trackBorderRadius: 7
                },
                rangeSelector: {
                    buttons: [{
                        count: 1,
                        type: 'minute',
                        text: '1M'
                    }, {
                        count: 5,
                        type: 'minute',
                        text: '5M'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    inputEnabled: false,
                    selected: 0
                },
                title: {
                    floating: true,
                    y: 5,
                    text: text,
                    style: {
                        fontSize: 15,
                        fontFamily: 'Source Sans Pro,sans-serif',
                        color: '#000'
                    }
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    xDateFormat: '%Y-%m-%d %H:%M:%S',
                    valueDecimals: 2,
                    valueSuffix: ' %'
                },
                 series:[{
                    name: 'cpu使用率 ',
                    data: (function() {
                        // generate an array of random data
                        let data = [],
                            time = (new Date()).getTime(),
                            i

                        //1s=1000毫秒
                        for (i = -999; i <= 0; i += 1) {
                            data.push([
                                time + i * 1000,
                                cpuArr[-i]
                            ])
                        }

                        return data
                    })()
                }]
            })
        },
        //speed
        drawSpeed(id, text, speedArr) {
            let that = this

            Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            })
            // Create the chart
            Highcharts.stockChart('usespeed', {
                chart: {
                    height: 260,
                    marginBottom:5,
                    // type:'line',
                    events: {
                        load: function() {
                            that.loadSpeed = false
                            // set up the updating of the chart each second
                            let series = this.series[0]

                            that.timerSpeed = setInterval(function() {
                                let x = (new Date()).getTime() // current time

                                http.get('/system_display/').then(res => {
                                    if (res.success) {
                                        let y = res.data.speed

                                        series.addPoint([ x, y ], true, true)
                                    }
                                })
                            }, 1000)
                        }
                    }
                },
                yAxis: {
                    tickPixelInterval: 50 //刻度之间间隔为20px
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    barBackgroundColor: '#fff',
                    //barBorderRadius: 7,
                    barBorderWidth: 0,
                    buttonBackgroundColor: '#fff',
                    buttonBorderWidth: 0,
                    buttonArrowColor: '#fff',
                    //buttonBorderRadius: 7,
                    rifleColor: '#fff',
                    trackBackgroundColor: '#fff',
                    trackBorderWidth: 0,
                    //trackBorderColor: 'silver',
                    //trackBorderRadius: 7
                },
                rangeSelector: {
                    buttons: [{
                        count: 1,
                        type: 'minute',
                        text: '1M'
                    }, {
                        count: 5,
                        type: 'minute',
                        text: '5M'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    inputEnabled: false,
                    selected: 0
                },
                title: {
                    floating: true,
                    y: 5,
                    text: text,
                    style: {
                        fontSize: 15,
                        fontFamily: 'Source Sans Pro,sans-serif',
                        color: '#000'
                    }
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    xDateFormat: '%Y-%m-%d %H:%M:%S',
                    valueDecimals: 2,
                    valueSuffix: ' 条/s'
                },
                series: [{
                    name: '处理速率 ',
                    data: (function() {
                        // generate an array of random data
                        let data = [],
                            time = (new Date()).getTime(),
                            i

                        //1s=1000毫秒
                        for (i = -999; i <= 0; i += 1) {
                            data.push([
                                time + i * 1000,
                                speedArr[-i]
                            ])
                        }

                        return data
                    })()
                }]
            })
        },
        drawMemory(id, text) {
            let that = this

            Highcharts.chart(id, {
                 chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    height:240,
                    marginTop:40,
                    events: {
                        load: function () {
                            that.loadMemory = false
                        }
                    }
                    
                },
                credits: {
                    enabled: false
                },
                title: {
                    floating: true,
                    y: 5,
                    text: text,
                    style: {
                        fontSize: 15,
                        fontFamily: 'Source Sans Pro,sans-serif',
                        color: '#000'
                    }
                },
                pane: {
                    startAngle: -150,
                    endAngle: 100,
                    background: [{
                        backgroundColor: {
                            //linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            // stops: [
                            //     [ 0, '#FFF' ],
                            //     [ 1, '#333' ]
                            // ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            //linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            // stops: [
                            //     [ 0, '#333' ],
                            //     [ 1, '#FFF' ] 
                            // ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    }, {
                        // default background
                    }, {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
                },
                plotOptions: {
                    gauge: {
                    dataLabels: {
                        format: "{y}%"
                    }
                  }
                },

                // the value axis
                yAxis: {
                    min: 0,
                    max: 100,

                    minorTickInterval: '',
                    minorTickWidth: 1,
                    minorTickLength: 10,
                    minorTickPosition: 'inside',
                    minorTickColor: '#666',

                    tickPixelInterval: 30,
                    tickWidth: 2,
                    tickPosition: 'inside',
                    tickLength: 10,
                    tickColor: '#666',
                    labels: {
                        step: 1,
                        rotation: ''
                    },
                    title: {
                        text: ''
                    },
                    plotBands: [{
                        from: 0,
                        to: 60,
                        color: '#55BF3B' // green
                    }, {
                        from: 60,
                        to: 80,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 80,
                        to: 100,
                        color: '#DF5353' // red
                    }]
                },

                series: [{
                    name: '已占用',
                    data: [0],
                    tooltip: {
                        valueSuffix: '%'
                    }
                }]

            },
            // Add some life
            function (chart) {
                if (!chart.renderer.forExport) {
                    that.timermemory = setInterval(function () {
                        let point = chart.series[0].points[0],
                            newVal

                            http.get('/system_display/').then(res => {
                                if(res.success){
                                    newVal = res.data.memory[0].y
                                    point.update(newVal);

                                }
                            })                                                 
                        
                    }, 3000);
                }
            })
        },
        //disk
        drawDisk(id, text, usedData, freeData, xLabels) {
            let that = this

            this.diskchart = Highcharts.chart(id, {
                chart: {
                    type: 'column',
                    height: 240,
                    events: {
                        load: function () {
                            that.loadDisk = false
                        }
                    }
                },
                title: {
                    text: text,
                    style: {
                        fontSize: 15,
                        fontFamily: 'Source Sans Pro,sans-serif',
                        color: '#000'
                    }
                },
                xAxis: {
                    categories: xLabels,
                    labels: {
                        staggerLines: 2
                    },
                    crosshair: true
                },
                yAxis: {
                    tickPositions: [ 0, 25, 50, 75, 100 ],
                    labels: {
                        format: '{value}'
                    },
                    title: {
                        text: '百分比(%)',
                        align: 'middle'
                    },
                    crosshair: true
                },
                tooltip: {
                    valueSuffix: ' %'
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: '已用',
                    data: usedData
                }, {
                    name: '剩余',
                    data: freeData
                }]
            })
        },

        alarmCountChange(end) {

            let changeTime = 2000
            let duration = changeTime / (end - this.alarm_count)

            let timerAlarm = setInterval(() => {
                if (this.alarm_count < end) {
                    if(this.alarm_count < end * 0.1){
                        this.alarm_count += Math.ceil((this.alarm_count+1) * Math.random())
                    }else{
                        this.alarm_count += Math.ceil((end - this.alarm_count) * Math.random()/10)
                    }
                }else{
                    clearInterval(timerAlarm)
                }
            }, 1)
        },

        readDataChange(end) {

            let changeTime = 2000
            let duration = changeTime / (end - this.read_count)

            let timerAlarm = setInterval(() => {
                if (this.read_count < end) {
                    if(this.read_count < end * 0.1){
                        this.read_count += Math.ceil((this.read_count+1) * Math.random())
                    }else{
                        this.read_count += Math.ceil((end - this.read_count) * Math.random()/10)
                    }
                }else{
                    clearInterval(timerAlarm)
                }
            }, 1)
        },

        updateDisk() {

            http.get('/system_display/').then(res => {

                if (res.success) {

                    // this.app = res.data.app
                    // this.ip = res.data.ip
                    this.alarmCountChange(res.data.alarm_per_day)

                    // this.read_count = res.data.read_data_count
                    this.readDataChange(res.data.read_data_count)

                    this.status = res.data.status

                    let disk = res.data.disk,
                        usedData = [],
                        freeData = [],
                        xLabels = []

                    disk.map( item => {

                        usedData.push(item.used_percent)
                        freeData.push(item.free_percent)
                        xLabels.push(item.name)
                    })
                    //首次绘制disk
                    this.drawDisk('usedisk', '磁盘利用率', usedData, freeData, xLabels)
                }
            })
        }
    },
    created() {
        http.get('/cpu_display/').then(res => {
            if(res.success){
                let cupArr = res.data.CPU,
                    speedArr = res.data.speed
                
                //首次绘制cpu
                this.drawCpu('usecpu', 'cpu使用率', cupArr)
                //首次绘制speed
                this.drawSpeed('usespeed', '处理速率', speedArr)
            }
        })
        this.updateDisk()
    },
    mounted() {

        //首次绘制memory
        this.drawMemory('usememory', '内存占用率')

        //memory,disk实时刷新
        this.timerPie = setInterval( () => {

            http.get('/system_display/').then(res => {

                let disk = res.data.disk,
                    usedData = [],
                    freeData = [],
                    xLabels = []

                disk.map( item => {

                    usedData.push(item.used_percent)
                    freeData.push(item.free_percent)
                    xLabels.push(item.name)
                })

                //更新数据不重绘
                if (res.success) {
                    if (this.diskchart) {
                        this.diskchart.series[0].setData(usedData)
                        this.diskchart.series[1].setData(freeData)
                    } else {
                        this.drawDisk('usedisk', '磁盘利用率', usedData, freeData, xLabels)
                    }
                }
            })
        }, 1000)

    },
    beforeRouteLeave(to, from, next) {

        clearInterval(this.timerCpu)
        clearInterval(this.timerSpeed)
        clearInterval(this.timerPie)
        clearInterval(this.timermemory)

        next()
    }

})