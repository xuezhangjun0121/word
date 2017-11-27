webpackJsonp([1],{

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./grid.locale-ar": 334,
		"./grid.locale-ar.js": 334,
		"./grid.locale-bg": 336,
		"./grid.locale-bg.js": 336,
		"./grid.locale-ca": 337,
		"./grid.locale-ca.js": 337,
		"./grid.locale-cn": 338,
		"./grid.locale-cn.js": 338,
		"./grid.locale-cs": 339,
		"./grid.locale-cs.js": 339,
		"./grid.locale-de": 340,
		"./grid.locale-de.js": 340,
		"./grid.locale-dk": 341,
		"./grid.locale-dk.js": 341,
		"./grid.locale-el": 342,
		"./grid.locale-el.js": 342,
		"./grid.locale-en": 343,
		"./grid.locale-en.js": 343,
		"./grid.locale-es": 344,
		"./grid.locale-es.js": 344,
		"./grid.locale-fa": 345,
		"./grid.locale-fa.js": 345,
		"./grid.locale-fi": 346,
		"./grid.locale-fi.js": 346,
		"./grid.locale-fr": 347,
		"./grid.locale-fr.js": 347,
		"./grid.locale-gl": 348,
		"./grid.locale-gl.js": 348,
		"./grid.locale-he": 349,
		"./grid.locale-he.js": 349,
		"./grid.locale-hr": 350,
		"./grid.locale-hr.js": 350,
		"./grid.locale-hu": 351,
		"./grid.locale-hu.js": 351,
		"./grid.locale-id": 352,
		"./grid.locale-id.js": 352,
		"./grid.locale-is": 353,
		"./grid.locale-is.js": 353,
		"./grid.locale-it": 354,
		"./grid.locale-it.js": 354,
		"./grid.locale-ja": 355,
		"./grid.locale-ja.js": 355,
		"./grid.locale-kr": 356,
		"./grid.locale-kr.js": 356,
		"./grid.locale-lt": 357,
		"./grid.locale-lt.js": 357,
		"./grid.locale-me": 358,
		"./grid.locale-me.js": 358,
		"./grid.locale-nl": 359,
		"./grid.locale-nl.js": 359,
		"./grid.locale-no": 360,
		"./grid.locale-no.js": 360,
		"./grid.locale-pl": 361,
		"./grid.locale-pl.js": 361,
		"./grid.locale-pt": 362,
		"./grid.locale-pt-br": 363,
		"./grid.locale-pt-br.js": 363,
		"./grid.locale-pt.js": 362,
		"./grid.locale-ro": 364,
		"./grid.locale-ro.js": 364,
		"./grid.locale-ru": 365,
		"./grid.locale-ru.js": 365,
		"./grid.locale-sk": 366,
		"./grid.locale-sk.js": 366,
		"./grid.locale-sq": 367,
		"./grid.locale-sq.js": 367,
		"./grid.locale-sr": 368,
		"./grid.locale-sr-latin": 369,
		"./grid.locale-sr-latin.js": 369,
		"./grid.locale-sr.js": 368,
		"./grid.locale-sv": 370,
		"./grid.locale-sv.js": 370,
		"./grid.locale-th": 371,
		"./grid.locale-th.js": 371,
		"./grid.locale-tr": 372,
		"./grid.locale-tr.js": 372,
		"./grid.locale-tw": 373,
		"./grid.locale-tw.js": 373,
		"./grid.locale-uk": 374,
		"./grid.locale-uk.js": 374,
		"./grid.locale-vi": 375,
		"./grid.locale-vi.js": 375
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 333;


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Arabic Translation
	 * 
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["ar"] = {
		defaults : {
			recordtext: "تسجيل {0} - {1} على {2}",
			emptyrecords: "لا يوجد تسجيل",
			loadtext: "تحميل...",
			savetext: "Saving...",
			pgtext : "صفحة {0} على {1}",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "بحث...",
			Find: "بحث",
			Reset: "إلغاء",
			odata: [{ oper:'eq', text:"يساوي"},{ oper:'ne', text:"يختلف"},{ oper:'lt', text:"أقل"},{ oper:'le', text:"أقل أو يساوي"},{ oper:'gt', text:"أكبر"},{ oper:'ge', text:"أكبر أو يساوي"},{ oper:'bw', text:"يبدأ بـ"},{ oper:'bn', text:"لا يبدأ بـ"},{ oper:'in', text:"est dans"},{ oper:'ni', text:"n'est pas dans"},{ oper:'ew', text:"ينته بـ"},{ oper:'en', text:"لا ينته بـ"},{ oper:'cn', text:"يحتوي"},{ oper:'nc', text:"لا يحتوي"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "مع", text: "الكل" },	{ op: "أو",  text: "لا أحد" }],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"		
	},
		edit : {
			addCaption: "اضافة",
			editCaption: "تحديث",
			bSubmit: "تثبيث",
			bCancel: "إلغاء",
			bClose: "غلق",
			saveData: "تغيرت المعطيات هل تريد التسجيل ?",
			bYes: "نعم",
			bNo: "لا",
			bExit: "إلغاء",
			msg: {
				required: "خانة إجبارية",
				number: "سجل رقم صحيح",
				minValue: "يجب أن تكون القيمة أكبر أو تساوي 0",
				maxValue: "يجب أن تكون القيمة أقل أو تساوي 0",
				email: "بريد غير صحيح",
				integer: "سجل عدد طبييعي صحيح",
				url: "ليس عنوانا صحيحا. البداية الصحيحة ('http://' أو 'https://')",
				nodefined : " ليس محدد!",
				novalue : " قيمة الرجوع مطلوبة!",
				customarray : "يجب على الدالة الشخصية أن تنتج جدولا",
				customfcheck : "الدالة الشخصية مطلوبة في حالة التحقق الشخصي"
			}
		},
		view : {
			caption: "رأيت التسجيلات",
			bClose: "غلق"
		},
		del : {
			caption: "حذف",
			msg: "حذف التسجيلات المختارة ?",
			bSubmit: "حذف",
			bCancel: "إلغاء"
		},
		nav : {
			edittext: " ",
			edittitle: "تغيير التسجيل المختار",
			addtext:" ",
			addtitle: "إضافة تسجيل",
			deltext: " ",
			deltitle: "حذف التسجيل المختار",
			searchtext: " ",
			searchtitle: "بحث عن تسجيل",
			refreshtext: "",
			refreshtitle: "تحديث الجدول",
			alertcap: "تحذير",
			alerttext: "يرجى إختيار السطر",
			viewtext: "",
			viewtitle: "إظهار السطر المختار",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "إظهار/إخفاء الأعمدة",
			bSubmit: "تثبيث",
			bCancel: "إلغاء"
		},
		errors : {
			errcap : "خطأ",
			nourl : "لا يوجد عنوان محدد",
			norecords: "لا يوجد تسجيل للمعالجة",
			model : "عدد العناوين (colNames) <> عدد التسجيلات (colModel)!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت",
					"الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"
				],
				monthNames: [
					"جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
					"جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
				],
				AmPm : ["صباحا","مساءا","صباحا","مساءا"],
				S: function (j) {return j == 1 ? 'er' : 'e';},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// ==ClosureCompiler==
	// @compilation_level SIMPLE_OPTIMIZATIONS

	/**
	 * @license Guriddo jqGrid JS 5.1.1 (2016-06-08)
	 * Copyright (c) 2008, Tony Tomov, tony@trirand.com
	 * 
	 * License: http://guriddo.net/?page_id=103334
	 */
	//jsHint options
	/*jshint evil:true, eqeqeq:false, eqnull:true, devel:true */
	/*global jQuery, window, define, navigator, document */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ 
				__webpack_require__(153)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {
	"use strict";
	//module begin
	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("defaults")) {
		$.jgrid.defaults = {};
	}
	$.extend($.jgrid,{
		version : "5.1.1",
		htmlDecode : function(value){
			if(value && (value==='&nbsp;' || value==='&#160;' || (value.length===1 && value.charCodeAt(0)===160))) { return "";}
			return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");		
		},
		htmlEncode : function (value){
			return !value ? value : String(value).replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
		},
		template : function(format){ //jqgformat
			var args = $.makeArray(arguments).slice(1), j, al = args.length;
			if(format==null) { format = ""; }
			return format.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g, function(m,i){
				if(!isNaN(parseInt(i,10))) {
					return args[parseInt(i,10)];
				}
				for(j=0; j < al;j++) {
					if($.isArray(args[j])) {
						var nmarr = args[ j ],
						k = nmarr.length;
						while(k--) {
							if(i===nmarr[k].nm) {
								return nmarr[k].v;
							}
						}
					}
				}
			});
		}, 
		msie : function () {
			return $.jgrid.msiever() > 0;
		},
		msiever : function () {
			var rv =0,
			sAgent = window.navigator.userAgent,
			Idx = sAgent.indexOf("MSIE");

			if (Idx > 0)  {
				rv = parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
			} else if ( !!navigator.userAgent.match(/Trident\/7\./) ) {
				rv = 11;
			}
			return rv;
		},
		getCellIndex : function (cell) {
			var c = $(cell);
			if (c.is('tr')) { return -1; }
			c = (!c.is('td') && !c.is('th') ? c.closest("td,th") : c)[0];
			if ($.jgrid.msie()) { return $.inArray(c, c.parentNode.cells); }
			return c.cellIndex;
		},
		stripHtml : function(v) {
			v = String(v);
			var regexp = /<("[^"]*"|'[^']*'|[^'">])*>/gi;
			if (v) {
				v = v.replace(regexp,"");
				return (v && v !== '&nbsp;' && v !== '&#160;') ? v.replace(/\"/g,"'") : "";
			} 
				return v;
		},
		stripPref : function (pref, id) {
			var obj = $.type( pref );
			if( obj === "string" || obj === "number") {
				pref =  String(pref);
				id = pref !== "" ? String(id).replace(String(pref), "") : id;
			}
			return id;
		},
		useJSON : true,
		parse : function(jsonString) {
			var js = jsonString;
			if (js.substr(0,9) === "while(1);") { js = js.substr(9); }
			if (js.substr(0,2) === "/*") { js = js.substr(2,js.length-4); }
			if(!js) { js = "{}"; }
			return ($.jgrid.useJSON===true && typeof JSON === 'object' && typeof JSON.parse === 'function') ?
				JSON.parse(js) :
				eval('(' + js + ')');
		},
		parseDate : function(format, date, newformat, opts) {
			var	token = /\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g,
			timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
			timezoneClip = /[^-+\dA-Z]/g,
			msDateRegExp = new RegExp("^\/Date\\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\\)\/$"),
			msMatch = ((typeof date === 'string') ? date.match(msDateRegExp): null),
			pad = function (value, length) {
				value = String(value);
				length = parseInt(length,10) || 2;
				while (value.length < length)  { value = '0' + value; }
				return value;
			},
			ts = {m : 1, d : 1, y : 1970, h : 0, i : 0, s : 0, u:0},
			timestamp=0, dM, k,hl,
			h12to24 = function(ampm, h){
				if (ampm === 0){ if (h === 12) { h = 0;} }
				else { if (h !== 12) { h += 12; } }
				return h;
			},
			offset =0;
			if(opts === undefined) {
				opts = $.jgrid.getRegional(this, "formatter.date");//$.jgrid.formatter.date;
			}
			// old lang files
			if(opts.parseRe === undefined ) {
				opts.parseRe = /[#%\\\/:_;.,\t\s-]/;
			}
			if( opts.masks.hasOwnProperty(format) ) { format = opts.masks[format]; }
			if(date && date != null) {
				if( !isNaN( date - 0 ) && String(format).toLowerCase() === "u") {
					//Unix timestamp
					timestamp = new Date( parseFloat(date)*1000 );
				} else if(date.constructor === Date) {
					timestamp = date;
					// Microsoft date format support
				} else if( msMatch !== null ) {
					timestamp = new Date(parseInt(msMatch[1], 10));
					if (msMatch[3]) {
						offset = Number(msMatch[5]) * 60 + Number(msMatch[6]);
						offset *= ((msMatch[4] === '-') ? 1 : -1);
						offset -= timestamp.getTimezoneOffset();
						timestamp.setTime(Number(Number(timestamp) + (offset * 60 * 1000)));
					}
				} else {
					//Support ISO8601Long that have Z at the end to indicate UTC timezone
					if(opts.srcformat === 'ISO8601Long' && date.charAt(date.length - 1) === 'Z') {
						offset -= (new Date()).getTimezoneOffset();
					}
					date = String(date).replace(/\T/g,"#").replace(/\t/,"%").split(opts.parseRe);
					format = format.replace(/\T/g,"#").replace(/\t/,"%").split(opts.parseRe);
					// parsing for month names
					for(k=0,hl=format.length;k<hl;k++){
						switch ( format[k] ) {
							case 'M':
								dM = $.inArray(date[k],opts.monthNames);
								if(dM !== -1 && dM < 12){date[k] = dM+1; ts.m = date[k];}
								break;
							case 'F':
								dM = $.inArray(date[k],opts.monthNames,12);
								if(dM !== -1 && dM > 11){date[k] = dM+1-12; ts.m = date[k];}
								break;
							case 'n':
								format[k] = 'm';
								break;
							case 'j': 
								format[k] = 'd';
								break;
							case 'a':
								dM = $.inArray(date[k],opts.AmPm);
								if(dM !== -1 && dM < 2 && date[k] === opts.AmPm[dM]){
									date[k] = dM;
									ts.h = h12to24(date[k], ts.h);
								}
								break;
							case 'A':
								dM = $.inArray(date[k],opts.AmPm);
								if(dM !== -1 && dM > 1 && date[k] === opts.AmPm[dM]){
									date[k] = dM-2;
									ts.h = h12to24(date[k], ts.h);
								}
								break;
							case 'g':
								ts.h = parseInt(date[k], 10);
								break;
						}
						if(date[k] !== undefined) {
							ts[format[k].toLowerCase()] = parseInt(date[k],10);
						}
					}
					if(ts.f) {ts.m = ts.f;}
					if( ts.m === 0 && ts.y === 0 && ts.d === 0) {
						return "&#160;" ;
					}
					ts.m = parseInt(ts.m,10)-1;
					var ty = ts.y;
					if (ty >= 70 && ty <= 99) {ts.y = 1900+ts.y;}
					else if (ty >=0 && ty <=69) {ts.y= 2000+ts.y;}
					timestamp = new Date(ts.y, ts.m, ts.d, ts.h, ts.i, ts.s, ts.u);
					//Apply offset to show date as local time.
					if(offset > 0) {
						timestamp.setTime(Number(Number(timestamp) + (offset * 60 * 1000)));
					}
				}
			} else {
				timestamp = new Date(ts.y, ts.m, ts.d, ts.h, ts.i, ts.s, ts.u);
			}
			if(opts.userLocalTime && offset === 0) {
				offset -= (new Date()).getTimezoneOffset();
				if( offset > 0 ) {
					timestamp.setTime(Number(Number(timestamp) + (offset * 60 * 1000)));
				}
			}
			if( newformat === undefined ) {
				return timestamp;
			}
			if( opts.masks.hasOwnProperty(newformat) )  {
				newformat = opts.masks[newformat];
			} else if ( !newformat ) {
				newformat = 'Y-m-d';
			}
			var 
				G = timestamp.getHours(),
				i = timestamp.getMinutes(),
				j = timestamp.getDate(),
				n = timestamp.getMonth() + 1,
				o = timestamp.getTimezoneOffset(),
				s = timestamp.getSeconds(),
				u = timestamp.getMilliseconds(),
				w = timestamp.getDay(),
				Y = timestamp.getFullYear(),
				N = (w + 6) % 7 + 1,
				z = (new Date(Y, n - 1, j) - new Date(Y, 0, 1)) / 86400000,
				flags = {
					// Day
					d: pad(j),
					D: opts.dayNames[w],
					j: j,
					l: opts.dayNames[w + 7],
					N: N,
					S: opts.S(j),
					//j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th',
					w: w,
					z: z,
					// Week
					W: N < 5 ? Math.floor((z + N - 1) / 7) + 1 : Math.floor((z + N - 1) / 7) || ((new Date(Y - 1, 0, 1).getDay() + 6) % 7 < 4 ? 53 : 52),
					// Month
					F: opts.monthNames[n - 1 + 12],
					m: pad(n),
					M: opts.monthNames[n - 1],
					n: n,
					t: '?',
					// Year
					L: '?',
					o: '?',
					Y: Y,
					y: String(Y).substring(2),
					// Time
					a: G < 12 ? opts.AmPm[0] : opts.AmPm[1],
					A: G < 12 ? opts.AmPm[2] : opts.AmPm[3],
					B: '?',
					g: G % 12 || 12,
					G: G,
					h: pad(G % 12 || 12),
					H: pad(G),
					i: pad(i),
					s: pad(s),
					u: u,
					// Timezone
					e: '?',
					I: '?',
					O: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
					P: '?',
					T: (String(timestamp).match(timezone) || [""]).pop().replace(timezoneClip, ""),
					Z: '?',
					// Full Date/Time
					c: '?',
					r: '?',
					U: Math.floor(timestamp / 1000)
				};
			return newformat.replace(token, function ($0) {
				return flags.hasOwnProperty($0) ? flags[$0] : $0.substring(1);
			});
		},
		jqID : function(sid){
			return String(sid).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g,"\\$&");
		},
		guid : 1,
		uidPref: 'jqg',
		randId : function( prefix )	{
			return (prefix || $.jgrid.uidPref) + ($.jgrid.guid++);
		},
		getAccessor : function(obj, expr) {
			var ret,p,prm = [], i;
			if( typeof expr === 'function') { return expr(obj); }
			ret = obj[expr];
			if(ret===undefined) {
				try {
					if ( typeof expr === 'string' ) {
						prm = expr.split('.');
					}
					i = prm.length;
					if( i ) {
						ret = obj;
						while (ret && i--) {
							p = prm.shift();
							ret = ret[p];
						}
					}
				} catch (e) {}
			}
			return ret;
		},
		getXmlData: function (obj, expr, returnObj) {
			var ret, m = typeof expr === 'string' ? expr.match(/^(.*)\[(\w+)\]$/) : null;
			if (typeof expr === 'function') { return expr(obj); }
			if (m && m[2]) {
				// m[2] is the attribute selector
				// m[1] is an optional element selector
				// examples: "[id]", "rows[page]"
				return m[1] ? $(m[1], obj).attr(m[2]) : $(obj).attr(m[2]);
			}
				ret = $(expr, obj);
				if (returnObj) { return ret; }
				//$(expr, obj).filter(':last'); // we use ':last' to be more compatible with old version of jqGrid
				return ret.length > 0 ? $(ret).text() : undefined;
		},
		cellWidth : function () {
			var $testDiv = $("<div class='ui-jqgrid' style='left:10000px'><table class='ui-jqgrid-btable ui-common-table' style='width:5px;'><tr class='jqgrow'><td style='width:5px;display:block;'></td></tr></table></div>"),
			testCell = $testDiv.appendTo("body")
				.find("td")
				.width();
			$testDiv.remove();
			return Math.abs(testCell-5) > 0.1;
		},
		isLocalStorage : function () {
			try {
				return 'localStorage' in window && window.localStorage !== null;
			} catch (e) {
				return false;
			}
		},
		getRegional : function(inst, param, def_val) {
			var ret;
			if(def_val !== undefined) {
				return def_val;
			}
			if(inst.p && inst.p.regional && $.jgrid.regional) {
					ret = $.jgrid.getAccessor( $.jgrid.regional[inst.p.regional] || {}, param);
			}
			if(ret === undefined ) {
				ret = $.jgrid.getAccessor( $.jgrid, param);
			}
			return ret;
		},
		isMobile : function() {
			try {
				if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
					return true;
				}
				return false;
			} catch(e)	{ 
				return false; 
			}	
		},
		cell_width : true,
		ajaxOptions: {},
		from : function(source){
			// Original Author Hugo Bonacci
			// License MIT http://jlinq.codeplex.com/license
			var $t = this,
			QueryObject=function(d,q){
			if(typeof d==="string"){
				d=$.data(d);
			}
			var self=this,
			_data=d,
			_usecase=true,
			_trim=false,
			_query=q,
			_stripNum = /[\$,%]/g,
			_lastCommand=null,
			_lastField=null,
			_orDepth=0,
			_negate=false,
			_queuedOperator="",
			_sorting=[],
			_useProperties=true;
			if(typeof d==="object"&&d.push) {
				if(d.length>0){
					if(typeof d[0]!=="object"){
						_useProperties=false;
					}else{
						_useProperties=true;
					}
				}
			}else{
				throw "data provides is not an array";
			}
			this._hasData=function(){
				return _data===null?false:_data.length===0?false:true;
			};
			this._getStr=function(s){
				var phrase=[];
				if(_trim){
					phrase.push("jQuery.trim(");
				}
				phrase.push("String("+s+")");
				if(_trim){
					phrase.push(")");
				}
				if(!_usecase){
					phrase.push(".toLowerCase()");
				}
				return phrase.join("");
			};
			this._strComp=function(val){
				if(typeof val==="string"){
					return".toString()";
				}
				return"";
			};
			this._group=function(f,u){
				return({field:f.toString(),unique:u,items:[]});
			};
			this._toStr=function(phrase){
				if(_trim){
					phrase=$.trim(phrase);
				}
				phrase=phrase.toString().replace(/\\/g,'\\\\').replace(/\"/g,'\\"');
				return _usecase ? phrase : phrase.toLowerCase();
			};
			this._funcLoop=function(func){
				var results=[];
				$.each(_data,function(i,v){
					results.push(func(v));
				});
				return results;
			};
			this._append=function(s){
				var i;
				if(_query===null){
					_query="";
				} else {
					_query+=_queuedOperator === "" ? " && " :_queuedOperator;
				}
				for (i=0;i<_orDepth;i++){
					_query+="(";
				}
				if(_negate){
					_query+="!";
				}
				_query+="("+s+")";
				_negate=false;
				_queuedOperator="";
				_orDepth=0;
			};
			this._setCommand=function(f,c){
				_lastCommand=f;
				_lastField=c;
			};
			this._resetNegate=function(){
				_negate=false;
			};
			this._repeatCommand=function(f,v){
				if(_lastCommand===null){
					return self;
				}
				if(f!==null&&v!==null){
					return _lastCommand(f,v);
				}
				if(_lastField===null){
					return _lastCommand(f);
				}
				if(!_useProperties){
					return _lastCommand(f);
				}
				return _lastCommand(_lastField,f);
			};
			this._equals=function(a,b){
				return(self._compare(a,b,1)===0);
			};
			this._compare=function(a,b,d){
				var toString = Object.prototype.toString;
				if( d === undefined) { d = 1; }
				if(a===undefined) { a = null; }
				if(b===undefined) { b = null; }
				if(a===null && b===null){
					return 0;
				}
				if(a===null&&b!==null){
					return 1;
				}
				if(a!==null&&b===null){
					return -1;
				}
				if (toString.call(a) === '[object Date]' && toString.call(b) === '[object Date]') {
					if (a < b) { return -d; }
					if (a > b) { return d; }
					return 0;
				}
				if(!_usecase && typeof a !== "number" && typeof b !== "number" ) {
					a=String(a);
					b=String(b);
				}
				if(a<b){return -d;}
				if(a>b){return d;}
				return 0;
			};
			this._performSort=function(){
				if(_sorting.length===0){return;}
				_data=self._doSort(_data,0);
			};
			this._doSort=function(d,q){
				var by=_sorting[q].by,
				dir=_sorting[q].dir,
				type = _sorting[q].type,
				dfmt = _sorting[q].datefmt,
				sfunc = _sorting[q].sfunc;
				if(q===_sorting.length-1){
					return self._getOrder(d, by, dir, type, dfmt, sfunc);
				}
				q++;
				var values=self._getGroup(d,by,dir,type,dfmt), results=[], i, j, sorted;
				for(i=0;i<values.length;i++){
					sorted=self._doSort(values[i].items,q);
					for(j=0;j<sorted.length;j++){
						results.push(sorted[j]);
					}
				}
				return results;
			};
			this._getOrder=function(data,by,dir,type, dfmt, sfunc){
				var sortData=[],_sortData=[], newDir = dir==="a" ? 1 : -1, i,ab,j,
				findSortKey;

				if(type === undefined ) { type = "text"; }
				if (type === 'float' || type=== 'number' || type=== 'currency' || type=== 'numeric') {
					findSortKey = function($cell) {
						var key = parseFloat( String($cell).replace(_stripNum, ''));
						return isNaN(key) ? Number.NEGATIVE_INFINITY : key;
					};
				} else if (type==='int' || type==='integer') {
					findSortKey = function($cell) {
						return $cell ? parseFloat(String($cell).replace(_stripNum, '')) : Number.NEGATIVE_INFINITY;
					};
				} else if(type === 'date' || type === 'datetime') {
					findSortKey = function($cell) {
						return $.jgrid.parseDate.call($t, dfmt, $cell).getTime();
					};
				} else if($.isFunction(type)) {
					findSortKey = type;
				} else {
					findSortKey = function($cell) {
						$cell = $cell ? $.trim(String($cell)) : "";
						return _usecase ? $cell : $cell.toLowerCase();
					};
				}
				$.each(data,function(i,v){
					ab = by!=="" ? $.jgrid.getAccessor(v,by) : v;
					if(ab === undefined) { ab = ""; }
					ab = findSortKey(ab, v);
					_sortData.push({ 'vSort': ab,'index':i});
				});
				if($.isFunction(sfunc)) {
					_sortData.sort(function(a,b){
						return sfunc.call(this,a.vSort, b.vSort, newDir, a, b);
					});
				} else {
					_sortData.sort(function(a,b){
						return self._compare(a.vSort, b.vSort,newDir);
					});
				}
				j=0;
				var nrec= data.length;
				// overhead, but we do not change the original data.
				while(j<nrec) {
					i = _sortData[j].index;
					sortData.push(data[i]);
					j++;
				}
				return sortData;
			};
			this._getGroup=function(data,by,dir,type, dfmt){
				var results=[],
				group=null,
				last=null, val;
				$.each(self._getOrder(data,by,dir,type, dfmt),function(i,v){
					val = $.jgrid.getAccessor(v, by);
					if(val == null) { val = ""; }
					if(!self._equals(last,val)){
						last=val;
						if(group !== null){
							results.push(group);
						}
						group=self._group(by,val);
					}
					group.items.push(v);
				});
				if(group !== null){
					results.push(group);
				}
				return results;
			};
			this.ignoreCase=function(){
				_usecase=false;
				return self;
			};
			this.useCase=function(){
				_usecase=true;
				return self;
			};
			this.trim=function(){
				_trim=true;
				return self;
			};
			this.noTrim=function(){
				_trim=false;
				return self;
			};
			this.execute=function(){
				var match=_query, results=[];
				if(match === null){
					return self;
				}
				$.each(_data,function(){
					if(eval(match)){results.push(this);}
				});
				_data=results;
				return self;
			};
			this.data=function(){
				return _data;
			};
			this.select=function(f){
				self._performSort();
				if(!self._hasData()){ return[]; }
				self.execute();
				if($.isFunction(f)){
					var results=[];
					$.each(_data,function(i,v){
						results.push(f(v));
					});
					return results;
				}
				return _data;
			};
			this.hasMatch=function(){
				if(!self._hasData()) { return false; }
				self.execute();
				return _data.length>0;
			};
			this.andNot=function(f,v,x){
				_negate=!_negate;
				return self.and(f,v,x);
			};
			this.orNot=function(f,v,x){
				_negate=!_negate;
				return self.or(f,v,x);
			};
			this.not=function(f,v,x){
				return self.andNot(f,v,x);
			};
			this.and=function(f,v,x){
				_queuedOperator=" && ";
				if(f===undefined){
					return self;
				}
				return self._repeatCommand(f,v,x);
			};
			this.or=function(f,v,x){
				_queuedOperator=" || ";
				if(f===undefined) { return self; }
				return self._repeatCommand(f,v,x);
			};
			this.orBegin=function(){
				_orDepth++;
				return self;
			};
			this.orEnd=function(){
				if (_query !== null){
					_query+=")";
				}
				return self;
			};
			this.isNot=function(f){
				_negate=!_negate;
				return self.is(f);
			};
			this.is=function(f){
				self._append('this.'+f);
				self._resetNegate();
				return self;
			};
			this._compareValues=function(func,f,v,how,t){
				var fld;
				if(_useProperties){
					fld='jQuery.jgrid.getAccessor(this,\''+f+'\')';
				}else{
					fld='this';
				}
				if(v===undefined) { v = null; }
				//var val=v===null?f:v,
				var val =v,
				swst = t.stype === undefined ? "text" : t.stype;
				if(v !== null) {
				switch(swst) {
					case 'int':
					case 'integer':
						val = (isNaN(Number(val)) || val==="") ? '0' : val; // To be fixed with more inteligent code
						fld = 'parseInt('+fld+',10)';
						val = 'parseInt('+val+',10)';
						break;
					case 'float':
					case 'number':
					case 'numeric':
						val = String(val).replace(_stripNum, '');
						val = (isNaN(Number(val)) || val==="") ? '0' : val; // To be fixed with more inteligent code
						fld = 'parseFloat('+fld+')';
						val = 'parseFloat('+val+')';
						break;
					case 'date':
					case 'datetime':
						val = String($.jgrid.parseDate.call($t, t.srcfmt || 'Y-m-d',val).getTime());
						fld = 'jQuery.jgrid.parseDate.call(jQuery("#'+$.jgrid.jqID($t.p.id)+'")[0],"'+t.srcfmt+'",'+fld+').getTime()';
						break;
					default :
						fld=self._getStr(fld);
						val=self._getStr('"'+self._toStr(val)+'"');
				}
				}
				self._append(fld+' '+how+' '+val);
				self._setCommand(func,f);
				self._resetNegate();
				return self;
			};
			this.equals=function(f,v,t){
				return self._compareValues(self.equals,f,v,"==",t);
			};
			this.notEquals=function(f,v,t){
				return self._compareValues(self.equals,f,v,"!==",t);
			};
			this.isNull = function(f,v,t){
				return self._compareValues(self.equals,f,null,"===",t);
			};
			this.greater=function(f,v,t){
				return self._compareValues(self.greater,f,v,">",t);
			};
			this.less=function(f,v,t){
				return self._compareValues(self.less,f,v,"<",t);
			};
			this.greaterOrEquals=function(f,v,t){
				return self._compareValues(self.greaterOrEquals,f,v,">=",t);
			};
			this.lessOrEquals=function(f,v,t){
				return self._compareValues(self.lessOrEquals,f,v,"<=",t);
			};
			this.startsWith=function(f,v){
				var val = (v==null) ? f: v,
				length=_trim ? $.trim(val.toString()).length : val.toString().length;
				if(_useProperties){
					self._append(self._getStr('jQuery.jgrid.getAccessor(this,\''+f+'\')')+'.substr(0,'+length+') == '+self._getStr('"'+self._toStr(v)+'"'));
				}else{
					if (v!=null) { length=_trim?$.trim(v.toString()).length:v.toString().length; }
					self._append(self._getStr('this')+'.substr(0,'+length+') == '+self._getStr('"'+self._toStr(f)+'"'));
				}
				self._setCommand(self.startsWith,f);
				self._resetNegate();
				return self;
			};
			this.endsWith=function(f,v){
				var val = (v==null) ? f: v,
				length=_trim ? $.trim(val.toString()).length:val.toString().length;
				if(_useProperties){
					self._append(self._getStr('jQuery.jgrid.getAccessor(this,\''+f+'\')')+'.substr('+self._getStr('jQuery.jgrid.getAccessor(this,\''+f+'\')')+'.length-'+length+','+length+') == "'+self._toStr(v)+'"');
				} else {
					self._append(self._getStr('this')+'.substr('+self._getStr('this')+'.length-"'+self._toStr(f)+'".length,"'+self._toStr(f)+'".length) == "'+self._toStr(f)+'"');
				}
				self._setCommand(self.endsWith,f);self._resetNegate();
				return self;
			};
			this.contains=function(f,v){
				if(_useProperties){
					self._append(self._getStr('jQuery.jgrid.getAccessor(this,\''+f+'\')')+'.indexOf("'+self._toStr(v)+'",0) > -1');
				}else{
					self._append(self._getStr('this')+'.indexOf("'+self._toStr(f)+'",0) > -1');
				}
				self._setCommand(self.contains,f);
				self._resetNegate();
				return self;
			};
			this.groupBy=function(by,dir,type, datefmt){
				if(!self._hasData()){
					return null;
				}
				return self._getGroup(_data,by,dir,type, datefmt);
			};
			this.orderBy=function(by,dir,stype, dfmt, sfunc){
				dir = dir == null ? "a" :$.trim(dir.toString().toLowerCase());
				if(stype == null) { stype = "text"; }
				if(dfmt == null) { dfmt = "Y-m-d"; }
				if(sfunc == null) { sfunc = false; }
				if(dir==="desc"||dir==="descending"){dir="d";}
				if(dir==="asc"||dir==="ascending"){dir="a";}
				_sorting.push({by:by,dir:dir,type:stype, datefmt: dfmt, sfunc: sfunc});
				return self;
			};
			return self;
			};
		return new QueryObject(source,null);
		},
		getMethod: function (name) {
	        return this.getAccessor($.fn.jqGrid, name);
		},
		extend : function(methods) {
			$.extend($.fn.jqGrid,methods);
			if (!this.no_legacy_api) {
				$.fn.extend(methods);
			}
		},
		clearBeforeUnload : function( jqGridId ) {
			var $t = $("#"+$.jgrid.jqID( jqGridId ))[0], grid;
			if(!$t.grid) { return;}
			grid = $t.grid;
			if ($.isFunction(grid.emptyRows)) {
				grid.emptyRows.call($t, true, true); // this work quick enough and reduce the size of memory leaks if we have someone
			}

			$(document).off("mouseup.jqGrid" + $t.p.id ); 
			$(grid.hDiv).off("mousemove"); // TODO add namespace
			$($t).off();
			var i, l = grid.headers.length,
			removevents = ['formatCol','sortData','updatepager','refreshIndex','setHeadCheckBox','constructTr','formatter','addXmlData','addJSONData','grid','p'];
			for (i = 0; i < l; i++) {
				grid.headers[i].el = null;
			}

			for( i in grid) {
				if( grid.hasOwnProperty(i)) {
					grid[i] = null;
				}
			}
			// experimental 
			for( i in $t.p) {
				if($t.p.hasOwnProperty(i)) {
					$t.p[i] = $.isArray($t.p[i]) ? [] : null;
				}
			}
			l = removevents.length;
			for(i = 0; i < l; i++) {
				if($t.hasOwnProperty(removevents[i])) {
					$t[removevents[i]] = null;
					delete($t[removevents[i]]);
				}
			}
		},
		gridUnload : function ( jqGridId ) {
			if(!jqGridId) { return; }
			jqGridId = $.trim(jqGridId);
			if(jqGridId.indexOf("#") === 0) {
				jqGridId = jqGridId.substring(1);
			}
			
			var $t = $("#"+ $.jgrid.jqID(jqGridId))[0];
			if ( !$t.grid ) {return;}
			var defgrid = {id: $($t).attr('id'),cl: $($t).attr('class')};
			if ($t.p.pager) {
				$($t.p.pager).off().empty().removeClass("ui-state-default ui-jqgrid-pager ui-corner-bottom");
			}
			var newtable = document.createElement('table');
			newtable.className = defgrid.cl;
			var gid = $.jgrid.jqID($t.id);
			$(newtable).removeClass("ui-jqgrid-btable ui-common-table").insertBefore("#gbox_"+gid);
			if( $($t.p.pager).parents("#gbox_"+gid).length === 1 ) {
				$($t.p.pager).insertBefore("#gbox_"+gid);
			}
			$.jgrid.clearBeforeUnload( jqGridId );
			$("#gbox_"+gid).remove();
			$(newtable).attr({id:defgrid.id});
			$("#alertmod_"+$.jgrid.jqID(jqGridId)).remove();
		},
		gridDestroy : function ( jqGridId ) {
			if(!jqGridId) { return; }
			jqGridId = $.trim(jqGridId);
			if(jqGridId.indexOf("#") === 0) {
				jqGridId = jqGridId.substring(1);
			}
			var $t = $("#"+ $.jgrid.jqID(jqGridId))[0];
			if ( !$t.grid ) {return;}
			if ( $t.p.pager ) { // if not part of grid
				$($t.p.pager).remove();
			}
			try {
				$.jgrid.clearBeforeUnload( jqGridId );
				$("#gbox_"+$.jgrid.jqID(jqGridId)).remove();
			} catch (_) {}
		},
		styleUI : {
			jQueryUI : {
				common : {
					disabled: "ui-state-disabled",
					highlight : "ui-state-highlight",
					hover : "ui-state-hover",
					cornerall: "ui-corner-all",
					cornertop: "ui-corner-top",
					cornerbottom : "ui-corner-bottom",
					hidden : "ui-helper-hidden",
					icon_base : "ui-icon",
					overlay : "ui-widget-overlay",
					active : "ui-state-active",
					error : "ui-state-error",
					button : "ui-state-default ui-corner-all",
					content : "ui-widget-content"
				},
				base : {
					entrieBox : "ui-widget ui-widget-content ui-corner-all", // entrie div  incl everthing
					viewBox : "", // view diw
					headerTable : "",
					headerBox : "ui-state-default",
					rowTable : "",
					rowBox : "ui-widget-content",
					footerTable : "",
					footerBox : "ui-widget-content",
					headerDiv : "ui-state-default",
					gridtitleBox : "ui-widget-header ui-corner-top ui-helper-clearfix",
					customtoolbarBox : "ui-state-default",
					//overlayBox: "ui-widget-overlay",
					loadingBox : "ui-state-default ui-state-active",
					rownumBox :  "ui-state-default",
					scrollBox : "ui-widget-content",
					multiBox : "",
					pagerBox : "ui-state-default ui-corner-bottom",
					pagerTable : "",
					toppagerBox : "ui-state-default",
					pgInput : "ui-corner-all",
					pgSelectBox : "ui-widget-content ui-corner-all",
					pgButtonBox : "ui-corner-all",
					icon_first : "ui-icon-seek-first",
					icon_prev : "ui-icon-seek-prev",
					icon_next: "ui-icon-seek-next",
					icon_end: "ui-icon-seek-end",
					icon_asc : "ui-icon-triangle-1-n",
					icon_desc : "ui-icon-triangle-1-s",
					icon_caption_open : "ui-icon-circle-triangle-n",
					icon_caption_close : "ui-icon-circle-triangle-s"
				},
				modal : {
					modal : "ui-widget ui-widget-content ui-corner-all ui-dialog",
					header : "ui-widget-header ui-corner-all ui-helper-clearfix",
					content :"ui-widget-content",
					resizable : "ui-resizable-handle ui-resizable-se",
					icon_close : "ui-icon-closethick",
					icon_resizable : "ui-icon-gripsmall-diagonal-se"
				},
				celledit : {
					inputClass : "ui-widget-content ui-corner-all"
				}, 
				inlinedit : {
					inputClass : "ui-widget-content ui-corner-all",
					icon_edit_nav : "ui-icon-pencil",
					icon_add_nav : "ui-icon-plus",
					icon_save_nav : "ui-icon-disk",
					icon_cancel_nav : "ui-icon-cancel"
				},
				formedit : {
					inputClass : "ui-widget-content ui-corner-all",
					icon_prev : "ui-icon-triangle-1-w",
					icon_next : "ui-icon-triangle-1-e",
					icon_save : "ui-icon-disk",
					icon_close : "ui-icon-close",
					icon_del : "ui-icon-scissors",
					icon_cancel : "ui-icon-cancel"
				},
				navigator : {
					icon_edit_nav : "ui-icon-pencil",
					icon_add_nav : "ui-icon-plus",
					icon_del_nav : "ui-icon-trash",
					icon_search_nav : "ui-icon-search",
					icon_refresh_nav : "ui-icon-refresh",
					icon_view_nav : "ui-icon-document",
					icon_newbutton_nav : "ui-icon-newwin"
				},
				grouping : {
					icon_plus : 'ui-icon-circlesmall-plus',
					icon_minus : 'ui-icon-circlesmall-minus'
				},
				filter : {
					table_widget : 'ui-widget ui-widget-content',
					srSelect : 'ui-widget-content ui-corner-all',
					srInput : 'ui-widget-content ui-corner-all',
					menu_widget : 'ui-widget ui-widget-content ui-corner-all',
					icon_search : 'ui-icon-search',
					icon_reset : 'ui-icon-arrowreturnthick-1-w',
					icon_query :'ui-icon-comment'
				},
				subgrid : {
					icon_plus : 'ui-icon-plus',
					icon_minus : 'ui-icon-minus',
					icon_open : 'ui-icon-carat-1-sw'
				},
				treegrid : {
					icon_plus : 'ui-icon-triangle-1-',
					icon_minus : 'ui-icon-triangle-1-s',
					icon_leaf : 'ui-icon-radio-off'
				},
				fmatter : {
					icon_edit : "ui-icon-pencil",
					icon_add : "ui-icon-plus",
					icon_save : "ui-icon-disk",
					icon_cancel : "ui-icon-cancel",
					icon_del : "ui-icon-trash"
				},
				colmenu : {
					menu_widget : 'ui-widget ui-widget-content ui-corner-all',
					input_checkbox : "ui-widget ui-widget-content",
					filter_select: "ui-widget-content ui-corner-all",
					filter_input : "ui-widget-content ui-corner-all",
					icon_menu : "ui-icon-comment",
					icon_sort_asc : "ui-icon-arrow-1-n",
					icon_sort_desc : "ui-icon-arrow-1-s",
					icon_columns : "ui-icon-extlink",
					icon_filter : "ui-icon-calculator",
					icon_group : "ui-icon-grip-solid-horizontal",
					icon_freeze : "ui-icon-grip-solid-vertical",
					icon_move: "ui-icon-arrow-4"
				}
			},
			Bootstrap : {
				common : {
					disabled: "ui-disabled",
					highlight : "success",
					hover : "active",
					cornerall: "", 
					cornertop: "",
					cornerbottom : "",
					hidden : "",
					icon_base : "glyphicon",
					overlay: "ui-overlay",
					active : "active",
					error : "bg-danger",
					button : "btn btn-default",
					content : ""
				},
				base : {
					entrieBox : "",
					viewBox : "table-responsive",
					headerTable : "table table-bordered",
					headerBox : "",
					rowTable : "table table-bordered",
					rowBox : "",
					footerTable : "table table-bordered",
					footerBox : "",
					headerDiv : "",
					gridtitleBox : "",
					customtoolbarBox : "",
					//overlayBox: "ui-overlay",
					loadingBox : "row",
					rownumBox :  "active",
					scrollBox : "",
					multiBox : "checkbox",
					pagerBox : "",
					pagerTable : "table",
					toppagerBox : "",
					pgInput : "form-control",
					pgSelectBox : "form-control",
					pgButtonBox : "",
					icon_first : "glyphicon-step-backward",
					icon_prev : "glyphicon-backward",
					icon_next: "glyphicon-forward",
					icon_end: "glyphicon-step-forward",
					icon_asc : "glyphicon-triangle-top",
					icon_desc : "glyphicon-triangle-bottom",
					icon_caption_open : "glyphicon-circle-arrow-up",
					icon_caption_close : "glyphicon-circle-arrow-down"
				},
				modal : {
					modal : "modal-content",
					header : "modal-header",
					title : "modal-title",
					content :"modal-body",
					resizable : "ui-resizable-handle ui-resizable-se",
					icon_close : "glyphicon-remove-circle",
					icon_resizable : "glyphicon-import"
				},
				celledit : {
					inputClass : 'form-control'
				}, 
				inlinedit : {
					inputClass : 'form-control',
					icon_edit_nav : "glyphicon-edit",
					icon_add_nav : "glyphicon-plus",
					icon_save_nav : "glyphicon-save",
					icon_cancel_nav : "glyphicon-remove-circle"
				},
				formedit : {
					inputClass : "form-control",
					icon_prev : "glyphicon-step-backward",
					icon_next : "glyphicon-step-forward",
					icon_save : "glyphicon-save",
					icon_close : "glyphicon-remove-circle",
					icon_del : "glyphicon-trash",
					icon_cancel : "glyphicon-remove-circle"
				},
				navigator : {
					icon_edit_nav : "glyphicon-edit",
					icon_add_nav : "glyphicon-plus",
					icon_del_nav : "glyphicon-trash",
					icon_search_nav : "glyphicon-search",
					icon_refresh_nav : "glyphicon-refresh",
					icon_view_nav : "glyphicon-info-sign",
					icon_newbutton_nav : "glyphicon-new-window"
				},
				grouping : {
					icon_plus : 'glyphicon-triangle-right',
					icon_minus : 'glyphicon-triangle-bottom'
				},
				filter : {
					table_widget : 'table table-condensed',
					srSelect : 'form-control',
					srInput : 'form-control',
					menu_widget : '',
					icon_search : 'glyphicon-search',
					icon_reset : 'glyphicon-refresh',
					icon_query :'glyphicon-comment'
				},
				subgrid : {
					icon_plus : 'glyphicon-triangle-right',
					icon_minus : 'glyphicon-triangle-bottom',
					icon_open : 'glyphicon-indent-left'
				},
				treegrid : {
					icon_plus : 'glyphicon-triangle-right',
					icon_minus : 'glyphicon-triangle-bottom',
					icon_leaf : 'glyphicon-unchecked'
				},
				fmatter : {
					icon_edit : "glyphicon-edit",
					icon_add : "glyphicon-plus",
					icon_save : "glyphicon-save",
					icon_cancel : "glyphicon-remove-circle",
					icon_del : "glyphicon-trash"
				},
				colmenu : {
					menu_widget : '',
					input_checkbox : "",
					filter_select: "form-control",
					filter_input : "form-control",
					icon_menu : "glyphicon-menu-hamburger",
					icon_sort_asc : "glyphicon-sort-by-alphabet",
					icon_sort_desc : "glyphicon-sort-by-alphabet-alt",
					icon_columns : "glyphicon-list-alt",
					icon_filter : "glyphicon-filter",
					icon_group : "glyphicon-align-left",
					icon_freeze : "glyphicon-object-align-horizontal",
					icon_move: "glyphicon-move"
				}
			}
		}
	});

	$.fn.jqGrid = function( pin ) {
		if (typeof pin === 'string') {
			var fn = $.jgrid.getMethod(pin);
			if (!fn) {
				throw ("jqGrid - No such method: " + pin);
			}
			var args = $.makeArray(arguments).slice(1);
			return fn.apply(this,args);
		}
		return this.each( function() {
			if(this.grid) {return;}
			var localData;
			if (pin != null && pin.data !== undefined) {
				localData = pin.data;
				pin.data = [];
			}

			var p = $.extend(true,{
				url: "",
				height: 150,
				page: 1,
				rowNum: 20,
				rowTotal : null,
				records: 0,
				pager: "",
				pgbuttons: true,
				pginput: true,
				colModel: [],
				rowList: [],
				colNames: [],
				sortorder: "asc",
				sortname: "",
				datatype: "xml",
				mtype: "GET",
				altRows: false,
				selarrrow: [],
				savedRow: [],
				shrinkToFit: true,
				xmlReader: {},
				jsonReader: {},
				subGrid: false,
				subGridModel :[],
				reccount: 0,
				lastpage: 0,
				lastsort: 0,
				selrow: null,
				beforeSelectRow: null,
				onSelectRow: null,
				onSortCol: null,
				ondblClickRow: null,
				onRightClickRow: null,
				onPaging: null,
				onSelectAll: null,
				onInitGrid : null,
				loadComplete: null,
				gridComplete: null,
				loadError: null,
				loadBeforeSend: null,
				afterInsertRow: null,
				beforeRequest: null,
				beforeProcessing : null,
				onHeaderClick: null,
				viewrecords: false,
				loadonce: false,
				multiselect: false,
				multikey: false,
				editurl: null,
				search: false,
				caption: "",
				hidegrid: true,
				hiddengrid: false,
				postData: {},
				userData: {},
				treeGrid : false,
				treeGridModel : 'nested',
				treeReader : {},
				treeANode : -1,
				ExpandColumn: null,
				tree_root_level : 0,
				prmNames: {
					page:"page",
					rows:"rows", 
					sort: "sidx",
					order: "sord", 
					search:"_search", 
					nd:"nd", 
					id:"id",
					oper:"oper",
					editoper:"edit",
					addoper:"add",
					deloper:"del", 
					subgridid:"id", 
					npage: null, 
					totalrows:"totalrows"
				},
				forceFit : false,
				gridstate : "visible",
				cellEdit: false,
				cellsubmit: "remote",
				nv:0,
				loadui: "enable",
				toolbar: [false,""],
				scroll: false,
				multiboxonly : false,
				deselectAfterSort : true,
				scrollrows : false,
				autowidth: false,
				scrollOffset : 18,
				cellLayout: 5,
				subGridWidth: 20,
				multiselectWidth: 30,
				gridview: true,
				rownumWidth: 35,
				rownumbers : false,
				pagerpos: 'center',
				recordpos: 'right',
				footerrow : false,
				userDataOnFooter : false,
				hoverrows : true,
				altclass : 'ui-priority-secondary',
				viewsortcols : [false,'vertical',true],
				resizeclass : '',
				autoencode : false,
				remapColumns : [],
				ajaxGridOptions :{},
				direction : "ltr",
				toppager: false,
				headertitles: false,
				scrollTimeout: 40,
				data : [],
				_index : {},
				grouping : false,
				groupingView : {
					groupField:[],
					groupOrder:[], 
					groupText:[],
					groupColumnShow:[],
					groupSummary:[], 
					showSummaryOnHide: false, 
					sortitems:[], 
					sortnames:[], 
					summary:[],
					summaryval:[], 
					plusicon: '',  
					minusicon: '', 
					displayField: [], 
					groupSummaryPos:[], 
					formatDisplayField : [], 
					_locgr : false
				},
				ignoreCase : true,
				cmTemplate : {},
				idPrefix : "",
				multiSort :  false,
				minColWidth : 33,
				scrollPopUp : false,
				scrollTopOffset: 0, // pixel
				scrollLeftOffset : "100%", //percent
				storeNavOptions: false,
				regional :  "en",
				styleUI : "jQueryUI",
				responsive : false,
				restoreCellonFail : true,
				colFilters : {},
				colMenu : false
			}, $.jgrid.defaults , pin );
			if (localData !== undefined) {
				p.data = localData;
				pin.data = localData;
			}
			var ts= this, grid={
				headers:[],
				cols:[],
				footers: [],
				dragStart: function(i,x,y) {
					var gridLeftPos = $(this.bDiv).offset().left;
					this.resizing = { idx: i, startX: x.pageX, sOL : x.pageX - gridLeftPos };
					this.hDiv.style.cursor = "col-resize";
					this.curGbox = $("#rs_m"+$.jgrid.jqID(p.id),"#gbox_"+$.jgrid.jqID(p.id));
					this.curGbox.css({display:"block",left:x.pageX-gridLeftPos,top:y[1],height:y[2]});
					$(ts).triggerHandler("jqGridResizeStart", [x, i]);
					if($.isFunction(p.resizeStart)) { p.resizeStart.call(ts,x,i); }
					document.onselectstart=function(){return false;};
				},
				dragMove: function(x) {
					if(this.resizing) {
						var diff = x.pageX-this.resizing.startX,
						h = this.headers[this.resizing.idx],
						newWidth = p.direction === "ltr" ? h.width + diff : h.width - diff, hn, nWn;
						if(newWidth > 33) {
							this.curGbox.css({left:this.resizing.sOL+diff});
							if(p.forceFit===true ){
								hn = this.headers[this.resizing.idx+p.nv];
								nWn = p.direction === "ltr" ? hn.width - diff : hn.width + diff;
								if(nWn > p.minColWidth ) {
									h.newWidth = newWidth;
									hn.newWidth = nWn;
								}
							} else {
								this.newWidth = p.direction === "ltr" ? p.tblwidth+diff : p.tblwidth-diff;
								h.newWidth = newWidth;
							}
						}
					}
				},
				dragEnd: function( events ) {
					this.hDiv.style.cursor = "default";
					if(this.resizing) {
						var idx = this.resizing.idx,
						nw = this.headers[idx].newWidth || this.headers[idx].width;
						nw = parseInt(nw,10);
						this.resizing = false;
						$("#rs_m"+$.jgrid.jqID(p.id)).css("display","none");
						p.colModel[idx].width = nw;
						this.headers[idx].width = nw;
						this.headers[idx].el.style.width = nw + "px";
						this.cols[idx].style.width = nw+"px";
						if(this.footers.length>0) {this.footers[idx].style.width = nw+"px";}
						if(p.forceFit===true){
							nw = this.headers[idx+p.nv].newWidth || this.headers[idx+p.nv].width;
							this.headers[idx+p.nv].width = nw;
							this.headers[idx+p.nv].el.style.width = nw + "px";
							this.cols[idx+p.nv].style.width = nw+"px";
							if(this.footers.length>0) {this.footers[idx+p.nv].style.width = nw+"px";}
							p.colModel[idx+p.nv].width = nw;
						} else {
							p.tblwidth = this.newWidth || p.tblwidth;
							$('table:first',this.bDiv).css("width",p.tblwidth+"px");
							$('table:first',this.hDiv).css("width",p.tblwidth+"px");
							this.hDiv.scrollLeft = this.bDiv.scrollLeft;
							if(p.footerrow) {
								$('table:first',this.sDiv).css("width",p.tblwidth+"px");
								this.sDiv.scrollLeft = this.bDiv.scrollLeft;
							}
						}
						if(events) {
							$(ts).triggerHandler("jqGridResizeStop", [nw, idx]);
							if($.isFunction(p.resizeStop)) { p.resizeStop.call(ts,nw,idx); }
						}
					}
					this.curGbox = null;
					document.onselectstart=function(){return true;};
				},
				populateVisible: function() {
					if (grid.timer) { clearTimeout(grid.timer); }
					grid.timer = null;
					var dh = $(grid.bDiv).height();
					if (!dh) { return; }
					var table = $("table:first", grid.bDiv);
					var rows, rh;
					if(table[0].rows.length) {
						try {
							rows = table[0].rows[1];
							rh = rows ? $(rows).outerHeight() || grid.prevRowHeight : grid.prevRowHeight;
						} catch (pv) {
							rh = grid.prevRowHeight;
						}
					}
					if (!rh) { return; }
					grid.prevRowHeight = rh;
					var rn = p.rowNum;
					var scrollTop = grid.scrollTop = grid.bDiv.scrollTop;
					var ttop = Math.round(table.position().top) - scrollTop;
					var tbot = ttop + table.height();
					var div = rh * rn;
					var page, npage, empty;
					if ( tbot < dh && ttop <= 0 &&
						(p.lastpage===undefined||(parseInt((tbot + scrollTop + div - 1) / div,10) || 0) <= p.lastpage))
					{
						npage = parseInt((dh - tbot + div - 1) / div,10) || 1;
						if (tbot >= 0 || npage < 2 || p.scroll === true) {
							page = ( Math.round((tbot + scrollTop) / div) || 0) + 1;
							ttop = -1;
						} else {
							ttop = 1;
						}
					}
					if (ttop > 0) {
						page = ( parseInt(scrollTop / div,10) || 0 ) + 1;
						npage = (parseInt((scrollTop + dh) / div,10) || 0) + 2 - page;
						empty = true;
					}
					if (npage) {
						if (p.lastpage && (page > p.lastpage || p.lastpage===1 || (page === p.page && page===p.lastpage)) ) {
							return;
						}
						if (grid.hDiv.loading) {
							grid.timer = setTimeout(grid.populateVisible, p.scrollTimeout);
						} else {
							p.page = page;
							if (empty) {
								grid.selectionPreserver(table[0]);
								grid.emptyRows.call(table[0], false, false);
							}
							grid.populate(npage);
						}
						if(p.scrollPopUp && p.lastpage != null) {
							$("#scroll_g"+p.id).show().html( $.jgrid.template( $.jgrid.getRegional(ts, "defaults.pgtext", p.pgtext) , p.page, p.lastpage)).css({ "top": p.scrollTopOffset+scrollTop*((parseInt(p.height,10) - 45)/ (parseInt(rh,10)*parseInt(p.records,10))) +"px", "left" : p.scrollLeftOffset});
							$(this).mouseout(function(){ 
								$("#scroll_g"+p.id).hide();
							});
						}
					}
				},
				scrollGrid: function( e ) {
					if(p.scroll) {
						var scrollTop = grid.bDiv.scrollTop;
						if(grid.scrollTop === undefined) { grid.scrollTop = 0; }
						if (scrollTop !== grid.scrollTop) {
							grid.scrollTop = scrollTop;
							if (grid.timer) { clearTimeout(grid.timer); }
							grid.timer = setTimeout(grid.populateVisible, p.scrollTimeout);
						}
					}
					grid.hDiv.scrollLeft = grid.bDiv.scrollLeft;
					if(p.footerrow) {
						grid.sDiv.scrollLeft = grid.bDiv.scrollLeft;
					}
					if(p.frozenColumns) {
						$(grid.fbDiv).scrollTop( grid.bDiv.scrollTop );
					}
					if( e ) { e.stopPropagation(); }
				},
				selectionPreserver : function(ts) {
					var p = ts.p,
					sr = p.selrow, sra = p.selarrrow ? $.makeArray(p.selarrrow) : null,
					left = ts.grid.bDiv.scrollLeft,
					restoreSelection = function() {
						var i;
						p.selrow = null;
						p.selarrrow = [];
						if(p.multiselect && sra && sra.length>0) {
							for(i=0;i<sra.length;i++){
								if (sra[i] !== sr) {
									$(ts).jqGrid("setSelection",sra[i],false, null);
								}
							}
						}
						if (sr) {
							$(ts).jqGrid("setSelection",sr,false,null);
						}
						ts.grid.bDiv.scrollLeft = left;
						$(ts).off('.selectionPreserver', restoreSelection);
					};
					$(ts).on('jqGridGridComplete.selectionPreserver', restoreSelection);				
				}
			};
			if(this.tagName.toUpperCase() !== 'TABLE' || this.id == null) {
				alert("Element is not a table or has no id!");
				return;
			}
			if(document.documentMode !== undefined ) { // IE only
				if(document.documentMode <= 5) {
					alert("Grid can not be used in this ('quirks') mode!");
					return;
				}
			}
			var i =0, lr, lk, dir;
			for( lk in $.jgrid.regional ){
				if($.jgrid.regional.hasOwnProperty(lk)) {
					if(i===0) { lr = lk; }
					i++;
				}
			}
			if(i === 1 && lr !== p.regional) {
				p.regional = lr;
			}
			$(this).empty().attr("tabindex","0");
			this.p = p ;
			this.p.useProp = !!$.fn.prop;
			if(this.p.colNames.length === 0) {
				for (i=0;i<this.p.colModel.length;i++){
					this.p.colNames[i] = this.p.colModel[i].label || this.p.colModel[i].name;
				}
			}
			if( this.p.colNames.length !== this.p.colModel.length ) {
				alert($.jgrid.getRegional(this,"errors.model"));
				return;
			}
			var getstyle = $.jgrid.getMethod("getStyleUI"),
			stylemodule = ts.p.styleUI + ".common",
			disabled = getstyle(stylemodule,'disabled', true),
			highlight = getstyle(stylemodule,'highlight', true),
			hover = getstyle(stylemodule,'hover', true),
			cornerall = getstyle(stylemodule,'cornerall', true),
			iconbase = getstyle(stylemodule,'icon_base', true),
			colmenustyle = $.jgrid.styleUI[(ts.p.styleUI || 'jQueryUI')].colmenu,
			isMSIE = $.jgrid.msie(),
			gv, sortarr = [], sortord = [], sotmp=[];
			stylemodule = ts.p.styleUI + ".base";
			gv = $("<div "+getstyle(stylemodule, 'viewBox', false, 'ui-jqgrid-view')+" role='grid'></div>");
			ts.p.direction = $.trim(ts.p.direction.toLowerCase());
			ts.p._ald = false;
			if($.inArray(ts.p.direction,["ltr","rtl"]) === -1) { ts.p.direction = "ltr"; }
			dir = ts.p.direction;
			
			$(gv).insertBefore(this);
			$(this).appendTo(gv);
		
			var eg = $("<div "+ getstyle(stylemodule, 'entrieBox', false, 'ui-jqgrid') +"></div>");
			$(eg).attr({"id" : "gbox_"+this.id,"dir":dir}).insertBefore(gv);
			$(gv).attr("id","gview_"+this.id).appendTo(eg);
			$("<div "+getstyle(ts.p.styleUI+'.common','overlay', false, 'jqgrid-overlay')+ " id='lui_"+this.id+"'></div>").insertBefore(gv);
			$("<div "+getstyle(stylemodule,'loadingBox', false, 'loading')+" id='load_"+this.id+"'>"+$.jgrid.getRegional(ts, "defaults.loadtext", this.p.loadtext)+"</div>").insertBefore(gv);
			
			$(this).attr({role:"presentation","aria-multiselectable":!!this.p.multiselect,"aria-labelledby":"gbox_"+this.id});
			
			var sortkeys = ["shiftKey","altKey","ctrlKey"],
			intNum = function(val,defval) {
				val = parseInt(val,10);
				if (isNaN(val)) { return defval || 0;}
				return val;
			},
			formatCol = function (pos, rowInd, tv, rawObject, rowId, rdata){
				var cm = ts.p.colModel[pos], cellAttrFunc,
				ral = cm.align, result="style=\"", clas = cm.classes, nm = cm.name, celp, acp=[];
				if(ral) { result += "text-align:"+ral+";"; }
				if(cm.hidden===true) { result += "display:none;"; }
				if(rowInd===0) {
					result += "width: "+grid.headers[pos].width+"px;";
				} else if ($.isFunction(cm.cellattr) || (typeof cm.cellattr === "string" && $.jgrid.cellattr != null && $.isFunction($.jgrid.cellattr[cm.cellattr]))) {
					cellAttrFunc = $.isFunction(cm.cellattr) ? cm.cellattr : $.jgrid.cellattr[cm.cellattr];
					celp = cellAttrFunc.call(ts, rowId, tv, rawObject, cm, rdata);
					if(celp && typeof celp === "string") {
						celp = celp.replace(/style/i,'style').replace(/title/i,'title');
						if(celp.indexOf('title') > -1) { cm.title=false;}
						if(celp.indexOf('class') > -1) { clas = undefined;}
						acp = celp.replace(/\-style/g,'-sti').split(/style/);
						if(acp.length === 2 ) {
							acp[1] =  $.trim(acp[1].replace(/\-sti/g,'-style').replace("=",""));
							if(acp[1].indexOf("'") === 0 || acp[1].indexOf('"') === 0) {
								acp[1] = acp[1].substring(1);
							}
							result += acp[1].replace(/'/gi,'"');
						} else {
							result += "\"";
						}
					}
				}
				if(!acp.length) { acp[0] = ""; result += "\"";}
				result += (clas !== undefined ? (" class=\""+clas+"\"") :"") + ((cm.title && tv) ? (" title=\""+$.jgrid.stripHtml(tv)+"\"") :"");
				result += " aria-describedby=\""+ts.p.id+"_"+nm+"\"";
				return result + acp[0];
			},
			cellVal =  function (val) {
				return val == null || val === "" ? "&#160;" : (ts.p.autoencode ? $.jgrid.htmlEncode(val) : String(val));
			},
			formatter = function (rowId, cellval , colpos, rwdat, _act){
				var cm = ts.p.colModel[colpos],v;
				if(cm.formatter !== undefined) {
					rowId = String(ts.p.idPrefix) !== "" ? $.jgrid.stripPref(ts.p.idPrefix, rowId) : rowId;
					var opts= {rowId: rowId, colModel:cm, gid:ts.p.id, pos:colpos, styleUI: ts.p.styleUI };
					if($.isFunction( cm.formatter ) ) {
						v = cm.formatter.call(ts,cellval,opts,rwdat,_act);
					} else if($.fmatter){
						v = $.fn.fmatter.call(ts,cm.formatter,cellval,opts,rwdat,_act);
					} else {
						v = cellVal(cellval);
					}
				} else {
					v = cellVal(cellval);
				}
				return v;
			},
			addCell = function(rowId,cell,pos,irow, srvr, rdata) {
				var v,prp;
				v = formatter(rowId,cell,pos,srvr,'add');
				prp = formatCol( pos,irow, v, srvr, rowId, rdata);
				return "<td role=\"gridcell\" "+prp+">"+v+"</td>";
			},
			addMulti = function(rowid, pos, irow, checked, uiclass){
				var	v = "<input role=\"checkbox\" type=\"checkbox\""+" id=\"jqg_"+ts.p.id+"_"+rowid+"\" "+uiclass+" name=\"jqg_"+ts.p.id+"_"+rowid+"\"" + (checked ? "checked=\"checked\"" : "")+"/>",
				prp = formatCol( pos,irow,'',null, rowid, true);
				return "<td role=\"gridcell\" "+prp+">"+v+"</td>";
			},
			addRowNum = function (pos, irow, pG, rN, uiclass ) {
				var v =  (parseInt(pG,10)-1)*parseInt(rN,10)+1+irow,
				prp = formatCol( pos,irow,v, null, irow, true);
				return "<td role=\"gridcell\" "+uiclass+" "+prp+">"+v+"</td>";
			},
			reader = function (datatype) {
				var field, f=[], j=0, i;
				for(i =0; i<ts.p.colModel.length; i++){
					field = ts.p.colModel[i];
					if (field.name !== 'cb' && field.name !=='subgrid' && field.name !=='rn') {
						f[j]= datatype === "local" ?
						field.name :
						( (datatype==="xml" || datatype === "xmlstring") ? field.xmlmap || field.name : field.jsonmap || field.name );
						if(ts.p.keyName !== false && field.key===true ) {
							ts.p.keyName = f[j];
						}
						j++;
					}
				}
				return f;
			},
			orderedCols = function (offset) {
				var order = ts.p.remapColumns;
				if (!order || !order.length) {
					order = $.map(ts.p.colModel, function(v,i) { return i; });
				}
				if (offset) {
					order = $.map(order, function(v) { return v<offset?null:v-offset; });
				}
				return order;
			},
			emptyRows = function (scroll, locdata) {
				var firstrow;
				if (this.p.deepempty) {
					$(this.rows).slice(1).remove();
				} else {
					firstrow = this.rows.length > 0 ? this.rows[0] : null;
					$(this.firstChild).empty().append(firstrow);
				}
				if (scroll && this.p.scroll) {
					$(this.grid.bDiv.firstChild).css({height: "auto"});
					$(this.grid.bDiv.firstChild.firstChild).css({height: "0px", display: "none"});
					if (this.grid.bDiv.scrollTop !== 0) {
						this.grid.bDiv.scrollTop = 0;
					}
				}
				if(locdata === true && this.p.treeGrid && !this.p.loadonce ) {
					this.p.data = []; this.p._index = {};
				}
			},
			normalizeData = function() {
				var p = ts.p, data = p.data, dataLength = data.length, i, j, cur, idn, idr, ccur, v, rd,
				localReader = p.localReader,
				colModel = p.colModel,
				cellName = localReader.cell,
				iOffset = (p.multiselect === true ? 1 : 0) + (p.subGrid === true ? 1 : 0) + (p.rownumbers === true ? 1 : 0),
				br = p.scroll ? $.jgrid.randId() : 1,
				arrayReader, objectReader, rowReader;

				if (p.datatype !== "local" || localReader.repeatitems !== true) {
					return; // nothing to do
				}

				arrayReader = orderedCols(iOffset);
				objectReader = reader("local");
				// read ALL input items and convert items to be read by
				// $.jgrid.getAccessor with column name as the second parameter
				idn = p.keyIndex === false ?
					($.isFunction(localReader.id) ? localReader.id.call(ts, data) : localReader.id) :
					p.keyIndex; 
				for (i = 0; i < dataLength; i++) {
					cur = data[i];
					// read id in the same way like addJSONData do
					// probably it would be better to start with "if (cellName) {...}"
					// but the goal of the current implementation was just have THE SAME
					// id values like in addJSONData ...
					idr = $.jgrid.getAccessor(cur, idn);
					if (idr === undefined) {
						if (typeof idn === "number" && colModel[idn + iOffset] != null) {
							// reread id by name
							idr = $.jgrid.getAccessor(cur, colModel[idn + iOffset].name);
						}
						if (idr === undefined) {
							idr = br + i;
							if (cellName) {
								ccur = $.jgrid.getAccessor(cur, cellName) || cur;
								idr = ccur != null && ccur[idn] !== undefined ? ccur[idn] : idr;
								ccur = null;
							}
						}
					}
					rd = { };
					rd[localReader.id] = idr;
					if (cellName) {
						cur = $.jgrid.getAccessor(cur, cellName) || cur;
					}
					rowReader = $.isArray(cur) ? arrayReader : objectReader;
					for (j = 0; j < rowReader.length; j++) {
						v = $.jgrid.getAccessor(cur, rowReader[j]);
						rd[colModel[j + iOffset].name] = v;
					}
					$.extend(true, data[i], rd);
				}
			},
			refreshIndex = function() {
				var datalen = ts.p.data.length, idname, i, val;

				if(ts.p.keyName === false || ts.p.loadonce === true) {
					idname = ts.p.localReader.id;
				} else {
					idname = ts.p.keyName;
				}
				ts.p._index = [];
				for(i =0;i < datalen; i++) {
					val = $.jgrid.getAccessor(ts.p.data[i],idname);
					if (val === undefined) { val=String(i+1); }
					ts.p._index[val] = i;
				}
			},
			constructTr = function(id, hide, classes, rd, cur ) {
				var tabindex = '-1', restAttr = '', attrName, style = hide ? 'display:none;' : '',
					//classes = getstyle(stylemodule, 'rowBox', true) + ts.p.direction + (altClass ? ' ' + altClass : '') + (selected ? ' ' + highlight : ''),
					rowAttrObj = $(ts).triggerHandler("jqGridRowAttr", [rd, cur, id]);
				if( typeof rowAttrObj !== "object" ) {
					rowAttrObj = $.isFunction(ts.p.rowattr) ? ts.p.rowattr.call(ts, rd, cur, id) :
						(typeof ts.p.rowattr === "string" && $.jgrid.rowattr != null && $.isFunction($.jgrid.rowattr[ts.p.rowattr]) ?
						$.jgrid.rowattr[ts.p.rowattr].call(ts, rd, cur, id) : {});
				}
				if(!$.isEmptyObject( rowAttrObj )) {
					if (rowAttrObj.hasOwnProperty("id")) {
						id = rowAttrObj.id;
						delete rowAttrObj.id;
					}
					if (rowAttrObj.hasOwnProperty("tabindex")) {
						tabindex = rowAttrObj.tabindex;
						delete rowAttrObj.tabindex;
					}
					if (rowAttrObj.hasOwnProperty("style")) {
						style += rowAttrObj.style;
						delete rowAttrObj.style;
					}
					if (rowAttrObj.hasOwnProperty("class")) {
						classes += ' ' + rowAttrObj['class'];
						delete rowAttrObj['class'];
					}
					// dot't allow to change role attribute
					try { delete rowAttrObj.role; } catch(ra){}
					for (attrName in rowAttrObj) {
						if (rowAttrObj.hasOwnProperty(attrName)) {
							restAttr += ' ' + attrName + '=' + rowAttrObj[attrName];
						}
					}
				}
				return '<tr role="row" id="' + id + '" tabindex="' + tabindex + '" class="' + classes + '"' +
					(style === '' ? '' : ' style="' + style + '"') + restAttr + '>';
			},
			addXmlData = function (xml, rcnt, more, adjust) {
				var startReq = new Date(),
				locdata = (ts.p.datatype !== "local" && ts.p.loadonce) || ts.p.datatype === "xmlstring",
				xmlid = "_id_", xmlRd = ts.p.xmlReader,
				frd = ts.p.datatype === "local" ? "local" : "xml";
				if(locdata) {
					ts.p.data = [];
					ts.p._index = {};
					ts.p.localReader.id = xmlid;
				}
				ts.p.reccount = 0;
				if($.isXMLDoc(xml)) {
					if(ts.p.treeANode===-1 && !ts.p.scroll) {
						emptyRows.call(ts, false, true);
						rcnt=1;
					} else { rcnt = rcnt > 1 ? rcnt :1; }
				} else { return; }
				var self= $(ts), i,fpos,ir=0,v,gi=ts.p.multiselect===true?1:0,si=0,addSubGridCell,ni=ts.p.rownumbers===true?1:0,idn, getId,f=[],F,rd ={}, 
						xmlr,rid, rowData=[], cn=(ts.p.altRows === true) ? ts.p.altclass:"",
						cn1 = getstyle(stylemodule, 'rowBox', true, 'jqgrow ui-row-'+ ts.p.direction), classes;
				if(ts.p.subGrid===true) {
					si = 1;
					addSubGridCell = $.jgrid.getMethod("addSubGridCell");
				}
				if(!xmlRd.repeatitems) {f = reader(frd);}
				if( ts.p.keyName===false) {
					idn = $.isFunction( xmlRd.id ) ?  xmlRd.id.call(ts, xml) : xmlRd.id;
				} else {
					idn = ts.p.keyName;
				}
				if( String(idn).indexOf("[") === -1 ) {
					if (f.length) {
						getId = function( trow, k) {return $(idn,trow).text() || k;};
					} else {
						getId = function( trow, k) {return $(xmlRd.cell,trow).eq(idn).text() || k;};
					}
				}
				else {
					getId = function( trow, k) {return trow.getAttribute(idn.replace(/[\[\]]/g,"")) || k;};
				}
				ts.p.userData = {};
				ts.p.page = intNum($.jgrid.getXmlData(xml, xmlRd.page), ts.p.page);
				ts.p.lastpage = intNum($.jgrid.getXmlData(xml, xmlRd.total), 1);
				ts.p.records = intNum($.jgrid.getXmlData(xml, xmlRd.records));
				if($.isFunction(xmlRd.userdata)) {
					ts.p.userData = xmlRd.userdata.call(ts, xml) || {};
				} else {
					$.jgrid.getXmlData(xml, xmlRd.userdata, true).each(function() {ts.p.userData[this.getAttribute("name")]= $(this).text();});
				}
				var gxml = $.jgrid.getXmlData( xml, xmlRd.root, true);
				gxml = $.jgrid.getXmlData( gxml, xmlRd.row, true);
				if (!gxml) { gxml = []; }
				var gl = gxml.length, j=0, grpdata=[], rn = parseInt(ts.p.rowNum,10), br=ts.p.scroll?$.jgrid.randId():1, altr,
					tablebody = $("#"+$.jgrid.jqID(ts.p.id)+" tbody:first");
				if (gl > 0 &&  ts.p.page <= 0) { ts.p.page = 1; }
				if(gxml && gl){
					if (adjust) { rn *= adjust+1; }
					var afterInsRow = $.isFunction(ts.p.afterInsertRow), hiderow=false, groupingPrepare,
					rnc = ni ? getstyle(stylemodule, 'rownumBox', false, 'jqgrid-rownum') :"",
					mlc = gi ? getstyle(stylemodule, 'multiBox', false, 'cbox'):"";
					if(ts.p.grouping)  {
						hiderow = ts.p.groupingView.groupCollapse === true;
						groupingPrepare = $.jgrid.getMethod("groupingPrepare");
					}
					while (j<gl) {
						xmlr = gxml[j];
						rid = getId(xmlr,br+j);
						rid  = ts.p.idPrefix + rid;
						altr = rcnt === 0 ? 0 : rcnt+1;
						classes = cn1 + ( (altr+j)%2 === 1 ? ' ' + cn : '');
						var iStartTrTag = rowData.length;
						rowData.push("");
						if( ni ) {
							rowData.push( addRowNum(0, j, ts.p.page, ts.p.rowNum, rnc ) );
						}
						if( gi ) {
							rowData.push( addMulti(rid, ni, j, false, mlc) );
						}
						if( si ) {
							rowData.push( addSubGridCell.call(self, gi+ni, j+rcnt) );
						}
						if(xmlRd.repeatitems){
							if (!F) { F=orderedCols(gi+si+ni); }
							var cells = $.jgrid.getXmlData( xmlr, xmlRd.cell, true);
							$.each(F, function (k) {
								var cell = cells[this];
								if (!cell) { return false; }
								v = cell.textContent || cell.text;
								rd[ts.p.colModel[k+gi+si+ni].name] = v;
								rowData.push( addCell(rid,v,k+gi+si+ni,j+rcnt,xmlr, rd) );
							});
						} else {
							for(i = 0; i < f.length;i++) {
								v = $.jgrid.getXmlData( xmlr, f[i]);
								rd[ts.p.colModel[i+gi+si+ni].name] = v;
								rowData.push( addCell(rid, v, i+gi+si+ni, j+rcnt, xmlr, rd) );
							}
						}
						rowData[iStartTrTag] = constructTr(rid, hiderow, classes, rd, xmlr);
						rowData.push("</tr>");
						if(ts.p.grouping) {
							grpdata.push( rowData );
							if(!ts.p.groupingView._locgr) {
								groupingPrepare.call(self , rd, j );
							}
							rowData = [];
						}
						if(locdata || (ts.p.treeGrid === true && !(ts.p._ald)) ) {
							rd[xmlid] = $.jgrid.stripPref(ts.p.idPrefix, rid);
							ts.p.data.push(rd);
							ts.p._index[rd[xmlid]] = ts.p.data.length-1;
						}
						if(ts.p.gridview === false ) {
							tablebody.append(rowData.join(''));
							self.triggerHandler("jqGridAfterInsertRow", [rid, rd, xmlr]);
							if(afterInsRow) {ts.p.afterInsertRow.call(ts,rid,rd,xmlr);}
							rowData=[];
						}
						rd={};
						ir++;
						j++;
						if(ir===rn) {break;}
					}
				}
				if(ts.p.gridview === true) {
					fpos = ts.p.treeANode > -1 ? ts.p.treeANode: 0;
					if(ts.p.grouping) {
						if(!locdata) {
							self.jqGrid('groupingRender',grpdata,ts.p.colModel.length, ts.p.page, rn);
							grpdata = null;
						}
					} else if(ts.p.treeGrid === true && fpos > 0) {
						$(ts.rows[fpos]).after(rowData.join(''));
					} else {
						//$("tbody:first",t).append(rowData.join(''));
						tablebody.append(rowData.join(''));
						ts.grid.cols = ts.rows[0].cells; // update cached first row
					}
				}
				ts.p.totaltime = new Date() - startReq;
				rowData =null;
				if(ts.p.subGrid === true ) {
					try {self.jqGrid("addSubGrid",gi+ni);} catch (_){}
				}
				if(ir>0) { if(ts.p.records===0) { ts.p.records=gl;} }
				if( ts.p.treeGrid === true) {
					try {self.jqGrid("setTreeNode", fpos+1, ir+fpos+1);} catch (e) {}
				}
				//if(!ts.p.treeGrid && !ts.p.scroll) {ts.grid.bDiv.scrollTop = 0;}
				ts.p.reccount=ir;
				ts.p.treeANode = -1;
				if(ts.p.userDataOnFooter) { self.jqGrid("footerData","set",ts.p.userData,true); }
				if(locdata) {
					ts.p.records = gl;
					ts.p.lastpage = Math.ceil(gl/ rn);
				}
				if (!more) { ts.updatepager(false,true); }
				if(locdata) {
					while (ir<gl) {
						xmlr = gxml[ir];
						rid = getId(xmlr,ir+br);
						rid  = ts.p.idPrefix + rid;
						if(xmlRd.repeatitems){
							if (!F) { F=orderedCols(gi+si+ni); }
							var cells2 = $.jgrid.getXmlData( xmlr, xmlRd.cell, true);
							$.each(F, function (k) {
								var cell = cells2[this];
								if (!cell) { return false; }
								v = cell.textContent || cell.text;
								rd[ts.p.colModel[k+gi+si+ni].name] = v;
							});
						} else {
							for(i = 0; i < f.length;i++) {
								v = $.jgrid.getXmlData( xmlr, f[i]);
								rd[ts.p.colModel[i+gi+si+ni].name] = v;
							}
						}
						rd[xmlid] = $.jgrid.stripPref(ts.p.idPrefix, rid);
						if( ts.p.grouping ) {
							groupingPrepare.call(self, rd, ir );
						}
						ts.p.data.push(rd);
						ts.p._index[rd[xmlid]] = ts.p.data.length-1;
						rd = {};
						ir++;
					}
					if(ts.p.grouping) {
						ts.p.groupingView._locgr = true;
						self.jqGrid('groupingRender', grpdata, ts.p.colModel.length, ts.p.page, rn);
						grpdata = null;
					}
				}
			},
			addJSONData = function(data, rcnt, more, adjust) {
				var startReq = new Date();
				if(data) {
					if(ts.p.treeANode === -1 && !ts.p.scroll) {
						emptyRows.call(ts, false, true);
						rcnt=1;
					} else { rcnt = rcnt > 1 ? rcnt :1; }
				} else { return; }

				var dReader, locid = "_id_", frd,
				locdata = (ts.p.datatype !== "local" && ts.p.loadonce) || ts.p.datatype === "jsonstring";
				if(locdata) { ts.p.data = []; ts.p._index = {}; ts.p.localReader.id = locid;}
				ts.p.reccount = 0;
				if(ts.p.datatype === "local") {
					dReader =  ts.p.localReader;
					frd= 'local';
				} else {
					dReader =  ts.p.jsonReader;
					frd='json';
				}
				var self = $(ts), ir=0,v,i,j,f=[],cur,gi=ts.p.multiselect?1:0,si=ts.p.subGrid===true?1:0,addSubGridCell,ni=ts.p.rownumbers===true?1:0,arrayReader=orderedCols(gi+si+ni),objectReader=reader(frd),rowReader,len,drows,idn,rd={}, fpos, idr,rowData=[],cn=(ts.p.altRows === true) ? ts.p.altclass:"",
						cn1 = getstyle(stylemodule, 'rowBox', true, 'jqgrow ui-row-'+ ts.p.direction), classes;
				ts.p.page = intNum($.jgrid.getAccessor(data,dReader.page), ts.p.page);
				ts.p.lastpage = intNum($.jgrid.getAccessor(data,dReader.total), 1);
				ts.p.records = intNum($.jgrid.getAccessor(data,dReader.records));
				ts.p.userData = $.jgrid.getAccessor(data,dReader.userdata) || {};
				if(si) {
					addSubGridCell = $.jgrid.getMethod("addSubGridCell");
				}
				if( ts.p.keyName===false ) {
					idn = $.isFunction(dReader.id) ? dReader.id.call(ts, data) : dReader.id; 
				} else {
					idn = ts.p.keyName;
				}
				drows = $.jgrid.getAccessor(data,dReader.root);
				if (drows == null && $.isArray(data)) { drows = data; }
				if (!drows) { drows = []; }
				len = drows.length; i=0;
				if (len > 0 && ts.p.page <= 0) { ts.p.page = 1; }
				var rn = parseInt(ts.p.rowNum,10),br=ts.p.scroll?$.jgrid.randId():1, altr, selected=false, selr;
				if (adjust) { rn *= adjust+1; }
				if(ts.p.datatype === "local" && !ts.p.deselectAfterSort) {
					selected = true;
				}
				var afterInsRow = $.isFunction(ts.p.afterInsertRow), grpdata=[],hiderow=false, groupingPrepare,
				tablebody = $("#"+$.jgrid.jqID(ts.p.id)+" tbody:first"),
				rnc = ni ? getstyle(stylemodule, 'rownumBox', false, 'jqgrid-rownum') :"",
				mlc = gi ? getstyle(stylemodule, 'multiBox', false, 'cbox'):"";
				if(ts.p.grouping)  {
					hiderow = ts.p.groupingView.groupCollapse === true;
					groupingPrepare = $.jgrid.getMethod("groupingPrepare");
				}
				while (i<len) {
					cur = drows[i];
					idr = $.jgrid.getAccessor(cur,idn);
					if(idr === undefined) {
						if (typeof idn === "number" && ts.p.colModel[idn+gi+si+ni] != null) {
							// reread id by name
							idr = $.jgrid.getAccessor(cur,ts.p.colModel[idn+gi+si+ni].name);
						}
						if(idr === undefined) {
							idr = br+i;
							if(f.length===0){
								if(dReader.cell){
									var ccur = $.jgrid.getAccessor(cur,dReader.cell) || cur;
									idr = ccur != null && ccur[idn] !== undefined ? ccur[idn] : idr;
									ccur=null;
								}
							}
						}
					}
					idr  = ts.p.idPrefix + idr;
					altr = rcnt === 1 ? 0 : rcnt;
					classes = cn1+ ( (altr+i)%2 === 1 ? ' '+cn : '');
					if( selected) {
						if( ts.p.multiselect) {
							selr = ($.inArray(idr, ts.p.selarrrow) !== -1);
						} else {
							selr = (idr === ts.p.selrow);
						}
					}
					var iStartTrTag = rowData.length;
					rowData.push("");
					if( ni ) {
						rowData.push( addRowNum(0, i, ts.p.page, ts.p.rowNum, rnc ) );
					}
					if( gi ){
						rowData.push( addMulti(idr, ni, i, selr, mlc) );
					}
					if( si ) {
						rowData.push( addSubGridCell.call(self ,gi+ni,i+rcnt) );
					}
					rowReader=objectReader;
					if (dReader.repeatitems) {
						if(dReader.cell) {cur = $.jgrid.getAccessor(cur,dReader.cell) || cur;}
						if ($.isArray(cur)) { rowReader=arrayReader; }
					}
					for (j=0;j<rowReader.length;j++) {
						v = $.jgrid.getAccessor(cur,rowReader[j]);
						rd[ts.p.colModel[j+gi+si+ni].name] = v;
						rowData.push( addCell(idr,v,j+gi+si+ni,i+rcnt,cur, rd) );
					}
					classes += (selr ? ' ' + highlight : '');
					rowData[iStartTrTag] = constructTr(idr, hiderow, classes, rd, cur);
					rowData.push( "</tr>" );
					if(ts.p.grouping) {
						grpdata.push( rowData );
						if(!ts.p.groupingView._locgr) {
							groupingPrepare.call(self , rd, i);
						}
						rowData = [];
					}
					if(locdata || (ts.p.treeGrid===true && !(ts.p._ald))) {
						rd[locid] = $.jgrid.stripPref(ts.p.idPrefix, idr);
						ts.p.data.push(rd);
						ts.p._index[rd[locid]] = ts.p.data.length-1;
					}
					if(ts.p.gridview === false ) {
						tablebody.append(rowData.join(''));
						self.triggerHandler("jqGridAfterInsertRow", [idr, rd, cur]);
						if(afterInsRow) {ts.p.afterInsertRow.call(ts,idr,rd,cur);}
						rowData=[];//ari=0;
					}
					rd={};
					ir++;
					i++;
					if(ir===rn) { break; }
				}
				if(ts.p.gridview === true ) {
					fpos = ts.p.treeANode > -1 ? ts.p.treeANode: 0;
					if(ts.p.grouping) {
						if(!locdata) {
							self.jqGrid('groupingRender', grpdata, ts.p.colModel.length, ts.p.page, rn);
							grpdata = null;
						}
					} else if(ts.p.treeGrid === true && fpos > 0) {
						$(ts.rows[fpos]).after(rowData.join(''));
					} else { 
						tablebody.append(rowData.join(''));
						ts.grid.cols = ts.rows[0].cells;
					}
				}
				ts.p.totaltime = new Date() - startReq;
				rowData = null;
				if(ts.p.subGrid === true ) {
					try { self.jqGrid("addSubGrid",gi+ni);} catch (_){}
				}
				if(ir>0) {
					if(ts.p.records===0) { ts.p.records=len; }
				}
				if( ts.p.treeGrid === true) {
					try {self.jqGrid("setTreeNode", fpos+1, ir+fpos+1);} catch (e) {}
				}
				//if(!ts.p.treeGrid && !ts.p.scroll) {ts.grid.bDiv.scrollTop = 0;}
				ts.p.reccount=ir;
				ts.p.treeANode = -1;
				if(ts.p.userDataOnFooter) { self.jqGrid("footerData","set",ts.p.userData,true); }
				if(locdata) {
					ts.p.records = len;
					ts.p.lastpage = Math.ceil(len/ rn);
				}
				if (!more) { ts.updatepager(false,true); }
				if(locdata) {
					while (ir<len && drows[ir]) {
						cur = drows[ir];
						idr = $.jgrid.getAccessor(cur,idn);
						if(idr === undefined) {
							if (typeof idn === "number" && ts.p.colModel[idn+gi+si+ni] != null) {
								// reread id by name
								idr = $.jgrid.getAccessor(cur,ts.p.colModel[idn+gi+si+ni].name);
							}
							if(idr === undefined) {
								idr = br+ir;
								if(f.length===0){
									if(dReader.cell){
										var ccur2 = $.jgrid.getAccessor(cur,dReader.cell) || cur;
										idr = ccur2 != null && ccur2[idn] !== undefined ? ccur2[idn] : idr;
										ccur2=null;
									}
								}
							}
						}
						if(cur) {
							idr  = ts.p.idPrefix + idr;
							rowReader=objectReader;
							if (dReader.repeatitems) {
								if(dReader.cell) {cur = $.jgrid.getAccessor(cur,dReader.cell) || cur;}
								if ($.isArray(cur)) { rowReader=arrayReader; }
							}

							for (j=0;j<rowReader.length;j++) {
								rd[ts.p.colModel[j+gi+si+ni].name] = $.jgrid.getAccessor(cur,rowReader[j]);
							}
							rd[locid] = $.jgrid.stripPref(ts.p.idPrefix, idr);
							if(ts.p.grouping) {
								groupingPrepare.call(self, rd, ir );
							}
							ts.p.data.push(rd);
							ts.p._index[rd[locid]] = ts.p.data.length-1;
							rd = {};
						}
						ir++;
					}
					if(ts.p.grouping) {
						ts.p.groupingView._locgr = true;
						self.jqGrid('groupingRender', grpdata, ts.p.colModel.length, ts.p.page, rn);
						grpdata = null;
					}
				}
			},
			addLocalData = function() {
				var st = ts.p.multiSort ? [] : "", sto=[], fndsort=false, cmtypes={}, grtypes=[], grindexes=[], srcformat, sorttype, newformat, sfld;
				if(!$.isArray(ts.p.data)) {
					return;
				}
				var grpview = ts.p.grouping ? ts.p.groupingView : false, lengrp, gin, si;
				$.each(ts.p.colModel,function(){
					sorttype = this.sorttype || "text";
					si = this.index || this.name;
					if(sorttype === "date" || sorttype === "datetime") {
						if(this.formatter && typeof this.formatter === 'string' && this.formatter === 'date') {
							if(this.formatoptions && this.formatoptions.srcformat) {
								srcformat = this.formatoptions.srcformat;
							} else {
								srcformat = $.jgrid.getRegional(ts, "formatter.date.srcformat");
							}
							if(this.formatoptions && this.formatoptions.newformat) {
								newformat = this.formatoptions.newformat;
							} else {
								newformat = $.jgrid.getRegional(ts, "formatter.date.newformat");
							}
						} else {
							srcformat = newformat = this.datefmt || "Y-m-d";
						}
						cmtypes[si] = {"stype": sorttype, "srcfmt": srcformat,"newfmt":newformat, "sfunc": this.sortfunc || null};
					} else {
						cmtypes[si] = {"stype": sorttype, "srcfmt":'',"newfmt":'', "sfunc": this.sortfunc || null};
					}
					if(ts.p.grouping ) {
						for(gin =0, lengrp = grpview.groupField.length; gin< lengrp; gin++) {
							if( this.name === grpview.groupField[gin]) {
								grtypes[gin] = cmtypes[si];
								grindexes[gin]= si;
							}
						}
					}
					if(!ts.p.multiSort) {
						if(!fndsort && (si === ts.p.sortname)){
							st = si; 
							fndsort = true;
						}
					}
				});
				if(ts.p.multiSort) {
					st =  sortarr;
					sto = sortord;
				}
				if(ts.p.treeGrid && ts.p._sort) {
					$(ts).jqGrid("SortTree", st, ts.p.sortorder, cmtypes[st].stype || 'text', cmtypes[st].srcfmt || '');
					return;
				}
				var compareFnMap = {
					'eq':function(queryObj) {return queryObj.equals;},
					'ne':function(queryObj) {return queryObj.notEquals;},
					'lt':function(queryObj) {return queryObj.less;},
					'le':function(queryObj) {return queryObj.lessOrEquals;},
					'gt':function(queryObj) {return queryObj.greater;},
					'ge':function(queryObj) {return queryObj.greaterOrEquals;},
					'cn':function(queryObj) {return queryObj.contains;},
					'nc':function(queryObj,op) {return op === "OR" ? queryObj.orNot().contains : queryObj.andNot().contains;},
					'bw':function(queryObj) {return queryObj.startsWith;},
					'bn':function(queryObj,op) {return op === "OR" ? queryObj.orNot().startsWith : queryObj.andNot().startsWith;},
					'en':function(queryObj,op) {return op === "OR" ? queryObj.orNot().endsWith : queryObj.andNot().endsWith;},
					'ew':function(queryObj) {return queryObj.endsWith;},
					'ni':function(queryObj,op) {return op === "OR" ? queryObj.orNot().equals : queryObj.andNot().equals;},
					'in':function(queryObj) {return queryObj.equals;},
					'nu':function(queryObj) {return queryObj.isNull;},
					'nn':function(queryObj,op) {return op === "OR" ? queryObj.orNot().isNull : queryObj.andNot().isNull;}

				},
				query = $.jgrid.from.call(ts, ts.p.data);
				if (ts.p.ignoreCase) { query = query.ignoreCase(); }
				function tojLinq ( group ) {
					var s = 0, index, gor, ror, opr, rule, fld;
					if (group.groups != null) {
						gor = group.groups.length && group.groupOp.toString().toUpperCase() === "OR";
						if (gor) {
							query.orBegin();
						}
						for (index = 0; index < group.groups.length; index++) {
							if (s > 0 && gor) {
								query.or();
							}
							try {
								tojLinq(group.groups[index]);
							} catch (e) {alert(e);}
							s++;
						}
						if (gor) {
							query.orEnd();
						}
					}
					if (group.rules != null) {
						//if(s>0) {
						//	var result = query.select();
						//	query = $.jgrid.from( result);
						//	if (ts.p.ignoreCase) { query = query.ignoreCase(); } 
						//}
						try{
							ror = group.rules.length && group.groupOp.toString().toUpperCase() === "OR";
							if (ror) {
								query.orBegin();
							}
							for (index = 0; index < group.rules.length; index++) {
								rule = group.rules[index];
								opr = group.groupOp.toString().toUpperCase();
								if (compareFnMap[rule.op] && rule.field ) {
									if(s > 0 && opr && opr === "OR") {
										query = query.or();
									}
									fld = cmtypes[rule.field];
									if(fld.stype === 'date') {
										if(fld.srcfmt && fld.newfmt && fld.srcfmt !== fld.newfmt ) {
											rule.data = $.jgrid.parseDate.call(ts, fld.newfmt, rule.data, fld.srcfmt);
										}
									}
									query = compareFnMap[rule.op](query, opr)(rule.field, rule.data, cmtypes[rule.field]);
								}
								s++;
							}
							if (ror) {
								query.orEnd();
							}
						} catch (g) {alert(g);}
					}
				}

				if (ts.p.search === true) {
					var srules = ts.p.postData.filters;
					if(srules) {
						if(typeof srules === "string") { srules = $.jgrid.parse(srules);}
						tojLinq( srules );
					} else {
						try {
							sfld = cmtypes[ts.p.postData.searchField];
							if(sfld.stype === 'date') {
								if(sfld.srcfmt && sfld.newfmt && sfld.srcfmt !== sfld.newfmt ) {
									ts.p.postData.searchString = $.jgrid.parseDate.call(ts, sfld.newfmt, ts.p.postData.searchString, sfld.srcfmt);
								}
							}
							query = compareFnMap[ts.p.postData.searchOper](query)(ts.p.postData.searchField, ts.p.postData.searchString,cmtypes[ts.p.postData.searchField]);
						} catch (se){}
					}
				} else {
					if(ts.p.treeGrid && ts.p.treeGridModel === "nested") {
						query.orderBy(ts.p.treeReader.left_field, 'asc', 'integer', '', null);
					}
				}
				if(ts.p.treeGrid && ts.p.treeGridModel === "adjacency") {
					lengrp =0;
					st = null;
				}
				if(ts.p.grouping) {
					for(gin=0; gin<lengrp;gin++) {
						query.orderBy(grindexes[gin],grpview.groupOrder[gin],grtypes[gin].stype, grtypes[gin].srcfmt);
					}
				}
				if(ts.p.multiSort) {
					$.each(st,function(i){
						query.orderBy(this, sto[i], cmtypes[this].stype, cmtypes[this].srcfmt, cmtypes[this].sfunc);
					});
				} else {
					if (st && ts.p.sortorder && fndsort) {
						// to be fixed in case sortname has more than one field
						if(ts.p.sortorder.toUpperCase() === "DESC") {
							query.orderBy(ts.p.sortname, "d", cmtypes[st].stype, cmtypes[st].srcfmt, cmtypes[st].sfunc);
						} else {
							query.orderBy(ts.p.sortname, "a", cmtypes[st].stype, cmtypes[st].srcfmt, cmtypes[st].sfunc);
						}
					}
				}
				var queryResults = query.select(),
				recordsperpage = parseInt(ts.p.rowNum,10),
				total = queryResults.length,
				page = parseInt(ts.p.page,10),
				totalpages = Math.ceil(total / recordsperpage),
				retresult = {};
				if((ts.p.search || ts.p.resetsearch) && ts.p.grouping && ts.p.groupingView._locgr) {
					ts.p.groupingView.groups =[];
					var j, grPrepare = $.jgrid.getMethod("groupingPrepare"), key, udc;
					if(ts.p.footerrow && ts.p.userDataOnFooter) {
						for (key in ts.p.userData) {
							if(ts.p.userData.hasOwnProperty(key)) {
								ts.p.userData[key] = 0;
							}
						}
						udc = true;
					}
					for(j=0; j<total; j++) {
						if(udc) {
							for(key in ts.p.userData){
								if( ts.p.userData.hasOwnProperty( key ) ) {
									ts.p.userData[key] += parseFloat(queryResults[j][key] || 0);
								}
							}
						}
						grPrepare.call($(ts),queryResults[j],j, recordsperpage );
					}
				}
				if(ts.p.treeGrid && ts.p.search) {
					queryResults = $(ts).jqGrid("searchTree", queryResults);
				} else {
					queryResults = queryResults.slice( (page-1)*recordsperpage , page*recordsperpage );
				}
				query = null;
				cmtypes = null;
				retresult[ts.p.localReader.total] = totalpages;
				retresult[ts.p.localReader.page] = page;
				retresult[ts.p.localReader.records] = total;
				retresult[ts.p.localReader.root] = queryResults;
				retresult[ts.p.localReader.userdata] = ts.p.userData;
				queryResults = null;
				return  retresult;
			},
			updatepager = function(rn, dnd) {
				var cp, last, base, from,to,tot,fmt, pgboxes = "", sppg,
				pgid = ts.p.pager ? $.jgrid.jqID(ts.p.pager.substr(1)) : "",
				tspg = pgid ? "_"+pgid : "",
				tspg_t = ts.p.toppager ? "_"+ts.p.toppager.substr(1) : "";
				base = parseInt(ts.p.page,10)-1;
				if(base < 0) { base = 0; }
				base = base*parseInt(ts.p.rowNum,10);
				to = base + ts.p.reccount;
				if (ts.p.scroll) {
					var rows = $("tbody:first > tr:gt(0)", ts.grid.bDiv);
					if(to > ts.p.records) {
						to = ts.p.records;
					}
					base = to - rows.length;
					ts.p.reccount = rows.length;
					var rh = rows.outerHeight() || ts.grid.prevRowHeight;
					if (rh) {
						var top = base * rh;
						var height = parseInt(ts.p.records,10) * rh;
						$(">div:first",ts.grid.bDiv).css({height : height}).children("div:first").css({height:top,display:top?"":"none"});
						if (ts.grid.bDiv.scrollTop === 0 && ts.p.page > 1) {
							ts.grid.bDiv.scrollTop = ts.p.rowNum * (ts.p.page - 1) * rh;
						}
					}
					ts.grid.bDiv.scrollLeft = ts.grid.hDiv.scrollLeft;
				}
				pgboxes = ts.p.pager || "";
				pgboxes += ts.p.toppager ?  (pgboxes ? "," + ts.p.toppager : ts.p.toppager) : "";
				if(pgboxes) {
					fmt = $.jgrid.getRegional(ts, "formatter.integer");
					cp = intNum(ts.p.page);
					last = intNum(ts.p.lastpage);
					$(".selbox",pgboxes)[ this.p.useProp ? 'prop' : 'attr' ]("disabled",false);
					if(ts.p.pginput===true) {
						$("#input"+tspg).html($.jgrid.template($.jgrid.getRegional(ts, "defaults.pgtext", ts.p.pgtext) || "","<input "+getstyle(stylemodule, 'pgInput', false, 'ui-pg-input') + " type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(pgid)+"'></span>"));
						if(ts.p.toppager) {
							$("#input_t"+tspg_t).html($.jgrid.template($.jgrid.getRegional(ts, "defaults.pgtext", ts.p.pgtext) || "","<input "+getstyle(stylemodule, 'pgInput', false, 'ui-pg-input') + " type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(pgid)+"_toppager'></span>"));
						}
						$('.ui-pg-input',pgboxes).val(ts.p.page);
						sppg = ts.p.toppager ? '#sp_1'+tspg+",#sp_1"+tspg+"_toppager" : '#sp_1'+tspg;
						$(sppg).html($.fmatter ? $.fmatter.util.NumberFormat(ts.p.lastpage,fmt):ts.p.lastpage);
					}
					if (ts.p.viewrecords){
						if(ts.p.reccount === 0) {
							$(".ui-paging-info",pgboxes).html($.jgrid.getRegional(ts, "defaults.emptyrecords", ts.p.emptyrecords ));
						} else {
							from = base+1;
							tot=ts.p.records;
							if($.fmatter) {
								from = $.fmatter.util.NumberFormat(from,fmt);
								to = $.fmatter.util.NumberFormat(to,fmt);
								tot = $.fmatter.util.NumberFormat(tot,fmt);
							}
							var rt = $.jgrid.getRegional(ts, "defaults.recordtext", ts.p.recordtext);
							$(".ui-paging-info",pgboxes).html($.jgrid.template( rt ,from,to,tot));
						}
					}
					if(ts.p.pgbuttons===true) {
						if(cp<=0) {cp = last = 0;}
						if(cp===1 || cp === 0) {
							$("#first"+tspg+", #prev"+tspg).addClass( disabled ).removeClass( hover );
							if(ts.p.toppager) { $("#first_t"+tspg_t+", #prev_t"+tspg_t).addClass( disabled ).removeClass( hover ); }
						} else {
							$("#first"+tspg+", #prev"+tspg).removeClass( disabled );
							if(ts.p.toppager) { $("#first_t"+tspg_t+", #prev_t"+tspg_t).removeClass( disabled ); }
						}
						if(cp===last || cp === 0) {
							$("#next"+tspg+", #last"+tspg).addClass( disabled ).removeClass( hover );
							if(ts.p.toppager) { $("#next_t"+tspg_t+", #last_t"+tspg_t).addClass( disabled ).removeClass( hover ); }
						} else {
							$("#next"+tspg+", #last"+tspg).removeClass( disabled );
							if(ts.p.toppager) { $("#next_t"+tspg_t+", #last_t"+tspg_t).removeClass( disabled ); }
						}
					}
				}
				if(rn===true && ts.p.rownumbers === true) {
					$(">td.jqgrid-rownum",ts.rows).each(function(i){
						$(this).html(base+1+i);
					});
				}
				if(dnd && ts.p.jqgdnd) { $(ts).jqGrid('gridDnD','updateDnD');}
				$(ts).triggerHandler("jqGridGridComplete");
				if($.isFunction(ts.p.gridComplete)) {ts.p.gridComplete.call(ts);}
				$(ts).triggerHandler("jqGridAfterGridComplete");
			},
			beginReq = function() {
				ts.grid.hDiv.loading = true;
				if(ts.p.hiddengrid) { return;}
				$(ts).jqGrid("progressBar", {method:"show", loadtype : ts.p.loadui, htmlcontent: $.jgrid.getRegional(ts, "defaults.loadtext", ts.p.loadtext) });
			},
			endReq = function() {
				ts.grid.hDiv.loading = false;
				$(ts).jqGrid("progressBar", {method:"hide", loadtype : ts.p.loadui });
			},
			populate = function (npage) {
				if(!ts.grid.hDiv.loading) {
					var pvis = ts.p.scroll && npage === false,
					prm = {}, dt, dstr, pN=ts.p.prmNames;
					if(ts.p.page <=0) { ts.p.page = Math.min(1,ts.p.lastpage); }
					if(pN.search !== null) {prm[pN.search] = ts.p.search;} if(pN.nd !== null) {prm[pN.nd] = new Date().getTime();}
					if(pN.rows !== null) {prm[pN.rows]= ts.p.rowNum;} if(pN.page !== null) {prm[pN.page]= ts.p.page;}
					if(pN.sort !== null) {prm[pN.sort]= ts.p.sortname;} if(pN.order !== null) {prm[pN.order]= ts.p.sortorder;}
					if(ts.p.rowTotal !== null && pN.totalrows !== null) { prm[pN.totalrows]= ts.p.rowTotal; }
					var lcf = $.isFunction(ts.p.loadComplete), lc = lcf ? ts.p.loadComplete : null;
					var adjust = 0;
					npage = npage || 1;
					if (npage > 1) {
						if(pN.npage !== null) {
							prm[pN.npage] = npage;
							adjust = npage - 1;
							npage = 1;
						} else {
							lc = function(req) {
								ts.p.page++;
								ts.grid.hDiv.loading = false;
								if (lcf) {
									ts.p.loadComplete.call(ts,req);
								}
								populate(npage-1);
							};
						}
					} else if (pN.npage !== null) {
						delete ts.p.postData[pN.npage];
					}
					if(ts.p.grouping) {
						$(ts).jqGrid('groupingSetup');
						var grp = ts.p.groupingView, gi, gs="";
						for(gi=0;gi<grp.groupField.length;gi++) {
							var index = grp.groupField[gi];
							$.each(ts.p.colModel, function(cmIndex, cmValue) {
								if (cmValue.name === index && cmValue.index){
									index = cmValue.index;
								}
							} );
							gs += index +" "+grp.groupOrder[gi]+", ";
						}
						prm[pN.sort] = gs + prm[pN.sort];
					}
					$.extend(ts.p.postData,prm);
					var rcnt = !ts.p.scroll ? 1 : ts.rows.length-1;
					var bfr = $(ts).triggerHandler("jqGridBeforeRequest");
					if (bfr === false || bfr === 'stop') { return; }
					if ($.isFunction(ts.p.datatype)) { ts.p.datatype.call(ts,ts.p.postData,"load_"+ts.p.id, rcnt, npage, adjust); return;}
					if ($.isFunction(ts.p.beforeRequest)) {
						bfr = ts.p.beforeRequest.call(ts);
						if(bfr === undefined) { bfr = true; }
						if ( bfr === false ) { return; }
					}
					dt = ts.p.datatype.toLowerCase();
					switch(dt)
					{
					case "json":
					case "jsonp":
					case "xml":
					case "script":
						$.ajax($.extend({
							url:ts.p.url,
							type:ts.p.mtype,
							dataType: dt ,
							data: $.isFunction(ts.p.serializeGridData)? ts.p.serializeGridData.call(ts,ts.p.postData) : ts.p.postData,
							success:function(data,st, xhr) {
								if ($.isFunction(ts.p.beforeProcessing)) {
									if (ts.p.beforeProcessing.call(ts, data, st, xhr) === false) {
										endReq();
										return;
									}
								}
								if(dt === "xml") { addXmlData(data, rcnt,npage>1,adjust); }
								else { addJSONData(data, rcnt, npage>1, adjust); }
								$(ts).triggerHandler("jqGridLoadComplete", [data]);
								if(lc) { lc.call(ts,data); }
								$(ts).triggerHandler("jqGridAfterLoadComplete", [data]);
								if (pvis) { ts.grid.populateVisible(); }
								if( ts.p.loadonce || ts.p.treeGrid) {ts.p.datatype = "local";}
								data=null;
								if (npage === 1) { endReq(); }
							},
							error:function(xhr,st,err){
								if($.isFunction(ts.p.loadError)) { ts.p.loadError.call(ts,xhr,st,err); }
								if (npage === 1) { endReq(); }
								xhr=null;
							},
							beforeSend: function(xhr, settings ){
								var gotoreq = true;
								if($.isFunction(ts.p.loadBeforeSend)) {
									gotoreq = ts.p.loadBeforeSend.call(ts,xhr, settings); 
								}
								if(gotoreq === undefined) { gotoreq = true; }
								if(gotoreq === false) {
									return false;
								}
									beginReq();
								}
						},$.jgrid.ajaxOptions, ts.p.ajaxGridOptions));
					break;
					case "xmlstring":
						beginReq();
						dstr = typeof ts.p.datastr !== 'string' ? ts.p.datastr : $.parseXML(ts.p.datastr);
						addXmlData(dstr);
						$(ts).triggerHandler("jqGridLoadComplete", [dstr]);
						if(lcf) {ts.p.loadComplete.call(ts,dstr);}
						$(ts).triggerHandler("jqGridAfterLoadComplete", [dstr]);
						ts.p.datatype = "local";
						ts.p.datastr = null;
						endReq();
					break;
					case "jsonstring":
						beginReq();
						if(typeof ts.p.datastr === 'string') { dstr = $.jgrid.parse(ts.p.datastr); }
						else { dstr = ts.p.datastr; }
						addJSONData(dstr);
						$(ts).triggerHandler("jqGridLoadComplete", [dstr]);
						if(lcf) {ts.p.loadComplete.call(ts,dstr);}
						$(ts).triggerHandler("jqGridAfterLoadComplete", [dstr]);
						ts.p.datatype = "local";
						ts.p.datastr = null;
						endReq();
					break;
					case "local":
					case "clientside":
						beginReq();
						ts.p.datatype = "local";
						ts.p._ald = true;
						var req = addLocalData();
						addJSONData(req,rcnt,npage>1,adjust);
						$(ts).triggerHandler("jqGridLoadComplete", [req]);
						if(lc) { lc.call(ts,req); }
						$(ts).triggerHandler("jqGridAfterLoadComplete", [req]);
						if (pvis) { ts.grid.populateVisible(); }
						endReq();
						ts.p._ald = false;
					break;
					}
					ts.p._sort = false;
				}
			},
			setHeadCheckBox = function ( checked ) {
				$('#cb_'+$.jgrid.jqID(ts.p.id),ts.grid.hDiv)[ts.p.useProp ? 'prop': 'attr']("checked", checked);
				var fid = ts.p.frozenColumns ? ts.p.id+"_frozen" : "";
				if(fid) {
					$('#cb_'+$.jgrid.jqID(ts.p.id),ts.grid.fhDiv)[ts.p.useProp ? 'prop': 'attr']("checked", checked);
				}
			},
			setPager = function (pgid, tp){
				// TBD - consider escaping pgid with pgid = $.jgrid.jqID(pgid);
				var sep = "<td class='ui-pg-button "+disabled+"'><span class='ui-separator'></span></td>",
				pginp = "",
				pgl="<table class='ui-pg-table ui-common-table ui-paging-pager'><tbody><tr>",
				str="", pgcnt, lft, cent, rgt, twd, tdw, i,
				clearVals = function(onpaging, thus){
					var ret;
					if ($.isFunction(ts.p.onPaging) ) { ret = ts.p.onPaging.call(ts,onpaging, thus); }
					if(ret==='stop') {return false;}
					ts.p.selrow = null;
					if(ts.p.multiselect) {ts.p.selarrrow =[]; setHeadCheckBox( false );}
					ts.p.savedRow = [];
					return true;
				};
				pgid = pgid.substr(1);
				tp += "_" + pgid;
				pgcnt = "pg_"+pgid;
				lft = pgid+"_left"; cent = pgid+"_center"; rgt = pgid+"_right";
				$("#"+$.jgrid.jqID(pgid) )
				.append("<div id='"+pgcnt+"' class='ui-pager-control' role='group'><table " + getstyle(stylemodule, 'pagerTable', false, 'ui-pg-table ui-common-table ui-pager-table') + "><tbody><tr><td id='"+lft+"' align='left'></td><td id='"+cent+"' align='center' style='white-space:pre;'></td><td id='"+rgt+"' align='right'></td></tr></tbody></table></div>")
				.attr("dir","ltr"); //explicit setting
				if(ts.p.rowList.length >0){
					str = "<td dir=\""+dir+"\">";
					str +="<select "+getstyle(stylemodule, 'pgSelectBox', false, 'ui-pg-selbox')+" role=\"listbox\" title=\""+($.jgrid.getRegional(ts,"defaults.pgrecs",ts.p.pgrecs) || "")+ "\">";
					var strnm;
					for(i=0;i<ts.p.rowList.length;i++){
						strnm = ts.p.rowList[i].toString().split(":");
						if(strnm.length === 1) {
							strnm[1] = strnm[0];
						}
						str +="<option role=\"option\" value=\""+strnm[0]+"\""+(( intNum(ts.p.rowNum,0) === intNum(strnm[0],0))?" selected=\"selected\"":"")+">"+strnm[1]+"</option>";
					}
					str +="</select></td>";
				}
				if(dir==="rtl") { pgl += str; }
				if(ts.p.pginput===true) { 
					pginp= "<td id='input"+tp+"' dir='"+dir+"'>"+$.jgrid.template( $.jgrid.getRegional(ts, "defaults.pgtext", ts.p.pgtext) || "","<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(pgid)+"'></span>")+"</td>";
				}
				if(ts.p.pgbuttons===true) {
					var po=["first"+tp,"prev"+tp, "next"+tp,"last"+tp], btc=getstyle(stylemodule, 'pgButtonBox', true, 'ui-pg-button'),
							pot = [($.jgrid.getRegional(ts,"defaults.pgfirst",ts.p.pgfirst) || ""),
									($.jgrid.getRegional(ts,"defaults.pgprev",ts.p.pgprev) || ""),
									($.jgrid.getRegional(ts,"defaults.pgnext",ts.p.pgnext) || ""),
									($.jgrid.getRegional(ts,"defaults.pglast",ts.p.pglast) || "")];
					if(dir==="rtl") { 
						po.reverse();
						pot.reverse();
					}
					pgl += "<td id='"+po[0]+"' class='"+btc+"' title='"+ pot[0] +"'" + "><span " + getstyle(stylemodule, 'icon_first', false, iconbase)+"></span></td>";
					pgl += "<td id='"+po[1]+"' class='"+btc+"'  title='"+ pot[1] +"'" +"><span " + getstyle(stylemodule, 'icon_prev', false, iconbase)+"></span></td>";
					pgl += pginp !== "" ? sep+pginp+sep:"";
					pgl += "<td id='"+po[2]+"' class='"+btc+"' title='"+ pot[2] +"'" +"><span " + getstyle(stylemodule, 'icon_next',false, iconbase)+"></span></td>";
					pgl += "<td id='"+po[3]+"' class='"+btc+"' title='"+ pot[3] +"'" +"><span " + getstyle(stylemodule, 'icon_end',false, iconbase)+"></span></td>";
				} else if (pginp !== "") { 
					pgl += pginp; 
				}
				if(dir==="ltr") { 
					pgl += str; 
				}
				pgl += "</tr></tbody></table>";
				if(ts.p.viewrecords===true) {
					$("td#"+pgid+"_"+ts.p.recordpos,"#"+pgcnt).append("<div dir='"+dir+"' style='text-align:"+ts.p.recordpos+"' class='ui-paging-info'></div>");
				}
				$("td#"+pgid+"_"+ts.p.pagerpos,"#"+pgcnt).append(pgl);
				tdw = $("#gbox_"+$.jgrid.jqID(ts.p.id)).css("font-size") || "11px";
				$("#gbox_"+$.jgrid.jqID(ts.p.id)).append("<div id='testpg' "+getstyle(stylemodule, 'entrieBox', false, 'ui-jqgrid')+" style='font-size:"+tdw+";visibility:hidden;' ></div>");
				twd = $(pgl).clone().appendTo("#testpg").width();
				$("#testpg").remove();
				if(twd > 0) {
					if(pginp !== "") { twd += 50; } //should be param
					$("td#"+pgid+"_"+ts.p.pagerpos,"#"+pgcnt).width(twd);
				}
				ts.p._nvtd = [];
				ts.p._nvtd[0] = twd ? Math.floor((ts.p.width - twd)/2) : Math.floor(ts.p.width/3);
				ts.p._nvtd[1] = 0; 
				pgl=null;
				$('.ui-pg-selbox',"#"+pgcnt).on('change',function() {
					if(!clearVals('records', this)) { return false; }
					ts.p.page = Math.round(ts.p.rowNum*(ts.p.page-1)/this.value-0.5)+1;
					ts.p.rowNum = this.value;
					if(ts.p.pager) { $('.ui-pg-selbox',ts.p.pager).val(this.value); }
					if(ts.p.toppager) { $('.ui-pg-selbox',ts.p.toppager).val(this.value); }
					populate();
					return false;
				});
				if(ts.p.pgbuttons===true) {
					$(".ui-pg-button","#"+pgcnt).hover(function(){
						if($(this).hasClass(disabled)) {
							this.style.cursor='default';
						} else {
							$(this).addClass(hover);
							this.style.cursor='pointer';
						}
					},function() {
						if(!$(this).hasClass(disabled)) {
							$(this).removeClass(hover);
							this.style.cursor= "default";
						}
					});
					$("#first"+$.jgrid.jqID(tp)+", #prev"+$.jgrid.jqID(tp)+", #next"+$.jgrid.jqID(tp)+", #last"+$.jgrid.jqID(tp)).click( function() {
						if ($(this).hasClass(disabled)) {
							return false;
						}
						var cp = intNum(ts.p.page,1),
						last = intNum(ts.p.lastpage,1), selclick = false,
						fp=true, pp=true, np=true,lp=true;
						if(last ===0 || last===1) {
							fp=false;
							pp=false;
							np=false;
							lp=false; 
						} else if( last>1 && cp >=1) {
							if( cp === 1) { 
								fp=false; 
								pp=false; 
							} else if( cp===last){ 
								np=false;
								lp=false; 
							}
						} else if( last>1 && cp===0 ) { 
							np=false;
							lp=false; 
							cp=last-1;
						}
						if(!clearVals(this.id.split("_")[0], this)) { return false; }
						if( this.id === 'first'+tp && fp ) { ts.p.page=1; selclick=true;}
						if( this.id === 'prev'+tp && pp) { ts.p.page=(cp-1); selclick=true;}
						if( this.id === 'next'+tp && np) { ts.p.page=(cp+1); selclick=true;}
						if( this.id === 'last'+tp && lp) { ts.p.page=last; selclick=true;}
						if(selclick) {
							populate();
						}
						return false;
					});
				}
				if(ts.p.pginput===true) {
					$("#"+pgcnt).on('keypress','input.ui-pg-input', function(e) {
						var key = e.charCode || e.keyCode || 0;
						if(key === 13) {
							if(!clearVals('user', this)) { return false; }
							$(this).val( intNum( $(this).val(), 1));
							ts.p.page = ($(this).val()>0) ? $(this).val():ts.p.page;
							populate();
							return false;
						}
						return this;
					});
				}
			},
			multiSort = function(iCol, obj, sor ) {
				var cm = ts.p.colModel,
						selTh = ts.p.frozenColumns ?  obj : ts.grid.headers[iCol].el, so="", sn;
				$("span.ui-grid-ico-sort",selTh).addClass(disabled);
				$(selTh).attr("aria-selected","false");
				sn = (cm[iCol].index || cm[iCol].name);
				if ( typeof sor == "undefined" )
				{
					if(cm[iCol].lso) {
						if(cm[iCol].lso==="asc") {
							cm[iCol].lso += "-desc";
							so = "desc";
						} else if(cm[iCol].lso==="desc") {
							cm[iCol].lso += "-asc";
							so = "asc";
						} else if(cm[iCol].lso==="asc-desc" || cm[iCol].lso==="desc-asc") {
							cm[iCol].lso="";
						}
					} else {
						cm[iCol].lso = so = cm[iCol].firstsortorder || 'asc';
					}
				}
				else {
					cm[iCol].lso = so = sor;
				}	
				if( so ) {
					$("span.s-ico",selTh).show();
					$("span.ui-icon-"+so,selTh).removeClass(disabled);
					$(selTh).attr("aria-selected","true");
				} else {
					if(!ts.p.viewsortcols[0]) {
						$("span.s-ico",selTh).hide();
					}
				}
				var isn = sortarr.indexOf( sn );
				if( isn === -1 ) {
					sortarr.push( sn );
					sortord.push( so );
				} else {
					if( so ) {
						sortord[isn] = so;
					} else {
						sortord.splice( isn, 1 );
						sortarr.splice( isn, 1 );
					}
				}
				ts.p.sortorder = "";
				ts.p.sortname = "";
				for( var i = 0, len = sortarr.length; i < len ; i++) {
					if( i > 0) {
						ts.p.sortname += ", ";
					}
					ts.p.sortname += sortarr[ i ];
					if( i !== len -1) {
						ts.p.sortname += " "+sortord[ i ];
					}
				}
				ts.p.sortorder = sortord[ len -1 ];
				/*
				$.each(cm, function(i){
					if(this.lso) {
						if(i>0 && fs) {
							sort += ", ";
						}
						splas = this.lso.split("-");
						sort += cm[i].index || cm[i].name;
						sort += " "+splas[splas.length-1];
						fs = true;
						ts.p.sortorder = splas[splas.length-1];
					}
				});
				ls = sort.lastIndexOf(ts.p.sortorder);
				sort = sort.substring(0, ls);
				ts.p.sortname = sort;
				*/
			},
			sortData = function (index, idxcol,reload,sor, obj){
				if(!ts.p.colModel[idxcol].sortable) { return; }
				if(ts.p.savedRow.length > 0) {return;}
				if(!reload) {
					if( ts.p.lastsort === idxcol && ts.p.sortname !== "" ) {
						if( ts.p.sortorder === 'asc') {
							ts.p.sortorder = 'desc';
						} else if(ts.p.sortorder === 'desc') { ts.p.sortorder = 'asc';}
					} else { ts.p.sortorder = ts.p.colModel[idxcol].firstsortorder || 'asc'; }
					ts.p.page = 1;
				}
				if(ts.p.multiSort) {
					multiSort( idxcol, obj, sor);
				} else {
					if(sor) {
						if(ts.p.lastsort === idxcol && ts.p.sortorder === sor && !reload) { return; }
						ts.p.sortorder = sor;
					}
					var previousSelectedTh = ts.grid.headers[ts.p.lastsort] ? ts.grid.headers[ts.p.lastsort].el : null, newSelectedTh = ts.p.frozenColumns ?  obj : ts.grid.headers[idxcol].el,
							//sortrule = $.trim(ts.p.viewsortcols[1] === 'single' ? hidden : disabled);
						usehide = ts.p.viewsortcols[1] === 'single' ? true : false, tmpicon;
					tmpicon = $(previousSelectedTh).find("span.ui-grid-ico-sort");
					tmpicon.addClass(disabled);
					if(usehide) { 
						$(tmpicon).css("display","none"); 
					}
					$(previousSelectedTh).attr("aria-selected","false");
					if(ts.p.frozenColumns) {
						tmpicon = ts.grid.fhDiv.find("span.ui-grid-ico-sort");
						tmpicon.addClass(disabled);
						if(usehide) { tmpicon.css("display","none"); }
						ts.grid.fhDiv.find("th").attr("aria-selected","false");
					}
					tmpicon = $(newSelectedTh).find("span.ui-icon-"+ts.p.sortorder);
					tmpicon.removeClass(disabled);
					if(usehide) { tmpicon.css("display",""); }
					$(newSelectedTh).attr("aria-selected","true");
					if(!ts.p.viewsortcols[0]) {
						if(ts.p.lastsort !== idxcol) {
							if(ts.p.frozenColumns){
								ts.grid.fhDiv.find("span.s-ico").hide();
							}
							$("span.s-ico",previousSelectedTh).hide();
							$("span.s-ico",newSelectedTh).show();
						} else if (ts.p.sortname === "") { // if ts.p.lastsort === idxcol but ts.p.sortname === ""
							$("span.s-ico",newSelectedTh).show();
						}
					}
					index = index.substring(5 + ts.p.id.length + 1); // bad to be changed!?!
					ts.p.sortname = ts.p.colModel[idxcol].index || index;
				}
				if ($(ts).triggerHandler("jqGridSortCol", [ts.p.sortname, idxcol, ts.p.sortorder]) === 'stop') {
					ts.p.lastsort = idxcol;
					return;
				}
				if($.isFunction(ts.p.onSortCol)) {if (ts.p.onSortCol.call(ts, ts.p.sortname, idxcol, ts.p.sortorder)==='stop') {ts.p.lastsort = idxcol; return;}}
				if(ts.p.datatype === "local") {
					if(ts.p.deselectAfterSort) {$(ts).jqGrid("resetSelection");}
				} else {
					ts.p.selrow = null;
					if(ts.p.multiselect){setHeadCheckBox( false );}
					ts.p.selarrrow =[];
					ts.p.savedRow =[];
				}
				if(ts.p.scroll) {
					var sscroll = ts.grid.bDiv.scrollLeft;
					emptyRows.call(ts, true, false);
					ts.grid.hDiv.scrollLeft = sscroll;
				}
				if(ts.p.subGrid && ts.p.datatype === 'local') {
					$("td.sgexpanded","#"+$.jgrid.jqID(ts.p.id)).each(function(){
						$(this).trigger("click");
					});
				}
				ts.p._sort = true;
				populate();
				ts.p.lastsort = idxcol;
				if(ts.p.sortname !== index && idxcol) {ts.p.lastsort = idxcol;}
			},
			setColWidth = function () {
				var initwidth = 0, brd=$.jgrid.cell_width? 0: intNum(ts.p.cellLayout,0), vc=0, lvc, scw=intNum(ts.p.scrollOffset,0),cw,hs=false,aw,gw=0,cr;
				$.each(ts.p.colModel, function() {
					if(this.hidden === undefined) {this.hidden=false;}
					if(ts.p.grouping && ts.p.autowidth) {
						var ind = $.inArray(this.name, ts.p.groupingView.groupField);
						if(ind >= 0 && ts.p.groupingView.groupColumnShow.length > ind) {
							this.hidden = !ts.p.groupingView.groupColumnShow[ind];
						}
					}
					this.widthOrg = cw = intNum(this.width,0);
					if(this.hidden===false){
						initwidth += cw+brd;
						if(this.fixed) {
							gw += cw+brd;
						} else {
							vc++;
						}
					}
				});
				if(isNaN(ts.p.width)) {
					ts.p.width  = initwidth + ((ts.p.shrinkToFit ===false && !isNaN(ts.p.height)) ? scw : 0);
				}
				grid.width = parseInt(ts.p.width,10);
				ts.p.tblwidth = initwidth;
				if(ts.p.shrinkToFit ===false && ts.p.forceFit === true) {ts.p.forceFit=false;}
				if(ts.p.shrinkToFit===true && vc > 0) {
					aw = grid.width-brd*vc-gw;
					if(!isNaN(ts.p.height)) {
						aw -= scw;
						hs = true;
					}
					initwidth =0;
					$.each(ts.p.colModel, function(i) {
						if(this.hidden === false && !this.fixed){
							cw = Math.round(aw*this.width/(ts.p.tblwidth-brd*vc-gw));
							this.width =cw;
							initwidth += cw;
							lvc = i;
						}
					});
					cr =0;
					if (hs) {
						if(grid.width-gw-(initwidth+brd*vc) !== scw){
							cr = grid.width-gw-(initwidth+brd*vc)-scw;
						}
					} else if(!hs && Math.abs(grid.width-gw-(initwidth+brd*vc)) !== 1) {
						cr = grid.width-gw-(initwidth+brd*vc);
					}
					ts.p.colModel[lvc].width += cr;
					ts.p.tblwidth = initwidth+cr+brd*vc+gw;
					if(ts.p.tblwidth > ts.p.width) {
						ts.p.colModel[lvc].width -= (ts.p.tblwidth - parseInt(ts.p.width,10));
						ts.p.tblwidth = ts.p.width;
					}
				}
			},
			nextVisible= function(iCol) {
				var ret = iCol, j=iCol, i;
				for (i = iCol+1;i<ts.p.colModel.length;i++){
					if(ts.p.colModel[i].hidden !== true ) {
						j=i; break;
					}
				}
				return j-ret;
			},
			getOffset = function (iCol) {
				var $th = $(ts.grid.headers[iCol].el), ret = [$th.position().left + $th.outerWidth()];
				if(ts.p.direction==="rtl") { ret[0] = ts.p.width - ret[0]; }
				ret[0] -= ts.grid.bDiv.scrollLeft;
				ret.push($(ts.grid.hDiv).position().top);
				ret.push($(ts.grid.bDiv).offset().top - $(ts.grid.hDiv).offset().top + $(ts.grid.bDiv).height());
				return ret;
			},
			getColumnHeaderIndex = function (th) {
				var i, headers = ts.grid.headers, ci = $.jgrid.getCellIndex(th);
				for (i = 0; i < headers.length; i++) {
					if (th === headers[i].el) {
						ci = i;
						break;
					}
				}
				return ci;
			},
			buildColItems = function (top, left, parent) {
				var cm = ts.p.colModel, len = cm.length, i, cols=[], disp,
				texts = $.jgrid.getRegional(ts, "colmenu"),
				str1 = '<ul id="col_menu" class="ui-search-menu  ui-col-menu modal-content" role="menu" tabindex="0" style="left:'+left+'px;top:'+top+'px;">';
				for(i=0;i<len;i++) {
					//if(!cm[i].hidedlg) { // column chooser
					var hid = !cm[i].hidden ? "checked" : "", nm = cm[i].name, lb = ts.p.colNames[i];
					disp = (nm === 'cb' || nm==='subgrid' || nm==='rn' || cm[i].hidedlg) ? "style='display:none'" :"";
					str1 += '<li '+disp+' class="ui-menu-item" role="presentation" draggable="true"><a class="g-menu-item" tabindex="0" role="menuitem" ><table class="ui-common-table" ><tr><td class="menu_icon" title="'+texts.reorder+'"><span class="'+iconbase+' '+colmenustyle.icon_move+' notclick"></span></td><td class="menu_icon"><input class="'+colmenustyle.input_checkbox+'" type="checkbox" name="'+nm+'" '+hid+'></td><td class="menu_text">'+lb+'</td></tr></table></a></li>';
					cols.push(i);
				}
				str1 += "</ul>";
				$(parent).append(str1);
				$("#col_menu").addClass("ui-menu " + colmenustyle.menu_widget);
				if($.fn.html5sortable()) {
					$("#col_menu").html5sortable({
						handle: 'span',
						forcePlaceholderSize: true }
					).on('sortupdate', function(e, ui) {
						cols.splice( ui.startindex, 1);
						cols.splice(ui.endindex, 0, ui.startindex);
						$(ts).jqGrid("destroyFrozenColumns");
						$(ts).jqGrid("remapColumns", cols, true);
						$(ts).jqGrid("setFrozenColumns");
						for(i=0;i<len;i++) {
							cols[i] = i;
						}
					});			
				} // NO jQuery UI 
				$("#col_menu > li > a").on("click", function(e) {
					var checked;
					if($(e.target).hasClass('notclick')) {
						return;
					}
					if($(e.target).is(":input")) {
						checked = $(e.target).is(":checked");
					} else {
						checked = !$("input", this).is(":checked");
						$("input", this).prop("checked",checked);
					}
					if(!checked) {
						$(ts).jqGrid('hideCol', $("input", this).attr('name'));
						$(this).parent().attr("draggable","false");
					} else {
						$(ts).jqGrid('showCol', $("input", this).attr('name'));
						$(this).parent().attr("draggable","true");
					}
				}).hover(function(){
					$(this).addClass(hover);
				},function(){
					$(this).removeClass(hover);
				});
			},
			buildSearchBox = function (index, top, left, parent) {
				var cm = ts.p.colModel[index], rules, o1='',v1='',r1='',o2='',v2='', so, op, repstr='',selected, elem,
				numopts = ['eq','ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni'],
				stropts = ['eq', 'ne', 'bw', 'bn', 'ew', 'en', 'cn', 'nc', 'nu', 'nn', 'in', 'ni'],
				texts = $.jgrid.getRegional(ts, "search"),
				common = $.jgrid.styleUI[(ts.p.styleUI || 'jQueryUI')].common;

				if(!cm ) {
					return;
				}
				rules = ts.p.colFilters && ts.p.colFilters[cm.name] ?  ts.p.colFilters[cm.name] : false;
				if(rules && !$.isEmptyObject( rules )) {
					o1 = rules.oper1;
					v1 = rules.value1;
					r1 = rules.rule;
					o2 = rules.oper2;
					v2 = rules.value2;
				}
				if(! cm.searchoptions ) {
					cm.searchoptions = {};
				}
				if(cm.searchoptions.sopt) {
					so = cm.searchoptions.sopt;
				} else if(cm.sorttype === 'text') {
					so = stropts;
				} else {
					so = numopts;
				}
				if(cm.searchoptions.operands) {
					op = cm.searchoptions.operands;
				} else  {
					op = texts.groupOps;
				} 
				
				//elem = $('<ul id="search_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="left:'+left+'px;top:'+top+'px;"></ul>');
				elem = $('<form></form>');
				var str1= '<div>'+$.jgrid.getRegional(ts, "colmenu.searchTitle")+'</div>';
				str1 += '<div><select id="oper1" class="'+colmenustyle.filter_select+'">';
				$.each(texts.odata, function(i, n) {
					selected = n.oper === o1 ? 'selected="selected"' : '';
					if($.inArray(n.oper, so) !== -1) {
						repstr += '<option value="'+n.oper+'" '+selected+'>'+n.text+'</option>';
					}
				});
				str1 += repstr;
				str1 += '</select></div>';
				elem.append(str1);
				var df="";
				if(cm.searchoptions.defaultValue ) {
					df = $.isFunction(cm.searchoptions.defaultValue) ? cm.searchoptions.defaultValue.call(ts) : cm.searchoptions.defaultValue;
				}
				//overwrite default value if restore from filters
				if( v1 ) {
					df = v1;
				}
				var soptions = $.extend(cm.searchoptions, {name:cm.index || cm.name, id: "sval1_" + ts.p.idPrefix+cm.name, oper:'search'}),
				input = $.jgrid.createEl.call(ts, cm.stype, soptions , df, false, $.extend({},$.jgrid.ajaxOptions, ts.p.ajaxSelectOptions || {}));
				$(input).addClass( colmenustyle.filter_input );
				str1 = $('<div></div>').append(input);
				elem.append(str1);
				// and/or
				str1 ='<div><select id="operand" class="'+colmenustyle.filter_select+'">';
				$.each(op, function(i, n){
					selected = n.op === r1 ? 'selected="selected"' : '';
					str1 += "<option value='"+n.op+"' "+selected+">"+n.text+"</option>";
				});
				str1 += '</select></div>';
				elem.append(str1);
				//oper2 		
				repstr ='';
				$.each(texts.odata, function(i, n) {
					selected = n.oper === o2 ? 'selected="selected"' : '';
					if($.inArray(n.oper, so) !== -1) {
						repstr += '<option value="'+n.oper+'" '+selected+'>'+n.text+'</option>';
					}
				});
				str1 = '<div><select id="oper2" class="'+colmenustyle.filter_select+'">' + repstr +'</select></div>';
				elem.append(str1);
				// value2
				if( v2 ) {
					df = v2;
				} else {
					df = "";
				}
				soptions = $.extend(cm.searchoptions, {name:cm.index || cm.name, id: "sval2_" + ts.p.idPrefix+cm.name, oper:'search'});
				input = $.jgrid.createEl.call(ts, cm.stype, soptions , df, false, $.extend({},$.jgrid.ajaxOptions, ts.p.ajaxSelectOptions || {}));
				$(input).addClass( colmenustyle.filter_input );
				str1 = $('<div></div>').append(input);
				elem.append(str1);
				// buttons
				str1 = "<div>";
				str1 +="<div class='search_buttons'><a tabindex='0' id='bs_reset' class='fm-button " + common.button +" ui-reset'>"+texts.Reset+"</a></div>";
				str1 +="<div class='search_buttons'><a tabindex='0' id='bs_search' class='fm-button " + common.button + " ui-search'>"+texts.Find+"</a></div>";
				str1 += "</div>";
				elem.append(str1);
				elem = $('<li class="ui-menu-item" role="presentation"></li>').append( elem );
				elem = $('<ul id="search_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="left:'+left+'px;top:'+top+'px;"></ul>').append(elem);
				$(parent).append(elem);
				$("#search_menu").addClass("ui-menu " + colmenustyle.menu_widget);
				$("#bs_reset, #bs_search", "#search_menu").hover(function(){
					$(this).addClass(hover);
				},function(){
					$(this).removeClass(hover);
				});

				$(elem).find("#bs_reset").click(function(e){
					ts.p.colFilters[cm.name] = {};
					ts.p.postData.filters = buildFilters();
					ts.p.search = true;
					$(ts).trigger("reloadGrid");
					$("#column_menu").remove();
					return false;
				});
				$(elem).find("#bs_search").click( function(e){
					ts.p.colFilters[cm.name] = {
						oper1: $("#oper1","#search_menu").val(),
						value1: $("#sval1_" + ts.p.idPrefix+cm.name,"#search_menu").val(),
						rule: $("#operand","#search_menu").val(),
						oper2 : $("#oper2","#search_menu").val(),
						value2 : $("#sval2_" + ts.p.idPrefix+cm.name,"#search_menu").val()
					};
					ts.p.postData.filters = buildFilters();
					ts.p.search = true;
					$(ts).trigger("reloadGrid");
					$("#column_menu").remove();
					return false;
				});
			},
			buildFilters = function() {
				var go = "AND",
				filters ="{\"groupOp\":\"" + go + "\",\"rules\":[], \"groups\" : [", i=0;
				for (var item in ts.p.colFilters) {
					if(ts.p.colFilters.hasOwnProperty(item)) {
						var si = ts.p.colFilters[item];
						if(!$.isEmptyObject(si)) {
							if(i>0) {
								filters += ",";
							}
							filters += "{\"groupOp\": \""+si.rule +"\", \"rules\" : [";
							filters += "{\"field\":\"" + item + "\",";
							filters += "\"op\":\"" + si.oper1 + "\",";
							si.value1 +="";
							filters += "\"data\":\"" + si.value1.replace(/\\/g,'\\\\').replace(/\"/g,'\\"') + "\"}";
							if(si.value2) {
								filters += ",{\"field\":\"" + item + "\",";
								filters += "\"op\":\"" + si.oper2 + "\",";
								si.value2 +="";
								filters += "\"data\":\"" + si.value2.replace(/\\/g,'\\\\').replace(/\"/g,'\\"') + "\"}";
							}
							filters += "]}";
							i++;
						} else {
							//console.log('empty object');
						}
					}
				}
				filters += "]}";
				return filters;
			},
			buildGrouping = function( index, isgroup ) {
				var cm = ts.p.colModel[index],
					group = ts.p.groupingView;
				if(isgroup !== -1) {
					group.groupField.splice(isgroup,1);
				} else {
					group.groupField.push( cm.name);
				}
				$(ts).jqGrid('groupingGroupBy', group.groupField );
				if(ts.p.frozenColumns) {
					$(ts).jqGrid("destroyFrozenColumns");
					$(ts).jqGrid("setFrozenColumns");
				}
			},
			buildFreeze = function( index, isfreeze ) {
				var cols = [], i, len = ts.p.colModel.length, lastfrozen = -1, cm = ts.p.colModel;
				for(i=0; i < len; i++) {
					if(cm[i].frozen) {
						lastfrozen = i;
					}
					cols.push(i);
				}
					// from position index to lastfrozen+1
				cols.splice( index, 1);
				cols.splice(lastfrozen + (isfreeze ? 1 : 0), 0, index);
				cm[index].frozen = isfreeze;
				$(ts).jqGrid("destroyFrozenColumns");
				$(ts).jqGrid("remapColumns", cols, true);
				$(ts).jqGrid("setFrozenColumns");
			},
			buildColMenu = function( index, left, top ){
				//$("#sopt_menu").remove();
				left=parseInt(left,10);
				top=parseInt(top,10) + 25;
				var fs =  $('.ui-jqgrid-view').css('font-size') || '11px';
				var str = '<ul id="column_menu" class="ui-search-menu modal-content column-menu" role="menu" tabindex="0" style="font-size:'+fs+';left:'+left+'px;top:'+top+'px;">',
				cm = ts.p.colModel[index], op = $.extend({sorting:true, columns: true, filtering: true, seraching:true, grouping:true, freeze : true}, cm.coloptions),
				texts = $.jgrid.getRegional(ts, "colmenu"),
				isgroup, isfreeze; // ???
				// sorting
				if(op.sorting) {
					str += '<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="sortasc"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+iconbase+' '+colmenustyle.icon_sort_asc+'"></span></td><td class="menu_text">'+texts.sortasc+'</td></tr></table></a></li>';
					str += '<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="sortdesc"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+iconbase+' '+colmenustyle.icon_sort_desc+'"></span></td><td class="menu_text">'+texts.sortdesc+'</td></tr></table></a></li>';
				}
				if(op.columns) {
					str += '<li class="ui-menu-item divider" role="separator"></li>';
					str += '<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="columns"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+iconbase+' '+colmenustyle.icon_columns+'"></span></td><td class="menu_text">'+texts.columns+'</td></tr></table></a></li>';
				}
				if(op.filtering) {
					str += '<li class="ui-menu-item divider" role="separator"></li>';
					str += '<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="filtering"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+iconbase+' '+colmenustyle.icon_filter+'"></span></td><td class="menu_text">'+texts.filter + ' ' +(cm.label || cm.name)+'</td></tr></table></a></li>';			
				}
				if(op.grouping) {
					isgroup = $.inArray(cm.name, ts.p.groupingView.groupField);
					str += '<li class="ui-menu-item divider" role="separator"></li>';
					str += '<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="grouping"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+iconbase+' '+colmenustyle.icon_group+'"></span></td><td class="menu_text">'+(isgroup !== -1 ?  texts.ungrouping: texts.grouping + ' ' + (cm.label || cm.name))+'</td></tr></table></a></li>';
				}
				if(op.freeze) {
					isfreeze = (cm.frozen && ts.p.frozenColumns) ? false : true;
					str += '<li class="ui-menu-item divider" role="separator"></li>';
					str += '<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="freeze"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+iconbase+' '+colmenustyle.icon_freeze+'"></span></td><td class="menu_text">'+(isfreeze ? (texts.freeze + " "+(cm.label || cm.name)) : texts.unfreeze)+'</td></tr></table></a></li>';
				}
				str += "</ul>";
				$('body').append( str );
				$("#column_menu").addClass("ui-menu " + colmenustyle.menu_widget);
				if(ts.p.direction === "ltr") {
					var wcm = $("#column_menu").width() + 26;
					$("#column_menu").css("left", left- wcm);
				}
				$("#column_menu > li > a").hover(
					function(){
						$("#col_menu").remove();
						$("#search_menu").remove();
						var left1, top1;
						if($(this).attr("value") === 'columns') {
							left1 = $(this).parent().width()+18,
							top1 = $(this).parent().position().top - 5;
							buildColItems(top1, left1, $(this).parent());
						}
						if($(this).attr("value") === 'filtering') {
							left1 = $(this).parent().width()+18,
							top1 = $(this).parent().position().top - 5;
							buildSearchBox(index, top1, left1, $(this).parent());
						}
						$(this).addClass(hover); 
					},
					function(){ $(this).removeClass(hover); }
				).click(function(){
					var v = $(this).attr("value"),
					sobj = ts.grid.headers[index].el;
					if(v === 'sortasc') {
						sortData( "jqgh_"+ts.p.id+"_" + cm.name, index, true, 'asc', sobj);
					} else if(v === 'sortdesc') {
						sortData( "jqgh_"+ts.p.id+"_" + cm.name, index, true, 'desc', sobj);
					} else if (v === 'grouping') {
						buildGrouping(index, isgroup);
					} else if( v==='freeze') {
						buildFreeze( index, isfreeze);
					}
					if(v.indexOf('sort') !== -1 || v === 'grouping' || v==='freeze') {
						$(this).remove();
					}
				});
			},
			colTemplate;
			if(ts.p.colMenu) {
				$("body").on('click', function(e){
					if(!$(e.target).closest(".column-menu").length) {
						$("#column_menu").remove();
					}
				});
			}
			this.p.id = this.id;
			if ($.inArray(ts.p.multikey,sortkeys) === -1 ) {ts.p.multikey = false;}
			ts.p.keyName=false;
			for (i=0; i<ts.p.colModel.length;i++) {
				colTemplate = typeof ts.p.colModel[i].template === "string" ?
					($.jgrid.cmTemplate != null && typeof $.jgrid.cmTemplate[ts.p.colModel[i].template] === "object" ? $.jgrid.cmTemplate[ts.p.colModel[i].template]: {}) :
					ts.p.colModel[i].template;
				ts.p.colModel[i] = $.extend(true, {}, ts.p.cmTemplate, colTemplate || {}, ts.p.colModel[i]);
				if (ts.p.keyName === false && ts.p.colModel[i].key===true) {
					ts.p.keyName = ts.p.colModel[i].name;
				}
			}
			ts.p.sortorder = ts.p.sortorder.toLowerCase();
			$.jgrid.cell_width = $.jgrid.cellWidth();
			if(ts.p.grouping===true) {
				ts.p.scroll = false;
				ts.p.rownumbers = false;
				//ts.p.subGrid = false; expiremental
				ts.p.treeGrid = false;
				ts.p.gridview = true;
			}
			if(this.p.treeGrid === true) {
				try { $(this).jqGrid("setTreeGrid");} catch (_) {}
				if(ts.p.datatype !== "local") { ts.p.localReader = {id: "_id_"};	}
			}
			if(this.p.subGrid) {
				try { $(ts).jqGrid("setSubGrid");} catch (s){}
			}
			if(this.p.multiselect) {
				this.p.colNames.unshift("<input role='checkbox' id='cb_"+this.p.id+"' class='cbox' type='checkbox'/>");
				this.p.colModel.unshift({name:'cb',width:$.jgrid.cell_width ? ts.p.multiselectWidth+ts.p.cellLayout : ts.p.multiselectWidth,sortable:false,resizable:false,hidedlg:true,search:false,align:'center',fixed:true, frozen: true});
			}
			if(this.p.rownumbers) {
				this.p.colNames.unshift("");
				this.p.colModel.unshift({name:'rn',width:ts.p.rownumWidth,sortable:false,resizable:false,hidedlg:true,search:false,align:'center',fixed:true, frozen : true});
			}
			ts.p.xmlReader = $.extend(true,{
				root: "rows",
				row: "row",
				page: "rows>page",
				total: "rows>total",
				records : "rows>records",
				repeatitems: true,
				cell: "cell",
				id: "[id]",
				userdata: "userdata",
				subgrid: {root:"rows", row: "row", repeatitems: true, cell:"cell"}
			}, ts.p.xmlReader);
			ts.p.jsonReader = $.extend(true,{
				root: "rows",
				page: "page",
				total: "total",
				records: "records",
				repeatitems: true,
				cell: "cell",
				id: "id",
				userdata: "userdata",
				subgrid: {root:"rows", repeatitems: true, cell:"cell"}
			},ts.p.jsonReader);
			ts.p.localReader = $.extend(true,{
				root: "rows",
				page: "page",
				total: "total",
				records: "records",
				repeatitems: false,
				cell: "cell",
				id: "id",
				userdata: "userdata",
				subgrid: {root:"rows", repeatitems: true, cell:"cell"}
			},ts.p.localReader);
			if(ts.p.scroll){
				ts.p.pgbuttons = false; ts.p.pginput=false; ts.p.rowList=[];
			}
			if(ts.p.data.length) { normalizeData(); refreshIndex(); }
			var thead = "<thead><tr class='ui-jqgrid-labels' role='row'>",
			tdc, idn, w, res, sort ="",
			td, ptr, tbody, imgs, iac="", idc="", tmpcm;
			if(ts.p.shrinkToFit===true && ts.p.forceFit===true) {
				for (i=ts.p.colModel.length-1;i>=0;i--){
					if(!ts.p.colModel[i].hidden) {
						ts.p.colModel[i].resizable=false;
						break;
					}
				}
			}
			if(ts.p.viewsortcols[1] === 'horizontal') {
				iac=" ui-i-asc";
				idc=" ui-i-desc";
			} else if(ts.p.viewsortcols[1] === "single") { 
				iac = " ui-single-sort-asc";
				idc = " ui-single-sort-desc";
				sort = " style='display:none'";
				ts.p.viewsortcols[0] = false;
			}
			tdc = isMSIE ?  "class='ui-th-div-ie'" :"";
			imgs = "<span class='s-ico' style='display:none'>";
			imgs += "<span sort='asc'  class='ui-grid-ico-sort ui-icon-asc"+iac+" ui-sort-"+dir+" "+disabled+" " + iconbase + " " + getstyle(stylemodule, 'icon_asc', true)+ "'" + sort + "></span>";
			imgs += "<span sort='desc' class='ui-grid-ico-sort ui-icon-desc"+idc+" ui-sort-"+dir+" "+disabled+" " + iconbase + " " + getstyle(stylemodule, 'icon_desc', true)+"'" + sort + "></span></span>";
			if(ts.p.multiSort) {
				if(ts.p.sortname ) {
				sortarr = ts.p.sortname.split(",");
				for (i=0; i < sortarr.length; i++) {
					sotmp = $.trim(sortarr[i]).split(" ");
					sortarr[i] = $.trim(sotmp[0]);
					sortord[i] = sotmp[1] ? $.trim(sotmp[1]) : ts.p.sortorder || "asc";
				}
				}
			}
			for(i=0;i<this.p.colNames.length;i++){
				var tooltip = ts.p.headertitles ? (" title=\""+$.jgrid.stripHtml(ts.p.colNames[i])+"\"") :"";
				tmpcm = ts.p.colModel[i];
				if(!tmpcm.hasOwnProperty('colmenu')) {
					tmpcm.colmenu = (tmpcm.name === "rn" || tmpcm.name === "cb" || tmpcm.name === "subgrid") ? false : true;
				}
				thead += "<th id='"+ts.p.id+"_" + tmpcm.name+"' role='columnheader' "+getstyle(stylemodule,'headerBox',false, "ui-th-column ui-th-"+dir)+" "+ tooltip+">";
				idn = tmpcm.index || tmpcm.name;
				thead += "<div class='ui-th-div' id='jqgh_"+ts.p.id+"_"+tmpcm.name+"' "+tdc+">"+ts.p.colNames[i];
				if(!tmpcm.width)  { 
					tmpcm.width = 150; 
				} else { 
					tmpcm.width = parseInt(tmpcm.width,10); 
				}
				if(typeof tmpcm.title !== "boolean") { 
					tmpcm.title = true; 
				}
				tmpcm.lso = "";
				if (idn === ts.p.sortname) {
					ts.p.lastsort = i;
				}
				if(ts.p.multiSort) {
					sotmp = $.inArray(idn,sortarr);
					if( sotmp !== -1 ) {
						tmpcm.lso = sortord[sotmp];
					}
				}
				thead += imgs;
				if(ts.p.colMenu && tmpcm.colmenu) {
					thead += "<a class='colmenu' href='#/'><span class='colmenuspan "+iconbase+' '+colmenustyle.icon_menu+"'></span></a>";
				}
				thead += "</div></th>";
			}
			thead += "</tr></thead>";
			imgs = null;
			tmpcm = null;
			$(this).append(thead);
			$("thead tr:first th",this).hover(
				function(){ $(this).addClass(hover);},
				function(){	$(this).removeClass(hover);}
			);
			if(this.p.multiselect) {
				var emp=[], chk;
				$('#cb_'+$.jgrid.jqID(ts.p.id),this).on('click',function(){
					ts.p.selarrrow = [];
					var froz = ts.p.frozenColumns === true ? ts.p.id + "_frozen" : "";
					if (this.checked) {
						$(ts.rows).each(function(i) {
							if (i>0) {
								if(!$(this).hasClass("ui-subgrid") && !$(this).hasClass("jqgroup") && !$(this).hasClass(disabled) && !$(this).hasClass("jqfoot")){
									$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(this.id) )[ts.p.useProp ? 'prop': 'attr']("checked",true);
									$(this).addClass(highlight).attr("aria-selected","true");  
									ts.p.selarrrow.push(this.id);
									ts.p.selrow = this.id;
									if(froz) {
										$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(this.id), ts.grid.fbDiv )[ts.p.useProp ? 'prop': 'attr']("checked",true);
										$("#"+$.jgrid.jqID(this.id), ts.grid.fbDiv).addClass(highlight);
									}
								}
							}
						});
						chk=true;
						emp=[];
					}
					else {
						$(ts.rows).each(function(i) {
							if(i>0) {
								if(!$(this).hasClass("ui-subgrid") && !$(this).hasClass("jqgroup") && !$(this).hasClass(disabled) && !$(this).hasClass("jqfoot")){
									$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(this.id) )[ts.p.useProp ? 'prop': 'attr']("checked", false);
									$(this).removeClass(highlight).attr("aria-selected","false");
									emp.push(this.id);
									if(froz) {
										$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(this.id), ts.grid.fbDiv )[ts.p.useProp ? 'prop': 'attr']("checked",false);
										$("#"+$.jgrid.jqID(this.id), ts.grid.fbDiv).removeClass(highlight);
									}
								}
							}
						});
						ts.p.selrow = null;
						chk=false;
					}
					$(ts).triggerHandler("jqGridSelectAll", [chk ? ts.p.selarrrow : emp, chk]);
					if($.isFunction(ts.p.onSelectAll)) {ts.p.onSelectAll.call(ts, chk ? ts.p.selarrrow : emp,chk);}
				});
			}

			if(ts.p.autowidth===true) {
				var pw = $(eg).innerWidth();
				ts.p.width = pw > 0?  pw: 'nw';
			}
			setColWidth();
			$(eg).css("width",grid.width+"px").append("<div class='ui-jqgrid-resize-mark' id='rs_m"+ts.p.id+"'>&#160;</div>");
			if(ts.p.scrollPopUp) {
				$(eg).append("<div "+ getstyle(stylemodule, 'scrollBox', false, 'loading ui-scroll-popup')+" id='scroll_g"+ts.p.id+"'></div>");
			}
			$(gv).css("width",grid.width+"px");
			thead = $("thead:first",ts).get(0);
			var	tfoot = "";
			if(ts.p.footerrow) { tfoot += "<table role='presentation' style='width:"+ts.p.tblwidth+"px' "+getstyle(stylemodule,'footerTable', false, 'ui-jqgrid-ftable ui-common-table')+ "><tbody><tr role='row' "+getstyle(stylemodule,'footerBox', false, 'footrow footrow-'+dir)+">"; }
			var thr = $("tr:first",thead),
			firstr = "<tr class='jqgfirstrow' role='row'>";
			ts.p.disableClick=false;
			$("th",thr).each(function ( j ) {
				tmpcm = ts.p.colModel[j];
				w = tmpcm.width;
				if(tmpcm.resizable === undefined) {
					tmpcm.resizable = true;
				}
				if(tmpcm.resizable){
					res = document.createElement("span");
					$(res).html("&#160;").addClass('ui-jqgrid-resize ui-jqgrid-resize-'+dir)
					.css("cursor","col-resize");
					$(this).addClass(ts.p.resizeclass);
				} else {
					res = "";
				}
				$(this).css("width",w+"px").prepend(res);
				res = null;
				var hdcol = "";
				if( tmpcm.hidden ) {
					$(this).css("display","none");
					hdcol = "display:none;";
				}
				firstr += "<td role='gridcell' style='height:0px;width:"+w+"px;"+hdcol+"'></td>";
				grid.headers[j] = { width: w, el: this };
				sort = tmpcm.sortable;
				if( typeof sort !== 'boolean') { 
					tmpcm.sortable =  true; 
					sort=true;
				}
				var nm = tmpcm.name;
				if( !(nm === 'cb' || nm==='subgrid' || nm==='rn') ) {
					if(ts.p.viewsortcols[2]){
						$(">div",this).addClass('ui-jqgrid-sortable');
					}
				}
				if(sort) {
					if(ts.p.multiSort) {
						if(ts.p.viewsortcols[0]) {
							$("div span.s-ico",this).show(); 
							if(ts.p.colModel[j].lso){ 
								$("div span.ui-icon-"+tmpcm.lso,this).removeClass(disabled).css("display","");
							}
						} else if( ts.p.colModel[j].lso) {
							$("div span.s-ico",this).show();
							$("div span.ui-icon-"+tmpcm.lso,this).removeClass(disabled).css("display","");
						}
					} else {
						if(ts.p.viewsortcols[0]) {
							$("div span.s-ico",this).show(); 
							if(j===ts.p.lastsort){ 
								$("div span.ui-icon-"+ts.p.sortorder,this).removeClass(disabled).css("display","");
							}
						} else if(j === ts.p.lastsort && ts.p.sortname !== "") {
							$("div span.s-ico",this).show();
							$("div span.ui-icon-"+ts.p.sortorder,this).removeClass(disabled).css("display","");
						}
					}
				}
				if(ts.p.footerrow) {
					tfoot += "<td role='gridcell' "+formatCol(j,0,'', null, '', false)+">&#160;</td>"; 
				}
			}).mousedown(function(e) {
				if ($(e.target).closest("th>span.ui-jqgrid-resize").length !== 1) { return; }
				var ci = getColumnHeaderIndex(this);
				if(ts.p.forceFit===true) {ts.p.nv= nextVisible(ci);}
				grid.dragStart(ci, e, getOffset(ci));
				return false;
			}).click(function(e) {
				if (ts.p.disableClick) {
					ts.p.disableClick = false;
					return false;
				}
				var s = "th>div.ui-jqgrid-sortable",r,d;
				if (!ts.p.viewsortcols[2]) { s = "th>div>span>span.ui-grid-ico-sort"; }
				var t = $(e.target).closest(s);
				if (t.length !== 1) { return; }
				var ci;
				if(ts.p.frozenColumns) {
					var tid =  $(this)[0].id.substring( ts.p.id.length + 1 );
					$(ts.p.colModel).each(function(i){
						if (this.name === tid) {
							ci = i;return false;
						}
					});
				} else {
					ci = getColumnHeaderIndex(this);
				}
				//
				if($(e.target).hasClass('colmenuspan')) {
					if($("#column_menu")[0] != null) {
						$("#column_menu").remove();
					}

					var colindex = $.jgrid.getCellIndex(e.target);
					if(colindex === -1) { return;}
					var offset = $(this).offset(),
					left = ( offset.left ),
					top = ( offset.top);
					if(ts.p.direction === "ltr") {
						left += $(this).outerWidth();
					}
					buildColMenu(colindex, left, top, t );
					e.stopPropagation();
					return;
				}
				//
				if (!ts.p.viewsortcols[2]) { r=true;d=t.attr("sort"); }
				if(ci != null){
					sortData( $('div',this)[0].id, ci, r, d, this);
				}
				return false;
			});
			tmpcm = null;
			if (ts.p.sortable && $.fn.sortable) {
				try {
					$(ts).jqGrid("sortableColumns", thr);
				} catch (e){}
			}
			if(ts.p.footerrow) { tfoot += "</tr></tbody></table>"; }
			firstr += "</tr>";
			tbody = document.createElement("tbody");
			//$(this).append(firstr);
			this.appendChild(tbody);
			$(this).addClass(getstyle(stylemodule,"rowTable", true, 'ui-jqgrid-btable ui-common-table')).append(firstr);
			//$(firstr).insertAfter(this);
			firstr = null;
			var hTable = $("<table "+getstyle(stylemodule,'headerTable',false,'ui-jqgrid-htable ui-common-table')+" style='width:"+ts.p.tblwidth+"px' role='presentation' aria-labelledby='gbox_"+this.id+"'></table>").append(thead),
			hg = (ts.p.caption && ts.p.hiddengrid===true) ? true : false,
			hb = $("<div class='ui-jqgrid-hbox" + (dir==="rtl" ? "-rtl" : "" )+"'></div>"),
			bstw = ts.p.styleUI === 'Bootstrap' && !isNaN(ts.p.height) ? 2 : 0;
			thead = null;
			grid.hDiv = document.createElement("div");
			grid.hDiv.style.width = (grid.width - bstw) + "px";
			grid.hDiv.className = getstyle(stylemodule,'headerDiv', true,'ui-jqgrid-hdiv');

			$(grid.hDiv).append(hb);
			$(hb).append(hTable);
			hTable = null;
			if(hg) { $(grid.hDiv).hide(); }
			if(ts.p.pager){
				// TBD -- escape ts.p.pager here?
				if(typeof ts.p.pager === "string") {if(ts.p.pager.substr(0,1) !== "#") { ts.p.pager = "#"+ts.p.pager;} }
				else { ts.p.pager = "#"+ $(ts.p.pager).attr("id");}
				$(ts.p.pager).css({width: grid.width+"px"}).addClass(getstyle(stylemodule,'pagerBox', true,'ui-jqgrid-pager')).appendTo(eg);
				if(hg) {$(ts.p.pager).hide();}
				setPager(ts.p.pager,'');
			}
			if( ts.p.cellEdit === false && ts.p.hoverrows === true) {
				$(ts).on({
					mouseover: function(e) {
						ptr = $(e.target).closest("tr.jqgrow");
						if($(ptr).attr("class") !== "ui-subgrid") {
							$(ptr).addClass(hover);
						}
					},
					mouseout: function(e) {
						ptr = $(e.target).closest("tr.jqgrow");
						$(ptr).removeClass(hover);
					}
				});
			}
			var ri,ci, tdHtml;
			$(ts).before(grid.hDiv).on({
				'click': function(e) {
					td = e.target;
					ptr = $(td,ts.rows).closest("tr.jqgrow");
					if($(ptr).length === 0 || ptr[0].className.indexOf( disabled ) > -1 || ($(td,ts).closest("table.ui-jqgrid-btable").attr('id') || '').replace("_frozen","") !== ts.id ) {
						return this;
					}
					var scb = $(td).filter(":enabled").hasClass("cbox"),
					cSel = $(ts).triggerHandler("jqGridBeforeSelectRow", [ptr[0].id, e]);
					cSel = (cSel === false || cSel === 'stop') ? false : true;
					if ($.isFunction(ts.p.beforeSelectRow)) {
						var allowRowSelect = ts.p.beforeSelectRow.call(ts, ptr[0].id, e);
						if (allowRowSelect === false || allowRowSelect === 'stop') {
							cSel = false;
						}
					}
					if (td.tagName === 'A' || ((td.tagName === 'INPUT' || td.tagName === 'TEXTAREA' || td.tagName === 'OPTION' || td.tagName === 'SELECT' ) && !scb) ) { return; }
					ri = ptr[0].id;
					td = $(td).closest("tr.jqgrow>td");
					if (td.length > 0) {
						ci = $.jgrid.getCellIndex(td);
						tdHtml = $(td).closest("td,th").html();
						$(ts).triggerHandler("jqGridCellSelect", [ri,ci,tdHtml,e]);
						if($.isFunction(ts.p.onCellSelect)) {
							ts.p.onCellSelect.call(ts,ri,ci,tdHtml,e);
						}
					}
					if(ts.p.cellEdit === true) {
						if(ts.p.multiselect && scb && cSel){
							$(ts).jqGrid("setSelection", ri ,true,e);
						} else if (td.length > 0) {
							try {
								$(ts).jqGrid("editCell", ptr[0].rowIndex, ci, true);
							} catch (_) {}
						}
						return;
					}
					if (!cSel) {
						return;
					}
					if ( !ts.p.multikey ) {
						if(ts.p.multiselect && ts.p.multiboxonly) {
							if(scb){$(ts).jqGrid("setSelection",ri,true,e);}
							else {
								var frz = ts.p.frozenColumns ? ts.p.id+"_frozen" : "";
								$(ts.p.selarrrow).each(function(i,n){
									var trid = $(ts).jqGrid('getGridRowById',n);
									if(trid) { 
										$( trid ).removeClass(highlight); 
									}
									$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(n))[ts.p.useProp ? 'prop': 'attr']("checked", false);
									if(frz) {
										$("#"+$.jgrid.jqID(n), "#"+$.jgrid.jqID(frz)).removeClass(highlight);
										$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(n), "#"+$.jgrid.jqID(frz))[ts.p.useProp ? 'prop': 'attr']("checked", false);
									}
								});
								ts.p.selarrrow = [];
								$(ts).jqGrid("setSelection",ri,true,e);
							}
						} else {
							$(ts).jqGrid("setSelection",ri,true,e);
						}
					} else {
						if(e[ts.p.multikey]) {
							$(ts).jqGrid("setSelection",ri,true,e);
						} else if(ts.p.multiselect && scb) {
							scb = $("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+ri).is(":checked");
							$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+ri)[ts.p.useProp ? 'prop' : 'attr']("checked", !scb);
						}
					}
				},
				'reloadGrid': function(e,opts) {
					if(ts.p.treeGrid ===true) {	ts.p.datatype = ts.p.treedatatype;}
					opts = opts || {};
					if (opts.current) {
						ts.grid.selectionPreserver(ts);
					}
					if(ts.p.datatype==="local"){ $(ts).jqGrid("resetSelection");  if(ts.p.data.length) { normalizeData(); refreshIndex();} }
					else if(!ts.p.treeGrid) {
						ts.p.selrow=null;
						if(ts.p.multiselect) {ts.p.selarrrow =[];setHeadCheckBox(false);}
						ts.p.savedRow = [];
					}
					if(ts.p.scroll) {emptyRows.call(ts, true, false);}
					if (opts.page) {
						var page = opts.page;
						if (page > ts.p.lastpage) { page = ts.p.lastpage; }
						if (page < 1) { page = 1; }
						ts.p.page = page;
						if (ts.grid.prevRowHeight) {
							ts.grid.bDiv.scrollTop = (page - 1) * ts.grid.prevRowHeight * ts.p.rowNum;
						} else {
							ts.grid.bDiv.scrollTop = 0;
						}
					}
					if (ts.grid.prevRowHeight && ts.p.scroll && opts.page === undefined) {
						delete ts.p.lastpage;
						ts.grid.populateVisible();
					} else {
						ts.grid.populate();
					}
					if(ts.p.inlineNav===true) {$(ts).jqGrid('showAddEditButtons');}
					return false;
				},
				'dblclick' : function(e) {
					td = e.target;
					ptr = $(td,ts.rows).closest("tr.jqgrow");
					if($(ptr).length === 0 ){return;}
					ri = ptr[0].rowIndex;
					ci = $.jgrid.getCellIndex(td);
					var dbcr = $(ts).triggerHandler("jqGridDblClickRow", [$(ptr).attr("id"),ri,ci,e]);
					if( dbcr != null) { return dbcr; }
					if ($.isFunction(ts.p.ondblClickRow)) { 
						dbcr = ts.p.ondblClickRow.call(ts,$(ptr).attr("id"),ri,ci, e); 
						if( dbcr != null) { return dbcr; }
					}
				},
				'contextmenu' : function(e) {
					td = e.target;
					ptr = $(td,ts.rows).closest("tr.jqgrow");
					if($(ptr).length === 0 ){return;}
					if(!ts.p.multiselect) {	$(ts).jqGrid("setSelection",ptr[0].id,true,e);	}
					ri = ptr[0].rowIndex;
					ci = $.jgrid.getCellIndex(td);
					var rcr = $(ts).triggerHandler("jqGridRightClickRow", [$(ptr).attr("id"),ri,ci,e]);
					if( rcr != null) { return rcr; }
					if ($.isFunction(ts.p.onRightClickRow)) { 
						rcr = ts.p.onRightClickRow.call(ts,$(ptr).attr("id"),ri,ci, e); 
						if( rcr != null) { return rcr; }
					}
				}
			});
			//---
			grid.bDiv = document.createElement("div");
			if(isMSIE) { if(String(ts.p.height).toLowerCase() === "auto") { ts.p.height = "100%"; } }
			$(grid.bDiv)
				.append($('<div style="position:relative;"></div>').append('<div></div>').append(this))
				.addClass("ui-jqgrid-bdiv")
				.css({ height: ts.p.height+(isNaN(ts.p.height)?"":"px"), width: (grid.width - bstw)+"px"})
				.scroll(grid.scrollGrid);
			$("table:first",grid.bDiv).css({width:ts.p.tblwidth+"px"});
			if( !$.support.tbody ) { //IE
				if( $("tbody",this).length === 2 ) { $("tbody:gt(0)",this).remove();}
			}
			if(ts.p.multikey){
				if( $.jgrid.msie()) {
					$(grid.bDiv).on("selectstart",function(){return false;});
				} else {
					$(grid.bDiv).on("mousedown",function(){return false;});
				}
			}
			if(hg) { // hidden grid
				$(grid.bDiv).hide();
			}
			var icoo =  iconbase + " " + getstyle(stylemodule,'icon_caption_open', true),
			icoc =  iconbase + " " + getstyle(stylemodule,'icon_caption_close', true);
			grid.cDiv = document.createElement("div");
			var arf = ts.p.hidegrid===true ? $("<a role='link' class='ui-jqgrid-titlebar-close HeaderButton "+cornerall+"' title='"+($.jgrid.getRegional(ts, "defaults.showhide", ts.p.showhide) || "")+"'" + " />").hover(
				function(){ arf.addClass(hover);},
				function() {arf.removeClass(hover);})
			.append("<span class='ui-jqgrid-headlink " + icoo +"'></span>").css((dir==="rtl"?"left":"right"),"0px") : "";
			$(grid.cDiv).append(arf).append("<span class='ui-jqgrid-title'>"+ts.p.caption+"</span>")
			.addClass("ui-jqgrid-titlebar ui-jqgrid-caption"+(dir==="rtl" ? "-rtl" :"" )+" "+getstyle(stylemodule,'gridtitleBox',true));
			$(grid.cDiv).insertBefore(grid.hDiv);
			if( ts.p.toolbar[0] ) {
				var tbstyle = getstyle(stylemodule, 'customtoolbarBox', true, 'ui-userdata');
				grid.uDiv = document.createElement("div");
				if(ts.p.toolbar[1] === "top") {$(grid.uDiv).insertBefore(grid.hDiv);}
				else if (ts.p.toolbar[1]==="bottom" ) {$(grid.uDiv).insertAfter(grid.hDiv);}
				if(ts.p.toolbar[1]==="both") {
					grid.ubDiv = document.createElement("div");
					$(grid.uDiv).addClass( tbstyle + " ui-userdata-top").attr("id","t_"+this.id).insertBefore(grid.hDiv).width(grid.width - bstw);
					$(grid.ubDiv).addClass( tbstyle + " ui-userdata-bottom").attr("id","tb_"+this.id).insertAfter(grid.hDiv).width(grid.width - bstw);
					if(hg)  {$(grid.ubDiv).hide();}
				} else {
					$(grid.uDiv).width(grid.width - bstw).addClass( tbstyle + " ui-userdata-top").attr("id","t_"+this.id);
				}
				if(hg) {$(grid.uDiv).hide();}
			}
			if(ts.p.toppager) {
				ts.p.toppager = $.jgrid.jqID(ts.p.id)+"_toppager";
				grid.topDiv = $("<div id='"+ts.p.toppager+"'></div>")[0];
				ts.p.toppager = "#"+ts.p.toppager;
				$(grid.topDiv).addClass(getstyle(stylemodule, 'toppagerBox', true, 'ui-jqgrid-toppager')).width(grid.width - bstw).insertBefore(grid.hDiv);
				setPager(ts.p.toppager,'_t');
			}
			if(ts.p.footerrow) {
				grid.sDiv = $("<div class='ui-jqgrid-sdiv'></div>")[0];
				hb = $("<div class='ui-jqgrid-hbox"+(dir==="rtl"?"-rtl":"")+"'></div>");
				$(grid.sDiv).append(hb).width(grid.width - bstw).insertAfter(grid.hDiv);
				$(hb).append(tfoot);
				grid.footers = $(".ui-jqgrid-ftable",grid.sDiv)[0].rows[0].cells;
				if(ts.p.rownumbers) { grid.footers[0].className = getstyle(stylemodule, 'rownumBox', true, 'jqgrid-rownum'); }
				if(hg) {$(grid.sDiv).hide();}
			}
			hb = null;
			if(ts.p.caption) {
				var tdt = ts.p.datatype;
				if(ts.p.hidegrid===true) {
					$(".ui-jqgrid-titlebar-close",grid.cDiv).click( function(e){
						var onHdCl = $.isFunction(ts.p.onHeaderClick),
						elems = ".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-toppager, .ui-jqgrid-pager, .ui-jqgrid-sdiv",
						counter, self = this;
						if(ts.p.toolbar[0]===true) {
							if( ts.p.toolbar[1]==='both') {
								elems += ', #' + $(grid.ubDiv).attr('id');
							}
							elems += ', #' + $(grid.uDiv).attr('id');
						}
						counter = $(elems,"#gview_"+$.jgrid.jqID(ts.p.id)).length;

						if(ts.p.gridstate === 'visible') {
							$(elems,"#gbox_"+$.jgrid.jqID(ts.p.id)).slideUp("fast", function() {
								counter--;
								if (counter === 0) {
									$("span",self).removeClass(icoo).addClass(icoc);
									ts.p.gridstate = 'hidden';
									if($("#gbox_"+$.jgrid.jqID(ts.p.id)).hasClass("ui-resizable")) { $(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(ts.p.id)).hide(); }
									$(ts).triggerHandler("jqGridHeaderClick", [ts.p.gridstate,e]);
									if(onHdCl) {if(!hg) {ts.p.onHeaderClick.call(ts,ts.p.gridstate,e);}}
								}
							});
						} else if(ts.p.gridstate === 'hidden'){
							$(elems,"#gbox_"+$.jgrid.jqID(ts.p.id)).slideDown("fast", function() {
								counter--;
								if (counter === 0) {
									$("span",self).removeClass(icoc).addClass(icoo);
									if(hg) {ts.p.datatype = tdt;populate();hg=false;}
									ts.p.gridstate = 'visible';
									if($("#gbox_"+$.jgrid.jqID(ts.p.id)).hasClass("ui-resizable")) { $(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(ts.p.id)).show(); }
									$(ts).triggerHandler("jqGridHeaderClick", [ts.p.gridstate,e]);
									if(onHdCl) {if(!hg) {ts.p.onHeaderClick.call(ts,ts.p.gridstate,e);}}
								}
							});
						}
						return false;
					});
					if(hg) {ts.p.datatype="local"; $(".ui-jqgrid-titlebar-close",grid.cDiv).trigger("click");}
				}
			} else {
				$(grid.cDiv).hide();
				if(!ts.p.toppager) {
					$(grid.hDiv).addClass(getstyle(ts.p.styleUI+'.common', 'cornertop', true));
				}
			}
			$(grid.hDiv).after(grid.bDiv)
			.mousemove(function (e) {
				if(grid.resizing){grid.dragMove(e);return false;}
			});
			$(".ui-jqgrid-labels",grid.hDiv).on("selectstart", function () { return false; });
			$(document).on( "mouseup.jqGrid" + ts.p.id, function () {
				if(grid.resizing) {	grid.dragEnd( true ); return false;}
				return true;
			});
			if(ts.p.direction === 'rtl') {
				$(ts).on('jqGridAfterGridComplete.setRTLPadding',function(){
						var  vScrollWidth = grid.bDiv.offsetWidth - grid.bDiv.clientWidth;
						//gridhbox = $("div:first",grid.hDiv);
						ts.p.scrollOffset = vScrollWidth;
						// for future implementation
						//if (gridhbox.hasClass("ui-jqgrid-hbox-rtl")) {
							$("div:first",grid.hDiv).css({paddingLeft: vScrollWidth + "px"});
						//} else {
							//gridhbox.css({paddingRight: vScrollWidth + "px"});
						//}
						grid.hDiv.scrollLeft = grid.bDiv.scrollLeft;
				});
			}
			ts.formatCol = formatCol;
			ts.sortData = sortData;
			ts.updatepager = updatepager;
			ts.refreshIndex = refreshIndex;
			ts.setHeadCheckBox = setHeadCheckBox;
			ts.constructTr = constructTr;
			ts.formatter = function ( rowId, cellval , colpos, rwdat, act){return formatter(rowId, cellval , colpos, rwdat, act);};
			$.extend(grid,{populate : populate, emptyRows: emptyRows, beginReq: beginReq, endReq: endReq});
			this.grid = grid;
			ts.addXmlData = function(d) {addXmlData( d );};
			ts.addJSONData = function(d) {addJSONData( d );};
			this.grid.cols = this.rows[0].cells;
			$(ts).triggerHandler("jqGridInitGrid");
			if ($.isFunction( ts.p.onInitGrid )) { ts.p.onInitGrid.call(ts); }
			populate();
			ts.p.hiddengrid=false;
			if(ts.p.responsive) {
				var supportsOrientationChange = "onorientationchange" in window,
				orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";		
				$(window).on( orientationEvent, function(){
					$(ts).jqGrid('resizeGrid');
				});
			}
		});
	};
	$.jgrid.extend({
		getGridParam : function(name, module) {
			var $t = this[0], ret;
			if (!$t || !$t.grid) {return;}
			if(module === undefined && typeof module !== 'string') {
				module = 'jqGrid'; //$t.p
			}
			ret = $t.p;
			if(module !== 'jqGrid') {
				try {
					ret = $($t).data( module );
				} catch (e) {
					ret = $t.p;
				}
			}
			if (!name) { return ret; }	
			return ret[name] !== undefined ? ret[name] : null;
		},
		setGridParam : function (newParams, overwrite){
			return this.each(function(){
				if(overwrite == null) {
					overwrite = false;
				}
				if (this.grid && typeof newParams === 'object') {
					if(overwrite === true) {
						var params = $.extend({}, this.p, newParams);
						this.p = params;
					} else {
						$.extend(true,this.p,newParams);
					}
				}
			});
		},
		getGridRowById: function ( rowid ) {
			var row;
			this.each( function(){
				try {
					//row = this.rows.namedItem( rowid );
					var i = this.rows.length;
					while(i--) {
						if( rowid.toString() === this.rows[i].id) {
							row = this.rows[i];
							break;
						}
					}
				} catch ( e ) {
					row = $(this.grid.bDiv).find( "#" + $.jgrid.jqID( rowid ));
				}
			});
			return row;
		},
		getDataIDs : function () {
			var ids=[], i=0, len, j=0;
			this.each(function(){
				len = this.rows.length;
				if(len && len>0){
					while(i<len) {
						if($(this.rows[i]).hasClass('jqgrow')) {
							ids[j] = this.rows[i].id;
							j++;
						}
						i++;
					}
				}
			});
			return ids;
		},
		setSelection : function(selection,onsr, e) {
			return this.each(function(){
				var $t = this, stat,pt, ner, ia, tpsr, fid, csr,
				getstyle = $.jgrid.getMethod("getStyleUI"),
				highlight = getstyle($t.p.styleUI+'.common','highlight', true),
				disabled = getstyle($t.p.styleUI+'.common','disabled', true);
				if(selection === undefined) { return; }
				onsr = onsr === false ? false : true;
				pt=$($t).jqGrid('getGridRowById', selection);
				if(!pt || !pt.className || pt.className.indexOf( disabled ) > -1 ) { return; }
				function scrGrid(iR){
					var ch = $($t.grid.bDiv)[0].clientHeight,
					st = $($t.grid.bDiv)[0].scrollTop,
					rpos = $($t.rows[iR]).position().top,
					rh = $t.rows[iR].clientHeight;
					if(rpos+rh >= ch+st) { $($t.grid.bDiv)[0].scrollTop = rpos-(ch+st)+rh+st; }
					else if(rpos < ch+st) {
						if(rpos < st) {
							$($t.grid.bDiv)[0].scrollTop = rpos;
						}
					}
				}
				if($t.p.scrollrows===true) {
					ner = $($t).jqGrid('getGridRowById',selection).rowIndex;
					if(ner >=0 ){
						scrGrid(ner);
					}
				}
				if($t.p.frozenColumns === true ) {
					fid = $t.p.id+"_frozen";
				}
				if(!$t.p.multiselect) {	
					if(pt.className !== "ui-subgrid") {
						if( $t.p.selrow !== pt.id ) {
							csr = $($t).jqGrid('getGridRowById', $t.p.selrow);
							if( csr ) {
								$(  csr ).removeClass(highlight).attr({"aria-selected":"false", "tabindex" : "-1"});
							}
							$(pt).addClass(highlight).attr({"aria-selected":"true", "tabindex" : "0"});//.focus();
							if(fid) {
								$("#"+$.jgrid.jqID($t.p.selrow), "#"+$.jgrid.jqID(fid)).removeClass(highlight);
								$("#"+$.jgrid.jqID(selection), "#"+$.jgrid.jqID(fid)).addClass(highlight);
							}
							stat = true;
						} else {
							stat = false;
						}
						$t.p.selrow = pt.id;
						if( onsr ) { 
							$($t).triggerHandler("jqGridSelectRow", [pt.id, stat, e]);
							if( $t.p.onSelectRow) { $t.p.onSelectRow.call($t, pt.id, stat, e); }
						}
					}
				} else {
					//unselect selectall checkbox when deselecting a specific row
					$t.setHeadCheckBox( false );
					$t.p.selrow = pt.id;
					ia = $.inArray($t.p.selrow,$t.p.selarrrow);
					if (  ia === -1 ){
						if(pt.className !== "ui-subgrid") { $(pt).addClass(highlight).attr("aria-selected","true");}
						stat = true;
						$t.p.selarrrow.push($t.p.selrow);
					} else {
						if(pt.className !== "ui-subgrid") { $(pt).removeClass(highlight).attr("aria-selected","false");}
						stat = false;
						$t.p.selarrrow.splice(ia,1);
						tpsr = $t.p.selarrrow[0];
						$t.p.selrow = (tpsr === undefined) ? null : tpsr;
					}
					$("#jqg_"+$.jgrid.jqID($t.p.id)+"_"+$.jgrid.jqID(pt.id))[$t.p.useProp ? 'prop': 'attr']("checked",stat);
					if(fid) {
						if(ia === -1) {
							$("#"+$.jgrid.jqID(selection), "#"+$.jgrid.jqID(fid)).addClass(highlight);
						} else {
							$("#"+$.jgrid.jqID(selection), "#"+$.jgrid.jqID(fid)).removeClass(highlight);
						}
						$("#jqg_"+$.jgrid.jqID($t.p.id)+"_"+$.jgrid.jqID(selection), "#"+$.jgrid.jqID(fid))[$t.p.useProp ? 'prop': 'attr']("checked",stat);
					}
					if( onsr ) {
						$($t).triggerHandler("jqGridSelectRow", [pt.id, stat, e]);
						if( $t.p.onSelectRow) { $t.p.onSelectRow.call($t, pt.id , stat, e); }
					}
				}
			});
		},
		resetSelection : function( rowid ){
			return this.each(function(){
				var t = this, sr, fid,
				getstyle = $.jgrid.getMethod("getStyleUI"),
				highlight = getstyle(t.p.styleUI+'.common','highlight', true),
				hover = getstyle(t.p.styleUI+'.common','hover', true);
				if( t.p.frozenColumns === true ) {
					fid = t.p.id+"_frozen";
				}
				if(rowid !== undefined ) {
					sr = rowid === t.p.selrow ? t.p.selrow : rowid;
					$("#"+$.jgrid.jqID(t.p.id)+" tbody:first tr#"+$.jgrid.jqID(sr)).removeClass( highlight ).attr("aria-selected","false");
					if (fid) { $("#"+$.jgrid.jqID(sr), "#"+$.jgrid.jqID(fid)).removeClass( highlight ); }
					if(t.p.multiselect) {
						$("#jqg_"+$.jgrid.jqID(t.p.id)+"_"+$.jgrid.jqID(sr), "#"+$.jgrid.jqID(t.p.id))[t.p.useProp ? 'prop': 'attr']("checked",false);
						if(fid) { $("#jqg_"+$.jgrid.jqID(t.p.id)+"_"+$.jgrid.jqID(sr), "#"+$.jgrid.jqID(fid))[t.p.useProp ? 'prop': 'attr']("checked",false); }
						t.setHeadCheckBox( false);
						var ia = $.inArray($.jgrid.jqID(sr), t.p.selarrrow);
						if (  ia !== -1 ){
							t.p.selarrrow.splice(ia,1);
						}
					}
					if( t.p.onUnSelectRow) { t.p.onUnSelectRow.call(t, sr ); }
					sr = null;
				} else if(!t.p.multiselect) {
					if(t.p.selrow) {
						$("#"+$.jgrid.jqID(t.p.id)+" tbody:first tr#"+$.jgrid.jqID(t.p.selrow)).removeClass( highlight ).attr("aria-selected","false");
						if(fid) { $("#"+$.jgrid.jqID(t.p.selrow), "#"+$.jgrid.jqID(fid)).removeClass( highlight ); }
						if( t.p.onUnSelectRow) { t.p.onUnSelectRow.call(t, t.p.selrow ); }
						t.p.selrow = null;
					}
				} else {
					$(t.p.selarrrow).each(function(i,n){
						$( $(t).jqGrid('getGridRowById',n) ).removeClass( highlight ).attr("aria-selected","false");
						$("#jqg_"+$.jgrid.jqID(t.p.id)+"_"+$.jgrid.jqID(n))[t.p.useProp ? 'prop': 'attr']("checked",false);
						if(fid) { 
							$("#"+$.jgrid.jqID(n), "#"+$.jgrid.jqID(fid)).removeClass( highlight ); 
							$("#jqg_"+$.jgrid.jqID(t.p.id)+"_"+$.jgrid.jqID(n), "#"+$.jgrid.jqID(fid))[t.p.useProp ? 'prop': 'attr']("checked",false);
						}
						if( t.p.onUnSelectRow) { t.p.onUnSelectRow.call(t, n); }
					});
					t.setHeadCheckBox( false );
					t.p.selarrrow = [];
					t.p.selrow = null;
				}
				if(t.p.cellEdit === true) {
					if(parseInt(t.p.iCol,10)>=0  && parseInt(t.p.iRow,10)>=0) {
						$("td:eq("+t.p.iCol+")",t.rows[t.p.iRow]).removeClass("edit-cell " + highlight );
						$(t.rows[t.p.iRow]).removeClass("selected-row " + hover );
					}
				}
				t.p.savedRow = [];
			});
		},
		getRowData : function( rowid, usedata ) {
			var res = {}, resall, getall=false, len, j=0;
			this.each(function(){
				var $t = this,nm,ind;
				if(rowid == null) {
					getall = true;
					resall = [];
					len = $t.rows.length-1;
				} else {
					ind = $($t).jqGrid('getGridRowById', rowid);
					if(!ind) { return res; }
					len = 1;
				}
				if( !(usedata && usedata === true && $t.p.data.length > 0)  ) {
					usedata = false;
				}
				while(j<len){
					if(getall) { ind = $t.rows[j]; }
					if( $(ind).hasClass('jqgrow') ) {
						if(usedata) {
							res = $t.p.data[$t.p._index[ind.id]]; 
						} else {
							$('td[role="gridcell"]',ind).each( function(i) {
								nm = $t.p.colModel[i].name;
								if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn') {
									if($t.p.treeGrid===true && nm === $t.p.ExpandColumn) {
										res[nm] = $.jgrid.htmlDecode($("span:first",this).html());
									} else {
										try {
											res[nm] = $.unformat.call($t,this,{rowId:ind.id, colModel:$t.p.colModel[i]},i);
										} catch (e){
											res[nm] = $.jgrid.htmlDecode($(this).html());
										}
									}
								}
							});
						}
						if(getall) { resall.push(res); res={}; }
					}
					j++;
				}
			});
			return resall || res;
		},
		delRowData : function(rowid) {
			var success = false, rowInd, ia, nextRow;
			this.each(function() {
				var $t = this;
				rowInd = $($t).jqGrid('getGridRowById', rowid);
				if(!rowInd) {return false;}
					if($t.p.subGrid) {
						nextRow = $(rowInd).next();
						if(nextRow.hasClass('ui-subgrid')) {
							nextRow.remove();
						}
					}
					$(rowInd).remove();
					$t.p.records--;
					$t.p.reccount--;
					$t.updatepager(true,false);
					success=true;
					if($t.p.multiselect) {
						ia = $.inArray(rowid,$t.p.selarrrow);
						if(ia !== -1) { $t.p.selarrrow.splice(ia,1);}
					}
					if ($t.p.multiselect && $t.p.selarrrow.length > 0) {
						$t.p.selrow = $t.p.selarrrow[$t.p.selarrrow.length-1];
					} else {
						if( $t.p.selrow === rowid ) {
							$t.p.selrow = null;
						}
					}
				if($t.p.datatype === 'local') {
					var id = $.jgrid.stripPref($t.p.idPrefix, rowid),
					pos = $t.p._index[id];
					if(pos !== undefined) {
						$t.p.data.splice(pos,1);
						$t.refreshIndex();
					}
				}
				if( $t.p.altRows === true && success ) {
					var cn = $t.p.altclass;
					$($t.rows).each(function(i){
						if(i % 2 === 1) { $(this).addClass(cn); }
						else { $(this).removeClass(cn); }
					});
				}
			});
			return success;
		},
		setRowData : function(rowid, data, cssp) {
			var nm, success=true, title;
			this.each(function(){
				if(!this.grid) {return false;}
				var t = this, vl, ind, cp = typeof cssp, lcdata={};
				ind = $(this).jqGrid('getGridRowById', rowid);
				if(!ind) { return false; }
				if( data ) {
					try {
						$(this.p.colModel).each(function(i){
							nm = this.name;
							var dval =$.jgrid.getAccessor(data,nm);
							if( dval !== undefined) {
								lcdata[nm] = this.formatter && typeof this.formatter === 'string' && this.formatter === 'date' ? $.unformat.date.call(t,dval,this) : dval;
								vl = t.formatter( rowid, lcdata[nm], i, data, 'edit');
								title = this.title ? {"title":$.jgrid.stripHtml(vl)} : {};
								if(t.p.treeGrid===true && nm === t.p.ExpandColumn) {
									$("td[role='gridcell']:eq("+i+") > span:first",ind).html(vl).attr(title);
								} else {
									$("td[role='gridcell']:eq("+i+")",ind).html(vl).attr(title);
								}
							}
						});
						if(t.p.datatype === 'local') {
							var id = $.jgrid.stripPref(t.p.idPrefix, rowid),
							pos = t.p._index[id], key;
							if(t.p.treeGrid) {
								for(key in t.p.treeReader){
									if(t.p.treeReader.hasOwnProperty(key)) {
										delete lcdata[t.p.treeReader[key]];
									}
								}
							}
							if(pos !== undefined) {
								t.p.data[pos] = $.extend(true, t.p.data[pos], lcdata);
							}
							lcdata = null;
						}
					} catch (e) {
						success = false;
					}
				}
				if(success) {
					if(cp === 'string') {$(ind).addClass(cssp);} else if(cssp !== null && cp === 'object') {$(ind).css(cssp);}
					$(t).triggerHandler("jqGridAfterGridComplete");
				}
			});
			return success;
		},
		addRowData : function(rowid,rdata,pos,src) {
			if($.inArray( pos, ["first", "last", "before", "after"] ) === -1) {pos = "last";}
			var success = false, nm, row, rnc="", msc="", gi, si, ni,sind, i, v, prp="", aradd, cnm, cn, data, cm, id;
			if(rdata) {
				if($.isArray(rdata)) {
					aradd=true;
					//pos = "last";
					cnm = rowid;
				} else {
					rdata = [rdata];
					aradd = false;
				}
				this.each(function() {
					var t = this, datalen = rdata.length;
					ni = t.p.rownumbers===true ? 1 :0;
					gi = t.p.multiselect ===true ? 1 :0;
					si = t.p.subGrid===true ? 1 :0;
					if(!aradd) {
						if(rowid !== undefined) { rowid = String(rowid);}
						else {
							rowid = $.jgrid.randId();
							if(t.p.keyName !== false) {
								cnm = t.p.keyName;
								if(rdata[0][cnm] !== undefined) { rowid = rdata[0][cnm]; }
							}
						}
					}
					cn = t.p.altclass;
					var k = 0, cna = $(t).jqGrid('getStyleUI',t.p.styleUI+".base",'rowBox', true, 'jqgrow ui-row-'+ t.p.direction), lcdata = {}, classes,
					air = $.isFunction(t.p.afterInsertRow) ? true : false;
					if(ni) {
						rnc = $(t).jqGrid('getStyleUI',t.p.styleUI+".base",'rownumBox', false, 'jqgrid-rownum');
					}
					if(gi) {
						msc = $(t).jqGrid('getStyleUI',t.p.styleUI+".base",'multiBox', false, 'cbox');
					}
					while(k < datalen) {
						data = rdata[k];
						row=[];
						classes = cna;
						if(aradd) {
							try {
								rowid = data[cnm];
								if(rowid===undefined) {
									rowid = $.jgrid.randId();
								}
							}
							catch (e) {rowid = $.jgrid.randId();}
							classes += (t.p.altRows === true ?  (t.rows.length-1)%2 === 0 ? " " + cn : "" : "");
						}
						id = rowid;
						rowid  = t.p.idPrefix + rowid;
						if(ni){
							prp = t.formatCol(0,1,'',null,rowid, true);
							row[row.length] = "<td role=\"gridcell\" " + rnc +" "+prp+">0</td>";
						}
						if(gi) {
							v = "<input role=\"checkbox\" type=\"checkbox\""+" id=\"jqg_"+t.p.id+"_"+rowid+"\" "+msc+"/>";
							prp = t.formatCol(ni,1,'', null, rowid, true);
							row[row.length] = "<td role=\"gridcell\" "+prp+">"+v+"</td>";
						}
						if(si) {
							row[row.length] = $(t).jqGrid("addSubGridCell",gi+ni,1);
						}
						for(i = gi+si+ni; i < t.p.colModel.length;i++){
							cm = t.p.colModel[i];
							nm = cm.name;
							lcdata[nm] = data[nm];
							v = t.formatter( rowid, $.jgrid.getAccessor(data,nm), i, data );
							prp = t.formatCol(i,1,v, data, rowid, lcdata);
							row[row.length] = "<td role=\"gridcell\" "+prp+">"+v+"</td>";
						}
						row.unshift( t.constructTr(rowid, false, classes, lcdata, data ) );
						row[row.length] = "</tr>";
						if(t.rows.length === 0){
							$("table:first",t.grid.bDiv).append(row.join(''));
						} else {
							switch (pos) {
								case 'last':
									$(t.rows[t.rows.length-1]).after(row.join(''));
									sind = t.rows.length-1;
									break;
								case 'first':
									$(t.rows[0]).after(row.join(''));
									sind = 1;
									break;
								case 'after':
									sind = $(t).jqGrid('getGridRowById', src);
									if (sind) {
										if($(t.rows[sind.rowIndex+1]).hasClass("ui-subgrid")) { $(t.rows[sind.rowIndex+1]).after(row); }
										else { $(sind).after(row.join('')); }
										sind=sind.rowIndex + 1;
									}	
									break;
								case 'before':
									sind = $(t).jqGrid('getGridRowById', src);
									if(sind) {
										$(sind).before(row.join(''));
										sind=sind.rowIndex - 1;
									}
									break;
							}
						}
						if(t.p.subGrid===true) {
							$(t).jqGrid("addSubGrid",gi+ni, sind);
						}
						t.p.records++;
						t.p.reccount++;
						$(t).triggerHandler("jqGridAfterInsertRow", [rowid,data,data]);
						if(air) { t.p.afterInsertRow.call(t,rowid,data,data); }
						k++;
						if(t.p.datatype === 'local') {
							lcdata[t.p.localReader.id] = id;
							t.p._index[id] = t.p.data.length;
							t.p.data.push(lcdata);
							lcdata = {};
						}
					}
					if( t.p.altRows === true && !aradd) {
						if (pos === "last") {
							if ((t.rows.length-1)%2 === 0)  {$(t.rows[t.rows.length-1]).addClass(cn);}
						} else {
							$(t.rows).each(function(i){
								if(i % 2 ===0) { $(this).addClass(cn); }
								else { $(this).removeClass(cn); }
							});
						}
					}
					t.updatepager(true,true);
					success = true;
				});
			}
			return success;
		},
		footerData : function(action,data, format) {
			var nm, success=false, res={}, title;
			function isEmpty(obj) {
				var i;
				for(i in obj) {
					if (obj.hasOwnProperty(i)) { return false; }
				}
				return true;
			}
			if(action === undefined) { action = "get"; }
			if(typeof format !== "boolean") { format  = true; }
			action = action.toLowerCase();
			this.each(function(){
				var t = this, vl;
				if(!t.grid || !t.p.footerrow) {return false;}
				if(action === "set") { if(isEmpty(data)) { return false; } }
				success=true;
				$(this.p.colModel).each(function(i){
					nm = this.name;
					if(action === "set") {
						if( data[nm] !== undefined) {
							vl = format ? t.formatter( "", data[nm], i, data, 'edit') : data[nm];
							title = this.title ? {"title":$.jgrid.stripHtml(vl)} : {};
							$("tr.footrow td:eq("+i+")",t.grid.sDiv).html(vl).attr(title);
							success = true;
						}
					} else if(action === "get") {
						res[nm] = $("tr.footrow td:eq("+i+")",t.grid.sDiv).html();
					}
				});
			});
			return action === "get" ? res : success;
		},
		showHideCol : function(colname,show) {
			return this.each(function() {
				var $t = this, fndh=false, brd=$.jgrid.cell_width ? 0: $t.p.cellLayout, cw;
				if (!$t.grid ) {return;}
				if( typeof colname === 'string') {colname=[colname];}
				show = show !== "none" ? "" : "none";
				var sw = show === "" ? true :false,
				gh = $t.p.groupHeader && ($.isArray($t.p.groupHeader) || $.isFunction($t.p.groupHeader) );
				if(gh) { $($t).jqGrid('destroyGroupHeader', false); }
				$(this.p.colModel).each(function(i) {
					if ($.inArray(this.name,colname) !== -1 && this.hidden === sw) {
						if($t.p.frozenColumns === true && this.frozen === true) {
							return true;
						}
						$("tr[role=row]",$t.grid.hDiv).each(function(){
							$(this.cells[i]).css("display", show);
						});
						$($t.rows).each(function(){
							if (!$(this).hasClass("jqgroup")) {
								$(this.cells[i]).css("display", show);
							}
						});
						if($t.p.footerrow) { $("tr.footrow td:eq("+i+")", $t.grid.sDiv).css("display", show); }
						cw =  parseInt(this.width,10);
						if(show === "none") {
							$t.p.tblwidth -= cw+brd;
						} else {
							$t.p.tblwidth += cw+brd;
						}
						this.hidden = !sw;
						fndh=true;
						$($t).triggerHandler("jqGridShowHideCol", [sw,this.name,i]);
					}
				});
				if(fndh===true) {
					if($t.p.shrinkToFit === true && !isNaN($t.p.height)) { $t.p.tblwidth += parseInt($t.p.scrollOffset,10);}
					$($t).jqGrid("setGridWidth",$t.p.shrinkToFit === true ? $t.p.tblwidth : $t.p.width );
				}
				if( gh )  {
					var gHead = $.extend([],$t.p.groupHeader);
					$t.p.groupHeader = null;
					for(var k =0; k < gHead.length; k++) {
						$($t).jqGrid('setGroupHeaders', gHead[k]);
					}
				}
			});
		},
		hideCol : function (colname) {
			return this.each(function(){$(this).jqGrid("showHideCol",colname,"none");});
		},
		showCol : function(colname) {
			return this.each(function(){$(this).jqGrid("showHideCol",colname,"");});
		},
		remapColumns : function(permutation, updateCells, keepHeader) {
			function resortArray(a) {
				var ac;
				if (a.length) {
					ac = $.makeArray(a);
				} else {
					ac = $.extend({}, a);
				}
				$.each(permutation, function(i) {
					a[i] = ac[this];
				});
			}
			var ts = this.get(0);
			function resortRows(parent, clobj) {
				$(">tr"+(clobj||""), parent).each(function() {
					var row = this;
					var elems = $.makeArray(row.cells);
					$.each(permutation, function() {
						var e = elems[this];
						if (e) {
							row.appendChild(e);
						}
					});
				});
			}
			resortArray(ts.p.colModel);
			resortArray(ts.p.colNames);
			resortArray(ts.grid.headers);
			resortRows($("thead:first", ts.grid.hDiv), keepHeader && ":not(.ui-jqgrid-labels)");
			if (updateCells) {
				resortRows($("#"+$.jgrid.jqID(ts.p.id)+" tbody:first"), ".jqgfirstrow, tr.jqgrow, tr.jqfoot");
			}
			if (ts.p.footerrow) {
				resortRows($("tbody:first", ts.grid.sDiv));
			}
			if (ts.p.remapColumns) {
				if (!ts.p.remapColumns.length){
					ts.p.remapColumns = $.makeArray(permutation);
				} else {
					resortArray(ts.p.remapColumns);
				}
			}
			ts.p.lastsort = $.inArray(ts.p.lastsort, permutation);
			if(ts.p.treeGrid) { ts.p.expColInd = $.inArray(ts.p.expColInd, permutation); }
			$(ts).triggerHandler("jqGridRemapColumns", [permutation, updateCells, keepHeader]);
		},
		setGridWidth : function(nwidth, shrink) {
			return this.each(function(){
				if (!this.grid ) {return;}
				var $t = this, cw,
				initwidth = 0, brd=$.jgrid.cell_width ? 0: $t.p.cellLayout, lvc, vc=0, hs=false, scw=$t.p.scrollOffset, aw, gw=0, cr, bstw = $t.p.styleUI === 'Bootstrap' ? 2 : 0;
				if(typeof shrink !== 'boolean') {
					shrink=$t.p.shrinkToFit;
				}
				if(isNaN(nwidth)) {return;}
				nwidth = parseInt(nwidth,10); 
				$t.grid.width = $t.p.width = nwidth;
				$("#gbox_"+$.jgrid.jqID($t.p.id)).css("width",nwidth+"px");
				$("#gview_"+$.jgrid.jqID($t.p.id)).css("width",nwidth+"px");
				$($t.grid.bDiv).css("width",(nwidth - bstw) +"px");
				$($t.grid.hDiv).css("width",(nwidth - bstw) +"px");
				if($t.p.pager ) {
					$($t.p.pager).css("width",nwidth+"px");
				}
				if($t.p.toppager ) {
					$($t.p.toppager).css("width",(nwidth - bstw)+"px");
				}
				if($t.p.toolbar[0] === true){
					$($t.grid.uDiv).css("width",(nwidth - bstw)+"px");
					if($t.p.toolbar[1]==="both") {$($t.grid.ubDiv).css("width",(nwidth - bstw)+"px");}
				}
				if($t.p.footerrow) { 
					$($t.grid.sDiv).css("width",(nwidth - bstw)+"px"); 
				}
				if(shrink ===false && $t.p.forceFit === true) {$t.p.forceFit=false;}
				if(shrink===true) {
					$.each($t.p.colModel, function() {
						if(this.hidden===false){
							cw = this.widthOrg;
							initwidth += cw+brd;
							if(this.fixed) {
								gw += cw+brd;
							} else {
								vc++;
							}
						}
					});
					if(vc  === 0) { return; }
					$t.p.tblwidth = initwidth;
					aw = nwidth-brd*vc-gw;
					if(!isNaN($t.p.height)) {
						if($($t.grid.bDiv)[0].clientHeight < $($t.grid.bDiv)[0].scrollHeight || $t.rows.length === 1){
							hs = true;
							aw -= scw;
						}
					}
					initwidth =0;
					var cle = $t.grid.cols.length >0;
					$.each($t.p.colModel, function(i) {
						if(this.hidden === false && !this.fixed){
							cw = this.widthOrg;
							cw = Math.round(aw*cw/($t.p.tblwidth-brd*vc-gw));
							if (cw < 0) { return; }
							this.width =cw;
							initwidth += cw;
							$t.grid.headers[i].width=cw;
							$t.grid.headers[i].el.style.width=cw+"px";
							if($t.p.footerrow) { $t.grid.footers[i].style.width = cw+"px"; }
							if(cle) { $t.grid.cols[i].style.width = cw+"px"; }
							lvc = i;
						}
					});

					if (!lvc) { return; }

					cr =0;
					if (hs) {
						if(nwidth-gw-(initwidth+brd*vc) !== scw){
							cr = nwidth-gw-(initwidth+brd*vc)-scw;
						}
					} else if( Math.abs(nwidth-gw-(initwidth+brd*vc)) !== 1) {
						cr = nwidth-gw-(initwidth+brd*vc);
					}
					$t.p.colModel[lvc].width += cr;
					$t.p.tblwidth = initwidth+cr+brd*vc+gw;
					if($t.p.tblwidth > nwidth) {
						var delta = $t.p.tblwidth - parseInt(nwidth,10);
						$t.p.tblwidth = nwidth;
						cw = $t.p.colModel[lvc].width = $t.p.colModel[lvc].width-delta;
					} else {
						cw= $t.p.colModel[lvc].width;
					}
					$t.grid.headers[lvc].width = cw;
					$t.grid.headers[lvc].el.style.width=cw+"px";
					if(cle) { $t.grid.cols[lvc].style.width = cw+"px"; }
					if($t.p.footerrow) {
						$t.grid.footers[lvc].style.width = cw+"px";
					}
				}
				if($t.p.tblwidth) {
					$('table:first',$t.grid.bDiv).css("width",$t.p.tblwidth+"px");
					$('table:first',$t.grid.hDiv).css("width",$t.p.tblwidth+"px");
					$t.grid.hDiv.scrollLeft = $t.grid.bDiv.scrollLeft;
					if($t.p.footerrow) {
						$('table:first',$t.grid.sDiv).css("width",$t.p.tblwidth+"px");
					}
				}
			});
		},
		setGridHeight : function (nh) {
			return this.each(function (){
				var $t = this;
				if(!$t.grid) {return;}
				var bDiv = $($t.grid.bDiv);
				bDiv.css({height: nh+(isNaN(nh)?"":"px")});
				if($t.p.frozenColumns === true){
					//follow the original set height to use 16, better scrollbar width detection
					$('#'+$.jgrid.jqID($t.p.id)+"_frozen").parent().height(bDiv.height() - 16);
				}
				$t.p.height = nh;
				if ($t.p.scroll) { $t.grid.populateVisible(); }
			});
		},
		setCaption : function (newcap){
			return this.each(function(){
				var ctop = $(this).jqGrid('getStyleUI',this.p.styleUI+".common",'cornertop', true);
				this.p.caption=newcap;
				$(".ui-jqgrid-title, .ui-jqgrid-title-rtl",this.grid.cDiv).html(newcap);
				$(this.grid.cDiv).show();
				$(this.grid.hDiv).removeClass(ctop);
			});
		},
		setLabel : function(colname, nData, prop, attrp ){
			return this.each(function(){
				var $t = this, pos=-1;
				if(!$t.grid) {return;}
				if(colname != null) {
					if(isNaN(colname)) {
						$($t.p.colModel).each(function(i){
							if (this.name === colname) {
								pos = i;return false;
							}
						});
					} else {
						pos = parseInt(colname,10);
					}
				} else { return; }
				if(pos>=0) {
					var thecol = $("tr.ui-jqgrid-labels th:eq("+pos+")",$t.grid.hDiv);
					if (nData){
						var ico = $(".s-ico",thecol);
						$("[id^=jqgh_]",thecol).empty().html(nData).append(ico);
						$t.p.colNames[pos] = nData;
					}
					if (prop) {
						if(typeof prop === 'string') {$(thecol).addClass(prop);} else {$(thecol).css(prop);}
					}
					if(typeof attrp === 'object') {$(thecol).attr(attrp);}
				}
			});
		},
		setSortIcon : function(colname, position) {
			return this.each(function(){
				var $t = this, pos=-1, addpix = 8;
				if(!$t.grid) {return;}
				if(colname != null) {
					if(isNaN(colname)) {
						$($t.p.colModel).each(function(i){
							if (this.name === colname) {
								pos = i;return false;
							}
						});
					} else {
						pos = parseInt(colname,10);
					}
				} else { 
					return; 
				}
				if(pos>=0) {
					var thecol = $("tr.ui-jqgrid-labels th:eq("+pos+")",$t.grid.hDiv);
					if(position === 'left') {
						thecol.find(".s-ico").css("float", "left");
					} else {
						thecol.find(".s-ico").css("float", "none");
					}
				}
			});		
		},
		setCell : function(rowid,colname,nData,cssp,attrp, forceupd) {
			return this.each(function(){
				var $t = this, pos =-1,v, title;
				if(!$t.grid) {return;}
				if(isNaN(colname)) {
					$($t.p.colModel).each(function(i){
						if (this.name === colname) {
							pos = i;return false;
						}
					});
				} else {pos = parseInt(colname,10);}
				if(pos>=0) {
					var ind = $($t).jqGrid('getGridRowById', rowid); 
					if (ind){
						var tcell = $("td:eq("+pos+")",ind), cl=0, rawdat=[];
						if(nData !== "" || forceupd === true ) {
							if(ind.cells !== undefined) {
								while(cl<ind.cells.length) {
									// slow down speed
									rawdat.push(ind.cells[cl].innerHTML);
									cl++;
								}
							}
							v = $t.formatter(rowid, nData, pos, rawdat, 'edit');
							title = $t.p.colModel[pos].title ? {"title":$.jgrid.stripHtml(v)} : {};
							if($t.p.treeGrid && $(".tree-wrap",$(tcell)).length>0) {
								$("span",$(tcell)).html(v).attr(title);
							} else {
								$(tcell).html(v).attr(title);
							}
							if($t.p.datatype === "local") {
								var cm = $t.p.colModel[pos], index;
								nData = cm.formatter && typeof cm.formatter === 'string' && cm.formatter === 'date' ? $.unformat.date.call($t,nData,cm) : nData;
								index = $t.p._index[$.jgrid.stripPref($t.p.idPrefix, rowid)];
								if(index !== undefined) {
									$t.p.data[index][cm.name] = nData;
								}
							}
						}
						if(typeof cssp === 'string'){
							$(tcell).addClass(cssp);
						} else if(cssp) {
							$(tcell).css(cssp);
						}
						if(typeof attrp === 'object') {$(tcell).attr(attrp);}
					}
				}
			});
		},
		getCell : function(rowid,col) {
			var ret = false;
			this.each(function(){
				var $t=this, pos=-1, cnm, ind;
				if(!$t.grid) {return;}
				cnm = col;
				if(isNaN(col)) {
					$($t.p.colModel).each(function(i){
						if (this.name === col) {
							cnm = this.name;
							pos = i;
							return false;
						}
					});
				} else {
					pos = parseInt(col,10);
				}
				if(pos>=0) {
					ind = $($t).jqGrid('getGridRowById', rowid);
					if(ind) {
						try {
							ret = $.unformat.call($t,$("td:eq("+pos+")",ind),{rowId:ind.id, colModel:$t.p.colModel[pos]},pos);
						} catch (e){
							ret = $.jgrid.htmlDecode($("td:eq("+pos+")",ind).html());
						}
					}
					if($t.p.treeGrid && ret && $t.p.ExpandColumn === cnm) {
						ret = $( "<div>" + ret +"</div>").find("span:first").html();
					}
				}
			});
			return ret;
		},
		getCol : function (col, obj, mathopr) {
			var ret = [], val, sum=0, min, max, v;
			obj = typeof obj !== 'boolean' ? false : obj;
			if(mathopr === undefined) { mathopr = false; }
			this.each(function(){
				var $t=this, pos=-1;
				if(!$t.grid) {return;}
				if(isNaN(col)) {
					$($t.p.colModel).each(function(i){
						if (this.name === col) {
							pos = i;return false;
						}
					});
				} else {pos = parseInt(col,10);}
				if(pos>=0) {
					var ln = $t.rows.length, i =0, dlen=0;
					if (ln && ln>0){
						while(i<ln){
							if($($t.rows[i]).hasClass('jqgrow')) {
								try {
									val = $.unformat.call($t,$($t.rows[i].cells[pos]),{rowId:$t.rows[i].id, colModel:$t.p.colModel[pos]},pos);
								} catch (e) {
									val = $.jgrid.htmlDecode($t.rows[i].cells[pos].innerHTML);
								}
								if(mathopr) {
									v = parseFloat(val);
									if(!isNaN(v)) {
										sum += v;
										if (max === undefined) {max = min = v;}
										min = Math.min(min, v);
										max = Math.max(max, v);
										dlen++;
									}
								}
								else if(obj) { ret.push( {id:$t.rows[i].id,value:val} ); }
								else { ret.push( val ); }
							}
							i++;
						}
						if(mathopr) {
							switch(mathopr.toLowerCase()){
								case 'sum': ret =sum; break;
								case 'avg': ret = sum/dlen; break;
								case 'count': ret = (ln-1); break;
								case 'min': ret = min; break;
								case 'max': ret = max; break;
							}
						}
					}
				}
			});
			return ret;
		},
		clearGridData : function(clearfooter) {
			return this.each(function(){
				var $t = this;
				if(!$t.grid) {return;}
				if(typeof clearfooter !== 'boolean') { clearfooter = false; }
				if($t.p.deepempty) {$("#"+$.jgrid.jqID($t.p.id)+" tbody:first tr:gt(0)").remove();}
				else {
					var trf = $("#"+$.jgrid.jqID($t.p.id)+" tbody:first tr:first")[0];
					$("#"+$.jgrid.jqID($t.p.id)+" tbody:first").empty().append(trf);
				}
				if($t.p.footerrow && clearfooter) { $(".ui-jqgrid-ftable td",$t.grid.sDiv).html("&#160;"); }
				$t.p.selrow = null; $t.p.selarrrow= []; $t.p.savedRow = [];
				$t.p.records = 0;$t.p.page=1;$t.p.lastpage=0;$t.p.reccount=0;
				$t.p.data = []; $t.p._index = {};
				$t.updatepager(true,false);
			});
		},
		getInd : function(rowid,rc){
			var ret =false,rw;
			this.each(function(){
				rw = $(this).jqGrid('getGridRowById', rowid);
				if(rw) {
					ret = rc===true ? rw: rw.rowIndex;
				}
			});
			return ret;
		},
		bindKeys : function( settings ){
			var o = $.extend({
				onEnter: null,
				onSpace: null,
				onLeftKey: null,
				onRightKey: null,
				scrollingRows : true
			},settings || {});
			return this.each(function(){
				var $t = this;
				if( !$('body').is('[role]') ){$('body').attr('role','application');}
				$t.p.scrollrows = o.scrollingRows;
				$($t).keydown(function(event){
					var target = $($t).find('tr[tabindex=0]')[0], id, r, mind,
					expanded = $t.p.treeReader.expanded_field;
					//check for arrow keys
					if(target) {
						mind = $t.p._index[$.jgrid.stripPref($t.p.idPrefix, target.id)];
						if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){
							// up key
							if(event.keyCode === 38 ){
								r = target.previousSibling;
								id = "";
								if(r) {
									if($(r).is(":hidden")) {
										while(r) {
											r = r.previousSibling;
											if(!$(r).is(":hidden") && $(r).hasClass('jqgrow')) {id = r.id;break;}
										}
									} else {
										id = r.id;
									}
								}
								$($t).jqGrid('setSelection', id, true, event);
								event.preventDefault();
							}
							//if key is down arrow
							if(event.keyCode === 40){
								r = target.nextSibling;
								id ="";
								if(r) {
									if($(r).is(":hidden")) {
										while(r) {
											r = r.nextSibling;
											if(!$(r).is(":hidden") && $(r).hasClass('jqgrow') ) {id = r.id;break;}
										}
									} else {
										id = r.id;
									}
								}
								$($t).jqGrid('setSelection', id, true, event);
								event.preventDefault();
							}
							// left
							if(event.keyCode === 37 ){
								if($t.p.treeGrid && $t.p.data[mind][expanded]) {
									$(target).find("div.treeclick").trigger('click');
								}
								$($t).triggerHandler("jqGridKeyLeft", [$t.p.selrow]);
								if($.isFunction(o.onLeftKey)) {
									o.onLeftKey.call($t, $t.p.selrow);
								}
							}
							// right
							if(event.keyCode === 39 ){
								if($t.p.treeGrid && !$t.p.data[mind][expanded]) {
									$(target).find("div.treeclick").trigger('click');
								}
								$($t).triggerHandler("jqGridKeyRight", [$t.p.selrow]);
								if($.isFunction(o.onRightKey)) {
									o.onRightKey.call($t, $t.p.selrow);
								}
							}
						}
						//check if enter was pressed on a grid or treegrid node
						else if( event.keyCode === 13 ){
							$($t).triggerHandler("jqGridKeyEnter", [$t.p.selrow]);
							if($.isFunction(o.onEnter)) {
								o.onEnter.call($t, $t.p.selrow);
							}
						} else if(event.keyCode === 32) {
							$($t).triggerHandler("jqGridKeySpace", [$t.p.selrow]);
							if($.isFunction(o.onSpace)) {
								o.onSpace.call($t, $t.p.selrow);
							}
						}
					}
				});
			});
		},
		unbindKeys : function(){
			return this.each(function(){
				$(this).off('keydown');
			});
		},
		getLocalRow : function (rowid) {
			var ret = false, ind;
			this.each(function(){
				if(rowid !== undefined) {
					ind = this.p._index[$.jgrid.stripPref(this.p.idPrefix, rowid)];
					if(ind >= 0 ) {
						ret = this.p.data[ind];
					}
				}
			});
			return ret;
		},
		progressBar : function ( p ) {
			p = $.extend({
				htmlcontent : "",
				method : "hide",
				loadtype : "disable" 
			}, p || {});
			return this.each(function(){
				var sh = p.method==="show" ? true : false,
				loadDiv = $("#load_"+$.jgrid.jqID(this.p.id)), 
				offsetParent, top, 
				scrollTop = $(window).scrollTop();
				if(p.htmlcontent !== "") {
					loadDiv.html( p.htmlcontent );
				}
				switch(p.loadtype) {
					case "disable":
						break;
					case "enable":
						loadDiv.toggle( sh );
						break;
					case "block":
						$("#lui_"+$.jgrid.jqID(this.p.id)).toggle( sh );
						loadDiv.toggle( sh );
						break;
				}
				if (loadDiv.is(':visible')) {
					offsetParent = loadDiv.offsetParent();
					loadDiv.css('top', '');
					if (loadDiv.offset().top < scrollTop) {
						top = Math.min(
							10 + scrollTop - offsetParent.offset().top,
							offsetParent.height() - loadDiv.height()
						);
						loadDiv.css('top', top + 'px');
					}
				}
			});
		},
		getColProp : function(colname){
			var ret ={}, $t = this[0];
			if ( !$t.grid ) { return false; }
			var cM = $t.p.colModel, i;
			for ( i=0;i<cM.length;i++ ) {
				if ( cM[i].name === colname ) {
					ret = cM[i];
					break;
				}
			}
			return ret;
		},
		setColProp : function(colname, obj){
			//do not set width will not work
			return this.each(function(){
				if ( this.grid ) {
					if ( obj ) {
						var cM = this.p.colModel, i;
						for ( i=0;i<cM.length;i++ ) {
							if ( cM[i].name === colname ) {
								$.extend(true, this.p.colModel[i],obj);
								break;
							}
						}
					}
				}
			});
		},
		sortGrid : function(colname,reload, sor){
			return this.each(function(){
				var $t=this,idx=-1,i, sobj=false;
				if ( !$t.grid ) { return;}
				if ( !colname ) { colname = $t.p.sortname; }
				for ( i=0;i<$t.p.colModel.length;i++ ) {
					if ( $t.p.colModel[i].index === colname || $t.p.colModel[i].name === colname ) {
						idx = i;
						if($t.p.frozenColumns === true && $t.p.colModel[i].frozen === true) {
							sobj = $t.grid.fhDiv.find("#" + $t.p.id + "_" + colname);
						}
						break;
					}
				}
				if ( idx !== -1 ){
					var sort = $t.p.colModel[idx].sortable;
					if(!sobj) {
						sobj = $t.grid.headers[idx].el;
					}
					if ( typeof sort !== 'boolean' ) { sort =  true; }
					if ( typeof reload !=='boolean' ) { reload = false; }
					if ( sort ) { $t.sortData("jqgh_"+$t.p.id+"_" + colname, idx, reload, sor, sobj); }
				}
			});
		},
		setGridState : function(state) {
			return this.each(function(){
				if ( !this.grid ) {return;}
				var $t = this,
				open = $(this).jqGrid('getStyleUI',this.p.styleUI+".base",'icon_caption_open', true),
				close = $(this).jqGrid('getStyleUI',this.p.styleUI+".base",'icon_caption_close', true);

				if(state === 'hidden'){
					$(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv","#gview_"+$.jgrid.jqID($t.p.id)).slideUp("fast");
					if($t.p.pager) {$($t.p.pager).slideUp("fast");}
					if($t.p.toppager) {$($t.p.toppager).slideUp("fast");}
					if($t.p.toolbar[0]===true) {
						if( $t.p.toolbar[1] === 'both') {
							$($t.grid.ubDiv).slideUp("fast");
						}
						$($t.grid.uDiv).slideUp("fast");
					}
					if($t.p.footerrow) { $(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID($t.p.id)).slideUp("fast"); }
					$(".ui-jqgrid-headlink",$t.grid.cDiv).removeClass( open ).addClass( close );
					$t.p.gridstate = 'hidden';
				} else if(state === 'visible') {
					$(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID($t.p.id)).slideDown("fast");
					if($t.p.pager) {$($t.p.pager).slideDown("fast");}
					if($t.p.toppager) {$($t.p.toppager).slideDown("fast");}
					if($t.p.toolbar[0]===true) {
						if( $t.p.toolbar[1] === 'both') {
							$($t.grid.ubDiv).slideDown("fast");
						}
						$($t.grid.uDiv).slideDown("fast");
					}
					if($t.p.footerrow) { $(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID($t.p.id)).slideDown("fast"); }
					$(".ui-jqgrid-headlink",$t.grid.cDiv).removeClass( close ).addClass( open );
					$t.p.gridstate = 'visible';
				}

			});
		},
		setFrozenColumns : function () {
			return this.each(function() {
				if ( !this.grid ) {return;}
				var $t = this, cm = $t.p.colModel,i=0, len = cm.length, maxfrozen = -1, frozen= false,
				hd= $($t).jqGrid('getStyleUI',$t.p.styleUI+".base",'headerDiv', true, 'ui-jqgrid-hdiv'),
				hover = $($t).jqGrid('getStyleUI',$t.p.styleUI+".common",'hover', true);
				// TODO treeGrid and grouping  Support
				if($t.p.subGrid === true || $t.p.treeGrid === true || $t.p.cellEdit === true || $t.p.sortable || $t.p.scroll )
				{
					return;
				}
				if($t.p.rownumbers) { i++; }
				if($t.p.multiselect) { i++; }
				
				// get the max index of frozen col
				while(i<len)
				{
					// from left, no breaking frozen
					if(cm[i].frozen === true)
					{
						frozen = true;
						maxfrozen = i;
					} else {
						break;
					}
					i++;
				}
				if( maxfrozen>=0 && frozen) {
					var top = $t.p.caption ? $($t.grid.cDiv).outerHeight() : 0,
					hth = $(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID($t.p.id)).height();
					//headers
					if($t.p.toppager) {
						top = top + $($t.grid.topDiv).outerHeight();
					}
					if($t.p.toolbar[0] === true) {
						if($t.p.toolbar[1] !== "bottom") {
							top = top + $($t.grid.uDiv).outerHeight();
						}
					}
					$t.grid.fhDiv = $('<div style="position:absolute;' + ($t.p.direction === "rtl" ? 'right:0;' : 'left:0;') + 'top:'+top+'px;height:'+hth+'px;" class="frozen-div ' + hd +'"></div>');
					$t.grid.fbDiv = $('<div style="position:absolute;' + ($t.p.direction === "rtl" ? 'right:0;' : 'left:0;') + 'top:'+(parseInt(top,10)+parseInt(hth,10) + 1)+'px;overflow-y:hidden" class="frozen-bdiv ui-jqgrid-bdiv"></div>');
					$("#gview_"+$.jgrid.jqID($t.p.id)).append($t.grid.fhDiv);
					var htbl = $(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID($t.p.id)).clone(true);
					// groupheader support - only if useColSpanstyle is false
					if($t.p.groupHeader) {
						$("tr.jqg-first-row-header, tr.jqg-third-row-header", htbl).each(function(){
							$("th:gt("+maxfrozen+")",this).remove();
						});
						var swapfroz = -1, fdel = -1, cs, rs;
						$("tr.jqg-second-row-header th", htbl).each(function(){
							cs= parseInt($(this).attr("colspan"),10);
							rs= parseInt($(this).attr("rowspan"),10);
							if(rs) {
								swapfroz++;
								fdel++;
							}
							if(cs) {
								swapfroz = swapfroz+cs;
								fdel++;
							}
							if(swapfroz === maxfrozen) {
								fdel = maxfrozen;
								return false;
							}
						});
						if(swapfroz !== maxfrozen) {
							fdel = maxfrozen;
						}
						$("tr.jqg-second-row-header", htbl).each(function(){
							$("th:gt("+fdel+")",this).remove();
						});
					} else {
						$("tr",htbl).each(function(){
							$("th:gt("+maxfrozen+")",this).remove();
						});
					}
					$(htbl).width(1);
					if(!$.jgrid.msie()) { $(htbl).css("height","100%"); }
					// resizing stuff
					$($t.grid.fhDiv).append(htbl)
					.mousemove(function (e) {
						if($t.grid.resizing){ $t.grid.dragMove(e);return false; }
					});
					if($t.p.footerrow) {
						var hbd = $(".ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID($t.p.id)).height();

						$t.grid.fsDiv = $('<div style="position:absolute;left:0px;top:'+(parseInt(top,10)+parseInt(hth,10) + parseInt(hbd,10)+1)+'px;" class="frozen-sdiv ui-jqgrid-sdiv"></div>');
						$("#gview_"+$.jgrid.jqID($t.p.id)).append($t.grid.fsDiv);
						var ftbl = $(".ui-jqgrid-ftable","#gview_"+$.jgrid.jqID($t.p.id)).clone(true);
						$("tr",ftbl).each(function(){
							$("td:gt("+maxfrozen+")",this).remove();
						});
						$(ftbl).width(1);
						$($t.grid.fsDiv).append(ftbl);
					}
					$($t).on('jqGridResizeStop.setFrozenColumns', function (e, w, index) {
						var rhth = $(".ui-jqgrid-htable",$t.grid.fhDiv);
						$("th:eq("+index+")",rhth).width( w ); 
						var btd = $(".ui-jqgrid-btable",$t.grid.fbDiv);
						$("tr:first td:eq("+index+")",btd).width( w );
						if($t.p.footerrow) {
							var ftd = $(".ui-jqgrid-ftable",$t.grid.fsDiv);
							$("tr:first td:eq("+index+")",ftd).width( w );
						}
					});
					
					// data stuff
					//TODO support for setRowData
					$("#gview_"+$.jgrid.jqID($t.p.id)).append($t.grid.fbDiv);
					
					$($t.grid.fbDiv).on('mousewheel DOMMouseScroll', function (e) {
						var st = $($t.grid.bDiv).scrollTop();
						if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
							//up
							$($t.grid.bDiv).scrollTop( st - 25 );
						} else {
							//down
							$($t.grid.bDiv).scrollTop( st + 25 );
						}
						e.preventDefault();
					});
					
					if($t.p.hoverrows === true) {
						$("#"+$.jgrid.jqID($t.p.id)).off('mouseover mouseout');
					}
					$($t).on('jqGridAfterGridComplete.setFrozenColumns', function () {
						$("#"+$.jgrid.jqID($t.p.id)+"_frozen").remove();
						$($t.grid.fbDiv).height($($t.grid.bDiv).height()-14);
						// find max height
						var mh = [];
						$("#"+$.jgrid.jqID($t.p.id) + " tr[role=row].jqgrow").each(function(){
							mh.push( $("td:visible:first", this).height() );
						});

						var btbl = $("#"+$.jgrid.jqID($t.p.id)).clone(true);
						$("tr[role=row]",btbl).each(function(){
							$("td[role=gridcell]:gt("+maxfrozen+")",this).remove();
						});

						$(btbl).width(1).attr("id",$t.p.id+"_frozen");
						$($t.grid.fbDiv).append(btbl);
						// set the height
						$("tr[role=row].jqgrow",btbl).each(function(i, n){
							$("td:not(.jqgrid-rownum):visible:first", this).height( mh[i] );
						});

						if($t.p.hoverrows === true) {
							$("tr.jqgrow", btbl).hover(
								function(){ $(this).addClass( hover ); $("#"+$.jgrid.jqID(this.id), "#"+$.jgrid.jqID($t.p.id)).addClass( hover ); },
								function(){ $(this).removeClass( hover ); $("#"+$.jgrid.jqID(this.id), "#"+$.jgrid.jqID($t.p.id)).removeClass( hover ); }
							);
							$("tr.jqgrow", "#"+$.jgrid.jqID($t.p.id)).hover(
								function(){ $(this).addClass( hover ); $("#"+$.jgrid.jqID(this.id), "#"+$.jgrid.jqID($t.p.id)+"_frozen").addClass( hover );},
								function(){ $(this).removeClass( hover ); $("#"+$.jgrid.jqID(this.id), "#"+$.jgrid.jqID($t.p.id)+"_frozen").removeClass( hover ); }
							);
						}
						btbl=null;
					});
					if(!$t.grid.hDiv.loading) {
						$($t).triggerHandler("jqGridAfterGridComplete");
					}
					$t.p.frozenColumns = true;
				}
			});
		},
		destroyFrozenColumns :  function() {
			return this.each(function() {
				if ( !this.grid ) {return;}
				if(this.p.frozenColumns === true) {
					var $t = this,
					hover = $($t).jqGrid('getStyleUI',$t.p.styleUI+".common",'hover', true);
					$($t.grid.fhDiv).remove();
					$($t.grid.fbDiv).remove();
					$t.grid.fhDiv = null; $t.grid.fbDiv=null;
					if($t.p.footerrow) {
						$($t.grid.fsDiv).remove();
						$t.grid.fsDiv = null;
					}
					$(this).off('.setFrozenColumns');
					if($t.p.hoverrows === true) {
						var ptr;
						$("#"+$.jgrid.jqID($t.p.id)).on({
							'mouseover': function(e) {
								ptr = $(e.target).closest("tr.jqgrow");
								if($(ptr).attr("class") !== "ui-subgrid") {
									$(ptr).addClass( hover );
								}
							},
							'mouseout' : function(e) {
								ptr = $(e.target).closest("tr.jqgrow");
								$(ptr).removeClass( hover );
							}
						});
					}
					this.p.frozenColumns = false;
				}
			});
		},
		resizeColumn : function (iCol, newWidth) {
			return this.each(function(){
				var grid = this.grid, p = this.p, cm = p.colModel, i, cmLen = cm.length, diff, diffnv;
				if(typeof iCol === "string" ) {
					for(i = 0; i < cmLen; i++) {
						if(cm[i].name === iCol) {
							iCol = i;
							break;
						}
					}
				} else {
					iCol = parseInt( iCol, 10 );
				}
				newWidth = parseInt( newWidth, 10);
				// filters
				if(typeof iCol !== "number" || iCol < 0 || iCol > cm.length-1 || typeof newWidth !== "number" ) { 
					return; 
				}
				
				if( newWidth < p.minColWidth ) { return; }
				
				if( p.forceFit ) {
					p.nv = 0;
					for (i = iCol+1; i < cmLen; i++){
						if(cm[i].hidden !== true ) {
							p.nv = i - iCol; 
							break;
						}
					}
				}
				// use resize stuff
				grid.resizing = {idx : iCol };
				diff = newWidth - grid.headers[iCol].width;
				if(p.forceFit) {
					diffnv = grid.headers[ iCol + p.nv].width - diff;
					if(diffnv < p.minColWidth) { return; }
					grid.headers[ iCol + p.nv].newWidth = grid.headers[ iCol + p.nv].width - diff;
				} 
				grid.newWidth = p.tblwidth + diff;
				grid.headers[ iCol ].newWidth = newWidth;
				grid.dragEnd( false );
				
			});
		},
		getStyleUI : function( styleui, classui, notclasstag, gridclass) {
			var ret = "", q = "";
			try {
				var stylemod = styleui.split(".");
				if(!notclasstag) {
					ret = "class=";
					q = "\"";
				}
				if(gridclass == null) {
					gridclass = "";
				}
				switch(stylemod.length) {
					case 1 :
						ret += q + $.trim(gridclass + " " + $.jgrid.styleUI[stylemod[0]][classui] + q);
						break;
					case 2 :
						ret += q + $.trim(gridclass + " " + $.jgrid.styleUI[stylemod[0]][stylemod[1]][classui] + q);
				}
			} catch (cls) {
				ret = "";
			}
			return ret;
		},
		resizeGrid : function (timeout) {
			return this.each(function(){
				var $t = this;
				if(timeout === undefined) {
					timeout = 500;
				}
				setTimeout(function(){
					try {
						var winwidth = $(window).width(),
						parentwidth = $("#gbox_"+$.jgrid.jqID($t.p.id)).parent().width(),
						ww = $t.p.width;
						if( (winwidth-parentwidth) > 3 ) {
							ww = parentwidth;
						} else {
							ww = winwidth;
						}
						$("#"+$.jgrid.jqID($t.p.id)).jqGrid('setGridWidth', ww);
					} catch(e){}
				}, timeout);
			});
		}
	});
	//module end
	}));


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Bulgarian Translation 
	 * Tony Tomov tony@trirand.com
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["bg"] = {
		defaults : {
			recordtext: "{0} - {1} от {2}",
			emptyrecords: "Няма запис(и)",
			loadtext: "Зареждам...",
			savetext: "Записвам...",
			pgtext : "Стр. {0} от {1}",
			pgfirst : "Първа Стр.",
			pglast : "Последна Стр.",
			pgnext : "Следваща Стр.",
			pgprev : "Предишна Стр.",
			pgrecs : "Брой записи на Стр.",
			showhide: "Свиване/Разтягане на таблицата",
			// mobile
			pagerCaption : "Таблица::Настр. Страница",
			pageText : "Страница:",
			recordPage : "Записи на стр.",
			nomorerecs : "Няма повече записи...",
			scrollPullup: "Издърпайте нагоре за повече...",
			scrollPulldown : "Дръпнете надолу за опресняване...",
			scrollRefresh : "Освободете за да опресните..."
		},
		search : {
			caption: "Търсене...",
			Find: "Намери",
			Reset: "Изчисти",
			odata: [{ oper:'eq', text:"равно"},{ oper:'ne', text:"различно"},{ oper:'lt', text:"по-малко"},{ oper:'le', text:"по-малко или="},{ oper:'gt', text:"по-голямо"},{ oper:'ge', text:"по-голямо или ="},{ oper:'bw', text:"започва с"},{ oper:'bn', text:"не започва с"},{ oper:'in', text:"се намира в"},{ oper:'ni', text:"не се намира в"},{ oper:'ew', text:"завършва с"},{ oper:'en', text:"не завършава с"},{ oper:'cn', text:"съдържа"},{ oper:'nc', text:"не съдържа"},{ oper:'nu', text:'е NULL'},{ oper:'nn', text:'не е NULL'}, {oper:'bt', text:'между'}],
		    groupOps: [	{ op: "AND", text: "&nbsp;И " },	{ op: "OR",  text: "ИЛИ" }	],
			operandTitle : "Натисни за избор на операнд.",
			resetTitle : "Изчисти стойността",
			addsubgrup : "Добави група",
			addrule : "Добави правило",
			delgroup : "Изтрий група",
			delrule : "Изтрий правило"
		},
		edit : {
			addCaption: "Нов Запис",
			editCaption: "Редакция Запис",
			bSubmit: "Запиши",
			bCancel: "Изход",
			bClose: "Затвори",
			saveData: "Данните са променени! Да съхраня ли промените?",
			bYes : "Да",
			bNo : "Не",
			bExit : "Отказ",
			msg: {
				required:"Полето е задължително",
				number:"Въведете валидно число!",
				minValue:"стойността трябва да е по-голяма или равна от",
				maxValue:"стойността трябва да е по-малка или равна от",
				email: "не е валиден ел. адрес",
				integer: "Въведете валидно цяло число",
				date: "Въведете валидна дата",
				url: "e невалиден URL. Изискава се префикс('http://' или 'https://')",
				nodefined : " е недефинирана!",
				novalue : " изисква връщане на стойност!",
				customarray : "Потреб. Функция трябва да върне масив!",
				customfcheck : "Потребителска функция е задължителна при този тип елемент!"
			}
		},
		view : {
			caption: "Преглед запис",
			bClose: "Затвори"
		},
		del : {
			caption: "Изтриване",
			msg: "Да изтрия ли избраният запис?",
			bSubmit: "Изтрий",
			bCancel: "Отказ"
		},
		nav : {
			edittext: " ",
			edittitle: "Редакция избран запис",
			addtext:" ",
			addtitle: "Добавяне нов запис",
			deltext: " ",
			deltitle: "Изтриване избран запис",
			searchtext: " ",
			searchtitle: "Търсене запис(и)",
			refreshtext: "",
			refreshtitle: "Обнови таблица",
			alertcap: "Предупреждение",
			alerttext: "Моля, изберете запис",
			viewtext: "",
			viewtitle: "Преглед избран запис",
			savetext: "",
			savetitle: "Съхрани запис",
			canceltext: "",
			canceltitle : "Отказ редакция",
			selectcaption : "Действия..."
		},
		col : {
			caption: "Избери колони",
			bSubmit: "Ок",
			bCancel: "Изход"	
		},
		errors : {
			errcap : "Грешка",
			nourl : "Няма посочен url адрес",
			norecords: "Няма запис за обработка",
			model : "Модела не съответства на имената!"	
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:" лв.", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Нед", "Пон", "Вт", "Ср", "Чет", "Пет", "Съб",
					"Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"
				],
				monthNames: [
					"Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек",
					"Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
				],
				AmPm : ["","","",""],
				S: function (j) {
					if(j==7 || j==8 || j== 27 || j== 28) {
						return 'ми';
					}
					return ['ви', 'ри', 'ти'][Math.min((j - 1) % 10, 2)];
				},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Сортирай възходящо",
			sortdesc : "Сортирай низходящо",
			columns : "Колони",
			filter : "Филтрирай",
			grouping : "Групирай по",
			ungrouping : "Разгрупиране",
			searchTitle : "Търси данни със стойност, която",
			freeze : "Неподвижна",
			unfreeze : "Отмяна неподвижност",
			reorder : "Премести за пренареждане"
		}
	};
	}));


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Catalan Translation
	 * Traducció jqGrid en Catatà per Faserline, S.L.
	 * http://www.faserline.com
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["ca"] = {
		defaults : {
			recordtext: "Mostrant {0} - {1} de {2}",
		    emptyrecords: "Sense registres que mostrar",
			loadtext: "Carregant...",
			savetext: "Saving...",
			pgtext : "Pàgina {0} de {1}",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Cerca...",
			Find: "Cercar",
			Reset: "Buidar",
		    odata: [{ oper:'eq', text:"equal"},{ oper:'ne', text:"not equal"},{ oper:'lt', text:"less"},{ oper:'le', text:"less or equal"},{ oper:'gt', text:"greater"},{ oper:'ge', text:"greater or equal"},{ oper:'bw', text:"begins with"},{ oper:'bn', text:"does not begin with"},{ oper:'in', text:"is in"},{ oper:'ni', text:"is not in"},{ oper:'ew', text:"ends with"},{ oper:'en', text:"does not end with"},{ oper:'cn', text:"contains"},{ oper:'nc', text:"does not contain"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "tot" },	{ op: "OR",  text: "qualsevol" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"		
		},
		edit : {
			addCaption: "Afegir registre",
			editCaption: "Modificar registre",
			bSubmit: "Guardar",
			bCancel: "Cancelar",
			bClose: "Tancar",
			saveData: "Les dades han canviat. Guardar canvis?",
			bYes : "Yes",
			bNo : "No",
			bExit : "Cancel",
			msg: {
			    required:"Camp obligatori",
			    number:"Introdueixi un nombre",
			    minValue:"El valor ha de ser major o igual que ",
			    maxValue:"El valor ha de ser menor o igual a ",
			    email: "no és una direcció de correu vàlida",
			    integer: "Introdueixi un valor enter",
				date: "Introdueixi una data correcta ",
				url: "no és una URL vàlida. Prefix requerit ('http://' or 'https://')",
				nodefined : " is not defined!",
				novalue : " return value is required!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
			}
		},
		view : {
			caption: "Veure registre",
			bClose: "Tancar"
		},
		del : {
			caption: "Eliminar",
			msg: "¿Desitja eliminar els registres seleccionats?",
			bSubmit: "Eliminar",
			bCancel: "Cancelar"
		},
		nav : {
			edittext: " ",
			edittitle: "Modificar fila seleccionada",
			addtext:" ",
			addtitle: "Agregar nova fila",
			deltext: " ",
			deltitle: "Eliminar fila seleccionada",
			searchtext: " ",
			searchtitle: "Cercar informació",
			refreshtext: "",
			refreshtitle: "Refrescar taula",
			alertcap: "Avís",
			alerttext: "Seleccioni una fila",
			viewtext: " ",
			viewtitle: "Veure fila seleccionada",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
	// setcolumns module
		col : {
			caption: "Mostrar/ocultar columnes",
			bSubmit: "Enviar",
			bCancel: "Cancelar"	
		},
		errors : {
			errcap : "Error",
			nourl : "No s'ha especificat una URL",
			norecords: "No hi ha dades per processar",
			model : "Les columnes de noms són diferents de les columnes del model"
		},
		formatter : {
			integer : {thousandsSeparator: ".", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds",
					"Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"
				],
				monthNames: [
					"Gen", "Febr", "Març", "Abr", "Maig", "Juny", "Jul", "Ag", "Set", "Oct", "Nov", "Des",
					"Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd-m-Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
			        ISO8601Long:"Y-m-d H:i:s",
			        ISO8601Short:"Y-m-d",
			        ShortDate: "n/j/Y",
			        LongDate: "l, F d, Y",
			        FullDateTime: "l, F d, Y g:i:s A",
			        MonthDay: "F d",
			        ShortTime: "g:i A",
			        LongTime: "g:i:s A",
			        SortableDateTime: "Y-m-d\\TH:i:s",
			        UniversalSortableDateTime: "Y-m-d H:i:sO",
			        YearMonth: "F, Y"
			    },
			    reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: 'show',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Chinese Translation
	 * 咖啡兔 yanhonglei@gmail.com 
	 * http://www.kafeitu.me 
	 * 
	 * 花岗岩 marbleqi@163.com
	 * 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html 
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["cn"] = {
	    defaults : {
	        recordtext: "第{0}到第{1}条\u3000共 {2} 条", // 共字前是全角空格
	        emptyrecords: "没有记录！",
	        loadtext: "读取中...",
		savetext: "保存中...",
	        pgtext : "第{0}页\u3000共{1}页",
			pgfirst : "第一页",
			pglast : "最后一页",
			pgnext : "下一页",
			pgprev : "上一页",
			pgrecs : "每页记录数",
			showhide: "切换 展开 折叠 表格",
			// mobile
			pagerCaption : "表格::页面设置",
			pageText : "Page:",
			recordPage : "每页记录数",
			nomorerecs : "没有更多记录...",
			scrollPullup: "加载更多...",
			scrollPulldown : "刷新...",
			scrollRefresh : "滚动刷新..."
	    },
	    search : {
	        caption: "搜索...",
	        Find: "查找",
	        Reset: "重置",
	        odata: [{ oper:'eq', text:'等于\u3000\u3000'},{ oper:'ne', text:'不等于\u3000'},{ oper:'lt', text:'小于\u3000\u3000'},{ oper:'le', text:'小于等于'},{ oper:'gt', text:'大于\u3000\u3000'},{ oper:'ge', text:'大于等于'},{ oper:'bw', text:'开头是'},{ oper:'bn', text:'开头不是'},{ oper:'in', text:'属于\u3000\u3000'},{ oper:'ni', text:'不属于'},{ oper:'ew', text:'结尾是'},{ oper:'en', text:'结尾不是'},{ oper:'cn', text:'包含\u3000\u3000'},{ oper:'nc', text:'不包含'},{ oper:'nu', text:'为空'},{ oper:'nn', text:'不为空'}, {oper:'bt', text:'区间'}],
	        groupOps: [ { op: "AND", text: "满足所有条件" },    { op: "OR",  text: "满足任一条件" } ],
			operandTitle : "单击进行搜索。",
			resetTitle : "重置搜索条件",
			addsubgrup : "添加条件组",
			addrule : "添加条件",
			delgroup : "删除条件组",
			delrule : "删除条件"		
	    },
	    edit : {
	        addCaption: "添加记录",
	        editCaption: "编辑记录",
	        bSubmit: "提交",
	        bCancel: "取消",
	        bClose: "关闭",
	        saveData: "数据已修改，是否保存？",
	        bYes : "是",
	        bNo : "否",
	        bExit : "取消",
	        msg: {
	            required:"此字段必需",
	            number:"请输入有效数字",
	            minValue:"输值必须大于等于 ",
	            maxValue:"输值必须小于等于 ",
	            email: "这不是有效的e-mail地址",
	            integer: "请输入有效整数",
	            date: "请输入有效时间",
	            url: "无效网址。前缀必须为 ('http://' 或 'https://')",
	            nodefined : " 未定义！",
	            novalue : " 需要返回值！",
	            customarray : "自定义函数需要返回数组！",
	            customfcheck : "必须有自定义函数!"
	        }
	    },
	    view : {
	        caption: "查看记录",
	        bClose: "关闭"
	    },
	    del : {
	        caption: "删除",
	        msg: "删除所选记录？",
	        bSubmit: "删除",
	        bCancel: "取消"
	    },
	    nav : {
	        edittext: "",
	        edittitle: "编辑所选记录",
	        addtext:"",
	        addtitle: "添加新记录",
	        deltext: "",
	        deltitle: "删除所选记录",
	        searchtext: "",
	        searchtitle: "查找",
	        refreshtext: "",
	        refreshtitle: "刷新表格",
	        alertcap: "注意",
	        alerttext: "请选择记录",
	        viewtext: "",
	        viewtitle: "查看所选记录",
			savetext: "",
			savetitle: "保存记录",
			canceltext: "",
			canceltitle : "取消编辑记录",
			selectcaption : "操作..."
	    },
	    col : {
	        caption: "选择列",
	        bSubmit: "确定",
	        bCancel: "取消"
	    },
	    errors : {
	        errcap : "错误",
	        nourl : "没有设置url",
	        norecords: "没有需要处理的记录",
	        model : "colNames 和 colModel 长度不等！"
	    },
	    formatter : {
	        integer : {thousandsSeparator: ",", defaultValue: '0'},
	        number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
	        currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
	        date : {
	            dayNames:   [
	                "日", "一", "二", "三", "四", "五", "六",
	                "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",
	            ],
	            monthNames: [
	                "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二",
	                "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
	            ],
	            AmPm : ["am","pm","上午","下午"],
	            S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
	            srcformat: 'Y-m-d',
	            newformat: 'Y-m-d',
	            parseRe : /[#%\\\/:_;.,\t\s-]/,
	            masks : {
	                // see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
	                // and see http://docs.jquery.com/UI/Datepicker/formatDate
	                // and https://github.com/jquery/globalize#dates for alternative formats used frequently
	                // one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
	                // information about date, time, numbers and currency formats used in different countries
	                // one should just convert the information in PHP format
	                ISO8601Long:"Y-m-d H:i:s",
	                ISO8601Short:"Y-m-d",
	                // short date:
	                //    n - Numeric representation of a month, without leading zeros
	                //    j - Day of the month without leading zeros
	                //    Y - A full numeric representation of a year, 4 digits
	                // example: 3/1/2012 which means 1 March 2012
	                ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
	                // long date:
	                //    l - A full textual representation of the day of the week
	                //    F - A full textual representation of a month
	                //    d - Day of the month, 2 digits with leading zeros
	                //    Y - A full numeric representation of a year, 4 digits
	                LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
	                // long date with long time:
	                //    l - A full textual representation of the day of the week
	                //    F - A full textual representation of a month
	                //    d - Day of the month, 2 digits with leading zeros
	                //    Y - A full numeric representation of a year, 4 digits
	                //    g - 12-hour format of an hour without leading zeros
	                //    i - Minutes with leading zeros
	                //    s - Seconds, with leading zeros
	                //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
	                FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
	                // month day:
	                //    F - A full textual representation of a month
	                //    d - Day of the month, 2 digits with leading zeros
	                MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
	                // short time (without seconds)
	                //    g - 12-hour format of an hour without leading zeros
	                //    i - Minutes with leading zeros
	                //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
	                ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
	                // long time (with seconds)
	                //    g - 12-hour format of an hour without leading zeros
	                //    i - Minutes with leading zeros
	                //    s - Seconds, with leading zeros
	                //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
	                LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
	                SortableDateTime: "Y-m-d\\TH:i:s",
	                UniversalSortableDateTime: "Y-m-d H:i:sO",
	                // month with year
	                //    Y - A full numeric representation of a year, 4 digits
	                //    F - A full textual representation of a month
	                YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
	            },
	            reformatAfterEdit : false,
				userLocalTime : false
	        },
	        baseLinkUrl: '',
	        showAction: '',
	        target: '',
	        checkbox : {disabled:true},
	        idName : 'id'
	    },
		colmenu : {
			sortasc : "升序排序",
			sortdesc : "降序排序",
			columns : "列",
			filter : "筛选",
			grouping : "分类",
			ungrouping : "取消分类",
			searchTitle : "查找:",
			freeze : "冻结",
			unfreeze : "取消冻结",
			reorder : "重新排序"
		}
	};
	}));


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Czech Translation
	 * Pavel Jirak pavel.jirak@jipas.cz
	 * doplnil Thomas Wagner xwagne01@stud.fit.vutbr.cz
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["cs"] = {
		defaults : {
			recordtext: "Zobrazeno {0} - {1} z {2} záznamů",
		    emptyrecords: "Nenalezeny žádné záznamy",
			loadtext: "Načítám...",
			savetext: "Saving...",
			pgtext : "Strana {0} z {1}",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."		
		},
		search : {
			caption: "Vyhledávám...",
			Find: "Hledat",
			Reset: "Reset",
		    odata: [{ oper:'eq', text:"rovno"},{ oper:'ne', text:"nerovno"},{ oper:'lt', text:"menší"},{ oper:'le', text:"menší nebo rovno"},{ oper:'gt', text:"větší"},{ oper:'ge', text:"větší nebo rovno"},{ oper:'bw', text:"začíná s"},{ oper:'bn', text:"nezačíná s"},{ oper:'in', text:"je v"},{ oper:'ni', text:"není v"},{ oper:'ew', text:"končí s"},{ oper:'en', text:"nekončí s"},{ oper:'cn', text:"obsahuje"},{ oper:'nc', text:"neobsahuje"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "všech" },	{ op: "OR",  text: "některého z" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Přidat záznam",
			editCaption: "Editace záznamu",
			bSubmit: "Uložit",
			bCancel: "Storno",
			bClose: "Zavřít",
			saveData: "Data byla změněna! Uložit změny?",
			bYes : "Ano",
			bNo : "Ne",
			bExit : "Zrušit",
			msg: {
			    required:"Pole je vyžadováno",
			    number:"Prosím, vložte validní číslo",
			    minValue:"hodnota musí být větší než nebo rovná ",
			    maxValue:"hodnota musí být menší než nebo rovná ",
			    email: "není validní e-mail",
			    integer: "Prosím, vložte celé číslo",
				date: "Prosím, vložte validní datum",
				url: "není platnou URL. Vyžadován prefix ('http://' or 'https://')",
				nodefined : " není definován!",
				novalue : " je vyžadována návratová hodnota!",
				customarray : "Custom function mělá vrátit pole!",
				customfcheck : "Custom function by měla být přítomna v případě custom checking!"
			}
		},
		view : {
		    caption: "Zobrazit záznam",
		    bClose: "Zavřít"
		},
		del : {
			caption: "Smazat",
			msg: "Smazat vybraný(é) záznam(y)?",
			bSubmit: "Smazat",
			bCancel: "Storno"
		},
		nav : {
			edittext: " ",
			edittitle: "Editovat vybraný řádek",
			addtext:" ",
			addtitle: "Přidat nový řádek",
			deltext: " ",
			deltitle: "Smazat vybraný záznam ",
			searchtext: " ",
			searchtitle: "Najít záznamy",
			refreshtext: "",
			refreshtitle: "Obnovit tabulku",
			alertcap: "Varování",
			alerttext: "Prosím, vyberte řádek",
			viewtext: "",
			viewtitle: "Zobrazit vybraný řádek",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Zobrazit/Skrýt sloupce",
			bSubmit: "Uložit",
			bCancel: "Storno"	
		},
		errors : {
			errcap : "Chyba",
			nourl : "Není nastavena url",
			norecords: "Žádné záznamy ke zpracování",
			model : "Délka colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Ne", "Po", "Út", "St", "Čt", "Pá", "So",
					"Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"
				],
				monthNames: [
					"Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro",
					"Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
				],
				AmPm : ["do","od","DO","OD"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
			        ISO8601Long:"Y-m-d H:i:s",
			        ISO8601Short:"Y-m-d",
			        ShortDate: "n/j/Y",
			        LongDate: "l, F d, Y",
			        FullDateTime: "l, F d, Y g:i:s A",
			        MonthDay: "F d",
			        ShortTime: "g:i A",
			        LongTime: "g:i:s A",
			        SortableDateTime: "Y-m-d\\TH:i:s",
			        UniversalSortableDateTime: "Y-m-d H:i:sO",
			        YearMonth: "F, Y"
			    },
			    reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid German Translation
	 * Version 1.0.0 (developed for jQuery Grid 3.3.1)
	 * Olaf Klöppel opensource@blue-hit.de
	 * http://blue-hit.de/ 
	 *
	 * Updated for jqGrid 3.8
	 * Andreas Flack
	 * http://www.contentcontrol-berlin.de
	 *
	 * Updated for jQuery 4.4
	 * Oleg Kiriljuk oleg.kiriljuk@ok-soft-gmbh.com
	 * the format corresponds now the format from
	 * https://github.com/jquery/globalize/blob/master/lib/cultures/globalize.culture.de.js
	 * 
	 * Updated for jqGrid 4.8
	 * Tony Tomov
	 * http://www.guriddo.net
	 *
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["de"] = {
		defaults : {
			recordtext: "Zeige {0} - {1} von {2}",
			emptyrecords: "Keine Datensätze vorhanden",
			loadtext: "Lädt...",
			savetext: "Speichern...",
			pgtext : "Seite {0} von {1}",
			pgfirst : "erste Seite",
			pglast : "letzte Seite",
			pgnext : "nächste Seite",
			pgprev : "vorherige Seite",
			pgrecs : "Datensätze pro Seite",
			showhide: "Toggle erweitern reduzieren",
			// mobile
			pagerCaption : "Grid::Seite Optionen",
			pageText : "Seite:",
			recordPage : "Ergebnisse pro Seite",
			nomorerecs : "Keine weiteren Datensätze...",
			scrollPullup: "Ziehen Sie, um mehr zu laden...",
			scrollPulldown : "Pulldown zu aktualisieren...",
			scrollRefresh : "Lassen Sie zu aktualisieren..."
		},
		search : {
			caption: "Suche...",
			Find: "Suchen",
			Reset: "Zurücksetzen",
			odata: [{ oper:'eq', text:"gleich"},{ oper:'ne', text:"ungleich"},{ oper:'lt', text:"kleiner"},{ oper:'le', text:"kleiner gleich"},{ oper:'gt', text:"größer"},{ oper:'ge', text:"größer gleich"},{ oper:'bw', text:"beginnt mit"},{ oper:'bn', text:"beginnt nicht mit"},{ oper:'in', text:"ist in"},{ oper:'ni', text:"ist nicht in"},{ oper:'ew', text:"endet mit"},{ oper:'en', text:"endet nicht mit"},{ oper:'cn', text:"enthält"},{ oper:'nc', text:"enthält nicht"}, { oper:'nu', text:"ist Null" }, { oper:'nn', text:"ist nicht Null" }, {oper:'bt', text:'zwischen'}],
			groupOps: [{ op: "AND", text: "alle" },{ op: "OR", text: "mindestens eine" }],
			operandTitle : "Klicken Sie auf Suchoperation zu wählen.",
			resetTitle : "Reset Suche Wert",
			addsubgrup : "Gruppe hinzufügen",
			addrule : "In der Regel",
			delgroup : "Gruppe löschen",
			delrule : "Regel löschen"
		},
		edit : {
			addCaption: "Datensatz hinzufügen",
			editCaption: "Datensatz bearbeiten",
			bSubmit: "Speichern",
			bCancel: "Abbrechen",
			bClose: "Schließen",
			saveData: "Daten wurden geändert! Änderungen speichern?",
			bYes : "ja",
			bNo : "nein",
			bExit : "abbrechen",
			msg: {
				required:"Feld ist erforderlich",
				number: "Bitte geben Sie eine Zahl ein",
				minValue:"Wert muss größer oder gleich sein, als ",
				maxValue:"Wert muss kleiner oder gleich sein, als ",
				email: "ist keine gültige E-Mail-Adresse",
				integer: "Bitte geben Sie eine Ganzzahl ein",
				date: "Bitte geben Sie ein gültiges Datum ein",
				url: "ist keine gültige URL. Präfix muss eingegeben werden ('http://' oder 'https://')",
				nodefined : " ist nicht definiert!",
				novalue : " Rückgabewert ist erforderlich!",
				customarray : "Benutzerdefinierte Funktion sollte ein Array zurückgeben!",
				customfcheck : "Benutzerdefinierte Funktion sollte im Falle der benutzerdefinierten Überprüfung vorhanden sein!"
			}
		},
		view : {
			caption: "Datensatz anzeigen",
			bClose: "Schließen"
		},
		del : {
			caption: "Löschen",
			msg: "Ausgewählte Datensätze löschen?",
			bSubmit: "Löschen",
			bCancel: "Abbrechen"
		},
		nav : {
			edittext: " ",
			edittitle: "Ausgewählte Zeile editieren",
			addtext:" ",
			addtitle: "Neue Zeile einfügen",
			deltext: " ",
			deltitle: "Ausgewählte Zeile löschen",
			searchtext: " ",
			searchtitle: "Datensatz suchen",
			refreshtext: "",
			refreshtitle: "Tabelle neu laden",
			alertcap: "Warnung",
			alerttext: "Bitte Zeile auswählen",
			viewtext: "",
			viewtitle: "Ausgewählte Zeile anzeigen",
			savetext: "",
			savetitle: "Zeile speihern",
			canceltext: "",
			canceltitle : "Zeile abbrechen",
			selectcaption : "Aktionen..."
		},
		col : {
			caption: "Spalten auswählen",
			bSubmit: "Speichern",
			bCancel: "Abbrechen"	
		},
		errors : {
			errcap : "Fehler",
			nourl : "Keine URL angegeben",
			norecords: "Keine Datensätze zu bearbeiten",
			model : "colNames und colModel sind unterschiedlich lang!"
		},
		formatter : {
			integer : {thousandsSeparator: ".", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:" €", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa",
					"Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez",
					"Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"
				],
				AmPm : ["","","",""],
				S: function () {return '.';}, // one can also use 'er' instead of '.' but one have to use additional word like 'der' or 'den' before
				srcformat: 'Y-m-d',
				newformat: 'd.m.Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
					// and see http://docs.jquery.com/UI/Datepicker/formatDate
					// and https://github.com/jquery/globalize#dates for alternative formats used frequently
					ISO8601Long: "Y-m-d H:i:s",
					ISO8601Short: "Y-m-d",
					// short date:
					//    d - Day of the month, 2 digits with leading zeros
					//    m - Numeric representation of a month, with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					ShortDate: "d.m.Y",	// in jQuery UI Datepicker: "dd.MM.yyyy"
					// long date:
					//    l - A full textual representation of the day of the week
					//    j - Day of the month without leading zeros
					//    F - A full textual representation of a month
					//    Y - A full numeric representation of a year, 4 digits
					LongDate: "l, j. F Y", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy"
					// long date with long time:
					//    l - A full textual representation of the day of the week
					//    j - Day of the month without leading zeros
					//    F - A full textual representation of a month
					//    Y - A full numeric representation of a year, 4 digits
					//    H - 24-hour format of an hour with leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					FullDateTime: "l, j. F Y H:i:s", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy HH:mm:ss"
					// month day:
					//    d - Day of the month, 2 digits with leading zeros
					//    F - A full textual representation of a month
					MonthDay: "d F", // in jQuery UI Datepicker: "dd MMMM"
					// short time (without seconds)
					//    H - 24-hour format of an hour with leading zeros
					//    i - Minutes with leading zeros
					ShortTime: "H:i", // in jQuery UI Datepicker: "HH:mm"
					// long time (with seconds)
					//    H - 24-hour format of an hour with leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					LongTime: "H:i:s", // in jQuery UI Datepicker: "HH:mm:ss"
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					// month with year
					//    F - A full textual representation of a month
					//    Y - A full numeric representation of a year, 4 digits
					YearMonth: "F Y" // in jQuery UI Datepicker: "MMMM yyyy"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Aufsteigend sortieren",
			sortdesc : "Absteigend sortieren",
			columns : "Spalte",
			filter : "Filter",
			grouping : "Gruppiere nach",
			ungrouping : "Gruppierung aufheben",
			searchTitle : "Erhalten Sie Artikel mit Wert:",
			freeze : "Einfrieren",
			unfreeze : "Freigeben",
			reorder : "Bewegen neu anordnen"
		}
	};
	}));


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Danish Translation
	 * Kaare Rasmussen kjs@jasonic.dk
	 * http://jasonic.dk/blog 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["dk"] = {
		defaults : {
			recordtext: "View {0} - {1} of {2}",
		    emptyrecords: "No records to view",
			loadtext: "Loading...",
			savetext: "Saving...",
			pgtext : "Page {0} of {1}",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
		    caption: "Søg...",
		    Find: "Find",
		    Reset: "Nulstil",
		    odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
		    addCaption: "Tilføj",
		    editCaption: "Ret",
		    bSubmit: "Send",
		    bCancel: "Annuller",
			bClose: "Luk",
			saveData: "Data has been changed! Save changes?",
			bYes : "Yes",
			bNo : "No",
			bExit : "Cancel",
		    msg: {
		        required:"Felt er nødvendigt",
		        number:"Indtast venligst et validt tal",
		        minValue:"værdi skal være større end eller lig med",
		        maxValue:"værdi skal være mindre end eller lig med",
		        email: "er ikke en valid email",
		        integer: "Indtast venligst et validt heltalt",
				date: "Indtast venligst en valid datoværdi",
				url: "is not a valid URL. Prefix required ('http://' or 'https://')",
				nodefined : " is not defined!",
				novalue : " return value is required!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
			}
		},
		view : {
		    caption: "View Record",
		    bClose: "Close"
		},
		del : {
		    caption: "Slet",
		    msg: "Slet valgte række(r)?",
		    bSubmit: "Slet",
		    bCancel: "Annuller"
		},
		nav : {
			edittext: " ",
		    edittitle: "Rediger valgte række",
			addtext:" ",
		    addtitle: "Tilføj ny række",
		    deltext: " ",
		    deltitle: "Slet valgte række",
		    searchtext: " ",
		    searchtitle: "Find poster",
		    refreshtext: "",
		    refreshtitle: "Indlæs igen",
		    alertcap: "Advarsel",
		    alerttext: "Vælg venligst række",
			viewtext: "",
			viewtitle: "View selected row",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
		    caption: "Vis/skjul kolonner",
		    bSubmit: "Send",
		    bCancel: "Annuller"
		},
		errors : {
			errcap : "Fejl",
			nourl : "Ingel url valgt",
			norecords: "Ingen poster at behandle",
		    model : "colNames og colModel har ikke samme længde!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Søn", "Man", "Tirs", "Ons", "Tors", "Fre", "Lør",
					"Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
					"Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
				],
				AmPm : ["","","",""],
				S: function (j) {return '.'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "j/n/Y",
		            LongDate: "l d. F Y",
		            FullDateTime: "l d F Y G:i:s",
		            MonthDay: "d. F",
		            ShortTime: "G:i",
		            LongTime: "G:i:s",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	// DK
	}));


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Greek (el) Translation
	 * Alex Cicovic
	 * http://www.alexcicovic.com
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["el"] = {
		defaults : {
			recordtext: "View {0} - {1} of {2}",
		    emptyrecords: "No records to view",
			loadtext: "Φόρτωση...",
			savetext: "Saving...",
			pgtext : "Page {0} of {1}",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."		
		},
		search : {
		    caption: "Αναζήτηση...",
		    Find: "Εύρεση",
		    Reset: "Επαναφορά",
		    odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
		    addCaption: "Εισαγωγή Εγγραφής",
		    editCaption: "Επεξεργασία Εγγραφής",
		    bSubmit: "Καταχώρηση",
		    bCancel: "Άκυρο",
			bClose: "Κλείσιμο",
			saveData: "Data has been changed! Save changes?",
			bYes : "Yes",
			bNo : "No",
			bExit : "Cancel",
		    msg: {
		        required:"Το πεδίο είναι απαραίτητο",
		        number:"Το πεδίο δέχεται μόνο αριθμούς",
		        minValue:"Η τιμή πρέπει να είναι μεγαλύτερη ή ίση του ",
		        maxValue:"Η τιμή πρέπει να είναι μικρότερη ή ίση του ",
		        email: "Η διεύθυνση e-mail δεν είναι έγκυρη",
		        integer: "Το πεδίο δέχεται μόνο ακέραιους αριθμούς",
				url: "is not a valid URL. Prefix required ('http://' or 'https://')",
				nodefined : " is not defined!",
				novalue : " return value is required!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
			}
		},
		view : {
		    caption: "View Record",
		    bClose: "Close"
		},
		del : {
		    caption: "Διαγραφή",
		    msg: "Διαγραφή των επιλεγμένων εγγραφών;",
		    bSubmit: "Ναι",
		    bCancel: "Άκυρο"
		},
		nav : {
			edittext: " ",
		    edittitle: "Επεξεργασία επιλεγμένης εγγραφής",
			addtext:" ",
		    addtitle: "Εισαγωγή νέας εγγραφής",
		    deltext: " ",
		    deltitle: "Διαγραφή επιλεγμένης εγγραφής",
		    searchtext: " ",
		    searchtitle: "Εύρεση Εγγραφών",
		    refreshtext: "",
		    refreshtitle: "Ανανέωση Πίνακα",
		    alertcap: "Προσοχή",
		    alerttext: "Δεν έχετε επιλέξει εγγραφή",
			viewtext: "",
			viewtitle: "View selected row",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
		    caption: "Εμφάνιση / Απόκρυψη Στηλών",
		    bSubmit: "ΟΚ",
		    bCancel: "Άκυρο"
		},
		errors : {
			errcap : "Σφάλμα",
			nourl : "Δεν έχει δοθεί διεύθυνση χειρισμού για τη συγκεκριμένη ενέργεια",
			norecords: "Δεν υπάρχουν εγγραφές προς επεξεργασία",
			model : "Άνισος αριθμός πεδίων colNames/colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ",
					"Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"
				],
				monthNames: [
					"Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ",
					"Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
				],
				AmPm : ["πμ","μμ","ΠΜ","ΜΜ"],
				S: function (j) {return j == 1 || j > 1 ? ['η'][Math.min((j - 1) % 10, 3)] : ''},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "n/j/Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid English Translation
	 * Tony Tomov tony@trirand.com
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["en"] = {
		defaults : {
			recordtext: "View {0} - {1} of {2}",
			emptyrecords: "No records to view",
			loadtext: "Loading...",
			savetext: "Saving...",
			pgtext : "Page {0} of {1}",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Search...",
			Find: "Find",
			Reset: "Reset",
			odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [{ op: "AND", text: "all" },{ op: "OR",  text: "any" }],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Add Record",
			editCaption: "Edit Record",
			bSubmit: "Submit",
			bCancel: "Cancel",
			bClose: "Close",
			saveData: "Data has been changed! Save changes?",
			bYes : "Yes",
			bNo : "No",
			bExit : "Cancel",
			msg: {
				required:"Field is required",
				number:"Please, enter valid number",
				minValue:"value must be greater than or equal to ",
				maxValue:"value must be less than or equal to",
				email: "is not a valid e-mail",
				integer: "Please, enter valid integer value",
				date: "Please, enter valid date value",
				url: "is not a valid URL. Prefix required ('http://' or 'https://')",
				nodefined : " is not defined!",
				novalue : " return value is required!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
				
			}
		},
		view : {
			caption: "View Record",
			bClose: "Close"
		},
		del : {
			caption: "Delete",
			msg: "Delete selected record(s)?",
			bSubmit: "Delete",
			bCancel: "Cancel"
		},
		nav : {
			edittext: "",
			edittitle: "Edit selected row",
			addtext:"",
			addtitle: "Add new row",
			deltext: "",
			deltitle: "Delete selected row",
			searchtext: "",
			searchtitle: "Find records",
			refreshtext: "",
			refreshtitle: "Reload Grid",
			alertcap: "Warning",
			alerttext: "Please, select row",
			viewtext: "",
			viewtitle: "View selected row",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Select columns",
			bSubmit: "Ok",
			bCancel: "Cancel"
		},
		errors : {
			errcap : "Error",
			nourl : "No url is set",
			norecords: "No records to process",
			model : "Length of colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: ",", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
					"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
				srcformat: 'Y-m-d',
				newformat: 'n/j/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
					// and see http://docs.jquery.com/UI/Datepicker/formatDate
					// and https://github.com/jquery/globalize#dates for alternative formats used frequently
					// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
					// information about date, time, numbers and currency formats used in different countries
					// one should just convert the information in PHP format
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					// short date:
					//    n - Numeric representation of a month, without leading zeros
					//    j - Day of the month without leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					// example: 3/1/2012 which means 1 March 2012
					ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
					// long date:
					//    l - A full textual representation of the day of the week
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
					// long date with long time:
					//    l - A full textual representation of the day of the week
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
					// month day:
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
					// short time (without seconds)
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
					// long time (with seconds)
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					// month with year
					//    Y - A full numeric representation of a year, 4 digits
					//    F - A full textual representation of a month
					YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Spanish Translation
	 * Traduccion jqGrid en Español por Yamil Bracho
	 * Traduccion corregida y ampliada por Faserline, S.L. 
	 * http://www.faserline.com
	 * Traduccion corregida y ampliada por Fernán Castro Asensio
	 * Traducción corregida y ampliada por Luis Sánchez
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["es"] = {
		defaults : {
			recordtext: "Mostrando {0} - {1} de {2}",
		    emptyrecords: "Sin registros que mostrar",
			loadtext: "Cargando...",
			savetext: "Guardando...",
			pgtext : "Página {0} de {1}",
			pgfirst : "Primera página",
			pglast : "Última página",
			pgnext : "Siguiente página",
			pgprev : "Anterior página",
			pgrecs : "Registros por página",
			showhide: "Alternar Contraer Expandir Grid",
			// mobile
			pagerCaption : "Grid::Configurar página",
			pageText : "Página:",
			recordPage : "Registros por página",
			nomorerecs : "No más registros...",
			scrollPullup: "Arrastrar arriba para cargar más...",
			scrollPulldown : "Arrastrar arriba para refrescar...",
			scrollRefresh : "Soltar para refrescar..."		
		},
		search : {
		    caption: "Búsqueda...",
		    Find: "Buscar",
		    Reset: "Limpiar",
		    odata: [{ oper:'eq', text:"igual "},{ oper:'ne', text:"no igual a"},{ oper:'lt', text:"menor que"},{ oper:'le', text:"menor o igual que"},{ oper:'gt', text:"mayor que"},{ oper:'ge', text:"mayor o igual a"},{ oper:'bw', text:"empiece por"},{ oper:'bn', text:"no empiece por"},{ oper:'in', text:"está en"},{ oper:'ni', text:"no está en"},{ oper:'ew', text:"termina por"},{ oper:'en', text:"no termina por"},{ oper:'cn', text:"contiene"},{ oper:'nc', text:"no contiene"},{ oper:'nu', text:'es nulo'},{ oper:'nn', text:'no es nulo'}, {oper:'bt', text:'entre'}],
		    groupOps: [	{ op: "AND", text: "todo" },	{ op: "OR",  text: "cualquier" }	],
			operandTitle : "Clic para seleccionar la operación de búsqueda.",
			resetTitle : "Reiniciar valores de búsqueda",
			addsubgrup : "Agregar subgrupo",
			addrule : "Agregar regla",
			delgroup : "Borrar grupo",
			delrule : "Borrar regla"
		},
		edit : {
		    addCaption: "Agregar registro",
		    editCaption: "Modificar registro",
		    bSubmit: "Guardar",
		    bCancel: "Cancelar",
			bClose: "Cerrar",
			saveData: "Se han modificado los datos, ¿guardar cambios?",
			bYes : "Si",
			bNo : "No",
			bExit : "Cancelar",
		    msg: {
		        required:"Campo obligatorio",
		        number:"Introduzca un número",
		        minValue:"El valor debe ser mayor o igual a ",
		        maxValue:"El valor debe ser menor o igual a ",
		        email: "no es una dirección de correo válida",
		        integer: "Introduzca un valor entero",
			date: "Introduzca una fecha correcta ",
			url: "no es una URL válida. Prefijo requerido ('http://' or 'https://')",
			nodefined : " no está definido.",
			novalue : " valor de retorno es requerido.",
			customarray : "La función personalizada debe devolver un array.",
			customfcheck : "La función personalizada debe estar presente en el caso de validación personalizada."
			}
		},
		view : {
		    caption: "Consultar registro",
		    bClose: "Cerrar"
		},
		del : {
		    caption: "Eliminar",
		    msg: "¿Desea eliminar los registros seleccionados?",
		    bSubmit: "Eliminar",
		    bCancel: "Cancelar"
		},
		nav : {
		    edittext: " ",
		    edittitle: "Modificar fila seleccionada",
		    addtext:" ",
		    addtitle: "Agregar nueva fila",
		    deltext: " ",
		    deltitle: "Eliminar fila seleccionada",
		    searchtext: " ",
		    searchtitle: "Buscar información",
		    refreshtext: "",
		    refreshtitle: "Recargar datos",
		    alertcap: "Aviso",
		    alerttext: "Seleccione una fila",
			viewtext: "",
			viewtitle: "Ver fila seleccionada",
			savetext: "",
			savetitle: "Guardar fila",
			canceltext: "",
			canceltitle : "Cancelar edición de fila",
			selectcaption : "Acciones..."
		},
		col : {
		    caption: "Mostrar/ocultar columnas",
		    bSubmit: "Enviar",
		    bCancel: "Cancelar"	
		},
		errors : {
			errcap : "Error",
			nourl : "No se ha especificado una URL",
			norecords: "No hay datos para procesar",
		    model : "Las columnas de nombres son diferentes de las columnas del modelo"
		},
		formatter : {
			integer : {thousandsSeparator: ".", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa",
					"Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
				],
				monthNames: [
					"Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
					"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd-m-Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "n/j/Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Ordenar ascendentemente",
			sortdesc : "Ordenar descendientemente",
			columns : "Columnas",
			filter : "Filtrar",
			grouping : "Agrupar por",
			ungrouping : "Desagrupar",
			searchTitle : "Obtener elementos con un valor que:",
			freeze : "Congelar",
			unfreeze : "Descongelar",
			reorder : "Mover para reordenar"
		}
	};
	}));


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Persian Translation
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["fa"] = {
	        defaults: {
	            recordtext: "نمابش {0} - {1} از {2}",
	            emptyrecords: "رکوردی یافت نشد",
	            loadtext: "بارگزاري...",
				savetext: "Saving...",
				pgtext: "صفحه {0} از {1}",
				pgfirst : "First Page",
				pglast : "Last Page",
				pgnext : "Next Page",
				pgprev : "Previous Page",
				pgrecs : "Records per Page",
				showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
	        },
	        search: {
	            caption: "جستجو...",
	            Find: "يافته ها",
	            Reset: "از نو",
	            odata: [{ oper:'eq', text:"برابر"},{ oper:'ne', text:"نا برابر"},{ oper:'lt', text:"به"},{ oper:'le', text:"کوچکتر"},{ oper:'gt', text:"از"},{ oper:'ge', text:"بزرگتر"},{ oper:'bw', text:"شروع با"},{ oper:'bn', text:"شروع نشود با"},{ oper:'in', text:"نباشد"},{ oper:'ni', text:"عضو این نباشد"},{ oper:'ew', text:"اتمام با"},{ oper:'en', text:"تمام نشود با"},{ oper:'cn', text:"حاوی"},{ oper:'nc', text:"نباشد حاوی"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
	            groupOps: [{
	                op: "AND",
	                text: "کل"
	            },
	            {
	                op: "OR",
	                text: "مجموع"
	            }],
				operandTitle : "Click to select search operation.",
				resetTitle : "Reset Search Value",
				addsubgrup : "Add subgroup",
				addrule : "Add rule",
				delgroup : "Delete group",
				delrule : "Delete rule"
	        },
	        edit: {
	            addCaption: "اضافه کردن رکورد",
	            editCaption: "ويرايش رکورد",
	            bSubmit: "ثبت",
	            bCancel: "انصراف",
	            bClose: "بستن",
	            saveData: "دیتا تعییر کرد! ذخیره شود؟",
	            bYes: "بله",
	            bNo: "خیر",
	            bExit: "انصراف",
	            msg: {
	                required: "فيلدها بايد ختما پر شوند",
	                number: "لطفا عدد وعتبر وارد کنيد",
	                minValue: "مقدار وارد شده بايد بزرگتر يا مساوي با",
	                maxValue: "مقدار وارد شده بايد کوچکتر يا مساوي",
	                email: "پست الکترونيک وارد شده معتبر نيست",
	                integer: "لطفا يک عدد صحيح وارد کنيد",
	                date: "لطفا يک تاريخ معتبر وارد کنيد",
	                url: "این آدرس صحیح نمی باشد. پیشوند نیاز است ('http://' یا 'https://')",
	                nodefined: " تعریف نشده!",
	                novalue: " مقدار برگشتی اجباری است!",
	                customarray: "تابع شما باید مقدار آرایه داشته باشد!",
	                customfcheck: "برای داشتن متد دلخواه شما باید سطون با چکینگ دلخواه داشته باشید!"
	            }
	        },
	        view: {
	            caption: "نمایش رکورد",
	            bClose: "بستن"
	        },
	        del: {
	            caption: "حذف",
	            msg: "از حذف گزينه هاي انتخاب شده مطمئن هستيد؟",
	            bSubmit: "حذف",
	            bCancel: "ابطال"
	        },
	        nav: {
	            edittext: " ",
	            edittitle: "ويرايش رديف هاي انتخاب شده",
	            addtext: " ",
	            addtitle: "افزودن رديف جديد",
	            deltext: " ",
	            deltitle: "حذف ردبف هاي انتیاب شده",
	            searchtext: " ",
	            searchtitle: "جستجوي رديف",
	            refreshtext: "",
	            refreshtitle: "بازيابي مجدد صفحه",
	            alertcap: "اخطار",
	            alerttext: "لطفا يک رديف انتخاب کنيد",
	            viewtext: "",
	            viewtitle: "نمایش رکورد های انتخاب شده",
				savetext: "",
				savetitle: "Save row",
				canceltext: "",
				canceltitle : "Cancel row editing",
				selectcaption : "Actions..."
	        },
	        col: {
	            caption: "نمايش/عدم نمايش ستون",
	            bSubmit: "ثبت",
	            bCancel: "انصراف"
	        },
	        errors: {
	            errcap: "خطا",
	            nourl: "هيچ آدرسي تنظيم نشده است",
	            norecords: "هيچ رکوردي براي پردازش موجود نيست",
	            model: "طول نام ستون ها محالف ستون هاي مدل مي باشد!"
	        },
	        formatter: {
	            integer: {
	                thousandsSeparator: " ",
	                defaultValue: "0"
	            },
	            number: {
	                decimalSeparator: ".",
	                thousandsSeparator: " ",
	                decimalPlaces: 2,
	                defaultValue: "0.00"
	            },
	            currency: {
	                decimalSeparator: ".",
	                thousandsSeparator: " ",
	                decimalPlaces: 2,
	                prefix: "",
	                suffix: "",
	                defaultValue: "0"
	            },
	            date: {
	                dayNames: ["يک", "دو", "سه", "چهار", "پنج", "جمع", "شنب", "يکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
	                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "ژانويه", "فوريه", "مارس", "آوريل", "مه", "ژوئن", "ژوئيه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "December"],
	                AmPm: ["ب.ظ", "ب.ظ", "ق.ظ", "ق.ظ"],
	                S: function (b) {
	                    return b < 11 || b > 13 ? ["st", "nd", "rd", "th"][Math.min((b - 1) % 10, 3)] : "th"
	                },
	                srcformat: "Y-m-d",
	                newformat: "d/m/Y",
					parseRe : /[#%\\\/:_;.,\t\s-]/,
	                masks: {
	                    ISO8601Long: "Y-m-d H:i:s",
	                    ISO8601Short: "Y-m-d",
	                    ShortDate: "n/j/Y",
	                    LongDate: "l, F d, Y",
	                    FullDateTime: "l, F d, Y g:i:s A",
	                    MonthDay: "F d",
	                    ShortTime: "g:i A",
	                    LongTime: "g:i:s A",
	                    SortableDateTime: "Y-m-d\\TH:i:s",
	                    UniversalSortableDateTime: "Y-m-d H:i:sO",
	                    YearMonth: "F, Y"
	                },
	                reformatAfterEdit: false,
					userLocalTime : false
	            },
	            baseLinkUrl: "",
	            showAction: "نمايش",
	            target: "",
	            checkbox: {
	                disabled: true
	            },
	            idName: "id"
	        },
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	    };
	}));

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid (fi) Finnish Translation
	 * Jukka Inkeri  awot.fi  2010-05-19
	 * Alex Grönholm  alex.gronholm@nextday.fi  2011-05-18
	 * http://awot.fi
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["fi"] = {
		defaults: {
			recordtext: "Rivit {0} - {1} / {2}",
		    emptyrecords: "Ei n&auml;ytett&auml;vi&auml;",
			loadtext: "Haetaan...",
			savetext: "Saving...",
			pgtext: "Sivu {0} / {1}",		
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search: {
		    caption: "Etsi...",
		    Find: "Etsi",
		    Reset: "Tyhjenn&auml;",
		    odata: [{ oper:'eq', text:"on"},{ oper:'ne', text:"ei ole"},{ oper:'lt', text:"pienempi"},{ oper:'le', text:"pienempi tai yht&auml;suuri"},{ oper:'gt', text:"suurempi"},{ oper:'ge', text:"suurempi tai yht&auml;suuri"},{ oper:'bw', text:"alkaa"},{ oper:'bn', text:"ei ala"},{ oper:'in', text:"joukossa"},{ oper:'ni', text:"ei joukossa"},{ oper:'ew', text:"loppuu"},{ oper:'en', text:"ei lopu"},{ oper:'cn', text:"sis&auml;lt&auml;&auml;"},{ oper:'nc', text:"ei sis&auml;ll&auml;"},{ oper:'nu', text:"on tyhj&auml;"},{ oper:'nn', text:"ei ole tyhj&auml;"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "kaikki" }, { op: "OR", text: "mik&auml; tahansa" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit: {
		    addCaption: "Uusi rivi",
		    editCaption: "Muokkaa rivi&auml;",
		    bSubmit: "OK",
		    bCancel: "Peru",
			bClose: "Sulje",
			saveData: "Tietoja muutettu! Tallennetaanko?",
			bYes: "Kyll&auml;",
			bNo: "Ei",
			bExit: "Peru",
		    msg: {
		        required: "pakollinen",
		        number: "Anna kelvollinen nro",
		        minValue: "arvon oltava suurempi tai yht&auml;suuri kuin ",
		        maxValue: "arvon oltava pienempi tai yht&auml;suuri kuin ",
		        email: "ei ole kelvollinen s&auml;postiosoite",
		        integer: "Anna kelvollinen kokonaisluku",
				date: "Anna kelvollinen pvm",
				url: "Ei ole kelvollinen linkki(URL). Alku oltava ('http://' tai 'https://')",
				nodefined: " ei ole m&auml;&auml;ritelty!",
				novalue: " paluuarvo vaaditaan!",
				customarray: "Oman funktion tulee palauttaa jono!",
				customfcheck: "Oma funktio on m&auml;&auml;ritelt&auml;v&auml; r&auml;&auml;t&auml;l&ouml;ity&auml; tarkastusta varten!"
			}
		},
		view: {
		    caption: "N&auml;yt&auml; rivi",
		    bClose: "Sulje"
		},
		del: {
		    caption: "Poista",
		    msg: "Poista valitut rivit?",
		    bSubmit: "Poista",
		    bCancel: "Peru"
		},
		nav: {
			edittext: "",
		    edittitle: "Muokkaa valittua rivi&auml;",
			addtext: "",
		    addtitle: "Uusi rivi",
		    deltext: "",
		    deltitle: "Poista valittu rivi",
		    searchtext: "",
		    searchtitle: "Etsi tietoja",
		    refreshtext: "",
		    refreshtitle: "Lataa uudelleen",
		    alertcap: "Varoitus",
		    alerttext: "Valitse rivi",
			viewtext: "",
			viewtitle: "N&auml;yta valitut rivit",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col: {
		    caption: "Valitse sarakkeet",
		    bSubmit: "OK",
		    bCancel: "Peru"	
		},
		errors : {
			errcap: "Virhe",
			nourl: "URL on asettamatta",
			norecords: "Ei muokattavia tietoja",
		    model: "Pituus colNames <> colModel!"
		},
		formatter: {
			integer: {thousandsSeparator: "", defaultValue: '0'},
			number: {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, defaultValue: '0,00'},
			currency: {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date: {
				dayNames:   [
					"Su", "Ma", "Ti", "Ke", "To", "Pe", "La",
					"Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"
				],
				monthNames: [
					"Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou",
					"Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes&auml;kuu", "Hein&auml;kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
				],
				AmPm: ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd.m.Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks: {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "d.m.Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox: {disabled:true},
			idName: 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	// FI
	}));


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid French Translation
	 * Tony Tomov tony@trirand.com
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["fr"] = {
		defaults : {
			recordtext: "Enregistrements {0} - {1} sur {2}",
			emptyrecords: "Aucun enregistrement à afficher",
			loadtext: "Chargement...",
			savetext: "Sauvegarde en cours...",
			pgtext : "Page {0} de {1}",
			pgfirst : "Première page",
			pglast : "Dernière page",
			pgnext : "Page suivante",
			pgprev : "Page précédente",
			pgrecs : "Enregistrements par page",
			showhide: "Réduire/Agrandir la grille",
			// mobile
			pagerCaption : "Grille::Options de pagination",
			pageText : "Page:",
			recordPage: "Enregistrements par page",
			nomorerecs : "Plus de données...",
			scrollPullup: "Glisser vers le haut pour charger plus de données...",
			scrollPulldown : "Glisser vers le bas pour rafraîchir...",
			scrollRefresh : "Relâcher pour rafraîchir..."
		},
		search : {
			caption: "Recherche...",
			Find: "Chercher",
			Reset: "Réinitialiser",
			odata: [{ oper:'eq', text:"égal"},{ oper:'ne', text:"différent"},{ oper:'lt', text:"inférieur"},{ oper:'le', text:"inférieur ou égal"},{ oper:'gt', text:"supérieur"},{ oper:'ge', text:"supérieur ou égal"},{ oper:'bw', text:"commence par"},{ oper:'bn', text:"ne commence pas par"},{ oper:'in', text:"est dans"},{ oper:'ni', text:"n'est pas dans"},{ oper:'ew', text:"finit par"},{ oper:'en', text:"ne finit pas par"},{ oper:'cn', text:"contient"},{ oper:'nc', text:"ne contient pas"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'entre'}],
			groupOps: [	{ op: "AND", text: "tous" },	{ op: "OR",  text: "au moins un" }	],
			operandTitle : "Cliquer pour sélectionner l'opérateur.",
			resetTitle : "Réinitialiser la valeur de recherche",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Ajouter",
			editCaption: "Éditer",
			bSubmit: "Valider",
			bCancel: "Annuler",
			bClose: "Fermer",
			saveData: "Les données ont changé ! Enregistrer les modifications ?",
			bYes: "Oui",
			bNo: "Non",
			bExit: "Annuler",
			msg: {
				required: "Champ obligatoire",
				number: "Saisissez un nombre correct",
				minValue: "La valeur doit être supérieure ou égale à",
				maxValue: "La valeur doit être inférieure ou égale à",
				email: "n'est pas un email valide",
				integer: "Saisissez un entier valide",
				url: "n'est pas une adresse valide. Préfixe requis ('http://' or 'https://')",
				nodefined : " n'est pas défini!",
				novalue : " la valeur de retour est requise!",
				customarray : "Une fonction personnalisée devrait retourner un tableau (array)!",
				customfcheck : "Une fonction personnalisée devrait être présente dans le cas d'une vérification personnalisée!"
			}
		},
		view : {
			caption: "Voir les enregistrements",
			bClose: "Fermer"
		},
		del : {
			caption: "Supprimer",
			msg: "Supprimer les enregistrements sélectionnés ?",
			bSubmit: "Supprimer",
			bCancel: "Annuler"
		},
		nav : {
			edittext: " ",
			edittitle: "Editer la ligne sélectionnée",
			addtext:" ",
			addtitle: "Ajouter une ligne",
			deltext: " ",
			deltitle: "Supprimer la ligne sélectionnée",
			searchtext: " ",
			searchtitle: "Chercher un enregistrement",
			refreshtext: "",
			refreshtitle: "Recharger le tableau",
			alertcap: "Avertissement",
			alerttext: "Veuillez sélectionner une ligne",
			viewtext: "",
			viewtitle: "Afficher la ligne sélectionnée",
			savetext: "",
			savetitle: "Sauvegarder la ligne",
			canceltext: "",
			canceltitle : "Annuler l'édition de la ligne",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Afficher/Masquer les colonnes",
			bSubmit: "Valider",
			bCancel: "Annuler"
		},
		errors : {
			errcap : "Erreur",
			nourl : "Aucune adresse n'est paramétrée",
			norecords: "Aucun enregistrement à traiter",
			model : "Nombre de titres (colNames) <> Nombre de données (colModel)!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam",
					"Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
				],
				monthNames: [
					"Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Déc",
					"Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j == 1 ? 'er' : 'e';},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Trier en ordre croissant",
			sortdesc: "Trier en ordre décroissant",
			columns : "Colonnes",
			filter : "Filtrer",
			grouping : "Grouper par",
			ungrouping : "Séparer",
			searchTitle : "Prendre les items avec la valeur:",
			freeze : "Figer",
			unfreeze : "Relâcher",
			reorder : "Déplacer pour changer l'ordre"
		}
	};
	}));


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Galician Translation
	 * Translated by Jorge Barreiro <yortx.barry@gmail.com>
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["gl"] = {
		defaults : {
			recordtext: "Amosando {0} - {1} de {2}",
		    emptyrecords: "Sen rexistros que amosar",
			loadtext: "Cargando...",
			pgtext : "Páxina {0} de {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
		    caption: "Búsqueda...",
		    Find: "Buscar",
		    Reset: "Limpar",
		    odata: [{ oper:'eq', text:"igual "},{ oper:'ne', text:"diferente a"},{ oper:'lt', text:"menor que"},{ oper:'le', text:"menor ou igual que"},{ oper:'gt', text:"maior que"},{ oper:'ge', text:"maior ou igual a"},{ oper:'bw', text:"empece por"},{ oper:'bn', text:"non empece por"},{ oper:'in', text:"está en"},{ oper:'ni', text:"non está en"},{ oper:'ew', text:"termina por"},{ oper:'en', text:"non termina por"},{ oper:'cn', text:"contén"},{ oper:'nc', text:"non contén"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "todo" },	{ op: "OR",  text: "calquera" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
		    addCaption: "Engadir rexistro",
		    editCaption: "Modificar rexistro",
		    bSubmit: "Gardar",
		    bCancel: "Cancelar",
			bClose: "Pechar",
			saveData: "Modificáronse os datos, quere gardar os cambios?",
			bYes : "Si",
			bNo : "Non",
			bExit : "Cancelar",
		    msg: {
		        required:"Campo obrigatorio",
		        number:"Introduza un número",
		        minValue:"O valor debe ser maior ou igual a ",
		        maxValue:"O valor debe ser menor ou igual a ",
		        email: "non é un enderezo de correo válido",
		        integer: "Introduza un valor enteiro",
				date: "Introduza unha data correcta ",
				url: "non é unha URL válida. Prefixo requerido ('http://' ou 'https://')",
				nodefined : " non está definido.",
				novalue : " o valor de retorno é obrigatorio.",
				customarray : "A función persoalizada debe devolver un array.",
				customfcheck : "A función persoalizada debe estar presente no caso de ter validación persoalizada."
			}
		},
		view : {
		    caption: "Consultar rexistro",
		    bClose: "Pechar"
		},
		del : {
		    caption: "Eliminar",
		    msg: "Desexa eliminar os rexistros seleccionados?",
		    bSubmit: "Eliminar",
		    bCancel: "Cancelar"
		},
		nav : {
			edittext: " ",
		    edittitle: "Modificar a fila seleccionada",
			addtext:" ",
		    addtitle: "Engadir unha nova fila",
		    deltext: " ",
		    deltitle: "Eliminar a fila seleccionada",
		    searchtext: " ",
		    searchtitle: "Buscar información",
		    refreshtext: "",
		    refreshtitle: "Recargar datos",
		    alertcap: "Aviso",
		    alerttext: "Seleccione unha fila",
			viewtext: "",
			viewtitle: "Ver fila seleccionada",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
		    caption: "Mostrar/ocultar columnas",
		    bSubmit: "Enviar",
		    bCancel: "Cancelar"	
		},
		errors : {
			errcap : "Erro",
			nourl : "Non especificou unha URL",
			norecords: "Non hai datos para procesar",
		    model : "As columnas de nomes son diferentes das columnas de modelo"
		},
		formatter : {
			integer : {thousandsSeparator: ".", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Do", "Lu", "Ma", "Me", "Xo", "Ve", "Sa",
					"Domingo", "Luns", "Martes", "Mércoles", "Xoves", "Vernes", "Sábado"
				],
				monthNames: [
					"Xan", "Feb", "Mar", "Abr", "Mai", "Xuñ", "Xul", "Ago", "Set", "Out", "Nov", "Dec",
					"Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd-m-Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "n/j/Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Hebrew Translation
	 * Shuki Shukrun shukrun.shuki@gmail.com
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["he"] = {
		defaults : {
			recordtext: "מציג {0} - {1} מתוך {2}",
			emptyrecords: "אין רשומות להציג",
			loadtext: "טוען...",
			pgtext : "דף {0} מתוך {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "מחפש...",
			Find: "חפש",
			Reset: "התחל",
			odata: [{ oper:'eq', text:"שווה"},{ oper:'ne', text:"לא שווה"},{ oper:'lt', text:"קטן"},{ oper:'le', text:"קטן או שווה"},{ oper:'gt', text:"גדול"},{ oper:'ge', text:"גדול או שווה"},{ oper:'bw', text:"מתחיל ב"},{ oper:'bn', text:"לא מתחיל ב"},{ oper:'in', text:"נמצא ב"},{ oper:'ni', text:"לא נמצא ב"},{ oper:'ew', text:"מסתיים ב"},{ oper:'en', text:"לא מסתיים ב"},{ oper:'cn', text:"מכיל"},{ oper:'nc', text:"לא מכיל"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "הכל" },	{ op: "OR",  text: "אחד מ" }],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "הוסף רשומה",
			editCaption: "ערוך רשומה",
			bSubmit: "שלח",
			bCancel: "בטל",
			bClose: "סגור",
			saveData: "נתונים השתנו! לשמור?",
			bYes : "כן",
			bNo : "לא",
			bExit : "בטל",
			msg: {
				required:"שדה חובה",
				number:"אנא, הכנס מספר תקין",
				minValue:"ערך צריך להיות גדול או שווה ל ",
				maxValue:"ערך צריך להיות קטן או שווה ל ",
				email: "היא לא כתובת איימל תקינה",
				integer: "אנא, הכנס מספר שלם",
				date: "אנא, הכנס תאריך תקין",
				url: "הכתובת אינה תקינה. דרושה תחילית ('http://' או 'https://')",
				nodefined : " is not defined!",
				novalue : " return value is required!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
			}
		},
		view : {
			caption: "הצג רשומה",
			bClose: "סגור"
		},
		del : {
			caption: "מחק",
			msg: "האם למחוק את הרשומה/ות המסומנות?",
			bSubmit: "מחק",
			bCancel: "בטל"
		},
		nav : {
			edittext: "",
			edittitle: "ערוך שורה מסומנת",
			addtext:"",
			addtitle: "הוסף שורה חדשה",
			deltext: "",
			deltitle: "מחק שורה מסומנת",
			searchtext: "",
			searchtitle: "חפש רשומות",
			refreshtext: "",
			refreshtitle: "טען גריד מחדש",
			alertcap: "אזהרה",
			alerttext: "אנא, בחר שורה",
			viewtext: "",
			viewtitle: "הצג שורה מסומנת",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "הצג/הסתר עמודות",
			bSubmit: "שלח",
			bCancel: "בטל"
		},
		errors : {
			errcap : "שגיאה",
			nourl : "לא הוגדרה כתובת url",
			norecords: "אין רשומות לעבד",
			model : "אורך של colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"א", "ב", "ג", "ד", "ה", "ו", "ש",
					"ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"
				],
				monthNames: [
					"ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ",
					"ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
				],
				AmPm : ["לפני הצהרים","אחר הצהרים","לפני הצהרים","אחר הצהרים"],
				S: function (j) {return j < 11 || j > 13 ? ['', '', '', ''][Math.min((j - 1) % 10, 3)] : ''},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Croatian Translation
	 * Version 1.0.1 (developed for jQuery Grid 4.4)
	 * msajko@gmail.com
	 * 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["hr"] = {
		defaults : {
			recordtext: "Pregled {0} - {1} od {2}",
			emptyrecords: "Nema zapisa",
			loadtext: "Učitavam...",
			pgtext : "Stranica {0} od {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Traži...",
			Find: "Pretraživanje",
			Reset: "Poništi",
			odata: [{ oper:'eq', text:"jednak"},{ oper:'ne', text:"nije identičan"},{ oper:'lt', text:"manje"},{ oper:'le', text:"manje ili identično"},{ oper:'gt', text:"veće"},{ oper:'ge', text:"veće ili identično"},{ oper:'bw', text:"počinje sa"},{ oper:'bn', text:"ne počinje sa "},{ oper:'in', text:"je u"},{ oper:'ni', text:"nije u"},{ oper:'ew', text:"završava sa"},{ oper:'en', text:"ne završava sa"},{ oper:'cn', text:"sadrži"},{ oper:'nc', text:"ne sadrži"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "I", text: "sve" },	{ op: "ILI",  text: "bilo koji" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Dodaj zapis",
			editCaption: "Promijeni zapis",
			bSubmit: "Preuzmi",
			bCancel: "Odustani",
			bClose: "Zatvri",
			saveData: "Podaci su promijenjeni! Preuzmi promijene?",
			bYes : "Da",
			bNo : "Ne",
			bExit : "Odustani",
			msg: {
				required:"Polje je obavezno",
				number:"Molim, unesite ispravan broj",
				minValue:"Vrijednost mora biti veća ili identična ",
				maxValue:"Vrijednost mora biti manja ili identična",
				email: "neispravan e-mail",
				integer: "Molim, unjeti ispravan cijeli broj (integer)",
				date: "Molim, unjeti ispravan datum ",
				url: "neispravan URL. Prefiks je obavezan ('http://' or 'https://')",
				nodefined : " nije definiran!",
				novalue : " zahtjevan podatak je obavezan!",
				customarray : "Opcionalna funkcija trebala bi bili polje (array)!",
				customfcheck : "Custom function should be present in case of custom checking!"
				
			}
		},
		view : {
			caption: "Otvori zapis",
			bClose: "Zatvori"
		},
		del : {
			caption: "Obriši",
			msg: "Obriši označen zapis ili više njih?",
			bSubmit: "Obriši",
			bCancel: "Odustani"
		},
		nav : {
			edittext: "",
			edittitle: "Promijeni obilježeni red",
			addtext: "",
			addtitle: "Dodaj novi red",
			deltext: "",
			deltitle: "Obriši obilježeni red",
			searchtext: "",
			searchtitle: "Potraži zapise",
			refreshtext: "",
			refreshtitle: "Ponovo preuzmi podatke",
			alertcap: "Upozorenje",
			alerttext: "Molim, odaberi red",
			viewtext: "",
			viewtitle: "Pregled obilježenog reda",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Obilježi kolonu",
			bSubmit: "Uredu",
			bCancel: "Odustani"
		},
		errors : {
			errcap : "Greška",
			nourl : "Nedostaje URL",
			norecords: "Bez zapisa za obradu",
			model : "colNames i colModel imaju različitu duljinu!"
		},
		formatter : {
			integer : {thousandsSeparator: ".", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub",
					"Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"
				],
				monthNames: [
					"Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro",
					"Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return ''},
				srcformat: 'Y-m-d',
				newformat: 'd.m.Y.',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
					// and see http://docs.jquery.com/UI/Datepicker/formatDate
					// and https://github.com/jquery/globalize#dates for alternative formats used frequently
					ISO8601Long: "Y-m-d H:i:s",
					ISO8601Short: "Y-m-d",
					// short date:
					//    d - Day of the month, 2 digits with leading zeros
					//    m - Numeric representation of a month, with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					ShortDate: "d.m.Y.",	// in jQuery UI Datepicker: "dd.mm.yy."
					// long date:
					//    l - A full textual representation of the day of the week
					//    j - Day of the month without leading zeros
					//    F - A full textual representation of a month
					//    Y - A full numeric representation of a year, 4 digits
					LongDate: "l, j. F Y", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy"
					// long date with long time:
					//    l - A full textual representation of the day of the week
					//    j - Day of the month without leading zeros
					//    F - A full textual representation of a month
					//    Y - A full numeric representation of a year, 4 digits
					//    H - 24-hour format of an hour with leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					FullDateTime: "l, j. F Y H:i:s", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy HH:mm:ss"
					// month day:
					//    d - Day of the month, 2 digits with leading zeros
					//    F - A full textual representation of a month
					MonthDay: "d F", // in jQuery UI Datepicker: "dd MMMM"
					// short time (without seconds)
					//    H - 24-hour format of an hour with leading zeros
					//    i - Minutes with leading zeros
					ShortTime: "H:i", // in jQuery UI Datepicker: "HH:mm"
					// long time (with seconds)
					//    H - 24-hour format of an hour with leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					LongTime: "H:i:s", // in jQuery UI Datepicker: "HH:mm:ss"
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					// month with year
					//    F - A full textual representation of a month
					//    Y - A full numeric representation of a year, 4 digits
					YearMonth: "F Y" // in jQuery UI Datepicker: "MMMM yyyy"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Hungarian Translation
	 * Őrszigety Ádám udx6bs@freemail.hu
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/

	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["hu"] = {
		defaults : {
			recordtext: "Oldal {0} - {1} / {2}",
			emptyrecords: "Nincs találat",
			loadtext: "Betöltés...",
			pgtext : "Oldal {0} / {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Keresés...",
			Find: "Keres",
			Reset: "Alapértelmezett",
			odata: [{ oper:'eq', text:"egyenlő"},{ oper:'ne', text:"nem egyenlő"},{ oper:'lt', text:"kevesebb"},{ oper:'le', text:"kevesebb vagy egyenlő"},{ oper:'gt', text:"nagyobb"},{ oper:'ge', text:"nagyobb vagy egyenlő"},{ oper:'bw', text:"ezzel kezdődik"},{ oper:'bn', text:"nem ezzel kezdődik"},{ oper:'in', text:"tartalmaz"},{ oper:'ni', text:"nem tartalmaz"},{ oper:'ew', text:"végződik"},{ oper:'en', text:"nem végződik"},{ oper:'cn', text:"tartalmaz"},{ oper:'nc', text:"nem tartalmaz"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Új tétel",
			editCaption: "Tétel szerkesztése",
			bSubmit: "Mentés",
			bCancel: "Mégse",
			bClose: "Bezárás",
			saveData: "A tétel megváltozott! Tétel mentése?",
			bYes : "Igen",
			bNo : "Nem",
			bExit : "Mégse",
			msg: {
				required:"Kötelező mező",
				number:"Kérjük, adjon meg egy helyes számot",
				minValue:"Nagyobb vagy egyenlőnek kell lenni mint ",
				maxValue:"Kisebb vagy egyenlőnek kell lennie mint",
				email: "hibás emailcím",
				integer: "Kérjük adjon meg egy helyes egész számot",
				date: "Kérjük adjon meg egy helyes dátumot",
				url: "nem helyes cím. Előtag kötelező ('http://' vagy 'https://')",
				nodefined : " nem definiált!",
				novalue : " visszatérési érték kötelező!!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
				
			}
		},
		view : {
			caption: "Tétel megtekintése",
			bClose: "Bezárás"
		},
		del : {
			caption: "Törlés",
			msg: "Kiválaztott tétel(ek) törlése?",
			bSubmit: "Törlés",
			bCancel: "Mégse"
		},
		nav : {
			edittext: "",
			edittitle: "Tétel szerkesztése",
			addtext:"",
			addtitle: "Új tétel hozzáadása",
			deltext: "",
			deltitle: "Tétel törlése",
			searchtext: "",
			searchtitle: "Keresés",
			refreshtext: "",
			refreshtitle: "Frissítés",
			alertcap: "Figyelmeztetés",
			alerttext: "Kérem válasszon tételt.",
			viewtext: "",
			viewtitle: "Tétel megtekintése",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Oszlopok kiválasztása",
			bSubmit: "Ok",
			bCancel: "Mégse"
		},
		errors : {
			errcap : "Hiba",
			nourl : "Nincs URL beállítva",
			norecords: "Nincs feldolgozásra váró tétel",
			model : "colNames és colModel hossza nem egyenlő!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo",
					"Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"
				],
				monthNames: [
					"Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec",
					"Január", "Február", "Március", "Áprili", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
				],
				AmPm : ["de","du","DE","DU"],
				S: function (j) {return '.-ik';},
				srcformat: 'Y-m-d',
				newformat: 'Y/m/d',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "Y/j/n",
					LongDate: "Y. F hó d., l",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "a g:i",
					LongTime: "a g:i:s",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "Y, F"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Indonesian Translation
	 * Tony Tomov tony@trirand.com
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["id"] = {
		defaults : {
			recordtext: "Data {0} - {1} dari {2}",
			emptyrecords: "Tidak ada data",
			loadtext: "Memuat...",
			pgtext : "Halaman {0} dari {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Pencarian",
			Find: "Cari !",
			Reset: "Segarkan",
			odata: [{ oper:'eq', text:"sama dengan"},{ oper:'ne', text:"tidak sama dengan"},{ oper:'lt', text:"kurang dari"},{ oper:'le', text:"kurang dari atau sama dengan"},{ oper:'gt', text:"lebih besar"},{ oper:'ge', text:"lebih besar atau sama dengan"},{ oper:'bw', text:"dimulai dengan"},{ oper:'bn', text:"tidak dimulai dengan"},{ oper:'in', text:"di dalam"},{ oper:'ni', text:"tidak di dalam"},{ oper:'ew', text:"diakhiri dengan"},{ oper:'en', text:"tidak diakhiri dengan"},{ oper:'cn', text:"mengandung"},{ oper:'nc', text:"tidak mengandung"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Tambah Data",
			editCaption: "Sunting Data",
			bSubmit: "Submit",
			bCancel: "Tutup",
			bClose: "Tutup",
			saveData: "Data telah berubah! Simpan perubahan?",
			bYes : "Ya",
			bNo : "Tidak",
			bExit : "Tutup",
			msg: {
				required:"kolom wajib diisi",
				number:"hanya nomer yang diperbolehkan",
				minValue:"kolom harus lebih besar dari atau sama dengan",
				maxValue:"kolom harus lebih kecil atau sama dengan",
				email: "alamat e-mail tidak valid",
				integer: "hanya nilai integer yang diperbolehkan",
				date: "nilai tanggal tidak valid",
				url: "Bukan URL yang valid. Harap gunakan ('http://' or 'https://')",
				nodefined : " belum didefinisikan!",
				novalue : " return value is required!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
				
			}
		},
		view : {
			caption: "Menampilkan data",
			bClose: "Tutup"
		},
		del : {
			caption: "Hapus",
			msg: "Hapus data terpilih?",
			bSubmit: "Hapus",
			bCancel: "Batalkan"
		},
		nav : {
			edittext: "",
			edittitle: "Sunting data terpilih",
			addtext:"",
			addtitle: "Tambah baris baru",
			deltext: "",
			deltitle: "Hapus baris terpilih",
			searchtext: "",
			searchtitle: "Temukan data",
			refreshtext: "",
			refreshtitle: "Segarkan Grid",
			alertcap: "Warning",
			alerttext: "Harap pilih baris",
			viewtext: "",
			viewtitle: "Tampilkan baris terpilih",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Pilih Kolom",
			bSubmit: "Ok",
			bCancel: "Batal"
		},
		errors : {
			errcap : "Error",
			nourl : "Tidak ada url yang diset",
			norecords: "Tidak ada data untuk diproses",
			model : "Lebar dari colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: ".", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0'},
			currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "Rp. ", suffix:"", defaultValue: '0'},
			date : {
				dayNames:   [
					"Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab",
					"Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
					"Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
				srcformat: 'Y-m-d',
				newformat: 'n/j/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
					// and see http://docs.jquery.com/UI/Datepicker/formatDate
					// and https://github.com/jquery/globalize#dates for alternative formats used frequently
					// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
					// information about date, time, numbers and currency formats used in different countries
					// one should just convert the information in PHP format
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					// short date:
					//    n - Numeric representation of a month, without leading zeros
					//    j - Day of the month without leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					// example: 3/1/2012 which means 1 March 2012
					ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
					// long date:
					//    l - A full textual representation of the day of the week
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
					// long date with long time:
					//    l - A full textual representation of the day of the week
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
					// month day:
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
					// short time (without seconds)
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
					// long time (with seconds)
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					// month with year
					//    Y - A full numeric representation of a year, 4 digits
					//    F - A full textual representation of a month
					YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Icelandic Translation
	 * jtm@hi.is Univercity of Iceland
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["is"] = {
		defaults : {
			recordtext: "Skoða {0} - {1} af {2}",
		    emptyrecords: "Engar færslur",
			loadtext: "Hleður...",
			pgtext : "Síða {0} af {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
		    caption: "Leita...",
		    Find: "Leita",
		    Reset: "Endursetja",
		    odata: [{ oper:'eq', text:"sama og"},{ oper:'ne', text:"ekki sama og"},{ oper:'lt', text:"minna en"},{ oper:'le', text:"minna eða jafnt og"},{ oper:'gt', text:"stærra en"},{ oper:'ge', text:"stærra eða jafnt og"},{ oper:'bw', text:"byrjar á"},{ oper:'bn', text:"byrjar ekki á"},{ oper:'in', text:"er í"},{ oper:'ni', text:"er ekki í"},{ oper:'ew', text:"endar á"},{ oper:'en', text:"endar ekki á"},{ oper:'cn', text:"inniheldur"},{ oper:'nc', text:"inniheldur ekki"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "allt" },	{ op: "OR",  text: "eða" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
		    addCaption: "Bæta við færslu",
		    editCaption: "Breyta færslu",
		    bSubmit: "Vista",
		    bCancel: "Hætta við",
			bClose: "Loka",
			saveData: "Gögn hafa breyst! Vista breytingar?",
			bYes : "Já",
			bNo : "Nei",
			bExit : "Hætta við",
		    msg: {
		        required:"Reitur er nauðsynlegur",
		        number:"Vinsamlega settu inn tölu",
		        minValue:"gildi verður að vera meira en eða jafnt og ",
		        maxValue:"gildi verður að vera minna en eða jafnt og ",
		        email: "er ekki löglegt email",
		        integer: "Vinsamlega settu inn tölu",
				date: "Vinsamlega setti inn dagsetningu",
				url: "er ekki löglegt URL. Vantar ('http://' eða 'https://')",
				nodefined : " er ekki skilgreint!",
				novalue : " skilagildi nauðsynlegt!",
				customarray : "Fall skal skila fylki!",
				customfcheck : "Fall skal vera skilgreint!"
			}
		},
		view : {
		    caption: "Skoða færslu",
		    bClose: "Loka"
		},
		del : {
		    caption: "Eyða",
		    msg: "Eyða völdum færslum ?",
		    bSubmit: "Eyða",
		    bCancel: "Hætta við"
		},
		nav : {
			edittext: " ",
		    edittitle: "Breyta færslu",
			addtext:" ",
		    addtitle: "Ný færsla",
		    deltext: " ",
		    deltitle: "Eyða færslu",
		    searchtext: " ",
		    searchtitle: "Leita",
		    refreshtext: "",
		    refreshtitle: "Endurhlaða",
		    alertcap: "Viðvörun",
		    alerttext: "Vinsamlega veldu færslu",
			viewtext: "",
			viewtitle: "Skoða valda færslu",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
		    caption: "Sýna / fela dálka",
		    bSubmit: "Vista",
		    bCancel: "Hætta við"	
		},
		errors : {
			errcap : "Villa",
			nourl : "Vantar slóð",
			norecords: "Engar færslur valdar",
		    model : "Lengd colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau",
					"Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Oct", "Nóv", "Des",
					"Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júný", "Júlý", "Ágúst", "September", "Október", "Nóvember", "Desember"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "n/j/Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["it"] = {
		defaults : {
			recordtext: "Mostra {0} - {1} di {2}",
			emptyrecords: "Non ci sono record da mostrare",
			loadtext: "Caricamento...",
			savetext: "Salvataggio...",
			pgtext : "Pagina {0} di {1}",
			pgfirst : "Prima Pagina",
			pglast : "Ultima Pagina",
			pgnext : "Pagina Successiva",
			pgprev : "Pagina Precedente",
			pgrecs : "Records per Pagina",
			showhide: "Espandi o collassa griglia",
			// mobile
			pagerCaption : "Griglia::Impostaioni della pagina",
			pageText : "Pagina:",
			recordPage : "Records per Pagina",
			nomorerecs : "Non ci sono altri record...",
			scrollPullup: "Trascina verso l'alto per altri...",
			scrollPulldown : "Trascina verso il basso per aggiornare...",
			scrollRefresh : "Rilascia per aggiornare..."
		},
		search : {
			caption: "Cerca...",
			Find: "Trova",
			Reset: "Reset",
			odata: [{ oper:'eq', text:'uguale'},{ oper:'ne', text:'diverso'},{ oper:'lt', text:'minore'},{ oper:'le', text:'minore o uguale'},{ oper:'gt', text:'maggiore'},{ oper:'ge', text:'maggiore o uguale'},{ oper:'bw', text:'inizia per'},{ oper:'bn', text:'non inizia per'},{ oper:'in', text:'è in'},{ oper:'ni', text:'non è in'},{ oper:'ew', text:'finisce per'},{ oper:'en', text:'non finisce per'},{ oper:'cn', text:'contiene'},{ oper:'nc', text:'non contiene'},{ oper:'nu', text:'è null'},{ oper:'nn', text:'non è null'}, {oper:'bt', text:'between'}],
			groupOps: [{ op: "AND", text: "tutti" },{ op: "OR",  text: "ciascuno" }],
			operandTitle : "Clicca sull'opzione di ricerca scelta.",
			resetTitle : "Resetta valori di ricerca",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Aggiungi Record",
			editCaption: "Modifica Record",
			bSubmit: "Invia",
			bCancel: "Annulla",
			bClose: "Chiudi",
			saveData: "I dati sono stati modificati! Salvare le modifiche?",
			bYes : "Si",
			bNo : "No",
			bExit : "Annulla",
			msg: {
				required:"Campo obbligatorio",
				number:"Per favore, inserisci un numero valido",
				minValue:"il valore deve essere maggiore o uguale a ",
				maxValue:"il valore deve essere minore o uguale a ",
				email: "non è una e-mail valida",
				integer: "Per favore, inserisci un intero valido",
				date: "Per favore, inserisci una data valida",
				url: "non è un URL valido. Prefissi richiesti ('http://' o 'https://')",
				nodefined : " non è definito!",
				novalue : " valore di ritorno richiesto!",
				customarray : "La funzione personalizzata deve restituire un array!",
				customfcheck : "La funzione personalizzata deve essere presente in caso di controlli personalizzati!"
				
			}
		},
		view : {
			caption: "Visualizza Record",
			bClose: "Chiudi"
		},
		del : {
			caption: "Cancella",
			msg: "Cancellare i record selezionati?",
			bSubmit: "Canella",
			bCancel: "Annulla"
		},
		nav : {
			edittext: "",
			edittitle: "Modifica riga selezionata",
			addtext:"",
			addtitle: "Aggiungi riga",
			deltext: "",
			deltitle: "Cancella riga",
			searchtext: "",
			searchtitle: "Trova record",
			refreshtext: "",
			refreshtitle: "Ricarica tabella",
			alertcap: "Attenzione",
			alerttext: "Per favore, seleziona un record",
			viewtext: "",
			viewtitle: "Visualizza riga selezionata",
			savetext: "",
			savetitle: "Salva riga",
			canceltext: "",
			canceltitle : "Annulla modifica riga",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Seleziona colonne",
			bSubmit: "Ok",
			bCancel: "Annulla"
		},
		errors : {
			errcap : "Errore",
			nourl : "Nessun url impostato",
			norecords: "Non ci sono record da elaborare",
			model : "Lunghezza dei colNames <> colModel!"
		},
		formatter:{
			integer:{ 
				thousandsSeparator:".",
				defaultValue:"0"
			},
			number:{
				decimalSeparator:",",
				thousandsSeparator:".",
				decimalPlaces:2,
				defaultValue:"0,00"
			},
			currency:{
				decimalSeparator:",",
				thousandsSeparator:".",
				decimalPlaces:2,
				prefix:"€ ",
				suffix:"",
				defaultValue:"0,00"
			},
			date:{
				dayNames:["Dom","Lun","Mar","Mer","Gio","Ven","Sab","Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],
				monthNames:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic","Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
				AmPm:["am","pm","AM","PM"],
				S:function(b){return b<11||b>13?["st","nd","rd","th"][Math.min((b-1)%10,3)]:"th"},
				srcformat:"Y-m-d",
				newformat:"d/m/Y",
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks:{
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d", 
					ShortDate:"d/m/Y", 
					LongDate:"l d F Y",
					FullDateTime:"l d F Y G:i:s",
					MonthDay:"F d",
					ShortTime:"H:i",
					LongTime:"H:i:s",
					SortableDateTime:"Y-m-d\\TH:i:s",
					UniversalSortableDateTime:"Y-m-d H:i:sO",
					YearMonth:"F, Y"
				},
				reformatAfterEdit:false,
				userLocalTime : false
			},
			baseLinkUrl:"",
			showAction:"",
			target:"",
			checkbox:{ disabled:true},
			idName:"id"
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Japanese Translation
	 * OKADA Yoshitada okada.dev@sth.jp
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["ja"] = {
		defaults : {
			recordtext: "{2} \u4EF6\u4E2D {0} - {1} \u3092\u8868\u793A ",
		    emptyrecords: "\u8868\u793A\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u3042\u308A\u307E\u305B\u3093",
			loadtext: "\u8aad\u307f\u8fbc\u307f\u4e2d...",
			pgtext : "{1} \u30DA\u30FC\u30B8\u4E2D {0} \u30DA\u30FC\u30B8\u76EE ",
			savetext: "\u4fdd\u5b58\u4e2d...",
			pgfirst : "\u6700\u521d\u306e\u30da\u30fc\u30b8\u3078",
			pglast : "\u6700\u5f8c\u306e\u30da\u30fc\u30b8\u3078",
			pgnext : "\u6b21\u306e\u30da\u30fc\u30b8",
			pgprev : "\u524d\u306e\u30da\u30fc\u30b8",
			pgrecs : "\u30da\u30fc\u30b8\u5358\u4f4d\u306e\u30ec\u30b3\u30fc\u30c9\u6570",
			showhide: "\u30b0\u30ea\u30c3\u30c9\u306e\u5c55\u958b/\u9589\u3058\u8fbc\u307f",
			// mobile
			pagerCaption : "\u30b0\u30ea\u30c3\u30c9::\u30da\u30fc\u30b8\u8a2d\u5b9a",
			pageText : "\u30da\u30fc\u30b8:",
			recordPage : "\u30da\u30fc\u30b8\u5358\u4f4d\u306e\u30ec\u30b3\u30fc\u30c9\u6570",
			nomorerecs : "\u30ec\u30b3\u30fc\u30c9\u304c\u3042\u308a\u307e\u305b\u3093...",
			scrollPullup: "\u4e0a\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u8aad\u307f\u8fbc\u307f...",
			scrollPulldown : "\u4e0b\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u66f4\u65b0...",
			scrollRefresh : "\u653e\u3057\u3066\u66f4\u65b0..."
		},
		search : {
		    caption: "\u691c\u7d22...",
		    Find: "\u691c\u7d22",
		    Reset: "\u30ea\u30bb\u30c3\u30c8",
		    odata: [{ oper:'eq', text:"\u6B21\u306B\u7B49\u3057\u3044"}, { oper:'ne', text:"\u6B21\u306B\u7B49\u3057\u304F\u306A\u3044"},
	            { oper:'lt', text:"\u6B21\u3088\u308A\u5C0F\u3055\u3044"}, { oper:'le', text:"\u6B21\u306B\u7B49\u3057\u3044\u304B\u5C0F\u3055\u3044"},
	            { oper:'gt', text:"\u6B21\u3088\u308A\u5927\u304D\u3044"}, { oper:'ge', text:"\u6B21\u306B\u7B49\u3057\u3044\u304B\u5927\u304D\u3044"},
	            { oper:'bw', text:"\u6B21\u3067\u59CB\u307E\u308B"}, { oper:'bn', text:"\u6B21\u3067\u59CB\u307E\u3089\u306A\u3044"},
	            { oper:'in', text:"\u6B21\u306B\u542B\u307E\u308C\u308B"}, { oper:'ni', text:"\u6B21\u306B\u542B\u307E\u308C\u306A\u3044"},
	            { oper:'ew', text:"\u6B21\u3067\u7D42\u308F\u308B"}, { oper:'en', text:"\u6B21\u3067\u7D42\u308F\u3089\u306A\u3044"},
	            { oper:'cn', text:"\u6B21\u3092\u542B\u3080"}, { oper:'nc', text:"\u6B21\u3092\u542B\u307E\u306A\u3044"},
				{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [{
	                op: "AND",
	                text: "\u3059\u3079\u3066\u306E"
	            },
	            {
	                op: "OR",
	                text: "\u3044\u305A\u308C\u304B\u306E"
	            }],
			operandTitle : "\u30af\u30ea\u30c3\u30af\u3057\u3066\u691c\u7d22\u64cd\u4f5c\u3092\u9078\u629e",
			resetTitle : "\u691c\u7d22\u5024\u3092\u30ea\u30bb\u30c3\u30c8",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"		
		},
		edit : {
		    addCaption: "\u30ec\u30b3\u30fc\u30c9\u8ffd\u52a0",
		    editCaption: "\u30ec\u30b3\u30fc\u30c9\u7de8\u96c6",
		    bSubmit: "\u9001\u4fe1",
		    bCancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
	  		bClose: "\u9589\u3058\u308b",
	      saveData: "\u30C7\u30FC\u30BF\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F",
	      bYes: "\u306F\u3044",
	      bNo: "\u3044\u3044\u3048",
	      bExit: "\u30AD\u30E3\u30F3\u30BB\u30EB",
		    msg: {
		        required:"\u3053\u306e\u9805\u76ee\u306f\u5fc5\u9808\u3067\u3059\u3002",
		        number:"\u6b63\u3057\u3044\u6570\u5024\u3092\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002",
		        minValue:"\u6b21\u306e\u5024\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002",
		        maxValue:"\u6b21\u306e\u5024\u4ee5\u4e0b\u3067\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002",
		        email: "e-mail\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093\u3002",
		        integer: "\u6b63\u3057\u3044\u6574\u6570\u5024\u3092\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002",
	    			date: "\u6b63\u3057\u3044\u5024\u3092\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002",
	          url: "\u306F\u6709\u52B9\u306AURL\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\20\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B9\u304C\u5FC5\u8981\u3067\u3059\u3002 ('http://' \u307E\u305F\u306F 'https://')",
	          nodefined: " \u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
	          novalue: " \u623B\u308A\u5024\u304C\u5FC5\u8981\u3067\u3059",
	          customarray: "\u30AB\u30B9\u30BF\u30E0\u95A2\u6570\u306F\u914D\u5217\u3092\u8FD4\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
	          customfcheck: "\u30AB\u30B9\u30BF\u30E0\u691C\u8A3C\u306B\u306F\u30AB\u30B9\u30BF\u30E0\u95A2\u6570\u304C\u5FC5\u8981\u3067\u3059"
			}
		},
		view : {
	      caption: "\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A",
	      bClose: "\u9589\u3058\u308B"
		},
		del : {
		    caption: "\u524a\u9664",
		    msg: "\u9078\u629e\u3057\u305f\u30ec\u30b3\u30fc\u30c9\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
		    bSubmit: "\u524a\u9664",
		    bCancel: "\u30ad\u30e3\u30f3\u30bb\u30eb"
		},
		nav : {
	    	edittext: " ",
		    edittitle: "\u9078\u629e\u3057\u305f\u884c\u3092\u7de8\u96c6",
	      addtext:" ",
		    addtitle: "\u884c\u3092\u65b0\u898f\u8ffd\u52a0",
		    deltext: " ",
		    deltitle: "\u9078\u629e\u3057\u305f\u884c\u3092\u524a\u9664",
		    searchtext: " ",
		    searchtitle: "\u30ec\u30b3\u30fc\u30c9\u691c\u7d22",
		    refreshtext: "",
		    refreshtitle: "\u30b0\u30ea\u30c3\u30c9\u3092\u30ea\u30ed\u30fc\u30c9",
		    alertcap: "\u8b66\u544a",
		    alerttext: "\u884c\u3092\u9078\u629e\u3057\u3066\u4e0b\u3055\u3044\u3002",
	      viewtext: "",
	      viewtitle: "\u9078\u629E\u3057\u305F\u884C\u3092\u8868\u793A",
			savetext: "",
			savetitle: "\u5217\u3092\u4fdd\u5b58",
			canceltext: "",
			canceltitle : "\u5217\u306e\u7de8\u96c6\u3092\u30ad\u30e3\u30f3\u30bb\u30eb",
			selectcaption : "\u30a2\u30af\u30b7\u30e7\u30f3..."
		},
		col : {
		    caption: "\u5217\u3092\u8868\u793a\uff0f\u96a0\u3059",
		    bSubmit: "\u9001\u4fe1",
		    bCancel: "\u30ad\u30e3\u30f3\u30bb\u30eb"	
		},
		errors : {
			errcap : "\u30a8\u30e9\u30fc",
			nourl : "URL\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002",
			norecords: "\u51e6\u7406\u5bfe\u8c61\u306e\u30ec\u30b3\u30fc\u30c9\u304c\u3042\u308a\u307e\u305b\u3093\u3002",
		    model : "colNames\u306e\u9577\u3055\u304ccolModel\u3068\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002"
		},
		formatter : {
	            integer: {
	                thousandsSeparator: ",",
	                defaultValue: '0'
	            },
	            number: {
	                decimalSeparator: ".",
	                thousandsSeparator: ",",
	                decimalPlaces: 2,
	                defaultValue: '0.00'
	            },
	            currency: {
	                decimalSeparator: ".",
	                thousandsSeparator: ",",
	                decimalPlaces: 0,
	                prefix: "",
	                suffix: "",
	                defaultValue: '0'
	            },
			date : {
				dayNames:   [
					"\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f",
					"\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"
				],
				monthNames: [
					"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
					"1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) { return "\u756a\u76ee"; },
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "n/j/Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid English Translation
	 * Tony Tomov tony@trirand.com
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["kr"] = {
		defaults : {
			recordtext: "보기 {0} - {1} / {2}",
			emptyrecords: "표시할 행이 없습니다",
			loadtext: "조회중...",
			pgtext : "페이지 {0} / {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "검색...",
			Find: "찾기",
			Reset: "초기화",
			odata: [{ oper:'eq', text:"같다"},{ oper:'ne', text:"같지 않다"},{ oper:'lt', text:"작다"},{ oper:'le', text:"작거나 같다"},{ oper:'gt', text:"크다"},{ oper:'ge', text:"크거나 같다"},{ oper:'bw', text:"로 시작한다"},{ oper:'bn', text:"로 시작하지 않는다"},{ oper:'in', text:"내에 있다"},{ oper:'ni', text:"내에 있지 않다"},{ oper:'ew', text:"로 끝난다"},{ oper:'en', text:"로 끝나지 않는다"},{ oper:'cn', text:"내에 존재한다"},{ oper:'nc', text:"내에 존재하지 않는다"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "전부" },	{ op: "OR",  text: "임의" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "행 추가",
			editCaption: "행 수정",
			bSubmit: "전송",
			bCancel: "취소",
			bClose: "닫기",
			saveData: "자료가 변경되었습니다! 저장하시겠습니까?",
			bYes : "예",
			bNo : "아니오",
			bExit : "취소",
			msg: {
				required:"필수항목입니다",
				number:"유효한 번호를 입력해 주세요",
				minValue:"입력값은 크거나 같아야 합니다",
				maxValue:"입력값은 작거나 같아야 합니다",
				email: "유효하지 않은 이메일주소입니다",
				integer: "유효한 숫자를 입력하세요",
				date: "유효한 날짜를 입력하세요",
				url: "은 유효하지 않은 URL입니다. 문장앞에 다음단어가 필요합니다('http://' or 'https://')",
				nodefined : " 은 정의도지 않았습니다!",
				novalue : " 반환값이 필요합니다!",
				customarray : "사용자정의 함수는 배열을 반환해야 합니다!",
				customfcheck : "Custom function should be present in case of custom checking!"
				
			}
		},
		view : {
			caption: "행 조회",
			bClose: "닫기"
		},
		del : {
			caption: "삭제",
			msg: "선택된 행을 삭제하시겠습니까?",
			bSubmit: "삭제",
			bCancel: "취소"
		},
		nav : {
			edittext: "",
			edittitle: "선택된 행 편집",
			addtext:"",
			addtitle: "행 삽입",
			deltext: "",
			deltitle: "선택된 행 삭제",
			searchtext: "",
			searchtitle: "행 찾기",
			refreshtext: "",
			refreshtitle: "그리드 갱신",
			alertcap: "경고",
			alerttext: "행을 선택하세요",
			viewtext: "",
			viewtitle: "선택된 행 조회",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "열을 선택하세요",
			bSubmit: "확인",
			bCancel: "취소"
		},
		errors : {
			errcap : "오류",
			nourl : "설정된 url이 없습니다",
			norecords: "처리할 행이 없습니다",
			model : "colNames의 길이가 colModel과 일치하지 않습니다!"
		},
		formatter : {
			integer : {thousandsSeparator: ",", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
					"일", "월", "화", "수", "목", "금", "토"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'm-d-Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "Y/j/n",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Lithuanian Translation
	 * aur1mas aur1mas@devnet.lt
	 * http://aur1mas.devnet.lt
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["lt"] = {
		defaults : {
			recordtext: "Peržiūrima {0} - {1} iš {2}",
			emptyrecords: "Įrašų nėra",
			loadtext: "Kraunama...",
			pgtext : "Puslapis {0} iš {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Paieška...",
			Find: "Ieškoti",
			Reset: "Atstatyti",
			odata: [{ oper:'eq', text:"lygu"},{ oper:'ne', text:"nelygu"},{ oper:'lt', text:"mažiau"},{ oper:'le', text:"mažiau arba lygu"},{ oper:'gt', text:"daugiau"},{ oper:'ge', text:"daugiau arba lygu"},{ oper:'bw', text:"prasideda"},{ oper:'bn', text:"neprasideda"},{ oper:'in', text:"reikšmė yra"},{ oper:'ni', text:"reikšmės nėra"},{ oper:'ew', text:"baigiasi"},{ oper:'en', text:"nesibaigia"},{ oper:'cn', text:"yra sudarytas"},{ oper:'nc', text:"nėra sudarytas"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "visi" },	{ op: "OR",  text: "bet kuris" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Sukurti įrašą",
			editCaption: "Redaguoti įrašą",
			bSubmit: "Išsaugoti",
			bCancel: "Atšaukti",
			bClose: "Uždaryti",
			saveData: "Duomenys buvo pakeisti! Išsaugoti pakeitimus?",
			bYes : "Taip",
			bNo : "Ne",
			bExit : "Atšaukti",
			msg: {
				required:"Privalomas laukas",
				number:"Įveskite tinkamą numerį",
				minValue:"reikšmė turi būti didesnė arba lygi ",
				maxValue:"reikšmė turi būti mažesnė arba lygi",
				email: "neteisingas el. pašto adresas",
				integer: "Įveskite teisingą sveikąjį skaičių",
				date: "Įveskite teisingą datą",
				url: "blogas adresas. Nepamirškite pridėti ('http://' arba 'https://')",
				nodefined : " nėra apibrėžta!",
				novalue : " turi būti gražinama kokia nors reikšmė!",
				customarray : "Custom f-ja turi grąžinti masyvą!",
				customfcheck : "Custom f-ja tūrėtų būti sukurta, prieš bandant ją naudoti!"
				
			}
		},
		view : {
			caption: "Peržiūrėti įrašus",
			bClose: "Uždaryti"
		},
		del : {
			caption: "Ištrinti",
			msg: "Ištrinti pažymėtus įrašus(-ą)?",
			bSubmit: "Ištrinti",
			bCancel: "Atšaukti"
		},
		nav : {
			edittext: "",
			edittitle: "Redaguoti pažymėtą eilutę",
			addtext:"",
			addtitle: "Pridėti naują eilutę",
			deltext: "",
			deltitle: "Ištrinti pažymėtą eilutę",
			searchtext: "",
			searchtitle: "Rasti įrašus",
			refreshtext: "",
			refreshtitle: "Perkrauti lentelę",
			alertcap: "Įspėjimas",
			alerttext: "Pasirinkite eilutę",
			viewtext: "",
			viewtitle: "Peržiūrėti pasirinktą eilutę",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Pasirinkti stulpelius",
			bSubmit: "Gerai",
			bCancel: "Atšaukti"
		},
		errors : {
			errcap : "Klaida",
			nourl : "Url reikšmė turi būti perduota",
			norecords: "Nėra įrašų, kuriuos būtų galima apdoroti",
			model : "colNames skaičius <> colModel skaičiui!"
		},
		formatter : {
			integer : {thousandsSeparator: "", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš",
					"Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"
				],
				monthNames: [
					"Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugj", "Rugs", "Spa", "Lap", "Gru",
					"Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Montenegrian Translation
	 * Bild Studio info@bild-studio.net
	 * http://www.bild-studio.com
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["me"] = {
		defaults : {
			recordtext: "Pregled {0} - {1} od {2}",
			emptyrecords: "Ne postoji nijedan zapis",
			loadtext: "Učitivanje...",
			pgtext : "Strana {0} od {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Traženje...",
			Find: "Traži",
			Reset: "Resetuj",
			odata: [{ oper:'eq', text:"jednako"},{ oper:'ne', text:"nije jednako"},{ oper:'lt', text:"manje"},{ oper:'le', text:"manje ili jednako"},{ oper:'gt', text:"veće"},{ oper:'ge', text:"veće ili jednako"},{ oper:'bw', text:"počinje sa"},{ oper:'bn', text:"ne počinje sa"},{ oper:'in', text:"je u"},{ oper:'ni', text:"nije u"},{ oper:'ew', text:"završava sa"},{ oper:'en', text:"ne završava sa"},{ oper:'cn', text:"sadrži"},{ oper:'nc', text:"ne sadrži"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "sva" },	{ op: "OR",  text: "bilo koje" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Dodaj zapis",
			editCaption: "Izmjeni zapis",
			bSubmit: "Pošalji",
			bCancel: "Odustani",
			bClose: "Zatvori",
			saveData: "Podatak je izmjenjen! Sačuvaj izmjene?",
			bYes : "Da",
			bNo : "Ne",
			bExit : "Odustani",
			msg: {
				required:"Polje je obavezno",
				number:"Unesite ispravan broj",
				minValue:"vrijednost mora biti veća od ili jednaka sa ",
				maxValue:"vrijednost mora biti manja ili jednaka sa",
				email: "nije ispravna email adresa, nije valjda da ne umiješ ukucati mail!?",
				integer: "Ne zajebaji se unesi cjelobrojnu vrijednost ",
				date: "Unesite ispravan datum",
				url: "nije ispravan URL. Potreban je prefiks ('http://' or 'https://')",
				nodefined : " nije definisan!",
				novalue : " zahtjevana je povratna vrijednost!",
				customarray : "Prilagođena funkcija treba da vrati niz!",
				customfcheck : "Prilagođena funkcija treba da bude prisutana u slučaju prilagođene provjere!"
				
			}
		},
		view : {
			caption: "Pogledaj zapis",
			bClose: "Zatvori"
		},
		del : {
			caption: "Izbrisi",
			msg: "Izbrisi izabran(e) zapise(e)?",
			bSubmit: "Izbriši",
			bCancel: "Odbaci"
		},
		nav : {
			edittext: "",
			edittitle: "Izmjeni izabrani red",
			addtext:"",
			addtitle: "Dodaj novi red",
			deltext: "",
			deltitle: "Izbriši izabran red",
			searchtext: "",
			searchtitle: "Nađi zapise",
			refreshtext: "",
			refreshtitle: "Ponovo učitaj podatke",
			alertcap: "Upozorenje",
			alerttext: "Izaberite red",
			viewtext: "",
			viewtitle: "Pogledaj izabrani red",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Izaberi kolone",
			bSubmit: "OK",
			bCancel: "Odbaci"
		},
		errors : {
			errcap : "Greška",
			nourl : "Nije postavljen URL",
			norecords: "Nema zapisa za obradu",
			model : "Dužina modela colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub",
					"Nedelja", "Ponedeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec",
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//NETHERLANDS
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["nl"] = {
	        defaults:
	        {
	            recordtext: "regels {0} - {1} van {2}",
	            emptyrecords: "Geen data gevonden.",
	            loadtext: "Laden...",
	            pgtext: "pagina  {0}  van {1}",
				savetext: "Saving...",
				pgfirst : "Eerste Pagina",
				pglast : "Laatste Pagina",
				pgnext : "Volgende Pagina",
				pgprev : "Vorige Pagina",
				pgrecs : "Records per Pagina",
				showhide: "Schakelen Uitklappen Inklappen Grid",
				// mobile
				pagerCaption : "Grid::Page Settings",
				pageText : "Page:",
				recordPage : "Records per Page",
				nomorerecs : "No more records...",
				scrollPullup: "Pull up to load more...",
				scrollPulldown : "Pull down to refresh...",
				scrollRefresh : "Release to refresh..."
	        },
	        search:
	        {
	            caption: "Zoeken...",
	            Find: "Zoek",
	            Reset: "Herstellen",
	            odata: [{ oper:'eq', text:"gelijk aan"},{ oper:'ne', text:"niet gelijk aan"},{ oper:'lt', text:"kleiner dan"},{ oper:'le', text:"kleiner dan of gelijk aan"},{ oper:'gt', text:"groter dan"},{ oper:'ge', text:"groter dan of gelijk aan"},{ oper:'bw', text:"begint met"},{ oper:'bn', text:"begint niet met"},{ oper:'in', text:"is in"},{ oper:'ni', text:"is niet in"},{ oper:'ew', text:"eindigt met"},{ oper:'en', text:"eindigt niet met"},{ oper:'cn', text:"bevat"},{ oper:'nc', text:"bevat niet"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
	            groupOps: [{ op: "AND", text: "alle" }, { op: "OR", text: "een van de"}],
				operandTitle : "Klik om de zoekterm te selecteren.",
				resetTitle : "Herstel zoekterm",
				addsubgrup : "Add subgroup",
				addrule : "Add rule",
				delgroup : "Delete group",
				delrule : "Delete rule"
	        },
	        edit:
	        {
	            addCaption: "Nieuw",
	            editCaption: "Bewerken",
	            bSubmit: "Opslaan",
	            bCancel: "Annuleren",
	            bClose: "Sluiten",
	            saveData: "Er is data aangepast! Wijzigingen opslaan?",
	            bYes: "Ja",
	            bNo: "Nee",
	            bExit: "Sluiten",
	            msg:
	            {
	                required: "Veld is verplicht",
	                number: "Voer a.u.b. geldig nummer in",
	                minValue: "Waarde moet groter of gelijk zijn aan ",
	                maxValue: "Waarde moet kleiner of gelijk zijn aan",
	                email: "is geen geldig e-mailadres",
	                integer: "Voer a.u.b. een geldig getal in",
	                date: "Voer a.u.b. een geldige waarde in",
	                url: "is geen geldige URL. Prefix is verplicht ('http://' or 'https://')",
	                nodefined : " is niet gedefineerd!",
	                novalue : " return waarde is verplicht!",
	                customarray : "Aangepaste functie moet array teruggeven!",
	                customfcheck : "Aangepaste function moet aanwezig zijn in het geval van aangepaste controle!"
	            }
	        },
	        view:
	        {
	            caption: "Tonen",
	            bClose: "Sluiten"
	        },
	        del:
	        {
	            caption: "Verwijderen",
	            msg: "Verwijder geselecteerde regel(s)?",
	            bSubmit: "Verwijderen",
	            bCancel: "Annuleren"
	        },
	        nav:
	        {
	            edittext: "",
	            edittitle: "Bewerken",
	            addtext: "",
	            addtitle: "Nieuw",
	            deltext: "",
	            deltitle: "Verwijderen",
	            searchtext: "",
	            searchtitle: "Zoeken",
	            refreshtext: "",
	            refreshtitle: "Vernieuwen",
	            alertcap: "Waarschuwing",
	            alerttext: "Selecteer a.u.b. een regel",
	            viewtext: "",
	            viewtitle: "Openen",
				savetext: "",
				savetitle: "Save row",
				canceltext: "",
				canceltitle : "Cancel row editing",
				selectcaption : "Actions..."
	        },
	        col:
	        {
	            caption: "Tonen/verbergen kolommen",
	            bSubmit: "OK",
	            bCancel: "Annuleren"
	        },
	        errors:
	        {
	            errcap: "Fout",
	            nourl: "Er is geen URL gedefinieerd",
	            norecords: "Geen data om te verwerken",
	            model: "Lengte van 'colNames' is niet gelijk aan 'colModel'!"
	        },
	        formatter:
	        {
	            integer:
	            {
	                thousandsSeparator: ".",
	                defaultValue: "0"
	            },
	            number:
	            {
	                decimalSeparator: ",",
	                thousandsSeparator: ".",
	                decimalPlaces: 2,
	                defaultValue: "0.00"
	            },
	            currency:
	            {
	                decimalSeparator: ",",
	                thousandsSeparator: ".",
	                decimalPlaces: 2,
	                prefix: "EUR ",
	                suffix: "",
	                defaultValue: "0.00"
	            },
	            date:
	            {
	                dayNames: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
	                monthNames: ["Jan", "Feb", "Maa", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "December"],
	                AmPm: ["am", "pm", "AM", "PM"],
	                S: function(b) {
	                    return b < 11 || b > 13 ? ["st", "nd", "rd", "th"][Math.min((b - 1) % 10, 3)] : "th"
	                },
	                srcformat: "Y-m-d",
	                newformat: "d/m/Y",
					parseRe : /[#%\\\/:_;.,\t\s-]/,
	                masks:
	                {
	                    ISO8601Long: "Y-m-d H:i:s",
	                    ISO8601Short: "Y-m-d",
	                    ShortDate: "n/j/Y",
	                    LongDate: "l, F d, Y",
	                    FullDateTime: "l d F Y G:i:s",
	                    MonthDay: "d F",
	                    ShortTime: "G:i",
	                    LongTime: "G:i:s",
	                    SortableDateTime: "Y-m-d\\TH:i:s",
	                    UniversalSortableDateTime: "Y-m-d H:i:sO",
	                    YearMonth: "F, Y"
	                },
	                reformatAfterEdit: false,
					userLocalTime : false
	            },
	            baseLinkUrl: "",
	            showAction: "",
	            target: "",
	            checkbox:
	            {
	                disabled: true
	            },
	            idName: "id"
	        },
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	    };
	}));


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//NORWAY
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["no"] = {
	    defaults : {
	        recordtext: "Rad {0} - {1}, totalt {2}",
	        loadtext: "Laster...",
	        pgtext: "Side {0} av {1}",
			savetext: "Saving...",
	        pgfirst: "First Page",
	        pglast: "Last Page",
	        pgnext: "Next Page",
	        pgprev: "Previous Page",
	        pgrecs: "Records per Page",
	        showhide: "Toggle Expand Collapse Grid",
	        emptyrecords: "Ingen poster funnet",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."

	    },
	    search : {
			caption: "Søk...", 
			Find: "Finn", 
			Reset: "Nullstill", 
			odata: [
	        {oper: 'eq', text: "lik"},
	        {oper: 'ne', text: "forskjellig fra"},
	        {oper: 'lt', text: "mindre enn"},
	        {oper: 'le', text: "mindre eller lik"},
	        {oper: 'gt', text: "større enn"},
	        {oper: 'ge', text: " større eller lik"},
	        {oper: 'bw', text: "starter med"},
	        {oper: 'ew', text: "slutter med"},
	        {oper: 'cn', text: "inneholder"},
	        { oper: 'nu', text: 'is null'},
	        { oper: 'nn', text: 'is not null'}, 
			{oper:'bt', text:'between'}
			], 
			operandTitle: "Click to select search operation.", 
			resetTitle: "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
	    edit : {addCaption: "Ny rad", editCaption: "Rediger", bSubmit: "Send", bCancel: "Avbryt", bClose: "Lukk", processData: "Laster...", msg: {required: "Felt er obligatorisk", number: "Legg inn et gyldig tall", minValue: "verdi mø vøre større enn eller lik", maxValue: "verdi må være mindre enn eller lik", email: "er ikke en gyldig e-post adresse", integer: "Legg inn et gyldig heltall", date: "Legg inn en gyldig dato", url: "er ikke en gyldig URL. Prefiks påkrevd ('http://' eller 'https://')", nodefined: " er ikke definert!", novalue: " returverdi er påkrevd!", customarray: "Tilpasset funksjon må returnere en tabell!", customfcheck: "Tilpasset funksjon må eksistere!"}},
	    view : {caption: "Åpne post", bClose: "Lukk"},
	    del : {caption: "Slett", msg: "Slett valgte rad(er)?", bSubmit: "Slett", bCancel: "Avbryt", processData: "Behandler..."},
	    nav : {edittext: " ", edittitle: "Rediger valgte rad(er)", addtext: " ", addtitle: "Legg til ny rad", deltext: " ", deltitle: "Slett valgte rad(er)", searchtext: " ", searchtitle: "Søk", refreshtext: "", refreshtitle: "Oppdater tabell", alertcap: "Advarsel", alerttext: "Velg rad", viewtext: " ", viewtitle: "Åpne valgt rad",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
	    col : {caption: "Vis/skjul kolonner", bSubmit: "Utfør", bCancel: "Avbryt"},
	    errors : {errcap: "Feil", nourl: "Ingen url er satt", norecords: "Ingen poster å behandle", model: "colNames og colModel har forskjellig lengde!"},
	    formatter : {integer: {thousandsSeparator: " ", defaultValue: 0}, number: {decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, defaulValue: 0}, currency: {decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaulValue: 0}, date: {dayNames: ["sø.", "ma.", "ti.", "on.", "to.", "fr.", "lø.", "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], monthNames: ["jan.", "feb.", "mars", "april", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des.", "januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], AmPm: ["", "", "", ""], S: function (b) {
	        return".";
	    }, srcformat: "Y-m-d H:i:s", newformat: "Y-m-d H:i:s", parseRe: /[#%\\\/:_;.,\t\s-]/, masks: {ISO8601Long: "Y-m-d H:i:s", ISO8601Short: "Y-m-d", ShortDate: "j.n.Y", LongDate: "l j. F Y", FullDateTime: "l j. F Y kl. G.i.s", MonthDay: "j. F", ShortTime: "H:i", LongTime: "H:i:s", SortableDateTime: "Y-m-d\\TH:i:s", UniversalSortableDateTime: "Y-m-d H:i:sO", YearMonth: "F Y"}, reformatAfterEdit: false, userLocalTime: false}, baseLinkUrl: "", showAction: "show", addParam: "", checkbox: {disabled: true}
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}

	};
	}));


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Polish Translation
	 * Łukasz Schab lukasz@freetree.pl
	 * http://FreeTree.pl
	 *
	 * Updated names, abbreviations, currency and date/time formats for Polish norms (also corresponding with CLDR v21.0.1 --> http://cldr.unicode.org/index) 
	 * Tomasz Pęczek tpeczek@gmail.com
	 * http://tpeczek.blogspot.com; http://tpeczek.codeplex.com
	 *
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["pl"] = {
		defaults : {
			recordtext: "Pokaż {0} - {1} z {2}",
			emptyrecords: "Brak rekordów do pokazania",
			loadtext: "Ładowanie...",
			pgtext : "Strona {0} z {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Wyszukiwanie...",
			Find: "Szukaj",
			Reset: "Czyść",
			odata: [{ oper:'eq', text:"dokładnie"},{ oper:'ne', text:"różne od"},{ oper:'lt', text:"mniejsze od"},{ oper:'le', text:"mniejsze lub równe"},{ oper:'gt', text:"większe od"},{ oper:'ge', text:"większe lub równe"},{ oper:'bw', text:"zaczyna się od"},{ oper:'bn', text:"nie zaczyna się od"},{ oper:'in', text:"jest w"},{ oper:'ni', text:"nie jest w"},{ oper:'ew', text:"kończy się na"},{ oper:'en', text:"nie kończy się na"},{ oper:'cn', text:"zawiera"},{ oper:'nc', text:"nie zawiera"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "oraz" },	{ op: "OR",  text: "lub" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Dodaj rekord",
			editCaption: "Edytuj rekord",
			bSubmit: "Zapisz",
			bCancel: "Anuluj",
			bClose: "Zamknij",
			saveData: "Dane zostały zmienione! Zapisać zmiany?",
			bYes: "Tak",
			bNo: "Nie",
			bExit: "Anuluj",
			msg: {
				required: "Pole jest wymagane",
				number: "Proszę wpisać poprawną liczbę",
				minValue: "wartość musi być większa lub równa od",
				maxValue: "wartość musi być mniejsza lub równa od",
				email: "nie jest poprawnym adresem e-mail",
				integer: "Proszę wpisać poprawną liczbę",
				date: "Proszę podaj poprawną datę",
				url: "jest niewłaściwym adresem URL. Pamiętaj o prefiksie ('http://' lub 'https://')",
				nodefined: " niezdefiniowane!",
				novalue: " wymagana jest wartość zwracana!",
				customarray: "Funkcja niestandardowa powinna zwracać tablicę!",
				customfcheck: "Funkcja niestandardowa powinna być obecna w przypadku niestandardowego sprawdzania!"
			}
		},
		view : {
			caption: "Pokaż rekord",
			bClose: "Zamknij"
		},
		del : {
			caption: "Usuń",
			msg: "Czy usunąć wybrany rekord(y)?",
			bSubmit: "Usuń",
			bCancel: "Anuluj"
		},
		nav : {
			edittext: "",
			edittitle: "Edytuj wybrany wiersz",
			addtext: "",
			addtitle: "Dodaj nowy wiersz",
			deltext: "",
			deltitle: "Usuń wybrany wiersz",
			searchtext: "",
			searchtitle: "Wyszukaj rekord",
			refreshtext: "",
			refreshtitle: "Przeładuj",
			alertcap: "Uwaga",
			alerttext: "Proszę wybrać wiersz",
			viewtext: "",
			viewtitle: "Pokaż wybrany wiersz",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Pokaż/Ukryj kolumny",
			bSubmit: "Zatwierdź",
			bCancel: "Anuluj"
		},
		errors : {
			errcap: "Błąd",
			nourl: "Brak adresu url",
			norecords: "Brak danych",
			model : "Długość colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:" zł", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob.",
					"niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"
				],
				monthNames: [
					"sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru",
					"styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
					],
				AmPm : ["","","",""],
				S: function (j) {return '';},
				srcformat: 'Y-m-d',
				newformat: 'd.m.Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long: "Y-m-d H:i:s",
					ISO8601Short: "Y-m-d",
					ShortDate: "d.m.y",
					LongDate: "l, j F Y",
					FullDateTime: "l, j F Y H:i:s",
					MonthDay: "j F",
					ShortTime: "H:i",
					LongTime: "H:i:s",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Portuguese Translation
	 * Traduçã da jqGrid em Portugues por Frederico Carvalho, http://www.eyeviewdesign.pt
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["pt"] = {
		defaults : {
			recordtext: "View {0} - {1} of {2}",
		    emptyrecords: "No records to view",
			loadtext: "A carregar...",
			pgtext : "Página {0} de {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
		    caption: "Busca...",
		    Find: "Procurar",
		    Reset: "Limpar",
		    odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
		    addCaption: "Adicionar Registo",
		    editCaption: "Modificar Registo",
		    bSubmit: "Submeter",
		    bCancel: "Cancelar",
			bClose: "Fechar",
			saveData: "Data has been changed! Save changes?",
			bYes : "Yes",
			bNo : "No",
			bExit : "Cancel",
		    msg: {
		        required:"Campo obrigat�rio",
		        number:"Por favor, introduza um numero",
		        minValue:"O valor deve ser maior ou igual que",
		        maxValue:"O valor deve ser menor ou igual a",
		        email: "N�o � um endere�o de email v�lido",
		        integer: "Por favor, introduza um numero inteiro",
				url: "is not a valid URL. Prefix required ('http://' or 'https://')",
				nodefined : " is not defined!",
				novalue : " return value is required!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
			}
		},
		view : {
		    caption: "View Record",
		    bClose: "Close"
		},
		del : {
		    caption: "Eliminar",
		    msg: "Deseja eliminar o(s) registo(s) seleccionado(s)?",
		    bSubmit: "Eliminar",
		    bCancel: "Cancelar"
		},
		nav : {
			edittext: " ",
		    edittitle: "Modificar registo seleccionado",
			addtext:" ",
		    addtitle: "Adicionar novo registo",
		    deltext: " ",
		    deltitle: "Eliminar registo seleccionado",
		    searchtext: " ",
		    searchtitle: "Procurar",
		    refreshtext: "",
		    refreshtitle: "Actualizar",
		    alertcap: "Aviso",
		    alerttext: "Por favor, seleccione um registo",
			viewtext: "",
			viewtitle: "View selected row",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
		    caption: "Mostrar/Ocultar Colunas",
		    bSubmit: "Enviar",
		    bCancel: "Cancelar"	
		},
		errors : {
			errcap : "Erro",
			nourl : "N�o especificou um url",
			norecords: "N�o existem dados para processar",
		    model : "Tamanho do colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab",
					"Domingo", "Segunda-Feira", "Ter�a-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "S�bado"
				],
				monthNames: [
					"Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez",
					"Janeiro", "Fevereiro", "Mar�o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['�', '�', '�', '�'][Math.min((j - 1) % 10, 3)] : '�'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "n/j/Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Brazilian-Portuguese Translation
	 * Sergio Righi sergio.righi@gmail.com
	 * http://curve.com.br
	 * 
	 * Updated by Jonnas Fonini
	 * http://fonini.net
	 *
	 *
	 * Updated by Fabio Ferreira da Silva fabio_ferreiradasilva@yahoo.com.br
	 * 
	 * Updated by Anderson Pimentel anderson.pimentel[at]gmail.com
	 *
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["pt-br"] = {
		defaults : {
			recordtext: "Ver {0} - {1} de {2}",
		    emptyrecords: "Nenhum registro para visualizar",
			loadtext: "Carregando...",
			pgtext : "Página {0} de {1}",
			savetext: "Salvando...",
			pgfirst : "Primeira Página",
			pglast : "Última Página",
			pgnext : "Próxima Página",
			pgprev : "Página Anterior",
			pgrecs : "Registros por Página",
			showhide: "Mostrar/Ocultar Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
		    caption: "Procurar...",
		    Find: "Procurar",
		    Reset: "Limpar",
		    odata: [{ oper:'eq', text:"igual"},{ oper:'ne', text:"diferente"},{ oper:'lt', text:"menor"},{ oper:'le', text:"menor ou igual"},{ oper:'gt', text:"maior"},{ oper:'ge', text:"maior ou igual"},{ oper:'bw', text:"inicia com"},{ oper:'bn', text:"não inicia com"},{ oper:'in', text:"está em"},{ oper:'ni', text:"não está em"},{ oper:'ew', text:"termina com"},{ oper:'en', text:"não termina com"},{ oper:'cn', text:"contém"},{ oper:'nc', text:"não contém"},{ oper:'nu', text:"nulo"},{ oper:'nn', text:"não nulo"}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "todos" },{ op: "OR",  text: "qualquer um" }	],
			operandTitle : "Clique para escolher a operação de pesquisa.",
			resetTitle : "Limpar valor de pesquisa",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
		    addCaption: "Incluir",
		    editCaption: "Alterar",
		    bSubmit: "Enviar",
		    bCancel: "Cancelar",
			bClose: "Fechar",
			saveData: "Os dados foram alterados! Salvar alterações?",
			bYes : "Sim",
			bNo : "Não",
			bExit : "Cancelar",
		    msg: {
		        required:"Campo obrigatório",
		        number:"Por favor, informe um número válido",
		        minValue:"valor deve ser igual ou maior que ",
		        maxValue:"valor deve ser menor ou igual a",
		        email: "este e-mail não é válido",
		        integer: "Por favor, informe um valor inteiro",
				date: "Por favor, informe uma data válida",
				url: "não é uma URL válida. Prefixo obrigatório ('http://' or 'https://')",
				nodefined : " não está definido!",
				novalue : " um valor de retorno é obrigatório!",
				customarray : "Função customizada deve retornar um array!",
				customfcheck : "Função customizada deve estar presente em caso de validação customizada!"
			}
		},
		view : {
		    caption: "Ver Registro",
		    bClose: "Fechar"
		},
		del : {
	    caption: "Apagar",
		    msg: "Apagar registro(s) selecionado(s)?",
		    bSubmit: "Apagar",
		    bCancel: "Cancelar"
		},
		nav : {
			edittext: " ",
		    edittitle: "Alterar registro selecionado",
			addtext:" ",
		    addtitle: "Incluir novo registro",
		    deltext: " ",
		    deltitle: "Apagar registro selecionado",
		    searchtext: " ",
		    searchtitle: "Procurar registros",
		    refreshtext: "",
		    refreshtitle: "Recarregar tabela",
		    alertcap: "Aviso",
		    alerttext: "Por favor, selecione um registro",
			viewtext: "",
			viewtitle: "Ver linha selecionada",
			savetext: "",
			savetitle: "Salvar linha",
			canceltext: "",
			canceltitle : "Cancelar edição da linha",
			selectcaption : "Actions..."
		},
		col : {
		    caption: "Mostrar/Esconder Colunas",
		    bSubmit: "Enviar",
		    bCancel: "Cancelar"
		},
		errors : {
			errcap : "Erro",
			nourl : "Nenhuma URL definida",
			norecords: "Sem registros para exibir",
		    model : "Comprimento de colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "R$ ", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb",
					"Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
				],
				monthNames: [
					"Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez",
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['º', 'º', 'º', 'º'][Math.min((j - 1) % 10, 3)] : 'º'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "n/j/Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Romanian Translation
	 * Alexandru Emil Lupu contact@alecslupu.ro
	 * http://www.alecslupu.ro/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["ro"] = {
		defaults : {
			recordtext: "Vizualizare {0} - {1} din {2}",
			emptyrecords: "Nu există înregistrări de vizualizat",
			loadtext: "Încărcare...",
			pgtext : "Pagina {0} din {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Caută...",
			Find: "Caută",
			Reset: "Resetare",
			odata: [{ oper:'eq', text:"egal"},{ oper:'ne', text:"diferit"},{ oper:'lt', text:"mai mic"},{ oper:'le', text:"mai mic sau egal"},{ oper:'gt', text:"mai mare"},{ oper:'ge', text:"mai mare sau egal"},{ oper:'bw', text:"începe cu"},{ oper:'bn', text:"nu începe cu"},{ oper:'in', text:"se găsește în"},{ oper:'ni', text:"nu se găsește în"},{ oper:'ew', text:"se termină cu"},{ oper:'en', text:"nu se termină cu"},{ oper:'cn', text:"conține"},{ oper:'nc', text:""},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "toate" },	{ op: "OR",  text: "oricare" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Adăugare înregistrare",
			editCaption: "Modificare înregistrare",
			bSubmit: "Salvează",
			bCancel: "Anulare",
			bClose: "Închide",
			saveData: "Informațiile au fost modificate! Salvați modificările?",
			bYes : "Da",
			bNo : "Nu",
			bExit : "Anulare",
			msg: {
				required:"Câmpul este obligatoriu",
				number:"Vă rugăm introduceți un număr valid",
				minValue:"valoarea trebuie sa fie mai mare sau egală cu",
				maxValue:"valoarea trebuie sa fie mai mică sau egală cu",
				email: "nu este o adresă de e-mail validă",
				integer: "Vă rugăm introduceți un număr valid",
				date: "Vă rugăm să introduceți o dată validă",
				url: "Nu este un URL valid. Prefixul  este necesar('http://' or 'https://')",
				nodefined : " is not defined!",
				novalue : " return value is required!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
			}
		},
		view : {
			caption: "Vizualizare înregistrare",
			bClose: "Închidere"
		},
		del : {
			caption: "Ștegere",
			msg: "Ștergeți înregistrarea (înregistrările) selectate?",
			bSubmit: "Șterge",
			bCancel: "Anulare"
		},
		nav : {
			edittext: "",
			edittitle: "Modifică rândul selectat",
			addtext:"",
			addtitle: "Adaugă rând nou",
			deltext: "",
			deltitle: "Șterge rândul selectat",
			searchtext: "",
			searchtitle: "Căutare înregistrări",
			refreshtext: "",
			refreshtitle: "Reîncarcare Grid",
			alertcap: "Avertisment",
			alerttext: "Vă rugăm să selectați un rând",
			viewtext: "",
			viewtitle: "Vizualizează rândul selectat",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Arată/Ascunde coloanele",
			bSubmit: "Salvează",
			bCancel: "Anulare"
		},
		errors : {
			errcap : "Eroare",
			nourl : "Niciun url nu este setat",
			norecords: "Nu sunt înregistrări de procesat",
			model : "Lungimea colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm",
					"Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"
				],
				monthNames: [
					"Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec",
					"Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
				],
				AmPm : ["am","pm","AM","PM"],
				/*
				 Here is a problem in romanian: 
						M	/	F
				 1st = primul / prima
				 2nd = Al doilea / A doua
				 3rd = Al treilea / A treia 
				 4th = Al patrulea/ A patra
				 5th = Al cincilea / A cincea 
				 6th = Al șaselea / A șasea
				 7th = Al șaptelea / A șaptea
				 .... 
				 */
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Russian Translation v1.0 02.07.2009 (based on translation by Alexey Kanaev v1.1 21.01.2009, http://softcore.com.ru)
	 * Sergey Dyagovchenko
	 * http://d.sumy.ua
	 * Tony Tomov
	 * http://www.guriddo.net
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["ru"] = {
		defaults : {
			recordtext: "Просмотр {0} - {1} из {2}",
			emptyrecords: "Нет записей для просмотра",
			loadtext: "Загрузка...",
			pgtext : "Стр. {0} из {1}",
			savetext: "Сохранения...",
			pgfirst : "Первая",
			pglast : "Последняя",
			pgnext : "Следующая",
			pgprev : "Предыдущая",
			pgrecs : "Записей на стр.",
			showhide: "Показать/Скрыть таблицу",
			// mobile
			pagerCaption : "Грид::Параметры страницы",
			pageText : "Страница:",
			recordPage : "Записей на стр.",
			nomorerecs : "Нет больше записей...",
			scrollPullup: "Потяните, чтобы загрузить более...",
			scrollPulldown : "Потяните вниз чтобы обновить...",
			scrollRefresh : "Отпустите, чтобы обновить..."
		},
		search : {
			caption: "Поиск...",
			Find: "Найти",
			Reset: "Сброс",
			odata: [{ oper:'eq', text:"равно"},{ oper:'ne', text:"не равно"},{ oper:'lt', text:"меньше"},{ oper:'le', text:"меньше или равно"},{ oper:'gt', text:"больше"},{ oper:'ge', text:"больше или равно"},{ oper:'bw', text:"начинается с"},{ oper:'bn', text:"не начинается с"},{ oper:'in', text:"находится в"},{ oper:'ni', text:"не находится в"},{ oper:'ew', text:"заканчивается на"},{ oper:'en', text:"не заканчивается на"},{ oper:'cn', text:"содержит"},{ oper:'nc', text:"не содержит"},{ oper:'nu', text:"равно NULL"},{ oper:'nn', text:"не равно NULL"}, {oper:'bt', text:'между'}],
			groupOps: [	{ op: "AND", text: "все" }, { op: "OR", text: "любой" }],
			operandTitle : "Выбрать поисковую операцию.",
			resetTitle : "Сбросить поиск",
			addsubgrup : "Добавить группу",
			addrule : "Добавить правило",
			delgroup : "Удалить группу",
			delrule : "Удалить правило"
		},
		edit : {
			addCaption: "Добавить запись",
			editCaption: "Редактировать запись",
			bSubmit: "Сохранить",
			bCancel: "Отмена",
			bClose: "Закрыть",
			saveData: "Данные были измененны! Сохранить изменения?",
			bYes : "Да",
			bNo : "Нет",
			bExit : "Отмена",
			msg: {
				required:"Поле является обязательным",
				number:"Пожалуйста, введите правильное число",
				minValue:"значение должно быть больше либо равно",
				maxValue:"значение должно быть меньше либо равно",
				email: "некорректное значение e-mail",
				integer: "Пожалуйста, введите целое число",
				date: "Пожалуйста, введите правильную дату",
				url: "неверная ссылка. Необходимо ввести префикс ('http://' или 'https://')",
				nodefined : " не определено!",
				novalue : " возвращаемое значение обязательно!",
				customarray : "Пользовательская функция должна возвращать массив!",
				customfcheck : "Пользовательская функция должна присутствовать в случаи пользовательской проверки!"
			}
		},
		view : {
			caption: "Просмотр записи",
			bClose: "Закрыть"
		},
		del : {
			caption: "Удалить",
			msg: "Удалить выбранную запись(и)?",
			bSubmit: "Удалить",
			bCancel: "Отмена"
		},
		nav : {
			edittext: " ",
			edittitle: "Редактировать выбранную запись",
			addtext:" ",
			addtitle: "Добавить новую запись",
			deltext: " ",
			deltitle: "Удалить выбранную запись",
			searchtext: " ",
			searchtitle: "Найти записи",
			refreshtext: "",
			refreshtitle: "Обновить таблицу",
			alertcap: "Внимание",
			alerttext: "Пожалуйста, выберите запись",
			viewtext: "",
			viewtitle: "Просмотреть выбранную запись",
			savetext: "",
			savetitle: "Сохранить запись",
			canceltext: "",
			canceltitle : "Отмена сохранения",
			selectcaption : "Действия..."
		},
		col : {
			caption: "Показать/скрыть столбцы",
			bSubmit: "Сохранить",
			bCancel: "Отмена"	
		},
		errors : {
			errcap : "Ошибка",
			nourl : "URL не установлен",
			norecords: "Нет записей для обработки",
			model : "Число полей не соответствует числу столбцов таблицы!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб",
					"Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
				],
				monthNames: [
					"Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек",
					"Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
				srcformat: 'Y-m-d',
				newformat: 'd.m.Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n.j.Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y G:i:s",
					MonthDay: "F d",
					ShortTime: "G:i",
					LongTime: "G:i:s",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Сортировка по возрастанию",
			sortdesc : "Сортировка по убыванию",
			columns : "Колонны",
			filter : "Филтрировать",
			grouping : "Группа по",
			ungrouping : "Разгруппировать",
			searchTitle : "Строки со значениями",
			freeze : "Закрепление",
			unfreeze : "Отмена закрепление",
			reorder : "Переместить в порядок"
		}
	};
	}));


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Slovak Translation
	 * Milan Cibulka
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["sk"] = {
		defaults : {
			recordtext: "Zobrazených {0} - {1} z {2} záznamov",
		    emptyrecords: "Neboli nájdené žiadne záznamy",
			loadtext: "Načítám...",
			pgtext : "Strana {0} z {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Vyhľadávam...",
			Find: "Hľadať",
			Reset: "Reset",
		    odata: [{ oper:'eq', text:"rovná sa"},{ oper:'ne', text:"nerovná sa"},{ oper:'lt', text:"menšie"},{ oper:'le', text:"menšie alebo rovnajúce sa"},{ oper:'gt', text:"väčšie"},{ oper:'ge', text:"väčšie alebo rovnajúce sa"},{ oper:'bw', text:"začína s"},{ oper:'bn', text:"nezačína s"},{ oper:'in', text:"je v"},{ oper:'ni', text:"nie je v"},{ oper:'ew', text:"končí s"},{ oper:'en', text:"nekončí s"},{ oper:'cn', text:"obahuje"},{ oper:'nc', text:"neobsahuje"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "AND", text: "všetkých" },	{ op: "OR",  text: "niektorého z" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Pridať záznam",
			editCaption: "Editácia záznamov",
			bSubmit: "Uložiť",
			bCancel: "Storno",
			bClose: "Zavrieť",
			saveData: "Údaje boli zmenené! Uložiť zmeny?",
			bYes : "Ano",
			bNo : "Nie",
			bExit : "Zrušiť",
			msg: {
			    required:"Pole je požadované",
			    number:"Prosím, vložte valídne číslo",
			    minValue:"hodnota musí býť väčšia ako alebo rovná ",
			    maxValue:"hodnota musí býť menšia ako alebo rovná ",
			    email: "nie je valídny e-mail",
			    integer: "Prosím, vložte celé číslo",
				date: "Prosím, vložte valídny dátum",
				url: "nie je platnou URL. Požadovaný prefix ('http://' alebo 'https://')",
				nodefined : " nie je definovaný!",
				novalue : " je vyžadovaná návratová hodnota!",
				customarray : "Custom function mala vrátiť pole!",
				customfcheck : "Custom function by mala byť prítomná v prípade custom checking!"
			}
		},
		view : {
		    caption: "Zobraziť záznam",
		    bClose: "Zavrieť"
		},
		del : {
			caption: "Zmazať",
			msg: "Zmazať vybraný(é) záznam(y)?",
			bSubmit: "Zmazať",
			bCancel: "Storno"
		},
		nav : {
			edittext: " ",
			edittitle: "Editovať vybraný riadok",
			addtext:" ",
			addtitle: "Pridať nový riadek",
			deltext: " ",
			deltitle: "Zmazať vybraný záznam ",
			searchtext: " ",
			searchtitle: "Nájsť záznamy",
			refreshtext: "",
			refreshtitle: "Obnoviť tabuľku",
			alertcap: "Varovanie",
			alerttext: "Prosím, vyberte riadok",
			viewtext: "",
			viewtitle: "Zobraziť vybraný riadok",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Zobrazit/Skrýť stĺpce",
			bSubmit: "Uložiť",
			bCancel: "Storno"	
		},
		errors : {
			errcap : "Chyba",
			nourl : "Nie je nastavená url",
			norecords: "Žiadne záznamy k spracovaniu",
			model : "Dĺžka colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Ne", "Po", "Ut", "St", "Št", "Pi", "So",
					"Nedela", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatek", "Sobota"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec",
					"Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"
				],
				AmPm : ["do","od","DO","OD"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
			        ISO8601Long:"Y-m-d H:i:s",
			        ISO8601Short:"Y-m-d",
			        ShortDate: "n/j/Y",
			        LongDate: "l, F d, Y",
			        FullDateTime: "l, F d, Y g:i:s A",
			        MonthDay: "F d",
			        ShortTime: "g:i A",
			        LongTime: "g:i:s A",
			        SortableDateTime: "Y-m-d\\TH:i:s",
			        UniversalSortableDateTime: "Y-m-d H:i:sO",
			        YearMonth: "F, Y"
			    },
			    reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["en"] = {
		defaults : {
			recordtext: "Shfaq {0} - {1}/{2}",
			emptyrecords: "Nuk ka rreshta për të shfaqur",
			loadtext: "Duke u ngarkuar...",
			savetext: "Duke ruajtur...",
			pgtext : "Faqja {0}/{1}",
			pgfirst : "Faqja e parë",
			pglast : "Faqja e fundit",
			pgnext : "Faqja tjetër",
			pgprev : "Faqja mëparshme",
			pgrecs : "Rreshta për faqe",
			showhide: "Shpalos ose mbyll tabelën",
			// mobile
			pagerCaption : "Tabela::Kruskoti i faqes",
			pageText : "Faqja:",
			recordPage : "Rreshta për faqe",
			nomorerecs : "Nuk ka rreshta të tjerë...",
			scrollPullup: "Tërhiq për lart për të tjerë...",
			scrollPulldown : "Tërqiq për poshtë për rifreskim...",
			scrollRefresh : "Lësho për rifreskim..."
		},
		search : {
			caption: "Kërko...",
			Find: "Gjej",
			Reset: "Pastro",
			odata: [{ oper:'eq', text:'baraz'},{ oper:'ne', text:'jo baraz'},{ oper:'lt', text:'me e vogel'},{ oper:'le', text:'me e vogel ose baraz'},{ oper:'gt', text:'me e madhe'},{ oper:'ge', text:'me e madhe ose baraz'},{ oper:'bw', text:'fillon me'},{ oper:'bn', text:'nuk fillon me'},{ oper:'in', text:'brenda'},{ oper:'ni', text:'jo brenda'},{ oper:'ew', text:'mbaron me'},{ oper:'en', text:'nuk mbaron me'},{ oper:'cn', text:'permban'},{ oper:'nc', text:'nuk permban'},{ oper:'nu', text:'eshte bosh'},{ oper:'nn', text:'nuk eshte bosh'}, {oper:'bt', text:'between'}],
			groupOps: [{ op: "AND", text: "te gjithe" },{ op: "OR",  text: "cfaredo" }],
			operandTitle : "Kliko per te zgjedhur veprimin.",
			resetTitle : "Fshi vlerat e kerkimit",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"

		},
		edit : {
			addCaption: "Shto rresht",
			editCaption: "Fshi rresht",
			bSubmit: "Vendos",
			bCancel: "Anullo",
			bClose: "Mbyll",
			saveData: "Te dhenat jane ndryshuar! Deshironi ti ruani ndryshimet?",
			bYes : "Po",
			bNo : "Jo",
			bExit : "Anullo",
			msg: {
				required:"Kjo fushe eshte e detyrueshme",
				number:"Ju lutem, vendosni nje numer te vlefshem",
				minValue:"vlera duhet te jete me e madhe ose e njejte me ",
				maxValue:"vlera duhet te jete me e vogel ose e njejte me",
				email: "nuk eshte adrese poste elektronike e vlefshme",
				integer: "Ju lutem, vendosni nje numer te plote te vlefshem",
				date: "Ju lutem, vendosni nje date te vlefshme",
				url: "nuk eshte URL e vlefshme. Nevojitet prefiksi ('http://' ose 'https://')",
				nodefined : " nuk eshte percaktuar!",
				novalue : " vlera si pergjigje eshte e detyreshme!",
				customarray : "Funksioni i personalizuar duhet te ktheje nje array!",
				customfcheck : "unksioni i personalizuar duhet te egzistoje ne rast kontrolli te personalizuar!"
				
			}
		},
		view : {
			caption: "Shfaq Rreshtin",
			bClose: "Mbyll"
		},
		del : {
			caption: "Fshi",
			msg: "Deshironi te fshini rreshtin/rreshtat e zgjedhur?",
			bSubmit: "Fshi",
			bCancel: "Anullo"
		},
		nav : {
			edittext: "",
			edittitle: "Modifiko rreshtin e zgjedhur",
			addtext:"",
			addtitle: "Shto rresht te ri",
			deltext: "",
			deltitle: "Fshi rreshtin e zgjedhur",
			searchtext: "",
			searchtitle: "Gjej rreshtat",
			refreshtext: "",
			refreshtitle: "Ringarko listen",
			alertcap: "Paralajmerim",
			alerttext: "Ju lutem, zgjidh nje rresht",
			viewtext: "",
			viewtitle: "Shfaq rreshtin e zgjedhur",
			savetext: "",
			savetitle: "Ruaj rreshtin",
			canceltext: "",
			canceltitle : "Anullo modifikim rreshti",
			selectcaption : "Veprime..."
		},
		col : {
			caption: "Zgjidh kolona",
			bSubmit: "Ok",
			bCancel: "Anullo"
		},
		errors : {
			errcap : "Gabim",
			nourl : "Nuk eshte percaktuar asnje URL",
			norecords: "Nuk ka rreshta per perpunim",
			model : "Gjatesia e emrit te kolones <> modeli i kolones!"
		},
		formatter : {
			integer : {thousandsSeparator: ",", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Dje", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht",
					"Djelë", "Hënë", "Martë", "Mërkurë", "Enjte", "Premte", "Shtunë"
				],
				monthNames: [
					"Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj",
					"Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
				srcformat: 'Y-m-d',
				newformat: 'n/j/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
					// and see http://docs.jquery.com/UI/Datepicker/formatDate
					// and https://github.com/jquery/globalize#dates for alternative formats used frequently
					// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
					// information about date, time, numbers and currency formats used in different countries
					// one should just convert the information in PHP format
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					// short date:
					//    n - Numeric representation of a month, without leading zeros
					//    j - Day of the month without leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					// example: 3/1/2012 which means 1 March 2012
					ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
					// long date:
					//    l - A full textual representation of the day of the week
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
					// long date with long time:
					//    l - A full textual representation of the day of the week
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
					// month day:
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
					// short time (without seconds)
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
					// long time (with seconds)
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					// month with year
					//    Y - A full numeric representation of a year, 4 digits
					//    F - A full textual representation of a month
					YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Serbian Translation
	 * Александар Миловац(Aleksandar Milovac) aleksandar.milovac@gmail.com
	 * http://trirand.com/blog/
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["sr"] = {
		defaults : {
			recordtext: "Преглед {0} - {1} од {2}",
			emptyrecords: "Не постоји ниједан запис",
			loadtext: "Учитавање...",
			pgtext : "Страна {0} од {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Тражење...",
			Find: "Тражи",
			Reset: "Ресетуј",
			odata: [{ oper:'eq', text:"једнако"},{ oper:'ne', text:"није једнако"},{ oper:'lt', text:"мање"},{ oper:'le', text:"мање или једнако"},{ oper:'gt', text:"веће"},{ oper:'ge', text:"веће или једнако"},{ oper:'bw', text:"почиње са"},{ oper:'bn', text:"не почиње са"},{ oper:'in', text:"је у"},{ oper:'ni', text:"није у"},{ oper:'ew', text:"завршава са"},{ oper:'en', text:"не завршава са"},{ oper:'cn', text:"садржи"},{ oper:'nc', text:"не садржи"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "И", text: "сви" },	{ op: "ИЛИ",  text: "сваки" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"		
		},
		edit : {
			addCaption: "Додај запис",
			editCaption: "Измени запис",
			bSubmit: "Пошаљи",
			bCancel: "Одустани",
			bClose: "Затвори",
			saveData: "Податак је измењен! Сачувај измене?",
			bYes : "Да",
			bNo : "Не",
			bExit : "Одустани",
			msg: {
				required:"Поље је обавезно",
				number:"Молим, унесите исправан број",
				minValue:"вредност мора бити већа од или једнака са ",
				maxValue:"вредност мора бити мања од или једнака са",
				email: "није исправна имејл адреса",
				integer: "Молим, унесите исправну целобројну вредност ",
				date: "Молим, унесите исправан датум",
				url: "није исправан УРЛ. Потребан је префикс ('http://' or 'https://')",
				nodefined : " није дефинисан!",
				novalue : " захтевана је повратна вредност!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
				
			}
		},
		view : {
			caption: "Погледај запис",
			bClose: "Затвори"
		},
		del : {
			caption: "Избриши",
			msg: "Избриши изабран(е) запис(е)?",
			bSubmit: "Ибриши",
			bCancel: "Одбаци"
		},
		nav : {
			edittext: "",
			edittitle: "Измени изабрани ред",
			addtext:"",
			addtitle: "Додај нови ред",
			deltext: "",
			deltitle: "Избриши изабран ред",
			searchtext: "",
			searchtitle: "Нађи записе",
			refreshtext: "",
			refreshtitle: "Поново учитај податке",
			alertcap: "Упозорење",
			alerttext: "Молим, изаберите ред",
			viewtext: "",
			viewtitle: "Погледај изабрани ред",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Изабери колоне",
			bSubmit: "ОК",
			bCancel: "Одбаци"
		},
		errors : {
			errcap : "Грешка",
			nourl : "Није постављен URL",
			norecords: "Нема записа за обраду",
			model : "Дужина модела colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб",
					"Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"
				],
				monthNames: [
					"Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец",
					"Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Serbian latin Translation
	 * Bild Studio info@bild-studio.net
	 * http://www.bild-studio.com
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["sr-latin"] = {
		defaults : {
			recordtext: "Pregled {0} - {1} od {2}",
			emptyrecords: "Ne postoji nijedan zapis",
			loadtext: "Učitavanje…",
			pgtext : "Strana {0} od {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Traženje...",
			Find: "Traži",
			Reset: "Resetuj",
			odata: [{ oper:'eq', text:"jednako"},{ oper:'ne', text:"nije jednako"},{ oper:'lt', text:"manje"},{ oper:'le', text:"manje ili jednako"},{ oper:'gt', text:"veće"},{ oper:'ge', text:"veće ili jednako"},{ oper:'bw', text:"počinje sa"},{ oper:'bn', text:"ne počinje sa"},{ oper:'in', text:"je u"},{ oper:'ni', text:"nije u"},{ oper:'ew', text:"završava sa"},{ oper:'en', text:"ne završava sa"},{ oper:'cn', text:"sadrži"},{ oper:'nc', text:"ne sadrži"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "sva" },	{ op: "OR",  text: "bilo koje" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Dodaj zapis",
			editCaption: "Izmeni zapis",
			bSubmit: "Pošalji",
			bCancel: "Odustani",
			bClose: "Zatvori",
			saveData: "Podatak je izmenjen! Sačuvaj izmene?",
			bYes : "Da",
			bNo : "Ne",
			bExit : "Odustani",
			msg: {
				required: "Polje je obavezno",
				number: "Unesite ispravan broj",
				minValue: "vrednost mora biti veća od ili jednaka sa ",
				maxValue: "vrednost mora biti manja ili jednaka sa",
				email: "nije ispravna email adresa, nije valjda da ne umeš ukucati mail!?",
				integer: "Unesi celobrojnu vrednost ",
				date: "Unesite ispravan datum",
				url: "nije ispravan URL. Potreban je prefiks ('http://' or 'https://')",
				nodefined : " nije definisan!",
				novalue : " zahtevana je povratna vrednost!",
				customarray : "Prilagođena funkcija treba da vrati niz!",
				customfcheck : "Prilagođena funkcija treba da bude prisutana u slučaju prilagođene provere!"
				
			}
		},
		view : {
			caption: "Pogledaj zapis",
			bClose: "Zatvori"
		},
		del : {
			caption: "Izbrisi",
			msg: "Izbrisi izabran(e) zapise(e)?",
			bSubmit: "Izbriši",
			bCancel: "Odbaci"
		},
		nav : {
			edittext: "",
			edittitle: "Izmeni izabrani red",
			addtext:"",
			addtitle: "Dodaj novi red",
			deltext: "",
			deltitle: "Izbriši izabran red",
			searchtext: "",
			searchtitle: "Nađi zapise",
			refreshtext: "",
			refreshtitle: "Ponovo učitaj podatke",
			alertcap: "Upozorenje",
			alerttext: "Izaberite red",
			viewtext: "",
			viewtitle: "Pogledaj izabrani red",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Izaberi kolone",
			bSubmit: "OK",
			bCancel: "Odbaci"
		},
		errors : {
			errcap : "Greška",
			nourl : "Nije postavljen URL",
			norecords: "Nema zapisa za obradu",
			model : "Dužina modela colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub",
					"Nedelja", "Ponedeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec",
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Swedish Translation
	 * Harald Normann harald.normann@wts.se, harald.normann@gmail.com
	 * http://www.worldteamsoftware.com 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["sv"] = {
		defaults : {
			recordtext: "Visar {0} - {1} av {2}",
			emptyrecords: "Det finns inga poster att visa",
			loadtext: "Laddar...",
			pgtext : "Sida {0} av {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Sök Poster - Ange sökvillkor",
			Find: "Sök",
			Reset: "Nollställ Villkor",
			odata: [{ oper:'eq', text:"lika"},{ oper:'ne', text:"ej lika"},{ oper:'lt', text:"mindre"},{ oper:'le', text:"mindre eller lika"},{ oper:'gt', text:"större"},{ oper:'ge', text:"större eller lika"},{ oper:'bw', text:"börjar med"},{ oper:'bn', text:"börjar inte med"},{ oper:'in', text:"tillhör"},{ oper:'ni', text:"tillhör inte"},{ oper:'ew', text:"slutar med"},{ oper:'en', text:"slutar inte med"},{ oper:'cn', text:"innehåller"},{ oper:'nc', text:"innehåller inte"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "alla" },	{ op: "OR",  text: "eller" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Ny Post",
			editCaption: "Redigera Post",
			bSubmit: "Spara",
			bCancel: "Avbryt",
			bClose: "Stäng",
			saveData: "Data har ändrats! Spara förändringar?",
			bYes : "Ja",
			bNo : "Nej",
			bExit : "Avbryt",
			msg: {
		        required:"Fältet är obligatoriskt",
		        number:"Välj korrekt nummer",
		        minValue:"värdet måste vara större än eller lika med",
		        maxValue:"värdet måste vara mindre än eller lika med",
		        email: "är inte korrekt e-post adress",
		        integer: "Var god ange korrekt heltal",
		        date: "Var god ange korrekt datum",
		        url: "är inte en korrekt URL. Prefix måste anges ('http://' or 'https://')",
		        nodefined : " är inte definierad!",
		        novalue : " returvärde måste anges!",
		        customarray : "Custom funktion måste returnera en vektor!",
				customfcheck : "Custom funktion måste finnas om Custom kontroll sker!"
			}
		},
		view : {
			caption: "Visa Post",
			bClose: "Stäng"
		},
		del : {
			caption: "Radera",
			msg: "Radera markerad(e) post(er)?",
			bSubmit: "Radera",
			bCancel: "Avbryt"
		},
		nav : {
			edittext: "",
			edittitle: "Redigera markerad rad",
			addtext:"",
			addtitle: "Skapa ny post",
			deltext: "",
			deltitle: "Radera markerad rad",
			searchtext: "",
			searchtitle: "Sök poster",
			refreshtext: "",
			refreshtitle: "Uppdatera data",
			alertcap: "Varning",
			alerttext: "Ingen rad är markerad",
			viewtext: "",
			viewtitle: "Visa markerad rad",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Välj Kolumner",
			bSubmit: "OK",
			bCancel: "Avbryt"
		},
		errors : {
			errcap : "Fel",
			nourl : "URL saknas",
			norecords: "Det finns inga poster att bearbeta",
			model : "Antal colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"Kr", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör",
					"Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"
				],
				monthNames: [
					"Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
				],
				AmPm : ["fm","em","FM","EM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'Y-m-d',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate:  "n/j/Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Thai Translation
	 * Kittituch Manakul m.kittituch@Gmail.com
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["th"] = {
		defaults : {
			recordtext: "แสดง {0} - {1} จาก {2}",
			emptyrecords: "ไม่พบข้อมูล",
			loadtext: "กำลังร้องขอข้อมูล...",
			pgtext : "หน้า {0} จาก {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "กำลังค้นหา...",
			Find: "ค้นหา",
			Reset: "คืนค่ากลับ",
			odata: [{ oper:'eq', text:"เท่ากับ"},{ oper:'ne', text:"ไม่เท่ากับ"},{ oper:'lt', text:"น้อยกว่า"},{ oper:'le', text:"ไม่มากกว่า"},{ oper:'gt', text:"มากกกว่า"},{ oper:'ge', text:"ไม่น้อยกว่า"},{ oper:'bw', text:"ขึ้นต้นด้วย"},{ oper:'bn', text:"ไม่ขึ้นต้นด้วย"},{ oper:'in', text:"มีคำใดคำหนึ่งใน"},{ oper:'ni', text:"ไม่มีคำใดคำหนึ่งใน"},{ oper:'ew', text:"ลงท้ายด้วย"},{ oper:'en', text:"ไม่ลงท้ายด้วย"},{ oper:'cn', text:"มีคำว่า"},{ oper:'nc', text:"ไม่มีคำว่า"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "และ", text: "ทั้งหมด" },	{ op: "หรือ",  text: "ใดๆ" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "เพิ่มข้อมูล",
			editCaption: "แก้ไขข้อมูล",
			bSubmit: "บันทึก",
			bCancel: "ยกเลิก",
			bClose: "ปิด",
			saveData: "คุณต้องการบันทึการแก้ไข ใช่หรือไม่?",
			bYes : "บันทึก",
			bNo : "ละทิ้งการแก้ไข",
			bExit : "ยกเลิก",
			msg: {
				required:"ข้อมูลนี้จำเป็น",
				number:"กรุณากรอกหมายเลขให้ถูกต้อง",
				minValue:"ค่าของข้อมูลนี้ต้องไม่น้อยกว่า",
				maxValue:"ค่าของข้อมูลนี้ต้องไม่มากกว่า",
				email: "อีเมลล์นี้ไม่ถูกต้อง",
				integer: "กรุณากรอกเป็นจำนวนเต็ม",
				date: "กรุณากรอกวันที่ให้ถูกต้อง",
				url: "URL ไม่ถูกต้อง URL จำเป็นต้องขึ้นต้นด้วย 'http://' หรือ 'https://'",
				nodefined : "ไม่ได้ถูกกำหนดค่า!",
				novalue : "ต้องการการคืนค่า!",
				customarray : "ฟังก์ชันที่สร้างขึ้นต้องส่งค่ากลับเป็นแบบแอเรย์",
				customfcheck : "ระบบต้องการฟังก์ชันที่สร้างขึ้นสำหรับการตรวจสอบ!"
				
			}
		},
		view : {
			caption: "เรียกดูข้อมูล",
			bClose: "ปิด"
		},
		del : {
			caption: "ลบข้อมูล",
			msg: "คุณต้องการลบข้อมูลที่ถูกเลือก ใช่หรือไม่?",
			bSubmit: "ต้องการลบ",
			bCancel: "ยกเลิก"
		},
		nav : {
			edittext: "",
			edittitle: "แก้ไขข้อมูล",
			addtext:"",
			addtitle: "เพิ่มข้อมูล",
			deltext: "",
			deltitle: "ลบข้อมูล",
			searchtext: "",
			searchtitle: "ค้นหาข้อมูล",
			refreshtext: "",
			refreshtitle: "รีเฟรช",
			alertcap: "คำเตือน",
			alerttext: "กรุณาเลือกข้อมูล",
			viewtext: "",
			viewtitle: "ดูรายละเอียดข้อมูล",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "กรุณาเลือกคอลัมน์",
			bSubmit: "ตกลง",
			bCancel: "ยกเลิก"
		},
		errors : {
			errcap : "เกิดความผิดพลาด",
			nourl : "ไม่ได้กำหนด URL",
			norecords: "ไม่มีข้อมูลให้ดำเนินการ",
			model : "จำนวนคอลัมน์ไม่เท่ากับจำนวนคอลัมน์โมเดล!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"อา", "จ", "อ", "พ", "พฤ", "ศ", "ส",
					"อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศูกร์", "เสาร์"
				],
				monthNames: [
					"ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค.",
					"มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฏาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return ''},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Turkish Translation
	 * Erhan Gündoğan (erhan@trposta.net)
	 * http://blog.zakkum.com
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["tr"] = {
		defaults : {
			recordtext: "{0}-{1} listeleniyor. Toplam:{2}",
		    emptyrecords: "Kayıt bulunamadı",
			loadtext: "Yükleniyor...",
			pgtext : "{0}/{1}. Sayfa",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
		    caption: "Arama...",
		    Find: "Bul",
		    Reset: "Temizle",	    
		    odata: [{ oper:'eq', text:"eşit"},{ oper:'ne', text:"eşit değil"},{ oper:'lt', text:"daha az"},{ oper:'le', text:"daha az veya eşit"},{ oper:'gt', text:"daha fazla"},{ oper:'ge', text:"daha fazla veya eşit"},{ oper:'bw', text:"ile başlayan"},{ oper:'bn', text:"ile başlamayan"},{ oper:'in', text:"içinde"},{ oper:'ni', text:"içinde değil"},{ oper:'ew', text:"ile biten"},{ oper:'en', text:"ile bitmeyen"},{ oper:'cn', text:"içeren"},{ oper:'nc', text:"içermeyen"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		    groupOps: [	{ op: "VE", text: "tüm" },	{ op: "VEYA",  text: "herhangi" }],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
		    addCaption: "Kayıt Ekle",
		    editCaption: "Kayıt Düzenle",
		    bSubmit: "Gönder",
		    bCancel: "İptal",
			bClose: "Kapat",
			saveData: "Veriler değişti! Kayıt edilsin mi?",
			bYes : "Evet",
			bNo : "Hayıt",
			bExit : "İptal",
		    msg: {
		        required:"Alan gerekli",
		        number:"Lütfen bir numara giriniz",
		        minValue:"girilen değer daha büyük ya da buna eşit olmalıdır",
		        maxValue:"girilen değer daha küçük ya da buna eşit olmalıdır",
		        email: "geçerli bir e-posta adresi değildir",
		        integer: "Lütfen bir tamsayı giriniz",
				url: "Geçerli bir URL değil. ('http://' or 'https://') ön eki gerekli.",
				nodefined : " is not defined!",
				novalue : " return value is required!",
				customarray : "Custom function should return array!",
				customfcheck : "Custom function should be present in case of custom checking!"
			}
		},
		view : {
		    caption: "Kayıt Görüntüle",
		    bClose: "Kapat"
		},
		del : {
		    caption: "Sil",
		    msg: "Seçilen kayıtlar silinsin mi?",
		    bSubmit: "Sil",
		    bCancel: "İptal"
		},
		nav : {
			edittext: " ",
		    edittitle: "Seçili satırı düzenle",
			addtext:" ",
		    addtitle: "Yeni satır ekle",
		    deltext: " ",
		    deltitle: "Seçili satırı sil",
		    searchtext: " ",
		    searchtitle: "Kayıtları bul",
		    refreshtext: "",
		    refreshtitle: "Tabloyu yenile",
		    alertcap: "Uyarı",
		    alerttext: "Lütfen bir satır seçiniz",
			viewtext: "",
			viewtitle: "Seçilen satırı görüntüle",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
		    caption: "Sütunları göster/gizle",
		    bSubmit: "Gönder",
		    bCancel: "İptal"	
		},
		errors : {
			errcap : "Hata",
			nourl : "Bir url yapılandırılmamış",
			norecords: "İşlem yapılacak bir kayıt yok",
		    model : "colNames uzunluğu <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts",
					"Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"
				],
				monthNames: [
					"Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara",
					"Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd/m/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "n/j/Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y g:i:s A",
		            MonthDay: "F d",
		            ShortTime: "g:i A",
		            LongTime: "g:i:s A",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		    target: '',
		    checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Chinese (Taiwan) Translation for v4.2
	 * linquize
	 * https://github.com/linquize/jqGrid
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	 * 
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["tw"] = {
		defaults : {
			recordtext: "{0} - {1} 共 {2} 條",
			emptyrecords: "沒有記錄",
			loadtext: "載入中...",
			pgtext : " {0} 共 {1} 頁",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "搜尋...",
			Find: "搜尋",
			Reset: "重設",
			odata: [{ oper:'eq', text:"等於 "},{ oper:'ne', text:"不等於 "},{ oper:'lt', text:"小於 "},{ oper:'le', text:"小於等於 "},{ oper:'gt', text:"大於 "},{ oper:'ge', text:"大於等於 "},{ oper:'bw', text:"開始於 "},{ oper:'bn', text:"不開始於 "},{ oper:'in', text:"在其中 "},{ oper:'ni', text:"不在其中 "},{ oper:'ew', text:"結束於 "},{ oper:'en', text:"不結束於 "},{ oper:'cn', text:"包含 "},{ oper:'nc', text:"不包含 "},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "AND", text: "所有" },	{ op: "OR",  text: "任一" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "新增記錄",
			editCaption: "編輯記錄",
			bSubmit: "提交",
			bCancel: "取消",
			bClose: "關閉",
			saveData: "資料已改變，是否儲存？",
			bYes : "是",
			bNo : "否",
			bExit : "取消",
			msg: {
				required:"此欄必要",
				number:"請輸入有效的數字",
				minValue:"值必須大於等於 ",
				maxValue:"值必須小於等於 ",
				email: "不是有效的e-mail地址",
				integer: "請輸入有效整数",
				date: "請輸入有效時間",
				url: "網址無效。前綴必須為 ('http://' 或 'https://')",
				nodefined : " 未定義！",
				novalue : " 需要傳回值！",
				customarray : "自訂函數應傳回陣列！",
				customfcheck : "自訂檢查應有自訂函數！"
				
			}
		},
		view : {
			caption: "查看記錄",
			bClose: "關閉"
		},
		del : {
			caption: "刪除",
			msg: "刪除已選記錄？",
			bSubmit: "刪除",
			bCancel: "取消"
		},
		nav : {
			edittext: "",
			edittitle: "編輯已選列",
			addtext:"",
			addtitle: "新增列",
			deltext: "",
			deltitle: "刪除已選列",
			searchtext: "",
			searchtitle: "搜尋記錄",
			refreshtext: "",
			refreshtitle: "重新整理表格",
			alertcap: "警告",
			alerttext: "請選擇列",
			viewtext: "",
			viewtitle: "檢視已選列",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "選擇欄",
			bSubmit: "確定",
			bCancel: "取消"
		},
		errors : {
			errcap : "錯誤",
			nourl : "未設定URL",
			norecords: "無需要處理的記錄",
			model : "colNames 和 colModel 長度不同！"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
			currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
			date : {
				dayNames:   [
					"日", "一", "二", "三", "四", "五", "六",
			         "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"
				],
				monthNames: [
					"一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二",
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				AmPm : ["上午","下午","上午","下午"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
				srcformat: 'Y-m-d',
				newformat: 'm-d-Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					ShortDate: "Y/j/n",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Ukrainian Translation v1.0 02.07.2009
	 * Sergey Dyagovchenko
	 * http://d.sumy.ua
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["ua"] = {
		defaults : {
			recordtext: "Перегляд {0} - {1} з {2}",
		  emptyrecords: "Немає записів для перегляду",
			loadtext: "Завантаження...",
			pgtext : "Стор. {0} з {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
	    caption: "Пошук...",
	    Find: "Знайти",
	    Reset: "Скидання",
	    odata: [{ oper:'eq', text:"рівно"},{ oper:'ne', text:"не рівно"},{ oper:'lt', text:"менше"},{ oper:'le', text:"менше або рівне"},{ oper:'gt', text:"більше"},{ oper:'ge', text:"більше або рівне"},{ oper:'bw', text:"починається з"},{ oper:'bn', text:"не починається з"},{ oper:'in', text:"знаходиться в"},{ oper:'ni', text:"не знаходиться в"},{ oper:'ew', text:"закінчується на"},{ oper:'en', text:"не закінчується на"},{ oper:'cn', text:"містить"},{ oper:'nc', text:"не містить"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
	    groupOps: [	{ op: "AND", text: "все" },	{ op: "OR",  text: "будь-який" }],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value",
		addsubgrup : "Add subgroup",
		addrule : "Add rule",
		delgroup : "Delete group",
		delrule : "Delete rule"
		},
		edit : {
	    addCaption: "Додати запис",
	    editCaption: "Змінити запис",
	    bSubmit: "Зберегти",
	    bCancel: "Відміна",
			bClose: "Закрити",
			saveData: "До данних були внесені зміни! Зберегти зміни?",
			bYes : "Так",
			bNo : "Ні",
			bExit : "Відміна",
		    msg: {
	        required:"Поле є обов'язковим",
	        number:"Будь ласка, введіть правильне число",
	        minValue:"значення повинне бути більше або дорівнює",
	        maxValue:"значення повинно бути менше або дорівнює",
	        email: "некоректна адреса електронної пошти",
	        integer: "Будь ласка, введення дійсне ціле значення",
	        date: "Будь ласка, введення дійсне значення дати",
	        url: "не дійсний URL. Необхідна приставка ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			}
		},
		view : {
		    caption: "Переглянути запис",
		    bClose: "Закрити"
		},
		del : {
		    caption: "Видалити",
		    msg: "Видалити обраний запис(и)?",
		    bSubmit: "Видалити",
		    bCancel: "Відміна"
		},
		nav : {
	  		edittext: " ",
		    edittitle: "Змінити вибраний запис",
	  		addtext:" ",
		    addtitle: "Додати новий запис",
		    deltext: " ",
		    deltitle: "Видалити вибраний запис",
		    searchtext: " ",
		    searchtitle: "Знайти записи",
		    refreshtext: "",
		    refreshtitle: "Оновити таблицю",
		    alertcap: "Попередження",
		    alerttext: "Будь ласка, виберіть запис",
	  		viewtext: "",
	  		viewtitle: "Переглянути обраний запис",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
		    caption: "Показати/Приховати стовпці",
		    bSubmit: "Зберегти",
		    bCancel: "Відміна"
		},
		errors : {
			errcap : "Помилка",
			nourl : "URL не задан",
			norecords: "Немає записів для обробки",
	    model : "Число полів не відповідає числу стовпців таблиці!"
		},
		formatter : {
			integer : {thousandsSeparator: " ", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
			currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
			date : {
				dayNames:   [
					"Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб",
					"Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"
				],
				monthNames: [
					"Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру",
					"Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
				],
				AmPm : ["am","pm","AM","PM"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
				srcformat: 'Y-m-d',
				newformat: 'd.m.Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
		            ISO8601Long:"Y-m-d H:i:s",
		            ISO8601Short:"Y-m-d",
		            ShortDate: "n.j.Y",
		            LongDate: "l, F d, Y",
		            FullDateTime: "l, F d, Y G:i:s",
		            MonthDay: "F d",
		            ShortTime: "G:i",
		            LongTime: "G:i:s",
		            SortableDateTime: "Y-m-d\\TH:i:s",
		            UniversalSortableDateTime: "Y-m-d H:i:sO",
		            YearMonth: "F, Y"
		        },
		        reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
		  target: '',
		  checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jqGrid Vietnamese Translation
	 * Lê Đình Dũng dungtdc@gmail.com
	 * http://trirand.com/blog/ 
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	**/
	/*global jQuery, define */
	(function( factory ) {
		"use strict";
		if ( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(153),
				__webpack_require__(335)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			factory( jQuery );
		}
	}(function( $ ) {

	$.jgrid = $.jgrid || {};
	if(!$.jgrid.hasOwnProperty("regional")) {
		$.jgrid.regional = [];
	}
	$.jgrid.regional["vi"] = {
		defaults : {
			recordtext: "View {0} - {1} of {2}",
			emptyrecords: "Không có dữ liệu",
			loadtext: "Đang nạp dữ liệu...",
			pgtext : "Trang {0} trong tổng số {1}",
			savetext: "Saving...",
			pgfirst : "First Page",
			pglast : "Last Page",
			pgnext : "Next Page",
			pgprev : "Previous Page",
			pgrecs : "Records per Page",
			showhide: "Toggle Expand Collapse Grid",
			// mobile
			pagerCaption : "Grid::Page Settings",
			pageText : "Page:",
			recordPage : "Records per Page",
			nomorerecs : "No more records...",
			scrollPullup: "Pull up to load more...",
			scrollPulldown : "Pull down to refresh...",
			scrollRefresh : "Release to refresh..."
		},
		search : {
			caption: "Tìm kiếm...",
			Find: "Tìm",
			Reset: "Khởi tạo lại",
			odata: [{ oper:'eq', text:"bằng"},{ oper:'ne', text:"không bằng"},{ oper:'lt', text:"bé hơn"},{ oper:'le', text:"bé hơn hoặc bằng"},{ oper:'gt', text:"lớn hơn"},{ oper:'ge', text:"lớn hơn hoặc bằng"},{ oper:'bw', text:"bắt đầu với"},{ oper:'bn', text:"không bắt đầu với"},{ oper:'in', text:"trong"},{ oper:'ni', text:"không nằm trong"},{ oper:'ew', text:"kết thúc với"},{ oper:'en', text:"không kết thúc với"},{ oper:'cn', text:"chứa"},{ oper:'nc', text:"không chứa"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
			groupOps: [	{ op: "VÀ", text: "tất cả" },	{ op: "HOẶC",  text: "bất kỳ" }	],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value",
			addsubgrup : "Add subgroup",
			addrule : "Add rule",
			delgroup : "Delete group",
			delrule : "Delete rule"
		},
		edit : {
			addCaption: "Thêm bản ghi",
			editCaption: "Sửa bản ghi",
			bSubmit: "Gửi",
			bCancel: "Hủy bỏ",
			bClose: "Đóng",
			saveData: "Dữ liệu đã thay đổi! Có lưu thay đổi không?",
			bYes : "Có",
			bNo : "Không",
			bExit : "Hủy bỏ",
			msg: {
				required:"Trường dữ liệu bắt buộc có",
				number:"Hãy điền đúng số",
				minValue:"giá trị phải lớn hơn hoặc bằng với ",
				maxValue:"giá trị phải bé hơn hoặc bằng",
				email: "không phải là một email đúng",
				integer: "Hãy điền đúng số nguyên",
				date: "Hãy điền đúng ngày tháng",
				url: "không phải là URL. Khởi đầu bắt buộc là ('http://' hoặc 'https://')",
				nodefined : " chưa được định nghĩa!",
				novalue : " giá trị trả về bắt buộc phải có!",
				customarray : "Hàm nên trả về một mảng!",
				customfcheck : "Custom function should be present in case of custom checking!"
				
			}
		},
		view : {
			caption: "Xem bản ghi",
			bClose: "Đóng"
		},
		del : {
			caption: "Xóa",
			msg: "Xóa bản ghi đã chọn?",
			bSubmit: "Xóa",
			bCancel: "Hủy bỏ"
		},
		nav : {
			edittext: "",
			edittitle: "Sửa dòng đã chọn",
			addtext:"",
			addtitle: "Thêm mới 1 dòng",
			deltext: "",
			deltitle: "Xóa dòng đã chọn",
			searchtext: "",
			searchtitle: "Tìm bản ghi",
			refreshtext: "",
			refreshtitle: "Nạp lại lưới",
			alertcap: "Cảnh báo",
			alerttext: "Hãy chọn một dòng",
			viewtext: "",
			viewtitle: "Xem dòng đã chọn",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle : "Cancel row editing",
			selectcaption : "Actions..."
		},
		col : {
			caption: "Chọn cột",
			bSubmit: "OK",
			bCancel: "Hủy bỏ"
		},
		errors : {
			errcap : "Lỗi",
			nourl : "không url được đặt",
			norecords: "Không có bản ghi để xử lý",
			model : "Chiều dài của colNames <> colModel!"
		},
		formatter : {
			integer : {thousandsSeparator: ".", defaultValue: '0'},
			number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0'},
			currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0'},
			date : {
				dayNames:   [
					"CN", "T2", "T3", "T4", "T5", "T6", "T7",
					"Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"
				],
				monthNames: [
					"Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12",
					"Tháng một", "Tháng hai", "Tháng ba", "Tháng tư", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"
				],
				AmPm : ["sáng","chiều","SÁNG","CHIỀU"],
				S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
				srcformat: 'Y-m-d',
				newformat: 'n/j/Y',
				parseRe : /[#%\\\/:_;.,\t\s-]/,
				masks : {
					// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
					// and see http://docs.jquery.com/UI/Datepicker/formatDate
					// and https://github.com/jquery/globalize#dates for alternative formats used frequently
					// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
					// information about date, time, numbers and currency formats used in different countries
					// one should just convert the information in PHP format
					ISO8601Long:"Y-m-d H:i:s",
					ISO8601Short:"Y-m-d",
					// short date:
					//    n - Numeric representation of a month, without leading zeros
					//    j - Day of the month without leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					// example: 3/1/2012 which means 1 March 2012
					ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
					// long date:
					//    l - A full textual representation of the day of the week
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
					// long date with long time:
					//    l - A full textual representation of the day of the week
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					//    Y - A full numeric representation of a year, 4 digits
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
					// month day:
					//    F - A full textual representation of a month
					//    d - Day of the month, 2 digits with leading zeros
					MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
					// short time (without seconds)
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
					// long time (with seconds)
					//    g - 12-hour format of an hour without leading zeros
					//    i - Minutes with leading zeros
					//    s - Seconds, with leading zeros
					//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
					LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					// month with year
					//    Y - A full numeric representation of a year, 4 digits
					//    F - A full textual representation of a month
					YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
				},
				reformatAfterEdit : false,
				userLocalTime : false
			},
			baseLinkUrl: '',
			showAction: '',
			target: '',
			checkbox : {disabled:true},
			idName : 'id'
		},
		colmenu : {
			sortasc : "Sort Ascending",
			sortdesc : "Sort Descending",
			columns : "Columns",
			filter : "Filter",
			grouping : "Group By",
			ungrouping : "Ungroup",
			searchTitle : "Get items with value that:",
			freeze : "Freeze",
			unfreeze : "Unfreeze",
			reorder : "Move to reorder"
		}
	};
	}));


/***/ })

});
//# sourceMappingURL=1.js.map