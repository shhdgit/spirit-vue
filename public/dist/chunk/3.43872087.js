webpackJsonp([3,10],Array(57).concat([function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:a}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],s=o[2],u=o[3],d={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(d):e.push(n[i]={id:i,parts:[d]})}return e}function i(t,e){var n=h(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function u(t,e){var n,r,o;if(e.singleton){var i=v++;n=m||(m=s(e)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(e),r=c.bind(null,n),o=function(){a(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function d(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function c(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f={},l=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=l(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=l(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=f[s.id];u.refs--,i.push(u)}if(t){var d=o(t);r(d,e)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},,,,,,,,function(t,e,n){var r,o;n(67),n(69),r=n(71);var i=n(72);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-32c18fa8",t.exports=r},function(t,e,n){var r=n(68);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".c-header+*{margin-top:2.5rem}",""])},function(t,e,n){var r=n(70);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".header[data-v-32c18fa8]{position:fixed;top:0;left:0;z-index:9999;display:flex;justify-content:space-around;align-items:center;width:100%;height:2.5rem;border-bottom:1px solid #74d4eb;background-color:#29bde0;color:#fff}.header-title[data-v-32c18fa8]{font-size:1rem;text-align:center}.header-lb[data-v-32c18fa8],.header-rb[data-v-32c18fa8]{position:absolute;padding:.6rem;text-align:center;font-size:1rem}.header-lb[data-v-32c18fa8]{left:.5rem}.header-rb[data-v-32c18fa8]{right:.5rem}",""])},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{lBtnName:String,lBtnFn:{type:Function,default:function(){}},rBtnName:String,rBtnFn:{type:Function,default:function(){}}}}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"header c-header"},[lBtnName?_h("i",{class:"header-lb icon "+lBtnName,on:{click:lBtnFn}}):_e()," ",_h("p",{staticClass:"header-title"},[_t("default")])," ",rBtnName?_h("i",{class:"header-rb icon "+rBtnName,on:{click:rBtnFn}}):_e()])},staticRenderFns:[]}},function(t,e,n){var r,o;n(74),r=n(76);var i=n(77);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-d34f87b8",t.exports=r},function(t,e,n){var r=n(75);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".block[data-v-d34f87b8]{margin-left:auto;margin-right:auto;background-color:#fff}",""])},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{width:{type:String,default:"90%"},height:{type:String,default:"2rem"}}}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"block",style:{width:width,height:height}},[_t("default")])},staticRenderFns:[]}},,,,,function(t,e,n){var r,o;n(83),r=n(85);var i=n(105);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-5bc0de99",t.exports=r},function(t,e,n){var r=n(84);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".config[data-v-5bc0de99]{position:fixed;display:flex;align-items:center;flex-direction:column;width:100%;height:100%;padding-top:1rem;background-color:#f0f0f0}",""])},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(86),a=o(i),s=n(1),u=o(s),d=n(42),c=n(44),f=r(c);e.default={computed:(0,u.default)({},(0,d.mapState)({identity:function(t){var e=t.config;return e.identity},players:function(t){var e=t.information;return e.players}}),{ids:function(){return this.$refs.config.distriIds}}),methods:{back:function(){this.$router.replace("/version")},start:function(){this.$store.commit(f.INFO_SET_CAMP,this.ids),this.$store.commit(f.INFO_SET_IDS,this.allotRole()),this.$store.commit(f.INFO_SET_ALIVE,this.players),this.$store.commit(f.RECO_ADD_DAY),this.$router.push("/game/checkid")},allotRole:function(){var t=this,e=this.ids,n=[],r=[];for((0,a.default)(e).forEach(function(r){for(var o=parseInt(e[r]),i=function(e){var o=parseInt(r),i=void 0;t.identity.some(function(t){return t.uid===o&&(i=t.name,!0)}),n.push({name:i,uid:o,alive:1})},a=0;a<o;a++)i(a)});n.length;){var o=n.length,i=Math.floor(Math.random()*o)%o;r.push(n.splice(i,1)[0])}return r}},components:{CHeader:n(66),PlayerConfig:n(90),PlayerNumber:n(95),CButton:n(100)}}},function(t,e,n){t.exports={default:n(87),__esModule:!0}},function(t,e,n){n(88),t.exports=n(7).Object.keys},function(t,e,n){var r=n(38),o=n(21);n(89)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(5),o=n(7),i=n(16);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(t,e,n){var r,o;n(91),r=n(93);var i=n(94);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-ed4c6716",t.exports=r},function(t,e,n){var r=n(92);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".player-config[data-v-ed4c6716]{display:flex;width:90%;margin-bottom:.5rem;background-color:#fbfbfb}.config-left[data-v-ed4c6716]{padding:3rem 1.2rem;background-color:#fff;font-size:.9rem}.config-right[data-v-ed4c6716]{display:flex;flex-direction:column;justify-content:space-between;width:100%;border-left:1px solid #f0f0f0}.config-right>p[data-v-ed4c6716]{padding:.5rem;border-top:1px solid #f0f0f0;text-align:center;color:#29bde0}.config-right li[data-v-ed4c6716]{color:#999}.config-right li[data-v-ed4c6716]:nth-child(odd):before{content:'\\25AA\\FE0E   ';color:#fbb435}.config-right li[data-v-ed4c6716]:nth-child(even):before{content:'\\25AA\\FE0E   ';color:#29bde0}.config-right input[data-v-ed4c6716]{width:1rem;color:#fbb435;text-align:center;font-size:.8rem}.config-list[data-v-ed4c6716]{display:flex;justify-content:space-around;height:100%;width:100%;padding-top:1rem}",""])},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(86),a=o(i),s=n(1),u=o(s),d=n(42),c=n(44),f=r(c);e.default={data:function(){return{distriIds:{},showConfig:!1}},computed:(0,u.default)({},(0,d.mapState)({identity:function(t){var e=t.config;return e.identity},roleConfig:function(t){var e=t.config;return e.roleConfig},players:function(t){var e=t.information;return e.players}})),watch:{players:function(){this.setIds("update")}},methods:(0,u.default)({},(0,d.mapMutations)({changePlayerNum:f.INFO_SET_PLAYERS}),{init:function(t,e){this.$set(this.distriIds,t,e?e:0)},update:function(t,e){this.distriIds[t]=e?e:0},setIds:function(t){var e=this,n=this.players,r=this.roleConfig[n],o=r?r.split(","):[];this.identity.forEach(function(n,r){var i=parseInt(o[n.uid-1]);e[t](n.uid,i)})},confirmNumber:function(){var t=this;this.showConfig&&!function(){var e=t.distriIds,n=0,r=(0,a.default)(e);r.forEach(function(t){n+=parseInt(e[t])}),t.changePlayerNum(n)}(),this.showConfig=!this.showConfig}}),mounted:function(){this.setIds("init")}}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"player-config"},[_m(0)," ",_h("div",{staticClass:"config-right"},[_h("div",{staticClass:"config-list"},[_h("ul",{directives:[{name:"show",rawName:"v-show",value:!showConfig,expression:"!showConfig"}]},[_l(identity,function(t,e){return _h("li",[_h("span",[_s(t.name)])," "+_s(distriIds[t.uid])+" 人\n        "])})])," ",_h("ul",{directives:[{name:"show",rawName:"v-show",value:showConfig,expression:"showConfig"}]},[_l(identity,function(t,e){return _h("li",[_h("span",[_s(t.name)])," ",_h("input",{directives:[{name:"model",rawName:"v-model",value:distriIds[t.uid],expression:"distriIds[ id.uid ]"}],attrs:{type:"number"},domProps:{value:_s(distriIds[t.uid])},on:{input:function(e){e.target.composing||(distriIds[t.uid]=_n(e.target.value))}}})," 人\n        "])})])])," ",_h("p",{on:{click:confirmNumber}},[_s(showConfig?"确定":"点击设置")])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"config-left"},[_h("p",["玩"])," ",_h("p",["家"])," ",_h("p",["配"])," ",_h("p",["比"])])}]}},function(t,e,n){var r,o;n(96),r=n(98);var i=n(99);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-4069c8fc",t.exports=r},function(t,e,n){var r=n(97);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".player-number[data-v-4069c8fc]{box-sizing:border-box;margin-bottom:.5rem;padding:1rem;background-color:#fff}.player-number>input[data-v-4069c8fc]{width:1.5rem;margin-left:.5rem;margin-right:.5rem;border:none;background-color:#f0f0f0;color:#fbb435;font-size:1rem;outline:0;text-align:center}",""])},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=o(i),s=n(42),u=n(44),d=r(u);e.default={computed:(0,a.default)({},(0,s.mapState)({playernumber:function(t){var e=t.information;return e.players}}),{thisNumber:{get:function(){return this.playernumber},set:function(t){this.changePlayerNum(t)}}}),methods:(0,a.default)({},(0,s.mapMutations)({changePlayerNum:d.INFO_SET_PLAYERS})),components:{CBlock:n(73)}}},function(module,exports){module.exports={render:function(){with(this)return _h("c-block",{staticClass:"player-number",attrs:{height:"20%"}},[_m(0)," ",_h("input",{directives:[{name:"model",rawName:"v-model",value:thisNumber,expression:"thisNumber"}],attrs:{type:"number",autoComplete:"off"},domProps:{value:_s(thisNumber)},on:{input:function(t){t.target.composing||(thisNumber=_n(t.target.value))}}})," ",_m(1)])},staticRenderFns:[function(){with(this)return _h("span",["玩家人数"])},function(){with(this)return _h("span",["人"])}]}},function(t,e,n){var r,o;n(101),r=n(103);var i=n(104);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-40229ade",t.exports=r},function(t,e,n){var r=n(102);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".button[data-v-40229ade]{position:relative;display:block;width:90%;margin-left:auto;margin-right:auto;height:2.2rem;border:none;font-size:1rem;outline:none}.button[data-v-40229ade]:active:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.05)}.button-style-normal[data-v-40229ade]{background-color:#fbb435;color:#fff}.button-style-warn[data-v-40229ade]{background-color:#f66e6e;color:#fff}.button-size-l[data-v-40229ade]{width:90%}.button-size-m[data-v-40229ade]{width:82%}.button-size-s[data-v-40229ade]{width:40%}",""])},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{type:String,default:"normal"},size:{type:String,default:"m"},onClick:{type:Function,default:function(){}}}}},function(module,exports){module.exports={render:function(){with(this)return _h("button",{class:"button button-style-"+type+" button-size-"+size,on:{click:onClick}},[_t("default")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"config"},[_h("c-header",{attrs:{"l-btn-name":"icon-chevron-left2","l-btn-fn":back,"r-btn-name":"icon-question-circle"}},["参数设置"])," ",_h("player-config",{ref:"config"})," ",_h("player-number")," ",_h("c-button",{attrs:{size:"l","on-click":start}},["去发牌"])])},staticRenderFns:[]}}]));