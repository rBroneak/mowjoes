/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransitions-input-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?u(r,t||n):r);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function p(e,t,o,r){var s,a,l,u,f="modernizr",c=i("div"),p=d();if(parseInt(o,10))for(;o--;)l=i("div"),l.id=r?r[o]:f+(o+1),c.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+f,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),a=t(c,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=u,_.offsetHeight):c.parentNode.removeChild(c),!!a}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(c(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+c(n[r])+":"+o+")");return s=s.join(" or "),p("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,s){function u(){c&&(delete N.style,delete N.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var f=m(e,r);if(!o(f,"undefined"))return f}for(var c,d,p,h,v,g=["modernizr","tspan","samp"];!N.style&&g.length;)c=!0,N.modElem=i(g.shift()),N.style=N.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=N.style[h],a(h,"-")&&(h=l(h)),N.style[h]!==t){if(s||o(r,"undefined"))return u(),"pfx"==n?h:!0;try{N.style[h]=r}catch(y){}if(N.style[h]!=v)return u(),"pfx"==n?h:!0}return u(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?h(a,n,r,s):(a=(e+" "+P.join(i+" ")+i).split(" "),f(a,n,t))}function g(e,n,o){return v(e,t,t,n,o)}var y=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),S=i("input"),b="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),T={};Modernizr.input=function(n){for(var t=0,o=n.length;o>t;t++)T[n[t]]=!!(n[t]in S);return T.list&&(T.list=!(!i("datalist")||!e.HTMLDataListElement)),T}(b);var z="Moz O ms Webkit",E=w._config.usePrefixes?z.split(" "):[];w._cssomPrefixes=E;var P=w._config.usePrefixes?z.toLowerCase().split(" "):[];w._domPrefixes=P;var j={elem:i("modernizr")};Modernizr._q.push(function(){delete j.elem});var N={style:j.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=v,w.testAllProps=g,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",g("transition","all",!0));var A=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=A;var k=w.testStyles=p;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",A.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(o,function(e){t=9===e.offsetTop})}return t}),r(),s(y),delete w.addTest,delete w.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);