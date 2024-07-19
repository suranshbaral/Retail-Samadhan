function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as er,g as tr}from"./__federation_shared_react-BChr2Uhh.js";import{r as nr}from"./__federation_shared_react-dom-9lRLKTWe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const ar="modulepreload",rr=function(e){return"/"+e},Qt={},ir=function(t,n,a){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");r=Promise.all(n.map(o=>{if(o=rr(o),o in Qt)return;Qt[o]=!0;const s=o.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!a)for(let d=i.length-1;d>=0;d--){const m=i[d];if(m.href===o&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const f=document.createElement("link");if(f.rel=s?"stylesheet":ar,s||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),s)return new Promise((d,m)=>{f.addEventListener("load",d),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},en="[0-9A-Za-z-]+",Tt=`(?:\\+(${en}(?:\\.${en})*))`,be="0|[1-9]\\d*",Be="[0-9]+",qn="\\d*[a-zA-Z-][a-zA-Z0-9-]*",tn=`(?:${Be}|${qn})`,or=`(?:-?(${tn}(?:\\.${tn})*))`,nn=`(?:${be}|${qn})`,Kn=`(?:-(${nn}(?:\\.${nn})*))`,ct=`${be}|x|X|\\*`,de=`[v=\\s]*(${ct})(?:\\.(${ct})(?:\\.(${ct})(?:${Kn})?${Tt}?)?)?`,sr=`^\\s*(${de})\\s+-\\s+(${de})\\s*$`,lr=`(${Be})\\.(${Be})\\.(${Be})`,cr=`[v=\\s]*${lr}${or}?${Tt}?`,Lt="((?:<|>)?=?)",fr=`(\\s*)${Lt}\\s*(${cr}|${de})`,Jn="(?:~>?)",ur=`(\\s*)${Jn}\\s+`,Zn="(?:\\^)",dr=`(\\s*)${Zn}\\s+`,mr="(<|>)?=?\\s*\\*",pr=`^${Zn}${de}$`,hr=`(${be})\\.(${be})\\.(${be})`,vr=`v?${hr}${Kn}?${Tt}?`,gr=`^${Jn}${de}$`,br=`^${Lt}\\s*${de}$`,yr=`^${Lt}\\s*(${vr})$|^$`,xr="^\\s*>=\\s*0.0.0\\s*$";function z(e){return new RegExp(e)}function _(e){return!e||e.toLowerCase()==="x"||e==="*"}function Qn(...e){return t=>e.reduce((n,a)=>a(n),t)}function an(e){return e.match(z(yr))}function rn(e,t,n,a){const r=`${e}.${t}.${n}`;return a?`${r}-${a}`:r}function wr(e){return e.replace(z(sr),(t,n,a,r,i,o,s,c,u,f,d,m)=>(_(a)?n="":_(r)?n=`>=${a}.0.0`:_(i)?n=`>=${a}.${r}.0`:n=`>=${n}`,_(u)?c="":_(f)?c=`<${+u+1}.0.0-0`:_(d)?c=`<${u}.${+f+1}.0-0`:m?c=`<=${u}.${f}.${d}-${m}`:c=`<=${c}`,`${n} ${c}`.trim()))}function kr(e){return e.replace(z(fr),"$1$2$3")}function jr(e){return e.replace(z(ur),"$1~")}function Nr(e){return e.replace(z(dr),"$1^")}function Pr(e){return e.trim().split(/\s+/).map(t=>t.replace(z(pr),(n,a,r,i,o)=>_(a)?"":_(r)?`>=${a}.0.0 <${+a+1}.0.0-0`:_(i)?a==="0"?`>=${a}.${r}.0 <${a}.${+r+1}.0-0`:`>=${a}.${r}.0 <${+a+1}.0.0-0`:o?a==="0"?r==="0"?`>=${a}.${r}.${i}-${o} <${a}.${r}.${+i+1}-0`:`>=${a}.${r}.${i}-${o} <${a}.${+r+1}.0-0`:`>=${a}.${r}.${i}-${o} <${+a+1}.0.0-0`:a==="0"?r==="0"?`>=${a}.${r}.${i} <${a}.${r}.${+i+1}-0`:`>=${a}.${r}.${i} <${a}.${+r+1}.0-0`:`>=${a}.${r}.${i} <${+a+1}.0.0-0`)).join(" ")}function Sr(e){return e.trim().split(/\s+/).map(t=>t.replace(z(gr),(n,a,r,i,o)=>_(a)?"":_(r)?`>=${a}.0.0 <${+a+1}.0.0-0`:_(i)?`>=${a}.${r}.0 <${a}.${+r+1}.0-0`:o?`>=${a}.${r}.${i}-${o} <${a}.${+r+1}.0-0`:`>=${a}.${r}.${i} <${a}.${+r+1}.0-0`)).join(" ")}function Er(e){return e.split(/\s+/).map(t=>t.trim().replace(z(br),(n,a,r,i,o,s)=>{const c=_(r),u=c||_(i),f=u||_(o);return a==="="&&f&&(a=""),s="",c?a===">"||a==="<"?"<0.0.0-0":"*":a&&f?(u&&(i=0),o=0,a===">"?(a=">=",u?(r=+r+1,i=0,o=0):(i=+i+1,o=0)):a==="<="&&(a="<",u?r=+r+1:i=+i+1),a==="<"&&(s="-0"),`${a+r}.${i}.${o}${s}`):u?`>=${r}.0.0${s} <${+r+1}.0.0-0`:f?`>=${r}.${i}.0${s} <${r}.${+i+1}.0-0`:n})).join(" ")}function Cr(e){return e.trim().replace(z(mr),"")}function Or(e){return e.trim().replace(z(xr),"")}function Ye(e,t){return e=+e||e,t=+t||t,e>t?1:e===t?0:-1}function $r(e,t){const{preRelease:n}=e,{preRelease:a}=t;if(n===void 0&&a)return 1;if(n&&a===void 0)return-1;if(n===void 0&&a===void 0)return 0;for(let r=0,i=n.length;r<=i;r++){const o=n[r],s=a[r];if(o!==s)return o===void 0&&s===void 0?0:o?s?Ye(o,s):-1:1}return 0}function _e(e,t){return Ye(e.major,t.major)||Ye(e.minor,t.minor)||Ye(e.patch,t.patch)||$r(e,t)}function ft(e,t){return e.version===t.version}function Ar(e,t){switch(e.operator){case"":case"=":return ft(e,t);case">":return _e(e,t)<0;case">=":return ft(e,t)||_e(e,t)<0;case"<":return _e(e,t)>0;case"<=":return ft(e,t)||_e(e,t)>0;case void 0:return!0;default:return!1}}function _r(e){return Qn(Pr,Sr,Er,Cr)(e)}function Ir(e){return Qn(wr,kr,jr,Nr)(e.trim()).split(/\s+/).join(" ")}function Rr(e,t){if(!e)return!1;const r=Ir(t).split(" ").map(m=>_r(m)).join(" ").split(/\s+/).map(m=>Or(m)),i=an(e);if(!i)return!1;const[,o,,s,c,u,f]=i,d={operator:o,version:rn(s,c,u,f),major:s,minor:c,patch:u,preRelease:f?.split(".")};for(const m of r){const g=an(m);if(!g)return!1;const[,x,,y,p,k,w]=g,j={operator:x,version:rn(y,p,k,w),major:y,minor:p,patch:k,preRelease:w?.split(".")};if(!Ar(j,d))return!1}return!0}const Ge={react:{get:()=>()=>on(new URL("__federation_shared_react-BChr2Uhh.js",import.meta.url).href),import:!0},"react-dom":{get:()=>()=>on(new URL("__federation_shared_react-dom-9lRLKTWe.js",import.meta.url).href),import:!0}},Xe=Object.create(null);async function B(e,t="default"){return Xe[e]?new Promise(n=>n(Xe[e])):await Tr(e,t)||Lr(e)}async function on(e){return ir(()=>import(e),__vite__mapDeps([]))}async function Tr(e,t){let n=null;if(globalThis?.__federation_shared__?.[t]?.[e]){const a=globalThis.__federation_shared__[t][e],r=Object.keys(a)[0],i=Object.values(a)[0];Ge[e]?.requiredVersion?Rr(r,Ge[e].requiredVersion)?n=await(await i.get())():console.log(`provider support ${e}(${r}) is not satisfied requiredVersion(\${moduleMap[name].requiredVersion})`):n=await(await i.get())()}if(n)return ea(n,e)}async function Lr(e){if(Ge[e]?.import){let t=await(await Ge[e].get())();return ea(t,e)}else console.error("consumer config import=false,so cant use callback shared module")}function ea(e,t){return typeof e.default=="function"?(Object.keys(e).forEach(n=>{n!=="default"&&(e.default[n]=e[n])}),Xe[t]=e.default,e.default):(e.default&&(e=Object.assign({},e.default,e)),Xe[t]=e,e)}var ta={exports:{}},tt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=er,Fr=Symbol.for("react.element"),zr=Symbol.for("react.fragment"),Dr=Object.prototype.hasOwnProperty,Ur=Mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wr={key:!0,ref:!0,__self:!0,__source:!0};function na(e,t,n){var a,r={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)Dr.call(t,a)&&!Wr.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:Fr,type:e,key:i,ref:o,props:r,_owner:Ur.current}}tt.Fragment=zr;tt.jsx=na;tt.jsxs=na;ta.exports=tt;var l=ta.exports,gt={},sn=nr;gt.createRoot=sn.createRoot,gt.hydrateRoot=sn.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},we.apply(this,arguments)}var X;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(X||(X={}));const ln="popstate";function Br(e){e===void 0&&(e={});function t(a,r){let{pathname:i,search:o,hash:s}=a.location;return bt("",{pathname:i,search:o,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:qe(r)}return Vr(t,n,null,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function aa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yr(){return Math.random().toString(36).substr(2,8)}function cn(e,t){return{usr:e.state,key:e.key,idx:t}}function bt(e,t,n,a){return n===void 0&&(n=null),we({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pe(t):t,{state:n,key:t&&t.key||a||Yr()})}function qe(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function pe(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Vr(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:i=!1}=a,o=r.history,s=X.Pop,c=null,u=f();u==null&&(u=0,o.replaceState(we({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){s=X.Pop;let p=f(),k=p==null?null:p-u;u=p,c&&c({action:s,location:y.location,delta:k})}function m(p,k){s=X.Push;let w=bt(y.location,p,k);n&&n(w,p),u=f()+1;let j=cn(w,u),C=y.createHref(w);try{o.pushState(j,"",C)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(C)}i&&c&&c({action:s,location:y.location,delta:1})}function g(p,k){s=X.Replace;let w=bt(y.location,p,k);n&&n(w,p),u=f();let j=cn(w,u),C=y.createHref(w);o.replaceState(j,"",C),i&&c&&c({action:s,location:y.location,delta:0})}function x(p){let k=r.location.origin!=="null"?r.location.origin:r.location.href,w=typeof p=="string"?p:qe(p);return w=w.replace(/ $/,"%20"),$(k,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,k)}let y={get action(){return s},get location(){return e(r,o)},listen(p){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(ln,d),c=p,()=>{r.removeEventListener(ln,d),c=null}},createHref(p){return t(r,p)},createURL:x,encodeLocation(p){let k=x(p);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:m,replace:g,go(p){return o.go(p)}};return y}var fn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fn||(fn={}));function Hr(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?pe(t):t,r=Mt(a.pathname||"/",n);if(r==null)return null;let i=ra(e);Gr(i);let o=null;for(let s=0;o==null&&s<i.length;++s){let c=ii(r);o=ni(i[s],c)}return o}function ra(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let r=(i,o,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&($(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let u=q([a,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&($(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ra(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:ei(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))r(i,o);else for(let c of ia(i.path))r(i,o,c)}),t}function ia(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(a.length===0)return r?[i,""]:[i];let o=ia(a.join("/")),s=[];return s.push(...o.map(c=>c===""?i:[i,c].join("/"))),r&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Gr(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ti(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Xr=/^:[\w-]+$/,qr=3,Kr=2,Jr=1,Zr=10,Qr=-2,un=e=>e==="*";function ei(e,t){let n=e.split("/"),a=n.length;return n.some(un)&&(a+=Qr),t&&(a+=Kr),n.filter(r=>!un(r)).reduce((r,i)=>r+(Xr.test(i)?qr:i===""?Jr:Zr),a)}function ti(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function ni(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let o=0;o<n.length;++o){let s=n[o],c=o===n.length-1,u=r==="/"?t:t.slice(r.length)||"/",f=ai({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u);if(!f)return null;Object.assign(a,f.params);let d=s.route;i.push({params:a,pathname:q([r,f.pathname]),pathnameBase:ci(q([r,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(r=q([r,f.pathnameBase]))}return i}function ai(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=ri(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:a.reduce((u,f,d)=>{let{paramName:m,isOptional:g}=f;if(m==="*"){let y=s[d]||"";o=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[d];return g&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function ri(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),aa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(a.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function ii(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return aa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function oi(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?pe(e):e;return{pathname:n?n.startsWith("/")?n:si(n,t):t,search:fi(a),hash:ui(r)}}function si(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ut(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function li(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function oa(e,t){let n=li(e);return t?n.map((a,r)=>r===e.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function sa(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=pe(e):(r=we({},e),$(!r.pathname||!r.pathname.includes("?"),ut("?","pathname","search",r)),$(!r.pathname||!r.pathname.includes("#"),ut("#","pathname","hash",r)),$(!r.search||!r.search.includes("#"),ut("#","search","hash",r)));let i=e===""||r.pathname==="",o=i?"/":r.pathname,s;if(o==null)s=n;else{let d=t.length-1;if(!a&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;r.pathname=m.join("/")}s=d>=0?t[d]:"/"}let c=oi(r,s),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const q=e=>e.join("/").replace(/\/\/+/g,"/"),ci=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fi=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ui=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class di extends Error{}function mi(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const la=["post","put","patch","delete"];new Set(la);const pi=["get",...la];new Set(pi);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const b=await B("react");function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ke.apply(this,arguments)}const Ft=b.createContext(null),hi=b.createContext(null),dn=b.createContext(null),oe=b.createContext(null),nt=b.createContext(null),se=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ca=b.createContext(null);function vi(e,t){let{relative:n}=t===void 0?{}:t;Ce()||$(!1);let{basename:a,navigator:r}=b.useContext(oe),{hash:i,pathname:o,search:s}=ua(e,{relative:n}),c=o;return a!=="/"&&(c=o==="/"?a:q([a,o])),r.createHref({pathname:c,search:s,hash:i})}function Ce(){return b.useContext(nt)!=null}function at(){return Ce()||$(!1),b.useContext(nt).location}function fa(e){b.useContext(oe).static||b.useLayoutEffect(e)}function zt(){let{isDataRoute:e}=b.useContext(se);return e?Oi():gi()}function gi(){Ce()||$(!1);let e=b.useContext(Ft),{basename:t,future:n,navigator:a}=b.useContext(oe),{matches:r}=b.useContext(se),{pathname:i}=at(),o=JSON.stringify(oa(r,n.v7_relativeSplatPath)),s=b.useRef(!1);return fa(()=>{s.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){a.go(u);return}let d=sa(u,JSON.parse(o),i,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:q([t,d.pathname])),(f.replace?a.replace:a.push)(d,f.state,f)},[t,a,o,i,e])}function ua(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=b.useContext(oe),{matches:r}=b.useContext(se),{pathname:i}=at(),o=JSON.stringify(oa(r,a.v7_relativeSplatPath));return b.useMemo(()=>sa(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function bi(e,t){return yi(e,t)}function yi(e,t,n,a){Ce()||$(!1);let{navigator:r}=b.useContext(oe),{matches:i}=b.useContext(se),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=at(),f;if(t){var d;let p=typeof t=="string"?pe(t):t;c==="/"||(d=p.pathname)!=null&&d.startsWith(c)||$(!1),f=p}else f=u;let m=f.pathname||"/",g=m;if(c!=="/"){let p=c.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(p.length).join("/")}let x=Hr(e,{pathname:g}),y=Ni(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},s,p.params),pathname:q([c,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?c:q([c,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),i,n,a);return t&&y?b.createElement(nt.Provider,{value:{location:ke({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:X.Pop}},y):y}function xi(){let e=Ci(),t=mi(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:r},n):null,null)}const wi=b.createElement(xi,null);class ki extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(se.Provider,{value:this.props.routeContext},b.createElement(ca.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ji(e){let{routeContext:t,match:n,children:a}=e,r=b.useContext(Ft);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(se.Provider,{value:t},a)}function Ni(e,t,n,a){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let f=o.findIndex(d=>d.route.id&&s?.[d.route.id]!==void 0);f>=0||$(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,u=-1;if(n&&a&&a.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:g}=n,x=d.route.loader&&m[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||x){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,m)=>{let g,x=!1,y=null,p=null;n&&(g=s&&d.route.id?s[d.route.id]:void 0,y=d.route.errorElement||wi,c&&(u<0&&m===0?($i("route-fallback",!1),x=!0,p=null):u===m&&(x=!0,p=d.route.hydrateFallbackElement||null)));let k=t.concat(o.slice(0,m+1)),w=()=>{let j;return g?j=y:x?j=p:d.route.Component?j=b.createElement(d.route.Component,null):d.route.element?j=d.route.element:j=f,b.createElement(ji,{match:d,routeContext:{outlet:f,matches:k,isDataRoute:n!=null},children:j})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?b.createElement(ki,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:w(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):w()},null)}var da=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(da||{}),Ke=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ke||{});function Pi(e){let t=b.useContext(Ft);return t||$(!1),t}function Si(e){let t=b.useContext(hi);return t||$(!1),t}function Ei(e){let t=b.useContext(se);return t||$(!1),t}function ma(e){let t=Ei(),n=t.matches[t.matches.length-1];return n.route.id||$(!1),n.route.id}function Ci(){var e;let t=b.useContext(ca),n=Si(Ke.UseRouteError),a=ma(Ke.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function Oi(){let{router:e}=Pi(da.UseNavigateStable),t=ma(Ke.UseNavigateStable),n=b.useRef(!1);return fa(()=>{n.current=!0}),b.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,ke({fromRouteId:t},i)))},[e,t])}const mn={};function $i(e,t,n){!t&&!mn[e]&&(mn[e]=!0)}const Ai="startTransition";b[Ai];function ve(e){$(!1)}function _i(e){let{basename:t="/",children:n=null,location:a,navigationType:r=X.Pop,navigator:i,static:o=!1,future:s}=e;Ce()&&$(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:i,static:o,future:ke({v7_relativeSplatPath:!1},s)}),[c,s,i,o]);typeof a=="string"&&(a=pe(a));let{pathname:f="/",search:d="",hash:m="",state:g=null,key:x="default"}=a,y=b.useMemo(()=>{let p=Mt(f,c);return p==null?null:{location:{pathname:p,search:d,hash:m,state:g,key:x},navigationType:r}},[c,f,d,m,g,x,r]);return y==null?null:b.createElement(oe.Provider,{value:u},b.createElement(nt.Provider,{children:n,value:y}))}function Ii(e){let{children:t,location:n}=e;return bi(yt(t),n)}var R=function(e){return e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error",e}(R||{});const Ri=new Promise(()=>{});class Fl extends b.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("<Await> caught the following error during render",t,n)}render(){let{children:t,errorElement:n,resolve:a}=this.props,r=null,i=R.pending;if(!(a instanceof Promise))i=R.success,r=Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>a});else if(this.state.error){i=R.error;let o=this.state.error;r=Promise.reject().catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>o})}else a._tracked?(r=a,i="_error"in r?R.error:"_data"in r?R.success:R.pending):(i=R.pending,Object.defineProperty(a,"_tracked",{get:()=>!0}),r=a.then(o=>Object.defineProperty(a,"_data",{get:()=>o}),o=>Object.defineProperty(a,"_error",{get:()=>o})));if(i===R.error&&r._error instanceof di)throw Ri;if(i===R.error&&!n)throw r._error;if(i===R.error)return b.createElement(dn.Provider,{value:r,children:n});if(i===R.success)return b.createElement(dn.Provider,{value:r,children:t});throw r}}function yt(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(a,r)=>{if(!b.isValidElement(a))return;let i=[...t,r];if(a.type===b.Fragment){n.push.apply(n,yt(a.props.children,i));return}a.type!==ve&&$(!1),!a.props.index||!a.props.children||$(!1);let o={id:a.props.id||i.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=yt(a.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const T=await B("react"),Ti=await B("react-dom");function xt(){return xt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},xt.apply(this,arguments)}function Li(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Mi(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Fi(e,t){return e.button===0&&(!t||t==="_self")&&!Mi(e)}const zi=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Di="6";try{window.__reactRouterVersion=Di}catch{}const Ui="startTransition",pn=T[Ui],Wi="flushSync";Ti[Wi];const Bi="useId";T[Bi];function Yi(e){let{basename:t,children:n,future:a,window:r}=e,i=T.useRef();i.current==null&&(i.current=Br({window:r,v5Compat:!0}));let o=i.current,[s,c]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=a||{},f=T.useCallback(d=>{u&&pn?pn(()=>c(d)):c(d)},[c,u]);return T.useLayoutEffect(()=>o.listen(f),[o,f]),T.createElement(_i,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:a})}const Vi=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hi=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=T.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:i,replace:o,state:s,target:c,to:u,preventScrollReset:f,unstable_viewTransition:d}=t,m=Li(t,zi),{basename:g}=T.useContext(oe),x,y=!1;if(typeof u=="string"&&Hi.test(u)&&(x=u,Vi))try{let j=new URL(window.location.href),C=u.startsWith("//")?new URL(j.protocol+u):new URL(u),P=Mt(C.pathname,g);C.origin===j.origin&&P!=null?u=P+C.search+C.hash:y=!0}catch{}let p=vi(u,{relative:r}),k=Gi(u,{replace:o,state:s,target:c,preventScrollReset:f,relative:r,unstable_viewTransition:d});function w(j){a&&a(j),j.defaultPrevented||k(j)}return T.createElement("a",xt({},m,{href:x||p,onClick:y||i?a:w,ref:n,target:c}))});var hn;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hn||(hn={}));var vn;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vn||(vn={}));function Gi(e,t){let{target:n,replace:a,state:r,preventScrollReset:i,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,c=zt(),u=at(),f=ua(e,{relative:o});return T.useCallback(d=>{if(Fi(d,n)){d.preventDefault();let m=a!==void 0?a:qe(u)===qe(f);c(e,{replace:m,state:r,preventScrollReset:i,relative:o,unstable_viewTransition:s})}},[u,c,f,a,r,n,e,i,o,s])}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const{forwardRef:qi,createElement:gn}=await B("react"),Ki=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Y=(e,t)=>{const n=qi(({color:a="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:c,...u},f)=>gn("svg",{ref:f,...Xi,width:r,height:r,stroke:a,strokeWidth:o?Number(i)*24/Number(r):i,className:["lucide",`lucide-${Ki(e)}`,s].join(" "),...u},[...t.map(([d,m])=>gn(d,m)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=Y("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=Y("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=Y("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=Y("GlobeLock",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=Y("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=Y("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=Y("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=Y("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),io="/assets/logo-BMiYv8F3.png",oo="/assets/user1-DvhEV_KB.jpg",so="/assets/user2-Dq5OlDsA.jpg",lo="/assets/user3-gEXVevPl.jpg",co="/assets/user4-DVTefW4K.jpg",fo="/assets/user5-BF7rZEox.jpg",uo="/assets/user6-C1JI-hjQ.jpg",bn=[{label:"Features",href:"#"},{label:"Workflow",href:"#"},{label:"Pricing",href:"#"},{label:"Testimonials",href:"#"}],mo=[{user:"John Doe",company:"Stellar Solutions",image:oo,text:"I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations."},{user:"Jane Smith",company:"Blue Horizon Technologies",image:so,text:"I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life"},{user:"David Johnson",company:"Quantum Innovations",image:lo,text:"Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service."},{user:"Ronee Brown",company:"Fusion Dynamics",image:co,text:"Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!"},{user:"Michael Wilson",company:"Visionary Creations",image:fo,text:"I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results."},{user:"Emily Davis",company:"Synergy Systems",image:uo,text:"The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future."}],po=[{icon:l.jsx(no,{}),text:"Digitalized Automated Process",description:"Automate your retail operations to save time and reduce errors."},{icon:l.jsx(Zi,{}),text:"Improved Supply Chain",description:"Optimize inventory and manage suppliers with real-time insights."},{icon:l.jsx(Ji,{}),text:"Easy Business Reports",description:"Generate detailed, customizable reports with just a few clicks."},{icon:l.jsx(ro,{}),text:"Speed and Competitive Edge",description:"Accelerate your business processes to stay ahead of the competition."},{icon:l.jsx(to,{}),text:"Collaboration Tools",description:"Work together with your team in real-time on , enabling seamless collaboration and idea sharing."},{icon:l.jsx(Qi,{}),text:"Analytics Dashboard",description:"Gain valuable insights into user interactions and behavior within your  applications with an integrated analytics dashboard."}],ho=[{title:"Code merge made easy",description:"Track the performance of your VR apps and gain insights into user behavior."},{title:"Review code without worry",description:"Track the performance of your VR apps and gain insights into user behavior."},{title:"AI Assistance to reduce time",description:"Track the performance of your VR apps and gain insights into user behavior."},{title:"Share work in minutes",description:"Track the performance of your VR apps and gain insights into user behavior."}],vo=[{title:"Basic",price:"Rs 750",features:["Order management","Customer management","Sales analytics","Email and chat support","Regular data backups"]},{title:"Standard Plan",price:"Rs 1250",features:["All Basic Plan features","Advanced reporting","Demand forecasting","Customer support","Integration with payment gateways"]},{title:"Premium Plan",price:"Rs 2000",features:["All Standard Plan features","AI-powered recommendations","Accounting and financial management","Priority customer support","Customizable branding"]}],go=[{href:"#",text:"Getting Started"},{href:"#",text:"Documentation"},{href:"#",text:"Tutorials"},{href:"#",text:"API Reference"},{href:"#",text:"Community Forums"}],bo=[{href:"#",text:"Features"},{href:"#",text:"Supported Devices"},{href:"#",text:"System Requirements"},{href:"#",text:"Downloads"},{href:"#",text:"Release Notes"}],yo=[{href:"#",text:"Events"},{href:"#",text:"Meetups"},{href:"#",text:"Conferences"},{href:"#",text:"Hackathons"},{href:"#",text:"Jobs"}],{useState:xo}=await B("react"),wo=()=>{const[e,t]=xo(!1),n=()=>{t(!e)};return l.jsx("nav",{className:"sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80",children:l.jsxs("div",{className:"container px-4 mx-auto relative lg:text-sm",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsxs("div",{className:"flex items-center flex-shrink-0",children:[l.jsx("img",{className:"h-10 w-10 mr-2",src:io,alt:"Logo"}),l.jsx("span",{className:"text-xl tracking-tight",children:"Retail Samadhan"})]}),l.jsx("ul",{className:"hidden lg:flex ml-14 space-x-12",children:bn.map((a,r)=>l.jsx("li",{children:l.jsx("a",{href:a.href,children:a.label})},r))}),l.jsxs("div",{className:"hidden lg:flex justify-center space-x-12 items-center",children:[l.jsx(Ie,{to:"/login",className:"py-2 px-3 border rounded-md",children:"Sign In"}),l.jsx(Ie,{to:"/signup",className:"bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white",children:"Create an account"})]}),l.jsx("div",{className:"lg:hidden md:flex flex-col justify-end",children:l.jsx("button",{onClick:n,children:e?l.jsx(ao,{}):l.jsx(eo,{})})})]}),e&&l.jsxs("div",{className:"fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden",children:[l.jsx("ul",{children:bn.map((a,r)=>l.jsx("li",{className:"py-4",children:l.jsx("a",{href:a.href,children:a.label})},r))}),l.jsxs("div",{className:"flex space-x-6",children:[l.jsx(Ie,{to:"/login",className:"py-2 px-3 border rounded-md",children:"Sign In"}),l.jsx(Ie,{to:"/signup",className:"py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white",children:"Create an account"})]})]})]})})},ko="/assets/video1-DIaTMJ2g.mp4",jo="/assets/video2-BzZJi-55.mp4",No=()=>l.jsxs("div",{className:"flex flex-col items-center mt-6 lg:mt-20",children:[l.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide",children:["Retail Samadhan Solves",l.jsxs("span",{className:"bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text",children:[" ","for Shopkeeper"]})]}),l.jsx("p",{className:"mt-10 text-lg text-center text-neutral-500 max-w-4xl",children:"Providing inclusive and comprehensive solutions for Nepali shops, enhancing inventory management, sales tracking, and analytics to meet diverse retail needs across the country. Platform Shops use to manage and integrate the essential parts of their businesses."}),l.jsxs("div",{className:"flex justify-center my-10",children:[l.jsx("a",{href:"#",className:"bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md",children:"Start for free"}),l.jsx("a",{href:"#",className:"py-3 px-4 mx-3 rounded-md border",children:"Documentation"})]}),l.jsxs("div",{className:"flex mt-10 justify-center",children:[l.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,className:"rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4",children:[l.jsx("source",{src:ko,type:"video/mp4"}),"Your browser does not support the video tag."]}),l.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,className:"rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4",children:[l.jsx("source",{src:jo,type:"video/mp4"}),"Your browser does not support the video tag."]})]})]}),Po=()=>l.jsxs("div",{className:"relative mt-20 border-b border-neutral-800 min-h-[800px]",children:[l.jsxs("div",{className:"text-center",children:[l.jsx("span",{className:"bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase",children:"Feature"}),l.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide",children:["Easily build"," ",l.jsx("span",{className:"bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text",children:"your Business"})]})]}),l.jsx("div",{className:"flex flex-wrap mt-10 lg:mt-20",children:po.map((e,t)=>l.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3",children:l.jsxs("div",{className:"flex",children:[l.jsx("div",{className:"flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full",children:e.icon}),l.jsxs("div",{children:[l.jsx("h5",{className:"mt-1 mb-6 text-xl",children:e.text}),l.jsx("p",{className:"text-md p-2 mb-20 text-neutral-500",children:e.description})]})]})},t))})]}),So="/assets/code-CF0HcwZS.jpg",Eo=()=>l.jsxs("div",{className:"mt-20",children:[l.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide",children:["Accelerate your"," ",l.jsx("span",{className:"bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text",children:"workflow."})]}),l.jsxs("div",{className:"flex flex-wrap justify-center",children:[l.jsx("div",{className:"p-2 w-full lg:w-1/2",children:l.jsx("img",{src:So,alt:"Coding"})}),l.jsx("div",{className:"pt-12 w-full lg:w-1/2",children:ho.map((e,t)=>l.jsxs("div",{className:"flex mb-12",children:[l.jsx("div",{className:"text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full",children:l.jsx(pa,{})}),l.jsxs("div",{children:[l.jsx("h5",{className:"mt-1 mb-2 text-xl",children:e.title}),l.jsx("p",{className:"text-md text-neutral-500",children:e.description})]})]},t))})]})]}),Co=()=>l.jsxs("div",{className:"mt-20",children:[l.jsx("h2",{className:"text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide",children:"Pricing"}),l.jsx("div",{className:"flex flex-wrap",children:vo.map((e,t)=>l.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-2",children:l.jsxs("div",{className:"p-10 border border-neutral-700 rounded-xl",children:[l.jsxs("p",{className:"text-4xl mb-8",children:[e.title,e.title==="Pro"&&l.jsx("span",{className:"bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2",children:"(Most Popular)"})]}),l.jsxs("p",{className:"mb-8",children:[l.jsx("span",{className:"text-5xl mt-6 mr-2",children:e.price}),l.jsx("span",{className:"text-neutral-400 tracking-tight",children:"/Month"})]}),l.jsx("ul",{children:e.features.map((n,a)=>l.jsxs("li",{className:"mt-8 flex items-center",children:[l.jsx(pa,{}),l.jsx("span",{className:"ml-2",children:n})]},a))}),l.jsx("a",{href:"#",className:"inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200",children:"Subscribe"})]})},t))})]}),Oo=()=>l.jsxs("div",{className:"mt-20 tracking-wide",children:[l.jsx("h2",{className:"text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20",children:"What People are saying"}),l.jsx("div",{className:"flex flex-wrap justify-center",children:mo.map((e,t)=>l.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 px-4 py-2",children:l.jsxs("div",{className:"bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin",children:[l.jsx("p",{children:e.text}),l.jsxs("div",{className:"flex mt-8 items-start",children:[l.jsx("img",{className:"w-12 h-12 mr-6 rounded-full border border-neutral-300",src:e.image,alt:""}),l.jsxs("div",{children:[l.jsx("h6",{children:e.user}),l.jsx("span",{className:"text-sm font-normal italic text-neutral-600",children:e.company})]})]})]})},t))})]}),$o=()=>l.jsx("footer",{className:"mt-20 border-t py-10 border-neutral-700",children:l.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-3 gap-4",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-md font-semibold mb-4",children:"Resources"}),l.jsx("ul",{className:"space-y-2",children:go.map((e,t)=>l.jsx("li",{children:l.jsx("a",{href:e.href,className:"text-neutral-300 hover:text-white",children:e.text})},t))})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-md font-semibold mb-4",children:"Platform"}),l.jsx("ul",{className:"space-y-2",children:bo.map((e,t)=>l.jsx("li",{children:l.jsx("a",{href:e.href,className:"text-neutral-300 hover:text-white",children:e.text})},t))})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-md font-semibold mb-4",children:"Community"}),l.jsx("ul",{className:"space-y-2",children:yo.map((e,t)=>l.jsx("li",{children:l.jsx("a",{href:e.href,className:"text-neutral-300 hover:text-white",children:e.text})},t))})]})]})}),Ao=()=>l.jsxs(l.Fragment,{children:[l.jsx(wo,{})," ",l.jsxs("div",{className:"max-w-7xl mx-auto pt-20 px-6",children:[l.jsx(No,{}),l.jsx(Po,{}),l.jsx(Eo,{}),l.jsx(Co,{}),l.jsx(Oo,{}),l.jsx($o,{})]})]});function yn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yn(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Je(e){"@babel/helpers - typeof";return Je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Je(e)}function _o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xn(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Io(e,t,n){return t&&xn(e.prototype,t),n&&xn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dt(e,t){return To(e)||Mo(e,t)||ha(e,t)||zo()}function Oe(e){return Ro(e)||Lo(e)||ha(e)||Fo()}function Ro(e){if(Array.isArray(e))return wt(e)}function To(e){if(Array.isArray(e))return e}function Lo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Mo(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function ha(e,t){if(e){if(typeof e=="string")return wt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wt(e,t)}}function wt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Fo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wn=function(){},Ut={},va={},ga=null,ba={mark:wn,measure:wn};try{typeof window<"u"&&(Ut=window),typeof document<"u"&&(va=document),typeof MutationObserver<"u"&&(ga=MutationObserver),typeof performance<"u"&&(ba=performance)}catch{}var Do=Ut.navigator||{},kn=Do.userAgent,jn=kn===void 0?"":kn,J=Ut,E=va,Nn=ga,Re=ba;J.document;var V=!!E.documentElement&&!!E.head&&typeof E.addEventListener=="function"&&typeof E.createElement=="function",ya=~jn.indexOf("MSIE")||~jn.indexOf("Trident/"),Te,Le,Me,Fe,ze,D="___FONT_AWESOME___",kt=16,xa="fa",wa="svg-inline--fa",re="data-fa-i2svg",jt="data-fa-pseudo-element",Uo="data-fa-pseudo-element-pending",Wt="data-prefix",Bt="data-icon",Pn="fontawesome-i2svg",Wo="async",Bo=["HTML","HEAD","STYLE","SCRIPT"],ka=function(){try{return!0}catch{return!1}}(),S="classic",O="sharp",Yt=[S,O];function $e(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[S]}})}var je=$e((Te={},A(Te,S,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),A(Te,O,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Te)),Ne=$e((Le={},A(Le,S,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),A(Le,O,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Le)),Pe=$e((Me={},A(Me,S,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),A(Me,O,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Me)),Yo=$e((Fe={},A(Fe,S,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),A(Fe,O,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Fe)),Vo=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ja="fa-layers-text",Ho=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Go=$e((ze={},A(ze,S,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),A(ze,O,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ze)),Na=[1,2,3,4,5,6,7,8,9,10],Xo=Na.concat([11,12,13,14,15,16,17,18,19,20]),qo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ne={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Se=new Set;Object.keys(Ne[S]).map(Se.add.bind(Se));Object.keys(Ne[O]).map(Se.add.bind(Se));var Ko=[].concat(Yt,Oe(Se),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ne.GROUP,ne.SWAP_OPACITY,ne.PRIMARY,ne.SECONDARY]).concat(Na.map(function(e){return"".concat(e,"x")})).concat(Xo.map(function(e){return"w-".concat(e)})),ye=J.FontAwesomeConfig||{};function Jo(e){var t=E.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Zo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(E&&typeof E.querySelector=="function"){var Qo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qo.forEach(function(e){var t=Dt(e,2),n=t[0],a=t[1],r=Zo(Jo(n));r!=null&&(ye[a]=r)})}var Pa={styleDefault:"solid",familyDefault:"classic",cssPrefix:xa,replacementClass:wa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ye.familyPrefix&&(ye.cssPrefix=ye.familyPrefix);var me=h(h({},Pa),ye);me.autoReplaceSvg||(me.observeMutations=!1);var v={};Object.keys(Pa).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(n){me[e]=n,xe.forEach(function(a){return a(v)})},get:function(){return me[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){me.cssPrefix=t,xe.forEach(function(n){return n(v)})},get:function(){return me.cssPrefix}});J.FontAwesomeConfig=v;var xe=[];function es(e){return xe.push(e),function(){xe.splice(xe.indexOf(e),1)}}var G=kt,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ts(e){if(!(!e||!V)){var t=E.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=E.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return E.head.insertBefore(t,a),e}}var ns="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ee(){for(var e=12,t="";e-- >0;)t+=ns[Math.random()*62|0];return t}function he(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Vt(e){return e.classList?he(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Sa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function as(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Sa(e[n]),'" ')},"").trim()}function rt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ht(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function rs(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:u}}function is(e){var t=e.transform,n=e.width,a=n===void 0?kt:n,r=e.height,i=r===void 0?kt:r,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&ya?c+="translate(".concat(t.x/G-a/2,"em, ").concat(t.y/G-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "):c+="translate(".concat(t.x/G,"em, ").concat(t.y/G,"em) "),c+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var os=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ea(){var e=xa,t=wa,n=v.cssPrefix,a=v.replacementClass,r=os;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Sn=!1;function dt(){v.autoAddCss&&!Sn&&(ts(Ea()),Sn=!0)}var ss={mixout:function(){return{dom:{css:Ea,insertCss:dt}}},hooks:function(){return{beforeDOMElementCreation:function(){dt()},beforeI2svg:function(){dt()}}}},U=J||{};U[D]||(U[D]={});U[D].styles||(U[D].styles={});U[D].hooks||(U[D].hooks={});U[D].shims||(U[D].shims=[]);var L=U[D],Ca=[],ls=function e(){E.removeEventListener("DOMContentLoaded",e),Ze=1,Ca.map(function(t){return t()})},Ze=!1;V&&(Ze=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),Ze||E.addEventListener("DOMContentLoaded",ls));function cs(e){V&&(Ze?setTimeout(e,0):Ca.push(e))}function Ae(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Sa(e):"<".concat(t," ").concat(as(a),">").concat(i.map(Ae).join(""),"</").concat(t,">")}function En(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fs=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},mt=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?fs(n,r):n,c,u,f;for(a===void 0?(c=1,f=t[i[0]]):(c=0,f=a);c<o;c++)u=i[c],f=s(f,t[u],u,t);return f};function us(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Nt(e){var t=us(e);return t.length===1?t[0].toString(16):null}function ds(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Cn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Pt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Cn(t);typeof L.hooks.addPack=="function"&&!r?L.hooks.addPack(e,Cn(t)):L.styles[e]=h(h({},L.styles[e]||{}),i),e==="fas"&&Pt("fa",t)}var De,Ue,We,le=L.styles,ms=L.shims,ps=(De={},A(De,S,Object.values(Pe[S])),A(De,O,Object.values(Pe[O])),De),Gt=null,Oa={},$a={},Aa={},_a={},Ia={},hs=(Ue={},A(Ue,S,Object.keys(je[S])),A(Ue,O,Object.keys(je[O])),Ue);function vs(e){return~Ko.indexOf(e)}function gs(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!vs(r)?r:null}var Ra=function(){var t=function(i){return mt(le,function(o,s,c){return o[c]=mt(s,i,{}),o},{})};Oa=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){r[c.toString(16)]=o})}return r}),$a=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){r[c]=o})}return r}),Ia=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(c){r[c]=o}),r});var n="far"in le||v.autoFetchSvg,a=mt(ms,function(r,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:c}),r},{names:{},unicodes:{}});Aa=a.names,_a=a.unicodes,Gt=it(v.styleDefault,{family:v.familyDefault})};es(function(e){Gt=it(e.styleDefault,{family:v.familyDefault})});Ra();function Xt(e,t){return(Oa[e]||{})[t]}function bs(e,t){return($a[e]||{})[t]}function ae(e,t){return(Ia[e]||{})[t]}function Ta(e){return Aa[e]||{prefix:null,iconName:null}}function ys(e){var t=_a[e],n=Xt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Z(){return Gt}var qt=function(){return{prefix:null,iconName:null,rest:[]}};function it(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?S:n,r=je[a][e],i=Ne[a][e]||Ne[a][r],o=e in L.styles?e:null;return i||o||null}var On=(We={},A(We,S,Object.keys(Pe[S])),A(We,O,Object.keys(Pe[O])),We);function ot(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},A(t,S,"".concat(v.cssPrefix,"-").concat(S)),A(t,O,"".concat(v.cssPrefix,"-").concat(O)),t),o=null,s=S;(e.includes(i[S])||e.some(function(u){return On[S].includes(u)}))&&(s=S),(e.includes(i[O])||e.some(function(u){return On[O].includes(u)}))&&(s=O);var c=e.reduce(function(u,f){var d=gs(v.cssPrefix,f);if(le[f]?(f=ps[s].includes(f)?Yo[s][f]:f,o=f,u.prefix=f):hs[s].indexOf(f)>-1?(o=f,u.prefix=it(f,{family:s})):d?u.iconName=d:f!==v.replacementClass&&f!==i[S]&&f!==i[O]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var m=o==="fa"?Ta(u.iconName):{},g=ae(u.prefix,u.iconName);m.prefix&&(o=null),u.iconName=m.iconName||g||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!le.far&&le.fas&&!v.autoFetchSvg&&(u.prefix="fas")}return u},qt());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===O&&(le.fass||v.autoFetchSvg)&&(c.prefix="fass",c.iconName=ae(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Z()||"fas"),c}var xs=function(){function e(){_o(this,e),this.definitions={}}return Io(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=h(h({},n.definitions[s]||{}),o[s]),Pt(s,o[s]);var c=Pe[S][s];c&&Pt(c,o[s]),Ra()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][c]=u}),n}}]),e}(),$n=[],ce={},ue={},ws=Object.keys(ue);function ks(e,t){var n=t.mixoutsTo;return $n=e,ce={},Object.keys(ue).forEach(function(a){ws.indexOf(a)===-1&&delete ue[a]}),$n.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Je(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ce[o]||(ce[o]=[]),ce[o].push(i[o])})}a.provides&&a.provides(ue)}),n}function St(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=ce[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function ie(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=ce[e]||[];r.forEach(function(i){i.apply(null,n)})}function W(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ue[e]?ue[e].apply(null,t):void 0}function Et(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Z();if(t)return t=ae(n,t)||t,En(La.definitions,n,t)||En(L.styles,n,t)}var La=new xs,js=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,ie("noAuto")},Ns={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(ie("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,cs(function(){Ss({autoReplaceSvgRoot:n}),ie("watch",t)})}},Ps={icon:function(t){if(t===null)return null;if(Je(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ae(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=it(t[0]);return{prefix:a,iconName:ae(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Vo))){var r=ot(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Z(),iconName:ae(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=Z();return{prefix:i,iconName:ae(i,t)||t}}}},I={noAuto:js,config:v,dom:Ns,parse:Ps,library:La,findIconDefinition:Et,toHtml:Ae},Ss=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?E:n;(Object.keys(L.styles).length>0||v.autoFetchSvg)&&V&&v.autoReplaceSvg&&I.dom.i2svg({node:a})};function st(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Ae(a)})}}),Object.defineProperty(e,"node",{get:function(){if(V){var a=E.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Es(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Ht(o)&&n.found&&!a.found){var s=n.width,c=n.height,u={x:s/c/2,y:.5};r.style=rt(h(h({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Cs(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:o}),children:a}]}]}function Kt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,u=e.maskId,f=e.titleId,d=e.extra,m=e.watchable,g=m===void 0?!1:m,x=a.found?a:n,y=x.width,p=x.height,k=r==="fak",w=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(H){return d.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(d.classes).join(" "),j={children:[],attributes:h(h({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(p)})},C=k&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/p*16*.0625,"em")}:{};g&&(j.attributes[re]=""),c&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(f||Ee())},children:[c]}),delete j.attributes.title);var P=h(h({},j),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:h(h({},C),d.styles)}),ee=a.found&&n.found?W("generateAbstractMask",P)||{children:[],attributes:{}}:W("generateAbstractIcon",P)||{children:[],attributes:{}},te=ee.children,lt=ee.attributes;return P.children=te,P.attributes=lt,s?Cs(P):Es(P)}function An(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,u=h(h(h({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(u[re]="");var f=h({},o.styles);Ht(r)&&(f.transform=is({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var d=rt(f);d.length>0&&(u.style=d);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Os(e){var t=e.content,n=e.title,a=e.extra,r=h(h(h({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=rt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var pt=L.styles;function Ct(e){var t=e[0],n=e[1],a=e.slice(4),r=Dt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(ne.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ne.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ne.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var $s={found:!1,width:512,height:512};function As(e,t){!ka&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ot(e,t){var n=t;return t==="fa"&&v.styleDefault!==null&&(t=Z()),new Promise(function(a,r){if(W("missingIconAbstract"),n==="fa"){var i=Ta(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&pt[t]&&pt[t][e]){var o=pt[t][e];return a(Ct(o))}As(e,t),a(h(h({},$s),{},{icon:v.showMissingIcons&&e?W("missingIconAbstract")||{}:{}}))})}var _n=function(){},$t=v.measurePerformance&&Re&&Re.mark&&Re.measure?Re:{mark:_n,measure:_n},ge='FA "6.5.2"',_s=function(t){return $t.mark("".concat(ge," ").concat(t," begins")),function(){return Ma(t)}},Ma=function(t){$t.mark("".concat(ge," ").concat(t," ends")),$t.measure("".concat(ge," ").concat(t),"".concat(ge," ").concat(t," begins"),"".concat(ge," ").concat(t," ends"))},Jt={begin:_s,end:Ma},Ve=function(){};function In(e){var t=e.getAttribute?e.getAttribute(re):null;return typeof t=="string"}function Is(e){var t=e.getAttribute?e.getAttribute(Wt):null,n=e.getAttribute?e.getAttribute(Bt):null;return t&&n}function Rs(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Ts(){if(v.autoReplaceSvg===!0)return He.replace;var e=He[v.autoReplaceSvg];return e||He.replace}function Ls(e){return E.createElementNS("http://www.w3.org/2000/svg",e)}function Ms(e){return E.createElement(e)}function Fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Ls:Ms:n;if(typeof e=="string")return E.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Fa(o,{ceFn:a}))}),r}function Fs(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var He={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Fa(r),n)}),n.getAttribute(re)===null&&v.keepOriginalSource){var a=E.createComment(Fs(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Vt(n).indexOf(v.replacementClass))return He.replace(t);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,c){return c===v.replacementClass||c.match(r)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Ae(s)}).join(`
`);n.setAttribute(re,""),n.innerHTML=o}};function Rn(e){e()}function za(e,t){var n=typeof t=="function"?t:Ve;if(e.length===0)n();else{var a=Rn;v.mutateApproach===Wo&&(a=J.requestAnimationFrame||Rn),a(function(){var r=Ts(),i=Jt.begin("mutate");e.map(r),i(),n()})}}var Zt=!1;function Da(){Zt=!0}function At(){Zt=!1}var Qe=null;function Tn(e){if(Nn&&v.observeMutations){var t=e.treeCallback,n=t===void 0?Ve:t,a=e.nodeCallback,r=a===void 0?Ve:a,i=e.pseudoElementsCallback,o=i===void 0?Ve:i,s=e.observeMutationsRoot,c=s===void 0?E:s;Qe=new Nn(function(u){if(!Zt){var f=Z();he(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!In(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&In(d.target)&&~qo.indexOf(d.attributeName))if(d.attributeName==="class"&&Is(d.target)){var m=ot(Vt(d.target)),g=m.prefix,x=m.iconName;d.target.setAttribute(Wt,g||f),x&&d.target.setAttribute(Bt,x)}else Rs(d.target)&&r(d.target)})}}),V&&Qe.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zs(){Qe&&Qe.disconnect()}function Ds(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Us(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=ot(Vt(e));return r.prefix||(r.prefix=Z()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=bs(r.prefix,e.innerText)||Xt(r.prefix,Nt(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ws(e){var t=he(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||Ee()):(t["aria-hidden"]="true",t.focusable="false")),t}function Bs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ln(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Us(e),a=n.iconName,r=n.prefix,i=n.rest,o=Ws(e),s=St("parseNodeAttributes",{},e),c=t.styleParser?Ds(e):[];return h({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var Ys=L.styles;function Ua(e){var t=v.autoReplaceSvg==="nest"?Ln(e,{styleParser:!1}):Ln(e);return~t.extra.classes.indexOf(ja)?W("generateLayersText",e,t):W("generateSvgReplacementMutation",e,t)}var Q=new Set;Yt.map(function(e){Q.add("fa-".concat(e))});Object.keys(je[S]).map(Q.add.bind(Q));Object.keys(je[O]).map(Q.add.bind(Q));Q=Oe(Q);function Mn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();var n=E.documentElement.classList,a=function(d){return n.add("".concat(Pn,"-").concat(d))},r=function(d){return n.remove("".concat(Pn,"-").concat(d))},i=v.autoFetchSvg?Q:Yt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ys));i.includes("fa")||i.push("fa");var o=[".".concat(ja,":not([").concat(re,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(re,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=he(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var c=Jt.begin("onTree"),u=s.reduce(function(f,d){try{var m=Ua(d);m&&f.push(m)}catch(g){ka||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(m){za(m,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(m){c(),d(m)})})}function Vs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ua(e).then(function(n){n&&za([n],t)})}function Hs(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Et(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Et(r||{})),e(a,h(h({},n),{},{mask:r}))}}var Gs=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?F:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,d=n.title,m=d===void 0?null:d,g=n.titleId,x=g===void 0?null:g,y=n.classes,p=y===void 0?[]:y,k=n.attributes,w=k===void 0?{}:k,j=n.styles,C=j===void 0?{}:j;if(t){var P=t.prefix,ee=t.iconName,te=t.icon;return st(h({type:"icon"},t),function(){return ie("beforeDOMElementCreation",{iconDefinition:t,params:n}),v.autoA11y&&(m?w["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(x||Ee()):(w["aria-hidden"]="true",w.focusable="false")),Kt({icons:{main:Ct(te),mask:c?Ct(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:ee,transform:h(h({},F),r),symbol:o,title:m,maskId:f,titleId:x,extra:{attributes:w,styles:C,classes:p}})})}},Xs={mixout:function(){return{icon:Hs(Gs)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Mn,n.nodeCallback=Vs,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?E:a,i=n.callback,o=i===void 0?function(){}:i;return Mn(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,c=a.transform,u=a.symbol,f=a.mask,d=a.maskId,m=a.extra;return new Promise(function(g,x){Promise.all([Ot(r,s),f.iconName?Ot(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var p=Dt(y,2),k=p[0],w=p[1];g([n,Kt({icons:{main:k,mask:w},prefix:s,iconName:r,transform:c,symbol:u,maskId:d,title:i,titleId:o,extra:m,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,c=rt(s);c.length>0&&(r.style=c);var u;return Ht(o)&&(u=W("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},qs={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return st({type:"layer"},function(){ie("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(Oe(i)).join(" ")},children:o}]})}}}},Ks={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,c=a.attributes,u=c===void 0?{}:c,f=a.styles,d=f===void 0?{}:f;return st({type:"counter",content:n},function(){return ie("beforeDOMElementCreation",{content:n,params:a}),Os({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(Oe(s))}})})}}}},Js={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?F:r,o=a.title,s=o===void 0?null:o,c=a.classes,u=c===void 0?[]:c,f=a.attributes,d=f===void 0?{}:f,m=a.styles,g=m===void 0?{}:m;return st({type:"text",content:n},function(){return ie("beforeDOMElementCreation",{content:n,params:a}),An({content:n,transform:h(h({},F),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(v.cssPrefix,"-layers-text")].concat(Oe(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,c=null;if(ya){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,c=f.height/u}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,An({content:n.innerHTML,width:s,height:c,transform:i,title:r,extra:o,watchable:!0})])}}},Zs=new RegExp('"',"ug"),Fn=[1105920,1112319];function Qs(e){var t=e.replace(Zs,""),n=ds(t,0),a=n>=Fn[0]&&n<=Fn[1],r=t.length===2?t[0]===t[1]:!1;return{value:Nt(r?t[0]:t),isSecondary:a||r}}function zn(e,t){var n="".concat(Uo).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=he(e.children),o=i.filter(function(te){return te.getAttribute(jt)===t})[0],s=J.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(Ho),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),a();if(c&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?O:S,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ne[m][c[2].toLowerCase()]:Go[m][u],x=Qs(d),y=x.value,p=x.isSecondary,k=c[0].startsWith("FontAwesome"),w=Xt(g,y),j=w;if(k){var C=ys(y);C.iconName&&C.prefix&&(w=C.iconName,g=C.prefix)}if(w&&!p&&(!o||o.getAttribute(Wt)!==g||o.getAttribute(Bt)!==j)){e.setAttribute(n,j),o&&e.removeChild(o);var P=Bs(),ee=P.extra;ee.attributes[jt]=t,Ot(w,g).then(function(te){var lt=Kt(h(h({},P),{},{icons:{main:te,mask:qt()},prefix:g,iconName:j,extra:ee,watchable:!0})),H=E.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=lt.map(function(Qa){return Ae(Qa)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function el(e){return Promise.all([zn(e,"::before"),zn(e,"::after")])}function tl(e){return e.parentNode!==document.head&&!~Bo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(jt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Dn(e){if(V)return new Promise(function(t,n){var a=he(e.querySelectorAll("*")).filter(tl).map(el),r=Jt.begin("searchPseudoElements");Da(),Promise.all(a).then(function(){r(),At(),t()}).catch(function(){r(),At(),n()})})}var nl={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Dn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?E:a;v.searchPseudoElements&&Dn(r)}}},Un=!1,al={mixout:function(){return{dom:{unwatch:function(){Da(),Un=!0}}}},hooks:function(){return{bootstrap:function(){Tn(St("mutationObserverCallbacks",{}))},noAuto:function(){zs()},watch:function(n){var a=n.observeMutationsRoot;Un?At():Tn(St("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Wn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},rl={mixout:function(){return{parse:{transform:function(n){return Wn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Wn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:m};return{tag:"g",attributes:h({},g.outer),children:[{tag:"g",attributes:h({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:h(h({},a.icon.attributes),g.path)}]}]}}}},ht={x:0,y:0,width:"100%",height:"100%"};function Bn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function il(e){return e.tag==="g"?e.children:[e]}var ol={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?ot(r.split(" ").map(function(o){return o.trim()})):qt();return i.prefix||(i.prefix=Z()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,u=i.width,f=i.icon,d=o.width,m=o.icon,g=rs({transform:c,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:h(h({},ht),{},{fill:"white"})},y=f.children?{children:f.children.map(Bn)}:{},p={tag:"g",attributes:h({},g.inner),children:[Bn(h({tag:f.tag,attributes:h(h({},f.attributes),g.path)},y))]},k={tag:"g",attributes:h({},g.outer),children:[p]},w="mask-".concat(s||Ee()),j="clip-".concat(s||Ee()),C={tag:"mask",attributes:h(h({},ht),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,k]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:il(m)},C]};return a.push(P,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(w,")")},ht)}),{children:a,attributes:r}}}},sl={provides:function(t){var n=!1;J.matchMedia&&(n=J.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=h(h({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:h(h({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:h(h({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ll={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},cl=[ss,Xs,qs,Ks,Js,nl,al,rl,ol,sl,ll];ks(cl,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var _t=I.parse;I.findIconDefinition;I.toHtml;var fl=I.icon;I.layer;I.text;I.counter;var Wa={exports:{}},ul="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dl=ul,ml=dl;function Ba(){}function Ya(){}Ya.resetWarningCache=Ba;var pl=function(){function e(a,r,i,o,s,c){if(c!==ml){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ya,resetWarningCache:Ba};return n.PropTypes=n,n};Wa.exports=pl();var hl=Wa.exports;const N=tr(hl),Va=await B("react");function Yn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yn(Object(n),!0).forEach(function(a){fe(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function et(e){"@babel/helpers - typeof";return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vl(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function gl(e,t){if(e==null)return{};var n=vl(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function It(e){return bl(e)||yl(e)||xl(e)||wl()}function bl(e){if(Array.isArray(e))return Rt(e)}function yl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xl(e,t){if(e){if(typeof e=="string")return Rt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rt(e,t)}}function Rt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function wl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kl(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,m=e.fixedWidth,g=e.inverse,x=e.border,y=e.listItem,p=e.flip,k=e.size,w=e.rotation,j=e.pull,C=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":m,"fa-inverse":g,"fa-border":x,"fa-li":y,"fa-flip":p===!0,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},fe(t,"fa-".concat(k),typeof k<"u"&&k!==null),fe(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),fe(t,"fa-pull-".concat(j),typeof j<"u"&&j!==null),fe(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(C).map(function(P){return C[P]?P:null}).filter(function(P){return P})}function jl(e){return e=e-0,e===e}function Ha(e){return jl(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Nl=["style"];function Pl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Sl(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Ha(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[Pl(r)]=i:t[r]=i,t},{})}function Ga(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return Ga(e,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.attrs.className=f,delete t.attributes.class;break;case"style":c.attrs.style=Sl(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=f:c.attrs[Ha(u)]=f}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=gl(n,Nl);return r.attrs.style=M(M({},r.attrs.style),o),e.apply(void 0,[t.tag,M(M({},r.attrs),s)].concat(It(a)))}var Xa=!1;try{Xa=!0}catch{}function El(){if(!Xa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Vn(e){if(e&&et(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(_t.icon)return _t.icon(e);if(e===null)return null;if(e&&et(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function vt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}var Hn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},K=Va.forwardRef(function(e,t){var n=M(M({},Hn),e),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,u=n.maskId,f=Vn(a),d=vt("classes",[].concat(It(kl(n)),It((o||"").split(" ")))),m=vt("transform",typeof n.transform=="string"?_t.transform(n.transform):n.transform),g=vt("mask",Vn(r)),x=fl(f,M(M(M(M({},d),m),g),{},{symbol:i,title:s,titleId:c,maskId:u}));if(!x)return El("Could not find icon",f),null;var y=x.abstract,p={ref:t};return Object.keys(n).forEach(function(k){Hn.hasOwnProperty(k)||(p[k]=n[k])}),Cl(y[0],p)});K.displayName="FontAwesomeIcon";K.propTypes={beat:N.bool,border:N.bool,beatFade:N.bool,bounce:N.bool,className:N.string,fade:N.bool,flash:N.bool,mask:N.oneOfType([N.object,N.array,N.string]),maskId:N.string,fixedWidth:N.bool,inverse:N.bool,flip:N.oneOf([!0,!1,"horizontal","vertical","both"]),icon:N.oneOfType([N.object,N.array,N.string]),listItem:N.bool,pull:N.oneOf(["right","left"]),pulse:N.bool,rotation:N.oneOf([0,90,180,270]),shake:N.bool,size:N.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:N.bool,spinPulse:N.bool,spinReverse:N.bool,symbol:N.oneOfType([N.bool,N.string]),title:N.string,titleId:N.string,transform:N.oneOfType([N.string,N.object]),swapOpacity:N.bool};var Cl=Ga.bind(null,Va.createElement),qa={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},Ka={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Ja={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},Za={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]};const{useState:Gn,useEffect:Ol}=await B("react");function $l(){const[e,t]=Gn(!1),n=zt(),a=()=>{t(!e)},r=s=>{s.preventDefault(),n("/home")},[i,o]=Gn(!1);return Ol(()=>{o(!0)},[]),l.jsxs("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100",children:[l.jsxs("div",{className:`flex flex-col md:flex-row w-full max-w-5xl p-4 md:p-8 bg-white rounded-[30px] shadow-2xl transition-all duration-1000 ${i?"opacity-100":"opacity-0"}`,children:[l.jsxs("div",{className:"hidden md:flex flex-1 flex-col justify-between bg-gradient-to-r from-orange-600 to-orange-800 rounded-[30px] p-6 md:p-12 relative overflow-hidden",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-4xl font-bold mb-4 text-white",children:"Retail Samadhan"}),l.jsx("p",{className:"text-lg text-white",children:"Simplify your Retail management."})]}),l.jsx("div",{className:"ripple-container",children:l.jsx("div",{className:"ripple"})})]}),l.jsxs("div",{className:"flex-1 flex flex-col justify-center p-6 md:p-12",children:[l.jsx("h2",{className:"text-3xl font-bold mb-4 text-orange-500",children:"Create Account"}),l.jsx("p",{className:"mb-6 text-gray-600",children:"Please sign up to create your account"}),l.jsxs("form",{onSubmit:r,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email address"}),l.jsx("input",{type:"email",id:"email",placeholder:"Email address",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"username",className:"sr-only",children:"Username"}),l.jsx("input",{type:"text",id:"username",placeholder:"Username",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),l.jsx("input",{type:e?"text":"password",id:"password",placeholder:"Password",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"}),l.jsx("span",{className:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:a,children:l.jsx(K,{icon:e?qa:Ka,className:"text-gray-500"})})]}),l.jsx("button",{type:"submit",className:"w-full py-2 text-white bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg transition-transform transform hover:scale-105",children:"Sign Up"})]}),l.jsxs("div",{className:"flex items-center my-4",children:[l.jsx("div",{className:"flex-grow border-t border-gray-300"}),l.jsx("span",{className:"mx-4 text-gray-500",children:"Or Sign up with"}),l.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),l.jsxs("div",{className:"flex space-x-4",children:[l.jsxs("button",{className:"flex items-center justify-center w-1/2 py-2 border rounded-lg bg-red-400 text-white",children:[l.jsx(K,{icon:Ja,className:"w-5 h-5 mr-2"}),"Google"]}),l.jsxs("button",{className:"flex items-center justify-center w-1/2 py-2 border rounded-lg bg-blue-500 text-white",children:[l.jsx(K,{icon:Za,className:"w-5 h-5 mr-2"}),"Facebook"]})]}),l.jsxs("div",{className:"mt-4 text-center",children:[l.jsx("span",{className:"text-gray-600",children:"Already have an account? "}),l.jsx("a",{href:"#",className:"text-orange-500",children:"Sign In"})]})]})]}),l.jsx("style",{children:`
          @keyframes ripple {
            0% {
              transform: scale(0.8);
              opacity: 1;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          .ripple-container {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 300px;
            height: 300px;
            margin-left: -150px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            perspective: 1000px;
          }

          .ripple {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
            animation: ripple 2s infinite;
          }

          /* Adjusted styles for Google and Facebook buttons */
          .flex button {
            color: white;
          }

          .flex button svg {
            width: 20px;
            height: 20px;
            margin-right: 8px; /* Adjust as needed */
          }

          .flex button:nth-child(odd) {
            background-color: #FF5555; /* Light Red for Google */
          }

          .flex button:nth-child(even) {
            background-color: #3b5998; /* Facebook Blue */
          }
        `})]})}const{useState:Xn,useEffect:Al}=await B("react");function _l(){const[e,t]=Xn(!1),n=zt(),a=()=>{t(!e)},r=s=>{s.preventDefault(),n("/home")},[i,o]=Xn(!1);return Al(()=>{o(!0)},[]),l.jsxs("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100",children:[l.jsxs("div",{className:`flex flex-col md:flex-row w-full max-w-5xl p-4 md:p-8 bg-white rounded-[30px] shadow-2xl transition-all duration-1000 ${i?"opacity-100":"opacity-0"}`,children:[l.jsxs("div",{className:"hidden md:flex flex-1 flex-col justify-between bg-gradient-to-r from-orange-600 to-orange-800 rounded-[30px] p-6 md:p-12 relative overflow-hidden",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-4xl font-bold mb-4 text-white",children:"Retail Samadhan"}),l.jsx("p",{className:"text-lg text-white",children:"Simplify your Retail management."})]}),l.jsx("div",{className:"ripple-container",children:l.jsx("div",{className:"ripple"})}),l.jsx("div",{className:"animation-container",children:l.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,className:"absolute inset-0 w-full h-full object-cover",children:[l.jsx("source",{src:"animation.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})]}),l.jsxs("div",{className:"flex-1 flex flex-col justify-center p-6 md:p-12",children:[l.jsx("h2",{className:"text-3xl font-bold mb-4 text-orange-500",children:"Welcome Back"}),l.jsx("p",{className:"mb-6 text-gray-600",children:"Please login to your account"}),l.jsxs("form",{onSubmit:r,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email address"}),l.jsx("input",{type:"email",id:"email",placeholder:"Email address",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),l.jsx("input",{type:e?"text":"password",id:"password",placeholder:"Password",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"}),l.jsx("span",{className:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:a,children:l.jsx(K,{icon:e?qa:Ka,className:"text-gray-500"})})]}),l.jsx("div",{className:"flex justify-end",children:l.jsx("a",{href:"#",className:"text-sm text-orange-500",children:"Forgot password?"})}),l.jsx("button",{type:"submit",className:"w-full py-2 text-white bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg transition-transform transform hover:scale-105",children:"Login"})]}),l.jsxs("div",{className:"flex items-center my-4",children:[l.jsx("div",{className:"flex-grow border-t border-gray-300"}),l.jsx("span",{className:"mx-4 text-gray-500",children:"Or Login with"}),l.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),l.jsxs("div",{className:"flex space-x-4",children:[l.jsxs("button",{className:"flex items-center justify-center w-1/2 py-2 border rounded-lg bg-red-400 text-white",children:[l.jsx(K,{icon:Ja,className:"w-5 h-5 mr-2"}),"Google"]}),l.jsxs("button",{className:"flex items-center justify-center w-1/2 py-2 border rounded-lg bg-blue-500 text-white",children:[l.jsx(K,{icon:Za,className:"w-5 h-5 mr-2"}),"Facebook"]})]}),l.jsxs("div",{className:"mt-4 text-center",children:[l.jsx("span",{className:"text-gray-600",children:"Don't have an account? "}),l.jsx("a",{href:"#",className:"text-orange-500",children:"Sign Up"})]})]})]}),l.jsx("style",{children:`
          @keyframes ripple {
            0% {
              transform: scale(0.8);
              opacity: 1;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          .ripple-container {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 300px;
            height: 300px;
            margin-left: -150px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            perspective: 1000px;
          }

          .ripple {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
            animation: ripple 2s infinite;
          }

          .animation-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1; /* Ensure it's behind the content */
          }

          .animation-container video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* Adjusted styles for Google and Facebook buttons */
          .flex button {
            color: white;
          }

          .flex button svg {
            width: 20px;
            height: 20px;
            margin-right: 8px; /* Adjust as needed */
          }

          .flex button:nth-child(odd) {
            background-color: #FF5555; /* Light Red for Google */
          }

          .flex button:nth-child(even) {
            background-color: #3b5998; /* Facebook Blue */
          }
        `})]})}const Il=()=>l.jsx("div",{children:l.jsx("h1",{children:"This is home page"})}),Rl=()=>l.jsx(Yi,{children:l.jsxs(Ii,{children:[l.jsx(ve,{path:"/",element:l.jsx(Ao,{})}),l.jsx(ve,{path:"/signup",element:l.jsx($l,{})})," ",l.jsx(ve,{path:"/login",element:l.jsx(_l,{})})," ",l.jsx(ve,{path:"/home",element:l.jsx(Il,{})})]})}),Tl=await B("react");gt.createRoot(document.getElementById("root")).render(l.jsx(Tl.StrictMode,{children:l.jsx(Rl,{})}));
