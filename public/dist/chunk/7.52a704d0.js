webpackJsonp([7,10],{57:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},58:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=l[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(d(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(d(r.parts[i],e));l[r.id]={id:r.id,refs:1,parts:a}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],s=o[2],d=o[3],c={css:a,media:s,sourceMap:d};n[i]?n[i].parts.push(c):e.push(n[i]={id:i,parts:[c]})}return e}function i(t,e){var n=h(),r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function d(t,e){var n,r,o;if(e.singleton){var i=v++;n=m||(m=s(e)),r=c.bind(null,n,i,!1),o=c.bind(null,n,i,!0)}else n=s(e),r=u.bind(null,n),o=function(){a(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function c(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function u(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],d=l[s.id];d.refs--,i.push(d)}if(t){var c=o(t);r(c,e)}for(var a=0;a<i.length;a++){var d=i[a];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete l[d.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},66:function(t,e,n){var r,o;n(67),n(69),r=n(71);var i=n(72);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-32c18fa8",t.exports=r},67:function(t,e,n){var r=n(68);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},68:function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".c-header+*{margin-top:2.5rem}",""])},69:function(t,e,n){var r=n(70);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},70:function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".header[data-v-32c18fa8]{position:fixed;top:0;left:0;z-index:9999;display:flex;justify-content:space-around;align-items:center;width:100%;height:2.5rem;border-bottom:1px solid #74d4eb;background-color:#29bde0;color:#fff}.header-title[data-v-32c18fa8]{font-size:1rem;text-align:center}.header-lb[data-v-32c18fa8],.header-rb[data-v-32c18fa8]{position:absolute;padding:.6rem;text-align:center;font-size:1rem}.header-lb[data-v-32c18fa8]{left:.5rem}.header-rb[data-v-32c18fa8]{right:.5rem}",""])},71:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{lBtnName:String,lBtnFn:{type:Function,default:function(){}},rBtnName:String,rBtnFn:{type:Function,default:function(){}}}}},72:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"header c-header"},[lBtnName?_h("i",{class:"header-lb icon "+lBtnName,on:{click:lBtnFn}}):_e()," ",_h("p",{staticClass:"header-title"},[_t("default")])," ",rBtnName?_h("i",{class:"header-rb icon "+rBtnName,on:{click:rBtnFn}}):_e()])},staticRenderFns:[]}},86:function(t,e,n){t.exports={default:n(87),__esModule:!0}},87:function(t,e,n){n(88),t.exports=n(7).Object.keys},88:function(t,e,n){var r=n(38),o=n(21);n(89)("keys",function(){return function(t){return o(r(t))}})},89:function(t,e,n){var r=n(5),o=n(7),i=n(16);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},100:function(t,e,n){var r,o;n(101),r=n(103);var i=n(104);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-40229ade",t.exports=r},101:function(t,e,n){var r=n(102);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},102:function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".button[data-v-40229ade]{position:relative;display:block;width:90%;margin-left:auto;margin-right:auto;height:2.2rem;border:none;font-size:1rem;outline:none}.button[data-v-40229ade]:active:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.05)}.button-style-normal[data-v-40229ade]{background-color:#fbb435;color:#fff}.button-style-warn[data-v-40229ade]{background-color:#f66e6e;color:#fff}.button-size-l[data-v-40229ade]{width:90%}.button-size-m[data-v-40229ade]{width:82%}.button-size-s[data-v-40229ade]{width:40%}",""])},103:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{type:String,default:"normal"},size:{type:String,default:"m"},onClick:{type:Function,default:function(){}}}}},104:function(module,exports){module.exports={render:function(){with(this)return _h("button",{class:"button button-style-"+type+" button-size-"+size,on:{click:onClick}},[_t("default")])},staticRenderFns:[]}},120:function(t,e,n){var r,o;n(121),r=n(123);var i=n(124);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-81690896",t.exports=r},121:function(t,e,n){var r=n(122);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},122:function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".id-mask[data-v-81690896]{position:relative;width:20%;padding-top:20%;border:3px solid #fff;background-color:#f7c77b;font-size:.7rem}.container[data-v-81690896]{position:absolute;top:0;left:0;width:100%;height:100%}.container img[data-v-81690896]{width:100%;height:100%}.id[data-v-81690896]{position:absolute;bottom:0;width:100%;text-align:center;background-color:rgba(41,189,226,.3);color:#fff}.identity[data-v-81690896]{position:absolute;top:30%;width:100%;text-align:center}",""])},123:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{mask:1}},props:{index:Number,role:String,lock:{type:Number,default:0}},computed:{thisMask:function(){return this.lock?1===this.lock?0:1:this.mask}},methods:{clickHandle:function(){this.lock||(this.mask=!this.mask)}}}},124:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"id-mask",on:{click:clickHandle}},[_h("p",{staticClass:"identity"},[_s(role)])," ",_h("div",{directives:[{name:"show",rawName:"v-show",value:thisMask,expression:"thisMask"}],staticClass:"container"},[_m(0)])," ",_h("p",{staticClass:"id"},[_s(index)+"号"])," ",_t("default")])},staticRenderFns:[function(){with(this)return _h("img",{attrs:{src:"public/image/idmask.jpg"}})}]}},147:function(t,e,n){var r,o;n(148),r=n(150);var i=n(153);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-fef083f8",t.exports=r},148:function(t,e,n){var r=n(149);"string"==typeof r&&(r=[[t.id,r,""]]);n(58)(r,{});r.locals&&(t.exports=r.locals)},149:function(t,e,n){e=t.exports=n(57)(),e.push([t.id,".operator[data-v-fef083f8]{position:fixed;width:100%;height:100%;background-color:#29bde0}.tips[data-v-fef083f8]{position:relative;display:flex;flex-direction:column;justify-content:center;min-height:2.5rem;padding:.2rem 2rem;background-color:#b9e9f5}.tips[data-v-fef083f8]:before{content:'';position:absolute;bottom:-.6rem;display:inline-block;border-style:solid;border-width:.7rem .4rem 0;border-color:#b9e9f5 transparent}.tips2[data-v-fef083f8]{margin:1rem 2rem .5rem;font-size:.7rem;color:#fff}.ids[data-v-fef083f8]{height:50%;padding-left:4%;overflow:scroll}.ids>div[data-v-fef083f8]{float:left;margin:3% 5%}.btn[data-v-fef083f8]{margin-top:2%}.icon[data-v-fef083f8]{position:absolute;top:3px;left:50%;transform:translateX(-50%)}.card-wrap[data-v-fef083f8]{position:absolute;top:0;left:0;width:100%;height:100%}.roleDead[data-v-fef083f8]{background-color:red}",""])},150:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(86),a=o(i),s=n(1),d=o(s),c=n(42),u=n(44),l=r(u),f=n(151);e.default={mixins:[f.procedure],data:function(){return{show:{}}},computed:(0,d.default)({},(0,c.mapState)({roles:function(t){var e=t.information;return e.identity}})),methods:(0,d.default)({},(0,c.mapMutations)({setOpIndex:l.INFO_CHANGE_OP_INDEX,recordNewEvent:l.RECO_NEW_EVENT}),{jump2timeline:function(){this.$router.push("/game/timeline")},select:function(t){var e=this.roles[t];e.alive&&this[this.mixProcedureFlow.choose](t)},multi:function(t){var e=this.show;e[t]?this.show[t]=0:this.$set(e,t,1)},single:function(t){var e=this.show,n=(0,a.default)(e),r=n.length;r&&this.$delete(e,n[0]),this.$set(e,t,1)},operate:function(t){this.setOpIndex(t),this.mixProcedureNext()},record:function t(e){var t=this.mixProcedureFlow.record;if(t){var n=t.replace(/\$id/,e+1).replace(/\$role/,this.roles[e].name);this.recordNewEvent(n)}},next:function(){var t=this,e=(0,a.default)(this.show);e.length&&e.forEach(function(e){t.record(parseInt(e)),t.$delete(t.show,e)}),this.operate(e)}}),components:{CHeader:n(66),IdMask:n(120),CButton:n(100)}}},151:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.procedure=void 0;var o=n(152),i=r(o);e.procedure=i.default},152:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=o(i),s=n(42),d=n(44),c=r(d);e.default={computed:(0,a.default)({},(0,s.mapState)({flow:function(t){var e=t.config;return e.flow},routeParams:function(t){var e=t.route;return e.params}}),{mixProcedureFlow:function(){return this.flow[this.routeParams.order]},mixProcedureOperator:function(){return this.mixProcedureFlow.operator}}),methods:{mixProcedureConfirm:function(){this.$store.dispatch(this.mixProcedureOperator)},mixProcedureNext:function(){if(this.mixProcedureConfirm(),"nextday"===this.mixProcedureOperator)this.$router.replace("/game/timeline");else{var t=this.routeParams.order+1,e={name:this.flow[t].route,params:{order:t}};this.$store.commit(c.RECO_UPDATE_FLOW,t),this.$router.replace(e)}}}}},153:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"operator"},[_h("c-header",{directives:[{name:"header-close",rawName:"v-header-close"}],attrs:{"l-btn-name":"icon-menu-circle","l-btn-fn":jump2timeline,"r-btn-name":"icon-cross"}},[_s(mixProcedureFlow.title)])," ",_h("div",{staticClass:"tips"},[_h("p",[_s(mixProcedureFlow.tips)])])," ",_m(0)," ",_h("div",{staticClass:"ids"},[_l(roles,function(t,e){return _h("id-mask",{class:{roleDead:!t.alive},attrs:{index:e+1,role:t.name,lock:1}},[_h("div",{staticClass:"card-wrap",on:{click:function(t){select(e)}}},[1===show[e]?_h("i",{class:"icon icon-"+mixProcedureFlow.icon}):_e()])])})])," ",_h("c-button",{staticClass:"btn",attrs:{"on-click":next}},[_s(mixProcedureFlow.button||"确定")])])},staticRenderFns:[function(){with(this)return _h("p",{staticClass:"tips2"},["点击下方玩家头像，对玩家进行标记"])}]}}});