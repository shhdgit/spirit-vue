webpackJsonp([0,10],[function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(1),u=r(o),i=e(39),c=r(i),f=e(40),a=e(41),l=r(a),s=e(51),p=r(s);e(161);var d=e(162),v=r(d);(0,f.sync)(l.default,p.default),new c.default((0,u.default)({router:p.default},v.default)).$mount("#app")},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(2),u=r(o);n.default=u.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},function(t,n,e){t.exports={default:e(3),__esModule:!0}},function(t,n,e){e(4),t.exports=e(7).Object.assign},function(t,n,e){var r=e(5);r(r.S+r.F,"Object",{assign:e(20)})},function(t,n,e){var r=e(6),o=e(7),u=e(8),i=e(10),c="prototype",f=function(t,n,e){var a,l,s,p=t&f.F,d=t&f.G,v=t&f.S,_=t&f.P,h=t&f.B,y=t&f.W,m=d?o:o[n]||(o[n]={}),O=m[c],b=d?r:v?r[n]:(r[n]||{})[c];d&&(e=n);for(a in e)l=!p&&b&&void 0!==b[a],l&&a in m||(s=l?b[a]:e[a],m[a]=d&&"function"!=typeof b[a]?e[a]:h&&l?u(s,r):y&&b[a]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(s):_&&"function"==typeof s?u(Function.call,s):s,_&&((m.virtual||(m.virtual={}))[a]=s,t&f.R&&O&&!O[a]&&i(O,a,s)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(9);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(11),o=e(19);t.exports=e(15)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(12),o=e(14),u=e(18),i=Object.defineProperty;n.f=e(15)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(15)&&!e(16)(function(){return 7!=Object.defineProperty(e(17)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=!e(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(13),o=e(6).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,e){var r=e(13);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";var r=e(21),o=e(36),u=e(37),i=e(38),c=e(25),f=Object.assign;t.exports=!f||e(16)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=i(t),f=arguments.length,a=1,l=o.f,s=u.f;f>a;)for(var p,d=c(arguments[a++]),v=l?r(d).concat(l(d)):r(d),_=v.length,h=0;_>h;)s.call(d,p=v[h++])&&(e[p]=d[p]);return e}:f},function(t,n,e){var r=e(22),o=e(35);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(23),o=e(24),u=e(28)(!1),i=e(32)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=i&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~u(a,e)||a.push(e));return a}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(25),o=e(27);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(26);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(24),o=e(29),u=e(31);t.exports=function(t){return function(n,e,i){var c,f=r(n),a=o(f.length),l=u(i,a);if(t&&e!=e){for(;a>l;)if(c=f[l++],c!=c)return!0}else for(;a>l;l++)if((t||l in f)&&f[l]===e)return t||l||0;return!t&&-1}}},function(t,n,e){var r=e(30),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(30),o=Math.max,u=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):u(t,n)}},function(t,n,e){var r=e(33)("keys"),o=e(34);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(6),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(27);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports=Vue},function(t,n){n.sync=function(t,n){t.registerModule("route",{state:{},mutations:{"router/ROUTE_CHANGED":function(n,e){t.state.route=Object.freeze({name:e.name,path:e.path,hash:e.hash,query:e.query,params:e.params,fullPath:e.fullPath})}}});var e,r=!1;t.watch(function(t){return t.route},function(t){t.fullPath!==e&&(r=!0,e=t.fullPath,n.push(t))},{sync:!0}),n.afterEach(function(n){return r?void(r=!1):(e=n.fullPath,void t.commit("router/ROUTE_CHANGED",n))})}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(42),u=r(o),i=e(43),c=r(i),f=e(49),a=r(f),l=e(50),s=r(l);n.default=new u.default.Store({modules:{config:c.default,record:a.default,information:s.default}})},function(t,n){t.exports=Vuex},function(t,n,e){"use strict";function r(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var u,i=e(44),c=o(i),f=e(48),a=r(f),l={identity:[],procedure:{},winCondition:{}},s=(u={},(0,c.default)(u,a.CONFIG_SET_IDENTITY,function(t,n){return t.identity=n}),(0,c.default)(u,a.CONFIG_SET_PROCEDURE,function(t,n){return t.procedure=n}),(0,c.default)(u,a.CONFIG_SET_CONDITION,function(t,n){return t.winCondition=n}),u),p={setConfig:function(t,n){var e=t.commit,r=n.identity,o=n.procedure,u=n.condition;e(a.CONFIG_SET_IDENTITY,r),e(a.CONFIG_SET_PROCEDURE,o),e(a.CONFIG_SET_CONDITION,u)}};n.default={state:l,mutations:s,actions:p}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(45),u=r(o);n.default=function(t,n,e){return n in t?(0,u.default)(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n,e){t.exports={default:e(46),__esModule:!0}},function(t,n,e){e(47);var r=e(7).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(5);r(r.S+r.F*!e(15),"Object",{defineProperty:e(11).f})},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.CONFIG_SET_IDENTITY="config/SET_IDENTITY",n.CONFIG_SET_PROCEDURE="config/SET_PROCEDURE",n.CONFIG_SET_CONDITION="config/SET_CONDITION",n.INFO_SET_PLAYERS="information/SET_PLAYERS",n.INFO_SET_CAPM="information/SET_CAMP",n.INFO_SET_ALIVE="information/SET_ALIVE",n.INFO_SET_IDS="information/SET_IDS"},function(t,n,e){"use strict";function r(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}Object.defineProperty(n,"__esModule",{value:!0});var o=e(48),u=(r(o),{information:[]}),i={},c={};n.default={state:u,mutations:i,actions:c}},function(t,n,e){"use strict";function r(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var u,i=e(44),c=o(i),f=e(48),a=r(f),l={players:8,identity:[],alive:0,camp:{}},s=(u={},(0,c.default)(u,a.INFO_SET_PLAYERS,function(t,n){t.players=n,t.alive=n}),(0,c.default)(u,a.INFO_SET_CAMP,function(t,n){return t.camp=n}),(0,c.default)(u,a.INFO_SET_ALIVE,function(t,n){return t.alive=n}),(0,c.default)(u,a.INFO_SET_IDS,function(t,n){return t.identity=n}),u),p={};n.default={state:l,mutations:s,actions:p}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(52),u=r(o),i=e(41),c=r(i),f=new u.default({routes:[{name:"bootstrap",path:"/",component:function(t){return e.e(1,function(n){var e=[n(53)];t.apply(null,e)}.bind(this))}},{name:"version",path:"/version",component:function(t){return e.e(2,function(n){var e=[n(60)];t.apply(null,e)}.bind(this))}},{name:"configuration",path:"/configuration",component:function(t){return e.e(3,function(n){var e=[n(81)];t.apply(null,e)}.bind(this))}},{name:"checkid",path:"/game/checkid",component:function(t){return e.e(4,function(n){var e=[n(105)];t.apply(null,e)}.bind(this))}},{name:"overview",path:"/game/overview",component:function(t){return e.e(5,function(n){var e=[n(115)];t.apply(null,e)}.bind(this))}},{name:"timeline",path:"/game/timeline",component:function(t){return e.e(6,function(n){var e=[n(125)];t.apply(null,e)}.bind(this))}},{name:"operator",path:"/game/operator",component:function(t){return e.e(7,function(n){var e=[n(146)];t.apply(null,e)}.bind(this))}},{name:"report",path:"/game/report",component:function(t){return e.e(8,function(n){var e=[n(151)];t.apply(null,e)}.bind(this))}},{name:"result",path:"/game/result",component:function(t){return e.e(9,function(n){var e=[n(156)];t.apply(null,e)}.bind(this))}},{path:"*",redirect:"/"}]});f.beforeEach(function(t,n,e){"bootstrap"!==t.name&&"version"!==t.name?c.default.state.config.identity.length?e():(location.hash="",location.reload()):e()}),n.default=f},function(t,n){t.exports=VueRouter},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(39),u=r(o),i=e(51),c=r(i),f=function(){c.default.back()};u.default.directive("back",function(t){t.addEventListener("click",function(){return f()})}),u.default.directive("header-back",function(t){var n=t.querySelector(".header-lb");n&&n.addEventListener("click",function(){return f()})}),u.default.directive("header-close",function(t){var n=t.querySelector(".header-rb");n&&n.addEventListener("click",function(){confirm("确定结束本轮游戏吗？")&&c.default.replace("/configuration")})})},function(t,n,e){var r,o;r=e(163);var u=e(164);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,t.exports=r},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(41),u=r(o);n.default={store:u.default}},function(module,exports){module.exports={render:function(){with(this)return _h("router-view")},staticRenderFns:[]}}]);