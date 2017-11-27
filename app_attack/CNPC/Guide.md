## 开发向导

基于express搭建本地服务开发，开发阶段本地mock数据，联调阶段测试环境对接真实数据。

### 权限控制

所有访问均在用户登录的情况下正常运行，若果用户未登录，访问资源，直接返回登录页面。该过程有后端的数据接口控制，如果状态字段`success`为`false`，则认定登录失败，需重新登录。具体实现在`./static/src/global/utils/http/index`中`request`函数。

每次用户登录会更新`access_token`，`user_id`的值，该值将作为登录判断依据。该值存放在cookie当中，有效期30天。具体实现在`./static/src/global/utils/http/index`中`request`函数。


