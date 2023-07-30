(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Rc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const me={},_s=[],xt=()=>{},my=()=>!1,yy=/^on[^a-z]/,co=t=>yy.test(t),Oc=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vy=Object.prototype.hasOwnProperty,oe=(t,e)=>vy.call(t,e),q=Array.isArray,ws=t=>lo(t)==="[object Map]",Nf=t=>lo(t)==="[object Set]",J=t=>typeof t=="function",Pe=t=>typeof t=="string",Mc=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Rf=t=>be(t)&&J(t.then)&&J(t.catch),Of=Object.prototype.toString,lo=t=>Of.call(t),_y=t=>lo(t).slice(8,-1),ar=t=>lo(t)==="[object Object]",Lc=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ci=Rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wy=/-(\w)/g,Ss=uo(t=>t.replace(wy,(e,n)=>n?n.toUpperCase():"")),by=/\B([A-Z])/g,Fs=uo(t=>t.replace(by,"-$1").toLowerCase()),Pf=uo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ra=uo(t=>t?`on${Pf(t)}`:""),yr=(t,e)=>!Object.is(t,e),Si=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Oa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ey=t=>{const e=Pe(t)?Number(t):NaN;return isNaN(e)?t:e};let vu;const Pa=()=>vu||(vu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $c(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Pe(s)?Cy(s):$c(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Pe(t))return t;if(be(t))return t}}const Ty=/;(?![^(]*\))/g,Iy=/:([^]+)/,Ay=/\/\*[^]*?\*\//g;function Cy(t){const e={};return t.replace(Ay,"").split(Ty).forEach(n=>{if(n){const s=n.split(Iy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fe(t){let e="";if(Pe(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=fe(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ky=Rc(Sy);function Mf(t){return!!t||t===""}const Xe=t=>Pe(t)?t:t==null?"":q(t)||be(t)&&(t.toString===Of||!J(t.toString))?JSON.stringify(t,Lf,2):String(t),Lf=(t,e)=>e&&e.__v_isRef?Lf(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Nf(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!q(e)&&!ar(e)?String(e):e;let ft;class $f{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ff(t){return new $f(t)}function Dy(t,e=ft){e&&e.active&&e.effects.push(t)}function Uf(){return ft}function xy(t){ft&&ft.cleanups.push(t)}const Fc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bf=t=>(t.w&En)>0,Vf=t=>(t.n&En)>0,Ny=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},Ry=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Bf(r)&&!Vf(r)?r.delete(t):e[n++]=r,r.w&=~En,r.n&=~En}e.length=n}},Li=new WeakMap;let er=0,En=1;const Ma=30;let St;const zn=Symbol(""),La=Symbol("");class Uc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dy(this,s)}run(){if(!this.active)return this.fn();let e=St,n=pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=St,St=this,pn=!0,En=1<<++er,er<=Ma?Ny(this):_u(this),this.fn()}finally{er<=Ma&&Ry(this),En=1<<--er,St=this.parent,pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(_u(this),this.onStop&&this.onStop(),this.active=!1)}}function _u(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pn=!0;const jf=[];function Us(){jf.push(pn),pn=!1}function Bs(){const t=jf.pop();pn=t===void 0?!0:t}function lt(t,e,n){if(pn&&St){let s=Li.get(t);s||Li.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Fc()),qf(r)}}function qf(t,e){let n=!1;er<=Ma?Vf(t)||(t.n|=En,n=!Bf(t)):n=!t.has(St),n&&(t.add(St),St.deps.push(t))}function Zt(t,e,n,s,r,i){const o=Li.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Lc(n)&&a.push(o.get("length")):(a.push(o.get(zn)),ws(t)&&a.push(o.get(La)));break;case"delete":q(t)||(a.push(o.get(zn)),ws(t)&&a.push(o.get(La)));break;case"set":ws(t)&&a.push(o.get(zn));break}if(a.length===1)a[0]&&$a(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);$a(Fc(c))}}function $a(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&wu(s);for(const s of n)s.computed||wu(s)}function wu(t,e){(t!==St||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Oy(t,e){var n;return(n=Li.get(t))==null?void 0:n.get(e)}const Py=Rc("__proto__,__v_isRef,__isVue"),Hf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mc)),My=Bc(),Ly=Bc(!1,!0),$y=Bc(!0),bu=Fy();function Fy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)lt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const s=ie(this)[e].apply(this,n);return Bs(),s}}),t}function Uy(t){const e=ie(this);return lt(e,"has",t),e.hasOwnProperty(t)}function Bc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?tv:Qf:e?Wf:Gf).get(s))return s;const o=q(s);if(!t){if(o&&oe(bu,r))return Reflect.get(bu,r,i);if(r==="hasOwnProperty")return Uy}const a=Reflect.get(s,r,i);return(Mc(r)?Hf.has(r):Py(r))||(t||lt(s,"get",r),e)?a:Ce(a)?o&&Lc(r)?a:a.value:be(a)?t?Yf(a):fo(a):a}}const By=zf(),Vy=zf(!0);function zf(t=!1){return function(n,s,r,i){let o=n[s];if(ks(o)&&Ce(o)&&!Ce(r))return!1;if(!t&&(!$i(r)&&!ks(r)&&(o=ie(o),r=ie(r)),!q(n)&&Ce(o)&&!Ce(r)))return o.value=r,!0;const a=q(n)&&Lc(s)?Number(s)<n.length:oe(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?yr(r,o)&&Zt(n,"set",s,r):Zt(n,"add",s,r)),c}}function jy(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Zt(t,"delete",e,void 0),s}function qy(t,e){const n=Reflect.has(t,e);return(!Mc(e)||!Hf.has(e))&&lt(t,"has",e),n}function Hy(t){return lt(t,"iterate",q(t)?"length":zn),Reflect.ownKeys(t)}const Kf={get:My,set:By,deleteProperty:jy,has:qy,ownKeys:Hy},zy={get:$y,set(t,e){return!0},deleteProperty(t,e){return!0}},Ky=Oe({},Kf,{get:Ly,set:Vy}),Vc=t=>t,ho=t=>Reflect.getPrototypeOf(t);function oi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);n||(e!==i&&lt(r,"get",e),lt(r,"get",i));const{has:o}=ho(r),a=s?Vc:n?Hc:vr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ai(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return e||(t!==r&&lt(s,"has",t),lt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ci(t,e=!1){return t=t.__v_raw,!e&&lt(ie(t),"iterate",zn),Reflect.get(t,"size",t)}function Eu(t){t=ie(t);const e=ie(this);return ho(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function Tu(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=ho(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?yr(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function Iu(t){const e=ie(this),{has:n,get:s}=ho(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Zt(e,"delete",t,void 0),i}function Au(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function li(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?Vc:t?Hc:vr;return!t&&lt(a,"iterate",zn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ui(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=ws(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Vc:e?Hc:vr;return!e&&lt(i,"iterate",c?La:zn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function cn(t){return function(...e){return t==="delete"?!1:this}}function Gy(){const t={get(i){return oi(this,i)},get size(){return ci(this)},has:ai,add:Eu,set:Tu,delete:Iu,clear:Au,forEach:li(!1,!1)},e={get(i){return oi(this,i,!1,!0)},get size(){return ci(this)},has:ai,add:Eu,set:Tu,delete:Iu,clear:Au,forEach:li(!1,!0)},n={get(i){return oi(this,i,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:li(!0,!1)},s={get(i){return oi(this,i,!0,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:li(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ui(i,!1,!1),n[i]=ui(i,!0,!1),e[i]=ui(i,!1,!0),s[i]=ui(i,!0,!0)}),[t,n,e,s]}const[Wy,Qy,Yy,Xy]=Gy();function jc(t,e){const n=e?t?Xy:Yy:t?Qy:Wy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(oe(n,r)&&r in s?n:s,r,i)}const Jy={get:jc(!1,!1)},Zy={get:jc(!1,!0)},ev={get:jc(!0,!1)},Gf=new WeakMap,Wf=new WeakMap,Qf=new WeakMap,tv=new WeakMap;function nv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sv(t){return t.__v_skip||!Object.isExtensible(t)?0:nv(_y(t))}function fo(t){return ks(t)?t:qc(t,!1,Kf,Jy,Gf)}function rv(t){return qc(t,!1,Ky,Zy,Wf)}function Yf(t){return qc(t,!0,zy,ev,Qf)}function qc(t,e,n,s,r){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=sv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function gn(t){return ks(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function ks(t){return!!(t&&t.__v_isReadonly)}function $i(t){return!!(t&&t.__v_isShallow)}function Xf(t){return gn(t)||ks(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function po(t){return Mi(t,"__v_skip",!0),t}const vr=t=>be(t)?fo(t):t,Hc=t=>be(t)?Yf(t):t;function Jf(t){pn&&St&&(t=ie(t),qf(t.dep||(t.dep=Fc())))}function Zf(t,e){t=ie(t);const n=t.dep;n&&$a(n)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function Nt(t){return iv(t,!1)}function iv(t,e){return Ce(t)?t:new ov(t,e)}class ov{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:vr(e)}get value(){return Jf(this),this._value}set value(e){const n=this.__v_isShallow||$i(e)||ks(e);e=n?e:ie(e),yr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vr(e),Zf(this))}}function w(t){return Ce(t)?t.value:t}const av={get:(t,e,n)=>w(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ed(t){return gn(t)?t:new Proxy(t,av)}function cv(t){const e=q(t)?new Array(t.length):{};for(const n in t)e[n]=uv(t,n);return e}class lv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Oy(ie(this._object),this._key)}}function uv(t,e,n){const s=t[e];return Ce(s)?s:new lv(t,e,n)}class hv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Uc(e,()=>{this._dirty||(this._dirty=!0,Zf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return Jf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fv(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=xt):(s=t.get,r=t.set),new hv(s,r,i||!r,n)}function mn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){go(i,e,n)}return r}function Et(t,e,n,s){if(J(t)){const i=mn(t,e,n,s);return i&&Rf(i)&&i.catch(o=>{go(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Et(t[i],e,n,s));return r}function go(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){mn(c,null,10,[t,o,a]);return}}dv(t,n,r,s)}function dv(t,e,n,s=!0){console.error(t)}let _r=!1,Fa=!1;const Qe=[];let Ut=0;const bs=[];let Qt=null,Fn=0;const td=Promise.resolve();let zc=null;function Fi(t){const e=zc||td;return t?e.then(this?t.bind(this):t):e}function pv(t){let e=Ut+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;wr(Qe[s])<t?e=s+1:n=s}return e}function Kc(t){(!Qe.length||!Qe.includes(t,_r&&t.allowRecurse?Ut+1:Ut))&&(t.id==null?Qe.push(t):Qe.splice(pv(t.id),0,t),nd())}function nd(){!_r&&!Fa&&(Fa=!0,zc=td.then(rd))}function gv(t){const e=Qe.indexOf(t);e>Ut&&Qe.splice(e,1)}function mv(t){q(t)?bs.push(...t):(!Qt||!Qt.includes(t,t.allowRecurse?Fn+1:Fn))&&bs.push(t),nd()}function Cu(t,e=_r?Ut+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function sd(t){if(bs.length){const e=[...new Set(bs)];if(bs.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,s)=>wr(n)-wr(s)),Fn=0;Fn<Qt.length;Fn++)Qt[Fn]();Qt=null,Fn=0}}const wr=t=>t.id==null?1/0:t.id,yv=(t,e)=>{const n=wr(t)-wr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function rd(t){Fa=!1,_r=!0,Qe.sort(yv);const e=xt;try{for(Ut=0;Ut<Qe.length;Ut++){const n=Qe[Ut];n&&n.active!==!1&&mn(n,null,14)}}finally{Ut=0,Qe.length=0,sd(),_r=!1,zc=null,(Qe.length||bs.length)&&rd()}}function vv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||me;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||me;d&&(r=n.map(g=>Pe(g)?g.trim():g)),h&&(r=n.map(Oa))}let a,c=s[a=ra(e)]||s[a=ra(Ss(e))];!c&&i&&(c=s[a=ra(Fs(e))]),c&&Et(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(l,t,6,r)}}function id(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=id(l,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(be(t)&&s.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):Oe(o,i),be(t)&&s.set(t,o),o)}function mo(t,e){return!t||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Fs(e))||oe(t,e))}let dt=null,yo=null;function Ui(t){const e=dt;return dt=t,yo=t&&t.type.__scopeId||null,e}function Ur(t){yo=t}function Br(){yo=null}function Gc(t,e=dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&$u(-1);const i=Ui(e);let o;try{o=t(...r)}finally{Ui(i),s._d&&$u(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ia(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:T,inheritAttrs:I}=t;let S,H;const Q=Ui(t);try{if(n.shapeFlag&4){const N=r||s;S=Ft(u.call(N,N,h,i,g,d,T)),H=c}else{const N=e;S=Ft(N.length>1?N(i,{attrs:c,slots:a,emit:l}):N(i,null)),H=e.props?c:_v(c)}}catch(N){ur.length=0,go(N,t,1),S=Re(Tn)}let G=S;if(H&&I!==!1){const N=Object.keys(H),{shapeFlag:ee}=G;N.length&&ee&7&&(o&&N.some(Oc)&&(H=wv(H,o)),G=Qn(G,H))}return n.dirs&&(G=Qn(G),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),S=G,Ui(Q),S}const _v=t=>{let e;for(const n in t)(n==="class"||n==="style"||co(n))&&((e||(e={}))[n]=t[n]);return e},wv=(t,e)=>{const n={};for(const s in t)(!Oc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Su(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!mo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Su(s,o,l):!0:!!o;return!1}function Su(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!mo(n,i))return!0}return!1}function Ev({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Tv=t=>t.__isSuspense;function Iv(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):mv(t)}const hi={};function Yt(t,e,n){return od(t,e,n)}function od(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=me){var a;const c=Uf()===((a=$e)==null?void 0:a.scope)?$e:null;let l,u=!1,h=!1;if(Ce(t)?(l=()=>t.value,u=$i(t)):gn(t)?(l=()=>t,s=!0):q(t)?(h=!0,u=t.some(N=>gn(N)||$i(N)),l=()=>t.map(N=>{if(Ce(N))return N.value;if(gn(N))return Bn(N);if(J(N))return mn(N,c,2)})):J(t)?e?l=()=>mn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Et(t,c,3,[g])}:l=xt,e&&s){const N=l;l=()=>Bn(N())}let d,g=N=>{d=Q.onStop=()=>{mn(N,c,4)}},T;if(Tr)if(g=xt,e?n&&Et(e,c,3,[l(),h?[]:void 0,g]):l(),r==="sync"){const N=w_();T=N.__watcherHandles||(N.__watcherHandles=[])}else return xt;let I=h?new Array(t.length).fill(hi):hi;const S=()=>{if(Q.active)if(e){const N=Q.run();(s||u||(h?N.some((ee,Se)=>yr(ee,I[Se])):yr(N,I)))&&(d&&d(),Et(e,c,3,[N,I===hi?void 0:h&&I[0]===hi?[]:I,g]),I=N)}else Q.run()};S.allowRecurse=!!e;let H;r==="sync"?H=S:r==="post"?H=()=>at(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),H=()=>Kc(S));const Q=new Uc(l,H);e?n?S():I=Q.run():r==="post"?at(Q.run.bind(Q),c&&c.suspense):Q.run();const G=()=>{Q.stop(),c&&c.scope&&Pc(c.scope.effects,Q)};return T&&T.push(G),G}function Av(t,e,n){const s=this.proxy,r=Pe(t)?t.includes(".")?ad(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=$e;Ds(this);const a=od(r,i.bind(s),n);return o?Ds(o):Kn(),a}function ad(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Bn(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ce(t))Bn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)Bn(t[n],e);else if(Nf(t)||ws(t))t.forEach(n=>{Bn(n,e)});else if(ar(t))for(const n in t)Bn(t[n],e);return t}function ku(t,e){const n=dt;if(n===null)return t;const s=To(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=me]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Bn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Pn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Us(),Et(c,n,8,[t.el,a,t,e]),Bs())}}function Cv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _o(()=>{t.isMounted=!0}),fd(()=>{t.isUnmounting=!0}),t}const vt=[Function,Array],Sv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt};function kv(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ua(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:T,onBeforeAppear:I,onAppear:S,onAfterAppear:H,onAppearCancelled:Q}=e,G=String(t.key),N=kv(n,t),ee=(O,j)=>{O&&Et(O,s,9,j)},Se=(O,j)=>{const te=j[1];ee(O,j),q(O)?O.every(we=>we.length<=1)&&te():O.length<=1&&te()},Ae={mode:i,persisted:o,beforeEnter(O){let j=a;if(!n.isMounted)if(r)j=I||a;else return;O._leaveCb&&O._leaveCb(!0);const te=N[G];te&&ps(t,te)&&te.el._leaveCb&&te.el._leaveCb(),ee(j,[O])},enter(O){let j=c,te=l,we=u;if(!n.isMounted)if(r)j=S||c,te=H||l,we=Q||u;else return;let M=!1;const ge=O._enterCb=st=>{M||(M=!0,st?ee(we,[O]):ee(te,[O]),Ae.delayedLeave&&Ae.delayedLeave(),O._enterCb=void 0)};j?Se(j,[O,ge]):ge()},leave(O,j){const te=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return j();ee(h,[O]);let we=!1;const M=O._leaveCb=ge=>{we||(we=!0,j(),ge?ee(T,[O]):ee(g,[O]),O._leaveCb=void 0,N[te]===t&&delete N[te])};N[te]=t,d?Se(d,[O,M]):M()},clone(O){return Ua(O,e,n,s)}};return Ae}function Ba(t,e){t.shapeFlag&6&&t.component?Ba(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ge?(o.patchFlag&128&&r++,s=s.concat(cd(o.children,e,a))):(e||o.type!==Tn)&&s.push(a!=null?Qn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const ki=t=>!!t.type.__asyncLoader,ld=t=>t.type.__isKeepAlive;function Dv(t,e){ud(t,"a",e)}function xv(t,e){ud(t,"da",e)}function ud(t,e,n=$e){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ld(r.parent.vnode)&&Nv(s,e,n,r),r=r.parent}}function Nv(t,e,n,s){const r=vo(e,t,s,!0);dd(()=>{Pc(s[e],r)},n)}function vo(t,e,n=$e,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),Ds(n);const a=Et(e,n,t,o);return Kn(),Bs(),a});return s?r.unshift(i):r.push(i),i}}const on=t=>(e,n=$e)=>(!Tr||t==="sp")&&vo(t,(...s)=>e(...s),n),Rv=on("bm"),_o=on("m"),Ov=on("bu"),hd=on("u"),fd=on("bum"),dd=on("um"),Pv=on("sp"),Mv=on("rtg"),Lv=on("rtc");function $v(t,e=$e){vo("ec",t,e)}const Fv=Symbol.for("v-ndc");function wo(t,e,n,s){let r;const i=n&&n[s];if(q(t)||Pe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(be(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Va=t=>t?Id(t)?To(t)||t.proxy:Va(t.parent):null,cr=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Va(t.parent),$root:t=>Va(t.root),$emit:t=>t.emit,$options:t=>Wc(t),$forceUpdate:t=>t.f||(t.f=()=>Kc(t.update)),$nextTick:t=>t.n||(t.n=Fi.bind(t.proxy)),$watch:t=>Av.bind(t)}),oa=(t,e)=>t!==me&&!t.__isScriptSetup&&oe(t,e),Uv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(oa(s,e))return o[e]=1,s[e];if(r!==me&&oe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==me&&oe(n,e))return o[e]=4,n[e];ja&&(o[e]=0)}}const u=cr[e];let h,d;if(u)return e==="$attrs"&&lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==me&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return oa(r,e)?(r[e]=n,!0):s!==me&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==me&&oe(t,o)||oa(e,o)||(a=i[0])&&oe(a,o)||oe(s,o)||oe(cr,o)||oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Du(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ja=!0;function Bv(t){const e=Wc(t),n=t.proxy,s=t.ctx;ja=!1,e.beforeCreate&&xu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:T,activated:I,deactivated:S,beforeDestroy:H,beforeUnmount:Q,destroyed:G,unmounted:N,render:ee,renderTracked:Se,renderTriggered:Ae,errorCaptured:O,serverPrefetch:j,expose:te,inheritAttrs:we,components:M,directives:ge,filters:st}=e;if(l&&Vv(l,s,null),o)for(const Te in o){const de=o[Te];J(de)&&(s[Te]=de.bind(n))}if(r){const Te=r.call(n,n);be(Te)&&(t.data=fo(Te))}if(ja=!0,i)for(const Te in i){const de=i[Te],Rn=J(de)?de.bind(n,n):J(de.get)?de.get.bind(n,n):xt,ri=!J(de)&&J(de.set)?de.set.bind(n):xt,On=Jc({get:Rn,set:ri});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>On.value,set:Mt=>On.value=Mt})}if(a)for(const Te in a)pd(a[Te],s,n,Te);if(c){const Te=J(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(de=>{Gv(de,Te[de])})}u&&xu(u,t,"c");function ae(Te,de){q(de)?de.forEach(Rn=>Te(Rn.bind(n))):de&&Te(de.bind(n))}if(ae(Rv,h),ae(_o,d),ae(Ov,g),ae(hd,T),ae(Dv,I),ae(xv,S),ae($v,O),ae(Lv,Se),ae(Mv,Ae),ae(fd,Q),ae(dd,N),ae(Pv,j),q(te))if(te.length){const Te=t.exposed||(t.exposed={});te.forEach(de=>{Object.defineProperty(Te,de,{get:()=>n[de],set:Rn=>n[de]=Rn})})}else t.exposed||(t.exposed={});ee&&t.render===xt&&(t.render=ee),we!=null&&(t.inheritAttrs=we),M&&(t.components=M),ge&&(t.directives=ge)}function Vv(t,e,n=xt){q(t)&&(t=qa(t));for(const s in t){const r=t[s];let i;be(r)?"default"in r?i=lr(r.from||s,r.default,!0):i=lr(r.from||s):i=lr(r),Ce(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function xu(t,e,n){Et(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function pd(t,e,n,s){const r=s.includes(".")?ad(n,s):()=>n[s];if(Pe(t)){const i=e[t];J(i)&&Yt(r,i)}else if(J(t))Yt(r,t.bind(n));else if(be(t))if(q(t))t.forEach(i=>pd(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Yt(r,i,t)}}function Wc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Bi(c,l,o,!0)),Bi(c,e,o)),be(e)&&i.set(e,c),c}function Bi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Bi(t,i,n,!0),r&&r.forEach(o=>Bi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=jv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jv={data:Nu,props:Ru,emits:Ru,methods:tr,computed:tr,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:tr,directives:tr,watch:Hv,provide:Nu,inject:qv};function Nu(t,e){return e?t?function(){return Oe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function qv(t,e){return tr(qa(t),qa(e))}function qa(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function tr(t,e){return t?Oe(Object.create(null),t,e):e}function Ru(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:Oe(Object.create(null),Du(t),Du(e??{})):e}function Hv(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function gd(){return{app:null,config:{isNativeTag:my,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zv=0;function Kv(t,e){return function(s,r=null){J(s)||(s=Oe({},s)),r!=null&&!be(r)&&(r=null);const i=gd(),o=new Set;let a=!1;const c=i.app={_uid:zv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:b_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Re(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,To(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){br=c;try{return l()}finally{br=null}}};return c}}let br=null;function Gv(t,e){if($e){let n=$e.provides;const s=$e.parent&&$e.parent.provides;s===n&&(n=$e.provides=Object.create(s)),n[t]=e}}function lr(t,e,n=!1){const s=$e||dt;if(s||br){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:br._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s&&s.proxy):e}}function Wv(){return!!($e||dt||br)}function Qv(t,e,n,s=!1){const r={},i={};Mi(i,Eo,1),t.propsDefaults=Object.create(null),md(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:rv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Yv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(mo(t.emitsOptions,d))continue;const g=e[d];if(c)if(oe(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const T=Ss(d);r[T]=Ha(c,a,T,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{md(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=Fs(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ha(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],l=!0)}l&&Zt(t,"set","$attrs")}function md(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ci(c))continue;const l=e[c];let u;r&&oe(r,u=Ss(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:mo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ie(n),l=a||me;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ha(r,c,h,l[h],t,!oe(l,h))}}return o}function Ha(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ds(r),s=l[n]=c.call(null,e),Kn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Fs(n))&&(s=!0))}return s}function yd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[d,g]=yd(h,e,!0);Oe(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return be(t)&&s.set(t,_s),_s;if(q(i))for(let u=0;u<i.length;u++){const h=Ss(i[u]);Ou(h)&&(o[h]=me)}else if(i)for(const u in i){const h=Ss(u);if(Ou(h)){const d=i[u],g=o[h]=q(d)||J(d)?{type:d}:Oe({},d);if(g){const T=Lu(Boolean,g.type),I=Lu(String,g.type);g[0]=T>-1,g[1]=I<0||T<I,(T>-1||oe(g,"default"))&&a.push(h)}}}const l=[o,a];return be(t)&&s.set(t,l),l}function Ou(t){return t[0]!=="$"}function Pu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Mu(t,e){return Pu(t)===Pu(e)}function Lu(t,e){return q(e)?e.findIndex(n=>Mu(n,t)):J(e)&&Mu(e,t)?0:-1}const vd=t=>t[0]==="_"||t==="$stable",Qc=t=>q(t)?t.map(Ft):[Ft(t)],Xv=(t,e,n)=>{if(e._n)return e;const s=Gc((...r)=>Qc(e(...r)),n);return s._c=!1,s},_d=(t,e,n)=>{const s=t._ctx;for(const r in t){if(vd(r))continue;const i=t[r];if(J(i))e[r]=Xv(r,i,s);else if(i!=null){const o=Qc(i);e[r]=()=>o}}},wd=(t,e)=>{const n=Qc(e);t.slots.default=()=>n},Jv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Mi(e,"_",n)):_d(e,t.slots={})}else t.slots={},e&&wd(t,e);Mi(t.slots,Eo,1)},Zv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Oe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,_d(e,r)),o=e}else e&&(wd(t,e),o={default:1});if(i)for(const a in r)!vd(a)&&!(a in o)&&delete r[a]};function za(t,e,n,s,r=!1){if(q(t)){t.forEach((d,g)=>za(d,e&&(q(e)?e[g]:e),n,s,r));return}if(ki(s)&&!r)return;const i=s.shapeFlag&4?To(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===me?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):Ce(l)&&(l.value=null)),J(c))mn(c,a,12,[o,u]);else{const d=Pe(c),g=Ce(c);if(d||g){const T=()=>{if(t.f){const I=d?oe(h,c)?h[c]:u[c]:c.value;r?q(I)&&Pc(I,i):q(I)?I.includes(i)||I.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,at(T,n)):T()}}}const at=Iv;function e_(t){return t_(t)}function t_(t,e){const n=Pa();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=xt,insertStaticContent:T}=t,I=(f,p,m,_=null,v=null,C=null,R=!1,A=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!ps(f,p)&&(_=ii(f),Mt(f,v,C,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:b,ref:B,shapeFlag:L}=p;switch(b){case bo:S(f,p,m,_);break;case Tn:H(f,p,m,_);break;case Di:f==null&&Q(p,m,_,R);break;case Ge:M(f,p,m,_,v,C,R,A,k);break;default:L&1?ee(f,p,m,_,v,C,R,A,k):L&6?ge(f,p,m,_,v,C,R,A,k):(L&64||L&128)&&b.process(f,p,m,_,v,C,R,A,k,ls)}B!=null&&v&&za(B,f&&f.ref,C,p||f,!p)},S=(f,p,m,_)=>{if(f==null)s(p.el=a(p.children),m,_);else{const v=p.el=f.el;p.children!==f.children&&l(v,p.children)}},H=(f,p,m,_)=>{f==null?s(p.el=c(p.children||""),m,_):p.el=f.el},Q=(f,p,m,_)=>{[f.el,f.anchor]=T(f.children,p,m,_,f.el,f.anchor)},G=({el:f,anchor:p},m,_)=>{let v;for(;f&&f!==p;)v=d(f),s(f,m,_),f=v;s(p,m,_)},N=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},ee=(f,p,m,_,v,C,R,A,k)=>{R=R||p.type==="svg",f==null?Se(p,m,_,v,C,R,A,k):j(f,p,v,C,R,A,k)},Se=(f,p,m,_,v,C,R,A)=>{let k,b;const{type:B,props:L,shapeFlag:V,transition:Y,dirs:ne}=f;if(k=f.el=o(f.type,C,L&&L.is,L),V&8?u(k,f.children):V&16&&O(f.children,k,null,_,v,C&&B!=="foreignObject",R,A),ne&&Pn(f,null,_,"created"),Ae(k,f,f.scopeId,R,_),L){for(const he in L)he!=="value"&&!Ci(he)&&i(k,he,null,L[he],C,f.children,_,v,Gt);"value"in L&&i(k,"value",null,L.value),(b=L.onVnodeBeforeMount)&&$t(b,_,f)}ne&&Pn(f,null,_,"beforeMount");const pe=(!v||v&&!v.pendingBranch)&&Y&&!Y.persisted;pe&&Y.beforeEnter(k),s(k,p,m),((b=L&&L.onVnodeMounted)||pe||ne)&&at(()=>{b&&$t(b,_,f),pe&&Y.enter(k),ne&&Pn(f,null,_,"mounted")},v)},Ae=(f,p,m,_,v)=>{if(m&&g(f,m),_)for(let C=0;C<_.length;C++)g(f,_[C]);if(v){let C=v.subTree;if(p===C){const R=v.vnode;Ae(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},O=(f,p,m,_,v,C,R,A,k=0)=>{for(let b=k;b<f.length;b++){const B=f[b]=A?fn(f[b]):Ft(f[b]);I(null,B,p,m,_,v,C,R,A)}},j=(f,p,m,_,v,C,R)=>{const A=p.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:B}=p;k|=f.patchFlag&16;const L=f.props||me,V=p.props||me;let Y;m&&Mn(m,!1),(Y=V.onVnodeBeforeUpdate)&&$t(Y,m,p,f),B&&Pn(p,f,m,"beforeUpdate"),m&&Mn(m,!0);const ne=v&&p.type!=="foreignObject";if(b?te(f.dynamicChildren,b,A,m,_,ne,C):R||de(f,p,A,null,m,_,ne,C,!1),k>0){if(k&16)we(A,p,L,V,m,_,v);else if(k&2&&L.class!==V.class&&i(A,"class",null,V.class,v),k&4&&i(A,"style",L.style,V.style,v),k&8){const pe=p.dynamicProps;for(let he=0;he<pe.length;he++){const ke=pe[he],Ct=L[ke],us=V[ke];(us!==Ct||ke==="value")&&i(A,ke,Ct,us,v,f.children,m,_,Gt)}}k&1&&f.children!==p.children&&u(A,p.children)}else!R&&b==null&&we(A,p,L,V,m,_,v);((Y=V.onVnodeUpdated)||B)&&at(()=>{Y&&$t(Y,m,p,f),B&&Pn(p,f,m,"updated")},_)},te=(f,p,m,_,v,C,R)=>{for(let A=0;A<p.length;A++){const k=f[A],b=p[A],B=k.el&&(k.type===Ge||!ps(k,b)||k.shapeFlag&70)?h(k.el):m;I(k,b,B,null,_,v,C,R,!0)}},we=(f,p,m,_,v,C,R)=>{if(m!==_){if(m!==me)for(const A in m)!Ci(A)&&!(A in _)&&i(f,A,m[A],null,R,p.children,v,C,Gt);for(const A in _){if(Ci(A))continue;const k=_[A],b=m[A];k!==b&&A!=="value"&&i(f,A,b,k,R,p.children,v,C,Gt)}"value"in _&&i(f,"value",m.value,_.value)}},M=(f,p,m,_,v,C,R,A,k)=>{const b=p.el=f?f.el:a(""),B=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:V,slotScopeIds:Y}=p;Y&&(A=A?A.concat(Y):Y),f==null?(s(b,m,_),s(B,m,_),O(p.children,m,B,v,C,R,A,k)):L>0&&L&64&&V&&f.dynamicChildren?(te(f.dynamicChildren,V,m,v,C,R,A),(p.key!=null||v&&p===v.subTree)&&bd(f,p,!0)):de(f,p,m,B,v,C,R,A,k)},ge=(f,p,m,_,v,C,R,A,k)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?v.ctx.activate(p,m,_,R,k):st(p,m,_,v,C,R,k):At(f,p,k)},st=(f,p,m,_,v,C,R)=>{const A=f.component=f_(f,_,v);if(ld(f)&&(A.ctx.renderer=ls),p_(A),A.asyncDep){if(v&&v.registerDep(A,ae),!f.el){const k=A.subTree=Re(Tn);H(null,k,p,m)}return}ae(A,f,p,m,v,C,R)},At=(f,p,m)=>{const _=p.component=f.component;if(bv(f,p,m))if(_.asyncDep&&!_.asyncResolved){Te(_,p,m);return}else _.next=p,gv(_.update),_.update();else p.el=f.el,_.vnode=p},ae=(f,p,m,_,v,C,R)=>{const A=()=>{if(f.isMounted){let{next:B,bu:L,u:V,parent:Y,vnode:ne}=f,pe=B,he;Mn(f,!1),B?(B.el=ne.el,Te(f,B,R)):B=ne,L&&Si(L),(he=B.props&&B.props.onVnodeBeforeUpdate)&&$t(he,Y,B,ne),Mn(f,!0);const ke=ia(f),Ct=f.subTree;f.subTree=ke,I(Ct,ke,h(Ct.el),ii(Ct),f,v,C),B.el=ke.el,pe===null&&Ev(f,ke.el),V&&at(V,v),(he=B.props&&B.props.onVnodeUpdated)&&at(()=>$t(he,Y,B,ne),v)}else{let B;const{el:L,props:V}=p,{bm:Y,m:ne,parent:pe}=f,he=ki(p);if(Mn(f,!1),Y&&Si(Y),!he&&(B=V&&V.onVnodeBeforeMount)&&$t(B,pe,p),Mn(f,!0),L&&sa){const ke=()=>{f.subTree=ia(f),sa(L,f.subTree,f,v,null)};he?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=ia(f);I(null,ke,m,_,f,v,C),p.el=ke.el}if(ne&&at(ne,v),!he&&(B=V&&V.onVnodeMounted)){const ke=p;at(()=>$t(B,pe,ke),v)}(p.shapeFlag&256||pe&&ki(pe.vnode)&&pe.vnode.shapeFlag&256)&&f.a&&at(f.a,v),f.isMounted=!0,p=m=_=null}},k=f.effect=new Uc(A,()=>Kc(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,Mn(f,!0),b()},Te=(f,p,m)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Yv(f,p.props,_,m),Zv(f,p.children,m),Us(),Cu(),Bs()},de=(f,p,m,_,v,C,R,A,k=!1)=>{const b=f&&f.children,B=f?f.shapeFlag:0,L=p.children,{patchFlag:V,shapeFlag:Y}=p;if(V>0){if(V&128){ri(b,L,m,_,v,C,R,A,k);return}else if(V&256){Rn(b,L,m,_,v,C,R,A,k);return}}Y&8?(B&16&&Gt(b,v,C),L!==b&&u(m,L)):B&16?Y&16?ri(b,L,m,_,v,C,R,A,k):Gt(b,v,C,!0):(B&8&&u(m,""),Y&16&&O(L,m,_,v,C,R,A,k))},Rn=(f,p,m,_,v,C,R,A,k)=>{f=f||_s,p=p||_s;const b=f.length,B=p.length,L=Math.min(b,B);let V;for(V=0;V<L;V++){const Y=p[V]=k?fn(p[V]):Ft(p[V]);I(f[V],Y,m,null,v,C,R,A,k)}b>B?Gt(f,v,C,!0,!1,L):O(p,m,_,v,C,R,A,k,L)},ri=(f,p,m,_,v,C,R,A,k)=>{let b=0;const B=p.length;let L=f.length-1,V=B-1;for(;b<=L&&b<=V;){const Y=f[b],ne=p[b]=k?fn(p[b]):Ft(p[b]);if(ps(Y,ne))I(Y,ne,m,null,v,C,R,A,k);else break;b++}for(;b<=L&&b<=V;){const Y=f[L],ne=p[V]=k?fn(p[V]):Ft(p[V]);if(ps(Y,ne))I(Y,ne,m,null,v,C,R,A,k);else break;L--,V--}if(b>L){if(b<=V){const Y=V+1,ne=Y<B?p[Y].el:_;for(;b<=V;)I(null,p[b]=k?fn(p[b]):Ft(p[b]),m,ne,v,C,R,A,k),b++}}else if(b>V)for(;b<=L;)Mt(f[b],v,C,!0),b++;else{const Y=b,ne=b,pe=new Map;for(b=ne;b<=V;b++){const ht=p[b]=k?fn(p[b]):Ft(p[b]);ht.key!=null&&pe.set(ht.key,b)}let he,ke=0;const Ct=V-ne+1;let us=!1,gu=0;const Qs=new Array(Ct);for(b=0;b<Ct;b++)Qs[b]=0;for(b=Y;b<=L;b++){const ht=f[b];if(ke>=Ct){Mt(ht,v,C,!0);continue}let Lt;if(ht.key!=null)Lt=pe.get(ht.key);else for(he=ne;he<=V;he++)if(Qs[he-ne]===0&&ps(ht,p[he])){Lt=he;break}Lt===void 0?Mt(ht,v,C,!0):(Qs[Lt-ne]=b+1,Lt>=gu?gu=Lt:us=!0,I(ht,p[Lt],m,null,v,C,R,A,k),ke++)}const mu=us?n_(Qs):_s;for(he=mu.length-1,b=Ct-1;b>=0;b--){const ht=ne+b,Lt=p[ht],yu=ht+1<B?p[ht+1].el:_;Qs[b]===0?I(null,Lt,m,yu,v,C,R,A,k):us&&(he<0||b!==mu[he]?On(Lt,m,yu,2):he--)}}},On=(f,p,m,_,v=null)=>{const{el:C,type:R,transition:A,children:k,shapeFlag:b}=f;if(b&6){On(f.component.subTree,p,m,_);return}if(b&128){f.suspense.move(p,m,_);return}if(b&64){R.move(f,p,m,ls);return}if(R===Ge){s(C,p,m);for(let L=0;L<k.length;L++)On(k[L],p,m,_);s(f.anchor,p,m);return}if(R===Di){G(f,p,m);return}if(_!==2&&b&1&&A)if(_===0)A.beforeEnter(C),s(C,p,m),at(()=>A.enter(C),v);else{const{leave:L,delayLeave:V,afterLeave:Y}=A,ne=()=>s(C,p,m),pe=()=>{L(C,()=>{ne(),Y&&Y()})};V?V(C,ne,pe):pe()}else s(C,p,m)},Mt=(f,p,m,_=!1,v=!1)=>{const{type:C,props:R,ref:A,children:k,dynamicChildren:b,shapeFlag:B,patchFlag:L,dirs:V}=f;if(A!=null&&za(A,null,m,f,!0),B&256){p.ctx.deactivate(f);return}const Y=B&1&&V,ne=!ki(f);let pe;if(ne&&(pe=R&&R.onVnodeBeforeUnmount)&&$t(pe,p,f),B&6)gy(f.component,m,_);else{if(B&128){f.suspense.unmount(m,_);return}Y&&Pn(f,null,p,"beforeUnmount"),B&64?f.type.remove(f,p,m,v,ls,_):b&&(C!==Ge||L>0&&L&64)?Gt(b,p,m,!1,!0):(C===Ge&&L&384||!v&&B&16)&&Gt(k,p,m),_&&du(f)}(ne&&(pe=R&&R.onVnodeUnmounted)||Y)&&at(()=>{pe&&$t(pe,p,f),Y&&Pn(f,null,p,"unmounted")},m)},du=f=>{const{type:p,el:m,anchor:_,transition:v}=f;if(p===Ge){py(m,_);return}if(p===Di){N(f);return}const C=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:A}=v,k=()=>R(m,C);A?A(f.el,C,k):k()}else C()},py=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},gy=(f,p,m)=>{const{bum:_,scope:v,update:C,subTree:R,um:A}=f;_&&Si(_),v.stop(),C&&(C.active=!1,Mt(R,f,p,m)),A&&at(A,p),at(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Gt=(f,p,m,_=!1,v=!1,C=0)=>{for(let R=C;R<f.length;R++)Mt(f[R],p,m,_,v)},ii=f=>f.shapeFlag&6?ii(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),pu=(f,p,m)=>{f==null?p._vnode&&Mt(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,m),Cu(),sd(),p._vnode=f},ls={p:I,um:Mt,m:On,r:du,mt:st,mc:O,pc:de,pbc:te,n:ii,o:t};let na,sa;return e&&([na,sa]=e(ls)),{render:pu,hydrate:na,createApp:Kv(pu,na)}}function Mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function bd(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=fn(r[i]),a.el=o.el),n||bd(o,a)),a.type===bo&&(a.el=o.el)}}function n_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const s_=t=>t.__isTeleport,Ge=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),Tn=Symbol.for("v-cmt"),Di=Symbol.for("v-stc"),ur=[];let kt=null;function F(t=!1){ur.push(kt=t?null:[])}function r_(){ur.pop(),kt=ur[ur.length-1]||null}let Er=1;function $u(t){Er+=t}function Ed(t){return t.dynamicChildren=Er>0?kt||_s:null,r_(),Er>0&&kt&&kt.push(t),t}function z(t,e,n,s,r,i){return Ed(D(t,e,n,s,r,i,!0))}function Vt(t,e,n,s,r){return Ed(Re(t,e,n,s,r,!0))}function i_(t){return t?t.__v_isVNode===!0:!1}function ps(t,e){return t.type===e.type&&t.key===e.key}const Eo="__vInternal",Td=({key:t})=>t??null,xi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pe(t)||Ce(t)||J(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,s=0,r=null,i=t===Ge?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Td(e),ref:e&&xi(e),scopeId:yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dt};return a?(Yc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),Er>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const Re=o_;function o_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Fv)&&(t=Tn),i_(t)){const a=Qn(t,e,!0);return n&&Yc(a,n),Er>0&&!i&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(v_(t)&&(t=t.__vccOpts),e){e=a_(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=fe(a)),be(c)&&(Xf(c)&&!q(c)&&(c=Oe({},c)),e.style=$c(c))}const o=Pe(t)?1:Tv(t)?128:s_(t)?64:be(t)?4:J(t)?2:0;return D(t,e,n,s,r,o,i,!0)}function a_(t){return t?Xf(t)||Eo in t?Oe({},t):t:null}function Qn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?l_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Td(a),ref:e&&e.ref?n&&r?q(r)?r.concat(xi(e)):[r,xi(e)]:xi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qn(t.ssContent),ssFallback:t.ssFallback&&Qn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function nr(t=" ",e=0){return Re(bo,null,t,e)}function c_(t,e){const n=Re(Di,null,t);return n.staticCount=e,n}function _t(t="",e=!1){return e?(F(),Vt(Tn,null,t)):Re(Tn,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Re(Tn):q(t)?Re(Ge,null,t.slice()):typeof t=="object"?fn(t):Re(bo,null,String(t))}function fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qn(t)}function Yc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Yc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Eo in e)?e._ctx=dt:r===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),s&64?(n=16,e=[nr(e)]):n=8);t.children=e,t.shapeFlag|=n}function l_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=fe([e.class,s.class]));else if(r==="style")e.style=$c([e.style,s.style]);else if(co(r)){const i=e[r],o=s[r];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function $t(t,e,n,s=null){Et(t,e,7,[n,s])}const u_=gd();let h_=0;function f_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||u_,i={uid:h_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new $f(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yd(s,r),emitsOptions:id(s,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vv.bind(null,i),t.ce&&t.ce(i),i}let $e=null;const d_=()=>$e||dt;let Xc,hs,Fu="__VUE_INSTANCE_SETTERS__";(hs=Pa()[Fu])||(hs=Pa()[Fu]=[]),hs.push(t=>$e=t),Xc=t=>{hs.length>1?hs.forEach(e=>e(t)):hs[0](t)};const Ds=t=>{Xc(t),t.scope.on()},Kn=()=>{$e&&$e.scope.off(),Xc(null)};function Id(t){return t.vnode.shapeFlag&4}let Tr=!1;function p_(t,e=!1){Tr=e;const{props:n,children:s}=t.vnode,r=Id(t);Qv(t,n,r,e),Jv(t,s);const i=r?g_(t,e):void 0;return Tr=!1,i}function g_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=po(new Proxy(t.ctx,Uv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?y_(t):null;Ds(t),Us();const i=mn(s,t,0,[t.props,r]);if(Bs(),Kn(),Rf(i)){if(i.then(Kn,Kn),e)return i.then(o=>{Uu(t,o,e)}).catch(o=>{go(o,t,0)});t.asyncDep=i}else Uu(t,i,e)}else Ad(t,e)}function Uu(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=ed(e)),Ad(t,n)}let Bu;function Ad(t,e,n){const s=t.type;if(!t.render){if(!e&&Bu&&!s.render){const r=s.template||Wc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Oe(Oe({isCustomElement:i,delimiters:a},o),c);s.render=Bu(r,l)}}t.render=s.render||xt}Ds(t),Us(),Bv(t),Bs(),Kn()}function m_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return lt(t,"get","$attrs"),e[n]}}))}function y_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return m_(t)},slots:t.slots,emit:t.emit,expose:e}}function To(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ed(po(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cr)return cr[n](t)},has(e,n){return n in e||n in cr}}))}function v_(t){return J(t)&&"__vccOpts"in t}const Jc=(t,e)=>fv(t,e,Tr),__=Symbol.for("v-scx"),w_=()=>lr(__),b_="3.3.4",E_="http://www.w3.org/2000/svg",Un=typeof document<"u"?document:null,Vu=Un&&Un.createElement("template"),T_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Un.createElementNS(E_,t):Un.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Vu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Vu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function I_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function A_(t,e,n){const s=t.style,r=Pe(n);if(n&&!r){if(e&&!Pe(e))for(const i in e)n[i]==null&&Ka(s,i,"");for(const i in n)Ka(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ju=/\s*!important$/;function Ka(t,e,n){if(q(n))n.forEach(s=>Ka(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=C_(t,e);ju.test(n)?t.setProperty(Fs(s),n.replace(ju,""),"important"):t[s]=n}}const qu=["Webkit","Moz","ms"],aa={};function C_(t,e){const n=aa[e];if(n)return n;let s=Ss(e);if(s!=="filter"&&s in t)return aa[e]=s;s=Pf(s);for(let r=0;r<qu.length;r++){const i=qu[r]+s;if(i in t)return aa[e]=i}return e}const Hu="http://www.w3.org/1999/xlink";function S_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hu,e.slice(6,e.length)):t.setAttributeNS(Hu,e,n);else{const i=ky(e);n==null||i&&!Mf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function k_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Mf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function gs(t,e,n,s){t.addEventListener(e,n,s)}function D_(t,e,n,s){t.removeEventListener(e,n,s)}function x_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=N_(e);if(s){const l=i[e]=P_(s,r);gs(t,a,l,c)}else o&&(D_(t,a,o,c),i[e]=void 0)}}const zu=/(?:Once|Passive|Capture)$/;function N_(t){let e;if(zu.test(t)){e={};let s;for(;s=t.match(zu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fs(t.slice(2)),e]}let ca=0;const R_=Promise.resolve(),O_=()=>ca||(R_.then(()=>ca=0),ca=Date.now());function P_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Et(M_(s,n.value),e,5,[s])};return n.value=t,n.attached=O_(),n}function M_(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ku=/^on[a-z]/,L_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?I_(t,s,r):e==="style"?A_(t,n,s):co(e)?Oc(e)||x_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$_(t,e,s,r))?k_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),S_(t,e,s,r))};function $_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ku.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ku.test(e)&&Pe(n)?!1:e in t}const ln="transition",Ys="animation",Cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F_=Oe({},Sv,Cd),Ln=(t,e=[])=>{q(t)?t.forEach(n=>n(...e)):t&&t(...e)},Gu=t=>t?q(t)?t.some(e=>e.length>1):t.length>1:!1;function U_(t){const e={};for(const M in t)M in Cd||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,T=B_(r),I=T&&T[0],S=T&&T[1],{onBeforeEnter:H,onEnter:Q,onEnterCancelled:G,onLeave:N,onLeaveCancelled:ee,onBeforeAppear:Se=H,onAppear:Ae=Q,onAppearCancelled:O=G}=e,j=(M,ge,st)=>{un(M,ge?u:a),un(M,ge?l:o),st&&st()},te=(M,ge)=>{M._isLeaving=!1,un(M,h),un(M,g),un(M,d),ge&&ge()},we=M=>(ge,st)=>{const At=M?Ae:Q,ae=()=>j(ge,M,st);Ln(At,[ge,ae]),Wu(()=>{un(ge,M?c:i),Wt(ge,M?u:a),Gu(At)||Qu(ge,s,I,ae)})};return Oe(e,{onBeforeEnter(M){Ln(H,[M]),Wt(M,i),Wt(M,o)},onBeforeAppear(M){Ln(Se,[M]),Wt(M,c),Wt(M,l)},onEnter:we(!1),onAppear:we(!0),onLeave(M,ge){M._isLeaving=!0;const st=()=>te(M,ge);Wt(M,h),kd(),Wt(M,d),Wu(()=>{M._isLeaving&&(un(M,h),Wt(M,g),Gu(N)||Qu(M,s,S,st))}),Ln(N,[M,st])},onEnterCancelled(M){j(M,!1),Ln(G,[M])},onAppearCancelled(M){j(M,!0),Ln(O,[M])},onLeaveCancelled(M){te(M),Ln(ee,[M])}})}function B_(t){if(t==null)return null;if(be(t))return[la(t.enter),la(t.leave)];{const e=la(t);return[e,e]}}function la(t){return Ey(t)}function Wt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function un(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Wu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let V_=0;function Qu(t,e,n,s){const r=t._endId=++V_,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Sd(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=g=>{g.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function Sd(t,e){const n=window.getComputedStyle(t),s=T=>(n[T]||"").split(", "),r=s(`${ln}Delay`),i=s(`${ln}Duration`),o=Yu(r,i),a=s(`${Ys}Delay`),c=s(`${Ys}Duration`),l=Yu(a,c);let u=null,h=0,d=0;e===ln?o>0&&(u=ln,h=o,d=i.length):e===Ys?l>0&&(u=Ys,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?ln:Ys:null,d=u?u===ln?i.length:c.length:0);const g=u===ln&&/\b(transform|all)(,|$)/.test(s(`${ln}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:g}}function Yu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Xu(n)+Xu(t[s])))}function Xu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function kd(){return document.body.offsetHeight}const Dd=new WeakMap,xd=new WeakMap,Nd={name:"TransitionGroup",props:Oe({},F_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=d_(),s=Cv();let r,i;return hd(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!K_(r[0].el,n.vnode.el,o))return;r.forEach(q_),r.forEach(H_);const a=r.filter(z_);kd(),a.forEach(c=>{const l=c.el,u=l.style;Wt(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,un(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=ie(t),a=U_(o);let c=o.tag||Ge;r=i,i=e.default?cd(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Ba(u,Ua(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];Ba(u,Ua(u,a,s,n)),Dd.set(u,u.el.getBoundingClientRect())}return Re(c,null,i)}}},j_=t=>delete t.mode;Nd.props;const Rd=Nd;function q_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function H_(t){xd.set(t,t.el.getBoundingClientRect())}function z_(t){const e=Dd.get(t),n=xd.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function K_(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=Sd(s);return r.removeChild(s),i}const Ju=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>Si(e,n):e};function G_(t){t.target.composing=!0}function Zu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const eh={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ju(r);const i=s||r.props&&r.props.type==="number";gs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Oa(a)),t._assign(a)}),n&&gs(t,"change",()=>{t.value=t.value.trim()}),e||(gs(t,"compositionstart",G_),gs(t,"compositionend",Zu),gs(t,"change",Zu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ju(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Oa(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},W_=["ctrl","shift","alt","meta"],Q_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>W_.some(n=>t[`${n}Key`]&&!e.includes(n))},Y_=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Q_[e[r]];if(i&&i(n,e))return}return t(n,...s)},X_=Oe({patchProp:L_},T_);let th;function J_(){return th||(th=e_(X_))}const Z_=(...t)=>{const e=J_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ew(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ew(t){return Pe(t)?document.querySelector(t):t}var tw=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Od;const Io=t=>Od=t,Pd=Symbol();function Ga(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var hr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hr||(hr={}));function nw(){const t=Ff(!0),e=t.run(()=>Nt({}));let n=[],s=[];const r=po({install(i){Io(r),r._a=i,i.provide(Pd,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!tw?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Md=()=>{};function nh(t,e,n,s=Md){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Uf()&&xy(r),r}function fs(t,...e){t.slice().forEach(n=>{n(...e)})}const sw=t=>t();function Wa(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Ga(r)&&Ga(s)&&t.hasOwnProperty(n)&&!Ce(s)&&!gn(s)?t[n]=Wa(r,s):t[n]=s}return t}const rw=Symbol();function iw(t){return!Ga(t)||!t.hasOwnProperty(rw)}const{assign:hn}=Object;function ow(t){return!!(Ce(t)&&t.effect)}function aw(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=cv(n.state.value[t]);return hn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=po(Jc(()=>{Io(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=Ld(t,l,e,n,s,!0),c}function Ld(t,e,n={},s,r,i){let o;const a=hn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],g;const T=s.state.value[t];!i&&!T&&(s.state.value[t]={}),Nt({});let I;function S(O){let j;l=u=!1,typeof O=="function"?(O(s.state.value[t]),j={type:hr.patchFunction,storeId:t,events:g}):(Wa(s.state.value[t],O),j={type:hr.patchObject,payload:O,storeId:t,events:g});const te=I=Symbol();Fi().then(()=>{I===te&&(l=!0)}),u=!0,fs(h,j,s.state.value[t])}const H=i?function(){const{state:j}=n,te=j?j():{};this.$patch(we=>{hn(we,te)})}:Md;function Q(){o.stop(),h=[],d=[],s._s.delete(t)}function G(O,j){return function(){Io(s);const te=Array.from(arguments),we=[],M=[];function ge(ae){we.push(ae)}function st(ae){M.push(ae)}fs(d,{args:te,name:O,store:ee,after:ge,onError:st});let At;try{At=j.apply(this&&this.$id===t?this:ee,te)}catch(ae){throw fs(M,ae),ae}return At instanceof Promise?At.then(ae=>(fs(we,ae),ae)).catch(ae=>(fs(M,ae),Promise.reject(ae))):(fs(we,At),At)}}const N={_p:s,$id:t,$onAction:nh.bind(null,d),$patch:S,$reset:H,$subscribe(O,j={}){const te=nh(h,O,j.detached,()=>we()),we=o.run(()=>Yt(()=>s.state.value[t],M=>{(j.flush==="sync"?u:l)&&O({storeId:t,type:hr.direct,events:g},M)},hn({},c,j)));return te},$dispose:Q},ee=fo(N);s._s.set(t,ee);const Se=s._a&&s._a.runWithContext||sw,Ae=s._e.run(()=>(o=Ff(),Se(()=>o.run(e))));for(const O in Ae){const j=Ae[O];if(Ce(j)&&!ow(j)||gn(j))i||(T&&iw(j)&&(Ce(j)?j.value=T[O]:Wa(j,T[O])),s.state.value[t][O]=j);else if(typeof j=="function"){const te=G(O,j);Ae[O]=te,a.actions[O]=j}}return hn(ee,Ae),hn(ie(ee),Ae),Object.defineProperty(ee,"$state",{get:()=>s.state.value[t],set:O=>{S(j=>{hn(j,O)})}}),s._p.forEach(O=>{hn(ee,o.run(()=>O({store:ee,app:s._a,pinia:s,options:a})))}),T&&i&&n.hydrate&&n.hydrate(ee.$state,T),l=!0,u=!0,ee}function Ao(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Wv();return a=a||(l?lr(Pd,null):null),a&&Io(a),a=Od,a._s.has(s)||(i?Ld(s,e,r,a):aw(s,r,a)),a._s.get(s)}return o.$id=s,o}const cw="/assets/logo-4ec602c5.svg",lw="/assets/logoDark-7a1447c0.svg",ut=Ao("DarkThemeStore",()=>{const t=Nt(!0),e=()=>t.value=!t.value;Yt(()=>t,s=>{localStorage.setItem("isDarkThemeActive",JSON.stringify(s.value))},{deep:!0});const n=localStorage.getItem("isDarkThemeActive");return n&&(t.value=JSON.parse(n)),{isDarkThemeActive:t,toggleIsDarkThemeActive:e}});const nt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},uw={class:"logo"},hw=["src"],fw=["src"],dw={__name:"TheLogo",setup(t){const e=ut();return(n,s)=>(F(),z("section",uw,[w(e).isDarkThemeActive?(F(),z("img",{key:1,class:"logo__sign",src:w(lw),alt:"logo sign dark"},null,8,fw)):(F(),z("img",{key:0,class:"logo__sign",src:w(cw),alt:"logo sign"},null,8,hw))]))}},$d=nt(dw,[["__scopeId","data-v-4aeffca9"]]),Fd="/assets/phone-faf47551.svg",Ud="/assets/phoneDark-701753d9.svg",pw="/assets/sun-4e9b7f20.svg",gw="/assets/moon-838e5115.svg";const mw=["src"],yw=["src"],vw={__name:"TheThemeToggler",setup(t){const e=ut();return(n,s)=>(F(),Vt(Rd,{name:"list",tag:"div",class:fe(["theme-toggler",w(e).isDarkThemeActive?"theme-toggler--dark":""]),onClick:w(e).toggleIsDarkThemeActive},{default:Gc(()=>[w(e).isDarkThemeActive?(F(),z("img",{key:1,class:"theme-toggler__image theme-toggler__dark",src:w(gw),alt:"moon sign"},null,8,yw)):(F(),z("img",{key:0,class:"theme-toggler__image",src:w(pw),alt:"sun sign"},null,8,mw))]),_:1},8,["class","onClick"]))}},_w=nt(vw,[["__scopeId","data-v-2ec8e55a"]]),Vr=Ao("GlobalVariablesStore",()=>({companyName:"ФОП Мінін Сергій Валентинович",address:"м. Дніпро, Україна",phones:["+38 (095) 579 86 40","+38 (097) 428 29 26"],social:{phoneNumber:"+380974282926",instagramUsername:"instagram"}}));const ww={class:"header__about-company"},bw={class:"header__phone-block"},Ew=["src"],Tw=["src"],Iw={class:"header__phones-wrapper"},Aw={__name:"TheHeader",setup(t){const e=ut(),n=Vr();return(s,r)=>(F(),z("header",{class:fe(["header",w(e).isDarkThemeActive?"header--dark":""])},[D("section",ww,[Re($d,{class:"header__logo"}),D("span",{class:fe(["header__company-name",w(e).isDarkThemeActive?"header__company-name--dark":""])},Xe(w(n).companyName),3)]),D("section",bw,[w(e).isDarkThemeActive?(F(),z("img",{key:1,class:"header__phone-image header__phone-image--dark",src:w(Ud),alt:"phone sign dark"},null,8,Tw)):(F(),z("img",{key:0,class:"header__phone-image",src:w(Fd),alt:"phone sign"},null,8,Ew)),D("div",Iw,[D("span",{class:fe(["header__phone-text",w(e).isDarkThemeActive?"header__phone-text--dark":""])},Xe(w(n).phones[0]),3),D("span",{class:fe(["header__phone-text",w(e).isDarkThemeActive?"header__phone-text--dark":""])},Xe(w(n).phones[1]),3)]),Re(_w)])],2))}},Cw=nt(Aw,[["__scopeId","data-v-d9bac1e6"]]);const Bd=t=>(Ur("data-v-9eb27c2a"),t=t(),Br(),t),Sw={class:"footer__about-company"},kw=Bd(()=>D("span",{class:"footer__company-name"}," Ваші вантажі – наші висоти! ",-1)),Dw=Bd(()=>D("span",{class:"footer__copyright"},"Copyright © 2023. All Rights Reserved",-1)),xw={__name:"TheFooter",setup(t){const e=ut();return(n,s)=>(F(),z("footer",{class:fe(["footer",w(e).isDarkThemeActive?"footer--dark":""])},[D("section",Sw,[Re($d,{class:"footer__logo"}),kw]),Dw],2))}},Nw=nt(xw,[["__scopeId","data-v-9eb27c2a"]]),Rw="/assets/telegram-7ffbed99.svg",Ow="/assets/viber-7f79c88b.svg",Pw="/assets/whatsapp-88343d52.svg";const Mw={class:"social-media"},Lw=["src"],$w=["src"],Fw=["src"],Uw={__name:"SocialMediaBlock",setup(t){const{phoneNumber:e,instagramUsername:n}=Vr().social,s=()=>window.location.href=`https://t.me/${e}`,r=()=>window.location.href=`viber://chat?number=${e}`,i=()=>window.location.href=`https://wa.me/${e}`;return(o,a)=>(F(),z("div",Mw,[D("img",{class:"social-media__sign",src:w(Rw),alt:"telegram",onClick:s},null,8,Lw),D("img",{class:"social-media__sign",src:w(Ow),alt:"viber",onClick:r},null,8,$w),D("img",{class:"social-media__sign",src:w(Pw),alt:"whatsapp",onClick:i},null,8,Fw)]))}},Bw=nt(Uw,[["__scopeId","data-v-1ec02797"]]),fi="/assets/moreSign-4d4c6444.svg",di="/assets/moreSignDark-b47709aa.svg";const rs=t=>(Ur("data-v-a84d6395"),t=t(),Br(),t),Vw=rs(()=>D("span",{class:"sidebar__button-text"},"Що ми маємо",-1)),jw=["src"],qw=["src"],Hw=rs(()=>D("span",{class:"sidebar__button-text"},"Про нас",-1)),zw=["src"],Kw=["src"],Gw=rs(()=>D("span",{class:"sidebar__button-text"},"Реквізити",-1)),Ww=["src"],Qw=["src"],Yw=rs(()=>D("span",{class:"sidebar__button-text"},"Відгуки",-1)),Xw=["src"],Jw=["src"],Zw={class:"sidebar__description-block"},e0=rs(()=>D("h3",{class:"sidebar__description-title"},"Компанія",-1)),t0={class:"sidebar__description-text"},n0={class:"sidebar__description-block"},s0=rs(()=>D("h3",{class:"sidebar__description-title"},"Адреса",-1)),r0={class:"sidebar__description-text"},i0={class:"sidebar__description-block sidebar__contacts"},o0=rs(()=>D("h3",{class:"sidebar__description-title"},"Контакти",-1)),a0={class:"sidebar__description-text sidebar__phone"},c0={class:"sidebar__description-text sidebar__phone"},l0={__name:"TheSidebar",props:["currentPage"],emits:["setCurrentPage"],setup(t){const e=ut(),n=Vr();return(s,r)=>(F(),z("div",{class:fe(["sidebar",w(e).isDarkThemeActive?"sidebar--dark":""])},[D("button",{onClick:r[0]||(r[0]=i=>s.$emit("setCurrentPage","main")),class:fe(["sidebar__button",[t.currentPage==="main"?"sidebar__button--active":"",w(e).isDarkThemeActive?"sidebar__button--dark":"",w(e).isDarkThemeActive&&t.currentPage==="main"?"sidebar__button--active--dark":""]])},[Vw,t.currentPage==="main"&&!w(e).isDarkThemeActive?(F(),z("img",{key:0,class:"sidebar__more-sign",src:w(fi),alt:"sign arrow"},null,8,jw)):_t("",!0),t.currentPage==="main"&&w(e).isDarkThemeActive?(F(),z("img",{key:1,class:"sidebar__more-sign",src:w(di),alt:"sign arrow dark"},null,8,qw)):_t("",!0)],2),D("button",{class:fe([[t.currentPage==="about"?"sidebar__button--active":"",w(e).isDarkThemeActive?"sidebar__button--dark":"",w(e).isDarkThemeActive&&t.currentPage==="about"?"sidebar__button--active--dark":""],"sidebar__button"]),onClick:r[1]||(r[1]=i=>s.$emit("setCurrentPage","about"))},[Hw,t.currentPage==="about"&&!w(e).isDarkThemeActive?(F(),z("img",{key:0,class:"sidebar__more-sign",src:w(fi),alt:"sign arrow"},null,8,zw)):_t("",!0),t.currentPage==="about"&&w(e).isDarkThemeActive?(F(),z("img",{key:1,class:"sidebar__more-sign",src:w(di),alt:"sign arrow dark"},null,8,Kw)):_t("",!0)],2),D("button",{class:fe([[t.currentPage==="requisites"?"sidebar__button--active":"",w(e).isDarkThemeActive?"sidebar__button--dark":"",w(e).isDarkThemeActive&&t.currentPage==="requisites"?"sidebar__button--active--dark":""],"sidebar__button"]),onClick:r[2]||(r[2]=i=>s.$emit("setCurrentPage","requisites"))},[Gw,t.currentPage==="requisites"&&!w(e).isDarkThemeActive?(F(),z("img",{key:0,class:"sidebar__more-sign",src:w(fi),alt:"sign arrow"},null,8,Ww)):_t("",!0),t.currentPage==="requisites"&&w(e).isDarkThemeActive?(F(),z("img",{key:1,class:"sidebar__more-sign",src:w(di),alt:"sign arrow dark"},null,8,Qw)):_t("",!0)],2),D("button",{class:fe([[t.currentPage==="reviews"?"sidebar__button--active":"",w(e).isDarkThemeActive?"sidebar__button--dark":"",w(e).isDarkThemeActive&&t.currentPage==="reviews"?"sidebar__button--active--dark":""],"sidebar__button"]),onClick:r[3]||(r[3]=i=>s.$emit("setCurrentPage","reviews"))},[Yw,t.currentPage==="reviews"&&!w(e).isDarkThemeActive?(F(),z("img",{key:0,class:"sidebar__more-sign",src:w(fi),alt:"sign arrow"},null,8,Xw)):_t("",!0),t.currentPage==="reviews"&&w(e).isDarkThemeActive?(F(),z("img",{key:1,class:"sidebar__more-sign",src:w(di),alt:"sign arrow dark"},null,8,Jw)):_t("",!0)],2),D("div",Zw,[e0,D("span",t0,Xe(w(n).companyName),1)]),D("div",n0,[s0,D("span",r0,Xe(w(n).address),1)]),D("div",i0,[o0,D("span",a0,Xe(w(n).phones[0]),1),D("span",c0,Xe(w(n).phones[1]),1)]),Re(Bw,{class:"sidebar__social"})],2))}},u0=nt(l0,[["__scopeId","data-v-a84d6395"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},h0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):h0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new f0;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const T=l<<6&192|h;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class f0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d0=function(t){const e=Vd(t);return jd.encodeByteArray(e,!0)},Vi=function(t){return d0(t).replace(/\./g,"")},p0=function(t){try{return jd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=()=>g0().__FIREBASE_DEFAULTS__,y0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},v0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&p0(t[1]);return e&&JSON.parse(e)},qd=()=>{try{return m0()||y0()||v0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_0=t=>{var e,n;return(n=(e=qd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hd=t=>{const e=_0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},zd=()=>{var t;return(t=qd())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vi(JSON.stringify(n)),Vi(JSON.stringify(o)),a].join(".")}function b0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gd(){try{return typeof indexedDB=="object"}catch{return!1}}function Wd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function E0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="FirebaseError";class an extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=T0,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?I0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new an(r,a,s)}}function I0(t,e){return t.replace(A0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const A0=/\{\$([^}]+)}/g;function ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(sh(i)&&sh(o)){if(!ji(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function sh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=1e3,S0=2,k0=4*60*60*1e3,D0=.5;function rh(t,e=C0,n=S0){const s=e*Math.pow(n,t),r=Math.round(D0*s*(Math.random()-.5)*2);return Math.min(k0,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new w0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R0(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:N0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function N0(t){return t===$n?void 0:t}function R0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new x0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const P0={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},M0=le.INFO,L0={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},$0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=L0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=M0,this._logHandler=$0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const F0=(t,e)=>e.some(n=>t instanceof n);let ih,oh;function U0(){return ih||(ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function B0(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qd=new WeakMap,Qa=new WeakMap,Yd=new WeakMap,ua=new WeakMap,el=new WeakMap;function V0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qd.set(n,t)}).catch(()=>{}),el.set(e,t),e}function j0(t){if(Qa.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Qa.set(t,e)}let Ya={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function q0(t){Ya=t(Ya)}function H0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ha(this),e,...n);return Yd.set(s,e.sort?e.sort():[e]),yn(s)}:B0().includes(t)?function(...e){return t.apply(ha(this),e),yn(Qd.get(this))}:function(...e){return yn(t.apply(ha(this),e))}}function z0(t){return typeof t=="function"?H0(t):(t instanceof IDBTransaction&&j0(t),F0(t,U0())?new Proxy(t,Ya):t)}function yn(t){if(t instanceof IDBRequest)return V0(t);if(ua.has(t))return ua.get(t);const e=z0(t);return e!==t&&(ua.set(t,e),el.set(e,t)),e}const ha=t=>el.get(t);function K0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=yn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(yn(o.result),c.oldVersion,c.newVersion,yn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const G0=["get","getKey","getAll","getAllKeys","count"],W0=["put","add","delete","clear"],fa=new Map;function ah(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=W0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||G0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return fa.set(e,i),i}q0(t=>({...t,get:(e,n,s)=>ah(e,n)||t.get(e,n,s),has:(e,n)=>!!ah(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Y0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Y0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",ch="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Zc("@firebase/app"),X0="@firebase/app-compat",J0="@firebase/analytics-compat",Z0="@firebase/analytics",eb="@firebase/app-check-compat",tb="@firebase/app-check",nb="@firebase/auth",sb="@firebase/auth-compat",rb="@firebase/database",ib="@firebase/database-compat",ob="@firebase/functions",ab="@firebase/functions-compat",cb="@firebase/installations",lb="@firebase/installations-compat",ub="@firebase/messaging",hb="@firebase/messaging-compat",fb="@firebase/performance",db="@firebase/performance-compat",pb="@firebase/remote-config",gb="@firebase/remote-config-compat",mb="@firebase/storage",yb="@firebase/storage-compat",vb="@firebase/firestore",_b="@firebase/firestore-compat",wb="firebase",bb="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="[DEFAULT]",Eb={[Xa]:"fire-core",[X0]:"fire-core-compat",[Z0]:"fire-analytics",[J0]:"fire-analytics-compat",[tb]:"fire-app-check",[eb]:"fire-app-check-compat",[nb]:"fire-auth",[sb]:"fire-auth-compat",[rb]:"fire-rtdb",[ib]:"fire-rtdb-compat",[ob]:"fire-fn",[ab]:"fire-fn-compat",[cb]:"fire-iid",[lb]:"fire-iid-compat",[ub]:"fire-fcm",[hb]:"fire-fcm-compat",[fb]:"fire-perf",[db]:"fire-perf-compat",[pb]:"fire-rc",[gb]:"fire-rc-compat",[mb]:"fire-gcs",[yb]:"fire-gcs-compat",[vb]:"fire-fst",[_b]:"fire-fst-compat","fire-js":"fire-js",[wb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Map,Za=new Map;function Tb(t,e){try{t.container.addComponent(e)}catch(n){Yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(Za.has(e))return Yn.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,t);for(const n of qi.values())Tb(n,t);return!0}function Vs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vn=new Co("app","Firebase",Ib);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=bb;function Jd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ja,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw vn.create("bad-app-name",{appName:String(r)});if(n||(n=zd()),!n)throw vn.create("no-options");const i=qi.get(r);if(i){if(ji(n,i.options)&&ji(s,i.config))return i;throw vn.create("duplicate-app",{appName:r})}const o=new O0(r);for(const c of Za.values())o.addComponent(c);const a=new Ab(n,s,o);return qi.set(r,a),a}function tl(t=Ja){const e=qi.get(t);if(!e&&t===Ja&&zd())return Jd();if(!e)throw vn.create("no-app",{appName:t});return e}function Tt(t,e,n){var s;let r=(s=Eb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yn.warn(a.join(" "));return}en(new zt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="firebase-heartbeat-database",Sb=1,Ir="firebase-heartbeat-store";let da=null;function Zd(){return da||(da=K0(Cb,Sb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ir)}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),da}async function kb(t){try{return await(await Zd()).transaction(Ir).objectStore(Ir).get(ep(t))}catch(e){if(e instanceof an)Yn.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yn.warn(n.message)}}}async function lh(t,e){try{const s=(await Zd()).transaction(Ir,"readwrite");await s.objectStore(Ir).put(e,ep(t)),await s.done}catch(n){if(n instanceof an)Yn.warn(n.message);else{const s=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(s.message)}}}function ep(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=1024,xb=30*24*60*60*1e3;class Nb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ob(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=xb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uh(),{heartbeatsToSend:n,unsentEntries:s}=Rb(this._heartbeatsCache.heartbeats),r=Vi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function uh(){return new Date().toISOString().substring(0,10)}function Rb(t,e=Db){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),hh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),hh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ob{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gd()?Wd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hh(t){return Vi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){en(new zt("platform-logger",e=>new Q0(e),"PRIVATE")),en(new zt("heartbeat",e=>new Nb(e),"PRIVATE")),Tt(Xa,ch,t),Tt(Xa,ch,"esm2017"),Tt("fire-js","")}Pb("");var Mb="firebase",Lb="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(Mb,Lb,"app");const $b=(t,e)=>e.some(n=>t instanceof n);let fh,dh;function Fb(){return fh||(fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ub(){return dh||(dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tp=new WeakMap,ec=new WeakMap,np=new WeakMap,pa=new WeakMap,nl=new WeakMap;function Bb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tp.set(n,t)}).catch(()=>{}),nl.set(e,t),e}function Vb(t){if(ec.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ec.set(t,e)}let tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||np.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jb(t){tc=t(tc)}function qb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ga(this),e,...n);return np.set(s,e.sort?e.sort():[e]),_n(s)}:Ub().includes(t)?function(...e){return t.apply(ga(this),e),_n(tp.get(this))}:function(...e){return _n(t.apply(ga(this),e))}}function Hb(t){return typeof t=="function"?qb(t):(t instanceof IDBTransaction&&Vb(t),$b(t,Fb())?new Proxy(t,tc):t)}function _n(t){if(t instanceof IDBRequest)return Bb(t);if(pa.has(t))return pa.get(t);const e=Hb(t);return e!==t&&(pa.set(t,e),nl.set(e,t)),e}const ga=t=>nl.get(t);function zb(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_n(o.result),c.oldVersion,c.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Kb=["get","getKey","getAll","getAllKeys","count"],Gb=["put","add","delete","clear"],ma=new Map;function ph(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Gb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Kb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ma.set(e,i),i}jb(t=>({...t,get:(e,n,s)=>ph(e,n)||t.get(e,n,s),has:(e,n)=>!!ph(e,n)||t.has(e,n)}));const sp="@firebase/installations",sl="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=1e4,ip=`w:${sl}`,op="FIS_v2",Wb="https://firebaseinstallations.googleapis.com/v1",Qb=60*60*1e3,Yb="installations",Xb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Xn=new Co(Yb,Xb,Jb);function ap(t){return t instanceof an&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp({projectId:t}){return`${Wb}/projects/${t}/installations`}function lp(t){return{token:t.token,requestStatus:2,expiresIn:eE(t.expiresIn),creationTime:Date.now()}}async function up(t,e){const s=(await e.json()).error;return Xn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function hp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Zb(t,{refreshToken:e}){const n=hp(t);return n.append("Authorization",tE(e)),n}async function fp(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eE(t){return Number(t.replace("s","000"))}function tE(t){return`${op} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=cp(t),r=hp(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:op,appId:t.appId,sdkVersion:ip},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await fp(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:lp(l.authToken)}}else throw await up("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=/^[cdef][\w-]{21}$/,nc="";function iE(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oE(t);return rE.test(n)?n:nc}catch{return nc}}function oE(t){return sE(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function gp(t,e){const n=So(t);mp(n,e),aE(n,e)}function mp(t,e){const n=pp.get(t);if(n)for(const s of n)s(e)}function aE(t,e){const n=cE();n&&n.postMessage({key:t,fid:e}),lE()}let Vn=null;function cE(){return!Vn&&"BroadcastChannel"in self&&(Vn=new BroadcastChannel("[Firebase] FID Change"),Vn.onmessage=t=>{mp(t.data.key,t.data.fid)}),Vn}function lE(){pp.size===0&&Vn&&(Vn.close(),Vn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firebase-installations-database",hE=1,Jn="firebase-installations-store";let ya=null;function rl(){return ya||(ya=zb(uE,hE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jn)}}})),ya}async function Hi(t,e){const n=So(t),r=(await rl()).transaction(Jn,"readwrite"),i=r.objectStore(Jn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&gp(t,e.fid),e}async function yp(t){const e=So(t),s=(await rl()).transaction(Jn,"readwrite");await s.objectStore(Jn).delete(e),await s.done}async function ko(t,e){const n=So(t),r=(await rl()).transaction(Jn,"readwrite"),i=r.objectStore(Jn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&gp(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){let e;const n=await ko(t.appConfig,s=>{const r=fE(s),i=dE(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===nc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fE(t){const e=t||{fid:iE(),registrationStatus:0};return vp(e)}function dE(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Xn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=pE(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gE(t)}:{installationEntry:e}}async function pE(t,e){try{const n=await nE(t,e);return Hi(t.appConfig,n)}catch(n){throw ap(n)&&n.customData.serverCode===409?await yp(t.appConfig):await Hi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gE(t){let e=await gh(t.appConfig);for(;e.registrationStatus===1;)await dp(100),e=await gh(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await il(t);return s||n}return e}function gh(t){return ko(t,e=>{if(!e)throw Xn.create("installation-not-found");return vp(e)})}function vp(t){return mE(t)?{fid:t.fid,registrationStatus:0}:t}function mE(t){return t.registrationStatus===1&&t.registrationTime+rp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE({appConfig:t,heartbeatServiceProvider:e},n){const s=vE(t,n),r=Zb(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:ip,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await fp(()=>fetch(s,a));if(c.ok){const l=await c.json();return lp(l)}else throw await up("Generate Auth Token",c)}function vE(t,{fid:e}){return`${cp(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(t,e=!1){let n;const s=await ko(t.appConfig,i=>{if(!_p(i))throw Xn.create("not-registered");const o=i.authToken;if(!e&&bE(o))return i;if(o.requestStatus===1)return n=_E(t,e),i;{if(!navigator.onLine)throw Xn.create("app-offline");const a=TE(i);return n=wE(t,a),a}});return n?await n:s.authToken}async function _E(t,e){let n=await mh(t.appConfig);for(;n.authToken.requestStatus===1;)await dp(100),n=await mh(t.appConfig);const s=n.authToken;return s.requestStatus===0?ol(t,e):s}function mh(t){return ko(t,e=>{if(!_p(e))throw Xn.create("not-registered");const n=e.authToken;return IE(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wE(t,e){try{const n=await yE(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Hi(t.appConfig,s),n}catch(n){if(ap(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yp(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Hi(t.appConfig,s)}throw n}}function _p(t){return t!==void 0&&t.registrationStatus===2}function bE(t){return t.requestStatus===2&&!EE(t)}function EE(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qb}function TE(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function IE(t){return t.requestStatus===1&&t.requestTime+rp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(t){const e=t,{installationEntry:n,registrationPromise:s}=await il(e);return s?s.catch(console.error):ol(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(t,e=!1){const n=t;return await SE(n),(await ol(n,e)).token}async function SE(t){const{registrationPromise:e}=await il(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){if(!t||!t.options)throw va("App Configuration");if(!t.name)throw va("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw va(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function va(t){return Xn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="installations",DE="installations-internal",xE=t=>{const e=t.getProvider("app").getImmediate(),n=kE(e),s=Vs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},NE=t=>{const e=t.getProvider("app").getImmediate(),n=Vs(e,wp).getImmediate();return{getId:()=>AE(n),getToken:r=>CE(n,r)}};function RE(){en(new zt(wp,xE,"PUBLIC")),en(new zt(DE,NE,"PRIVATE"))}RE();Tt(sp,sl);Tt(sp,sl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="analytics",OE="firebase_id",PE="origin",ME=60*1e3,LE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",al="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Zc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gt=new Co("analytics","Analytics",$E);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){if(!t.startsWith(al)){const e=gt.create("invalid-gtag-resource",{gtagURL:t});return ct.warn(e.message),""}return t}function bp(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function UE(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function BE(t,e){const n=UE("firebase-js-sdk-policy",{createScriptURL:FE}),s=document.createElement("script"),r=`${al}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function VE(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function jE(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await bp(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){ct.error(a)}t("config",r,i)}async function qE(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await bp(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){ct.error(i)}}function HE(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await qE(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await jE(t,e,n,s,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){ct.error(a)}}return r}function zE(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=HE(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function KE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(al)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=30,WE=1e3;class QE{constructor(e={},n=WE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ep=new QE;function YE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function XE(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:YE(s)},i=LE.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function JE(t,e=Ep,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw gt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw gt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new tT;return setTimeout(async()=>{a.abort()},n!==void 0?n:ME),Tp({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Tp(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Ep){var i;const{appId:o,measurementId:a}=t;try{await ZE(s,e)}catch(c){if(a)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await XE(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!eT(l)){if(r.deleteThrottleMetadata(o),a)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?rh(n,r.intervalMillis,GE):rh(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),ct.debug(`Calling attemptFetch again in ${u} millis`),Tp(t,h,s,r)}}function ZE(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eT(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class tT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nT(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(){if(Gd())try{await Wd()}catch(t){return ct.warn(gt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ct.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rT(t,e,n,s,r,i,o){var a;const c=JE(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ct.error(g)),e.push(c);const l=sT().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([c,l]);KE(i)||BE(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[PE]="firebase",d.update=!0,h!=null&&(d[OE]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.app=e}_delete(){return delete fr[this.app.options.appId],Promise.resolve()}}let fr={},yh=[];const vh={};let _a="dataLayer",oT="gtag",_h,Ip,wh=!1;function aT(){const t=[];if(b0()&&t.push("This is a browser extension environment."),E0()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function cT(t,e,n){aT();const s=t.options.appId;if(!s)throw gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(fr[s]!=null)throw gt.create("already-exists",{id:s});if(!wh){VE(_a);const{wrappedGtag:i,gtagCore:o}=zE(fr,yh,vh,_a,oT);Ip=i,_h=o,wh=!0}return fr[s]=rT(t,yh,vh,e,_h,_a,n),new iT(t)}function lT(t=tl()){t=Rt(t);const e=Vs(t,zi);return e.isInitialized()?e.getImmediate():uT(t)}function uT(t,e={}){const n=Vs(t,zi);if(n.isInitialized()){const r=n.getImmediate();if(ji(e,n.getOptions()))return r;throw gt.create("already-initialized")}return n.initialize({options:e})}function hT(t,e,n,s){t=Rt(t),nT(Ip,fr[t.app.options.appId],e,n,s).catch(r=>ct.error(r))}const bh="@firebase/analytics",Eh="0.10.0";function fT(){en(new zt(zi,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return cT(s,r,n)},"PUBLIC")),en(new zt("analytics-internal",t,"PRIVATE")),Tt(bh,Eh),Tt(bh,Eh,"esm2017");function t(e){try{const n=e.getProvider(zi).getImmediate();return{logEvent:(s,r,i)=>hT(n,s,r,i)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}fT();var dT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,cl=cl||{},W=dT||self;function Do(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pT(t){return Object.prototype.hasOwnProperty.call(t,wa)&&t[wa]||(t[wa]=++gT)}var wa="closure_uid_"+(1e9*Math.random()>>>0),gT=0;function mT(t,e,n){return t.call.apply(t.bind,arguments)}function yT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=mT:Je=yT,Je.apply(null,arguments)}function pi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Sn(){this.s=this.s,this.o=this.o}var vT=0;Sn.prototype.s=!1;Sn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vT!=0)&&pT(this)};Sn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ap=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ll(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Th(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Do(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var _T=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function Ar(t){return/^[\s\xa0]*$/.test(t)}function xo(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Bt(t){return xo().indexOf(t)!=-1}function ul(t){return ul[" "](t),t}ul[" "]=function(){};function wT(t,e){var n=fI;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var bT=Bt("Opera"),xs=Bt("Trident")||Bt("MSIE"),Cp=Bt("Edge"),sc=Cp||xs,Sp=Bt("Gecko")&&!(xo().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge"))&&!(Bt("Trident")||Bt("MSIE"))&&!Bt("Edge"),ET=xo().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge");function kp(){var t=W.document;return t?t.documentMode:void 0}var rc;e:{var ba="",Ea=function(){var t=xo();if(Sp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cp)return/Edge\/([\d\.]+)/.exec(t);if(xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ET)return/WebKit\/(\S+)/.exec(t);if(bT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ea&&(ba=Ea?Ea[1]:""),xs){var Ta=kp();if(Ta!=null&&Ta>parseFloat(ba)){rc=String(Ta);break e}}rc=ba}var ic;if(W.document&&xs){var Ih=kp();ic=Ih||parseInt(rc,10)||void 0}else ic=void 0;var TT=ic;function Cr(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sp){e:{try{ul(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:IT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Cr.$.h.call(this)}}Be(Cr,Ze);var IT={2:"touch",3:"pen",4:"mouse"};Cr.prototype.h=function(){Cr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qr="closure_listenable_"+(1e6*Math.random()|0),AT=0;function CT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++AT,this.fa=this.ia=!1}function No(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function hl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ST(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Dp(t){const e={};for(const n in t)e[n]=t[n];return e}const Ah="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ah.length;i++)n=Ah[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ro(t){this.src=t,this.g={},this.h=0}Ro.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ac(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new CT(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function oc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ap(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(No(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ac(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var fl="closure_lm_"+(1e6*Math.random()|0),Ia={};function Np(t,e,n,s,r){if(s&&s.once)return Op(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Np(t,e[i],n,s,r);return null}return n=gl(n),t&&t[qr]?t.O(e,n,jr(s)?!!s.capture:!!s,r):Rp(t,e,n,!1,s,r)}function Rp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=jr(r)?!!r.capture:!!r,a=pl(t);if(a||(t[fl]=a=new Ro(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=kT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)_T||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Mp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kT(){function t(n){return e.call(t.src,t.listener,n)}const e=DT;return t}function Op(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Op(t,e[i],n,s,r);return null}return n=gl(n),t&&t[qr]?t.P(e,n,jr(s)?!!s.capture:!!s,r):Rp(t,e,n,!0,s,r)}function Pp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Pp(t,e[i],n,s,r);else s=jr(s)?!!s.capture:!!s,n=gl(n),t&&t[qr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ac(i,n,s,r),-1<n&&(No(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=pl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ac(e,n,s,r)),(n=-1<t?e[t]:null)&&dl(n))}function dl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[qr])oc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Mp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=pl(e))?(oc(n,t),n.h==0&&(n.src=null,e[fl]=null)):No(t)}}}function Mp(t){return t in Ia?Ia[t]:Ia[t]="on"+t}function DT(t,e){if(t.fa)t=!0;else{e=new Cr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&dl(t),t=n.call(s,e)}return t}function pl(t){return t=t[fl],t instanceof Ro?t:null}var Aa="__closure_events_fn_"+(1e9*Math.random()>>>0);function gl(t){return typeof t=="function"?t:(t[Aa]||(t[Aa]=function(e){return t.handleEvent(e)}),t[Aa])}function Fe(){Sn.call(this),this.i=new Ro(this),this.S=this,this.J=null}Be(Fe,Sn);Fe.prototype[qr]=!0;Fe.prototype.removeEventListener=function(t,e,n,s){Pp(this,t,e,n,s)};function He(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var r=e;e=new Ze(s,t),xp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=gi(o,s,!0,e)&&r}if(o=e.g=t,r=gi(o,s,!0,e)&&r,r=gi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=gi(o,s,!1,e)&&r}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)No(n[s]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Fe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function gi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ml=W.JSON.stringify;class xT{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function NT(){var t=yl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class RT{constructor(){this.h=this.g=null}add(e,n){const s=Lp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Lp=new xT(()=>new OT,t=>t.reset());class OT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function PT(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function MT(t){W.setTimeout(()=>{throw t},0)}let Sr,kr=!1,yl=new RT,$p=()=>{const t=W.Promise.resolve(void 0);Sr=()=>{t.then(LT)}};var LT=()=>{for(var t;t=NT();){try{t.h.call(t.g)}catch(n){MT(n)}var e=Lp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kr=!1};function Oo(t,e){Fe.call(this),this.h=t||1,this.g=e||W,this.j=Je(this.qb,this),this.l=Date.now()}Be(Oo,Fe);x=Oo.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),He(this,"tick"),this.ga&&(vl(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vl(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Oo.$.N.call(this),vl(this),delete this.g};function _l(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Fp(t){t.g=_l(()=>{t.g=null,t.i&&(t.i=!1,Fp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $T extends Sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fp(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(t){Sn.call(this),this.h=t,this.g={}}Be(Dr,Sn);var Ch=[];function Up(t,e,n,s){Array.isArray(n)||(n&&(Ch[0]=n.toString()),n=Ch);for(var r=0;r<n.length;r++){var i=Np(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Bp(t){hl(t.g,function(e,n){this.g.hasOwnProperty(n)&&dl(e)},t),t.g={}}Dr.prototype.N=function(){Dr.$.N.call(this),Bp(this)};Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Po(){this.g=!0}Po.prototype.Ea=function(){this.g=!1};function FT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function UT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function vs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+VT(t,n)+(s?" "+s:"")})}function BT(t,e){t.info(function(){return"TIMEOUT: "+e})}Po.prototype.info=function(){};function VT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ml(n)}catch{return e}}var is={},Sh=null;function Mo(){return Sh=Sh||new Fe}is.Ta="serverreachability";function Vp(t){Ze.call(this,is.Ta,t)}Be(Vp,Ze);function xr(t){const e=Mo();He(e,new Vp(e))}is.STAT_EVENT="statevent";function jp(t,e){Ze.call(this,is.STAT_EVENT,t),this.stat=e}Be(jp,Ze);function ot(t){const e=Mo();He(e,new jp(e,t))}is.Ua="timingevent";function qp(t,e){Ze.call(this,is.Ua,t),this.size=e}Be(qp,Ze);function Hr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Lo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Hp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wl(){}wl.prototype.h=null;function kh(t){return t.h||(t.h=t.i())}function zp(){}var zr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function bl(){Ze.call(this,"d")}Be(bl,Ze);function El(){Ze.call(this,"c")}Be(El,Ze);var cc;function $o(){}Be($o,wl);$o.prototype.g=function(){return new XMLHttpRequest};$o.prototype.i=function(){return{}};cc=new $o;function Kr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Dr(this),this.P=jT,t=sc?125:void 0,this.V=new Oo(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Kp}function Kp(){this.i=null,this.g="",this.h=!1}var jT=45e3,lc={},Ki={};x=Kr.prototype;x.setTimeout=function(t){this.P=t};function uc(t,e,n){t.L=1,t.v=Uo(tn(e)),t.s=n,t.S=!0,Gp(t,null)}function Gp(t,e){t.G=Date.now(),Gr(t),t.A=tn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),tg(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Kp,t.g=Eg(t.l,n?e:null,!t.s),0<t.O&&(t.M=new $T(Je(t.Pa,t,t.g),t.O)),Up(t.U,t.g,"readystatechange",t.nb),e=t.I?Dp(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xr(),FT(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&jt(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||sc||this.g&&(this.h.h||this.g.ja()||Rh(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?xr(3):xr(2)),Fo(this);var n=this.g.da();this.ca=n;t:if(Wp(this)){var s=Rh(this.g);t="";var r=s.length,i=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),dr(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,UT(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ar(a)){var l=a;break t}}l=null}if(n=l)vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hc(this,n);else{this.i=!1,this.o=3,ot(12),jn(this),dr(this);break e}}this.S?(Qp(this,u,o),sc&&this.i&&u==3&&(Up(this.U,this.V,"tick",this.mb),this.V.start())):(vs(this.j,this.m,o,null),hc(this,o)),u==4&&jn(this),this.i&&!this.J&&(u==4?vg(this.l,this):(this.i=!1,Gr(this)))}else lI(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),jn(this),dr(this)}}}catch{}finally{}};function Wp(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Qp(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=qT(t,n),r==Ki){e==4&&(t.o=4,ot(14),s=!1),vs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==lc){t.o=4,ot(15),vs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vs(t.j,t.m,r,null),hc(t,r);Wp(t)&&r!=Ki&&r!=lc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),kl(e),e.M=!0,ot(11))):(vs(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),dr(t))}x.mb=function(){if(this.g){var t=jt(this.g),e=this.g.ja();this.C<e.length&&(Fo(this),Qp(this,t,e),this.i&&t!=4&&Gr(this))}};function qT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ki:(n=Number(e.substring(n,s)),isNaN(n)?lc:(s+=1,s+n>e.length?Ki:(e=e.slice(s,s+n),t.C=s+n,e)))}x.cancel=function(){this.J=!0,jn(this)};function Gr(t){t.Y=Date.now()+t.P,Yp(t,t.P)}function Yp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hr(Je(t.lb,t),e)}function Fo(t){t.B&&(W.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(BT(this.j,this.A),this.L!=2&&(xr(),ot(17)),jn(this),this.o=2,dr(this)):Yp(this,this.Y-t)};function dr(t){t.l.H==0||t.J||vg(t.l,t)}function jn(t){Fo(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,vl(t.V),Bp(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function hc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||fc(n.i,t))){if(!t.K&&fc(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Qi(n),jo(n);else break e;Sl(n),ot(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Hr(Je(n.ib,n),6e3));if(1>=rg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else qn(n,11)}else if((t.K||n.g==t)&&Qi(n),!Ar(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const T=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var i=s.i;i.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Tl(i,i.h),i.h=null))}if(s.F){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.Da=I,ye(s.I,s.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=bg(s,s.J?s.pa:null,s.Y),o.K){ig(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Fo(a),Gr(a)),s.g=o}else mg(s);0<n.j.length&&qo(n)}else l[0]!="stop"&&l[0]!="close"||qn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?qn(n,7):Cl(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}xr(4)}catch{}}function HT(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Do(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function zT(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Do(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Xp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Do(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zT(t),s=HT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Gn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gn){this.h=t.h,Gi(this,t.j),this.s=t.s,this.g=t.g,Wi(this,t.m),this.l=t.l;var e=t.i,n=new Nr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Dh(this,n),this.o=t.o}else t&&(e=String(t).match(Jp))?(this.h=!1,Gi(this,e[1]||"",!0),this.s=sr(e[2]||""),this.g=sr(e[3]||"",!0),Wi(this,e[4]),this.l=sr(e[5]||"",!0),Dh(this,e[6]||"",!0),this.o=sr(e[7]||"")):(this.h=!1,this.i=new Nr(null,this.h))}Gn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rr(e,xh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rr(e,xh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(rr(n,n.charAt(0)=="/"?QT:WT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rr(n,XT)),t.join("")};function tn(t){return new Gn(t)}function Gi(t,e,n){t.j=n?sr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Dh(t,e,n){e instanceof Nr?(t.i=e,JT(t.i,t.h)):(n||(e=rr(e,YT)),t.i=new Nr(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function Uo(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function sr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xh=/[#\/\?@]/g,WT=/[#\?:]/g,QT=/[#\?]/g,YT=/[#\?@]/g,XT=/#/g;function Nr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function kn(t){t.g||(t.g=new Map,t.h=0,t.i&&KT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Nr.prototype;x.add=function(t,e){kn(this),this.i=null,t=js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zp(t,e){kn(t),e=js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eg(t,e){return kn(t),e=js(t,e),t.g.has(e)}x.forEach=function(t,e){kn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};x.ta=function(){kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};x.Z=function(t){kn(this);let e=[];if(typeof t=="string")eg(this,t)&&(e=e.concat(this.g.get(js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return kn(this),this.i=null,t=js(this,t),eg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function tg(t,e,n){Zp(t,e),0<n.length&&(t.i=null,t.g.set(js(t,e),ll(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JT(t,e){e&&!t.j&&(kn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Zp(this,s),tg(this,r,n))},t)),t.j=e}var ZT=class{constructor(t,e){this.g=t,this.map=e}};function ng(t){this.l=t||eI,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eI=10;function sg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function rg(t){return t.h?1:t.g?t.g.size:0}function fc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Tl(t,e){t.g?t.g.add(e):t.h=e}function ig(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ng.prototype.cancel=function(){if(this.i=og(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function og(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ll(t.i)}var tI=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function nI(){this.g=new tI}function sI(t,e,n){const s=n||"";try{Xp(t,function(r,i){let o=r;jr(r)&&(o=ml(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function rI(t,e){const n=new Po;if(W.Image){const s=new Image;s.onload=pi(mi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=pi(mi,n,s,"TestLoadImage: error",!1,e),s.onabort=pi(mi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=pi(mi,n,s,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function mi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Wr(t){this.l=t.fc||null,this.j=t.ob||!1}Be(Wr,wl);Wr.prototype.g=function(){return new Bo(this.l,this.j)};Wr.prototype.i=function(t){return function(){return t}}({});function Bo(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Il,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(Bo,Fe);var Il=0;x=Bo.prototype;x.open=function(t,e){if(this.readyState!=Il)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rr(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qr(this)),this.readyState=Il};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ag(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ag(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qr(this):Rr(this),this.readyState==3&&ag(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Qr(this))};x.Ya=function(t){this.g&&(this.response=t,Qr(this))};x.ka=function(){this.g&&Qr(this)};function Qr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rr(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Rr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iI=W.JSON.parse;function Ie(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=cg,this.L=this.M=!1}Be(Ie,Fe);var cg="",oI=/^https?$/i,aI=["POST","PUT"];x=Ie.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cc.g(),this.C=this.u?kh(this.u):kh(cc),this.g.onreadystatechange=Je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Nh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=W.FormData&&t instanceof W.FormData,!(0<=Ap(aI,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{hg(this),0<this.B&&((this.L=cI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.ua,this)):this.A=_l(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nh(this,i)}};function cI(t){return xs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof cl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function Nh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lg(t),Vo(t)}function lg(t){t.F||(t.F=!0,He(t,"complete"),He(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),Vo(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vo(this,!0)),Ie.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?ug(this):this.kb())};x.kb=function(){ug(this)};function ug(t){if(t.h&&typeof cl<"u"&&(!t.C[1]||jt(t)!=4||t.da()!=2)){if(t.v&&jt(t)==4)_l(t.La,0,t);else if(He(t,"readystatechange"),jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Jp)[1]||null;!r&&W.self&&W.self.location&&(r=W.self.location.protocol.slice(0,-1)),s=!oI.test(r?r.toLowerCase():"")}n=s}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var i=2<jt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",lg(t)}}finally{Vo(t)}}}}function Vo(t,e){if(t.g){hg(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=s}catch{}}}function hg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function jt(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iI(e)}};function Rh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case cg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function lI(t){const e={};t=(t.g&&2<=jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ar(t[s]))continue;var n=PT(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}ST(e,function(s){return s.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fg(t){let e="";return hl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Al(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=fg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function Xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function dg(t){this.Ga=0,this.j=[],this.l=new Po,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xs("baseRetryDelayMs",5e3,t),this.hb=Xs("retryDelaySeedMs",1e4,t),this.eb=Xs("forwardChannelMaxRetries",2,t),this.xa=Xs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ng(t&&t.concurrentRequestLimit),this.Ja=new nI,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=dg.prototype;x.ra=8;x.H=1;function Cl(t){if(pg(t),t.H==3){var e=t.W++,n=tn(t.I);if(ye(n,"SID",t.K),ye(n,"RID",e),ye(n,"TYPE","terminate"),Yr(t,n),e=new Kr(t,t.l,e),e.L=2,e.v=Uo(tn(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=Eg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Gr(e)}wg(t)}function jo(t){t.g&&(kl(t),t.g.cancel(),t.g=null)}function pg(t){jo(t),t.u&&(W.clearTimeout(t.u),t.u=null),Qi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function qo(t){if(!sg(t.i)&&!t.m){t.m=!0;var e=t.Na;Sr||$p(),kr||(Sr(),kr=!0),yl.add(e,t),t.C=0}}function uI(t,e){return rg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Hr(Je(t.Na,t,e),_g(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Kr(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Dp(i),xp(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gg(this,r,e),n=tn(this.I),ye(n,"RID",t),ye(n,"CVER",22),this.F&&ye(n,"X-HTTP-Session-Id",this.F),Yr(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(fg(i)))+"&"+e:this.o&&Al(n,this.o,i)),Tl(this.i,r),this.bb&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),r.aa=!0,uc(r,n,null)):uc(r,n,e),this.H=2}}else this.H==3&&(t?Oh(this,t):this.j.length==0||sg(this.i)||Oh(this))};function Oh(t,e){var n;e?n=e.m:n=t.W++;const s=tn(t.I);ye(s,"SID",t.K),ye(s,"RID",n),ye(s,"AID",t.V),Yr(t,s),t.o&&t.s&&Al(s,t.o,t.s),n=new Kr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=gg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Tl(t.i,n),uc(n,s,e)}function Yr(t,e){t.na&&hl(t.na,function(n,s){ye(e,s,n)}),t.h&&Xp({},function(n,s){ye(e,s,n)})}function gg(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Je(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{sI(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function mg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Sr||$p(),kr||(Sr(),kr=!0),yl.add(e,t),t.A=0}}function Sl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Hr(Je(t.Ma,t),_g(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,yg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Hr(Je(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),jo(this),yg(this))};function kl(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function yg(t){t.g=new Kr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=tn(t.wa);ye(e,"RID","rpc"),ye(e,"SID",t.K),ye(e,"AID",t.V),ye(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ye(e,"TO",t.qa),ye(e,"TYPE","xmlhttp"),Yr(t,e),t.o&&t.s&&Al(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Uo(tn(e)),n.s=null,n.S=!0,Gp(n,t)}x.ib=function(){this.v!=null&&(this.v=null,jo(this),Sl(this),ot(19))};function Qi(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function vg(t,e){var n=null;if(t.g==e){Qi(t),kl(t),t.g=null;var s=2}else if(fc(t.i,e))n=e.F,ig(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Mo(),He(s,new qp(s,n)),qo(t)}else mg(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&uI(t,e)||s==2&&Sl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}}function _g(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function qn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Je(t.pb,t);n||(n=new Gn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Gi(n,"https"),Uo(n)),rI(n.toString(),s)}else ot(2);t.H=0,t.h&&t.h.za(e),wg(t),pg(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function wg(t){if(t.H=0,t.ma=[],t.h){const e=og(t.i);(e.length!=0||t.j.length!=0)&&(Th(t.ma,e),Th(t.ma,t.j),t.i.i.length=0,ll(t.j),t.j.length=0),t.h.ya()}}function bg(t,e,n){var s=n instanceof Gn?tn(n):new Gn(n);if(s.g!="")e&&(s.g=e+"."+s.g),Wi(s,s.m);else{var r=W.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Gn(null);s&&Gi(i,s),e&&(i.g=e),r&&Wi(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&ye(s,n,e),ye(s,"VER",t.ra),Yr(t,s),s}function Eg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ie(new Wr({ob:!0})):new Ie(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function Tg(){}x=Tg.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Yi(){if(xs&&!(10<=Number(TT)))throw Error("Environmental error: no available transport.")}Yi.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Fe.call(this),this.g=new dg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ar(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ar(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qs(this)}Be(mt,Fe);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=bg(t,null,t.Y),qo(t)};mt.prototype.close=function(){Cl(this.g)};mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ml(t),t=n);e.j.push(new ZT(e.fb++,t)),e.H==3&&qo(e)};mt.prototype.N=function(){this.g.h=null,delete this.j,Cl(this.g),delete this.g,mt.$.N.call(this)};function Ig(t){bl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Ig,bl);function Ag(){El.call(this),this.status=1}Be(Ag,El);function qs(t){this.g=t}Be(qs,Tg);qs.prototype.Ba=function(){He(this.g,"a")};qs.prototype.Aa=function(t){He(this.g,new Ig(t))};qs.prototype.za=function(t){He(this.g,new Ag)};qs.prototype.ya=function(){He(this.g,"b")};function hI(){this.blockSize=-1}function Ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(Ot,hI);Ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ca(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Ot.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Ca(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Ca(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Ca(this,s),r=0;break}}this.h=r,this.i+=e};Ot.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ue(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var fI={};function Dl(t){return-128<=t&&128>t?wT(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function qt(t){if(isNaN(t)||!isFinite(t))return Es;if(0>t)return qe(qt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=dc;return new ue(e,0)}function Cg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return qe(Cg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=qt(Math.pow(e,8)),s=Es,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=qt(Math.pow(e,i)),s=s.R(i).add(qt(o))):(s=s.R(n),s=s.add(qt(o)))}return s}var dc=4294967296,Es=Dl(0),pc=Dl(1),Ph=Dl(16777216);x=ue.prototype;x.ea=function(){if(wt(this))return-qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:dc+s)*e,e*=dc}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xt(this))return"0";if(wt(this))return"-"+qe(this).toString(t);for(var e=qt(Math.pow(t,6)),n=this,s="";;){var r=Ji(n,e).g;n=Xi(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Xt(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function wt(t){return t.h==-1}x.X=function(t){return t=Xi(this,t),wt(t)?-1:Xt(t)?0:1};function qe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ue(n,~t.h).add(pc)}x.abs=function(){return wt(this)?qe(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function Xi(t,e){return t.add(qe(e))}x.R=function(t){if(Xt(this)||Xt(t))return Es;if(wt(this))return wt(t)?qe(this).R(qe(t)):qe(qe(this).R(t));if(wt(t))return qe(this.R(qe(t)));if(0>this.X(Ph)&&0>t.X(Ph))return qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,yi(n,2*s+2*r),n[2*s+2*r+1]+=i*c,yi(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,yi(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,yi(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ue(n,0)};function yi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Js(t,e){this.g=t,this.h=e}function Ji(t,e){if(Xt(e))throw Error("division by zero");if(Xt(t))return new Js(Es,Es);if(wt(t))return e=Ji(qe(t),e),new Js(qe(e.g),qe(e.h));if(wt(e))return e=Ji(t,qe(e)),new Js(qe(e.g),e.h);if(30<t.g.length){if(wt(t)||wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pc,s=e;0>=s.X(t);)n=Mh(n),s=Mh(s);var r=ds(n,1),i=ds(s,1);for(s=ds(s,2),n=ds(n,2);!Xt(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=ds(s,1),n=ds(n,1)}return e=Xi(t,r.R(e)),new Js(r,e)}for(r=Es;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=qt(n),o=i.R(e);wt(o)||0<o.X(t);)n-=s,i=qt(n),o=i.R(e);Xt(i)&&(i=pc),r=r.add(i),t=Xi(t,o)}return new Js(r,t)}x.gb=function(t){return Ji(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ue(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ue(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ue(n,this.h^t.h)};function Mh(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ue(n,t.h)}function ds(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ue(r,t.h)}Yi.prototype.createWebChannel=Yi.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;Lo.NO_ERROR=0;Lo.TIMEOUT=8;Lo.HTTP_ERROR=6;Hp.COMPLETE="complete";zp.EventType=zr;zr.OPEN="a";zr.CLOSE="b";zr.ERROR="c";zr.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;Ot.prototype.digest=Ot.prototype.l;Ot.prototype.reset=Ot.prototype.reset;Ot.prototype.update=Ot.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=qt;ue.fromString=Cg;var dI=function(){return new Yi},pI=function(){return Mo()},Sa=Lo,gI=Hp,mI=is,Lh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yI=Wr,vi=zp,vI=Ie,_I=Ot,Ts=ue;const $h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Zc("@firebase/firestore");function Fh(){return Zn.logLevel}function $(t,...e){if(Zn.logLevel<=le.DEBUG){const n=e.map(xl);Zn.debug(`Firestore (${Hs}): ${t}`,...n)}}function nn(t,...e){if(Zn.logLevel<=le.ERROR){const n=e.map(xl);Zn.error(`Firestore (${Hs}): ${t}`,...n)}}function Ns(t,...e){if(Zn.logLevel<=le.WARN){const n=e.map(xl);Zn.warn(`Firestore (${Hs}): ${t}`,...n)}}function xl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw nn(e),new Error(e)}function _e(t,e){t||K()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class bI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EI{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_e(typeof s.accessToken=="string"),new Sg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new Ke(e)}}class TI{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class II{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new TI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.T=n.token,new AI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=SI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function Rs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Me(0,0))}static max(){return new X(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Or?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Or{construct(e,n,s){return new ve(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new P(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const kI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Or{construct(e,n,s){return new Ye(e,n,s)}static isValidIdentifier(e){return kI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new P(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new P(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new P(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ve.fromString(e))}static fromName(e){return new U(ve.fromString(e).popFirst(5))}static empty(){return new U(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ve(e.slice()))}}function DI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=X.fromTimestamp(s===1e9?new Me(n+1,0):new Me(n,s));return new In(r,U.empty(),e)}function xI(t){return new In(t.readTime,t.key,-1)}class In{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new In(X.min(),U.empty(),-1)}static max(){return new In(X.max(),U.empty(),-1)}}function NI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==RI)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(r=>r?E.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new E((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new E((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Jr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Nl.ct=-1;function Ho(t){return t==null}function Zi(t){return t===0&&1/t==-1/0}function PI(t){return typeof t=="number"&&Number.isInteger(t)&&!Zi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _i(this.root,e,this.comparator,!1)}getReverseIterator(){return new _i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _i(this.root,e,this.comparator,!0)}}class _i{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??je.RED,this.left=r??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new je(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bh(this.data.getIterator())}getIteratorFrom(e){return new Bh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Bh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new et(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new xg("Invalid base64 string: "+r):r}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const MI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(_e(!!t),typeof t=="string"){let e=0;const n=MI.exec(t);if(_e(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ol(t){const e=t.mapValue.fields.__previous_value__;return Rl(e)?Ol(e):e}function Pr(t){const e=An(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rl(t)?4:$I(t)?9007199254740991:10:K()}function Kt(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pr(t).isEqual(Pr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=An(s.timestampValue),o=An(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return es(s.bytesValue).isEqual(es(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return xe(s.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return xe(s.integerValue)===xe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=xe(s.doubleValue),o=xe(r.doubleValue);return i===o?Zi(i)===Zi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Uh(i)!==Uh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Kt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Lr(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function Os(t,e){if(t===e)return 0;const n=ts(t),s=ts(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=xe(r.integerValue||r.doubleValue),a=xe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Vh(t.timestampValue,e.timestampValue);case 4:return Vh(Pr(t),Pr(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(r,i){const o=es(r),a=es(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ce(o[c],a[c]);if(l!==0)return l}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ce(xe(r.latitude),xe(i.latitude));return o!==0?o:ce(xe(r.longitude),xe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Os(o[c],a[c]);if(l)return l}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===wi.mapValue&&i===wi.mapValue)return 0;if(r===wi.mapValue)return 1;if(i===wi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ce(a[u],l[u]);if(h!==0)return h;const d=Os(o[a[u]],c[l[u]]);if(d!==0)return d}return ce(a.length,l.length)}(t.mapValue,e.mapValue);default:throw K()}}function Vh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=An(t),s=An(e),r=ce(n.seconds,s.seconds);return r!==0?r:ce(n.nanos,s.nanos)}function Ps(t){return gc(t)}function gc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=An(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?es(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=gc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${gc(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function jh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mc(t){return!!t&&"integerValue"in t}function Pl(t){return!!t&&"arrayValue"in t}function qh(t){return!!t&&"nullValue"in t}function Hh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ni(t){return!!t&&"mapValue"in t}function pr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=pr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $I(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ni(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(n)}setAll(e){let n=Ye.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=pr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ni(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ni(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){zs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new bt(pr(this.value))}}function Ng(t){const e=[];return zs(t.fields,(n,s)=>{const r=new Ye([n]);if(Ni(s)){const i=Ng(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new We(e,0,X.min(),X.min(),X.min(),bt.empty(),0)}static newFoundDocument(e,n,s,r){return new We(e,1,n,X.min(),s,r,0)}static newNoDocument(e,n){return new We(e,2,n,X.min(),X.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new We(e,3,n,X.min(),X.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.position=e,this.inclusive=n}}function zh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=U.comparator(U.fromName(o.referenceValue),n.key):s=Os(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n="asc"){this.field=e,this.dir=n}}function FI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{}class Ne extends Rg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new BI(e,n,s):n==="array-contains"?new qI(e,s):n==="in"?new HI(e,s):n==="not-in"?new zI(e,s):n==="array-contains-any"?new KI(e,s):new Ne(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new VI(e,s):new jI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Os(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(Os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pt extends Rg{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Pt(e,n)}matches(e){return Og(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Og(t){return t.op==="and"}function Pg(t){return UI(t)&&Og(t)}function UI(t){for(const e of t.filters)if(e instanceof Pt)return!1;return!0}function yc(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(Pg(t))return t.filters.map(e=>yc(e)).join(",");{const e=t.filters.map(n=>yc(n)).join(",");return`${t.op}(${e})`}}function Mg(t,e){return t instanceof Ne?function(n,s){return s instanceof Ne&&n.op===s.op&&n.field.isEqual(s.field)&&Kt(n.value,s.value)}(t,e):t instanceof Pt?function(n,s){return s instanceof Pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Mg(i,s.filters[o]),!0):!1}(t,e):void K()}function Lg(t){return t instanceof Ne?function(e){return`${e.field.canonicalString()} ${e.op} ${Ps(e.value)}`}(t):t instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(Lg).join(" ,")+"}"}(t):"Filter"}class BI extends Ne{constructor(e,n,s){super(e,n,s),this.key=U.fromName(s.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class VI extends Ne{constructor(e,n){super(e,"in",n),this.keys=$g("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jI extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=$g("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $g(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>U.fromName(s.referenceValue))}class qI extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pl(n)&&Lr(n.arrayValue,this.value)}}class HI extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lr(this.value.arrayValue,n)}}class zI extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lr(this.value.arrayValue,n)}}class KI extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Lr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Gh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new GI(t,e,n,s,r,i,o)}function Ml(t){const e=Z(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>yc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ho(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ps(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ps(s)).join(",")),e.dt=n}return e.dt}function Ll(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kh(t.startAt,e.startAt)&&Kh(t.endAt,e.endAt)}function vc(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function WI(t,e,n,s,r,i,o,a){return new Ks(t,e,n,s,r,i,o,a)}function Fg(t){return new Ks(t)}function Wh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $l(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ug(t){return t.collectionGroup!==null}function As(t){const e=Z(t);if(e.wt===null){e.wt=[];const n=zo(e),s=$l(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Is(n)),e.wt.push(new Is(Ye.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Is(Ye.keyField(),i))}}}return e.wt}function sn(t){const e=Z(t);if(!e._t)if(e.limitType==="F")e._t=Gh(e.path,e.collectionGroup,As(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of As(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Is(i.field,o))}const s=e.endAt?new eo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eo(e.startAt.position,e.startAt.inclusive):null;e._t=Gh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function _c(t,e){e.getFirstInequalityField(),zo(t);const n=t.filters.concat([e]);return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function to(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ko(t,e){return Ll(sn(t),sn(e))&&t.limitType===e.limitType}function Bg(t){return`${Ml(sn(t))}|lt:${t.limitType}`}function wc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Lg(s)).join(", ")}]`),Ho(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ps(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ps(s)).join(",")),`Target(${n})`}(sn(t))}; limitType=${t.limitType})`}function Go(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):U.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of As(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=zh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,As(n),s)||n.endAt&&!function(r,i,o){const a=zh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,As(n),s))}(t,e)}function QI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vg(t){return(e,n)=>{let s=!1;for(const r of As(t)){const i=YI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function YI(t,e,n){const s=t.field.isKeyField()?U.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Os(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Dg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new Ee(U.comparator);function rn(){return XI}const jg=new Ee(U.comparator);function ir(...t){let e=jg;for(const n of t)e=e.insert(n.key,n);return e}function qg(t){let e=jg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Hn(){return gr()}function Hg(){return gr()}function gr(){return new Gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const JI=new Ee(U.comparator),ZI=new et(U.comparator);function se(...t){let e=ZI;for(const n of t)e=e.add(n);return e}const e1=new et(ce);function t1(){return e1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zi(e)?"-0":e}}function Kg(t){return{integerValue:""+t}}function n1(t,e){return PI(e)?Kg(e):zg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this._=void 0}}function s1(t,e,n){return t instanceof no?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Rl(r)&&(r=Ol(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof $r?Wg(t,e):t instanceof Fr?Qg(t,e):function(s,r){const i=Gg(s,r),o=Qh(i)+Qh(s.gt);return mc(i)&&mc(s.gt)?Kg(o):zg(s.serializer,o)}(t,e)}function r1(t,e,n){return t instanceof $r?Wg(t,e):t instanceof Fr?Qg(t,e):n}function Gg(t,e){return t instanceof so?mc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class no extends Wo{}class $r extends Wo{constructor(e){super(),this.elements=e}}function Wg(t,e){const n=Yg(e);for(const s of t.elements)n.some(r=>Kt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Fr extends Wo{constructor(e){super(),this.elements=e}}function Qg(t,e){let n=Yg(e);for(const s of t.elements)n=n.filter(r=>!Kt(r,s));return{arrayValue:{values:n}}}class so extends Wo{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Qh(t){return xe(t.integerValue||t.doubleValue)}function Yg(t){return Pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function i1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof $r&&s instanceof $r||n instanceof Fr&&s instanceof Fr?Rs(n.elements,s.elements,Kt):n instanceof so&&s instanceof so?Kt(n.gt,s.gt):n instanceof no&&s instanceof no}(t.transform,e.transform)}class o1{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ri(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qo{}function Xg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zg(t.key,Jt.none()):new Zr(t.key,t.data,Jt.none());{const n=t.data,s=bt.empty();let r=new et(Ye.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new os(t.key,s,new Dt(r.toArray()),Jt.none())}}function a1(t,e,n){t instanceof Zr?function(s,r,i){const o=s.value.clone(),a=Xh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof os?function(s,r,i){if(!Ri(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Xh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Jg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function mr(t,e,n,s){return t instanceof Zr?function(r,i,o,a){if(!Ri(r.precondition,i))return o;const c=r.value.clone(),l=Jh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof os?function(r,i,o,a){if(!Ri(r.precondition,i))return o;const c=Jh(r.fieldTransforms,a,i),l=i.data;return l.setAll(Jg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ri(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function c1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Gg(s.transform,r||null);i!=null&&(n===null&&(n=bt.empty()),n.set(s.field,i))}return n||null}function Yh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rs(n,s,(r,i)=>i1(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zr extends Qo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class os extends Qo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Xh(t,e,n){const s=new Map;_e(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,r1(o,a,n[r]))}return s}function Jh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,s1(i,o,e))}return s}class Zg extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class l1 extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&a1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=mr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=mr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Hg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Xg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,s)=>Yh(n,s))&&Rs(this.baseMutations,e.baseMutations,(n,s)=>Yh(n,s))}}class Fl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){_e(e.mutations.length===s.length);let r=JI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,re;function d1(t){switch(t){default:return K();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function em(t){if(t===void 0)return nn("GRPC error has no .code"),y.UNKNOWN;switch(t){case De.OK:return y.OK;case De.CANCELLED:return y.CANCELLED;case De.UNKNOWN:return y.UNKNOWN;case De.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case De.INTERNAL:return y.INTERNAL;case De.UNAVAILABLE:return y.UNAVAILABLE;case De.UNAUTHENTICATED:return y.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case De.NOT_FOUND:return y.NOT_FOUND;case De.ALREADY_EXISTS:return y.ALREADY_EXISTS;case De.PERMISSION_DENIED:return y.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case De.ABORTED:return y.ABORTED;case De.OUT_OF_RANGE:return y.OUT_OF_RANGE;case De.UNIMPLEMENTED:return y.UNIMPLEMENTED;case De.DATA_LOSS:return y.DATA_LOSS;default:return K()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return bi}static getOrCreateInstance(){return bi===null&&(bi=new Ul),bi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let bi=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new Ts([4294967295,4294967295],0);function Zh(t){const e=p1().encode(t),n=new _I;return n.update(e),new Uint8Array(n.digest())}function ef(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ts([n,s],0),new Ts([r,i],0)]}class Bl{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new or(`Invalid padding: ${n}`);if(s<0)throw new or(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new or(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new or(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ts.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(Ts.fromNumber(s)));return r.compare(g1)===1&&(r=new Ts([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Zh(e),[s,r]=ef(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bl(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Zh(e),[s,r]=ef(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ei.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Yo(X.min(),r,new Ee(ce),rn(),se())}}class ei{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ei(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class tm{constructor(e,n){this.targetId=e,this.Vt=n}}class nm{constructor(e,n,s=tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class tf{constructor(){this.St=0,this.Dt=sf(),this.Ct=tt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=se(),n=se(),s=se();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new ei(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=sf()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class m1{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=rn(),this.zt=nf(),this.Wt=new Ee(ce)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(vc(o))if(r===0){const a=new U(o.path);this.Yt(s,a,We.newNoDocument(a,X.min()))}else _e(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=Ul.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,g,T,I,S,H;const Q={localCacheCount:u,existenceFilterCount:h.count},G=h.unchangedNames;return G&&(Q.bloomFilter={applied:l===0,hashCount:(d=G==null?void 0:G.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(I=(T=(g=G==null?void 0:G.bits)===null||g===void 0?void 0:g.bitmap)===null||T===void 0?void 0:T.length)!==null&&I!==void 0?I:0,padding:(H=(S=G==null?void 0:G.bits)===null||S===void 0?void 0:S.padding)!==null&&H!==void 0?H:0}),Q}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=es(i).toUint8Array()}catch(u){if(u instanceof xg)return Ns("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Bl(c,o,a)}catch(u){return Ns(u instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&vc(a.target)){const c=new U(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,We.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=se();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Yo(e,n,this.Wt,this.jt,s);return this.jt=rn(),this.zt=nf(),this.Wt=new Ee(ce),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new tf,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new et(ce),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new tf),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function nf(){return new Ee(U.comparator)}function sf(){return new Ee(U.comparator)}const y1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),v1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_1=(()=>({and:"AND",or:"OR"}))();class w1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bc(t,e){return t.useProto3Json||Ho(e)?e:{value:e}}function ro(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b1(t,e){return ro(t,e.toTimestamp())}function Ht(t){return _e(!!t),X.fromTimestamp(function(e){const n=An(e);return new Me(n.seconds,n.nanos)}(t))}function Vl(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function rm(t){const e=ve.fromString(t);return _e(cm(e)),e}function Ec(t,e){return Vl(t.databaseId,e.path)}function ka(t,e){const n=rm(e);if(n.get(1)!==t.databaseId.projectId)throw new P(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(im(n))}function Tc(t,e){return Vl(t.databaseId,e)}function E1(t){const e=rm(t);return e.length===4?ve.emptyPath():im(e)}function Ic(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function im(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rf(t,e,n){return{name:Ec(t,e),fields:n.value.mapValue.fields}}function T1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(_e(l===void 0||typeof l=="string"),tt.fromBase64String(l||"")):(_e(l===void 0||l instanceof Uint8Array),tt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:em(c.code);return new P(l,c.message||"")}(o);n=new nm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ka(t,s.document.name),i=Ht(s.document.updateTime),o=s.document.createTime?Ht(s.document.createTime):X.min(),a=new bt({mapValue:{fields:s.document.fields}}),c=We.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Oi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ka(t,s.document),i=s.readTime?Ht(s.readTime):X.min(),o=We.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Oi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ka(t,s.document),i=s.removedTargetIds||[];n=new Oi([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new f1(r,i),a=s.targetId;n=new tm(a,o)}}return n}function I1(t,e){let n;if(e instanceof Zr)n={update:rf(t,e.key,e.value)};else if(e instanceof Zg)n={delete:Ec(t,e.key)};else if(e instanceof os)n={update:rf(t,e.key,e.data),updateMask:O1(e.fieldMask)};else{if(!(e instanceof l1))return K();n={verify:Ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof no)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $r)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof so)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:b1(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function A1(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ht(s.updateTime):Ht(r);return i.isEqual(X.min())&&(i=Ht(r)),new o1(i,s.transformResults||[])}(n,e))):[]}function C1(t,e){return{documents:[Tc(t,e.path)]}}function S1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Tc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Tc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return am(Pt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ms(u.field),direction:x1(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=bc(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function k1(t){let e=E1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){_e(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=om(u);return h instanceof Pt&&Pg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Is(ys(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ho(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new eo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new eo(d,h)}(n.endAt)),WI(e,r,o,i,a,"F",c,l)}function D1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function om(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ys(e.unaryFilter.field);return Ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ys(e.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ys(e.unaryFilter.field);return Ne.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ys(e.unaryFilter.field);return Ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Ne.create(ys(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(n=>om(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function x1(t){return y1[t]}function N1(t){return v1[t]}function R1(t){return _1[t]}function ms(t){return{fieldPath:t.canonicalString()}}function ys(t){return Ye.fromServerFormat(t.fieldPath)}function am(t){return t instanceof Ne?function(e){if(e.op==="=="){if(Hh(e.value))return{unaryFilter:{field:ms(e.field),op:"IS_NAN"}};if(qh(e.value))return{unaryFilter:{field:ms(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Hh(e.value))return{unaryFilter:{field:ms(e.field),op:"IS_NOT_NAN"}};if(qh(e.value))return{unaryFilter:{field:ms(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(e.field),op:N1(e.op),value:e.value}}}(t):t instanceof Pt?function(e){const n=e.getFilters().map(s=>am(s));return n.length===1?n[0]:{compositeFilter:{op:R1(e.op),filters:n}}}(t):K()}function O1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,s,r,i=X.min(),o=X.min(),a=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.fe=e}}function M1(t){const e=k1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?to(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(){this.rn=new $1}addToCollectionParentIndex(e,n){return this.rn.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(In.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(In.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class $1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new et(ve.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new et(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ms(0)}static Mn(){return new Ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.changes=new Gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&mr(s.mutation,r,Dt.empty(),Me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=Hn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ir();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Hn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=rn();const o=gr(),a=gr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof os)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),mr(u.mutation,l,u.mutation.getFieldMask(),Me.now())):o.set(l.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new U1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=gr();let r=new Ee((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Dt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Hg();u.forEach(d=>{if(!i.has(d)){const g=Xg(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ug(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):E.resolve(Hn());let a=-1,c=i;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:qg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(s=>{let r=ir();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ir();return this.indexManager.getCollectionParents(e,r).next(o=>E.forEach(o,a=>{const c=function(l,u){return new Ks(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,We.newInvalidDocument(l)))});let o=ir();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&mr(l.mutation,c,Dt.empty(),Me.now()),Go(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return E.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Ht(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:M1(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(){this.overlays=new Ee(U.comparator),this.ls=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Hn();return E.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const r=Hn(),i=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return E.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ee((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Hn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Hn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return E.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new h1(n,s));let i=this.ls.get(n);i===void 0&&(i=se(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.fs=new et(Le.ds),this.ws=new et(Le._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Le(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Le(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new U(new ve([])),s=new Le(n,e),r=new Le(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new U(new ve([])),s=new Le(n,e),r=new Le(n,e+1);let i=se();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Le{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return U.comparator(e.key,n.key)||ce(e.As,n.As)}static _s(e,n){return ce(e.As,n.As)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new et(Le.ds)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new u1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Le(n,0),r=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new et(ce);return n.forEach(r=>{const i=new Le(r,0),o=new Le(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),E.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;U.isDocumentKey(i)||(i=i.child(""));const o=new Le(new U(i),0);let a=new et(ce);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),E.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){_e(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return E.forEach(n.mutations,r=>{const i=new Le(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Le(n,0),r=this.Rs.firstAfterOrEqual(s);return E.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.Ds=e,this.docs=new Ee(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():We.newInvalidDocument(n))}getEntries(e,n){let s=rn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():We.newInvalidDocument(r))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=rn();const o=n.path,a=new U(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||NI(xI(u),s)<=0||(r.has(u.key)||Go(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}Cs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new z1(this)}getSize(e){return E.resolve(this.size)}}class z1 extends F1{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.persistence=e,this.xs=new Gs(n=>Ml(n),Ll),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Ns=0,this.ks=new jl,this.targetCount=0,this.Ms=Ms.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),E.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ms(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.Fn(n),E.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),E.waitFor(i).next(()=>r)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n){this.$s={},this.overlays={},this.Os=new Nl(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new K1(this),this.indexManager=new L1,this.remoteDocumentCache=function(s){return new H1(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new P1(n),this.qs=new V1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new j1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new q1(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new W1(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return E.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class W1 extends OI{constructor(e){super(),this.currentSequenceNumber=e}}class ql{constructor(e){this.persistence=e,this.Qs=new jl,this.js=null}static zs(e){return new ql(e)}get Ws(){if(this.js)return this.js;throw K()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),E.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ws,s=>{const r=U.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,X.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return E.or([()=>E.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Hl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Wh(n))return E.resolve(null);let s=sn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=to(n,null,"F"),s=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,to(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return Wh(n)||r.isEqual(X.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Fh()<=le.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),wc(n)),this.Wi(e,o,n,DI(r,-1)))})}ji(e,n){let s=new et(Vg(e));return n.forEach((r,i)=>{Go(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Fh()<=le.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",wc(n)),this.Ui.getDocumentsMatchingQuery(e,n,In.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new Ee(ce),this.Yi=new Gs(i=>Ml(i),Ll),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new B1(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function X1(t,e,n,s){return new Y1(t,e,n,s)}async function lm(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function J1(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=E.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(T=>{const I=c.docVersions.get(g);_e(I!==null),T.version.compareTo(I)<0&&(u.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),l.addEntry(T)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function um(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Z1(t,e){const n=Z(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(tt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(T,I,S){return T.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,g,u)&&a.push(n.Bs.updateTargetData(i,g))});let c=rn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(eA(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(X.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function eA(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=rn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function tA(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function nA(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,E.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new dn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Ac(t,e,n){const s=Z(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Jr(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function of(t,e,n){const s=Z(t);let r=X.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.Yi.get(l);return h!==void 0?E.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,sn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:X.min(),n?i:se())).next(a=>(sA(s,QI(e),a),{documents:a,ir:i})))}function sA(t,e,n){let s=t.Xi.get(e)||X.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class af{constructor(){this.activeTargetIds=t1()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rA{constructor(){this.Hr=new af,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new af,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei=null;function Da(){return Ei===null?Ei=268435456+Math.round(2147483648*Math.random()):Ei++,"0x"+Ei.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection";class cA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=Da(),a=this.To(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>($("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ns("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=oA[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=Da();return new Promise((o,a)=>{const c=new vI;c.setWithCredentials(!0),c.listenOnce(gI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sa.NO_ERROR:const u=c.getResponseJson();$(ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Sa.TIMEOUT:$(ze,`RPC '${e}' ${i} timed out`),a(new P(y.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const h=c.getStatus();if($(ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const T=function(I){const S=I.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(S)>=0?S:y.UNKNOWN}(g.status);a(new P(T,g.message))}else a(new P(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new P(y.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$(ze,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);$(ze,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Da(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dI(),a=pI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new yI({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");$(ze,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const T=new aA({ro:S=>{g?$(ze,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(d||($(ze,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),$(ze,`RPC '${e}' stream ${r} sending:`,S),h.send(S))},oo:()=>h.close()}),I=(S,H,Q)=>{S.listen(H,G=>{try{Q(G)}catch(N){setTimeout(()=>{throw N},0)}})};return I(h,vi.EventType.OPEN,()=>{g||$(ze,`RPC '${e}' stream ${r} transport opened.`)}),I(h,vi.EventType.CLOSE,()=>{g||(g=!0,$(ze,`RPC '${e}' stream ${r} transport closed`),T.wo())}),I(h,vi.EventType.ERROR,S=>{g||(g=!0,Ns(ze,`RPC '${e}' stream ${r} transport errored:`,S),T.wo(new P(y.UNAVAILABLE,"The operation could not be completed")))}),I(h,vi.EventType.MESSAGE,S=>{var H;if(!g){const Q=S.data[0];_e(!!Q);const G=Q,N=G.error||((H=G[0])===null||H===void 0?void 0:H.error);if(N){$(ze,`RPC '${e}' stream ${r} received error:`,N);const ee=N.status;let Se=function(O){const j=De[O];if(j!==void 0)return em(j)}(ee),Ae=N.message;Se===void 0&&(Se=y.INTERNAL,Ae="Unknown error status: "+ee+" with message "+N.message),g=!0,T.wo(new P(Se,Ae)),h.close()}else $(ze,`RPC '${e}' stream ${r} received:`,Q),T._o(Q)}}),I(a,mI.STAT_EVENT,S=>{S.stat===Lh.PROXY?$(ze,`RPC '${e}' stream ${r} detected buffering proxy`):S.stat===Lh.NOPROXY&&$(ze,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{T.fo()},0),T}}function xa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){return new w1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new hm(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(nn(n.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new P(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lA extends fm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=T1(this.serializer,e),s=function(r){if(!("targetChange"in r))return X.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?X.min():i.readTime?Ht(i.readTime):X.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Ic(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=vc(a)?{documents:C1(r,a)}:{query:S1(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=sm(r,i.resumeToken);const c=bc(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(X.min())>0){o.readTime=ro(r,i.snapshotVersion.toTimestamp());const c=bc(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=D1(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Ic(this.serializer),n.removeTarget=e,this.Wo(n)}}class uA extends fm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=A1(e.writeResults,e.commitTime),s=Ht(e.commitTime);return this.listener.cu(s,n)}return _e(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ic(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>I1(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new P(y.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(y.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(y.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class fA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(nn(n),this.mu=!1):$("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{as(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.vu.add(4),await ti(c),c.bu.set("Unknown"),c.vu.delete(4),await Jo(c)}(this))})}),this.bu=new fA(s,r)}}async function Jo(t){if(as(t))for(const e of t.Ru)await e(!0)}async function ti(t){for(const e of t.Ru)await e(!1)}function dm(t,e){const n=Z(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Gl(n)?Kl(n):Ws(n).Ko()&&zl(n,e))}function pm(t,e){const n=Z(t),s=Ws(n);n.Au.delete(e),s.Ko()&&gm(n,e),n.Au.size===0&&(s.Ko()?s.jo():as(n)&&n.bu.set("Unknown"))}function zl(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).su(e)}function gm(t,e){t.Vu.qt(e),Ws(t).iu(e)}function Kl(t){t.Vu=new m1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.bu.gu()}function Gl(t){return as(t)&&!Ws(t).Uo()&&t.Au.size>0}function as(t){return Z(t).vu.size===0}function mm(t){t.Vu=void 0}async function pA(t){t.Au.forEach((e,n)=>{zl(t,e)})}async function gA(t,e){mm(t),Gl(t)?(t.bu.Iu(e),Kl(t)):t.bu.set("Unknown")}async function mA(t,e,n){if(t.bu.set("Online"),e instanceof nm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await io(t,s)}else if(e instanceof Oi?t.Vu.Ht(e):e instanceof tm?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(X.min()))try{const s=await um(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(tt.EMPTY_BYTE_STRING,l.snapshotVersion)),gm(r,a);const u=new dn(l.target,a,c,l.sequenceNumber);zl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await io(t,s)}}async function io(t,e,n){if(!Jr(e))throw e;t.vu.add(1),await ti(t),t.bu.set("Offline"),n||(n=()=>um(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Jo(t)})}function ym(t,e){return e().catch(n=>io(t,n,e))}async function Zo(t){const e=Z(t),n=Cn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;yA(e);)try{const r=await tA(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,vA(e,r)}catch(r){await io(e,r)}vm(e)&&_m(e)}function yA(t){return as(t)&&t.Eu.length<10}function vA(t,e){t.Eu.push(e);const n=Cn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function vm(t){return as(t)&&!Cn(t).Uo()&&t.Eu.length>0}function _m(t){Cn(t).start()}async function _A(t){Cn(t).hu()}async function wA(t){const e=Cn(t);for(const n of t.Eu)e.uu(n.mutations)}async function bA(t,e,n){const s=t.Eu.shift(),r=Fl.from(s,e,n);await ym(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Zo(t)}async function EA(t,e){e&&Cn(t).ou&&await async function(n,s){if(r=s.code,d1(r)&&r!==y.ABORTED){const i=n.Eu.shift();Cn(n).Qo(),await ym(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zo(n)}var r}(t,e),vm(t)&&_m(t)}async function lf(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=as(n);n.vu.add(3),await ti(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Jo(n)}async function TA(t,e){const n=Z(t);e?(n.vu.delete(2),await Jo(n)):e||(n.vu.add(2),await ti(n),n.bu.set("Unknown"))}function Ws(t){return t.Su||(t.Su=function(e,n,s){const r=Z(e);return r.fu(),new lA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:pA.bind(null,t),ao:gA.bind(null,t),nu:mA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Gl(t)?Kl(t):t.bu.set("Unknown")):(await t.Su.stop(),mm(t))})),t.Su}function Cn(t){return t.Du||(t.Du=function(e,n,s){const r=Z(e);return r.fu(),new uA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:_A.bind(null,t),ao:EA.bind(null,t),au:wA.bind(null,t),cu:bA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Zo(t)):(await t.Du.stop(),t.Eu.length>0&&($("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Wl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ql(t,e){if(nn("AsyncQueue",`${e}: ${t}`),Jr(t))return new P(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||U.comparator(n.key,s.key):(n,s)=>U.comparator(n.key,s.key),this.keyedMap=ir(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Cs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.Cu=new Ee(U.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):K():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ls{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ls(e,n,Cs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ko(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.Nu=void 0,this.listeners=[]}}class AA{constructor(){this.queries=new Gs(e=>Bg(e),Ko),this.onlineState="Unknown",this.ku=new Set}}async function CA(t,e){const n=Z(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new IA),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Ql(o,`Initialization of query '${wc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Yl(n)}async function SA(t,e){const n=Z(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function kA(t,e){const n=Z(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Yl(n)}function DA(t,e,n){const s=Z(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Yl(t){t.ku.forEach(e=>{e.next()})}class xA{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ls(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.key=e}}class bm{constructor(e){this.key=e}}class NA{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=se(),this.mutatedKeys=se(),this.tc=Vg(e),this.ec=new Cs(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new uf,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Go(this.query,h)?h:null,T=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;d&&g?d.data.isEqual(g.data)?T!==I&&(s.track({type:3,doc:g}),S=!0):this.rc(d,g)||(s.track({type:2,doc:g}),S=!0,(c&&this.tc(g,c)>0||l&&this.tc(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),S=!0):d&&!g&&(s.track({type:1,doc:d}),S=!0,(c||l)&&(a=!0)),S&&(g?(o=o.add(g),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const g=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Ls(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new uf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=se(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new bm(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new wm(s))}),n}hc(e){this.Yu=e.ir,this.Zu=se();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ls.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class RA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class OA{constructor(e){this.key=e,this.fc=!1}}class PA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Gs(a=>Bg(a),Ko),this._c=new Map,this.mc=new Set,this.gc=new Ee(U.comparator),this.yc=new Map,this.Ic=new jl,this.Tc={},this.Ec=new Map,this.Ac=Ms.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function MA(t,e){const n=zA(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await nA(n.localStore,sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await LA(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&dm(n.remoteStore,o)}return r}async function LA(t,e,n,s,r){t.Rc=(h,d,g)=>async function(T,I,S,H){let Q=I.view.sc(S);Q.zi&&(Q=await of(T.localStore,I.query,!1).then(({documents:ee})=>I.view.sc(ee,Q)));const G=H&&H.targetChanges.get(I.targetId),N=I.view.applyChanges(Q,T.isPrimaryClient,G);return ff(T,I.targetId,N.cc),N.snapshot}(t,h,d,g);const i=await of(t.localStore,e,!0),o=new NA(e,i.ir),a=o.sc(i.documents),c=ei.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);ff(t,n,l.cc);const u=new RA(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function $A(t,e){const n=Z(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Ko(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ac(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),pm(n.remoteStore,s.targetId),Cc(n,s.targetId)}).catch(Xr)):(Cc(n,s.targetId),await Ac(n.localStore,s.targetId,!0))}async function FA(t,e,n){const s=KA(t);try{const r=await function(i,o){const a=Z(i),c=Me.now(),l=o.reduce((d,g)=>d.add(g.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=rn(),T=se();return a.Zi.getEntries(d,l).next(I=>{g=I,g.forEach((S,H)=>{H.isValidDocument()||(T=T.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(I=>{u=I;const S=[];for(const H of o){const Q=c1(H,u.get(H.key).overlayedDocument);Q!=null&&S.push(new os(H.key,Q,Ng(Q.value.mapValue),Jt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,S,o)}).next(I=>{h=I;const S=I.applyToLocalDocumentSet(u,T);return a.documentOverlayCache.saveOverlays(d,I.batchId,S)})}).then(()=>({batchId:h.batchId,changes:qg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new Ee(ce)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ni(s,r.changes),await Zo(s.remoteStore)}catch(r){const i=Ql(r,"Failed to persist write");n.reject(i)}}async function Em(t,e){const n=Z(t);try{const s=await Z1(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(_e(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?_e(o.fc):r.removedDocuments.size>0&&(_e(o.fc),o.fc=!1))}),await ni(n,s,e)}catch(s){await Xr(s)}}function hf(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Yl(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function UA(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new Ee(U.comparator);o=o.insert(i,We.newNoDocument(i,X.min()));const a=se().add(i),c=new Yo(X.min(),new Map,new Ee(ce),o,a);await Em(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),Xl(s)}else await Ac(s.localStore,e,!1).then(()=>Cc(s,e,n)).catch(Xr)}async function BA(t,e){const n=Z(t),s=e.batch.batchId;try{const r=await J1(n.localStore,e);Im(n,s,null),Tm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ni(n,r)}catch(r){await Xr(r)}}async function VA(t,e,n){const s=Z(t);try{const r=await function(i,o){const a=Z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(_e(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Im(s,e,n),Tm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ni(s,r)}catch(r){await Xr(r)}}function Tm(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Im(t,e,n){const s=Z(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function Cc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||Am(t,s)})}function Am(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(pm(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Xl(t))}function ff(t,e,n){for(const s of n)s instanceof wm?(t.Ic.addReference(s.key,e),jA(t,s)):s instanceof bm?($("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Am(t,s.key)):K()}function jA(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||($("SyncEngine","New document in limbo: "+n),t.mc.add(s),Xl(t))}function Xl(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new U(ve.fromString(e)),s=t.Ac.next();t.yc.set(s,new OA(n)),t.gc=t.gc.insert(n,s),dm(t.remoteStore,new dn(sn(Fg(n.path)),s,"TargetPurposeLimboResolution",Nl.ct))}}async function ni(t,e,n){const s=Z(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Hl.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(c,h=>E.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Jr(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),g=d.snapshotVersion,T=d.withLastLimboFreeSnapshotVersion(g);l.Ji=l.Ji.insert(h,T)}}}(s.localStore,i))}async function qA(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await lm(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new P(y.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ni(n,s.er)}}function HA(t,e){const n=Z(t),s=n.yc.get(e);if(s&&s.fc)return se().add(s.key);{let r=se();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function zA(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Em.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UA.bind(null,e),e.dc.nu=kA.bind(null,e.eventManager),e.dc.Pc=DA.bind(null,e.eventManager),e}function KA(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VA.bind(null,e),e}class df{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return X1(this.persistence,new Q1,e.initialUser,this.serializer)}createPersistence(e){return new G1(ql.zs,this.serializer)}createSharedClientState(e){return new rA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qA.bind(null,this.syncEngine),await TA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new AA}createDatastore(e){const n=Xo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new cA(r));var r;return function(i,o,a,c){return new hA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>hf(this.syncEngine,a,0),o=cf.D()?new cf:new iA,new dA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new PA(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);$("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ti(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):nn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ke.UNAUTHENTICATED,this.clientId=kg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ql(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Na(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await lm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XA(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>lf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>lf(e.remoteStore,i)),t._onlineComponents=e}function YA(t){return t.name==="FirebaseError"?t.code===y.FAILED_PRECONDITION||t.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function XA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Na(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!YA(n))throw n;Ns("Error using user provided cache. Falling back to memory cache: "+n),await Na(t,new df)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Na(t,new df);return t._offlineComponents}async function Cm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await pf(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await pf(t,new GA))),t._onlineComponents}function JA(t){return Cm(t).then(e=>e.syncEngine)}async function ZA(t){const e=await Cm(t),n=e.eventManager;return n.onListen=MA.bind(null,e.syncEngine),n.onUnlisten=$A.bind(null,e.syncEngine),n}function eC(t,e,n={}){const s=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new WA({next:h=>{i.enqueueAndForget(()=>SA(r,u)),h.fromCache&&a.source==="server"?c.reject(new P(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new xA(o,l,{includeMetadataChanges:!0,Ku:!0});return CA(r,u)}(await ZA(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t,e,n){if(!n)throw new P(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tC(t,e,n,s){if(e===!0&&s===!0)throw new P(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mf(t){if(!U.isDocumentKey(t))throw new P(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yf(t){if(U.isDocumentKey(t))throw new P(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function oo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ea(t);throw new P(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function nC(t,e){if(e<=0)throw new P(y.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new P(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sm((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new P(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new P(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new P(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class ta{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wI;switch(n.type){case"firstParty":return new II(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gf.get(e);n&&($("ComponentProvider","Removing Datastore"),gf.delete(e),n.terminate())}(this),Promise.resolve()}}function sC(t,e,n,s={}){var r;const i=(t=oo(t,ta))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ns("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ke.MOCK_USER;else{o=Kd(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new P(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ke(c)}t._authCredentials=new bI(new Sg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Dn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dn(this.firestore,e,this._query)}}class bn extends Dn{constructor(e,n,s){super(e,n,Fg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new U(e))}withConverter(e){return new bn(this.firestore,e,this._path)}}function Sc(t,e,...n){if(t=Rt(t),km("collection","path",e),t instanceof ta){const s=ve.fromString(e,...n);return yf(s),new bn(t,null,s)}{if(!(t instanceof It||t instanceof bn))throw new P(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return yf(s),new bn(t.firestore,null,s)}}function rC(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=kg.A()),km("doc","path",e),t instanceof ta){const s=ve.fromString(e,...n);return mf(s),new It(t,null,new U(s))}{if(!(t instanceof It||t instanceof bn))throw new P(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return mf(s),new It(t.firestore,t instanceof bn?t.converter:null,new U(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new hm(this,"async_queue_retry"),this.Xc=()=>{const n=xa();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=xa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=xa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new wn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Jr(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw nn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Wl.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&K()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Jl extends ta{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new iC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xm(this),this._firestoreClient.terminate()}}function oC(t,e){const n=typeof t=="object"?t:tl(),s=typeof t=="string"?t:e||"(default)",r=Vs(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Hd("firestore");i&&sC(r,...i)}return r}function Dm(t){return t._firestoreClient||xm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xm(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new LI(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Sm(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new QA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $s(tt.fromBase64String(e))}catch(n){throw new P(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $s(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=/^__.*__$/;class cC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zr(e,this.data,n,this.fieldTransforms)}}function Rm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class tu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new tu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ao(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Rm(this.ca)&&aC.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class lC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Xo(e)}ya(e,n,s,r=!1){return new tu({ca:e,methodName:n,ga:s,path:Ye.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Om(t){const e=t._freezeSettings(),n=Xo(t._databaseId);return new lC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uC(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);Lm("Data must be an object, but it was:",o,s);const a=Pm(s,o);let c,l;if(i.merge)c=new Dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=fC(e,h,n);if(!o.contains(d))throw new P(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);pC(u,d)||u.push(d)}c=new Dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new cC(new bt(a),c,l)}function hC(t,e,n,s=!1){return nu(n,t.ya(s?4:3,e))}function nu(t,e){if(Mm(t=Rt(t)))return Lm("Unsupported field value:",e,t),Pm(t,e);if(t instanceof Nm)return function(n,s){if(!Rm(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=nu(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return n1(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Me.fromDate(n);return{timestampValue:ro(s.serializer,r)}}if(n instanceof Me){const r=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ro(s.serializer,r)}}if(n instanceof eu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $s)return{bytesValue:sm(s.serializer,n._byteString)};if(n instanceof It){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Vl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${ea(n)}`)}(t,e)}function Pm(t,e){const n={};return Dg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(t,(s,r)=>{const i=nu(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Mm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof eu||t instanceof $s||t instanceof It||t instanceof Nm)}function Lm(t,e,n){if(!Mm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ea(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function fC(t,e,n){if((e=Rt(e))instanceof Zl)return e._internalPath;if(typeof e=="string")return $m(t,e);throw ao("Field path arguments must be of type string or ",t,!1,void 0,n)}const dC=new RegExp("[~\\*/\\[\\]]");function $m(t,e,n){if(e.search(dC)>=0)throw ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zl(...e.split("."))._internalPath}catch{throw ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ao(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new P(y.INVALID_ARGUMENT,a+t+c)}function pC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(su("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gC extends Fm{data(){return super.data()}}function su(t,e){return typeof e=="string"?$m(t,e):e instanceof Zl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ru{}class iu extends ru{}function Um(t,e,...n){let s=[];e instanceof ru&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof au).length,o=r.filter(a=>a instanceof ou).length;if(i>1||i>0&&o>0)throw new P(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ou extends iu{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ou(e,n,s)}_apply(e){const n=this._parse(e);return jm(e._query,n),new Dn(e.firestore,e.converter,_c(e._query,n))}_parse(e){const n=Om(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new P(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){wf(u,l);const d=[];for(const g of u)d.push(_f(a,r,g));h={arrayValue:{values:d}}}else h=_f(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||wf(u,l),h=hC(o,i,u,l==="in"||l==="not-in");return Ne.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class au extends ru{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new au(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Pt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)jm(i,a),i=_c(i,a)}(e._query,n),new Dn(e.firestore,e.converter,_c(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cu extends iu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new cu(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new P(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new P(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Is(r,i);return function(a,c){if($l(a)===null){const l=zo(a);l!==null&&qm(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Dn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ks(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Bm(t,e="asc"){const n=e,s=su("orderBy",t);return cu._create(s,n)}class lu extends iu{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new lu(e,n,s)}_apply(e){return new Dn(e.firestore,e.converter,to(e._query,this._limit,this._limitType))}}function Vm(t){return nC("limit",t),lu._create("limit",t,"F")}function _f(t,e,n){if(typeof(n=Rt(n))=="string"){if(n==="")throw new P(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ug(e)&&n.indexOf("/")!==-1)throw new P(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ve.fromString(n));if(!U.isDocumentKey(s))throw new P(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return jh(t,new U(s))}if(n instanceof It)return jh(t,n._key);throw new P(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ea(n)}.`)}function wf(t,e){if(!Array.isArray(t)||t.length===0)throw new P(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jm(t,e){if(e.isInequality()){const s=zo(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new P(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=$l(t);i!==null&&qm(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function qm(t,e,n){if(!n.isEqual(e))throw new P(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class yC{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return zs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new eu(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ol(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Pr(e));default:return null}}convertTimestamp(e){const n=An(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ve.fromString(e);_e(cm(s));const r=new Mr(s.get(1),s.get(3)),i=new U(s.popFirst(5));return r.isEqual(n)||nn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _C extends Fm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(su("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Pi extends _C{data(e={}){return super.data(e)}}class wC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ti(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Pi(this._firestore,this._userDataWriter,s.key,s,new Ti(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Pi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ti(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Pi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ti(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:bC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class EC extends yC{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Hm(t){t=oo(t,Dn);const e=oo(t.firestore,Jl),n=Dm(e),s=new EC(e);return mC(t._query),eC(n,t._query).then(r=>new wC(e,s,t,r))}function TC(t,e){const n=oo(t.firestore,Jl),s=rC(t),r=vC(t.converter,e);return IC(n,[uC(Om(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Jt.exists(!1))]).then(()=>s)}function IC(t,e){return function(n,s){const r=new wn;return n.asyncQueue.enqueueAndForget(async()=>FA(await JA(n),s,r)),r.promise}(Dm(t),e)}(function(t,e=!0){(function(n){Hs=n})(Xd),en(new zt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Jl(new EI(n.getProvider("auth-internal")),new CI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Tt($h,"3.12.1",t),Tt($h,"3.12.1","esm2017")})();const AC={apiKey:"AIzaSyB83K_QzMiyyGhwVmKM1fxpmj_hsMehugk",authDomain:"dnipro-delivery.firebaseapp.com",projectId:"dnipro-delivery",storageBucket:"dnipro-delivery.appspot.com",messagingSenderId:"741778376617",appId:"1:741778376617:web:860fa8fa8992d4c968a6b8",measurementId:"G-Q73LMZWTZ0"},CC=Jd(AC);lT(CC);const kc=oC();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="firebasestorage.googleapis.com",Km="storageBucket",SC=2*60*1e3,kC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends an{constructor(e,n,s=0){super(Ra(e),`Firebase Storage: ${n} (${Ra(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ra(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function Ra(t){return"storage/"+t}function Gm(){const t="An unknown error occurred, please check the error payload for server response.";return new Ve(Ue.UNKNOWN,t)}function DC(t){return new Ve(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function xC(t){return new Ve(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ve(Ue.UNAUTHENTICATED,t)}function RC(){return new Ve(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OC(t){return new Ve(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function PC(){return new Ve(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MC(){return new Ve(Ue.CANCELED,"User canceled the upload/download.")}function LC(t){return new Ve(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function $C(t){return new Ve(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function FC(){return new Ve(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Km+"' property when initializing the app?")}function UC(){return new Ve(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Dc(t){return new Ve(Ue.INVALID_ARGUMENT,t)}function Wm(){return new Ve(Ue.APP_DELETED,"The Firebase app was deleted.")}function BC(t){return new Ve(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zs(t){throw new Ve(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(s.path==="")return s;throw $C(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),T={bucket:1,path:3},I=n===zm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",H=new RegExp(`^https?://${I}/${r}/${S}`,"i"),G=[{regex:a,indices:c,postModify:i},{regex:g,indices:T,postModify:l},{regex:H,indices:{bucket:1,path:2},postModify:l}];for(let N=0;N<G.length;N++){const ee=G[N],Se=ee.regex.exec(e);if(Se){const Ae=Se[ee.indices.bucket];let O=Se[ee.indices.path];O||(O=""),s=new pt(Ae,O),ee.postModify(s);break}}if(s==null)throw LC(e);return s}}class VC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...S){l||(l=!0,e.apply(null,S))}function h(S){r=setTimeout(()=>{r=null,t(g,c())},S)}function d(){i&&clearTimeout(i)}function g(S,...H){if(l){d();return}if(S){d(),u.call(null,S,...H);return}if(c()||o){d(),u.call(null,S,...H);return}s<64&&(s*=2);let G;a===1?(a=2,G=0):G=(s+Math.random())*1e3,h(G)}let T=!1;function I(S){T||(T=!0,d(),!l&&(r!==null?(S||(a=2),clearTimeout(r),h(0)):S||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function qC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t){return t!==void 0}function zC(t){return typeof t=="object"&&!Array.isArray(t)}function Qm(t){return typeof t=="string"||t instanceof String}function bf(t,e,n,s){if(s<e)throw Dc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Dc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Xm(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wn||(Wn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,T)=>{this.resolve_=g,this.reject_=T,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ii(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Wn.NO_ERROR,c=i.getStatus();if(!a||KC(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Wn.ABORT;s(!1,new Ii(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Ii(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());HC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Gm();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Wm():MC();o(c)}else{const c=PC();o(c)}};this.canceled_?n(!1,new Ii(!1,null,!0)):this.backoffId_=jC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ii{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function WC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function QC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function XC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JC(t,e,n,s,r,i,o=!0){const a=Xm(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return YC(l,e),WC(l,n),QC(l,i),XC(l,s),new GC(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t){let e;try{e=JSON.parse(t)}catch{return null}return zC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eS(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Zm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t,e){return e}class rt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||tS}}let Ai=null;function nS(t){return!Qm(t)||t.length<2?t:Zm(t)}function sS(){if(Ai)return Ai;const t=[];t.push(new rt("bucket")),t.push(new rt("generation")),t.push(new rt("metageneration")),t.push(new rt("name","fullPath",!0));function e(i,o){return nS(o)}const n=new rt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new rt("size");return r.xform=s,t.push(r),t.push(new rt("timeCreated")),t.push(new rt("updated")),t.push(new rt("md5Hash",null,!0)),t.push(new rt("cacheControl",null,!0)),t.push(new rt("contentDisposition",null,!0)),t.push(new rt("contentEncoding",null,!0)),t.push(new rt("contentLanguage",null,!0)),t.push(new rt("contentType",null,!0)),t.push(new rt("metadata","customMetadata",!0)),Ai=t,Ai}function rS(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new pt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function iS(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return rS(s,t),s}function oS(t,e,n){const s=Jm(e);return s===null?null:iS(t,s,n)}function aS(t,e,n,s){const r=Jm(e);if(r===null||!Qm(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),g=Ym(d,n,s),T=Xm({alt:"media",token:l});return g+T})[0]}class cS{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t){if(!t)throw Gm()}function uS(t,e){function n(s,r){const i=oS(t,r,e);return lS(i!==null),aS(i,r,t.host,t._protocol)}return n}function hS(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=RC():r=NC():n.getStatus()===402?r=xC(t.bucket):n.getStatus()===403?r=OC(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function fS(t){const e=hS(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=DC(t.path)),i.serverResponse=r.serverResponse,i}return n}function dS(t,e,n){const s=e.fullServerUrl(),r=Ym(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new cS(r,i,uS(t,n),o);return a.errorHandler=fS(e),a}class pS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class gS extends pS{initXhr(){this.xhr_.responseType="text"}}function mS(){return new gS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ns(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zm(this._location.path)}get storage(){return this._service}get parent(){const e=ZC(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new ns(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BC(e)}}function yS(t){t._throwIfRoot("getDownloadURL");const e=dS(t.storage,t._location,sS());return t.storage.makeRequestWithTokens(e,mS).then(n=>{if(n===null)throw UC();return n})}function vS(t,e){const n=eS(t._location.path,e),s=new pt(t._location.bucket,n);return new ns(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){return/^[A-Za-z]+:\/\//.test(t)}function wS(t,e){return new ns(t,e)}function ey(t,e){if(t instanceof uu){const n=t;if(n._bucket==null)throw FC();const s=new ns(n,n._bucket);return e!=null?ey(s,e):s}else return e!==void 0?vS(t,e):t}function bS(t,e){if(e&&_S(e)){if(t instanceof uu)return wS(t,e);throw Dc("To use ref(service, url), the first argument must be a Storage instance.")}else return ey(t,e)}function Ef(t,e){const n=e==null?void 0:e[Km];return n==null?null:pt.makeFromBucketSpec(n,t)}function ES(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Kd(r,t.app.options.projectId))}class uu{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=zm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SC,this._maxUploadRetryTime=kC,this._requests=new Set,r!=null?this._bucket=pt.makeFromBucketSpec(r,this._host):this._bucket=Ef(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=Ef(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ns(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new VC(Wm());{const o=JC(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Tf="@firebase/storage",If="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="storage";function TS(t){return t=Rt(t),yS(t)}function IS(t,e){return t=Rt(t),bS(t,e)}function AS(t=tl(),e){t=Rt(t);const s=Vs(t,ty).getImmediate({identifier:e}),r=Hd("storage");return r&&CS(s,...r),s}function CS(t,e,n,s={}){ES(t,e,n,s)}function SS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new uu(n,s,r,e,Xd)}function kS(){en(new zt(ty,SS,"PUBLIC").setMultipleInstances(!0)),Tt(Tf,If,""),Tt(Tf,If,"esm2017")}kS();const ny=Ao("ProductsStore",()=>{const t=Nt({}),e=Nt(!1);return{allProducts:t,getAllProducts:async()=>{const r=Um(Sc(kc,"products"),Bm("price","asc"),Vm(15));try{const i=await Hm(r);t.value=i.docs}catch(i){console.log(i)}},getImgUrlByName:async r=>{e.value=!0;const i=AS(),o=IS(i,`images/${r}`);let a="";try{a=await TS(o)}catch(c){console.log(c);return}return e.value=!1,a},isImageLoading:e}});const xn=t=>(Ur("data-v-ccfd5955"),t=t(),Br(),t),DS=xn(()=>D("div",null,null,-1)),xS=xn(()=>D("div",null,null,-1)),NS=xn(()=>D("div",null,null,-1)),RS=xn(()=>D("div",null,null,-1)),OS=xn(()=>D("div",null,null,-1)),PS=xn(()=>D("div",null,null,-1)),MS=xn(()=>D("div",null,null,-1)),LS=xn(()=>D("div",null,null,-1)),$S=[DS,xS,NS,RS,OS,PS,MS,LS],FS={__name:"Loader",setup(t){const e=ut();return(n,s)=>(F(),z("div",{class:fe(["lds-roller",w(e).isDarkThemeActive?"":"lds-roller--dark"])},$S,2))}},US=nt(FS,[["__scopeId","data-v-ccfd5955"]]);const BS=["src"],VS={class:"product-card__text"},jS={class:"product-card__text"},qS={class:"product-card__phone-block"},HS=["src"],zS=["src"],KS={class:"product-card__phone-wrapper"},GS={class:"product-card__phone-number"},WS={class:"product-card__phone-number"},QS={__name:"ProductCard",props:["product"],setup(t){const e=t,n=Vr(),s=ut(),r=Nt(""),i=ny();return _o(async()=>r.value=await i.getImgUrlByName(e.product.data().image)),(o,a)=>w(i).isImageLoading?(F(),Vt(US,{key:0,class:"product-card__loader"})):(F(),z("div",{key:1,class:fe(["product-card",w(s).isDarkThemeActive?"product-card--dark":""])},[D("img",{src:r.value,class:"product-card__image",alt:"poduct"},null,8,BS),D("h4",VS,Xe(t.product.data().title),1),D("span",jS,Xe(t.product.data().price),1),D("div",qS,[w(s).isDarkThemeActive?(F(),z("img",{key:1,class:"product-card__phone-image product-card__phone-image--dark",src:w(Ud),alt:"phone image dark"},null,8,zS)):(F(),z("img",{key:0,class:"product-card__phone-image",src:w(Fd),alt:"phone imge"},null,8,HS)),D("div",KS,[D("span",GS,Xe(w(n).phones[0]),1),D("span",WS,Xe(w(n).phones[1]),1)])])],2))}},YS=nt(QS,[["__scopeId","data-v-903a2f07"]]);const XS={class:"main-layout"},JS={__name:"TheMainLayout",setup(t){const e=ny();return e.getAllProducts(),(n,s)=>(F(),z("div",XS,[(F(!0),z(Ge,null,wo(w(e).allProducts,(r,i)=>(F(),z("div",null,[(F(),Vt(YS,{product:r,key:i},null,8,["product"]))]))),256))]))}},ZS=nt(JS,[["__scopeId","data-v-5175bd1c"]]);const cs=t=>(Ur("data-v-c6a6d8ab"),t=t(),Br(),t),ek=cs(()=>D("h3",null,"Ласкаво просимо на наш вебсайт!",-1)),tk=cs(()=>D("br",null,null,-1)),nk=cs(()=>D("br",null,null,-1)),sk=cs(()=>D("br",null,null,-1)),rk=cs(()=>D("br",null,null,-1)),ik=cs(()=>D("br",null,null,-1)),ok=cs(()=>D("br",null,null,-1)),ak={__name:"TheAboutUs",setup(t){const e=ut();return(n,s)=>(F(),z("div",{class:fe(["about-us",w(e).isDarkThemeActive?"about-us--dark":""])},[ek,tk,nr(" Ми пропонуємо вам високоякісні та надійні послуги з організації грузоперевезень. Наша команда зосереджена на створенні сервісу, який відповідає найвищим стандартам якості. Ми розуміємо, наскільки важливо для вас мати доступ до надійного та ефективного транспорту для перевезення вантажів. Тому ми працюємо над постійним поліпшенням наших послуг з надання грузових транспортних засобів, щоб забезпечити вам максимальну задоволеність."),nk,sk,nr(" Окрім того, наша компанія пропонує послуги грузового маніпулятора, який працює цілодобово. Це дозволяє нам бути гнучкими та оперативними у будь-який час доби, гарантуючи вам надійну та своєчасну доставку вантажів."),rk,ik,nr(" Наша мета - забезпечити вам першокласний сервіс та безпечну доставку вантажів до будь-яких місць. Ми пишаємося нашою здатністю забезпечити якість та задоволення наших клієнтів."),ok,nr(" Запрошуємо вас долучитися до нашої спільноти клієнтів, які довіряють нам свої грузи. Разом ми забезпечимо вашу перемогу в галузі грузоперевезень! ")],2))}},ck=nt(ak,[["__scopeId","data-v-c6a6d8ab"]]),sy="/assets/starActive-0856d891.svg",ry="/assets/starInactive-e7de245d.svg",iy="/assets/starInactiveFrame-1041ea32.svg";const lk={class:"evaluation"},uk=["src"],hk=["src"],fk=["src"],dk={class:"evaluation__text"},pk={__name:"Evaluation",props:{stars:{type:Number,required:!0}},setup(t){const e=t,n=ut();let s="";switch(e.stars){case 1:s="Дуже погано";break;case 2:s="Погано";break;case 3:s="Нормально";break;case 4:s="Дуже добре";break;case 5:s="Відмінно";break}return(r,i)=>(F(),z("div",lk,[(F(),z(Ge,null,wo(5,o=>D("div",{class:"evaluation__star",key:o},[t.stars>=o?(F(),z("img",{key:0,src:w(sy),alt:"star-active"},null,8,uk)):w(n).isDarkThemeActive?(F(),z("img",{key:1,src:w(ry),alt:"star-inactive"},null,8,hk)):(F(),z("img",{key:2,src:w(iy),alt:"star-inactive"},null,8,fk))])),64)),D("span",dk,Xe(w(s)),1)]))}},gk=nt(pk,[["__scopeId","data-v-81c7c96d"]]),mk="/assets/user-3d824ffa.svg",yk="/assets/userDark-dcc27af3.svg",vk="/assets/calendar-ed026643.svg",_k="/assets/calendarDark-bf075a49.svg";const wk={class:"review-card__top-info"},bk={class:"review-card__info-block"},Ek=["src"],Tk=["src"],Ik={class:"review-card__text"},Ak={class:"review-card__info-block"},Ck=["src"],Sk=["src"],kk={class:"review-card__text"},Dk={class:"review-card__review-text"},xk={__name:"ReviewCard",props:{reviewData:{required:!0}},setup(t){const e=t,n=ut(),s=e.reviewData.data();return(r,i)=>(F(),z("div",{class:fe(["review-card",w(n).isDarkThemeActive?"review-card--dark":""])},[D("div",wk,[D("div",bk,[w(n).isDarkThemeActive?(F(),z("img",{key:1,class:"review-card__image",src:w(yk),alt:"user-logo-dark"},null,8,Tk)):(F(),z("img",{key:0,class:"review-card__image",src:w(mk),alt:"user-logo"},null,8,Ek)),D("h4",Ik,Xe(w(s).name),1)]),D("div",Ak,[w(n).isDarkThemeActive?(F(),z("img",{key:1,class:"review-card__image",src:w(_k),alt:"calendar-logo-dark"},null,8,Sk)):(F(),z("img",{key:0,class:"review-card__image",src:w(vk),alt:"calendar-logo"},null,8,Ck)),D("span",kk,Xe(w(s).date),1)]),Re(gk,{stars:w(s).grade},null,8,["stars"])]),D("span",Dk,Xe(w(s).review),1)],2))}},Nk=nt(xk,[["__scopeId","data-v-52c13a19"]]),oy=Ao("ReviewsStore",()=>{const t=Nt({}),e=async()=>{const s=Um(Sc(kc,"reviews"),Bm("queryDate","desc"),Vm(15));try{const r=await Hm(s);t.value=r.docs}catch(r){console.log(r)}};return{allReviews:t,getAllReviews:e,createReview:async s=>{const r=new Date,i=r.getFullYear(),o=String(r.getMonth()+1).padStart(2,"0"),a=String(r.getDate()).padStart(2,"0");s.date=`${a}.${o}.${i}`,s.queryDate=+`${i}${o}${a}`;const c=Sc(kc,"reviews");await TC(c,s),await e()}}}),Rk="/assets/checkMark-8dc58dbd.svg",Ok="/assets/carWhite-12bfb8c8.svg",Pk="/assets/carBlack-cf27c0da.svg";const Mk=t=>(Ur("data-v-ae418374"),t=t(),Br(),t),Lk=["onSubmit"],$k={class:"feedback-form__wrapper"},Fk={class:"feedback-form__left-wrapper"},Uk=["onClick"],Bk=["src"],Vk=["src"],jk=["src"],qk={class:"feedback-form__right-wrapper"},Hk=["src"],zk=["src"],Kk=Mk(()=>D("h4",null,"Дякуємо за Ваш відгук!",-1)),Gk={__name:"FeedbackForm",setup(t){const e=oy(),n=ut(),s=Nt({shortName:!1,longName:!1,noStars:!1,shortComment:!1,longComment:!1}),r=Nt(!1),i=Jc(()=>{for(const l in s.value)if(s.value[l])return!1;return!0}),o=Nt({name:"",grade:0,review:""}),a=()=>{if(o.value.name.length<3){s.value.shortName=!0;return}if(o.value.grade===0){s.value.noStars=!0;return}if(o.value.review.length<10){s.value.shortComment=!0;return}e.createReview(o.value),o.value.name="",o.value.review="",o.value.grade=0,r.value=!0},c=l=>o.value.grade=l;return Yt(()=>s,l=>{for(const u in s.value)s.value[u]&&setTimeout(()=>s.value[u]=!1,3e3)},{deep:!0}),Yt(()=>o.value.name,l=>{o.value.name.length>25&&(s.value.longName=!0,o.value.name=o.value.name.slice(0,25))}),Yt(()=>o.value.review,l=>{o.value.review.length>1500&&(s.value.longComment=!0,o.value.review=o.value.review.slice(0,1500))}),Yt(()=>r.value,l=>{r.value&&setTimeout(()=>r.value=!1,5e3)}),(l,u)=>(F(),Vt(Rd,{class:"feedback-form__page",tag:"div",name:"smooth"},{default:Gc(()=>[r.value?(F(),z("div",{key:1,class:fe(["feedback-form__thanks",w(n).isDarkThemeActive?"feedback-form__thanks--dark":""])},[D("img",{src:w(Rk),alt:"check-mark",class:"feedback-form__check-mark"},null,8,zk),Kk],2)):(F(),z("form",{key:0,class:fe(["feedback-form",w(n).isDarkThemeActive?"feedback-form--dark":""]),onSubmit:Y_(a,["prevent"])},[D("div",$k,[D("div",Fk,[D("h3",{class:fe(["feedback-form__title",[s.value.shortName?"feedback-form__title--short":"",s.value.longName?"feedback-form__title--long":"",s.value.noStars?"feedback-form__title--grade":"",s.value.shortComment?"feedback-form__title--short-comment":"",s.value.longComment?"feedback-form__title--long-comment":"",i.value?"feedback-form__title--no-errors":""]])},null,2),ku(D("input",{class:fe(["feedback-form__input feedback-form__input-name",[w(n).isDarkThemeActive?"feedback-form__input--dark":"",s.value.shortName?"feedback-form__input--danger":""]]),"onUpdate:modelValue":u[0]||(u[0]=h=>o.value.name=h),type:"text",placeholder:"Ім'я"},null,2),[[eh,o.value.name]]),D("div",{class:fe(["feedback-form__grade-wrapper",s.value.noStars?"feedback-form__grade-wrapper--danger":""])},[(F(),z(Ge,null,wo(5,h=>D("span",{class:"feedback-form__star-wrapper",key:h,onClick:d=>c(h)},[h<o.value.grade+1?(F(),z("img",{key:0,src:w(sy),alt:"star-active",class:"feedback-form__star"},null,8,Bk)):w(n).isDarkThemeActive?(F(),z("img",{key:1,src:w(ry),alt:"star-inactive",class:"feedback-form__star"},null,8,Vk)):(F(),z("img",{key:2,src:w(iy),alt:"star-inactive",class:"feedback-form__star"},null,8,jk))],8,Uk)),64))],2)]),D("div",qk,[D("img",{src:w(n).isDarkThemeActive?w(Ok):w(Pk),alt:"car",class:"feedback-form__car"},null,8,Hk)])]),ku(D("input",{class:fe(["feedback-form__input-text feedback-form__input",[w(n).isDarkThemeActive?"feedback-form__input--dark":"",s.value.shortComment||s.value.longComment?"feedback-form__input--danger":""]]),type:"text",placeholder:"Відгук","onUpdate:modelValue":u[1]||(u[1]=h=>o.value.review=h)},null,2),[[eh,o.value.review]]),D("button",{class:fe(["feedback-form__submit-button",w(n).isDarkThemeActive?"feedback-form__submit-button--dark":""]),type:"submit"}," Надіслати відгук ",2)],42,Lk))]),_:1}))}},Wk=nt(Gk,[["__scopeId","data-v-ae418374"]]);const Qk={class:"reviews__title"},Yk={__name:"TheReviews",setup(t){const e=ut(),n=Vr(),s=oy();return s.getAllReviews(),(r,i)=>(F(),z("div",{class:fe(["reviews",w(e).isDarkThemeActive?"reviews--dark":""])},[D("h2",Qk,"Відгуки про компанію "+Xe(w(n).companyName),1),Re(Wk),(F(!0),z(Ge,null,wo(w(s).allReviews,o=>(F(),Vt(Nk,{class:"reviews__review",reviewData:o,key:o.id},null,8,["reviewData"]))),128))],2))}},Xk=nt(Yk,[["__scopeId","data-v-7f93a996"]]);const Jk=c_('<h4 class="requisites__text" data-v-47ebf352>ФОП Мінін Сергій Валентинович</h4><span class="requisites__text" data-v-47ebf352>2787711015</span><span class="requisites__text" data-v-47ebf352>АТ КБ &quot;Приватбанк&quot;</span><span class="requisites__text" data-v-47ebf352>UA 163052990000026007050580231</span><span class="requisites__text" data-v-47ebf352>UAH</span>',5),Zk=[Jk],eD={__name:"TheRequisites",setup(t){const e=ut();return(n,s)=>(F(),z("div",{class:fe(["requisites",w(e).isDarkThemeActive?"requisites--dark":""])},Zk,2))}},tD=nt(eD,[["__scopeId","data-v-47ebf352"]]);function xc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Af(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,s)}return n}function Nc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Af(Object(n),!0).forEach(function(s){xc(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Af(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}var nD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(function(s,r){if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=e,o.defer=n.defer,n.preconnectOrigin){var a=document.createElement("link");a.href=n.preconnectOrigin,a.rel="preconnect",i.appendChild(a)}i.appendChild(o),o.onload=s,o.onerror=r}})},sD=function t(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];if(!s.length)return e;var i=s.shift();if(!(!ar(e)||!ar(i))){for(var o in i)ar(i[o])?(e[o]||Object.assign(e,xc({},o,{})),t(e[o],i[o])):Object.assign(e,xc({},o,i[o]));return t.apply(void 0,[e].concat(s))}},si=function(){return!(typeof window>"u"||typeof document>"u")},Cf=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;si()},rD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Cf('Missing "appName" property inside the plugin options.',e.app_name==null),Cf('Missing "name" property in the route.',e.screen_name==null),e};function iD(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=t.split("/"),s=e.split("/");return n[0]===""&&e[e.length-1]==="/"&&n.shift(),s.join("/")+n.join("/")}var oD=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},ay={},aD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=oD();ay=sD(n,e)},yt=function(){return ay},ss=function(){var t,e=yt(),n=e.globalObjectName;!si()||typeof window[n]>"u"||(t=window)[n].apply(t,arguments)},hu=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=yt(),r=s.config,i=s.includes;ss.apply(void 0,["config",r.id].concat(e)),Array.isArray(i)&&i.forEach(function(o){ss.apply(void 0,["config",o.id].concat(e))})},Sf=function(e,n){si()&&(window["ga-disable-".concat(e)]=n)},cy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=yt(),n=e.config,s=e.includes;Sf(n.id,t),Array.isArray(s)&&s.forEach(function(r){return Sf(r.id,t)})},ly=function(){cy(!0)},cD=function(){cy(!1)},uy,lD=function(e){uy=e},fu=function(){return uy},Nn=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=yt(),s=n.includes,r=n.defaultGroupName;e.send_to==null&&Array.isArray(s)&&s.length&&(e.send_to=s.map(function(i){return i.id}).concat(r)),ss("event",t,e)},hy=function(t){if(si()){var e;if(typeof t=="string")e={page_path:t};else if(t.path||t.fullPath){var n=yt(),s=n.pageTrackerUseFullPath,r=n.pageTrackerPrependBase,i=fu(),o=i&&i.options.base,a=s?t.fullPath:t.path;e=Nc(Nc({},t.name&&{page_title:t.name}),{},{page_path:r?iD(a,o):a})}else e=t;e.page_location==null&&(e.page_location=window.location.href),e.send_page_view==null&&(e.send_page_view=!0),Nn("page_view",e)}},fy=function(t){var e=yt(),n=e.appName;if(t){var s;typeof t=="string"?s={screen_name:t}:s=t,s.app_name=s.app_name||n,Nn("screen_view",s)}},uD=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Nn.apply(void 0,["exception"].concat(e))},hD=function(t){hu("linker",t)},fD=function(t){Nn("timing_complete",t)},dD=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];ss.apply(void 0,["set"].concat(e))},pD=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Nn.apply(void 0,["refund"].concat(e))},gD=function(t){Nn("purchase",t)},mD=function(t){hu({custom_map:t})},yD=Object.freeze({__proto__:null,query:ss,config:hu,optOut:ly,optIn:cD,pageview:hy,screenview:fy,exception:uD,linker:hD,time:fD,set:dD,refund:pD,purchase:gD,customMap:mD,event:Nn}),vD=function(e){e.config.globalProperties.$gtag=yD},_D=function(){if(si()){var t=yt(),e=t.enabled,n=t.globalObjectName,s=t.globalDataLayerName;return window[n]==null&&(window[s]=window[s]||[],window[n]=function(){window[s].push(arguments)}),window[n]("js",new Date),e||ly(),window[n]}},kf=function(e){return Nc({send_page_view:!1},e)},dy=function(){var t=yt(),e=t.config,n=t.includes;ss("config",e.id,kf(e.params)),Array.isArray(n)&&n.forEach(function(s){ss("config",s.id,kf(s.params))})},Df=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=yt(),s=n.appName,r=n.pageTrackerTemplate,i=n.pageTrackerScreenviewEnabled,o=n.pageTrackerSkipSamePath;if(!(o&&t.path===e.path)){var a=t;if(J(r)?a=r(t,e):i&&(a=rD({app_name:s,screen_name:t.name})),i){fy(a);return}hy(a)}},xf=function(e){var n=yt(),s=n.pageTrackerExcludedRoutes;return s.includes(e.path)||s.includes(e.name)},wD=function(){var t=yt(),e=t.onBeforeTrack,n=t.onAfterTrack,s=fu();s.isReady().then(function(){Fi().then(function(){var r=s.currentRoute;dy(),!xf(r.value)&&Df(r.value)}),s.afterEach(function(r,i){Fi().then(function(){xf(r)||(J(e)&&e(r,i),Df(r,i),J(n)&&n(r,i))})})})},bD=function(){var t=yt(),e=t.onReady,n=t.onError,s=t.globalObjectName,r=t.globalDataLayerName,i=t.config,o=t.customResourceURL,a=t.customPreconnectOrigin,c=t.deferScriptLoad,l=t.pageTrackerEnabled,u=t.disableScriptLoad,h=!!(l&&fu());if(_D(),h?wD():dy(),!u)return nD("".concat(o,"?id=").concat(i.id,"&l=").concat(r),{preconnectOrigin:a,defer:c}).then(function(){e&&e(window[s])}).catch(function(d){return n&&n(d),d})},ED=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0;vD(e),aD(n),lD(s),yt().bootstrap&&bD()};const TD={class:"main__page"},ID={__name:"App",setup(t){const e=Nt("main"),n=ut(),s=i=>e.value=i,r=()=>Nn("login",{method:"Google"});return _o(()=>r()),(i,o)=>(F(),z(Ge,null,[D("main",{class:fe(["main",w(n).isDarkThemeActive?"main--dark":""])},[Re(Cw,{class:"main__header"}),D("section",TD,[Re(u0,{class:"main__sidebar",onSetCurrentPage:s,currentPage:e.value},null,8,["currentPage"]),e.value==="main"?(F(),Vt(ZS,{key:0,class:"main__content"})):_t("",!0),e.value==="about"?(F(),Vt(ck,{key:1,class:"main__about"})):_t("",!0),e.value==="requisites"?(F(),Vt(tD,{key:2,class:"main__content"})):_t("",!0),e.value==="reviews"?(F(),Vt(Xk,{key:3,class:"main__content"})):_t("",!0)])],2),Re(Nw)],64))}},AD=nt(ID,[["__scopeId","data-v-29b7ac2e"]]);Z_(AD).use(ED,{config:{id:"UA-270744270-1"}}).use(nw()).mount("#app");
