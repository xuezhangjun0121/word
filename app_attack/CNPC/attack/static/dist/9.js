webpackJsonp([9],{

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(StiVue, http) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(633);

	var _view = __webpack_require__(635);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = StiVue.app({

	    template: _view2['default'],

	    data: function data() {
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
	        };
	    },


	    methods: {
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
	            this.$router.push({ name: 'user' });
	        },


	        submitUser: function submitUser() {
	            var _this = this;

	            // console.log(this.item);
	            var url = '/system_manage/users/';
	            var settings = {
	                userId: 2,
	                access_token: '1125F8D88DC19F818F6A26425C49256D',
	                data: this.item
	            };
	            var args = [url, settings];

	            if (this.item.id === undefined || this.item.id === '') {

	                this.alert.contentHtml = '请选择要编辑的数据';
	                this.openDialog('dialog2');

	                return;
	            }
	            if (this.item.username === '' || this.item.name === '' || this.item.perm_data === '') {

	                this.alert.contentHtml = '请先输入完整数据';
	                this.openDialog('dialog1');

	                return;
	            }

	            this.$root.confirm({ title: '提示', content: '确认修改吗？' }).then(function () {
	                var _http;

	                (_http = http).put.apply(_http, args).then(function (res) {
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
	    },

	    created: function created() {

	        // console.log(this.item);
	        this.item.id = this.$route.params.id;
	        this.item.username = this.$route.params.username;
	        this.item.name = this.$route.params.name;
	        this.item.perm_data = this.$route.params.perm_data;
	    }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(120), __webpack_require__(152)))

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(634);
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

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports


	// module
	exports.push([module.id, ".user-edituser {\n  height: 100%;\n  background-color: #fff;\n}\n.user-edituser .col-md-5 {\n  margin-top: 30px;\n}\n.user-edituser h2 {\n  text-align: center;\n  padding: 15px;\n}\n", ""]);

	// exports


/***/ }),

/***/ 635:
/***/ (function(module, exports) {

	module.exports = "<div class=\"user-edituser\">\r\n\r\n    <!--弹框-->\r\n    <md-dialog-alert\r\n            :md-title=\"alert.title\"\r\n            :md-content-html=\"alert.contentHtml\"\r\n            :md-ok-text=\"alert.ok\"\r\n            @open=\"onOpen\"\r\n            @close=\"onClose\"\r\n            ref=\"dialog1\">\r\n    </md-dialog-alert>\r\n\r\n    <md-dialog-alert\r\n            :md-title=\"alert.title\"\r\n            :md-content-html=\"alert.contentHtml\"\r\n            :md-ok-text=\"alert.ok\"\r\n            @open=\"onOpen\"\r\n            @close=\"onClose2\"\r\n            ref=\"dialog2\">\r\n    </md-dialog-alert>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-5\">\r\n            <sti-section>\r\n                <div style=\"padding: 15px\">\r\n                    <h2>编辑用户</h2>\r\n                    <form class=\"form-horizontal\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"username\" class=\"col-sm-2 control-label\">姓名</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"username\" v-model=\"item.username\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"name\" class=\"col-sm-2 control-label\">角色</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" v-model=\"item.name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"perm_data\" class=\"col-sm-2 control-label\">权限</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"perm_data\" v-model=\"item.perm_data\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-offset-7\">\r\n                                <router-link to=\"/system/user\">\r\n                                    <sti-button>{{$t('button.return')}}</sti-button>\r\n                                </router-link>\r\n                                <sti-button @clickevent=\"submitUser\">{{$t('button.confirm')}}</sti-button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </sti-section>\r\n        </div>\r\n        <div class=\"col-md-4\"></div>\r\n    </div>\r\n</div>";

/***/ })

});
//# sourceMappingURL=9.js.map