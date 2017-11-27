/**
 * 模板文件
 * @param  {[type]} port [description]
 * @return {[type]}      [description]
 */
function template(port) {

	return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>WEB攻击检测与高危IP分析平台</title>
	<link rel="icon" href="/static/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="/static/css/animate/animate.min.css">
	<link rel="stylesheet" type="text/css" href="/static/css/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="/static/css/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="/static/css/vue_material/dist/vue-material.css">
	<link rel="stylesheet" type="text/css" href="/static/css/commons/css/sti.css">
</head>
<body>
	<div id="sti-web" class="sti-main" :class="theme"></div>
	<div id="sti-loading"></div>
	<script type="text/javascript" src="/static/stiError.js"></script>
	<script type="text/javascript" src="http://localhost:${port}/vendor.js"></script>
	<script type="text/javascript" src="http://localhost:${port}/config.js"></script>
	<script type="text/javascript" src="http://localhost:${port}/main.js"></script>
</html>
`
}

module.exports = template;
