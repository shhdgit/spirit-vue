webpackJsonp([1,10],{45:function(e,t,n){var r,o;n(46),r=n(50);var i=n(51);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-7cec0611",e.exports=r},46:function(e,t,n){var r=n(47);"string"==typeof r&&(r=[[e.id,r,""]]);n(49)(r,{});r.locals&&(e.exports=r.locals)},47:function(e,t,n){t=e.exports=n(48)(),t.push([e.id,".bootstrap[data-v-7cec0611]{position:fixed;width:100%;height:100%;background-color:#29bde0;text-align:center;color:#fff}.bootstrap img[data-v-7cec0611]{width:60%;margin-top:4rem;margin-bottom:2rem}.bootstrap p[data-v-7cec0611]{font-size:1.1rem}",""])},48:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},49:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(u(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],s=o[1],a=o[2],u=o[3],f={css:s,media:a,sourceMap:u};n[i]?n[i].parts.push(f):t.push(n[i]={id:i,parts:[f]})}return t}function i(e,t){var n=h(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var i=m++;n=v||(v=a(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=a(t),r=c.bind(null,n),o=function(){s(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},l=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=l()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],u=d[a.id];u.refs--,i.push(u)}if(e){var f=o(e);r(f,t)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},50:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){var e=this;setTimeout(function(){return e.$router.replace("/version")},2e3)}}},51:function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"bootstrap"},[_h("img",{attrs:{src:"public/image/logo.png"}})," ",_h("p",["更多 ∙ 更全 ∙ 更好用"])])}]}}});