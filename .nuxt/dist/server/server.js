module.exports=function(e){var t={},n={0:0};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(t){if(0!==n[t]){var r=require("./"+{1:"75834cdd925c972f6339",2:"010d0e3238aa35dd4a35",3:"f36aa5c33cdf3cddc24c",4:"251c37435e7fc9b832ec",5:"4158c022869626069d55",6:"2fa8902663909cf88edd",7:"e0ee41c4c610d9efd7ec"}[t]+".js"),o=r.modules,c=r.ids;for(var l in o)e[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},r.p="/_nuxt/",r.oe=function(e){process.nextTick(function(){throw e})},r(r.s=19)}([function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";function r(e,t,n,r,o,c,l,d){var f,h="function"==typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=n,h._compiled=!0),r&&(h.functional=!0),c&&(h._scopeId="data-v-"+c),l?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},h._ssrRegister=f):o&&(f=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(h.functional){h._injectStyles=f;var m=h.render;h.render=function(e,t){return f.call(t),m(e,t)}}else{var x=h.beforeCreate;h.beforeCreate=x?[].concat(x,f):[f]}return{exports:e,options:h}}n.d(t,"a",function(){return r})},function(e,t,n){var content=n(21);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(7).default;e.exports.__inject__=function(e){r("b675d82e",content,!0,e)}},function(e,t,n){var content=n(23);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(7).default;e.exports.__inject__=function(e){r("17cfdfa9",content,!0,e)}},function(e,t,n){var content=n(25);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(7).default;e.exports.__inject__=function(e){r("aab9a468",content,!0,e)}},function(e,t){e.exports=require("firebase/app")},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var content=function(e,t){var content=e[1]||"",n=e[3];if(!n)return content;if(t&&"function"==typeof btoa){var r=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(o).concat([r]).join("\n")}var c;return[content].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+content+"}":content}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var c=e[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t,n){"use strict";function r(e,t,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var c=r._styles||(r._styles={});t=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],c=o[0],l={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}(e,t),n?function(e,t){for(var i=0;i<t.length;i++)for(var n=t[i].parts,r=0;r<n.length;r++){var o=n[r],c=o.media||"default",style=e[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):e[c]={ids:[o.id],css:o.css,media:o.media}}}(c,t):function(e,t){for(var i=0;i<t.length;i++)for(var n=t[i].parts,r=0;r<n.length;r++){var o=n[r];e[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,t)}}function o(e){var t="";for(var n in e){var style=e[n];t+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return t}n.r(t),n.d(t,"default",function(){return r})},function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(5),o=n.n(r);n(26);if(!o.a.apps.length){const e={apiKey:"AIzaSyCVfw6R28MpwLtCFeIVzh0wIQh6ANT7Ft4",authDomain:"easybillblog.firebaseapp.com",databaseURL:"https://easybillblog.firebaseio.com",projectId:"easybillblog",storageBucket:"easybillblog.appspot.com",messagingSenderId:"402268263010",appId:"1:402268263010:web:362b7d88ece56221"};o.a.initializeApp(e)}const c=o.a.firestore()},function(e,t){e.exports=require("vue-router")},function(e,t){},function(e,t){e.exports=require("querystring")},function(e,t){e.exports=require("node-fetch")},function(e,t){e.exports=require("vue-meta")},function(e,t){e.exports=require("vue-no-ssr")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("vuefire")},function(e,t){e.exports=require("vue-moment")},function(e,t){e.exports=require("moment")},function(e,t,n){e.exports=n(28)},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t.default=o.a},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t.default=o.a},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#17de8b;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t.default=o.a},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},function(e,t){e.exports=require("firebase/firestore")},function(e,t){e.exports=require("moment/locale/es")},function(e,t,n){"use strict";n.r(t);var r=n(11),o=n(0),c=n.n(o),l=n(12),d=n.n(l);var f={};function h(e){return e.then(e=>e.default||e)}function m(e){return e.options&&e._Ctor===e?e:(e.options?(e._Ctor=e,e.extendOptions=e.options):(e=c.a.extend(e))._Ctor=e,!e.options.name&&e.options.__file&&(e.options.name=e.options.__file),e)}function x(e,t=!1){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).map(r=>(t&&t.push(n),e.components[r]))))}function y(e){return Promise.all(function(e,t){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).reduce((r,o)=>(e.components[o]?r.push(t(e.components[o],e.instances[o],e,o,n)):delete e.components[o],r),[])))}(e,async(e,t,n,r)=>("function"!=typeof e||e.options||(e=await e()),n.components[r]=m(e),n.components[r])))}async function v(e){if(e)return await y(e),{...e,meta:x(e).map((t,n)=>({...t.options.meta,...(e.matched[n]||{}).meta}))}}async function _(e,t){e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:t.payload,error:t.error,base:"/",env:{}},t.req&&(e.context.req=t.req),t.res&&(e.context.res=t.res),t.ssrContext&&(e.context.ssrContext=t.ssrContext),e.context.redirect=(t,path,n)=>{if(!t)return;e.context._redirected=!0;let r=typeof path;"number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=t),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?e.context.next({path:path,query:n,status:t}):(path=function(e,t){let n;const r=e.indexOf("://");-1!==r?(n=e.substring(0,r),e=e.substring(r+3)):e.startsWith("//")&&(e=e.substring(2));let o,c=e.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&([path,o]=c);l+=path?"/"+path:"",t&&"{}"!==JSON.stringify(t)&&(l+=(2===e.split("?").length?"&":"?")+function(e){return Object.keys(e).sort().map(t=>{const n=e[t];return null==n?"":Array.isArray(n)?n.slice().map(e=>[t,"=",e].join("")).join("&"):t+"="+n}).filter(Boolean).join("&")}(t));return l+=o?"#"+o:""}(path,n),e.context.next({path:path,status:t}))},e.context.beforeNuxtRender=e=>t.beforeRenderFns.push(e));const[n,r]=await Promise.all([v(t.route),v(t.from)]);t.route&&(e.context.route=n),t.from&&(e.context.from=r),e.context.next=t.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(t.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{}}function w(e,t){return!e.length||t._redirected||t._errored?Promise.resolve():C(e[0],t).then(()=>w(e.slice(1),t))}function C(e,t){let n;return(n=2===e.length?new Promise(n=>{e(t,function(e,data){e&&t.error(e),n(data=data||{})})}):e(t))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function k(e,t){return function(e){const t=new Array(e.length);for(let i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=(r||{}).pretty?j:encodeURIComponent;for(let i=0;i<e.length;i++){const n=e[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let c;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let e=0;e<r.length;e++){if(c=o(r[e]),!t[i].test(c))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===e?n.prefix:n.delimiter)+c}}else{if(c=n.asterisk?encodeURI(r).replace(/[?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase()):o(r),!t[i].test(c))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+c+'"');path+=n.prefix+c}}return path}}(function(e,t){const n=[];let r=0,o=0,path="";const c=t&&t.delimiter||"/";let l;for(;null!=(l=$.exec(e));){const t=l[0],d=l[1],f=l.index;if(path+=e.slice(o,f),o=f+t.length,d){path+=d[1];continue}const h=e[o],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=h&&h!==m,k="+"===_||"*"===_,$="?"===_||"*"===_,j=l[2]||c,pattern=y||v;n.push({name:x||r++,prefix:m||"",delimiter:j,optional:$,repeat:k,partial:C,asterisk:Boolean(w),pattern:pattern?E(pattern):w?".*":"[^"+S(j)+"]+?"})}o<e.length&&(path+=e.substr(o));path&&n.push(path);return n}(e,t))}const $=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(e){return encodeURI(e).replace(/[\/?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())}function S(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function E(e){return e.replace(/([=!:$\/()])/g,"\\$1")}var T=n(13),R=n.n(T),O=n(9),N=n.n(O);const A=()=>h(n.e(2).then(n.bind(null,96))),P=()=>h(n.e(6).then(n.bind(null,100))),L=()=>h(n.e(7).then(n.bind(null,98))),M=()=>h(n.e(3).then(n.bind(null,99))),U=()=>h(n.e(4).then(n.bind(null,101))),z=()=>h(n.e(1).then(n.bind(null,97))),I=()=>h(n.e(5).then(n.bind(null,95)));c.a.use(N.a);const D=function(e,t,n){let r=!1;return e.matched.length<2&&e.matched.every(e=>!1!==e.components.default.options.scrollToTop)?r={x:0,y:0}:e.matched.some(e=>e.components.default.options.scrollToTop)&&(r={x:0,y:0}),n&&(r=n),new Promise(t=>{window.$nuxt.$once("triggerScroll",()=>{if(e.hash){let t=e.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(t="#"+window.CSS.escape(t.substr(1)));try{document.querySelector(t)&&(r={selector:t})}catch(e){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}t(r)})})};var B=n(14),F={...n.n(B).a,name:"NoSsr"},K={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(e,{parent:t,data:data,props:n}){data.nuxtChild=!0;const r=t,o=t.$nuxt.nuxt.transitions,c=t.$nuxt.nuxt.defaultTransition;let l=0;for(;t;)t.$vnode&&t.$vnode.data.nuxtChild&&l++,t=t.$parent;data.nuxtChildDepth=l;const d=o[l]||c,f={};V.forEach(e=>{void 0!==d[e]&&(f[e]=d[e])});const h={};H.forEach(e=>{"function"==typeof d[e]&&(h[e]=d[e].bind(r))});const m=h.beforeEnter;h.beforeEnter=e=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(r,e)};let x=[e("router-view",data)];return n.keepAlive&&(x=[e("keep-alive",{props:n.keepAliveProps},x)]),e("transition",{props:f,on:h},x)}};const V=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],H=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var J={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},X=n(1);var W=Object(X.a)(J,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"__nuxt-error-page"},[e._ssrNode('<div class="error">',"</div>",[e._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+e._ssrEscape(e._s(e.message))+"</div> "),404===e.statusCode?e._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[e._v("Back to the home page")])],1):e._e(),e._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])},[],!1,function(e){var t=n(20);t.__inject__&&t.__inject__(e)},null,"71a80054").exports,Q={name:"Nuxt",components:{NuxtChild:K,NuxtError:W},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||k(this.$route.matched[0].path)(this.$route.params);const[e]=this.$route.matched;if(!e)return this.$route.path;const t=e.components.default;if(t&&t.options){const{options:e}=t;if(e.key)return"function"==typeof e.key?e.key(this.$route):e.key}return/\/$/.test(e.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(e){return this.nuxt.err?e("NuxtError",{props:{error:this.nuxt.err}}):e("NuxtChild",{key:this.routerViewKey,props:this.$props})}},G={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(e){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(e))),this},get(){return this.percent},increase(e){return this.percent=Math.min(100,Math.floor(this.percent+e)),this},decrease(e){return this.percent=Math.max(0,Math.floor(this.percent-e)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(e){let t=e(!1);return this.show&&(t=e("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),t}};var Y=Object(X.a)(G,void 0,void 0,!1,function(e){var t=n(22);t.__inject__&&t.__inject__(e)},null,"22825f8a").exports;const Z={_default:Object(X.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nuxt")],1)},[],!1,function(e){var t=n(24);t.__inject__&&t.__inject__(e)},null,"02491718").exports};var ee={head:{title:"easybill.pe",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"easybill landing page"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"/font.css"},{rel:"stylesheet",href:"/fonts.css"}],style:[],script:[]},render(e,t){const n=e("NuxtLoading",{ref:"loading"}),r=e(this.layout||"nuxt"),o=e("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=e("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(e){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return e("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(e){return e&&Z["_"+e]||(e="default"),this.layoutName=e,this.layout=Z["_"+e],this.layout},loadLayout:e=>(e&&Z["_"+e]||(e="default"),Promise.resolve(Z["_"+e]))},components:{NuxtLoading:Y}},te=n(15),ne=n.n(te);const re={setHeader(e,t,n="common"){for(let r of Array.isArray(n)?n:[n]){if(!t)return void delete this.defaults.headers[r][e];this.defaults.headers[r][e]=t}},setToken(e,t,n="common"){const r=e?(t?t+" ":"")+e:null;this.setHeader("Authorization",r,n)},onRequest(e){this.interceptors.request.use(t=>e(t)||t)},onResponse(e){this.interceptors.response.use(t=>e(t)||t)},onRequestError(e){this.interceptors.request.use(void 0,t=>e(t)||Promise.reject(t))},onResponseError(e){this.interceptors.response.use(void 0,t=>e(t)||Promise.reject(t))},onError(e){this.onRequestError(e),this.onResponseError(e)}};for(let e of["request","delete","get","head","options","post","put","patch"])re["$"+e]=function(){return this[e].apply(this,arguments).then(e=>e&&e.data)};var oe=(e,t)=>{const n={baseURL:process.env._AXIOS_BASE_URL_||"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=e.req&&e.req.headers?Object.assign({},e.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"],delete n.headers.common["content-length"],n.headers.common["accept-encoding"]="gzip, deflate";const r=ne.a.create(n);(e=>{for(let t in re)e[t]=re[t].bind(e)})(r),e.$axios=r,t("axios",r)},ie=n(8),se=n(16);c.a.use(se.firestorePlugin);var ae=n(17),ce=n.n(ae),ue=n(18),le=n.n(ue);n(27);c.a.use(ce.a,{moment:le.a});n(10);c.a.component(F.name,F),c.a.component(K.name,K),c.a.component("NChild",K),c.a.component(Q.name,Q),c.a.use(R.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const pe={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function de(e){const t=await new N.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:D,routes:[{path:"/blog",component:A,name:"blog"},{path:"/politicas",component:P,name:"politicas"},{path:"/terminos",component:L,name:"terminos"},{path:"/consulta/dni",component:M,name:"consulta-dni"},{path:"/consulta/ruc",component:U,name:"consulta-ruc"},{path:"/blog/:id/:article?",component:z,name:"blog-id-article"},{path:"/",component:I,name:"index"}],fallback:!1}),n={router:t,nuxt:{defaultTransition:pe,transitions:[pe],setTransitions(e){return Array.isArray(e)||(e=[e]),e=e.map(e=>e=e?"string"==typeof e?Object.assign({},pe,{name:e}):Object.assign({},pe,e):pe),this.$options.nuxt.transitions=e,e},err:null,dateErr:null,error(t){t=t||null,n.context._errored=Boolean(t),t=t?function(e){let t;if(e.message||"string"==typeof e)t=e.message||e;else try{t=JSON.stringify(e,null,2)}catch(n){t=`[${e.constructor.name}]`}return{...e,message:t,statusCode:e.statusCode||e.status||e.response&&e.response.status||500}}(t):null;const r=this.nuxt||this.$options.nuxt;return r.dateErr=Date.now(),r.err=t,e&&(e.nuxt.error=t),t}},...ee},r=e?e.next:e=>n.router.push(e);let o;if(e)o=t.resolve(e.url).route;else{const path=function(base,e){let path=decodeURI(window.location.pathname);return"hash"===e?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(t.options.base);o=t.resolve(path).route}await _(n,{route:o,next:r,error:n.nuxt.error.bind(n),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});const l=function(e,t){if(!e)throw new Error("inject(key, value) has no key provided");if(void 0===t)throw new Error("inject(key, value) has no value provided");n[e="$"+e]=t;const r="__nuxt_"+e+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(e)||Object.defineProperty(c.a.prototype,e,{get(){return this.$root.$options[e]}})}))};return"function"==typeof oe&&await oe(n.context,l),"function"==typeof ie.default&&await Object(ie.default)(n.context,l),e&&e.url&&await new Promise((r,o)=>{t.push(e.url,r,()=>{const o=t.afterEach(async(t,c,l)=>{e.url=t.fullPath,n.context.route=await v(t),n.context.params=t.params||{},n.context.query=t.query||{},o(),r()})})}),{app:n,router:t}}var fe={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(fe.name,fe),c.a.component("NLink",fe),global.fetch||(global.fetch=d.a);const he=()=>new c.a({render:e=>e("div")}),me=e=>t=>{if(e.redirected=t,!e.res)return void(e.nuxt.serverRendered=!1);t.query=Object(r.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:"");t.path.startsWith("http"),t.path!==e.url?(e.res.writeHead(t.status,{Location:t.path}),e.res.end()):e.redirected=!1};t.default=async e=>{e.redirected=!1,e.next=me(e),e.beforeRenderFns=[],e.nuxt={layout:"default",data:[],error:null,serverRendered:!0};const{app:t,router:n}=await de(e),r=new c.a(t);e.meta=r.$meta(),e.asyncData={};const o=async()=>{await Promise.all(e.beforeRenderFns.map(t=>C(t,{Components:h,nuxtState:e.nuxt}))),e.rendered=()=>{}},l=async()=>{const n="function"==typeof W.layout?W.layout(t.context):W.layout;return e.nuxt.layout=n||"default",await r.loadLayout(n),r.setLayout(n),await o(),r},d=()=>(t.context.error({statusCode:404,path:e.url,message:"This page could not be found"}),l()),h=x(n.match(e.url));let y=[];if(y=y.map(e=>"function"==typeof e?e:("function"!=typeof f[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),f[e])),await w(y,t.context),e.redirected)return he();if(e.nuxt.error)return l();let v=h.length?h[0].options.layout:W.layout;if("function"==typeof v&&(v=v(t.context)),await r.loadLayout(v),e.nuxt.error)return l();if(v=r.setLayout(v),e.nuxt.layout=r.layoutName,y=[],(v=m(v)).options.middleware&&(y=y.concat(v.options.middleware)),h.forEach(e=>{e.options.middleware&&(y=y.concat(e.options.middleware))}),y=y.map(e=>"function"==typeof e?e:("function"!=typeof f[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),f[e])),await w(y,t.context),e.redirected)return he();if(e.nuxt.error)return l();let _=!0;try{for(const e of h)if("function"==typeof e.options.validate&&!(_=await e.options.validate(t.context)))break}catch(e){return t.context.error({statusCode:e.statusCode||"500",message:e.message}),l()}if(!_)return e._generate&&(e.nuxt.serverRendered=!1),d();if(!h.length)return d();const k=await Promise.all(h.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=C(n.options.asyncData,t.context);o.then(t=>(e.asyncData[n.cid]=t,function(e,t){if(!t&&e.options.__hasNuxtData)return;const n=e.options._originDataFn||e.options.data||function(){return{}};e.options._originDataFn=n,e.options.data=function(){const data=n.call(this);return this.$ssrContext&&(t=this.$ssrContext.asyncData[e.cid]),{...data,...t}},e.options.__hasNuxtData=!0,e._Ctor&&e._Ctor.options&&(e._Ctor.options.data=e.options.data)}(n),t)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(t.context)):r.push(null),Promise.all(r)}));return e.nuxt.data=k.map(e=>e[0]||{}),e.redirected?he():e.nuxt.error?l():(await o(),r)}},function(e,t){e.exports=require("marked")},function(e,t){e.exports=require("animated-number-vue")}]);
//# sourceMappingURL=server.js.map