/* Modernizr 2.0.6 (Custom Build) | MIT & BSD */
;window.Modernizr=function(a,b,c){function D(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+o.join(c+" ")+c).split(" ");return C(d,b)}function C(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function B(a,b){return!!~(""+a).indexOf(b)}function A(a,b){return typeof a===b}function z(a,b){return y(n.join(a+";")+(b||""))}function y(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),p={},q={},r={},s=[],t=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},u=function(b){if(a.matchMedia)return matchMedia(b).matches;var c;t("@media "+b+" { #"+i+" { position: absolute; } }",function(b){c=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position=="absolute"});return c},v,w={}.hasOwnProperty,x;!A(w,c)&&!A(w.call,c)?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],c)},p.rgba=function(){y("background-color:rgba(150,255,150,.5)");return B(k.backgroundColor,"rgba")},p.boxshadow=function(){return D("boxShadow")},p.csstransitions=function(){return D("transitionProperty")};for(var E in p)x(p,E)&&(v=E.toLowerCase(),e[v]=p[E](),s.push((e[v]?"":"no-")+v));e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},y(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=n,e._domPrefixes=o,e.mq=u,e.testProp=function(a){return C([a])},e.testAllProps=D,e.testStyles=t,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+s.join(" "):"");return e}(this,this.document),function(a,b){function u(){r(!0)}a.respond={},respond.update=function(){},respond.mediaQueriesSupported=b;if(!b){var c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=j.getElementsByTagName("link"),l=[],m=function(){var b=k,c=b.length,d=0,e,f,g,i;for(;d<c;d++)e=b[d],f=e.href,g=e.media,i=e.rel&&e.rel.toLowerCase()==="stylesheet",!!f&&i&&!h[f]&&(!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f)||f.replace(RegExp.$1,"").split("/")[0]===a.location.host?l.push({href:f,media:g}):h[f]=!0);n()},n=function(){if(l.length){var a=l.shift();s(a.href,function(b){o(b,a.href,a.media),h[a.href]=!0,n()})}},o=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),g=d&&d.length||0,b=b.substring(0,b.lastIndexOf("/")),h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c,j=0,k,l,m,n,o;b.length&&(b+="/"),i&&(g=1);for(;j<g;j++){k=0,i?(l=c,f.push(h(a))):(l=d[j].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),n=l.split(","),o=n.length;for(;k<o;k++)m=n[k],e.push({media:m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:f.length-1,minw:m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)})}r()},p,q,r=function(a){var b="clientWidth",h=d[b],l=c.compatMode==="CSS1Compat"&&h||c.body[b]||h,m={},n=c.createDocumentFragment(),o=k[k.length-1],s=(new Date).getTime();if(a&&p&&s-p<i)clearTimeout(q),q=setTimeout(r,i);else{p=s;for(var t in e){var u=e[t];if(!u.minw&&!u.maxw||(!u.minw||u.minw&&l>=u.minw)&&(!u.maxw||u.maxw&&l<=u.maxw))m[u.media]||(m[u.media]=[]),m[u.media].push(f[u.rules])}for(var t in g)g[t]&&g[t].parentNode===j&&j.removeChild(g[t]);for(var t in m){var v=c.createElement("style"),w=m[t].join("\n");v.type="text/css",v.media=t,v.styleSheet?v.styleSheet.cssText=w:v.appendChild(c.createTextNode(w)),n.appendChild(v),g.push(v)}j.insertBefore(n,o.nextSibling)}},s=function(a,b){var c=t();if(!!c){c.open("GET",a,!0),c.onreadystatechange=function(){c.readyState==4&&(c.status==200||c.status==304)&&b(c.responseText)};if(c.readyState==4)return;c.send()}},t=function(){var a=!1,b=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest}],c=b.length;while(c--){try{a=b[c]()}catch(d){continue}break}return function(){return a}}();m(),respond.update=m,a.addEventListener?a.addEventListener("resize",u,!1):a.attachEvent&&a.attachEvent("onresize",u)}}(this,Modernizr.mq("only all")),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
//	jQuery Mobile framework customized for Camera slideshow, made by
//	'jquery.mobile.define.js',
//	'jquery.ui.widget.js',
//	'jquery.mobile.widget.js',
//	'jquery.mobile.media.js',
//	'jquery.mobile.support.js',
//	'jquery.mobile.vmouse.js',
//	'jquery.mobile.event.js',
//	'jquery.mobile.core.js'
window.define=function(){Array.prototype.slice.call(arguments).pop()(window.jQuery)};define(["jquery"],function(a){(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++){a(e).triggerHandler("remove")}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){if(!c){if(!b||a.filter(b,[this]).length){a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")})}}return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1];f=e+"-"+b;if(!d){d=c;c=a.Widget}a.expr[":"][f]=function(c){return!!a.data(c,b)};a[e]=a[e]||{};a[e][b]=function(a,b){if(arguments.length){this._createWidget(a,b)}};var g=new c;g.options=a.extend(true,{},g.options);a[e][b].prototype=a.extend(true,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d);a.widget.bridge(b,a[e][b])};a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e==="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[true,e].concat(g)):e;if(f&&e.charAt(0)==="_"){return h}if(f){this.each(function(){var d=a.data(this,c);if(!d){throw"cannot call methods on "+c+" prior to initialization; "+"attempted to call method '"+e+"'"}if(!a.isFunction(d[e])){throw"no such method '"+e+"' for "+c+" widget instance"}var f=d[e].apply(d,g);if(f!==d&&f!==b){h=f;return false}})}else{this.each(function(){var b=a.data(this,c);if(b){b.option(e||{})._init()}else{a.data(this,c,new d(e,this))}})}return h}};a.Widget=function(a,b){if(arguments.length){this._createWidget(a,b)}};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(b,c){a.data(c,this.widgetName,this);this.element=a(c);this.options=a.extend(true,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){var b={};if(a.metadata){b=a.metadata.get(element)[this.widgetName]}return b},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0){return a.extend({},this.options)}if(typeof c==="string"){if(d===b){return this.options[c]}e={};e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b;if(a==="disabled"){this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(b,c,d){var e=this.options[b];c=a.Event(c);c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase();d=d||{};if(c.originalEvent){for(var f=a.event.props.length,g;f;){g=a.event.props[--f];c[g]=c.originalEvent[g]}}this.element.trigger(c,d);return!(a.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery)});define(["jquery","./jquery.ui.widget"],function(a){(function(a,b){a.widget("mobile.widget",{_createWidget:function(){a.Widget.prototype._createWidget.apply(this,arguments);this._trigger("init")},_getCreateOptions:function(){var c=this.element,d={};a.each(this.options,function(a){var e=c.jqmData(a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}));if(e!==b){d[a]=e}});return d},enhanceWithin:function(b){var c=a.mobile.closestPageData(a(b)),d=c&&c.keepNativeSelector()||"";a(this.options.initSelector,b).not(d)[this.widgetName]()}})})(jQuery)});define(["jquery","./jquery.mobile.core"],function(a){(function(a,b){var c=a(window),d=a("html");a.mobile.media=function(){var b={},c=a("<div id='jquery-mediatest'>"),e=a("<body>").append(c);return function(a){if(!(a in b)){var f=document.createElement("style"),g="@media "+a+" { #jquery-mediatest { position:absolute; } }";f.type="text/css";if(f.styleSheet){f.styleSheet.cssText=g}else{f.appendChild(document.createTextNode(g))}d.prepend(e).prepend(f);b[a]=c.css("position")==="absolute";e.add(f).remove()}return b[a]}}()})(jQuery)});define(["jquery","./jquery.mobile.media"],function(a){(function(a,b){function m(){var b=location.protocol+"//"+location.host+location.pathname+"ui-dir/",d=a("head base"),e=null,f="",g,h;if(!d.length){d=e=a("<base>",{href:b}).appendTo("head")}else{f=d.attr("href")}g=a("<a href='testurl' />").prependTo(c);h=g[0].href;d[0].href=f||location.pathname;if(e){e.remove()}return h.indexOf(b)===0}function l(){var b="transform-3d";return k("perspective","10px","moz")||a.mobile.media("(-"+e.join("-"+b+"),(-")+"-"+b+"),("+b+")")}function k(a,b,c){var d=document.createElement("div"),f=function(a){return a.charAt(0).toUpperCase()+a.substr(1)},g=function(a){return"-"+a.charAt(0).toLowerCase()+a.substr(1)+"-"},h=function(c){var e=g(c)+a+": "+b+";",h=f(c),i=h+f(a);d.setAttribute("style",e);if(!!d.style[i]){k=true}},j=c?[c]:e,k;for(i=0;i<j.length;i++){h(j[i])}return!!k}function j(a){var c=a.charAt(0).toUpperCase()+a.substr(1),f=(a+" "+e.join(c+" ")+c).split(" ");for(var g in f){if(d[f[g]]!==b){return true}}}var c=a("<body>").prependTo("html"),d=c[0].style,e=["Webkit","Moz","O"],f="palmGetResource"in window,g=window.operamini&&{}.toString.call(window.operamini)==="[object OperaMini]",h=window.blackberry;a.extend(a.mobile,{browser:{}});a.mobile.browser.ie=function(){var a=3,b=document.createElement("div"),c=b.all||[];while(b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->",c[0]){}return a>4?a:!a}();a.extend(a.support,{orientation:"orientation"in window&&"onorientationchange"in window,touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in window||k("transition","height 100ms linear"),pushState:"pushState"in history&&"replaceState"in history,mediaquery:a.mobile.media("only all"),cssPseudoElement:!!j("content"),touchOverflow:!!j("overflowScrolling"),cssTransform3d:l(),boxShadow:!!j("boxShadow")&&!h,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement||"scrollTop"in c[0])&&!f&&!g,dynamicBaseTag:m()});c.remove();var n=function(){var a=window.navigator.userAgent;return a.indexOf("Nokia")>-1&&(a.indexOf("Symbian/3")>-1||a.indexOf("Series60/5")>-1)&&a.indexOf("AppleWebKit")>-1&&a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}();a.mobile.ajaxBlacklist=window.blackberry&&!window.WebKitPoint||g||n;if(n){a(function(){a("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")})}if(!a.support.boxShadow){a("html").addClass("ui-mobile-nosupport-boxshadow")}})(jQuery)});define(["jquery"],function(a){(function(a,b,c,d){function O(b){var c=b.substr(1);return{setup:function(d,f){if(!M(this)){a.data(this,e,{})}var g=a.data(this,e);g[b]=true;k[b]=(k[b]||0)+1;if(k[b]===1){t.bind(c,H)}a(this).bind(c,N);if(s){k["touchstart"]=(k["touchstart"]||0)+1;if(k["touchstart"]===1){t.bind("touchstart",I).bind("touchend",L).bind("touchmove",K).bind("scroll",J)}}},teardown:function(d,f){--k[b];if(!k[b]){t.unbind(c,H)}if(s){--k["touchstart"];if(!k["touchstart"]){t.unbind("touchstart",I).unbind("touchmove",K).unbind("touchend",L).unbind("scroll",J)}}var g=a(this),h=a.data(this,e);if(h){h[b]=false}g.unbind(c,N);if(!M(this)){g.removeData(e)}}}}function N(){}function M(b){var c=a.data(b,e),d;if(c){for(d in c){if(c[d]){return true}}}return false}function L(a){if(r){return}B();var b=y(a.target),c;G("vmouseup",a,b);if(!o){var d=G("vclick",a,b);if(d&&d.isDefaultPrevented()){c=w(a).changedTouches[0];p.push({touchID:v,x:c.clientX,y:c.clientY});q=true}}G("vmouseout",a,b);o=false;E()}function K(b){if(r){return}var c=w(b).touches[0],d=o,e=a.vmouse.moveDistanceThreshold;o=o||Math.abs(c.pageX-m)>e||Math.abs(c.pageY-n)>e,flags=y(b.target);if(o&&!d){G("vmousecancel",b,flags)}G("vmousemove",b,flags);E()}function J(a){if(r){return}if(!o){G("vmousecancel",a,y(a.target))}o=true;E()}function I(b){var c=w(b).touches,d,e;if(c&&c.length===1){d=b.target;e=y(d);if(e.hasVirtualBinding){v=u++;a.data(d,f,v);F();D();o=false;var g=w(b).touches[0];m=g.pageX;n=g.pageY;G("vmouseover",b,e);G("vmousedown",b,e)}}}function H(b){var c=a.data(b.target,f);if(!q&&(!v||v!==c)){var d=G("v"+b.type,b);if(d){if(d.isDefaultPrevented()){b.preventDefault()}if(d.isPropagationStopped()){b.stopPropagation()}if(d.isImmediatePropagationStopped()){b.stopImmediatePropagation()}}}}function G(b,c,d){var e;if(d&&d[b]||!d&&z(c.target,b)){e=x(c,b);a(c.target).trigger(e)}return e}function F(){if(l){clearTimeout(l);l=0}}function E(){F();l=setTimeout(function(){l=0;C()},a.vmouse.resetTimerDuration)}function D(){A()}function C(){v=0;p.length=0;q=false;B()}function B(){r=true}function A(){r=false}function z(b,c){var d;while(b){d=a.data(b,e);if(d&&(!c||d[c])){return b}b=b.parentNode}return null}function y(b){var c={},d,f;while(b){d=a.data(b,e);for(f in d){if(d[f]){c[f]=c.hasVirtualBinding=true}}b=b.parentNode}return c}function x(b,c){var e=b.type,f,g,i,k,l,m,n,o;b=a.Event(b);b.type=c;f=b.originalEvent;g=a.event.props;if(e.search(/mouse/)>-1){g=j}if(f){for(n=g.length,k;n;){k=g[--n];b[k]=f[k]}}if(e.search(/mouse(down|up)|click/)>-1&&!b.which){b.which=1}if(e.search(/^touch/)!==-1){i=w(f);e=i.touches;l=i.changedTouches;m=e&&e.length?e[0]:l&&l.length?l[0]:d;if(m){for(o=0,len=h.length;o<len;o++){k=h[o];b[k]=m[k]}}}return b}function w(a){while(a&&typeof a.originalEvent!=="undefined"){a=a.originalEvent}return a}var e="virtualMouseBindings",f="virtualTouchID",g="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),h="clientX clientY pageX pageY screenX screenY".split(" "),i=a.event.mouseHooks?a.event.mouseHooks.props:[],j=a.event.props.concat(i),k={},l=0,m=0,n=0,o=false,p=[],q=false,r=false,s="addEventListener"in c,t=a(c),u=1,v=0;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var P=0;P<g.length;P++){a.event.special[g[P]]=O(g[P])}if(s){c.addEventListener("click",function(b){var c=p.length,d=b.target,e,g,h,i,j,k;if(c){e=b.clientX;g=b.clientY;threshold=a.vmouse.clickDistanceThreshold;h=d;while(h){for(i=0;i<c;i++){j=p[i];k=0;if(h===d&&Math.abs(j.x-e)<threshold&&Math.abs(j.y-g)<threshold||a.data(h,f)===j.touchID){b.preventDefault();b.stopPropagation();return}}h=h.parentNode}}},true)}})(jQuery,window,document)});define(["jquery","./jquery.mobile.core","./jquery.mobile.media","./jquery.mobile.support","./jquery.mobile.vmouse"],function(a){(function(a,b,c){function i(b,c,d){var e=d.type;d.type=c;a.event.handle.call(b,d);d.type=e}a.each(("touchstart touchmove touchend orientationchange throttledresize "+"tap taphold swipe swipeleft swiperight scrollstart scrollstop").split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)};a.attrFn[c]=true});var d=a.support.touch,e="touchmove scroll",f=d?"touchstart":"mousedown",g=d?"touchend":"mouseup",h=d?"touchmove":"mousemove";a.event.special.scrollstart={enabled:true,setup:function(){function g(a,c){d=c;i(b,d?"scrollstart":"scrollstop",a)}var b=this,c=a(b),d,f;c.bind(e,function(b){if(!a.event.special.scrollstart.enabled){return}if(!d){g(b,true)}clearTimeout(f);f=setTimeout(function(){g(b,false)},50)})}};a.event.special.tap={setup:function(){var b=this,c=a(b);c.bind("vmousedown",function(d){function k(a){j();if(e==a.target){i(b,"tap",a)}}function j(){h();c.unbind("vclick",k).unbind("vmouseup",h);a(document).unbind("vmousecancel",j)}function h(){clearTimeout(g)}if(d.which&&d.which!==1){return false}var e=d.target,f=d.originalEvent,g;c.bind("vmouseup",h).bind("vclick",k);a(document).bind("vmousecancel",j);g=setTimeout(function(){i(b,"taphold",a.Event("taphold"))},750)})}};a.event.special.swipe={scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=this,d=a(b);d.bind(f,function(b){function j(b){if(!f){return}var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;i={time:(new Date).getTime(),coords:[c.pageX,c.pageY]};if(Math.abs(f.coords[0]-i.coords[0])>a.event.special.swipe.scrollSupressionThreshold){b.preventDefault()}}var e=b.originalEvent.touches?b.originalEvent.touches[0]:b,f={time:(new Date).getTime(),coords:[e.pageX,e.pageY],origin:a(b.target)},i;d.bind(h,j).one(g,function(b){d.unbind(h,j);if(f&&i){if(i.time-f.time<a.event.special.swipe.durationThreshold&&Math.abs(f.coords[0]-i.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(f.coords[1]-i.coords[1])<a.event.special.swipe.verticalDistanceThreshold){f.origin.trigger("swipe").trigger(f.coords[0]>i.coords[0]?"swipeleft":"swiperight")}}f=i=c})})}};(function(a,b){function j(){var a=e();if(a!==f){f=a;c.trigger("orientationchange")}}var c=a(b),d,e,f,g,h,i={0:true,180:true};if(a.support.orientation){g=a.mobile.media("all and (orientation: landscape)");h=i[b.orientation];if(g&&h||!g&&!h){i={"-90":true,90:true}}}a.event.special.orientationchange=d={setup:function(){if(a.support.orientation&&a.mobile.orientationChangeEnabled){return false}f=e();c.bind("throttledresize",j)},teardown:function(){if(a.support.orientation&&a.mobile.orientationChangeEnabled){return false}c.unbind("throttledresize",j)},add:function(a){var b=a.handler;a.handler=function(a){a.orientation=e();return b.apply(this,arguments)}}};a.event.special.orientationchange.orientation=e=function(){var c=true,d=document.documentElement;if(a.support.orientation){c=i[b.orientation]}else{c=d&&d.clientWidth/d.clientHeight<1.1}return c?"portrait":"landscape"}})(jQuery,b);(function(){a.event.special.throttledresize={setup:function(){a(this).bind("resize",c)},teardown:function(){a(this).unbind("resize",c)}};var b=250,c=function(){f=(new Date).getTime();g=f-d;if(g>=b){d=f;a(this).trigger("throttledresize")}else{if(e){clearTimeout(e)}e=setTimeout(c,b-g)}},d=0,e,f,g})();a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)}}})})(jQuery,this)});define(["jquery","../external/requirejs/text!../version.txt","./jquery.mobile.widget"],function(a,b){(function(a,c,d){var e={};a.mobile=a.extend({},{version:b,ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:true,hashListeningEnabled:true,linkBindingEnabled:true,defaultPageTransition:"fade",maxTransitionWidth:false,minScrollBack:10,touchOverflowEnabled:false,defaultDialogTransition:"pop",loadingMessage:"loading",pageLoadErrorMessage:"Error Loading Page",loadingMessageTextVisible:false,loadingMessageTheme:"a",pageLoadErrorMessageTheme:"e",autoInitializePage:true,pushStateEnabled:true,orientationChangeEnabled:true,gradeA:function(){return a.support.mediaquery||a.mobile.browser.ie&&a.mobile.browser.ie>=7},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},silentScroll:function(b){if(a.type(b)!=="number"){b=a.mobile.defaultHomeScroll}a.event.special.scrollstart.enabled=false;setTimeout(function(){c.scrollTo(0,b);a(document).trigger("silentscroll",{x:0,y:b})},20);setTimeout(function(){a.event.special.scrollstart.enabled=true},150)},nsNormalizeDict:e,nsNormalize:function(b){if(!b){return}return e[b]||(e[b]=a.camelCase(a.mobile.ns+b))},getInheritedTheme:function(a,b){var c=a[0],d="",e=/ui-(bar|body)-([a-z])\b/,f,g;while(c){var f=c.className||"";if((g=e.exec(f))&&(d=g[2])){break}c=c.parentNode}return d||b||"a"},closestPageData:function(a){return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page")}},a.mobile);a.fn.jqmData=function(b,c){var d;if(typeof b!="undefined"){d=this.data(b?a.mobile.nsNormalize(b):b,c)}return d};a.jqmData=function(b,c,d){var e;if(typeof c!="undefined"){e=a.data(b,c?a.mobile.nsNormalize(c):c,d)}return e};a.fn.jqmRemoveData=function(b){return this.removeData(a.mobile.nsNormalize(b))};a.jqmRemoveData=function(b,c){return a.removeData(b,a.mobile.nsNormalize(c))};a.fn.removeWithDependents=function(){a.removeWithDependents(this)};a.removeWithDependents=function(b){var c=a(b);(c.jqmData("dependents")||a()).remove();c.remove()};a.fn.addDependents=function(b){a.addDependents(a(this),b)};a.addDependents=function(b,c){var d=a(b).jqmData("dependents")||a();a(b).jqmData("dependents",a.merge(d,c))};a.fn.getEncodedText=function(){return a("<div/>").text(a(this).text()).html()};var f=a.find,g=/:jqmData\(([^)]*)\)/g;a.find=function(b,c,d,e){b=b.replace(g,"[data-"+(a.mobile.ns||"")+"$1]");return f.call(this,b,c,d,e)};a.extend(a.find,f);a.find.matches=function(b,c){return a.find(b,null,null,c)};a.find.matchesSelector=function(b,c){return a.find(c,null,null,[b]).length>0}})(jQuery,this)});
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
// Camera slideshow v1.3.3 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.4+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
;(function($){$.fn.camera = function(opts, callback) {
	
	var defaults = {
		alignment			: 'center', //topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
		
		autoAdvance			: true,	//true, false
		
		mobileAutoAdvance	: true, //true, false. Auto-advancing for mobile devices
		
		barDirection		: 'leftToRight',	//'leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'
		
		barPosition			: 'bottom',	//'bottom', 'left', 'top', 'right'
		
		cols				: 6,
		
		easing				: 'easeInOutExpo',	//for the complete list http://jqueryui.com/demos/effect/easing.html
		
		mobileEasing		: '',	//leave empty if you want to display the same easing on mobile devices and on desktop etc.
		
		fx					: 'random',	//'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
										//you can also use more than one effect, just separate them with commas: 'simpleFade, scrollRight, scrollBottom'

		mobileFx			: '',	//leave empty if you want to display the same effect on mobile devices and on desktop etc.

		gridDifference		: 250,	//to make the grid blocks slower than the slices, this value must be smaller than transPeriod
		
		height				: '50%',	//here you can type pixels (for instance '300px'), a percentage (relative to the width of the slideshow, for instance '50%') or 'auto'
		
		imagePath			: 'images/',	//he path to the image folder (it serves for the blank.gif, when you want to display videos)
		
		hover				: true,	//true, false. Puase on state hover. Not available for mobile devices
				
		loader				: 'pie',	//pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)
		
		loaderColor			: '#eeeeee', 
		
		loaderBgColor		: '#222222', 
		
		loaderOpacity		: .8,	//0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
		
		loaderPadding		: 2,	//how many empty pixels you want to display between the loader and its background
		
		loaderStroke		: 7,	//the thickness both of the pie loader and of the bar loader. Remember: for the pie, the loader thickness must be less than a half of the pie diameter
				
		minHeight			: '200px',	//you can also leave it blank
		
		navigation			: true,	//true or false, to display or not the navigation buttons
		
		navigationHover		: true,	//if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be visible always
		
		mobileNavHover		: true,	//same as above, but only for mobile devices
		
		opacityOnGrid		: false,	//true, false. Decide to apply a fade effect to blocks and slices: if your slideshow is fullscreen or simply big, I recommend to set it false to have a smoother effect 
		
		overlayer			: true,	//a layer on the images to prevent the users grab them simply by clicking the right button of their mouse (.camera_overlayer)
		
		pagination			: true,
		
		playPause			: true,	//true or false, to display or not the play/pause buttons
		
		pauseOnClick		: true,	//true, false. It stops the slideshow when you click the sliders.
		
		pieDiameter			: 38,
		
		piePosition			: 'rightTop',	//'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
		
		portrait			: false, //true, false. Select true if you don't want that your images are cropped
		
		rows				: 4,
		
		slicedCols			: 12,	//if 0 the same value of cols
		
		slicedRows			: 8,	//if 0 the same value of rows
		
		slideOn				: 'random',	//next, prev, random: decide if the transition effect will be applied to the current (prev) or the next slide
		
		thumbnails			: false,
		
		time				: 7000,	//milliseconds between the end of the sliding effect and the start of the nex one
		
		transPeriod			: 1500,	//lenght of the sliding effect in milliseconds
		
////////callbacks

		onEndTransition		: function() {  },	//this callback is invoked when the transition effect ends

		onLoaded			: function() {  },	//this callback is invoked when the image on a slide has completely loaded
		
		onStartLoading		: function() {  },	//this callback is invoked when the image on a slide start loading
		
		onStartTransition	: function() {  }	//this callback is invoked when the transition effect starts

    };
	
	
	function isMobile() {
		if( navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPod/i)
			){
				return true;
		}
	}

	var opts = $.extend({}, defaults, opts);
	
	var wrap = $(this).addClass('camera_wrap');
	
	wrap.wrapInner(
        '<div class="camera_src" />'
		).wrapInner(
	    '<div class="camera_fakehover" />'
		);
		
	var fakeHover = $('.camera_fakehover',wrap);
	
	fakeHover.append(
		'<div class="camera_target"></div>'
		);
	if(opts.overlayer == true){
		fakeHover.append(
			'<div class="camera_overlayer"></div>'
			)
	}
		fakeHover.append(
        '<div class="camera_target_content"></div>'
		);
		
	var loader;
	
	if(opts.loader=='pie' && $.browser.msie && $.browser.version < 9){
		loader = 'bar';
	} else {
		loader = opts.loader;
	}
	
	if(loader == 'pie'){
		fakeHover.append(
			'<div class="camera_pie"></div>'
			)
	} else if (loader == 'bar') {
		fakeHover.append(
			'<div class="camera_bar"></div>'
			)
	} else {
		fakeHover.append(
			'<div class="camera_bar" style="display:none"></div>'
			)
	}
	
	if(opts.playPause==true){
		fakeHover.append(
        '<div class="camera_commands"></div>'
		)
	}
		
	if(opts.navigation==true){
		fakeHover.append(
			'<div class="camera_prev"><span></span></div>'
			).append(
			'<div class="camera_next"><span></span></div>'
			);
	}
		
	if(opts.thumbnails==true){
		wrap.append(
			'<div class="camera_thumbs_cont" />'
			);
	}
	
	if(opts.thumbnails==true && opts.pagination!=true){
		$('.camera_thumbs_cont',wrap).wrap(
			'<div />'
			).wrap(
				'<div class="camera_thumbs" />'
			).wrap(
				'<div />'
			).wrap(
				'<div class="camera_command_wrap" />'
			);
	}
		
	if(opts.pagination==true){
		wrap.append(
			'<div class="camera_pag"></div>'
			);
	}
		
	wrap.append(
		'<div class="camera_loader"></div>'
		);
		
	$('.camera_caption',wrap).each(function(){
		$(this).wrapInner('<div />');
	});
		
                
	var pieID = 'pie_'+wrap.index(),
		elem = $('.camera_src',wrap),
		target = $('.camera_target',wrap),
		content = $('.camera_target_content',wrap),
		pieContainer = $('.camera_pie',wrap),
		barContainer = $('.camera_bar',wrap),
		prevNav = $('.camera_prev',wrap),
		nextNav = $('.camera_next',wrap),
		commands = $('.camera_commands',wrap),
		pagination = $('.camera_pag',wrap),
		thumbs = $('.camera_thumbs_cont',wrap);	

	
	var w,
		h;


	var allImg = new Array();
	$('> div', elem).each( function() { 
		allImg.push($(this).attr('data-src'));
	});
	
	var allLinks = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-link')){
			allLinks.push($(this).attr('data-link'));
		} else {
			allLinks.push('');
		}
	});
	
	var allTargets = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-target')){
			allTargets.push($(this).attr('data-target'));
		} else {
			allTargets.push('');
		}
	});
	
	var allPor = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-portrait')){
			allPor.push($(this).attr('data-portrait'));
		} else {
			allPor.push('');
		}
	});
	
	var allAlign= new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-alignment')){
			allAlign.push($(this).attr('data-alignment'));
		} else {
			allAlign.push('');
		}
	});
	
		
	var allThumbs = new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-thumb')){
			allThumbs.push($(this).attr('data-thumb'));
		} else {
			allThumbs.push('');
		}
	});
	
	var amountSlide = allImg.length;

	$(content).append('<div class="cameraContents" />');
	var loopMove;
	for (loopMove=0;loopMove<amountSlide;loopMove++)
	{
		$('.cameraContents',content).append('<div class="cameraContent" />');
		if(allLinks[loopMove]!=''){
			//only for Wordpress plugin
			var dataBox = $('> div ',elem).eq(loopMove).attr('data-box');
			if(typeof dataBox !== 'undefined' && dataBox !== false && dataBox != '') {
				dataBox = 'data-box="'+$('> div ',elem).eq(loopMove).attr('data-box')+'"';
			} else {
				dataBox = '';
			}
			//
			$('.camera_target_content .cameraContent:eq('+loopMove+')',wrap).append('<a class="camera_link" href="'+allLinks[loopMove]+'" '+dataBox+' target="'+allTargets[loopMove]+'"></a>');
		}

	}
	$('.camera_caption',wrap).each(function(){
		var ind = $(this).parent().index(),
			cont = wrap.find('.cameraContent').eq(ind);
		$(this).appendTo(cont);
	});
	
	target.append('<div class="cameraCont" />');
	var cameraCont = $('.cameraCont',wrap);
	

	
	var loop;
	for (loop=0;loop<amountSlide;loop++)
	{
		cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
		var div = $('> div:eq('+loop+')',elem);
		target.find('.cameraSlide_'+loop).clone(div);
	}
	
	
	function thumbnailVisible() {
		var wTh = $(thumbs).width();
		$('li', thumbs).removeClass('camera_visThumb');
		$('li', thumbs).each(function(){
			var pos = $(this).position(),
				ulW = $('ul', thumbs).outerWidth(),
				offUl = $('ul', thumbs).offset().left,
				offDiv = $('> div',thumbs).offset().left,
				ulLeft = offDiv-offUl;
				if(ulLeft>0){
					$('.camera_prevThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_prevThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				if((ulW-ulLeft)>wTh){
					$('.camera_nextThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_nextThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				var left = pos.left,
					right = pos.left+($(this).width());
				if(right-ulLeft<=wTh && left-ulLeft>=0){
					$(this).addClass('camera_visThumb');
				}
		});
	}
	
	$(window).bind('load resize pageshow',function(){
		thumbnailPos();
		thumbnailVisible();
	});


	cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
	
	
	var started;
	
	wrap.show();
	var w = target.width();
	var h = target.height();
	
	var setPause;
		
	$(window).bind('resize pageshow',function(){
		if(started == true) {
			resizeImage();
		}
		$('ul', thumbs).animate({'margin-top':0},0,thumbnailPos);
		if(!elem.hasClass('paused')){
			elem.addClass('paused');
			if($('.camera_stop',camera_thumbs_wrap).length){
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			} else {
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			}
			clearTimeout(setPause);
			setPause = setTimeout(function(){
				elem.removeClass('paused');
				if($('.camera_play',camera_thumbs_wrap).length){
					$('.camera_play',camera_thumbs_wrap).hide();
					$('.camera_stop',camera_thumbs_wrap).show();
					if(loader!='none'){
						$('#'+pieID).fadeIn();
					}
				} else {
					if(loader!='none'){
						$('#'+pieID).fadeIn();
					}
				}
			},1500);
		}
	});
	
	function resizeImage(){	
		var res;
		function resizeImageWork(){
			w = wrap.width();
			if(opts.height.indexOf('%')!=-1) {
				var startH = Math.round(w / (100/parseFloat(opts.height)));
				if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
					h = parseFloat(opts.minHeight);
				} else {
					h = startH;
				}
				wrap.css({height:h});
			} else if (opts.height=='auto') {
				h = wrap.height();
			} else {
				h = parseFloat(opts.height);
				wrap.css({height:h});
			}
			$('.camerarelative',target).css({'width':w,'height':h});
			$('.imgLoaded',target).each(function(){
				var t = $(this),
					wT = t.attr('width'),
					hT = t.attr('height'),
					imgLoadIn = t.index(),
					mTop,
					mLeft,
					alignment = t.attr('data-alignment'),
					portrait =  t.attr('data-portrait');
					
					if(typeof alignment === 'undefined' || alignment === false || alignment === ''){
						alignment = opts.alignment;
					}
					
					if(typeof portrait === 'undefined' || portrait === false || portrait === ''){
						portrait = opts.portrait;
					}
										
					if(portrait==false||portrait=='false'){
						if((wT/hT)<(w/h)) {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = '-'+d+'px';
									break;
								case 'center':
									mTop = '-'+d+'px';
									break;
								case 'centerRight':
									mTop = '-'+d+'px';
									break;
								case 'bottomLeft':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomCenter':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomRight':
									mTop = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
						else {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = '-'+d+'px';
									break;
								case 'topRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = '-'+d+'px';
									break;
								case 'centerRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = '-'+d+'px';
									break;
								case 'bottomRight':
									mLeft = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
					} else {
						if((wT/hT)<(w/h)) {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = d+'px';
									break;
								case 'topRight':
									mLeft = d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = d+'px';
									break;
								case 'centerRight':
									mLeft = d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = d+'px';
									break;
								case 'bottomRight':
									mLeft = d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
						else {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = d+'px';
									break;
								case 'center':
									mTop = d+'px';
									break;
								case 'centerRight':
									mTop = d+'px';
									break;
								case 'bottomLeft':
									mTop = d*2+'px';
									break;
								case 'bottomCenter':
									mTop = d*2+'px';
									break;
								case 'bottomRight':
									mTop = d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
					}
			});
		}
		if (started == true) {
			clearTimeout(res);
			res = setTimeout(resizeImageWork,200);
		} else {
			resizeImageWork();
		}
		
		started = true;
	}
	
	
	var u,
		setT;

	var clickEv,
		autoAdv,
		navHover,
		commands,
		pagination;

	var videoHover,
		videoPresent;
		
	if(isMobile() && opts.mobileAutoAdvance!=''){
		autoAdv = opts.mobileAutoAdvance;
	} else {
		autoAdv = opts.autoAdvance;
	}
	
	if(autoAdv==false){
		elem.addClass('paused');
	}

	if(isMobile() && opts.mobileNavHover!=''){
		navHover = opts.mobileNavHover;
	} else {
		navHover = opts.navigationHover;
	}

	if(elem.length!=0){
			
		var selector = $('.cameraSlide',target);
		selector.wrapInner('<div class="camerarelative" />');
		
		var navSlide;
			
		var barDirection = opts.barDirection;
	
		var camera_thumbs_wrap = wrap;


		$('iframe',fakeHover).each(function(){
			var t = $(this);
			var src = t.attr('src');
			t.attr('data-src',src);
			var divInd = t.parent().index('.camera_src > div');
			$('.camera_target_content .cameraContent:eq('+divInd+')',wrap).append(t);
		});
		function imgFake() {
				$('iframe',fakeHover).each(function(){
					$('.camera_caption',fakeHover).show();
					var t = $(this);
					var cloneSrc = t.attr('data-src');
					t.attr('src',cloneSrc);
					var imgFakeUrl = opts.imagePath+'blank.gif';
					var imgFake = new Image();
					imgFake.src = imgFakeUrl;
					if(opts.height.indexOf('%')!=-1) {
						var startH = Math.round(w / (100/parseFloat(opts.height)));
						if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
							h = parseFloat(opts.minHeight);
						} else {
							h = startH;
						}
					} else if (opts.height=='auto') {
						h = wrap.height();
					} else {
						h = parseFloat(opts.height);
					}
					t.after($(imgFake).attr({'class':'imgFake','width':w,'height':h}));
					var clone = t.clone();
					t.remove();
					$(imgFake).bind('click',function(){
						if($(this).css('position')=='absolute') {
							$(this).remove();
							if(cloneSrc.indexOf('vimeo') != -1 || cloneSrc.indexOf('youtube') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoplay=1';
								} else {
									autoplay = '?autoplay=1';
								}
							} else if(cloneSrc.indexOf('dailymotion') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoPlay=1';
								} else {
									autoplay = '?autoPlay=1';
								}
							}
							clone.attr('src',cloneSrc+autoplay);
							videoPresent = true;
						} else {
							$(this).css({position:'absolute',top:0,left:0,zIndex:10}).after(clone);
							clone.css({position:'absolute',top:0,left:0,zIndex:9});
						}
					});
				});
		}
		
		imgFake();
		
		
		if(opts.hover==true){
			if(!isMobile()){
				fakeHover.hover(function(){
					elem.addClass('hovered');
				},function(){
					elem.removeClass('hovered');
				});
			}
		}

		if(navHover==true){
			$(prevNav,wrap).animate({opacity:0},0);
			$(nextNav,wrap).animate({opacity:0},0);
			$(commands,wrap).animate({opacity:0},0);
			if(isMobile()){
				fakeHover.live('vmouseover',function(){
					$(prevNav,wrap).animate({opacity:1},200);
					$(nextNav,wrap).animate({opacity:1},200);
					$(commands,wrap).animate({opacity:1},200);
				});
				fakeHover.live('vmouseout',function(){
					$(prevNav,wrap).delay(500).animate({opacity:0},200);
					$(nextNav,wrap).delay(500).animate({opacity:0},200);
					$(commands,wrap).delay(500).animate({opacity:0},200);
				});
			} else {
				fakeHover.hover(function(){
					$(prevNav,wrap).animate({opacity:1},200);
					$(nextNav,wrap).animate({opacity:1},200);
					$(commands,wrap).animate({opacity:1},200);
				},function(){
					$(prevNav,wrap).animate({opacity:0},200);
					$(nextNav,wrap).animate({opacity:0},200);
					$(commands,wrap).animate({opacity:0},200);
				});
			}
		}
		
	
		$('.camera_stop',camera_thumbs_wrap).live('click',function(){
			autoAdv = false;
			elem.addClass('paused');
			if($('.camera_stop',camera_thumbs_wrap).length){
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			} else {
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			}
		});
	
		$('.camera_play',camera_thumbs_wrap).live('click',function(){
			autoAdv = true;
			elem.removeClass('paused');
			if($('.camera_play',camera_thumbs_wrap).length){
				$('.camera_play',camera_thumbs_wrap).hide();
				$('.camera_stop',camera_thumbs_wrap).show();
				if(loader!='none'){
					$('#'+pieID).show();
				}
			} else {
				if(loader!='none'){
					$('#'+pieID).show();
				}
			}
		});
	
		if(opts.pauseOnClick==true){
			$('.camera_target_content',fakeHover).mouseup(function(){
				autoAdv = false;
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			});
		}
		$('.cameraContent, .imgFake',fakeHover).hover(function(){
			videoHover = true;
		},function(){
			videoHover = false;
		});
		
		$('.cameraContent, .imgFake',fakeHover).bind('click',function(){
			if(videoPresent == true && videoHover == true) {
				autoAdv = false;
				$('.camera_caption',fakeHover).hide();
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			}
		});
		
		
	}
	
	
		function shuffle(arr) {
			for(
			  var j, x, i = arr.length; i;
			  j = parseInt(Math.random() * i),
			  x = arr[--i], arr[i] = arr[j], arr[j] = x
			);
			return arr;
		}
	
		function isInteger(s) {
			return Math.ceil(s) == Math.floor(s);
		}	
	
		if (loader != 'pie') {
			barContainer.append('<span class="camera_bar_cont" />');
			$('.camera_bar_cont',barContainer)
				.animate({opacity:opts.loaderOpacity},0)
				.css({'position':'absolute', 'left':0, 'right':0, 'top':0, 'bottom':0, 'background-color':opts.loaderBgColor})
				.append('<span id="'+pieID+'" />');
			$('#'+pieID).animate({opacity:0},0);
			var canvas = $('#'+pieID);
			canvas.css({'position':'absolute', 'background-color':opts.loaderColor});
			switch(opts.barPosition){
				case 'left':
					barContainer.css({right:'auto',width:opts.loaderStroke});
					break;
				case 'right':
					barContainer.css({left:'auto',width:opts.loaderStroke});
					break;
				case 'top':
					barContainer.css({bottom:'auto',height:opts.loaderStroke});
					break;
				case 'bottom':
					barContainer.css({top:'auto',height:opts.loaderStroke});
					break;
			}
			switch(barDirection){
				case 'leftToRight':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'rightToLeft':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'topToBottom':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
				case 'bottomToTop':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
			}
		} else {
			pieContainer.append('<canvas id="'+pieID+'"></canvas>');
			var G_vmlCanvasManager;
			var canvas = document.getElementById(pieID);
			canvas.setAttribute("width", opts.pieDiameter);
			canvas.setAttribute("height", opts.pieDiameter);
			var piePosition;
			switch(opts.piePosition){
				case 'leftTop' :
					piePosition = 'left:0; top:0;';
					break;
				case 'rightTop' :
					piePosition = 'right:0; top:0;';
					break;
				case 'leftBottom' :
					piePosition = 'left:0; bottom:0;';
					break;
				case 'rightBottom' :
					piePosition = 'right:0; bottom:0;';
					break;
			}
			canvas.setAttribute("style", "position:absolute; z-index:1002; "+piePosition);
			var rad;
			var radNew;
	
			if (canvas && canvas.getContext) {
				var ctx = canvas.getContext("2d");
				ctx.rotate(Math.PI*(3/2));
				ctx.translate(-opts.pieDiameter,0);
			}
		
		}
		if(loader=='none' || autoAdv==false) {
			$('#'+pieID).hide();
			$('.camera_canvas_wrap',camera_thumbs_wrap).hide();
		}
		
		if($(pagination).length) {
			$(pagination).append('<ul class="camera_pag_ul" />');
			var li;
			for (li = 0; li < amountSlide; li++){
				$('.camera_pag_ul',wrap).append('<li class="pag_nav_'+li+'" style="position:relative; z-index:1002"><span><span>'+li+'</span></span></li>');
			}
			$('.camera_pag_ul li',wrap).hover(function(){
				$(this).addClass('camera_hover');
				if($('.camera_thumb',this).length){
					var wTh = $('.camera_thumb',this).outerWidth(),
					hTh = $('.camera_thumb',this).outerHeight(),
					wTt = $(this).outerWidth();
					$('.camera_thumb',this).show().css({'top':'-'+hTh+'px','left':'-'+(wTh-wTt)/2+'px'}).animate({'opacity':1,'margin-top':'-3px'},200);
					$('.thumb_arrow',this).show().animate({'opacity':1,'margin-top':'-3px'},200);
				}
			},function(){
				$(this).removeClass('camera_hover');
				$('.camera_thumb',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
				$('.thumb_arrow',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
			});
		}
			
	
	
		if($(thumbs).length) {
			var thumbUrl;
			if(!$(pagination).length) {
				$(thumbs).append('<div />');
				$(thumbs).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');
				$('> div',thumbs).append('<ul />');
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('ul',thumbs).append('<li class="pix_thumb pix_thumb_'+i+'" />');
						$('li.pix_thumb_'+i,thumbs).append($(newImg).attr('class','camera_thumb'));
					}
				});
			} else {
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('li.pag_nav_'+i,pagination).append($(newImg).attr('class','camera_thumb').css({'position':'absolute'}).animate({opacity:0},0));
						$('li.pag_nav_'+i+' > img',pagination).after('<div class="thumb_arrow" />');
						$('li.pag_nav_'+i+' > .thumb_arrow',pagination).animate({opacity:0},0);
					}
				});
				wrap.css({marginBottom:$(pagination).outerHeight()});
			}
		} else if(!$(thumbs).length && $(pagination).length) {
			wrap.css({marginBottom:$(pagination).outerHeight()});
		}

	
		var firstPos = true;

		function thumbnailPos() {
			if($(thumbs).length && !$(pagination).length) {
				var wTh = $(thumbs).outerWidth(),
					owTh = $('ul > li',thumbs).outerWidth(),
					pos = $('li.cameracurrent', thumbs).length ? $('li.cameracurrent', thumbs).position() : '',
					ulW = ($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth()),
					offUl = $('ul', thumbs).offset().left,
					offDiv = $('> div', thumbs).offset().left,
					ulLeft;

					if(offUl<0){
						ulLeft = '-'+ (offDiv-offUl);
					} else {
						ulLeft = offDiv-offUl;
					}
					
					
					
				if(firstPos == true) {
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					thumbnailVisible();
					/*I repeat this two lines because of a problem with iPhones*/
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					/*...*/
				}
				firstPos = false;
				
					var left = $('li.cameracurrent', thumbs).length ? pos.left : '',
						right = $('li.cameracurrent', thumbs).length ? pos.left+($('li.cameracurrent', thumbs).outerWidth()) : '';
					if(left<$('li.cameracurrent', thumbs).outerWidth()) {
						left = 0;
					}
					if(right-ulLeft>wTh){
						if((left+wTh)<ulW){
							$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
						} else {
							$('ul', thumbs).animate({'margin-left':'-'+($('ul', thumbs).outerWidth()-wTh)+'px'},500,thumbnailVisible);
						}
					} else if(left-ulLeft<0) {
						$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
					} else {
						$('ul', thumbs).css({'margin-left':'auto', 'margin-right':'auto'});
						setTimeout(thumbnailVisible,100);
					}
					
			}
		}

		if($(commands).length) {
			$(commands).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');
			if(autoAdv==true){
				$('.camera_play',camera_thumbs_wrap).hide();
				$('.camera_stop',camera_thumbs_wrap).show();
			} else {
				$('.camera_stop',camera_thumbs_wrap).hide();
				$('.camera_play',camera_thumbs_wrap).show();
			}
			
		}
			
			
		function canvasLoader() {
			rad = 0;
			var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
				barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height();

			if (loader != 'pie') {
				switch(barDirection){
					case 'leftToRight':
						$('#'+pieID).css({'right':barWidth});
						break;
					case 'rightToLeft':
						$('#'+pieID).css({'left':barWidth});
						break;
					case 'topToBottom':
						$('#'+pieID).css({'bottom':barHeight});
						break;
					case 'bottomToTop':
						$('#'+pieID).css({'top':barHeight});
						break;
				}
			} else {
				ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter); 
			}
		}
		
		
		canvasLoader();
		
		
		$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
			$(this).css('visibility','hidden');
		});
		
		opts.onStartLoading.call(this);
		
		nextSlide();
		
	
	/*************************** FUNCTION nextSlide() ***************************/
	
	function nextSlide(navSlide){ 
		elem.addClass('camerasliding');
		
		videoPresent = false;
		var vis = parseFloat($('div.cameraSlide.cameracurrent',target).index());

		if(navSlide>0){ 
			var slideI = navSlide-1;
		} else if (vis == amountSlide-1) { 
			var slideI = 0;
		} else {
			var slideI = vis+1;
		}
		
				
		var slide = $('.cameraSlide:eq('+slideI+')',target);
		var slideNext = $('.cameraSlide:eq('+(slideI+1)+')',target).addClass('cameranext');
		if( vis != slideI+1 ) {
			slideNext.hide();
		}
		$('.cameraContent',fakeHover).fadeOut(600);
		$('.camera_caption',fakeHover).show();
		
		$('.camerarelative',slide).append($('> div ',elem).eq(slideI).find('> div.camera_effected'));

		$('.camera_target_content .cameraContent:eq('+slideI+')',wrap).append($('> div ',elem).eq(slideI).find('> div'));
		
		if(!$('.imgLoaded',slide).length){
			var imgUrl = allImg[slideI];
			var imgLoaded = new Image();
			imgLoaded.src = imgUrl +"?"+ new Date().getTime();
			slide.css('visibility','hidden');
			slide.prepend($(imgLoaded).attr('class','imgLoaded').css('visibility','hidden'));
			var wT, hT;
			if (!$(imgLoaded).get(0).complete || wT == '0' || hT == '0' || typeof wT === 'undefined' || wT === false || typeof hT === 'undefined' || hT === false) {
				$('.camera_loader',wrap).delay(500).fadeIn(400);
				imgLoaded.onload = function() {
					wT = imgLoaded.naturalWidth;
					hT = imgLoaded.naturalHeight;
					$(imgLoaded).attr('data-alignment',allAlign[slideI]).attr('data-portrait',allPor[slideI]);
					$(imgLoaded).attr('width',wT);
					$(imgLoaded).attr('height',hT);
					target.find('.cameraSlide_'+slideI).hide().css('visibility','visible');
					resizeImage();
					nextSlide(slideI+1);
				};
			}
		} else {
			if( allImg.length > (slideI+1) && !$('.imgLoaded',slideNext).length ){
				var imgUrl2 = allImg[(slideI+1)];
				var imgLoaded2 = new Image();
				imgLoaded2.src = imgUrl2 +"?"+ new Date().getTime();
				slideNext.prepend($(imgLoaded2).attr('class','imgLoaded').css('visibility','hidden'));
				imgLoaded2.onload = function() {
					wT = imgLoaded2.naturalWidth;
					hT = imgLoaded2.naturalHeight;
					$(imgLoaded2).attr('data-alignment',allAlign[slideI+1]).attr('data-portrait',allPor[slideI+1]);
					$(imgLoaded2).attr('width',wT);
					$(imgLoaded2).attr('height',hT);
					resizeImage();
				};
			}
			opts.onLoaded.call(this);
			if($('.camera_loader',wrap).is(':visible')){
				$('.camera_loader',wrap).fadeOut(400);
			} else {
				$('.camera_loader',wrap).css({'visibility':'hidden'});
				$('.camera_loader',wrap).fadeOut(400,function(){
					$('.camera_loader',wrap).css({'visibility':'visible'});
				});
			}
			var rows = opts.rows,
				cols = opts.cols,
				couples = 1,
				difference = 0,
				dataSlideOn,
				time,
				transPeriod,
				fx,
				easing,
				randomFx = new Array('simpleFade','curtainTopLeft','curtainTopRight','curtainBottomLeft','curtainBottomRight','curtainSliceLeft','curtainSliceRight','blindCurtainTopLeft','blindCurtainTopRight','blindCurtainBottomLeft','blindCurtainBottomRight','blindCurtainSliceBottom','blindCurtainSliceTop','stampede','mosaic','mosaicReverse','mosaicRandom','mosaicSpiral','mosaicSpiralReverse','topLeftBottomRight','bottomRightTopLeft','bottomLeftTopRight','topRightBottomLeft','scrollLeft','scrollRight','scrollTop','scrollBottom','scrollHorz');
				marginLeft = 0,
				marginTop = 0,
				opacityOnGrid = 0;
				
				if(opts.opacityOnGrid==true){
					opacityOnGrid = 0;
				} else {
					opacityOnGrid = 1;
				}
 
			
			
			var dataFx = $(' > div',elem).eq(slideI).attr('data-fx');
				
			if(isMobile()&&opts.mobileFx!=''&&opts.mobileFx!='default'){
				fx = opts.mobileFx;
			} else {
				if(typeof dataFx !== 'undefined' && dataFx!== false && dataFx!== 'default'){
					fx = dataFx;
				} else {
					fx = opts.fx;
				}
			}
			
			if(fx=='random') {
				fx = shuffle(randomFx);
				fx = fx[0];
			} else {
				fx = fx;
				if(fx.indexOf(',')>0){
					fx = fx.replace(/ /g,'');
					fx = fx.split(',');
					fx = shuffle(fx);
					fx = fx[0];
				}
			}
			
			dataEasing = $(' > div',elem).eq(slideI).attr('data-easing');
			mobileEasing = $(' > div',elem).eq(slideI).attr('data-mobileEasing');

			if(isMobile()&&opts.mobileEasing!=''&&opts.mobileEasing!='default'){
				if(typeof mobileEasing !== 'undefined' && mobileEasing!== false && mobileEasing!== 'default') {
					easing = mobileEasing;
				} else {
					easing = opts.mobileEasing;
				}
			} else {
				if(typeof dataEasing !== 'undefined' && dataEasing!== false && dataEasing!== 'default') {
					easing = dataEasing;
				} else {
					easing = opts.easing;
				}
			}
	
			dataSlideOn = $(' > div',elem).eq(slideI).attr('data-slideOn');
			if(typeof dataSlideOn !== 'undefined' && dataSlideOn!== false){
				slideOn = dataSlideOn;
			} else {
				if(opts.slideOn=='random'){
					var slideOn = new Array('next','prev');
					slideOn = shuffle(slideOn);
					slideOn = slideOn[0];
				} else {
					slideOn = opts.slideOn;
				}
			}
				
			var dataTime = $(' > div',elem).eq(slideI).attr('data-time');
			if(typeof dataTime !== 'undefined' && dataTime!== false && dataTime!== ''){
				time = parseFloat(dataTime);
			} else {
				time = opts.time;
			}
				
			var dataTransPeriod = $(' > div',elem).eq(slideI).attr('data-transPeriod');
			if(typeof dataTransPeriod !== 'undefined' && dataTransPeriod!== false && dataTransPeriod!== ''){
				transPeriod = parseFloat(dataTransPeriod);
			} else {
				transPeriod = opts.transPeriod;
			}
				
			if(!$(elem).hasClass('camerastarted')){
				fx = 'simpleFade';
				slideOn = 'next';
				easing = '';
				transPeriod = 400;
				$(elem).addClass('camerastarted')
			}
	
			switch(fx){
				case 'simpleFade':
					cols = 1;
					rows = 1;
						break;
				case 'curtainTopLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainTopRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'blindCurtainTopLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainTopRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceTop':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceBottom':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'stampede':
					difference = '-'+transPeriod;
						break;
				case 'mosaic':
					difference = opts.gridDifference;
						break;
				case 'mosaicReverse':
					difference = opts.gridDifference;
						break;
				case 'mosaicRandom':
						break;
				case 'mosaicSpiral':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'mosaicSpiralReverse':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'topLeftBottomRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomRightTopLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomLeftTopRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'topRightBottomLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'scrollLeft':
					cols = 1;
					rows = 1;
						break;
				case 'scrollRight':
					cols = 1;
					rows = 1;
						break;
				case 'scrollTop':
					cols = 1;
					rows = 1;
						break;
				case 'scrollBottom':
					cols = 1;
					rows = 1;
						break;
				case 'scrollHorz':
					cols = 1;
					rows = 1;
						break;
			}
			
			var cycle = 0;
			var blocks = rows*cols;
			var leftScrap = w-(Math.floor(w/cols)*cols);
			var topScrap = h-(Math.floor(h/rows)*rows);
			var addLeft;
			var addTop;
			var tAppW = 0;	
			var tAppH = 0;
			var arr = new Array();
			var delay = new Array();
			var order = new Array();
			while(cycle < blocks){
				arr.push(cycle);
				delay.push(cycle);
				cameraCont.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
				var tApp = $('.cameraappended:eq('+cycle+')',target);
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					selector.eq(slideI).clone().show().appendTo(tApp);
				} else {
					if(slideOn=='next'){
						selector.eq(slideI).clone().show().appendTo(tApp);
					} else {
						selector.eq(vis).clone().show().appendTo(tApp);
					}
				}

				if(cycle%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(cycle%cols==0){
					tAppW = 0;
				}
				if(Math.floor(cycle/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
				tApp.css({
					'height': Math.floor((h/rows)+addTop+1),
					'left': tAppW,
					'top': tAppH,
					'width': Math.floor((w/cols)+addLeft+1)
				});
				$('> .cameraSlide', tApp).css({
					'height': h,
					'margin-left': '-'+tAppW+'px',
					'margin-top': '-'+tAppH+'px',
					'width': w
				});
				tAppW = tAppW+tApp.width()-1;
				if(cycle%cols==cols-1){
					tAppH = tAppH + tApp.height() - 1;
				}
				cycle++;
			}
			

			
			switch(fx){
				case 'curtainTopLeft':
						break;
				case 'curtainBottomLeft':
						break;
				case 'curtainSliceLeft':
						break;
				case 'curtainTopRight':
					arr = arr.reverse();
						break;
				case 'curtainBottomRight':
					arr = arr.reverse();
						break;
				case 'curtainSliceRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainTopLeft':
						break;
				case 'blindCurtainBottomLeft':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceTop':
						break;
				case 'blindCurtainTopRight':
						break;
				case 'blindCurtainBottomRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceBottom':
					arr = arr.reverse();
						break;
				case 'stampede':
					arr = shuffle(arr);
						break;
				case 'mosaic':
						break;
				case 'mosaicReverse':
					arr = arr.reverse();
						break;
				case 'mosaicRandom':
					arr = shuffle(arr);
						break;
				case 'mosaicSpiral':
					var rows2 = rows/2, x, y, z, n=0;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n++] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n++] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n++] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n++] = y * cols + x;
							}
						}
						
						arr = order;

						break;
				case 'mosaicSpiralReverse':
					var rows2 = rows/2, x, y, z, n=blocks-1;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n--] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n--] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n--] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n--] = y * cols + x;
							}
						}

						arr = order;
						
						break;
				case 'topLeftBottomRight':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'bottomRightTopLeft':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order.reverse();
						break;
				case 'bottomLeftTopRight':
					for (var y = rows; y > 0; y--)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'topRightBottomLeft':
					for (var y = 0; y < rows; y++)
					for (var x = cols; x > 0; x--) {
						order.push(x + y);
					}
						delay = order;
						break;
			}
			
			
						
			$.each(arr, function(index, value) {

				if(value%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(value%cols==0){
					tAppW = 0;
				}
				if(Math.floor(value/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
							
				switch(fx){
					case 'simpleFade':
						height = h;
						width = w;
						opacityOnGrid = 0;
							break;
					case 'curtainTopLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainTopRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainSliceLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'curtainSliceRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'blindCurtainTopLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainTopRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainSliceBottom':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'blindCurtainSliceTop':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'stampede':
						height = 0;
						width = 0;					
						marginLeft = (w*0.2)*(((index)%cols)-(cols-(Math.floor(cols/2))))+'px';					
						marginTop = (h*0.2)*((Math.floor(index/cols)+1)-(rows-(Math.floor(rows/2))))+'px';	
							break;
					case 'mosaic':
						height = 0;
						width = 0;					
							break;
					case 'mosaicReverse':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'mosaicRandom':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiral':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiralReverse':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'topLeftBottomRight':
						height = 0;
						width = 0;					
							break;
					case 'bottomRightTopLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'bottomLeftTopRight':
						height = 0;
						width = 0;					
						marginLeft = 0;					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'topRightBottomLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = 0;					
							break;
					case 'scrollRight':
						height = h;
						width = w;
						marginLeft = -w;					
							break;
					case 'scrollLeft':
						height = h;
						width = w;
						marginLeft = w;					
							break;
					case 'scrollTop':
						height = h;
						width = w;
						marginTop = h;					
							break;
					case 'scrollBottom':
						height = h;
						width = w;
						marginTop = -h;					
							break;
					case 'scrollHorz':
						height = h;
						width = w;
						if(vis==0 && slideI==amountSlide-1) {
							marginLeft = -w;	
						} else if(vis<slideI  || (vis==amountSlide-1 && slideI==0)) {
							marginLeft = w;	
						} else {
							marginLeft = -w;	
						}
							break;
					}
					
			
				var tApp = $('.cameraappended:eq('+value+')',target);
								
				if(typeof u !== 'undefined'){
					clearInterval(u);
					clearTimeout(setT);
					setT = setTimeout(canvasLoader,transPeriod+difference);
				}
				
				
				if($(pagination).length){
					$('.camera_pag li',wrap).removeClass('cameracurrent');
					$('.camera_pag li',wrap).eq(slideI).addClass('cameracurrent');
				}
						
				if($(thumbs).length){
					$('li', thumbs).removeClass('cameracurrent');
					$('li', thumbs).eq(slideI).addClass('cameracurrent');
					$('li', thumbs).not('.cameracurrent').find('img').animate({opacity:.5},0);
					$('li.cameracurrent img', thumbs).animate({opacity:1},0);
					$('li', thumbs).hover(function(){
						$('img',this).stop(true,false).animate({opacity:1},150);
					},function(){
						if(!$(this).hasClass('cameracurrent')){
							$('img',this).stop(true,false).animate({opacity:.5},150);
						}
					});
				}
								
						
				var easedTime = parseFloat(transPeriod)+parseFloat(difference);
				
				function cameraeased() {

					$(this).addClass('cameraeased');
					if($('.cameraeased',target).length>=0){
						$(thumbs).css({visibility:'visible'});
					}
					if($('.cameraeased',target).length==blocks){
						
						thumbnailPos();
						
						$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
							$(this).css('visibility','hidden');
						});
		
						selector.eq(slideI).show().css('z-index','999').removeClass('cameranext').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						if (vis >= 0) {
							$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						}
						
						opts.onEndTransition.call(this);
						
						if($('> div', elem).eq(slideI).attr('data-video')!='hide' && $('.cameraContent.cameracurrent .imgFake',fakeHover).length ){
							$('.cameraContent.cameracurrent .imgFake',fakeHover).click();
						}

						
						var lMoveIn = selector.eq(slideI).find('.fadeIn').length;
						var lMoveInContent = $('.cameraContent',fakeHover).eq(slideI).find('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom').length;
						
						if (lMoveIn!=0){
							$('.cameraSlide.cameracurrent .fadeIn',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								if(typeof t.attr('data-outerWidth') === 'undefined' || t.attr('data-outerWidth') === false || t.attr('data-outerWidth') === '') {
									var wMoveIn = t.outerWidth();
									t.attr('data-outerWidth',wMoveIn);
								} else {
									var wMoveIn = t.attr('data-outerWidth');
								}
								if(typeof t.attr('data-outerHeight') === 'undefined' || t.attr('data-outerHeight') === false || t.attr('data-outerHeight') === '') {
									var hMoveIn = t.outerHeight();
									t.attr('data-outerHeight',hMoveIn);
								} else {
									var hMoveIn = t.attr('data-outerHeight');
								}
								//t.css('width',wMoveIn);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var hRel = t.parents('.camerarelative').outerHeight();
								var wRel = t.parents('.camerarelative').outerWidth();
								if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveIn)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveIn)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						$('.cameraContent.cameracurrent',fakeHover).show();
						if (lMoveInContent!=0){
							
							$('.cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var thisH = t.outerHeight();
								if(tClass.indexOf("moveFromLeft") != -1) {
									t.css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromRight") != -1) {
									t.css({'left':w+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromTop") != -1) {
									t.css({'top':'-'+h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("moveFromBottom") != -1) {
									t.css({'top':h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromLeft") != -1) {
									t.animate({opacity:0},0).css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromRight") != -1) {
									t.animate({opacity:0},0).css({'left':(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromTop") != -1) {
									t.animate({opacity:0},0).css({'top':'-'+(h)+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top,opacity:1},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("fadeFromBottom") != -1) {
									t.animate({opacity:0},0).css({'bottom':'-'+thisH+'px'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'bottom':'0',opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						
						$('.cameraappended',target).remove();
						elem.removeClass('camerasliding');	
							selector.eq(vis).hide();
							var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
								barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height(),
								radSum;
							if (loader != 'pie') {
								radSum = 0.05;
							} else {
								radSum = 0.005;
							}
							$('#'+pieID).animate({opacity:opts.loaderOpacity},200);
							u = setInterval(
								function(){
									if(elem.hasClass('stopped')){
										clearInterval(u);
									}
									if (loader != 'pie') {
										if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
											rad = (rad+radSum);
										} else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('stopped') || elem.hasClass('hovered'))){
											rad = rad;
										} else {
											if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
												clearInterval(u);
												imgFake();
												$('#'+pieID).animate({opacity:0},200,function(){
													clearTimeout(setT);
													setT = setTimeout(canvasLoader,easedTime);
													nextSlide();
													opts.onStartLoading.call(this);
												});
											}
										}
										switch(barDirection){
											case 'leftToRight':
												$('#'+pieID).animate({'right':barWidth-(barWidth*rad)},(time*radSum),'linear');
												break;
											case 'rightToLeft':
												$('#'+pieID).animate({'left':barWidth-(barWidth*rad)},(time*radSum),'linear');
												break;
											case 'topToBottom':
												$('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
												break;
											case 'bottomToTop':
												$('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
												break;
										}
										
									} else {
										radNew = rad;
										ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter);
										ctx.globalCompositeOperation = 'destination-over';
										ctx.beginPath();
										ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2,false);
										ctx.lineWidth = opts.loaderStroke;
										ctx.strokeStyle = opts.loaderBgColor;
										ctx.stroke();
										ctx.closePath();
										ctx.globalCompositeOperation = 'source-over';
										ctx.beginPath();
										ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2*radNew,false);
										ctx.lineWidth = opts.loaderStroke-(opts.loaderPadding*2);
										ctx.strokeStyle = opts.loaderColor;
										ctx.stroke();
										ctx.closePath();
												
										if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
											rad = (rad+radSum);
										} else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('hovered'))){
											rad = rad;
										} else {
											if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
												clearInterval(u);
												imgFake();
												$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},200,function(){
													clearTimeout(setT);
													setT = setTimeout(canvasLoader,easedTime);
													nextSlide();
													opts.onStartLoading.call(this);
												});
											}
										}
									}
								},time*radSum
							);
						}

				}


				
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					opts.onStartTransition.call(this);
					easedTime = 0;
					tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
							'display' : 'block',
							'height': height,
							'margin-left': marginLeft,
							'margin-top': marginTop,
							'width': width
						}).animate({
							'height': Math.floor((h/rows)+addTop+1),
							'margin-top' : 0,
							'margin-left' : 0,
							'width' : Math.floor((w/cols)+addLeft+1)
						},(transPeriod-difference),easing,cameraeased);
					selector.eq(vis).delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).animate({
							'margin-left': marginLeft*(-1),
							'margin-top': marginTop*(-1)
						},(transPeriod-difference),easing,function(){
							$(this).css({'margin-top' : 0,'margin-left' : 0});
						});
				} else {
					opts.onStartTransition.call(this);
					easedTime = parseFloat(transPeriod)+parseFloat(difference);
					if(slideOn=='next'){
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							}).animate({
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							},(transPeriod-difference),easing,cameraeased);
					} else {
						selector.eq(slideI).show().css('z-index','999').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							}).animate({
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							},(transPeriod-difference),easing,cameraeased);
					}
				}





			});
				
				
				
	 
		}
	}


				if($(prevNav).length){
					$(prevNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}
			
				if($(nextNav).length){
					$(nextNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}


				if(isMobile()){
					fakeHover.bind('swipeleft',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
					fakeHover.bind('swiperight',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}

				if($(pagination).length){
					$('.camera_pag li',wrap).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).index());
							var curNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								canvasLoader();
								nextSlide(idNum+1);
								opts.onStartLoading.call(this);
							}
						}
					});
				}

				if($(thumbs).length) {

					$('.pix_thumb img',thumbs).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).parents('li').index());
							var curNum = parseFloat($('.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								$('.pix_thumb',thumbs).removeClass('cameracurrent');
								$(this).parents('li').addClass('cameracurrent');
								canvasLoader();
								nextSlide(idNum+1);
								thumbnailPos();
								opts.onStartLoading.call(this);
							}
						}
					});

					$('.camera_thumbs_cont .camera_prevThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_prevThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft-sum>0){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft-sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':0},500,thumbnailVisible);
							}
					});

					$('.camera_thumbs_cont .camera_nextThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_nextThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							ulW = $('ul', thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft+sum+sum<ulW){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft+sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':'-'+(ulW-wTh)+'px'},500,thumbnailVisible);
							}
					});

				}
		
		
	
}

})(jQuery);

;(function($){$.fn.cameraStop = function() {
	var wrap = $(this),
		elem = $('.camera_src',wrap),
		pieID = 'pie_'+wrap.index();
	elem.addClass('stopped');
	if($('.camera_showcommands').length) {
		var camera_thumbs_wrap = $('.camera_thumbs_wrap',wrap);
	} else {
		var camera_thumbs_wrap = wrap;
	}
}
})(jQuery);

;(function($){$.fn.cameraPause = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	elem.addClass('paused');
}
})(jQuery);

;(function($){$.fn.cameraResume = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	if(typeof autoAdv === 'undefined' || autoAdv!==true){
		elem.removeClass('paused');
	}
}
})(jQuery);;
/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}var n=e.prototype;n.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},n.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},n.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},n.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},n.on=n.addListener,n.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},n.once=n.addOnceListener,n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},n.off=n.removeListener,n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},n.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},n.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],o=n.listener.apply(this,t||[]),(o===this._getOnceReturnValue()||n.once===!0)&&this.removeListener(e,s[r][i].listener);return this},n.trigger=n.emitEvent,n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},n.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);;
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);;
/*
  SlidesJS 3.0.4 http://slidesjs.com
  (c) 2013 by Nathan Searles http://nathansearles.com
  Updated: June 26th, 2013
  Apache License: http://www.apache.org/licenses/LICENSE-2.0
*/
(function(){(function(e,t,n){var r,i,s;s="slidesjs";i={width:940,height:528,start:1,navigation:{active:!0,effect:"slide"},pagination:{active:!0,effect:"slide"},play:{active:!1,effect:"slide",interval:5e3,auto:!1,swap:!0,pauseOnHover:!1,restartDelay:2500},effect:{slide:{speed:500},fade:{speed:300,crossfade:!0}},callback:{loaded:function(){},start:function(){},complete:function(){}}};r=function(){function t(t,n){this.element=t;this.options=e.extend(!0,{},i,n);this._defaults=i;this._name=s;this.init()}return t}();r.prototype.init=function(){var n,r,i,s,o,u,a=this;n=e(this.element);this.data=e.data(this);e.data(this,"animating",!1);e.data(this,"total",n.children().not(".slidesjs-navigation",n).length);e.data(this,"current",this.options.start-1);e.data(this,"vendorPrefix",this._getVendorPrefix());if(typeof TouchEvent!="undefined"){e.data(this,"touch",!0);this.options.effect.slide.speed=this.options.effect.slide.speed/2}n.css({overflow:"hidden"});n.slidesContainer=n.children().not(".slidesjs-navigation",n).wrapAll("<div class='slidesjs-container'>",n).parent().css({overflow:"hidden",position:"relative"});e(".slidesjs-container",n).wrapInner("<div class='slidesjs-control'>",n).children();e(".slidesjs-control",n).css({position:"relative",left:0});e(".slidesjs-control",n).children().addClass("slidesjs-slide").css({position:"absolute",top:0,left:0,width:"100%",zIndex:0,display:"none",webkitBackfaceVisibility:"hidden"});e.each(e(".slidesjs-control",n).children(),function(t){var n;n=e(this);return n.attr("slidesjs-index",t)});if(this.data.touch){e(".slidesjs-control",n).on("touchstart",function(e){return a._touchstart(e)});e(".slidesjs-control",n).on("touchmove",function(e){return a._touchmove(e)});e(".slidesjs-control",n).on("touchend",function(e){return a._touchend(e)})}n.fadeIn(0);this.update();this.data.touch&&this._setuptouch();e(".slidesjs-control",n).children(":eq("+this.data.current+")").eq(0).fadeIn(0,function(){return e(this).css({zIndex:10})});if(this.options.navigation.active){o=e("<a>",{"class":"slidesjs-previous slidesjs-navigation",href:"#",title:"Previous",text:"Previous"}).appendTo(n);r=e("<a>",{"class":"slidesjs-next slidesjs-navigation",href:"#",title:"Next",text:"Next"}).appendTo(n)}e(".slidesjs-next",n).click(function(e){e.preventDefault();a.stop(!0);return a.next(a.options.navigation.effect)});e(".slidesjs-previous",n).click(function(e){e.preventDefault();a.stop(!0);return a.previous(a.options.navigation.effect)});if(this.options.play.active){s=e("<a>",{"class":"slidesjs-play slidesjs-navigation",href:"#",title:"Play",text:"Play"}).appendTo(n);u=e("<a>",{"class":"slidesjs-stop slidesjs-navigation",href:"#",title:"Stop",text:"Stop"}).appendTo(n);s.click(function(e){e.preventDefault();return a.play(!0)});u.click(function(e){e.preventDefault();return a.stop(!0)});this.options.play.swap&&u.css({display:"none"})}if(this.options.pagination.active){i=e("<ul>",{"class":"slidesjs-pagination"}).appendTo(n);e.each(new Array(this.data.total),function(t){var n,r;n=e("<li>",{"class":"slidesjs-pagination-item"}).appendTo(i);r=e("<a>",{href:"#","data-slidesjs-item":t,html:t+1}).appendTo(n);return r.click(function(t){t.preventDefault();a.stop(!0);return a.goto(e(t.currentTarget).attr("data-slidesjs-item")*1+1)})})}e(t).bind("resize",function(){return a.update()});this._setActive();this.options.play.auto&&this.play();return this.options.callback.loaded(this.options.start)};r.prototype._setActive=function(t){var n,r;n=e(this.element);this.data=e.data(this);r=t>-1?t:this.data.current;e(".active",n).removeClass("active");return e(".slidesjs-pagination li:eq("+r+") a",n).addClass("active")};r.prototype.update=function(){var t,n,r;t=e(this.element);this.data=e.data(this);e(".slidesjs-control",t).children(":not(:eq("+this.data.current+"))").css({display:"none",left:0,zIndex:0});r=t.width();n=this.options.height/this.options.width*r;this.options.width=r;this.options.height=n;return e(".slidesjs-control, .slidesjs-container",t).css({width:r,height:n})};r.prototype.next=function(t){var n;n=e(this.element);this.data=e.data(this);e.data(this,"direction","next");t===void 0&&(t=this.options.navigation.effect);return t==="fade"?this._fade():this._slide()};r.prototype.previous=function(t){var n;n=e(this.element);this.data=e.data(this);e.data(this,"direction","previous");t===void 0&&(t=this.options.navigation.effect);return t==="fade"?this._fade():this._slide()};r.prototype.goto=function(t){var n,r;n=e(this.element);this.data=e.data(this);r===void 0&&(r=this.options.pagination.effect);t>this.data.total?t=this.data.total:t<1&&(t=1);if(typeof t=="number")return r==="fade"?this._fade(t):this._slide(t);if(typeof t=="string"){if(t==="first")return r==="fade"?this._fade(0):this._slide(0);if(t==="last")return r==="fade"?this._fade(this.data.total):this._slide(this.data.total)}};r.prototype._setuptouch=function(){var t,n,r,i;t=e(this.element);this.data=e.data(this);i=e(".slidesjs-control",t);n=this.data.current+1;r=this.data.current-1;r<0&&(r=this.data.total-1);n>this.data.total-1&&(n=0);i.children(":eq("+n+")").css({display:"block",left:this.options.width});return i.children(":eq("+r+")").css({display:"block",left:-this.options.width})};r.prototype._touchstart=function(t){var n,r;n=e(this.element);this.data=e.data(this);r=t.originalEvent.touches[0];this._setuptouch();e.data(this,"touchtimer",Number(new Date));e.data(this,"touchstartx",r.pageX);e.data(this,"touchstarty",r.pageY);return t.stopPropagation()};r.prototype._touchend=function(t){var n,r,i,s,o,u,a,f=this;n=e(this.element);this.data=e.data(this);u=t.originalEvent.touches[0];s=e(".slidesjs-control",n);if(s.position().left>this.options.width*.5||s.position().left>this.options.width*.1&&Number(new Date)-this.data.touchtimer<250){e.data(this,"direction","previous");this._slide()}else if(s.position().left<-(this.options.width*.5)||s.position().left<-(this.options.width*.1)&&Number(new Date)-this.data.touchtimer<250){e.data(this,"direction","next");this._slide()}else{i=this.data.vendorPrefix;a=i+"Transform";r=i+"TransitionDuration";o=i+"TransitionTimingFunction";s[0].style[a]="translateX(0px)";s[0].style[r]=this.options.effect.slide.speed*.85+"ms"}s.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){i=f.data.vendorPrefix;a=i+"Transform";r=i+"TransitionDuration";o=i+"TransitionTimingFunction";s[0].style[a]="";s[0].style[r]="";return s[0].style[o]=""});return t.stopPropagation()};r.prototype._touchmove=function(t){var n,r,i,s,o;n=e(this.element);this.data=e.data(this);s=t.originalEvent.touches[0];r=this.data.vendorPrefix;i=e(".slidesjs-control",n);o=r+"Transform";e.data(this,"scrolling",Math.abs(s.pageX-this.data.touchstartx)<Math.abs(s.pageY-this.data.touchstarty));if(!this.data.animating&&!this.data.scrolling){t.preventDefault();this._setuptouch();i[0].style[o]="translateX("+(s.pageX-this.data.touchstartx)+"px)"}return t.stopPropagation()};r.prototype.play=function(t){var n,r,i,s=this;n=e(this.element);this.data=e.data(this);if(!this.data.playInterval){if(t){r=this.data.current;this.data.direction="next";this.options.play.effect==="fade"?this._fade():this._slide()}e.data(this,"playInterval",setInterval(function(){r=s.data.current;s.data.direction="next";return s.options.play.effect==="fade"?s._fade():s._slide()},this.options.play.interval));i=e(".slidesjs-container",n);if(this.options.play.pauseOnHover){i.unbind();i.bind("mouseenter",function(){return s.stop()});i.bind("mouseleave",function(){return s.options.play.restartDelay?e.data(s,"restartDelay",setTimeout(function(){return s.play(!0)},s.options.play.restartDelay)):s.play()})}e.data(this,"playing",!0);e(".slidesjs-play",n).addClass("slidesjs-playing");if(this.options.play.swap){e(".slidesjs-play",n).hide();return e(".slidesjs-stop",n).show()}}};r.prototype.stop=function(t){var n;n=e(this.element);this.data=e.data(this);clearInterval(this.data.playInterval);this.options.play.pauseOnHover&&t&&e(".slidesjs-container",n).unbind();e.data(this,"playInterval",null);e.data(this,"playing",!1);e(".slidesjs-play",n).removeClass("slidesjs-playing");if(this.options.play.swap){e(".slidesjs-stop",n).hide();return e(".slidesjs-play",n).show()}};r.prototype._slide=function(t){var n,r,i,s,o,u,a,f,l,c,h=this;n=e(this.element);this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1){e.data(this,"animating",!0);r=this.data.current;if(t>-1){t-=1;c=t>r?1:-1;i=t>r?-this.options.width:this.options.width;o=t}else{c=this.data.direction==="next"?1:-1;i=this.data.direction==="next"?-this.options.width:this.options.width;o=r+c}o===-1&&(o=this.data.total-1);o===this.data.total&&(o=0);this._setActive(o);a=e(".slidesjs-control",n);t>-1&&a.children(":not(:eq("+r+"))").css({display:"none",left:0,zIndex:0});a.children(":eq("+o+")").css({display:"block",left:c*this.options.width,zIndex:10});this.options.callback.start(r+1);if(this.data.vendorPrefix){u=this.data.vendorPrefix;l=u+"Transform";s=u+"TransitionDuration";f=u+"TransitionTimingFunction";a[0].style[l]="translateX("+i+"px)";a[0].style[s]=this.options.effect.slide.speed+"ms";return a.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){a[0].style[l]="";a[0].style[s]="";a.children(":eq("+o+")").css({left:0});a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0});e.data(h,"current",o);e.data(h,"animating",!1);a.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd");a.children(":not(:eq("+o+"))").css({display:"none",left:0,zIndex:0});h.data.touch&&h._setuptouch();return h.options.callback.complete(o+1)})}return a.stop().animate({left:i},this.options.effect.slide.speed,function(){a.css({left:0});a.children(":eq("+o+")").css({left:0});return a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0},e.data(h,"current",o),e.data(h,"animating",!1),h.options.callback.complete(o+1))})}};r.prototype._fade=function(t){var n,r,i,s,o,u=this;n=e(this.element);this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1){e.data(this,"animating",!0);r=this.data.current;if(t){t-=1;o=t>r?1:-1;i=t}else{o=this.data.direction==="next"?1:-1;i=r+o}i===-1&&(i=this.data.total-1);i===this.data.total&&(i=0);this._setActive(i);s=e(".slidesjs-control",n);s.children(":eq("+i+")").css({display:"none",left:0,zIndex:10});this.options.callback.start(r+1);if(this.options.effect.fade.crossfade){s.children(":eq("+this.data.current+")").stop().fadeOut(this.options.effect.fade.speed);return s.children(":eq("+i+")").stop().fadeIn(this.options.effect.fade.speed,function(){s.children(":eq("+i+")").css({zIndex:0});e.data(u,"animating",!1);e.data(u,"current",i);return u.options.callback.complete(i+1)})}return s.children(":eq("+r+")").stop().fadeOut(this.options.effect.fade.speed,function(){s.children(":eq("+i+")").stop().fadeIn(u.options.effect.fade.speed,function(){return s.children(":eq("+i+")").css({zIndex:10})});e.data(u,"animating",!1);e.data(u,"current",i);return u.options.callback.complete(i+1)})}};r.prototype._getVendorPrefix=function(){var e,t,r,i,s;e=n.body||n.documentElement;r=e.style;i="transition";s=["Moz","Webkit","Khtml","O","ms"];i=i.charAt(0).toUpperCase()+i.substr(1);t=0;while(t<s.length){if(typeof r[s[t]+i]=="string")return s[t];t++}return!1};return e.fn[s]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+s))return e.data(this,"plugin_"+s,new r(this,t))})}})(jQuery,window,document)}).call(this);
;
/*
 * jQuery EasyTabs plugin 3.2.0
 *
 * Copyright (c) 2010-2011 Steve Schwartz (JangoSteve)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Thu May 09 17:30:00 2013 -0500
 */
(function(a){a.easytabs=function(j,e){var f=this,q=a(j),i={animate:true,panelActiveClass:"active",tabActiveClass:"active",defaultTab:"li:first-child",animationSpeed:"normal",tabs:"> ul > li",updateHash:true,cycle:false,collapsible:false,collapsedClass:"collapsed",collapsedByDefault:true,uiTabs:false,transitionIn:"fadeIn",transitionOut:"fadeOut",transitionInEasing:"swing",transitionOutEasing:"swing",transitionCollapse:"slideUp",transitionUncollapse:"slideDown",transitionCollapseEasing:"swing",transitionUncollapseEasing:"swing",containerClass:"",tabsClass:"",tabClass:"",panelClass:"",cache:true,event:"click",panelContext:q},h,l,v,m,d,t={fast:200,normal:400,slow:600},r;f.init=function(){f.settings=r=a.extend({},i,e);r.bind_str=r.event+".easytabs";if(r.uiTabs){r.tabActiveClass="ui-tabs-selected";r.containerClass="ui-tabs ui-widget ui-widget-content ui-corner-all";r.tabsClass="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";r.tabClass="ui-state-default ui-corner-top";r.panelClass="ui-tabs-panel ui-widget-content ui-corner-bottom"}if(r.collapsible&&e.defaultTab!==undefined&&e.collpasedByDefault===undefined){r.collapsedByDefault=false}if(typeof(r.animationSpeed)==="string"){r.animationSpeed=t[r.animationSpeed]}a("a.anchor").remove().prependTo("body");q.data("easytabs",{});f.setTransitions();f.getTabs();b();g();w();n();c();q.attr("data-easytabs",true)};f.setTransitions=function(){v=(r.animate)?{show:r.transitionIn,hide:r.transitionOut,speed:r.animationSpeed,collapse:r.transitionCollapse,uncollapse:r.transitionUncollapse,halfSpeed:r.animationSpeed/2}:{show:"show",hide:"hide",speed:0,collapse:"hide",uncollapse:"show",halfSpeed:0}};f.getTabs=function(){var x;f.tabs=q.find(r.tabs),f.panels=a(),f.tabs.each(function(){var A=a(this),z=A.children("a"),y=A.children("a").data("target");A.data("easytabs",{});if(y!==undefined&&y!==null){A.data("easytabs").ajax=z.attr("href")}else{y=z.attr("href")}y=y.match(/#([^\?]+)/)[1];x=r.panelContext.find("#"+y);if(x.length){x.data("easytabs",{position:x.css("position"),visibility:x.css("visibility")});x.not(r.panelActiveClass).hide();f.panels=f.panels.add(x);A.data("easytabs").panel=x}else{f.tabs=f.tabs.not(A);if("console" in window){console.warn("Warning: tab without matching panel for selector '#"+y+"' removed from set")}}})};f.selectTab=function(x,C){var y=window.location,B=y.hash.match(/^[^\?]*/)[0],z=x.parent().data("easytabs").panel,A=x.parent().data("easytabs").ajax;if(r.collapsible&&!d&&(x.hasClass(r.tabActiveClass)||x.hasClass(r.collapsedClass))){f.toggleTabCollapse(x,z,A,C)}else{if(!x.hasClass(r.tabActiveClass)||!z.hasClass(r.panelActiveClass)){o(x,z,A,C)}else{if(!r.cache){o(x,z,A,C)}}}};f.toggleTabCollapse=function(x,y,z,A){f.panels.stop(true,true);if(u(q,"easytabs:before",[x,y,r])){f.tabs.filter("."+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);if(x.hasClass(r.collapsedClass)){if(z&&(!r.cache||!x.parent().data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[x,y]);y.load(z,function(C,B,D){x.parent().data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[x,y,C,B,D])})}x.parent().removeClass(r.collapsedClass).addClass(r.tabActiveClass).children().removeClass(r.collapsedClass).addClass(r.tabActiveClass);y.addClass(r.panelActiveClass)[v.uncollapse](v.speed,r.transitionUncollapseEasing,function(){q.trigger("easytabs:midTransition",[x,y,r]);if(typeof A=="function"){A()}})}else{x.addClass(r.collapsedClass).parent().addClass(r.collapsedClass);y.removeClass(r.panelActiveClass)[v.collapse](v.speed,r.transitionCollapseEasing,function(){q.trigger("easytabs:midTransition",[x,y,r]);if(typeof A=="function"){A()}})}}};f.matchTab=function(x){return f.tabs.find("[href='"+x+"'],[data-target='"+x+"']").first()};f.matchInPanel=function(x){return(x&&f.validId(x)?f.panels.filter(":has("+x+")").first():[])};f.validId=function(x){return x.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)};f.selectTabFromHashChange=function(){var y=window.location.hash.match(/^[^\?]*/)[0],x=f.matchTab(y),z;if(r.updateHash){if(x.length){d=true;f.selectTab(x)}else{z=f.matchInPanel(y);if(z.length){y="#"+z.attr("id");x=f.matchTab(y);d=true;f.selectTab(x)}else{if(!h.hasClass(r.tabActiveClass)&&!r.cycle){if(y===""||f.matchTab(m).length||q.closest(y).length){d=true;f.selectTab(l)}}}}}};f.cycleTabs=function(x){if(r.cycle){x=x%f.tabs.length;$tab=a(f.tabs[x]).children("a").first();d=true;f.selectTab($tab,function(){setTimeout(function(){f.cycleTabs(x+1)},r.cycle)})}};f.publicMethods={select:function(x){var y;if((y=f.tabs.filter(x)).length===0){if((y=f.tabs.find("a[href='"+x+"']")).length===0){if((y=f.tabs.find("a"+x)).length===0){if((y=f.tabs.find("[data-target='"+x+"']")).length===0){if((y=f.tabs.find("a[href$='"+x+"']")).length===0){a.error("Tab '"+x+"' does not exist in tab set")}}}}}else{y=y.children("a").first()}f.selectTab(y)}};var u=function(A,x,z){var y=a.Event(x);A.trigger(y,z);return y.result!==false};var b=function(){q.addClass(r.containerClass);f.tabs.parent().addClass(r.tabsClass);f.tabs.addClass(r.tabClass);f.panels.addClass(r.panelClass)};var g=function(){var y=window.location.hash.match(/^[^\?]*/)[0],x=f.matchTab(y).parent(),z;if(x.length===1){h=x;r.cycle=false}else{z=f.matchInPanel(y);if(z.length){y="#"+z.attr("id");h=f.matchTab(y).parent()}else{h=f.tabs.parent().find(r.defaultTab);if(h.length===0){a.error("The specified default tab ('"+r.defaultTab+"') could not be found in the tab set ('"+r.tabs+"') out of "+f.tabs.length+" tabs.")}}}l=h.children("a").first();p(x)};var p=function(z){var y,x;if(r.collapsible&&z.length===0&&r.collapsedByDefault){h.addClass(r.collapsedClass).children().addClass(r.collapsedClass)}else{y=a(h.data("easytabs").panel);x=h.data("easytabs").ajax;if(x&&(!r.cache||!h.data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[l,y]);y.load(x,function(B,A,C){h.data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[l,y,B,A,C])})}h.data("easytabs").panel.show().addClass(r.panelActiveClass);h.addClass(r.tabActiveClass).children().addClass(r.tabActiveClass)}q.trigger("easytabs:initialised",[l,y])};var w=function(){f.tabs.children("a").bind(r.bind_str,function(x){r.cycle=false;d=false;f.selectTab(a(this));x.preventDefault?x.preventDefault():x.returnValue=false})};var o=function(z,D,E,H){f.panels.stop(true,true);if(u(q,"easytabs:before",[z,D,r])){var A=f.panels.filter(":visible"),y=D.parent(),F,x,C,G,B=window.location.hash.match(/^[^\?]*/)[0];if(r.animate){F=s(D);x=A.length?k(A):0;C=F-x}m=B;G=function(){q.trigger("easytabs:midTransition",[z,D,r]);if(r.animate&&r.transitionIn=="fadeIn"){if(C<0){y.animate({height:y.height()+C},v.halfSpeed).css({"min-height":""})}}if(r.updateHash&&!d){window.location.hash="#"+D.attr("id")}else{d=false}D[v.show](v.speed,r.transitionInEasing,function(){y.css({height:"","min-height":""});q.trigger("easytabs:after",[z,D,r]);if(typeof H=="function"){H()}})};if(E&&(!r.cache||!z.parent().data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[z,D]);D.load(E,function(J,I,K){z.parent().data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[z,D,J,I,K])})}if(r.animate&&r.transitionOut=="fadeOut"){if(C>0){y.animate({height:(y.height()+C)},v.halfSpeed)}else{y.css({"min-height":y.height()})}}f.tabs.filter("."+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);f.tabs.filter("."+r.collapsedClass).removeClass(r.collapsedClass).children().removeClass(r.collapsedClass);z.parent().addClass(r.tabActiveClass).children().addClass(r.tabActiveClass);f.panels.filter("."+r.panelActiveClass).removeClass(r.panelActiveClass);D.addClass(r.panelActiveClass);if(A.length){A[v.hide](v.speed,r.transitionOutEasing,G)}else{D[v.uncollapse](v.speed,r.transitionUncollapseEasing,G)}}};var s=function(z){if(z.data("easytabs")&&z.data("easytabs").lastHeight){return z.data("easytabs").lastHeight}var B=z.css("display"),y,x;try{y=a("<div></div>",{position:"absolute",visibility:"hidden",overflow:"hidden"})}catch(A){y=a("<div></div>",{visibility:"hidden",overflow:"hidden"})}x=z.wrap(y).css({position:"relative",visibility:"hidden",display:"block"}).outerHeight();z.unwrap();z.css({position:z.data("easytabs").position,visibility:z.data("easytabs").visibility,display:B});z.data("easytabs").lastHeight=x;return x};var k=function(y){var x=y.outerHeight();if(y.data("easytabs")){y.data("easytabs").lastHeight=x}else{y.data("easytabs",{lastHeight:x})}return x};var n=function(){if(typeof a(window).hashchange==="function"){a(window).hashchange(function(){f.selectTabFromHashChange()})}else{if(a.address&&typeof a.address.change==="function"){a.address.change(function(){f.selectTabFromHashChange()})}}};var c=function(){var x;if(r.cycle){x=f.tabs.index(h);setTimeout(function(){f.cycleTabs(x+1)},r.cycle)}};f.init()};a.fn.easytabs=function(c){var b=arguments;return this.each(function(){var e=a(this),d=e.data("easytabs");if(undefined===d){d=new a.easytabs(this,c);e.data("easytabs",d)}if(d.publicMethods[c]){return d.publicMethods[c](Array.prototype.slice.call(b,1))}})}})(jQuery);
;
/*!
 * Bootstrap v3.0.2 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);;
/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function($){function sc_setScroll(a,b,c){return"transition"==c.transition&&"swing"==b&&(b="ease"),{anims:[],duration:a,orgDuration:a,easing:b,startTime:getTime()}}function sc_startScroll(a,b){for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e&&e[0][b.transition](e[1],a.duration,a.easing,e[2])}}function sc_stopScroll(a,b){is_boolean(b)||(b=!0),is_object(a.pre)&&sc_stopScroll(a.pre,b);for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e[0].stop(!0),b&&(e[0].css(e[1]),is_function(e[2])&&e[2]())}is_object(a.post)&&sc_stopScroll(a.post,b)}function sc_afterScroll(a,b,c){switch(b&&b.remove(),c.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":a.css("opacity",1),a.css("filter","")}}function sc_fireCallbacks(a,b,c,d,e){if(b[c]&&b[c].call(a,d),e[c].length)for(var f=0,g=e[c].length;g>f;f++)e[c][f].call(a,d);return[]}function sc_fireQueue(a,b,c){return b.length&&(a.trigger(cf_e(b[0][0],c),b[0][1]),b.shift()),b}function sc_hideHiddenItems(a){a.each(function(){var a=$(this);a.data("_cfs_isHidden",a.is(":hidden")).hide()})}function sc_showHiddenItems(a){a&&a.each(function(){var a=$(this);a.data("_cfs_isHidden")||a.show()})}function sc_clearTimers(a){return a.auto&&clearTimeout(a.auto),a.progress&&clearInterval(a.progress),a}function sc_mapCallbackArguments(a,b,c,d,e,f,g){return{width:g.width,height:g.height,items:{old:a,skipped:b,visible:c},scroll:{items:d,direction:e,duration:f}}}function sc_getDuration(a,b,c,d){var e=a.duration;return"none"==a.fx?0:("auto"==e?e=b.scroll.duration/b.scroll.items*c:10>e&&(e=d/e),1>e?0:("fade"==a.fx&&(e/=2),Math.round(e)))}function nv_showNavi(a,b,c){var d=is_number(a.items.minimum)?a.items.minimum:a.items.visible+1;if("show"==b||"hide"==b)var e=b;else if(d>b){debug(c,"Not enough items ("+b+" total, "+d+" needed): Hiding navigation.");var e="hide"}else var e="show";var f="show"==e?"removeClass":"addClass",g=cf_c("hidden",c);a.auto.button&&a.auto.button[e]()[f](g),a.prev.button&&a.prev.button[e]()[f](g),a.next.button&&a.next.button[e]()[f](g),a.pagination.container&&a.pagination.container[e]()[f](g)}function nv_enableNavi(a,b,c){if(!a.circular&&!a.infinite){var d="removeClass"==b||"addClass"==b?b:!1,e=cf_c("disabled",c);if(a.auto.button&&d&&a.auto.button[d](e),a.prev.button){var f=d||0==b?"addClass":"removeClass";a.prev.button[f](e)}if(a.next.button){var f=d||b==a.items.visible?"addClass":"removeClass";a.next.button[f](e)}}}function go_getObject(a,b){return is_function(b)?b=b.call(a):is_undefined(b)&&(b={}),b}function go_getItemsObject(a,b){return b=go_getObject(a,b),is_number(b)?b={visible:b}:"variable"==b?b={visible:b,width:b,height:b}:is_object(b)||(b={}),b}function go_getScrollObject(a,b){return b=go_getObject(a,b),is_number(b)?b=50>=b?{items:b}:{duration:b}:is_string(b)?b={easing:b}:is_object(b)||(b={}),b}function go_getNaviObject(a,b){if(b=go_getObject(a,b),is_string(b)){var c=cf_getKeyCode(b);b=-1==c?$(b):c}return b}function go_getAutoObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_boolean(b)?b={play:b}:is_number(b)&&(b={timeoutDuration:b}),b.progress&&(is_string(b.progress)||is_jquery(b.progress))&&(b.progress={bar:b.progress}),b}function go_complementAutoObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_boolean(b.play)||(b.play=!0),is_number(b.delay)||(b.delay=0),is_undefined(b.pauseOnEvent)&&(b.pauseOnEvent=!0),is_boolean(b.pauseOnResize)||(b.pauseOnResize=!0),is_number(b.timeoutDuration)||(b.timeoutDuration=10>b.duration?2500:5*b.duration),b.progress&&(is_function(b.progress.bar)&&(b.progress.bar=b.progress.bar.call(a)),is_string(b.progress.bar)&&(b.progress.bar=$(b.progress.bar)),b.progress.bar?(is_function(b.progress.updater)||(b.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(b.progress.interval)||(b.progress.interval=50)):b.progress=!1),b}function go_getPrevNextObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_number(b)&&(b={key:b}),b}function go_complementPrevNextObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_string(b.key)&&(b.key=cf_getKeyCode(b.key)),b}function go_getPaginationObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={container:b}:is_boolean(b)&&(b={keys:b}),b}function go_complementPaginationObject(a,b){return is_function(b.container)&&(b.container=b.container.call(a)),is_string(b.container)&&(b.container=$(b.container)),is_number(b.items)||(b.items=!1),is_boolean(b.keys)||(b.keys=!1),is_function(b.anchorBuilder)||is_false(b.anchorBuilder)||(b.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(b.deviation)||(b.deviation=0),b}function go_getSwipeObject(a,b){return is_function(b)&&(b=b.call(a)),is_undefined(b)&&(b={onTouch:!1}),is_true(b)?b={onTouch:b}:is_number(b)&&(b={items:b}),b}function go_complementSwipeObject(a,b){return is_boolean(b.onTouch)||(b.onTouch=!0),is_boolean(b.onMouse)||(b.onMouse=!1),is_object(b.options)||(b.options={}),is_boolean(b.options.triggerOnTouchEnd)||(b.options.triggerOnTouchEnd=!1),b}function go_getMousewheelObject(a,b){return is_function(b)&&(b=b.call(a)),is_true(b)?b={}:is_number(b)?b={items:b}:is_undefined(b)&&(b=!1),b}function go_complementMousewheelObject(a,b){return b}function gn_getItemIndex(a,b,c,d,e){if(is_string(a)&&(a=$(a,e)),is_object(a)&&(a=$(a,e)),is_jquery(a)?(a=e.children().index(a),is_boolean(c)||(c=!1)):is_boolean(c)||(c=!0),is_number(a)||(a=0),is_number(b)||(b=0),c&&(a+=d.first),a+=b,d.total>0){for(;a>=d.total;)a-=d.total;for(;0>a;)a+=d.total}return a}function gn_getVisibleItemsPrev(a,b,c){for(var d=0,e=0,f=c;f>=0;f--){var g=a.eq(f);if(d+=g.is(":visible")?g[b.d.outerWidth](!0):0,d>b.maxDimension)return e;0==f&&(f=a.length),e++}}function gn_getVisibleItemsPrevFilter(a,b,c){return gn_getItemsPrevFilter(a,b.items.filter,b.items.visibleConf.org,c)}function gn_getScrollItemsPrevFilter(a,b,c,d){return gn_getItemsPrevFilter(a,b.items.filter,d,c)}function gn_getItemsPrevFilter(a,b,c,d){for(var e=0,f=0,g=d,h=a.length;g>=0;g--){if(f++,f==h)return f;var i=a.eq(g);if(i.is(b)&&(e++,e==c))return f;0==g&&(g=h)}}function gn_getVisibleOrg(a,b){return b.items.visibleConf.org||a.children().slice(0,b.items.visible).filter(b.items.filter).length}function gn_getVisibleItemsNext(a,b,c){for(var d=0,e=0,f=c,g=a.length-1;g>=f;f++){var h=a.eq(f);if(d+=h.is(":visible")?h[b.d.outerWidth](!0):0,d>b.maxDimension)return e;if(e++,e==g+1)return e;f==g&&(f=-1)}}function gn_getVisibleItemsNextTestCircular(a,b,c,d){var e=gn_getVisibleItemsNext(a,b,c);return b.circular||c+e>d&&(e=d-c),e}function gn_getVisibleItemsNextFilter(a,b,c){return gn_getItemsNextFilter(a,b.items.filter,b.items.visibleConf.org,c,b.circular)}function gn_getScrollItemsNextFilter(a,b,c,d){return gn_getItemsNextFilter(a,b.items.filter,d+1,c,b.circular)-1}function gn_getItemsNextFilter(a,b,c,d){for(var f=0,g=0,h=d,i=a.length-1;i>=h;h++){if(g++,g>=i)return g;var j=a.eq(h);if(j.is(b)&&(f++,f==c))return g;h==i&&(h=-1)}}function gi_getCurrentItems(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsPrev(a,b,c){return a.slice(c,b.items.visibleConf.old+c)}function gi_getNewItemsPrev(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsNext(a,b){return a.slice(0,b.items.visibleConf.old)}function gi_getNewItemsNext(a,b,c){return a.slice(c,b.items.visible+c)}function sz_storeMargin(a,b,c){b.usePadding&&(is_string(c)||(c="_cfs_origCssMargin"),a.each(function(){var a=$(this),d=parseInt(a.css(b.d.marginRight),10);is_number(d)||(d=0),a.data(c,d)}))}function sz_resetMargin(a,b,c){if(b.usePadding){var d=is_boolean(c)?c:!1;is_number(c)||(c=0),sz_storeMargin(a,b,"_cfs_tempCssMargin"),a.each(function(){var a=$(this);a.css(b.d.marginRight,d?a.data("_cfs_tempCssMargin"):c+a.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(a){a.each(function(){var a=$(this);a.data("_cfs_origCss",a.attr("style")||"")})}function sz_restoreOrigCss(a){a.each(function(){var a=$(this);a.attr("style",a.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(a,b){var d=(a.items.visible,a.items[a.d.width]),e=a[a.d.height],f=is_percentage(e);b.each(function(){var b=$(this),c=d-ms_getPaddingBorderMargin(b,a,"Width");b[a.d.width](c),f&&b[a.d.height](ms_getPercentage(c,e))})}function sz_setSizes(a,b){var c=a.parent(),d=a.children(),e=gi_getCurrentItems(d,b),f=cf_mapWrapperSizes(ms_getSizes(e,b,!0),b,!1);if(c.css(f),b.usePadding){var g=b.padding,h=g[b.d[1]];b.align&&0>h&&(h=0);var i=e.last();i.css(b.d.marginRight,i.data("_cfs_origCssMargin")+h),a.css(b.d.top,g[b.d[0]]),a.css(b.d.left,g[b.d[3]])}return a.css(b.d.width,f[b.d.width]+2*ms_getTotalSize(d,b,"width")),a.css(b.d.height,ms_getLargestSize(d,b,"height")),f}function ms_getSizes(a,b,c){return[ms_getTotalSize(a,b,"width",c),ms_getLargestSize(a,b,"height",c)]}function ms_getLargestSize(a,b,c,d){return is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d?b[b.d[c]]:is_number(b.items[b.d[c]])?b.items[b.d[c]]:(c=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",ms_getTrueLargestSize(a,b,c))}function ms_getTrueLargestSize(a,b,c){for(var d=0,e=0,f=a.length;f>e;e++){var g=a.eq(e),h=g.is(":visible")?g[b.d[c]](!0):0;h>d&&(d=h)}return d}function ms_getTotalSize(a,b,c,d){if(is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d)return b[b.d[c]];if(is_number(b.items[b.d[c]]))return b.items[b.d[c]]*a.length;for(var e=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",f=0,g=0,h=a.length;h>g;g++){var i=a.eq(g);f+=i.is(":visible")?i[b.d[e]](!0):0}return f}function ms_getParentSize(a,b,c){var d=a.is(":visible");d&&a.hide();var e=a.parent()[b.d[c]]();return d&&a.show(),e}function ms_getMaxDimension(a,b){return is_number(a[a.d.width])?a[a.d.width]:b}function ms_hasVariableSizes(a,b,c){for(var d=!1,e=!1,f=0,g=a.length;g>f;f++){var h=a.eq(f),i=h.is(":visible")?h[b.d[c]](!0):0;d===!1?d=i:d!=i&&(e=!0),0==d&&(e=!0)}return e}function ms_getPaddingBorderMargin(a,b,c){return a[b.d["outer"+c]](!0)-a[b.d[c.toLowerCase()]]()}function ms_getPercentage(a,b){if(is_percentage(b)){if(b=parseInt(b.slice(0,-1),10),!is_number(b))return a;a*=b/100}return a}function cf_e(a,b,c,d,e){return is_boolean(c)||(c=!0),is_boolean(d)||(d=!0),is_boolean(e)||(e=!1),c&&(a=b.events.prefix+a),d&&(a=a+"."+b.events.namespace),d&&e&&(a+=b.serialNumber),a}function cf_c(a,b){return is_string(b.classnames[a])?b.classnames[a]:a}function cf_mapWrapperSizes(a,b,c){is_boolean(c)||(c=!0);var d=b.usePadding&&c?b.padding:[0,0,0,0],e={};return e[b.d.width]=a[0]+d[1]+d[3],e[b.d.height]=a[1]+d[0]+d[2],e}function cf_sortParams(a,b){for(var c=[],d=0,e=a.length;e>d;d++)for(var f=0,g=b.length;g>f;f++)if(b[f].indexOf(typeof a[d])>-1&&is_undefined(c[f])){c[f]=a[d];break}return c}function cf_getPadding(a){if(is_undefined(a))return[0,0,0,0];if(is_number(a))return[a,a,a,a];if(is_string(a)&&(a=a.split("px").join("").split("em").join("").split(" ")),!is_array(a))return[0,0,0,0];for(var b=0;4>b;b++)a[b]=parseInt(a[b],10);switch(a.length){case 0:return[0,0,0,0];case 1:return[a[0],a[0],a[0],a[0]];case 2:return[a[0],a[1],a[0],a[1]];case 3:return[a[0],a[1],a[2],a[1]];default:return[a[0],a[1],a[2],a[3]]}}function cf_getAlignPadding(a,b){var c=is_number(b[b.d.width])?Math.ceil(b[b.d.width]-ms_getTotalSize(a,b,"width")):0;switch(b.align){case"left":return[0,c];case"right":return[c,0];case"center":default:return[Math.ceil(c/2),Math.floor(c/2)]}}function cf_getDimensions(a){for(var b=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],c=b[0].length,d="right"==a.direction||"left"==a.direction?0:1,e={},f=0;c>f;f++)e[b[0][f]]=b[d][f];return e}function cf_getAdjust(a,b,c,d){var e=a;if(is_function(c))e=c.call(d,e);else if(is_string(c)){var f=c.split("+"),g=c.split("-");if(g.length>f.length)var h=!0,i=g[0],j=g[1];else var h=!1,i=f[0],j=f[1];switch(i){case"even":e=1==a%2?a-1:a;break;case"odd":e=0==a%2?a-1:a;break;default:e=a}j=parseInt(j,10),is_number(j)&&(h&&(j=-j),e+=j)}return(!is_number(e)||1>e)&&(e=1),e}function cf_getItemsAdjust(a,b,c,d){return cf_getItemAdjustMinMax(cf_getAdjust(a,b,c,d),b.items.visibleConf)}function cf_getItemAdjustMinMax(a,b){return is_number(b.min)&&b.min>a&&(a=b.min),is_number(b.max)&&a>b.max&&(a=b.max),1>a&&(a=1),a}function cf_getSynchArr(a){is_array(a)||(a=[[a]]),is_array(a[0])||(a=[a]);for(var b=0,c=a.length;c>b;b++)is_string(a[b][0])&&(a[b][0]=$(a[b][0])),is_boolean(a[b][1])||(a[b][1]=!0),is_boolean(a[b][2])||(a[b][2]=!0),is_number(a[b][3])||(a[b][3]=0);return a}function cf_getKeyCode(a){return"right"==a?39:"left"==a?37:"up"==a?38:"down"==a?40:-1}function cf_setCookie(a,b,c){if(a){var d=b.triggerHandler(cf_e("currentPosition",c));$.fn.carouFredSel.cookie.set(a,d)}}function cf_getCookie(a){var b=$.fn.carouFredSel.cookie.get(a);return""==b?0:b}function in_mapCss(a,b){for(var c={},d=0,e=b.length;e>d;d++)c[b[d]]=a.css(b[d]);return c}function in_complementItems(a,b,c,d){return is_object(a.visibleConf)||(a.visibleConf={}),is_object(a.sizesConf)||(a.sizesConf={}),0==a.start&&is_number(d)&&(a.start=d),is_object(a.visible)?(a.visibleConf.min=a.visible.min,a.visibleConf.max=a.visible.max,a.visible=!1):is_string(a.visible)?("variable"==a.visible?a.visibleConf.variable=!0:a.visibleConf.adjust=a.visible,a.visible=!1):is_function(a.visible)&&(a.visibleConf.adjust=a.visible,a.visible=!1),is_string(a.filter)||(a.filter=c.filter(":hidden").length>0?":visible":"*"),a[b.d.width]||(b.responsive?(debug(!0,"Set a "+b.d.width+" for the items!"),a[b.d.width]=ms_getTrueLargestSize(c,b,"outerWidth")):a[b.d.width]=ms_hasVariableSizes(c,b,"outerWidth")?"variable":c[b.d.outerWidth](!0)),a[b.d.height]||(a[b.d.height]=ms_hasVariableSizes(c,b,"outerHeight")?"variable":c[b.d.outerHeight](!0)),a.sizesConf.width=a.width,a.sizesConf.height=a.height,a}function in_complementVisibleItems(a,b){return"variable"==a.items[a.d.width]&&(a.items.visibleConf.variable=!0),a.items.visibleConf.variable||(is_number(a[a.d.width])?a.items.visible=Math.floor(a[a.d.width]/a.items[a.d.width]):(a.items.visible=Math.floor(b/a.items[a.d.width]),a[a.d.width]=a.items.visible*a.items[a.d.width],a.items.visibleConf.adjust||(a.align=!1)),("Infinity"==a.items.visible||1>a.items.visible)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),a.items.visibleConf.variable=!0)),a}function in_complementPrimarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerWidth")),a}function in_complementSecondarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerHeight")),a||(a=b.items[b.d.height]),a}function in_getAlignPadding(a,b){var c=cf_getAlignPadding(gi_getCurrentItems(b,a),a);return a.padding[a.d[1]]=c[1],a.padding[a.d[3]]=c[0],a}function in_getResponsiveValues(a,b){var d=cf_getItemAdjustMinMax(Math.ceil(a[a.d.width]/a.items[a.d.width]),a.items.visibleConf);d>b.length&&(d=b.length);var e=Math.floor(a[a.d.width]/d);return a.items.visible=d,a.items[a.d.width]=e,a[a.d.width]=d*e,a}function bt_pauseOnHoverConfig(a){if(is_string(a))var b=a.indexOf("immediate")>-1?!0:!1,c=a.indexOf("resume")>-1?!0:!1;else var b=c=!1;return[b,c]}function bt_mousesheelNumber(a){return is_number(a)?a:null}function is_null(a){return null===a}function is_undefined(a){return is_null(a)||a===void 0||""===a||"undefined"===a}function is_array(a){return a instanceof Array}function is_jquery(a){return a instanceof jQuery}function is_object(a){return(a instanceof Object||"object"==typeof a)&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a)}function is_number(a){return(a instanceof Number||"number"==typeof a)&&!isNaN(a)}function is_string(a){return(a instanceof String||"string"==typeof a)&&!is_undefined(a)&&!is_true(a)&&!is_false(a)}function is_function(a){return a instanceof Function||"function"==typeof a}function is_boolean(a){return a instanceof Boolean||"boolean"==typeof a||is_true(a)||is_false(a)}function is_true(a){return a===!0||"true"===a}function is_false(a){return a===!1||"false"===a}function is_percentage(a){return is_string(a)&&"%"==a.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(a,b){debug(!0,a+" is DEPRECATED, support for it will be removed. Use "+b+" instead.")}function debug(a,b){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(a)){var c=" ("+a.selector+")";a=a.debug}else var c="";if(!a)return!1;b=is_string(b)?"carouFredSel"+c+": "+b:["carouFredSel"+c+":",b],window.console.log(b)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={};FN._init=function(a,b,c){a=go_getObject($tt0,a),a.items=go_getItemsObject($tt0,a.items),a.scroll=go_getScrollObject($tt0,a.scroll),a.auto=go_getAutoObject($tt0,a.auto),a.prev=go_getPrevNextObject($tt0,a.prev),a.next=go_getPrevNextObject($tt0,a.next),a.pagination=go_getPaginationObject($tt0,a.pagination),a.swipe=go_getSwipeObject($tt0,a.swipe),a.mousewheel=go_getMousewheelObject($tt0,a.mousewheel),b&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,a)),opts=$.extend(!0,{},$.fn.carouFredSel.defaults,a),opts.d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var d=$cfs.children(),e=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,e),opts.items=in_complementItems(opts.items,opts,d,c),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,d),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,d),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(e,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,e)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=is_number(opts[opts.d.width])?"center":!1),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(d,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(d,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,d,e);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&(opts=in_getAlignPadding(opts,d),opts.usePadding=!0);break;default:opts.align=!1,opts.usePadding=0==opts.padding[0]&&0==opts.padding[1]&&0==opts.padding[2]&&0==opts.padding[3]?!1:!0}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},FN._build=function(){$cfs.data("_cfs_isCarousel",!0);var a=$cfs.children(),b=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),c="relative";switch(b.position){case"absolute":case"fixed":c=b.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(b),$wrp.css({overflow:"hidden",position:c}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",b.zIndex),$cfs.css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(a,opts),sz_storeOrigCss(a),opts.responsive&&sz_setResponsiveSizes(opts,a)},FN._bind_events=function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(a,b){return a.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),b)),!0}),$cfs.bind(cf_e("finish",conf),function(a){return a.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(a,b,c){if(a.stopPropagation(),tmrs=sc_clearTimers(tmrs),b&&crsl.isScrolling){scrl.isStopped=!0;var d=getTime()-scrl.startTime;scrl.duration-=d,scrl.pre&&(scrl.pre.duration-=d),scrl.post&&(scrl.post.duration-=d),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||c&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var e=opts.auto.timeoutDuration-tmrs.timePassed,f=100-Math.ceil(100*e/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,f,e)}return!0}),$cfs.bind(cf_e("play",conf),function(a,b,c,d){a.stopPropagation(),tmrs=sc_clearTimers(tmrs);var e=[b,c,d],f=["string","number","boolean"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],"prev"!=b&&"next"!=b&&(b=crsl.direction),is_number(c)||(c=0),is_boolean(d)||(d=!1),d&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return a.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var h=opts.auto.timeoutDuration+c;return dur2=h-tmrs.timePassed,perc=100-Math.ceil(100*dur2/h),opts.auto.progress&&(tmrs.progress=setInterval(function(){var a=getTime()-tmrs.startTime+tmrs.timePassed,b=Math.ceil(100*a/h);opts.auto.progress.updater.call(opts.auto.progress.bar[0],b)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),b):$cfs.trigger(cf_e(b,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(a){return a.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(a,b,c,d,e){if(a.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return a.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var f=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(f>itms.total)return a.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+f+" needed): Not scrolling.");var g=[b,c,d,e],h=["object","number/string","function","boolean"],i=cf_sortParams(g,h);b=i[0],c=i[1],d=i[2],e=i[3];var j=a.type.slice(conf.events.prefix.length);if(is_object(b)||(b={}),is_function(d)&&(b.onAfter=d),is_boolean(e)&&(b.queue=e),b=$.extend(!0,{},opts[j],b),b.conditions&&!b.conditions.call($tt0,j))return a.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(c)){if("*"!=opts.items.filter)c="visible";else for(var k=[c,b.items,opts[j].items],i=0,l=k.length;l>i;i++)if(is_number(k[i])||"page"==k[i]||"visible"==k[i]){c=k[i];break}switch(c){case"page":return a.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(j+"Page",conf),[b,d]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(c=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]]),a.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(b.duration>0&&crsl.isScrolling)return b.queue&&("last"==b.queue&&(queu=[]),("first"!=b.queue||0==queu.length)&&$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]])),a.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+j,conf),[b,c]),opts.synchronise)for(var m=opts.synchronise,n=[b,c],o=0,l=m.length;l>o;o++){var p=j;m[o][2]||(p="prev"==p?"next":"prev"),m[o][1]||(n[0]=m[o][0].triggerHandler("_cfs_triggerEvent",["configuration",p])),n[1]=c+m[o][3],m[o][0].trigger("_cfs_triggerEvent",["slide_"+p,n])}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if(opts.items.visibleConf.variable)c=gn_getVisibleItemsPrev(d,opts,itms.total-1);else if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsPrevFilter(d,opts,itms.total-1,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}if(opts.circular||itms.total-c<itms.first&&(c=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0);f>=opts.items.visible+c&&itms.total>c&&(c++,f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=f}else if("*"!=opts.items.filter){var f=gn_getVisibleItemsNextFilter(d,opts,itms.total-c);opts.items.visible=cf_getItemsAdjust(f,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items backward."),itms.first+=c;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&b.onEnd&&b.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-c,itms.total).prependTo($cfs),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),g=gi_getOldItemsPrev(d,opts,c),h=gi_getNewItemsPrev(d,opts),i=d.eq(c-1),j=g.last(),k=h.last();sz_resetMargin(d,opts);var l=0,m=0;if(opts.align){var n=cf_getAlignPadding(h,opts);l=n[0],m=n[1]}var o=0>l?opts.padding[opts.d[3]]:0,p=!1,q=$();if(c>opts.items.visible&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,i=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(h,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B={},C={},D=sc_getDuration(b,opts,c,t);switch(b.fx){case"cover":case"cover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visible),opts,"width")}p&&(opts.items[opts.d.width]=r),sz_resetMargin(d,opts,!0),m>=0&&sz_resetMargin(j,opts,opts.padding[opts.d[1]]),l>=0&&sz_resetMargin(i,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=m,opts.padding[opts.d[3]]=l),B[opts.d.left]=-(t-o),C[opts.d.left]=-(v-o),x[opts.d.left]=u[opts.d.width];var E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){},L=function(){},M=function(){},N=function(){},O=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp)}switch(b.fx){case"crossfade":case"uncover":case"uncover-fade":s.children().slice(0,c).remove(),s.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":s.children().slice(opts.items.visible).remove(),s.css(C)}if($cfs.css(B),scrl=sc_setScroll(D,b.easing,conf),w[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(E=function(){$wrp.css(u)},F=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){switch(k.not(i).length&&(y[opts.d.marginRight]=i.data("_cfs_origCssMargin"),0>l?i.css(y):(K=function(){i.css(y)},L=function(){scrl.anims.push([i,y])})),b.fx){case"cover":case"cover-fade":s.children().eq(c-1).css(y)}k.not(j).length&&(z[opts.d.marginRight]=j.data("_cfs_origCssMargin"),G=function(){j.css(z)},H=function(){scrl.anims.push([j,z])}),m>=0&&(A[opts.d.marginRight]=k.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],I=function(){k.css(A)},J=function(){scrl.anims.push([k,A])})}O=function(){$cfs.css(w)};var P=opts.items.visible+c-itms.total;N=function(){if(P>0&&($cfs.children().slice(itms.total).remove(),g=$($cfs.children().slice(itms.total-(opts.items.visible-P)).get().concat($cfs.children().slice(0,P).get()))),sc_showHiddenItems(p),opts.usePadding){var a=$cfs.children().eq(opts.items.visible+c-1);a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var Q=sc_mapCallbackArguments(g,q,h,c,"prev",D,u);switch(M=function(){sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",Q,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",Q,clbk),b.fx){case"none":$cfs.css(w),E(),G(),I(),K(),O(),N(),M();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){E(),G(),I(),K(),O(),N(),scrl=sc_setScroll(D,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},M]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},M]),F(),G(),I(),K(),O(),N();break;case"cover":scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"uncover":scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;default:scrl.anims.push([$cfs,w,function(){N(),M()}]),F(),H(),J(),L()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0
}),$cfs.bind(cf_e("slide_next",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsNextFilter(d,opts,0,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}var f=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable)var g=gn_getVisibleItemsNext(d,opts,c),e=gn_getVisibleItemsPrev(d,opts,f-1);else var g=opts.items.visible,e=opts.items.visible;c+g>f&&(c=f-e)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(var g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-c>=g&&itms.total>c;)c++,g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=g}else if("*"!=opts.items.filter){var g=gn_getVisibleItemsNextFilter(d,opts,c);opts.items.visible=cf_getItemsAdjust(g,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items forward."),itms.first-=c;0>itms.first;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&b.onEnd&&b.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),h=gi_getOldItemsNext(d,opts),i=gi_getNewItemsNext(d,opts,c),j=d.eq(c-1),k=h.last(),l=i.last();sz_resetMargin(d,opts);var m=0,n=0;if(opts.align){var o=cf_getAlignPadding(i,opts);m=o[0],n=o[1]}var p=!1,q=$();if(c>opts.items.visibleConf.old&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,j=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(i,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B=sc_getDuration(b,opts,c,t);switch(b.fx){case"uncover":case"uncover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visibleConf.old),opts,"width")}p&&(opts.items[opts.d.width]=r),opts.align&&0>opts.padding[opts.d[1]]&&(opts.padding[opts.d[1]]=0),sz_resetMargin(d,opts,!0),sz_resetMargin(k,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=n,opts.padding[opts.d[3]]=m),A[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var C=function(){},D=function(){},E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp),s.children().slice(opts.items.visibleConf.old).remove()}switch(b.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),s.css("zIndex",0)}if(scrl=sc_setScroll(B,b.easing,conf),w[opts.d.left]=-t,x[opts.d.left]=-v,0>m&&(w[opts.d.left]+=m),("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(C=function(){$wrp.css(u)},D=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){var L=l.data("_cfs_origCssMargin");n>=0&&(L+=opts.padding[opts.d[1]]),l.css(opts.d.marginRight,L),j.not(k).length&&(z[opts.d.marginRight]=k.data("_cfs_origCssMargin")),E=function(){k.css(z)},F=function(){scrl.anims.push([k,z])};var M=j.data("_cfs_origCssMargin");m>0&&(M+=opts.padding[opts.d[3]]),y[opts.d.marginRight]=M,G=function(){j.css(y)},H=function(){scrl.anims.push([j,y])}}K=function(){$cfs.css(A)};var N=opts.items.visible+c-itms.total;J=function(){N>0&&$cfs.children().slice(itms.total).remove();var a=$cfs.children().slice(0,c).appendTo($cfs).last();if(N>0&&(i=gi_getCurrentItems(d,opts)),sc_showHiddenItems(p),opts.usePadding){if(itms.total<opts.items.visible+c){var b=$cfs.children().eq(opts.items.visible-1);b.css(opts.d.marginRight,b.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var O=sc_mapCallbackArguments(h,q,i,c,"next",B,u);switch(I=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",O,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",O,clbk),b.fx){case"none":$cfs.css(w),C(),E(),G(),K(),J(),I();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){C(),E(),G(),K(),J(),scrl=sc_setScroll(B,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},I]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},I]),D(),E(),G(),K(),J();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"uncover":scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;default:scrl.anims.push([$cfs,w,function(){K(),J(),I()}]),D(),F(),H()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0}),$cfs.bind(cf_e("slideTo",conf),function(a,b,c,d,e,f,g){a.stopPropagation();var h=[b,c,d,e,f,g],i=["string/number/object","number","boolean","object","string","function"],j=cf_sortParams(h,i);return e=j[3],f=j[4],g=j[5],b=gn_getItemIndex(j[0],j[1],j[2],itms,$cfs),0==b?!1:(is_object(e)||(e=!1),"prev"!=f&&"next"!=f&&(f=opts.circular?itms.total/2>=b?"next":"prev":0==itms.first||itms.first>b?"next":"prev"),"prev"==f&&(b=itms.total-b),$cfs.trigger(cf_e(f,conf),[e,b,g]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d-1,b,"prev",c])}),$cfs.bind(cf_e("nextPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d+1,b,"next",c])}),$cfs.bind(cf_e("slideToPage",conf),function(a,b,c,d,e){a.stopPropagation(),is_number(b)||(b=$cfs.triggerHandler(cf_e("currentPage",conf)));var f=opts.pagination.items||opts.items.visible,g=Math.ceil(itms.total/f)-1;return 0>b&&(b=g),b>g&&(b=0),$cfs.triggerHandler(cf_e("slideTo",conf),[b*f,0,!0,c,d,e])}),$cfs.bind(cf_e("jumpToStart",conf),function(a,b){if(a.stopPropagation(),b=b?gn_getItemIndex(b,0,!0,itms,$cfs):0,b+=itms.first,0!=b){if(itms.total>0)for(;b>itms.total;)b-=itms.total;$cfs.prepend($cfs.children().slice(b,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(a,b){if(a.stopPropagation(),b)b=cf_getSynchArr(b);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");b=opts.synchronise}for(var c=$cfs.triggerHandler(cf_e("currentPosition",conf)),d=!0,e=0,f=b.length;f>e;e++)b[e][0].triggerHandler(cf_e("slideTo",conf),[c,b[e][3],!0])||(d=!1);return d}),$cfs.bind(cf_e("queue",conf),function(a,b,c){return a.stopPropagation(),is_function(b)?b.call($tt0,queu):is_array(b)?queu=b:is_undefined(b)||queu.push([b,c]),queu}),$cfs.bind(cf_e("insertItem",conf),function(a,b,c,d,e){a.stopPropagation();var f=[b,c,d,e],g=["string/object","string/number/object","boolean","number"],h=cf_sortParams(f,g);if(b=h[0],c=h[1],d=h[2],e=h[3],is_object(b)&&!is_jquery(b)?b=$(b):is_string(b)&&(b=$(b)),!is_jquery(b)||0==b.length)return debug(conf,"Not a valid object.");is_undefined(c)&&(c="end"),sz_storeMargin(b,opts),sz_storeOrigCss(b);var i=c,j="before";"end"==c?d?(0==itms.first?(c=itms.total-1,j="after"):(c=itms.first,itms.first+=b.length),0>c&&(c=0)):(c=itms.total-1,j="after"):c=gn_getItemIndex(c,e,d,itms,$cfs);var k=$cfs.children().eq(c);return k.length?k[j](b):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(b)),"end"==i||d||itms.first>c&&(itms.first+=b.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(a,b,c,d){a.stopPropagation();var e=[b,c,d],f=["string/number/object","boolean","number"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],b instanceof $&&b.length>1)return i=$(),b.each(function(){var e=$cfs.trigger(cf_e("removeItem",conf),[$(this),c,d]);e&&(i=i.add(e))}),i;if(is_undefined(b)||"end"==b)i=$cfs.children().last();else{b=gn_getItemIndex(b,d,c,itms,$cfs);var i=$cfs.children().eq(b);i.length&&itms.first>b&&(itms.first-=i.length)}return i&&i.length&&(i.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),i}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length);return is_array(b)&&(clbk[c]=b),is_function(b)&&clbk[c].push(b),clbk[c]}),$cfs.bind(cf_e("currentPosition",conf),function(a,b){if(a.stopPropagation(),0==itms.first)var c=0;else var c=itms.total-itms.first;return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("currentPage",conf),function(a,b){a.stopPropagation();var e,c=opts.pagination.items||opts.items.visible,d=Math.ceil(itms.total/c-1);return e=0==itms.first?0:itms.first<itms.total%c?0:itms.first!=c||opts.circular?Math.round((itms.total-itms.first)/c):d,0>e&&(e=0),e>d&&(e=d),is_function(b)&&b.call($tt0,e),e}),$cfs.bind(cf_e("currentVisible",conf),function(a,b){a.stopPropagation();var c=gi_getCurrentItems($cfs.children(),opts);return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("slice",conf),function(a,b,c,d){if(a.stopPropagation(),0==itms.total)return!1;var e=[b,c,d],f=["number","number","function"],g=cf_sortParams(e,f);if(b=is_number(g[0])?g[0]:0,c=is_number(g[1])?g[1]:itms.total,d=g[2],b+=itms.first,c+=itms.first,items.total>0){for(;b>itms.total;)b-=itms.total;for(;c>itms.total;)c-=itms.total;for(;0>b;)b+=itms.total;for(;0>c;)c+=itms.total}var i,h=$cfs.children();return i=c>b?h.slice(b,c):$(h.slice(b,itms.total).get().concat(h.slice(0,c).get())),is_function(d)&&d.call($tt0,i),i}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length),d=crsl[c];return is_function(b)&&b.call($tt0,d),d}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),b!==!1?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),c!==!1?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(a,b,c){return a.stopPropagation(),is_undefined(b)?b=$("body"):is_string(b)&&(b=$(b)),is_jquery(b)&&0!=b.length?(is_string(c)||(c="a.caroufredsel"),b.find(c).each(function(){var a=this.hash||"";a.length>0&&-1!=$cfs.children().index($(a))&&$(this).unbind("click").click(function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),a)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(a,b){if(a.stopPropagation(),opts.pagination.container){var d=opts.pagination.items||opts.items.visible,e=Math.ceil(itms.total/d);b&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var a=0;e>a;a++){var b=$cfs.children().eq(gn_getItemIndex(a*d,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(b[0],a+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[a*d,-opts.pagination.deviation,!0,opts.pagination])})})}));var f=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return f>=e&&(f=0),0>f&&(f=e-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(f).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(){var b=opts.items.visible,c=$cfs.children(),d=ms_getParentSize($wrp,opts,"width");if(itms.total=c.length,crsl.primarySizePercentage?(opts.maxDimension=d,opts[opts.d.width]=ms_getPercentage(d,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,d),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,opts=in_getResponsiveValues(opts,c,d),b=opts.items.visible,sz_setResponsiveSizes(opts,c)):opts.items.visibleConf.variable?b=gn_getVisibleItemsNext(c,opts,0):"*"!=opts.items.filter&&(b=gn_getVisibleItemsNextFilter(c,opts,0)),!opts.circular&&0!=itms.first&&b>itms.first){if(opts.items.visibleConf.variable)var e=gn_getVisibleItemsPrev(c,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)var e=gn_getVisibleItemsPrevFilter(c,opts,itms.first)-itms.first;else var e=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+e+" items backward."),$cfs.trigger(cf_e("prev",conf),e)}opts.items.visible=cf_getItemsAdjust(b,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,c);var f=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,f]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),f}),$cfs.bind(cf_e("destroy",conf),function(a,b){return a.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),b&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(a,b,c){return a.stopPropagation(),$cfs.triggerHandler(cf_e(b,conf),c)})},FN._unbind_events=function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},FN._bind_buttons=function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(a){a.preventDefault();var b=!1,c=null;crsl.isPaused?b="play":opts.auto.pauseOnEvent&&(b="pause",c=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),b&&$cfs.trigger(cf_e(b,conf),c)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b==opts.next.key&&(a.preventDefault(),$cfs.trigger(cf_e("next",conf))),b==opts.prev.key&&(a.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b>=49&&58>b&&(b=(b-49)*opts.items.visible,itms.total>=b&&(a.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[b,0,!0,opts.pagination])))}),$.fn.swipe){var b="ontouchstart"in window;if(b&&opts.swipe.onTouch||!b&&opts.swipe.onMouse){var c=$.extend(!0,{},opts.prev,opts.swipe),d=$.extend(!0,{},opts.next,opts.swipe),e=function(){$cfs.trigger(cf_e("prev",conf),[c])},f=function(){$cfs.trigger(cf_e("next",conf),[d])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=f,opts.swipe.options.swipeDown=e;break;default:opts.swipe.options.swipeLeft=f,opts.swipe.options.swipeRight=e}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var g=$.extend(!0,{},opts.prev,opts.mousewheel),h=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(a,b){a.preventDefault(),b>0?$cfs.trigger(cf_e("prev",conf),[g]):$cfs.trigger(cf_e("next",conf),[h])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var i=function(){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},j=$(window),k=null;if($.debounce&&"debounce"==conf.onWindowResize)k=$.debounce(200,i);else if($.throttle&&"throttle"==conf.onWindowResize)k=$.throttle(300,i);else{var l=0,m=0;k=function(){var a=j.width(),b=j.height();(a!=l||b!=m)&&(i(),l=a,m=b)}}j.bind(cf_e("resize",conf,!1,!0,!0),k)}},FN._unbind_buttons=function(){var b=(cf_e("",conf),cf_e("",conf,!1));ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(b),opts.auto.button&&opts.auto.button.unbind(b),opts.prev.button&&opts.prev.button.unbind(b),opts.next.button&&opts.next.button.unbind(b),opts.pagination.container&&(opts.pagination.container.unbind(b),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)},is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),start_arr.length>0)for(var a=0,l=start_arr.length;l>a;a++){var s=start_arr[a];if(0!=s){if(s===!0){if(s=window.location.hash,1>s.length)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(a){return'<a href="#"><span>'+a+"</span></a>"},$.fn.carouFredSel.progressbarUpdater=function(a){$(this).css("width",a+"%")},$.fn.carouFredSel.cookie={get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0,d=b.length;d>c;c++){for(var e=b[c];" "==e.charAt(0);)e=e.slice(1);if(0==e.indexOf(a))return e.slice(a.length)}return 0},set:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"},remove:function(a){$.fn.carouFredSel.cookie.set(a,"",-1)}},$.extend($.easing,{quadratic:function(a){var b=a*a;return a*(-b*a+4*b-6*a+4)},cubic:function(a){return a*(4*a*a-9*a+6)},elastic:function(a){var b=a*a;return a*(33*b*b-106*b*a+126*b-67*a+15)}}))})(jQuery);;
/* custom.js file */
(function($) {
    // Handle product slideshow events
    Drupal.behaviors.phongdep = {
        attach: function(context, settings) {
            if ($('.navbar-nav .dropdown').length) {
                var menuItem = $('.navbar-nav .dropdown');
                menuItem.each(function() {
                    $(this).hover(function() {
                        $(this).addClass('open');
                    });
                    $(this).mouseleave(function() {
                        $(this).removeClass('open');
                    })
                    $(this).find('a').click(function() {
                        window.location = $(this).attr('href');
                    });
                })
            }
            if ($('.navbar-nav .dropdown').length) {
                var menuItem = $('.navbar-nav .dropdown');
                menuItem.each(function() {
                    $(this).hover(function() {
                        $(this).addClass('open');
                    });
                    $(this).mouseleave(function() {
                        $(this).removeClass('open');
                    })
                    $(this).find('a').click(function() {
                        window.location = $(this).attr('href');
                    });
                })
            }
            $('#slides').slidesjs({
                width: 747,
                height: 246,
                play: {
                    active: true,
                    auto: true,
                    interval: 4000,
                    swap: true
                }
            });
            if ($('#camera_wrap_4').length) {
                $('#camera_wrap_4').camera({
                    height: '100%',
                    width: '50%',
                    pagination: false,
                    thumbnails: true,
                    imagePath: '../images/'
                });
            }
            if ($('#camera_wrap_5').length) {
                $('#camera_wrap_5').camera({
                    height: '100%',
                    width: '50%',
                    pagination: false,
                    thumbnails: true,
                    imagePath: '../images/'
                });
            }
            $(document).ready(function() {
                $('.pgwSlideshow').pgwSlideshow();
            });

            var container = $('.met_portfolio');
            if (container.length > 0) {
                container.imagesLoaded(function() {
                    // filter items when filter link is clicked
                    $('.met_portfolio_filters a').click(function() {
                        if (!$(this).hasClass('activePortfolio')) {
                            var selector = $(this).attr('data-filter');
                            $('.activePortfolio').removeClass('activePortfolio');
                            $(this).addClass('activePortfolio');
                            container.isotope({filter: selector});
                        }
                        return false;
                    });
                    container.isotope({});
                    $('.met_portfolio_filters').next('select').on('change', function() {
                        var selector = $(this).val();
                        container.isotope({filter: selector});
                    });
                    $(window).smartresize(function() {
                        container.isotope('reLayout');
                    });
                });
            }
            
            $('button').on('click', function(e) {
                if ($(this).hasClass('grid')) {
                    $('.homeproduct .met_recent_works_wrapper').removeClass('list').addClass('grid');
                    container.imagesLoaded(function() {
                        container.isotope({});
                        $(window).smartresize(function() {
                            container.isotope('reLayout');
                        });
                    });
                    return true;
                }
                else if ($(this).hasClass('list')) {
                    $('.homeproduct .met_recent_works_wrapper').removeClass('grid').addClass('list');
                    container.imagesLoaded(function() {
                        container.isotope({});
                        $(window).smartresize(function() {
                            container.isotope('reLayout');
                        });
                    });
                    return true;
                }
            });
            //slider hotel
            $('.sliderhotel').flexslider({
                animation: "fade",
                controlNav: false,
                directionNav: true,
                slideshow: false,
                start: function(slider) {
                    $('body').removeClass('loading');
                }
            });

            $('li.menu').click(function() {
                $('li.menu').removeClass("active");
                $(this).addClass("active");
            });

            //  The function to change the class
            var changeClass = function(r, className1, className2) {
                var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
                if (regex.test(r.className)) {
                    r.className = r.className.replace(regex, ' ' + className2 + ' ');
                }
                else {
                    r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"), ' ' + className1 + ' ');
                }
                return r.className;
            };


            $('.flexslider').flexslider({
                animation: "slide"
            });

//  Creating our button in JS for smaller screens
            var menuElements = document.getElementById('menu-main');
            menuElements.insertAdjacentHTML('afterBegin', '<button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="icon-menu"> </i> Menu</button>');

            //  Toggle the class on click to show / hide the menu
            document.getElementById('menutoggle').onclick = function() {
                changeClass(this, 'navtoogle active', 'navtoogle');
            }

            // http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/comment-page-2/#comment-438918
            document.onclick = function(e) {
                var mobileButton = document.getElementById('menutoggle'),
                        buttonStyle = mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;

                if (buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
                    changeClass(mobileButton, 'navtoogle active', 'navtoogle');
                }
            }

        }
    };
})(jQuery);;
// Generated by CoffeeScript 1.6.3
(function($) {
  var calculatePrice, openMailForm, replaceAll, resetFeature, selectFeature, to_num, to_s, toggleInputs;
  to_s = function(nStr) {
    var rgx, x, x1, x2;
    nStr += "";
    x = nStr.split(".");
    x1 = x[0];
    x2 = (x.length > 1 ? "." + x[1] : "");
    rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  };
  to_num = function(string) {
    return parseFloat(replaceAll(',', '', string));
  };
  replaceAll = function(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
  };
  calculatePrice = function(price, active) {
    var $lastPrice, currentPrice;
    $lastPrice = $('#last-price .value');
    currentPrice = to_num($lastPrice.text());
    if (active) {
      currentPrice -= to_num(price);
    } else {
      currentPrice += to_num(price);
    }
    return $lastPrice.text(to_s(currentPrice));
  };
  selectFeature = function() {
    var active, args, duration, price;
    duration = $('input[name=contract-duration]:checked').val();
    console.log(duration);
    if (duration === '6') {
      if ($(this).find('.feature-price').length) {
        price = $(this).find('.feature-price span').text();
      } else {
        price = '0';
      }
      if ($(this).hasClass('active')) {
        active = true;
      } else {
        active = false;
      }
      calculatePrice(price, active);
      return $(this).toggleClass('active');
    } else {
      args = {
        'padding': [30, 25, 30, 25],
        'closeBtn': false
      };
      return $.fancybox('Vui lòng chọn hợp đồng 6 tháng để tuỳ chọn tiện nghi.', args);
    }
  };
  resetFeature = function() {
    $('#room-feature-no-include #features li').each(function(i, el) {
      return $(this).removeClass('active');
    });
    return $('#last-price .value').text($('#rental-price').text());
  };
  toggleInputs = function() {
    if ($(this).val() === 'between' || $(this).val() === 'not between') {
      $(this).parent().find('.value').hide();
      $(this).parent().find('.min').show();
      return $(this).parent().find('.max').show();
    } else {
      $(this).parent().find('.min').hide();
      $(this).parent().find('.max').hide();
      return $(this).parent().find('.value').show();
    }
  };
  openMailForm = function() {
    var $btnSend, $message;
    $btnSend = $('#btn-send-invoice').detach();
    $message = $('#form-send-invoice').find('#content');
    $message.text($('#invoice-print').html());
    $.fancybox($('#send-invoice-wrapper').html());
    return $('#invoice-print').append($btnSend);
  };
  return $(document).ready(function($) {
    if ($('.node-type-room').length) {
      $('#room-feature-no-include #features').on('click', 'li', selectFeature);
      $('input[name=contract-duration]').on('change', resetFeature);
      $('#contract-duration').buttonset();
    }
    if ($('.view-rooms, .view-house-room-list').length) {
      $('.views-field-field-images').live('hover', function() {
        return $(this).find('.description').toggleClass('display');
      });
    }
    if ($('.view-id-page_home .views-row').length) {
      $('.views-field-field-images').live('hover', function() {
        return $(this).find('.description').toggleClass('display');
      });
    }
    if ($('#block-phongdep-room-search').length) {
      $('#area_op').on('change', toggleInputs);
      $('#price_op').on('change', toggleInputs);
    }
    if ($('.node-type-invoice').length) {
      return $('#btn-send-invoice').on('click', openMailForm);
    }
    $('li.menu-893 a').append('<img src="/sites/all/themes/phongdep/images/icon_1.png" />');
    $('li.menu-894 a').append('<img src="/sites/all/themes/phongdep/images/icon_home.png" />');
    $('li.menu-656 a').append('<img src="/sites/all/themes/phongdep/images/icon_2.png" />');
  });
})(jQuery);;
var Chart=function(s){function v(a,c,b){a=A((a-c.graphMin)/(c.steps*c.stepValue),1,0);return b*c.steps*a}function x(a,c,b,e){function h(){g+=f;var k=a.animation?A(d(g),null,0):1;e.clearRect(0,0,q,u);a.scaleOverlay?(b(k),c()):(c(),b(k));if(1>=g)D(h);else if("function"==typeof a.onAnimationComplete)a.onAnimationComplete()}var f=a.animation?1/A(a.animationSteps,Number.MAX_VALUE,1):1,d=B[a.animationEasing],g=a.animation?0:1;"function"!==typeof c&&(c=function(){});D(h)}function C(a,c,b,e,h,f){var d;a=
Math.floor(Math.log(e-h)/Math.LN10);h=Math.floor(h/(1*Math.pow(10,a)))*Math.pow(10,a);e=Math.ceil(e/(1*Math.pow(10,a)))*Math.pow(10,a)-h;a=Math.pow(10,a);for(d=Math.round(e/a);d<b||d>c;)a=d<b?a/2:2*a,d=Math.round(e/a);c=[];z(f,c,d,h,a);return{steps:d,stepValue:a,graphMin:h,labels:c}}function z(a,c,b,e,h){if(a)for(var f=1;f<b+1;f++)c.push(E(a,{value:(e+h*f).toFixed(0!=h%1?h.toString().split(".")[1].length:0)}))}function A(a,c,b){return!isNaN(parseFloat(c))&&isFinite(c)&&a>c?c:!isNaN(parseFloat(b))&&
isFinite(b)&&a<b?b:a}function y(a,c){var b={},e;for(e in a)b[e]=a[e];for(e in c)b[e]=c[e];return b}function E(a,c){var b=!/\W/.test(a)?F[a]=F[a]||E(document.getElementById(a).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return c?
b(c):b}var r=this,B={linear:function(a){return a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return-1*a*(a-2)},easeInOutQuad:function(a){return 1>(a/=0.5)?0.5*a*a:-0.5*(--a*(a-2)-1)},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return 1*((a=a/1-1)*a*a+1)},easeInOutCubic:function(a){return 1>(a/=0.5)?0.5*a*a*a:0.5*((a-=2)*a*a+2)},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return-1*((a=a/1-1)*a*a*a-1)},easeInOutQuart:function(a){return 1>(a/=0.5)?
0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)},easeInQuint:function(a){return 1*(a/=1)*a*a*a*a},easeOutQuint:function(a){return 1*((a=a/1-1)*a*a*a*a+1)},easeInOutQuint:function(a){return 1>(a/=0.5)?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)},easeInSine:function(a){return-1*Math.cos(a/1*(Math.PI/2))+1},easeOutSine:function(a){return 1*Math.sin(a/1*(Math.PI/2))},easeInOutSine:function(a){return-0.5*(Math.cos(Math.PI*a/1)-1)},easeInExpo:function(a){return 0==a?1:1*Math.pow(2,10*(a/1-1))},easeOutExpo:function(a){return 1==
a?1:1*(-Math.pow(2,-10*a/1)+1)},easeInOutExpo:function(a){return 0==a?0:1==a?1:1>(a/=0.5)?0.5*Math.pow(2,10*(a-1)):0.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return 1<=a?a:-1*(Math.sqrt(1-(a/=1)*a)-1)},easeOutCirc:function(a){return 1*Math.sqrt(1-(a=a/1-1)*a)},easeInOutCirc:function(a){return 1>(a/=0.5)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)},easeInElastic:function(a){var c=1.70158,b=0,e=1;if(0==a)return 0;if(1==(a/=1))return 1;b||(b=0.3);e<Math.abs(1)?(e=1,c=b/4):c=b/(2*
Math.PI)*Math.asin(1/e);return-(e*Math.pow(2,10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b))},easeOutElastic:function(a){var c=1.70158,b=0,e=1;if(0==a)return 0;if(1==(a/=1))return 1;b||(b=0.3);e<Math.abs(1)?(e=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/e);return e*Math.pow(2,-10*a)*Math.sin((1*a-c)*2*Math.PI/b)+1},easeInOutElastic:function(a){var c=1.70158,b=0,e=1;if(0==a)return 0;if(2==(a/=0.5))return 1;b||(b=1*0.3*1.5);e<Math.abs(1)?(e=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/e);return 1>a?-0.5*e*Math.pow(2,10*
(a-=1))*Math.sin((1*a-c)*2*Math.PI/b):0.5*e*Math.pow(2,-10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b)+1},easeInBack:function(a){return 1*(a/=1)*a*(2.70158*a-1.70158)},easeOutBack:function(a){return 1*((a=a/1-1)*a*(2.70158*a+1.70158)+1)},easeInOutBack:function(a){var c=1.70158;return 1>(a/=0.5)?0.5*a*a*(((c*=1.525)+1)*a-c):0.5*((a-=2)*a*(((c*=1.525)+1)*a+c)+2)},easeInBounce:function(a){return 1-B.easeOutBounce(1-a)},easeOutBounce:function(a){return(a/=1)<1/2.75?1*7.5625*a*a:a<2/2.75?1*(7.5625*(a-=1.5/2.75)*
a+0.75):a<2.5/2.75?1*(7.5625*(a-=2.25/2.75)*a+0.9375):1*(7.5625*(a-=2.625/2.75)*a+0.984375)},easeInOutBounce:function(a){return 0.5>a?0.5*B.easeInBounce(2*a):0.5*B.easeOutBounce(2*a-1)+0.5}},q=s.canvas.width,u=s.canvas.height;window.devicePixelRatio&&(s.canvas.style.width=q+"px",s.canvas.style.height=u+"px",s.canvas.height=u*window.devicePixelRatio,s.canvas.width=q*window.devicePixelRatio,s.scale(window.devicePixelRatio,window.devicePixelRatio));this.PolarArea=function(a,c){r.PolarArea.defaults={scaleOverlay:!0,
scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",
animateRotate:!0,animateScale:!1,onAnimationComplete:null};var b=c?y(r.PolarArea.defaults,c):r.PolarArea.defaults;return new G(a,b,s)};this.Radar=function(a,c){r.Radar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",
scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var b=c?y(r.Radar.defaults,c):r.Radar.defaults;return new H(a,b,s)};this.Pie=function(a,
c){r.Pie.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var b=c?y(r.Pie.defaults,c):r.Pie.defaults;return new I(a,b,s)};this.Doughnut=function(a,c){r.Doughnut.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,
onAnimationComplete:null};var b=c?y(r.Doughnut.defaults,c):r.Doughnut.defaults;return new J(a,b,s)};this.Line=function(a,c){r.Line.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,
pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var b=c?y(r.Line.defaults,c):r.Line.defaults;return new K(a,b,s)};this.Bar=function(a,c){r.Bar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",
scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var b=c?y(r.Bar.defaults,c):r.Bar.defaults;return new L(a,b,s)};var G=function(a,c,b){var e,h,f,d,g,k,j,l,m;g=Math.min.apply(Math,[q,u])/2;g-=Math.max.apply(Math,[0.5*c.scaleFontSize,0.5*c.scaleLineWidth]);
d=2*c.scaleFontSize;c.scaleShowLabelBackdrop&&(d+=2*c.scaleBackdropPaddingY,g-=1.5*c.scaleBackdropPaddingY);l=g;d=d?d:5;e=Number.MIN_VALUE;h=Number.MAX_VALUE;for(f=0;f<a.length;f++)a[f].value>e&&(e=a[f].value),a[f].value<h&&(h=a[f].value);f=Math.floor(l/(0.66*d));d=Math.floor(0.5*(l/d));m=c.scaleShowLabels?c.scaleLabel:null;c.scaleOverride?(j={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},z(m,j.labels,j.steps,c.scaleStartValue,c.scaleStepWidth)):j=C(l,f,d,e,h,
m);k=g/j.steps;x(c,function(){for(var a=0;a<j.steps;a++)if(c.scaleShowLine&&(b.beginPath(),b.arc(q/2,u/2,k*(a+1),0,2*Math.PI,!0),b.strokeStyle=c.scaleLineColor,b.lineWidth=c.scaleLineWidth,b.stroke()),c.scaleShowLabels){b.textAlign="center";b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;var e=j.labels[a];if(c.scaleShowLabelBackdrop){var d=b.measureText(e).width;b.fillStyle=c.scaleBackdropColor;b.beginPath();b.rect(Math.round(q/2-d/2-c.scaleBackdropPaddingX),Math.round(u/2-k*(a+
1)-0.5*c.scaleFontSize-c.scaleBackdropPaddingY),Math.round(d+2*c.scaleBackdropPaddingX),Math.round(c.scaleFontSize+2*c.scaleBackdropPaddingY));b.fill()}b.textBaseline="middle";b.fillStyle=c.scaleFontColor;b.fillText(e,q/2,u/2-k*(a+1))}},function(e){var d=-Math.PI/2,g=2*Math.PI/a.length,f=1,h=1;c.animation&&(c.animateScale&&(f=e),c.animateRotate&&(h=e));for(e=0;e<a.length;e++)b.beginPath(),b.arc(q/2,u/2,f*v(a[e].value,j,k),d,d+h*g,!1),b.lineTo(q/2,u/2),b.closePath(),b.fillStyle=a[e].color,b.fill(),
c.segmentShowStroke&&(b.strokeStyle=c.segmentStrokeColor,b.lineWidth=c.segmentStrokeWidth,b.stroke()),d+=h*g},b)},H=function(a,c,b){var e,h,f,d,g,k,j,l,m;a.labels||(a.labels=[]);g=Math.min.apply(Math,[q,u])/2;d=2*c.scaleFontSize;for(e=l=0;e<a.labels.length;e++)b.font=c.pointLabelFontStyle+" "+c.pointLabelFontSize+"px "+c.pointLabelFontFamily,h=b.measureText(a.labels[e]).width,h>l&&(l=h);g-=Math.max.apply(Math,[l,1.5*(c.pointLabelFontSize/2)]);g-=c.pointLabelFontSize;l=g=A(g,null,0);d=d?d:5;e=Number.MIN_VALUE;
h=Number.MAX_VALUE;for(f=0;f<a.datasets.length;f++)for(m=0;m<a.datasets[f].data.length;m++)a.datasets[f].data[m]>e&&(e=a.datasets[f].data[m]),a.datasets[f].data[m]<h&&(h=a.datasets[f].data[m]);f=Math.floor(l/(0.66*d));d=Math.floor(0.5*(l/d));m=c.scaleShowLabels?c.scaleLabel:null;c.scaleOverride?(j={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},z(m,j.labels,j.steps,c.scaleStartValue,c.scaleStepWidth)):j=C(l,f,d,e,h,m);k=g/j.steps;x(c,function(){var e=2*Math.PI/
a.datasets[0].data.length;b.save();b.translate(q/2,u/2);if(c.angleShowLineOut){b.strokeStyle=c.angleLineColor;b.lineWidth=c.angleLineWidth;for(var d=0;d<a.datasets[0].data.length;d++)b.rotate(e),b.beginPath(),b.moveTo(0,0),b.lineTo(0,-g),b.stroke()}for(d=0;d<j.steps;d++){b.beginPath();if(c.scaleShowLine){b.strokeStyle=c.scaleLineColor;b.lineWidth=c.scaleLineWidth;b.moveTo(0,-k*(d+1));for(var f=0;f<a.datasets[0].data.length;f++)b.rotate(e),b.lineTo(0,-k*(d+1));b.closePath();b.stroke()}c.scaleShowLabels&&
(b.textAlign="center",b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily,b.textBaseline="middle",c.scaleShowLabelBackdrop&&(f=b.measureText(j.labels[d]).width,b.fillStyle=c.scaleBackdropColor,b.beginPath(),b.rect(Math.round(-f/2-c.scaleBackdropPaddingX),Math.round(-k*(d+1)-0.5*c.scaleFontSize-c.scaleBackdropPaddingY),Math.round(f+2*c.scaleBackdropPaddingX),Math.round(c.scaleFontSize+2*c.scaleBackdropPaddingY)),b.fill()),b.fillStyle=c.scaleFontColor,b.fillText(j.labels[d],0,-k*(d+
1)))}for(d=0;d<a.labels.length;d++){b.font=c.pointLabelFontStyle+" "+c.pointLabelFontSize+"px "+c.pointLabelFontFamily;b.fillStyle=c.pointLabelFontColor;var f=Math.sin(e*d)*(g+c.pointLabelFontSize),h=Math.cos(e*d)*(g+c.pointLabelFontSize);b.textAlign=e*d==Math.PI||0==e*d?"center":e*d>Math.PI?"right":"left";b.textBaseline="middle";b.fillText(a.labels[d],f,-h)}b.restore()},function(d){var e=2*Math.PI/a.datasets[0].data.length;b.save();b.translate(q/2,u/2);for(var g=0;g<a.datasets.length;g++){b.beginPath();
b.moveTo(0,d*-1*v(a.datasets[g].data[0],j,k));for(var f=1;f<a.datasets[g].data.length;f++)b.rotate(e),b.lineTo(0,d*-1*v(a.datasets[g].data[f],j,k));b.closePath();b.fillStyle=a.datasets[g].fillColor;b.strokeStyle=a.datasets[g].strokeColor;b.lineWidth=c.datasetStrokeWidth;b.fill();b.stroke();if(c.pointDot){b.fillStyle=a.datasets[g].pointColor;b.strokeStyle=a.datasets[g].pointStrokeColor;b.lineWidth=c.pointDotStrokeWidth;for(f=0;f<a.datasets[g].data.length;f++)b.rotate(e),b.beginPath(),b.arc(0,d*-1*
v(a.datasets[g].data[f],j,k),c.pointDotRadius,2*Math.PI,!1),b.fill(),b.stroke()}b.rotate(e)}b.restore()},b)},I=function(a,c,b){for(var e=0,h=Math.min.apply(Math,[u/2,q/2])-5,f=0;f<a.length;f++)e+=a[f].value;x(c,null,function(d){var g=-Math.PI/2,f=1,j=1;c.animation&&(c.animateScale&&(f=d),c.animateRotate&&(j=d));for(d=0;d<a.length;d++){var l=j*a[d].value/e*2*Math.PI;b.beginPath();b.arc(q/2,u/2,f*h,g,g+l);b.lineTo(q/2,u/2);b.closePath();b.fillStyle=a[d].color;b.fill();c.segmentShowStroke&&(b.lineWidth=
c.segmentStrokeWidth,b.strokeStyle=c.segmentStrokeColor,b.stroke());g+=l}},b)},J=function(a,c,b){for(var e=0,h=Math.min.apply(Math,[u/2,q/2])-5,f=h*(c.percentageInnerCutout/100),d=0;d<a.length;d++)e+=a[d].value;x(c,null,function(d){var k=-Math.PI/2,j=1,l=1;c.animation&&(c.animateScale&&(j=d),c.animateRotate&&(l=d));for(d=0;d<a.length;d++){var m=l*a[d].value/e*2*Math.PI;b.beginPath();b.arc(q/2,u/2,j*h,k,k+m,!1);b.arc(q/2,u/2,j*f,k+m,k,!0);b.closePath();b.fillStyle=a[d].color;b.fill();c.segmentShowStroke&&
(b.lineWidth=c.segmentStrokeWidth,b.strokeStyle=c.segmentStrokeColor,b.stroke());k+=m}},b)},K=function(a,c,b){var e,h,f,d,g,k,j,l,m,t,r,n,p,s=0;g=u;b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;t=1;for(d=0;d<a.labels.length;d++)e=b.measureText(a.labels[d]).width,t=e>t?e:t;q/a.labels.length<t?(s=45,q/a.labels.length<Math.cos(s)*t?(s=90,g-=t):g-=Math.sin(s)*t):g-=c.scaleFontSize;d=c.scaleFontSize;g=g-5-d;e=Number.MIN_VALUE;h=Number.MAX_VALUE;for(f=0;f<a.datasets.length;f++)for(l=
0;l<a.datasets[f].data.length;l++)a.datasets[f].data[l]>e&&(e=a.datasets[f].data[l]),a.datasets[f].data[l]<h&&(h=a.datasets[f].data[l]);f=Math.floor(g/(0.66*d));d=Math.floor(0.5*(g/d));l=c.scaleShowLabels?c.scaleLabel:"";c.scaleOverride?(j={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},z(l,j.labels,j.steps,c.scaleStartValue,c.scaleStepWidth)):j=C(g,f,d,e,h,l);k=Math.floor(g/j.steps);d=1;if(c.scaleShowLabels){b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;
for(e=0;e<j.labels.length;e++)h=b.measureText(j.labels[e]).width,d=h>d?h:d;d+=10}r=q-d-t;m=Math.floor(r/(a.labels.length-1));n=q-t/2-r;p=g+c.scaleFontSize/2;x(c,function(){b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(q-t/2+5,p);b.lineTo(q-t/2-r-5,p);b.stroke();0<s?(b.save(),b.textAlign="right"):b.textAlign="center";b.fillStyle=c.scaleFontColor;for(var d=0;d<a.labels.length;d++)b.save(),0<s?(b.translate(n+d*m,p+c.scaleFontSize),b.rotate(-(s*(Math.PI/180))),b.fillText(a.labels[d],
0,0),b.restore()):b.fillText(a.labels[d],n+d*m,p+c.scaleFontSize+3),b.beginPath(),b.moveTo(n+d*m,p+3),c.scaleShowGridLines&&0<d?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(n+d*m,5)):b.lineTo(n+d*m,p+3),b.stroke();b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(n,p+5);b.lineTo(n,5);b.stroke();b.textAlign="right";b.textBaseline="middle";for(d=0;d<j.steps;d++)b.beginPath(),b.moveTo(n-3,p-(d+1)*k),c.scaleShowGridLines?(b.lineWidth=c.scaleGridLineWidth,
b.strokeStyle=c.scaleGridLineColor,b.lineTo(n+r+5,p-(d+1)*k)):b.lineTo(n-0.5,p-(d+1)*k),b.stroke(),c.scaleShowLabels&&b.fillText(j.labels[d],n-8,p-(d+1)*k)},function(d){function e(b,c){return p-d*v(a.datasets[b].data[c],j,k)}for(var f=0;f<a.datasets.length;f++){b.strokeStyle=a.datasets[f].strokeColor;b.lineWidth=c.datasetStrokeWidth;b.beginPath();b.moveTo(n,p-d*v(a.datasets[f].data[0],j,k));for(var g=1;g<a.datasets[f].data.length;g++)c.bezierCurve?b.bezierCurveTo(n+m*(g-0.5),e(f,g-1),n+m*(g-0.5),
e(f,g),n+m*g,e(f,g)):b.lineTo(n+m*g,e(f,g));b.stroke();c.datasetFill?(b.lineTo(n+m*(a.datasets[f].data.length-1),p),b.lineTo(n,p),b.closePath(),b.fillStyle=a.datasets[f].fillColor,b.fill()):b.closePath();if(c.pointDot){b.fillStyle=a.datasets[f].pointColor;b.strokeStyle=a.datasets[f].pointStrokeColor;b.lineWidth=c.pointDotStrokeWidth;for(g=0;g<a.datasets[f].data.length;g++)b.beginPath(),b.arc(n+m*g,p-d*v(a.datasets[f].data[g],j,k),c.pointDotRadius,0,2*Math.PI,!0),b.fill(),b.stroke()}}},b)},L=function(a,
c,b){var e,h,f,d,g,k,j,l,m,t,r,n,p,s,w=0;g=u;b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;t=1;for(d=0;d<a.labels.length;d++)e=b.measureText(a.labels[d]).width,t=e>t?e:t;q/a.labels.length<t?(w=45,q/a.labels.length<Math.cos(w)*t?(w=90,g-=t):g-=Math.sin(w)*t):g-=c.scaleFontSize;d=c.scaleFontSize;g=g-5-d;e=Number.MIN_VALUE;h=Number.MAX_VALUE;for(f=0;f<a.datasets.length;f++)for(l=0;l<a.datasets[f].data.length;l++)a.datasets[f].data[l]>e&&(e=a.datasets[f].data[l]),a.datasets[f].data[l]<
h&&(h=a.datasets[f].data[l]);f=Math.floor(g/(0.66*d));d=Math.floor(0.5*(g/d));l=c.scaleShowLabels?c.scaleLabel:"";c.scaleOverride?(j={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},z(l,j.labels,j.steps,c.scaleStartValue,c.scaleStepWidth)):j=C(g,f,d,e,h,l);k=Math.floor(g/j.steps);d=1;if(c.scaleShowLabels){b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;for(e=0;e<j.labels.length;e++)h=b.measureText(j.labels[e]).width,d=h>d?h:d;d+=10}r=q-d-t;m=
Math.floor(r/a.labels.length);s=(m-2*c.scaleGridLineWidth-2*c.barValueSpacing-(c.barDatasetSpacing*a.datasets.length-1)-(c.barStrokeWidth/2*a.datasets.length-1))/a.datasets.length;n=q-t/2-r;p=g+c.scaleFontSize/2;x(c,function(){b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(q-t/2+5,p);b.lineTo(q-t/2-r-5,p);b.stroke();0<w?(b.save(),b.textAlign="right"):b.textAlign="center";b.fillStyle=c.scaleFontColor;for(var d=0;d<a.labels.length;d++)b.save(),0<w?(b.translate(n+
d*m,p+c.scaleFontSize),b.rotate(-(w*(Math.PI/180))),b.fillText(a.labels[d],0,0),b.restore()):b.fillText(a.labels[d],n+d*m+m/2,p+c.scaleFontSize+3),b.beginPath(),b.moveTo(n+(d+1)*m,p+3),b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(n+(d+1)*m,5),b.stroke();b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(n,p+5);b.lineTo(n,5);b.stroke();b.textAlign="right";b.textBaseline="middle";for(d=0;d<j.steps;d++)b.beginPath(),b.moveTo(n-3,p-(d+1)*
k),c.scaleShowGridLines?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(n+r+5,p-(d+1)*k)):b.lineTo(n-0.5,p-(d+1)*k),b.stroke(),c.scaleShowLabels&&b.fillText(j.labels[d],n-8,p-(d+1)*k)},function(d){b.lineWidth=c.barStrokeWidth;for(var e=0;e<a.datasets.length;e++){b.fillStyle=a.datasets[e].fillColor;b.strokeStyle=a.datasets[e].strokeColor;for(var f=0;f<a.datasets[e].data.length;f++){var g=n+c.barValueSpacing+m*f+s*e+c.barDatasetSpacing*e+c.barStrokeWidth*e;b.beginPath();
b.moveTo(g,p);b.lineTo(g,p-d*v(a.datasets[e].data[f],j,k)+c.barStrokeWidth/2);b.lineTo(g+s,p-d*v(a.datasets[e].data[f],j,k)+c.barStrokeWidth/2);b.lineTo(g+s,p);c.barShowStroke&&b.stroke();b.closePath();b.fill()}}},b)},D=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)},F={}};;
/*
 CanvasJS HTML5 & JavaScript Charts - v1.5.1 GA - http://canvasjs.com/ 
 Copyright 2013 fenopix
*/
(function(){function N(a,b){a.prototype=za(b.prototype);a.prototype.constructor=a;a.parent=b.prototype}function za(a){function b(){}b.prototype=a;return new b}function oa(a,b,c){"millisecond"===c?a.setMilliseconds(a.getMilliseconds()+1*b):"second"===c?a.setSeconds(a.getSeconds()+1*b):"minute"===c?a.setMinutes(a.getMinutes()+1*b):"hour"===c?a.setHours(a.getHours()+1*b):"day"===c?a.setDate(a.getDate()+1*b):"week"===c?a.setDate(a.getDate()+7*b):"month"===c?a.setMonth(a.getMonth()+1*b):"year"===c&&a.setFullYear(a.getFullYear()+
1*b);return a}function X(a,b){return y[b+"Duration"]*a}function J(a,b){var c=!1;0>a&&(c=!0,a*=-1);a=""+a;for(b=b?b:1;a.length<b;)a="0"+a;return c?"-"+a:a}function Y(a){if(!a)return a;a=a.replace(/^\s\s*/,"");for(var b=/\s/,c=a.length;b.test(a.charAt(--c)););return a.slice(0,c+1)}function Aa(a){a.roundRect=function(a,c,d,e,f,g,l,p){l&&(this.fillStyle=l);p&&(this.strokeStyle=p);"undefined"===typeof f&&(f=5);this.lineWidth=g;this.beginPath();this.moveTo(a+f,c);this.lineTo(a+d-f,c);this.quadraticCurveTo(a+
d,c,a+d,c+f);this.lineTo(a+d,c+e-f);this.quadraticCurveTo(a+d,c+e,a+d-f,c+e);this.lineTo(a+f,c+e);this.quadraticCurveTo(a,c+e,a,c+e-f);this.lineTo(a,c+f);this.quadraticCurveTo(a,c,a+f,c);this.closePath();l&&this.fill();p&&0<g&&this.stroke()}}function pa(a,b){return a-b}function Ba(a,b){return a.x-b.x}function A(a){var b=((a&16711680)>>16).toString(16),c=((a&65280)>>8).toString(16);a=((a&255)>>0).toString(16);b=2>b.length?"0"+b:b;c=2>c.length?"0"+c:c;a=2>a.length?"0"+a:a;return"#"+b+c+a}function ba(a,
b,c){c=c||"normal";var d=a+"_"+b+"_"+c,e=qa[d];if(isNaN(e)){try{a="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+a+"; font-size:"+b+"px; font-weight:"+c+";";if(!P){var f=document.body;P=document.createElement("span");P.innerHTML="";var g=document.createTextNode("Mpgyi");P.appendChild(g);f.appendChild(P)}P.style.display="";P.setAttribute("style",a);e=Math.round(P.offsetHeight);P.style.display="none"}catch(l){e=Math.ceil(1.1*
b)}e=Math.max(e,b);qa[d]=e}return e}function F(a,b,c,d){if(a.addEventListener)a.addEventListener(b,c,d||!1);else if(a.attachEvent)a.attachEvent("on"+b,function(b){b=b||window.event;b.preventDefault=b.preventDefault||function(){b.returnValue=!1};b.stopPropagation=b.stopPropagation||function(){b.cancelBubble=!0};c.call(a,b)});else return!1}function ra(a,b,c){a*=Q;b*=Q;a=c.getImageData(a,b,2,2).data;b=!0;for(c=0;4>c;c++)if(a[c]!==a[c+4]|a[c]!==a[c+8]|a[c]!==a[c+12]){b=!1;break}return b?a[0]<<16|a[1]<<
8|a[2]:0}function sa(a,b,c){var d;d=a?a+"FontStyle":"fontStyle";var e=a?a+"FontWeight":"fontWeight",f=a?a+"FontSize":"fontSize";a=a?a+"FontFamily":"fontFamily";d=""+(b[d]?b[d]+" ":c&&c[d]?c[d]+" ":"");d+=b[e]?b[e]+" ":c&&c[e]?c[e]+" ":"";d+=b[f]?b[f]+"px ":c&&c[f]?c[f]+"px ":"";b=b[a]?b[a]+"":c&&c[a]?c[a]+"":"";!v&&b&&(b=b.split(",")[0],"'"!==b[0]&&'"'!==b[0]&&(b="'"+b+"'"));return d+=b}function R(a,b,c){return a in b?b[a]:c[a]}function ca(a,b,c){if(v&&ta){var d=a.getContext("2d");da=d.webkitBackingStorePixelRatio||
d.mozBackingStorePixelRatio||d.msBackingStorePixelRatio||d.oBackingStorePixelRatio||d.backingStorePixelRatio||1;Q=ja/da;a.width=b*Q;a.height=c*Q;ja!==da&&(a.style.width=b+"px",a.style.height=c+"px",d.scale(Q,Q))}else a.width=b,a.height=c}function ea(a,b){var c=document.createElement("canvas");c.setAttribute("class","canvasjs-chart-canvas");ca(c,a,b);v||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(c);return c}function ua(a,b,c){if(a&&b&&c){c=c+"."+("jpeg"===b?"jpg":b);var d=
"image/"+b;a=a.toDataURL(d);var e=!1,f=document.createElement("a");f.download=c;f.href=a;f.target="_blank";if(new Blob){for(var g=a.replace(/^data:[a-z/]*;base64,/,""),g=atob(g),l=new ArrayBuffer(g.length),p=new Uint8Array(l),h=0;h<g.length;h++)p[h]=g.charCodeAt(h);b=new Blob([l],{type:"image/"+b});try{window.navigator.msSaveBlob(b,c),e=!0}catch(k){f.dataset.downloadurl=[d,f.download,f.href].join(":"),f.href=window.URL.createObjectURL(b)}}if(!e)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",
!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),f.dispatchEvent?f.dispatchEvent(event):f.fireEvent&&f.fireEvent("onclick")}catch(n){b=window.open(),b.document.write("<img src='"+a+"'></img><div>Please right click on the image and save it to your device</div>"),b.document.close()}}}function L(a,b,c){b.getAttribute("state")!==c&&(b.setAttribute("state",c),b.style.position="relative",b.style.margin="0px 0px 0px 0px",b.style.padding="3px 4px 0px 4px",b.style.cssFloat="left",b.setAttribute("title",a._cultureInfo[c+
"Text"]),b.innerHTML="<img style='height:16px;' src='"+Ca[c].image+"' alt='"+a._cultureInfo[c+"Text"]+"' />")}function va(){for(var a=null,b=0;b<arguments.length;b++)a=arguments[b],a.style&&(a.style.display="inline")}function S(){for(var a=null,b=0;b<arguments.length;b++)a=arguments[b],a.style&&(a.style.display="none")}function K(a,b,c){this._defaultsKey=a;var d={};c&&(U[c]&&U[c][a])&&(d=U[c][a]);this._options=b?b:{};this.setOptions(this._options,d)}function w(a,b,c){this._publicChartReference=c;
b=b||{};w.parent.constructor.call(this,"Chart",b,b.theme?b.theme:"theme1");var d=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this._lastTouchData=null;this.panEnabled=!1;this._defaultCursor="default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};this._dataInRenderedOrder=[];(this._container="string"===typeof this._containerId?document.getElementById(this._containerId):
this._containerId)?(this._container.innerHTML="",b=a=0,a=this._options.width?this.width:0<this._container.clientWidth?this._container.clientWidth:this.width,b=this._options.height?this.height:0<this._container.clientHeight?this._container.clientHeight:this.height,this.width=a,this.height=b,this._selectedColorSet="undefined"!==typeof T[this.colorSet]?T[this.colorSet]:T.colorSet1,this._canvasJSContainer=document.createElement("div"),this._canvasJSContainer.setAttribute("class","canvasjs-chart-container"),
this._canvasJSContainer.style.position="relative",this._canvasJSContainer.style.textAlign="left",this._canvasJSContainer.style.cursor="auto",v||(this._canvasJSContainer.style.height="0px"),this._container.appendChild(this._canvasJSContainer),this.canvas=ea(a,b),this.canvas.style.position="absolute",this.canvas.getContext&&(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",Aa(this.ctx),v?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=
ea(a,b),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=ea(a,b),this.overlaidCanvas.style.position="absolute",this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",this._eventManager=new Z(this),F(window,
"resize",function(){d._updateSize()&&d.render()}),this._toolBar=document.createElement("div"),this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText="position: absolute; right: 2px; top: 0px;",this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},F(this.overlaidCanvas,"click",function(a){d._mouseEventHandler(a)}),F(this.overlaidCanvas,"mousemove",function(a){d._mouseEventHandler(a)}),F(this.overlaidCanvas,"mouseup",
function(a){d._mouseEventHandler(a)}),F(this.overlaidCanvas,"mousedown",function(a){d._mouseEventHandler(a);S(d._dropdownMenu)}),F(this.overlaidCanvas,"mouseout",function(a){d._mouseEventHandler(a)}),F(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(a){d._touchEventHandler(a)}),F(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){d._touchEventHandler(a)}),F(this.overlaidCanvas,window.navigator.msPointerEnabled?
"MSPointerUp":"touchend",function(a){d._touchEventHandler(a)}),F(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){d._touchEventHandler(a)}),this._creditLink||(this._creditLink=document.createElement("a"),this._creditLink.setAttribute("class","canvasjs-chart-credit"),this._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:3px;top:"+(this.height-14)+"px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),
this._creditLink.setAttribute("tabIndex",-1),this._creditLink.setAttribute("target","_blank")),this._toolTip=new M(this,this._options.toolTip,this.theme),this.layoutManager=new $(this),this.axisY2=this.axisY=this.axisX=this.data=null,this.renderCount=0,this.sessionVariables={axisX:{internalMinimum:null,internalMaximum:null},axisY:{internalMinimum:null,internalMaximum:null},axisY2:{internalMinimum:null,internalMaximum:null}})):window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+
this._containerId+'" was not found')}function fa(a,b){for(var c=[],d=0;d<a.length;d++)if(0==d)c.push(a[0]);else{var e,f,g;g=d-1;e=0===g?0:g-1;f=g===a.length-1?g:g+1;c[c.length]={x:a[g].x+(a[f].x-a[e].x)/b/3,y:a[g].y+(a[f].y-a[e].y)/b/3};g=d;e=0===g?0:g-1;f=g===a.length-1?g:g+1;c[c.length]={x:a[g].x-(a[f].x-a[e].x)/b/3,y:a[g].y-(a[f].y-a[e].y)/b/3};c[c.length]=a[d]}return c}function $(a){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=0;this.chart=a}function H(a,b){H.parent.constructor.call(this,
"TextBlock",b);this.ctx=a;this._isDirty=!0;this._wrappedText=null;this._lineHeight=ba(this.fontFamily,this.fontSize,this.fontWeight)}function aa(a,b){aa.parent.constructor.call(this,"Title",b,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function ga(a,b,c){ga.parent.constructor.call(this,"Legend",b,c);
this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.ghostCtx=this.chart._eventManager.ghostCtx;this.items=[];this.height=this.width=0;this.orientation=null;this.horizontalSpacing=10;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.lineHeight=ba(this.fontFamily,this.fontSize,this.fontWeight)}function ka(a,b){ka.parent.constructor.call(this,b);this.chart=a;this.canvas=
a.canvas;this.ctx=this.chart.ctx}function O(a,b,c,d,e){O.parent.constructor.call(this,"DataSeries",b,c);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=d;this.noDataPointsInPlotArea=0;this.id=e;this.chart._eventManager.objectMap[e]={id:e,objectType:"dataSeries",dataSeriesIndex:d};this.dataPointIds=[];this.plotUnit=[];this.axisY=this.axisX=null;null===this.fillOpacity&&(this.type.match(/area/i)?this.fillOpacity=0.7:this.fillOpacity=1);this.axisPlacement=this.getDefaultAxisPlacement();
"undefined"===typeof this._options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function z(a,b,c,d){z.parent.constructor.call(this,"Axis",b,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};"axisX"===c?(this.sessionVariables=this.chart.sessionVariables[c],
this._options.interval||(this.intervalType=null)):this.sessionVariables="left"===d||"top"===d?this.chart.sessionVariables.axisY:this.chart.sessionVariables.axisY2;"undefined"===typeof this._options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this._options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=c;"axisX"!==c||b&&"undefined"!==typeof b.gridThickness||(this.gridThickness=0);this._position=
d;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:180<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:270<this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);if(this._options.stripLines&&0<this._options.stripLines.length)for(this.stripLines=[],b=0;b<this._options.stripLines.length;b++)this.stripLines.push(new la(this.chart,this._options.stripLines[b],a.theme,
++this.chart._eventManager.lastObjectId));this._absoluteMaximum=this._absoluteMinimum=this._titleTextBlock=null;this.hasOptionChanged("minimum")&&(this.sessionVariables.internalMinimum=this.minimum);this.hasOptionChanged("maximum")&&(this.sessionVariables.internalMaximum=this.maximum);this.trackChanges("minimum");this.trackChanges("maximum")}function la(a,b,c,d){la.parent.constructor.call(this,"StripLine",b,c);this._thicknessType="pixel";this.id=d;null!==this.startValue&&null!==this.endValue&&(this.value=
((this.startValue.getTime?this.startValue.getTime():this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this.thickness=Math.max(this.endValue-this.startValue),this._thicknessType="value")}function M(a,b,c){M.parent.constructor.call(this,"ToolTip",b,c);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._timerId=0;this._prevY=this._prevX=NaN;this._initialize()}function Z(a){this.chart=a;this.lastObjectId=
0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCanvas=ea(this.chart.width,this.chart.height);this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function wa(a,b){var c;b&&ma[b]&&(c=ma[b]);aa.parent.constructor.call(this,"CultureInfo",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx}var v=!!document.createElement("canvas").getContext,ha={Chart:{width:500,height:400,zoomEnabled:!1,backgroundColor:"white",
theme:"theme1",animationEnabled:v?!0:!1,colorSet:"colorSet1",culture:"en",creditText:"Thông tin nội bộ của Bigland.vn",interactivityEnabled:!0,exportEnabled:!1,exportFileName:"Chart"},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:5},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",
fontWeight:"normal",fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,itemclick:null},ToolTip:{enabled:!0,borderColor:null,shared:!1,animationEnabled:!0,content:null},Axis:{minimum:null,maximum:null,interval:null,intervalType:null,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",
labelFontStyle:"normal",labelAutoFit:!1,labelWrap:!0,labelMaxWidth:null,prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,gridColor:"A0A0A0",gridThickness:0,interlacedColor:null,valueFormatString:null,margin:2,stripLines:[]},StripLine:{value:null,startValue:null,endValue:null,color:"orange",thickness:2,label:"",labelBackgroundColor:"#EEEEEE",labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal"},
DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,cursor:null,indexLabel:"",indexLabelPlacement:"outside",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:null,indexLabelLineThickness:1,indexLabelMaxWidth:null,indexLabelWrap:!0,lineThickness:2,color:null,risingColor:"white",fillOpacity:null,startAngle:0,type:"column",
xValueType:"number",axisYType:"primary",xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:null,markerBorderThickness:null,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,visible:!0},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",
menuText:"More Options",saveJPGText:"Save as JPG",savePNGText:"Save as PNG",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",
fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"}},ma={en:{}},T={colorSet1:"#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),colorSet2:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},
U={theme1:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,gridThickness:2,
gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:v?"monospace, sans-serif,arial black":"calibri"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineThickness:1}},theme2:{Chart:{colorSet:"colorSet2"},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",
margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:v?"monospace, sans-serif,arial black":"arial",titleFontWeight:"bold",labelFontFamily:v?"monospace, Courier New, Courier":"arial",labelFontSize:16,labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:v?"monospace, sans-serif,arial black":"arial"},DataSeries:{indexLabelFontColor:"grey",
indexLabelFontFamily:v?"Courier New, Courier, monospace":"arial",indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineThickness:1}},theme3:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:v?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:32,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:v?"Verdana, Geneva, Calibri, sans-serif":"calibri",labelFontFamily:v?
"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:2,lineColor:"grey"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:v?"monospace, sans-serif,arial black":"calibri"},DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:v?"Candara, Optima, Calibri, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",
indexLabelLineThickness:2}}},y={numberDuration:1,yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},qa={},P=null,xa=function(){var a=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,b="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),c=
"Sun Mon Tue Wed Thu Fri Sat".split(" "),d="January February March April May June July August September October November December".split(" "),e="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),f=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,g=/[^-+\dA-Z]/g;return function(l,p,h){var k=h?h.days:b,n=h?h.months:d,m=h?h.shortDays:c,r=h?h.shortMonths:e;h="";var q=!1;l=l&&l.getTime?l:l?new Date(l):new Date;
if(isNaN(l))throw SyntaxError("invalid date");"UTC:"===p.slice(0,4)&&(p=p.slice(4),q=!0);h=q?"getUTC":"get";var s=l[h+"Date"](),u=l[h+"Day"](),t=l[h+"Month"](),v=l[h+"FullYear"](),E=l[h+"Hours"](),V=l[h+"Minutes"](),B=l[h+"Seconds"](),w=l[h+"Milliseconds"](),A=q?0:l.getTimezoneOffset();return h=p.replace(a,function(a){switch(a){case "D":return s;case "DD":return J(s,2);case "DDD":return m[u];case "DDDD":return k[u];case "M":return t+1;case "MM":return J(t+1,2);case "MMM":return r[t];case "MMMM":return n[t];
case "Y":return parseInt(String(v).slice(-2));case "YY":return J(String(v).slice(-2),2);case "YYY":return J(String(v).slice(-3),3);case "YYYY":return J(v,4);case "h":return E%12||12;case "hh":return J(E%12||12,2);case "H":return E;case "HH":return J(E,2);case "m":return V;case "mm":return J(V,2);case "s":return B;case "ss":return J(B,2);case "f":return String(w).slice(0,1);case "ff":return J(String(w).slice(0,2),2);case "fff":return J(String(w).slice(0,3),3);case "t":return 12>E?"a":"p";case "tt":return 12>
E?"am":"pm";case "T":return 12>E?"A":"P";case "TT":return 12>E?"AM":"PM";case "K":return q?"UTC":(String(l).match(f)||[""]).pop().replace(g,"");case "z":return(0<A?"-":"+")+Math.floor(Math.abs(A)/60);case "zz":return(0<A?"-":"+")+J(Math.floor(Math.abs(A)/60),2);case "zzz":return(0<A?"-":"+")+J(Math.floor(Math.abs(A)/60),2)+J(Math.abs(A)%60,2);default:return a.slice(1,a.length-1)}})}}(),W=function(a,b,c){if(null===a)return"";a=Number(a);var d=0>a?!0:!1;d&&(a*=-1);var e=c?c.decimalSeparator:".",f=c?
c.digitGroupSeparator:",",g="";b=String(b);var g=1,l=c="",p=-1,h=[],k=[],n=0,m=0,r=0,q=!1,s=0,l=b.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);b=null;for(var u=0;l&&u<l.length;u++)if(b=l[u],"."===b&&0>p)p=u;else{if("%"===b)g*=100;else if("\u2030"===b){g*=1E3;continue}else if(","===b[0]&&"."===b[b.length-1]){g/=Math.pow(1E3,b.length-1);p=u+b.length-1;continue}else"E"!==b[0]&&"e"!==b[0]||"0"!==b[b.length-1]||(q=!0);0>p?(h.push(b),"#"===b||"0"===b?n++:","===b&&r++):(k.push(b),"#"!==b&&"0"!==
b||m++)}q&&(b=Math.floor(a),s=(0===b?"":String(b)).length-n,g/=Math.pow(10,s));0>p&&(p=u);g=(a*g).toFixed(m);b=g.split(".");g=(b[0]+"").split("");a=(b[1]+"").split("");g&&"0"===g[0]&&g.shift();for(u=q=l=m=p=0;0<h.length;)if(b=h.pop(),"#"===b||"0"===b)if(p++,p===n){var t=g,g=[];if("0"===b)for(b=n-m-(t?t.length:0);0<b;)t.unshift("0"),b--;for(;0<t.length;)c=t.pop()+c,u++,0===u%q&&(l===r&&0<t.length)&&(c=f+c);d&&(c="-"+c)}else 0<g.length?(c=g.pop()+c,m++,u++):"0"===b&&(c="0"+c,m++,u++),0===u%q&&(l===
r&&0<g.length)&&(c=f+c);else"E"!==b[0]&&"e"!==b[0]||"0"!==b[b.length-1]||!/[eE][+-]*[0]+/.test(b)?","===b?(l++,q=u,u=0,0<g.length&&(c=f+c)):c=1<b.length&&('"'===b[0]&&'"'===b[b.length-1]||"'"===b[0]&&"'"===b[b.length-1])?b.slice(1,b.length-1)+c:b+c:(b=0>s?b.replace("+","").replace("-",""):b.replace("-",""),c+=b.replace(/[0]+/,function(a){return J(s,a.length)}));d="";for(f=!1;0<k.length;)b=k.shift(),"#"===b||"0"===b?0<a.length&&0!==Number(a.join(""))?(d+=a.shift(),f=!0):"0"===b&&(d+="0",f=!0):1<b.length&&
('"'===b[0]&&'"'===b[b.length-1]||"'"===b[0]&&"'"===b[b.length-1])?d+=b.slice(1,b.length-1):"E"!==b[0]&&"e"!==b[0]||"0"!==b[b.length-1]||!/[eE][+-]*[0]+/.test(b)?d+=b:(b=0>s?b.replace("+","").replace("-",""):b.replace("-",""),d+=b.replace(/[0]+/,function(a){return J(s,a.length)}));return c+((f?e:"")+d)},ia=function(a){var b=0,c=0;a=a||window.event;a.offsetX||0===a.offsetX?(b=a.offsetX,c=a.offsetY):a.layerX||0==a.layerX?(b=a.layerX,c=a.layerY):(b=a.pageX-a.target.offsetLeft,c=a.pageY-a.target.offsetTop);
return{x:b,y:c}},ta=!0,ja=window.devicePixelRatio||1,da=1,Q=ta?ja/da:1,Ca={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="},
pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="},
zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="},
menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"}};K.prototype.setOptions=function(a,b){if(ha[this._defaultsKey]){var c=ha[this._defaultsKey],d;for(d in c)this[d]=a&&d in a?a[d]:b&&d in b?b[d]:c[d]}};K.prototype.updateOption=
function(a){var b=ha[this._defaultsKey],c=this._options.theme?this._options.theme:this.chart&&this.chart._options.theme?this.chart._options.theme:"theme1",d={},e=this[a];c&&(U[c]&&U[c][this._defaultsKey])&&(d=U[c][this._defaultsKey]);a in b&&(e=a in this._options?this._options[a]:d&&a in d?d[a]:b[a]);if(e===this[a])return!1;this[a]=e;return!0};K.prototype.trackChanges=function(a){this._options._oldOptions||(this._options._oldOptions={});this._options._oldOptions[a]=this._options[a]};K.prototype.isBeingTracked=
function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]?!0:!1};K.prototype.hasOptionChanged=function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]!==this._options[a]};N(w,K);w.prototype._updateOptions=function(){var a=this;this.updateOption("width");this.updateOption("height");this.updateOption("theme");this.updateOption("colorSet")&&(this._selectedColorSet="undefined"!==typeof T[this.colorSet]?T[this.colorSet]:
T.colorSet1);this.updateOption("backgroundColor");this.backgroundColor||(this.backgroundColor="rgba(0,0,0,0)");this.updateOption("culture");this._cultureInfo=new wa(this,this._options.culture);this.updateOption("animationEnabled");this._options.zoomEnabled?(this._zoomButton||(S(this._zoomButton=document.createElement("button")),L(this,this._zoomButton,"pan"),this._toolBar.appendChild(this._zoomButton),F(this._zoomButton,"click",function(){a.zoomEnabled?(a.zoomEnabled=!1,a.panEnabled=!0,L(a,a._zoomButton,
"zoom")):(a.zoomEnabled=!0,a.panEnabled=!1,L(a,a._zoomButton,"pan"));a.render()})),this._resetButton||(S(this._resetButton=document.createElement("button")),L(this,this._resetButton,"reset"),this._toolBar.appendChild(this._resetButton),F(this._resetButton,"click",function(){a._toolTip.hide();a.zoomEnabled||a.panEnabled?(a.zoomEnabled=!0,a.panEnabled=!1,L(a,a._zoomButton,"pan"),a._defaultCursor="default",a.overlaidCanvas.style.cursor=a._defaultCursor):(a.zoomEnabled=!1,a.panEnabled=!1);a.sessionVariables.axisX.internalMinimum=
a._options.axisX&&a._options.axisX.minimum?a._options.axisX.minimum:null;a.sessionVariables.axisX.internalMaximum=a._options.axisX&&a._options.axisX.maximum?a._options.axisX.maximum:null;a.resetOverlayedCanvas();S(a._zoomButton,a._resetButton);a.render()}),this.overlaidCanvas.style.cursor=a._defaultCursor),this.zoomEnabled||this.panEnabled||(this._zoomButton?(a._zoomButton.getAttribute("state")===a._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=
!1),va(a._zoomButton,a._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))):this.panEnabled=this.zoomEnabled=!1;this.exportEnabled&&(v&&!this._menuButton)&&(this._menuButton=document.createElement("button"),L(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),F(this._menuButton,"click",function(){"none"!==a._dropdownMenu.style.display||a._dropDownCloseTime&&500>=(new Date).getTime()-a._dropDownCloseTime.getTime()||(a._dropdownMenu.style.display="block",a._menuButton.blur(),
a._dropdownMenu.focus())},!0));if(!this._exportMenu){this._dropdownMenu=document.createElement("div");this._dropdownMenu.setAttribute("tabindex",-1);this._dropdownMenu.style.cssText="position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
a._dropdownMenu.style.display="none";this._toolBar.appendChild(this._dropdownMenu);F(this._dropdownMenu,"blur",function(){S(a._dropdownMenu);a._dropDownCloseTime=new Date},!0);var b=document.createElement("div");b.style.cssText="padding: 2px 15px 2px 10px";b.innerHTML=this._cultureInfo.saveJPGText;this._dropdownMenu.appendChild(b);F(b,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);F(b,"mouseout",function(){this.style.backgroundColor="transparent"},!0);F(b,"click",function(){ua(a.canvas,
"jpg",a.exportFileName);S(a._dropdownMenu)},!0);b=document.createElement("div");b.style.cssText="padding: 2px 15px 2px 10px";b.innerHTML=this._cultureInfo.savePNGText;this._dropdownMenu.appendChild(b);F(b,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);F(b,"mouseout",function(){this.style.backgroundColor="transparent"},!0);F(b,"click",function(){ua(a.canvas,"png",a.exportFileName);S(a._dropdownMenu)},!0)}"none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?L(a,
a._zoomButton,"zoom"):L(a,a._zoomButton,"pan"),a._resetButton.getAttribute("state")!==a._cultureInfo.resetText&&L(a,a._resetButton,"reset"));if("undefined"===typeof ha.Chart.creditHref)this.creditHref="http://canvasjs.com/",this.creditText="Thông tin nội bộ Bigland.vn";else var c=this.updateOption("creditText"),d=this.updateOption("creditHref");if(0===this.renderCount||c||d)this._creditLink.setAttribute("href",this.creditHref),this._creditLink.innerHTML=this.creditText;this.creditHref&&this.creditText?this._creditLink.parentElement||
this._canvasJSContainer.appendChild(this._creditLink):this._creditLink.parentElement&&this._canvasJSContainer.removeChild(this._creditLink);this._options.toolTip&&this._toolTip._options!==this._options.toolTip&&(this._toolTip._options=this._options.toolTip);this._toolTip.updateOption("enabled");this._toolTip.updateOption("shared");this._toolTip.updateOption("animationEnabled");this._toolTip.updateOption("borderColor");this._toolTip.updateOption("content")};w.prototype._updateSize=function(){var a=
0,b=0;this._options.width?a=this.width:this.width=a=0<this._container.clientWidth?this._container.clientWidth:this.width;this._options.height?b=this.height:this.height=b=0<this._container.clientHeight?this._container.clientHeight:this.height;return this.canvas.width!==a*Q||this.canvas.height!==b*Q?(ca(this.canvas,a,b),ca(this.overlaidCanvas,a,b),ca(this._eventManager.ghostCanvas,a,b),!0):!1};w.prototype._initialize=function(){this.pieDoughnutClickHandler=null;this.animationRequestId&&this.cancelRequestAnimFrame.call(window,
this.animationRequestId);this._updateOptions();this._updateSize();this.clearCanvas();this.ctx.beginPath();this.axisY2=this.axisY=this.axisX=null;this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]};this.layoutManager.reset();this.data=[];for(var a=0,b=0;b<this._options.data.length;b++)if(a++,!this._options.data[b].type||0<=w._supportedChartTypes.indexOf(this._options.data[b].type)){var c=
new O(this,this._options.data[b],this.theme,a-1,++this._eventManager.lastObjectId);null===c.name&&(c.name="DataSeries "+a);null===c.color?1<this._options.data.length?(c._colorSet=[this._selectedColorSet[c.index%this._selectedColorSet.length]],c.color=this._selectedColorSet[c.index%this._selectedColorSet.length]):c._colorSet="line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||"rangeArea"===
c.type||"rangeSplineArea"===c.type||"candlestick"===c.type||"ohlc"===c.type?[this._selectedColorSet[0]]:this._selectedColorSet:c._colorSet=[c.color];null===c.markerSize&&(("line"===c.type||"stepLine"===c.type||"spline"===c.type)&&c.dataPoints&&c.dataPoints.length<this.width/16||"scatter"===c.type)&&(c.markerSize=8);"bubble"!==c.type&&"scatter"!==c.type||!c.dataPoints||c.dataPoints.sort(Ba);this.data.push(c);var d=c.axisPlacement,e;"normal"===d?"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+
c.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===d?"normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"==d&&("normal"===
this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"));if(e&&window.console){window.console.log(e);return}}this._objectsInitialized=!0};w._supportedChartTypes="line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" ");
w._supportedChartTypes.indexOf||(w._supportedChartTypes.indexOf=function(a,b){var c=this.length>>>0,d=Number(b)||0,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=c);d<c;d++)if(d in this&&this[d]===a)return d;return-1});w.prototype.render=function(a){a&&(this._options=a);this._initialize();for(a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.data[a].axisYType&&"primary"!==this.data[a].axisYType?"secondary"===this.data[a].axisYType&&
(this.axisY2||("normal"===this.plotInfo.axisPlacement?this.axisY2=new z(this,this._options.axisY2,"axisY","right"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY2=new z(this,this._options.axisY2,"axisY","top"))),this.data[a].axisY=this.axisY2):(this.axisY||("normal"===this.plotInfo.axisPlacement?this.axisY=new z(this,this._options.axisY,"axisY","left"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY=new z(this,this._options.axisY,"axisY","bottom"))),this.data[a].axisY=this.axisY),this.axisX||
("normal"===this.plotInfo.axisPlacement?this.axisX=new z(this,this._options.axisX,"axisX","bottom"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisX=new z(this,this._options.axisX,"axisX","left"))),this.data[a].axisX=this.axisX;this._processData();this._options.title&&(this._title=new aa(this,this._options.title),this._title.render());this.legend=new ga(this,this._options.legend,this.theme);for(a=0;a<this.data.length;a++)this.data[a].showInLegend&&this.legend.dataSeries.push(this.data[a]);this.legend.render();
if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.layoutManager.getFreeSpace(),z.setLayoutAndRender(this.axisX,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();else return;for(a=0;a<this.plotInfo.plotTypes.length;a++)for(var b=this.plotInfo.plotTypes[a],c=0;c<b.plotUnits.length;c++){var d=b.plotUnits[c];"line"===d.type?this.renderLine(d):"stepLine"===d.type?
this.renderStepLine(d):"spline"===d.type?this.renderSpline(d):"column"===d.type?this.renderColumn(d):"bar"===d.type?this.renderBar(d):"area"===d.type?this.renderArea(d):"stepArea"===d.type?this.renderStepArea(d):"splineArea"===d.type?this.renderSplineArea(d):"stackedColumn"===d.type?this.renderStackedColumn(d):"stackedColumn100"===d.type?this.renderStackedColumn100(d):"stackedBar"===d.type?this.renderStackedBar(d):"stackedBar100"===d.type?this.renderStackedBar100(d):"stackedArea"===d.type?this.renderStackedArea(d):
"stackedArea100"===d.type?this.renderStackedArea100(d):"bubble"===d.type?this.renderBubble(d):"scatter"===d.type?this.renderScatter(d):"pie"===d.type?this.renderPie(d):"doughnut"===d.type?this.renderPie(d):"candlestick"===d.type?this.renderCandlestick(d):"ohlc"===d.type?this.renderCandlestick(d):"rangeColumn"===d.type?this.renderRangeColumn(d):"rangeBar"===d.type?this.renderRangeBar(d):"rangeArea"===d.type?this.renderRangeArea(d):"rangeSplineArea"===d.type&&this.renderRangeSplineArea(d);for(var e=
0;e<d.dataSeriesIndexes.length;e++)this._dataInRenderedOrder.push(this.data[d.dataSeriesIndexes[e]])}0<this._indexLabels.length&&this.renderIndexLabels();this.attachPlotAreaEventHandlers();this.zoomEnabled||(this.panEnabled||!this._zoomButton||"none"===this._zoomButton.style.display)||S(this._zoomButton,this._resetButton);this._toolTip._updateToolTip();this.renderCount++};w.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,
mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.zoomEnabled?"col-resize":"move",cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};w.prototype.categoriseDataSeries=function(){for(var a="",b=0;b<this.data.length;b++)if(a=this.data[b],a.dataPoints&&(0!==a.dataPoints.length&&a.visible)&&0<=w._supportedChartTypes.indexOf(a.type)){for(var c=null,d=!1,e=null,f=!1,g=0;g<this.plotInfo.plotTypes.length;g++)if(this.plotInfo.plotTypes[g].type===a.type){d=!0;
c=this.plotInfo.plotTypes[g];break}d||(c={type:a.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(c));for(g=0;g<c.plotUnits.length;g++)if(c.plotUnits[g].axisYType===a.axisYType){f=!0;e=c.plotUnits[g];break}f||(e={type:a.type,previousDataSeriesCount:0,index:c.plotUnits.length,plotType:c,axisYType:a.axisYType,axisY:"primary"===a.axisYType?this.axisY:this.axisY2,axisX:this.axisX,dataSeriesIndexes:[],yTotals:[]},c.plotUnits.push(e));c.totalDataSeries++;e.dataSeriesIndexes.push(b);a.plotUnit=
e}for(b=0;b<this.plotInfo.plotTypes.length;b++)for(c=this.plotInfo.plotTypes[b],g=a=0;g<c.plotUnits.length;g++)c.plotUnits[g].previousDataSeriesCount=a,a+=c.plotUnits[g].dataSeriesIndexes.length};w.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){var b=this.data[a];if(b.dataPoints)for(var c=b.dataPoints.length,d=0;d<c;d++)b.dataPointIds[d]=++this._eventManager.lastObjectId}};w.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=
0;a<this.plotInfo.plotTypes.length;a++)for(var b=this.plotInfo.plotTypes[a],c=0;c<b.plotUnits.length;c++){var d=b.plotUnits[c];"line"===d.type||"stepLine"===d.type||"spline"===d.type||"column"===d.type||"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"bar"===d.type||"bubble"===d.type||"scatter"===d.type?this._processMultiseriesPlotUnit(d):"stackedColumn"===d.type||"stackedBar"===d.type||"stackedArea"===d.type?this._processStackedPlotUnit(d):"stackedColumn100"===d.type||"stackedBar100"===
d.type||"stackedArea100"===d.type?this._processStacked100PlotUnit(d):"candlestick"!==d.type&&"ohlc"!==d.type&&"rangeColumn"!==d.type&&"rangeBar"!==d.type&&"rangeArea"!==d.type&&"rangeSplineArea"!==d.type||this._processMultiYPlotUnit(d)}};w.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var b=a.axisY.dataInfo,c=a.axisX.dataInfo,d,e,f=!1,g=0;g<a.dataSeriesIndexes.length;g++){var l=this.data[a.dataSeriesIndexes[g]],p=0,h=!1,k=!1;if("normal"===
l.axisPlacement||"xySwapped"===l.axisPlacement)var n=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,m=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(l.dataPoints[p].x&&l.dataPoints[p].x.getTime||"dateTime"===l.xValueType)f=!0;for(p=0;p<l.dataPoints.length;p++){"undefined"===
typeof l.dataPoints[p].x&&(l.dataPoints[p].x=p);l.dataPoints[p].x.getTime?(f=!0,d=l.dataPoints[p].x.getTime()):d=l.dataPoints[p].x;e=l.dataPoints[p].y;d<c.min&&(c.min=d);d>c.max&&(c.max=d);e<b.min&&(b.min=e);e>b.max&&(b.max=e);if(0<p){var r=d-l.dataPoints[p-1].x;0>r&&(r*=-1);c.minDiff>r&&0!==r&&(c.minDiff=r)}if(!(d<n)||h){if(!h&&(h=!0,0<p)){p-=2;continue}if(d>m&&!k)k=!0;else if(d>m&&k)continue;l.dataPoints[p].label&&(a.axisX.labels[d]=l.dataPoints[p].label);d<c.viewPortMin&&(c.viewPortMin=d);d>c.viewPortMax&&
(c.viewPortMax=d);null!==e&&(e<b.viewPortMin&&(b.viewPortMin=e),e>b.viewPortMax&&(b.viewPortMax=e))}}this.plotInfo.axisXValueType=l.xValueType=f?"dateTime":"number"}};w.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var b=a.axisY.dataInfo,c=a.axisX.dataInfo,d,e,f=!1,g=[],l=[],p=0;p<a.dataSeriesIndexes.length;p++){var h=this.data[a.dataSeriesIndexes[p]],k=0,n=!1,m=!1;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var r=this.sessionVariables.axisX.internalMinimum?
this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,q=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(h.dataPoints[k].x&&h.dataPoints[k].x.getTime||"dateTime"===h.xValueType)f=!0;for(k=0;k<h.dataPoints.length;k++){"undefined"===typeof h.dataPoints[k].x&&(h.dataPoints[k].x=k);h.dataPoints[k].x.getTime?
(f=!0,d=h.dataPoints[k].x.getTime()):d=h.dataPoints[k].x;e=h.dataPoints[k].y;d<c.min&&(c.min=d);d>c.max&&(c.max=d);if(0<k){var s=d-h.dataPoints[k-1].x;0>s&&(s*=-1);c.minDiff>s&&0!==s&&(c.minDiff=s)}if(!(d<r)||n){if(!n&&(n=!0,0<k)){k-=2;continue}if(d>q&&!m)m=!0;else if(d>q&&m)continue;h.dataPoints[k].label&&(a.axisX.labels[d]=h.dataPoints[k].label);d<c.viewPortMin&&(c.viewPortMin=d);d>c.viewPortMax&&(c.viewPortMax=d);null!==e&&(a.yTotals[d]=(a.yTotals[d]?a.yTotals[d]:0)+Math.abs(e),0<=e?g[d]=g[d]?
g[d]+e:e:l[d]=l[d]?l[d]+e:e)}}this.plotInfo.axisXValueType=h.xValueType=f?"dateTime":"number"}for(k in g)isNaN(k)||(a=g[k],a<b.min&&(b.min=a),a>b.max&&(b.max=a),k<c.viewPortMin||k>c.viewPortMax||(a<b.viewPortMin&&(b.viewPortMin=a),a>b.viewPortMax&&(b.viewPortMax=a)));for(k in l)isNaN(k)||(a=l[k],a<b.min&&(b.min=a),a>b.max&&(b.max=a),k<c.viewPortMin||k>c.viewPortMax||(a<b.viewPortMin&&(b.viewPortMin=a),a>b.viewPortMax&&(b.viewPortMax=a)))}};w.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&
!(1>a.dataSeriesIndexes.length)){for(var b=a.axisY.dataInfo,c=a.axisX.dataInfo,d,e,f=!1,g=!1,l=!1,p=[],h=0;h<a.dataSeriesIndexes.length;h++){var k=this.data[a.dataSeriesIndexes[h]],n=0,m=!1,r=!1;if("normal"===k.axisPlacement||"xySwapped"===k.axisPlacement)var q=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,s=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:
this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(k.dataPoints[n].x&&k.dataPoints[n].x.getTime||"dateTime"===k.xValueType)f=!0;for(n=0;n<k.dataPoints.length;n++){"undefined"===typeof k.dataPoints[n].x&&(k.dataPoints[n].x=n);k.dataPoints[n].x.getTime?(f=!0,d=k.dataPoints[n].x.getTime()):d=k.dataPoints[n].x;e=k.dataPoints[n].y;d<c.min&&(c.min=d);d>c.max&&(c.max=d);if(0<n){var u=d-k.dataPoints[n-1].x;0>u&&(u*=-1);c.minDiff>u&&0!==u&&(c.minDiff=u)}if(!(d<q)||m){if(!m&&
(m=!0,0<n)){n-=2;continue}if(d>s&&!r)r=!0;else if(d>s&&r)continue;k.dataPoints[n].label&&(a.axisX.labels[d]=k.dataPoints[n].label);d<c.viewPortMin&&(c.viewPortMin=d);d>c.viewPortMax&&(c.viewPortMax=d);null!==e&&(a.yTotals[d]=(a.yTotals[d]?a.yTotals[d]:0)+Math.abs(e),0<=e?g=!0:l=!0,p[d]=p[d]?p[d]+Math.abs(e):Math.abs(e))}}this.plotInfo.axisXValueType=k.xValueType=f?"dateTime":"number"}g&&!l?(b.max=99,b.min=1):g&&l?(b.max=99,b.min=-99):!g&&l&&(b.max=-1,b.min=-99);b.viewPortMin=b.min;b.viewPortMax=b.max;
a.dataPointYSums=p}};w.prototype._processMultiYPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var b=a.axisY.dataInfo,c=a.axisX.dataInfo,d,e,f,g,l=!1,p=0;p<a.dataSeriesIndexes.length;p++){var h=this.data[a.dataSeriesIndexes[p]],k=0,n=!1,m=!1;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var r=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:
-Infinity,q=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(h.dataPoints[k].x&&h.dataPoints[k].x.getTime||"dateTime"===h.xValueType)l=!0;for(k=0;k<h.dataPoints.length;k++){"undefined"===typeof h.dataPoints[k].x&&(h.dataPoints[k].x=k);h.dataPoints[k].x.getTime?(l=!0,d=h.dataPoints[k].x.getTime()):d=h.dataPoints[k].x;(e=h.dataPoints[k].y)&&e.length&&(f=Math.min.apply(null,
e),g=Math.max.apply(null,e));d<c.min&&(c.min=d);d>c.max&&(c.max=d);f<b.min&&(b.min=f);g>b.max&&(b.max=g);if(0<k){var s=d-h.dataPoints[k-1].x;0>s&&(s*=-1);c.minDiff>s&&0!==s&&(c.minDiff=s)}if(!(d<r)||n){if(!n&&(n=!0,0<k)){k-=2;continue}if(d>q&&!m)m=!0;else if(d>q&&m)continue;h.dataPoints[k].label&&(a.axisX.labels[d]=h.dataPoints[k].label);d<c.viewPortMin&&(c.viewPortMin=d);d>c.viewPortMax&&(c.viewPortMax=d);null!==e&&(f<b.viewPortMin&&(b.viewPortMin=f),g>b.viewPortMax&&(b.viewPortMax=g))}}this.plotInfo.axisXValueType=
h.xValueType=l?"dateTime":"number"}};w.prototype.getDataPointAtXY=function(a,b,c){c=c||!1;for(var d=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var f=null;(f=this._dataInRenderedOrder[e].getDataPointAtXY(a,b,c))&&d.push(f)}a=null;b=!1;for(c=0;c<d.length;c++)if("line"===d[c].dataSeries.type||"stepLine"===d[c].dataSeries.type||"area"===d[c].dataSeries.type||"stepArea"===d[c].dataSeries.type)if(e=R("markerSize",d[c].dataPoint,d[c].dataSeries)||8,d[c].distance<=e/2){b=!0;break}for(c=0;c<d.length;c++)b&&
"line"!==d[c].dataSeries.type&&"stepLine"!==d[c].dataSeries.type&&"area"!==d[c].dataSeries.type&&"stepArea"!==d[c].dataSeries.type||(a?d[c].distance<=a.distance&&(a=d[c]):a=d[c]);return a};w.prototype.getObjectAtXY=function(a,b,c){var d=null;if(c=this.getDataPointAtXY(a,b,c||!1))d=c.dataSeries.dataPointIds[c.dataPointIndex];else if(v)d=ra(a,b,this._eventManager.ghostCtx);else for(c=0;c<this.legend.items.length;c++){var e=this.legend.items[c];a>=e.x1&&(a<=e.x2&&b>=e.y1&&b<=e.y2)&&(d=e.id)}return d};
w.prototype.getAutoFontSize=function(a,b,c){a/=400;return Math.round(Math.min(this.width,this.height)*a)};w.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};w.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.width,this.height);this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))};w.prototype.attachEvent=function(a){this._events.push(a)};w.prototype._touchEventHandler=function(a){if(a.changedTouches&&
this.interactivityEnabled){var b=[],c=a.changedTouches,d=c?c[0]:a,e=null;switch(a.type){case "touchstart":case "MSPointerDown":b=["mousemove","mousedown"];this._lastTouchData=ia(d);this._lastTouchData.time=new Date;break;case "touchmove":case "MSPointerMove":b=["mousemove"];break;case "touchend":case "MSPointerUp":b="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup","click"]:["mouseup"];break;default:return}if(!(c&&1<c.length)){e=ia(d);e.time=new Date;try{var f=
e.y-this._lastTouchData.y,g=e.time-this._lastTouchData.time;if(15<Math.abs(f)&&(this._lastTouchData.scroll||200>g)){this._lastTouchData.scroll=!0;var l=window.parent||window;l&&l.scrollBy&&l.scrollBy(0,-f)}}catch(p){}this._lastTouchEventType=a.type;if(this._lastTouchData.scroll&&this.zoomEnabled)this.isDrag&&this.resetOverlayedCanvas(),this.isDrag=!1;else for(c=0;c<b.length;c++)e=b[c],f=document.createEvent("MouseEvent"),f.initMouseEvent(e,!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,
!1,!1,!1,0,null),d.target.dispatchEvent(f),a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()}}};w.prototype._mouseEventHandler=function(a){if(this.interactivityEnabled){a.preventManipulation&&a.preventManipulation();a.preventDefault&&a.preventDefault();"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var b=ia(a),c=a.type,d,e;a.which?e=3==a.which:a.button&&(e=2==a.button);if(!e){if(w.capturedEventParam)d=w.capturedEventParam,"mouseup"===c&&(w.capturedEventParam=
null,d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",d.chart._mouseEventHandler,!1)),d.hasOwnProperty(c)&&d[c].call(d.context,b.x,b.y);else if(this._events){for(e=0;e<this._events.length;e++)if(this._events[e].hasOwnProperty(c)){d=this._events[e];var f=d.bounds;if(b.x>=f.x1&&b.x<=f.x2&&b.y>=f.y1&&b.y<=f.y2){d[c].call(d.context,b.x,b.y);"mousedown"===c&&!0===d.capture?(w.capturedEventParam=d,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():
document.body.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===c&&(d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else d=null}a.target.style.cursor=d&&d.cursor?d.cursor:this._defaultCursor}this._toolTip&&this._toolTip.enabled&&(c=this.plotArea,(b.x<c.x1||b.x>c.x2||b.y<c.y1||b.y>c.y2)&&this._toolTip.hide());this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}}};
w.prototype._plotAreaMouseDown=function(a,b){this.isDrag=!0;this.dragStartPoint="none"!==this.plotInfo.axisPlacement?{x:a,y:b,xMinimum:this.axisX.minimum,xMaximum:this.axisX.maximum}:{x:a,y:b}};w.prototype._plotAreaMouseUp=function(a,b){var c,d;if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var e=0,e=this.axisX.lineCoordinates,e="xySwapped"===this.plotInfo.axisPlacement?b-this.dragStartPoint.y:this.dragStartPoint.x-a;Math.abs(this.axisX.maximum-
this.axisX.minimum);if(2<Math.abs(e)){if(this.panEnabled)e=!1,d=0,this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum?(d=this.axisX._absoluteMinimum-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=d,this.axisX.sessionVariables.internalMaximum+=d,e=!0):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum&&(d=this.axisX.sessionVariables.internalMaximum-this.axisX._absoluteMaximum,this.axisX.sessionVariables.internalMaximum-=
d,this.axisX.sessionVariables.internalMinimum-=d,e=!0),e&&this.render();else if(this.zoomEnabled){this.resetOverlayedCanvas();if(!this.dragStartPoint)return;"xySwapped"===this.plotInfo.axisPlacement?(c=Math.min(this.dragStartPoint.y,b),d=Math.max(this.dragStartPoint.y,b),1<Math.abs(c-d)&&(e=this.axisX.lineCoordinates,d=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/e.height*(d-e.y1),e=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/e.height*(c-e.y1),d=Math.max(d,this.axisX.dataInfo.min),
e=Math.min(e,this.axisX.dataInfo.max),Math.abs(e-d)>2*Math.abs(this.axisX.dataInfo.minDiff)&&(this.axisX.sessionVariables.internalMinimum=d,this.axisX.sessionVariables.internalMaximum=e,this.render()))):"normal"===this.plotInfo.axisPlacement&&(d=Math.min(this.dragStartPoint.x,a),c=Math.max(this.dragStartPoint.x,a),1<Math.abs(d-c)&&(e=this.axisX.lineCoordinates,d=(this.axisX.maximum-this.axisX.minimum)/e.width*(d-e.x1)+this.axisX.minimum,e=(this.axisX.maximum-this.axisX.minimum)/e.width*(c-e.x1)+this.axisX.minimum,
d=Math.max(d,this.axisX.dataInfo.min),e=Math.min(e,this.axisX.dataInfo.max),Math.abs(e-d)>2*Math.abs(this.axisX.dataInfo.minDiff)&&(this.axisX.sessionVariables.internalMinimum=d,this.axisX.sessionVariables.internalMaximum=e,this.render())))}this.zoomEnabled&&"none"===this._zoomButton.style.display&&(va(this._zoomButton,this._resetButton),L(this,this._zoomButton,"pan"),L(this,this._resetButton,"reset"))}}this.isDrag=!1};w.prototype._plotAreaMouseMove=function(a,b){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var c=
0,d=0,d=this.axisX.lineCoordinates;"xySwapped"===this.plotInfo.axisPlacement?(c=b-this.dragStartPoint.y,d=Math.abs(this.axisX.maximum-this.axisX.minimum)/d.height*c):(c=this.dragStartPoint.x-a,d=Math.abs(this.axisX.maximum-this.axisX.minimum)/d.width*c);2<Math.abs(c)&&8>Math.abs(c)&&(this.panEnabled||this.zoomEnabled)?this._toolTip.hide():!this._toolTip.enabled||(this.panEnabled||this.zoomEnabled)||this._toolTip.mouseMoveHandler(a,b);if(2<Math.abs(c)&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled){this.axisX.sessionVariables.internalMinimum=
this.dragStartPoint.xMinimum+d;this.axisX.sessionVariables.internalMaximum=this.dragStartPoint.xMaximum+d;c=0;this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum-X(this.axisX.interval,this.axisX.intervalType)?(c=this.axisX._absoluteMinimum-X(this.axisX.interval,this.axisX.intervalType)-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=c,this.axisX.sessionVariables.internalMaximum+=c):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum+
X(this.axisX.interval,this.axisX.intervalType)&&(c=this.axisX.sessionVariables.internalMaximum-(this.axisX._absoluteMaximum+X(this.axisX.interval,this.axisX.intervalType)),this.axisX.sessionVariables.internalMaximum-=c,this.axisX.sessionVariables.internalMinimum-=c);var e=this;clearTimeout(this._panTimerId);this._panTimerId=setTimeout(function(){e.render()},0)}else this.zoomEnabled&&(c=this.plotArea,this.resetOverlayedCanvas(),d=this.overlaidCanvasCtx.globalAlpha,this.overlaidCanvasCtx.globalAlpha=
0.7,this.overlaidCanvasCtx.fillStyle="#A0ABB8","xySwapped"===this.plotInfo.axisPlacement?this.overlaidCanvasCtx.fillRect(c.x1,this.dragStartPoint.y,c.x2-c.x1,b-this.dragStartPoint.y):"normal"===this.plotInfo.axisPlacement&&this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x,c.y1,a-this.dragStartPoint.x,c.y2-c.y1),this.overlaidCanvasCtx.globalAlpha=d)}else this._toolTip.enabled&&this._toolTip.mouseMoveHandler(a,b)};w.prototype.preparePlotArea=function(){var a=this.plotArea,b=this.axisY?this.axisY:
this.axisY2;!v&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);this.axisX&&b?(a.x1=this.axisX.lineCoordinates.x1<this.axisX.lineCoordinates.x2?this.axisX.lineCoordinates.x1:b.lineCoordinates.x1,a.y1=this.axisX.lineCoordinates.y1<b.lineCoordinates.y1?this.axisX.lineCoordinates.y1:b.lineCoordinates.y1,a.x2=this.axisX.lineCoordinates.x2>b.lineCoordinates.x2?this.axisX.lineCoordinates.x2:b.lineCoordinates.x2,a.y2=this.axisX.lineCoordinates.y2>this.axisX.lineCoordinates.y1?this.axisX.lineCoordinates.y2:
b.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1):(b=this.layoutManager.getFreeSpace(),a.x1=b.x1,a.x2=b.x2,a.y1=b.y1,a.y2=b.y2,a.width=b.width,a.height=b.height);v||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=a.y1+"px",(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1))};w.prototype.getPixelCoordinatesOnPlotArea=function(a,b){return{x:this.axisX.getPixelCoordinatesOnAxis(a).x,y:this.axisY.getPixelCoordinatesOnAxis(b).y}};w.prototype.renderIndexLabels=
function(){var a=this.plotArea.ctx;a.textBaseline="middle";for(var b=this.plotArea,c=0;c<this._indexLabels.length;c++){var d=this._indexLabels[c],e,f,g;a.fillStyle=R("indexLabelFontColor",d.dataPoint,d.dataSeries);a.font=sa("indexLabel",d.dataPoint,d.dataSeries);var l=this.replaceKeywordsWithValue(R("indexLabel",d.dataPoint,d.dataSeries),d.dataPoint,d.dataSeries,null,d.indexKeyword),p=a.measureText(l).width,h=R("indexLabelFontSize",d.dataPoint,d.dataSeries),k=R("indexLabelPlacement",d.dataPoint,d.dataSeries),
n=R("indexLabelOrientation",d.dataPoint,d.dataSeries),m=g=0,r=0,q=0,s=0,u=0,t=d.direction;d.point.x<b.x1||(d.point.x>b.x2||d.point.y<b.y1||d.point.y>b.y2)||("column"===d.chartType||"stackedColumn"===d.chartType||"stackedColumn100"===d.chartType||"bar"===d.chartType||"stackedBar"===d.chartType||"stackedBar100"===d.chartType||"candlestick"===d.chartType||"ohlc"===d.chartType||"rangeColumn"===d.chartType||"rangeBar"===d.chartType?(u=5,Math.abs(d.bounds.x1,d.bounds.x2),Math.abs(d.bounds.y1,d.bounds.y2),
"normal"===this.plotInfo.axisPlacement?("outside"===k?(m=b.y1,r=b.y2):"inside"===k&&(m=d.bounds.y1,r=d.bounds.y2),"horizontal"===n?(e=d.point.x-p/2,f=0<=t?Math.min(Math.max(d.point.y-h/2-u,m+h/2+5),r-h/2-u):Math.max(Math.min(d.point.y+h/2+u,r-h/2),m+h/2+u)):"vertical"===n&&(e=d.point.x,f=0<=t?Math.min(Math.max(d.point.y-u,m+p+u),r):Math.max(Math.min(d.point.y+p+u,r-u),m),g=-90)):"xySwapped"===this.plotInfo.axisPlacement&&("outside"===k?(q=b.x1,s=b.x2):"inside"===k&&(q=d.bounds.x1,s=d.bounds.x2),"horizontal"===
n?(f=d.point.y,e=0<=t?Math.max(Math.min(d.point.x+u,s-p),q):Math.min(Math.max(d.point.x-p-u,q),s)):"vertical"===n&&(f=d.point.y+p/2,e=0<=t?Math.max(Math.min(d.point.x+h/2+u,s-h/2),q):Math.min(Math.max(d.point.x-h/2-u,q+h/2),s+h/2),g=-90))):(u=5,"horizontal"===n?(e=d.point.x-p/2,"bubble"===d.chartType&&(u=-h/2),f=0<t?Math.max(d.point.y-h/2-u,b.y1+h/2):Math.min(d.point.y+h/2+u,b.y2-h/2)):"vertical"===n&&(e=d.point.x,"bubble"===d.chartType&&(u=-p/2),f=0<t?Math.max(d.point.y-u,b.y1+p):Math.min(d.point.y+
p+u,b.y2),g=-90)),a.save(),a.translate(e,f),a.rotate(Math.PI/180*g),a.fillText(l,0,0),a.restore())}};w.prototype.renderLine=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();var d=this.plotArea;b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];b.lineWidth=g.lineThickness;var l=g.dataPoints,p=g.id;this._eventManager.objectMap[p]={objectType:"dataSeries",
dataSeriesIndex:f};p=A(p);c.strokeStyle=p;c.lineWidth=0<g.lineThickness?Math.max(g.lineThickness,4):0;p=g._colorSet[0];b.strokeStyle=p;var h=!0,k=0,n,m;b.beginPath();if(0<l.length){for(var r=!1,k=0;k<l.length;k++)if(n=l[k].x.getTime?l[k].x.getTime():l[k].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax))if("number"!==typeof l[k].y)0<k&&(b.stroke(),v&&c.stroke()),r=!0;else{n=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(n-a.axisX.conversionParameters.minimum)+
0.5<<0;m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(l[k].y-a.axisY.conversionParameters.minimum)+0.5<<0;var q=g.dataPointIds[k];this._eventManager.objectMap[q]={id:q,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:k,x1:n,y1:m};h||r?(b.beginPath(),b.moveTo(n,m),v&&(c.beginPath(),c.moveTo(n,m)),r=h=!1):(b.lineTo(n,m),v&&c.lineTo(n,m),0==k%500&&(b.stroke(),b.beginPath(),b.moveTo(n,m),v&&(c.stroke(),c.beginPath(),c.moveTo(n,m))));if(0<l[k].markerSize||0<
g.markerSize){var s=g.getMarkerProperties(k,n,m,b);d.push(s);q=A(q);v&&d.push({x:n,y:m,ctx:c,type:s.type,size:s.size,color:q,borderColor:q,borderThickness:s.borderThickness})}(l[k].indexLabel||g.indexLabel)&&this._indexLabels.push({chartType:"line",dataPoint:l[k],dataSeries:g,point:{x:n,y:m},color:p})}b.stroke();v&&c.stroke()}}I.drawMarkers(d);b.restore();b.beginPath();v&&c.beginPath()}};w.prototype.renderStepLine=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;
b.save();var d=this.plotArea;b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];b.lineWidth=g.lineThickness;var l=g.dataPoints,p=g.id;this._eventManager.objectMap[p]={objectType:"dataSeries",dataSeriesIndex:f};p=A(p);c.strokeStyle=p;c.lineWidth=0<g.lineThickness?Math.max(g.lineThickness,4):0;p=g._colorSet[0];b.strokeStyle=p;var h=!0,k=0,n,m;b.beginPath();if(0<l.length){for(var r=!1,k=0;k<l.length;k++)if(n=
l[k].getTime?l[k].x.getTime():l[k].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax))if("number"!==typeof l[k].y)0<k&&(b.stroke(),v&&c.stroke()),r=!0;else{var q=m;n=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(n-a.axisX.conversionParameters.minimum)+0.5<<0;m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(l[k].y-a.axisY.conversionParameters.minimum)+0.5<<0;var s=g.dataPointIds[k];this._eventManager.objectMap[s]=
{id:s,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:k,x1:n,y1:m};h||r?(b.beginPath(),b.moveTo(n,m),v&&(c.beginPath(),c.moveTo(n,m)),r=h=!1):(b.lineTo(n,q),v&&c.lineTo(n,q),b.lineTo(n,m),v&&c.lineTo(n,m),0==k%500&&(b.stroke(),b.beginPath(),b.moveTo(n,m),v&&(c.stroke(),c.beginPath(),c.moveTo(n,m))));if(0<l[k].markerSize||0<g.markerSize)q=g.getMarkerProperties(k,n,m,b),d.push(q),s=A(s),v&&d.push({x:n,y:m,ctx:c,type:q.type,size:q.size,color:s,borderColor:s,borderThickness:q.borderThickness});
(l[k].indexLabel||g.indexLabel)&&this._indexLabels.push({chartType:"stepLine",dataPoint:l[k],dataSeries:g,point:{x:n,y:m},color:p})}b.stroke();v&&c.stroke()}}I.drawMarkers(d);b.restore();b.beginPath();v&&c.beginPath()}};w.prototype.renderSpline=function(a){function b(a){a=fa(a,2);if(0<a.length){c.beginPath();v&&d.beginPath();c.moveTo(a[0].x,a[0].y);v&&d.moveTo(a[0].x,a[0].y);for(var b=0;b<a.length-3;b+=3)c.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),v&&d.bezierCurveTo(a[b+
1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),0<b&&0===b%3E3&&(c.stroke(),c.beginPath(),c.moveTo(a[b+3].x,a[b+3].y),v&&(d.stroke(),d.beginPath(),d.moveTo(a[b+3].x,a[b+3].y)));c.stroke();v&&d.stroke()}}var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx;c.save();var e=this.plotArea;c.beginPath();c.rect(e.x1,e.y1,e.width,e.height);c.clip();for(var e=[],f=0;f<a.dataSeriesIndexes.length;f++){var g=a.dataSeriesIndexes[f],l=this.data[g];c.lineWidth=l.lineThickness;
var p=l.dataPoints,h=l.id;this._eventManager.objectMap[h]={objectType:"dataSeries",dataSeriesIndex:g};h=A(h);d.strokeStyle=h;d.lineWidth=0<l.lineThickness?Math.max(l.lineThickness,4):0;h=l._colorSet[0];c.strokeStyle=h;var k=0,n,m,r=[];c.beginPath();if(0<p.length)for(k=0;k<p.length;k++)if(n=p[k].getTime?p[k].x.getTime():p[k].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax))if("number"!==typeof p[k].y)0<k&&(b(r),r=[]);else{n=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*
(n-a.axisX.conversionParameters.minimum)+0.5<<0;m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(p[k].y-a.axisY.conversionParameters.minimum)+0.5<<0;var q=l.dataPointIds[k];this._eventManager.objectMap[q]={id:q,objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:k,x1:n,y1:m};r[r.length]={x:n,y:m};if(0<p[k].markerSize||0<l.markerSize){var s=l.getMarkerProperties(k,n,m,c);e.push(s);q=A(q);v&&e.push({x:n,y:m,ctx:d,type:s.type,size:s.size,color:q,borderColor:q,borderThickness:s.borderThickness})}(p[k].indexLabel||
l.indexLabel)&&this._indexLabels.push({chartType:"spline",dataPoint:p[k],dataSeries:l,point:{x:n,y:m},color:h})}b(r)}I.drawMarkers(e);c.restore();c.beginPath();v&&d.beginPath()}};var D=function(a,b,c,d,e,f,g,l,p,h,k,n,m){"undefined"===typeof m&&(m=1);g=g||0;l=l||"black";var r=15<d-b&&15<e-c?8:0.35*Math.min(d-b,e-c);a.beginPath();a.moveTo(b,c);a.save();a.fillStyle=f;a.globalAlpha=m;a.fillRect(b,c,d-b,e-c);a.globalAlpha=1;0<g&&(m=0===g%2?0:0.5,a.beginPath(),a.lineWidth=g,a.strokeStyle=l,a.moveTo(b,
c),a.rect(b-m,c-m,d-b+2*m,e-c+2*m),a.stroke());a.restore();!0===p&&(a.save(),a.beginPath(),a.moveTo(b,c),a.lineTo(b+r,c+r),a.lineTo(d-r,c+r),a.lineTo(d,c),a.closePath(),g=a.createLinearGradient((d+b)/2,c+r,(d+b)/2,c),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=g,a.fill(),a.restore());!0===h&&(a.save(),a.beginPath(),a.moveTo(b,e),a.lineTo(b+r,e-r),a.lineTo(d-r,e-r),a.lineTo(d,e),a.closePath(),g=a.createLinearGradient((d+b)/2,e-r,(d+b)/2,e),g.addColorStop(0,f),g.addColorStop(1,
"rgba(255, 255, 255, .4)"),a.fillStyle=g,a.fill(),a.restore());!0===k&&(a.save(),a.beginPath(),a.moveTo(b,c),a.lineTo(b+r,c+r),a.lineTo(b+r,e-r),a.lineTo(b,e),a.closePath(),g=a.createLinearGradient(b+r,(e+c)/2,b,(e+c)/2),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,a.fill(),a.restore());!0===n&&(a.save(),a.beginPath(),a.moveTo(d,c),a.lineTo(d-r,c+r),a.lineTo(d-r,e-r),a.lineTo(d,e),g=a.createLinearGradient(d-r,(e+c)/2,d,(e+c)/2),g.addColorStop(0,f),g.addColorStop(1,
"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,a.fill(),a.closePath(),a.restore())};w.prototype.renderColumn=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=0,f,g,l,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,e=Math.min(0.15*this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<
0,h=a.axisX.dataInfo.minDiff,k=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(h)/a.plotType.totalDataSeries)<<0;k>e?k=e:Infinity===h?k=e:1>k&&(k=1);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var h=a.dataSeriesIndexes[d],n=this.data[h],m=n.dataPoints;if(0<m.length)for(var r=5<k&&
n.bevelEnabled?!0:!1,e=0;e<m.length;e++)if(m[e].getTime?l=m[e].x.getTime():l=m[e].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&"number"===typeof m[e].y){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(l-a.axisX.conversionParameters.minimum)+0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(m[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;f=f-a.plotType.totalDataSeries*k/2+(a.previousDataSeriesCount+
d)*k<<0;var q=f+k<<0,s;0<=m[e].y?s=p:(s=g,g=p);g>s&&(s=g=s);c=m[e].color?m[e].color:n._colorSet[e%n._colorSet.length];D(b,f,g,q,s,c,0,null,r&&0<=m[e].y,0>m[e].y&&r,!1,!1,n.fillOpacity);c=n.dataPointIds[e];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:e,x1:f,y1:g,x2:q,y2:s};c=A(c);v&&D(this._eventManager.ghostCtx,f,g,q,s,c,0,null,!1,!1,!1,!1);(m[e].indexLabel||n.indexLabel)&&this._indexLabels.push({chartType:"column",dataPoint:m[e],dataSeries:n,point:{x:f+
(q-f)/2,y:0<=m[e].y?g:s},direction:0<=m[e].y?1:-1,bounds:{x1:f,y1:Math.min(g,s),x2:q,y2:Math.max(g,s)},color:c})}}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedColumn=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=0,l,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,g=0.15*this.width<<0,h=a.axisX.dataInfo.minDiff,k=0.9*(d.width/
Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(h)/a.plotType.plotUnits.length)<<0;k>g?k=g:Infinity===h?k=g:1>k&&(k=1);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var n=a.dataSeriesIndexes[h],m=this.data[n],r=m.dataPoints;if(0<r.length){var q=5<k&&m.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";
for(g=0;g<r.length;g++)if(c=r[g].x.getTime?r[g].x.getTime():r[g].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(c-a.axisX.conversionParameters.minimum)+0.5<<0;l=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(r[g].y-a.axisY.conversionParameters.minimum)+0.5<<0;var s=d-a.plotType.plotUnits.length*k/2+a.index*k<<0,u=s+k<<0,t;if(0<=r[g].y){var x=
e[c]?e[c]:0;l-=x;t=p-x;e[c]=x+(t-l)}else x=f[c]?f[c]:0,t=l+x,l=p+x,f[c]=x+(t-l);c=r[g].color?r[g].color:m._colorSet[g%m._colorSet.length];D(b,s,l,u,t,c,0,null,q&&0<=r[g].y,0>r[g].y&&q,!1,!1,m.fillOpacity);c=m.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:s,y1:l,x2:u,y2:t};c=A(c);v&&D(this._eventManager.ghostCtx,s,l,u,t,c,0,null,!1,!1,!1,!1);(r[g].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:r[g],
dataSeries:m,point:{x:d,y:0<=r[g].y?l:t},direction:0<=r[g].y?1:-1,bounds:{x1:s,y1:Math.min(l,t),x2:u,y2:Math.max(l,t)},color:c})}}}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedColumn100=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=0,l,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,g=0.15*this.width<<0,h=a.axisX.dataInfo.minDiff,
k=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(h)/a.plotType.plotUnits.length)<<0;k>g?k=g:Infinity===h?k=g:1>k&&(k=1);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var n=a.dataSeriesIndexes[h],m=this.data[n],r=m.dataPoints;if(0<r.length)for(var q=5<k&&m.bevelEnabled?!0:!1,g=0;g<r.length;g++)if(c=
r[g].x.getTime?r[g].x.getTime():r[g].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(c-a.axisX.conversionParameters.minimum)+0.5<<0;l=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*((0!==a.dataPointYSums[c]?100*(r[g].y/a.dataPointYSums[c]):0)-a.axisY.conversionParameters.minimum)+0.5<<0;var s=d-a.plotType.plotUnits.length*k/2+a.index*
k<<0,u=s+k<<0,t;if(0<=r[g].y){var x=e[c]?e[c]:0;l-=x;t=p-x;e[c]=x+(t-l)}else x=f[c]?f[c]:0,t=l+x,l=p+x,f[c]=x+(t-l);c=r[g].color?r[g].color:m._colorSet[g%m._colorSet.length];D(b,s,l,u,t,c,0,null,q&&0<=r[g].y,0>r[g].y&&q,!1,!1,m.fillOpacity);c=m.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:s,y1:l,x2:u,y2:t};c=A(c);v&&D(this._eventManager.ghostCtx,s,l,u,t,c,0,null,!1,!1,!1,!1);(r[g].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn100",
dataPoint:r[g],dataSeries:m,point:{x:d,y:0<=r[g].y?l:t},direction:0<=r[g].y?1:-1,bounds:{x1:s,y1:Math.min(l,t),x2:u,y2:Math.max(l,t)},color:c})}}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderBar=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=0,f,g,l,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,e=Math.min(0.15*this.height,0.9*(this.plotArea.height/
a.plotType.totalDataSeries))<<0,h=a.axisX.dataInfo.minDiff,k=0.9*(d.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(h)/a.plotType.totalDataSeries)<<0;k>e?k=e:Infinity===h?k=e:1>k&&(k=1);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var h=a.dataSeriesIndexes[d],n=this.data[h],m=n.dataPoints;
if(0<m.length){var r=5<k&&n.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(e=0;e<m.length;e++)if(m[e].getTime?l=m[e].x.getTime():l=m[e].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&"number"===typeof m[e].y){g=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(l-a.axisX.conversionParameters.minimum)+0.5<<0;f=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(m[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;g=
g-a.plotType.totalDataSeries*k/2+(a.previousDataSeriesCount+d)*k<<0;var q=g+k<<0,s;0<=m[e].y?s=p:(s=f,f=p);c=m[e].color?m[e].color:n._colorSet[e%n._colorSet.length];D(b,s,g,f,q,c,0,null,r,!1,!1,!1,n.fillOpacity);c=n.dataPointIds[e];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:e,x1:s,y1:g,x2:f,y2:q};c=A(c);v&&D(this._eventManager.ghostCtx,s,g,f,q,c,0,null,!1,!1,!1,!1);this._indexLabels.push({chartType:"bar",dataPoint:m[e],dataSeries:n,point:{x:0<=m[e].y?
f:s,y:g+(q-g)/2},direction:0<=m[e].y?1:-1,bounds:{x1:Math.min(s,f),y1:g,x2:Math.max(s,f),y2:q},color:c})}}}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedBar=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=0,l,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,g=0.15*this.width<<0,h=a.axisX.dataInfo.minDiff,k=0.9*(d.height/Math.abs(a.axisX.maximum-
a.axisX.minimum)*Math.abs(h)/a.plotType.plotUnits.length)<<0;k>g?k=g:Infinity===h?k=g:1>k&&(k=1);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var n=a.dataSeriesIndexes[h],m=this.data[n],r=m.dataPoints;if(0<r.length){var q=5<k&&m.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<r.length;g++)if(c=
r[g].x.getTime?r[g].x.getTime():r[g].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(c-a.axisX.conversionParameters.minimum)+0.5<<0;l=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(r[g].y-a.axisY.conversionParameters.minimum)+0.5<<0;var s=d-a.plotType.plotUnits.length*k/2+a.index*k<<0,u=s+k<<0,t;if(0<=r[g].y){var x=e[c]?e[c]:0;t=p+x;
l+=x;e[c]=x+(l-t)}else x=f[c]?f[c]:0,t=l-x,l=p-x,f[c]=x+(l-t);c=r[g].color?r[g].color:m._colorSet[g%m._colorSet.length];D(b,t,s,l,u,c,0,null,q,!1,!1,!1,m.fillOpacity);c=m.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:t,y1:s,x2:l,y2:u};c=A(c);v&&D(this._eventManager.ghostCtx,t,s,l,u,c,0,null,!1,!1,!1,!1);this._indexLabels.push({chartType:"stackedBar",dataPoint:r[g],dataSeries:m,point:{x:0<=r[g].y?l:t,y:d},direction:0<=r[g].y?1:-1,
bounds:{x1:Math.min(t,l),y1:s,x2:Math.max(t,l),y2:u},color:c})}}}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedBar100=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=0,l,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,g=0.15*this.width<<0,h=a.axisX.dataInfo.minDiff,k=0.9*(d.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*
Math.abs(h)/a.plotType.plotUnits.length)<<0;k>g?k=g:Infinity===h?k=g:1>k&&(k=1);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var n=a.dataSeriesIndexes[h],m=this.data[n],r=m.dataPoints;if(0<r.length){var q=5<k&&m.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<r.length;g++)if(c=r[g].x.getTime?
r[g].x.getTime():r[g].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(c-a.axisX.conversionParameters.minimum)+0.5<<0;l=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*((0!==a.dataPointYSums[c]?100*(r[g].y/a.dataPointYSums[c]):0)-a.axisY.conversionParameters.minimum)+0.5<<0;var s=d-a.plotType.plotUnits.length*k/2+a.index*k<<0,u=s+k<<0,t;
if(0<=r[g].y){var x=e[c]?e[c]:0;t=p+x;l+=x;e[c]=x+(l-t)}else x=f[c]?f[c]:0,t=l-x,l=p-x,f[c]=x+(l-t);c=r[g].color?r[g].color:m._colorSet[g%m._colorSet.length];D(b,t,s,l,u,c,0,null,q,!1,!1,!1,m.fillOpacity);c=m.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:t,y1:s,x2:l,y2:u};c=A(c);v&&D(this._eventManager.ghostCtx,t,s,l,u,c,0,null,!1,!1,!1,!1);this._indexLabels.push({chartType:"stackedBar100",dataPoint:r[g],dataSeries:m,point:{x:0<=
r[g].y?l:t,y:d},direction:0<=r[g].y?1:-1,bounds:{x1:Math.min(t,l),y1:s,x2:Math.max(t,l),y2:u},color:c})}}}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderArea=function(a){function b(){x&&(0<h.lineThickness&&c.stroke(),0>=a.axisY.minimum&&0<=a.axisY.maximum?t=u:0>a.axisY.maximum?t=f.y1:0<a.axisY.minimum&&(t=e.y2),c.lineTo(r,t),c.lineTo(x.x,t),c.closePath(),c.globalAlpha=h.fillOpacity,c.fill(),c.globalAlpha=1,v&&(d.lineTo(r,t),d.lineTo(x.x,t),d.closePath(),d.fill()),c.beginPath(),
c.moveTo(r,q),d.beginPath(),d.moveTo(r,q),x={x:r,y:q})}var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],l=this.plotArea;c.save();v&&d.save();c.beginPath();c.rect(l.x1,l.y1,l.width,l.height);c.clip();v&&(d.beginPath(),d.rect(l.x1,l.y1,l.width,l.height),d.clip());for(l=0;l<a.dataSeriesIndexes.length;l++){var p=a.dataSeriesIndexes[l],h=this.data[p],k=h.dataPoints,g=h.id;this._eventManager.objectMap[g]=
{objectType:"dataSeries",dataSeriesIndex:p};g=A(g);d.fillStyle=g;var g=[],n=!0,m=0,r,q,s,u=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)+0.5<<0,t,x=null;if(0<k.length){var E=h._colorSet[m%h._colorSet.length];c.fillStyle=E;c.strokeStyle=E;c.lineWidth=h.lineThickness;for(var V=!0;m<k.length;m++)if(s=k[m].x.getTime?k[m].x.getTime():k[m].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax))if("number"!==typeof k[m].y)b(),
V=!0;else{r=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(s-a.axisX.conversionParameters.minimum)+0.5<<0;q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(k[m].y-a.axisY.conversionParameters.minimum)+0.5<<0;n||V?(c.beginPath(),c.moveTo(r,q),x={x:r,y:q},v&&(d.beginPath(),d.moveTo(r,q)),V=n=!1):(c.lineTo(r,q),v&&d.lineTo(r,q),0==m%250&&b());var B=h.dataPointIds[m];this._eventManager.objectMap[B]={id:B,objectType:"dataPoint",dataSeriesIndex:p,
dataPointIndex:m,x1:r,y1:q};0!==k[m].markerSize&&(0<k[m].markerSize||0<h.markerSize)&&(s=h.getMarkerProperties(m,r,q,c),g.push(s),B=A(B),v&&g.push({x:r,y:q,ctx:d,type:s.type,size:s.size,color:B,borderColor:B,borderThickness:s.borderThickness}));(k[m].indexLabel||h.indexLabel)&&this._indexLabels.push({chartType:"area",dataPoint:k[m],dataSeries:h,point:{x:r,y:q},direction:0<=k[m].y?1:-1,color:E})}b();I.drawMarkers(g)}}c.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderSplineArea=
function(a){function b(){var b=fa(t,2);if(0<b.length){c.beginPath();c.moveTo(b[0].x,b[0].y);v&&(d.beginPath(),d.moveTo(b[0].x,b[0].y));for(var g=0;g<b.length-3;g+=3)c.bezierCurveTo(b[g+1].x,b[g+1].y,b[g+2].x,b[g+2].y,b[g+3].x,b[g+3].y),v&&d.bezierCurveTo(b[g+1].x,b[g+1].y,b[g+2].x,b[g+2].y,b[g+3].x,b[g+3].y);0<h.lineThickness&&c.stroke();0>=a.axisY.minimum&&0<=a.axisY.maximum?s=q:0>a.axisY.maximum?s=f.y1:0<a.axisY.minimum&&(s=e.y2);u={x:b[0].x,y:b[0].y};c.lineTo(b[b.length-1].x,s);c.lineTo(u.x,s);
c.closePath();c.globalAlpha=h.fillOpacity;c.fill();c.globalAlpha=1;v&&(d.lineTo(b[b.length-1].x,s),d.lineTo(u.x,s),d.closePath(),d.fill())}}var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],l=this.plotArea;c.save();v&&d.save();c.beginPath();c.rect(l.x1,l.y1,l.width,l.height);c.clip();v&&(d.beginPath(),d.rect(l.x1,l.y1,l.width,l.height),d.clip());for(l=0;l<a.dataSeriesIndexes.length;l++){var p=a.dataSeriesIndexes[l],
h=this.data[p],k=h.dataPoints,g=h.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:p};g=A(g);d.fillStyle=g;var g=[],n=0,m,r,q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)+0.5<<0,s,u=null,t=[];if(0<k.length){color=h._colorSet[n%h._colorSet.length];c.fillStyle=color;c.strokeStyle=color;for(c.lineWidth=h.lineThickness;n<k.length;n++)if(m=k[n].x.getTime?k[n].x.getTime():k[n].x,!(m<a.axisX.dataInfo.viewPortMin||
m>a.axisX.dataInfo.viewPortMax))if("number"!==typeof k[n].y)0<n&&(b(),t=[]);else{m=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(m-a.axisX.conversionParameters.minimum)+0.5<<0;r=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(k[n].y-a.axisY.conversionParameters.minimum)+0.5<<0;var x=h.dataPointIds[n];this._eventManager.objectMap[x]={id:x,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:n,x1:m,y1:r};t[t.length]={x:m,y:r};
if(0!==k[n].markerSize&&(0<k[n].markerSize||0<h.markerSize)){var E=h.getMarkerProperties(n,m,r,c);g.push(E);x=A(x);v&&g.push({x:m,y:r,ctx:d,type:E.type,size:E.size,color:x,borderColor:x,borderThickness:E.borderThickness})}(k[n].indexLabel||h.indexLabel)&&this._indexLabels.push({chartType:"splineArea",dataPoint:k[n],dataSeries:h,point:{x:m,y:r},direction:0<=k[n].y?1:-1,color:color})}b();I.drawMarkers(g)}}c.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStepArea=function(a){function b(){x&&
(0<h.lineThickness&&c.stroke(),0>=a.axisY.minimum&&0<=a.axisY.maximum?t=u:0>a.axisY.maximum?t=f.y1:0<a.axisY.minimum&&(t=e.y2),c.lineTo(r,t),c.lineTo(x.x,t),c.closePath(),c.globalAlpha=h.fillOpacity,c.fill(),c.globalAlpha=1,v&&(d.lineTo(r,t),d.lineTo(x.x,t),d.closePath(),d.fill()),c.beginPath(),c.moveTo(r,q),d.beginPath(),d.moveTo(r,q),x={x:r,y:q})}var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],
l=this.plotArea;c.save();v&&d.save();c.beginPath();c.rect(l.x1,l.y1,l.width,l.height);c.clip();v&&(d.beginPath(),d.rect(l.x1,l.y1,l.width,l.height),d.clip());for(l=0;l<a.dataSeriesIndexes.length;l++){var p=a.dataSeriesIndexes[l],h=this.data[p],k=h.dataPoints,g=h.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:p};g=A(g);d.fillStyle=g;var g=[],n=!0,m=0,r,q,s,u=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)+
0.5<<0,t,x=null,E=!1;if(0<k.length){var w=h._colorSet[m%h._colorSet.length];c.fillStyle=w;c.strokeStyle=w;for(c.lineWidth=h.lineThickness;m<k.length;m++)if(s=k[m].x.getTime?k[m].x.getTime():k[m].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax)){var B=q;"number"!==typeof k[m].y?(b(),E=!0):(r=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(s-a.axisX.conversionParameters.minimum)+0.5<<0,q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(k[m].y-a.axisY.conversionParameters.minimum)+0.5<<0,n||E?(c.beginPath(),c.moveTo(r,q),x={x:r,y:q},v&&(d.beginPath(),d.moveTo(r,q)),E=n=!1):(c.lineTo(r,B),v&&d.lineTo(r,B),c.lineTo(r,q),v&&d.lineTo(r,q),0==m%250&&b()),B=h.dataPointIds[m],this._eventManager.objectMap[B]={id:B,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:m,x1:r,y1:q},0!==k[m].markerSize&&(0<k[m].markerSize||0<h.markerSize)&&(s=h.getMarkerProperties(m,r,q,c),g.push(s),B=A(B),v&&g.push({x:r,y:q,ctx:d,type:s.type,size:s.size,
color:B,borderColor:B,borderThickness:s.borderThickness})),(k[m].indexLabel||h.indexLabel)&&this._indexLabels.push({chartType:"stepArea",dataPoint:k[m],dataSeries:h,point:{x:r,y:q},direction:0<=k[m].y?1:-1,color:w}))}b();I.drawMarkers(g)}}c.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedArea=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=[],e=this.plotArea,f=[],g=[],l=0,p,h,k,n=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(0-a.axisY.conversionParameters.minimum)<<0,m=this._eventManager.ghostCtx;v&&m.beginPath();b.save();v&&m.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(m.beginPath(),m.rect(e.x1,e.y1,e.width,e.height),m.clip());xValuePresent=[];for(e=0;e<a.dataSeriesIndexes.length;e++){var r=a.dataSeriesIndexes[e],q=this.data[r],s=q.dataPoints;q.dataPointIndexes=[];for(l=0;l<s.length;l++)r=s[l].x.getTime?s[l].x.getTime():s[l].x,q.dataPointIndexes[r]=l,xValuePresent[r]||(g.push(r),xValuePresent[r]=
!0);g.sort(pa)}for(e=0;e<a.dataSeriesIndexes.length;e++){var r=a.dataSeriesIndexes[e],q=this.data[r],s=q.dataPoints,u=!0,t=[],l=q.id;this._eventManager.objectMap[l]={objectType:"dataSeries",dataSeriesIndex:r};l=A(l);m.fillStyle=l;if(0<g.length){c=q._colorSet[0];b.fillStyle=c;b.strokeStyle=c;b.lineWidth=q.lineThickness;for(l=0;l<g.length;l++){k=g[l];var x=null,x=0<=q.dataPointIndexes[k]?s[q.dataPointIndexes[k]]:{x:k,y:0};if(!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&"number"===
typeof x.y){p=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(k-a.axisX.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(x.y-a.axisY.conversionParameters.minimum)+0.5<<0;var E=f[k]?f[k]:0;h-=E;t.push({x:p,y:n-E});f[k]=n-h;if(u)b.beginPath(),b.moveTo(p,h),v&&(m.beginPath(),m.moveTo(p,h)),u=!1;else if(b.lineTo(p,h),v&&m.lineTo(p,h),0==l%250){for(0<q.lineThickness&&b.stroke();0<t.length;){var w=
t.pop();b.lineTo(w.x,w.y);v&&m.lineTo(w.x,w.y)}b.closePath();b.globalAlpha=q.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();b.moveTo(p,h);v&&(m.closePath(),m.fill(),m.beginPath(),m.moveTo(p,h));t.push({x:p,y:n-E})}if(0<=q.dataPointIndexes[k]){var B=q.dataPointIds[q.dataPointIndexes[k]];this._eventManager.objectMap[B]={id:B,objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:q.dataPointIndexes[k],x1:p,y1:h}}0<=q.dataPointIndexes[k]&&0!==x.markerSize&&(0<x.markerSize||0<q.markerSize)&&(k=q.getMarkerProperties(l,
p,h,b),d.push(k),markerColor=A(B),v&&d.push({x:p,y:h,ctx:m,type:k.type,size:k.size,color:markerColor,borderColor:markerColor,borderThickness:k.borderThickness}));(x.indexLabel||q.indexLabel)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:x,dataSeries:q,point:{x:p,y:h},direction:0<=s[l].y?1:-1,color:c})}}for(0<q.lineThickness&&b.stroke();0<t.length;)w=t.pop(),b.lineTo(w.x,w.y),v&&m.lineTo(w.x,w.y);b.closePath();b.globalAlpha=q.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();b.moveTo(p,
h);v&&(m.closePath(),m.fill(),m.beginPath(),m.moveTo(p,h))}delete q.dataPointIndexes}I.drawMarkers(d);b.restore();v&&m.restore()}};w.prototype.renderStackedArea100=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=[],l=0,p,h,k,n=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,m=0.15*this.width<<0,r=a.axisX.dataInfo.minDiff,r=0.9*d.width/Math.abs(a.axisX.maximum-
a.axisX.minimum)*Math.abs(r)<<0,q=this._eventManager.ghostCtx;b.save();v&&q.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(q.beginPath(),q.rect(d.x1,d.y1,d.width,d.height),q.clip());xValuePresent=[];for(d=0;d<a.dataSeriesIndexes.length;d++){var s=a.dataSeriesIndexes[d],u=this.data[s],t=u.dataPoints;u.dataPointIndexes=[];for(l=0;l<t.length;l++)s=t[l].x.getTime?t[l].x.getTime():t[l].x,u.dataPointIndexes[s]=l,xValuePresent[s]||(g.push(s),xValuePresent[s]=!0);g.sort(pa)}for(d=0;d<
a.dataSeriesIndexes.length;d++){var s=a.dataSeriesIndexes[d],u=this.data[s],t=u.dataPoints,x=!0,c=u.id;this._eventManager.objectMap[c]={objectType:"dataSeries",dataSeriesIndex:s};c=A(c);q.fillStyle=c;1==t.length&&(r=m);1>r?r=1:r>m&&(r=m);var E=[];if(0<g.length){c=u._colorSet[l%u._colorSet.length];b.fillStyle=c;b.strokeStyle=c;b.lineWidth=u.lineThickness;for(l=0;l<g.length;l++){k=g[l];var w=null,w=0<=u.dataPointIndexes[k]?t[u.dataPointIndexes[k]]:{x:k,y:0};if(!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof w.y){h=0!==a.dataPointYSums[k]?100*(w.y/a.dataPointYSums[k]):0;p=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(k-a.axisX.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(h-a.axisY.conversionParameters.minimum)+0.5<<0;var B=f[k]?f[k]:0;h-=B;E.push({x:p,y:n-B});f[k]=n-h;if(x)b.beginPath(),b.moveTo(p,h),v&&(q.beginPath(),q.moveTo(p,h)),x=!1;else if(b.lineTo(p,h),v&&q.lineTo(p,
h),0==l%250){for(0<u.lineThickness&&b.stroke();0<E.length;){var G=E.pop();b.lineTo(G.x,G.y);v&&q.lineTo(G.x,G.y)}b.closePath();b.globalAlpha=u.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();b.moveTo(p,h);v&&(q.closePath(),q.fill(),q.beginPath(),q.moveTo(p,h));E.push({x:p,y:n-B})}if(0<=u.dataPointIndexes[k]){var y=u.dataPointIds[u.dataPointIndexes[k]];this._eventManager.objectMap[y]={id:y,objectType:"dataPoint",dataSeriesIndex:s,dataPointIndex:u.dataPointIndexes[k],x1:p,y1:h}}0<=u.dataPointIndexes[k]&&
0!==w.markerSize&&(0<w.markerSize||0<u.markerSize)&&(k=u.getMarkerProperties(l,p,h,b),e.push(k),markerColor=A(y),v&&e.push({x:p,y:h,ctx:q,type:k.type,size:k.size,color:markerColor,borderColor:markerColor,borderThickness:k.borderThickness}));(w.indexLabel||u.indexLabel)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:w,dataSeries:u,point:{x:p,y:h},direction:0<=t[l].y?1:-1,color:c})}}for(0<u.lineThickness&&b.stroke();0<E.length;)G=E.pop(),b.lineTo(G.x,G.y),v&&q.lineTo(G.x,G.y);b.closePath();
b.globalAlpha=u.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();b.moveTo(p,h);v&&(q.closePath(),q.fill(),q.beginPath(),q.moveTo(p,h))}delete u.dataPointIndexes}I.drawMarkers(e);b.restore();v&&q.restore()}};w.prototype.renderBubble=function(a){var b=this.plotArea.ctx,c=a.dataSeriesIndexes.length;if(!(0>=c)){var d=this.plotArea,e=0,f,g,l=0.15*this.width<<0,e=a.axisX.dataInfo.minDiff,c=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(e)/c)<<0;b.save();v&&this._eventManager.ghostCtx.save();
b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var p=-Infinity,h=Infinity,k=0;k<a.dataSeriesIndexes.length;k++)for(var n=a.dataSeriesIndexes[k],m=this.data[n],r=m.dataPoints,q=0,e=0;e<r.length;e++)f=r[e].getTime?f=r[e].x.getTime():f=r[e].x,f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax||"undefined"===typeof r[e].z||(q=r[e].z,q>p&&(p=q),q<h&&(h=q));for(var s=25*Math.PI,
d=Math.max(Math.pow(0.25*Math.min(d.height,d.width)/2,2)*Math.PI,s),k=0;k<a.dataSeriesIndexes.length;k++)if(n=a.dataSeriesIndexes[k],m=this.data[n],r=m.dataPoints,1==r.length&&(c=l),1>c?c=1:c>l&&(c=l),0<r.length)for(b.strokeStyle="#4572A7 ",e=0;e<r.length;e++)if(f=r[e].getTime?f=r[e].x.getTime():f=r[e].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[e].y){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(f-a.axisX.conversionParameters.minimum)+
0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(r[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;var q=r[e].z,u=2*Math.max(Math.sqrt((p===h?d/2:s+(d-s)/(p-h)*(q-h))/Math.PI)<<0,1),q=m.getMarkerProperties(e,b);q.size=u;b.globalAlpha=m.fillOpacity;I.drawMarker(f,g,b,q.type,q.size,q.color,q.borderColor,q.borderThickness);b.globalAlpha=1;var t=m.dataPointIds[e];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:e,
x1:f,y1:g,size:u};u=A(t);v&&I.drawMarker(f,g,this._eventManager.ghostCtx,q.type,q.size,u,u,q.borderThickness);(r[e].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"bubble",dataPoint:r[e],dataSeries:m,point:{x:f,y:g},direction:1,color:null})}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderScatter=function(a){var b=this.plotArea.ctx,c=a.dataSeriesIndexes.length;if(!(0>=c)){var d=this.plotArea,e=0,f,g,l=0.15*this.width<<0,e=a.axisX.dataInfo.minDiff,c=0.9*(d.width/
Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(e)/c)<<0;b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var p=0;p<a.dataSeriesIndexes.length;p++){var h=a.dataSeriesIndexes[p],k=this.data[h],n=k.dataPoints;1==n.length&&(c=l);1>c?c=1:c>l&&(c=l);if(0<n.length){b.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(d.height,d.width)/2,2);for(var m=
0,r=0,e=0;e<n.length;e++)if(f=n[e].getTime?f=n[e].x.getTime():f=n[e].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[e].y){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(f-a.axisX.conversionParameters.minimum)+0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(n[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;var q=k.getMarkerProperties(e,f,g,b);b.globalAlpha=k.fillOpacity;I.drawMarker(q.x,
q.y,q.ctx,q.type,q.size,q.color,q.color,q.thickness);b.globalAlpha=1;Math.sqrt((m-f)*(m-f)+(r-g)*(r-g))<Math.min(q.size,5)&&n.length>Math.min(this.plotArea.width,this.plotArea.height)||(m=k.dataPointIds[e],this._eventManager.objectMap[m]={id:m,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:e,x1:f,y1:g},m=A(m),v&&I.drawMarker(q.x,q.y,this._eventManager.ghostCtx,q.type,q.size,m,m,q.borderThickness),(n[e].indexLabel||k.indexLabel)&&this._indexLabels.push({chartType:"scatter",dataPoint:n[e],
dataSeries:k,point:{x:f,y:g},direction:1,color:null}),m=f,r=g)}}}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderCandlestick=function(a){var b=this.plotArea.ctx,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var d=null,d=this.plotArea,e=0,f,g,l,p,h,k,e=0.015*this.width;f=a.axisX.dataInfo.minDiff;var n=0.7*d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(f)<<0;n>e?n=e:Infinity===f?n=e:1>n&&(n=1);b.save();v&&c.save();b.beginPath();b.rect(d.x1,d.y1,
d.width,d.height);b.clip();v&&(c.rect(d.x1,d.y1,d.width,d.height),c.clip());for(var m=0;m<a.dataSeriesIndexes.length;m++){var r=a.dataSeriesIndexes[m],q=this.data[r],s=q.dataPoints;if(0<s.length)for(var u=5<n&&q.bevelEnabled?!0:!1,e=0;e<s.length;e++)if(s[e].getTime?k=s[e].x.getTime():k=s[e].x,!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&null!==s[e].y&&s[e].y.length&&"number"===typeof s[e].y[0]&&"number"===typeof s[e].y[1]&&"number"===typeof s[e].y[2]&&"number"===typeof s[e].y[3]){f=
a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(k-a.axisX.conversionParameters.minimum)+0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(s[e].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;l=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(s[e].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(s[e].y[2]-
a.axisY.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(s[e].y[3]-a.axisY.conversionParameters.minimum)+0.5<<0;var t=f-n/2<<0,x=t+n<<0,d=s[e].color?s[e].color:q._colorSet[0],E=Math.round(Math.max(1,0.15*n)),w=0===E%2?0:0.5,B=q.dataPointIds[e];this._eventManager.objectMap[B]={id:B,objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:e,x1:t,y1:g,x2:x,y2:l,x3:f,y3:p,x4:f,y4:h,borderThickness:E,color:d};b.strokeStyle=d;b.beginPath();
b.lineWidth=E;c.lineWidth=Math.max(E,4);"candlestick"===q.type?(b.moveTo(f-w,l),b.lineTo(f-w,Math.min(g,h)),b.stroke(),b.moveTo(f-w,Math.max(g,h)),b.lineTo(f-w,p),b.stroke(),D(b,t,Math.min(g,h),x,Math.max(g,h),s[e].y[0]<=s[e].y[3]?q.risingColor:d,E,d,u,u,!1,!1,q.fillOpacity),v&&(d=A(B),c.strokeStyle=d,c.moveTo(f-w,l),c.lineTo(f-w,Math.min(g,h)),c.stroke(),c.moveTo(f-w,Math.max(g,h)),c.lineTo(f-w,p),c.stroke(),D(c,t,Math.min(g,h),x,Math.max(g,h),d,0,null,!1,!1,!1,!1))):"ohlc"===q.type&&(b.moveTo(f-
w,l),b.lineTo(f-w,p),b.stroke(),b.beginPath(),b.moveTo(f,g),b.lineTo(t,g),b.stroke(),b.beginPath(),b.moveTo(f,h),b.lineTo(x,h),b.stroke(),v&&(d=A(B),c.strokeStyle=d,c.moveTo(f-w,l),c.lineTo(f-w,p),c.stroke(),c.beginPath(),c.moveTo(f,g),c.lineTo(t,g),c.stroke(),c.beginPath(),c.moveTo(f,h),c.lineTo(x,h),c.stroke()));(s[e].indexLabel||q.indexLabel)&&this._indexLabels.push({chartType:q.type,dataPoint:s[e],dataSeries:q,point:{x:t+(x-t)/2,y:l},direction:1,bounds:{x1:t,y1:Math.min(l,p),x2:x,y2:Math.max(l,
p)},color:d})}}b.restore();v&&c.restore()}};w.prototype.renderRangeColumn=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=0,f,g,e=0.03*this.width;f=a.axisX.dataInfo.minDiff;var l=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(f)/a.plotType.totalDataSeries)<<0;l>e?l=e:Infinity===f?l=e:1>l&&(l=1);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,
d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var p=0;p<a.dataSeriesIndexes.length;p++){var h=a.dataSeriesIndexes[p],k=this.data[h],n=k.dataPoints;if(0<n.length)for(var m=5<l&&k.bevelEnabled?!0:!1,e=0;e<n.length;e++)if(n[e].getTime?g=n[e].x.getTime():g=n[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&null!==n[e].y&&n[e].y.length&&"number"===typeof n[e].y[0]&&"number"===typeof n[e].y[1]){c=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*
(g-a.axisX.conversionParameters.minimum)+0.5<<0;d=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(n[e].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;f=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(n[e].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;var r=c-a.plotType.totalDataSeries*l/2+(a.previousDataSeriesCount+p)*l<<0,q=r+l<<0,c=n[e].color?n[e].color:k._colorSet[e%k._colorSet.length];if(d>f){var s=d,d=f;f=s}s=k.dataPointIds[e];
this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:e,x1:r,y1:d,x2:q,y2:f};D(b,r,d,q,f,c,0,c,m,m,!1,!1,k.fillOpacity);c=A(s);v&&D(this._eventManager.ghostCtx,r,d,q,f,c,0,null,!1,!1,!1,!1);if(n[e].indexLabel||k.indexLabel)this._indexLabels.push({chartType:"rangeColumn",dataPoint:n[e],dataSeries:k,indexKeyword:0,point:{x:r+(q-r)/2,y:n[e].y[1]>=n[e].y[0]?f:d},direction:n[e].y[1]>=n[e].y[0]?-1:1,bounds:{x1:r,y1:Math.min(d,f),x2:q,y2:Math.max(d,f)},color:c}),this._indexLabels.push({chartType:"rangeColumn",
dataPoint:n[e],dataSeries:k,indexKeyword:1,point:{x:r+(q-r)/2,y:n[e].y[1]>=n[e].y[0]?d:f},direction:n[e].y[1]>=n[e].y[0]?1:-1,bounds:{x1:r,y1:Math.min(d,f),x2:q,y2:Math.max(d,f)},color:c})}}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderRangeBar=function(a){var b=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=0,f,g,l,e=Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0;f=a.axisX.dataInfo.minDiff;var p=
0.9*(d.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(f)/a.plotType.totalDataSeries)<<0;p>e?p=e:Infinity===f?p=e:1>p&&(p=1);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();v&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var h=0;h<a.dataSeriesIndexes.length;h++){var k=a.dataSeriesIndexes[h],n=this.data[k],m=n.dataPoints;if(0<m.length){var r=5<p&&n.bevelEnabled?!0:!1;b.strokeStyle=
"#4572A7 ";for(e=0;e<m.length;e++)if(m[e].getTime?l=m[e].x.getTime():l=m[e].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&null!==m[e].y&&m[e].y.length&&"number"===typeof m[e].y[0]&&"number"===typeof m[e].y[1]){d=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(m[e].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;f=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(m[e].y[1]-a.axisY.conversionParameters.minimum)+
0.5<<0;g=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(l-a.axisX.conversionParameters.minimum)+0.5<<0;g=g-a.plotType.totalDataSeries*p/2+(a.previousDataSeriesCount+h)*p<<0;var q=g+p<<0;d>f&&(c=d,d=f,f=c);c=m[e].color?m[e].color:n._colorSet[e%n._colorSet.length];D(b,d,g,f,q,c,0,null,r,!1,!1,!1,n.fillOpacity);c=n.dataPointIds[e];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:e,x1:d,y1:g,x2:f,y2:q};c=A(c);v&&D(this._eventManager.ghostCtx,
d,g,f,q,c,0,null,!1,!1,!1,!1);if(m[e].indexLabel||n.indexLabel)this._indexLabels.push({chartType:"rangeBar",dataPoint:m[e],dataSeries:n,indexKeyword:0,point:{x:m[e].y[1]>=m[e].y[0]?d:f,y:g+(q-g)/2},direction:m[e].y[1]>=m[e].y[0]?-1:1,bounds:{x1:Math.min(d,f),y1:g,x2:Math.max(d,f),y2:q},color:c}),this._indexLabels.push({chartType:"rangeBar",dataPoint:m[e],dataSeries:n,indexKeyword:1,point:{x:m[e].y[1]>=m[e].y[0]?f:d,y:g+(q-g)/2},direction:m[e].y[1]>=m[e].y[0]?1:-1,bounds:{x1:Math.min(d,f),y1:g,x2:Math.max(d,
f),y2:q},color:c})}}}b.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderRangeArea=function(a){function b(){if(u){var a=null;0<p.lineThickness&&c.stroke();for(var b=g.length-1;0<=b;b--)a=g[b],c.lineTo(a.x,a.y),d.lineTo(a.x,a.y);c.closePath();c.globalAlpha=p.fillOpacity;c.fill();c.globalAlpha=1;d.fill();if(0<p.lineThickness){c.beginPath();c.moveTo(a.x,a.y);for(b=0;b<g.length;b++)a=g[b],c.lineTo(a.x,a.y);c.stroke()}c.beginPath();c.moveTo(m,r);d.beginPath();d.moveTo(m,r);u={x:m,
y:r};g=[];g.push({x:m,y:q})}}var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=[],f=this.plotArea;c.save();v&&d.save();c.beginPath();c.rect(f.x1,f.y1,f.width,f.height);c.clip();v&&(d.beginPath(),d.rect(f.x1,f.y1,f.width,f.height),d.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var g=[],l=a.dataSeriesIndexes[f],p=this.data[l],h=p.dataPoints,e=p.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:l};e=A(e);d.fillStyle=e;var e=
[],k=!0,n=0,m,r,q,s,u=null;if(0<h.length){var t=p._colorSet[n%p._colorSet.length];c.fillStyle=t;c.strokeStyle=t;c.lineWidth=p.lineThickness;for(var x=!0;n<h.length;n++)if(s=h[n].x.getTime?h[n].x.getTime():h[n].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax))if(null!==h[n].y&&h[n].y.length&&"number"===typeof h[n].y[0]&&"number"===typeof h[n].y[1]){m=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(s-a.axisX.conversionParameters.minimum)+0.5<<0;r=
a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(h[n].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(h[n].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;k||x?(c.beginPath(),c.moveTo(m,r),u={x:m,y:r},g=[],g.push({x:m,y:q}),v&&(d.beginPath(),d.moveTo(m,r)),x=k=!1):(c.lineTo(m,r),g.push({x:m,y:q}),v&&d.lineTo(m,r),0==n%250&&b());s=p.dataPointIds[n];this._eventManager.objectMap[s]=
{id:s,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:n,x1:m,y1:r,y2:q};if(0!==h[n].markerSize&&(0<h[n].markerSize||0<p.markerSize)){var w=p.getMarkerProperties(n,m,q,c);e.push(w);var y=A(s);v&&e.push({x:m,y:q,ctx:d,type:w.type,size:w.size,color:y,borderColor:y,borderThickness:w.borderThickness});w=p.getMarkerProperties(n,m,r,c);e.push(w);y=A(s);v&&e.push({x:m,y:r,ctx:d,type:w.type,size:w.size,color:y,borderColor:y,borderThickness:w.borderThickness})}if(h[n].indexLabel||p.indexLabel)this._indexLabels.push({chartType:"rangeArea",
dataPoint:h[n],dataSeries:p,indexKeyword:0,point:{x:m,y:r},direction:h[n].y[0]<=h[n].y[1]?-1:1,color:t}),this._indexLabels.push({chartType:"rangeArea",dataPoint:h[n],dataSeries:p,indexKeyword:1,point:{x:m,y:q},direction:h[n].y[0]<=h[n].y[1]?1:-1,color:t})}else b(),x=!0;b();I.drawMarkers(e)}}c.restore();v&&this._eventManager.ghostCtx.restore()}};w.prototype.renderRangeSplineArea=function(a){function b(){var a=fa(r,2);if(0<a.length){c.beginPath();c.moveTo(a[0].x,a[0].y);v&&(d.beginPath(),d.moveTo(a[0].x,
a[0].y));for(var b=0;b<a.length-3;b+=3)c.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),v&&d.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y);0<l.lineThickness&&c.stroke();a=fa(q,2);c.lineTo(q[q.length-1].x,q[q.length-1].y);for(b=a.length-1;2<b;b-=3)c.bezierCurveTo(a[b-1].x,a[b-1].y,a[b-2].x,a[b-2].y,a[b-3].x,a[b-3].y),v&&d.bezierCurveTo(a[b-1].x,a[b-1].y,a[b-2].x,a[b-2].y,a[b-3].x,a[b-3].y);c.closePath();c.globalAlpha=l.fillOpacity;c.fill();c.globalAlpha=
1;if(0<l.lineThickness){c.beginPath();c.moveTo(q[q.length-1].x,q[q.length-1].y);for(b=a.length-1;2<b;b-=3)c.bezierCurveTo(a[b-1].x,a[b-1].y,a[b-2].x,a[b-2].y,a[b-3].x,a[b-3].y),v&&d.bezierCurveTo(a[b-1].x,a[b-1].y,a[b-2].x,a[b-2].y,a[b-3].x,a[b-3].y);c.stroke()}c.beginPath();v&&(d.closePath(),d.fill())}}var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=[],f=this.plotArea;c.save();v&&d.save();c.beginPath();c.rect(f.x1,f.y1,f.width,f.height);c.clip();v&&
(d.beginPath(),d.rect(f.x1,f.y1,f.width,f.height),d.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var g=a.dataSeriesIndexes[f],l=this.data[g],p=l.dataPoints,e=l.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:g};e=A(e);d.fillStyle=e;var e=[],h=0,k,n,m,r=[],q=[];if(0<p.length){color=l._colorSet[h%l._colorSet.length];c.fillStyle=color;c.strokeStyle=color;for(c.lineWidth=l.lineThickness;h<p.length;h++)if(k=p[h].x.getTime?p[h].x.getTime():p[h].x,!(k<a.axisX.dataInfo.viewPortMin||
k>a.axisX.dataInfo.viewPortMax))if(null!==p[h].y&&p[h].y.length&&"number"===typeof p[h].y[0]&&"number"===typeof p[h].y[1]){k=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(k-a.axisX.conversionParameters.minimum)+0.5<<0;n=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(p[h].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(p[h].y[1]-a.axisY.conversionParameters.minimum)+
0.5<<0;var s=l.dataPointIds[h];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:h,x1:k,y1:n,y2:m};r[r.length]={x:k,y:n};q[q.length]={x:k,y:m};if(0!==p[h].markerSize&&(0<p[h].markerSize||0<l.markerSize)){var u=l.getMarkerProperties(h,k,n,c);e.push(u);var t=A(s);v&&e.push({x:k,y:n,ctx:d,type:u.type,size:u.size,color:t,borderColor:t,borderThickness:u.borderThickness});u=l.getMarkerProperties(h,k,m,c);e.push(u);t=A(s);v&&e.push({x:k,y:m,ctx:d,type:u.type,size:u.size,
color:t,borderColor:t,borderThickness:u.borderThickness})}if(p[h].indexLabel||l.indexLabel)this._indexLabels.push({chartType:"splineArea",dataPoint:p[h],dataSeries:l,indexKeyword:0,point:{x:k,y:n},direction:p[h].y[0]<=p[h].y[1]?-1:1,color:color}),this._indexLabels.push({chartType:"splineArea",dataPoint:p[h],dataSeries:l,indexKeyword:1,point:{x:k,y:m},direction:p[h].y[0]<=p[h].y[1]?1:-1,color:color})}else 0<h&&(b(),r=[],q=[]);b();I.drawMarkers(e)}}c.restore();v&&this._eventManager.ghostCtx.restore()}};
var na=function(a,b,c,d,e,f,g,l){"undefined"===typeof l&&(l=1);a.save();a.globalAlpha=l;"pie"===e?(a.beginPath(),a.moveTo(b.x,b.y),a.arc(b.x,b.y,c,f,g,!1),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.closePath(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(b.x,b.y,c,f,g,!1),a.arc(b.x,b.y,0.6*c,g,f,!0),a.closePath(),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.fill());a.globalAlpha=1;a.restore()};w.prototype.renderPie=function(a){function b(a){u.frame=0;u.maxFrames=a||1}function c(){if(n&&
m){for(var a=0,b=0;b<m.length;b++)a+=Math.abs(m[b].y);for(var c=0,d=0,e=0,g=0,b=0;b<m.length;b++){var f=m[b],l=n.dataPointIds[b],h={id:l,objectType:"dataPoint",dataPointIndex:b,dataSeriesIndex:0};t.push(h);var p=f.indexLabel?f.indexLabel:n.indexLabel?n.indexLabel:f.label?f.label:n.label?n.label:"";k._eventManager.objectMap[l]=h;h.center={x:G.x,y:G.y};h.y=f.y;h.radius=z;h.indexLabelText=k.replaceKeywordsWithValue(p,f,n,b);h.indexLabelPlacement=n.indexLabelPlacement;h.indexLabelLineColor=f.indexLabelLineColor?
f.indexLabelLineColor:n.indexLabelLineColor?n.indexLabelLineColor:f.color?f.color:n._colorSet[b%n._colorSet.length];h.indexLabelLineThickness=f.indexLabelLineThickness?f.indexLabelLineThickness:n.indexLabelLineThickness;h.indexLabelFontColor=f.indexLabelFontColor?f.indexLabelFontColor:n.indexLabelFontColor;h.indexLabelFontStyle=f.indexLabelFontStyle?f.indexLabelFontStyle:n.indexLabelFontStyle;h.indexLabelFontWeight=f.indexLabelFontWeight?f.indexLabelFontWeight:n.indexLabelFontWeight;h.indexLabelFontSize=
f.indexLabelFontSize?f.indexLabelFontSize:n.indexLabelFontSize;h.indexLabelFontFamily=f.indexLabelFontFamily?f.indexLabelFontFamily:n.indexLabelFontFamily;h.indexLabelBackgroundColor=f.indexLabelBackgroundColor?f.indexLabelBackgroundColor:n.indexLabelBackgroundColor?n.indexLabelBackgroundColor:null;h.indexLabelMaxWidth=f.indexLabelMaxWidth?f.indexLabelMaxWidth:n.indexLabelMaxWidth?n.indexLabelMaxWidth:0.33*q.width;h.indexLabelWrap=f.indexLabelWrap?f.indexLabelWrap:n.indexLabelWrap;h.startAngle=0===
b?n.startAngle?n.startAngle/180*Math.PI:0:t[b-1].endAngle;h.startAngle=(h.startAngle+2*Math.PI)%(2*Math.PI);h.endAngle=h.startAngle+2*Math.PI/a*Math.abs(f.y);f=(h.endAngle+h.startAngle)/2;f=(f+2*Math.PI)%(2*Math.PI);h.midAngle=f;if(h.midAngle>Math.PI/2-y&&h.midAngle<Math.PI/2+y){if(0===c||t[e].midAngle>h.midAngle)e=b;c++}else if(h.midAngle>3*Math.PI/2-y&&h.midAngle<3*Math.PI/2+y){if(0===d||t[g].midAngle>h.midAngle)g=b;d++}h.hemisphere=f>Math.PI/2&&f<=3*Math.PI/2?"left":"right";h.indexLabelTextBlock=
new H(k.plotArea.ctx,{fontSize:h.indexLabelFontSize,fontFamily:h.indexLabelFontFamily,fontColor:h.indexLabelFontColor,fontStyle:h.indexLabelFontStyle,fontWeight:h.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:h.indexLabelBackgroundColor,maxWidth:h.indexLabelMaxWidth,maxHeight:h.indexLabelWrap?5*h.indexLabelFontSize:1.5*h.indexLabelFontSize,text:h.indexLabelText,padding:0,textBaseline:"top"});h.indexLabelTextBlock.measureText()}f=a=0;l=!1;for(b=0;b<m.length;b++)h=t[(e+b)%m.length],1<
c&&(h.midAngle>Math.PI/2-y&&h.midAngle<Math.PI/2+y)&&(a<=c/2&&!l?(h.hemisphere="right",a++):(h.hemisphere="left",l=!0));l=!1;for(b=0;b<m.length;b++)h=t[(g+b)%m.length],1<d&&(h.midAngle>3*Math.PI/2-y&&h.midAngle<3*Math.PI/2+y)&&(f<=d/2&&!l?(h.hemisphere="left",f++):(h.hemisphere="right",l=!0))}}function d(){var a=k.plotArea.ctx;if(null!==u&&u.frame<u.maxFrames){0===u.frame&&(u.prevMaxAngle=t[0].startAngle);a.clearRect(q.x1,q.y1,q.width,q.height);a.fillStyle=k.backgroundColor;a.fillRect(q.x1,q.y1,q.width,
q.height);for(var a=u.prevMaxAngle+2*Math.PI/u.maxFrames,c=0;c<m.length;c++){var g=0===c?t[c].startAngle:f,f=g+(t[c].endAngle-t[c].startAngle),h=!1;f>a&&(f=a,h=!0);var l=m[c].color?m[c].color:n._colorSet[c%n._colorSet.length];f>g&&na(k.plotArea.ctx,t[c].center,t[c].radius,l,n.type,g,f,n.fillOpacity);if(h)break}u.frame++;u.prevMaxAngle=a;u.frame<u.maxFrames?k.animationRequestId=k.requestAnimFrame.call(window,d):(b(v?15:4),e())}}function e(){var a=k.plotArea.ctx;if(null!==u&&u.frame<u.maxFrames){a.clearRect(q.x1,
q.y1,q.width,q.height);a.fillStyle=k.backgroundColor;a.fillRect(q.x1,q.y1,q.width,q.height);for(a=0;a<m.length;a++){var b=t[a].startAngle,c=t[a].endAngle;if(c>b){var d=0.07*z*Math.cos(t[a].midAngle),f=0.07*z*Math.sin(t[a].midAngle),g=!1;if(m[a].exploded){if(Math.abs(t[a].center.x-(G.x+d))>Math.abs(0.5*d/u.maxFrames)||Math.abs(t[a].center.y-(G.y+f))>Math.abs(0.5*f/u.maxFrames))t[a].center.x+=d/u.maxFrames,t[a].center.y+=f/u.maxFrames,g=!0}else if(Math.abs(t[a].center.x-G.x)>Math.abs(0.5*d/u.maxFrames)||
Math.abs(t[a].center.y-G.y)>Math.abs(0.5*f/u.maxFrames))t[a].center.x-=d/u.maxFrames,t[a].center.y-=f/u.maxFrames,g=!0;g&&(d={},d.dataSeries=n,d.dataPoint=n.dataPoints[a],d.index=a,k._toolTip.highlightObjects([d]));na(k.plotArea.ctx,t[a].center,t[a].radius,m[a].color?m[a].color:n._colorSet[a%n._colorSet.length],n.type,b,c,n.fillOpacity)}}u.frame++;a=k.plotArea.ctx;a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<m.length;b++)c=t[b],c.indexLabelText&&
(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/2,d=0,d="left"===c.hemisphere?"outside"===n.indexLabelPlacement?-(c.indexLabelTextBlock.width+r):-c.indexLabelTextBlock.width/2:"outside"===n.indexLabelPlacement?r:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=d,c.indexLabelTextBlock.render(!0),c.indexLabelTextBlock.x-=d,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"outside"===c.indexLabelPlacement&&(d=c.center.x+z*Math.cos(c.midAngle),f=c.center.y+z*Math.sin(c.midAngle),
a.strokeStyle=c.indexLabelLineColor,a.lineWidth=c.indexLabelLineThickness,a.beginPath(),a.moveTo(d,f),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===c.hemisphere?-r:r),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");u.frame<u.maxFrames&&(k.animationRequestId=k.requestAnimFrame.call(window,e))}}function f(a,b){var c=a.indexLabelTextBlock.x,d=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,e=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/
2,f=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/2,g=b.indexLabelTextBlock.x+b.indexLabelTextBlock.width,h=b.indexLabelTextBlock.y+b.indexLabelTextBlock.height/2;return a.indexLabelTextBlock.x+a.indexLabelTextBlock.width<b.indexLabelTextBlock.x-r||c>g+r||d>h+r||e<f-r?!1:!0}function g(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,d=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,e=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/2,f=b.indexLabelTextBlock.y+
b.indexLabelTextBlock.height/2;return c=b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?e-d:c-f}function l(a){for(var b=null,c=1;c<m.length;c++)if(b=(a+c+t.length)%t.length,t[b].hemisphere!==t[a].hemisphere){b=null;break}else if(t[b].indexLabelText&&b!==a&&(0>g(t[b],t[a])||("right"===t[a].hemisphere?t[b].indexLabelTextBlock.y>=t[a].indexLabelTextBlock.y:t[b].indexLabelTextBlock.y<=t[a].indexLabelTextBlock.y)))break;else b=null;return b}function p(a,b){b=b||0;var c=0,d=G.y-1*F,e=G.y+1*F;if(0<=a&&a<
m.length){var f=t[a];if(0>b&&f.indexLabelTextBlock.y<d||0<b&&f.indexLabelTextBlock.y>e)return 0;var h=b,k=0,n=0,n=k=k=0;0>h?f.indexLabelTextBlock.y-f.indexLabelTextBlock.height/2>d&&f.indexLabelTextBlock.y-f.indexLabelTextBlock.height/2+h<d&&(h=-(d-(f.indexLabelTextBlock.y-f.indexLabelTextBlock.height/2+h))):f.indexLabelTextBlock.y+f.indexLabelTextBlock.height/2<d&&f.indexLabelTextBlock.y+f.indexLabelTextBlock.height/2+h>e&&(h=f.indexLabelTextBlock.y+f.indexLabelTextBlock.height/2+h-e);h=f.indexLabelTextBlock.y+
h;d=0;d="right"===f.hemisphere?G.x+Math.sqrt(Math.pow(F,2)-Math.pow(h-G.y,2)):G.x-Math.sqrt(Math.pow(F,2)-Math.pow(h-G.y,2));n=G.x+z*Math.cos(f.midAngle);k=G.y+z*Math.sin(f.midAngle);k=Math.sqrt(Math.pow(d-n,2)+Math.pow(h-k,2));n=Math.acos(z/F);k=Math.acos((F*F+z*z-k*k)/(2*z*F));h=k<n?h-f.indexLabelTextBlock.y:0;d=null;for(e=1;e<m.length;e++)if(d=(a-e+t.length)%t.length,t[d].hemisphere!==t[a].hemisphere){d=null;break}else if(t[d].indexLabelText&&t[d].hemisphere===t[a].hemisphere&&d!==a&&(0>g(t[d],
t[a])||("right"===t[a].hemisphere?t[d].indexLabelTextBlock.y<=t[a].indexLabelTextBlock.y:t[d].indexLabelTextBlock.y>=t[a].indexLabelTextBlock.y)))break;else d=null;n=d;k=l(a);e=d=0;0>h?(e="right"===f.hemisphere?n:k,c=h,null!==e&&(n=-h,h=f.indexLabelTextBlock.y-f.indexLabelTextBlock.height/2-(t[e].indexLabelTextBlock.y+t[e].indexLabelTextBlock.height/2),h-n<w&&(d=-n,s++,e=p(e,d),+e.toFixed(B)>+d.toFixed(B)&&(c=h>w?-(h-w):-(n-(e-d)))))):0<h&&(e="right"===f.hemisphere?k:n,c=h,null!==e&&(n=h,h=t[e].indexLabelTextBlock.y-
t[e].indexLabelTextBlock.height/2-(f.indexLabelTextBlock.y+f.indexLabelTextBlock.height/2),h-n<w&&(d=n,s++,e=p(e,d),+e.toFixed(B)<+d.toFixed(B)&&(c=h>w?h-w:n-(d-e)))));c&&(h=f.indexLabelTextBlock.y+c,d=0,d="right"===f.hemisphere?G.x+Math.sqrt(Math.pow(F,2)-Math.pow(h-G.y,2)):G.x-Math.sqrt(Math.pow(F,2)-Math.pow(h-G.y,2)),f.midAngle>Math.PI/2-y&&f.midAngle<Math.PI/2+y?(e=(a-1+t.length)%t.length,e=t[e],n=t[(a+1+t.length)%t.length],"left"===f.hemisphere&&"right"===e.hemisphere&&d>e.indexLabelTextBlock.x?
d=e.indexLabelTextBlock.x-15:"right"===f.hemisphere&&("left"===n.hemisphere&&d<n.indexLabelTextBlock.x)&&(d=n.indexLabelTextBlock.x+15)):f.midAngle>3*Math.PI/2-y&&f.midAngle<3*Math.PI/2+y&&(e=(a-1+t.length)%t.length,e=t[e],n=t[(a+1+t.length)%t.length],"right"===f.hemisphere&&"left"===e.hemisphere&&d<e.indexLabelTextBlock.x?d=e.indexLabelTextBlock.x+15:"left"===f.hemisphere&&("right"===n.hemisphere&&d>n.indexLabelTextBlock.x)&&(d=n.indexLabelTextBlock.x-15)),f.indexLabelTextBlock.y=h,f.indexLabelTextBlock.x=
d,f.indexLabelAngle=Math.atan2(f.indexLabelTextBlock.y-G.y,f.indexLabelTextBlock.x-G.x))}return c}function h(){var a=k.plotArea.ctx;a.fillStyle="grey";a.strokeStyle="grey";a.font="16px Arial";a.textBaseline="middle";for(var c=0,e=a=0,a=0;10>a&&(1>a||0<e);a++){z-=e;e=0;if("outside"===n.indexLabelPlacement){F=z*A;for(c=0;c<m.length;c++){var h=t[c];h.indexLabelTextBlock.x=G.x+F*Math.cos(h.midAngle);h.indexLabelTextBlock.y=G.y+F*Math.sin(h.midAngle);h.indexLabelAngle=h.midAngle;h.radius=z}for(var s,u,
c=0;c<m.length;c++){var h=t[c],y=l(c);if(null!==y){s=t[c];u=t[y];var C=0,C=g(s,u)-w;if(0>C){for(var D=u=s=0;D<m.length;D++)D!==c&&t[D].hemisphere===h.hemisphere&&(t[D].indexLabelTextBlock.y<h.indexLabelTextBlock.y?s++:u++);D=C/(s+u||1)*u;s=-1*(C-D);var H=u=0;"right"===h.hemisphere?(u=p(c,D),s=-1*(C-u),H=p(y,s),+H.toFixed(B)<+s.toFixed(B)&&+u.toFixed(B)<=+D.toFixed(B)&&p(c,-(s-H))):(u=p(y,D),s=-1*(C-u),H=p(c,s),+H.toFixed(B)<+s.toFixed(B)&&+u.toFixed(B)<=+D.toFixed(B)&&p(y,-(s-H)))}}}}else for(c=0;c<
m.length;c++)h=t[c],F="pie"===n.type?0.7*z:0.8*z,C=G.x+F*Math.cos(h.midAngle),D=G.y+F*Math.sin(h.midAngle),h.indexLabelTextBlock.x=C,h.indexLabelTextBlock.y=D;for(c=0;c<m.length;c++)h=t[c],C=h.indexLabelTextBlock.measureText(),0!==C.height&&0!==C.width&&(C=C=0,"right"===h.hemisphere?(C=q.x2-(h.indexLabelTextBlock.x+h.indexLabelTextBlock.width+r),C*=-1):C=q.x1-(h.indexLabelTextBlock.x-h.indexLabelTextBlock.width-r),0<C&&(Math.abs(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-G.y)<z||Math.abs(h.indexLabelTextBlock.y+
h.indexLabelTextBlock.height/2-G.y)<z)&&(C/=Math.abs(Math.cos(h.indexLabelAngle)),9<C&&(C*=0.3),C>e&&(e=C)),C=C=0,0<h.indexLabelAngle&&h.indexLabelAngle<Math.PI?(C=q.y2-(h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2+5),C*=-1):C=q.y1-(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-5),0<C&&Math.abs(h.indexLabelTextBlock.x-G.x)<z&&(C/=Math.abs(Math.sin(h.indexLabelAngle)),9<C&&(C*=0.3),C>e&&(e=C)));c=function(a,b,c){for(var d=[],e=0;d.push(t[b]),b!==c;b=(b+1+m.length)%m.length);d.sort(function(a,
b){return a.y-b.y});for(b=0;b<d.length;b++)if(c=d[b],e<a)e+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text="",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};y=h=-1;for(D=H=0;D<m.length;D++)if(s=t[D],s.indexLabelText){var I=l(D);null!==I&&(u=t[I],C=0,C=g(s,u),0>C&&f(s,u)?(0>h&&(h=D),I!==h&&(y=I),H+=-C):0<H&&(c(H,h,y),y=h=-1,H=0))}0<H&&c(H,h,y)}b(k.animationEnabled&&0===k.renderCount?v?60:30:1);d()}var k=this;if(!(0>=a.dataSeriesIndexes.length)){var n=this.data[a.dataSeriesIndexes[0]],
m=n.dataPoints,r=10,q=this.plotArea,s=0,u={frame:0,maxFrames:1},t=[],w=2,A=1.3,y=20/180*Math.PI,B=6,G={x:(q.x2+q.x1)/2,y:(q.y2+q.y1)/2},z="inside"===n.indexLabelPlacement?0.95*Math.min(q.width,q.height)/2:0.8*Math.min(q.width,q.height)/2,F=z*A;this.pieDoughnutClickHandler=function(a){u.frame===u.maxFrames&&(a=a.dataPoint,a.exploded=a.exploded?!1:!0,b(v?15:4),1<this.dataPoints.length&&e())};c();h()}};w.prototype.animationRequestId=null;w.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||
window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();w.prototype.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;$.prototype.registerSpace=function(a,b){"top"===a?this._topOccupied+=b.height:"bottom"===a?this._bottomOccupied+=
b.height:"left"===a?this._leftOccupied+=b.width:"right"===a&&(this._rightOccupied+=b.width)};$.prototype.unRegisterSpace=function(a,b){"top"===a?this._topOccupied-=b.height:"bottom"===a?this._bottomOccupied-=b.height:"left"===a?this._leftOccupied-=b.width:"right"===a&&(this._rightOccupied-=b.width)};$.prototype.getFreeSpace=function(){return{x1:this._leftOccupied,y1:this._topOccupied,x2:this.chart.width-this._rightOccupied,y2:this.chart.height-this._bottomOccupied,width:this.chart.width-this._rightOccupied-
this._leftOccupied,height:this.chart.height-this._bottomOccupied-this._topOccupied}};$.prototype.reset=function(){this._topOccupied=0;this._bottomOccupied=3;this._rightOccupied=this._leftOccupied=0};N(H,K);H.prototype.render=function(a){a&&this.ctx.save();var b=this.ctx.font;this.ctx.textBaseline=this.textBaseline;var c=0;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y+c);"middle"===this.textBaseline&&(c=-this._lineHeight/2);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/
180*this.angle);var d=0,e=this.padding,f=null;(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,c,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);this.ctx.fillStyle=this.fontColor;for(c=0;c<this._wrappedText.lines.length;c++)f=this._wrappedText.lines[c],"right"===this.horizontalAlign?d=this.width-f.width-this.padding:"left"===this.horizontalAlign?d=this.padding:"center"===this.horizontalAlign&&(d=(this.width-
2*this.padding)/2-f.width/2+this.padding),this.ctx.fillText(f.text,d,e),e+=f.height;this.ctx.font=b;a&&this.ctx.restore()};H.prototype.setText=function(a){this.text=a;this._isDirty=!0;this._wrappedText=null};H.prototype.measureText=function(){if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);this._isDirty=!1;return{width:this.width,height:this.height}};H.prototype._getLineWithWidth=function(a,b,c){a=String(a);if(!a)return{text:"",width:0};var d=c=
0,e=a.length-1,f=Infinity;for(this.ctx.font=this._getFontString();d<=e;){var f=Math.floor((d+e)/2),g=a.substr(0,f+1);c=this.ctx.measureText(g).width;if(c<b)d=f+1;else if(c>b)e=f-1;else break}c>b&&1<g.length&&(g=g.substr(0,g.length-1),c=this.ctx.measureText(g).width);b=!0;if(g.length===a.length||" "===a[g.length])b=!1;b&&(a=g.split(" "),1<a.length&&a.pop(),g=a.join(" "),c=this.ctx.measureText(g).width);return{text:g,width:c}};H.prototype._wrapText=function(){var a=new String(Y(this.text)),b=[],c=this.ctx.font,
d=0,e=0;for(this.ctx.font=this._getFontString();0<a.length;){var f=this.maxHeight-2*this.padding,g=this._getLineWithWidth(a,this.maxWidth-2*this.padding,!1);g.height=this._lineHeight;b.push(g);e=Math.max(e,g.width);d+=g.height;a=Y(a.slice(g.text.length,a.length));f&&d>f&&(g=b.pop(),d-=g.height)}this._wrappedText={lines:b,width:e,height:d};this.width=e+2*this.padding;this.height=d+2*this.padding;this.ctx.font=c};H.prototype._getFontString=function(){return sa("",this,null)};N(aa,K);aa.prototype.render=
function(){if(this.text){var a=this.chart.layoutManager.getFreeSpace(),b=0,c=0,d=0,e=0,f=0,g,l;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(e=a.width-2*this.margin,f=0.5*a.height-2*this.margin,d=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(e=a.height-2*this.margin,f=0.5*a.width-2*this.margin):"center"===this.horizontalAlign&&(e=a.width-2*this.margin,f=0.5*a.height-2*this.margin));var f=new H(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,
fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:e,maxHeight:f,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"}),p=f.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(c=this.margin,l="top"):"bottom"===this.verticalAlign&&
(c=a.y2-this.margin-p.height,l="bottom"),"left"===this.horizontalAlign?b=a.x1+this.margin:"center"===this.horizontalAlign?b=a.x1+(e/2-p.width/2)+this.margin:"right"===this.horizontalAlign&&(b=a.x2-this.margin-p.width),g=this.horizontalAlign,this.width=p.width,this.height=p.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(b=a.x1+this.margin,c=a.y2-this.margin-(e/2-p.width/2),d=-90,l="left",this.width=p.height,this.height=p.width):"right"===this.horizontalAlign?(b=a.x2-this.margin,
c=a.y1+this.margin+(e/2-p.width/2),d=90,l="right",this.width=p.height,this.height=p.width):"center"===this.horizontalAlign&&(c=a.y1+(a.height/2-p.height/2),b=a.x1+(a.width/2-p.width/2),l="center",this.width=p.width,this.height=p.height),g="center");f.x=b;f.y=c;f.angle=d;f.horizontalAlign=g;f.render(!0);this.chart.layoutManager.registerSpace(l,{width:this.width+2*this.margin,height:this.height+2*this.margin});this.bounds={x1:b,y1:c,x2:b+this.width,y2:c+this.height};this.ctx.textBaseline="top"}};N(ga,
K);ga.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace(),b=null,c=0,d=0,e=0,f=0,g=[],l=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation="horizontal",b=this.verticalAlign,e=0.9*a.width,f=0.5*a.height):"center"===this.verticalAlign&&(this.orientation="vertical",b=this.horizontalAlign,e=0.5*a.width,f=0.9*a.height);for(var p=0;p<this.dataSeries.length;p++){var h=this.dataSeries[p],k=h.legendMarkerType?h.legendMarkerType:"line"!==h.type&&"stepLine"!==
h.type&&"spline"!==h.type&&"scatter"!==h.type&&"bubble"!==h.type||!h.markerType?O.getDefaultLegendMarker(h.type):h.markerType,n=h.legendText?h.legendText:h.name,m=h.legendMarkerColor?h.legendMarkerColor:h.markerColor?h.markerColor:h._colorSet[0],r=h.markerSize||"line"!==h.type&&"stepLine"!==h.type&&"spline"!==h.type?0.6*this.lineHeight:0;if("pie"!==h.type&&"doughnut"!==h.type&&"funnel"!==h.type)k={markerType:k,markerColor:m,text:n,textBlock:null,chartType:h.type,markerSize:r,lineColor:h._colorSet[0],
dataSeriesIndex:p,dataPointIndex:null},g.push(k);else for(var q=0;q<h.dataPoints.length;q++)r=h.dataPoints[q],k=r.legendMarkerType?r.legendMarkerType:h.legendMarkerType?h.legendMarkerType:O.getDefaultLegendMarker(h.type),n=r.legendText?r.legendText:h.legendText?h.legendText:r.name?r.name:"DataPoint: "+(q+1),m=r.markerColor?r.markerColor:h.markerColor?h.markerColor:r.color?r.color:h.color?h.color:h._colorSet[q%h._colorSet.length],r=0===r.markerSize||0===h.markerSize&&!r.markerSize?0:0.6*this.lineHeight,
k={markerType:k,markerColor:m,text:n,textBlock:null,chartType:h.type,markerSize:r,dataSeriesIndex:p,dataPointIndex:q},g.push(k)}if(0<g.length){h=null;for(p=q=0;p<g.length;p++){k=g[p];if("horizontal"===this.orientation){k.textBlock=new H(this.ctx,{x:0,y:0,maxWidth:e,maxHeight:this.lineHeight,angle:0,text:k.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"});k.textBlock.measureText();
if(!h||h.width+k.textBlock.width+(0===h.width?0:this.horizontalSpacing)>e)h={items:[],width:0},l.push(h),this.height=l.length*(k.textBlock.height+5);k.textBlock.x=h.width;k.textBlock.y=0;h.width+=Math.round(k.textBlock.width+k.textBlock._lineHeight+(0===h.width?0:0.5*k.textBlock._lineHeight))}else this.height+this.lineHeight<f?(h={items:[],width:0},l.push(h),this.height=l.length*this.lineHeight):(h=l[q],q=(q+1)%l.length),k.textBlock=new H(this.ctx,{x:0,y:0,maxWidth:e,maxHeight:1.5*this.fontSize,angle:0,
text:k.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),k.textBlock.measureText(),k.textBlock.x=h.width,k.textBlock.y=0,h.width+=k.textBlock.width+k.textBlock._lineHeight+(0===h.width?0:0.5*k.textBlock._lineHeight);h.items.push(k);this.width=Math.max(h.width,this.width)}this.height=l.length*this.lineHeight}"top"===this.verticalAlign?(d="left"===this.horizontalAlign?a.x1+2:
"right"===this.horizontalAlign?a.x2-this.width-2:a.x1+a.width/2-this.width/2,c=a.y1):"center"===this.verticalAlign?(d="left"===this.horizontalAlign?a.x1+2:"right"===this.horizontalAlign?a.x2-this.width-2:a.x1+a.width/2-this.width/2,c=a.y1+a.height/2-this.height/2):"bottom"===this.verticalAlign&&(d="left"===this.horizontalAlign?a.x1+2:"right"===this.horizontalAlign?a.x2-this.width-2:a.x1+a.width/2-this.width/2,c=a.y2-this.height-5);this.items=g;for(p=0;p<this.items.length;p++)k=g[p],k.id=++this.chart._eventManager.lastObjectId,
this.chart._eventManager.objectMap[k.id]={id:k.id,objectType:"legendItem",legendItemIndex:p,dataSeriesIndex:k.dataSeriesIndex,dataPointIndex:k.dataPointIndex};for(p=0;p<l.length;p++)for(h=l[p],a=0;a<h.items.length;a++){k=h.items[a];f=k.textBlock.x+d+(0===a?0.2*k.markerSize:0.4*this.lineHeight+0.2*k.markerSize);g=c+p*this.lineHeight;e=f;this.chart.data[k.dataSeriesIndex].visible||(this.ctx.globalAlpha=0.5);if("line"===k.chartType||"stepLine"===k.chartType||"spline"===k.chartType)this.ctx.strokeStyle=
k.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(f-0.1*this.lineHeight,g+this.lineHeight/2),this.ctx.lineTo(f+0.7*this.lineHeight,g+this.lineHeight/2),this.ctx.stroke(),e-=0.1*this.lineHeight;I.drawMarker(f+k.markerSize/2,g+this.lineHeight/2,this.ctx,k.markerType,k.markerSize,k.markerColor,null,0);k.textBlock.x=f+Math.round(0.9*this.lineHeight);k.textBlock.y=g;k.textBlock.render(!0);this.chart.data[k.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);
f=A(k.id);this.ghostCtx.fillStyle=f;this.ghostCtx.beginPath();this.ghostCtx.fillRect(e,k.textBlock.y,k.textBlock.x+k.textBlock.width-e,k.textBlock.height);k.x1=this.chart._eventManager.objectMap[k.id].x1=e;k.y1=this.chart._eventManager.objectMap[k.id].y1=k.textBlock.y;k.x2=this.chart._eventManager.objectMap[k.id].x2=k.textBlock.x+k.textBlock.width;k.y2=this.chart._eventManager.objectMap[k.id].y2=k.textBlock.y+k.textBlock.height}this.chart.layoutManager.registerSpace(b,{width:this.width+2+2,height:this.height+
5+5});this.bounds={x1:d,y1:c,x2:d+this.width,y2:c+this.height}};N(ka,K);ka.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace();this.ctx.fillStyle="red";this.ctx.fillRect(a.x1,a.y1,a.x2,a.y2)};N(O,K);O.prototype.getDefaultAxisPlacement=function(){var a=this.type;if("column"===a||"line"===a||"stepLine"===a||"spline"===a||"area"===a||"stepArea"===a||"splineArea"===a||"stackedColumn"===a||"stackedLine"===a||"bubble"===a||"scatter"===a||"stackedArea"===a||"stackedColumn100"===a||
"stackedLine100"===a||"stackedArea100"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeArea"===a||"rangeSplineArea"===a)return"normal";if("bar"===a||"stackedBar"===a||"stackedBar100"===a||"rangeBar"===a)return"xySwapped";if("pie"===a||"doughnut"===a||"funnel"===a)return"none";window.console.log("Unknown Chart Type: "+a);return null};O.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===
a||"scatter"===a||"stackedColumn100"===a||"stackedLine100"===a||"stepArea"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeBar"===a||"rangeArea"===a||"rangeSplineArea"===a)return"square";if("line"===a||"stepLine"===a||"spline"===a||"pie"===a||"doughnut"===a||"funnel"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a)return"triangle";window.console.log("Unknown Chart Type: "+a);return null};O.prototype.getDataPointAtX=function(a,b){if(!this.dataPoints||
0===this.dataPoints.length)return null;var c={dataPoint:null,distance:Infinity,index:NaN},d=null,e=0,f=0,g=1,l=Infinity,p=0,h=0,k=0;"none"!==this.chart.plotInfo.axisPlacement&&(k=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,k=0<k?Math.min(Math.max((this.dataPoints.length-1)/k*(a-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0);for(;;){f=0<g?k+e:k-e;if(0<=f&&f<this.dataPoints.length){var d=this.dataPoints[f],n=Math.abs(d.x-a);n<c.distance&&(c.dataPoint=d,c.distance=n,c.index=
f);d=Math.abs(d.x-a);d<=l?l=d:0<g?p++:h++;if(1E3<p&&1E3<h)break}else if(0>k-e&&k+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}return b||c.dataPoint.x!==a?b&&null!==c.dataPoint?c:null:c};O.prototype.getDataPointAtXY=function(a,b,c){if(!this.dataPoints||0===this.dataPoints.length)return null;c=c||!1;var d=[],e=0,f=0,g=1,l=!1,p=Infinity,h=0,k=0,n=0;"none"!==this.chart.plotInfo.axisPlacement&&(n=this.chart.axisX.getXValueAt({x:a,y:b}),f=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,
n=0<f?Math.min(Math.max((this.dataPoints.length-1)/f*(n-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0);for(;;){f=0<g?n+e:n-e;if(0<=f&&f<this.dataPoints.length){var m=this.chart._eventManager.objectMap[this.dataPointIds[f]],r=this.dataPoints[f],q=null;if(m){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":case "rangeColumn":case "rangeBar":a>=m.x1&&(a<=m.x2&&b>=m.y1&&b<=m.y2)&&(d.push({dataPoint:r,dataPointIndex:f,
dataSeries:this,distance:Math.min(Math.abs(m.x1-a),Math.abs(m.x2-a),Math.abs(m.y1-b),Math.abs(m.y2-b))}),l=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var s=R("markerSize",r,this)||4,u=c?20:s,q=Math.sqrt(Math.pow(m.x1-a,2)+Math.pow(m.y1-b,2));q<=u&&d.push({dataPoint:r,dataPointIndex:f,dataSeries:this,distance:q});f=Math.abs(m.x1-a);f<=p?p=f:0<g?h++:k++;q<=s/2&&(l=!0);break;case "rangeArea":case "rangeSplineArea":s=
R("markerSize",r,this)||4;u=c?20:s;q=Math.min(Math.sqrt(Math.pow(m.x1-a,2)+Math.pow(m.y1-b,2)),Math.sqrt(Math.pow(m.x1-a,2)+Math.pow(m.y2-b,2)));q<=u&&d.push({dataPoint:r,dataPointIndex:f,dataSeries:this,distance:q});f=Math.abs(m.x1-a);f<=p?p=f:0<g?h++:k++;q<=s/2&&(l=!0);break;case "bubble":s=m.size;q=Math.sqrt(Math.pow(m.x1-a,2)+Math.pow(m.y1-b,2));q<=s/2&&(d.push({dataPoint:r,dataPointIndex:f,dataSeries:this,distance:q}),l=!0);break;case "pie":case "doughnut":s=m.center;u="doughnut"===this.type?
0.6*m.radius:0;q=Math.sqrt(Math.pow(s.x-a,2)+Math.pow(s.y-b,2));q<m.radius&&q>u&&(q=Math.atan2(b-s.y,a-s.x),0>q&&(q+=2*Math.PI),q=(180*(q/Math.PI)%360+360)%360,s=(180*(m.startAngle/Math.PI)%360+360)%360,u=(180*(m.endAngle/Math.PI)%360+360)%360,0===u&&1<m.endAngle&&(u=360),s>u&&(u+=360,q<s&&(q+=360)),q>s&&q<u&&(d.push({dataPoint:r,dataPointIndex:f,dataSeries:this,distance:0}),l=!0));break;case "candlestick":if(a>=m.x1-m.borderThickness/2&&a<=m.x2+m.borderThickness/2&&b>=m.y2-m.borderThickness/2&&b<=
m.y3+m.borderThickness/2||Math.abs(m.x2-a+m.x1-a)<m.borderThickness&&b>=m.y1&&b<=m.y4)d.push({dataPoint:r,dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(m.x1-a),Math.abs(m.x2-a),Math.abs(m.y2-b),Math.abs(m.y3-b))}),l=!0;break;case "ohlc":if(Math.abs(m.x2-a+m.x1-a)<m.borderThickness&&b>=m.y2&&b<=m.y3||a>=m.x1&&a<=(m.x2+m.x1)/2&&b>=m.y1-m.borderThickness/2&&b<=m.y1+m.borderThickness/2||a>=(m.x1+m.x2)/2&&a<=m.x2&&b>=m.y4-m.borderThickness/2&&b<=m.y4+m.borderThickness/2)d.push({dataPoint:r,
dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(m.x1-a),Math.abs(m.x2-a),Math.abs(m.y2-b),Math.abs(m.y3-b))}),l=!0}if(l||1E3<h&&1E3<k)break}}else if(0>n-e&&n+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}a=null;for(b=0;b<d.length;b++)a?d[b].distance<=a.distance&&(a=d[b]):a=d[b];return a};O.prototype.getMarkerProperties=function(a,b,c,d){var e=this.dataPoints;return{x:b,y:c,ctx:d,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,
color:e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};N(z,K);z.prototype.createLabels=function(){var a,b=0,c,d=0,e=0,b=0;if("bottom"===this._position||"top"===
this._position)b=this.lineCoordinates.width/Math.abs(this.maximum-this.minimum)*this.interval,d=this.labelAutoFit?"undefined"===typeof this._options.labelMaxWidth?0.9*b>>0:this.labelMaxWidth:"undefined"===typeof this._options.labelMaxWidth?0.7*this.chart.width>>0:this.labelMaxWidth,e="undefined"===typeof this._options.labelWrap||this.labelWrap?0.5*this.chart.height>>0:1.5*this.labelFontSize;else if("left"===this._position||"right"===this._position)b=this.lineCoordinates.height/Math.abs(this.maximum-
this.minimum)*this.interval,d=this.labelAutoFit?"undefined"===typeof this._options.labelMaxWidth?0.3*this.chart.width>>0:this.labelMaxWidth:"undefined"===typeof this._options.labelMaxWidth?0.5*this.chart.width>>0:this.labelMaxWidth,e="undefined"===typeof this._options.labelWrap||this.labelWrap?2*b>>0:1.5*this.labelFontSize;if("axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType)for(c=oa(new Date(this.maximum),this.interval,this.intervalType),b=this.intervalStartPosition;b<c;oa(b,this.interval,
this.intervalType))a=b.getTime(),a="axisX"===this.type&&this.labels[a]?this.labels[a]:xa(b,this.valueFormatString,this.chart._cultureInfo),a=new H(this.ctx,{x:0,y:0,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:b.getTime(),textBlock:a,effectiveHeight:null});
else{c=this.maximum;if(this.labels&&this.labels.length){a=Math.ceil(this.interval);for(var f=Math.ceil(this.intervalStartPosition),g=!1,b=f;b<this.maximum;b+=a)if(this.labels[b])g=!0;else{g=!1;break}g&&(this.interval=a,this.intervalStartPosition=f)}for(b=this.intervalStartPosition;b<=c;b+=this.interval)a="axisX"===this.type&&this.labels[b]?this.labels[b]:W(b,this.valueFormatString,this.chart._cultureInfo),a=new H(this.ctx,{x:0,y:0,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:this.prefix+a+this.suffix,
horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:b,textBlock:a,effectiveHeight:null})}for(b=0;b<this.stripLines.length;b++)c=this.stripLines[b],a=new H(this.ctx,{x:0,y:0,backgroundColor:c.labelBackgroundColor,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:c.label,horizontalAlign:"left",fontSize:c.labelFontSize,
fontFamily:c.labelFontFamily,fontWeight:c.labelFontWeight,fontColor:c.labelFontColor,fontStyle:c.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:c.value,textBlock:a,effectiveHeight:null,stripLine:c})};z.prototype.createLabelsAndCalculateWidth=function(){var a=0;this._labels=[];if("left"===this._position||"right"===this._position)for(this.createLabels(),i=0;i<this._labels.length;i++){var b=this._labels[i].textBlock.measureText(),c=0,c=0===this.labelAngle?b.width:
b.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+b.height/2*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<c&&(a=c);this._labels[i].effectiveWidth=c}return(this.title?ba(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0)+a+this.tickLength+5};z.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];var b,c=0;this.createLabels();if("bottom"===this._position||"top"===this._position)for(c=0;c<this._labels.length;c++){b=this._labels[c].textBlock;b=b.measureText();
var d=0,d=0===this.labelAngle?b.height:b.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+b.height/2*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<d&&(a=d);this._labels[c].effectiveHeight=d}return(this.title?ba(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0)+a+this.tickLength+5};z.setLayoutAndRender=function(a,b,c,d,e){var f,g,l,p=a.chart,h=p.ctx;a.calculateAxisParameters();b&&b.calculateAxisParameters();c&&c.calculateAxisParameters();if(b&&c&&"undefined"===typeof b._options.maximum&&
"undefined"===typeof b._options.minimum&&"undefined"===typeof b._options.interval&&"undefined"===typeof c._options.maximum&&"undefined"===typeof c._options.minimum&&"undefined"===typeof c._options.interval){l=(b.maximum-b.minimum)/b.interval;var k=(c.maximum-c.minimum)/c.interval;l>k?c.maximum=c.interval*l+c.minimum:k>l&&(b.maximum=b.interval*k+b.minimum)}k=b?b.margin:0;if("normal"===d){a.lineCoordinates={};var n=Math.ceil(b?b.createLabelsAndCalculateWidth():0);f=Math.round(e.x1+n+k);a.lineCoordinates.x1=
f;k=Math.ceil(c?c.createLabelsAndCalculateWidth():0);g=Math.round(e.x2-k>a.chart.width-10?a.chart.width-10:e.x2-k);a.lineCoordinates.x2=g;a.lineCoordinates.width=Math.abs(g-f);var m=Math.ceil(a.createLabelsAndCalculateHeight());d=Math.round(e.y2-m-a.margin);l=Math.round(e.y2-a.margin);a.lineCoordinates.y1=d;a.lineCoordinates.y2=d;a.boundingRect={x1:f,y1:d,x2:g,y2:l,width:g-f,height:l-d};b&&(f=Math.round(e.x1+b.margin),d=Math.round(10>e.y1?10:e.y1),g=Math.round(e.x1+n+b.margin),l=Math.round(e.y2-m-
a.margin),b.lineCoordinates={x1:g,y1:d,x2:g,y2:l,height:Math.abs(l-d)},b.boundingRect={x1:f,y1:d,x2:g,y2:l,width:g-f,height:l-d});c&&(f=Math.round(a.lineCoordinates.x2),d=Math.round(10>e.y1?10:e.y1),g=Math.round(f+k+c.margin),l=Math.round(e.y2-m-a.margin),c.lineCoordinates={x1:f,y1:d,x2:f,y2:l,height:Math.abs(l-d)},c.boundingRect={x1:f,y1:d,x2:g,y2:l,width:g-f,height:l-d});a.calculateValueToPixelconversionParameters();b&&b.calculateValueToPixelconversionParameters();c&&c.calculateValueToPixelconversionParameters();
h.save();h.rect(5,a.boundingRect.y1,a.chart.width-10,a.boundingRect.height);h.clip();a.renderLabelsTicksAndTitle();h.restore();b&&b.renderLabelsTicksAndTitle();c&&c.renderLabelsTicksAndTitle()}else{n=Math.ceil(a.createLabelsAndCalculateWidth());b&&(b.lineCoordinates={},f=Math.round(e.x1+n+a.margin),g=Math.round(e.x2>b.chart.width-10?b.chart.width-10:e.x2),b.lineCoordinates.x1=f,b.lineCoordinates.x2=g,b.lineCoordinates.width=Math.abs(g-f));c&&(c.lineCoordinates={},f=Math.round(e.x1+n+a.margin),g=Math.round(e.x2>
c.chart.width-10?c.chart.width-10:e.x2),c.lineCoordinates.x1=f,c.lineCoordinates.x2=g,c.lineCoordinates.width=Math.abs(g-f));var m=Math.ceil(b?b.createLabelsAndCalculateHeight():0),r=Math.ceil(c?c.createLabelsAndCalculateHeight():0);b&&(d=Math.round(e.y2-m-b.margin),l=Math.round(e.y2-k>b.chart.height-10?b.chart.height-10:e.y2-k),b.lineCoordinates.y1=d,b.lineCoordinates.y2=d,b.boundingRect={x1:f,y1:d,x2:g,y2:l,width:g-f,height:m});c&&(d=Math.round(e.y1+c.margin),l=e.y1+c.margin+r,c.lineCoordinates.y1=
l,c.lineCoordinates.y2=l,c.boundingRect={x1:f,y1:d,x2:g,y2:l,width:g-f,height:r});f=Math.round(e.x1+a.margin);d=Math.round(c?c.lineCoordinates.y2:10>e.y1?10:e.y1);g=Math.round(e.x1+n+a.margin);l=Math.round(b?b.lineCoordinates.y1:e.y2-k>a.chart.height-10?a.chart.height-10:e.y2-k);a.lineCoordinates={x1:g,y1:d,x2:g,y2:l,height:Math.abs(l-d)};a.boundingRect={x1:f,y1:d,x2:g,y2:l,width:g-f,height:l-d};a.calculateValueToPixelconversionParameters();b&&b.calculateValueToPixelconversionParameters();c&&c.calculateValueToPixelconversionParameters();
b&&b.renderLabelsTicksAndTitle();c&&c.renderLabelsTicksAndTitle();a.renderLabelsTicksAndTitle()}p.preparePlotArea();e=a.chart.plotArea;h.save();h.rect(e.x1,e.y1,Math.abs(e.x2-e.x1),Math.abs(e.y2-e.y1));h.clip();a.renderStripLinesOfThicknessType("value");b&&b.renderStripLinesOfThicknessType("value");c&&c.renderStripLinesOfThicknessType("value");a.renderInterlacedColors();b&&b.renderInterlacedColors();c&&c.renderInterlacedColors();h.restore();a.renderGrid();b&&b.renderGrid();c&&c.renderGrid();a.renderAxisLine();
b&&b.renderAxisLine();c&&c.renderAxisLine();a.renderStripLinesOfThicknessType("pixel");b&&b.renderStripLinesOfThicknessType("pixel");c&&c.renderStripLinesOfThicknessType("pixel")};z.prototype.renderLabelsTicksAndTitle=function(){var a=!1,b=0,c=1,d=0;0!==this.labelAngle&&360!==this.labelAngle&&(c=1.2);if("undefined"===typeof this._options.interval){if("bottom"===this._position||"top"===this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||f.stripLine||(f=f.textBlock.width*
Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.height*Math.sin(Math.PI/180*this.labelAngle),b+=f);b>this.lineCoordinates.width*c&&(a=!0)}if("left"===this._position||"right"===this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||f.stripLine||(f=f.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),b+=f);b>this.lineCoordinates.height*c&&(a=!0)}}if("bottom"===this._position){for(var e=0,f,e=0;e<this._labels.length;e++)if(f=
this._labels[e],!(f.position<this.minimum||f.position>this.maximum)){b=this.getPixelCoordinatesOnAxis(f.position);if(this.tickThickness&&!this._labels[e].stripLine||this._labels[e].stripLine&&"pixel"===this._labels[e].stripLine._thicknessType)this._labels[e].stripLine?(c=this._labels[e].stripLine,this.ctx.lineWidth=c.thickness,this.ctx.strokeStyle=c.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),c=1===this.ctx.lineWidth%2?(b.x<<0)+0.5:b.x<<0,this.ctx.beginPath(),
this.ctx.moveTo(c,b.y<<0),this.ctx.lineTo(c,b.y+this.tickLength<<0),this.ctx.stroke();if(!a||0===d++%2||this._labels[e].stripLine)0===f.textBlock.angle?(b.x-=f.textBlock.width/2,b.y+=this.tickLength+f.textBlock.fontSize/2):(b.x-=0>this.labelAngle?f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,b.y+=this.tickLength+Math.abs(0>this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5)),f.textBlock.x=b.x,f.textBlock.y=b.y,f.textBlock.render(!0)}this.title&&(this._titleTextBlock=
new H(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y2-this.titleFontSize-5,maxWidth:this.lineCoordinates.width,maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/
2,this._titleTextBlock.y=this.boundingRect.y2-this._titleTextBlock.height-3,this._titleTextBlock.render(!0))}else if("top"===this._position){for(e=0;e<this._labels.length;e++)if(f=this._labels[e],!(f.position<this.minimum||f.position>this.maximum)){b=this.getPixelCoordinatesOnAxis(f.position);if(this.tickThickness&&!this._labels[e].stripLine||this._labels[e].stripLine&&"pixel"===this._labels[e].stripLine._thicknessType)this._labels[e].stripLine?(c=this._labels[e].stripLine,this.ctx.lineWidth=c.thickness,
this.ctx.strokeStyle=c.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),c=1===this.ctx.lineWidth%2?(b.x<<0)+0.5:b.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,b.y<<0),this.ctx.lineTo(c,b.y-this.tickLength<<0),this.ctx.stroke();if(!a||0===d++%2||this._labels[e].stripLine)0===f.textBlock.angle?(b.x-=f.textBlock.width/2,b.y-=this.tickLength+f.textBlock.height/2):(b.x-=0<this.labelAngle?f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,b.y-=this.tickLength+Math.abs(0<
this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5:5)),f.textBlock.x=b.x,f.textBlock.y=b.y,f.textBlock.render(!0)}this.title&&(this._titleTextBlock=new H(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y1+1,maxWidth:this.lineCoordinates.width,maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,
textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.render(!0))}else if("left"===this._position){for(e=0;e<this._labels.length;e++)if(f=this._labels[e],!(f.position<this.minimum||f.position>this.maximum)){b=this.getPixelCoordinatesOnAxis(f.position);if(this.tickThickness&&!this._labels[e].stripLine||this._labels[e].stripLine&&"pixel"===this._labels[e].stripLine._thicknessType)this._labels[e].stripLine?
(c=this._labels[e].stripLine,this.ctx.lineWidth=c.thickness,this.ctx.strokeStyle=c.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),c=1===this.ctx.lineWidth%2?(b.y<<0)+0.5:b.y<<0,this.ctx.beginPath(),this.ctx.moveTo(b.x<<0,c),this.ctx.lineTo(b.x-this.tickLength<<0,c),this.ctx.stroke();if(!a||0===d++%2||this._labels[e].stripLine)f.textBlock.x=b.x-f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5,f.textBlock.y=0===this.labelAngle?b.y-f.textBlock.height/
2+this.labelFontSize/2:b.y-f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),f.textBlock.render(!0)}this.title&&(this._titleTextBlock=new H(this.ctx,{x:this.boundingRect.x1+1,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:-90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),
this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}else if("right"===this._position){for(e=0;e<this._labels.length;e++)if(f=this._labels[e],!(f.position<this.minimum||f.position>this.maximum)){b=this.getPixelCoordinatesOnAxis(f.position);if(this.tickThickness&&!this._labels[e].stripLine||this._labels[e].stripLine&&"pixel"===this._labels[e].stripLine._thicknessType)this._labels[e].stripLine?
(c=this._labels[e].stripLine,this.ctx.lineWidth=c.thickness,this.ctx.strokeStyle=c.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),c=1===this.ctx.lineWidth%2?(b.y<<0)+0.5:b.y<<0,this.ctx.beginPath(),this.ctx.moveTo(b.x<<0,c),this.ctx.lineTo(b.x+this.tickLength<<0,c),this.ctx.stroke();if(!a||0===d++%2||this._labels[e].stripLine)f.textBlock.x=b.x+this.tickLength+5,f.textBlock.y=0===this.labelAngle?b.y-f.textBlock.height/2+this.labelFontSize/2:b.y,f.textBlock.render(!0)}this.title&&
(this._titleTextBlock=new H(this.ctx,{x:this.boundingRect.x2-1,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,
this._titleTextBlock.render(!0))}};z.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,b,c,d=this.chart.plotArea,e=0;b=!0;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)this._labels[e].stripLine||(b?(b=this.getPixelCoordinatesOnAxis(this._labels[e].position),c=e+1>=this._labels.length?this.getPixelCoordinatesOnAxis(this.maximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),
a.fillRect(b.x,d.y1,Math.abs(c.x-b.x),Math.abs(d.y1-d.y2)),b=!1):b=!0);else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)this._labels[e].stripLine||(b?(c=this.getPixelCoordinatesOnAxis(this._labels[e].position),b=e+1>=this._labels.length?this.getPixelCoordinatesOnAxis(this.maximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(d.x1,b.y,Math.abs(d.x1-d.x2),Math.abs(b.y-c.y)),b=
!1):b=!0);a.beginPath()};z.prototype.renderStripLinesOfThicknessType=function(a){if(this.stripLines&&0<this.stripLines.length&&a)for(var b=this.chart.plotArea.ctx,c=0,c=0;c<this.stripLines.length;c++){var d=this.stripLines[c];if(d._thicknessType===a&&("pixel"!==a||!(d.value<this.minimum||d.value>this.maximum))){var e=this.getPixelCoordinatesOnAxis(d.value),f=Math.abs("pixel"===a?d.thickness:this.conversionParameters.pixelPerUnit*d.thickness);if(!(0>=f)){b.strokeStyle=d.color;b.beginPath();A(d.id);
var g,l,p,h;b.lineWidth=f;if("bottom"===this._position||"top"===this._position)g=l=1===b.lineWidth%2?(e.x<<0)+0.5:e.x<<0,p=this.chart.plotArea.y1,h=this.chart.plotArea.y2;else if("left"===this._position||"right"===this._position)p=h=1===b.lineWidth%2?(e.y<<0)+0.5:e.y<<0,g=this.chart.plotArea.x1,l=this.chart.plotArea.x2;b.moveTo(g,p);b.lineTo(l,h);b.stroke()}}}};z.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var a=this.chart.ctx,b,c=this.chart.plotArea;a.lineWidth=this.gridThickness;
a.strokeStyle=this.gridColor;if("bottom"===this._position||"top"===this._position)for(d=0;d<this._labels.length&&!this._labels[d].stripLine;d++)this._labels[d].position<this.minimum||this._labels[d].position>this.maximum||(a.beginPath(),b=this.getPixelCoordinatesOnAxis(this._labels[d].position),b=1===a.lineWidth%2?(b.x<<0)+0.5:b.x<<0,a.moveTo(b,c.y1<<0),a.lineTo(b,c.y2<<0),a.stroke());else if("left"===this._position||"right"===this._position)for(var d=0;d<this._labels.length&&!this._labels[d].stripLine;d++)this._labels[d].position<
this.minimum||this._labels[d].position>this.maximum||(a.beginPath(),b=this.getPixelCoordinatesOnAxis(this._labels[d].position),b=1===a.lineWidth%2?(b.y<<0)+0.5:b.y<<0,a.moveTo(c.x1<<0,b),a.lineTo(c.x2<<0,b),a.stroke())}};z.prototype.renderAxisLine=function(){var a=this.chart.ctx;if("bottom"===this._position||"top"===this._position){if(this.lineThickness){a.lineWidth=this.lineThickness;a.strokeStyle=this.lineColor?this.lineColor:"black";var b=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:
this.lineCoordinates.y1<<0;a.beginPath();a.moveTo(this.lineCoordinates.x1,b);a.lineTo(this.lineCoordinates.x2,b);a.stroke()}}else"left"!==this._position&&"right"!==this._position||!this.lineThickness||(a.lineWidth=this.lineThickness,a.strokeStyle=this.lineColor,b=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<0,a.beginPath(),a.moveTo(b,this.lineCoordinates.y1),a.lineTo(b,this.lineCoordinates.y2),a.stroke())};z.prototype.getPixelCoordinatesOnAxis=function(a){var b=
{},c=this.lineCoordinates.width,d=this.lineCoordinates.height;if("bottom"===this._position||"top"===this._position)c/=Math.abs(this.maximum-this.minimum),b.x=this.lineCoordinates.x1+c*(a-this.minimum),b.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)c=d/Math.abs(this.maximum-this.minimum),b.y=this.lineCoordinates.y2-c*(a-this.minimum),b.x=this.lineCoordinates.x2;return b};z.prototype.getXValueAt=function(a){if(!a)return null;var b=null;"left"===this._position?b=(this.chart.axisX.maximum-
this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-a.y)+this.chart.axisX.minimum:"bottom"===this._position&&(b=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a.x-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum);return b};z.prototype.calculateValueToPixelconversionParameters=function(a){a={pixelPerUnit:null,minimum:null,reference:null};var b=this.lineCoordinates.width,c=this.lineCoordinates.height;
a.minimum=this.minimum;if("bottom"===this._position||"top"===this._position)a.pixelPerUnit=b/Math.abs(this.maximum-this.minimum),a.reference=this.lineCoordinates.x1;if("left"===this._position||"right"===this._position)a.pixelPerUnit=-1*c/Math.abs(this.maximum-this.minimum),a.reference=this.lineCoordinates.y2;this.conversionParameters=a};z.prototype.calculateAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace();"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,
this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?8:Math.max(6,Math.floor(this.maxWidth/62)):Math.floor(this.maxWidth/40),b,c,d,e;"axisX"===this.type?(b=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:this.dataInfo.viewPortMin,c=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:this.dataInfo.viewPortMax,0===c-b&&(c+=0.4,b-=0.4),d=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:
1<c-b?0.5*Math.abs(c-b):1):"axisY"===this.type&&(b="undefined"===typeof this._options.minimum?this.dataInfo.viewPortMin:this._options.minimum,c="undefined"===typeof this._options.maximum?this.dataInfo.viewPortMax:this._options.maximum,0===c-b?(c+=5,b-=5):(0!==c&&(c+=Math.abs(0.05)),0!==b&&(b-=Math.abs(0.05))),this.includeZero&&"undefined"===typeof this._options.minimum&&0<b&&(b=0),this.includeZero&&"undefined"===typeof this._options.maximum&&0>c&&(c=0));"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType?
(e=c-b,this.intervalType||(e/1<=a?(this.interval=1,this.intervalType="millisecond"):e/2<=a?(this.interval=2,this.intervalType="millisecond"):e/5<=a?(this.interval=5,this.intervalType="millisecond"):e/10<=a?(this.interval=10,this.intervalType="millisecond"):e/20<=a?(this.interval=20,this.intervalType="millisecond"):e/50<=a?(this.interval=50,this.intervalType="millisecond"):e/100<=a?(this.interval=100,this.intervalType="millisecond"):e/200<=a?(this.interval=200,this.intervalType="millisecond"):e/250<=
a?(this.interval=250,this.intervalType="millisecond"):e/300<=a?(this.interval=300,this.intervalType="millisecond"):e/400<=a?(this.interval=400,this.intervalType="millisecond"):e/500<=a?(this.interval=500,this.intervalType="millisecond"):e/(1*y.secondDuration)<=a?(this.interval=1,this.intervalType="second"):e/(2*y.secondDuration)<=a?(this.interval=2,this.intervalType="second"):e/(5*y.secondDuration)<=a?(this.interval=5,this.intervalType="second"):e/(10*y.secondDuration)<=a?(this.interval=10,this.intervalType=
"second"):e/(15*y.secondDuration)<=a?(this.interval=15,this.intervalType="second"):e/(20*y.secondDuration)<=a?(this.interval=20,this.intervalType="second"):e/(30*y.secondDuration)<=a?(this.interval=30,this.intervalType="second"):e/(1*y.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):e/(2*y.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):e/(5*y.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):e/(10*y.minuteDuration)<=a?(this.interval=10,this.intervalType=
"minute"):e/(15*y.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):e/(20*y.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):e/(30*y.minuteDuration)<=a?(this.interval=30,this.intervalType="minute"):e/(1*y.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):e/(2*y.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):e/(3*y.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):e/(6*y.hourDuration)<=a?(this.interval=6,this.intervalType="hour"):e/(1*
y.dayDuration)<=a?(this.interval=1,this.intervalType="day"):e/(2*y.dayDuration)<=a?(this.interval=2,this.intervalType="day"):e/(4*y.dayDuration)<=a?(this.interval=4,this.intervalType="day"):e/(1*y.weekDuration)<=a?(this.interval=1,this.intervalType="week"):e/(2*y.weekDuration)<=a?(this.interval=2,this.intervalType="week"):e/(3*y.weekDuration)<=a?(this.interval=3,this.intervalType="week"):e/(1*y.monthDuration)<=a?(this.interval=1,this.intervalType="month"):e/(2*y.monthDuration)<=a?(this.interval=2,
this.intervalType="month"):e/(3*y.monthDuration)<=a?(this.interval=3,this.intervalType="month"):e/(6*y.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=e/(1*y.yearDuration)<=a?1:e/(2*y.yearDuration)<=a?2:e/(4*y.yearDuration)<=a?4:Math.floor(z.getNiceNumber(e/(a-1),!0)/y.yearDuration),this.intervalType="year")),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:b-d/2,this.maximum=this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:
c+d/2,this.valueFormatString||("year"===this.intervalType?this.valueFormatString="YYYY":"month"===this.intervalType?this.valueFormatString="MMM YYYY":"week"===this.intervalType?this.valueFormatString="MMM DD YYYY":"day"===this.intervalType?this.valueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.valueFormatString="hh:mm TT":"minute"===this.intervalType?this.valueFormatString="hh:mm TT":"second"===this.intervalType?this.valueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&
(this.valueFormatString="fff'ms'")),this.intervalStartPosition=this.getLabelStartPoint(new Date(this.minimum),this.intervalType,this.interval)):(this.intervalType="number",e=z.getNiceNumber(c-b,!1),this.interval=this._options&&this._options.interval?this._options.interval:z.getNiceNumber(e/(a-1),!0),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:Math.floor(b/this.interval)*this.interval,this.maximum=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:
Math.ceil(c/this.interval)*this.interval,"axisX"===this.type?(null===this.sessionVariables.internalMinimum&&(this.minimum=b-d/2),this.sessionVariables.internalMaximum||(this.maximum=c+d/2),this.intervalStartPosition=Math.floor((this.minimum+0.2*this.interval)/this.interval)*this.interval):"axisY"===this.type&&(this.intervalStartPosition=this.minimum));"axisX"===this.type&&(this._absoluteMinimum=this._options&&"undefined"!==typeof this._options.minimum?this._options.minimum:this.dataInfo.min-d/2,this._absoluteMaximum=
this._options&&"undefined"!==typeof this._options.maximum?this._options.maximum:this.dataInfo.max+d/2);if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",e=Math.abs(this.maximum-this.minimum),1>e&&(b=Math.floor(Math.abs(Math.log(e)/Math.LN10))+2,2<b)))for(c=0;c<b-2;c++)this.valueFormatString+="#"};z.getNiceNumber=function(a,b){var c=Math.floor(Math.log(a)/Math.LN10),d=a/Math.pow(10,c);return(b?1.5>d?1:3>d?2:7>d?5:10:1>=d?1:2>=d?2:5>=d?5:10)*Math.pow(10,c)};z.prototype.getLabelStartPoint=
function(){var a=X(this.interval,this.intervalType),a=new Date(Math.floor(this.minimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+
1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===
this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};N(la,
K);N(M,K);M.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position="absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';a+="line-height: 20px;";a+="margin: 0px 0px 0px 0px;";a+=
"padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: 400;";a+="font-style: "+(v?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+="text-align: left;";a+="border: 2px solid gray;";a+=v?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 5px;";a+="-moz-user-select:none;";a+="-khtml-user-select: none;";a+="-webkit-user-select: none;";
a+="-ms-user-select: none;";a+="user-select: none;";v||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};M.prototype.mouseMoveHandler=function(a,b){this._lastUpdated&&40>(new Date).getTime()-
this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this._updateToolTip(a,b))};M.prototype._updateToolTip=function(a,b){if(this.enabled){if("undefined"===typeof a||"undefined"===typeof b){if(isNaN(this._prevX)||isNaN(this._prevY))return;a=this._prevX;b=this._prevY}else this._prevX=a,this._prevY=b;var c=null,d=null,e=[],f=0;if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){f="xySwapped"===this.chart.plotInfo.axisPlacement?(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*
(this.chart.axisX.lineCoordinates.y2-b)+this.chart.axisX.minimum:(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum;c=[];for(d=0;d<this.chart.data.length;d++){var g=this.chart.data[d].getDataPointAtX(f,!0);g&&0<=g.index&&(g.dataSeries=this.chart.data[d],null!==g.dataPoint.y&&c.push(g))}if(0===c.length)return;c.sort(function(a,b){return a.distance-b.distance});f=c[0];for(d=0;d<c.length;d++)c[d].dataPoint.x.valueOf()===
f.dataPoint.x.valueOf()&&e.push(c[d]);c=null}else if((g=this.chart.getDataPointAtXY(a,b,!0))?(this.currentDataPointIndex=g.dataPointIndex,this.currentSeriesIndex=g.dataSeries.index):v?(g=ra(a,b,this.chart._eventManager.ghostCtx),0<g&&"undefined"!==typeof this.chart._eventManager.objectMap[g]?(eventObject=this.chart._eventManager.objectMap[g],this.currentSeriesIndex=eventObject.dataSeriesIndex,this.currentDataPointIndex=0<=eventObject.dataPointIndex?eventObject.dataPointIndex:-1):this.currentDataPointIndex=
-1):this.currentDataPointIndex=-1,0<=this.currentSeriesIndex){d=this.chart.data[this.currentSeriesIndex];g={};if(0<=this.currentDataPointIndex)c=d.dataPoints[this.currentDataPointIndex],g.dataSeries=d,g.dataPoint=c,g.index=this.currentDataPointIndex,g.distance=Math.abs(c.x-f);else if("line"===d.type||"stepLine"===d.type||"spline"===d.type||"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"stackedArea"===d.type||"stackedArea100"===d.type||"rangeArea"===d.type||"rangeSplineArea"===d.type||
"candlestick"===d.type||"ohlc"===d.type)f=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum.valueOf(),g=d.getDataPointAtX(f,!0),g.dataSeries=d,this.currentDataPointIndex=g.index,c=g.dataPoint;else return;null!==g.dataPoint.y&&e.push(g)}if(0<e.length)if(this.highlightObjects(e),f="",f=this.getToolTipInnerHTML({entries:e}),null!==f){this.contentDiv.innerHTML=f;this.contentDiv.innerHTML=f;f=!1;"none"===
this.container.style.display&&(f=!0,this.container.style.display="block");try{this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.borderColor?this.borderColor:e[0].dataPoint.color?e[0].dataPoint.color:e[0].dataSeries.color?e[0].dataSeries.color:e[0].dataSeries._colorSet[e[0].index%e[0].dataSeries._colorSet.length]}catch(l){}"pie"===e[0].dataSeries.type||"doughnut"===e[0].dataSeries.type||"funnel"===e[0].dataSeries.type||"bar"===e[0].dataSeries.type||
"rangeBar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?toolTipLeft=a-10-this.container.clientWidth:(toolTipLeft=this.chart.axisX.lineCoordinates.width/Math.abs(this.chart.axisX.maximum-this.chart.axisX.minimum)*Math.abs(e[0].dataPoint.x-this.chart.axisX.minimum)+this.chart.axisX.lineCoordinates.x1+0.5-this.container.clientWidth<<0,toolTipLeft-=10);0>toolTipLeft&&(toolTipLeft+=this.container.clientWidth+20);toolTipLeft+this.container.clientWidth>
this.chart._container.clientWidth&&(toolTipLeft=Math.max(0,this.chart._container.clientWidth-this.container.clientWidth));toolTipLeft+="px";e=1!==e.length||this.shared||"line"!==e[0].dataSeries.type&&"stepLine"!==e[0].dataSeries.type&&"spline"!==e[0].dataSeries.type&&"area"!==e[0].dataSeries.type&&"stepArea"!==e[0].dataSeries.type&&"splineArea"!==e[0].dataSeries.type&&"stackedArea"!==e[0].dataSeries.type&&"stackedArea100"!==e[0].dataSeries.type?"bar"===e[0].dataSeries.type||"rangeBar"===e[0].dataSeries.type||
"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?e[0].dataSeries.axisX.lineCoordinates.y2-e[0].dataSeries.axisX.lineCoordinates.height/Math.abs(e[0].dataSeries.axisX.maximum-e[0].dataSeries.axisX.minimum)*Math.abs(e[0].dataPoint.x-e[0].dataSeries.axisX.minimum)+0.5<<0:b:e[0].dataSeries.axisY.lineCoordinates.y2-e[0].dataSeries.axisY.lineCoordinates.height/Math.abs(e[0].dataSeries.axisY.maximum-e[0].dataSeries.axisY.minimum)*Math.abs(e[0].dataPoint.y-e[0].dataSeries.axisY.minimum)+
0.5<<0;e=-e+10;0<e+this.container.clientHeight+5&&(e-=e+this.container.clientHeight+5-0);this.container.style.left=toolTipLeft;this.container.style.bottom=e+"px";!this.animationEnabled||f?this.disableAnimation():this.enableAnimation()}else this.hide(!1)}};M.prototype.highlightObjects=function(a){if(this.enabled){var b=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();b.save();var c=this.chart.plotArea;b.rect(c.x1,c.y1,c.width,c.height);b.clip();b.beginPath();for(var d=0,c=0;c<a.length;c++){var e=
a[c];if((e=this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]])&&e.objectType&&"dataPoint"===e.objectType){var d=this.chart.data[e.dataSeriesIndex],f=e.dataPointIndex;if("line"===d.type||"stepLine"===d.type||"spline"===d.type||"scatter"===d.type||"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"stackedArea"===d.type||"stackedArea100"===d.type||"rangeArea"===d.type||"rangeSplineArea"===d.type){var g=d.getMarkerProperties(f,e.x1,e.y1,this.chart.overlaidCanvasCtx);g.size=
Math.max(1.5*g.size<<0,10);g.borderColor=g.borderColor||"#FFFFFF";g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size);I.drawMarkers([g]);"undefined"!==typeof e.y2&&(g=d.getMarkerProperties(f,e.x1,e.y2,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size),I.drawMarkers([g]))}else"bubble"===d.type?(g=d.getMarkerProperties(f,e.x1,e.y1,this.chart.overlaidCanvasCtx),g.size=e.size,g.color=
"white",g.borderColor="white",b.globalAlpha=0.3,I.drawMarkers([g]),b.globalAlpha=1):"column"===d.type||"stackedColumn"===d.type||"stackedColumn100"===d.type||"bar"===d.type||"rangeBar"===d.type||"stackedBar"===d.type||"stackedBar100"===d.type||"rangeColumn"===d.type?D(b,e.x1,e.y1,e.x2,e.y2,"white",0,null,!1,!1,!1,!1,0.3):"pie"===d.type||"doughnut"===d.type?na(b,e.center,e.radius,"white",d.type,e.startAngle,e.endAngle,0.3):"candlestick"===d.type?(b.globalAlpha=1,b.strokeStyle=e.color,b.lineWidth=2*
e.borderThickness,d=0===b.lineWidth%2?0:0.5,b.beginPath(),b.moveTo(e.x3-d,e.y2),b.lineTo(e.x3-d,Math.min(e.y1,e.y4)),b.stroke(),b.beginPath(),b.moveTo(e.x3-d,Math.max(e.y1,e.y4)),b.lineTo(e.x3-d,e.y3),b.stroke(),D(b,e.x1,Math.min(e.y1,e.y4),e.x2,Math.max(e.y1,e.y4),"transparent",2*e.borderThickness,e.color,!1,!1,!1,!1),b.globalAlpha=1):"ohlc"===d.type&&(b.globalAlpha=1,b.strokeStyle=e.color,b.lineWidth=2*e.borderThickness,d=0===b.lineWidth%2?0:0.5,b.beginPath(),b.moveTo(e.x3-d,e.y2),b.lineTo(e.x3-
d,e.y3),b.stroke(),b.beginPath(),b.moveTo(e.x3,e.y1),b.lineTo(e.x1,e.y1),b.stroke(),b.beginPath(),b.moveTo(e.x3,e.y4),b.lineTo(e.x2,e.y4),b.stroke(),b.globalAlpha=1)}}b.globalAlpha=1;b.restore()}};M.prototype.getToolTipInnerHTML=function(a){a=a.entries;for(var b=null,c=null,d=null,e=0,f="",g=!0,l=0;l<a.length;l++)if(a[l].dataSeries.toolTipContent||a[l].dataPoint.toolTipContent){g=!1;break}if(g&&this.content&&"function"===typeof this.content)b=this.content({entries:a});else if(this.shared){for(var p=
"",l=0;l<a.length;l++)if(c=a[l].dataSeries,d=a[l].dataPoint,e=a[l].index,f="",0===l&&(g&&!this.content)&&(p+="undefined"!==typeof this.chart.axisX.labels[d.x]?this.chart.axisX.labels[d.x]:"{x}",p+="</br>",p=this.chart.replaceKeywordsWithValue(p,d,c,e)),null!==d.toolTipContent&&("undefined"!==typeof d.toolTipContent||null!==c._options.toolTipContent)){if("line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"column"===c.type||"bar"===
c.type||"scatter"===c.type||"stackedColumn"===c.type||"stackedColumn100"===c.type||"stackedBar"===c.type||"stackedBar100"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type)f+=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}";else if("bubble"===c.type)f+=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==
typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("pie"===c.type||"doughnut"===c.type||"funnel"===c.type)f+=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"&nbsp;&nbsp;{y}";else if("rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type)f+=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:
this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";else if("candlestick"===c.type||"ohlc"===c.type)f+=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
null===b&&(b="");b+=this.chart.replaceKeywordsWithValue(f,d,c,e);l<a.length-1&&(b+="</br>")}null!==b&&(b=p+b)}else{c=a[0].dataSeries;d=a[0].dataPoint;e=a[0].index;if(null===d.toolTipContent||"undefined"===typeof d.toolTipContent&&null===c._options.toolTipContent)return null;if("line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"column"===c.type||"bar"===c.type||"scatter"===c.type||"stackedColumn"===c.type||"stackedColumn100"===c.type||
"stackedBar"===c.type||"stackedBar100"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type)f=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(d.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y}";else if("bubble"===c.type)f=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+
(d.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("pie"===c.type||"doughnut"===c.type||"funnel"===c.type)f=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:(d.name?"{name}:&nbsp;&nbsp;":d.label?"{label}:&nbsp;&nbsp;":"")+"{y}";else if("rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type)f=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:
this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(d.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";else if("candlestick"===c.type||"ohlc"===c.type)f=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(d.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
null===b&&(b="");b+=this.chart.replaceKeywordsWithValue(f,d,c,e)}return b};M.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")};M.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&
(this.container.style.WebkitTransition="",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};M.prototype.hide=function(a){this.enabled&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,("undefined"===typeof a||a)&&this.chart.resetOverlayedCanvas())};w.prototype.replaceKeywordsWithValue=function(a,b,c,d,e){var f=this;e="undefined"===typeof e?0:e;if((0<=c.type.indexOf("stacked")||"pie"===c.type||
"doughnut"===c.type)&&(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))){var g="#percent",l="#total";if(0<=c.type.indexOf("stacked"))l=0,0<c.plotUnit.yTotals.length&&(l=c.plotUnit.yTotals[b.x],g=isNaN(b.y)?0:100*(b.y/l));else if("pie"===c.type||"doughnut"===c.type){for(i=l=0;i<c.dataPoints.length;i++)isNaN(c.dataPoints[i].y)||(l+=c.dataPoints[i].y);g=isNaN(b.y)?0:100*(b.y/l)}do{var p="";if(c.percentFormatString)p=c.percentFormatString;else for(var p="#,##0.",h=Math.max(Math.ceil(Math.log(1/g)/Math.LN10),
2),k=0;k<h;k++)p+="#";a=a.replace("#percent",W(g,p,f._cultureInfo));a=a.replace("#total",W(l,c.yValueFormatString?c.yValueFormatString:"#,##0.########"))}while(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))}return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,function(a){if('"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=Y(a.slice(1,a.length-1));a=a.replace("#index",e);var g=null;try{var h=a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);h&&0<h.length&&(g=Y(h[2]),a=Y(h[1]))}catch(k){}h=
null;if("color"===a)return b.color?b.color:c.color?c.color:c._colorSet[d%c._colorSet.length];if(b.hasOwnProperty(a))h=b;else if(c.hasOwnProperty(a))h=c;else return"";h=h[a];null!==g&&(h=h[g]);return"x"===a?f.axisX&&"dateTime"===f.plotInfo.axisXValueType?xa(h,b.xValueFormatString?b.xValueFormatString:c.xValueFormatString?c.xValueFormatString:f.axisX&&f.axisX.valueFormatString?f.axisX.valueFormatString:"DD MMM YY",f._cultureInfo):W(h,b.xValueFormatString?b.xValueFormatString:c.xValueFormatString?c.xValueFormatString:
"#,##0.########",f._cultureInfo):"y"===a?W(h,b.yValueFormatString?b.yValueFormatString:c.yValueFormatString?c.yValueFormatString:"#,##0.########",f._cultureInfo):"z"===a?W(h,b.zValueFormatString?b.zValueFormatString:c.zValueFormatString?c.zValueFormatString:"#,##0.########",f._cultureInfo):h})};Z.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.eventObjects=[];v&&(this.ghostCtx.clearRect(0,0,this.chart.width,
this.chart.height),this.ghostCtx.beginPath())};Z.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};Z.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var b=[],c=ia(a),d=null;if((d=this.chart.getObjectAtXY(c.x,c.y,!1))&&"undefined"!==typeof this.objectMap[d])if(d=this.objectMap[d],"dataPoint"===d.objectType){var e=this.chart.data[d.dataSeriesIndex],f=e.dataPoints[d.dataPointIndex],g=d.dataPointIndex;d.eventParameter={x:c.x,y:c.y,dataPoint:f,dataSeries:e._options,
dataPointIndex:g,dataSeriesIndex:e.index,chart:this.chart._publicChartReference};d.eventContext={context:f,userContext:f,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};b.push(d);d=this.objectMap[e.id];d.eventParameter={x:c.x,y:c.y,dataPoint:f,dataSeries:e._options,dataPointIndex:g,dataSeriesIndex:e.index,chart:this.chart._publicChartReference};d.eventContext={context:e,userContext:e._options,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};
b.push(this.objectMap[e.id])}else"legendItem"===d.objectType&&(e=this.chart.data[d.dataSeriesIndex],f=null!==d.dataPointIndex?e.dataPoints[d.dataPointIndex]:null,d.eventParameter={x:c.x,y:c.y,dataSeries:e._options,dataPoint:f,dataPointIndex:d.dataPointIndex,dataSeriesIndex:d.dataSeriesIndex,chart:this.chart._publicChartReference},d.eventContext={context:this.chart.legend,userContext:this.chart.legend._options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",click:"itemclick"},
b.push(d));e=[];for(c=0;c<this.mouseoveredObjectMaps.length;c++){f=!0;for(d=0;d<b.length;d++)if(b[d].id===this.mouseoveredObjectMaps[c].id){f=!1;break}f?this.fireEvent(this.mouseoveredObjectMaps[c],"mouseout",a):e.push(this.mouseoveredObjectMaps[c])}this.mouseoveredObjectMaps=e;for(c=0;c<b.length;c++){e=!1;for(d=0;d<this.mouseoveredObjectMaps.length;d++)if(b[c].id===this.mouseoveredObjectMaps[d].id){e=!0;break}e||(this.fireEvent(b[c],"mouseover",a),this.mouseoveredObjectMaps.push(b[c]));"click"===
a.type?this.fireEvent(b[c],"click",a):"mousemove"===a.type&&this.fireEvent(b[c],"mousemove",a)}}};Z.prototype.fireEvent=function(a,b,c){if(a&&b){var d=a.eventParameter,e=a.eventContext,f=a.eventContext.userContext;f&&(e&&f[e[b]])&&f[e[b]].call(f,d);"mouseout"!==b?f.cursor&&f.cursor!==c.target.style.cursor&&(c.target.style.cursor=f.cursor):(c.target.style.cursor=this.chart._defaultCursor,delete a.eventParameter,delete a.eventContext);"click"===b&&("dataPoint"===a.objectType&&this.chart.pieDoughnutClickHandler)&&
this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],d)}};N(wa,K);var I={drawMarker:function(a,b,c,d,e,f,g,l){if(c){var p=1;c.fillStyle=f?f:"#000000";c.strokeStyle=g?g:"#000000";c.lineWidth=l?l:0;"circle"===d?(c.moveTo(a,b),c.beginPath(),c.arc(a,b,e/2,0,2*Math.PI,!1),f&&c.fill(),l&&(g?c.stroke():(p=c.globalAlpha,c.globalAlpha=0.15,c.strokeStyle="black",c.stroke(),c.globalAlpha=p))):"square"===d?(c.beginPath(),c.rect(a-e/2,b-e/2,e,e),f&&c.fill(),l&&(g?c.stroke():(p=c.globalAlpha,
c.globalAlpha=0.15,c.strokeStyle="black",c.stroke(),c.globalAlpha=p))):"triangle"===d?(c.beginPath(),c.moveTo(a-e/2,b+e/2),c.lineTo(a+e/2,b+e/2),c.lineTo(a,b-e/2),c.closePath(),f&&c.fill(),l&&(g?c.stroke():(p=c.globalAlpha,c.globalAlpha=0.15,c.strokeStyle="black",c.stroke(),c.globalAlpha=p)),c.beginPath()):"cross"===d&&(c.strokeStyle=f,c.lineWidth=e/4,c.beginPath(),c.moveTo(a-e/2,b-e/2),c.lineTo(a+e/2,b+e/2),c.stroke(),c.moveTo(a+e/2,b-e/2),c.lineTo(a-e/2,b+e/2),c.stroke())}},drawMarkers:function(a){for(var b=
0;b<a.length;b++){var c=a[b];I.drawMarker(c.x,c.y,c.ctx,c.type,c.size,c.color,c.borderColor,c.borderThickness)}}},ya={Chart:function(a,b){var c=new w(a,b,this);this.render=function(){c.render(this.options)};this.options=c._options},addColorSet:function(a,b){T[a]=b},addCultureInfo:function(a,b){ma[a]=b}};ya.Chart.version="v1.5.1 GA";window.CanvasJS=ya})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();
;
/*
 Highcharts JS v4.0.4 (2014-09-02)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(){function r(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a}function w(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function y(a,b){return parseInt(a,b||
10)}function Ga(a){return typeof a==="string"}function da(a){return a&&typeof a==="object"}function Ha(a){return Object.prototype.toString.call(a)==="[object Array]"}function ja(a){return typeof a==="number"}function za(a){return V.log(a)/V.LN10}function ka(a){return V.pow(10,a)}function la(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function s(a){return a!==u&&a!==null}function F(a,b,c){var d,e;if(Ga(b))s(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(s(b)&&
da(b))for(d in b)a.setAttribute(d,b[d]);return e}function ra(a){return Ha(a)?a:[a]}function p(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==u&&c!==null)return c}function B(a,b){if(Aa&&!ba&&b&&b.opacity!==u)b.filter="alpha(opacity="+b.opacity*100+")";r(a.style,b)}function $(a,b,c,d,e){a=x.createElement(a);b&&r(a,b);e&&B(a,{padding:0,border:P,margin:0});c&&B(a,c);d&&d.appendChild(a);return a}function ma(a,b){var c=function(){return u};c.prototype=new a;r(c.prototype,b);return c}function Ba(a,
b,c,d){var e=K.numberFormat,f=E.lang,g=+a||0,h=b===-1?(g.toString().split(".")[1]||"").length:isNaN(b=Q(b))?2:b,i=c===void 0?f.decimalPoint:c,f=d===void 0?f.thousandsSep:d,j=g<0?"-":"",k=String(y(g=Q(g).toFixed(h))),l=k.length>3?k.length%3:0;return e!==Ba?e(a,b,c,d):j+(l?k.substr(0,l)+f:"")+k.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+f)+(h?i+Q(g-k).toFixed(h).slice(2):"")}function Ia(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function Na(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);
a.unshift(d);return c.apply(this,a)}}function Ja(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=E.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=Ba(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=cb(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function mb(a){return V.pow(10,U(V.log(a)/
V.LN10))}function nb(a,b,c,d){var e,c=p(c,1);e=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(a=b[d],e<=(b[d]+(b[d+1]||b[d]))/2)break;a*=c;return a}function ob(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function Oa(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ca(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}
function Pa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Qa(a){db||(db=$(Ka));a&&db.appendChild(a);db.innerHTML=""}function ea(a){return parseFloat(a.toPrecision(14))}function Ra(a,b){va=p(a,b.animation)}function Bb(){var a=E.global.useUTC,b=a?"getUTC":"get",c=a?"setUTC":"set";Da=E.global.Date||window.Date;Sa=(a&&E.global.timezoneOffset||0)*6E4;eb=a?Da.UTC:function(a,b,c,g,h,i){return(new Da(a,b,p(c,1),p(g,0),p(h,0),p(i,0))).getTime()};pb=b+"Minutes";qb=b+
"Hours";rb=b+"Day";Xa=b+"Date";fb=b+"Month";gb=b+"FullYear";Cb=c+"Minutes";Db=c+"Hours";sb=c+"Date";Eb=c+"Month";Fb=c+"FullYear"}function S(){}function Ta(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function na(){this.init.apply(this,arguments)}function Ya(){this.init.apply(this,arguments)}function Gb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.alignOptions={align:b.align||
(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:p(b.y,f?4:c?14:-6),x:p(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":"center")}var u,x=document,G=window,V=Math,v=V.round,U=V.floor,La=V.ceil,t=V.max,L=V.min,Q=V.abs,aa=V.cos,fa=V.sin,oa=V.PI,Ea=oa*2/360,wa=navigator.userAgent,Hb=G.opera,Aa=/msie/i.test(wa)&&!Hb,hb=x.documentMode===8,tb=/AppleWebKit/.test(wa),Ua=/Firefox/.test(wa),Ib=/(Mobile|Android|Windows Phone)/.test(wa),xa="http://www.w3.org/2000/svg",
ba=!!x.createElementNS&&!!x.createElementNS(xa,"svg").createSVGRect,Ob=Ua&&parseInt(wa.split("Firefox/")[1],10)<4,ga=!ba&&!Aa&&!!x.createElement("canvas").getContext,Za,$a,Jb={},ub=0,db,E,cb,va,vb,A,ha,sa=function(){return u},W=[],ab=0,Ka="div",P="none",Pb=/^[0-9]+$/,Qb="stroke-width",Da,eb,Sa,pb,qb,rb,Xa,fb,gb,Cb,Db,sb,Eb,Fb,H={},K;G.Highcharts?ha(16,!0):K=G.Highcharts={};cb=function(a,b,c){if(!s(b)||isNaN(b))return"Invalid date";var a=p(a,"%Y-%m-%d %H:%M:%S"),d=new Da(b-Sa),e,f=d[qb](),g=d[rb](),
h=d[Xa](),i=d[fb](),j=d[gb](),k=E.lang,l=k.weekdays,d=r({a:l[g].substr(0,3),A:l[g],d:Ia(h),e:h,b:k.shortMonths[i],B:k.months[i],m:Ia(i+1),y:j.toString().substr(2,2),Y:j,H:Ia(f),I:Ia(f%12||12),l:f%12||12,M:Ia(d[pb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ia(d.getSeconds()),L:Ia(v(b%1E3),3)},K.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};ha=function(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+
a;if(b)throw c;G.console&&console.log(c)};A={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:26784E5,year:31556952E3};vb={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h,i,j=function(a){for(g=a.length;g--;)a[g]==="M"&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=[].concat(c).splice(0,f).concat(c);
a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=b.concat(h),c=c.concat(i));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=d;else if(f===b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d;else e=b;return e}};(function(a){G.HighchartsAdapter=G.HighchartsAdapter||a&&{init:function(b){var c=a.fx;a.extend(a.easing,{easeOutQuad:function(a,b,c,g,h){return-g*(b/=
h)*(b-2)+c}});a.each(["cur","_default","width","height","opacity"],function(b,e){var f=c.step,g;e==="cur"?f=c.prototype:e==="_default"&&a.Tween&&(f=a.Tween.propHooks[e],e="set");(g=f[e])&&(f[e]=function(a){var c,a=b?a:this;if(a.prop!=="align")return c=a.elem,c.attr?c.attr(a.prop,e==="cur"?u:a.now):g.apply(this,arguments)})});Na(a.cssHooks.opacity,"get",function(a,b,c){return b.attr?b.opacity||0:a.call(this,b,c)});this.addAnimSetter("d",function(a){var c=a.elem,f;if(!a.started)f=b.init(c,c.d,c.toD),
a.start=f[0],a.end=f[1],a.started=!0;c.attr("d",b.step(a.start,a.end,a.pos,c.toD))});this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,b)}:function(a,b){var c,g=a.length;for(c=0;c<g;c++)if(b.call(a[c],a[c],c,a)===!1)return c};a.fn.highcharts=function(){var a="Chart",b=arguments,c,g;if(this[0]){Ga(b[0])&&(a=b[0],b=Array.prototype.slice.call(b,1));c=b[0];if(c!==u)c.chart=c.chart||{},c.chart.renderTo=this[0],new K[a](c,b[1]),g=this;c===u&&(g=W[F(this[0],"data-highcharts-chart")])}return g}},
addAnimSetter:function(b,c){a.Tween?a.Tween.propHooks[b]={set:c}:a.fx.step[b]=c},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);return d},offset:function(b){return a(b).offset()},addEvent:function(b,c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=x.removeEventListener?"removeEventListener":"detachEvent";x[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,
c,d,e){var f=a.Event(c),g="detached"+c,h;!Aa&&d&&(delete d.layerX,delete d.layerY,delete d.returnValue);r(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){b==="preventDefault"&&(h=!0)}}});a(b).trigger(f);b[g]&&(b[c]=b[g],b[g]=null);e&&!f.isDefaultPrevented()&&!h&&e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;if(c.pageX===u)c.pageX=a.pageX,c.pageY=a.pageY;return c},animate:function(b,c,d){var e=
a(b);if(!b.style)b.style={};if(c.d)b.toD=c.d,c.d=1;e.stop();c.opacity!==u&&b.attr&&(c.opacity+="px");b.hasAnim=1;e.animate(c,d)},stop:function(b){b.hasAnim&&a(b).stop()}}})(G.jQuery);var T=G.HighchartsAdapter,M=T||{};T&&T.init.call(T,vb);var ib=M.adapterRun,Rb=M.getScript,Ma=M.inArray,q=M.each,wb=M.grep,Sb=M.offset,Va=M.map,N=M.addEvent,X=M.removeEvent,I=M.fireEvent,Tb=M.washMouseEvent,jb=M.animate,bb=M.stop,M={enabled:!0,x:0,y:15,style:{color:"#606060",cursor:"default",fontSize:"11px"}};E={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#8085e8,#8d4653,#91e8e1".split(","),
symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:!0,
canvasToolsURL:"http://code.highcharts.com/4.0.4/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.0.4/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",
align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:w(M,{align:"center",enabled:!1,formatter:function(){return this.y===null?"":Ba(this.y,-1)},verticalAlign:"bottom",y:0}),cropThreshold:300,pointRange:0,states:{hover:{lineWidthPlus:1,
marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",
width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:ba,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",
day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br/>',shadow:!0,snap:Ib?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",
color:"#909090",fontSize:"9px"}}};var ca=E.plotOptions,T=ca.line;Bb();var Ub=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,Vb=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,Wb=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,ya=function(a){var b=[],c,d;(function(a){a&&a.stops?d=Va(a.stops,function(a){return ya(a[1])}):(c=Ub.exec(a))?b=[y(c[1]),y(c[2]),y(c[3]),parseFloat(c[4],10)]:(c=Vb.exec(a))?b=[y(c[1],16),y(c[2],16),y(c[3],
16),1]:(c=Wb.exec(a))&&(b=[y(c[1]),y(c[2]),y(c[3]),1])})(a);return{get:function(c){var f;d?(f=w(a),f.stops=[].concat(f.stops),q(d,function(a,b){f.stops[b]=[f.stops[b][0],a.get(c)]})):f=b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)q(d,function(b){b.brighten(a)});else if(ja(a)&&a!==0){var c;for(c=0;c<3;c++)b[c]+=y(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this}}};
S.prototype={opacity:1,textProps:"fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow,HcTextStroke".split(","),init:function(a,b){this.element=b==="span"?$(b):x.createElementNS(xa,b);this.renderer=a},animate:function(a,b,c){b=p(b,va,!0);bb(this);if(b){b=w(b,{});if(c)b.complete=c;jb(this,a,b)}else this.attr(a),c&&c();return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,j,k,l,n,m,o=[];a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");
if(f){g=a[f];h=d.gradients;j=a.stops;n=c.radialReference;Ha(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});f==="radialGradient"&&n&&!s(g.gradientUnits)&&(g=w(g,{cx:n[0]-n[2]/2+g.cx*n[2],cy:n[1]-n[2]/2+g.cy*n[2],r:g.r*n[2],gradientUnits:"userSpaceOnUse"}));for(m in g)m!=="id"&&o.push(m,g[m]);for(m in j)o.push(j[m]);o=o.join(",");h[o]?a=h[o].attr("id"):(g.id=a="highcharts-"+ub++,h[o]=i=d.createElement(f).attr(g).add(d.defs),i.stops=[],q(j,function(a){a[1].indexOf("rgba")===
0?(e=ya(a[1]),k=e.get("rgb"),l=e.get("a")):(k=a[1],l=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":k,"stop-opacity":l}).add(i);i.stops.push(a)}));c.setAttribute(b,"url("+d.url+"#"+a+")")}},attr:function(a,b){var c,d,e=this.element,f,g=this,h;typeof a==="string"&&b!==u&&(c=a,a={},a[c]=b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(c in a){d=a[c];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&(f||(this.symbolAttr(a),
f=!0),h=!0);if(this.rotation&&(c==="x"||c==="y"))this.doTransform=!0;h||(this[c+"Setter"]||this._defaultSetter).call(this,d,c,e);this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)&&this.updateShadows(c,d)}if(this.doTransform)this.updateTransform(),this.doTransform=!1}return g},updateShadows:function(a,b){for(var c=this.shadows,d=c.length;d--;)c[d].setAttribute(a,a==="height"?t(b-(c[d].cutHeight||0),0):a==="d"?this.d:b)},addClass:function(a){var b=this.element,c=F(b,"class")||
"";c.indexOf(a)===-1&&F(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;q("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=p(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":P)},crisp:function(a){var b,c={},d,e=a.strokeWidth||this.strokeWidth||0;d=v(e)%2/2;a.x=U(a.x||this.x||0)+d;a.y=U(a.y||this.y||0)+d;a.width=U((a.width||this.width||
0)-2*d);a.height=U((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&y(a.width);b&&(a=r(b,c));this.styles=a;e&&(ga||!ba&&this.renderer.forExport)&&delete a.width;if(Aa&&!ba)B(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};
for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";F(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;$a&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=Da.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(wa.indexOf("Android")===-1||Da.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){this.element.radialReference=a;return this},translate:function(a,b){return this.attr({translateX:a,
translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(s(c)||s(d))&&a.push("scale("+p(c,1)+" "+p(d,1)+")");a.length&&g.setAttribute("transform",
a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||Ga(c))this.alignTo=d=c||"renderer",la(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=p(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];
h[b?"translateX":"x"]=v(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=v(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(){var a=this.bBox,b=this.renderer,c,d,e=this.rotation;c=this.element;var f=this.styles,g=e*Ea;d=this.textStr;var h;if(d===""||Pb.test(d))h="num."+d.toString().length+(f?"|"+f.fontSize+"|"+f.fontFamily:"");h&&(a=b.cache[h]);if(!a){if(c.namespaceURI===xa||b.forExport){try{a=
c.getBBox?r({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight}}catch(i){}if(!a||a.width<0)a={width:0,height:0}}else a=this.htmlGetBBox();if(b.isSVG){c=a.width;d=a.height;if(Aa&&f&&f.fontSize==="11px"&&d.toPrecision(3)==="16.9")a.height=d=14;if(e)a.width=Q(d*fa(g))+Q(c*aa(g)),a.height=Q(d*aa(g))+Q(c*fa(g))}this.bBox=a;h&&(b.cache[h]=a)}return a},show:function(a){a&&this.element.namespaceURI===xa?this.element.removeAttribute("visibility"):this.attr({visibility:a?"inherit":"visible"});return this},
hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,c=a||b,d=c.element||b.box,e=this.element,f=this.zIndex,g,h;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);if(f)c.handleZ=!0,f=y(f);if(c.handleZ){a=d.childNodes;for(g=0;g<a.length;g++)if(b=a[g],c=F(b,"zIndex"),b!==e&&(y(c)>f||!s(f)&&s(c))){d.insertBefore(e,
b);h=!0;break}}h||d.appendChild(e);this.added=!0;if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;bb(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&
q(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&la(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=p(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?"(-1,-1)":"("+p(a.offsetX,1)+", "+p(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;F(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*
e,"stroke-width":h,transform:"translate"+k,fill:P});if(c)F(f,"height",t(F(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=p(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));
/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b;if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=y(a[b])*this["stroke-width"];a=a.join(",").replace("NaN","none");this.element.setAttribute("stroke-dasharray",a)}},
alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=x.createElementNS(xa,"title"),this.element.appendChild(b));b.textContent=p(a,"").replace(/<[^>]*>/g,"")},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,
c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},zIndexSetter:function(a,b,c){c.setAttribute(b,a);this[b]=a},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};S.prototype.yGetter=S.prototype.xGetter;S.prototype.translateXSetter=S.prototype.translateYSetter=S.prototype.rotationSetter=S.prototype.verticalAlignSetter=S.prototype.scaleXSetter=S.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};S.prototype["stroke-widthSetter"]=S.prototype.strokeSetter=function(a,
b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],S.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var ta=function(){this.init.apply(this,arguments)};ta.prototype={Element:S,init:function(a,b,c,d,e){var f=location,g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));
g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&F(g,"xmlns",xa);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Ua||tb)&&x.getElementsByTagName("base").length?f.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(x.createTextNode("Created with Highcharts 4.0.4"));this.defs=this.createElement("defs").add();this.forExport=e;this.gradients={};this.cache={};this.setSize(b,c,!1);var h;
if(Ua&&a.getBoundingClientRect)this.subPixelFix=b=function(){B(a,{left:0,top:0});h=a.getBoundingClientRect();B(a,{left:La(h.left)-h.left+"px",top:La(h.top)-h.top+"px"})},b(),N(G,"resize",b)},getStyle:function(a){return this.style=r({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Pa(this.gradients||
{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&X(G,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=p(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,j=F(b,"x"),k=a.styles,l=a.textWidth,n=k&&k.lineHeight,m=k&&k.HcTextStroke,o=g.length,Y=function(a){return n?y(n):c.fontMetrics(/(px|em)$/.test(a&&
a.style.fontSize)?a.style.fontSize:k&&k.fontSize||c.style.fontSize||12,a).h};o--;)b.removeChild(g[o]);!f&&!m&&e.indexOf(" ")===-1?b.appendChild(x.createTextNode(e)):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,l&&!a.added&&this.box.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e[e.length-1]===""&&e.pop(),q(e,function(e,
f){var g,n=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");q(g,function(e){if(e!==""||g.length===1){var m={},o=x.createElementNS(xa,"tspan"),p;h.test(e)&&(p=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),F(o,"style",p));i.test(e)&&!d&&(F(o,"onclick",'location.href="'+e.match(i)[1]+'"'),B(o,{cursor:"pointer"}));e=(e.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(e!==" "){o.appendChild(x.createTextNode(e));if(n)m.dx=0;else if(f&&
j!==null)m.x=j;F(o,m);b.appendChild(o);!n&&f&&(!ba&&d&&B(o,{display:"block"}),F(o,"dy",Y(o)));if(l)for(var e=e.replace(/([^\^])-/g,"$1- ").split(" "),m=g.length>1||e.length>1&&k.whiteSpace!=="nowrap",q,D,s=k.HcHeight,t=[],u=Y(o),Lb=1;m&&(e.length||t.length);)delete a.bBox,q=a.getBBox(),D=q.width,!ba&&c.forExport&&(D=c.measureSpanWidth(o.firstChild.data,a.styles)),q=D>l,!q||e.length===1?(e=t,t=[],e.length&&(Lb++,s&&Lb*u>s?(e=["..."],a.attr("title",a.textStr)):(o=x.createElementNS(xa,"tspan"),F(o,{dy:u,
x:j}),p&&F(o,"style",p),b.appendChild(o))),D>l&&(l=D)):(o.removeChild(o.firstChild),t.unshift(e.pop())),e.length&&o.appendChild(x.createTextNode(e.join(" ").replace(/- /g,"-")));n++}}})}))},button:function(a,b,c,d,e,f,g,h,i){var j=this.label(a,b,c,i,null,null,null,null,"button"),k=0,l,n,m,o,p,q,a={x1:0,y1:0,x2:0,y2:1},e=w({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);m=e.style;delete e.style;f=w(e,{stroke:"#68A",
fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);o=f.style;delete f.style;g=w(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);p=g.style;delete g.style;h=w(e,{style:{color:"#CCC"}},h);q=h.style;delete h.style;N(j.element,Aa?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(o)});N(j.element,Aa?"mouseout":"mouseleave",function(){k!==3&&(l=[e,f,g][k],n=[m,o,p][k],j.attr(l).css(n))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(p):a===3&&j.attr(h).css(q):
j.attr(e).css(m)};return j.on("click",function(){k!==3&&d.call(j)}).attr(e).css(r({cursor:"default"},m))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=v(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=v(a[2])+b%2/2);return a},path:function(a){var b={fill:P};Ha(a)?b.d=a:da(a)&&r(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=da(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=function(a){this.element.setAttribute("cx",a)};b.ySetter=function(a){this.element.setAttribute("cy",
a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(da(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=da(a)?a.r:e,g=this.createElement("rect"),a=da(a)?a:a===u?{}:{x:a,y:b,width:t(c,0),height:t(d,0)};if(f!==u)a.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a){F(this.element,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;
this.width=a;this.height=b;for(this.boxWrapper[p(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return s(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:P};arguments.length>1&&r(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,
b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(v(b),v(c),d,e,f),i=/^url\((.*?)\)$/,j,k;if(h)g=this.path(h),r(g,{symbolName:a,x:b,y:c,width:d,height:e}),f&&r(g,f);else if(i.test(a))k=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(v((d-b[0])/2),v((e-b[1])/2)))},j=a.match(i)[1],a=Jb[j]||f&&f.width&&f.height&&[f.width,f.height],g=this.image(j).attr({x:b,y:c}),g.isImg=!0,a?k(g,a):(g.attr({width:0,height:0}),$("img",{onload:function(){k(g,Jb[j]=[this.width,this.height])},
src:j}));return g},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-
0.001,d=e.innerR,h=e.open,i=aa(f),j=fa(f),k=aa(g),g=fa(g),e=e.end-f<oa?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]},callout:function(a,b,c,d,e){var f=L(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,i=e&&e.anchorY,e=v(e.strokeWidth||0)%2/2;a+=e;b+=e;e=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&i>b+g&&i<b+d-g?e.splice(13,3,
"L",a+c,i-6,a+c+6,i,a+c,i+6,a+c,b+d-f):h&&h<0&&i>b+g&&i<b+d-g?e.splice(33,3,"L",a,i+6,a-6,i,a,i-6,a,b+f):i&&i>d&&h>a+g&&h<a+c-g?e.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):i&&i<0&&h>a+g&&h<a+c-g&&e.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return e}},clipRect:function(a,b,c,d){var e="highcharts-"+ub++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;return a},text:function(a,b,c,d){var e=ga||!ba&&this.forExport,f={};if(d&&!this.forExport)return this.html(a,
b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),n;for(n=0;n<d.length;n++)e=d[n],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){a=a||this.style.fontSize;if(b&&G.getComputedStyle)b=b.element||b,a=G.getComputedStyle(b,"").fontSize;var a=/px/.test(a)?y(a):/em/.test(a)?
parseFloat(a)*12:12,c=a<24?a+4:v(a*1.2),d=v(c*0.8);return{h:c,b:d,f:a}},label:function(a,b,c,d,e,f,g,h,i){function j(){var a,b;a=o.element.style;D=(t===void 0||xb===void 0||m.styles.textAlign)&&o.textStr&&o.getBBox();m.width=(t||D.width||0)+2*C+kb;m.height=(xb||D.height||0)+2*C;R=C+n.fontMetrics(a&&a.fontSize,o).b;if(y){if(!p)a=v(-J*C),b=h?-R:0,m.box=p=d?n.symbol(d,a,b,m.width,m.height,z):n.rect(a,b,m.width,m.height,0,z[Qb]),p.attr("fill",P).add(m);p.isImg||p.attr(r({width:v(m.width),height:v(m.height)},
z));z=null}}function k(){var a=m.styles,a=a&&a.textAlign,b=kb+C*(1-J),c;c=h?0:R;if(s(t)&&D&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(t-D.width);if(b!==o.x||c!==o.y)o.attr("x",b),c!==u&&o.attr("y",c);o.x=b;o.y=c}function l(a,b){p?p.attr(a,b):z[a]=b}var n=this,m=n.g(i),o=n.text("",0,0,g).attr({zIndex:1}),p,D,J=0,C=3,kb=0,t,xb,yb,x,Kb=0,z={},R,y;m.onAdd=function(){o.add(m);m.attr({text:a||a===0?a:"",x:b,y:c});p&&s(e)&&m.attr({anchorX:e,anchorY:f})};m.widthSetter=function(a){t=a};m.heightSetter=
function(a){xb=a};m.paddingSetter=function(a){s(a)&&a!==C&&(C=a,k())};m.paddingLeftSetter=function(a){s(a)&&a!==kb&&(kb=a,k())};m.alignSetter=function(a){J={left:0,center:0.5,right:1}[a]};m.textSetter=function(a){a!==u&&o.textSetter(a);j();k()};m["stroke-widthSetter"]=function(a,b){a&&(y=!0);Kb=a%2/2;l(b,a)};m.strokeSetter=m.fillSetter=m.rSetter=function(a,b){b==="fill"&&a&&(y=!0);l(b,a)};m.anchorXSetter=function(a,b){e=a;l(b,a+Kb-yb)};m.anchorYSetter=function(a,b){f=a;l(b,a-x)};m.xSetter=function(a){m.x=
a;J&&(a-=J*((t||D.width)+C));yb=v(a);m.attr("translateX",yb)};m.ySetter=function(a){x=m.y=v(a);m.attr("translateY",x)};var A=m.css;return r(m,{css:function(a){if(a){var b={},a=w(a);q(m.textProps,function(c){a[c]!==u&&(b[c]=a[c],delete a[c])});o.css(b)}return A.call(m,a)},getBBox:function(){return{width:D.width+2*C,height:D.height+2*C,x:D.x-C,y:D.y-C}},shadow:function(a){p&&p.shadow(a);return m},destroy:function(){X(m.element,"mouseenter");X(m.element,"mouseleave");o&&(o=o.destroy());p&&(p=p.destroy());
S.prototype.destroy.call(m);m=n=j=k=l=null}})}};Za=ta;r(S.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();this.styles=r(this.styles,a);B(this.element,a);return this},htmlGetBBox:function(){var a=this.element,b=this.bBox;if(!b){if(a.nodeName==="text")a.style.position="absolute";b=this.bBox={x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}}return b},htmlUpdateTransform:function(){if(this.added){var a=
this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows;B(b,{marginLeft:c,marginTop:d});i&&q(i,function(a){B(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&q(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var j=this.rotation,k,l=y(this.textWidth),n=[j,g,b.innerHTML,this.textWidth].join(",");if(n!==this.cTT){k=a.fontMetrics(b.style.fontSize).b;s(j)&&this.setSpanRotation(j,
h,k);i=p(this.elemWidth,b.offsetWidth);if(i>l&&/[ \-]/.test(b.textContent||b.innerText))B(b,{width:l+"px",display:"block",whiteSpace:"normal"}),i=l;this.getSpanCorrection(i,k,h,j,g)}B(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(tb)k=b.offsetHeight;this.cTT=n}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=Aa?"-ms-transform":tb?"-webkit-transform":Ua?"MozTransform":Hb?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Ua?"Origin":"-origin")]=d.transformOrigin=
b*100+"% "+c+"px";B(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});r(ta.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer;d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a};d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:v(b),y:v(c)}).css({position:"absolute",whiteSpace:"nowrap",fontFamily:this.style.fontFamily,
fontSize:this.style.fontSize});d.css=d.htmlCss;if(f.isSVG)d.add=function(a){var b,c=f.box.parentNode,j=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)j.push(a),a=a.parentGroup;q(j.reverse(),function(a){var d;b=a.div=a.div||$(Ka,{className:F(a.element,"class")},{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;r(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0},visibilitySetter:function(a,
b){d[b]=a}})})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});var Z;if(!ba&&!ga){Z={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===Ka;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=$(c);this.renderer=a},add:function(a){var b=this.renderer,
c=this.element,d=b.box,d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:S.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=aa(a*Ea),c=fa(a*Ea);B(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):P})},getSpanCorrection:function(a,
b,c,d,e){var f=d?aa(d*Ea):1,g=d?fa(d*Ea):0,h=p(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),B(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(ja(a[b]))c[b]=v(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+
5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,la(c,b),c.push(b),b.destroyClip=function(){la(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:hb?"inherit":"rect(auto)"});return b.css(a)},css:S.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Qa(a)},destroy:function(){this.destroyClip&&this.destroyClip();return S.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=
G.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=y(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,l,n,m,o;k&&typeof k.value!=="string"&&(k="x");n=k;if(a){m=p(a.width,3);o=(a.opacity||0.15)/m;for(e=1;e<=3;e++){l=m*2+1-2*e;c&&(n=this.cutOffPath(k.value,l+0.5));j=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',n,'" coordsize="10 10" style="',
f.style.cssText,'" />'];h=$(g.prepVML(j),null,{left:y(i.left)+p(a.offsetX,1),top:y(i.top)+p(a.offsetY,1)});if(c)h.cutOff=l+1;j=['<stroke color="',a.color||"black",'" opacity="',o*e,'"/>'];$(g.prepVML(j),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:sa,setAttr:function(a,b){hb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||
$(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!==P,this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},opacitySetter:sa,rotationSetter:function(a,b,c){c=c.style;
this[b]=c[b]=a;c.left=-v(fa(a*Ea)+1)+"px";c.top=v(aa(a*Ea))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;ja(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&q(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,hb||(c.style[b]=a?"visible":"hidden"),
b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};K.VMLElement=Z=ma(S,Z);Z.prototype.ySetter=Z.prototype.widthSetter=Z.prototype.heightSetter=Z.prototype.xSetter;var ia={Element:Z,isIE8:wa.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Ka).css(r(this.getStyle(d),{position:"relative"}));e=d.element;
a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.cache={};this.setSize(b,c,!1);if(!x.namespaces.hcv){x.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{x.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){x.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},
clipRect:function(a,b,c,d){var e=this.createElement(),f=da(a);return r(e,{members:[],left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+v(a?e:d)+"px,"+v(a?f:b)+"px,"+v(a?b:f)+"px,"+v(a?d:e)+"px)"};!a&&hb&&c==="DIV"&&r(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){q(e.members,function(a){a.element&&
a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j=P;a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,l,n=a.linearGradient||a.radialGradient,m,o,p,D,J,C="",a=a.stops,t,s=[],u=function(){h=['<fill colors="'+s.join(",")+'" opacity="',p,'" o:opacity2="',o,'" type="',i,'" ',C,'focus="100%" method="any" />'];$(e.prepVML(h),null,null,b)};m=a[0];t=a[a.length-1];m[0]>0&&a.unshift([0,m[1]]);t[0]<1&&a.push([1,t[1]]);q(a,function(a,b){g.test(a[1])?(f=
ya(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);s.push(a[0]*100+"% "+k);b?(p=l,D=k):(o=l,J=k)});if(c==="fill")if(i==="gradient")c=n.x1||n[0]||0,a=n.y1||n[1]||0,m=n.x2||n[2]||0,n=n.y2||n[3]||0,C='angle="'+(90-V.atan((n-a)/(m-c))*180/oa)+'"',u();else{var j=n.r,r=j*2,v=j*2,x=n.cx,z=n.cy,R=b.radialReference,w,j=function(){R&&(w=d.getBBox(),x+=(R[0]-w.x)/w.width-0.5,z+=(R[1]-w.y)/w.height-0.5,r*=R[2]/w.width,v*=R[2]/w.height);C='src="'+E.global.VMLRadialGradientURL+'" size="'+r+","+v+'" origin="0.5,0.5" position="'+
x+","+z+'" color2="'+J+'" ';u()};d.added?j():d.onAdd=j;j=D}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=ya(a),h=["<",c,' opacity="',f.get("a"),'"/>'],$(this.prepVML(h),null,null,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):
a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:ta.prototype.html,path:function(a){var b={coordsize:"10 10"};Ha(a)?b.d=a:da(a)&&r(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(da(a))c=a.r,b=a.y,a=a.x;d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Ka).attr(b)},image:function(a,
b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):ta.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;B(a,{flip:"x",left:y(d.width)-(e?y(e.top):1),top:y(d.height)-(e?y(e.left):1),rotation:-90});q(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||
d,c=e.innerR,d=aa(f),i=fa(f),j=aa(g),k=fa(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return ta.prototype.symbols[!s(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};K.VMLRenderer=Z=function(){this.init.apply(this,
arguments)};Z.prototype=w(ta.prototype,ia);Za=Z}ta.prototype.measureSpanWidth=function(a,b){var c=x.createElement("span"),d;d=x.createTextNode(a);c.appendChild(d);B(c,b);this.box.appendChild(c);d=c.offsetWidth;Qa(c);return d};var Mb;if(ga)K.CanVGRenderer=Z=function(){xa="http://www.w3.org/1999/xhtml"},Z.prototype.symbols={},Mb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){b.length===0&&Rb(d,a);b.push(c)}}}(),Za=Z;Ta.prototype={addLabel:function(){var a=
this.axis,b=a.options,c=a.chart,d=a.horiz,e=a.categories,f=a.names,g=this.pos,h=b.labels,i=h.rotation,j=a.tickPositions,d=d&&e&&!h.step&&!h.staggerLines&&!h.rotation&&c.plotWidth/j.length||!d&&(c.margin[3]||c.chartWidth*0.33),k=g===j[0],l=g===j[j.length-1],n,f=e?p(e[g],f[g],g):g,e=this.label,m=j.info;a.isDatetimeAxis&&m&&(n=b.dateTimeLabelFormats[m.higherRanks[g]||m.unitName]);this.isFirst=k;this.isLast=l;b=a.labelFormatter.call({axis:a,chart:c,isFirst:k,isLast:l,dateTimeLabelFormat:n,value:a.isLog?
ea(ka(f)):f});g=d&&{width:t(1,v(d-2*(h.padding||10)))+"px"};if(s(e))e&&e.attr({text:b}).css(g);else{n={align:a.labelAlign};if(ja(i))n.rotation=i;if(d&&h.ellipsis)g.HcHeight=a.len/j.length;this.label=e=s(b)&&h.enabled?c.renderer.text(b,0,0,h.useHTML).attr(n).css(r(g,h.style)).add(a.labelGroup):null;a.tickBaseline=c.renderer.fontMetrics(h.style.fontSize,e).b;i&&a.side===2&&(a.tickBaseline*=aa(i*Ea))}this.yOffset=e?p(h.y,a.tickBaseline+(a.side===2?8:-(e.getBBox().height/2))):0},getLabelSize:function(){var a=
this.label,b=this.axis;return a?a.getBBox()[b.horiz?"height":"width"]:0},getLabelSides:function(){var a=this.label.getBBox(),b=this.axis,c=b.horiz,d=b.options.labels,a=c?a.width:a.height,b=c?d.x-a*{left:0,center:0.5,right:1}[b.labelAlign]:0;return[b,c?a+b:a]},handleOverflow:function(a,b){var c=!0,d=this.axis,e=this.isFirst,f=this.isLast,g=d.horiz?b.x:b.y,h=d.reversed,i=d.tickPositions,j=this.getLabelSides(),k=j[0],j=j[1],l,n,m,o=this.label.line;l=o||0;n=d.labelEdge;m=d.justifyLabels&&(e||f);n[l]===
u||g+k>n[l]?n[l]=g+j:m||(c=!1);if(m){l=(n=d.justifyToPlot)?d.pos:0;n=n?l+d.len:d.chart.chartWidth;do a+=e?1:-1,m=d.ticks[i[a]];while(i[a]&&(!m||!m.label||m.label.line!==o));d=m&&m.label.xy&&m.label.xy.x+m.getLabelSides()[e?0:1];e&&!h||f&&h?g+k<l&&(g=l-k,m&&g+j>d&&(c=!1)):g+j>n&&(g=n-j,m&&g+k<d&&(c=!1));b.x=g}return c},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||
f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,l=i.staggerLines,a=a+e.x-(f&&d?f*j*(k?-1:1):0),b=b+this.yOffset-(f&&!d?f*j*(k?1:-1):0);if(l)c.line=g/(h||1)%l,b+=c.line*(i.labelOffset/l);return{x:a,y:b}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,
f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,l=this.gridLine,n=h?h+"Grid":"grid",m=h?h+"Tick":"tick",o=e[n+"LineWidth"],q=e[n+"LineColor"],D=e[n+"LineDashStyle"],J=e[m+"Length"],n=e[m+"Width"]||0,C=e[m+"Color"],t=e[m+"Position"],m=this.mark,s=k.step,r=!0,v=d.tickmarkOffset,w=this.getPosition(g,j,v,b),x=w.x,w=w.y,z=g&&x===d.pos+d.len||!g&&w===d.pos?-1:1,c=p(c,1);this.isActive=!0;if(o){j=d.getPlotLinePath(j+v,o*z,b,!0);if(l===u){l={stroke:q,"stroke-width":o};if(D)l.dashstyle=
D;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=o?f.path(j).attr(l).add(d.gridGroup):null}if(!b&&l&&j)l[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(n&&J)t==="inside"&&(J=-J),d.opposite&&(J=-J),h=this.getMarkPath(x,w,J,n*z,g,f),m?m.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:C,"stroke-width":n,opacity:c}).add(d.axisGroup);if(i&&!isNaN(x))i.xy=w=this.getLabelPosition(x,w,i,g,k,v,a,s),this.isFirst&&!this.isLast&&!p(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!p(e.showLastLabel,
1)?r=!1:!d.isRadial&&!k.step&&!k.rotation&&!b&&c!==0&&(r=this.handleOverflow(a,w)),s&&a%s&&(r=!1),r&&!isNaN(w.y)?(w.opacity=c,i[this.isNew?"attr":"animate"](w),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Pa(this,this.axis)}};K.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};K.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=(b.pointRange||0)/2,e=a.options,f=e.label,g=a.label,h=e.width,i=e.to,j=e.from,k=s(j)&&s(i),l=e.value,n=e.dashStyle,
m=a.svgElem,o=[],p,q=e.color,J=e.zIndex,C=e.events,r={},u=b.chart.renderer;b.isLog&&(j=za(j),i=za(i),l=za(l));if(h){if(o=b.getPlotLinePath(l,h),r={stroke:q,"stroke-width":h},n)r.dashstyle=n}else if(k){j=t(j,b.min-d);i=L(i,b.max+d);o=b.getPlotBandPath(j,i,e);if(q)r.fill=q;if(e.borderWidth)r.stroke=e.borderColor,r["stroke-width"]=e.borderWidth}else return;if(s(J))r.zIndex=J;if(m)if(o)m.animate({d:o},null,m.onGetPath);else{if(m.hide(),m.onGetPath=function(){m.show()},g)a.label=g=g.destroy()}else if(o&&
o.length&&(a.svgElem=m=u.path(o).attr(r).add(),C))for(p in d=function(b){m.on(b,function(c){C[b].apply(a,[c])})},C)d(p);if(f&&s(f.text)&&o&&o.length&&b.width>0&&b.height>0){f=w({align:c&&k&&"center",x:c?!k&&4:10,verticalAlign:!c&&k&&"middle",y:c?k?16:10:k?6:-4,rotation:c&&!k&&90},f);if(!g){r={align:f.textAlign||f.align,rotation:f.rotation};if(s(J))r.zIndex=J;a.label=g=u.text(f.text,0,0,f.useHTML).attr(r).css(f.style).add()}b=[o[1],o[4],k?o[6]:o[1]];k=[o[2],o[5],k?o[7]:o[2]];o=Oa(b);c=Oa(k);g.align(f,
!1,{x:o,y:c,width:Ca(b)-o,height:Ca(k)-c});g.show()}else g&&g.hide();return a},destroy:function(){la(this.axis.plotLinesAndBands,this);delete this.axis;Pa(this)}};na.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#C0C0C0",labels:M,lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",
minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return Ba(this.total,
-1)},style:M.style}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{x:0,y:null},title:{rotation:0}},defaultTopAxisOptions:{labels:{x:0,y:-15},title:{rotation:0}},init:function(a,b){var c=b.isX;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=
this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.chart=a;this.reversed=d.reversed;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=s(d.linkedTo);this.tickmarkOffset=this.categories&&d.tickmarkPlacement==="between"&&p(d.tickInterval,1)===1?0.5:0;this.ticks={};this.labelEdge=[];this.minorTicks=
{};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.min=this.max=null;this.crosshair=p(d.crosshair,ra(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;Ma(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===
u)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)N(this,f,d[f]);if(this.isLog)this.val2lin=za,this.lin2val=ka},setOptions:function(a){this.options=w(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],w(E[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,
e=E.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ja(h,this);else if(c)g=b;else if(d)g=cb(d,b);else if(f&&a>=1E3)for(;f--&&g===u;)c=Math.pow(1E3,f+1),a>=c&&e[f]!==null&&(g=Ba(b/c,-1)+e[f]);g===u&&(g=Q(b)>=1E4?Ba(b,0):Ba(b,-1,u,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.ignoreMinPadding=a.ignoreMaxPadding=null;a.buildStacks&&a.buildStacks();q(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d;
d=c.options.threshold;var e;a.hasVisibleSeries=!0;a.isLog&&d<=0&&(d=null);if(a.isXAxis){if(d=c.xData,d.length)a.dataMin=L(p(a.dataMin,d[0]),Oa(d)),a.dataMax=t(p(a.dataMax,d[0]),Ca(d))}else{c.getExtremes();e=c.dataMax;c=c.dataMin;if(s(c)&&s(e))a.dataMin=L(p(a.dataMin,c),c),a.dataMax=t(p(a.dataMax,e),e);if(s(d))if(a.dataMin>=d)a.dataMin=d,a.ignoreMinPadding=!0;else if(a.dataMax<d)a.dataMax=d,a.ignoreMaxPadding=!0}}})},translate:function(a,b,c,d,e,f){var g=1,h=0,i=d?this.oldTransA:this.transA,d=d?this.oldMin:
this.min,j=this.minPixelPadding,e=(this.options.ordinal||this.isLog&&e)&&this.lin2val;if(!i)i=this.transA;if(c)g*=-1,h=this.len;this.reversed&&(g*=-1,h-=g*(this.sector||this.len));b?(a=a*g+h,a-=j,a=a/i+d,e&&(a=this.lin2val(a))):(e&&(a=this.val2lin(a)),f==="between"&&(f=0.5),a=g*(a-d)*i+h+g*j+(ja(f)?i*f*this.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,
!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,n;i=this.transB;e=p(e,this.translate(a,null,null,c));a=c=v(e+i);i=j=v(k-e-i);if(isNaN(e))n=!0;else if(this.horiz){if(i=h,j=k-this.bottom,a<g||a>g+this.width)n=!0}else if(a=g,c=l-this.right,i<h||i>h+this.height)n=!0;return n&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,j],b||1)},getLinearTickPositions:function(a,b,c){var d,e=ea(U(b/a)*a),f=ea(La(c/
a)*a),g=[];if(b===c&&ja(b))return[b];for(b=e;b<=f;){g.push(b);b=ea(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e;if(this.isLog){e=b.length;for(a=1;a<e;a++)d=d.concat(this.getLogTickPositions(c,b[a-1],b[a],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),this.min,this.max,a.startOfWeek)),d[0]<this.min&&d.shift();else for(b=this.min+
(b[0]-this.min)%c;b<=this.max;b+=c)d.push(b);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j;if(this.isXAxis&&this.minRange===u&&!this.isLog)s(a.min)||s(a.max)?this.minRange=null:(q(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===u||h<f)f=h}),this.minRange=L(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){var k=this.minRange;d=(k-c+b)/2;d=[b-d,p(a.min,b-d)];
if(e)d[2]=this.dataMin;b=Ca(d);c=[b+k,p(a.max,b+k)];if(e)c[2]=this.dataMax;c=Oa(c);c-b<k&&(d[0]=c-k,d[1]=p(a.min,c-k),b=Ca(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA;if(b.isXAxis||i||d)h?(f=h.minPointOffset,g=h.pointRangePadding):q(b.series,function(a){var h=i?1:b.isXAxis?a.pointRange:b.axisPointRange||0,j=a.options.pointPlacement,m=a.closestPointRange;h>c&&(h=0);d=t(d,h);f=t(f,Ga(j)?
0:h/2);g=t(g,j==="on"?0:h);!a.noSharedTooltip&&s(m)&&(e=s(e)?L(e,m):m)}),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=L(d,c),b.closestPointRange=e;if(a)b.oldTransA=j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=j*f},setTickPositions:function(a){var b=this,c=b.chart,d=b.options,e=d.startOnTick,f=d.endOnTick,g=b.isLog,h=b.isDatetimeAxis,i=b.isXAxis,j=b.isLinked,k=b.options.tickPositioner,l=d.maxPadding,
n=d.minPadding,m=d.tickInterval,o=d.minTickInterval,Y=d.tickPixelInterval,D,J=b.categories;j?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=p(c.min,c.dataMin),b.max=p(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&ha(11,1)):(b.min=p(b.userMin,d.min,b.dataMin),b.max=p(b.userMax,d.max,b.dataMax));if(g)!a&&L(b.min,p(b.dataMin,b.min))<=0&&ha(10,1),b.min=ea(za(b.min)),b.max=ea(za(b.max));if(b.range&&s(b.max))b.userMin=b.min=t(b.min,b.max-b.range),b.userMax=b.max,b.range=
null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!J&&!b.axisPointRange&&!b.usePercentage&&!j&&s(b.min)&&s(b.max)&&(c=b.max-b.min)){if(!s(d.min)&&!s(b.userMin)&&n&&(b.dataMin<0||!b.ignoreMinPadding))b.min-=c*n;if(!s(d.max)&&!s(b.userMax)&&l&&(b.dataMax>0||!b.ignoreMaxPadding))b.max+=c*l}if(ja(d.floor))b.min=t(b.min,d.floor);if(ja(d.ceiling))b.max=L(b.max,d.ceiling);b.min===b.max||b.min===void 0||b.max===void 0?b.tickInterval=1:j&&!m&&Y===b.linkedParent.options.tickPixelInterval?b.tickInterval=
b.linkedParent.tickInterval:(b.tickInterval=p(m,J?1:(b.max-b.min)*Y/t(b.len,Y)),!s(m)&&b.len<Y&&!this.isRadial&&!this.isLog&&!J&&e&&f&&(D=!0,b.tickInterval/=4));i&&!a&&q(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange)b.tickInterval=t(b.pointRange,b.tickInterval);if(!m&&b.tickInterval<o)b.tickInterval=
o;if(!h&&!g&&!m)b.tickInterval=nb(b.tickInterval,null,mb(b.tickInterval),p(d.allowDecimals,!(b.tickInterval>1&&b.tickInterval<5&&b.max>1E3&&b.max<9999)));b.minorTickInterval=d.minorTickInterval==="auto"&&b.tickInterval?b.tickInterval/5:d.minorTickInterval;b.tickPositions=a=d.tickPositions?[].concat(d.tickPositions):k&&k.apply(b,[b.min,b.max]);if(!a)!b.ordinalPositions&&(b.max-b.min)/b.tickInterval>t(2*b.len,200)&&ha(19,!0),a=h?b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval,d.units),b.min,
b.max,d.startOfWeek,b.ordinalPositions,b.closestPointRange,!0):g?b.getLogTickPositions(b.tickInterval,b.min,b.max):b.getLinearTickPositions(b.tickInterval,b.min,b.max),D&&a.splice(1,a.length-2),b.tickPositions=a;if(!j)d=a[0],g=a[a.length-1],h=b.minPointOffset||0,e?b.min=d:b.min-h>d&&a.shift(),f?b.max=g:b.max+h<g&&a.pop(),a.length===0&&s(d)&&a.push((g+d)/2),a.length===1&&(e=Q(b.max)>1E13?1:0.001,b.min-=e,b.max+=e)},setMaxTicks:function(){var a=this.chart,b=a.maxTicks||{},c=this.tickPositions,d=this._maxTicksKey=
[this.coll,this.pos,this.len].join("-");if(!this.isLinked&&!this.isDatetimeAxis&&c&&c.length>(b[d]||0)&&this.options.alignTicks!==!1)b[d]=c.length;a.maxTicks=b},adjustTickAmount:function(){var a=this._maxTicksKey,b=this.tickPositions,c=this.chart.maxTicks;if(c&&c[a]&&!this.isDatetimeAxis&&!this.categories&&!this.isLinked&&this.options.alignTicks!==!1&&this.min!==u){var d=this.tickAmount,e=b.length;this.tickAmount=a=c[a];if(e<a){for(;b.length<a;)b.push(ea(b[b.length-1]+this.tickInterval));this.transA*=
(e-1)/(a-1);this.max=b[b.length-1]}if(s(d)&&a!==d)this.isDirty=!0}},setScale:function(){var a=this.stacks,b,c,d,e;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();e=this.len!==this.oldAxisLength;q(this.series,function(a){if(a.isDirtyData||a.isDirty||a.xAxis.isDirty)d=!0});if(e||d||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].total=null,a[b][c].cum=0;this.forceRedraw=
!1;this.getSeriesExtremes();this.setTickPositions();this.oldUserMin=this.userMin;this.oldUserMax=this.userMax;if(!this.isDirty)this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax}else if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}this.setMaxTicks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=p(c,!0),e=r(e,{min:a,max:b});I(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;f.isDirtyExtremes=
!0;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options;this.allowZoomOutside||(s(c)&&a<=L(c,p(e.min,c))&&(a=u),s(d)&&b>=t(d,p(e.max,d))&&(b=u));this.displayBtn=a!==u||b!==u;this.setExtremes(a,b,!1,u,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=p(b.width,a.plotWidth-c+(b.offsetRight||0)),f=p(b.height,a.plotHeight),g=p(b.top,a.plotTop),b=p(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=parseInt(f,10)/
100*a.plotHeight);c.test(g)&&(g=parseInt(g,10)/100*a.plotHeight+a.plotTop);this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=t(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog;return{min:a?ea(ka(this.min)):this.min,max:a?ea(ka(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?ka(this.min):this.min,b=b?ka(this.max):
this.max;c>a||a===null?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(p(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k,l=0,n,m=0,o=d.title,Y=d.labels,D=0,J=b.axisOffset,b=b.clipOffset,C=[-1,1,1,-1][h],r,v=1,w=p(Y.maxStaggerLines,5),x,y,A,z,R;a.hasData=j=a.hasVisibleSeries||s(a.min)&&s(a.max)&&
!!e;a.showAxis=k=j||p(d.showEmpty,!0);a.staggerLines=a.horiz&&Y.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(),a.labelGroup=c.g("axis-labels").attr({zIndex:Y.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add();if(j||a.isLinked){a.labelAlign=p(Y.align||a.autoLabelAlign(Y.rotation));q(e,function(b){f[b]?f[b].addLabel():f[b]=new Ta(a,b)});if(a.horiz&&!a.staggerLines&&w&&!Y.rotation){for(j=
a.reversed?[].concat(e).reverse():e;v<w;){x=[];y=!1;for(r=0;r<j.length;r++)A=j[r],z=(z=f[A].label&&f[A].label.getBBox())?z.width:0,R=r%v,z&&(A=a.translate(A),x[R]!==u&&A<x[R]&&(y=!0),x[R]=A+z);if(y)v++;else break}if(v>1)a.staggerLines=v}q(e,function(b){if(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign)D=t(f[b].getLabelSize(),D)});if(a.staggerLines)D*=a.staggerLines,a.labelOffset=D}else for(r in f)f[r].destroy(),delete f[r];if(o&&o.text&&o.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(o.text,
0,0,o.useHTML).attr({zIndex:7,rotation:o.rotation||0,align:o.textAlign||{low:"left",middle:"center",high:"right"}[o.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(o.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(k)l=a.axisTitle.getBBox()[g?"height":"width"],n=o.offset,m=s(n)?0:p(o.margin,g?5:10);a.axisTitle[k?"show":"hide"]()}a.offset=C*p(d.offset,J[h]);c=h===2?a.tickBaseline:0;g=D+m+(D&&C*(g?p(Y.y,a.tickBaseline+8):Y.x)-c);a.axisTitleMargin=p(n,g);J[h]=t(J[h],a.axisTitleMargin+
l+C*a.offset,g);b[i]=t(b[i],U(d.lineWidth/2)*2)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=y(e.style.fontSize||
12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?i:0);return{x:a?d:b+(g?this.width:0)+h+(e.x||0),y:a?b-(g?this.height:0)+h:d+(e.y||0)}},render:function(){var a=this,b=a.horiz,c=a.reversed,d=a.chart,e=d.renderer,f=a.options,g=a.isLog,h=a.isLinked,i=a.tickPositions,j,k=a.axisTitle,l=a.ticks,n=a.minorTicks,m=a.alternateBands,o=f.stackLabels,p=f.alternateGridColor,D=a.tickmarkOffset,J=f.lineWidth,C=d.hasRendered&&s(a.oldMin)&&
!isNaN(a.oldMin),r=a.hasData,t=a.showAxis,v,w=f.labels.overflow,x=a.justifyLabels=b&&w!==!1,A;a.labelEdge.length=0;a.justifyToPlot=w==="justify";q([l,n,m],function(a){for(var b in a)a[b].isActive=!1});if(r||h)if(a.minorTickInterval&&!a.categories&&q(a.getMinorTickPositions(),function(b){n[b]||(n[b]=new Ta(a,b,"minor"));C&&n[b].isNew&&n[b].render(null,!0);n[b].render(null,!1,1)}),i.length&&(j=i.slice(),(b&&c||!b&&!c)&&j.reverse(),x&&(j=j.slice(1).concat([j[0]])),q(j,function(b,c){x&&(c=c===j.length-
1?0:c+1);if(!h||b>=a.min&&b<=a.max)l[b]||(l[b]=new Ta(a,b)),C&&l[b].isNew&&l[b].render(c,!0,0.1),l[b].render(c)}),D&&a.min===0&&(l[-1]||(l[-1]=new Ta(a,-1,null,!0)),l[-1].render(-1))),p&&q(i,function(b,c){if(c%2===0&&b<a.max)m[b]||(m[b]=new K.PlotLineOrBand(a)),v=b+D,A=i[c+1]!==u?i[c+1]+D:a.max,m[b].options={from:g?ka(v):v,to:g?ka(A):A,color:p},m[b].render(),m[b].isActive=!0}),!a._addedPlotLB)q((f.plotLines||[]).concat(f.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0;q([l,n,
m],function(a){var b,c,e=[],f=va?va.duration||500:0,g=function(){for(c=e.length;c--;)a[e[c]]&&!a[e[c]].isActive&&(a[e[c]].destroy(),delete a[e[c]])};for(b in a)if(!a[b].isActive)a[b].render(b,!1,0),a[b].isActive=!1,e.push(b);a===m||!d.hasRendered||!f?g():f&&setTimeout(g,f)});if(J)b=a.getLinePath(J),a.axisLine?a.axisLine.animate({d:b}):a.axisLine=e.path(b).attr({stroke:f.lineColor,"stroke-width":J,zIndex:7}).add(a.axisGroup),a.axisLine[t?"show":"hide"]();if(k&&t)k[k.isNew?"attr":"animate"](a.getTitlePosition()),
k.isNew=!1;o&&o.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.render();q(this.plotLinesAndBands,function(a){a.render()});q(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||X(b);for(d in c)Pa(c[d]),c[d]=null;q([b.ticks,b.minorTicks,b.alternateBands],function(a){Pa(a)});for(a=e.length;a--;)e[a].destroy();q("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&(b[a]=b[a].destroy())});
this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){if(this.crosshair)if((s(b)||!p(this.crosshair.snap,!0))===!1)this.hideCrosshair();else{var c,d=this.crosshair,e=d.animation;p(d.snap,!0)?s(b)&&(c=this.chart.inverted!=this.horiz?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos;c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:p(b.stackY,b.y)):this.getPlotLinePath(null,null,null,null,c);if(c===null)this.hideCrosshair();else if(this.cross)this.cross.attr({visibility:"visible"})[e?
"animate":"attr"]({d:c},e);else{e={"stroke-width":d.width||1,stroke:d.color||"#C0C0C0",zIndex:d.zIndex||2};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}}},hideCrosshair:function(){this.cross&&this.cross.hide()}};r(na.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b),d=this.getPlotLinePath(a);d&&c?d.push(c[4],c[5],c[1],c[2]):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,
"plotLines")},addPlotBandOrLine:function(a,b){var c=(new K.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();q([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&la(b,b[e])})}});na.prototype.getTimeTicks=function(a,b,
c,d){var e=[],f={},g=E.global.useUTC,h,i=new Da(b-Sa),j=a.unitRange,k=a.count;if(s(b)){j>=A.second&&(i.setMilliseconds(0),i.setSeconds(j>=A.minute?0:k*U(i.getSeconds()/k)));if(j>=A.minute)i[Cb](j>=A.hour?0:k*U(i[pb]()/k));if(j>=A.hour)i[Db](j>=A.day?0:k*U(i[qb]()/k));if(j>=A.day)i[sb](j>=A.month?1:k*U(i[Xa]()/k));j>=A.month&&(i[Eb](j>=A.year?0:k*U(i[fb]()/k)),h=i[gb]());j>=A.year&&(h-=h%k,i[Fb](h));if(j===A.week)i[sb](i[Xa]()-i[rb]()+p(d,1));b=1;Sa&&(i=new Da(i.getTime()+Sa));h=i[gb]();for(var d=
i.getTime(),l=i[fb](),n=i[Xa](),m=(A.day+(g?Sa:i.getTimezoneOffset()*6E4))%A.day;d<c;)e.push(d),j===A.year?d=eb(h+b*k,0):j===A.month?d=eb(h,l+b*k):!g&&(j===A.day||j===A.week)?d=eb(h,l,n+b*k*(j===A.day?1:7)):d+=j*k,b++;e.push(d);q(wb(e,function(a){return j<=A.hour&&a%A.day===m}),function(a){f[a]="day"})}e.info=r(a,{higherRanks:f,totalRange:j*k});return e};na.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",
[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=A[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=A[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+A[c[g+1][0]])/2)break;e===A.year&&a<5*e&&(f=[1,2,5]);c=nb(a/e,f,d[0]==="year"?t(mb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};na.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=v(a),g=this.getLinearTickPositions(a,
b,c);else if(a>=0.08)for(var f=U(b),h,i,j,k,l,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!l;f++){i=e.length;for(h=0;h<i&&!l;h++)j=za(ka(f)*e[h]),j>b&&(!d||k<=c)&&k!==u&&g.push(k),k>c&&(l=!0),k=j}else if(b=ka(b),c=ka(c),a=e[d?"minorTickInterval":"tickInterval"],a=p(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=nb(a,null,mb(a)),g=Va(this.getLinearTickPositions(a,b,c),za),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=
a;return g};var Nb=K.Tooltip=function(){this.init.apply(this,arguments)};Nb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=y(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});ga||this.label.shadow(b.shadow);this.shared=b.shared},
destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&(Q(a-f.x)>1||Q(b-f.y)>1),h=e.followPointer||e.len>1;r(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?u:g?(2*f.anchorX+c)/3:c,anchorY:h?u:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(a){var b=
this,c;clearTimeout(this.hideTimer);if(!this.isHidden)c=this.chart.hoverPoints,this.hideTimer=setTimeout(function(){b.label.fadeOut();b.isHidden=!0},p(a,this.options.hideDelay,500)),c&&q(c,function(a){a.setState()}),this.chart.hoverPoints=null},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=0,h=0,i,a=ra(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===u&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(q(a,function(a){i=a.series.yAxis;g+=a.plotX;h+=
(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&i?i.top-f:0)}),g/=a.length,h/=a.length,c=[e?d.plotWidth-h:g,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-g:h]);return Va(c,v)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,f={},g,h=["y",d.chartHeight,b,c.plotY+d.plotTop],i=["x",d.chartWidth,a,c.plotX+d.plotLeft],j=c.ttBelow||d.inverted&&!c.negative||!d.inverted&&c.negative,k=function(a,b,c,d){var g=c<d-e,b=d+e+c<b,c=d-e-c;d+=e;if(j&&b)f[a]=d;else if(!j&&g)f[a]=c;else if(g)f[a]=
c;else if(b)f[a]=d;else return!1},l=function(a,b,c,d){if(d<e||d>b-e)return!1;else f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2},n=function(a){var b=h;h=i;i=b;g=a},m=function(){k.apply(0,h)!==!1?l.apply(0,i)===!1&&!g&&(n(!0),m()):g?f.x=f.y=0:(n(!0),m())};(d.inverted||this.len>1)&&n();m();return f},defaultFormatter:function(a){var b=this.points||ra(this),c=b[0].series,d;d=[a.tooltipHeaderFormatter(b[0])];q(b,function(a){c=a.series;d.push(c.tooltipFormatter&&c.tooltipFormatter(a)||a.point.tooltipFormatter(c.tooltipOptions.pointFormat))});
d.push(a.options.footerFormat||"");return d.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h={},i,j=[];i=e.formatter||this.defaultFormatter;var h=c.hoverPoints,k,l=this.shared;clearTimeout(this.hideTimer);this.followPointer=ra(a)[0].series.tooltipOptions.followPointer;g=this.getAnchor(a,b);f=g[0];g=g[1];l&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,h&&q(h,function(a){a.setState()}),q(a,function(a){a.setState("hover");j.push(a.getLabelConfig())}),h={x:a[0].category,
y:a[0].y},h.points=j,this.len=j.length,a=a[0]):h=a.getLabelConfig();i=i.call(h,this);h=a.series;this.distance=p(h.tooltipOptions.distance,16);i===!1?this.hide():(this.isHidden&&(bb(d),d.attr("opacity",1).show()),d.attr({text:i}),k=e.borderColor||a.color||h.color||"#606060",d.attr({stroke:k}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow}),this.isHidden=!1);I(c,"tooltipRefresh",{text:i,x:f+c.plotLeft,y:g+c.plotTop,borderColor:k})},updatePosition:function(a){var b=this.chart,
c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(v(c.x),v(c.y),a.plotX+b.plotLeft,a.plotY+b.plotTop)},tooltipHeaderFormatter:function(a){var b=a.series,c=b.tooltipOptions,d=c.dateTimeLabelFormats,e=c.xDateFormat,f=b.xAxis,g=f&&f.options.type==="datetime"&&ja(a.key),c=c.headerFormat,f=f&&f.closestPointRange,h;if(g&&!e){if(f)for(h in A){if(A[h]>=f||A[h]<=A.day&&a.key%A[h]>0){e=d[h];break}}else e=d.day;e=e||d.year}g&&e&&(c=c.replace("{point.key}","{point.key:"+
e+"}"));return Ja(c,{point:a,series:b})}};var pa;$a=x.documentElement.ontouchstart!==u;var Wa=K.Pointer=function(a,b){this.init(a,b)};Wa.prototype={init:function(a,b){var c=b.chart,d=c.events,e=ga?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(K.Tooltip&&b.tooltip.enabled)a.tooltip=new Nb(a,b.tooltip),
this.followTouchMove=b.tooltip.followTouchMove;this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||window.event,a=Tb(a);if(!a.target)a.target=a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=Sb(this.chart.container);d.pageX===u?(c=t(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return r(a,{chartX:v(c),chartY:v(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};q(this.chart.axes,function(c){b[c.isXAxis?"xAxis":
"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getIndex:function(a){var b=this.chart;return b.inverted?b.plotHeight+b.plotTop-a.chartY:a.chartX-b.plotLeft},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e,f,g=b.hoverPoint,h=b.hoverSeries,i,j,k=b.chartWidth,l=this.getIndex(a);if(d&&this.options.tooltip.shared&&(!h||!h.noSharedTooltip)){f=[];i=c.length;for(j=0;j<i;j++)if(c[j].visible&&c[j].options.enableMouseTracking!==!1&&!c[j].noSharedTooltip&&
c[j].singularTooltips!==!0&&c[j].tooltipPoints.length&&(e=c[j].tooltipPoints[l])&&e.series)e._dist=Q(l-e.clientX),k=L(k,e._dist),f.push(e);for(i=f.length;i--;)f[i]._dist>k&&f.splice(i,1);if(f.length&&f[0].clientX!==this.hoverX)d.refresh(f,a),this.hoverX=f[0].clientX}c=h&&h.tooltipOptions.followPointer;if(h&&h.tracker&&!c){if((e=h.tooltipPoints[l])&&e!==g)e.onMouseOver(a)}else d&&c&&!d.isHidden&&(h=d.getAnchor([{}],a),d.updatePosition({plotX:h[0],plotY:h[1]}));if(d&&!this._onDocumentMouseMove)this._onDocumentMouseMove=
function(a){if(W[pa])W[pa].pointer.onDocumentMouseMove(a)},N(x,"mousemove",this._onDocumentMouseMove);q(b.axes,function(b){b.drawCrosshair(a,p(e,g))})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=c.hoverPoint,f=c.tooltip,g=f&&f.shared?c.hoverPoints:e;(a=a&&f&&g)&&ra(g)[0].plotX===u&&(a=!1);if(a)f.refresh(g),e&&e.setState(e.state,!0);else{if(e)e.onMouseOut();if(d)d.onMouseOut();f&&f.hide(b);if(this._onDocumentMouseMove)X(x,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=
null;q(c.axes,function(a){a.hideCrosshair()});this.hoverX=null}},scaleGroups:function(a,b){var c=this.chart,d;q(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},
drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,l,n=this.mouseDownX,m=this.mouseDownY,o=c.panKey&&a[c.panKey+"Key"];d<h?d=h:d>h+j&&(d=h+j);e<i?e=i:e>i+k&&(e=i+k);this.hasDragged=Math.sqrt(Math.pow(n-d,2)+Math.pow(m-e,2));if(this.hasDragged>10){l=b.isInsidePlot(n-h,m-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!o&&!this.selectionMarker)this.selectionMarker=b.renderer.rect(h,i,
f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();this.selectionMarker&&f&&(d-=n,this.selectionMarker.attr({width:Q(d),x:(d>0?0:d)+n}));this.selectionMarker&&g&&(d=e-m,this.selectionMarker.attr({height:Q(d),y:(d>0?0:d)+m}));l&&!this.selectionMarker&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this.chart,c=this.hasPinched;if(this.selectionMarker){var d={xAxis:[],yAxis:[],originalEvent:a.originalEvent||a},e=this.selectionMarker,f=e.attr?e.attr("x"):
e.x,g=e.attr?e.attr("y"):e.y,h=e.attr?e.attr("width"):e.width,i=e.attr?e.attr("height"):e.height,j;if(this.hasDragged||c)q(b.axes,function(b){if(b.zoomEnabled){var c=b.horiz,e=a.type==="touchend"?b.minPixelPadding:0,m=b.toValue((c?f:g)+e),c=b.toValue((c?f+h:g+i)-e);!isNaN(m)&&!isNaN(c)&&(d[b.coll].push({axis:b,min:L(m,c),max:t(m,c)}),j=!0)}}),j&&I(b,"selection",d,function(a){b.zoom(r(a,c?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();c&&this.scaleGroups()}if(b)B(b.container,
{cursor:b._cursor}),b.cancelClick=this.hasDragged>10,b.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){W[pa]&&W[pa].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,d=b.hoverSeries,a=this.normalize(a,c);c&&d&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&
this.reset()},onContainerMouseLeave:function(){var a=W[pa];if(a)a.pointer.reset(),a.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;pa=b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=F(a,"class"))if(c.indexOf(b)!==-1)return!0;else if(c.indexOf("highcharts-container")!==
-1)return!1;a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,c=(a=a.relatedTarget||a.toElement)&&a.point&&a.point.series;if(b&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&c!==b)b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);a.cancelBubble=!0;b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(I(c.series,"click",r(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",
a)):(r(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&I(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};N(b,"mouseleave",a.onContainerMouseLeave);ab===1&&N(x,"mouseup",a.onDocumentMouseUp);if($a)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},ab===1&&
N(x,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;X(this.chart.container,"mouseleave",this.onContainerMouseLeave);ab||(X(x,"mouseup",this.onDocumentMouseUp),X(x,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};r(K.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,
b,c,d,e,f,g,h){var i=this.chart,j=a?"x":"y",k=a?"X":"Y",l="chart"+k,n=a?"width":"height",m=i["plot"+(a?"Left":"Top")],o,p,q=h||1,r=i.inverted,C=i.bounds[a?"h":"v"],t=b.length===1,s=b[0][l],v=c[0][l],u=!t&&b[1][l],w=!t&&c[1][l],x,c=function(){!t&&Q(s-u)>20&&(q=h||Q(v-w)/Q(s-u));p=(m-v)/q+s;o=i["plot"+(a?"Width":"Height")]/q};c();b=p;b<C.min?(b=C.min,x=!0):b+o>C.max&&(b=C.max-o,x=!0);x?(v-=0.8*(v-g[j][0]),t||(w-=0.8*(w-g[j][1])),c()):g[j]=[v,w];r||(f[j]=p-m,f[n]=o);f=r?1/q:q;e[n]=o;e[j]=b;d[r?a?"scaleY":
"scaleX":"scale"+k]=q;d["translate"+k]=f*m+(v-f*s)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=b.followTouchMove,f=a.touches,g=f.length,h=b.lastValidTouch,i=b.hasZoom,j=b.selectionMarker,k={},l=g===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),n={};(i||e)&&!l&&a.preventDefault();Va(f,function(a){return b.normalize(a)});if(a.type==="touchstart")q(f,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),h.x=[d[0].chartX,d[1]&&d[1].chartX],h.y=[d[0].chartY,
d[1]&&d[1].chartY],q(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(p(a.options.min,a.dataMin)),f=a.toPixels(p(a.options.max,a.dataMax)),g=L(e,f),e=t(e,f);b.min=L(a.pos,g-d);b.max=t(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!j)b.selectionMarker=j=r({destroy:sa},c.plotBox);b.pinchTranslate(d,f,k,j,n,h);b.hasPinched=i;b.scaleGroups(k,n);if(!i&&e&&g===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=!1,this.reset(!1,0)}},onContainerTouchStart:function(a){var b=
this.chart;pa=b.index;a.touches.length===1?(a=this.normalize(a),b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)?(this.runPointActions(a),this.pinch(a)):this.reset()):a.touches.length===2&&this.pinch(a)},onContainerTouchMove:function(a){(a.touches.length===1||a.touches.length===2)&&this.pinch(a)},onDocumentTouchEnd:function(a){W[pa]&&W[pa].pointer.drop(a)}});if(G.PointerEvent||G.MSPointerEvent){var ua={},zb=!!G.PointerEvent,Xb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in ua)ua.hasOwnProperty(a)&&
b.push({pageX:ua[a].pageX,pageY:ua[a].pageY,target:ua[a].target});return b},Ab=function(a,b,c,d){a=a.originalEvent||a;if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&W[pa])d(a),d=W[pa].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:sa,touches:Xb()})};r(Wa.prototype,{onContainerPointerDown:function(a){Ab(a,"onContainerTouchStart","touchstart",function(a){ua[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Ab(a,
"onContainerTouchMove","touchmove",function(a){ua[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!ua[a.pointerId].target)ua[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Ab(a,"onContainerTouchEnd","touchend",function(a){delete ua[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,zb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,zb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(x,zb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});
Na(Wa.prototype,"init",function(a,b,c){a.call(this,b,c);(this.hasZoom||this.followTouchMove)&&B(b.container,{"-ms-touch-action":P,"touch-action":P})});Na(Wa.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(N)});Na(Wa.prototype,"destroy",function(a){this.batchMSEvents(X);a.call(this)})}var lb=K.Legend=function(a,b){this.init(a,b)};lb.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=p(b.padding,8),f=b.itemMarginTop||0;this.options=b;
if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=w(d,b.itemHiddenStyle),c.itemMarginTop=f,c.padding=e,c.initialItemX=e,c.initialItemY=e-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.lastLineHeight=0,c.symbolWidth=p(b.symbolWidth,16),c.pages=[],c.render(),N(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&
a.options.marker,i={fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in i.stroke=h,g=a.convertAttribs(g),g)d=g[j],d!==u&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;a.legendGroup&&a.legendGroup.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;q(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&
(a[b]=a[b].destroy())});b&&Qa(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;if(b)c=b.translateY,q(this.allItems,function(e){var f=e.checkbox,g;f&&(g=c+f.y+(a||0)+3,B(f,{left:b.translateX+e.checkboxOffset+f.x-20+"px",top:g+"px",display:g>c-6&&g<c+d-6?"":P}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=
this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?p(d.itemDistance,20):0,l=!d.rtl,n=d.width,m=d.itemMarginBottom||0,
o=this.itemMarginTop,q=this.initialItemX,r=a.legendItem,s=a.series&&a.series.drawLegendSymbol?a.series:a,C=s.options,C=this.createCheckboxForItem&&C&&C.showCheckbox,u=d.useHTML;if(!r){a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=r=c.text(d.labelFormat?Ja(d.labelFormat,a):d.labelFormatter.call(a),l?f+g:-g,this.baseline||0,u).css(w(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.baseline=c.fontMetrics(h.fontSize,
r).f+3+o,r.attr("y",this.baseline);s.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,r,u,h,i);this.colorizeItem(a,a.visible);C&&this.createCheckboxForItem(a)}c=r.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||f+g+c.width+k+(C?20:0);this.itemHeight=g=v(a.legendItemHeight||c.height);if(e&&this.itemX-q+f>(n||b.chartWidth-2*j-q-d.x))this.itemX=q,this.itemY+=o+this.lastLineHeight+m,this.lastLineHeight=0;this.maxItemWidth=t(this.maxItemWidth,f);this.lastItemY=o+this.itemY+
m;this.lastLineHeight=t(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=o+g+m,this.lastLineHeight=g);this.offsetWidth=n||t((e?this.itemX-q-k:f)+j,this.offsetWidth)},getAllItems:function(){var a=[];q(this.chart.series,function(b){var c=b.options;if(p(c.showInLegend,!s(c.linkedTo)?u:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,
l=j.borderWidth,n=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();ob(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;q(e,function(b){a.renderItem(b)});g=j.width||a.offsetWidth;
h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);if(l||n){g+=k;h+=k;if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,"stroke-width":l||0,fill:n||P}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;q(e,function(b){a.positionItem(b)});f&&d.align(r({width:g,height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=
this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,j=e.navigation,k=p(j.animation,!0),l=j.arrowSize||12,n=this.nav,m=this.pages,o,r=this.allItems;e.layout==="horizontal"&&(f/=2);g&&(f=L(f,g));m.length=0;if(a>f&&!e.useHTML){this.clipHeight=h=t(f-20-this.titleHeight-this.padding,0);this.currentPage=p(this.currentPage,1);this.fullHeight=a;q(r,function(a,b){var c=a._legendItemPos[1],d=v(a.legendItem.getBBox().height),
e=m.length;if(!e||c-m[e-1]>h&&(o||c)!==m[e-1])m.push(o||c),e++;b===r.length-1&&c+d-m[e-1]>h&&m.push(c);c!==o&&(o=c)});if(!i)i=b.clipRect=d.clipRect(0,this.padding,9999,0),b.contentGroup.clip(i);i.attr({height:h});if(!n)this.nav=n=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,k)}).add(n),this.pager=d.text("",15,10).css(j.style).add(n),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,k)}).add(n);b.scroll(0);
a=f}else if(n)i.attr({height:c.chartHeight}),n.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==u&&Ra(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),
i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};M=K.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||12;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-5-c/2,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=
this.options,c=b.marker,d;d=a.symbolWidth;var e=this.chart.renderer,f=this.legendGroup,a=a.baseline-v(e.fontMetrics(a.options.itemStyle.fontSize,this.legendItem).b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=d=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b).add(f),d.isMarker=!0}};(/Trident\/7\.0/.test(wa)||Ua)&&Na(lb.prototype,"positionItem",function(a,
b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});Ya.prototype={init:function(a,b){var c,d=a.series;a.series=null;c=w(E,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=W.length;W.push(f);ab++;d.reflow!==!1&&N(f,"load",
function(){f.initReflow()});if(e)for(g in e)N(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=ga?!1:p(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=H[a.type||b.type||b.defaultSeriesType])||ha(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},adjustTickAmounts:function(){this.options.chart.alignTicks!==!1&&q(this.axes,function(a){a.adjustTickAmount()});
this.maxTicks=null},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,j=this.isDirtyBox,k=c.length,l=k,n=this.renderer,m=n.isHidden(),o=[];Ra(a,this);m&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=k;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;q(c,function(a){a.isDirty&&a.options.legendType==="point"&&(f=!0)});if(f&&e.options.enabled)e.render(),
this.isDirtyLegend=!1;g&&this.getStacks();if(i){if(!this.isResizing)this.maxTicks=null,q(b,function(a){a.setScale()});this.adjustTickAmounts()}this.getMargins();i&&(q(b,function(a){a.isDirty&&(j=!0)}),q(b,function(a){if(a.isDirtyExtremes)a.isDirtyExtremes=!1,o.push(function(){I(a,"afterSetExtremes",r(a.eventArgs,a.getExtremes()));delete a.eventArgs});(j||g)&&a.redraw()}));j&&this.drawChartBox();q(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);n.draw();I(this,
"redraw");m&&this.cloneRenderTo(!0);q(o,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=ra(b.xAxis||{}),b=b.yAxis=ra(b.yAxis||{});q(c,function(a,b){a.index=b;a.isX=!0});q(b,function(a,b){a.index=b});
c=c.concat(b);q(c,function(b){new na(a,b)});a.adjustTickAmounts()},getSelectedPoints:function(){var a=[];q(this.series,function(b){a=a.concat(wb(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return wb(this.series,function(a){return a.selected})},getStacks:function(){var a=this;q(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});q(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=
b.type+p(b.options.stack,"")})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=w(e.title,a);g=e.subtitle=w(e.subtitle,b),e=g;q([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,
e=e.subtitle,g=this.renderer,h=this.spacingBox.width-44;if(c&&(c.css({width:(f.width||h)+"px"}).align(r({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,"spacingBox"),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h)+"px"}).align(r({y:b+(f.margin-13)+g.fontMetrics(f.style.fontSize,d).b},e),!1,"spacingBox"),!e.floating&&!e.verticalAlign&&(b=La(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&
p(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!s(b))this.containerWidth=ib(c,"width");if(!s(a))this.containerHeight=ib(c,"height");this.chartWidth=t(0,b||this.containerWidth||600);this.chartHeight=t(0,p(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Qa(b),delete this.renderToClone):(c&&
c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),B(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),x.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options.chart,c,d,e;this.renderTo=a=b.renderTo;e="highcharts-"+ub++;if(Ga(a))this.renderTo=a=x.getElementById(a);a||ha(13,!0);c=y(F(a,"data-highcharts-chart"));!isNaN(c)&&W[c]&&W[c].hasRendered&&
W[c].destroy();F(a,"data-highcharts-chart",this.index);a.innerHTML="";!b.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();c=this.chartWidth;d=this.chartHeight;this.container=a=$(Ka,{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},r({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},b.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=
b.forExport?new ta(a,c,d,b.style,!0):new Za(a,c,d,b.style);ga&&this.renderer.create(this,a,c,d)},getMargins:function(){var a=this.spacing,b,c=this.legend,d=this.margin,e=this.options.legend,f=p(e.margin,20),g=e.x,h=e.y,i=e.align,j=e.verticalAlign,k=this.titleOffset;this.resetMargins();b=this.axisOffset;if(k&&!s(d[0]))this.plotTop=t(this.plotTop,k+this.options.title.margin+a[0]);if(c.display&&!e.floating)if(i==="right"){if(!s(d[1]))this.marginRight=t(this.marginRight,c.legendWidth-g+f+a[1])}else if(i===
"left"){if(!s(d[3]))this.plotLeft=t(this.plotLeft,c.legendWidth+g+f+a[3])}else if(j==="top"){if(!s(d[0]))this.plotTop=t(this.plotTop,c.legendHeight+h+f+a[0])}else if(j==="bottom"&&!s(d[2]))this.marginBottom=t(this.marginBottom,c.legendHeight-h+f+a[2]);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);this.hasCartesianSeries&&q(this.axes,function(a){a.getOffset()});s(d[3])||(this.plotLeft+=b[3]);s(d[0])||(this.plotTop+=b[0]);
s(d[2])||(this.marginBottom+=b[2]);s(d[1])||(this.marginRight+=b[1]);this.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||ib(d,"width"),f=c.height||ib(d,"height"),c=a?a.target:G,d=function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null};if(!b.hasUserSize&&e&&f&&(c===G||c===x)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),a?b.reflowTimeout=setTimeout(d,100):d();b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=
this,b=function(b){a.reflow(b)};N(G,"resize",b);N(a,"destroy",function(){X(G,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g;d.isResizing+=1;g=function(){d&&I(d,"endResize",null,function(){d.isResizing-=1})};Ra(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(s(a))d.chartWidth=e=t(0,v(a)),d.hasUserSize=!!e;if(s(b))d.chartHeight=f=t(0,v(b));(va?jb:B)(d.container,{width:e+"px",height:f+"px"},va);d.setChartSize(!0);d.renderer.setSize(e,f,c);d.maxTicks=null;q(d.axes,function(a){a.isDirty=
!0;a.setScale()});q(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;I(d,"resize");va===!1?g():setTimeout(g,va&&va.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,l;this.plotLeft=i=v(this.plotLeft);this.plotTop=j=v(this.plotTop);this.plotWidth=k=t(0,v(d-i-this.marginRight));this.plotHeight=
l=t(0,v(e-j-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:j,width:k,height:l};d=2*U(this.plotBorderWidth/2);b=La(t(d,h[3])/2);c=La(t(d,h[0])/2);this.clipBox={x:b,y:c,width:U(this.plotSizeX-t(d,h[1])/2-b),height:t(0,U(this.plotSizeY-t(d,h[2])/2-c))};a||q(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=
this.spacing,b=this.margin;this.plotTop=p(b[0],a[0]);this.marginRight=p(b[1],a[1]);this.marginBottom=p(b[2],a[2]);this.plotLeft=p(b[3],a[3]);this.axisOffset=[0,0,0,0];this.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,n=a.plotBorderWidth||0,m,o=this.plotLeft,
p=this.plotTop,q=this.plotWidth,r=this.plotHeight,t=this.plotBox,s=this.clipRect,v=this.clipBox;m=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-m,height:d-m}));else{e={fill:j||P};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(m/2,m/2,c-m,d-m,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?f.animate(t):this.plotBackground=b.rect(o,p,q,r,0).attr({fill:k}).add().shadow(a.plotShadow);if(l)h?h.animate(t):this.plotBGImage=
b.image(l,o,p,q,r).add();s?s.animate({width:v.width,height:v.height}):this.clipRect=b.clipRect(v);if(n)g?g.animate(g.crisp({x:o,y:p,width:q,height:r,strokeWidth:-n})):this.plotBorder=b.rect(o,p,q,r,0,-n).attr({stroke:a.plotBorderColor,"stroke-width":n,fill:P,zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;q(["inverted","angular","polar"],function(g){c=H[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&
e--;)(c=H[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;q(b,function(a){a.linkedSeries.length=0});q(b,function(b){var d=b.options.linkedTo;if(Ga(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d})},renderSeries:function(){q(this.series,function(a){a.translate();a.setTooltipPoints&&a.setTooltipPoints();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&q(b.items,function(c){var d=r(b.style,
c.style),e=y(d.left)+a.plotLeft,f=y(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options;this.setTitle();this.legend=new lb(this,c.legend);this.getStacks();q(a,function(a){a.setScale()});this.getMargins();this.maxTicks=null;q(a,function(a){a.setTickPositions(!0);a.setMaxTicks()});this.adjustTickAmounts();this.getMargins();this.drawChartBox();this.hasCartesianSeries&&q(a,function(a){a.render()});
if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;I(a,"destroy");W[a.index]=
u;ab--;a.renderTo.removeAttribute("data-highcharts-chart");X(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();q("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",X(d),f&&Qa(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!ba&&G==G.top&&
x.readyState!=="complete"||ga&&!G.canvg?(ga?Mb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):x.attachEvent("onreadystatechange",function(){x.detachEvent("onreadystatechange",a.firstRender);x.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options,c=a.callback;if(a.isReadyToRender()){a.getContainer();I(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();q(b.series||[],function(b){a.initSeries(b)});a.linkSeries();I(a,
"beforeRender");if(K.Pointer)a.pointer=new Wa(a,b);a.render();a.renderer.draw();c&&c.apply(a,[a]);q(a.callbacks,function(b){b.apply(a,[a])});a.cloneRenderTo(!0);I(a,"load")}},splashArray:function(a,b){var c=b[a],c=da(c)?c:[c,c,c,c];return[p(b[a+"Top"],c[0]),p(b[a+"Right"],c[1]),p(b[a+"Bottom"],c[2]),p(b[a+"Left"],c[3])]}};Ya.prototype.callbacks=[];Z=K.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d,e=b.plotWidth-2*c,f=b.plotHeight-2*c,b=a.center,
a=[p(b[0],"50%"),p(b[1],"50%"),a.size||"100%",a.innerSize||0],g=L(e,f),h;return Va(a,function(a,b){h=/%$/.test(a);d=b<2||b===2&&h;return(h?[e,f,g,g][b]*y(a)/100:a)+(d?c:0)})}};var Fa=function(){};Fa.prototype={init:function(a,b,c){this.series=a;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,
b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Fa.prototype.optionsToObject.call(this,a);r(this,a);this.options=this.options?r(this.options,a):a;if(d)this.y=this[d];if(this.x===u&&c)this.x=b===u?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.pointArrayMap||["y"],e=d.length,f=0,g=0;if(typeof a==="number"||a===null)b[d[0]]=a;else if(Ha(a)){if(a.length>e){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];f++}for(;g<e;)b[d[g++]]=
a[f++]}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),la(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)X(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a="graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),
b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=p(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";q(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ja(a,
{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});I(this,a,b,c)}};var O=function(){};O.prototype={isCartesian:!0,type:"line",pointClass:Fa,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis",
"yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return p(a.options.index,a._i)-p(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();r(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(ga)b.animation=!1;e=b.events;for(d in e)N(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();
q(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;ob(f,g);this.yAxis&&ob(this.yAxis.series,g);q(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;q(a.axisTypes||[],function(e){q(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==u&&b[e]===d.id||b[e]===u&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&ha(18,!0)})},
updateParallelArrays:function(a,b){var c=a.series,d=arguments;q(c.parallelArrays,typeof b==="number"?function(d){var f=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=this.options,b=this.xIncrement,b=p(b,a.pointStart,0);this.pointInterval=p(this.pointInterval,a.pointInterval,1);this.xIncrement=b+this.pointInterval;return b},getSegments:function(){var a=-1,b=[],c,d=this.points,
e=d.length;if(e)if(this.options.connectNulls){for(c=e;c--;)d[c].y===null&&d.splice(c,1);d.length&&(b=[d])}else q(d,function(c,g){c.y===null?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))});this.segments=b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=w(e,c.series,a);this.tooltipOptions=w(E.tooltip,E.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&
d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(s(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint||this.getCyclic("color",this.options.color||ca[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);if(/^url/.test(this.symbol))a.radius=
0},drawLegendSymbol:M.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,j=e.chart,k=null,l=e.xAxis,n=l&&!!l.categories,m=e.tooltipPoints,o=i.turboThreshold,r=this.xData,t=this.yData,s=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=p(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData)q(a,function(a,b){f[b].update(a,!1,null,!1)});else{e.xIncrement=null;e.pointRange=n?1:i.pointRange;e.colorCounter=0;q(this.parallelArrays,function(a){e[a+"Data"].length=
0});if(o&&h>o){for(c=0;k===null&&c<h;)k=a[c],c++;if(ja(k)){n=p(i.pointStart,0);i=p(i.pointInterval,1);for(c=0;c<h;c++)r[c]=n,t[c]=a[c],n+=i;e.xIncrement=n}else if(Ha(k))if(s)for(c=0;c<h;c++)i=a[c],r[c]=i[0],t[c]=i.slice(1,s+1);else for(c=0;c<h;c++)i=a[c],r[c]=i[0],t[c]=i[1];else ha(12)}else for(c=0;c<h;c++)if(a[c]!==u&&(i={series:e},e.pointClass.prototype.applyOptions.apply(i,[a[c]]),e.updateParallelArrays(i,c),n&&i.name))l.names[i.x]=i.name;Ga(t[0])&&ha(14,!0);e.data=[];e.options.data=a;for(c=g;c--;)f[c]&&
f[c].destroy&&f[c].destroy();if(m)m.length=0;if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=j.isDirtyBox=!0;c=!1}b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,j=this.options;i=j.cropThreshold;var k=0,l=this.isCartesian,n,m;if(l&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)n=h.getExtremes(),m=n.min,n=n.max;if(l&&this.sorted&&(!i||d>i||this.forceCrop))if(b[d-1]<m||b[0]>n)b=[],c=[];else if(b[0]<m||b[d-1]>n)e=
this.cropData(this.xData,this.yData,m,n),b=e.xData,c=e.yData,e=e.start,f=!0,k=b.length;for(i=b.length-1;i>=0;i--)d=b[i]-b[i-1],!f&&b[i]>m&&b[i]<n&&k++,d>0&&(g===u||d<g)?g=d:d<0&&this.requireSorting&&ha(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;this.activePointCount=k;if(j.pointRange===null)this.pointRange=g||1;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=p(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=t(0,i-h);break}for(;i<
e;i++)if(a[i]>d){g=i+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],n;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(n=0;n<g;n++)i=h+n,j?l[n]=(new f).init(this,[d[n]].concat(ra(e[n]))):(b[i]?k=b[i]:a[i]!==u&&(b[i]=k=(new f).init(this,a[i],d[n])),l[n]=k),l[n].index=i;if(b&&(g!==(c=b.length)||
j))for(n=0;n<c;n++)if(n===h&&!j&&(n+=g),b[n])b[n].destroyElements(),b[n].plotX=u;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,j,k,l,a=a||this.stackedYData||this.processedYData;d=a.length;for(l=0;l<d;l++)if(j=c[l],k=a[l],i=k!==null&&k!==u&&(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.cropped||(c[l+1]||j)>=g&&(c[l-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==null&&(e[f++]=k[i]);else e[f++]=
k;this.dataMin=p(void 0,Oa(e));this.dataMax=p(void 0,Ca(e))},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,j=i==="between"||ja(i),k=a.threshold,a=0;a<g;a++){var l=f[a],n=l.x,m=l.y,o=l.low,q=b&&e.stacks[(this.negStacks&&m<k?"-":"")+this.stackKey];if(e.isLog&&m<=0)l.y=m=null,ha(10);l.plotX=c.translate(n,0,0,0,1,i,this.type===
"flags");if(b&&this.visible&&q&&q[n])q=q[n],m=q.points[this.index+","+a],o=m[0],m=m[1],o===0&&(o=p(k,e.min)),e.isLog&&o<=0&&(o=null),l.total=l.stackTotal=q.total,l.percentage=q.total&&l.y/q.total*100,l.stackY=m,q.setOffset(this.pointXOffset||0,this.barW||0);l.yBottom=s(o)?e.translate(o,0,1,0,1):null;h&&(m=this.modifyValue(m,l));l.plotY=typeof m==="number"&&m!==Infinity?e.translate(m,0,1,0,1):u;l.clientX=j?c.translate(n,0,0,0,1):l.plotX;l.negative=l.y<(k||0);l.category=d&&d[l.x]!==u?d[l.x]:l.x}this.getSegments()},
animate:function(a){var b=this.chart,c=b.renderer,d;d=this.options.animation;var e=this.clipBox||b.clipBox,f=b.inverted,g;if(d&&!da(d))d=ca[this.type].animation;g=["_sharedClip",d.duration,d.easing,e.height].join(",");a?(a=b[g],d=b[g+"m"],a||(b[g]=a=c.clipRect(r(e,{width:0})),b[g+"m"]=d=c.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),this.group.clip(a),this.markerGroup.clip(d),this.sharedClipKey=g):((a=b[g])&&a.animate({width:b.plotSizeX},d),b[g+"m"]&&b[g+"m"].animate({width:b.plotSizeX+
99},d),this.animate=null)},afterAnimate:function(){var a=this.chart,b=this.sharedClipKey,c=this.group,d=this.clipBox;if(c&&this.options.clip!==!1){if(!b||!d)c.clip(d?a.renderer.clipRect(d):a.clipRect);this.markerGroup.clip()}I(this,"afterAnimate");setTimeout(function(){b&&a[b]&&(d||(a[b]=a[b].destroy()),a[b+"m"]&&(a[b+"m"]=a[b+"m"].destroy()))},100)},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,l=this.options.marker,n=this.pointAttr[""],m,o,q,t=this.markerGroup,s=p(l.enabled,
!this.requireSorting||this.activePointCount<0.5*this.xAxis.len/l.radius);if(l.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=U(g.plotX),e=g.plotY,k=g.graphic,m=g.marker||{},o=!!g.marker,a=s&&m.enabled===u||m.enabled,q=c.isInsidePlot(v(d),e,c.inverted),a&&e!==u&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||n,h=a.r,i=p(m.symbol,this.symbol),j=i.indexOf("url")===0,k)k[q?"show":"hide"](!0).animate(r({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(q&&
(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,o?m:l).attr(a).add(t)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=p(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=ca[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color;f={stroke:g,fill:g};var h=a.points||[],i,j=[],k,l=a.pointAttrToOptions;k=a.hasPointSpecificOptions;var n=b.negativeColor,m=
c.lineColor,o=c.fillColor;i=b.turboThreshold;var p;b.marker?(e.radius=e.radius||c.radius+e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):e.color=e.color||ya(e.color||g).brighten(e.brightness).get();j[""]=a.convertAttribs(c,f);q(["hover","select"],function(b){j[b]=a.convertAttribs(d[b],j[""])});a.pointAttr=j;g=h.length;if(!i||g<i||k)for(;g--;){i=h[g];if((c=i.options&&i.options.marker||i.options)&&c.enabled===!1)c.radius=0;if(i.negative&&n)i.color=i.fillColor=n;k=b.colorByPoint||
i.color;if(i.options)for(p in l)s(c[l[p]])&&(k=!0);if(k){c=c||{};k=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker)f.color=f.color||!i.options.color&&e.color||ya(i.color).brighten(f.brightness||e.brightness).get();f={color:i.color};if(!o)f.fillColor=i.color;if(!m)f.lineColor=i.color;k[""]=a.convertAttribs(r(f,c),j[""]);k.hover=a.convertAttribs(d.hover,j.hover,k[""]);k.select=a.convertAttribs(d.select,j.select,k[""])}else k=j;i.pointAttr=k}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(wa),
d,e,f=a.data||[],g,h,i;I(a,"destroy");X(a);q(a.axisTypes||[],function(b){if(i=a[b])la(i.series,a),i.isDirty=i.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(e=f.length;e--;)(g=f[e])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);q("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","),function(b){a[b]&&(d=c&&b==="group"?"hide":"destroy",a[b][d]())});if(b.hoverSeries===a)b.hoverSeries=null;la(b.series,a);for(h in a)delete a[h]},
getSegmentPath:function(a){var b=this,c=[],d=b.options.step;q(a,function(e,f){var g=e.plotX,h=e.plotY,i;b.getPointSpline?c.push.apply(c,b.getPointSpline(a,e,f)):(c.push(f?"L":"M"),d&&f&&(i=a[f-1],d==="right"?c.push(i.plotX,h):d==="center"?c.push((i.plotX+g)/2,i.plotY,(i.plotX+g)/2,h):c.push(g,i.plotY)),c.push(e.plotX,e.plotY))});return c},getGraphPath:function(){var a=this,b=[],c,d=[];q(a.segments,function(e){c=a.getSegmentPath(e);e.length>1?b=b.concat(c):d.push(e[0])});a.singlePoints=d;return a.graphPath=
b},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color]],d=b.lineWidth,e=b.dashStyle,f=b.linecap!=="square",g=this.getGraphPath(),h=b.negativeColor;h&&c.push(["graphNeg",h]);q(c,function(c,h){var k=c[0],l=a[k];if(l)bb(l),l.animate({d:g});else if(d&&g.length)l={stroke:c[1],"stroke-width":d,fill:P,zIndex:1},e?l.dashstyle=e:f&&(l["stroke-linecap"]=l["stroke-linejoin"]="round"),a[k]=a.chart.renderer.path(g).attr(l).add(a.group).shadow(!h&&b.shadow)})},clipNeg:function(){var a=
this.options,b=this.chart,c=b.renderer,d=a.negativeColor||a.negativeFillColor,e,f=this.graph,g=this.area,h=this.posClip,i=this.negClip;e=b.chartWidth;var j=b.chartHeight,k=t(e,j),l=this.yAxis;if(d&&(f||g)){d=v(l.toPixels(a.threshold||0,!0));d<0&&(k-=d);a={x:0,y:0,width:k,height:d};k={x:0,y:d,width:k,height:k};if(b.inverted)a.height=k.y=b.plotWidth-d,c.isVML&&(a={x:b.plotWidth-d-b.plotLeft,y:0,width:e,height:j},k={x:d+b.plotLeft-e,y:0,width:b.plotLeft+d,height:e});l.reversed?(b=k,e=a):(b=a,e=k);h?
(h.animate(b),i.animate(e)):(this.posClip=h=c.clipRect(b),this.negClip=i=c.clipRect(e),f&&this.graphNeg&&(f.clip(h),this.graphNeg.clip(i)),g&&(g.clip(h),this.areaNeg.clip(i)))}},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};q(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)N(c,"resize",a),N(b,"destroy",function(){X(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=
f=this.chart.renderer.g(b).attr({visibility:c,zIndex:d||0.1}).add(e));f[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=(c=d.animation)&&!!a.animate&&b.renderer.isSVG&&p(c.duration,500)||0,f=a.visible?"visible":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;
c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),a.clipNeg());q(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)e?a.animationTimeout=
setTimeout(function(){a.afterAnimate()},e):a.afterAnimate();a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:p(d&&d.left,a.plotLeft),translateY:p(e&&e.top,a.plotTop)}));this.translate();this.setTooltipPoints&&this.setTooltipPoints(!0);this.render();b&&I(this,"updatedData")}};Gb.prototype={destroy:function(){Pa(this,this.axis)},
render:function(a){var b=this.options,c=b.format,c=c?Ja(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=this.isNegative,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=Q(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,
f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};na.prototype.buildStacks=function(){var a=this.series,b=p(this.options.reversedStacks,!0),c=a.length;if(!this.isXAxis){for(this.usePercentage=!1;c--;)a[b?c:a.length-c-1].setStackedPoints();if(this.usePercentage)for(c=0;c<a.length;c++)a[c].setPercentStacks()}};na.prototype.renderStackTotals=function(){var a=
this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};O.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.stack,e=e.stacking,h=this.stackKey,
i="-"+h,j=this.negStacks,k=this.yAxis,l=k.stacks,n=k.oldStacks,m,o,p,q,r,s;for(q=0;q<d;q++){r=a[q];s=b[q];p=this.index+","+q;o=(m=j&&s<f)?i:h;l[o]||(l[o]={});if(!l[o][r])n[o]&&n[o][r]?(l[o][r]=n[o][r],l[o][r].total=null):l[o][r]=new Gb(k,k.options.stackLabels,m,r,g);o=l[o][r];o.points[p]=[o.cum||0];e==="percent"?(m=m?h:i,j&&l[m]&&l[m][r]?(m=l[m][r],o.total=m.total=t(m.total,o.total)+Q(s)||0):o.total=ea(o.total+(Q(s)||0))):o.total=ea(o.total+(s||0));o.cum=(o.cum||0)+(s||0);o.points[p].push(o.cum);
c[q]=o.cum}if(e==="percent")k.usePercentage=!0;this.stackedYData=c;k.oldStacks={}}};O.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData;q([b,"-"+b],function(b){var e;for(var f=d.length,g,h;f--;)if(g=d[f],e=(h=c[b]&&c[b][g])&&h.points[a.index+","+f],g=e)h=h.total?100/h.total:0,g[0]=ea(g[0]*h),g[1]=ea(g[1]*h),a.stackedYData[f]=g[1]})};r(Ya.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=p(b,!0),I(e,"addSeries",{options:a},function(){d=e.initSeries(a);
e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;new na(this,w(a,{index:this[e].length,isX:b}));f[e]=ra(f[e]||{});f[e].push(a);p(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&B(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=d=$(Ka,{className:"highcharts-loading"},r(e.style,{zIndex:10,display:P}),
b.container),b.loadingSpan=$("span",null,e.labelStyle,d),N(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)B(d,{opacity:0,display:""}),jb(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&jb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){B(b,{display:P})}});this.loadingShown=!1}});r(Fa.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);if(da(a)&&
!Ha(a))f.redraw=function(){if(h)a&&a.marker&&a.marker.symbol?f.graphic=h.destroy():h.attr(f.pointAttr[f.state||""]);if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);k.data[i]=f.options;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)j.isDirtyBox=!0;k.legendType==="point"&&j.legend.destroyItem(f);b&&j.redraw(c)}var f=this,g=f.series,h=f.graphic,i,j=g.chart,k=g.options,b=p(b,!0);d===!1?e():f.firePointEvent("update",
{options:a},e)},remove:function(a,b){var c=this,d=c.series,e=d.points,f=d.chart,g,h=d.data;Ra(b,f);a=p(a,!0);c.firePointEvent("remove",null,function(){g=Ma(c,h);h.length===e.length&&e.splice(g,1);h.splice(g,1);d.options.data.splice(g,1);d.updateParallelArrays(c,"splice",g,1);c.destroy();d.isDirty=!0;d.isDirtyData=!0;a&&f.redraw()})}});r(O.prototype,{addPoint:function(a,b,c,d){var e=this.options,f=this.data,g=this.graph,h=this.area,i=this.chart,j=this.xAxis&&this.xAxis.names,k=g&&g.shift||0,l=e.data,
n,m=this.xData;Ra(d,i);c&&q([g,h,this.graphNeg,this.areaNeg],function(a){if(a)a.shift=k+1});if(h)h.isArea=!0;b=p(b,!0);d={series:this};this.pointClass.prototype.applyOptions.apply(d,[a]);g=d.x;h=m.length;if(this.requireSorting&&g<m[h-1])for(n=!0;h&&m[h-1]>g;)h--;this.updateParallelArrays(d,"splice",h,0,0);this.updateParallelArrays(d,h);if(j&&d.name)j[g]=d.name;l.splice(h,0,a);n&&(this.data.splice(h,0,null),this.processData());e.legendType==="point"&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):
(f.shift(),this.updateParallelArrays(d,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;b&&(this.getAttribs(),i.redraw())},remove:function(a,b){var c=this,d=c.chart,a=p(a,!0);if(!c.isRemoving)c.isRemoving=!0,I(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();a&&d.redraw(b)});c.isRemoving=!1},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=H[f].prototype,h=["group","markerGroup","dataLabelsGroup"],i;q(h,function(a){h[a]=c[a];delete c[a]});
a=w(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)g.hasOwnProperty(i)&&(this[i]=u);r(this,H[a.type||f].prototype);q(h,function(a){c[a]=h[a]});this.init(d,a);d.linkSeries();p(b,!0)&&d.redraw(!1)}});r(na.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=w(this.userOptions,a);this.destroy(!0);this._addedPlotLB=u;this.init(c,r(a,{events:u}));c.isDirtyBox=!0;p(b,!0)&&c.redraw()},remove:function(a){for(var b=
this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);la(b.axes,this);la(b[c],this);b.options[c].splice(this.options.index,1);q(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;p(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});ia=ma(O);H.line=ia;ca.area=w(T,{threshold:0});var qa=ma(O,{type:"area",getSegments:function(){var a=this,b=[],c=[],d=[],e=this.xAxis,f=this.yAxis,g=f.stacks[this.stackKey],
h={},i,j,k=this.points,l=this.options.connectNulls,n,m;if(this.options.stacking&&!this.cropped){for(n=0;n<k.length;n++)h[k[n].x]=k[n];for(m in g)g[m].total!==null&&d.push(+m);d.sort(function(a,b){return a-b});q(d,function(b){var d=0,k;if(!l||h[b]&&h[b].y!==null)if(h[b])c.push(h[b]);else{for(n=a.index;n<=f.series.length;n++)if(k=g[b].points[n+","+b]){d=k[1];break}i=e.translate(b);j=f.toPixels(d,!0);c.push({y:null,plotX:i,clientX:i,plotY:j,yBottom:j,onMouseOver:sa})}});c.length&&b.push(c)}else O.prototype.getSegments.call(this),
b=this.segments;this.segments=b},getSegmentPath:function(a){var b=O.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;d=b.length;var f=this.yAxis.getThreshold(e.threshold),g;d===3&&c.push("L",b[1],b[2]);if(e.stacking&&!this.closedStacks)for(d=a.length-1;d>=0;d--)g=p(a[d].yBottom,f),d<a.length-1&&e.step&&c.push(a[d+1].plotX,g),c.push(a[d].plotX,g);else this.closeSegment(c,a,f);this.areaPath=this.areaPath.concat(c);return b},closeSegment:function(a,b,c){a.push("L",b[b.length-1].plotX,
c,"L",b[0].plotX,c)},drawGraph:function(){this.areaPath=[];O.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=c.negativeColor,e=c.negativeFillColor,f=[["area",this.color,c.fillColor]];(d||e)&&f.push(["areaNeg",d,e]);q(f,function(d){var e=d[0],f=a[e];f?f.animate({d:b}):a[e]=a.chart.renderer.path(b).attr({fill:p(d[2],ya(d[1]).setOpacity(p(c.fillOpacity,0.75)).get()),zIndex:0}).add(a.group)})},drawLegendSymbol:M.drawRectangle});H.area=qa;ca.spline=w(T);ia=ma(O,{type:"spline",
getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,k;if(f&&g){a=f.plotY;j=g.plotX;var g=g.plotY,l;h=(1.5*d+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*d+j)/2.5;k=(1.5*e+g)/2.5;l=(k-i)*(j-d)/(j-h)+e-k;i+=l;k+=l;i>a&&i>e?(i=t(a,e),k=2*e-i):i<a&&i<e&&(i=L(a,e),k=2*e-i);k>g&&k>e?(k=t(g,e),i=2*e-k):k<g&&k<e&&(k=L(g,e),i=2*e-k);b.rightContX=j;b.rightContY=k}c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e],f.rightContX=f.rightContY=null):b=["M",d,e];return b}});H.spline=
ia;ca.areaspline=w(ca.area);qa=qa.prototype;ia=ma(ia,{type:"areaspline",closedStacks:!0,getSegmentPath:qa.getSegmentPath,closeSegment:qa.closeSegment,drawGraph:qa.drawGraph,drawLegendSymbol:M.drawRectangle});H.areaspline=ia;ca.column=w(T,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,
verticalAlign:null,y:null},stickyTracking:!1,tooltip:{distance:6},threshold:0});ia=ma(O,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){O.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&q(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h,i=0;b.grouping===
!1?i=1:q(a.chart.series,function(b){var c=b.options,e=b.yAxis;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===u&&(g[f]=i++),h=g[f]):c.grouping!==!1&&(h=i++),b.columnIndex=h});var c=L(Q(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),j=c*b.groupPadding,k=(c-2*j)/i,l=b.pointWidth,b=s(l)?(k-l)/2:k*b.pointPadding,l=p(l,k-2*b);return a.columnMetrics={width:l,offset:b+(j+((e?i-(a.columnIndex||0):a.columnIndex)||0)*k-c/2)*
(e?-1:1)}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=p(c.borderWidth,a.activePointCount>0.5*a.xAxis.len?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),g=p(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,j=a.barW=t(i,1+2*d),k=a.pointXOffset=h.offset,l=-(d%2?0.5:0),n=d%2?0.5:1;b.renderer.isVML&&b.inverted&&(n+=1);c.pointPadding&&(j=La(j));O.prototype.translate.apply(a);q(a.points,function(c){var d=p(c.yBottom,f),h=L(t(-999-d,c.plotY),e.len+999+d),
q=c.plotX+k,r=j,s=L(h,d),u;u=t(h,d)-s;Q(u)<g&&g&&(u=g,s=v(Q(s-f)>g?d-g:f-(e.translate(c.y,0,1,0,1)<=f?g:0)));c.barX=q;c.pointWidth=i;c.tooltipPos=b.inverted?[e.len-h,a.xAxis.len-q-r/2]:[q+r/2,h+e.pos-b.plotTop];r=v(q+r)+l;q=v(q)+l;r-=q;d=Q(s)<0.5;u=v(s+u)+n;s=v(s)+n;u-=s;d&&(s-=1,u+=1);c.shapeType="rect";c.shapeArgs={x:q,y:s,width:r,height:u}})},getSymbol:sa,drawLegendSymbol:M.drawRectangle,drawGraph:sa,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,
f,g;q(a.points,function(h){var i=h.plotY,j=h.graphic;if(i!==u&&!isNaN(i)&&h.y!==null)f=h.shapeArgs,i=s(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],j?(bb(j),j.attr(i)[b.pointCount<e?"animate":"attr"](w(f))):h.graphic=d[h.shapeType](f).attr(g).attr(i).add(a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(j)h.graphic=j.destroy()})},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};if(ba)a?(e.scaleY=
0.001,a=L(b.pos+b.len,t(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=b.pos,this.group.animate(e,this.options.animation),this.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&q(b.series,function(b){if(b.type===a.type)b.isDirty=!0});O.prototype.remove.apply(a,arguments)}});H.column=ia;ca.bar=w(ca.column);qa=ma(ia,{type:"bar",inverted:!0});H.bar=qa;ca.scatter=w(T,{lineWidth:0,tooltip:{headerFormat:'<span style="color:{series.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"},stickyTracking:!1});qa=ma(O,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,singularTooltips:!0,drawGraph:function(){this.options.lineWidth&&O.prototype.drawGraph.call(this)}});H.scatter=qa;ca.pie=w(T,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name}},
ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});T={type:"pie",isCartesian:!1,pointClass:ma(Fa,{init:function(){Fa.prototype.init.apply(this,arguments);var a=this,b;if(a.y<0)a.y=null;r(a,{visible:a.visible!==!1,name:p(a.name,"Slice")});b=function(b){a.slice(b.type==="select")};N(a,"select",b);N(a,"unselect",b);return a},setVisible:function(a){var b=this,c=b.series,
d=c.chart;b.visible=b.options.visible=a=a===u?!b.visible:a;c.options.data[Ma(b,c.data)]=b.options;q(["graphic","dataLabel","connector","shadowGroup"],function(c){if(b[c])b[c][a?"show":"hide"](!0)});b.legendItem&&d.legend.colorizeItem(b,a);if(!c.isDirty&&c.options.ignoreHiddenPoint)c.isDirty=!0,d.redraw()},slice:function(a,b,c){var d=this.series;Ra(c,d.chart);p(b,!0);this.sliced=this.options.sliced=a=s(a)?a:!this.sliced;d.options.data[Ma(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,
translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},singularTooltips:!0,
getColor:sa,animate:function(a){var b=this,c=b.points,d=b.startAngleRad;if(!a)q(c,function(a){var c=a.graphic,a=a.shapeArgs;c&&(c.attr({r:b.center[3]/2,start:d,end:d}),c.animate({r:a.r,start:a.start,end:a.end},b.options.animation))}),b.animate=null},setData:function(a,b,c,d){O.prototype.setData.call(this,a,!1,c,d);this.processData();this.generatePoints();p(b,!0)&&this.chart.redraw(c)},generatePoints:function(){var a,b=0,c,d,e,f=this.options.ignoreHiddenPoint;O.prototype.generatePoints.call(this);
c=this.points;d=c.length;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0?e.y/b*100:0,e.total=b},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=oa/180*(i-90),i=(this.endAngleRad=oa/180*(p(c.endAngle,i+360)-90))-j,k=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,n,m=k.length,o;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=
V.asin(L((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*aa(h)*(a[2]/2+l)};for(n=0;n<m;n++){o=k[n];f=j+b*i;if(!c||o.visible)b+=o.percentage/100;g=j+b*i;o.shapeType="arc";o.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:v(f*1E3)/1E3,end:v(g*1E3)/1E3};h=(g+f)/2;h>1.5*oa?h-=2*oa:h<-oa/2&&(h+=2*oa);o.slicedTranslation={translateX:v(aa(h)*d),translateY:v(fa(h)*d)};f=aa(h)*a[2]/2;g=fa(h)*a[2]/2;o.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];o.half=h<-oa/2||h>oa/2?1:0;o.angle=h;e=L(e,l/2);o.labelPos=[a[0]+f+aa(h)*
l,a[1]+g+fa(h)*l,a[0]+f+aa(h)*e,a[1]+g+fa(h)*e,a[0]+f,a[1]+g,l<0?"center":o.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);q(a.points,function(h){d=h.graphic;g=h.shapeArgs;f=h.shadowGroup;if(e&&!f)f=h.shadowGroup=b.g("shadow").add(a.shadowGroup);c=h.sliced?h.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);d?d.animate(r(g,c)):h.graphic=d=b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected?
"select":""]).attr({"stroke-linejoin":"round"}).attr(c).add(a.group).shadow(e,f);h.visible!==void 0&&h.setVisible(h.visible)})},sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:M.drawRectangle,getCenter:Z.getCenter,getSymbol:sa};T=ma(O,T);H.pie=T;O.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,j;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),
j=a.plotGroup("dataLabelsGroup","data-labels",d.defer?"hidden":"visible",d.zIndex||6),p(d.defer,!0)&&(j.attr({opacity:+h}),h||N(a,"afterAnimate",function(){a.visible&&j.show();j[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,q(e,function(b){var e,h=b.dataLabel,m,o,q=b.connector,t=!0;f=b.options&&b.options.dataLabels;e=p(f&&f.enabled,g.enabled);if(h&&!e)b.dataLabel=h.destroy();else if(e){d=w(g,f);e=d.rotation;m=b.getLabelConfig();i=d.format?Ja(d.format,m):d.formatter.call(m,d);d.style.color=
p(d.color,d.style.color,a.color,"black");if(h)if(s(i))h.attr({text:i}),t=!1;else{if(b.dataLabel=h=h.destroy(),q)b.connector=q.destroy()}else if(s(i)){h={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:e,padding:d.padding,zIndex:1};for(o in h)h[o]===u&&delete h[o];h=b.dataLabel=a.chart.renderer[e?"text":"label"](i,0,-999,null,null,null,d.useHTML).attr(h).css(r(d.style,c&&{cursor:c})).add(j).shadow(d.shadow)}h&&a.alignDataLabel(b,h,d,null,t)}})};
O.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=p(a.plotX,-999),i=p(a.plotY,-999),j=b.getBBox();if(a=this.visible&&(a.series.forceDL||f.isInsidePlot(h,v(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)))d=r({x:g?f.plotWidth-i:h,y:v(g?f.plotHeight-h:i),width:0,height:0},d),r(c,{width:j.width,height:j.height}),c.rotation?b[e?"attr":"animate"]({x:d.x+c.x+d.width/2,y:d.y+c.y+d.height/2}).attr({align:c.align}):(b.align(c,null,d),g=b.alignAttr,p(c.overflow,"justify")===
"justify"?this.justifyDataLabel(b,c,g,j,d,e):p(c.crop,!0)&&(a=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)));if(!a)b.attr({y:-999}),b.placed=!1};O.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,k;j=c.x;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height;if(j>g.plotHeight)i==="top"?
b.verticalAlign="bottom":b.y=g.plotHeight-j,k=!0;if(k)a.placed=!f,a.align(b,null,e)};if(H.pie)H.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=p(e.connectorPadding,10),g=p(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,j,k,l=p(e.softConnector,!0),n=e.distance,m=a.center,o=m[2]/2,r=m[1],s=n>0,u,w,x,A=[[],[]],y,B,I,H,z,R=[0,0,0,0],N=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){O.prototype.drawDataLabels.apply(a);q(b,
function(a){a.dataLabel&&a.visible&&A[a.half].push(a)});for(H=2;H--;){var G=[],M=[],F=A[H],K=F.length,E;if(K){a.sortByAngle(F,H-0.5);for(z=b=0;!b&&F[z];)b=F[z]&&F[z].dataLabel&&(F[z].dataLabel.getBBox().height||21),z++;if(n>0){w=L(r+o+n,d.plotHeight);for(z=t(0,r-o-n);z<=w;z+=b)G.push(z);w=G.length;if(K>w){c=[].concat(F);c.sort(N);for(z=K;z--;)c[z].rank=z;for(z=K;z--;)F[z].rank>=w&&F.splice(z,1);K=F.length}for(z=0;z<K;z++){c=F[z];x=c.labelPos;c=9999;var S,P;for(P=0;P<w;P++)S=Q(G[P]-x[1]),S<c&&(c=S,
E=P);if(E<z&&G[z]!==null)E=z;else for(w<K-z+E&&G[z]!==null&&(E=w-K+z);G[E]===null;)E++;M.push({i:E,y:G[E]});G[E]=null}M.sort(N)}for(z=0;z<K;z++){c=F[z];x=c.labelPos;u=c.dataLabel;I=c.visible===!1?"hidden":"visible";c=x[1];if(n>0){if(w=M.pop(),E=w.i,B=w.y,c>B&&G[E+1]!==null||c<B&&G[E-1]!==null)B=L(t(0,c),d.plotHeight)}else B=c;y=e.justify?m[0]+(H?-1:1)*(o+n):a.getX(B===r-o-n||B===r+o+n?c:B,H);u._attr={visibility:I,align:x[6]};u._pos={x:y+e.x+({left:f,right:-f}[x[6]]||0),y:B+e.y-10};u.connX=y;u.connY=
B;if(this.options.size===null)w=u.width,y-w<f?R[3]=t(v(w-y+f),R[3]):y+w>h-f&&(R[1]=t(v(y+w-h+f),R[1])),B-b/2<0?R[0]=t(v(-B+b/2),R[0]):B+b/2>i&&(R[2]=t(v(B+b/2-i),R[2]))}}}if(Ca(R)===0||this.verifyDataLabelOverflow(R))this.placeDataLabels(),s&&g&&q(this.points,function(b){j=b.connector;x=b.labelPos;if((u=b.dataLabel)&&u._pos)I=u._attr.visibility,y=u.connX,B=u.connY,k=l?["M",y+(x[6]==="left"?5:-5),B,"C",y,B,2*x[2]-x[4],2*x[3]-x[5],x[2],x[3],"L",x[4],x[5]]:["M",y+(x[6]==="left"?5:-5),B,"L",x[2],x[3],
"L",x[4],x[5]],j?(j.animate({d:k}),j.attr("visibility",I)):b.connector=j=a.chart.renderer.path(k).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:I}).add(a.dataLabelsGroup);else if(j)b.connector=j.destroy()})}},H.pie.prototype.placeDataLabels=function(){q(this.points,function(a){var a=a.dataLabel,b;if(a)(b=a._pos)?(a.attr(a._attr),a[a.moved?"animate":"attr"](b),a.moved=!0):a&&a.attr({y:-999})})},H.pie.prototype.alignDataLabel=sa,H.pie.prototype.verifyDataLabelOverflow=
function(a){var b=this.center,c=this.options,d=c.center,e=c=c.minSize||80,f;d[0]!==null?e=t(b[2]-t(a[1],a[3]),c):(e=t(b[2]-a[1]-a[3],c),b[0]+=(a[3]-a[1])/2);d[1]!==null?e=t(L(e,b[2]-t(a[0],a[2])),c):(e=t(L(e,b[2]-a[0]-a[2]),c),b[1]+=(a[0]-a[2])/2);e<b[2]?(b[2]=e,this.translate(b),q(this.points,function(a){if(a.dataLabel)a.dataLabel._pos=null}),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f};if(H.column)H.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,
h=a.dlBox||a.shapeArgs,i=a.below||a.plotY>p(this.translatedThreshold,f.plotSizeY),j=p(c.inside,!!this.options.stacking);if(h&&(d=w(h),g&&(d={x:f.plotWidth-d.y-d.height,y:f.plotHeight-d.x-d.width,width:d.height,height:d.width}),!j))g?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0);c.align=p(c.align,!g||j?"center":i?"right":"left");c.verticalAlign=p(c.verticalAlign,g||j?"middle":i?"top":"bottom");O.prototype.alignDataLabel.call(this,a,b,c,d,e)};T=K.TrackerMixin={drawTrackerPoint:function(){var a=
this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(c){var d=c.target,e;if(b.hoverSeries!==a)a.onMouseOver();for(;d&&!e;)e=d.point,d=d.parentNode;if(e!==u&&e!==b.hoverPoint)e.onMouseOver(c)};q(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)q(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),$a))a[b].on("touchstart",
f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,l=k&&{cursor:k},k=a.singlePoints,n,m=function(){if(f.hoverSeries!==a)a.onMouseOver()},o="rgba(192,192,192,"+(ba?1.0E-4:0.002)+")";if(e&&!c)for(n=e+1;n--;)d[n]==="M"&&d.splice(n+1,0,d[n+1]-i,d[n+2],"L"),(n&&d[n]==="M"||n===e)&&d.splice(n,0,"L",d[n-2]+i,d[n-1]);for(n=0;n<k.length;n++)e=
k[n],d.push("M",e.plotX-i,e.plotY,"L",e.plotX+i,e.plotY);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:o,fill:c?o:P,"stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),q([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);if($a)a.on("touchstart",m)}))}};if(H.column)ia.prototype.drawTracker=T.drawTrackerPoint;if(H.pie)H.pie.prototype.drawTracker=
T.drawTrackerPoint;if(H.scatter)qa.prototype.drawTracker=T.drawTrackerPoint;r(lb.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):I(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=
$("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);N(a.checkbox,"click",function(b){I(a,"checkboxClick",{checked:b.target.checked},function(){a.select()})})}});E.legend.itemStyle.cursor="pointer";r(Ya.prototype,{showResetZoom:function(){var a=this,b=E.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},
d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;I(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?q(this.axes,function(a){b=a.zoom()}):q(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&
da(e))this.resetZoomButton=e.destroy();b&&this.redraw(p(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&q(d,function(a){a.setState()});q(b==="xy"?[1,0]:[1],function(b){var d=a[b?"chartX":"chartY"],h=c[b?"xAxis":"yAxis"][0],i=c[b?"mouseDownX":"mouseDownY"],j=(h.pointRange||0)/2,k=h.getExtremes(),l=h.toValue(i-d,!0)+j,i=h.toValue(i+c[b?"plotWidth":"plotHeight"]-d,!0)-j;h.series.length&&l>L(k.dataMin,k.min)&&i<t(k.dataMax,k.max)&&(h.setExtremes(l,
i,!1,!1,{trigger:"pan"}),e=!0);c[b?"mouseDownX":"mouseDownY"]=d});e&&c.redraw(!1);B(c.container,{cursor:"move"})}});r(Fa.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=p(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[Ma(c,d.data)]=c.options;c.setState(a&&"select");b||q(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[Ma(a,d.data)]=a.options,a.setState(""),
a.firePointEvent("unselect")})})},onMouseOver:function(a){var b=this.series,c=b.chart,d=c.tooltip,e=c.hoverPoint;if(e&&e!==this)e.onMouseOut();this.firePointEvent("mouseOver");d&&(!d.shared||b.noSharedTooltip)&&d.refresh(this,a);this.setState("hover");c.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");if(!b||Ma(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=w(this.series.options.point,
this.options).events,b;this.events=a;for(b in a)N(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=this.plotX,d=this.plotY,e=this.series,f=e.options.states,g=ca[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,l=this.marker||{},n=e.chart,m=e.halo,o,a=a||"";o=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&
l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&o.r,this.graphic.attr(w(o,g?{x:c-g,y:d-g,width:2*g,height:2*g}:{})),k&&k.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,k&&k.currentSymbol!==l&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=k=n.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(o).add(e.markerGroup),k.currentSymbol=l;if(k)k[a&&n.isInsidePlot(c,d,n.inverted)?"show":"hide"]()}if((c=f[a]&&f[a].halo)&&c.size){if(!m)e.halo=m=n.renderer.path().add(e.seriesGroup);
m.attr(r({fill:ya(this.color||e.color).setOpacity(c.opacity).get()},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else m&&m.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted;return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:this.plotX)-a,d.translateY+(e?b.xAxis.len-this.plotX:this.plotY)-a,a*2,a*2)}});r(O.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&
I(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;if(d)d.onMouseOut();this&&a.events.mouseOut&&I(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState();b.hoverSeries=null},setState:function(a){var b=this.options,c=this.graph,d=this.graphNeg,e=b.states,b=b.lineWidth,a=a||"";if(this.state!==a)this.state=a,e[a]&&e[a].enabled===!1||(a&&(b=e[a].lineWidth||b+(e[a].lineWidthPlus||
0)),c&&!c.dashstyle&&(a={"stroke-width":b},c.attr(a),d&&d.attr(a)))},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===u?!h:a)?"show":"hide";q(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&q(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});q(c.linkedSeries,
function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();I(c,f)},setTooltipPoints:function(a){var b=[],c,d,e=this.xAxis,f=e&&e.getExtremes(),g=e?e.tooltipLen||e.len:this.chart.plotSizeX,h,i,j=[];if(!(this.options.enableMouseTracking===!1||this.singularTooltips)){if(a)this.tooltipPoints=null;q(this.segments||this.points,function(a){b=b.concat(a)});e&&e.reversed&&(b=b.reverse());this.orderTooltipPoints&&this.orderTooltipPoints(b);a=b.length;for(i=0;i<a;i++)if(e=b[i],c=e.x,c>=f.min&&
c<=f.max){h=b[i+1];c=d===u?0:d+1;for(d=b[i+1]?L(t(0,U((e.clientX+(h?h.wrappedClientX||h.clientX:g))/2)),g):g;c>=0&&c<=d;)j[c++]=e}this.tooltipPoints=j}},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===u?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;I(this,a?"select":"unselect")},drawTracker:T.drawTrackerGraph});r(K,{Axis:na,Chart:Ya,Color:ya,Point:Fa,Tick:Ta,Renderer:Za,Series:O,SVGElement:S,SVGRenderer:ta,arrayMin:Oa,arrayMax:Ca,
charts:W,dateFormat:cb,format:Ja,pathAnim:vb,getOptions:function(){return E},hasBidiBug:Ob,isTouchDevice:Ib,numberFormat:Ba,seriesTypes:H,setOptions:function(a){E=w(!0,E,a);Bb();return E},addEvent:N,removeEvent:X,createElement:$,discardElement:Qa,css:B,each:q,extend:r,map:Va,merge:w,pick:p,splat:ra,extendClass:ma,pInt:y,wrap:Na,svg:ba,canvas:ga,vml:!ba&&!ga,product:"Highcharts",version:"4.0.4"})})();
;
/*
 Highcharts JS v4.0.4 (2014-09-02)

 (c) 2009-2013 Torstein Hønsi

 License: www.highcharts.com/license
*/
(function(d){function x(f,a,b,c){var e,g,j;b*=t;a*=t;var i=[],h,k,o;b*=-1;h=c.x;k=c.y;o=(c.z===0?1.0E-4:c.z)*(c.vd||25);o=Math.max(500,o);var q=l(b),n=m(b),r=l(a),s=m(a),p,v,u;d.each(f,function(a){p=a.x-h;v=a.y-k;u=a.z||0;e=n*p-q*u;g=-q*r*p-n*r*u+s*v;j=q*s*p+n*s*u+r*v;e=e*((o-j)/o)+h;g=g*((o-j)/o)+k;i.push({x:z(e),y:z(g),z:z(j)})});return i}function A(f){return f!==void 0&&f!==null}function w(f,a,b,c,e,g,d,i){var h=[];return g>e&&g-e>n/2+1.0E-4?(h=h.concat(w(f,a,b,c,e,e+n/2,d,i)),h=h.concat(w(f,a,
b,c,e+n/2,g,d,i))):g<e&&e-g>n/2+1.0E-4?(h=h.concat(w(f,a,b,c,e,e-n/2,d,i)),h=h.concat(w(f,a,b,c,e-n/2,g,d,i))):(h=g-e,["C",f+b*m(e)-b*B*h*l(e)+d,a+c*l(e)+c*B*h*m(e)+i,f+b*m(g)+b*B*h*l(g)+d,a+c*l(g)-c*B*h*m(g)+i,f+b*m(g)+d,a+c*l(g)+i])}function D(f){if(this.chart.is3d()){var a=this.chart.options.plotOptions.column.grouping;a!==void 0&&!a&&this.group.zIndex!==void 0&&this.group.attr({zIndex:this.group.zIndex*10});var b=this.options,c=this.options.states;this.borderWidth=b.borderWidth=b.edgeWidth||1;
d.each(this.data,function(a){if(a.y!==null)a=a.pointAttr,this.borderColor=d.pick(b.edgeColor,a[""].fill),a[""].stroke=this.borderColor,a.hover.stroke=d.pick(c.hover.edgeColor,this.borderColor),a.select.stroke=d.pick(c.select.edgeColor,this.borderColor)})}f.apply(this,[].slice.call(arguments,1))}var n=Math.PI,t=n/180,l=Math.sin,m=Math.cos,z=Math.round,B=4*(Math.sqrt(2)-1)/3/(n/2);d.SVGRenderer.prototype.toLinePath=function(f,a){var b=[];d.each(f,function(a){b.push("L",a.x,a.y)});b[0]="M";a&&b.push("Z");
return b};d.SVGRenderer.prototype.cuboid=function(f){var a=this.g(),f=this.cuboidPath(f);a.front=this.path(f[0]).attr({zIndex:f[3],"stroke-linejoin":"round"}).add(a);a.top=this.path(f[1]).attr({zIndex:f[4],"stroke-linejoin":"round"}).add(a);a.side=this.path(f[2]).attr({zIndex:f[5],"stroke-linejoin":"round"}).add(a);a.fillSetter=function(a){var c=d.Color(a).brighten(0.1).get(),e=d.Color(a).brighten(-0.1).get();this.front.attr({fill:a});this.top.attr({fill:c});this.side.attr({fill:e});this.color=a;
return this};a.opacitySetter=function(a){this.front.attr({opacity:a});this.top.attr({opacity:a});this.side.attr({opacity:a});return this};a.attr=function(a){a.shapeArgs||A(a.x)?(a=this.renderer.cuboidPath(a.shapeArgs||a),this.front.attr({d:a[0],zIndex:a[3]}),this.top.attr({d:a[1],zIndex:a[4]}),this.side.attr({d:a[2],zIndex:a[5]})):d.SVGElement.prototype.attr.call(this,a);return this};a.animate=function(a,c,e){A(a.x)&&A(a.y)?(a=this.renderer.cuboidPath(a),this.front.attr({zIndex:a[3]}).animate({d:a[0]},
c,e),this.top.attr({zIndex:a[4]}).animate({d:a[1]},c,e),this.side.attr({zIndex:a[5]}).animate({d:a[2]},c,e)):a.opacity?(this.front.animate(a,c,e),this.top.animate(a,c,e),this.side.animate(a,c,e)):d.SVGElement.prototype.animate.call(this,a,c,e);return this};a.destroy=function(){this.front.destroy();this.top.destroy();this.side.destroy();return null};a.attr({zIndex:-f[3]});return a};d.SVGRenderer.prototype.cuboidPath=function(d){var a=d.x,b=d.y,c=d.z,e=d.height,g=d.width,j=d.depth,i=d.alpha,h=d.beta,
a=[{x:a,y:b,z:c},{x:a+g,y:b,z:c},{x:a+g,y:b+e,z:c},{x:a,y:b+e,z:c},{x:a,y:b+e,z:c+j},{x:a+g,y:b+e,z:c+j},{x:a+g,y:b,z:c+j},{x:a,y:b,z:c+j}],a=x(a,i,h,d.origin),d=["M",a[0].x,a[0].y,"L",a[7].x,a[7].y,"L",a[6].x,a[6].y,"L",a[1].x,a[1].y,"Z"],b=["M",a[3].x,a[3].y,"L",a[2].x,a[2].y,"L",a[5].x,a[5].y,"L",a[4].x,a[4].y,"Z"],c=["M",a[1].x,a[1].y,"L",a[2].x,a[2].y,"L",a[5].x,a[5].y,"L",a[6].x,a[6].y,"Z"],e=["M",a[0].x,a[0].y,"L",a[7].x,a[7].y,"L",a[4].x,a[4].y,"L",a[3].x,a[3].y,"Z"];return[["M",a[0].x,a[0].y,
"L",a[1].x,a[1].y,"L",a[2].x,a[2].y,"L",a[3].x,a[3].y,"Z"],a[7].y<a[1].y?d:a[4].y>a[2].y?b:[],a[6].x>a[1].x?c:a[7].x<a[0].x?e:[],(a[0].z+a[1].z+a[2].z+a[3].z)/4,h>0?(a[0].z+a[7].z+a[6].z+a[1].z)/4:(a[3].z+a[2].z+a[5].z+a[4].z)/4,i>0?(a[1].z+a[2].z+a[5].z+a[6].z)/4:(a[0].z+a[7].z+a[4].z+a[3].z)/4]};d.SVGRenderer.prototype.arc3d=function(f){f.alpha*=t;f.beta*=t;var a=this.g(),b=this.arc3dPath(f),c=a.renderer,e=b.zTop*100;a.shapeArgs=f;a.top=c.path(b.top).attr({zIndex:b.zTop}).add(a);a.side1=c.path(b.side2).attr({zIndex:b.zSide2});
a.side2=c.path(b.side1).attr({zIndex:b.zSide1});a.inn=c.path(b.inn).attr({zIndex:b.zInn});a.out=c.path(b.out).attr({zIndex:b.zOut});a.fillSetter=function(a){this.color=a;var b=d.Color(a).brighten(-0.1).get();this.side1.attr({fill:b});this.side2.attr({fill:b});this.inn.attr({fill:b});this.out.attr({fill:b});this.top.attr({fill:a});return this};a.translateXSetter=function(a){this.out.attr({translateX:a});this.inn.attr({translateX:a});this.side1.attr({translateX:a});this.side2.attr({translateX:a});this.top.attr({translateX:a})};
a.translateYSetter=function(a){this.out.attr({translateY:a});this.inn.attr({translateY:a});this.side1.attr({translateY:a});this.side2.attr({translateY:a});this.top.attr({translateY:a})};a.animate=function(a,b,c){A(a.end)||A(a.start)?(this._shapeArgs=this.shapeArgs,d.SVGElement.prototype.animate.call(this,{_args:a},{duration:b,step:function(){var a=arguments[1],b=a.elem,c=b._shapeArgs,e=a.end,a=a.pos,c=d.merge(c,{x:c.x+(e.x-c.x)*a,y:c.y+(e.y-c.y)*a,r:c.r+(e.r-c.r)*a,innerR:c.innerR+(e.innerR-c.innerR)*
a,start:c.start+(e.start-c.start)*a,end:c.end+(e.end-c.end)*a}),e=b.renderer.arc3dPath(c);b.shapeArgs=c;b.top.attr({d:e.top,zIndex:e.zTop});b.inn.attr({d:e.inn,zIndex:e.zInn});b.out.attr({d:e.out,zIndex:e.zOut});b.side1.attr({d:e.side1,zIndex:e.zSide1});b.side2.attr({d:e.side2,zIndex:e.zSide2})}},c)):d.SVGElement.prototype.animate.call(this,a,b,c);return this};a.destroy=function(){this.top.destroy();this.out.destroy();this.inn.destroy();this.side1.destroy();this.side2.destroy();d.SVGElement.prototype.destroy.call(this)};
a.hide=function(){this.top.hide();this.out.hide();this.inn.hide();this.side1.hide();this.side2.hide()};a.show=function(){this.top.show();this.out.show();this.inn.show();this.side1.show();this.side2.show()};a.zIndex=e;a.attr({zIndex:e});return a};d.SVGRenderer.prototype.arc3dPath=function(d){var a=d.x,b=d.y,c=d.start,e=d.end-1.0E-5,g=d.r,j=d.innerR,i=d.depth,h=d.alpha,k=d.beta,o=m(c),q=l(c),d=m(e),y=l(e),r=g*m(k),s=g*m(h),p=j*m(k);j*=m(h);var v=i*l(k),u=i*l(h),i=["M",a+r*o,b+s*q],i=i.concat(w(a,b,
r,s,c,e,0,0)),i=i.concat(["L",a+p*d,b+j*y]),i=i.concat(w(a,b,p,j,e,c,0,0)),i=i.concat(["Z"]),k=k>0?n/2:0,h=h>0?0:n/2,k=c>-k?c:e>-k?-k:c,t=e<n-h?e:c<n-h?n-h:e,h=["M",a+r*m(k),b+s*l(k)],h=h.concat(w(a,b,r,s,k,t,0,0)),h=h.concat(["L",a+r*m(t)+v,b+s*l(t)+u]),h=h.concat(w(a,b,r,s,t,k,v,u)),h=h.concat(["Z"]),k=["M",a+p*o,b+j*q],k=k.concat(w(a,b,p,j,c,e,0,0)),k=k.concat(["L",a+p*m(e)+v,b+j*l(e)+u]),k=k.concat(w(a,b,p,j,e,c,v,u)),k=k.concat(["Z"]),o=["M",a+r*o,b+s*q,"L",a+r*o+v,b+s*q+u,"L",a+p*o+v,b+j*q+
u,"L",a+p*o,b+j*q,"Z"],a=["M",a+r*d,b+s*y,"L",a+r*d+v,b+s*y+u,"L",a+p*d+v,b+j*y+u,"L",a+p*d,b+j*y,"Z"],b=l((c+e)/2),c=l(c),e=l(e);return{top:i,zTop:g,out:h,zOut:Math.max(b,c,e)*g,inn:k,zInn:Math.max(b,c,e)*g,side1:o,zSide1:c*g*0.99,side2:a,zSide2:e*g*0.99}};d.Chart.prototype.is3d=function(){return this.options.chart.options3d&&this.options.chart.options3d.enabled};d.wrap(d.Chart.prototype,"isInsidePlot",function(d){return this.is3d()?!0:d.apply(this,[].slice.call(arguments,1))});d.getOptions().chart.options3d=
{enabled:!1,alpha:0,beta:0,depth:100,viewDistance:25,frame:{bottom:{size:1,color:"rgba(255,255,255,0)"},side:{size:1,color:"rgba(255,255,255,0)"},back:{size:1,color:"rgba(255,255,255,0)"}}};d.wrap(d.Chart.prototype,"init",function(f){var a=[].slice.call(arguments,1),b;if(a[0].chart.options3d&&a[0].chart.options3d.enabled)b=a[0].plotOptions||{},b=b.pie||{},b.borderColor=d.pick(b.borderColor,void 0);f.apply(this,a)});d.wrap(d.Chart.prototype,"setChartSize",function(d){d.apply(this,[].slice.call(arguments,
1));if(this.is3d()){var a=this.inverted,b=this.clipBox,c=this.margin;b[a?"y":"x"]=-(c[3]||0);b[a?"x":"y"]=-(c[0]||0);b[a?"height":"width"]=this.chartWidth+(c[3]||0)+(c[1]||0);b[a?"width":"height"]=this.chartHeight+(c[0]||0)+(c[2]||0)}});d.wrap(d.Chart.prototype,"redraw",function(d){if(this.is3d())this.isDirtyBox=!0;d.apply(this,[].slice.call(arguments,1))});d.Chart.prototype.retrieveStacks=function(f,a){var b={},c=1;if(f||!a)return this.series;d.each(this.series,function(a){b[a.options.stack||0]?
b[a.options.stack||0].series.push(a):(b[a.options.stack||0]={series:[a],position:c},c++)});b.totalStacks=c+1;return b};d.wrap(d.Axis.prototype,"init",function(f){var a=arguments;if(a[1].is3d())a[2].tickWidth=d.pick(a[2].tickWidth,0),a[2].gridLineWidth=d.pick(a[2].gridLineWidth,1);f.apply(this,[].slice.call(arguments,1))});d.wrap(d.Axis.prototype,"render",function(d){d.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=this.chart,b=a.renderer,c=a.options.chart.options3d,e=c.alpha,g=
c.beta*(a.yAxis[0].opposite?-1:1),j=c.frame,i=j.bottom,h=j.back,j=j.side,k=c.depth,o=this.height,q=this.width,l=this.left,m=this.top,c={x:a.plotLeft+a.plotWidth/2,y:a.plotTop+a.plotHeight/2,z:k,vd:c.viewDistance};if(this.horiz)this.axisLine&&this.axisLine.hide(),g={x:l,y:m+(a.yAxis[0].reversed?-i.size:o),z:0,width:q,height:i.size,depth:k,alpha:e,beta:g,origin:c},this.bottomFrame?this.bottomFrame.animate(g):this.bottomFrame=b.cuboid(g).attr({fill:i.color,zIndex:a.yAxis[0].reversed&&e>0?4:-1}).css({stroke:i.color}).add();
else{var n={x:l,y:m,z:k+1,width:q,height:o+i.size,depth:h.size,alpha:e,beta:g,origin:c};this.backFrame?this.backFrame.animate(n):this.backFrame=b.cuboid(n).attr({fill:h.color,zIndex:-3}).css({stroke:h.color}).add();this.axisLine&&this.axisLine.hide();a={x:(a.yAxis[0].opposite?q:0)+l-j.size,y:m,z:0,width:j.size,height:o+i.size,depth:k+h.size,alpha:e,beta:g,origin:c};this.sideFrame?this.sideFrame.animate(a):this.sideFrame=b.cuboid(a).attr({fill:j.color,zIndex:-2}).css({stroke:j.color}).add()}}});d.wrap(d.Axis.prototype,
"getPlotLinePath",function(d){var a=d.apply(this,[].slice.call(arguments,1));if(!this.chart.is3d())return a;if(a===null)return a;var b=this.chart,c=b.options.chart.options3d,e=c.depth;c.origin={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+b.plotHeight/2,z:e,vd:c.viewDistance};var a=[{x:a[1],y:a[2],z:this.horiz||this.opposite?e:0},{x:a[1],y:a[2],z:e},{x:a[4],y:a[5],z:e},{x:a[4],y:a[5],z:this.horiz||this.opposite?0:e}],e=b.options.inverted?c.beta:c.alpha,g=b.options.inverted?c.alpha:c.beta;g*=b.yAxis[0].opposite?
-1:1;a=x(a,e,g,c.origin);return a=this.chart.renderer.toLinePath(a,!1)});d.wrap(d.Axis.prototype,"getPlotBandPath",function(d){if(this.chart.is3d()){var a=arguments,b=a[1],a=this.getPlotLinePath(a[2]);(b=this.getPlotLinePath(b))&&a?b.push(a[7],a[8],a[4],a[5],a[1],a[2]):b=null;return b}else return d.apply(this,[].slice.call(arguments,1))});d.wrap(d.Tick.prototype,"getMarkPath",function(d){var a=d.apply(this,[].slice.call(arguments,1));if(!this.axis.chart.is3d())return a;var b=this.axis.chart,c=b.options.chart.options3d,
e={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+b.plotHeight/2,z:c.depth,vd:c.viewDistance},a=[{x:a[1],y:a[2],z:0},{x:a[4],y:a[5],z:0}],g=b.inverted?c.beta:c.alpha,c=b.inverted?c.alpha:c.beta;c*=b.yAxis[0].opposite?-1:1;a=x(a,g,c,e);return a=["M",a[0].x,a[0].y,"L",a[1].x,a[1].y]});d.wrap(d.Tick.prototype,"getLabelPosition",function(d){var a=d.apply(this,[].slice.call(arguments,1));if(!this.axis.chart.is3d())return a;var b=this.axis.chart,c=b.options.chart.options3d,e={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+
b.plotHeight/2,z:c.depth,vd:c.viewDistance},g=b.inverted?c.beta:c.alpha,c=b.inverted?c.alpha:c.beta;c*=b.yAxis[0].opposite?-1:1;return a=x([{x:a.x,y:a.y,z:0}],g,c,e)[0]});d.wrap(d.Axis.prototype,"drawCrosshair",function(d){var a=arguments;this.chart.is3d()&&a[2]&&(a[2]={plotX:a[2].plotXold||a[2].plotX,plotY:a[2].plotYold||a[2].plotY});d.apply(this,[].slice.call(a,1))});d.wrap(d.seriesTypes.column.prototype,"translate",function(f){f.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=
this.chart,b=this.options,c=a.options.chart.options3d,e=b.depth||25,g={x:a.plotWidth/2,y:a.plotHeight/2,z:c.depth,vd:c.viewDistance},j=c.alpha,i=c.beta*(a.yAxis[0].opposite?-1:1),h=(b.stacking?b.stack||0:this._i)*(e+(b.groupZPadding||1));b.grouping!==!1&&(h=0);h+=b.groupZPadding||1;d.each(this.data,function(a){if(a.y!==null){var b=a.shapeArgs,c=a.tooltipPos;a.shapeType="cuboid";b.alpha=j;b.beta=i;b.z=h;b.origin=g;b.depth=e;c=x([{x:c[0],y:c[1],z:h}],j,i,g)[0];a.tooltipPos=[c.x,c.y]}})}});d.wrap(d.seriesTypes.column.prototype,
"animate",function(f){if(this.chart.is3d()){var a=arguments[1],b=this.yAxis,c=this,e=this.yAxis.reversed;if(d.svg)a?d.each(c.data,function(a){if(a.y!==null&&(a.height=a.shapeArgs.height,a.shapey=a.shapeArgs.y,a.shapeArgs.height=1,!e))a.shapeArgs.y=a.stackY?a.plotY+b.translate(a.stackY):a.plotY+(a.negative?-a.height:a.height)}):(d.each(c.data,function(a){if(a.y!==null)a.shapeArgs.height=a.height,a.shapeArgs.y=a.shapey,a.graphic&&a.graphic.animate(a.shapeArgs,c.options.animation)}),this.drawDataLabels(),
c.animate=null)}else f.apply(this,[].slice.call(arguments,1))});d.wrap(d.seriesTypes.column.prototype,"init",function(d){d.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=this.options,b=a.grouping,c=a.stacking,e=0;if((b===void 0||b)&&c){b=this.chart.retrieveStacks(b,c);c=a.stack||0;for(e=0;e<b[c].series.length;e++)if(b[c].series[e]===this)break;e=b.totalStacks*10-10*(b.totalStacks-b[c].position)-e}a.zIndex=e}});d.wrap(d.Series.prototype,"alignDataLabel",function(d){if(this.chart.is3d()&&
(this.type==="column"||this.type==="columnrange")){var a=this.chart,b=a.options.chart.options3d,c=arguments[4],e={x:c.x,y:c.y,z:0},e=x([e],b.alpha,b.beta*(a.yAxis[0].opposite?-1:1),{x:a.plotWidth/2,y:a.plotHeight/2,z:b.depth,vd:b.viewDistance})[0];c.x=e.x;c.y=e.y}d.apply(this,[].slice.call(arguments,1))});d.seriesTypes.columnrange&&d.wrap(d.seriesTypes.columnrange.prototype,"drawPoints",D);d.wrap(d.seriesTypes.column.prototype,"drawPoints",D);var C=d.getOptions();C.plotOptions.cylinder=d.merge(C.plotOptions.column);
C=d.extendClass(d.seriesTypes.column,{type:"cylinder"});d.seriesTypes.cylinder=C;d.wrap(d.seriesTypes.cylinder.prototype,"translate",function(f){f.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=this.chart,b=a.options,c=b.plotOptions.cylinder,b=b.chart.options3d,e=c.depth||0,g={x:a.inverted?a.plotHeight/2:a.plotWidth/2,y:a.inverted?a.plotWidth/2:a.plotHeight/2,z:b.depth,vd:b.viewDistance},j=b.alpha,i=c.stacking?(this.options.stack||0)*e:this._i*e;i+=e/2;c.grouping!==!1&&(i=0);d.each(this.data,
function(a){var b=a.shapeArgs;a.shapeType="arc3d";b.x+=e/2;b.z=i;b.start=0;b.end=2*n;b.r=e*0.95;b.innerR=0;b.depth=b.height*(1/l((90-j)*t))-i;b.alpha=90-j;b.beta=0;b.origin=g})}});d.wrap(d.seriesTypes.pie.prototype,"translate",function(f){f.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=this,b=a.chart,c=a.options,e=c.depth||0,g=b.options.chart.options3d,j={x:b.plotWidth/2,y:b.plotHeight/2,z:g.depth},i=g.alpha,h=g.beta,k=c.stacking?(c.stack||0)*e:a._i*e;k+=e/2;c.grouping!==!1&&
(k=0);d.each(a.data,function(b){b.shapeType="arc3d";var c=b.shapeArgs;if(b.y)c.z=k,c.depth=e*0.75,c.origin=j,c.alpha=i,c.beta=h,c=(c.end+c.start)/2,b.slicedTranslation={translateX:z(m(c)*a.options.slicedOffset*m(i*t)),translateY:z(l(c)*a.options.slicedOffset*m(i*t))}})}});d.wrap(d.seriesTypes.pie.prototype.pointClass.prototype,"haloPath",function(d){var a=arguments;return this.series.chart.is3d()?[]:d.call(this,a[1])});d.wrap(d.seriesTypes.pie.prototype,"drawPoints",function(f){if(this.chart.is3d()){var a=
this.options,b=this.options.states;this.borderWidth=a.borderWidth=a.edgeWidth||1;this.borderColor=a.edgeColor=d.pick(a.edgeColor,a.borderColor,void 0);b.hover.borderColor=d.pick(b.hover.edgeColor,this.borderColor);b.hover.borderWidth=d.pick(b.hover.edgeWidth,this.borderWidth);b.select.borderColor=d.pick(b.select.edgeColor,this.borderColor);b.select.borderWidth=d.pick(b.select.edgeWidth,this.borderWidth);d.each(this.data,function(a){var c=a.pointAttr;c[""].stroke=a.series.borderColor||a.color;c[""]["stroke-width"]=
a.series.borderWidth;c.hover.stroke=b.hover.borderColor;c.hover["stroke-width"]=b.hover.borderWidth;c.select.stroke=b.select.borderColor;c.select["stroke-width"]=b.select.borderWidth})}f.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var c=this.group;d.each(this.points,function(a){a.graphic.out.add(c);a.graphic.inn.add(c);a.graphic.side1.add(c);a.graphic.side2.add(c)})}});d.wrap(d.seriesTypes.pie.prototype,"drawDataLabels",function(f){this.chart.is3d()&&d.each(this.data,function(a){var b=
a.shapeArgs,c=b.r,d=b.depth,f=b.alpha*t,b=(b.start+b.end)/2,a=a.labelPos;a[1]+=-c*(1-m(f))*l(b)+(l(b)>0?l(f)*d:0);a[3]+=-c*(1-m(f))*l(b)+(l(b)>0?l(f)*d:0);a[5]+=-c*(1-m(f))*l(b)+(l(b)>0?l(f)*d:0)});f.apply(this,[].slice.call(arguments,1))});d.wrap(d.seriesTypes.pie.prototype,"addPoint",function(d){d.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.update()});d.wrap(d.seriesTypes.pie.prototype,"animate",function(f){if(this.chart.is3d()){var a=arguments[1],b=this.options.animation,c=this.center,
e=this.group,g=this.markerGroup;if(d.svg)if(b===!0&&(b={}),a){if(e.oldtranslateX=e.translateX,e.oldtranslateY=e.translateY,a={translateX:c[0],translateY:c[1],scaleX:0.001,scaleY:0.001},e.attr(a),g)g.attrSetters=e.attrSetters,g.attr(a)}else a={translateX:e.oldtranslateX,translateY:e.oldtranslateY,scaleX:1,scaleY:1},e.animate(a,b),g&&g.animate(a,b),this.animate=null}else f.apply(this,[].slice.call(arguments,1))});d.wrap(d.seriesTypes.scatter.prototype,"translate",function(f){f.apply(this,[].slice.call(arguments,
1));if(this.chart.is3d()){var a=this.chart,b=this.chart.options.chart.options3d,c=b.alpha,e=b.beta,g={x:a.inverted?a.plotHeight/2:a.plotWidth/2,y:a.inverted?a.plotWidth/2:a.plotHeight/2,z:b.depth,vd:b.viewDistance},b=b.depth,j=a.options.zAxis||{min:0,max:b},i=b/(j.max-j.min);d.each(this.data,function(a){var b={x:a.plotX,y:a.plotY,z:(a.z-j.min)*i},b=x([b],c,e,g)[0];a.plotXold=a.plotX;a.plotYold=a.plotY;a.plotX=b.x;a.plotY=b.y;a.plotZ=b.z})}});d.wrap(d.seriesTypes.scatter.prototype,"init",function(d){var a=
d.apply(this,[].slice.call(arguments,1));if(this.chart.is3d())this.pointArrayMap=["x","y","z"],this.tooltipOptions.pointFormat=this.userOptions.tooltip?this.userOptions.tooltip.pointFormat||"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>":"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>";return a});if(d.VMLRenderer)d.setOptions({animate:!1}),d.VMLRenderer.prototype.cuboid=d.SVGRenderer.prototype.cuboid,d.VMLRenderer.prototype.cuboidPath=d.SVGRenderer.prototype.cuboidPath,
d.VMLRenderer.prototype.toLinePath=d.SVGRenderer.prototype.toLinePath,d.VMLRenderer.prototype.createElement3D=d.SVGRenderer.prototype.createElement3D,d.VMLRenderer.prototype.arc3d=function(f){f=d.SVGRenderer.prototype.arc3d.call(this,f);f.css({zIndex:f.zIndex});return f},d.VMLRenderer.prototype.arc3dPath=d.SVGRenderer.prototype.arc3dPath,d.Chart.prototype.renderSeries=function(){for(var d,a=this.series.length;a--;)d=this.series[a],d.translate(),d.setTooltipPoints&&d.setTooltipPoints(),d.render()},
d.wrap(d.Axis.prototype,"render",function(d){d.apply(this,[].slice.call(arguments,1));this.sideFrame&&(this.sideFrame.css({zIndex:0}),this.sideFrame.front.attr({fill:this.sideFrame.color}));this.bottomFrame&&(this.bottomFrame.css({zIndex:1}),this.bottomFrame.front.attr({fill:this.bottomFrame.color}));this.backFrame&&(this.backFrame.css({zIndex:0}),this.backFrame.front.attr({fill:this.backFrame.color}))})})(Highcharts);
;
/*
 Highcharts JS v4.0.4 (2014-09-02)
 Exporting module

 (c) 2010-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(f){var A=f.Chart,t=f.addEvent,B=f.removeEvent,l=f.createElement,o=f.discardElement,v=f.css,k=f.merge,r=f.each,p=f.extend,D=Math.max,j=document,C=window,E=f.isTouchDevice,F=f.Renderer.prototype.symbols,s=f.getOptions(),y;p(s.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});s.navigation={menuStyle:{border:"1px solid #A0A0A0",
background:"#FFFFFF",padding:"5px 0"},menuItemStyle:{padding:"0 10px",background:"none",color:"#303030",fontSize:E?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{symbolFill:"#E0E0E0",symbolSize:14,symbolStroke:"#666",symbolStrokeWidth:3,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,theme:{fill:"white",stroke:"none"},verticalAlign:"top",width:24}};s.exporting={type:"image/png",url:"http://export.highcharts.com/",buttons:{contextButton:{menuClassName:"highcharts-contextmenu",
symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}};f.post=function(b,a,d){var c,b=l("form",k({method:"post",
action:b,enctype:"multipart/form-data"},d),{display:"none"},j.body);for(c in a)l("input",{type:"hidden",name:c,value:a[c]},null,b);b.submit();o(b)};p(A.prototype,{getSVG:function(b){var a=this,d,c,z,h,g=k(a.options,b);if(!j.createElementNS)j.createElementNS=function(a,b){return j.createElement(b)};b=l("div",null,{position:"absolute",top:"-9999em",width:a.chartWidth+"px",height:a.chartHeight+"px"},j.body);c=a.renderTo.style.width;h=a.renderTo.style.height;c=g.exporting.sourceWidth||g.chart.width||
/px$/.test(c)&&parseInt(c,10)||600;h=g.exporting.sourceHeight||g.chart.height||/px$/.test(h)&&parseInt(h,10)||400;p(g.chart,{animation:!1,renderTo:b,forExport:!0,width:c,height:h});g.exporting.enabled=!1;g.series=[];r(a.series,function(a){z=k(a.options,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});z.isInternal||g.series.push(z)});d=new f.Chart(g,a.callback);r(["xAxis","yAxis"],function(b){r(a[b],function(a,c){var g=d[b][c],f=a.getExtremes(),h=f.userMin,f=f.userMax;g&&(h!==
void 0||f!==void 0)&&g.setExtremes(h,f,!0,!1)})});c=d.container.innerHTML;g=null;d.destroy();o(b);c=c.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g,
" ").replace(/&shy;/g,"­").replace(/<IMG /g,"<image ").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/id=([^" >]+)/g,'id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()});return c=c.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'")},exportChart:function(b,a){var b=
b||{},d=this.options.exporting,d=this.getSVG(k({chart:{borderRadius:0}},d.chartOptions,a,{exporting:{sourceWidth:b.sourceWidth||d.sourceWidth,sourceHeight:b.sourceHeight||d.sourceHeight}})),b=k(this.options.exporting,b);f.post(b.url,{filename:b.filename||"chart",type:b.type,width:b.width||0,scale:b.scale||2,svg:d},b.formAttributes)},print:function(){var b=this,a=b.container,d=[],c=a.parentNode,f=j.body,h=f.childNodes;if(!b.isPrinting)b.isPrinting=!0,r(h,function(a,b){if(a.nodeType===1)d[b]=a.style.display,
a.style.display="none"}),f.appendChild(a),C.focus(),C.print(),setTimeout(function(){c.appendChild(a);r(h,function(a,b){if(a.nodeType===1)a.style.display=d[b]});b.isPrinting=!1},1E3)},contextMenu:function(b,a,d,c,f,h,g){var e=this,k=e.options.navigation,q=k.menuItemStyle,m=e.chartWidth,n=e.chartHeight,j="cache-"+b,i=e[j],u=D(f,h),w,x,o,s=function(a){e.pointer.inClass(a.target,b)||x()};if(!i)e[j]=i=l("div",{className:b},{position:"absolute",zIndex:1E3,padding:u+"px"},e.container),w=l("div",null,p({MozBoxShadow:"3px 3px 10px #888",
WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},k.menuStyle),i),x=function(){v(i,{display:"none"});g&&g.setState(0);e.openMenu=!1},t(i,"mouseleave",function(){o=setTimeout(x,500)}),t(i,"mouseenter",function(){clearTimeout(o)}),t(document,"mouseup",s),t(e,"destroy",function(){B(document,"mouseup",s)}),r(a,function(a){if(a){var b=a.separator?l("hr",null,null,w):l("div",{onmouseover:function(){v(this,k.menuItemHoverStyle)},onmouseout:function(){v(this,q)},onclick:function(){x();a.onclick.apply(e,
arguments)},innerHTML:a.text||e.options.lang[a.textKey]},p({cursor:"pointer"},q),w);e.exportDivElements.push(b)}}),e.exportDivElements.push(w,i),e.exportMenuWidth=i.offsetWidth,e.exportMenuHeight=i.offsetHeight;a={display:"block"};d+e.exportMenuWidth>m?a.right=m-d-f-u+"px":a.left=d-u+"px";c+h+e.exportMenuHeight>n&&g.alignOptions.verticalAlign!=="top"?a.bottom=n-c-u+"px":a.top=c+h-u+"px";v(i,a);e.openMenu=!0},addButton:function(b){var a=this,d=a.renderer,c=k(a.options.navigation.buttonOptions,b),j=
c.onclick,h=c.menuItems,g,e,l={stroke:c.symbolStroke,fill:c.symbolFill},q=c.symbolSize||12;if(!a.btnCount)a.btnCount=0;if(!a.exportDivElements)a.exportDivElements=[],a.exportSVGElements=[];if(c.enabled!==!1){var m=c.theme,n=m.states,o=n&&n.hover,n=n&&n.select,i;delete m.states;j?i=function(){j.apply(a,arguments)}:h&&(i=function(){a.contextMenu(e.menuClassName,h,e.translateX,e.translateY,e.width,e.height,e);e.setState(2)});c.text&&c.symbol?m.paddingLeft=f.pick(m.paddingLeft,25):c.text||p(m,{width:c.width,
height:c.height,padding:0});e=d.button(c.text,0,0,i,m,o,n).attr({title:a.options.lang[c._titleKey],"stroke-linecap":"round"});e.menuClassName=b.menuClassName||"highcharts-menu-"+a.btnCount++;c.symbol&&(g=d.symbol(c.symbol,c.symbolX-q/2,c.symbolY-q/2,q,q).attr(p(l,{"stroke-width":c.symbolStrokeWidth||1,zIndex:1})).add(e));e.add().align(p(c,{width:e.width,x:f.pick(c.x,y)}),!0,"spacingBox");y+=(e.width+c.buttonSpacing)*(c.align==="right"?-1:1);a.exportSVGElements.push(e,g)}},destroyExport:function(b){var b=
b.target,a,d;for(a=0;a<b.exportSVGElements.length;a++)if(d=b.exportSVGElements[a])d.onclick=d.ontouchstart=null,b.exportSVGElements[a]=d.destroy();for(a=0;a<b.exportDivElements.length;a++)d=b.exportDivElements[a],B(d,"mouseleave"),b.exportDivElements[a]=d.onmouseout=d.onmouseover=d.ontouchstart=d.onclick=null,o(d)}});F.menu=function(b,a,d,c){return["M",b,a+2.5,"L",b+d,a+2.5,"M",b,a+c/2+0.5,"L",b+d,a+c/2+0.5,"M",b,a+c-1.5,"L",b+d,a+c-1.5]};A.prototype.callbacks.push(function(b){var a,d=b.options.exporting,
c=d.buttons;y=0;if(d.enabled!==!1){for(a in c)b.addButton(c[a]);t(b,"destroy",b.destroyExport)}})})(Highcharts);
;
/**
 * PgwSlideshow - Version 2.0
 *
 * Copyright 2014, Jonathan M. Piat
 * http://pgwjs.com - http://pagawa.com
 * 
 * Released under the GNU GPLv3 license - http://opensource.org/licenses/gpl-3.0
 */
;(function($){
    $.fn.pgwSlideshow = function(options) {

        var defaults = {
            mainClassName : 'pgwSlideshow',
            transitionEffect : 'sliding',
            displayList : true,
            displayControls : true,
            touchControls : true,
            autoSlide : false,
            beforeSlide : false,
            afterSlide : false,
            maxHeight : null,
            adaptiveDuration : 200,
            transitionDuration : 500,
            intervalDuration : 3000
        };

        if (this.length == 0) {
            return this;
        } else if(this.length > 1) {
            this.each(function() {
                $(this).pgwSlideshow(options);
            });
            return this;
        }

        var pgwSlideshow = this;
        pgwSlideshow.plugin = this;
        pgwSlideshow.config = {};
        pgwSlideshow.data = [];
        pgwSlideshow.currentSlide = 0;
        pgwSlideshow.slideCount = 0;
        pgwSlideshow.resizeEvent = null;
        pgwSlideshow.intervalEvent = null;
        pgwSlideshow.touchFirstPosition = null;
        pgwSlideshow.touchListLastPosition = false;
        pgwSlideshow.window = $(window);

        // Init
        var init = function() {

            // Merge user options with the default configuration
            pgwSlideshow.config = $.extend({}, defaults, options);

            // Setup
            setup();

            // Check list
            if (pgwSlideshow.config.displayList) {
                checkList();
            }

            // Resize trigger
            pgwSlideshow.window.resize(function() {
                clearTimeout(pgwSlideshow.resizeEvent);
                pgwSlideshow.resizeEvent = setTimeout(function() {
                    setSizeClass();

                    var maxHeight = pgwSlideshow.plugin.find('.ps-current > ul > li.elt_' + pgwSlideshow.currentSlide + ' img').height();
                    updateHeight(maxHeight);

                    if (pgwSlideshow.config.displayList) {
                        checkList();
                        checkSelectedItem();
                    }
                }, 100);
            });

            // Activate interval
            if (pgwSlideshow.config.autoSlide) {
                activateInterval();
            }

            return true;
        };

        // Update the current height
        var updateHeight = function(height, animate) {

            // Check maxHeight
            if (pgwSlideshow.config.maxHeight) {
                if (height + pgwSlideshow.plugin.find('.ps-list').height() > pgwSlideshow.config.maxHeight) {
                    height = pgwSlideshow.config.maxHeight - pgwSlideshow.plugin.find('.ps-list').height();
                }
            }

            if (typeof pgwSlideshow.plugin.find('.ps-current').animate == 'function') {
                pgwSlideshow.plugin.find('.ps-current').stop().animate({
                    height: height
                }, pgwSlideshow.config.adaptiveDuration, function() {
                    if (pgwSlideshow.config.maxHeight) {
                        pgwSlideshow.plugin.find('.ps-current > ul > li img').css('max-height', height + 'px');
                    }
                });
            } else {
                pgwSlideshow.plugin.find('.ps-current').css('height', height);
                
                if (pgwSlideshow.config.maxHeight) {
                    pgwSlideshow.plugin.find('.ps-current > ul > li img').css('max-height', height + 'px');
                }
            }

            return true;
        };

        // Set list width
        var setListWidth = function() {
            var listWidth = 0;
            
            // The plugin must be visible for a correct calculation
            pgwSlideshow.plugin.show();

            pgwSlideshow.plugin.find('.ps-list > ul > li').show().each(function() {
                listWidth += $(this).width();
            });

            pgwSlideshow.plugin.find('.ps-list > ul').width(listWidth);
            return true;
        }

        // Set size class
        var setSizeClass = function() {
            if (pgwSlideshow.plugin.width() <= 480) {
                pgwSlideshow.plugin.addClass('narrow').removeClass('wide');
            } else {
                pgwSlideshow.plugin.addClass('wide').removeClass('narrow');
            }

            return true;
        };

        // Setup
        var setup = function() {

            // Create container
            pgwSlideshow.plugin.removeClass('pgwSlideshow').removeClass(pgwSlideshow.config.mainClassName);
            pgwSlideshow.plugin.wrap('<div class="ps-list"></div>');
            pgwSlideshow.plugin = pgwSlideshow.plugin.parent();

            pgwSlideshow.plugin.wrap('<div class="' + pgwSlideshow.config.mainClassName + '"></div>');
            pgwSlideshow.plugin = pgwSlideshow.plugin.parent();

            pgwSlideshow.plugin.prepend('<div class="ps-current"><ul></ul><span class="ps-caption"></span></div>');
            pgwSlideshow.slideCount = pgwSlideshow.plugin.find('.ps-list > ul > li').length;

            if (pgwSlideshow.slideCount == 0) {
                throw new Error('pgwSlideshow - No slider item has been found');
                return false;
            }

            // Prev / Next icons
            if (pgwSlideshow.slideCount > 1) {

                // Slider controls
                if (pgwSlideshow.config.displayControls) {
                    pgwSlideshow.plugin.find('.ps-current').prepend('<span class="ps-prev"><span class="ps-prevIcon"></span></span>');
                    pgwSlideshow.plugin.find('.ps-current').append('<span class="ps-next"><span class="ps-nextIcon"></span></span>');
                    pgwSlideshow.plugin.find('.ps-current .ps-prev').click(function() {
                        pgwSlideshow.previousSlide();
                    });
                    pgwSlideshow.plugin.find('.ps-current .ps-next').click(function() {
                        pgwSlideshow.nextSlide();
                    });
                }

                // Touch controls for current image
                if (pgwSlideshow.config.touchControls) {

                    pgwSlideshow.plugin.find('.ps-current').on('touchstart', function(e) {
                        try {
                            if (e.originalEvent.touches[0].clientX && pgwSlideshow.touchFirstPosition == null) {
                                pgwSlideshow.touchFirstPosition = e.originalEvent.touches[0].clientX;
                            }
                        } catch(e) {
                            pgwSlideshow.touchFirstPosition = null;
                        }
                    });

                    pgwSlideshow.plugin.find('.ps-current').on('touchmove', function(e) {
                        try {
                            if (e.originalEvent.touches[0].clientX && pgwSlideshow.touchFirstPosition != null) {
                                if (e.originalEvent.touches[0].clientX > (pgwSlideshow.touchFirstPosition + 50)) {
                                    pgwSlideshow.touchFirstPosition = null;
                                    pgwSlideshow.previousSlide();
                                } else if (e.originalEvent.touches[0].clientX < (pgwSlideshow.touchFirstPosition - 50)) {
                                    pgwSlideshow.touchFirstPosition = null;
                                    pgwSlideshow.nextSlide();
                                }
                            }
                        } catch(e) {
                            pgwSlideshow.touchFirstPosition = null;
                        }
                    });

                    pgwSlideshow.plugin.find('.ps-current').on('touchend', function(e) {
                        pgwSlideshow.touchFirstPosition = null;
                    });
                }
            }

            // Get slideshow elements
            var elementId = 1;
            pgwSlideshow.plugin.find('.ps-list > ul > li').each(function() {
                var element = getElement($(this));
                element.id = elementId;
                pgwSlideshow.data.push(element);

                $(this).addClass('elt_' + element.id);
                $(this).wrapInner('<span class="ps-item' + (elementId == 1 ? ' ps-selected' : '') + '"></span>');
                
                // Set element in the current list
                var currentElement = $('<li class="elt_' + elementId + '"></li>');

                if (element.image) {
                    currentElement.html('<img src="' + element.image + '" alt="' + (element.title ? element.title : '') + '">');
                } else if (element.thumbnail) {
                    currentElement.html('<img src="' + element.thumbnail + '" alt="' + (element.title ? element.title : '') + '">');
                }

                if (element.link) {
                    currentElement.html('<a href="' + element.link + '"' + (element.linkTarget ? ' target="' + element.linkTarget + '"' : '') + '>' + currentElement.html() + '</a>');
                }

                pgwSlideshow.plugin.find('.ps-current > ul').append(currentElement);

                $(this).css('cursor', 'pointer').click(function(event) {
                    event.preventDefault();
                    displayElement(element.id);
                });

                elementId++;
            });

            // Set list elements
            if (pgwSlideshow.config.displayList) {
                setListWidth();

                pgwSlideshow.plugin.find('.ps-list').prepend('<span class="ps-prev"><span class="ps-prevIcon"></span></span>');
                pgwSlideshow.plugin.find('.ps-list').append('<span class="ps-next"><span class="ps-nextIcon"></span></span>');
                pgwSlideshow.plugin.find('.ps-list').show();
            } else {
                pgwSlideshow.plugin.find('.ps-list').hide();
            }

            // Attach slide events
            if (pgwSlideshow.config.autoSlide) {
                pgwSlideshow.plugin.on('mouseenter', function() {
                    clearInterval(pgwSlideshow.intervalEvent);
                    pgwSlideshow.intervalEvent = null;
                }).on('mouseleave', function() {
                    activateInterval();
                });
            }

            // Disable current elements
            pgwSlideshow.plugin.find('.ps-current > ul > li').hide();

            // Display the first element
            displayElement(1);

            // Set the first height
            pgwSlideshow.plugin.find('.ps-current > ul > li.elt_1 img').on('load', function() {
                setSizeClass();

                var maxHeight = pgwSlideshow.plugin.find('.ps-current > ul > li.elt_1 img').height();
                updateHeight(maxHeight);
            });

            // Enable slideshow
            setSizeClass();
            pgwSlideshow.plugin.show();

            return true;
        };

        // Get element
        var getElement = function(obj) {
            var element = {};

            // Get link
            var elementLink = obj.find('a').attr('href');
            if ((typeof elementLink != 'undefined') && (elementLink != '')) {
                element.link = elementLink;
                var elementLinkTarget = obj.find('a').attr('target');
                if ((typeof elementLinkTarget != 'undefined') && (elementLinkTarget != '')) {
                    element.linkTarget = elementLinkTarget;
                }
            }

            // Get image 
            var elementThumbnail = obj.find('img').attr('src');
            if ((typeof elementThumbnail != 'undefined') && (elementThumbnail != '')) {
                element.thumbnail = elementThumbnail;
            }

            var elementImage = obj.find('img').attr('data-large-src');
            if ((typeof elementImage != 'undefined') && (elementImage != '')) {
                element.image = elementImage;
            }

            // Get title 
            var elementTitle = obj.find('img').attr('alt');
            if ((typeof elementTitle != 'undefined') && (elementTitle != '')) {
                element.title = elementTitle;
            }
            
            // Get description
            var elementDescription = obj.find('img').attr('data-description');
            if ((typeof elementDescription != 'undefined') && (elementDescription != '')) {
                element.description = elementDescription;
            }

            return element;
        };

        // Finish element
        var finishElement = function(element) {

            // Element caption
            var elementText = '';
            if (element.title) {
                elementText += '<b>' + element.title + '</b>';
            }

            if (element.description) {
                if (elementText != '') elementText += '<br>';
                elementText += element.description;
            }

            if (elementText != '') {
                if (element.link) {
                    elementText = '<a href="' + element.link + '"' + (element.linkTarget ? ' target="' + element.linkTarget + '"' : '') + '>' + elementText + '</a>';
                }

                if (typeof pgwSlideshow.plugin.find('.ps-caption').fadeIn == 'function') {
                    pgwSlideshow.plugin.find('.ps-caption').html(elementText);
                    pgwSlideshow.plugin.find('.ps-caption').fadeIn(pgwSlideshow.config.transitionDuration / 2);
                } else {
                    pgwSlideshow.plugin.find('.ps-caption').html(elementText);
                    pgwSlideshow.plugin.find('.ps-caption').show();
                }
            }

            // Update list items
            pgwSlideshow.plugin.find('.ps-list > ul > li .ps-item').removeClass('ps-selected');
            pgwSlideshow.plugin.find('.ps-list > ul > li.elt_' + element.id + ' .ps-item').addClass('ps-selected');

            // Check selected item
            if (pgwSlideshow.config.displayList) {
                checkList();
                checkSelectedItem();
            }

            // Slideshow controls
            if (pgwSlideshow.config.displayControls) {
                if (typeof pgwSlideshow.plugin.find('.ps-current > .ps-prev').fadeIn == 'function') {
                    pgwSlideshow.plugin.find('.ps-current > .ps-prev, .ps-current > .ps-next').fadeIn(pgwSlideshow.config.transitionDuration / 2);
                } else {
                    pgwSlideshow.plugin.find('.ps-current > .ps-prev, .ps-current > .ps-next').show();
                }
            }

            // After slide
            if (typeof pgwSlideshow.config.afterSlide == 'function') {
                pgwSlideshow.config.afterSlide(element.id);
            }

            // Set the container height
            var maxHeight = pgwSlideshow.plugin.find('.ps-current .elt_' + element.id + ' img').height();
            updateHeight(maxHeight, true);

            return true;
        }

        // Fade an element
        var fadeElement = function(element) {
            var elementContainer = pgwSlideshow.plugin.find('.ps-current > ul');

            elementContainer.find('li').not('.elt_' + pgwSlideshow.currentSlide).not('.elt_' + element.id).each(function(){
                if (typeof $(this).stop == 'function') {
                    $(this).stop();
                }
                $(this).css('position', '').css('z-index', 1).hide();
            });

            // Current element
            if (pgwSlideshow.currentSlide > 0) {
                var currentElement = elementContainer.find('.elt_' + pgwSlideshow.currentSlide);

                if (typeof currentElement.animate != 'function') {
                    currentElement.animate = function(css, duration, callback) {
                        currentElement.css(css);
                        if (callback) {
                            callback();
                        }
                    };
                }

                if (typeof currentElement.stop == 'function') {
                    currentElement.stop();
                }

                currentElement.css('position', 'absolute').animate({
                    opacity : 0,
                }, pgwSlideshow.config.transitionDuration, function() {
                    currentElement.css('position', '').css('z-index', 1).hide();
                });
            }

            // Update current id
            pgwSlideshow.currentSlide = element.id;

            // Next element
            var nextElement = elementContainer.find('.elt_' + element.id);

            if (typeof nextElement.animate != 'function') {
                nextElement.animate = function(css, duration, callback) {
                    nextElement.css(css);
                    if (callback) {
                        callback();
                    }
                };
            }

            if (typeof nextElement.stop == 'function') {
                nextElement.stop();
            }

            nextElement.css('position', 'absolute').show().animate({
                opacity : 1,
            }, pgwSlideshow.config.transitionDuration, function() {
                nextElement.css('position', '').css('z-index', 2).css('display', 'block');
                finishElement(element);
            });

            return true;
        }

        // Slide an element
        var slideElement = function(element, direction) {
            var elementContainer = pgwSlideshow.plugin.find('.ps-current > ul');

            if (typeof direction == 'undefined') {
                direction = 'left';
            }

            if (pgwSlideshow.currentSlide == 0) {
                elementContainer.find('.elt_1').css({
                    position : '',
                    left : '',
                    opacity : 1,
                    'z-index' : 2
                }).show();
                pgwSlideshow.plugin.find('.ps-list > li.elt_1').css('opacity', '1');
                finishElement(element);

            } else {

                if (pgwSlideshow.transitionInProgress) {
                    return false;
                }

                pgwSlideshow.transitionInProgress = true;

                // Get direction details
                var elementWidth = elementContainer.width();

                if (direction == 'left') {
                    var elementDest = -elementWidth;
                    var nextOrigin = elementWidth;
                } else {
                    var elementDest = elementWidth;
                    var nextOrigin = -elementWidth;
                }

                var currentElement = elementContainer.find('.elt_' + pgwSlideshow.currentSlide);

                if (typeof currentElement.animate != 'function') {
                    currentElement.animate = function(css, duration, callback) {
                        currentElement.css(css);
                        if (callback) {
                            callback();
                        }
                    };
                }

                currentElement.css('position', 'absolute').animate({
                    left : elementDest,
                }, pgwSlideshow.config.transitionDuration, function() {
                    currentElement.css('position', '').css('z-index', 1).css('left', '').css('opacity', 0).hide();
                });

                // Next element
                var nextElement = elementContainer.find('.elt_' + element.id);

                if (typeof nextElement.animate != 'function') {
                    nextElement.animate = function(css, duration, callback) {
                        nextElement.css(css);
                        if (callback) {
                            callback();
                        }
                    };
                }

                nextElement.css('position', 'absolute').css('left', nextOrigin).css('opacity', 1).show().animate({
                    left : 0,
                }, pgwSlideshow.config.transitionDuration, function() {
                    nextElement.css('position', '').css('left', '').css('z-index', 2).show();
                    pgwSlideshow.transitionInProgress = false;
                    finishElement(element);
                });
            }

            // Update current id
            pgwSlideshow.currentSlide = element.id;

            return true;
        }

        // Display current element
        var displayElement = function(elementId, apiController, direction) {

            if (elementId == pgwSlideshow.currentSlide) {
                return false;
            }

            var element = pgwSlideshow.data[elementId - 1];

            if (typeof element == 'undefined') {
                throw new Error('pgwSlideshow - The element ' + elementId + ' is undefined');
                return false;
            }

            if (typeof direction == 'undefined') {
                direction = 'left';
            }

            // Before slide
            if (typeof pgwSlideshow.config.beforeSlide == 'function') {
                pgwSlideshow.config.beforeSlide(elementId);
            }

            if (typeof pgwSlideshow.plugin.find('.ps-caption').fadeOut == 'function') {
                pgwSlideshow.plugin.find('.ps-caption, .ps-prev, .ps-next').fadeOut(pgwSlideshow.config.transitionDuration / 2);
            } else {
                pgwSlideshow.plugin.find('.ps-caption, .ps-prev, .ps-next').hide();
            }

            // Choose the transition effect
            if (pgwSlideshow.config.transitionEffect == 'sliding') {
                slideElement(element, direction);
            } else {
                fadeElement(element);
            }

            // Reset interval to avoid a half interval after an API control
            if (typeof apiController != 'undefined' && pgwSlideshow.config.autoSlide) {
                activateInterval();
            }

            return true;
        };

        // Activate interval
        var activateInterval = function() {
            clearInterval(pgwSlideshow.intervalEvent);

            if (pgwSlideshow.slideCount > 1 && pgwSlideshow.config.autoSlide) {
                pgwSlideshow.intervalEvent = setInterval(function() {
                    if (pgwSlideshow.currentSlide + 1 <= pgwSlideshow.slideCount) {
                        var nextItem = pgwSlideshow.currentSlide + 1;
                    } else {
                        var nextItem = 1;
                    }
                    displayElement(nextItem);
                }, pgwSlideshow.config.intervalDuration);
            }

            return true;
        };

        // Check slide list
        var checkList = function() {
            if (! pgwSlideshow.config.displayList) return false;

            // Refresh list width
            setListWidth();

            var containerObject = pgwSlideshow.plugin.find('.ps-list');
            var containerWidth = containerObject.width();
            var listObject = pgwSlideshow.plugin.find('.ps-list > ul');
            var listWidth = listObject.width();

            if (listWidth > containerWidth) {
                listObject.css('margin', '0 45px');

                var marginLeft = parseInt(listObject.css('margin-left'));
                var marginRight = parseInt(listObject.css('margin-right'));
                containerWidth -= (marginLeft + marginRight);

                // Left button
                containerObject.find('.ps-prev').show().unbind('click').click(function() {
                    var oldPosition = parseInt(listObject.css('left'));
                    var newPosition = oldPosition + containerWidth;

                    if (oldPosition == 0) {
                        newPosition = -(listWidth - containerWidth);
                    } else if (newPosition > 0) {
                        newPosition = 0;
                    }

                    if (typeof listObject.animate == 'function') {
                        listObject.animate({
                            left: newPosition
                        }, pgwSlideshow.config.transitionDuration);
                    } else {
                        listObject.css('left', newPosition);
                    }
                });

                // Right button
                containerObject.find('.ps-next').show().unbind('click').click(function() {
                    var oldPosition = parseInt(listObject.css('left'));
                    var newPosition = oldPosition - containerWidth;
                    var maxPosition = -(listWidth - containerWidth);

                    if (oldPosition == maxPosition) {
                        newPosition = 0;
                    } else if (newPosition < maxPosition) {
                        newPosition = maxPosition;
                    }

                    if (typeof listObject.animate == 'function') {
                        listObject.animate({
                            left: newPosition
                        }, pgwSlideshow.config.transitionDuration);
                    } else {
                        listObject.css('left', newPosition);
                    }
                });

                // Touch controls for the list
                if (pgwSlideshow.config.touchControls) {

                    pgwSlideshow.plugin.find('.ps-list > ul').on('touchmove', function(e) {
                        try {
                            if (e.originalEvent.touches[0].clientX) {
                                var lastPosition = (pgwSlideshow.touchListLastPosition == false ? 0 : pgwSlideshow.touchListLastPosition);
                                nbPixels = (pgwSlideshow.touchListLastPosition == false ? 1 : Math.abs(lastPosition - e.originalEvent.touches[0].clientX));
                                pgwSlideshow.touchListLastPosition = e.originalEvent.touches[0].clientX;

                                var touchDirection = '';
                                if (lastPosition > e.originalEvent.touches[0].clientX) {
                                    touchDirection = 'left';
                                } else if (lastPosition < e.originalEvent.touches[0].clientX) {
                                    touchDirection = 'right';
                                }
                            }

                            var oldPosition = parseInt(listObject.css('left'));

                            if (touchDirection == 'left') {
                                var containerWidth = containerObject.width();
                                var listWidth = listObject.width();

                                var marginLeft = parseInt(listObject.css('margin-left'));
                                var marginRight = parseInt(listObject.css('margin-right'));
                                containerWidth -= (marginLeft + marginRight);

                                var maxPosition = -(listWidth - containerWidth);
                                var newPosition = oldPosition - nbPixels;

                                if (newPosition > maxPosition) {
                                    listObject.css('left', newPosition);
                                }

                            } else if (touchDirection == 'right') {
                                var newPosition = oldPosition + nbPixels;

                                if (newPosition < 0) {
                                    listObject.css('left', newPosition);
                                } else {
                                    listObject.css('left', 0);
                                }
                            }

                        } catch(e) {
                            pgwSlideshow.touchListLastPosition = false;
                        }
                    });

                    pgwSlideshow.plugin.find('.ps-list > ul').on('touchend', function(e) {
                        pgwSlideshow.touchListLastPosition = false;
                    });
                }

            } else {
                var marginLeft = parseInt((containerWidth - listWidth) / 2);
                listObject.css('left', 0).css('margin-left', marginLeft);
                containerObject.find('.ps-prev').hide();
                containerObject.find('.ps-next').hide();
                pgwSlideshow.plugin.find('.ps-list > ul').unbind('touchstart touchmove touchend');
            }

            return true;
        };

        // Check the visibility of the selected item
        var checkSelectedItem = function() {
            var containerWidth = pgwSlideshow.plugin.find('.ps-list').width();
            var listObject = pgwSlideshow.plugin.find('.ps-list > ul');
            var listWidth = listObject.width();  

            var marginLeft = parseInt(listObject.css('margin-left'));
            var marginRight = parseInt(listObject.css('margin-right'));
            containerWidth -= (marginLeft + marginRight);

            var visibleZoneStart = Math.abs(parseInt(listObject.css('left')));
            var visibleZoneEnd = visibleZoneStart + containerWidth;
            var elementZoneStart = pgwSlideshow.plugin.find('.ps-list .ps-selected').position().left;
            var elementZoneEnd = elementZoneStart + pgwSlideshow.plugin.find('.ps-list .ps-selected').width();

            if ((elementZoneStart < visibleZoneStart) || (elementZoneEnd > visibleZoneEnd) || (listWidth > containerWidth && visibleZoneEnd > elementZoneEnd)) {
                var maxPosition = -(listWidth - containerWidth);

                if (-elementZoneStart < maxPosition) {
                    listObject.css('left', maxPosition);
                } else {
                    listObject.css('left', -elementZoneStart);
                }
            }

            return true;
        };

        // Start auto slide
        pgwSlideshow.startSlide = function() {
            pgwSlideshow.config.autoSlide = true;
            activateInterval();
            return true;
        };

        // Stop auto slide
        pgwSlideshow.stopSlide = function() {
            pgwSlideshow.config.autoSlide = false;
            clearInterval(pgwSlideshow.intervalEvent);
            return true;
        };

        // Get current slide
        pgwSlideshow.getCurrentSlide = function() {
            return pgwSlideshow.currentSlide;
        };

        // Get slide count
        pgwSlideshow.getSlideCount = function() {
            return pgwSlideshow.slideCount;
        };

        // Display slide
        pgwSlideshow.displaySlide = function(itemId) {
            displayElement(itemId, true);
            return true;
        };

        // Next slide
        pgwSlideshow.nextSlide = function() {
            if (pgwSlideshow.currentSlide + 1 <= pgwSlideshow.slideCount) {
                var nextItem = pgwSlideshow.currentSlide + 1;
            } else {
                var nextItem = 1;
            }
            displayElement(nextItem, true, 'left');
            return true;
        };

        // Previous slide
        pgwSlideshow.previousSlide = function() {
            if (pgwSlideshow.currentSlide - 1 >= 1) {
                var previousItem = pgwSlideshow.currentSlide - 1;
            } else {
                var previousItem = pgwSlideshow.slideCount;
            }
            displayElement(previousItem, true, 'right');
            return true;
        };

        // Destroy slider
        pgwSlideshow.destroy = function(soft) {
            clearInterval(pgwSlideshow.intervalEvent);

            if (typeof soft != 'undefined') {
                pgwSlideshow.plugin.find('.ps-list > ul > li').each(function() {
                    $(this).attr('style', null).removeClass().unbind('click');
                    $(this).html($(this).find('span').html());
                });

                pgwSlideshow.plugin.find('.ps-current').remove();
                pgwSlideshow.plugin.find('.ps-list').find('.ps-prev, .ps-next').remove();
                pgwSlideshow.plugin.find('.ps-list > ul').addClass(pgwSlideshow.config.mainClassName).attr('style', '');
                pgwSlideshow.plugin.find('.ps-list > ul').unwrap().unwrap();
                pgwSlideshow.hide();

            } else {
                pgwSlideshow.parent().parent().remove();
            }

            pgwSlideshow.plugin = null;
            pgwSlideshow.data = [];
            pgwSlideshow.config = {};
            pgwSlideshow.currentSlide = 0;
            pgwSlideshow.slideCount = 0;
            pgwSlideshow.resizeEvent = null;
            pgwSlideshow.intervalEvent = null;
            pgwSlideshow.touchFirstPosition = null;
            pgwSlideshow.window = null;

            return true;
        };

        // Reload slider
        pgwSlideshow.reload = function(newOptions) {
            pgwSlideshow.destroy(true);

            pgwSlideshow = this;
            pgwSlideshow.plugin = this;
            pgwSlideshow.window = $(window);
            pgwSlideshow.plugin.show();

            // Merge new options with the default configuration
            pgwSlideshow.config = $.extend({}, defaults, newOptions);

            // Setup
            setup();

            // Resize listener
            pgwSlideshow.window.resize(function() {
                clearTimeout(pgwSlideshow.resizeEvent);
                pgwSlideshow.resizeEvent = setTimeout(function() {
                    setSizeClass();

                    var maxHeight = pgwSlideshow.plugin.find('.ps-current > ul > li.elt_' + pgwSlideshow.currentSlide + ' img').css('max-height', '').height();
                    updateHeight(maxHeight);

                    if (pgwSlideshow.config.displayList) {
                        checkList();
                        checkSelectedItem();
                    }
                }, 100);
            });

            // Activate interval
            if (pgwSlideshow.config.autoSlide) {
                activateInterval();
            }

            return true;
        };

        // Slideshow initialization
        init();

        return this;
    }
})(window.Zepto || window.jQuery);
;
/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;  (function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,r="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,s=r?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,q="fade"===c.animation,p=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!q)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();p&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(b===39||b===37)){b=b===39?a.getTarget("next"):b===37?a.getTarget("prev"):false;a.flexAnimate(b,c.pauseOnAction)}});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=g<0?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&
 a.pause()},function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());r&&c.touch&&f.touch();(!q||q&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),
 g=b.index();!d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===
 c.controlNav?'<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",s,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});r&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(s,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});r&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(s,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 r&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(s,function(b){b.preventDefault();if(d(this).hasClass(e+"pause")){a.manualPause=true;a.manualPlay=false;a.pause()}else{a.manualPause=false;a.manualPlay=true;a.play()}});r&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+
 "pause").addClass(e+"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!q&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/o+2:1),a.setProps(f+j,"setTouch"))}function g(){if(a.animatingTo===
 a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>o/2)?a.flexAnimate(l,c.pauseOnAction):a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchmove",b,!1);i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,o,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),o=l?a.h:a.w,k=Number(new Date),f=h&&
 m&&a.animatingTo===a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*o:(a.currentSlide+a.cloneOffset)*o,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),q?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||q){var c=q?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){p&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(p&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(q)a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,
 c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup);else{var o=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*o:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*o:m?(a.count-1-b+a.cloneOffset)*o:(b+a.cloneOffset)*o;a.setProps(b,
 "",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(o)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(o)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!q&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===
 a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};
 a.canAdvance=function(b,g){var d=p?a.pagingCount-1:a.last;return g?!0:p&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:p&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&!p?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-
 1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?
 "translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(q)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",
 position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*
 (a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+
 "active-slide")};a.doMath=function(){var b=a.slides.first(),d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===
 a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>
 a.last&&(a.currentSlide-=1,a.animatingTo-=1),f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,
 a.slides).remove():l&&m?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,
 directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?
 i.selector:".slides > li");1===c.length?(c.fadeIn(400),i.start&&i.start(a)):void 0===a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);;
/*!
 * GMaps.js v0.4.5
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2013, Gustavo Leon
 * Released under the MIT License.
 */

if (!(typeof window.google === 'object' && window.google.maps)) {
	throw 'Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.'
}

var extend_object = function(obj, new_obj) {
	var name;

	if (obj === new_obj) {
		return obj;
	}

	for (name in new_obj) {
		obj[name] = new_obj[name];
	}

	return obj;
};

var replace_object = function(obj, replace) {
	var name;

	if (obj === replace) {
		return obj;
	}

	for (name in replace) {
		if (obj[name] != undefined) {
			obj[name] = replace[name];
		}
	}

	return obj;
};

var array_map = function(array, callback) {
	var original_callback_params = Array.prototype.slice.call(arguments, 2),
		array_return = [],
		array_length = array.length,
		i;

	if (Array.prototype.map && array.map === Array.prototype.map) {
		array_return = Array.prototype.map.call(array, function(item) {
			callback_params = original_callback_params;
			callback_params.splice(0, 0, item);

			return callback.apply(this, callback_params);
		});
	}
	else {
		for (i = 0; i < array_length; i++) {
			callback_params = original_callback_params;
			callback_params.splice(0, 0, array[i]);
			array_return.push(callback.apply(this, callback_params));
		}
	}

	return array_return;
};

var array_flat = function(array) {
	var new_array = [],
		i;

	for (i = 0; i < array.length; i++) {
		new_array = new_array.concat(array[i]);
	}

	return new_array;
};

var coordsToLatLngs = function(coords, useGeoJSON) {
	var first_coord = coords[0],
		second_coord = coords[1];

	if (useGeoJSON) {
		first_coord = coords[1];
		second_coord = coords[0];
	}

	return new google.maps.LatLng(first_coord, second_coord);
};

var arrayToLatLng = function(coords, useGeoJSON) {
	var i;

	for (i = 0; i < coords.length; i++) {
		if (coords[i].length > 0 && typeof(coords[i][0]) != "number") {
			coords[i] = arrayToLatLng(coords[i], useGeoJSON);
		}
		else {
			coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
		}
	}

	return coords;
};

var getElementById = function(id, context) {
	var element,
		id = id.replace('#', '');

	if ('jQuery' in this && context) {
		element = $("#" + id, context)[0];
	} else {
		element = document.getElementById(id);
	};

	return element;
};

var findAbsolutePosition = function(obj)  {
	var curleft = 0,
		curtop = 0;

	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}

	return [curleft, curtop];
};

var GMaps = (function(global) {
	"use strict";

	var doc = document;

	var GMaps = function(options) {
		options.zoom = options.zoom || 15;
		options.mapType = options.mapType || 'roadmap';

		var self = this,
			i,
			events_that_hide_context_menu = ['bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed', 'resize', 'tilesloaded', 'zoom_changed'],
			events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
			options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
			container_id = options.el || options.div,
			markerClustererFunction = options.markerClusterer,
			mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
			map_center = new google.maps.LatLng(options.lat, options.lng),
			zoomControl = options.zoomControl || true,
			zoomControlOpt = options.zoomControlOpt || {
				style: 'DEFAULT',
				position: 'TOP_LEFT'
			},
			zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
			zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
			panControl = options.panControl || true,
			mapTypeControl = options.mapTypeControl || true,
			scaleControl = options.scaleControl || true,
			streetViewControl = options.streetViewControl || true,
			overviewMapControl = overviewMapControl || true,
			map_options = {},
			map_base_options = {
				zoom: this.zoom,
				center: map_center,
				mapTypeId: mapType
			},
			map_controls_options = {
				panControl: panControl,
				zoomControl: zoomControl,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle[zoomControlStyle],
					position: google.maps.ControlPosition[zoomControlPosition]
				},
				mapTypeControl: mapTypeControl,
				scaleControl: scaleControl,
				streetViewControl: streetViewControl,
				overviewMapControl: overviewMapControl
			};

		if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
			this.el = getElementById(container_id, options.context);
		} else {
			this.el = container_id;
		}

		if (typeof(this.el) === 'undefined' || this.el === null) {
			throw 'No element defined.';
		}

		window.context_menu = window.context_menu || {};
		window.context_menu[self.el.id] = {};

		this.controls = [];
		this.overlays = [];
		this.layers = []; // array with kml/georss and fusiontables layers, can be as many
		this.singleLayers = {}; // object with the other layers, only one per layer
		this.markers = [];
		this.polylines = [];
		this.routes = [];
		this.polygons = [];
		this.infoWindow = null;
		this.overlay_el = null;
		this.zoom = options.zoom;
		this.registered_events = {};

		this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
		this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

		google.maps.visualRefresh = options.enableNewStyle;

		for (i = 0; i < options_to_be_deleted.length; i++) {
			delete options[options_to_be_deleted[i]];
		}

		if(options.disableDefaultUI != true) {
			map_base_options = extend_object(map_base_options, map_controls_options);
		}

		map_options = extend_object(map_base_options, options);

		for (i = 0; i < events_that_hide_context_menu.length; i++) {
			delete map_options[events_that_hide_context_menu[i]];
		}

		for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
			delete map_options[events_that_doesnt_hide_context_menu[i]];
		}

		this.map = new google.maps.Map(this.el, map_options);

		if (markerClustererFunction) {
			this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
		}

		var buildContextMenuHTML = function(control, e) {
			var html = '',
				options = window.context_menu[self.el.id][control];

			for (var i in options){
				if (options.hasOwnProperty(i)) {
					var option = options[i];

					html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
				}
			}

			if (!getElementById('gmaps_context_menu')) return;

			var context_menu_element = getElementById('gmaps_context_menu');

			context_menu_element.innerHTML = html;

			var context_menu_items = context_menu_element.getElementsByTagName('a'),
				context_menu_items_count = context_menu_items.length
			i;

			for (i = 0; i < context_menu_items_count; i++) {
				var context_menu_item = context_menu_items[i];

				var assign_menu_item_action = function(ev){
					ev.preventDefault();

					options[this.id.replace(control + '_', '')].action.apply(self, [e]);
					self.hideContextMenu();
				};

				google.maps.event.clearListeners(context_menu_item, 'click');
				google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
			}

			var position = findAbsolutePosition.apply(this, [self.el]),
				left = position[0] + e.pixel.x - 15,
				top = position[1] + e.pixel.y- 15;

			context_menu_element.style.left = left + "px";
			context_menu_element.style.top = top + "px";

			context_menu_element.style.display = 'block';
		};

		this.buildContextMenu = function(control, e) {
			if (control === 'marker') {
				e.pixel = {};

				var overlay = new google.maps.OverlayView();
				overlay.setMap(self.map);

				overlay.draw = function() {
					var projection = overlay.getProjection(),
						position = e.marker.getPosition();

					e.pixel = projection.fromLatLngToContainerPixel(position);

					buildContextMenuHTML(control, e);
				};
			}
			else {
				buildContextMenuHTML(control, e);
			}
		};

		this.setContextMenu = function(options) {
			window.context_menu[self.el.id][options.control] = {};

			var i,
				ul = doc.createElement('ul');

			for (i in options.options) {
				if (options.options.hasOwnProperty(i)) {
					var option = options.options[i];

					window.context_menu[self.el.id][options.control][option.name] = {
						title: option.title,
						action: option.action
					};
				}
			}

			ul.id = 'gmaps_context_menu';
			ul.style.display = 'none';
			ul.style.position = 'absolute';
			ul.style.minWidth = '100px';
			ul.style.background = 'white';
			ul.style.listStyle = 'none';
			ul.style.padding = '8px';
			ul.style.boxShadow = '2px 2px 6px #ccc';

			doc.body.appendChild(ul);

			var context_menu_element = getElementById('gmaps_context_menu')

			google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
				if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
					window.setTimeout(function(){
						context_menu_element.style.display = 'none';
					}, 400);
				}
			}, false);
		};

		this.hideContextMenu = function() {
			var context_menu_element = getElementById('gmaps_context_menu');

			if (context_menu_element) {
				context_menu_element.style.display = 'none';
			}
		};

		var setupListener = function(object, name) {
			google.maps.event.addListener(object, name, function(e){
				if (e == undefined) {
					e = this;
				}

				options[name].apply(this, [e]);

				self.hideContextMenu();
			});
		};

		for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
			var name = events_that_hide_context_menu[ev];

			if (name in options) {
				setupListener(this.map, name);
			}
		}

		for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
			var name = events_that_doesnt_hide_context_menu[ev];

			if (name in options) {
				setupListener(this.map, name);
			}
		}

		google.maps.event.addListener(this.map, 'rightclick', function(e) {
			if (options.rightclick) {
				options.rightclick.apply(this, [e]);
			}

			if(window.context_menu[self.el.id]['map'] != undefined) {
				self.buildContextMenu('map', e);
			}
		});

		this.refresh = function() {
			google.maps.event.trigger(this.map, 'resize');
		};

		this.fitZoom = function() {
			var latLngs = [],
				markers_length = this.markers.length,
				i;

			for (i = 0; i < markers_length; i++) {
				latLngs.push(this.markers[i].getPosition());
			}

			this.fitLatLngBounds(latLngs);
		};

		this.fitLatLngBounds = function(latLngs) {
			var total = latLngs.length;
			var bounds = new google.maps.LatLngBounds();

			for(var i=0; i < total; i++) {
				bounds.extend(latLngs[i]);
			}

			this.map.fitBounds(bounds);
		};

		this.setCenter = function(lat, lng, callback) {
			this.map.panTo(new google.maps.LatLng(lat, lng));

			if (callback) {
				callback();
			}
		};

		this.getElement = function() {
			return this.el;
		};

		this.zoomIn = function(value) {
			value = value || 1;

			this.zoom = this.map.getZoom() + value;
			this.map.setZoom(this.zoom);
		};

		this.zoomOut = function(value) {
			value = value || 1;

			this.zoom = this.map.getZoom() - value;
			this.map.setZoom(this.zoom);
		};

		var native_methods = [],
			method;

		for (method in this.map) {
			if (typeof(this.map[method]) == 'function' && !this[method]) {
				native_methods.push(method);
			}
		}

		for (i=0; i < native_methods.length; i++) {
			(function(gmaps, scope, method_name) {
				gmaps[method_name] = function(){
					return scope[method_name].apply(scope, arguments);
				};
			})(this, this.map, native_methods[i]);
		}
	};

	return GMaps;
})(this);

GMaps.prototype.createControl = function(options) {
	var control = document.createElement('div');

	control.style.cursor = 'pointer';
	control.style.fontFamily = 'Arial, sans-serif';
	control.style.fontSize = '13px';
	control.style.boxShadow = 'rgba(0, 0, 0, 0.398438) 0px 2px 4px';

	for (var option in options.style) {
		control.style[option] = options.style[option];
	}

	if (options.id) {
		control.id = options.id;
	}

	if (options.classes) {
		control.className = options.classes;
	}

	if (options.content) {
		control.innerHTML = options.content;
	}

	for (var ev in options.events) {
		(function(object, name) {
			google.maps.event.addDomListener(object, name, function(){
				options.events[name].apply(this, [this]);
			});
		})(control, ev);
	}

	control.index = 1;

	return control;
};

GMaps.prototype.addControl = function(options) {
	var position = google.maps.ControlPosition[options.position.toUpperCase()];

	delete options.position;

	var control = this.createControl(options);
	this.controls.push(control);

	this.map.controls[position].push(control);

	return control;
};

GMaps.prototype.createMarker = function(options) {
	if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
		throw 'No latitude or longitude defined.';
	}

	var self = this,
		details = options.details,
		fences = options.fences,
		outside = options.outside,
		base_options = {
			position: new google.maps.LatLng(options.lat, options.lng),
			map: null
		};

	delete options.lat;
	delete options.lng;
	delete options.fences;
	delete options.outside;

	var marker_options = extend_object(base_options, options),
		marker = new google.maps.Marker(marker_options);

	marker.fences = fences;

	if (options.infoWindow) {
		marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

		var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

		for (var ev = 0; ev < info_window_events.length; ev++) {
			(function(object, name) {
				if (options.infoWindow[name]) {
					google.maps.event.addListener(object, name, function(e){
						options.infoWindow[name].apply(this, [e]);
					});
				}
			})(marker.infoWindow, info_window_events[ev]);
		}
	}

	var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

	var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

	for (var ev = 0; ev < marker_events.length; ev++) {
		(function(object, name) {
			if (options[name]) {
				google.maps.event.addListener(object, name, function(){
					options[name].apply(this, [this]);
				});
			}
		})(marker, marker_events[ev]);
	}

	for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
		(function(map, object, name) {
			if (options[name]) {
				google.maps.event.addListener(object, name, function(me){
					if(!me.pixel){
						me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
					}

					options[name].apply(this, [me]);
				});
			}
		})(this.map, marker, marker_events_with_mouse[ev]);
	}

	google.maps.event.addListener(marker, 'click', function() {
		this.details = details;

		if (options.click) {
			options.click.apply(this, [this]);
		}

		if (marker.infoWindow) {
			self.hideInfoWindows();
			marker.infoWindow.open(self.map, marker);
		}
	});

	google.maps.event.addListener(marker, 'rightclick', function(e) {
		e.marker = this;

		if (options.rightclick) {
			options.rightclick.apply(this, [e]);
		}

		if (window.context_menu[self.el.id]['marker'] != undefined) {
			self.buildContextMenu('marker', e);
		}
	});

	if (marker.fences) {
		google.maps.event.addListener(marker, 'dragend', function() {
			self.checkMarkerGeofence(marker, function(m, f) {
				outside(m, f);
			});
		});
	}

	return marker;
};

GMaps.prototype.addMarker = function(options) {
	var marker;
	if(options.hasOwnProperty('gm_accessors_')) {
		// Native google.maps.Marker object
		marker = options;
	}
	else {
		if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
			marker = this.createMarker(options);
		}
		else {
			throw 'No latitude or longitude defined.';
		}
	}

	marker.setMap(this.map);

	if(this.markerClusterer) {
		this.markerClusterer.addMarker(marker);
	}

	this.markers.push(marker);

	GMaps.fire('marker_added', marker, this);

	return marker;
};

GMaps.prototype.addMarkers = function(array) {
	for (var i = 0, marker; marker=array[i]; i++) {
		this.addMarker(marker);
	}

	return this.markers;
};

GMaps.prototype.hideInfoWindows = function() {
	for (var i = 0, marker; marker = this.markers[i]; i++){
		if (marker.infoWindow){
			marker.infoWindow.close();
		}
	}
};

GMaps.prototype.removeMarker = function(marker) {
	for (var i = 0; i < this.markers.length; i++) {
		if (this.markers[i] === marker) {
			this.markers[i].setMap(null);
			this.markers.splice(i, 1);

			GMaps.fire('marker_removed', marker, this);

			break;
		}
	}

	return marker;
};

GMaps.prototype.removeMarkers = function(collection) {
	var collection = (collection || this.markers);

	for (var i = 0;i < this.markers.length; i++) {
		if(this.markers[i] === collection[i]) {
			this.markers[i].setMap(null);
		}
	}

	var new_markers = [];

	for (var i = 0;i < this.markers.length; i++) {
		if(this.markers[i].getMap() != null) {
			new_markers.push(this.markers[i]);
		}
	}

	this.markers = new_markers;
};

GMaps.prototype.drawOverlay = function(options) {
	var overlay = new google.maps.OverlayView(),
		auto_show = true;

	overlay.setMap(this.map);

	if (options.auto_show != null) {
		auto_show = options.auto_show;
	}

	overlay.onAdd = function() {
		var el = document.createElement('div');

		el.style.borderStyle = "none";
		el.style.borderWidth = "0px";
		el.style.position = "absolute";
		el.style.zIndex = 100;
		el.innerHTML = options.content;

		overlay.el = el;

		if (!options.layer) {
			options.layer = 'overlayLayer';
		}

		var panes = this.getPanes(),
			overlayLayer = panes[options.layer],
			stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

		overlayLayer.appendChild(el);

		for (var ev = 0; ev < stop_overlay_events.length; ev++) {
			(function(object, name) {
				google.maps.event.addDomListener(object, name, function(e){
					if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
						e.cancelBubble = true;
						e.returnValue = false;
					}
					else {
						e.stopPropagation();
					}
				});
			})(el, stop_overlay_events[ev]);
		}

		google.maps.event.trigger(this, 'ready');
	};

	overlay.draw = function() {
		var projection = this.getProjection(),
			pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

		options.horizontalOffset = options.horizontalOffset || 0;
		options.verticalOffset = options.verticalOffset || 0;

		var el = overlay.el,
			content = el.children[0],
			content_height = content.clientHeight,
			content_width = content.clientWidth;

		switch (options.verticalAlign) {
			case 'top':
				el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
				break;
			default:
			case 'middle':
				el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
				break;
			case 'bottom':
				el.style.top = (pixel.y + options.verticalOffset) + 'px';
				break;
		}

		switch (options.horizontalAlign) {
			case 'left':
				el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
				break;
			default:
			case 'center':
				el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
				break;
			case 'right':
				el.style.left = (pixel.x + options.horizontalOffset) + 'px';
				break;
		}

		el.style.display = auto_show ? 'block' : 'none';

		if (!auto_show) {
			options.show.apply(this, [el]);
		}
	};

	overlay.onRemove = function() {
		var el = overlay.el;

		if (options.remove) {
			options.remove.apply(this, [el]);
		}
		else {
			overlay.el.parentNode.removeChild(overlay.el);
			overlay.el = null;
		}
	};

	this.overlays.push(overlay);
	return overlay;
};

GMaps.prototype.removeOverlay = function(overlay) {
	for (var i = 0; i < this.overlays.length; i++) {
		if (this.overlays[i] === overlay) {
			this.overlays[i].setMap(null);
			this.overlays.splice(i, 1);

			break;
		}
	}
};

GMaps.prototype.removeOverlays = function() {
	for (var i = 0, item; item = this.overlays[i]; i++) {
		item.setMap(null);
	}

	this.overlays = [];
};

GMaps.prototype.drawPolyline = function(options) {
	var path = [],
		points = options.path;

	if (points.length) {
		if (points[0][0] === undefined) {
			path = points;
		}
		else {
			for (var i=0, latlng; latlng=points[i]; i++) {
				path.push(new google.maps.LatLng(latlng[0], latlng[1]));
			}
		}
	}

	var polyline_options = {
		map: this.map,
		path: path,
		strokeColor: options.strokeColor,
		strokeOpacity: options.strokeOpacity,
		strokeWeight: options.strokeWeight,
		geodesic: options.geodesic,
		clickable: true,
		editable: false,
		visible: true
	};

	if (options.hasOwnProperty("clickable")) {
		polyline_options.clickable = options.clickable;
	}

	if (options.hasOwnProperty("editable")) {
		polyline_options.editable = options.editable;
	}

	if (options.hasOwnProperty("icons")) {
		polyline_options.icons = options.icons;
	}

	if (options.hasOwnProperty("zIndex")) {
		polyline_options.zIndex = options.zIndex;
	}

	var polyline = new google.maps.Polyline(polyline_options);

	var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

	for (var ev = 0; ev < polyline_events.length; ev++) {
		(function(object, name) {
			if (options[name]) {
				google.maps.event.addListener(object, name, function(e){
					options[name].apply(this, [e]);
				});
			}
		})(polyline, polyline_events[ev]);
	}

	this.polylines.push(polyline);

	GMaps.fire('polyline_added', polyline, this);

	return polyline;
};

GMaps.prototype.removePolyline = function(polyline) {
	for (var i = 0; i < this.polylines.length; i++) {
		if (this.polylines[i] === polyline) {
			this.polylines[i].setMap(null);
			this.polylines.splice(i, 1);

			GMaps.fire('polyline_removed', polyline, this);

			break;
		}
	}
};

GMaps.prototype.removePolylines = function() {
	for (var i = 0, item; item = this.polylines[i]; i++) {
		item.setMap(null);
	}

	this.polylines = [];
};

GMaps.prototype.drawCircle = function(options) {
	options =  extend_object({
		map: this.map,
		center: new google.maps.LatLng(options.lat, options.lng)
	}, options);

	delete options.lat;
	delete options.lng;

	var polygon = new google.maps.Circle(options),
		polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

	for (var ev = 0; ev < polygon_events.length; ev++) {
		(function(object, name) {
			if (options[name]) {
				google.maps.event.addListener(object, name, function(e){
					options[name].apply(this, [e]);
				});
			}
		})(polygon, polygon_events[ev]);
	}

	this.polygons.push(polygon);

	return polygon;
};

GMaps.prototype.drawRectangle = function(options) {
	options = extend_object({
		map: this.map
	}, options);

	var latLngBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
		new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
	);

	options.bounds = latLngBounds;

	var polygon = new google.maps.Rectangle(options),
		polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

	for (var ev = 0; ev < polygon_events.length; ev++) {
		(function(object, name) {
			if (options[name]) {
				google.maps.event.addListener(object, name, function(e){
					options[name].apply(this, [e]);
				});
			}
		})(polygon, polygon_events[ev]);
	}

	this.polygons.push(polygon);

	return polygon;
};

GMaps.prototype.drawPolygon = function(options) {
	var useGeoJSON = false;

	if(options.hasOwnProperty("useGeoJSON")) {
		useGeoJSON = options.useGeoJSON;
	}

	delete options.useGeoJSON;

	options = extend_object({
		map: this.map
	}, options);

	if (useGeoJSON == false) {
		options.paths = [options.paths.slice(0)];
	}

	if (options.paths.length > 0) {
		if (options.paths[0].length > 0) {
			options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
		}
	}

	var polygon = new google.maps.Polygon(options),
		polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

	for (var ev = 0; ev < polygon_events.length; ev++) {
		(function(object, name) {
			if (options[name]) {
				google.maps.event.addListener(object, name, function(e){
					options[name].apply(this, [e]);
				});
			}
		})(polygon, polygon_events[ev]);
	}

	this.polygons.push(polygon);

	GMaps.fire('polygon_added', polygon, this);

	return polygon;
};

GMaps.prototype.removePolygon = function(polygon) {
	for (var i = 0; i < this.polygons.length; i++) {
		if (this.polygons[i] === polygon) {
			this.polygons[i].setMap(null);
			this.polygons.splice(i, 1);

			GMaps.fire('polygon_removed', polygon, this);

			break;
		}
	}
};

GMaps.prototype.removePolygons = function() {
	for (var i = 0, item; item = this.polygons[i]; i++) {
		item.setMap(null);
	}

	this.polygons = [];
};

GMaps.prototype.getFromFusionTables = function(options) {
	var events = options.events;

	delete options.events;

	var fusion_tables_options = options,
		layer = new google.maps.FusionTablesLayer(fusion_tables_options);

	for (var ev in events) {
		(function(object, name) {
			google.maps.event.addListener(object, name, function(e) {
				events[name].apply(this, [e]);
			});
		})(layer, ev);
	}

	this.layers.push(layer);

	return layer;
};

GMaps.prototype.loadFromFusionTables = function(options) {
	var layer = this.getFromFusionTables(options);
	layer.setMap(this.map);

	return layer;
};

GMaps.prototype.getFromKML = function(options) {
	var url = options.url,
		events = options.events;

	delete options.url;
	delete options.events;

	var kml_options = options,
		layer = new google.maps.KmlLayer(url, kml_options);

	for (var ev in events) {
		(function(object, name) {
			google.maps.event.addListener(object, name, function(e) {
				events[name].apply(this, [e]);
			});
		})(layer, ev);
	}

	this.layers.push(layer);

	return layer;
};

GMaps.prototype.loadFromKML = function(options) {
	var layer = this.getFromKML(options);
	layer.setMap(this.map);

	return layer;
};

GMaps.prototype.addLayer = function(layerName, options) {
	//var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
	options = options || {};
	var layer;

	switch(layerName) {
		case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
			break;
		case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
			break;
		case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
			break;
		case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
			break;
		case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
			break;
		case 'panoramio':
			this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
			layer.setTag(options.filter);
			delete options.filter;

			//click event
			if (options.click) {
				google.maps.event.addListener(layer, 'click', function(event) {
					options.click(event);
					delete options.click;
				});
			}
			break;
		case 'places':
			this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

			//search and  nearbySearch callback, Both are the same
			if (options.search || options.nearbySearch) {
				var placeSearchRequest  = {
					bounds : options.bounds || null,
					keyword : options.keyword || null,
					location : options.location || null,
					name : options.name || null,
					radius : options.radius || null,
					rankBy : options.rankBy || null,
					types : options.types || null
				};

				if (options.search) {
					layer.search(placeSearchRequest, options.search);
				}

				if (options.nearbySearch) {
					layer.nearbySearch(placeSearchRequest, options.nearbySearch);
				}
			}

			//textSearch callback
			if (options.textSearch) {
				var textSearchRequest  = {
					bounds : options.bounds || null,
					location : options.location || null,
					query : options.query || null,
					radius : options.radius || null
				};

				layer.textSearch(textSearchRequest, options.textSearch);
			}
			break;
	}

	if (layer !== undefined) {
		if (typeof layer.setOptions == 'function') {
			layer.setOptions(options);
		}
		if (typeof layer.setMap == 'function') {
			layer.setMap(this.map);
		}

		return layer;
	}
};

GMaps.prototype.removeLayer = function(layer) {
	if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
		this.singleLayers[layer].setMap(null);

		delete this.singleLayers[layer];
	}
	else {
		for (var i = 0; i < this.layers.length; i++) {
			if (this.layers[i] === layer) {
				this.layers[i].setMap(null);
				this.layers.splice(i, 1);

				break;
			}
		}
	}
};

var travelMode, unitSystem;

GMaps.prototype.getRoutes = function(options) {
	switch (options.travelMode) {
		case 'bicycling':
			travelMode = google.maps.TravelMode.BICYCLING;
			break;
		case 'transit':
			travelMode = google.maps.TravelMode.TRANSIT;
			break;
		case 'driving':
			travelMode = google.maps.TravelMode.DRIVING;
			break;
		default:
			travelMode = google.maps.TravelMode.WALKING;
			break;
	}

	if (options.unitSystem === 'imperial') {
		unitSystem = google.maps.UnitSystem.IMPERIAL;
	}
	else {
		unitSystem = google.maps.UnitSystem.METRIC;
	}

	var base_options = {
			avoidHighways: false,
			avoidTolls: false,
			optimizeWaypoints: false,
			waypoints: []
		},
		request_options =  extend_object(base_options, options);

	request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
	request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
	request_options.travelMode = travelMode;
	request_options.unitSystem = unitSystem;

	delete request_options.callback;

	var self = this,
		service = new google.maps.DirectionsService();

	service.route(request_options, function(result, status) {
		if (status === google.maps.DirectionsStatus.OK) {
			for (var r in result.routes) {
				if (result.routes.hasOwnProperty(r)) {
					self.routes.push(result.routes[r]);
				}
			}
		}

		if (options.callback) {
			options.callback(self.routes);
		}
	});
};

GMaps.prototype.removeRoutes = function() {
	this.routes = [];
};

GMaps.prototype.getElevations = function(options) {
	options = extend_object({
		locations: [],
		path : false,
		samples : 256
	}, options);

	if (options.locations.length > 0) {
		if (options.locations[0].length > 0) {
			options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
		}
	}

	var callback = options.callback;
	delete options.callback;

	var service = new google.maps.ElevationService();

	//location request
	if (!options.path) {
		delete options.path;
		delete options.samples;

		service.getElevationForLocations(options, function(result, status) {
			if (callback && typeof(callback) === "function") {
				callback(result, status);
			}
		});
		//path request
	} else {
		var pathRequest = {
			path : options.locations,
			samples : options.samples
		};

		service.getElevationAlongPath(pathRequest, function(result, status) {
			if (callback && typeof(callback) === "function") {
				callback(result, status);
			}
		});
	}
};

GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.drawRoute = function(options) {
	var self = this;

	this.getRoutes({
		origin: options.origin,
		destination: options.destination,
		travelMode: options.travelMode,
		waypoints: options.waypoints,
		unitSystem: options.unitSystem,
		callback: function(e) {
			if (e.length > 0) {
				self.drawPolyline({
					path: e[e.length - 1].overview_path,
					strokeColor: options.strokeColor,
					strokeOpacity: options.strokeOpacity,
					strokeWeight: options.strokeWeight
				});

				if (options.callback) {
					options.callback(e[e.length - 1]);
				}
			}
		}
	});
};

GMaps.prototype.travelRoute = function(options) {
	if (options.origin && options.destination) {
		this.getRoutes({
			origin: options.origin,
			destination: options.destination,
			travelMode: options.travelMode,
			waypoints : options.waypoints,
			callback: function(e) {
				//start callback
				if (e.length > 0 && options.start) {
					options.start(e[e.length - 1]);
				}

				//step callback
				if (e.length > 0 && options.step) {
					var route = e[e.length - 1];
					if (route.legs.length > 0) {
						var steps = route.legs[0].steps;
						for (var i=0, step; step=steps[i]; i++) {
							step.step_number = i;
							options.step(step, (route.legs[0].steps.length - 1));
						}
					}
				}

				//end callback
				if (e.length > 0 && options.end) {
					options.end(e[e.length - 1]);
				}
			}
		});
	}
	else if (options.route) {
		if (options.route.legs.length > 0) {
			var steps = options.route.legs[0].steps;
			for (var i=0, step; step=steps[i]; i++) {
				step.step_number = i;
				options.step(step);
			}
		}
	}
};

GMaps.prototype.drawSteppedRoute = function(options) {
	var self = this;

	if (options.origin && options.destination) {
		this.getRoutes({
			origin: options.origin,
			destination: options.destination,
			travelMode: options.travelMode,
			waypoints : options.waypoints,
			callback: function(e) {
				//start callback
				if (e.length > 0 && options.start) {
					options.start(e[e.length - 1]);
				}

				//step callback
				if (e.length > 0 && options.step) {
					var route = e[e.length - 1];
					if (route.legs.length > 0) {
						var steps = route.legs[0].steps;
						for (var i=0, step; step=steps[i]; i++) {
							step.step_number = i;
							self.drawPolyline({
								path: step.path,
								strokeColor: options.strokeColor,
								strokeOpacity: options.strokeOpacity,
								strokeWeight: options.strokeWeight
							});
							options.step(step, (route.legs[0].steps.length - 1));
						}
					}
				}

				//end callback
				if (e.length > 0 && options.end) {
					options.end(e[e.length - 1]);
				}
			}
		});
	}
	else if (options.route) {
		if (options.route.legs.length > 0) {
			var steps = options.route.legs[0].steps;
			for (var i=0, step; step=steps[i]; i++) {
				step.step_number = i;
				self.drawPolyline({
					path: step.path,
					strokeColor: options.strokeColor,
					strokeOpacity: options.strokeOpacity,
					strokeWeight: options.strokeWeight
				});
				options.step(step);
			}
		}
	}
};

GMaps.Route = function(options) {
	this.origin = options.origin;
	this.destination = options.destination;
	this.waypoints = options.waypoints;

	this.map = options.map;
	this.route = options.route;
	this.step_count = 0;
	this.steps = this.route.legs[0].steps;
	this.steps_length = this.steps.length;

	this.polyline = this.map.drawPolyline({
		path: new google.maps.MVCArray(),
		strokeColor: options.strokeColor,
		strokeOpacity: options.strokeOpacity,
		strokeWeight: options.strokeWeight
	}).getPath();
};

GMaps.Route.prototype.getRoute = function(options) {
	var self = this;

	this.map.getRoutes({
		origin : this.origin,
		destination : this.destination,
		travelMode : options.travelMode,
		waypoints : this.waypoints || [],
		callback : function() {
			self.route = e[0];

			if (options.callback) {
				options.callback.call(self);
			}
		}
	});
};

GMaps.Route.prototype.back = function() {
	if (this.step_count > 0) {
		this.step_count--;
		var path = this.route.legs[0].steps[this.step_count].path;

		for (var p in path){
			if (path.hasOwnProperty(p)){
				this.polyline.pop();
			}
		}
	}
};

GMaps.Route.prototype.forward = function() {
	if (this.step_count < this.steps_length) {
		var path = this.route.legs[0].steps[this.step_count].path;

		for (var p in path){
			if (path.hasOwnProperty(p)){
				this.polyline.push(path[p]);
			}
		}
		this.step_count++;
	}
};

GMaps.prototype.checkGeofence = function(lat, lng, fence) {
	return fence.containsLatLng(new google.maps.LatLng(lat, lng));
};

GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
	if (marker.fences) {
		for (var i = 0, fence; fence = marker.fences[i]; i++) {
			var pos = marker.getPosition();
			if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
				outside_callback(marker, fence);
			}
		}
	}
};

GMaps.prototype.toImage = function(options) {
	var options = options || {},
		static_map_options = {};

	static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
	static_map_options['lat'] = this.getCenter().lat();
	static_map_options['lng'] = this.getCenter().lng();

	if (this.markers.length > 0) {
		static_map_options['markers'] = [];

		for (var i = 0; i < this.markers.length; i++) {
			static_map_options['markers'].push({
				lat: this.markers[i].getPosition().lat(),
				lng: this.markers[i].getPosition().lng()
			});
		}
	}

	if (this.polylines.length > 0) {
		var polyline = this.polylines[0];

		static_map_options['polyline'] = {};
		static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
		static_map_options['polyline']['strokeColor'] = polyline.strokeColor
		static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
		static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
	}

	return GMaps.staticMapURL(static_map_options);
};

GMaps.staticMapURL = function(options){
	var parameters = [],
		data,
		static_root = 'http://maps.googleapis.com/maps/api/staticmap';

	if (options.url) {
		static_root = options.url;
		delete options.url;
	}

	static_root += '?';

	var markers = options.markers;

	delete options.markers;

	if (!markers && options.marker) {
		markers = [options.marker];
		delete options.marker;
	}

	var polyline = options.polyline;
	delete options.polyline;

	/** Map options **/
	if (options.center) {
		parameters.push('center=' + options.center);
		delete options.center;
	}
	else if (options.address) {
		parameters.push('center=' + options.address);
		delete options.address;
	}
	else if (options.lat) {
		parameters.push(['center=', options.lat, ',', options.lng].join(''));
		delete options.lat;
		delete options.lng;
	}
	else if (options.visible) {
		var visible = encodeURI(options.visible.join('|'));
		parameters.push('visible=' + visible);
	}

	var size = options.size;
	if (size) {
		if (size.join) {
			size = size.join('x');
		}
		delete options.size;
	}
	else {
		size = '630x300';
	}
	parameters.push('size=' + size);

	if (!options.zoom) {
		options.zoom = 15;
	}

	var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
	delete options.sensor;
	parameters.push('sensor=' + sensor);

	for (var param in options) {
		if (options.hasOwnProperty(param)) {
			parameters.push(param + '=' + options[param]);
		}
	}

	/** Markers **/
	if (markers) {
		var marker, loc;

		for (var i=0; data=markers[i]; i++) {
			marker = [];

			if (data.size && data.size !== 'normal') {
				marker.push('size:' + data.size);
			}
			else if (data.icon) {
				marker.push('icon:' + encodeURI(data.icon));
			}

			if (data.color) {
				marker.push('color:' + data.color.replace('#', '0x'));
			}

			if (data.label) {
				marker.push('label:' + data.label[0].toUpperCase());
			}

			loc = (data.address ? data.address : data.lat + ',' + data.lng);

			if (marker.length || i === 0) {
				marker.push(loc);
				marker = marker.join('|');
				parameters.push('markers=' + encodeURI(marker));
			}
			// New marker without styles
			else {
				marker = parameters.pop() + encodeURI('|' + loc);
				parameters.push(marker);
			}
		}
	}

	/** Polylines **/
	function parseColor(color, opacity) {
		if (color[0] === '#'){
			color = color.replace('#', '0x');

			if (opacity) {
				opacity = parseFloat(opacity);
				opacity = Math.min(1, Math.max(opacity, 0));
				if (opacity === 0) {
					return '0x00000000';
				}
				opacity = (opacity * 255).toString(16);
				if (opacity.length === 1) {
					opacity += opacity;
				}

				color = color.slice(0,8) + opacity;
			}
		}
		return color;
	}

	if (polyline) {
		data = polyline;
		polyline = [];

		if (data.strokeWeight) {
			polyline.push('weight:' + parseInt(data.strokeWeight, 10));
		}

		if (data.strokeColor) {
			var color = parseColor(data.strokeColor, data.strokeOpacity);
			polyline.push('color:' + color);
		}

		if (data.fillColor) {
			var fillcolor = parseColor(data.fillColor, data.fillOpacity);
			polyline.push('fillcolor:' + fillcolor);
		}

		var path = data.path;
		if (path.join) {
			for (var j=0, pos; pos=path[j]; j++) {
				polyline.push(pos.join(','));
			}
		}
		else {
			polyline.push('enc:' + path);
		}

		polyline = polyline.join('|');
		parameters.push('path=' + encodeURI(polyline));
	}

	parameters = parameters.join('&');
	return static_root + parameters;
};

GMaps.prototype.addMapType = function(mapTypeId, options) {
	if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
		options.tileSize = options.tileSize || new google.maps.Size(256, 256);

		var mapType = new google.maps.ImageMapType(options);

		this.map.mapTypes.set(mapTypeId, mapType);
	}
	else {
		throw "'getTileUrl' function required.";
	}
};

GMaps.prototype.addOverlayMapType = function(options) {
	if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
		var overlayMapTypeIndex = options.index;

		delete options.index;

		this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
	}
	else {
		throw "'getTile' function required.";
	}
};

GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
	this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
};

GMaps.prototype.addStyle = function(options) {
	var styledMapType = new google.maps.StyledMapType(options.styles, options.styledMapName);

	this.map.mapTypes.set(options.mapTypeId, styledMapType);
};

GMaps.prototype.setStyle = function(mapTypeId) {
	this.map.setMapTypeId(mapTypeId);
};

GMaps.prototype.createPanorama = function(streetview_options) {
	if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
		streetview_options.lat = this.getCenter().lat();
		streetview_options.lng = this.getCenter().lng();
	}

	this.panorama = GMaps.createPanorama(streetview_options);

	this.map.setStreetView(this.panorama);

	return this.panorama;
};

GMaps.createPanorama = function(options) {
	var el = getElementById(options.el, options.context);

	options.position = new google.maps.LatLng(options.lat, options.lng);

	delete options.el;
	delete options.context;
	delete options.lat;
	delete options.lng;

	var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
		streetview_options = extend_object({visible : true}, options);

	for (var i = 0; i < streetview_events.length; i++) {
		delete streetview_options[streetview_events[i]];
	}

	var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

	for (var i = 0; i < streetview_events.length; i++) {
		(function(object, name) {
			if (options[name]) {
				google.maps.event.addListener(object, name, function(){
					options[name].apply(this);
				});
			}
		})(panorama, streetview_events[i]);
	}

	return panorama;
};

GMaps.prototype.on = function(event_name, handler) {
	return GMaps.on(event_name, this, handler);
};

GMaps.prototype.off = function(event_name) {
	GMaps.off(event_name, this);
};

GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

GMaps.on = function(event_name, object, handler) {
	if (GMaps.custom_events.indexOf(event_name) == -1) {
		return google.maps.event.addListener(object, event_name, handler);
	}
	else {
		var registered_event = {
			handler : handler,
			eventName : event_name
		};

		object.registered_events[event_name] = object.registered_events[event_name] || [];
		object.registered_events[event_name].push(registered_event);

		return registered_event;
	}
};

GMaps.off = function(event_name, object) {
	if (GMaps.custom_events.indexOf(event_name) == -1) {
		google.maps.event.clearListeners(object, event_name);
	}
	else {
		object.registered_events[event_name] = [];
	}
};

GMaps.fire = function(event_name, object, scope) {
	if (GMaps.custom_events.indexOf(event_name) == -1) {
		google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
	}
	else {
		if(event_name in scope.registered_events) {
			var firing_events = scope.registered_events[event_name];

			for(var i = 0; i < firing_events.length; i++) {
				(function(handler, scope, object) {
					handler.apply(scope, [object]);
				})(firing_events[i]['handler'], scope, object);
			}
		}
	}
};

GMaps.geolocate = function(options) {
	var complete_callback = options.always || options.complete;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			options.success(position);

			if (complete_callback) {
				complete_callback();
			}
		}, function(error) {
			options.error(error);

			if (complete_callback) {
				complete_callback();
			}
		}, options.options);
	}
	else {
		options.not_supported();

		if (complete_callback) {
			complete_callback();
		}
	}
};

GMaps.geocode = function(options) {
	this.geocoder = new google.maps.Geocoder();
	var callback = options.callback;
	if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
		options.latLng = new google.maps.LatLng(options.lat, options.lng);
	}

	delete options.lat;
	delete options.lng;
	delete options.callback;

	this.geocoder.geocode(options, function(results, status) {
		callback(results, status);
	});
};

//==========================
// Polygon containsLatLng
// https://github.com/tparkin/Google-Maps-Point-in-Polygon
// Poygon getBounds extension - google-maps-extensions
// http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
if (!google.maps.Polygon.prototype.getBounds) {
	google.maps.Polygon.prototype.getBounds = function(latLng) {
		var bounds = new google.maps.LatLngBounds();
		var paths = this.getPaths();
		var path;

		for (var p = 0; p < paths.getLength(); p++) {
			path = paths.getAt(p);
			for (var i = 0; i < path.getLength(); i++) {
				bounds.extend(path.getAt(i));
			}
		}

		return bounds;
	};
}

if (!google.maps.Polygon.prototype.containsLatLng) {
	// Polygon containsLatLng - method to determine if a latLng is within a polygon
	google.maps.Polygon.prototype.containsLatLng = function(latLng) {
		// Exclude points outside of bounds as there is no way they are in the poly
		var bounds = this.getBounds();

		if (bounds !== null && !bounds.contains(latLng)) {
			return false;
		}

		// Raycast point in polygon method
		var inPoly = false;

		var numPaths = this.getPaths().getLength();
		for (var p = 0; p < numPaths; p++) {
			var path = this.getPaths().getAt(p);
			var numPoints = path.getLength();
			var j = numPoints - 1;

			for (var i = 0; i < numPoints; i++) {
				var vertex1 = path.getAt(i);
				var vertex2 = path.getAt(j);

				if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
					if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
						inPoly = !inPoly;
					}
				}

				j = i;
			}
		}

		return inPoly;
	};
}

google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
	return this.contains(latLng);
};

google.maps.Marker.prototype.setFences = function(fences) {
	this.fences = fences;
};

google.maps.Marker.prototype.addFence = function(fence) {
	this.fences.push(fence);
};

google.maps.Marker.prototype.getId = function() {
	return this['__gm_id'];
};

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
		"use strict";
		if (this == null) {
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;
		if (len === 0) {
			return -1;
		}
		var n = 0;
		if (arguments.length > 1) {
			n = Number(arguments[1]);
			if (n != n) { // shortcut for verifying if it's NaN
				n = 0;
			} else if (n != 0 && n != Infinity && n != -Infinity) {
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
			}
		}
		if (n >= len) {
			return -1;
		}
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (; k < len; k++) {
			if (k in t && t[k] === searchElement) {
				return k;
			}
		}
		return -1;
	}
};
