var ssClientUtils=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),s=n(3),a=r(s),u=n(4),c=r(u),h=n(5),f=r(h),l=n(2),p=r(l),v=n(6),d=r(v),m=n(16),y=r(m),g=n(18),w=r(g),b=n(19),_=r(b);e["default"]={li:i,tracking:a,lang:c,fn:f,string:p,svg:d,events:y,dom:w,url:_},t.exports=e["default"]},function(t,e,n){"use strict";function r(t,e){if(!t)return null;var n=s[t];return n||(n="slideShare"+i.capitalize(t)),[a,n,e].join(":")}function o(){var t=arguments.length<=0||void 0===arguments[0]?document.body:arguments[0],e=/^pagekey-(.*)/.exec(t.id);return e&&e[1]?e[1]:void 0}Object.defineProperty(e,"__esModule",{value:!0}),e.getUrn=r,e.getPageKey=o;var i=n(2),s={clip:"slideShareClip",clipboard:"slideShareClipboard",guest:"slideShareGuest",slideshow:"slideShareSlideshow",user:"slideShareUser"},a="urn:li"},function(t,e){"use strict";function n(t){return"string"==typeof t?t.charAt(0).toUpperCase()+t.substring(1):""}Object.defineProperty(e,"__esModule",{value:!0}),e.capitalize=n},function(t,e){"use strict";function n(){var t=document.querySelector('meta[name="'+r+'"]');return t?t.getAttribute("content"):null}Object.defineProperty(e,"__esModule",{value:!0}),e.getGlobalTrackingUrl=n;var r="globalTrackingUrl"},function(t,e,n){"use strict";function r(t,e){return Boolean(e&&t&&t.prototype&&t.prototype instanceof e)}function o(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;e>r;r++)n[r-1]=arguments[r];return n.reduce(function(t,e){return s(e).forEach(function(e){var n=a(e,2),r=n[0],o=n[1];t[r]=o}),t},t)}function i(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;e>r;r++)n[r-1]=arguments[r];return n.reduce(function(t,e){return s(e).forEach(function(e){var n=a(e,2),r=n[0],o=n[1];c(t,r)||(t[r]=o)}),t},t)}function s(t){return Object.keys(t).map(function(e){return[e,t[e]]})}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.isDescendantClass=r,e.assign=o,e.defaults=i,e.entries=s;var u=n(5),c=u.imperative(Object.prototype.hasOwnProperty),h=u.imperative(Array.prototype.slice),f=function(t){return h(t)};e.toArray=f},function(t,e){"use strict";function n(t){return function(){return r.apply(t,arguments)}}Object.defineProperty(e,"__esModule",{value:!0}),e.imperative=n;var r=Function.prototype.call},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length<=0||void 0===arguments[0]?document:arguments[0],e=arguments.length<=1||void 0===arguments[1]?"ss-svg-icons":arguments[1],n=a.toArray(t.querySelectorAll('meta[name="'+e+'"]'));return n.map(function(t){return t.getAttribute("content")})}function i(t){var e=arguments.length<=1||void 0===arguments[1]?document.body:arguments[1],n=t.firstChild;n.style.display="none",e.insertBefore(n,e.firstChild)}function s(){var t=arguments.length<=0||void 0===arguments[0]?document:arguments[0],e=arguments.length<=1||void 0===arguments[1]?document.body:arguments[1],n=o(t).map(function(t){return h.requestXml(t).then(function(t){return i(t,e)})});return c["default"].all(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.getSvgUrls=o,e.injectSvg=i,e.loadSvgs=s;var a=n(4),u=n(7),c=r(u),h=n(15)},function(t,e,n){"use strict";t.exports=n(8),n(12),n(13),n(14)},function(t,e,n){"use strict";function r(t){function e(t){return null===u?void h.push(t):void s(function(){var e=u?t.onFulfilled:t.onRejected;if(null===e)return void(u?t.resolve:t.reject)(c);var n;try{n=e(c)}catch(r){return void t.reject(r)}t.resolve(n)})}function n(t){try{if(t===f)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void i(e.bind(t),n,r)}u=!0,c=t,a()}catch(o){r(o)}}function r(t){u=!1,c=t,a()}function a(){for(var t=0,n=h.length;n>t;t++)e(h[t]);h=null}if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");var u=null,c=null,h=[],f=this;this.then=function(t,n){return new f.constructor(function(r,i){e(new o(t,n,r,i))})},i(t,n,r)}function o(t,e,n,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=r}function i(t,e,n){var r=!1;try{t(function(t){r||(r=!0,e(t))},function(t){r||(r=!0,n(t))})}catch(o){if(r)return;r=!0,n(o)}}var s=n(9);t.exports=r},function(t,e,n){(function(e,n){function r(){for(;i.next;){i=i.next;var t=i.task;i.task=void 0;var e=i.domain;e&&(i.domain=void 0,e.enter());try{t()}catch(n){if(c)throw e&&e.exit(),setTimeout(r,0),e&&e.enter(),n;setTimeout(function(){throw n},0)}e&&e.exit()}a=!1}function o(t){s=s.next={task:t,domain:c&&e.domain,next:null},a||(a=!0,u())}var i={task:void 0,next:null},s=i,a=!1,u=void 0,c=!1;if("undefined"!=typeof e&&e.nextTick)c=!0,u=function(){e.nextTick(r)};else if("function"==typeof n)u="undefined"!=typeof window?n.bind(window,r):function(){n(r)};else if("undefined"!=typeof MessageChannel){var h=new MessageChannel;h.port1.onmessage=r,u=function(){h.port2.postMessage(0)}}else u=function(){setTimeout(r,0)};t.exports=o}).call(e,n(10),n(11).setImmediate)},function(t,e){function n(){c=!1,s.length?u=s.concat(u):h=-1,u.length&&r()}function r(){if(!c){var t=setTimeout(n);c=!0;for(var e=u.length;e;){for(s=u,u=[];++h<e;)s&&s[h].run();h=-1,e=u.length}s=null,c=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var s,a=t.exports={},u=[],c=!1,h=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new o(t,e)),1!==u.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,n){(function(t,r){function o(t,e){this._id=t,this._clearFn=e}var i=n(10).nextTick,s=Function.prototype.apply,a=Array.prototype.slice,u={},c=0;e.setTimeout=function(){return new o(s.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(s.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var n=c++,r=arguments.length<2?!1:a.call(arguments,1);return u[n]=!0,i(function(){u[n]&&(r?t.apply(null,r):t.call(null),e.clearImmediate(n))}),n},e.clearImmediate="function"==typeof r?r:function(t){delete u[t]}}).call(e,n(11).setImmediate,n(11).clearImmediate)},function(t,e,n){"use strict";var r=n(8),o=n(9);t.exports=r,r.prototype.done=function(t,e){var n=arguments.length?this.then.apply(this,arguments):this;n.then(null,function(t){o(function(){throw t})})}},function(t,e,n){"use strict";function r(t){this.then=function(e){return"function"!=typeof e?this:new o(function(n,r){i(function(){try{n(e(t))}catch(o){r(o)}})})}}var o=n(8),i=n(9);t.exports=o,r.prototype=o.prototype;var s=new r(!0),a=new r(!1),u=new r(null),c=new r(void 0),h=new r(0),f=new r("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return u;if(void 0===t)return c;if(t===!0)return s;if(t===!1)return a;if(0===t)return h;if(""===t)return f;if("object"==typeof t||"function"==typeof t)try{var e=t.then;if("function"==typeof e)return new o(e.bind(t))}catch(n){return new o(function(t,e){e(n)})}return new r(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(i,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){r(i,t)},n)}e[i]=s,0===--o&&t(e)}catch(u){n(u)}}if(0===e.length)return t([]);for(var o=e.length,i=0;i<e.length;i++)r(i,e[i])})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){t.forEach(function(t){o.resolve(t).then(e,n)})})},o.prototype["catch"]=function(t){return this.then(null,t)}},function(t,e,n){"use strict";var r=n(8),o=n(9);t.exports=r,r.denodeify=function(t,e){return e=e||1/0,function(){var n=this,o=Array.prototype.slice.call(arguments);return new r(function(r,i){for(;o.length&&o.length>e;)o.pop();o.push(function(t,e){t?i(t):r(e)});var s=t.apply(n,o);!s||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof s.then||r(s)})}},r.nodeify=function(t){return function(){var e=Array.prototype.slice.call(arguments),n="function"==typeof e[e.length-1]?e.pop():null,i=this;try{return t.apply(this,arguments).nodeify(n,i)}catch(s){if(null===n||"undefined"==typeof n)return new r(function(t,e){e(s)});o(function(){n.call(i,s)})}}},r.prototype.nodeify=function(t,e){return"function"!=typeof t?this:void this.then(function(n){o(function(){t.call(e,null,n)})},function(n){o(function(){t.call(e,n)})})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){var e=arguments.length<=1||void 0===arguments[1]?"get":arguments[1],n=new XMLHttpRequest;n.open(e,t,!0);var r=new a["default"](function(t,e){n.addEventListener("readystatechange",function(){4===this.readyState&&(this.status>=200&&this.status<400?t(this):e(this))})});return n.send(),r}function i(t){var e=arguments.length<=1||void 0===arguments[1]?"get":arguments[1];return o(t,e).then(function(t){return t.responseXML})}Object.defineProperty(e,"__esModule",{value:!0}),e.request=o,e.requestXml=i;var s=n(7),a=r(s)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=new a["default"];return u.entries(c).filter(function(t){var e=i(t,2),n=e[1];return"function"==typeof n}).forEach(function(n){var r=i(n,2),o=r[0],s=r[1];return t[o]=s.bind(e)}),t}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.mixin=o;var s=n(17),a=r(s),u=n(4),c=a["default"].prototype},function(t,e,n){"use strict";function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function o(){}var i="function"!=typeof Object.create?"~":!1;o.prototype._events=void 0,o.prototype.listeners=function(t,e){var n=i?i+t:t,r=this._events&&this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,a=new Array(s);s>o;o++)a[o]=r[o].fn;return a},o.prototype.emit=function(t,e,n,r,o,s){var a=i?i+t:t;if(!this._events||!this._events[a])return!1;var u,c,h=this._events[a],f=arguments.length;if("function"==typeof h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),f){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,n),!0;case 4:return h.fn.call(h.context,e,n,r),!0;case 5:return h.fn.call(h.context,e,n,r,o),!0;case 6:return h.fn.call(h.context,e,n,r,o,s),!0}for(c=1,u=new Array(f-1);f>c;c++)u[c-1]=arguments[c];h.fn.apply(h.context,u)}else{var l,p=h.length;for(c=0;p>c;c++)switch(h[c].once&&this.removeListener(t,h[c].fn,void 0,!0),f){case 1:h[c].fn.call(h[c].context);break;case 2:h[c].fn.call(h[c].context,e);break;case 3:h[c].fn.call(h[c].context,e,n);break;default:if(!u)for(l=1,u=new Array(f-1);f>l;l++)u[l-1]=arguments[l];h[c].fn.apply(h[c].context,u)}}return!0},o.prototype.on=function(t,e,n){var o=new r(e,n||this),s=i?i+t:t;return this._events||(this._events=i?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],o]:this._events[s].push(o):this._events[s]=o,this},o.prototype.once=function(t,e,n){var o=new r(e,n||this,!0),s=i?i+t:t;return this._events||(this._events=i?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],o]:this._events[s].push(o):this._events[s]=o,this},o.prototype.removeListener=function(t,e,n,r){var o=i?i+t:t;if(!this._events||!this._events[o])return this;var s=this._events[o],a=[];if(e)if(s.fn)(s.fn!==e||r&&!s.once||n&&s.context!==n)&&a.push(s);else for(var u=0,c=s.length;c>u;u++)(s[u].fn!==e||r&&!s[u].once||n&&s[u].context!==n)&&a.push(s[u]);return a.length?this._events[o]=1===a.length?a[0]:a:delete this._events[o],this},o.prototype.removeAllListeners=function(t){return this._events?(t?delete this._events[i?i+t:t]:this._events=i?{}:Object.create(null),this):this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=i,t.exports=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length<=0||void 0===arguments[0]?document:arguments[0];return new s["default"](function(e){"interactive"===t.readyState||"complete"===t.readyState?e(t):t.addEventListener("DOMContentLoaded",function(){return e(t)})})}Object.defineProperty(e,"__esModule",{value:!0}),e.createContentLoadedPromise=o;var i=n(7),s=r(i),a=o(document);e.onContentLoaded=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){if("string"!=typeof t)throw new TypeError("link argument must be a string; found "+typeof t);var e=s["default"].parse(t,!0).query;if(e){var n=e.trk;if(n)return Array.isArray(n)?n[n.length-1]:n}return null}Object.defineProperty(e,"__esModule",{value:!0}),e.getTrackingCode=o;var i=n(20),s=r(i)},function(t,e,n){function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function o(t,e,n){if(t&&c(t)&&t instanceof r)return t;var o=new r;return o.parse(t,e,n),o}function i(t){return u(t)&&(t=o(t)),t instanceof r?t.format():r.prototype.format.call(t)}function s(t,e){return o(t,!1,!0).resolve(e)}function a(t,e){return t?o(t,!1,!0).resolveObject(e):e}function u(t){return"string"==typeof t}function c(t){return"object"==typeof t&&null!==t}function h(t){return null===t}function f(t){return null==t}var l=n(21);e.parse=o,e.resolve=s,e.resolveObject=a,e.format=i,e.Url=r;var p=/^([a-z0-9.+-]+:)/i,v=/:[0-9]*$/,d=["<",">",'"',"`"," ","\r","\n","	"],m=["{","}","|","\\","^","`"].concat(d),y=["'"].concat(m),g=["%","/","?",";","#"].concat(y),w=["/","?","#"],b=255,_=/^[a-z0-9A-Z_-]{0,63}$/,x=/^([a-z0-9A-Z_-]{0,63})(.*)$/,j={javascript:!0,"javascript:":!0},A={javascript:!0,"javascript:":!0},O={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},C=n(23);r.prototype.parse=function(t,e,n){if(!u(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=t;r=r.trim();var o=p.exec(r);if(o){o=o[0];var i=o.toLowerCase();this.protocol=i,r=r.substr(o.length)}if(n||o||r.match(/^\/\/[^@\/]+@[^@\/]+/)){var s="//"===r.substr(0,2);!s||o&&A[o]||(r=r.substr(2),this.slashes=!0)}if(!A[o]&&(s||o&&!O[o])){for(var a=-1,c=0;c<w.length;c++){var h=r.indexOf(w[c]);-1!==h&&(-1===a||a>h)&&(a=h)}var f,v;v=-1===a?r.lastIndexOf("@"):r.lastIndexOf("@",a),-1!==v&&(f=r.slice(0,v),r=r.slice(v+1),this.auth=decodeURIComponent(f)),a=-1;for(var c=0;c<g.length;c++){var h=r.indexOf(g[c]);-1!==h&&(-1===a||a>h)&&(a=h)}-1===a&&(a=r.length),this.host=r.slice(0,a),r=r.slice(a),this.parseHost(),this.hostname=this.hostname||"";var d="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!d)for(var m=this.hostname.split(/\./),c=0,T=m.length;T>c;c++){var I=m[c];if(I&&!I.match(_)){for(var k="",M=0,q=I.length;q>M;M++)k+=I.charCodeAt(M)>127?"x":I[M];if(!k.match(_)){var E=m.slice(0,c),S=m.slice(c+1),U=I.match(x);U&&(E.push(U[1]),S.unshift(U[2])),S.length&&(r="/"+S.join(".")+r),this.hostname=E.join(".");break}}}if(this.hostname.length>b?this.hostname="":this.hostname=this.hostname.toLowerCase(),!d){for(var L=this.hostname.split("."),P=[],c=0;c<L.length;++c){var R=L[c];P.push(R.match(/[^A-Za-z0-9_-]/)?"xn--"+l.encode(R):R)}this.hostname=P.join(".")}var F=this.port?":"+this.port:"",z=this.hostname||"";this.host=z+F,this.href+=this.host,d&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==r[0]&&(r="/"+r))}if(!j[i])for(var c=0,T=y.length;T>c;c++){var X=y[c],H=encodeURIComponent(X);H===X&&(H=escape(X)),r=r.split(X).join(H)}var K=r.indexOf("#");-1!==K&&(this.hash=r.substr(K),r=r.slice(0,K));var Z=r.indexOf("?");if(-1!==Z?(this.search=r.substr(Z),this.query=r.substr(Z+1),e&&(this.query=C.parse(this.query)),r=r.slice(0,Z)):e&&(this.search="",this.query={}),r&&(this.pathname=r),O[i]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var F=this.pathname||"",R=this.search||"";this.path=F+R}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",o=!1,i="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&c(this.query)&&Object.keys(this.query).length&&(i=C.stringify(this.query));var s=this.search||i&&"?"+i||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||O[e])&&o!==!1?(o="//"+(o||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):o||(o=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),n=n.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),s=s.replace("#","%23"),e+o+n+s+r},r.prototype.resolve=function(t){return this.resolveObject(o(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(u(t)){var e=new r;e.parse(t,!1,!0),t=e}var n=new r;if(Object.keys(this).forEach(function(t){n[t]=this[t]},this),n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol)return Object.keys(t).forEach(function(e){"protocol"!==e&&(n[e]=t[e])}),O[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n;if(t.protocol&&t.protocol!==n.protocol){if(!O[t.protocol])return Object.keys(t).forEach(function(e){n[e]=t[e]}),n.href=n.format(),n;if(n.protocol=t.protocol,t.host||A[t.protocol])n.pathname=t.pathname;else{for(var o=(t.pathname||"").split("/");o.length&&!(t.host=o.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==o[0]&&o.unshift(""),o.length<2&&o.unshift(""),n.pathname=o.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var i=n.pathname||"",s=n.search||"";n.path=i+s}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var a=n.pathname&&"/"===n.pathname.charAt(0),c=t.host||t.pathname&&"/"===t.pathname.charAt(0),l=c||a||n.host&&t.pathname,p=l,v=n.pathname&&n.pathname.split("/")||[],o=t.pathname&&t.pathname.split("/")||[],d=n.protocol&&!O[n.protocol];if(d&&(n.hostname="",n.port=null,n.host&&(""===v[0]?v[0]=n.host:v.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===o[0]?o[0]=t.host:o.unshift(t.host)),t.host=null),l=l&&(""===o[0]||""===v[0])),c)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,v=o;else if(o.length)v||(v=[]),v.pop(),v=v.concat(o),n.search=t.search,n.query=t.query;else if(!f(t.search)){if(d){n.hostname=n.host=v.shift();var m=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1;m&&(n.auth=m.shift(),n.host=n.hostname=m.shift())}return n.search=t.search,n.query=t.query,h(n.pathname)&&h(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!v.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var y=v.slice(-1)[0],g=(n.host||t.host)&&("."===y||".."===y)||""===y,w=0,b=v.length;b>=0;b--)y=v[b],"."==y?v.splice(b,1):".."===y?(v.splice(b,1),w++):w&&(v.splice(b,1),w--);if(!l&&!p)for(;w--;w)v.unshift("..");!l||""===v[0]||v[0]&&"/"===v[0].charAt(0)||v.unshift(""),g&&"/"!==v.join("/").substr(-1)&&v.push("");var _=""===v[0]||v[0]&&"/"===v[0].charAt(0);if(d){n.hostname=n.host=_?"":v.length?v.shift():"";var m=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1;m&&(n.auth=m.shift(),n.host=n.hostname=m.shift())}return l=l||n.host&&v.length,l&&!_&&v.unshift(""),v.length?n.pathname=v.join("/"):(n.pathname=null,n.path=null),h(n.pathname)&&h(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},r.prototype.parseHost=function(){var t=this.host,e=v.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},function(t,e,n){var r;(function(t,o){!function(i){function s(t){throw RangeError(E[t])}function a(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function u(t,e){var n=t.split("@"),r="";n.length>1&&(r=n[0]+"@",t=n[1]),t=t.replace(q,".");var o=t.split("."),i=a(o,e).join(".");return r+i}function c(t){for(var e,n,r=[],o=0,i=t.length;i>o;)e=t.charCodeAt(o++),e>=55296&&56319>=e&&i>o?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function h(t){return a(t,function(t){var e="";return t>65535&&(t-=65536,e+=L(t>>>10&1023|55296),t=56320|1023&t),e+=L(t)}).join("")}function f(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:_}function l(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function p(t,e,n){var r=0;for(t=n?U(t/O):t>>1,t+=U(t/e);t>S*j>>1;r+=_)t=U(t/S);return U(r+(S+1)*t/(t+A))}function v(t){var e,n,r,o,i,a,u,c,l,v,d=[],m=t.length,y=0,g=T,w=C;for(n=t.lastIndexOf(I),0>n&&(n=0),r=0;n>r;++r)t.charCodeAt(r)>=128&&s("not-basic"),d.push(t.charCodeAt(r));for(o=n>0?n+1:0;m>o;){for(i=y,a=1,u=_;o>=m&&s("invalid-input"),c=f(t.charCodeAt(o++)),(c>=_||c>U((b-y)/a))&&s("overflow"),y+=c*a,l=w>=u?x:u>=w+j?j:u-w,!(l>c);u+=_)v=_-l,a>U(b/v)&&s("overflow"),a*=v;e=d.length+1,w=p(y-i,e,0==i),U(y/e)>b-g&&s("overflow"),g+=U(y/e),y%=e,d.splice(y++,0,g)}return h(d)}function d(t){var e,n,r,o,i,a,u,h,f,v,d,m,y,g,w,A=[];for(t=c(t),m=t.length,e=T,n=0,i=C,a=0;m>a;++a)d=t[a],128>d&&A.push(L(d));for(r=o=A.length,o&&A.push(I);m>r;){for(u=b,a=0;m>a;++a)d=t[a],d>=e&&u>d&&(u=d);for(y=r+1,u-e>U((b-n)/y)&&s("overflow"),n+=(u-e)*y,e=u,a=0;m>a;++a)if(d=t[a],e>d&&++n>b&&s("overflow"),d==e){for(h=n,f=_;v=i>=f?x:f>=i+j?j:f-i,!(v>h);f+=_)w=h-v,g=_-v,A.push(L(l(v+w%g,0))),h=U(w/g);A.push(L(l(h,0))),i=p(n,y,r==o),n=0,++r}++n,++e}return A.join("")}function m(t){return u(t,function(t){return k.test(t)?v(t.slice(4).toLowerCase()):t})}function y(t){return u(t,function(t){return M.test(t)?"xn--"+d(t):t})}var g=("object"==typeof e&&e&&!e.nodeType&&e,"object"==typeof t&&t&&!t.nodeType&&t,"object"==typeof o&&o);(g.global===g||g.window===g||g.self===g)&&(i=g);var w,b=2147483647,_=36,x=1,j=26,A=38,O=700,C=72,T=128,I="-",k=/^xn--/,M=/[^\x20-\x7E]/,q=/[\x2E\u3002\uFF0E\uFF61]/g,E={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},S=_-x,U=Math.floor,L=String.fromCharCode;w={version:"1.3.2",ucs2:{decode:c,encode:h},decode:v,encode:d,toASCII:y,toUnicode:m},r=function(){return w}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(this)}).call(e,n(22)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,n){"use strict";e.decode=e.parse=n(24),e.encode=e.stringify=n(25)},function(t,e){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,o){e=e||"&",r=r||"=";var i={};if("string"!=typeof t||0===t.length)return i;var s=/\+/g;t=t.split(e);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var u=t.length;a>0&&u>a&&(u=a);for(var c=0;u>c;++c){var h,f,l,p,v=t[c].replace(s,"%20"),d=v.indexOf(r);d>=0?(h=v.substr(0,d),f=v.substr(d+1)):(h=v,f=""),l=decodeURIComponent(h),p=decodeURIComponent(f),n(i,l)?Array.isArray(i[l])?i[l].push(p):i[l]=[i[l],p]:i[l]=p}return i}},function(t,e){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,o){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map(function(o){var i=encodeURIComponent(n(o))+r;return Array.isArray(t[o])?t[o].map(function(t){return i+encodeURIComponent(n(t))}).join(e):i+encodeURIComponent(n(t[o]))}).join(e):o?encodeURIComponent(n(o))+r+encodeURIComponent(n(t)):""}}]);!function(){ssClientUtils.dom.onContentLoaded.then(ssClientUtils.svg.loadSvgs)}();