webpackJsonp([7,10],{56:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},57:function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=l[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(d(i.parts[r],e))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(d(i.parts[r],e));l[i.id]={id:i.id,refs:1,parts:a}}}}function o(t){for(var e=[],n={},i=0;i<t.length;i++){var o=t[i],r=o[0],a=o[1],s=o[2],d=o[3],c={css:a,media:s,sourceMap:d};n[r]?n[r].parts.push(c):e.push(n[r]={id:r,parts:[c]})}return e}function r(t,e){var n=h(),i=b[b.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function d(t,e){var n,i,o;if(e.singleton){var r=v++;n=m||(m=s(e)),i=c.bind(null,n,r,!1),o=c.bind(null,n,r,!0)}else n=s(e),i=f.bind(null,n),o=function(){a(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}function c(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function f(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l={},u=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=u(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return i(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var s=n[a],d=l[s.id];d.refs--,r.push(d)}if(t){var c=o(t);i(c,e)}for(var a=0;a<r.length;a++){var d=r[a];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete l[d.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},65:function(t,e,n){var i,o;n(66),n(68),i=n(70);var r=n(71);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-32c18fa8",t.exports=i},66:function(t,e,n){var i=n(67);"string"==typeof i&&(i=[[t.id,i,""]]);n(57)(i,{});i.locals&&(t.exports=i.locals)},67:function(t,e,n){e=t.exports=n(56)(),e.push([t.id,".c-header+*{margin-top:2.5rem}",""])},68:function(t,e,n){var i=n(69);"string"==typeof i&&(i=[[t.id,i,""]]);n(57)(i,{});i.locals&&(t.exports=i.locals)},69:function(t,e,n){e=t.exports=n(56)(),e.push([t.id,".header[data-v-32c18fa8]{position:fixed;top:0;left:0;z-index:9999;display:flex;justify-content:space-around;align-items:center;width:100%;height:2.5rem;border-bottom:1px solid #74d4eb;background-color:#29bde0;color:#fff}.header-title[data-v-32c18fa8]{font-size:1rem;text-align:center}.header-lb[data-v-32c18fa8],.header-rb[data-v-32c18fa8]{position:absolute;padding:.6rem;text-align:center;font-size:1rem}.header-lb[data-v-32c18fa8]{left:.5rem}.header-rb[data-v-32c18fa8]{right:.5rem}",""])},70:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{lBtnName:String,lBtnFn:Function,rBtnName:String,rBtnFn:Function}}},71:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"header c-header"},[lBtnName?_h("i",{class:"header-lb icon "+lBtnName,on:{click:lBtnFn}}):_e()," ",_h("p",{staticClass:"header-title"},[_t("default")])," ",rBtnName?_h("i",{class:"header-rb icon "+rBtnName,on:{click:rBtnFn}}):_e()])},staticRenderFns:[]}},99:function(t,e,n){var i,o;n(100),i=n(102);var r=n(103);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-40229ade",t.exports=i},100:function(t,e,n){var i=n(101);"string"==typeof i&&(i=[[t.id,i,""]]);n(57)(i,{});i.locals&&(t.exports=i.locals)},101:function(t,e,n){e=t.exports=n(56)(),e.push([t.id,".button[data-v-40229ade]{position:relative;display:block;width:90%;margin-left:auto;margin-right:auto;height:2.2rem;border:none;font-size:1rem;outline:none}.button[data-v-40229ade]:active:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.05)}.button-style-normal[data-v-40229ade]{background-color:#fbb435;color:#fff}.button-style-warn[data-v-40229ade]{background-color:#f66e6e;color:#fff}.button-size-l[data-v-40229ade]{width:90%}.button-size-m[data-v-40229ade]{width:82%}.button-size-s[data-v-40229ade]{width:40%}",""])},102:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{type:String,default:"normal"},size:{type:String,default:"m"},onClick:{type:Function,default:function(){}}}}},103:function(module,exports){module.exports={render:function(){with(this)return _h("button",{class:"button button-style-"+type+" button-size-"+size,on:{click:onClick}},[_t("default")])},staticRenderFns:[]}},119:function(t,e,n){var i,o;n(120),i=n(122);var r=n(123);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-81690896",t.exports=i},120:function(t,e,n){var i=n(121);"string"==typeof i&&(i=[[t.id,i,""]]);n(57)(i,{});i.locals&&(t.exports=i.locals)},121:function(t,e,n){e=t.exports=n(56)(),e.push([t.id,".id-mask[data-v-81690896]{position:relative;width:20%;padding-top:20%;border:3px solid #fff;background-color:#f7c77b;font-size:.7rem}.container[data-v-81690896]{position:absolute;top:0;left:0;width:100%;height:100%}.container img[data-v-81690896]{width:100%;height:100%}.id[data-v-81690896]{position:absolute;bottom:0;width:100%;text-align:center;background-color:rgba(41,189,226,.3);color:#fff}.identity[data-v-81690896]{position:absolute;top:30%;width:100%;text-align:center}",""])},122:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{mask:1}},methods:{clickHandle:function(){this.mask=!this.mask}}}},123:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"id-mask",on:{click:clickHandle}},[_m(0)," ",_h("div",{directives:[{name:"show",rawName:"v-show",value:mask,expression:"mask"}],staticClass:"container"},[_m(1)])," ",_m(2)])},staticRenderFns:[function(){with(this)return _h("p",{staticClass:"identity"},["杀手"])},function(){with(this)return _h("img",{attrs:{src:"public/image/idmask.jpg"}})},function(){with(this)return _h("p",{staticClass:"id"},["1号"])}]}},146:function(t,e,n){var i,o;n(147),i=n(149);var r=n(150);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-fef083f8",t.exports=i},147:function(t,e,n){var i=n(148);"string"==typeof i&&(i=[[t.id,i,""]]);n(57)(i,{});i.locals&&(t.exports=i.locals)},148:function(t,e,n){e=t.exports=n(56)(),e.push([t.id,".operator[data-v-fef083f8]{position:fixed;width:100%;height:100%;background-color:#29bde0}.tips[data-v-fef083f8]{position:relative;display:flex;flex-direction:column;justify-content:center;min-height:2.5rem;padding:.2rem 2rem;background-color:#b9e9f5}.tips[data-v-fef083f8]:before{content:'';position:absolute;bottom:-.6rem;display:inline-block;border-style:solid;border-width:.7rem .4rem 0;border-color:#b9e9f5 transparent}.tips2[data-v-fef083f8]{margin-top:1rem;margin-bottom:.5rem;font-size:.7rem;color:#fff;text-align:center}.ids[data-v-fef083f8]{height:60%;padding-left:4%;overflow:scroll}.ids>div[data-v-fef083f8]{float:left;margin:5%}.btn[data-v-fef083f8]{margin-top:2%}",""])},149:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{jump2timeline:function(){this.$router.push("/game/timeline")}},components:{CHeader:n(65),IdMask:n(119),CButton:n(99)}}},150:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"operator"},[_h("c-header",{directives:[{name:"header-close",rawName:"v-header-close"}],attrs:{"l-btn-name":"icon-menu-circle","l-btn-fn":jump2timeline,"r-btn-name":"icon-cross"}},["杀手杀人"])," ",_m(0)," ",_m(1)," ",_h("div",{staticClass:"ids"},[_h("id-mask")])," ",_h("c-button",{staticClass:"btn"},["确定"])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"tips"},[_h("p",["狙击手"])])},function(){with(this)return _h("p",{staticClass:"tips2"},["点击下方玩家头像，对被狙击玩家进行标记"])}]}}});