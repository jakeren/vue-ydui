/*! vue-ydui v0.3.0 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TabBarItem=t.TabBar=void 0;var i=n(83),o=r(i),a=n(82),s=r(a);t.TabBar=o.default,t.TabBarItem=s.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},2:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=d[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(l(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],l=i[3],c={css:a,media:s,sourceMap:l};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=b(),r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e,t){var n,r,i;if(t.singleton){var o=v++;n=m||(m=s(t)),r=c.bind(null,n,o,!1),i=c.bind(null,n,o,!0)}else n=s(t),r=f.bind(null,n),i=function(){a(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function c(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=u(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],l=d[s.id];l.refs--,o.push(l)}if(e){var c=i(e);r(c,t)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete d[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||r.test(e)},i=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},o=function(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,r=e===window?0:e.getBoundingClientRect().top,i=t.getBoundingClientRect().top-r,o=i+t.offsetHeight;return i>=0&&i<n||o>0&&o<=n},a=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){a(e,t)||(e.className=""==e.className?t:e.className+" "+t)},l=function(e,t){if(a(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}};t.pageScroll=n,t.isColor=r,t.getScrollview=i,t.checkInview=o,t.addClass=s,t.removeClass=l},27:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,'.m-tabbar{width:100%;position:relative;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:5px 0 3px;background-color:hsla(0,0%,100%,.96)}.m-tabbar:after{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:1px;border-top:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.tabbar-fixed{position:fixed;bottom:0;left:0;z-index:49}.tabbar-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#979797}.tabbar-active,.tabbar-active .tabbar-icon{color:inherit}.tabbar-badge{top:-1px;margin-left:-7px}.tabbar-badge,.tabbar-dot{position:absolute;left:100%;z-index:999}.tabbar-dot{display:block;width:10px;height:10px;background-color:#ef4f4f;border-radius:50%;top:1px;margin-left:-5px}.tabbar-icon{height:29px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.tabbar-icon :after,.tabbar-icon :before{font-size:27px}.tabbar-icon img{height:70%}.tabbar-txt{display:inline-block;font-size:12px}',""])},45:function(e,t,n){var r=n(27);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},82:function(e,t,n){var r,i;r=n(155);var o=n(99);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},83:function(e,t,n){var r,i;n(45),r=n(156);var o=n(115);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},99:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"tabbar-item",class:e.classes,style:e.styles,attrs:{to:e.link}},[n("span",{staticClass:"tabbar-icon"},[e._t("icon"),e._v(" "),n("span",{staticClass:"tabbar-badge"},[e._t("badge")],2),e._v(" "),e.dot?n("span",{staticClass:"tabbar-dot"}):e._e()],2),e._v(" "),n("span",{staticClass:"tabbar-txt"},[e._v(e._s(e.title))])])},staticRenderFns:[]}},115:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"m-tabbar",class:e.classes,style:{color:e.activeColor}},[e._t("default")],2)},staticRenderFns:[]}},155:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-tabbar-item",props:{link:String,title:String,active:Boolean,dot:Boolean},computed:{classes:function(){return this.active?"tabbar-active":""},styles:function(){return{color:this.active?this.activeColor:"#979797"}}}}},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.default={name:"yd-tabbar",props:{fixed:Boolean,activeColor:{type:String,validator:function(e){return!e||(0,r.isColor)(e)},default:"#09BB07"}},computed:{classes:function(){return this.fixed?"tabbar-fixed":""}}}}})});