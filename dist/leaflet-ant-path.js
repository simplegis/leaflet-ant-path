!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("leaflet")):"function"==typeof define&&define.amd?define(["leaflet"],e):"object"==typeof exports?exports["leaflet-ant-path"]=e(require("leaflet")):t["leaflet-ant-path"]=e(t.L)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.multiAntPath=e.MultiAntPath=e.antPath=e.AntPath=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(1),u=n(2),a=r(u),c=n(7),f=r(c),s=n(8),l=r(s),p=n(9),h=r(p);if(n(10),n(62),i.Polyline.AntPath=a["default"],i.polyline.antPath=f["default"],t.exports={AntPath:a["default"],antPath:f["default"]},!i.version.match(/^1\..*$/)){var y=n(1),d=y.MultiPolyline,v=y.multiPolyline;d.MultiAntPath=l["default"],v.multiAntPath=h["default"],t.exports=o({},t.exports,{MultiAntPath:l["default"],multiAntPath:h["default"]})}e.AntPath=a["default"],e.antPath=f["default"],e.MultiAntPath=l["default"],e.multiAntPath=h["default"]},function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=function y(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:y(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},s=n(1),l=n(3),p=r(l),h=function(t){function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];o(this,e);var r=i(this,Object.getPrototypeOf(e).call(this));return r._map=null,r._path=null,r._animatedPathId=null,r._animatedPathClass="leaflet-ant-path",r._defaultOptions={paused:!1,delay:400,dashArray:[10,20],weight:5,opacity:.5,color:"#0000FF",pulseColor:"#FFFFFF"},s.Util.setOptions(r,a({},r._defaultOptions,n)),r._path=t,r._animatedPathId="ant-path-"+(new Date).getTime(),r._draw(),r}return u(e,t),c(e,[{key:"map",value:function(t){var e=this.constructor[Symbol.species];return new e(this._path.map(t),a({},this.options))}},{key:Symbol.iterator,value:p["default"].mark(function n(){return p["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(this._path,"t0",1);case 1:case"end":return t.stop()}},n,this)})},{key:"onAdd",value:function(t){this._map=t,this._map.on("zoomend",this._calculateAnimationSpeed,this),this._draw(),this._calculateAnimationSpeed()}},{key:"onRemove",value:function(t){this._map.off("zoomend",this._calculateAnimationSpeed,this),this._map=null,f(Object.getPrototypeOf(e.prototype),"onRemove",this).call(this,t)}},{key:"pause",value:function(){var t=this.options;if(t.paused)return!1;var e=document.getElementsByClassName(this._animatedPathId);for(var n in e)n.removeAttribute("style");return t.paused=!0}},{key:"resume",value:function(){this._calculateAnimationSpeed()}},{key:"_draw",value:function(){var t=this.options,e=this._path,n=this._animatedPathClass,r=this._animatedPathId,o=a({},t),i=a({},t);i.color=i.pulseColor||t.pulseColor,i.className=n+" "+r,delete o.dashArray,this.addLayer(new s.Polyline(e,o)),this.addLayer(new s.Polyline(e,i))}},{key:"_calculateAnimationSpeed",value:function(){var t=this.options,e=this._map,n=this._animatedPathId;if(!t.paused&&e){var r=e.getZoom(),o=document.getElementsByClassName(n),i=1+t.delay/3/r+"s",u=["-webkit-","-moz-","-ms-","-o-",""],a=!0,c=!1,f=void 0;try{for(var s,l=o[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var p=s.value,h=!0,y=!1,d=void 0;try{for(var v,m=u[Symbol.iterator]();!(h=(v=m.next()).done);h=!0){var b=v.value;p.setAttribute("style",b+"animation-duration: "+i)}}catch(g){y=!0,d=g}finally{try{!h&&m["return"]&&m["return"]()}finally{if(y)throw d}}}}catch(g){c=!0,f=g}finally{try{!a&&l["return"]&&l["return"]()}finally{if(c)throw f}}}}},{key:Symbol.toStringTag,get:function(){return"L.Polyline.AntPath"}}],[{key:Symbol.species,get:function(){return this}}]),e}(s.FeatureGroup);e["default"]=h,t.exports=e["default"]},function(t,e,n){(function(e){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},o="object"===("undefined"==typeof e?"undefined":r(e))?e:"object"===("undefined"==typeof window?"undefined":r(window))?window:"object"===("undefined"==typeof self?"undefined":r(self))?self:void 0,i=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,u=i&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,t.exports=n(4),i)o.regeneratorRuntime=u;else try{delete o.regeneratorRuntime}catch(a){o.regeneratorRuntime=void 0}}).call(e,function(){return this}())},function(t,e,n){(function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(t){function o(t,e,n,r){var o=Object.create((e||u).prototype),i=new d(r||[]);return o._invoke=p(t,n,i),o}function i(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function u(){}function a(){}function c(){}function f(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){this.arg=t}function l(t){function e(n,r,o,u){var a=i(t[n],t,r);if("throw"!==a.type){var c=a.arg,f=c.value;return f instanceof s?Promise.resolve(f.arg).then(function(t){e("next",t,o,u)},function(t){e("throw",t,o,u)}):Promise.resolve(f).then(function(t){c.value=t,o(c)},u)}u(a.arg)}function o(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return u=u?u.then(r,r):r()}"object"===("undefined"==typeof n?"undefined":r(n))&&n.domain&&(e=n.domain.bind(e));var u;this._invoke=o}function p(t,e,n){var r=P;return function(o,u){if(r===L)throw new Error("Generator is already running");if(r===E){if("throw"===o)throw u;return m()}for(;;){var a=n.delegate;if(a){if("return"===o||"throw"===o&&a.iterator[o]===b){n.delegate=null;var c=a.iterator["return"];if(c){var f=i(c,a.iterator,u);if("throw"===f.type){o="throw",u=f.arg;continue}}if("return"===o)continue}var f=i(a.iterator[o],a.iterator,u);if("throw"===f.type){n.delegate=null,o="throw",u=f.arg;continue}o="next",u=b;var s=f.arg;if(!s.done)return r=_,s;n[a.resultName]=s.value,n.next=a.nextLoc,n.delegate=null}if("next"===o)n.sent=n._sent=u;else if("throw"===o){if(r===P)throw r=E,u;n.dispatchException(u)&&(o="next",u=b)}else"return"===o&&n.abrupt("return",u);r=L;var f=i(t,e,n);if("normal"===f.type){r=n.done?E:_;var s={value:f.arg,done:n.done};if(f.arg!==k)return s;n.delegate&&"next"===o&&(u=b)}else"throw"===f.type&&(r=E,o="throw",u=f.arg)}}}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function y(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function v(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function o(){for(;++n<t.length;)if(g.call(t,n))return o.value=t[n],o.done=!1,o;return o.value=b,o.done=!0,o};return r.next=r}}return{next:m}}function m(){return{value:b,done:!0}}var b,g=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",O=w.toStringTag||"@@toStringTag",S="object"===r(e),j=t.regeneratorRuntime;if(j)return void(S&&(e.exports=j));j=t.regeneratorRuntime=S?e.exports:{},j.wrap=o;var P="suspendedStart",_="suspendedYield",L="executing",E="completed",k={},A=c.prototype=u.prototype;a.prototype=A.constructor=c,c.constructor=a,c[O]=a.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,O in t||(t[O]="GeneratorFunction")),t.prototype=Object.create(A),t},j.awrap=function(t){return new s(t)},f(l.prototype),j.async=function(t,e,n,r){var i=new l(o(t,e,n,r));return j.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},f(A),A[x]=function(){return this},A[O]="Generator",A.toString=function(){return"[object Generator]"},j.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},j.values=v,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=b,this.done=!1,this.delegate=null,this.tryEntries.forEach(y),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=b)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=g.call(o,"catchLoc"),a=g.call(o,"finallyLoc");if(u&&a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),k},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),y(n),k}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;y(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:v(t),resultName:e,nextLoc:n},k}}}("object"===("undefined"==typeof t?"undefined":r(t))?t:"object"===("undefined"==typeof window?"undefined":r(window))?window:"object"===("undefined"==typeof self?"undefined":r(self))?self:void 0)}).call(e,function(){return this}(),n(5)(t),n(6))},function(t,e){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){"use strict";function n(){l&&f&&(l=!1,f.length?s=f.concat(s):p=-1,s.length&&r())}function r(){if(!l){var t=u(n);l=!0;for(var e=s.length;e;){for(f=s,s=[];++p<e;)f&&f[p].run();p=-1,e=s.length}f=null,l=!1,a(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var u,a,c=t.exports={};!function(){try{u=setTimeout}catch(t){u=function(){throw new Error("setTimeout is not defined")}}try{a=clearTimeout}catch(t){a=function(){throw new Error("clearTimeout is not defined")}}}();var f,s=[],l=!1,p=-1;c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new o(t,e)),1!==s.length||l||u(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=i,c.addListener=i,c.once=i,c.off=i,c.removeListener=i,c.removeAllListeners=i,c.emit=i,c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=r(o);e["default"]=function(t,e){return Reflect.construct(i["default"],[t,e])},t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(1),f=n(2),s=r(f),l=function(t){function e(t,n){o(this,e);var r=i(this,Object.getPrototypeOf(e).call(this));return r.options=null,console.warn("\n            Deprecation warn: Leaflet 1.x doesn't have support for MultiPolylines, please\n            use LayerGroup or FeatureGroup to organize multiple ant-path layers.\n        "),r.options=n,r.setLatLngs(t),r}return u(e,t),a(e,[{key:"setLatLngs",value:function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=0,n=t.length;for(this.eachLayer(function(r){e<n?r.setLatLngs(t[e++]):this.removeLayer(r)},this);e<n;)this.addLayer(new s["default"](t[e++],this.options));return this}},{key:"getLatLngs",value:function(){var t=[];return this.eachLayer(function(e){return t.push(e.getLatLngs())}),t}},{key:"pause",value:function(){this.eachLayer(function(t){return t.pause()})}},{key:"resume",value:function(){this.eachLayer(function(t){return t.resume()})}}]),e}(c.FeatureGroup);e["default"]=l,t.exports=e["default"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8);e["default"]=function(t,e){return Reflect.construct(r.MultiAntPath,[t,e])},t.exports=e["default"]},function(t,e,n){"use strict";n(11),n(60),t.exports=n(17).Symbol},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},o=n(12),i=n(13),u=n(14),a=n(16),c=n(26),f=n(30).KEY,s=n(15),l=n(31),p=n(32),h=n(27),y=n(33),d=n(34),v=n(35),m=n(37),b=n(50),g=n(53),w=n(20),x=n(40),O=n(24),S=n(25),j=n(54),P=n(57),_=n(59),L=n(19),E=n(38),k=_.f,A=L.f,M=P.f,F=o.Symbol,N=o.JSON,R=N&&N.stringify,T="prototype",C=y("_hidden"),U=y("toPrimitive"),G={}.propertyIsEnumerable,I=l("symbol-registry"),B=l("symbols"),z=l("op-symbols"),D=Object[T],J="function"==typeof F,W=o.QObject,Y=!W||!W[T]||!W[T].findChild,K=u&&s(function(){return 7!=j(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(D,e);r&&delete D[e],A(t,e,n),r&&t!==D&&A(D,e,r)}:A,q=function(t){var e=B[t]=j(F[T]);return e._k=t,e},Q=J&&"symbol"==r(F.iterator)?function(t){return"symbol"==("undefined"==typeof t?"undefined":r(t))}:function(t){return t instanceof F},Z=function(t,e,n){return t===D&&Z(z,e,n),w(t),e=O(e,!0),w(n),i(B,e)?(n.enumerable?(i(t,C)&&t[C][e]&&(t[C][e]=!1),n=j(n,{enumerable:S(0,!1)})):(i(t,C)||A(t,C,S(1,{})),t[C][e]=!0),K(t,e,n)):A(t,e,n)},$=function(t,e){w(t);for(var n,r=b(e=x(e)),o=0,i=r.length;i>o;)Z(t,n=r[o++],e[n]);return t},H=function(t,e){return void 0===e?j(t):$(j(t),e)},V=function(t){var e=G.call(this,t=O(t,!0));return!(this===D&&i(B,t)&&!i(z,t))&&(!(e||!i(this,t)||!i(B,t)||i(this,C)&&this[C][t])||e)},X=function(t,e){if(t=x(t),e=O(e,!0),t!==D||!i(B,e)||i(z,e)){var n=k(t,e);return!n||!i(B,e)||i(t,C)&&t[C][e]||(n.enumerable=!0),n}},tt=function(t){for(var e,n=M(x(t)),r=[],o=0;n.length>o;)i(B,e=n[o++])||e==C||e==f||r.push(e);return r},et=function(t){for(var e,n=t===D,r=M(n?z:x(t)),o=[],u=0;r.length>u;)!i(B,e=r[u++])||n&&!i(D,e)||o.push(B[e]);return o};J||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function n(e){this===D&&n.call(z,e),i(this,C)&&i(this[C],t)&&(this[C][t]=!1),K(this,t,S(1,e))};return u&&Y&&K(D,t,{configurable:!0,set:e}),q(t)},c(F[T],"toString",function(){return this._k}),_.f=X,L.f=Z,n(58).f=P.f=tt,n(52).f=V,n(51).f=et,u&&!n(36)&&c(D,"propertyIsEnumerable",V,!0),d.f=function(t){return q(y(t))}),a(a.G+a.W+a.F*!J,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)y(nt[rt++]);for(var nt=E(y.store),rt=0;nt.length>rt;)v(nt[rt++]);a(a.S+a.F*!J,"Symbol",{"for":function(t){return i(I,t+="")?I[t]:I[t]=F(t)},keyFor:function(t){if(Q(t))return m(I,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),a(a.S+a.F*!J,"Object",{create:H,defineProperty:Z,defineProperties:$,getOwnPropertyDescriptor:X,getOwnPropertyNames:tt,getOwnPropertySymbols:et}),N&&a(a.S+a.F*(!J||s(function(){var t=F();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Q(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!Q(e))return e}),r[1]=e,R.apply(N,r)}}}),F[T][U]||n(18)(F[T],U,F[T].valueOf),p(F,"Symbol"),p(Math,"Math",!0),p(o.JSON,"JSON",!0)},function(t,e){"use strict";var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){"use strict";var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";t.exports=!n(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){"use strict";var r=n(12),o=n(17),i=n(18),u=n(26),a=n(28),c="prototype",f=function s(t,e,n){var f,l,p,h,y=t&s.F,d=t&s.G,v=t&s.S,m=t&s.P,b=t&s.B,g=d?r:v?r[e]||(r[e]={}):(r[e]||{})[c],w=d?o:o[e]||(o[e]={}),x=w[c]||(w[c]={});d&&(n=e);for(f in n)l=!y&&g&&void 0!==g[f],p=(l?g:n)[f],h=b&&l?a(p,r):m&&"function"==typeof p?a(Function.call,p):p,g&&u(g,f,p,t&s.U),w[f]!=p&&i(w,f,h),m&&x[f]!=p&&(x[f]=p)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e){"use strict";var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){"use strict";var r=n(19),o=n(25);t.exports=n(14)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){"use strict";var r=n(20),o=n(22),i=n(24),u=Object.defineProperty;e.f=n(14)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){"use strict";var r=n(21);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};t.exports=function(t){return"object"===("undefined"==typeof t?"undefined":n(t))?null!==t:"function"==typeof t}},function(t,e,n){"use strict";t.exports=!n(14)&&!n(15)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(21),o=n(12).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){"use strict";var r=n(21);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(12),o=n(18),i=n(13),u=n(27)("src"),a="toString",c=Function[a],f=(""+c).split(a);n(17).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(c&&(i(n,u)||o(n,u,t[e]?""+t[e]:f.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,a,function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,e){"use strict";var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){"use strict";var r=n(29);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){"use strict";t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},o=n(27)("meta"),i=n(21),u=n(13),a=n(19).f,c=0,f=Object.isExtensible||function(){return!0},s=!n(15)(function(){return f(Object.preventExtensions({}))}),l=function(t){a(t,o,{value:{i:"O"+ ++c,w:{}}})},p=function(t,e){if(!i(t))return"symbol"==("undefined"==typeof t?"undefined":r(t))?t:("string"==typeof t?"S":"P")+t;if(!u(t,o)){if(!f(t))return"F";if(!e)return"E";l(t)}return t[o].i},h=function(t,e){if(!u(t,o)){if(!f(t))return!0;if(!e)return!1;l(t)}return t[o].w},y=function(t){return s&&d.NEED&&f(t)&&!u(t,o)&&l(t),t},d=t.exports={KEY:o,NEED:!1,fastKey:p,getWeak:h,onFreeze:y}},function(t,e,n){"use strict";var r=n(12),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){"use strict";var r=n(19).f,o=n(13),i=n(33)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(31)("wks"),o=n(27),i=n(12).Symbol,u="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};a.store=r},function(t,e,n){"use strict";e.f=n(33)},function(t,e,n){"use strict";var r=n(12),o=n(17),i=n(36),u=n(34),a=n(19).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e){"use strict";t.exports=!1},function(t,e,n){"use strict";var r=n(38),o=n(40);t.exports=function(t,e){for(var n,i=o(t),u=r(i),a=u.length,c=0;a>c;)if(i[n=u[c++]]===e)return n}},function(t,e,n){"use strict";var r=n(39),o=n(49);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(13),o=n(40),i=n(44)(!1),u=n(48)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){"use strict";var r=n(41),o=n(43);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";var r=n(42);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){"use strict";var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){"use strict";t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(40),o=n(45),i=n(47);t.exports=function(t){return function(e,n,u){var a,c=r(e),f=o(c.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if(a=c[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){"use strict";var r=n(46),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){"use strict";var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(46),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){"use strict";var r=n(31)("keys"),o=n(27);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){"use strict";t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){"use strict";var r=n(38),o=n(51),i=n(52);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,f=0;a.length>f;)c.call(t,u=a[f++])&&e.push(u);return e}},function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},function(t,e){"use strict";e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";var r=n(42);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(20),o=n(55),i=n(49),u=n(48)("IE_PROTO"),a=function(){},c="prototype",f=function(){var t,e=n(23)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(56).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),f=t.F;r--;)delete f[c][i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=r(t),n=new a,a[c]=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},function(t,e,n){"use strict";var r=n(19),o=n(20),i=n(38);t.exports=n(14)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){"use strict";t.exports=n(12).document&&document.documentElement},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},o=n(40),i=n(58).f,u={}.toString,a="object"==("undefined"==typeof window?"undefined":r(window))&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==u.call(t)?c(t):i(o(t))}},function(t,e,n){"use strict";var r=n(39),o=n(49).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(52),o=n(25),i=n(40),u=n(24),a=n(13),c=n(22),f=Object.getOwnPropertyDescriptor;e.f=n(14)?f:function(t,e){if(t=i(t),e=u(e,!0),c)try{return f(t,e)}catch(n){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r=n(61),o={};o[n(33)("toStringTag")]="z",o+""!="[object z]"&&n(26)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,e,n){"use strict";var r=n(42),o=n(33)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(63);"string"==typeof r&&(r=[[t.id,r,""]]);n(65)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(64)(),e.push([t.id,"@-webkit-keyframes leaflet-ant-path-animation{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0%}}@keyframes leaflet-ant-path-animation{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0%}}path.leaflet-ant-path{fill:none;-webkit-animation:linear infinite leaflet-ant-path-animation;animation:linear infinite leaflet-ant-path-animation}",""])},function(t,e){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:u}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],u=o[1],a=o[2],c=o[3],f={css:u,media:a,sourceMap:c};n[i]?n[i].parts.push(f):e.push(n[i]={id:i,parts:[f]})}return e}function i(t,e){var n=v(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function u(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function f(t,e){var n,r,o;if(e.singleton){var i=b++;n=m||(m=a(e)),r=s.bind(null,n,i,!1),o=s.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=p.bind(null,n),o=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=l.bind(null,n),o=function(){u(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function l(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),
i&&URL.revokeObjectURL(i)}var h={},y=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=y(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=y(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],u=0;u<n.length;u++){var a=n[u],c=h[a.id];c.refs--,i.push(c)}if(t){var f=o(t);r(f,e)}for(var u=0;u<i.length;u++){var c=i[u];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete h[c.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}])});
//# sourceMappingURL=leaflet-ant-path.js.map