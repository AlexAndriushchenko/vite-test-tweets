import{r as O,g as Ye,s as E,j as b,t as le,L as Se}from"./index-a45f7633.js";var Ze={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Oe(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return Ze[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function ue(e){var t=Oe(e);return"".concat(t.value).concat(t.unit)}var Re=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var s=o.sheet,i=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return s&&s.insertRule(i,0),r},q=globalThis&&globalThis.__assign||function(){return q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},q.apply(this,arguments)},et=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},tt=Re("DotLoader","100% {transform: rotate(360deg)}","rotate"),nt=Re("DotLoader","0%, 100% {transform: scale(0)} 50% {transform: scale(1.0)}","bounce");function rt(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,o=r===void 0?"#000000":r,s=e.speedMultiplier,i=s===void 0?1:s,l=e.cssOverride,d=l===void 0?{}:l,c=e.size,u=c===void 0?60:c,p=et(e,["loading","color","speedMultiplier","cssOverride","size"]),w=q({display:"inherit",position:"relative",width:ue(u),height:ue(u),animationFillMode:"forwards",animation:"".concat(tt," ").concat(2/i,"s 0s infinite linear")},d),y=function(f){var h=Oe(u),S=h.value,g=h.unit;return{position:"absolute",top:f%2?"0":"auto",bottom:f%2?"auto":"0",height:"".concat(S/2).concat(g),width:"".concat(S/2).concat(g),backgroundColor:o,borderRadius:"100%",animationFillMode:"forwards",animation:"".concat(nt," ").concat(2/i,"s ").concat(f===2?"1s":"0s"," infinite linear")}};return n?O.createElement("span",q({style:w},p),O.createElement("span",{style:y(1)}),O.createElement("span",{style:y(2)})):null}function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:ot}=Object.prototype,{getPrototypeOf:oe}=Object,z=(e=>t=>{const n=ot.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>z(t)===e),W=e=>t=>typeof t===e,{isArray:_}=Array,B=W("undefined");function st(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=A("ArrayBuffer");function it(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const at=W("string"),R=W("function"),Pe=W("number"),J=e=>e!==null&&typeof e=="object",ct=e=>e===!0||e===!1,D=e=>{if(z(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lt=A("Date"),ut=A("File"),ft=A("Blob"),dt=A("FileList"),pt=e=>J(e)&&R(e.pipe),ht=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=z(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},mt=A("URLSearchParams"),yt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Ne(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Ce=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fe=e=>!B(e)&&e!==Ce;function ee(){const{caseless:e}=Fe(this)&&this||{},t={},n=(r,o)=>{const s=e&&Ne(t,o)||o;D(t[s])&&D(r)?t[s]=ee(t[s],r):D(r)?t[s]=ee({},r):_(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&k(arguments[r],n);return t}const bt=(e,t,n,{allOwnKeys:r}={})=>(k(t,(o,s)=>{n&&R(o)?e[s]=Te(o,n):e[s]=o},{allOwnKeys:r}),e),wt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},gt=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Et=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},St=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!Pe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ot=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),Rt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Tt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},At=A("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Nt=A("RegExp"),je=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},Ct=e=>{je(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ft=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return _(e)?r(e):r(String(e).split(t)),n},jt=()=>{},_t=(e,t)=>(e=+e,Number.isFinite(e)?e:t),X="abcdefghijklmnopqrstuvwxyz",de="0123456789",_e={DIGIT:de,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+de},Lt=(e=16,t=_e.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const kt=e=>{const t=new Array(10),n=(r,o)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=_(r)?[]:{};return k(r,(i,l)=>{const d=n(i,o+1);!B(d)&&(s[l]=d)}),t[o]=void 0,s}}return r};return n(e,0)},vt=A("AsyncFunction"),Ut=e=>e&&(J(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:_,isArrayBuffer:Ae,isBuffer:st,isFormData:ht,isArrayBufferView:it,isString:at,isNumber:Pe,isBoolean:ct,isObject:J,isPlainObject:D,isUndefined:B,isDate:lt,isFile:ut,isBlob:ft,isRegExp:Nt,isFunction:R,isStream:pt,isURLSearchParams:mt,isTypedArray:Ot,isFileList:dt,forEach:k,merge:ee,extend:bt,trim:yt,stripBOM:wt,inherits:xt,toFlatObject:gt,kindOf:z,kindOfTest:A,endsWith:Et,toArray:St,forEachEntry:Rt,matchAll:Tt,isHTMLForm:At,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:je,freezeMethods:Ct,toObjectSet:Ft,toCamelCase:Pt,noop:jt,toFiniteNumber:_t,findKey:Ne,global:Ce,isContextDefined:Fe,ALPHABET:_e,generateString:Lt,isSpecCompliantForm:Bt,toJSONObject:kt,isAsyncFn:vt,isThenable:Ut};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=m.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(m,Be);Object.defineProperty(Le,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(Le);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Dt=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function ke(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(o,s){return o=ke(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function It(e){return a.isArray(e)&&!e.some(te)}const Mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,S){return!a.isUndefined(S[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,S){let g=f;if(f&&!S&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&It(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(g=a.toArray(f)))return h=ke(h),g.forEach(function(U,Qe){!(a.isUndefined(U)||U===null)&&t.append(i===!0?pe([h],Qe,s):i===null?h:h+"[]",c(U))}),!1}return te(f)?!0:(t.append(pe(S,h,s),c(f)),!1)}const p=[],w=Object.assign(Mt,{defaultVisitor:u,convertValue:c,isVisitable:te});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(g,F){(!(a.isUndefined(g)||g===null)&&o.call(t,g,a.isString(F)?F.trim():F,h,w))===!0&&y(g,h?h.concat(F):[F])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&V(e,this,t)}const ve=se.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function $t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ue(e,t,n){if(!t)return e;const r=n&&n.encode||$t,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class qt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=qt,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ht=typeof URLSearchParams<"u"?URLSearchParams:se,zt=typeof FormData<"u"?FormData:null,Wt=typeof Blob<"u"?Blob:null,Jt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Vt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),T={isBrowser:!0,classes:{URLSearchParams:Ht,FormData:zt,Blob:Wt},isStandardBrowserEnv:Jt,isStandardBrowserWebWorkerEnv:Vt,protocols:["http","https","file","blob","url","data"]};function Kt(e,t){return V(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Gt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Xt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ie(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Xt(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Gt(r),o,n,0)}),n}return null}const Qt={"Content-Type":void 0};function Yt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const K={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Ie(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Kt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return V(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Yt(t)):t}],transformResponse:[function(t){const n=this.transitional||K.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){K.headers[t]={}});a.forEach(["post","put","patch"],function(t){K.headers[t]=a.merge(Qt)});const ie=K,Zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),en=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Zt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function tn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const nn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Q(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function rn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function on(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class G{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,d,c){const u=L(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||d]=I(l))}const i=(l,d)=>a.forEach(l,(c,u)=>s(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!nn(t)?i(en(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return tn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Q(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=L(i),i){const l=a.findKey(r,i);l&&(!n||Q(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||Q(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=I(o),delete n[s];return}const l=t?rn(s):String(s).trim();l!==s&&delete n[s],n[l]=I(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=L(i);r[l]||(on(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}G.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(G.prototype);a.freezeMethods(G);const P=G;function Y(e,t){const n=this||ie,r=t||n,o=P.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Me(e){return!!(e&&e.__CANCEL__)}function v(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(v,m,{__CANCEL__:!0});function sn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const an=T.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ln(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function $e(e,t){return e&&!cn(t)?ln(e,t):t}const un=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function fn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[s];i||(i=c),n[o]=d,r[o]=c;let p=s,w=0;for(;p!==o;)w+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(w*1e3/y):void 0}}function be(e,t){let n=0;const r=dn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,d=r(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-s)/d:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const pn=typeof XMLHttpRequest<"u",hn=pn&&function(e){return new Promise(function(n,r){let o=e.data;const s=P.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(T.isStandardBrowserEnv||T.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const u=$e(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ue(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=P.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};sn(function(g){n(g),d()},function(g){r(g),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||De;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},T.isStandardBrowserEnv){const y=(e.withCredentials||un(u))&&e.xsrfCookieName&&an.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new v(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const w=fn(u);if(w&&T.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},M={http:Dt,xhr:hn};a.forEach(M,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const mn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?M[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(M,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:M};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new v(null,e)}function we(e){return Z(e),e.headers=P.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),mn.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return Z(e),r.data=Y.call(e,e.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return Me(r)||(Z(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const xe=e=>e instanceof P?e.toJSON():e;function j(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>o(xe(c),xe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||o,w=p(e[u],t[u],u);a.isUndefined(w)&&p!==l||(n[u]=w)}),n}const qe="1.4.0",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};ae.transitional=function(t,n,r){function o(s,i){return"[Axios v"+qe+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function yn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],d=l===void 0||i(l,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const ne={assertOptions:yn,validators:ae},N=ne.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=j(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:ne.assertOptions(o,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=P.concat(i,s);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,w;if(!d){const f=[we.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),w=f.length,u=Promise.resolve(n);p<w;)u=u.then(f[p++],f[p++]);return u}w=l.length;let y=n;for(p=0;p<w;){const f=l[p++],h=l[p++];try{y=f(y)}catch(S){h.call(this,S);break}}try{u=we.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,w=c.length;p<w;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=j(this.defaults,t);const n=$e(t.baseURL,t.url);return Ue(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(j(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(j(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const $=H;class ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new v(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ce(function(o){t=o}),cancel:t}}}const bn=ce;function wn(e){return function(n){return e.apply(null,n)}}function xn(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const gn=re;function He(e){const t=new $(e),n=Te($.prototype.request,t);return a.extend(n,$.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return He(j(e,o))},n}const x=He(ie);x.Axios=$;x.CanceledError=v;x.CancelToken=bn;x.isCancel=Me;x.VERSION=qe;x.toFormData=V;x.AxiosError=m;x.Cancel=x.CanceledError;x.all=function(t){return Promise.all(t)};x.spread=wn;x.isAxiosError=xn;x.mergeConfig=j;x.AxiosHeaders=P;x.formToJSON=e=>Ie(a.isHTMLForm(e)?new FormData(e):e);x.HttpStatusCode=gn;x.default=x;const ze=x;ze.defaults.baseURL="https://6457897e0c15cb14820ae629.mockapi.io";const En=async()=>{try{return(await ze.get("/users")).data}catch(e){return e.message}},Sn={fetchUsers:En},On=3;var We={exports:{}},Rn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Tn=Rn,An=Tn;function Je(){}function Ve(){}Ve.resetWarningCache=Je;var Pn=function(){function e(r,o,s,i,l,d){if(d!==An){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ve,resetWarningCache:Je};return n.PropTypes=n,n};We.exports=Pn();var Nn=We.exports;const C=Ye(Nn),Cn="/vite-test-tweets/assets/logo-98548899.svg",Fn=E.div`
  position: relative;
  z-index: 100;
  margin-top: -18px;
  margin-bottom: 26px;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 380px;
    height: 8px;
    background: ${({theme:e})=>e.colors.accent};
    box-shadow: ${({theme:e})=>e.boxShadow.avatarLine};
  }
`,jn=E.div`
  position: relative;
  z-index: 100;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 86px;
  background: ${({theme:e})=>e.colors.accent};
  box-shadow: ${({theme:e})=>e.boxShadow.avatar};
`,_n=E.div`
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.cardBackground};
`,Ke=({name:e,avatar:t})=>b.jsx(Fn,{children:b.jsx(jn,{children:b.jsx(_n,{children:b.jsx("img",{src:t,alt:e,width:"62px",height:"62px"})})})});Ke.propTypes={name:C.string.isRequired,avatar:C.string.isRequired};const Ln="/vite-test-tweets/assets/background-9f4b25d6.png",Bn=E.div`
  position: relative;
  margin: 0 auto;
  width: 380px;
  padding: 28px 36px 36px 36px;
  text-align: center;
  text-transform: uppercase;
  background: ${({theme:e})=>e.colors.cardBackground};
  box-shadow: ${({theme:e})=>e.boxShadow.card};
  border-radius: 20px;
`,kn=E.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`,vn=E.div`
  height: 168px;
  background-image: url(${Ln});
  background-repeat: no-repeat;
  background-size: contain;
`,Ee=E.p`
  line-height: 1.2;

  margin-bottom: 16px;
  font-size: ${le.fontSizes.m};
  text-align: center;
  text-transform: uppercase;

  color: ${le.colors.accent};

  :not(:last-of-type) {
    margin-bottom: 16px;
  }

  :last-of-type {
    margin-bottom: 26px;
  }
`,Un=E.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 14px 28px;
  min-width: 196px;
  cursor: pointer;
  font-family: inherit;
  font-size: ${({theme:e})=>e.fontSizes.s};
  font-weight: ${({theme:e})=>e.fontWeight.semiBold};
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.mainText};
  border: 1px solid
    ${({theme:e,name:t})=>t==="Follow"?e.colors.accent:e.colors.secondaryAccent};
  border-radius: 10.3108px;
  background-color: ${({theme:e,name:t})=>t==="Follow"?e.colors.accent:e.colors.secondaryAccent};
  box-shadow: ${({theme:e})=>e.boxShadow.button};
`,Ge=({name:e,avatar:t,tweets:n,initialFollowers:r})=>{const[o,s]=O.useState(r);O.useEffect(()=>{const u=localStorage.getItem(`${e}Followers`);u&&s(parseInt(u))},[e]),O.useEffect(()=>{localStorage.setItem(`${e}Followers`,o.toString())},[o,e]);const i=u=>new Intl.NumberFormat("en-US").format(u),l=u=>u===r?"Follow":"Following",d=()=>{s(o===r?u=>u+1:u=>u-1)},c=l(o);return b.jsxs(Bn,{children:[b.jsx(vn,{children:b.jsx(kn,{src:Cn,alt:"Logo",width:"76px",height:"22px"})}),b.jsx(Ke,{name:e,avatar:t}),b.jsxs(Ee,{children:[" ",n," tweets"]}),b.jsxs(Ee,{children:[i(o)," Followers"]}),b.jsx(Un,{type:"button",onClick:d,name:c,children:c})]})};Ge.propTypes={name:C.string.isRequired,avatar:C.string.isRequired,tweets:C.number.isRequired,initialFollowers:C.number.isRequired};const Dn=E.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 15px;
  margin-bottom: 15px;
`,Xe=({displayedUsers:e})=>b.jsx(Dn,{children:e&&e.map(({id:t,user:n,avatar:r,tweets:o,followers:s})=>b.jsx("li",{children:b.jsx(Ge,{name:n,avatar:r,tweets:o,initialFollowers:s})},t))});Xe.propTypes={displayedUsers:C.array.isRequired};const In=E(Se)`
  display: inline-block;
  padding: 8px 16px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 700;
`,Mn=({to:e,children:t})=>b.jsx(In,{to:e,children:t});E(Se)`
  display: block;
  min-width: 60px;
  max-width: 140px;
  padding: 4px;
  font-weight: 500;
  border-radius: 4px;
  margin-bottom: 16px;
  text-decoration: none;
  color: black;

  &:hover:not(.active),
  &:focus:not(.active) {
    color: pink;
  }
`;const $n=E.div`
  margin-top: 15px;
`,qn=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`,Hn=E.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 14px 28px;
  min-width: 196px;
  cursor: pointer;
  font-family: inherit;
  font-size: ${({theme:e})=>e.fontSizes.s};
  font-weight: ${({theme:e})=>e.fontWeight.semiBold};
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.mainText};
  border: 1px solid ${({theme:e})=>e.colors.secondaryAccent};
  border-radius: 10.3108px;
  background-color: ${({theme:e})=>e.colors.secondaryAccent};
  box-shadow: ${({theme:e})=>e.boxShadow.button};
`,Wn=()=>{const[e,t]=O.useState([]),[n,r]=O.useState(!1),[o,s]=O.useState(0),[i,l]=O.useState([]);O.useEffect(()=>{r(!0),c();async function c(){try{const u=await Sn.fetchUsers();t(u)}catch(u){console.log(u.message)}finally{r(!1)}}},[]),O.useEffect(()=>{l(e.slice(0,(o+1)*On))},[e,o]);const d=()=>{s(c=>c+1),setTimeout(()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},100)};return b.jsxs($n,{children:[b.jsx(Mn,{to:"/",children:"Back"}),n&&b.jsx(rt,{size:80,color:"#00BFFF",loading:n,css:"margin-top: 20px;"}),b.jsx(Xe,{displayedUsers:i}),b.jsx(qn,{children:i.length<e.length&&b.jsx(Hn,{onClick:d,children:"Load more"})})]})};export{Wn as default};
