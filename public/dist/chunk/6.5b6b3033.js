webpackJsonp([6,10],{48:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},49:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=f[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],t));f[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],s=r[2],d=r[3],c={css:a,media:s,sourceMap:d};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=h(),o=b[b.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function d(e,t){var n,o,r;if(t.singleton){var i=m++;n=v||(v=s(t)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else n=s(t),o=l.bind(null,n),r=function(){a(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=u(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],d=f[s.id];d.refs--,i.push(d)}if(e){var c=r(e);o(c,t)}for(var a=0;a<i.length;a++){var d=i[a];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete f[d.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},56:function(e,t,n){var o,r;n(57),n(59),o=n(61);var i=n(62);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-32c18fa8",e.exports=o},57:function(e,t,n){var o=n(58);"string"==typeof o&&(o=[[e.id,o,""]]);n(49)(o,{});o.locals&&(e.exports=o.locals)},58:function(e,t,n){t=e.exports=n(48)(),t.push([e.id,".c-header+*{margin-top:2.5rem}",""])},59:function(e,t,n){var o=n(60);"string"==typeof o&&(o=[[e.id,o,""]]);n(49)(o,{});o.locals&&(e.exports=o.locals)},60:function(e,t,n){t=e.exports=n(48)(),t.push([e.id,".header[data-v-32c18fa8]{position:fixed;top:0;left:0;z-index:9999;display:flex;justify-content:space-around;align-items:center;width:100%;height:2.5rem;border-bottom:1px solid #74d4eb;background-color:#29bde0;color:#fff}.header-title[data-v-32c18fa8]{font-size:1rem;text-align:center}.header-lb[data-v-32c18fa8],.header-rb[data-v-32c18fa8]{position:absolute;padding:.6rem;text-align:center;font-size:1rem}.header-lb[data-v-32c18fa8]{left:.5rem}.header-rb[data-v-32c18fa8]{right:.5rem}",""])},61:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{lBtnName:String,lBtnFn:Function,rBtnName:String,rBtnFn:Function}}},62:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"header c-header"},[lBtnName?_h("i",{class:"header-lb icon "+lBtnName,on:{click:lBtnFn}}):_e()," ",_h("p",{staticClass:"header-title"},[_t("default")])," ",rBtnName?_h("i",{class:"header-rb icon "+rBtnName,on:{click:rBtnFn}}):_e()])},staticRenderFns:[]}},111:function(e,t,n){var o,r;n(112),o=n(114);var i=n(132);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-7cbe4961",e.exports=o},112:function(e,t,n){var o=n(113);"string"==typeof o&&(o=[[e.id,o,""]]);n(49)(o,{});o.locals&&(e.exports=o.locals)},113:function(e,t,n){t=e.exports=n(48)(),t.push([e.id,".timeline[data-v-7cbe4961]{position:fixed;width:100%;height:100%;margin-top:1rem;background-color:#f0f0f0}",""])},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{back:function(){this.$router.push("/game/overview")}},components:{CHeader:n(56),CAccordion:n(115).Accordion,CPanel:n(115).Panel,Timeline:n(126)}}},115:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Panel=t.Accordion=void 0;var r=n(116),i=o(r),a=n(121),s=o(a);t.Accordion=i.default,t.Panel=s.default},116:function(e,t,n){var o,r;n(117),o=n(119);var i=n(120);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-3115bfd6",e.exports=o},117:function(e,t,n){var o=n(118);"string"==typeof o&&(o=[[e.id,o,""]]);n(49)(o,{});o.locals&&(e.exports=o.locals)},118:function(e,t,n){t=e.exports=n(48)(),t.push([e.id,".accordion[data-v-3115bfd6]{width:94%;margin-left:auto;margin-right:auto}.accordion>[data-v-3115bfd6]{margin-bottom:.5rem}",""])},119:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{showId:0}},methods:{showPanel:function(e){e!==this.showId?this.showId=e:this.showId=0}},created:function(){this.$on("showPanel",this.showPanel)},mounted:function(){var e=this.$children[0]._uid;e&&(this.showId=e)}}},120:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"accordion"},[_t("default")])},staticRenderFns:[]}},121:function(e,t,n){var o,r;n(122),o=n(124);var i=n(125);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-36abed5e",e.exports=o},122:function(e,t,n){var o=n(123);"string"==typeof o&&(o=[[e.id,o,""]]);n(49)(o,{});o.locals&&(e.exports=o.locals)},123:function(e,t,n){t=e.exports=n(48)(),t.push([e.id,".panel[data-v-36abed5e]{border:1px solid #ccc;background-color:#fff}.title[data-v-36abed5e]{position:relative;height:2.4rem}.title p[data-v-36abed5e]{font-size:1rem;line-height:2.4rem;text-align:center;color:#29bde0}.title i[data-v-36abed5e]{position:absolute;top:35%;right:1rem;color:#29bde0;font-weight:800}.content[data-v-36abed5e]{border-top:1px solid #ccc}.fade-enter-active[data-v-36abed5e],.fade-leave-active[data-v-36abed5e]{transition:opacity .5s}.fade-enter[data-v-36abed5e],.fade-leave-active[data-v-36abed5e]{opacity:0}",""])},124:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{id:0}},props:{title:String},computed:{isIdEqual:function(){return this.$parent.showId===this._uid},icon:function(){return this.isIdEqual?"chevron-up":"chevron-down"}},methods:{openPanel:function(){this.$parent.$emit("showPanel",this._uid)}}}},125:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"panel"},[_h("div",{staticClass:"title",on:{click:openPanel}},[_h("p",[_s(title)])," ",_h("i",{class:"icon icon-"+icon})])," ",_h("transition",{attrs:{name:"fade"}},[isIdEqual?_h("div",{staticClass:"content"},[_t("default")]):_e()])])},staticRenderFns:[]}},126:function(e,t,n){var o,r;n(127),o=n(129);var i=n(131);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-6b023ffc",e.exports=o},127:function(e,t,n){var o=n(128);"string"==typeof o&&(o=[[e.id,o,""]]);n(49)(o,{});o.locals&&(e.exports=o.locals)},128:function(e,t,n){t=e.exports=n(48)(),t.push([e.id,".stage[data-v-6b023ffc]{position:relative;margin-left:1rem;padding:1rem;border-left:1px solid #ccc}.stage-icon[data-v-6b023ffc]{position:absolute;top:2rem;left:-4%;display:inline-block;width:1rem;height:1rem;padding:.2rem;border:1px solid #ccc;border-radius:50%;background-color:#fff}.stage-icon p[data-v-6b023ffc]{font-size:1rem;text-align:center;color:#fbb435}.flow[data-v-6b023ffc]{position:relative;margin:.8rem;padding:.4rem 1rem;background-color:#25a6c6;color:#fff;font-size:.9rem;text-align:center}.flow[data-v-6b023ffc]:before{content:'';position:absolute;top:25%;left:-.5rem;display:inline-block;border-style:solid;border-width:.5rem .8rem .5rem 0;border-color:transparent #25a6c6}",""])},129:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(130),i=o(r);t.default={data:function(){return{config:i.default}}}},130:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={game:"mafia",rule:[{stage:"night",icon:"moon-o",flow:[{title:"杀手杀人",route:"operator"},{title:"警察验人",route:"operator"}]},{stage:"day",icon:"sun-o",flow:[{title:"自由发言",route:"report"},{title:"投票",route:"operator"},{title:"发表遗言",route:"report"}]}],win:function(e){e.camp},idmap:{1:"平民",2:"杀手",3:"警察"}}},131:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_l(config.rule,function(e){return _h("div",{staticClass:"stage"},[_h("div",{staticClass:"stage-icon"},[_h("p",{class:"icon icon-"+e.icon})])," ",_l(e.flow,function(e){return _h("router-link",{staticClass:"flow",attrs:{tag:"div",to:e.route}},[_h("p",[_s(e.title)])])})])})])},staticRenderFns:[]}},132:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"timeline"},[_h("c-header",{directives:[{name:"header-close",rawName:"v-header-close"}],attrs:{"l-btn-name":"icon-chevron-left2","l-btn-fn":back,"r-btn-name":"icon-cross"}},["法官台本"])," ",_h("c-accordion",[_h("c-panel",{attrs:{title:"第二天"}},[_h("timeline")])," ",_h("c-panel",{attrs:{title:"第一天"}},[_h("timeline")])])])},staticRenderFns:[]}}});