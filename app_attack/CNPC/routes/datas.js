/**
 * 通过mockjs生成测试数据
 * @type {[type]}
 */
var express = require('express');
var Mock = require('mockjs');
var router = express.Router();

//自定义请求映射关系
function localDatas(baseUrl) {

    /**
     * mock语法
     *  https://github.com/nuysoft/Mock/wiki/Syntax-Specification
     *  'name|min-max': value
     *  'name|count': value
     *  'name|min-max.dmin-dmax': value
     *  'name|min-max.dcount': value
     *  'name|count.dmin-dmax': value
     *  'name|count.dcount': value
     *  'name|+step': value
     */
    router.use(function(req, res, next) {

        console.log(req.path)
        console.log(req.query)
        console.log(req.body)

        let query = req.query,
            body = req.body

        //没有token则登录失败
        if(req.path !== '/login/' && !query['access_token'] && !body['access_token']) {

            res.json({

                success: false,
                message: '请登录'
            })
        } else {

            next()
        }
    })

    //返回一个obj
    router.route('/mock/obj')
        .all(function(req, res, next) {
            res.json(Mock.mock({
                status: 200,
                message: 'success',
                success: false
            }))
        })

    //模拟登录状态
    router.route('/login/state')
        .all(function(req, res, next) {

            res.json({

                username: 'xxx',
                success: true
            })
        })

    /**
     * 登录接口
     */
    router.route('/login')
        .post(function(req, res, next) {

            res.json({

                data: {
                    userId: 111,
                    'access_token': '111',
                },
                success: true,
                'from': 'zhang'
            })
        })

    //权限控制
    router.route('/mock/permissions')
        .all(function(req, res, next) {
            res.json({
                data: {
                    apps: {
                        test: [{
                            menu_path: 'sec',
                        }, {
                            menu_path: 'vali',
                        }],
                        config: [{
                            menu_path: 'important'
                        }, {
                            menu_path: 'user'
                        }, {
                            menu_path: 'third111'
                        }, {
                            menu_path: 'third222'
                        }, {
                            menu_path: 'vali'
                        }]
                    },
                    visualize: {
                        test: [],
                        equalProtection: []
                    }
                },
                status: 200,
                token: 'qqccesd'
            })
        })

    /**
     * 告警接口
     */
    router.route('/alarm_display')
        .all(function(req, res, next) {

            res.json({

                success: true,
                message: '查询正确',
                data: [{

                    // id: 1,
                    name: '张三',
                    age: 1
                }, {

                    // id: 2,
                    name: '李四',
                    age: 2
                }, {

                    // id: 3,
                    name: '李四',
                    age: 3
                }, {

                    // id: 4,
                    name: '李四',
                    age: 4
                }, {
                    // id: 5,
                    name: '张三',
                    age: 5
                }, {

                    // id: 6,
                    name: '李四s',
                    age: 6
                }, {

                    // id: 7,
                    name: '李四s',
                    age: 7
                }, {

                    // id: 8,
                    name: '李四s',
                    age: 8
                }]
            })
            
        })

    router.route('/rest/delete')
        .delete(function(req, res, next) {

            res.json({
                success: true,
                message: 'done',
                data: {

                }
            })
        })

    router.route('/rest/put')
        .put(function(req, res, next) {

            res.json({
                success: true,
                message: 'done',
                data: {
                    
                }
            })
        })  

    return router
}

module.exports = localDatas;