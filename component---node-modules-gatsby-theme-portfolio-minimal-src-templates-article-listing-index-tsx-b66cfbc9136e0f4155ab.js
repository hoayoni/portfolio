(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[226],{9662:function(e,t,n){var r=n(7854),o=n(614),i=n(6330),a=r.TypeError;e.exports=function(e){if(o(e))return e;throw a(i(e)+" is not a function")}},1223:function(e,t,n){var r=n(5112),o=n(30),i=n(3070),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},9670:function(e,t,n){var r=n(7854),o=n(111),i=r.String,a=r.TypeError;e.exports=function(e){if(o(e))return e;throw a(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),a=function(e){return function(t,n,a){var c,u=r(t),l=i(u),s=o(a,l);if(e&&n!=n){for(;l>s;)if((c=u[s++])!=c)return!0}else for(;l>s;s++)if((e||s in u)&&u[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},7475:function(e,t,n){var r=n(7854),o=n(3157),i=n(4411),a=n(111),c=n(5112)("species"),u=r.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,(i(t)&&(t===u||o(t.prototype))||a(t)&&null===(t=t[c]))&&(t=void 0)),void 0===t?u:t}},5417:function(e,t,n){var r=n(7475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},648:function(e,t,n){var r=n(7854),o=n(1694),i=n(614),a=n(4326),c=n(5112)("toStringTag"),u=r.Object,l="Arguments"==a(function(){return arguments}());e.exports=o?a:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=u(e),c))?n:l?a(t):"Object"==(r=a(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);e.exports=function(e,t,n){for(var c=o(t),u=a.f,l=i.f,s=0;s<c.length;s++){var f=c[s];r(e,f)||n&&r(n,f)||u(e,f,l(t,f))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,o,i=n(7854),a=n(8113),c=i.process,u=i.Deno,l=c&&c.versions||u&&u.version,s=l&&l.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),c=n(3505),u=n(9920),l=n(4705);e.exports=function(e,t){var n,s,f,p,d,m=e.target,v=e.global,y=e.stat;if(n=v?r:y?r[m]||c(m,{}):(r[m]||{}).prototype)for(s in t){if(p=t[s],f=e.noTargetGet?(d=o(n,s))&&d.value:n[s],!l(v?s:m+(y?".":"#")+s,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(e.sham||f&&f.sham)&&i(p,"sham",!0),a(n,s,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6790:function(e,t,n){"use strict";var r=n(7854),o=n(3157),i=n(6244),a=n(9974),c=r.TypeError,u=function(e,t,n,r,l,s,f,p){for(var d,m,v=l,y=0,g=!!f&&a(f,p);y<r;){if(y in n){if(d=g?g(n[y],y,t):n[y],s>0&&o(d))m=i(d),v=u(e,t,d,m,v,s-1)-1;else{if(v>=9007199254740991)throw c("Exceed the acceptable array length");e[v]=d}v++}y++}return v};e.exports=u},9974:function(e,t,n){var r=n(1702),o=n(9662),i=n(4374),a=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?a(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,l=c&&(!r||r&&a(i,"name").configurable);e.exports={EXISTS:c,PROPER:u,CONFIGURABLE:l}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.bind,a=o.call,c=r&&i.bind(a,a);e.exports=r?function(e){return e&&c(e)}:function(e){return e&&function(){return a.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),o=n(1702),i=n(7293),a=n(4326),c=r.Object,u=o("".split);e.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?u(e,""):c(e)}:c},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,a=n(8536),c=n(7854),u=n(1702),l=n(111),s=n(8880),f=n(2597),p=n(5465),d=n(6200),m=n(3501),v="Object already initialized",y=c.TypeError,g=c.WeakMap;if(a||p.state){var h=p.state||(p.state=new g),b=u(h.get),x=u(h.has),E=u(h.set);r=function(e,t){if(x(h,e))throw new y(v);return t.facade=e,E(h,e,t),t},o=function(e){return b(h,e)||{}},i=function(e){return x(h,e)}}else{var w=d("state");m[w]=!0,r=function(e,t){if(f(e,w))throw new y(v);return t.facade=e,s(e,w,t),t},o=function(e){return f(e,w)?e[w]:{}},i=function(e){return f(e,w)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw y("Incompatible receiver, "+e+" required");return n}}}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e){e.exports=function(e){return"function"==typeof e}},4411:function(e,t,n){var r=n(1702),o=n(7293),i=n(614),a=n(648),c=n(5005),u=n(2788),l=function(){},s=[],f=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,d=r(p.exec),m=!p.exec(l),v=function(e){if(!i(e))return!1;try{return f(l,s,e),!0}catch(t){return!1}},y=function(e){if(!i(e))return!1;switch(a(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m||!!d(p,u(e))}catch(t){return!0}};y.sham=!0,e.exports=!f||o((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?y:v},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(e,t){var n=u[c(e)];return n==s||n!=l&&(o(t)?r(t):!!t)},c=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},u=a.data={},l=a.NATIVE="N",s=a.POLYFILL="P";e.exports=a},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),o=n(5005),i=n(614),a=n(7976),c=n(3307),u=r.Object;e.exports=c?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return i(t)&&a(t.prototype,u(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},133:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),o=n(614),i=n(2788),a=r.WeakMap;e.exports=o(a)&&/native code/.test(i(a))},30:function(e,t,n){var r,o=n(9670),i=n(6048),a=n(748),c=n(3501),u=n(490),l=n(317),s=n(6200),f=s("IE_PROTO"),p=function(){},d=function(e){return"<script>"+e+"</"+"script>"},m=function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t},v=function(){try{r=new ActiveXObject("htmlfile")}catch(o){}var e,t;v="undefined"!=typeof document?document.domain&&r?m(r):((t=l("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F):m(r);for(var n=a.length;n--;)delete v.prototype[a[n]];return v()};c[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(p.prototype=o(e),n=new p,p.prototype=null,n[f]=e):n=v(),void 0===t?n:i.f(n,t)}},6048:function(e,t,n){var r=n(9781),o=n(3353),i=n(3070),a=n(9670),c=n(5656),u=n(1956);t.f=r&&!o?Object.defineProperties:function(e,t){a(e);for(var n,r=c(t),o=u(t),l=o.length,s=0;l>s;)i.f(e,n=o[s++],r[n]);return e}},3070:function(e,t,n){var r=n(7854),o=n(9781),i=n(4664),a=n(3353),c=n(9670),u=n(4948),l=r.TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p="enumerable",d="configurable",m="writable";t.f=o?a?function(e,t,n){if(c(e),t=u(t),c(n),"function"==typeof e&&"prototype"===t&&"value"in n&&m in n&&!n.writable){var r=f(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:d in n?n.configurable:r.configurable,enumerable:p in n?n.enumerable:r.enumerable,writable:!1})}return s(e,t,n)}:s:function(e,t,n){if(c(e),t=u(t),c(n),i)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),c=n(5656),u=n(4948),l=n(2597),s=n(4664),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=c(e),t=u(t),s)try{return f(e,t)}catch(n){}if(l(e,t))return a(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,c=n(3501),u=r([].push);e.exports=function(e,t){var n,r=i(e),l=0,s=[];for(n in r)!o(c,n)&&o(r,n)&&u(s,n);for(;t.length>l;)o(r,n=t[l++])&&(~a(s,n)||u(s,n));return s}},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(7854),o=n(6916),i=n(614),a=n(111),c=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!a(r=o(n,e)))return r;if(i(n=e.valueOf)&&!a(r=o(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!a(r=o(n,e)))return r;throw c("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),c=n(9670),u=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(c(e)),n=a.f;return n?u(t,n(e)):t}},1320:function(e,t,n){var r=n(7854),o=n(614),i=n(2597),a=n(8880),c=n(3505),u=n(2788),l=n(9909),s=n(6530).CONFIGURABLE,f=l.get,p=l.enforce,d=String(String).split("String");(e.exports=function(e,t,n,u){var l,f=!!u&&!!u.unsafe,m=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet,y=u&&void 0!==u.name?u.name:t;o(n)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||s&&n.name!==y)&&a(n,"name",y),(l=p(n)).source||(l.source=d.join("string"==typeof y?y:""))),e!==r?(f?!v&&e[t]&&(m=!0):delete e[t],m?e[t]=n:a(e,t,n)):m?e[t]=n:c(t,n)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||u(this)}))},4488:function(e,t,n){var r=n(7854).TypeError;e.exports=function(e){if(null==e)throw r("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!=r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),o=n(4488),i=r.Object;e.exports=function(e){return i(o(e))}},7593:function(e,t,n){var r=n(7854),o=n(6916),i=n(111),a=n(2190),c=n(8173),u=n(2140),l=n(5112),s=r.TypeError,f=l("toPrimitive");e.exports=function(e,t){if(!i(e)||a(e))return e;var n,r=c(e,f);if(r){if(void 0===t&&(t="default"),n=o(r,e,t),!i(n)||a(n))return n;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),u(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},6330:function(e,t,n){var r=n(7854).String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),c=n(133),u=n(3307),l=o("wks"),s=r.Symbol,f=s&&s.for,p=u?s:s&&s.withoutSetter||a;e.exports=function(e){if(!i(l,e)||!c&&"string"!=typeof l[e]){var t="Symbol."+e;c&&i(s,e)?l[e]=s[e]:l[e]=u&&f?f(t):p(t)}return l[e]}},4944:function(e,t,n){"use strict";var r=n(2109),o=n(6790),i=n(7908),a=n(6244),c=n(9303),u=n(5417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),n=a(t),r=u(t,0);return r.length=o(r,t,t,n,0,void 0===e?1:c(e)),r}})},3792:function(e,t,n){n(1223)("flat")},1200:function(e,t,n){"use strict";n.d(t,{T:function(){return p},w:function(){return d}});var r=n(7294),o=n(5444),i=n(6125),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};var c="styles_skeleton__tyzRD";function u(e){var t=e.width,n=void 0===t?"100%":t,o=e.height,i=void 0===o?"1em":o,u=e.background,l=void 0===u?"#E9ECEF":u,s=e.radius,f=void 0===s?"4px":s,p=e.circle,d=void 0!==p&&p,m=e.block,v=void 0===m||m,y=e.style,g=void 0===y?{}:y;return r.createElement("div",{className:c,style:a({width:n,height:i,background:l,borderRadius:d?"50%":f,display:v?"block":"inline-block"},g)},"‌")}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD {\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  background: #eff1f6;\n}\n\n.styles_skeleton__tyzRD::before {\n  content: "";\n  position: absolute;\n  height: 100%;\n  width: 500px;\n  top: 0;\n  left: -500px;\n  background-image: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 0),\n    rgba(255, 255, 255, 0.6),\n    rgba(255, 255, 255, 0)\n  );\n  animation: styles_skeleton-progress__aezri 1.2s ease-in-out infinite;\n}\n\n@keyframes styles_skeleton-progress__aezri {\n  0% {\n    left: -500px;\n  }\n  100% {\n    left: 100%;\n  }\n}\n');var l=n(5298),s="style-module--Card--xmHd-",f="style-module--DescriptionWrapper--X4Z6Q";function p(e){var t,n=(0,l.j1)().globalState.theme===l.Q2.Dark,a=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),c=r.createElement("article",{className:s,style:n?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&r.createElement("div",{className:"style-module--Banner--1AHea"},e.data.image&&e.data.image.src&&r.createElement(i.G,{className:"style-module--ImageWrapper--UDAGh",imgClassName:"style-module--Image--Q-EOT",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),r.createElement("div",{className:f},r.createElement("span",{className:"style-module--Category--7rkhy"},r.createElement("u",null,e.data.category)),r.createElement("h4",{className:"style-module--Title--3nDZX"},e.data.title),r.createElement("div",{className:"style-module--Details--W6Sx5"},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(t=e.data.publishedAt).getMonth()]+" "+t.getDate()+", "+t.getFullYear(),e.data.readingTime&&r.createElement("span",{className:"style-module--ReadingTime--oDks7"},e.data.readingTime))));return a?r.createElement("a",{href:e.data.link,target:"_blank",rel:"nofollow noopener noreferrer",title:e.data.title},c):r.createElement(o.Link,{to:e.data.link,title:e.data.title},c)}function d(){var e=(0,l.j1)().globalState.theme===l.Q2.Dark;return r.createElement("div",{className:s,style:e?{border:"0.125rem solid var(--primary-color)"}:void 0},r.createElement("div",{className:f},r.createElement(u,{style:{height:"1.5rem",marginBottom:".5rem",background:"var(--tertiary-color)"}}),r.createElement(u,{style:{height:"4rem",background:"var(--tertiary-color)"}}),r.createElement(u,{style:{height:".75rem",width:"50%",marginTop:".5rem",background:"var(--tertiary-color)"}})))}},9432:function(e,t,n){"use strict";n.d(t,{z:function(){return c},L:function(){return r}});var r,o=n(7294),i=n(5444),a="style-module--Button--grH1j";function c(e){if(e.type===r.LINK){if(e.url)return e.externalLink?o.createElement("a",{id:e.id,className:a,href:e.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},e.label):o.createElement(i.Link,{id:e.id,to:e.url,className:a},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===r.BUTTON||e.type===r.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return o.createElement("button",{id:e.id,className:a,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}!function(e){e.BUTTON="button",e.SUBMIT="submit",e.LINK="link"}(r||(r={}))},1174:function(e,t,n){"use strict";n.d(t,{$:function(){return i}});var r=n(7294),o="style-module--ContentWrapper --Nt3lH";function i(e){var t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("section",{id:e.anchor,className:"style-module--Section--HYcY6"},r.createElement("div",{className:t},e.heading&&r.createElement("h3",{className:"style-module--Heading--LAAvY"},e.heading),e.children))}},8004:function(e,t,n){"use strict";n.d(t,{i:function(){return i}});var r=n(7294),o="style-module--SlideContainer--YL8oD";function i(e){var t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("div",{className:t,style:e.style},e.children)}},3425:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5785),o=(n(4944),n(3792),n(7294)),i=n(6345),a=n(1174),c=n(1598),u=n(8004),l=n(1200),s=n(9432),f="style-module--Option--g7uSm";function p(e){var t=e.pageContext.articles,n=o.useState(function(e){var t=[],n=[];return e.forEach((function(e){e.categories.forEach((function(r){if(n.includes(r)){var o=t.map((function(e){return e.label})).indexOf(r);t[o].relatedArticleIds.push(e.id)}else t.push({label:r,selected:!1,relatedArticleIds:[e.id]}),n.push(r)}))})),t.sort((function(e,t){return e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1}))}(t)),p=n[0],d=n[1],m=o.useState(9),v=m[0],y=m[1];var g=[],h=-1!==p.map((function(e){return e.selected})).indexOf(!0);return h&&(g=p.filter((function(e){return e.selected})).map((function(e){return e.relatedArticleIds})).flat(1).filter((function(e,t,n){return n.indexOf(e)===t}))),o.createElement(o.Fragment,null,o.createElement(c.p,{title:"All Articles",useTitleTemplate:!0}),o.createElement(i.T,null,o.createElement(a.$,{anchor:"articleListing",heading:"Articles"},o.createElement("div",{className:"style-module--Filter--MTd+O"},"Select categories to filter articles",o.createElement(u.i,{additionalClasses:["style-module--Options--NRW7S"]},p.map((function(e,t){return o.createElement("div",{key:t,role:"button",onClick:function(){return t=e.label,n=(0,r.Z)(p),o=n.map((function(e){return e.label})).indexOf(t),n[o].selected=!n[o].selected,void d(n);var t,n,o},className:[f,!0===e.selected?"style-module--Selected--8xZTc":null].join(" ")},e.label," (",e.relatedArticleIds.length,")")})))),o.createElement("div",{className:"style-module--Listing--UuymE"},t.filter((function(e){return!h||g.includes(e.id)})).slice(0,v).map((function(e,t){return o.createElement(l.T,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})}))),h&&g.length>v||!h&&t.length>v?o.createElement("div",{className:"style-module--LoadMore--i0wHR"},o.createElement(s.z,{type:s.L.BUTTON,label:"Load More",onClickHandler:function(){return e=t.length,n=h?g.length:void 0,r=v+3,void((n&&n>=r||!n&&e>=r)&&y(r));var e,n,r}})):null)))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-b66cfbc9136e0f4155ab.js.map