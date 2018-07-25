"use strict";var _createClass=function(){function r(i,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(i,r.key,r)}}return function(i,e,n){if(e)r(i.prototype,e);if(n)r(i,n);return i}}();function _classCallCheck(i,e){if(!(i instanceof e)){throw new TypeError("Cannot call a class as a function")}}var PINYIN_TABLE=require("./dictionary/pinyin.dict");var MUTIL_PINYIN_TABLE=require("./dictionary/mutil_pinyin.dict");var chineseDict=require("./dictionary/traditional_chinese.dict");var CHINESE_LING="〇";var CHINESE_REGEX=/[\u4e00-\u9fa5]/g;var ToPinyin=function(){function i(){_classCallCheck(this,i)}_createClass(i,null,[{key:"chineseToPinyin",value:function i(e){if(typeof e!=="string")throw new TypeError("参数错误");if(!CHINESE_REGEX.test(e))return e;e=this._traditionalToSimplified(e);if(!this._hasMultiPinyin(e)){}else{}}},{key:"_noMultiPinyin",value:function i(e){}},{key:"_getWords",value:function i(e){for(var n=1;n<6;n++){var r=MUTIL_PINYIN_TABLE[e.substring(0,n)];if(typeof r!="undefined"){return[e.substring(0,n)]}}return[]}},{key:"_hasMultiPinyin",value:function i(e){var n=e.match(CHINESE_REGEX);var r=n.length;for(var t=0;t<r;t++){var a=PINYIN_TABLE[n[t]];if(!!a&&a.length>1){return true}}return false}},{key:"_traditionalToSimplified",value:function i(e){var n=e.match(CHINESE_REGEX);n=n.filter(function(i){if(chineseDict[i]){return i}});!!n.length&&n.forEach(function(i){e=e.replace(i,chineseDict[i])});return e}}]);return i}();module.exports=ToPinyin;