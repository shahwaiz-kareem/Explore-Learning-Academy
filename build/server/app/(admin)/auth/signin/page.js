(()=>{var e={};e.id=890,e.ids=[890],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7147:e=>{"use strict";e.exports=require("fs")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")},8389:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>f,tree:()=>l}),r(8466),r(3666),r(5866);var s=r(3191),a=r(8716),o=r(7922),n=r.n(o),i=r(5231),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);r.d(t,c);let l=["",{children:["(admin)",{children:["auth",{children:["signin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8466)),"/home/shah23/Desktop/explore-Learning-Academy webapp/src/app/(admin)/auth/signin/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3666)),"/home/shah23/Desktop/explore-Learning-Academy webapp/src/app/(admin)/auth/layout.jsx"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/home/shah23/Desktop/explore-Learning-Academy webapp/src/app/(admin)/auth/signin/page.jsx"],u="/(admin)/auth/signin/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(admin)/auth/signin/page",pathname:"/auth/signin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5984:(e,t,r)=>{let s={"7faf46641363ff9310ab18ce55737d4f7f6c48f2":()=>Promise.resolve().then(r.bind(r,1078)).then(e=>e.verifyPassword),be2ac82a702654b020f1ff210c781383d19d16ba:()=>Promise.resolve().then(r.bind(r,1078)).then(e=>e.$$ACTION_0)};async function a(e,...t){return(await s[e]()).apply(null,t)}e.exports={"7faf46641363ff9310ab18ce55737d4f7f6c48f2":a.bind(null,"7faf46641363ff9310ab18ce55737d4f7f6c48f2"),be2ac82a702654b020f1ff210c781383d19d16ba:a.bind(null,"be2ac82a702654b020f1ff210c781383d19d16ba")}},5976:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},6073:(e,t,r)=>{Promise.resolve().then(r.bind(r,1639))},2469:(e,t,r)=>{Promise.resolve().then(r.bind(r,6375)),Promise.resolve().then(r.bind(r,3440)),Promise.resolve().then(r.bind(r,52))},1639:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(326);r(5424);var a=(0,r(6242).$)("7faf46641363ff9310ab18ce55737d4f7f6c48f2"),o=r(52),n=r(5047),i=r(7577);function c(){let[e,t]=(0,i.useState)(""),{setNotify:r}=(0,i.useContext)(o.T),c=(0,n.useRouter)(),l=async t=>{t.preventDefault();try{let t=await a({password:e});r({notify:!0,success:t.success,message:t.message}),t.success&&c.push("/dashboard")}catch(e){r({notify:!0,success:!1,message:e.message})}};return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:(0,s.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg max-w-sm w-full",children:[s.jsx("h2",{className:"text-2xl font-semibold text-center text-gray-800 mb-6",children:"Login"}),(0,s.jsxs)("form",{onSubmit:l,children:[(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-600 mb-2",children:"Password"}),s.jsx("input",{type:"password",id:"password",className:"w-full p-2 border border-gray-300 rounded-md",placeholder:"Enter your password",value:e,onChange:e=>t(e.target.value),required:!0})]}),s.jsx("button",{type:"submit",className:"w-full bg-black text-white py-2 rounded-lg hover:bg-zinc-900 transition duration-300",children:"Login"})]})]})})}},6375:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(326),a=r(52),o=r(7577);let n=()=>{let{notify:e,setNotify:t}=(0,o.useContext)(a.T);return(0,o.useEffect)(()=>{if(e.notify){let e=setTimeout(()=>{t({notify:!1,success:!1,message:""})},8e3);return()=>clearTimeout(e)}},[e,t]),(0,s.jsxs)("div",{className:`${e.notify?"translate-x-0 right-1":"translate-x-full"} transition-all fixed right-0  bg-white shadow-lg rounded-xl flex items-center max-w-xs sm:max-w-sm md:max-w-md z-20 lg:max-w-lg px-4 py-3 mt-2`,children:[s.jsx("div",{className:`${e.success?"bg-green-500":"bg-red-500"} h-8 w-2 flex-shrink-0 rounded-l-xl`}),s.jsx("div",{className:"ml-3 text-gray-900 text-sm",children:e.message})]})}},3440:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var s=r(326),a=r(5666);let o=({color:e})=>s.jsx(a.Cd,{height:"2.6px",color:e,options:{showSpinner:!1},shallowRouting:!0})},52:(e,t,r)=>{"use strict";r.d(t,{RootContextProvider:()=>i,T:()=>n});var s=r(326),a=r(5047),o=r(7577);let n=(0,o.createContext)(),i=({children:e})=>{let t=(0,a.usePathname)(),[r,i]=(0,o.useState)(t.includes("dashboard")),[c,l]=(0,o.useState)({notify:!1,success:!1,message:!0});return s.jsx(n.Provider,{value:{showMenu:r,setShowMenu:i,notify:c,setNotify:l},children:e})}},2444:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraftMode",{enumerable:!0,get:function(){return o}});let s=r(5869),a=r(9565);class o{get isEnabled(){return this._provider.isEnabled}enable(){let e=s.staticGenerationAsyncStorage.getStore();return e&&(0,a.trackDynamicDataAccessed)(e,"draftMode().enable()"),this._provider.enable()}disable(){let e=s.staticGenerationAsyncStorage.getStore();return e&&(0,a.trackDynamicDataAccessed)(e,"draftMode().disable()"),this._provider.disable()}constructor(e){this._provider=e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1188:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cookies:function(){return p},draftMode:function(){return f},headers:function(){return u}});let s=r(8450),a=r(9042),o=r(4465),n=r(2934),i=r(2444),c=r(9565),l=r(5869),d=r(4580);function u(){let e="headers",t=l.staticGenerationAsyncStorage.getStore();if(t){if(t.forceStatic)return a.HeadersAdapter.seal(new Headers({}));(0,c.trackDynamicDataAccessed)(t,e)}return(0,d.getExpectedRequestStore)(e).headers}function p(){let e="cookies",t=l.staticGenerationAsyncStorage.getStore();if(t){if(t.forceStatic)return s.RequestCookiesAdapter.seal(new o.RequestCookies(new Headers({})));(0,c.trackDynamicDataAccessed)(t,e)}let r=(0,d.getExpectedRequestStore)(e),a=n.actionAsyncStorage.getStore();return(null==a?void 0:a.isAction)||(null==a?void 0:a.isAppRoute)?r.mutableCookies:r.cookies}function f(){let e=(0,d.getExpectedRequestStore)("draftMode");return new i.DraftMode(e.draftMode)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8063:e=>{"use strict";var t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,o={};function n(e){var t;let r=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&(e.expires||0===e.expires)&&`Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`,"maxAge"in e&&"number"==typeof e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`,"partitioned"in e&&e.partitioned&&"Partitioned","priority"in e&&e.priority&&`Priority=${e.priority}`].filter(Boolean),s=`${e.name}=${encodeURIComponent(null!=(t=e.value)?t:"")}`;return 0===r.length?s:`${s}; ${r.join("; ")}`}function i(e){let t=new Map;for(let r of e.split(/; */)){if(!r)continue;let e=r.indexOf("=");if(-1===e){t.set(r,"true");continue}let[s,a]=[r.slice(0,e),r.slice(e+1)];try{t.set(s,decodeURIComponent(null!=a?a:"true"))}catch{}}return t}function c(e){var t,r;if(!e)return;let[[s,a],...o]=i(e),{domain:n,expires:c,httponly:u,maxage:p,path:f,samesite:h,secure:y,partitioned:m,priority:g}=Object.fromEntries(o.map(([e,t])=>[e.toLowerCase(),t]));return function(e){let t={};for(let r in e)e[r]&&(t[r]=e[r]);return t}({name:s,value:decodeURIComponent(a),domain:n,...c&&{expires:new Date(c)},...u&&{httpOnly:!0},..."string"==typeof p&&{maxAge:Number(p)},path:f,...h&&{sameSite:l.includes(t=(t=h).toLowerCase())?t:void 0},...y&&{secure:!0},...g&&{priority:d.includes(r=(r=g).toLowerCase())?r:void 0},...m&&{partitioned:!0}})}((e,r)=>{for(var s in r)t(e,s,{get:r[s],enumerable:!0})})(o,{RequestCookies:()=>u,ResponseCookies:()=>p,parseCookie:()=>i,parseSetCookie:()=>c,stringifyCookie:()=>n}),e.exports=((e,o,n,i)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let n of s(o))a.call(e,n)||void 0===n||t(e,n,{get:()=>o[n],enumerable:!(i=r(o,n))||i.enumerable});return e})(t({},"__esModule",{value:!0}),o);var l=["strict","lax","none"],d=["low","medium","high"],u=class{constructor(e){this._parsed=new Map,this._headers=e;let t=e.get("cookie");if(t)for(let[e,r]of i(t))this._parsed.set(e,{name:e,value:r})}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed);if(!e.length)return r.map(([e,t])=>t);let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(([e])=>e===s).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,r]=1===e.length?[e[0].name,e[0].value]:e,s=this._parsed;return s.set(t,{name:t,value:r}),this._headers.set("cookie",Array.from(s).map(([e,t])=>n(t)).join("; ")),this}delete(e){let t=this._parsed,r=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>n(t)).join("; ")),r}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},p=class{constructor(e){var t,r,s;this._parsed=new Map,this._headers=e;let a=null!=(s=null!=(r=null==(t=e.getSetCookie)?void 0:t.call(e))?r:e.get("set-cookie"))?s:[];for(let e of Array.isArray(a)?a:function(e){if(!e)return[];var t,r,s,a,o,n=[],i=0;function c(){for(;i<e.length&&/\s/.test(e.charAt(i));)i+=1;return i<e.length}for(;i<e.length;){for(t=i,o=!1;c();)if(","===(r=e.charAt(i))){for(s=i,i+=1,c(),a=i;i<e.length&&"="!==(r=e.charAt(i))&&";"!==r&&","!==r;)i+=1;i<e.length&&"="===e.charAt(i)?(o=!0,i=a,n.push(e.substring(t,s)),t=i):i=s+1}else i+=1;(!o||i>=e.length)&&n.push(e.substring(t,e.length))}return n}(a)){let t=c(e);t&&this._parsed.set(t.name,t)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed.values());if(!e.length)return r;let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(e=>e.name===s)}has(e){return this._parsed.has(e)}set(...e){let[t,r,s]=1===e.length?[e[0].name,e[0].value,e[0]]:e,a=this._parsed;return a.set(t,function(e={name:"",value:""}){return"number"==typeof e.expires&&(e.expires=new Date(e.expires)),e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}({name:t,value:r,...s})),function(e,t){for(let[,r]of(t.delete("set-cookie"),e)){let e=n(r);t.append("set-cookie",e)}}(a,this._headers),this}delete(...e){let[t,r,s]="string"==typeof e[0]?[e[0]]:[e[0].name,e[0].path,e[0].domain];return this.set({name:t,path:r,domain:s,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(n).join("; ")}}},9042:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{HeadersAdapter:function(){return o},ReadonlyHeadersError:function(){return a}});let s=r(7901);class a extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new a}}class o extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,a){if("symbol"==typeof r)return s.ReflectAdapter.get(t,r,a);let o=r.toLowerCase(),n=Object.keys(e).find(e=>e.toLowerCase()===o);if(void 0!==n)return s.ReflectAdapter.get(t,n,a)},set(t,r,a,o){if("symbol"==typeof r)return s.ReflectAdapter.set(t,r,a,o);let n=r.toLowerCase(),i=Object.keys(e).find(e=>e.toLowerCase()===n);return s.ReflectAdapter.set(t,i??r,a,o)},has(t,r){if("symbol"==typeof r)return s.ReflectAdapter.has(t,r);let a=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===a);return void 0!==o&&s.ReflectAdapter.has(t,o)},deleteProperty(t,r){if("symbol"==typeof r)return s.ReflectAdapter.deleteProperty(t,r);let a=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===a);return void 0===o||s.ReflectAdapter.deleteProperty(t,o)}})}static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"append":case"delete":case"set":return a.callable;default:return s.ReflectAdapter.get(e,t,r)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new o(e)}append(e,t){let r=this.headers[e];"string"==typeof r?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){let t=this.headers[e];return void 0!==t?this.merge(t):null}has(e){return void 0!==this.headers[e]}set(e,t){this.headers[e]=t}forEach(e,t){for(let[r,s]of this.entries())e.call(t,s,r,this)}*entries(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase();yield t}}*values(){for(let e of Object.keys(this.headers)){let t=this.get(e);yield t}}[Symbol.iterator](){return this.entries()}}},7901:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let s=Reflect.get(e,t,r);return"function"==typeof s?s.bind(e):s}static set(e,t,r,s){return Reflect.set(e,t,r,s)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},8450:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{MutableRequestCookiesAdapter:function(){return u},ReadonlyRequestCookiesError:function(){return n},RequestCookiesAdapter:function(){return i},appendMutableCookies:function(){return d},getModifiedCookieValues:function(){return l}});let s=r(4465),a=r(7901),o=r(5869);class n extends Error{constructor(){super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options")}static callable(){throw new n}}class i{static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"clear":case"delete":case"set":return n.callable;default:return a.ReflectAdapter.get(e,t,r)}}})}}let c=Symbol.for("next.mutated.cookies");function l(e){let t=e[c];return t&&Array.isArray(t)&&0!==t.length?t:[]}function d(e,t){let r=l(t);if(0===r.length)return!1;let a=new s.ResponseCookies(e),o=a.getAll();for(let e of r)a.set(e);for(let e of o)a.set(e);return!0}class u{static wrap(e,t){let r=new s.ResponseCookies(new Headers);for(let t of e.getAll())r.set(t);let n=[],i=new Set,l=()=>{let e=o.staticGenerationAsyncStorage.getStore();if(e&&(e.pathWasRevalidated=!0),n=r.getAll().filter(e=>i.has(e.name)),t){let e=[];for(let t of n){let r=new s.ResponseCookies(new Headers);r.set(t),e.push(r.toString())}t(e)}};return new Proxy(r,{get(e,t,r){switch(t){case c:return n;case"delete":return function(...t){i.add("string"==typeof t[0]?t[0]:t[0].name);try{e.delete(...t)}finally{l()}};case"set":return function(...t){i.add("string"==typeof t[0]?t[0]:t[0].name);try{return e.set(...t)}finally{l()}};default:return a.ReflectAdapter.get(e,t,r)}}})}}},4465:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RequestCookies:function(){return s.RequestCookies},ResponseCookies:function(){return s.ResponseCookies},stringifyCookie:function(){return s.stringifyCookie}});let s=r(8063)},1078:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_0:()=>X,verifyPassword:()=>V});var s=r(7745);r(6461);let a=require("node:buffer"),o=e=>a.Buffer.from(e).toString("base64url"),n=require("node:crypto"),i=require("node:util");class c extends Error{static get code(){return"ERR_JOSE_GENERIC"}code="ERR_JOSE_GENERIC";constructor(e){super(e),this.name=this.constructor.name,Error.captureStackTrace?.(this,this.constructor)}}class l extends c{static get code(){return"ERR_JOSE_NOT_SUPPORTED"}code="ERR_JOSE_NOT_SUPPORTED"}class d extends c{static get code(){return"ERR_JWS_INVALID"}code="ERR_JWS_INVALID"}class u extends c{static get code(){return"ERR_JWT_INVALID"}code="ERR_JWT_INVALID"}Symbol.asyncIterator;let p=n.webcrypto,f=e=>i.types.isCryptoKey(e),h=e=>i.types.isKeyObject(e);function y(e,t,...r){if(r.length>2){let t=r.pop();e+=`one of type ${r.join(", ")}, or ${t}.`}else 2===r.length?e+=`one of type ${r[0]} or ${r[1]}.`:e+=`of type ${r[0]}.`;return null==t?e+=` Received ${t}`:"function"==typeof t&&t.name?e+=` Received function ${t.name}`:"object"==typeof t&&null!=t&&t.constructor?.name&&(e+=` Received an instance of ${t.constructor.name}`),e}let m=(e,...t)=>y("Key must be ",e,...t);function g(e,t,...r){return y(`Key for the ${e} algorithm must be `,t,...r)}let b=e=>h(e)||f(e),w=["KeyObject"];(globalThis.CryptoKey||p?.CryptoKey)&&w.push("CryptoKey"),new WeakMap;let S=e=>{switch(e){case"prime256v1":return"P-256";case"secp384r1":return"P-384";case"secp521r1":return"P-521";case"secp256k1":return"secp256k1";default:throw new l("Unsupported key curve for this operation")}},_=(e,t)=>{let r;if(f(e))r=n.KeyObject.from(e);else if(h(e))r=e;else throw TypeError(m(e,...w));if("secret"===r.type)throw TypeError('only "private" or "public" type keys can be used for this operation');switch(r.asymmetricKeyType){case"ed25519":case"ed448":return`Ed${r.asymmetricKeyType.slice(2)}`;case"x25519":case"x448":return`X${r.asymmetricKeyType.slice(1)}`;case"ec":{let e=r.asymmetricKeyDetails.namedCurve;if(t)return e;return S(e)}default:throw TypeError("Invalid asymmetric key type for this operation")}},x=(e,t)=>{let{modulusLength:r}=e.asymmetricKeyDetails;if("number"!=typeof r||r<2048)throw TypeError(`${t} requires key modulusLength to be 2048 bits or larger`)},v={padding:n.constants.RSA_PKCS1_PSS_PADDING,saltLength:n.constants.RSA_PSS_SALTLEN_DIGEST},P=new Map([["ES256","P-256"],["ES256K","secp256k1"],["ES384","P-384"],["ES512","P-521"]]);function A(e,t="algorithm.name"){return TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`)}function E(e,t){return e.name===t}function j(e){return parseInt(e.name.slice(4),10)}let k=(0,i.promisify)(n.sign),R=async(e,t,r)=>{let s=function(e,t,r){if(t instanceof Uint8Array){if(!e.startsWith("HS"))throw TypeError(m(t,...w));return(0,n.createSecretKey)(t)}if(t instanceof n.KeyObject)return t;if(f(t))return function(e,t,...r){switch(t){case"HS256":case"HS384":case"HS512":{if(!E(e.algorithm,"HMAC"))throw A("HMAC");let r=parseInt(t.slice(2),10);if(j(e.algorithm.hash)!==r)throw A(`SHA-${r}`,"algorithm.hash");break}case"RS256":case"RS384":case"RS512":{if(!E(e.algorithm,"RSASSA-PKCS1-v1_5"))throw A("RSASSA-PKCS1-v1_5");let r=parseInt(t.slice(2),10);if(j(e.algorithm.hash)!==r)throw A(`SHA-${r}`,"algorithm.hash");break}case"PS256":case"PS384":case"PS512":{if(!E(e.algorithm,"RSA-PSS"))throw A("RSA-PSS");let r=parseInt(t.slice(2),10);if(j(e.algorithm.hash)!==r)throw A(`SHA-${r}`,"algorithm.hash");break}case"EdDSA":if("Ed25519"!==e.algorithm.name&&"Ed448"!==e.algorithm.name)throw A("Ed25519 or Ed448");break;case"ES256":case"ES384":case"ES512":{if(!E(e.algorithm,"ECDSA"))throw A("ECDSA");let r=function(e){switch(e){case"ES256":return"P-256";case"ES384":return"P-384";case"ES512":return"P-521";default:throw Error("unreachable")}}(t);if(e.algorithm.namedCurve!==r)throw A(r,"algorithm.namedCurve");break}default:throw TypeError("CryptoKey does not support this operation")}(function(e,t){if(t.length&&!t.some(t=>e.usages.includes(t))){let e="CryptoKey does not support this operation, its usages must include ";if(t.length>2){let r=t.pop();e+=`one of ${t.join(", ")}, or ${r}.`}else 2===t.length?e+=`one of ${t[0]} or ${t[1]}.`:e+=`${t[0]}.`;throw TypeError(e)}})(e,r)}(t,e,r),n.KeyObject.from(t);throw TypeError(m(t,...w,"Uint8Array"))}(e,t,"sign");if(e.startsWith("HS")){let t=n.createHmac(function(e){switch(e){case"HS256":return"sha256";case"HS384":return"sha384";case"HS512":return"sha512";default:throw new l(`alg ${e} is not supported either by JOSE or your javascript runtime`)}}(e),s);return t.update(r),t.digest()}return k(function(e){switch(e){case"PS256":case"RS256":case"ES256":case"ES256K":return"sha256";case"PS384":case"RS384":case"ES384":return"sha384";case"PS512":case"RS512":case"ES512":return"sha512";case"EdDSA":return;default:throw new l(`alg ${e} is not supported either by JOSE or your javascript runtime`)}}(e),r,function(e,t){switch(e){case"EdDSA":if(!["ed25519","ed448"].includes(t.asymmetricKeyType))throw TypeError("Invalid key for this operation, its asymmetricKeyType must be ed25519 or ed448");return t;case"RS256":case"RS384":case"RS512":if("rsa"!==t.asymmetricKeyType)throw TypeError("Invalid key for this operation, its asymmetricKeyType must be rsa");return x(t,e),t;case"PS256":case"PS384":case"PS512":if("rsa-pss"===t.asymmetricKeyType){let{hashAlgorithm:r,mgf1HashAlgorithm:s,saltLength:a}=t.asymmetricKeyDetails,o=parseInt(e.slice(-3),10);if(void 0!==r&&(r!==`sha${o}`||s!==r))throw TypeError(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${e}`);if(void 0!==a&&a>o>>3)throw TypeError(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${e}`)}else if("rsa"!==t.asymmetricKeyType)throw TypeError("Invalid key for this operation, its asymmetricKeyType must be rsa or rsa-pss");return x(t,e),{key:t,...v};case"ES256":case"ES256K":case"ES384":case"ES512":{if("ec"!==t.asymmetricKeyType)throw TypeError("Invalid key for this operation, its asymmetricKeyType must be ec");let r=_(t),s=P.get(e);if(r!==s)throw TypeError(`Invalid key curve for the algorithm, its curve must be ${s}, got ${r}`);return{dsaEncoding:"ieee-p1363",key:t}}default:throw new l(`alg ${e} is not supported either by JOSE or your javascript runtime`)}}(e,s))},C=(...e)=>{let t;let r=e.filter(Boolean);if(0===r.length||1===r.length)return!0;for(let e of r){let r=Object.keys(e);if(!t||0===t.size){t=new Set(r);continue}for(let e of r){if(t.has(e))return!1;t.add(e)}}return!0},T=new TextEncoder,O=new TextDecoder,H=e=>e?.[Symbol.toStringTag],$=(e,t)=>{if(!(t instanceof Uint8Array)){if(!b(t))throw TypeError(g(e,t,...w,"Uint8Array"));if("secret"!==t.type)throw TypeError(`${H(t)} instances for symmetric algorithms must be of type "secret"`)}},D=(e,t,r)=>{if(!b(t))throw TypeError(g(e,t,...w));if("secret"===t.type)throw TypeError(`${H(t)} instances for asymmetric algorithms must not be of type "secret"`);if("sign"===r&&"public"===t.type)throw TypeError(`${H(t)} instances for asymmetric algorithm signing must be of type "private"`);if("decrypt"===r&&"public"===t.type)throw TypeError(`${H(t)} instances for asymmetric algorithm decryption must be of type "private"`);if(t.algorithm&&"verify"===r&&"private"===t.type)throw TypeError(`${H(t)} instances for asymmetric algorithm verifying must be of type "public"`);if(t.algorithm&&"encrypt"===r&&"private"===t.type)throw TypeError(`${H(t)} instances for asymmetric algorithm encryption must be of type "public"`)},M=(e,t,r)=>{e.startsWith("HS")||"dir"===e||e.startsWith("PBES2")||/^A\d{3}(?:GCM)?KW$/.test(e)?$(e,t):D(e,t,r)},I=function(e,t,r,s,a){let o;if(void 0!==a.crit&&s?.crit===void 0)throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');if(!s||void 0===s.crit)return new Set;if(!Array.isArray(s.crit)||0===s.crit.length||s.crit.some(e=>"string"!=typeof e||0===e.length))throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');for(let n of(o=void 0!==r?new Map([...Object.entries(r),...t.entries()]):t,s.crit)){if(!o.has(n))throw new l(`Extension Header Parameter "${n}" is not recognized`);if(void 0===a[n])throw new e(`Extension Header Parameter "${n}" is missing`);if(o.get(n)&&void 0===s[n])throw new e(`Extension Header Parameter "${n}" MUST be integrity protected`)}return new Set(s.crit)};class N{_payload;_protectedHeader;_unprotectedHeader;constructor(e){if(!(e instanceof Uint8Array))throw TypeError("payload must be an instance of Uint8Array");this._payload=e}setProtectedHeader(e){if(this._protectedHeader)throw TypeError("setProtectedHeader can only be called once");return this._protectedHeader=e,this}setUnprotectedHeader(e){if(this._unprotectedHeader)throw TypeError("setUnprotectedHeader can only be called once");return this._unprotectedHeader=e,this}async sign(e,t){let r;if(!this._protectedHeader&&!this._unprotectedHeader)throw new d("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");if(!C(this._protectedHeader,this._unprotectedHeader))throw new d("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");let s={...this._protectedHeader,...this._unprotectedHeader},a=I(d,new Map([["b64",!0]]),t?.crit,this._protectedHeader,s),n=!0;if(a.has("b64")&&"boolean"!=typeof(n=this._protectedHeader.b64))throw new d('The "b64" (base64url-encode payload) Header Parameter must be a boolean');let{alg:i}=s;if("string"!=typeof i||!i)throw new d('JWS "alg" (Algorithm) Header Parameter missing or invalid');M(i,e,"sign");let c=this._payload;n&&(c=T.encode(o(c)));let l=function(...e){let t=new Uint8Array(e.reduce((e,{length:t})=>e+t,0)),r=0;for(let s of e)t.set(s,r),r+=s.length;return t}(r=this._protectedHeader?T.encode(o(JSON.stringify(this._protectedHeader))):T.encode(""),T.encode("."),c),u={signature:o(await R(i,e,l)),payload:""};return n&&(u.payload=O.decode(c)),this._unprotectedHeader&&(u.header=this._unprotectedHeader),this._protectedHeader&&(u.protected=O.decode(r)),u}}class K{_flattened;constructor(e){this._flattened=new N(e)}setProtectedHeader(e){return this._flattened.setProtectedHeader(e),this}async sign(e,t){let r=await this._flattened.sign(e,t);if(void 0===r.payload)throw TypeError("use the flattened module for creating JWS with b64: false");return`${r.protected}.${r.payload}.${r.signature}`}}let L=e=>Math.floor(e.getTime()/1e3),q=/^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i,J=e=>{let t;let r=q.exec(e);if(!r||r[4]&&r[1])throw TypeError("Invalid time period format");let s=parseFloat(r[2]);switch(r[3].toLowerCase()){case"sec":case"secs":case"second":case"seconds":case"s":t=Math.round(s);break;case"minute":case"minutes":case"min":case"mins":case"m":t=Math.round(60*s);break;case"hour":case"hours":case"hr":case"hrs":case"h":t=Math.round(3600*s);break;case"day":case"days":case"d":t=Math.round(86400*s);break;case"week":case"weeks":case"w":t=Math.round(604800*s);break;default:t=Math.round(31557600*s)}return"-"===r[1]||"ago"===r[4]?-t:t};function U(e,t){if(!Number.isFinite(t))throw TypeError(`Invalid ${e} input`);return t}class W{_payload;constructor(e={}){if(!function(e){if(!("object"==typeof e&&null!==e)||"[object Object]"!==Object.prototype.toString.call(e))return!1;if(null===Object.getPrototypeOf(e))return!0;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw TypeError("JWT Claims Set MUST be an object");this._payload=e}setIssuer(e){return this._payload={...this._payload,iss:e},this}setSubject(e){return this._payload={...this._payload,sub:e},this}setAudience(e){return this._payload={...this._payload,aud:e},this}setJti(e){return this._payload={...this._payload,jti:e},this}setNotBefore(e){return"number"==typeof e?this._payload={...this._payload,nbf:U("setNotBefore",e)}:e instanceof Date?this._payload={...this._payload,nbf:U("setNotBefore",L(e))}:this._payload={...this._payload,nbf:L(new Date)+J(e)},this}setExpirationTime(e){return"number"==typeof e?this._payload={...this._payload,exp:U("setExpirationTime",e)}:e instanceof Date?this._payload={...this._payload,exp:U("setExpirationTime",L(e))}:this._payload={...this._payload,exp:L(new Date)+J(e)},this}setIssuedAt(e){return void 0===e?this._payload={...this._payload,iat:L(new Date)}:e instanceof Date?this._payload={...this._payload,iat:U("setIssuedAt",L(e))}:"string"==typeof e?this._payload={...this._payload,iat:U("setIssuedAt",L(new Date)+J(e))}:this._payload={...this._payload,iat:U("setIssuedAt",e)},this}}class G extends W{_protectedHeader;setProtectedHeader(e){return this._protectedHeader=e,this}async sign(e,t){let r=new K(T.encode(JSON.stringify(this._payload)));if(r.setProtectedHeader(this._protectedHeader),Array.isArray(this._protectedHeader?.crit)&&this._protectedHeader.crit.includes("b64")&&!1===this._protectedHeader.b64)throw new u("JWTs MUST NOT use unencoded payload");return r.sign(e,t)}}var z=r(1188),B=r(5723);let V=(0,s.j)("be2ac82a702654b020f1ff210c781383d19d16ba",X);async function X(e){let{password:t}=e;try{if(t!==process.env.LOGIN_PASSWORD)return JSON.stringify({message:"Incorrect passowrd",success:!1});let e=await new G({user:"authenticated"}).setProtectedHeader({alg:"HS256"}).sign(new TextEncoder().encode(process.env.JWT_SECRET));return(0,z.cookies)().set("dashboard-token",e,{secure:!0,path:"/",maxAge:5184e3}),JSON.parse(JSON.stringify({message:"Login successful",success:!0}))}catch(e){return JSON.parse(JSON.stringify({message:e.message,success:!1}))}}(0,B.h)([V]),(0,s.j)("7faf46641363ff9310ab18ce55737d4f7f6c48f2",V)},3666:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(9510),a=r(7114);r(9723);var o=r(1577),n=r(1175);function i({children:e}){return s.jsx("html",{lang:"en",children:s.jsx(n.X,{children:(0,s.jsxs)("body",{children:[s.jsx(a.Z,{color:"#000000"}),s.jsx(o.Z,{}),e]})})})}},8466:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(8570).createProxy)(String.raw`/home/shah23/Desktop/explore-Learning-Academy webapp/src/app/(admin)/auth/signin/page.jsx#default`)},1577:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(8570).createProxy)(String.raw`/home/shah23/Desktop/explore-Learning-Academy webapp/src/components/shared/Notify.jsx#default`)},7114:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(8570).createProxy)(String.raw`/home/shah23/Desktop/explore-Learning-Academy webapp/src/components/shared/TopLoader.jsx#default`)},1175:(e,t,r)=>{"use strict";r.d(t,{X:()=>a});var s=r(8570);(0,s.createProxy)(String.raw`/home/shah23/Desktop/explore-Learning-Academy webapp/src/context/RootContext.jsx#RootContext`);let a=(0,s.createProxy)(String.raw`/home/shah23/Desktop/explore-Learning-Academy webapp/src/context/RootContext.jsx#RootContextProvider`)},9723:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[819,666,768],()=>r(8389));module.exports=s})();