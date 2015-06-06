
var Zepto=function(){function t(t){return null==t?String(t):W[X.call(t)]||"object"}function n(n){return"function"==t(n)}function e(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(n){return"object"==t(n)}function o(t){return r(t)&&!e(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function c(t){return $.call(t,function(t){return null!=t})}function u(t){return t.length>0?C.fn.concat.apply([],t):t}function a(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in M?M[t]:M[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,n){return"number"!=typeof n||B[a(t)]?n:n+"px"}function h(t){var n,e;return j[t]||(n=P.createElement(t),P.body.appendChild(n),e=getComputedStyle(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),j[t]=e),j[t]}function p(t){return"children"in t?L.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,n){var e,i=t?t.length:0;for(e=0;i>e;e++)this[e]=t[e];this.length=i,this.selector=n||""}function m(t,n,e){for(x in n)e&&(o(n[x])||Q(n[x]))?(o(n[x])&&!o(t[x])&&(t[x]={}),Q(n[x])&&!Q(t[x])&&(t[x]=[]),m(t[x],n[x],e)):n[x]!==N&&(t[x]=n[x])}function g(t,n){return null==n?C(t):C(t).filter(n)}function y(t,e,i,r){return n(e)?e.call(t,i,r):e}function v(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function w(t,n){var e=t.className||"",i=e&&e.baseVal!==N;return n===N?i?e.baseVal:e:void(i?e.baseVal=n:t.className=n)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(n){return t}}function E(t,n){n(t);for(var e=0,i=t.childNodes.length;i>e;e++)E(t.childNodes[e],n)}var N,x,C,O,T,S,A=[],Z=A.concat,$=A.filter,L=A.slice,P=window.document,j={},M={},B={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},q=/^\s*<(\w+|!)[^>]*>/,z=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,V=/([A-Z])/g,F=["val","css","html","text","data","width","height","offset"],D=["after","prepend","before","append"],H=P.createElement("table"),I=P.createElement("tr"),J={tr:P.createElement("tbody"),tbody:H,thead:H,tfoot:H,td:I,th:I,"*":P.createElement("div")},U=/complete|loaded|interactive/,_=/^[\w-]*$/,W={},X=W.toString,Y={},G=P.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,n){if(!n||!t||1!==t.nodeType)return!1;var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(e)return e.call(t,n);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~Y.qsa(r,n).indexOf(t),o&&G.removeChild(t),i},T=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},S=function(t){return $.call(t,function(n,e){return t.indexOf(n)==e})},Y.fragment=function(t,n,e){var i,r,s;return z.test(t)&&(i=C(P.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(k,"<$1></$2>")),n===N&&(n=q.test(t)&&RegExp.$1),n in J||(n="*"),s=J[n],s.innerHTML=""+t,i=C.each(L.call(s.childNodes),function(){s.removeChild(this)})),o(e)&&(r=C(i),C.each(e,function(t,n){F.indexOf(t)>-1?r[t](n):r.attr(t,n)})),i},Y.Z=function(t,n){return new d(t,n)},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,e){var i;if(!t)return Y.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&q.test(t))i=Y.fragment(t,RegExp.$1,e),t=null;else{if(e!==N)return C(e).find(t);i=Y.qsa(P,t)}else{if(n(t))return C(P).ready(t);if(Y.isZ(t))return t;if(Q(t))i=c(t);else if(r(t))i=[t],t=null;else if(q.test(t))i=Y.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==N)return C(e).find(t);i=Y.qsa(P,t)}}return Y.Z(i,t)},C=function(t,n){return Y.init(t,n)},C.extend=function(t){var n,e=L.call(arguments,1);return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){m(t,e,n)}),t},Y.qsa=function(t,n){var e,i="#"==n[0],r=!i&&"."==n[0],o=i||r?n.slice(1):n,s=_.test(o);return t.getElementById&&s&&i?(e=t.getElementById(o))?[e]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:L.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(n):t.querySelectorAll(n))},C.contains=P.documentElement.contains?function(t,n){return t!==n&&t.contains(n)}:function(t,n){for(;n&&(n=n.parentNode);)if(n===t)return!0;return!1},C.type=t,C.isFunction=n,C.isWindow=e,C.isArray=Q,C.isPlainObject=o,C.isEmptyObject=function(t){var n;for(n in t)return!1;return!0},C.inArray=function(t,n,e){return A.indexOf.call(n,t,e)},C.camelCase=T,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.noop=function(){},C.map=function(t,n){var e,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)e=n(t[i],i),null!=e&&o.push(e);else for(r in t)e=n(t[r],r),null!=e&&o.push(e);return u(o)},C.each=function(t,n){var e,i;if(s(t)){for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;return t},C.grep=function(t,n){return $.call(t,n)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){W["[object "+n+"]"]=n.toLowerCase()}),C.fn={constructor:Y.Z,length:0,forEach:A.forEach,reduce:A.reduce,push:A.push,sort:A.sort,splice:A.splice,indexOf:A.indexOf,concat:function(){var t,n,e=[];for(t=0;t<arguments.length;t++)n=arguments[t],e[t]=Y.isZ(n)?n.toArray():n;return Z.apply(Y.isZ(this)?this.toArray():this,e)},map:function(t){return C(C.map(this,function(n,e){return t.call(n,e,n)}))},slice:function(){return C(L.apply(this,arguments))},ready:function(t){return U.test(P.readyState)&&P.body?t(C):P.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===N?L.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return A.every.call(this,function(n,e){return t.call(n,e,n)!==!1}),this},filter:function(t){return n(t)?this.not(this.not(t)):C($.call(this,function(n){return Y.matches(n,t)}))},add:function(t,n){return C(S(this.concat(C(t,n))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==N)this.each(function(n){t.call(this,n)||e.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&n(t.item)?L.call(t):C(t);this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return C(e)},has:function(t){return this.filter(function(){return r(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:C(t)},find:function(t){var n,e=this;return n=t?"object"==typeof t?C(t).filter(function(){var t=this;return A.some.call(e,function(n){return C.contains(n,t)})}):1==this.length?C(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)}):C()},closest:function(t,n){var e=this[0],r=!1;for("object"==typeof t&&(r=C(t));e&&!(r?r.indexOf(e)>=0:Y.matches(e,t));)e=e!==n&&!i(e)&&e.parentNode;return C(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=C.map(e,function(t){return(t=t.parentNode)&&!i(t)&&n.indexOf(t)<0?(n.push(t),t):void 0});return g(n,t)},parent:function(t){return g(S(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||L.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,n){return $.call(p(n.parentNode),function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(n){return n[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var i=C(t).get(0),r=i.parentNode||this.length>1;return this.each(function(n){C(this).wrapAll(e?t.call(this,n):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var n;(n=t.children()).length;)t=n.first();C(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var i=C(this),r=i.contents(),o=e?t.call(this,n):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=C(this);(t===N?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(n){var e=this.innerHTML;C(this).empty().append(y(this,t,n,e))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(n){var e=y(this,t,n,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this[0].textContent:null},attr:function(t,n){var e;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(r(t))for(x in t)v(this,x,t[x]);else v(this,t,y(this,n,e,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(e=this[0].getAttribute(t))&&t in this[0]?this[0][t]:e:N},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,n){return t=K[t]||t,1 in arguments?this.each(function(e){this[t]=y(this,n,e,this[t])}):this[0]&&this[0][t]},data:function(t,n){var e="data-"+t.replace(V,"-$1").toLowerCase(),i=1 in arguments?this.attr(e,n):this.attr(e);return null!==i?b(i):N},val:function(t){return 0 in arguments?this.each(function(n){this.value=y(this,t,n,this.value)}):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(n){var e=C(this),i=y(this,t,n,e.offset()),r=e.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==e.css("position")&&(o.position="relative"),e.css(o)});if(!this.length)return null;if(!C.contains(P.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(n,e){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof n)return r.style[T(n)]||i.getPropertyValue(n);if(Q(n)){var o={};return C.each(n,function(t,n){o[n]=r.style[T(n)]||i.getPropertyValue(n)}),o}}var s="";if("string"==t(n))e||0===e?s=a(n)+":"+f(n,e):this.each(function(){this.style.removeProperty(a(n))});else for(x in n)n[x]||0===n[x]?s+=a(x)+":"+f(x,n[x])+";":this.each(function(){this.style.removeProperty(a(x))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?A.some.call(this,function(t){return this.test(w(t))},l(t)):!1},addClass:function(t){return t?this.each(function(n){if("className"in this){O=[];var e=w(this),i=y(this,t,n,e);i.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||O.push(t)},this),O.length&&w(this,e+(e?" ":"")+O.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===N)return w(this,"");O=w(this),y(this,t,n,O).split(/\s+/g).forEach(function(t){O=O.replace(l(t)," ")}),w(this,O.trim())}})},toggleClass:function(t,n){return t?this.each(function(e){var i=C(this),r=y(this,t,e,w(this));r.split(/\s+/g).forEach(function(t){(n===N?!i.hasClass(t):n)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===N?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===N?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],n=this.offsetParent(),e=this.offset(),i=R.test(n[0].nodeName)?{top:0,left:0}:n.offset();return e.top-=parseFloat(C(t).css("margin-top"))||0,e.left-=parseFloat(C(t).css("margin-left"))||0,i.top+=parseFloat(C(n[0]).css("border-top-width"))||0,i.left+=parseFloat(C(n[0]).css("border-left-width"))||0,{top:e.top-i.top,left:e.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!R.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(r){var o,s=this[0];return r===N?e(s)?s["inner"+n]:i(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(n){s=C(this),s.css(t,y(this,r,n,s[t]()))})}}),D.forEach(function(n,e){var i=e%2;C.fn[n]=function(){var n,r,o=C.map(arguments,function(e){return n=t(e),"object"==n||"array"==n||null==e?e:Y.fragment(e)}),s=this.length>1;return o.length<1?this:this.each(function(t,n){r=i?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null;var c=C.contains(P.documentElement,r);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return C(t).remove();r.insertBefore(t,n),c&&E(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[i?n+"To":"insert"+(e?"Before":"After")]=function(t){return C(t)[n](this),this}}),Y.Z.prototype=d.prototype=C.fn,Y.uniq=S,Y.deserializeValue=b,C.zepto=Y,C}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto);

!function(n){function e(n){return n._zid||(n._zid=p++)}function t(n,t,o,u){if(t=r(t),t.ns)var a=i(t.ns);return(g[e(n)]||[]).filter(function(n){return!(!n||t.e&&n.e!=t.e||t.ns&&!a.test(n.ns)||o&&e(n.fn)!==e(o)||u&&n.sel!=u)})}function r(n){var e=(""+n).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(n){return new RegExp("(?:^| )"+n.replace(" "," .* ?")+"(?: |$)")}function o(n,e){return n.del&&!y&&n.e in E||!!e}function u(n){return P[n]||y&&E[n]||n}function a(t,i,a,s,f,p,d){var v=e(t),h=g[v]||(g[v]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return n(document).ready(a);var i=r(e);i.fn=a,i.sel=f,i.e in P&&(a=function(e){var t=e.relatedTarget;return!t||t!==this&&!n.contains(this,t)?i.fn.apply(this,arguments):void 0}),i.del=p;var v=p||a;i.proxy=function(n){if(n=c(n),!n.isImmediatePropagationStopped()){n.data=s;var e=v.apply(t,n._args==l?[n]:[n].concat(n._args));return e===!1&&(n.preventDefault(),n.stopPropagation()),e}},i.i=h.length,h.push(i),"addEventListener"in t&&t.addEventListener(u(i.e),i.proxy,o(i,d))})}function s(n,r,i,a,s){var c=e(n);(r||"").split(/\s/).forEach(function(e){t(n,e,i,a).forEach(function(e){delete g[c][e.i],"removeEventListener"in n&&n.removeEventListener(u(e.e),e.proxy,o(e,s))})})}function c(e,t){return(t||!e.isDefaultPrevented)&&(t||(t=e),n.each(D,function(n,r){var i=t[n];e[n]=function(){return this[r]=b,i&&i.apply(t,arguments)},e[r]=x}),(t.defaultPrevented!==l?t.defaultPrevented:"returnValue"in t?t.returnValue===!1:t.getPreventDefault&&t.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function f(n){var e,t={originalEvent:n};for(e in n)w.test(e)||n[e]===l||(t[e]=n[e]);return c(t,n)}var l,p=1,d=Array.prototype.slice,v=n.isFunction,h=function(n){return"string"==typeof n},g={},m={},y="onfocusin"in window,E={focus:"focusin",blur:"focusout"},P={mouseenter:"mouseover",mouseleave:"mouseout"};m.click=m.mousedown=m.mouseup=m.mousemove="MouseEvents",n.event={add:a,remove:s},n.proxy=function(t,r){var i=2 in arguments&&d.call(arguments,2);if(v(t)){var o=function(){return t.apply(r,i?i.concat(d.call(arguments)):arguments)};return o._zid=e(t),o}if(h(r))return i?(i.unshift(t[r],t),n.proxy.apply(null,i)):n.proxy(t[r],t);throw new TypeError("expected function")},n.fn.bind=function(n,e,t){return this.on(n,e,t)},n.fn.unbind=function(n,e){return this.off(n,e)},n.fn.one=function(n,e,t,r){return this.on(n,e,t,r,1)};var b=function(){return!0},x=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,D={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};n.fn.delegate=function(n,e,t){return this.on(e,n,t)},n.fn.undelegate=function(n,e,t){return this.off(e,n,t)},n.fn.live=function(e,t){return n(document.body).delegate(this.selector,e,t),this},n.fn.die=function(e,t){return n(document.body).undelegate(this.selector,e,t),this},n.fn.on=function(e,t,r,i,o){var u,c,p=this;return e&&!h(e)?(n.each(e,function(n,e){p.on(n,t,r,e,o)}),p):(h(t)||v(i)||i===!1||(i=r,r=t,t=l),(i===l||r===!1)&&(i=r,r=l),i===!1&&(i=x),p.each(function(l,p){o&&(u=function(n){return s(p,n.type,i),i.apply(this,arguments)}),t&&(c=function(e){var r,o=n(e.target).closest(t,p).get(0);return o&&o!==p?(r=n.extend(f(e),{currentTarget:o,liveFired:p}),(u||i).apply(o,[r].concat(d.call(arguments,1)))):void 0}),a(p,e,i,r,t,c||u)}))},n.fn.off=function(e,t,r){var i=this;return e&&!h(e)?(n.each(e,function(n,e){i.off(n,t,e)}),i):(h(t)||v(r)||r===!1||(r=t,t=l),r===!1&&(r=x),i.each(function(){s(this,e,r,t)}))},n.fn.trigger=function(e,t){return e=h(e)||n.isPlainObject(e)?n.Event(e):c(e),e._args=t,this.each(function(){e.type in E&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):n(this).triggerHandler(e,t)})},n.fn.triggerHandler=function(e,r){var i,o;return this.each(function(u,a){i=f(h(e)?n.Event(e):e),i._args=r,i.target=a,n.each(t(a,e.type||e),function(n,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){n.fn[e]=function(n){return 0 in arguments?this.bind(e,n):this.trigger(e)}}),n.Event=function(n,e){h(n)||(e=n,n=e.type);var t=document.createEvent(m[n]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:t[i]=e[i];return t.initEvent(n,r,!0),c(t)}}(Zepto);


var colors = [
"#00ABED",
"#00E8FF",
"#8040B0",
"#B580FF",
"#D6338F",
"#FFCC4A", 
"#FCFA59", 
"#FF7845", 
"#FF4761", 
"#00ED73", 
"#78FF87", 
"#33F5C7",
"#EDEDED",
"#858A91",
"#3B4D54",
"#21262E"];

var index = 0;
var animate = function(){
    var color = colors[index%colors.length]
    index++
    console.log(color)
    $('.logo_path').css('stroke',color);
}
animate();
window.loaderAnimation = setInterval(animate, 500);
clearInterval(window.loaderAnimation);




var loaded = false;
function onChangeIsMaster (r) {
    console.log('onChangeIsMaster',r);
    $('p.msg').text('Starting playback...');
    if (R.player.playingSource()){
      R.player.play({source: R.player.playingSource().get('key')})
    } else {
      R.player.play({
        source: R.currentUser.get('stations')[1].key
      });  
    }
}
function onChangePlayingSource() {
  console.log('onChangePlayingSource');
}
function onChangePlayingTrack(){
  console.log('onChangePlayingTrack');
  updateTrackDetails();
}
function onChangePlayState(s) {
  
  console.log('onRdioPlayStateChanged',s)
  $('.play_icon').hide();
  $('.pause_icon').hide();
  switch(s){
    case 0:
      $('.play_icon').show();
    break;
    case 1:
      $('.pause_icon').show();
    break;
  }
}
function onChangePosition (pos) {
  console.log('onPositionChanged',pos);
  $('progress').attr('value',pos);
  
  var time = pos.toString()
  console.log(time.toHHMMSS())
  $('.time').text(time.toHHMMSS());
  
  if (pos > 0){
    musicLoaded();
  }
}
function onChangeRepeat(r) {
  console.log('onChangeRepeat');
}
function onChangeShuffle() {
  console.log('onChangeShuffle');
}
function onChangeSourcePosition() {
  console.log('onChangeSourcePosition');
}
function onChangeVolume() {
  console.log('onChangeVolume');
}
function attachRdioEvents() {
  R.player.on('change:isMaster', onChangeIsMaster);
  R.player.on('change:playingSource',onChangePlayingSource);
  R.player.on('change:playingTrack', onChangePlayingTrack);  
  R.player.on('change:playState', onChangePlayState);
  R.player.on('change:position', onChangePosition);
  R.player.on('change:repeat',onChangeRepeat);
  R.player.on('change:shuffle',onChangeShuffle);
  R.player.on('change:sourcePosition',onChangeSourcePosition);
  R.player.on('change:volume',onChangeVolume);
  $('#controls a').click(onPlayerControlClicked);
  $('#login').click(function(evt) {
    evt.preventDefault();
    R.authenticate(function(result) {
      if (result) {
        $('p.login').hide();
        loadMusic();
      }
    });
  }); 
}

function updateTrackDetails(){
  source = R.player.playingSource();
  $('#source .text').text(source.get('name'));
  $('#source .icon').attr('src', source.get('icon'));
  var key = source.get('tracks').models[0].get('key');
  rdioGetTrack(key, function(track){    
    $('#cover_art img').attr('src', track.icon);    
    $('#backdrop_art img').attr('src', track.playerBackgroundUrl);
    var rgb = track.dominantColor;
    $('#backdrop_art .screen').css('background-color', 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')');
    $('#track').text(track.name);
    $('.time').text('0:00');
    $('.duration').text(track.duration);
    $('progress').attr('value',0);
    $('progress').attr('max',track.duration);
  });
}

function onPlayerControlClicked(evt) {
  evt.preventDefault();
  // if (this.trackLoading) {return;}
  // console.log('[Chromecast][Player] click', $(evt.currentTarget));
  switch ($(evt.currentTarget).attr('id')) {
    case 'previous':
      R.player.previous();
      break;
    case 'next':
      R.player.next();
      break;
    case 'playpause':
      R.player.togglePause();
      break;
    case 'repeat':
      switch (R.player.repeat()) {
        case R.player.REPEAT_NONE:
          R.player.repeat(R.player.REPEAT_ALL);
          break;
        case R.player.REPEAT_ALL:
          R.player.repeat(R.player.REPEAT_ONE);
          break;
        case R.player.REPEAT_ONE:
          R.player.repeat(R.player.REPEAT_NONE);
          break;
      }
      break;
    case 'shuffle':
      if (R.player.shuffle() === 0) {
        R.player.shuffle(1);
      } else {
        R.player.shuffle(0);
      }
      break;
    case 'thdown':
      //prevent thumbs downing a track that was just thumbs upped
      if (!$('#controls').hasClass('thumbs_upd')) {
        R.player.voteDown(R.player.playingTrack());
      }
      break;
    case 'thup':
      //prevent thumbs upping a track that was just thumbs upped
      if (!$('#controls').hasClass('thumbs_upd')) {
        R.player.voteUp(R.player.playingTrack());
        this.updateThumbs(true);
      }
      break;
    default:
      console.error('[Chromecast][Player] unrecognized player control clicked');
      break;
  }
}

function rdioGetTrack(key, callback) {
  R.request({
    method: 'get',
    content: {
      keys: [key],
      extras: ['dominantColor', 'playerBackgroundUrl']
    },
    success: function(response) {
      console.log('track', response.result[key]);
      callback(response.result[key])
    },
    error: console.error
  });
}

function loadMusic(){
  $('p.msg').text('Found user, loading music...');
  R.player.startMasterTakeover();
}

function musicLoaded(){
  if (!loaded){
    loaded = true;
    $('body').removeClass('loading');
    window.clearInterval(window.loaderAnimation);
    onChangePlayingTrack();
    $('.time').text('1'.toHHMMSS());
  }
}

function init(){
  attachRdioEvents();
  if (R.authenticated()) {
    loadMusic();
  } else {
    $('p.msg').text('Please log in to continue.');
    $('p.login').show();
  }
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    // if (hours   < 10) {hours   = "0"+hours;}
    // if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = minutes+':'+seconds;
    return time;
}