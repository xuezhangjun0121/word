webpackJsonp([6],{

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(StiVue, http) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(53);

	var _stringify2 = _interopRequireDefault(_stringify);

	__webpack_require__(642);

	var _view = __webpack_require__(644);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * 添加APP
	 */

	exports['default'] = StiVue.app({

	    template: _view2['default'],

	    data: function data() {
	        return {

	            alert: {
	                title: '提示',
	                contentHtml: '提交成功',
	                ok: '确认'
	            },
	            app_data: {

	                username: '',
	                ip: '',
	                port: '',
	                file_path: ''
	            },
	            errIp: false,
	            errPort: false
	        };
	    },


	    methods: {

	        /*ip号校验*/
	        isIP: function isIP(ip) {

	            var reSpaceCheck = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;

	            if (reSpaceCheck.test(ip)) {

	                ip.match(reSpaceCheck);

	                if (RegExp.$1 <= 255 && RegExp.$1 >= 0 && RegExp.$2 <= 255 && RegExp.$2 >= 0 && RegExp.$3 <= 255 && RegExp.$3 >= 0 && RegExp.$4 <= 255 && RegExp.$4 >= 0) {

	                    return true;
	                }

	                return false;
	            }

	            return false;
	        },

	        /*端口号校验*/
	        isPort: function isPort(str) {
	            var parten = /^(\d)+$/g;

	            if (parten.test(str) && parseInt(str) <= 65535 && parseInt(str) >= 0) {

	                return true;
	            }

	            return false;
	        },


	        /*控制ip输入框清除图标显示状态*/
	        checkedIP: function checkedIP() {

	            var valueIP = this.app_data.ip.trim();

	            if (!this.isIP(valueIP)) {

	                // console.log('false');
	                this.errIp = true;

	                return;
	            }

	            this.errIp = false;
	        },

	        /*控制端口输入框清除图标显示状态*/
	        checkedPort: function checkedPort() {
	            var valuePort = this.app_data.port.trim();

	            if (!this.isPort(valuePort)) {

	                // console.log('false');
	                this.errPort = true;

	                return;
	            }

	            this.errPort = false;
	        },


	        /*弹框方法*/
	        openDialog: function openDialog(ref) {
	            this.$refs[ref].open();
	        },
	        onOpen: function onOpen() {
	            // console.log('Opened');
	        },
	        onClose: function onClose() {
	            // console.log('Closed');
	        },
	        onClose2: function onClose2() {
	            // console.log('Closed');
	            this.$router.push({ name: 'config' });
	        },


	        submitApp: function submitApp() {
	            var _this = this;

	            if (this.errIp || this.errPort) {

	                return;
	            }

	            var url = '/system_manage/';
	            var settings = {
	                userId: 2,
	                access_token: '1125F8D88DC19F818F6A26425C49256D',
	                data: {
	                    app_data: (0, _stringify2['default'])(this.app_data)
	                }
	            };
	            var args = [url, settings];

	            if (this.app_data.username === '' || this.app_data.ip === '' || this.app_data.port === '' || this.app_data.file_path === '') {

	                this.alert.contentHtml = '请先输入完整数据';
	                this.openDialog('dialog1');

	                return;
	            }

	            this.$root.confirm({ title: '提示', content: '确认提交吗？' }).then(function () {
	                var _http;

	                (_http = http).post.apply(_http, args).then(function (res) {
	                    if (res.success) {

	                        _this.alert.contentHtml = '提交成功';
	                        _this.openDialog('dialog2');

	                        return;
	                    }
	                }, function (error) {

	                    // console.log(error.message);
	                    _this.alert.contentHtml = error.message;
	                    _this.openDialog('dialog1');
	                });
	            })['catch'](function () {});
	        }
	    }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(120), __webpack_require__(152)))

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(643);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports


	// module
	exports.push([module.id, ".config-addapp {\n  height: 100%;\n  background-color: #fff;\n}\n.config-addapp .col-md-5 {\n  margin-top: 30px;\n}\n.config-addapp h2 {\n  text-align: center;\n  padding-bottom: 15px;\n}\n", ""]);

	// exports


/***/ }),

/***/ 644:
/***/ (function(module, exports) {

	module.exports = "<div class=\"config-addapp\">\r\n\r\n    <!--弹框-->\r\n    <md-dialog-alert\r\n            :md-title=\"alert.title\"\r\n            :md-content-html=\"alert.contentHtml\"\r\n            :md-ok-text=\"alert.ok\"\r\n            @open=\"onOpen\"\r\n            @close=\"onClose\"\r\n            ref=\"dialog1\">\r\n    </md-dialog-alert>\r\n\r\n    <md-dialog-alert\r\n            :md-title=\"alert.title\"\r\n            :md-content-html=\"alert.contentHtml\"\r\n            :md-ok-text=\"alert.ok\"\r\n            @open=\"onOpen\"\r\n            @close=\"onClose2\"\r\n            ref=\"dialog2\">\r\n    </md-dialog-alert>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-5\">\r\n            <sti-section>\r\n                <div style=\"padding: 15px\">\r\n                    <h2>添加APP</h2>\r\n                    <form class=\"form-horizontal\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"username\" class=\"col-sm-2 control-label\">APP</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"username\" v-model=\"app_data.username\">\r\n                                <div style=\"color: #CCC\">例: attack</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"ip\" class=\"col-sm-2 control-label\">IP地址</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"ip\" v-model=\"app_data.ip\" @change=\"checkedIP\">\r\n                                <div v-show=\"errIp\" style=\"color: red\">输入的ip不合规范</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"port\" class=\"col-sm-2 control-label\">端口</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"port\" v-model=\"app_data.port\" @change=\"checkedPort\">\r\n                                <div v-show=\"errPort\" style=\"color: red\">输入的端口号不合规范</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"file_path\" class=\"col-sm-2 control-label\">请求路径</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"file_path\" v-model=\"app_data.file_path\">\r\n                                <div style=\"color: #CCC\">例: /attack/ngsoc/</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-offset-7\">\r\n                                <router-link to=\"/system/config\">\r\n                                    <sti-button>{{$t('button.return')}}</sti-button>\r\n                                </router-link>\r\n                                <sti-button @clickevent=\"submitApp\">{{$t('button.confirm')}}</sti-button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </sti-section>\r\n        </div>\r\n        <div class=\"col-md-4\"></div>\r\n    </div>\r\n</div>";

/***/ })

});
//# sourceMappingURL=6.js.map