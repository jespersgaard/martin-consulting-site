var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.keys,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,c=Object.prototype,l=Array.prototype,u=Object.getPrototypeOf,d=Object.isExtensible,f=()=>{};function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var h=2,g=4,ee=8,_=1<<24,v=16,te=32,y=64,ne=128,re=256,b=512,x=1024,ie=2048,S=4096,C=8192,w=16384,T=32768,ae=1<<25,oe=65536,se=1<<17,ce=1<<18,E=1<<19,le=65536,ue=1<<21,D=1<<23,de=Symbol(`$state`),fe=Symbol(`component`),pe=Symbol(`legacy props`),me=Symbol(``),he=Symbol(`attributes`),ge=Symbol(`class`),_e=Symbol(`style`),ve=Symbol(`text`),ye=Symbol(`form reset`),be=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},xe=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`),Se=3,Ce=8;function we(e){return e===this.v}function Te(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Ee(e){return!Te(e,this.v)}function De(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function Oe(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function ke(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function Ae(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function je(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function Me(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function Ne(){throw Error(`https://svelte.dev/e/hydration_failed`)}function Pe(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function Fe(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Ie(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Le(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var Re=1,ze=2,Be=`[`,Ve=`[!`,He=`[?`,Ue=`]`,We={},O=Symbol(`uninitialized`),Ge=`http://www.w3.org/1999/xhtml`,Ke=`http://www.w3.org/2000/svg`,qe=`http://www.w3.org/1998/Math/MathML`,Je=`@attach`,k=null;function Ye(e){k=e}function Xe(e,t=!1,n){k={p:k,i:!1,c:null,e:null,s:e,x:null,r:W,l:null}}function Ze(e){var t=k,n=t.e;if(n!==null){t.e=null;for(var r of n)pr(r)}return e!==void 0&&(t.x=e),t.i=!0,k=t.p,Qe(e)}function Qe(e={}){return a(e,fe,{value:!0}),e}function $e(){return!0}var et=[];function tt(){var e=et;et=[],p(e)}function nt(e){if(et.length===0&&!dn){var t=et;queueMicrotask(()=>{t===et&&tt()})}et.push(e)}function rt(){for(;et.length>0;)tt()}function it(){console.warn(`https://svelte.dev/e/derived_inert`)}function at(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function ot(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function A(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var j=!1;function st(e){j=e}var M;function N(e){if(e===null)throw at(),We;return M=e}function ct(){return N(St(M))}function P(e){if(j){if(St(M)!==null)throw at(),We;M=e}}function lt(e=1){if(j){for(var t=e,n=M;t--;)n=St(n);M=n}}function ut(e=!0){for(var t=0,n=M;;){if(n.nodeType===Ce){var r=n.data;if(r===Ue){if(t===0)return n;--t}else(r===Be||r===Ve||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=St(n);e&&n.remove(),n=i}}function dt(e){if(!e||e.nodeType!==Ce)throw at(),We;return e.data}function ft(t){if(typeof t!=`object`||!t||de in t||fe in t)return t;let n=u(t);if(n!==c&&n!==l)return t;var r=new Map,i=e(t),a=V(0),s=qn,d=e=>{if(qn===s)return e();var t=U,n=qn;Ln(null),Jn(s);var r=e();return Ln(t),Jn(n),r};return i&&r.set(`length`,V(t.length)),new Proxy(t,{defineProperty(e,t,n){`value`in n&&n.configurable!==!1&&n.enumerable!==!1&&n.writable!==!1||Pe();var i=r.get(t);return i===void 0?d(()=>{var e=V(n.value);return r.set(t,e),e}):H(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=d(()=>V(O));r.set(t,e),jn(a)}}else H(n,O),jn(a);return!0},get(e,n,i){if(n===de)return t;var a=r.get(n),s=n in e;if(a===void 0&&(!s||o(e,n)?.writable)&&(a=d(()=>V(ft(s?e[n]:O))),r.set(n,a)),a!==void 0){var c=G(a);return c===O?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=G(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==O)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===de)return!0;var n=r.get(t),i=n!==void 0&&n.v!==O||Reflect.has(e,t);return(n!==void 0||W!==null&&(!i||o(e,t)?.writable))&&(n===void 0&&(n=d(()=>V(i?ft(e[t]):O)),r.set(t,n)),G(n)===O)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var u=n;u<c.v;u+=1){var f=r.get(u+``);f===void 0?u in e&&(f=d(()=>V(O)),r.set(u+``,f)):H(f,O)}if(c===void 0)(!l||o(e,t)?.writable)&&(c=d(()=>V(void 0)),H(c,ft(n)),r.set(t,c));else{l=c.v!==O;var p=d(()=>ft(n));H(c,p)}var m=Reflect.getOwnPropertyDescriptor(e,t);if(m?.set&&m.set.call(s,n),!l){if(i&&typeof t==`string`){var h=r.get(`length`),g=Number(t);Number.isInteger(g)&&g>=h.v&&H(h,g+1)}jn(a)}return!0},ownKeys(e){G(a);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==O});for(var[n,i]of r)i.v!==O&&!(n in e)&&t.push(n);return t},setPrototypeOf(){Fe()}})}function pt(e){try{if(typeof e==`object`&&e&&de in e)return e[de]}catch{}return e}function mt(e,t){return Object.is(pt(e),pt(t))}var ht,gt,_t,vt,yt;function bt(){if(ht===void 0){ht=window,gt=document,_t=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;vt=o(t,`firstChild`).get,yt=o(t,`nextSibling`).get,d(e)&&(e[ge]=void 0,e[he]=null,e[_e]=void 0,e.__e=void 0),d(n)&&(n[ve]=void 0)}}function xt(e=``){return document.createTextNode(e)}function F(e){return vt.call(e)}function St(e){return yt.call(e)}function I(e,t){if(!j)return F(e);var n=F(M);if(n===null)n=M.appendChild(xt());else if(t&&n.nodeType!==Se){var r=xt();return n?.before(r),N(r),r}return t&&Ot(n),N(n),n}function Ct(e,t=!1){if(!j){var n=F(e);return n instanceof Comment&&n.data===``?St(n):n}if(t){if(M?.nodeType!==Se){var r=xt();return M?.before(r),N(r),r}Ot(M)}return M}function wt(e,t=!1){if(!j)return F(e);var n=I(e,t);return P(e),n}function L(e,t=1,n=!1){let r=j?M:e;for(var i;t--;)i=r,r=St(r);if(!j)return r;if(n){if(r?.nodeType!==Se){var a=xt();return r===null?i?.after(a):r.before(a),N(a),a}Ot(r)}return N(r),r}function Tt(e){e.textContent=``}function Et(){return!1}function Dt(e,t,n){return t==null||t===Ge?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Ot(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===Se;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function kt(e){var t=W;if(t===null)return U.f|=D,e;if((t.f&T)===0&&(t.f&g)===0)throw e;At(e,t)}function At(e,t){if(t===null||(t.f&w)===0){for(;t!==null;){if((t.f&ne)!==0&&!(t.f&33570816)){if((t.f&T)===0)throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}var jt=-7169;function R(e,t){e.f=e.f&jt|t}function Mt(e){(e.f&b)!==0||e.deps===null?R(e,x):R(e,S)}function Nt(e){if(e!==null)for(let t of e)(t.f&h)!==0&&(t.f&le)!==0&&(t.f^=le,Nt(t.deps))}function Pt(e,t,n){(e.f&ie)===0?(e.f&S)!==0&&n.add(e):t.add(e),Nt(e.deps),R(e,x)}function Ft(e,t,n){if(e==null)return t(void 0),f;let r=or(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var It=[];function Lt(e,t=f){let n=null,r=new Set;function i(t){if(Te(e,t)&&(e=t,n)){let t=!It.length;for(let t of r)t[1](),It.push(t,e);if(t){for(let e=0;e<It.length;e+=2)It[e][0](It[e+1]);It.length=0}}}function a(t){i(t(e))}function o(o,s=f){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||f),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function Rt(e){let t;return Ft(e,e=>t=e)(),t}var zt=Symbol(`unmounted`);function Bt(e,t,n){let r=n[t]??={store:null,source:On(void 0),unsubscribe:f};if(r.store!==e&&!(zt in n)){if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=f;else{var i=!0;r.unsubscribe=Ft(e,e=>{i?r.source.v=e:H(r.source,e)}),i=!1}}return e&&zt in n?Rt(e):G(r.source)}function Vt(){let e={};function t(){dr(()=>{for(var t in e)e[t].unsubscribe();a(e,zt,{enumerable:!1,value:!0})})}return[e,t]}function Ht(e,t){if(t){let t=document.body;e.autofocus=!0,nt(()=>{document.activeElement===t&&e.focus()})}}var Ut=!1;function Wt(){Ut||(Ut=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[ye]?.()})},{capture:!0}))}function Gt(e){var t=U,n=W;Ln(null),Rn(null);try{return e()}finally{Ln(t),Rn(n)}}function Kt(e,t,n,r=n){e.addEventListener(t,()=>Gt(n));let i=e[ye];e[ye]=i?()=>{i(),r(!0)}:()=>r(!0),Wt()}function qt(e,t,n,r){let i=Zt;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=W,c=Jt(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if((s.f&w)===0){c();try{r([...o,...e])}catch(e){At(e,s)}Yt()}}var d=Xt();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>$t(e))).then(u).catch(e=>At(e,s)).finally(d)}l?l.then(()=>{c(),f(),Yt()}):f()}function Jt(){var e=W,t=U,n=k,r=z;return function(i=!0){Rn(e),Ln(t),Ye(n),i&&(e.f&w)===0&&(r?.activate(),r?.apply())}}function Yt(e=!0){Rn(null),Ln(null),Ye(null),e&&z?.deactivate()}function Xt(){var e=W,t=e.b,n=z,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function Zt(e){return W!==null&&(W.f|=E),{ctx:k,deps:null,effects:null,equals:we,f:2050,fn:e,reactions:null,rv:0,v:O,wv:0,parent:W,ac:null}}var Qt=Symbol(`obsolete`);function $t(e,t,n){let r=W;r===null&&Oe();var i=void 0,a=Dn(O),o=!U,s=new Set;return _r(()=>{var t=W,n=m();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==be&&n.reject(e)}).finally(Yt)}catch(e){n.reject(e),Yt()}var c=z;if(o){if((t.f&T)!==0)var l=Xt();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(Qt);else for(let e of s.values())e.reject(Qt);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==Qt&&(c.activate(),t?(a.f|=D,kn(a,t)):((a.f&D)!==0&&(a.f^=D),kn(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),dr(()=>{for(let e of s)e.reject(Qt)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function en(e){let t=Zt(e);return Bn(t),t}function tn(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Er(t[n])}}function nn(e){var t,n=W,r=e.parent;if(!Pn&&r!==null&&e.v!==O&&r.f&24576)return it(),e.v;Rn(r);try{e.f&=-65537,tn(e),t=Qn(e)}finally{Rn(n)}return t}function rn(e){var t=nn(e);!e.equals(t)&&(e.wv=Yn(),(!z?.is_fork||e.deps===null)&&(z===null?e.v=t:(z.capture(e,t,!0),cn?.capture(e,t,!0)),e.deps===null))?R(e,x):Pn||(ln===null?Mt(e):(ur()||z?.is_fork)&&ln.set(e,t))}function an(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&Gt(()=>{t.ac.abort(be),t.ac=null}),t.fn!==null&&(t.teardown=f),tr(t,0),wr(t))}function on(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&nr(t)}var sn=null,z=null,cn=null,ln=null,un=null,dn=!1,fn=!1,pn=null,mn=null,hn=0,gn=1,_n=class e{id=gn++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#r=new Set;#i=new Set;#a=0;#o=new Map;#s=null;#c=[];#l=[];#u=new Set;#d=new Set;#f=new Map;#p=new Set;is_fork=!1;#m=!1;constructor(){sn===null?sn=this:(sn.#n=this,this.#t=sn),sn=this}#h(){if(this.is_fork)return!0;for(let n of this.#o.keys()){for(var e=n,t=!1;e.parent!==null;){if(this.#f.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#f.has(e)||this.#f.set(e,{d:[],m:[]}),this.#p.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#f.get(e);if(n){this.#f.delete(e);for(var r of n.d)R(r,ie),t(r);for(r of n.m)R(r,S),t(r)}this.#p.add(e)}#g(){this.#e=!0,hn++>1e3&&(this.#x(),vn());for(let e of this.#u)this.#d.delete(e),R(e,ie),this.schedule(e);for(let e of this.#d)R(e,S),this.schedule(e);let t=this.#c;this.#c=[],this.apply();var n=pn=[],r=[],i=mn=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw Cn(e),this.#h()||this.discard(),t}if(z=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(pn=null,mn=null,this.#h()){this.#b(r),this.#b(n);for(let[e,t]of this.#f)Sn(e,t);i.length>0&&z.#g();return}let o=this.#v();if(o)this.#b(r),this.#b(n),o.#y(this);else{this.#u.clear(),this.#d.clear();for(let e of this.#r)e(this);this.#r.clear(),cn=this,bn(r),bn(n),cn=null,this.#s?.resolve();var s=z;if(this.#a===0&&(this.#c.length===0||s!==null)&&this.#x(),this.#c.length>0){if(s!==null){let e=s;e.#c.push(...this.#c.filter(t=>!e.#c.includes(t)))}else s=this}s!==null&&(Tn.clear(),s.#g())}}#_(e,t,n){e.f^=x;for(var r=e.first;r!==null;){var i=r.f,a=!!(i&96);if(!(a&&(i&x)!==0||(i&C)!==0||this.#f.has(r))&&r.fn!==null){a?r.f^=x:(i&g)===0?Xn(r)&&((i&v)!==0&&this.#d.add(r),nr(r)):t.push(r);var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(){for(var e=this.#t;e!==null;){if(!e.is_fork){for(let[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=e.#t}return null}#y(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#u,e.#d);let t=e=>{var n=e.reactions;if(n!==null&&((e.f&h)===0||e.f&6144))for(let e of n){var r=e.f;if((r&h)!==0)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#d.delete(i),R(i,ie),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#x(),z=this,this.#g()}#b(e){for(var t=0;t<e.length;t+=1)Pt(e[t],this.#u,this.#d)}capture(e,t,n=!1){e.v!==O&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&D)===0&&(this.current.set(e,[t,n]),ln?.set(e,t)),this.is_fork||(e.v=t)}activate(){z=this}deactivate(){z=null,ln=null}flush(){try{fn=!0,z=this,this.#g()}finally{hn=0,un=null,pn=null,mn=null,fn=!1,z=null,ln=null,Tn.clear()}}discard(){for(let e of this.#i)e(this);this.#i.clear();for(let e of this.async_deriveds.values())e.reject(Qt);this.#x(),this.#s?.resolve()}register_created_effect(e){this.#l.push(e)}increment(e,t){if(this.#a+=1,e){let e=this.#o.get(t)??0;this.#o.set(t,e+1)}}decrement(e,t){if(--this.#a,e){let e=this.#o.get(t)??0;e===1?this.#o.delete(t):this.#o.set(t,e-1)}this.#m||(this.#m=!0,nt(()=>{this.#m=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(let t of e)this.#u.add(t);for(let e of t)this.#d.add(e);e.clear(),t.clear()}oncommit(e){this.#r.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#s??=m()).promise}static ensure(){if(z===null){let t=z=new e;!fn&&!dn&&nt(()=>{t.#e||t.flush()})}return z}apply(){ln=null}schedule(e){if(un=e,e.b?.is_pending&&e.f&16777228&&(e.f&T)===0)e.b.defer_effect(e);else{for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(pn!==null&&t===W&&(U===null||(U.f&h)===0))return;if(n&96){if((n&x)===0)return;t.f^=x}}this.#c.push(t)}}#x(){if(this.linked){var e=this.#t,t=this.#n;e===null||(e.#n=t),t===null?sn=e:t.#t=e,this.linked=!1}}};function B(e){var t=dn;dn=!0;try{for(var n;;){if(rt(),z===null)return n;z.flush()}}finally{dn=t}}function vn(){try{Me()}catch(e){At(e,un)}}var yn=null;function bn(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Xn(r)&&(yn=new Set,nr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Or(r),yn?.size>0)){Tn.clear();for(let e of yn){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)yn.has(n)&&(yn.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||nr(n)}}yn.clear()}}yn=null}}function xn(e){z.schedule(e)}function Sn(e,t){if((e.f&te)===0||(e.f&x)===0){(e.f&ie)===0?(e.f&S)!==0&&t.m.push(e):t.d.push(e),R(e,x);for(var n=e.first;n!==null;)Sn(n,t),n=n.next}}function Cn(e){R(e,x);for(var t=e.first;t!==null;)Cn(t),t=t.next}var wn=new Set,Tn=new Map,En=!1;function Dn(e,t){return{f:0,v:e,reactions:null,equals:we,rv:0,wv:0}}function V(e,t){let n=Dn(e);return Bn(n),n}function On(e,t=!1,n=!0){let r=Dn(e);return t||(r.equals=Ee),r}function H(e,t,n=!1){return U!==null&&(!In||(U.f&se)!==0)&&$e()&&U.f&4325394&&(zn===null||!zn.has(e))&&Ie(),kn(e,n?ft(t):t,mn)}function kn(e,t,n=null){if(!e.equals(t)){Pn?Tn.set(e,t):Tn.has(e)||Tn.set(e,e.v);var r=_n.ensure();if(r.capture(e,t),(e.f&h)!==0){let t=e;(e.f&ie)!==0&&nn(t),ln===null&&Mt(t)}e.wv=Yn(),Mn(e,ie,n),W!==null&&(W.f&x)!==0&&!(W.f&96)&&(Un===null?Wn([e]):Un.push(e)),!r.is_fork&&wn.size>0&&!En&&An()}return t}function An(){En=!1;for(let e of wn){(e.f&x)!==0&&R(e,S);let t;try{t=Xn(e)}catch{t=!0}t&&nr(e)}wn.clear()}function jn(e){H(e,e.v+1)}function Mn(e,t,n){var r=e.reactions;if(r!==null)for(var i=r.length,a=0;a<i;a++){var o=r[a],s=o.f,c=(s&ie)===0;if(c&&R(o,t),(s&se)!==0)wn.add(o);else if((s&h)!==0){var l=o;ln?.delete(l),(s&le)===0&&(s&b&&(W===null||(W.f&ue)===0)&&(o.f|=le),Mn(l,S,n))}else if(c){var u=o;(s&v)!==0&&yn!==null&&yn.add(u),n===null?xn(u):n.push(u)}}}var Nn=!1,Pn=!1;function Fn(e){Pn=e}var U=null,In=!1;function Ln(e){U=e}var W=null;function Rn(e){W=e}var zn=null;function Bn(e){U!==null&&(zn??=new Set).add(e)}var Vn=null,Hn=0,Un=null;function Wn(e){Un=e}var Gn=1,Kn=0,qn=Kn;function Jn(e){qn=e}function Yn(){return++Gn}function Xn(e){var t=e.f;if((t&ie)!==0)return!0;if(t&h&&(e.f&=-65537),(t&S)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Xn(a)&&rn(a),a.wv>e.wv)return!0}(t&b)!==0&&ln===null&&R(e,x)}return!1}function Zn(e,t,n=!0){var r=e.reactions;if(r!==null&&!(zn!==null&&zn.has(e)))for(var i=0;i<r.length;i++){var a=r[i];(a.f&h)===0?t===a&&(n?R(a,ie):(a.f&x)!==0&&R(a,S),xn(a)):Zn(a,t,!1)}}function Qn(e){var t=Vn,n=Hn,r=Un,i=U,a=zn,o=k,s=In,c=qn,l=e.f;Vn=null,Hn=0,Un=null,U=l&96?null:e,zn=null,Ye(e.ctx),In=!1,qn=++Kn,e.ac!==null&&(Gt(()=>{e.ac.abort(be)}),e.ac=null);try{e.f|=ue;var u=e.fn,d=u();e.f|=T;var f=$n(e);if($e()&&Un!==null&&!In&&f!==null&&!(e.f&6146))for(var p=0;p<Un.length;p++)Zn(Un[p],e);if(i!==null&&i!==e){if(Kn++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=Kn;if(t!==null)for(let e of t)e.rv=Kn;Un!==null&&(r===null?r=Un:r.push(...Un))}return(e.f&D)!==0&&(e.f^=D),d}catch(t){return $n(e),kt(t)}finally{e.f^=ue,Vn=t,Hn=n,Un=r,U=i,zn=a,Ye(o),In=s,qn=c}}function $n(e){var t=e.deps,n=z?.is_fork;if(Vn!==null){var r;if(n||tr(e,Hn),t!==null&&Hn>0)for(t.length=Hn+Vn.length,r=0;r<Vn.length;r++)t[Hn+r]=Vn[r];else e.deps=t=Vn;if(ur()&&(e.f&b)!==0)for(r=Hn;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&Hn<t.length&&(tr(e,Hn),t.length=Hn);return t}function er(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&(r.f&h)!==0&&(Vn===null||!n.call(Vn,r))){var s=r;(s.f&b)!==0&&(s.f^=b,s.f&=-65537),s.v!==O&&Mt(s),s.ac!==null&&Gt(()=>{s.ac.abort(be),s.ac=null,R(s,ie)}),an(s),tr(s,0)}}function tr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)er(e,n[r])}function nr(e){var t=e.f;if((t&w)===0){R(e,x);var n=W,r=Nn;W=e,Nn=!(t&96);try{t&16777232?Tr(e):wr(e),Cr(e);var i=Qn(e);e.teardown=typeof i==`function`?i:null,e.wv=Gn}finally{Nn=r,W=n}}}async function rr(){await Promise.resolve(),B()}function G(e){var t=(e.f&h)!==0;if(U!==null&&!In&&(W===null||(W.f&w)===0)&&(zn===null||!zn.has(e))){var r=U.deps;if((U.f&ue)!==0)e.rv<Kn&&(e.rv=Kn,Vn===null&&r!==null&&r[Hn]===e?Hn++:Vn===null?Vn=[e]:Vn.push(e));else{U.deps??=[],n.call(U.deps,e)||U.deps.push(e);var i=e.reactions;i===null?e.reactions=[U]:n.call(i,U)||i.push(U)}}if(Pn&&Tn.has(e))return Tn.get(e);if(t){var a=e;if(Pn){var o=a.v;return((a.f&x)===0&&a.reactions!==null||ar(a))&&(o=nn(a)),Tn.set(a,o),o}var s=(a.f&b)===0&&!In&&U!==null&&(Nn||(U.f&b)!==0),c=(a.f&T)===0;Xn(a)&&(s&&(a.f|=b),rn(a)),s&&!c&&(on(a),ir(a))}if(ln?.has(e))return ln.get(e);if((e.f&D)!==0)throw e.v;return e.v}function ir(e){if(e.f|=b,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),(t.f&h)!==0&&(t.f&b)===0&&(on(t),ir(t))}function ar(e){if(e.v===O)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(Tn.has(t)||(t.f&h)!==0&&ar(t))return!0;return!1}function or(e){var t=In;try{return In=!0,e()}finally{In=t}}function sr(e){W===null&&(U===null&&je(),Ae()),Pn&&ke()}function cr(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function lr(e,t){var n=W;n!==null&&(n.f&C)!==0&&(e|=C);var r={ctx:k,deps:null,nodes:null,f:e|2560,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};z?.register_created_effect(r);var i=r;if((e&g)!==0)pn===null?_n.ensure().schedule(r):pn.push(r);else if(t!==null){try{nr(r)}catch(e){throw Er(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&E)===0&&(i=i.first,(e&v)!==0&&(e&oe)!==0&&i!==null&&(i.f|=oe))}if(i!==null&&(i.parent=n,n!==null&&cr(i,n),U!==null&&(U.f&h)!==0&&(e&y)===0)){var a=U;(a.effects??=[]).push(i)}return r}function ur(){return U!==null&&!In}function dr(e){let t=lr(ee,null);return R(t,x),t.teardown=e,t}function fr(e){sr();var t=W.f;if(!U&&(t&te)!==0&&k!==null&&!k.i){var n=k;(n.e??=[]).push(e)}else return pr(e)}function pr(e){return lr(1048580,e)}function mr(e){_n.ensure();let t=lr(524352,e);return()=>{Er(t)}}function hr(e){_n.ensure();let t=lr(524352,e);return(e={})=>new Promise(n=>{e.outro?kr(t,()=>{Er(t),n(void 0)}):(Er(t),n(void 0))})}function gr(e){return lr(g,e)}function _r(e){return lr(4718592,e)}function vr(e,t=0){return lr(ee|t,e)}function yr(e,t=[],n=[],r=[]){qt(r,t,n,t=>{lr(ee,()=>{e(...t.map(G))})})}function br(e,t=0){return lr(v|t,e)}function xr(e,t=0){return lr(_|t,e)}function Sr(e){return lr(524320,e)}function Cr(e){var t=e.teardown;if(t!==null){let n=Pn,r=U;Fn(!0),Ln(null);try{t.call(null)}catch(t){At(t,e.parent)}finally{Fn(n),Ln(r)}}}function wr(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Gt(()=>{e.abort(be)});var r=n.next;(n.f&y)===0?Er(n,t):n.parent=null,n=r}}function Tr(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&te)===0&&Er(t),t=n}}function Er(e,t=!0){var n=!1;(t||(e.f&ce)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Dr(e.nodes.start,e.nodes.end),n=!0),e.f|=ae,wr(e,t&&!n),tr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Cr(e),e.f^=ae,e.f|=w;var i=e.parent;i!==null&&i.first!==null&&Or(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Dr(e,t){for(;e!==null;){var n=e===t?null:St(e);e.remove(),e=n}}function Or(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function kr(e,t,n=!0){var r=[];e.f|=re,Ar(e,r,!0);var i=()=>{n&&Er(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Ar(e,t,n){if((e.f&C)===0){e.f^=C;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if((i.f&y)===0){var o=(i.f&oe)!==0||(i.f&te)!==0&&(e.f&v)!==0;Ar(i,t,o?n:!1)}i=a}}}function jr(e){e.f&=-257,Mr(e,!0)}function Mr(e,t){if((e.f&re)===0&&(e.f&C)!==0){e.f^=C,(e.f&x)===0&&(R(e,ie),_n.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&oe)!==0||(n.f&te)!==0;Mr(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Nr(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:St(n);t.append(n),n=i}}function Pr(e){let t=0,n=Dn(0),r;return()=>{ur()&&(G(n),vr(()=>(t===0&&(r=or(()=>e(()=>jn(n)))),t+=1,()=>{nt(()=>{--t,t===0&&(r?.(),r=void 0,jn(n))})})))}}function Fr(e){let t={get:e=>Rt(t.store)[e],set:(e,n)=>{typeof e==`string`?Object.assign(Rt(t.store),{[e]:n}):Object.assign(Rt(t.store),e),t.store.set(Rt(t.store))},store:Lt(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Fr({}),i18n:Fr({}),instances:new Set,plugins:new Set},globalThis.$altcha.i18n.set(`en`,{ariaLinkLabel:`Altcha (official website)`,cancel:`Cancel`,enterCode:`Enter code`,enterCodeAria:`Enter code you hear. Press Space to play audio.`,enterCodeFromImage:`To proceed, please enter the code from the image below.`,error:`Verification failed. Try again later.`,expired:`Verification expired. Try again.`,footer:`Protected by <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (official website, opens in new tab)">ALTCHA</a>`,getAudioChallenge:`Get an audio challenge`,label:`I’m not a robot`,loading:`Loading...`,reload:`Reload`,verify:`Verify`,verificationRequired:`Verification required!`,verified:`Verified`,verifying:`Verifying...`,waitAlert:`Verifying... please wait.`});var Ir=`5`;typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(Ir);var Lr=Symbol(`events`),Rr=new Set,zr=new Set;function Br(e,t,n,r={}){function i(e){if(r.capture||Gr.call(t,e),!e.cancelBubble)return Gt(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?nt(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function K(e,t,n,r,i){var a={capture:r,passive:i},o=Br(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&dr(()=>{t.removeEventListener(e,o,a)})}function Vr(e,t,n){(t[Lr]??={})[e]=n}function Hr(e){for(var t=0;t<e.length;t++)Rr.add(e[t]);for(var n of zr)n(e)}var Ur=null,Wr=!1;function Gr(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],o=i[0]||e.target;Ur=e,Wr||(Wr=!0,setTimeout(()=>{Wr=!1,Ur=null}));var s=0,c=Ur===e&&e[Lr];if(c){var l=i.indexOf(c);if(l!==-1&&(t===document||t===window)){e[Lr]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=i[s]||e.target,o!==t){a(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=U,f=W;Ln(null),Rn(null);try{for(var p,m=[];o!==null&&o!==t;){try{var h=o[Lr]?.[r];h==null||o.disabled&&e.target!==o||h.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble)break;s++,o=s<i.length?i[s]:null}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[Lr]=t,delete e.currentTarget,Ln(d),Rn(f)}}}var Kr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function qr(e){return Kr?.createHTML(e)??e}function Jr(e){var t=Dt(`template`);return t.innerHTML=qr(e.replaceAll(`<!>`,`<!---->`)),t.content}function Yr(e,t){var n=W;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function q(e,t){var n=(t&Re)!==0,r=(t&ze)!==0,i,a=!e.startsWith(`<!>`);return()=>{if(j)return Yr(M,null),M;i===void 0&&(i=Jr(a?e:`<!>`+e),n||(i=F(i)));var t=r||_t?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=F(t),s=t.lastChild;Yr(o,s)}else Yr(t,t);return t}}function Xr(e,t,n=`svg`){var r=`<${n}>${e.startsWith(`<!>`)?`<!>`+e:e}</${n}>`,i;return()=>{if(j)return Yr(M,null),M;i||=F(F(Jr(r)));var e=i.cloneNode(!0);return Yr(e,e),e}}function Zr(e,t){return Xr(e,t,`svg`)}function Qr(e=``){if(!j){var t=xt(e+``);return Yr(t,t),t}var n=M;return n.nodeType===Se?Ot(n):(n.before(n=xt()),N(n)),Yr(n,n),n}function $r(){if(j)return Yr(M,null),M;var e=document.createDocumentFragment(),t=document.createComment(``),n=xt();return e.append(t,n),Yr(t,n),e}function J(e,t){if(j){var n=W;((n.f&T)===0||n.nodes.end===null)&&(n.nodes.end=M),ct()}else e!==null&&e.before(t)}function ei(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}var ti=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`];function ni(e){return ti.includes(e)}var ri={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`};function ii(e){return e=e.toLowerCase(),ri[e]??e}var ai=[`touchstart`,`touchmove`];function oi(e){return ai.includes(e)}var si=589824;function ci(e,t,n,r){new li(e,t,n,r)}var li=class{parent;is_pending=!1;transform_error;#e;#t=j?M:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=Pr(()=>(this.#m=Dn(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=W;t.b=this,t.f|=ne,n(e)},this.parent=W.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=br(()=>{if(j){let e=this.#t;ct();let t=e.data===Ve;if(e.data.startsWith(He)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#y():this.#g()}else this.#b()},si),j&&(this.#e=M)}#g(){try{this.#a=Sr(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed,{reset:n,invoke_onerror:r}=this.#v(e);nt(r),t&&(this.#s=Sr(()=>{t(this.#e,()=>e,()=>n)}))}#v(e){var t=!1,n=!1;let r=()=>{t?A():(t=!0,n&&Le(),this.#s!==null&&kr(this.#s,()=>{this.#s=null}),this.#S(()=>{this.#b()}))};return{reset:r,invoke_onerror:()=>{try{n=!0,this.#n.onerror?.(e,r),n=!1}catch(e){At(e,this.#i&&this.#i.parent)}}}}#y(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=Sr(()=>e(this.#e)),nt(()=>{var e=this.#c=document.createDocumentFragment(),t=xt(),n=!1;e.append(t),this.#a=this.#S(()=>{try{return Sr(()=>this.#r(t))}catch(e){try{this.error(e),n=!0}catch(e){At(e,this.#i.parent)}return null}}),this.#a===null?(this.#c=null,n&&this.#x(z)):this.#u===0&&(this.#e.before(e),this.#c=null,kr(this.#o,()=>{this.#o=null}),this.#x(z))}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=Sr(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Nr(this.#a,e);let t=this.#n.pending;this.#o=Sr(()=>t(this.#e))}else this.#x(z)}catch(e){this.error(e)}}#x(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){Pt(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#S(e){var t=W,n=U,r=k;Rn(this.#i),Ln(this.#i),Ye(this.#i.ctx);try{return _n.ensure(),e()}finally{Rn(t),Ln(n),Ye(r)}}#C(e,t){this.has_pending_snippet()?(this.#u+=e,this.#u===0&&(this.#x(t),this.#o&&kr(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))):this.parent&&this.parent.#C(e,t)}update_pending_count(e,t){this.#C(e,t),this.#l+=e,!this.#m||this.#d||(this.#d=!0,nt(()=>{this.#d=!1,this.#m&&kn(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),G(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;z?.is_fork?(this.#a&&z.skip_effect(this.#a),this.#o&&z.skip_effect(this.#o),this.#s&&z.skip_effect(this.#s),z.oncommit(()=>{this.#w(e)})):this.#w(e)}#w(e){this.#a&&=(Er(this.#a),null),this.#o&&=(Er(this.#o),null),this.#s&&=(Er(this.#s),null),j&&(N(this.#t),lt(),N(ut()));let t=this.#n.failed,n=e=>{let{reset:n,invoke_onerror:r}=this.#v(e);r(),t&&(this.#s=this.#S(()=>{try{return Sr(()=>{var r=W;r.b=this,r.f|=ne,t(this.#e,()=>e,()=>n)})}catch(e){return At(e,this.#i.parent),null}}))};nt(()=>{var t;try{t=this.transform_error(e)}catch(e){At(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(n,e=>At(e,this.#i&&this.#i.parent)):n(t)})}};function ui(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[ve]??=e.nodeValue)&&(e[ve]=n,e.nodeValue=`${n}`)}function di(e,t){return mi(e,t)}function fi(e,t){bt(),t.intro=t.intro??!1;let n=t.target,r=j,i=M;try{for(var a=F(n);a&&(a.nodeType!==Ce||a.data!==Be);)a=St(a);if(!a)throw We;st(!0),N(a);let r=mi(e,{...t,anchor:a});return st(!1),r}catch(r){if(r instanceof Error&&r.message.split(`
`).some(e=>e.startsWith(`https://svelte.dev/e/`)))throw r;return r!==We&&console.warn(`Failed to hydrate: `,r),t.recover===!1&&Ne(),bt(),Tt(n),st(!1),di(e,t)}finally{st(r),N(i)}}var pi=new Map;function mi(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){bt();var l=void 0,u=hr(()=>{var s=n??t.appendChild(xt());ci(s,{pending:()=>{}},t=>{Xe({});var n=k;if(o&&(n.c=o),a&&(i.$$events=a),j&&Yr(t,null),l=e(t,i)||Qe(),j&&(W.nodes.end=M,M===null||M.nodeType!==Ce||M.data!==Ue))throw at(),We;Ze()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=oi(r);for(let e of[t,document]){var a=pi.get(e);a===void 0&&(a=new Map,pi.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,Gr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(Rr)),zr.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=pi.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,Gr),r.delete(e),r.size===0&&pi.delete(n)):r.set(e,i)}zr.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return hi.set(l,u),l}var hi=new WeakMap;function gi(e,t){let n=hi.get(e);return n?(hi.delete(e),n(t)):Promise.resolve()}var _i=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)jr(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(jr(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(Er(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Nr(r,t),t.append(xt()),this.#n.set(e,{effect:r,fragment:t})}else Er(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),kr(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(Er(n.effect),this.#n.delete(e))};ensure(e,t){var n=z,r=Et();if(t&&!this.#t.has(e)&&!this.#n.has(e)){if(r){var i=document.createDocumentFragment(),a=xt();i.append(a),this.#n.set(e,{effect:Sr(()=>t(a)),fragment:i})}else this.#t.set(e,Sr(()=>t(this.anchor)))}if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else j&&(this.anchor=M),this.#a(n)}};function vi(e,t,...n){var r=new _i(e);br(()=>{let e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},oe)}function yi(e){k===null&&De(),fr(()=>{let t=or(e);if(typeof t==`function`)return t})}function Y(e,t,n=!1){var r;j&&(r=M,ct());var i=new _i(e),a=n?oe:0;function o(e,t){if(j){var n=dt(r);if(e!==parseInt(n.substring(1))){var a=ut();N(a),i.anchor=a,st(!1),i.ensure(e,t),st(!0);return}}i.ensure(e,t)}br(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}var bi=Symbol(`NaN`);function xi(e,t,n){j&&ct();var r=new _i(e);br(()=>{var e=t();e!==e&&(e=bi),r.ensure(e,n)})}function Si(e,t,n=!1,r=!1,i=!1,a=!1){var o=e,s=``;if(n){var c=e;j&&(o=N(F(c)))}yr(()=>{var e=W;if(s===(s=t()??``))j&&ct();else if(n&&!j)e.nodes=null,c.innerHTML=s,s!==``&&Yr(F(c),c.lastChild);else if(e.nodes!==null&&(Dr(e.nodes.start,e.nodes.end),e.nodes=null),s!==``){if(j){M.data;for(var a=ct(),l=a;a!==null&&(a.nodeType!==Ce||a.data!==``);)l=a,a=St(a);if(a===null)throw at(),We;Yr(M,l),o=N(a)}else{var u=Dt(r?`svg`:i?`math`:`template`,r?Ke:i?qe:void 0);u.innerHTML=s;var d=r||i?u:u.content;if(Yr(F(d),d.lastChild),r||i)for(;F(d);)o.before(F(d));else o.before(d)}}})}function Ci(e,t,n){var r;j&&(r=M,ct());var i=new _i(e);br(()=>{var e=t()??null;if(j&&dt(r)===Be!=(e!==null)){var a=ut();N(a),i.anchor=a,st(!1),i.ensure(e,e&&(t=>n(t,e))),st(!0)}else i.ensure(e,e&&(t=>n(t,e)))},oe)}function wi(e,t){var n=void 0,r;xr(()=>{n!==(n=t())&&(r&&=(Er(r),null),n&&(r=Sr(()=>{gr(()=>n(e))})))})}function Ti(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ti(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Ei(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ti(e))&&(r&&(r+=` `),r+=t);return r}function Di(e){return typeof e==`object`?Ei(e):e??``}var Oi=[...` 	
\r\f\xA0\v﻿`];function ki(e,t,n){var r=e==null?``:``+e;if(n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Oi.includes(r[o-1]))&&(s===r.length||Oi.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Ai(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function ji(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function Mi(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(ji)),i&&c.push(...Object.keys(i).map(ji));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=ji(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=Ai(r)),i&&(n+=Ai(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function Ni(e,t,n,r,i,a){var o=e[ge];if(j||o!==n||o===void 0){var s=ki(n,r,a);j&&s===e.getAttribute(`class`)||(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e[ge]=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Pi(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Fi(e,t,n,r){var i=e[_e];if(j||i!==t){var a=Mi(t,r);j&&a===e.getAttribute(`style`)||(a==null?e.removeAttribute(`style`):e.style.cssText=a),e[_e]=t}else r&&(Array.isArray(r)?(Pi(e,n?.[0],r[0]),Pi(e,n?.[1],r[1],`important`)):Pi(e,n,r));return r}function Ii(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)}function Li(e,t){var n=!(`__defaultValue`in e);(n||e.__defaultValue!==t)&&(e.__defaultValue=t,Ri(e,!n||`__value`in e))}function Ri(t,n){var r=t.__defaultValue,i=t.multiple,a=i?r??[]:null;if(!i||e(a)){var o=t.selectedIndex,s=n&&i?new Set(t.selectedOptions):null;for(var c of t.options){var l=Vi(c);Ii(c,i?a.includes(l):mt(l,r))}if(n){if(s!==null)for(c of t.options){var u=s.has(c);c.selected!==u&&(c.selected=u)}else t.selectedIndex!==o&&(t.selectedIndex=o)}}}function zi(t,n,r=!1){if(t.multiple){if(n==null)return;if(!e(n))return ot();for(var i of t.options)i.selected=n.includes(Vi(i))}else{for(i of t.options)if(mt(Vi(i),n)){i.selected=!0;return}r&&n===void 0||(t.selectedIndex=-1)}}function Bi(e){var t=new MutationObserver(t=>{t.every(Hi)||(`__defaultValue`in e&&Ri(e,!1),`__value`in e&&zi(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),dr(()=>{t.disconnect()})}function Vi(e){return`__value`in e?e.__value:e.value}function Hi(e){if(e.target.closest(`selectedcontent`)!==null)return!0;if(e.type===`childList`){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(e=>e.nodeName===`SELECTEDCONTENT`)}return!1}var Ui=Symbol(`class`),Wi=Symbol(`style`),Gi=Symbol(`is custom element`),Ki=Symbol(`is html`),qi=xe?`link`:`LINK`,Ji=xe?`input`:`INPUT`,Yi=xe?`option`:`OPTION`,Xi=xe?`select`:`SELECT`,Zi=xe?`progress`:`PROGRESS`;function Qi(e){if(j){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;X(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;X(e,`checked`,null),e.checked=r}}};e[ye]=n,nt(n),Wt()}}function $i(e,t){var n=na(e);n.value!==(n.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName===Zi)&&(e.value=t??``)}function X(e,t,n,r){var i=na(e);j&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===qi)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[me]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&ia(e).has(t)?e[t]=n:e.setAttribute(t,n))}function ea(e,t,n,r,i=!1,a=!1){j&&i&&e.nodeName===Ji&&(`defaultValue`in n||`defaultChecked`in n||Qi(e));var o=na(e),s=o[Gi],c=!o[Ki];let l=j&&s;l&&st(!1);var u=t||{},d=e.nodeName===Yi,f=e.nodeName===Xi;for(var p in t)!(p in n)&&p[0]+p[1]!==`$$`&&(n[p]=null);n.class?n.class=Di(n.class):n[Ui]&&(n.class=null),n[Wi]&&(n.style??=null);var m=ia(e);if(e.nodeName===Ji&&`type`in n&&(`value`in n||`__value`in n)){var h=n.type;(h!==u.type||h===void 0&&e.hasAttribute(`type`))&&(u.type=h,X(e,`type`,h))}for(let i in n){let a=n[i];if(d&&i===`value`&&a==null)e.value=e.__value=``,u[i]=a;else if(i===`class`)Ni(e,e.namespaceURI===`http://www.w3.org/1999/xhtml`,a,r,t?.[Ui],n[Ui]),u[i]=a,u[Ui]=n[Ui];else if(i===`style`)Fi(e,a,t?.[Wi],n[Wi]),u[i]=a,u[Wi]=n[Wi];else{var g=u[i];if(a!==g||a===void 0&&e.hasAttribute(i)){u[i]=a;var ee=i[0]+i[1];if(ee!==`$$`){if(ee===`on`){let t={},n=`$$`+i,r=i.slice(2);var _=ni(r);if(ei(r)&&(r=r.slice(0,-7),t.capture=!0),!_&&g){if(a!=null)continue;e.removeEventListener(r,u[n],t),u[n]=null}_?(Vr(r,e,a),Hr([r])):a!=null&&(u[n]=Br(r,e,function(e){u[i].call(this,e)},t))}else if(i===`style`)X(e,i,a);else if(i===`autofocus`)Ht(e,!!a);else if(!s&&(i===`__value`||i===`value`&&a!=null))e.value=e.__value=a;else if(i===`selected`&&d)Ii(e,a);else{var v=i;c||(v=ii(v));var te=v===`defaultValue`||v===`defaultChecked`;if(f&&v===`defaultValue`)continue;if(a==null&&!s&&!te){if(o[i]=null,v===`value`||v===`checked`){let n=e,r=t===void 0;if(v===`value`){let e=n.defaultValue;n.removeAttribute(v),n.defaultValue=e,n.value=n.__value=r?e:null}else{let e=n.defaultChecked;n.removeAttribute(v),n.defaultChecked=e,n.checked=r?e:!1}}else e.removeAttribute(i)}else te||(s||typeof a!=`string`)&&m.has(v)?(e[v]=a,v in o&&(o[v]=O)):typeof a!=`function`&&X(e,v,a)}}}}}return l&&st(!0),u}function ta(e,t,n=[],r=[],i=[],a,o=!1,s=!1){qt(i,n,r,n=>{var r=void 0,i={},c=e.nodeName===Xi,l=!1;if(xr(()=>{var u=t(...n.map(G)),d=ea(e,r,u,a,o,s);if(l&&c){var f=e;`defaultValue`in u&&Li(f,u.defaultValue),`value`in u&&zi(f,u.value)}for(let e of Object.getOwnPropertySymbols(i))u[e]||Er(i[e]);for(let t of Object.getOwnPropertySymbols(u)){var p=u[t];t.description!==Je||r&&p===r[t]||(i[t]&&Er(i[t]),i[t]=Sr(()=>wi(e,()=>p))),d[t]=p}r=d}),c){var u=e;gr(()=>{var e=r;`defaultValue`in e&&Li(u,e.defaultValue),zi(u,e.value,!0),Bi(u)})}l=!0})}function na(e){return e[he]??={[Gi]:e.nodeName.includes(`-`),[Ki]:e.namespaceURI===Ge}}var ra=new Map;function ia(e){var t=e.getAttribute(`is`)||e.nodeName,n=ra.get(t);if(n)return n;ra.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){for(var o in r=s(i),r)r[o].set&&o!==`innerHTML`&&o!==`textContent`&&o!==`innerText`&&n.add(o);i=u(i)}return n}function aa(e,t,n=t){var r=new WeakSet;Kt(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=oa(e)?sa(a):a,n(a),z!==null&&r.add(z),await rr(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(j&&e.defaultValue!==e.value||or(t)==null&&e.value)&&(n(oa(e)?sa(e.value):e.value),z!==null&&r.add(z)),vr(()=>{var n=t();if(e===document.activeElement){var i=z;if(r.has(i))return}oa(e)&&n===sa(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}function oa(e){var t=e.type;return t===`number`||t===`range`}function sa(e){return e===``?null:+e}function ca(e,t){return e===t||e?.[de]===t}function la(e=Qe(),t,n,r){var i=k.r,a=W;return gr(()=>{var r,o;return vr(()=>{r=o,o=[],or(()=>{ca(n(...o),e)||(t(e,...o),r&&ca(n(...r),e)&&t(null,...r))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&ae;)r=r.parent;let s=()=>{o&&ca(n(...o),e)&&t(null,...o)},c=r.teardown;r.teardown=()=>{s(),c?.()}}}),e}var ua={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return!e.exclude.has(t)&&t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};function da(e,t,n){return new Proxy({props:e,exclude:t},ua)}function Z(e,t,n,r){var i=r,a=!0,o=()=>(a&&(a=!1,i=r),i),s=e[t];s===void 0&&r!==void 0&&(s=o());var c=()=>{var n=e[t];return n===void 0?o():(a=!0,n)},l=!1,u=Zt(()=>(l=!1,c())),d=W;return(function(e,t){if(arguments.length>0){let n=t?G(u):e;return H(u,n),l=!0,i!==void 0&&(i=n),e}return Pn&&l||(d.f&w)!==0?u.v:G(u)})}function fa(e){return new pa(e)}var pa=class{#e;#t;constructor(e){var t=new Map,n=(e,n)=>{var r=On(n,!1,!1);return t.set(e,r),r};let r=new Proxy({...e.props||{},$$events:{}},{get(e,r){return G(t.get(r)??n(r,Reflect.get(e,r)))},has(e,r){return r===pe||(G(t.get(r)??n(r,Reflect.get(e,r))),Reflect.has(e,r))},set(e,r,i){return H(t.get(r)??n(r,i),i),Reflect.set(e,r,i)}});this.#t=(e.hydrate?fi:di)(e.component,{target:e.target,anchor:e.anchor,props:r,context:e.context,intro:e.intro??!1,recover:e.recover,transformError:e.transformError}),e?.props?.$$host&&e.sync!==!1||B(),this.#e=r.$$events;for(let e of Object.keys(this.#t))e!==`$set`&&e!==`$destroy`&&e!==`$on`&&a(this,e,{get(){return this.#t[e]},set(t){this.#t[e]=t},enumerable:!0});this.#t.$set=e=>{Object.assign(r,e)},this.#t.$destroy=()=>{gi(this.#t)}}$set(e){this.#t.$set(e)}$on(e,t){this.#e[e]=this.#e[e]||[];let n=(...e)=>t.call(this,...e);return this.#e[e].push(n),()=>{this.#e[e]=this.#e[e].filter(e=>e!==n)}}$destroy(){this.#t.$destroy()}},ma=class{};typeof HTMLElement==`function`&&(ma=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let e=this.$$l_u.get(t);e&&(e(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(e){return t=>{let n=Dt(`slot`);e!=="default"&&(n.name=e),J(t,n)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let t={},n=ga(this);for(let r of this.$$s)r in n&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(let e of this.attributes){let t=this.$$g_p(e.name);t in this.$$d||(this.$$d[t]=ha(t,e.value,this.$$p_d,`toProp`))}for(let e in this.$$p_d)!(e in this.$$d)&&this[e]!==void 0&&(this.$$d[e]=this[e],delete this[e]);this.$$c=fa({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=mr(()=>{vr(()=>{this.$$r=!0;for(let e of i(this.$$c)){if(!this.$$p_d[e]?.reflect)continue;this.$$d[e]=this.$$c[e];let t=ha(e,this.$$d[e],this.$$p_d,`toAttribute`);t==null?this.removeAttribute(this.$$p_d[e].attribute||e):this.setAttribute(this.$$p_d[e].attribute||e,t)}this.$$r=!1})});for(let e in this.$$l)for(let t of this.$$l[e]){let n=this.$$c.$on(e,t);this.$$l_u.set(t,n)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=ha(e,n,this.$$p_d,`toProp`),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return i(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function ha(e,t,n,r){let i=n[e]?.type;if(t=i===`Boolean`&&typeof t!=`boolean`?t!=null:t,!r||!n[e])return t;if(r===`toAttribute`)switch(i){case`Object`:case`Array`:return t==null?null:JSON.stringify(t);case`Boolean`:return t?``:null;case`Number`:return t??null;default:return t}else switch(i){case`Object`:case`Array`:return t&&JSON.parse(t);case`Boolean`:return t;case`Number`:return t==null?t:+t;default:return t}}function ga(e){let t={};return e.childNodes.forEach(e=>{t[e.slot||`default`]=!0}),t}function _a(e,t,n,r,s,c){let l=class extends ma{constructor(){super(e,n,s),this.$$p_d=t}static get observedAttributes(){return i(t).map(e=>(t[e].attribute||e).toLowerCase())}};return i(t).forEach(e=>{a(l.prototype,e,{get(){return this.$$c&&e in this.$$c?this.$$c[e]:this.$$d[e]},set(n){n=ha(e,n,t),this.$$d[e]=n;var r=this.$$c;r&&(o(r,e)?.get?r[e]=n:r.$set({[e]:n}))}})}),r.forEach(e=>{a(l.prototype,e,{get(){return this.$$c?.[e]}})}),e.element=l,l}var va=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),ya=q(`<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>`);function ba(e,t){Xe(t,!0);let n=Z(t,`loading`),r=da(t,va),i;function a(){i?.click()}var o={get loading(){return n()},set loading(e){n(e),B()}},s=ya(),c=I(s);ta(c,()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),la(c,e=>i=e,()=>i);var l=L(c,2);return lt(2),P(s),yr(()=>X(s,`data-loading`,n())),Vr(`click`,l,a),J(e,s),Ze(o)}Hr([`click`]),_a(ba,{loading:{}},[],[],{mode:`open`});var xa=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),Sa=q(`<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>`);function Ca(e,t){Xe(t,!0);let n=Z(t,`loading`),r=da(t,xa);var i={get loading(){return n()},set loading(e){n(e),B()}},a=Sa();return ta(I(a),()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),lt(2),P(a),yr(()=>X(a,`data-loading`,n())),J(e,a),Ze(i)}_a(Ca,{loading:{}},[],[],{mode:`open`});var wa=q(`<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>`);function Ta(e,t){Xe(t,!0);let n=Z(t,`strings`);var r={get strings(){return n()},set strings(e){n(e),B()}},i=wa(),a=I(i);return X(a,`href`,`https://altcha.org`),P(i),yr(()=>X(a,`aria-label`,n().ariaLinkLabel)),J(e,i),Ze(r)}_a(Ta,{strings:{}},[],[],{mode:`open`});var Ea=q(`<div class="altcha-footer"><p></p> <!></div>`);function Da(e,t){Xe(t,!0);let n=Z(t,`logo`),r=Z(t,`strings`);var i={get logo(){return n()},set logo(e){n(e),B()},get strings(){return r()},set strings(e){r(e),B()}},a=Ea(),o=I(a);Si(o,()=>r().footer,!0),P(o);var s=L(o,2),c=e=>{Ta(e,{get strings(){return r()}})};return Y(s,e=>{n()&&e(c)}),P(a),J(e,a),Ze(i)}_a(Da,{logo:{},strings:{}},[],[],{mode:`open`});var Oa=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`loading`]),ka=q(`<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>`);function Aa(e,t){Xe(t,!0);let n=Z(t,`loading`),r=da(t,Oa),i;function a(){i?.click()}var o={get loading(){return n()},set loading(e){n(e),B()}},s=ka(),c=I(s);ta(c,()=>({type:`checkbox`,...r}),void 0,void 0,void 0,void 0,!0),la(c,e=>i=e,()=>i);var l=L(c,2);return P(s),yr(()=>X(s,`data-loading`,n())),Vr(`click`,l,a),J(e,s),Ze(o)}Hr([`click`]),_a(Aa,{loading:{}},[],[],{mode:`open`});var Q=(e=>(e.ERROR=`error`,e.LOADING=`loading`,e.PLAYING=`playing`,e.PAUSED=`paused`,e.READY=`ready`,e))(Q||{}),ja=(e=>(e.SHA_256=`SHA-256`,e.SHA_384=`SHA-384`,e.SHA_512=`SHA-512`,e))(ja||{}),$=(e=>(e.CODE=`code`,e.ERROR=`error`,e.VERIFIED=`verified`,e.VERIFYING=`verifying`,e.UNVERIFIED=`unverified`,e.EXPIRED=`expired`,e))($||{}),Ma=q(`<div class="altcha-code-challenge-title"> </div>`),Na=q(`<div class="altcha-spinner"></div>`),Pa=Zr(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>`),Fa=Zr(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>`),Ia=Zr(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>`),La=q(`<button type="button" class="altcha-button altcha-button-secondary"><!></button>`),Ra=q(`<audio hidden="" autoplay=""></audio>`),za=q(`<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>`);function Ba(e,t){Xe(t,!0);let n=Z(t,`audioUrl`),r=Z(t,`codeChallenge`),i=Z(t,`config`),a=Z(t,`imageUrl`),o=Z(t,`onCancel`),s=Z(t,`onReload`),c=Z(t,`onSubmit`),l=Z(t,`strings`),u=V(void 0),d=V(void 0),f=V(void 0),p=V(!1),m=V(``),h=V(!1);yi(()=>(i().disableAutoFocus||rr().then(()=>{G(f)?.focus()}),()=>{G(d)&&(G(d).pause(),H(d,void 0))}));function g(){H(u,Q.PAUSED,!0)}function ee(e){H(u,Q.ERROR,!0)}function _(){H(u,Q.READY,!0)}function v(){H(u,Q.LOADING,!0)}function te(){H(u,Q.PLAYING,!0)}function y(){H(u,Q.PAUSED,!0)}function ne(e){e.code===`Space`?(e.preventDefault(),e.stopPropagation(),x()):e.code===`Escape`&&(e.preventDefault(),e.stopPropagation(),o()?.())}function re(e){e.preventDefault(),e.stopPropagation(),c()?.(G(m))}function b(e){e.play().catch(e=>{if(!(e instanceof DOMException&&e.name===`AbortError`))throw e})}function x(){G(d)?G(u)===Q.LOADING||(G(d).paused?(n()&&G(d).src!==n()&&(G(d).src=n()),G(d).currentTime=0,b(G(d))):G(d).pause()):(H(h,!0),requestAnimationFrame(()=>{G(d)&&n()&&(G(d).src=n(),b(G(d)))}))}var ie={get audioUrl(){return n()},set audioUrl(e){n(e),B()},get codeChallenge(){return r()},set codeChallenge(e){r(e),B()},get config(){return i()},set config(e){i(e),B()},get imageUrl(){return a()},set imageUrl(e){a(e),B()},get onCancel(){return o()},set onCancel(e){o(e),B()},get onReload(){return s()},set onReload(e){s(e),B()},get onSubmit(){return c()},set onSubmit(e){c(e),B()},get strings(){return l()},set strings(e){l(e),B()}},S=za(),C=I(S),w=I(C),T=e=>{var t=Ma(),n=wt(t,!0);yr(()=>ui(n,l().verificationRequired)),J(e,t)};Y(w,e=>{i().codeChallengeDisplay!==`standard`&&e(T)});var ae=L(w,2),oe=wt(ae,!0),se=L(ae,2),ce=L(se,2),E=I(ce);Qi(E),E.disabled=G(p),la(E,e=>H(f,e),()=>G(f));var le=L(E,2),ue=e=>{var t=La(),n=I(t),r=e=>{J(e,Na())},i=e=>{J(e,Pa())},a=e=>{J(e,Fa())},o=e=>{J(e,Ia())};Y(n,e=>{G(u)===Q.LOADING?e(r):G(u)===Q.ERROR?e(i,1):G(u)===Q.PLAYING?e(a,2):e(o,-1)}),P(t),yr(()=>{X(t,`title`,l().getAudioChallenge),t.disabled=G(u)===Q.LOADING||G(u)===Q.ERROR,X(t,`aria-label`,G(u)===Q.LOADING?l().loading:l().getAudioChallenge)}),K(`click`,t,()=>x(),!0),J(e,t)};Y(le,e=>{r().audio&&e(ue)});var D=L(le,2);P(ce);var de=L(ce,2),fe=I(de),pe=wt(fe,!0),me=L(fe,2),he=wt(me,!0);P(de),P(C);var ge=L(C,2),_e=e=>{var t=Ra();la(t,e=>H(d,e),()=>G(d)),K(`error`,t,ee),K(`loadstart`,t,v),K(`canplay`,t,_),K(`pause`,t,y),K(`playing`,t,te),K(`ended`,t,g),J(e,t)};return Y(ge,e=>{G(h)&&e(_e)}),P(S),yr(()=>{ui(oe,l().enterCodeFromImage),X(se,`src`,a()),X(E,`minlength`,r().length||1),X(E,`maxlength`,r().length),X(E,`placeholder`,l().enterCode),X(E,`aria-label`,G(u)===Q.LOADING?l().loading:G(u)===Q.PLAYING?``:l().enterCodeAria),X(E,`aria-live`,G(u)?`assertive`:`polite`),X(E,`aria-busy`,G(u)===Q.LOADING),X(D,`title`,l().reload),X(D,`aria-label`,l().reload),X(fe,`aria-label`,l().verify),ui(pe,l().verify),X(me,`aria-label`,l().cancel),ui(he,l().cancel)}),K(`submit`,C,re,!0),Vr(`keydown`,E,ne),aa(E,()=>G(m),e=>H(m,e)),K(`click`,D,()=>s()?.(),!0),K(`click`,me,()=>o()?.(),!0),J(e,S),Ze(ie)}Hr([`keydown`]),_a(Ba,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:`open`});var Va=new Set([`$$slots`,`$$events`,`$$legacy`,`$$host`,`anchor`,`children`,`display`,`backdrop`,`onClickOutside`,`onClickOutsideDelay`,`onClose`,`placement`,`updateUISignal`,`variant`]),Ha=q(`<div class="altcha-popover-backdrop" data-backdrop=""></div>`),Ua=q(`<div class="altcha-popover-arrow"></div>`),Wa=q(`<div role="button" class="altcha-popover-close">&times;</div>`),Ga=q(`<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>`,1);function Ka(e,t){Xe(t,!0);let n=Z(t,`anchor`),r=Z(t,`children`),i=Z(t,`display`,7,`standard`),a=Z(t,`backdrop`,7,!1),o=Z(t,`onClickOutside`),s=Z(t,`onClickOutsideDelay`,7,600),c=Z(t,`onClose`),l=Z(t,`placement`,7,`auto`),u=Z(t,`updateUISignal`),d=Z(t,`variant`,7,`neutral`),p=da(t,Va),m=V(void 0),h=V(void 0),g=V(!1),ee=V(0);fr(()=>{l()!==`auto`&&H(g,l()===`top`)}),fr(()=>{u()&&ne()}),yi(()=>{let e=i()===`bottomsheet`||i()===`overlay`;return e&&(G(h)&&document.body.append(G(h)),G(m)&&document.body.append(G(m))),ne(),rr().then(()=>{H(ee,Date.now(),!0)}),()=>{e&&(G(h)&&document.body.removeChild(G(h)),G(m)&&document.body.removeChild(G(m)))}});function _(){c()?.()}function v(e){let t=e.target;!G(m)?.contains(t)&&(!s()||G(ee)+s()<Date.now())&&o()?.()}function te(){ne()}function y(){ne()}function ne(){if(n()&&l()===`auto`&&G(m)){let e=n().getBoundingClientRect(),t=document.documentElement.clientHeight-(e.top+e.height)<G(m).clientHeight;G(g)!==t&&H(g,t)}}var re={get anchor(){return n()},set anchor(e){n(e),B()},get children(){return r()},set children(e){r(e),B()},get display(){return i()},set display(e=`standard`){i(e),B()},get backdrop(){return a()},set backdrop(e=!1){a(e),B()},get onClickOutside(){return o()},set onClickOutside(e){o(e),B()},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(e=600){s(e),B()},get onClose(){return c()},set onClose(e){c(e),B()},get placement(){return l()},set placement(e=`auto`){l(e),B()},get updateUISignal(){return u()},set updateUISignal(e){u(e),B()},get variant(){return d()},set variant(e=`neutral`){d(e),B()}},b=Ga();K(`click`,ht,v,!0),K(`resize`,ht,te),K(`scroll`,ht,y);var x=Ct(b),ie=e=>{var t=Ha();la(t,e=>H(h,e),()=>G(h)),J(e,t)};Y(x,e=>{a()&&e(ie)});var S=L(x,2);ta(S,()=>({...p,class:`altcha-popover ${(t.class||``)??``}`,"data-popover":!0,"data-variant":d(),"data-top":G(g),"data-display":i()}));var C=I(S),w=e=>{J(e,Ua())};Y(C,e=>{i()===`standard`&&e(w)});var T=L(C,2),ae=e=>{var t=Wa();K(`click`,t,_,!0),J(e,t)};Y(T,e=>{i()!==`standard`&&e(ae)});var oe=L(T,2);return vi(I(oe),()=>r()??f),P(oe),P(S),la(S,e=>H(m,e),()=>G(m)),J(e,b),Ze(re)}_a(Ka,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:`open`});var qa=class extends Error{name=`RequestError`};function Ja(e){return Array.from(new Uint8Array(e)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Ya(e,t=`altcha-css`,n){if(typeof document<`u`&&document&&!document.getElementById(t)){let n=document.createElement(`style`);n.id=t,n.textContent=e;let r=document.currentScript?.nonce??document.querySelector(`meta[name="csp-nonce"]`)?.content;r&&(n.nonce=r),document.head.appendChild(n)}}Object.values(ja);async function Xa(e){let{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:i,onOutOfMemory:a=e=>e>1?Math.floor(e/2):0,counterMode:o,timeout:s}=e,c=Math.min(16,Math.max(1,n)),l=[],u=()=>{for(let e of l)e.terminate()};for(let e=0;e<c;e++)l.push(await i(t.parameters.algorithm));let d=null;try{d=await Promise.race(l.map((e,n)=>(r.signal.addEventListener(`abort`,()=>{e.postMessage({type:`abort`})}),new Promise((r,i)=>{e.addEventListener(`error`,e=>{i(e)}),e.addEventListener(`message`,t=>{if(t.data){for(let t of l)t!==e&&t.postMessage({type:`abort`});if(t.data.error)return i(Error(t.data.error))}r(t.data)}),e.postMessage({challenge:t,counterMode:o,counterStart:n,counterStep:c,timeout:s,type:`work`})}))))}catch(n){if(n instanceof Error&&n?.message?.includes(`Out of memory`)&&a){u();let n=a(c);if(n)return Xa({...e,challenge:t,controller:r,concurrency:n,createWorker:i})}throw n}finally{u()}return r.signal.aborted?null:d||null}var Za=class{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};POINTER_TYPES={mouse:0,pen:1,touch:2};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingClick=null;keysDown=new Map;moveTimes=[];untrusted=0;click=[];focus=[];key=[];pointer=[];scroll=[];touch=[];markTime=null;markUntrusted=0;constructor(e={}){let{maxSamples:t=60,sampleInterval:n=50,target:r=window}=e;this.maxSamples=t,this.sampleInterval=n,this.target=r,this.attach()}destroy(){let e={capture:!0};this.target.removeEventListener(`focusin`,this.onFocus,e),this.target.removeEventListener(`keydown`,this.onKeyDown,e),this.target.removeEventListener(`keyup`,this.onKeyUp,e),this.target.removeEventListener(`pointerdown`,this.onPointerDown,e),this.target.removeEventListener(`pointerup`,this.onPointerUp,e),this.target.removeEventListener(`pointermove`,this.onPointer,e),this.target.removeEventListener(`scroll`,this.onScroll,e),this.target.removeEventListener(`touchmove`,this.onTouchMove,e)}export(){return{click:this.click,focus:this.focus,key:this.key,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch,untrusted:this.untrusted,v:2,webdriver:navigator.webdriver===!0}}mark(){this.markTime=performance.now(),this.markUntrusted=this.untrusted}exportSinceMark(){let e=this.export(),t=this.markTime;if(t===null)return e;let n=this.focus.filter(e=>this.focusStartTime+e[0]>=t),r=n[0]?.[0]??0;return{...e,click:this.click.filter(e=>e[2]>=t),focus:n.map(e=>[e[0]-r,e[1],e[2],e[3]]),key:this.key.filter(e=>e[0]>=t),pointer:this.pointer.filter(e=>e[2]>=t),scroll:this.scroll.filter(e=>e[1]>=t),touch:this.touch.filter(e=>e[2]>=t),untrusted:this.untrusted-this.markUntrusted}}attach(){let e={passive:!0,capture:!0};this.target.addEventListener(`focusin`,this.onFocus,e),this.target.addEventListener(`keydown`,this.onKeyDown,e),this.target.addEventListener(`keyup`,this.onKeyUp,e),this.target.addEventListener(`pointerdown`,this.onPointerDown,e),this.target.addEventListener(`pointerup`,this.onPointerUp,e),this.target.addEventListener(`pointermove`,this.onPointer,e),this.target.addEventListener(`scroll`,this.onScroll,e),this.target.addEventListener(`touchmove`,this.onTouchMove,e)}evict(e){e.length>this.maxSamples&&e.splice(0,e.length-this.maxSamples)}onFocus=e=>{if(!e.isTrusted){this.untrusted++;return}if(this.focusInteraction===2)return;let t=e.target;if(!(t instanceof Element))return;let n=performance.now();this.focusStartTime===0&&(this.focusStartTime=n),this.focus.push([Math.round(n-this.focusStartTime),t.tabIndex,this.TAG_CODES[t.tagName]??0,+!!this.focusInteraction]),this.evict(this.focus)};setInteraction(e){this.focusInteraction=e,clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)}onKeyDown=e=>{if(!e.isTrusted){this.untrusted++;return}if(this.setInteraction(1),e.repeat)return;let t=e.timeStamp||performance.now(),n=[Math.round(t),-1];this.key.push(n),this.evict(this.key),this.keysDown.set(e.code,{sample:n,down:t})};onKeyUp=e=>{if(!e.isTrusted){this.untrusted++;return}let t=this.keysDown.get(e.code);if(t){let n=e.timeStamp||performance.now();t.sample[1]=Math.round(n-t.down),this.keysDown.delete(e.code)}};onPointerDown=e=>{if(!e.isTrusted){this.untrusted++;return}this.setInteraction(2);let t=e.timeStamp||performance.now(),n=e.target instanceof Element?e.target.getBoundingClientRect():null,r=0;for(let e of this.moveTimes)e>=t-500&&e<t&&r++;let i=[Math.round(e.clientX),Math.round(e.clientY),Math.round(t),-1,n?Math.round(e.clientX-(n.left+n.width/2)):0,n?Math.round(e.clientY-(n.top+n.height/2)):0,this.POINTER_TYPES[e.pointerType]??3,r];this.click.push(i),this.evict(this.click),this.pendingClick={sample:i,down:t}};onPointerUp=e=>{if(!e.isTrusted)this.untrusted++;else if(this.pendingClick){let t=e.timeStamp||performance.now();this.pendingClick.sample[3]=Math.round(t-this.pendingClick.down),this.pendingClick=null}};onPointer=e=>{if(!e.isTrusted){this.untrusted++;return}if(e.pointerType===`touch`)return;let t=e.timeStamp||performance.now();this.moveTimes.push(t),this.moveTimes.length>32&&this.moveTimes.shift(),t-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push([Math.round(e.clientX),Math.round(e.clientY),Math.round(t)]),this.lastPointerSample=t,this.evict(this.pointer))};onScroll=e=>{if(!e.isTrusted){this.untrusted++;return}let t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))};onTouchMove=e=>{if(!e.isTrusted){this.untrusted++;return}let t=e.timeStamp||performance.now(),n=e.touches[0];n&&t-this.lastTouchSample>=this.sampleInterval&&(this.touch.push([Math.round(n.clientX),Math.round(n.clientY),Math.round(t),Math.round(n.force*1e3)/1e3,Math.round(n.radiusX||0),Math.round(n.radiusY||0)]),this.lastTouchSample=t,this.evict(this.touch))}},Qa=q(`<div class="altcha-overlay-backdrop" data-backdrop=""></div>`),$a=q(`<div class="altcha-overlay-content"></div>`),eo=q(`<div role="button" class="altcha-overlay-close">&times;</div> <!>`,1),to=q(`<div class="altcha-floating-arrow"></div>`),no=q(`<input type="hidden"/>`),ro=q(`<div class="altcha-error">Secure context (HTTPS) required.</div>`),io=q(`<div class="altcha-error"> </div>`),ao=q(`<!> <!>`,1),oo=q(`<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>`,1);function so(e,t){Xe(t,!0);let n=()=>Bt(c,`$altchaDefaults`,i),r=()=>Bt(f,`$altchaI18nStore`,i),[i,a]=Vt(),o=[`ar`,`fa`,`he`,`ur`],{isSecureContext:s}=globalThis,{store:c}=globalThis.$altcha.defaults,l=navigator.hardwareConcurrency||2,u=navigator.deviceMemory||0,d=u&&u<=4?Math.min(4,l):l,f=globalThis.$altcha.i18n.store,p=t.$$host,m=(e,t)=>{rr().then(()=>{p?.dispatchEvent(new CustomEvent(e,{detail:t}))})},h=null,g=V(ft(new URL(location.origin))),ee=V(!1),_=V(null),v=V(null),te=V(null),y=V(ft($.UNVERIFIED)),ne=V(void 0),re=V(void 0),b=V(null),x=V(void 0),ie=V(null),S=V(null),C=V(null),w=V(null),T=V(null),ae=V(ft([])),oe=V(0),se=V(ft({})),ce=V(!0),E=en(()=>({fetch:(e,t)=>fetch(e,t),audioChallengeLanguage:``,auto:`off`,barPlacement:`bottom`,challenge:``,codeChallenge:null,codeChallengeDisplay:`standard`,credentials:null,debug:!1,disableAutoFocus:!1,display:`standard`,floatingAnchor:``,floatingOffset:8,floatingPersist:!1,floatingPlacement:`auto`,formatError:null,hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:``,mockError:!1,minDuration:500,overlayContent:``,name:`altcha`,popoverPlacement:`auto`,retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:`checkbox`,validationMessage:``,verifyFunction:null,verifyUrl:``,workers:d,...n(),...G(se)})),le=en(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*0xe8d4a51000).toString(16)}`),ue=en(()=>ke(G(E).type)),D=en(()=>G(E).auto),de=en(()=>G(y)===$.VERIFYING),fe=en(()=>!G(E).hideFooter),pe=en(()=>!G(E).hideLogo&&G(E).display!==`bar`),me=en(()=>Ae(r(),[G(E).language,document.documentElement.lang,...navigator.languages])),he=en(()=>o.includes(G(me).language)?`rtl`:void 0),ge=en(()=>({...G(me).strings})),_e=en(()=>G(_)?.audio?.match(/^(https?:)?\//)?Ie(G(_).audio,G(g),{language:G(E).audioChallengeLanguage||G(me).language}).toString():G(_)?.audio),ve=en(()=>G(_)?.image?.match(/^(https?:)?\//)?Ie(G(_).image,G(g)):G(_)?.image);fr(()=>{rt({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),fr(()=>{t.theme?p?.setAttribute(`theme`,t.theme):p?.removeAttribute(`theme`)}),fr(()=>{if(t.configuration)try{rt(JSON.parse(t.configuration))}catch{A("unable to parse the `configuration` attribute (JSON expected)")}}),fr(()=>{G(te)!==G(E).display&&Qe(G(E).display)}),fr(()=>{G(ee)&&G(y)===$.VERIFYING&&H(ee,!1)}),fr(()=>{!G(ee)&&G(y)===$.VERIFIED&&H(ee,!0)}),fr(()=>{if(!G(ee)){let e=Oe();e&&e.checked&&(e.checked=!1)}}),fr(()=>{G(y)===$.VERIFIED&&Oe()?.setCustomValidity(``)}),fr(()=>{if(G(D)===`onload`){let e=setTimeout(()=>{lt()},10);return()=>{e&&clearTimeout(e)}}}),fr(()=>{G(S)&&A(`error:`,G(S))}),fr(()=>{G(T)&&G(E).setCookie&&Ye(G(T),G(E).setCookie)}),yi(()=>(A(`mounted`,`3.6.0`),p&&globalThis.$altcha.instances.add(p),H(b,Me(),!0),G(b)?.addEventListener(`reset`,Ue),G(b)?.addEventListener(`submit`,We,{capture:!0}),document.addEventListener(`focusin`,He),ye(),G(E).humanInteractionSignature&&(A(`human interaction signature enabled`),h=new Za),m(`load`),s||A(`secure context (HTTPS) required`),()=>{xe(),p&&globalThis.$altcha.instances.delete(p),G(w)&&clearTimeout(G(w)),G(b)?.removeEventListener(`reset`,Ue),G(b)?.removeEventListener(`submit`,We,{capture:!0}),document.removeEventListener(`focusin`,He),h?.destroy()}));function ye(){H(ae,[...globalThis.$altcha.plugins].map(e=>new e(p)),!0),A(`activating plugins`,G(ae).map(e=>e.constructor.name));for(let e of G(ae))e.activate()}async function be(e,...t){let n;for(let r of G(ae))n=await r[e].call(r,...t);return n}function xe(){for(let e of G(ae))e.destroy()}function Se(e){let[t,n]=e.salt.split(`?`),r={};if(n)try{Object.assign(r,Object.fromEntries(new URLSearchParams(n).entries()))}catch{}let i={codeChallenge:e.codeChallenge,parameters:{algorithm:e.algorithm,cost:1,data:r,expiresAt:r?.expires?parseInt(r.expires,10):void 0,keyLength:e.algorithm===`SHA-512`?64:e.algorithm===`SHA-384`?48:32,nonce:Ja(new TextEncoder().encode(e.salt)),keyPrefix:e.challenge,salt:``},signature:e.signature};return Object.defineProperties(i,{_originalSalt:{enumerable:!1,value:e.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),i}function Ce(e,t){return{algorithm:e.parameters.algorithm,challenge:e.parameters.keyPrefix,number:t.counter,salt:`_originalSalt`in e?e._originalSalt:e.parameters.nonce,signature:e.signature,took:t.time||0}}async function we(e){await new Promise(t=>setTimeout(t,e))}async function Te(e=G(E).challenge,t){let n=await be(`onFetchChallenge`,e),r=null;if(n!==void 0)return n;if(typeof e==`string`){if(e.startsWith(`{`)){A(`parsing JSON challenge`);try{r=JSON.parse(e)}catch{throw Error(`Unable to parse JSON challenge.`)}}else{A(`fetching challenge from`,t?.method||`GET`,e),H(g,new URL(e,location.origin),!0);let{headers:n,json:i}=await et(e,{credentials:G(E).credentials||void 0,...t}),a=n.get(`x-altcha-config`);if(a&&Ke(a),i&&`his`in i&&i.his){if(A(`requested HIS`),!h)throw Error(`Server requested HIS data but collector is disabled.`);let e=h.export();return h.mark(),Te(Ie(i.his.url,G(g)),{body:JSON.stringify({his:e}),headers:{"content-type":`application/json`},method:`POST`})}i&&`hisResult`in i&&i.hisResult&&A(`HIS result`,i.hisResult),r=i}}else if(e&&typeof e==`object`)try{r=JSON.parse(JSON.stringify(e))}catch{throw Error(`Unable to parse JSON challenge.`)}if(Ee(r)&&(r=Se(r)),!De(r))throw Error(`Challenge validation failed.`);return r}function Ee(e){return typeof e==`object`&&!!e&&`challenge`in e}function De(e){return!!e&&typeof e==`object`&&`parameters`in e&&!!e.parameters&&typeof e.parameters==`object`&&`algorithm`in e.parameters&&`nonce`in e.parameters&&`salt`in e.parameters&&`keyPrefix`in e.parameters}function Oe(){return document.getElementById(G(le))}function ke(e){switch(e){case`checkbox`:return ba;case`switch`:return Aa;default:return Ca}}function Ae(e,t){let n=Object.keys(e).map(e=>e.toLowerCase()),r=t.reduce((t,r)=>(r=r.toLowerCase(),t||(e[r]?r:null)||n.find(e=>r.split(`-`)[0]===e.split(`-`)[0])||null),null);return e[r||``]||(r=`en`),{language:r,strings:e[r]}}function je(e){switch(e){case`bar`:return G(E).barPlacement||`bottom`;case`floating`:return G(E).floatingPlacement||`auto`;default:return}}function Me(){if(t.form){let e=(p?.getRootNode())?.getElementById?.(t.form);return e instanceof HTMLFormElement?e:null}return G(x)?.closest(`form`)??null}function Ne(e){return G(b)?Array.from(G(b).elements).filter(t=>t.matches(e)):[]}function Pe(e){return Ne(`input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])`).reduce((e,t)=>{let n=t.name,r=t.value;return n&&r&&(e[n]=/\n/.test(r)?r.replace(RegExp(`(?<!\\r)\\n`,`g`),`\r
`):r),e},{})}function Fe(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Ie(e,t,n){let r=new URL(e,t);if(r.search||=t.search,n)for(let e in n)n[e]!==void 0&&n[e]!==null&&r.searchParams.set(e,n[e]);return r.toString()}function Le(e){!G(ee)&&e.currentTarget.checked?(e.preventDefault(),e.currentTarget.checked=!1,G(y)!==$.VERIFYING&&lt()):e.currentTarget.checked||(e.preventDefault(),j())}function Re(e){G(y)===$.VERIFYING?e.currentTarget.setCustomValidity(G(ge).waitAlert):G(E).validationMessage&&e.currentTarget.setCustomValidity(G(E).validationMessage)}function ze(){Qe(G(E).display),j()}function Be(){ct()}function Ve(e){let t=e.target;G(E).display!==`floating`||!t||p?.contains(t)||t.hasAttribute(`data-backdrop`)||t.closest(`[data-popover]`)||G(y)===$.VERIFIED||G(E).floatingPersist||ot()}function He(e){let t=e.target;G(D)===`onfocus`&&G(y)===$.UNVERIFIED&&G(b)&&t instanceof Element&&(G(b).contains(t)||t.form===G(b))&&lt()}function Ue(){Qe(G(E).display),j()}function We(e){e.target?.getAttribute(`data-code-challenge`)!==`true`&&G(D)===`onsubmit`&&G(y)===$.UNVERIFIED&&(e.preventDefault(),e.stopPropagation(),H(ie,e.submitter,!0),N(),lt().then(e=>{e&&!G(_)&&rr().then(()=>{k(G(ie))})}))}function O(e){e.persisted&&(Qe(G(E).display),j())}function Ge(){ct()}function Ke(e){try{let t=JSON.parse(e);t&&typeof t==`object`&&rt({serverVerificationFields:t?.sentinel?.fields,serverVerificationTimeZone:t?.sentinel?.timeZone,verifyUrl:t.verifyurl,...t})}catch(e){A(`unable to configure from x-altcha-config header`,e)}}function qe(e=20){if(!G(x))return;let t=G(E).floatingPlacement;if(!G(re)&&(H(re,(G(E).floatingAnchor instanceof HTMLElement?G(E).floatingAnchor:G(E).floatingAnchor?document.querySelector(G(E).floatingAnchor):Ne(`input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])`)[0])||G(b),!0),!G(re))){A(`unable to find floating anchor element`);return}let n=parseInt(G(E).floatingOffset,10)||12,r=G(re).getBoundingClientRect(),i=G(x).getBoundingClientRect(),a=document.documentElement.clientHeight,o=document.documentElement.clientWidth,s=!t||t===`auto`?r.bottom+i.height+n+e>a:t===`top`,c=Math.max(e,Math.min(o-e-i.width,r.left+r.width/2-i.width/2));if(G(x).style.setProperty(`--altcha-floating-left`,`${c}px`),G(x).style.setProperty(`--altcha-floating-top`,s?`${r.top-(i.height+n)}px`:`${r.bottom+n}px`),G(x).setAttribute(`data-floating-position`,s?`top`:`bottom`),G(ne)){let e=G(ne).getBoundingClientRect();G(ne).style.left=r.left-c+r.width/2-e.width/2+`px`}}async function Je(e,t){let n=await be(`onRequestServerVerification`,e,t);if(n!==void 0)return n;if(A(`requesting server verification from`,G(E).verifyUrl),!G(E).verifyUrl)throw Error(`Parameter verifyUrl must be set for server verification.`);let{json:r}=await et(Ie(G(E).verifyUrl,G(g)),{body:JSON.stringify({code:t,fields:G(E).serverVerificationFields?Pe():void 0,his:G(_)?.his&&h?h.exportSinceMark():void 0,payload:e,timeZone:G(E).serverVerificationTimeZone?Fe():void 0}),credentials:G(E).credentials||void 0,headers:{"Content-Type":`application/json`},method:`POST`});return r&&typeof r==`object`&&`payload`in r&&r.payload&&m(`serververification`,r),r}function k(e){G(b)&&`requestSubmit`in G(b)?G(b).requestSubmit(e):G(b)?.reportValidity()&&(e?e.click():G(b).submit())}function Ye(e,t={}){let{domain:n,name:r=G(E).name,maxAge:i,path:a,sameSite:o,secure:s}=t,c=`${encodeURIComponent(r)}=${encodeURIComponent(e)}`;n&&(c+=`; Domain=${n}`),i!=null&&(c+=`; Max-Age=${i}`),a&&(c+=`; Path=${a}`),o&&(c+=`; SameSite=${o}`),s&&(c+=`; Secure`),document.cookie=c}function Qe(e){switch(e){case`bar`:case`floating`:case`overlay`:ot(),G(D)&&G(D)!==`off`||(G(se).auto=`onsubmit`);break;case`standard`:N()}G(te)!==e&&H(te,e,!0)}function $e(e){G(w)&&clearTimeout(G(w));let t=()=>{G(y)===$.UNVERIFIED?j():(H(ee,!1),M($.EXPIRED)),m(`expired`)},n=e*1e3-Date.now();n>=1?H(w,setTimeout(t,n),!0):t()}async function et(e,t){try{let n=await G(E).fetch(e,t);return await tt(n),{headers:n.headers,json:await n.json()}}catch(e){throw new qa(e instanceof Error?e.message:String(e))}}async function tt(e){if(e.status>=400){if(e.headers.get(`content-type`)?.includes(`/json`)){let t;try{t=await e.json()}catch{}if(t&&`error`in t)throw Error(`Server responded with ${e.status} - ${t.error}`)}throw Error(`Server responded with ${e.status}.`)}let t=e.headers.get(`content-type`);if(!t||!t.includes(`/json`))throw Error(`Server responded with invalid content-type. Expected application/json, received ${t}.`)}async function nt(e){if(!G(T)){st(Error(`Cannot verify code challenge without PoW payload.`));return}M($.VERIFYING);let t=null;if(G(E).verifyUrl)t=await Je(G(T),e);else if(G(E).verifyFunction)t=await G(E).verifyFunction(G(T),e);else{st(Error(`Parameter verifyUrl is required for code challenge verification.`));return}t?.payload&&(H(T,t.payload,!0),A(`server payload`,G(T))),t?.verified===!0?(A(`verified`),M($.VERIFIED),m(`verified`,{payload:G(T)}),G(D)===`onsubmit`&&rr().then(()=>{k(G(ie))})):st(Error(t?.reason||`Verification failed.`)),G(E).disableAutoFocus||Oe()?.focus()}function rt(e){Object.assign(G(se),{...Object.fromEntries(Object.entries(e).filter(([e,t])=>t!==void 0))})}function it(){return{...G(E)}}function at(){return G(y)}function ot(){H(ce,!1)}function A(...e){(G(E).debug||e.some(e=>e instanceof Error))&&console[e[0]instanceof Error?`error`:`log`](`ALTCHA`,`[name=${G(E).name}]`,...e)}function j(e=$.UNVERIFIED,t=null){H(ee,!1),H(S,t,!0),H(T,null),G(v)&&G(v).abort(),G(w)&&(clearTimeout(G(w)),H(w,null)),M(e)}function st(e){let t=e instanceof Error?e:Error(String(e));M($.ERROR,String(t)),G(E).formatError?H(C,G(E).formatError(t)||null,!0):t instanceof qa&&H(C,`Error: ${t.message}`)}function M(e,t=null){H(y,e,!0),H(S,t,!0),H(C,null),m(`statechange`,{payload:G(T),state:G(y)})}function N(){H(ce,!0),rr().then(()=>{ct()})}function ct(){if(G(E).display===`floating`)return qe();H(oe,G(oe)+1)}async function lt(e={}){let{concurrency:t=Math.max(1,G(E).workers),controller:n=new AbortController,minDuration:r=G(E).minDuration}=e,i=performance.now(),a=null,o=null,c=!1,l=await be(`onVerify`,e);if(l!==void 0)return l;j($.VERIFYING),H(v,n,!0);try{if(!s)throw Error(`Secure context (HTTPS) required.`);if(G(E).mockError)throw Error(`Mock error.`);if(G(E).test)return A(`running test mode with null challenge`),await we(Math.max(0,r-(performance.now()-i))),G(v)?.signal.aborted?(j(),null):(H(T,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),A(`verified`),M($.VERIFIED),m(`verified`,{payload:G(T)}),{payload:G(T)});if(a=await Te(),!a)throw Error(`Failed to fetch challenge.`);A(`challenge`,a),`configuration`in a&&(A(`re-configuring from challenge`,a.configuration),rt(a.configuration)),a.parameters.expiresAt&&$e(a.parameters.expiresAt),c=`_version`in a&&a._version===1;let e=globalThis.$altcha.algorithms.get(a.parameters.algorithm);if(!e)throw Error(`Unsupported algorithm ${a.parameters.algorithm}.`);if(o=await Xa({challenge:a,concurrency:t,controller:n,createWorker:e,counterMode:c?`string`:`uint32`,onOutOfMemory:e=>{if(A(`out of memory error received`),m(`outofmemory`),G(E).retryOnOutOfMemoryError&&e>1){let t=Math.floor(e/2);return A(`retrying with ${t} workers...`),t}},timeout:G(E).timeout}),G(v)?.signal.aborted)return j(),null;if(!o)throw Error(`Failed to find solution.`);A(`solution`,o),await we(Math.max(0,r-(performance.now()-i))),H(_,a.codeChallenge||G(E).codeChallenge||null,!0),c?H(T,btoa(JSON.stringify(Ce(a,o))),!0):H(T,btoa(JSON.stringify({challenge:{parameters:a.parameters,signature:a.signature},solution:o})),!0),G(_)?(A(`requesting code verification`),M($.CODE),m(`codechallenge`,{codeChallenge:G(_)})):G(E).verifyUrl?await nt():(A(`verified`),M($.VERIFIED),m(`verified`,{payload:G(T)}))}catch(e){return A(`verification failed`,e),st(e),null}finally{H(v,null)}return{challenge:a,payload:G(T),solution:o}}var ut={configure:rt,getConfiguration:it,getState:at,hide:ot,log:A,reset:j,setState:M,show:N,updateUI:ct,verify:lt},dt=oo();K(`scroll`,gt,Be),K(`click`,gt,Ve),K(`pageshow`,ht,O),K(`resize`,ht,Ge);var pt=Ct(dt),mt=e=>{J(e,Qa())};Y(pt,e=>{G(E).display===`overlay`&&G(ce)&&e(mt)});var _t=L(pt,2),vt=I(_t),yt=e=>{var t=eo(),n=Ct(t),r=L(n,2),i=e=>{var t=$a();Si(t,()=>document.querySelector(G(E).overlayContent)?.innerHTML,!0),P(t),J(e,t)};Y(r,e=>{G(E).overlayContent&&e(i)}),K(`click`,n,ze,!0),J(e,t)};Y(vt,e=>{G(E).display===`overlay`&&G(ce)&&e(yt)});var bt=L(vt,2),xt=I(bt),F=I(xt),St=I(F);{let e=en(()=>G(E).display===`standard`&&G(D)!==`onsubmit`||G(y)===$.VERIFYING);Ci(St,()=>G(ue),(n,r)=>{r(n,{get id(){return G(le)},get form(){return t.form},name:``,get required(){return G(e)},get loading(){return G(de)},get checked(){return G(ee)},onchange:Le,oninvalid:Re})})}var Tt=L(St,2),Et=I(Tt),Dt=e=>{var t=Qr();yr(()=>ui(t,G(ge).verificationRequired)),J(e,t)},Ot=e=>{var t=Qr();yr(()=>ui(t,G(ge).verifying)),J(e,t)},kt=e=>{var t=Qr();yr(()=>ui(t,G(ge).verified)),J(e,t)},At=e=>{var t=Qr();yr(()=>ui(t,G(ge).label)),J(e,t)};Y(Et,e=>{G(y)===$.CODE&&G(_)?e(Dt):G(y)===$.VERIFYING?e(Ot,1):G(y)===$.VERIFIED?e(kt,2):e(At,-1)}),P(Tt),P(F);var jt=L(F,2),R=e=>{Ta(e,{get strings(){return G(ge)}})};Y(jt,e=>{G(pe)&&e(R)}),P(xt);var Mt=L(xt,2),Nt=e=>{{let t=en(()=>G(E).display===`bar`&&G(pe));Da(e,{get logo(){return G(t)},get strings(){return G(ge)}})}};Y(Mt,e=>{G(fe)&&e(Nt)});var Pt=L(Mt,2),Ft=e=>{var t=to();la(t,e=>H(ne,e),()=>G(ne)),J(e,t)};Y(Pt,e=>{G(E).display===`floating`&&e(Ft)});var It=L(Pt,2),Lt=e=>{var n=no();Qi(n),yr(()=>{X(n,`form`,t.form),X(n,`name`,G(E).name),$i(n,G(T))}),J(e,n)};Y(It,e=>{G(E).setCookie||e(Lt)}),P(bt);var Rt=L(bt,2),zt=e=>{Ka(e,{get anchor(){return G(x)},onClickOutside:()=>{s&&j()},get placement(){return G(E).popoverPlacement},role:`alert`,variant:`error`,get dir(){return G(he)},get updateUISignal(){return G(oe)},children:(e,t)=>{var n=$r(),r=Ct(n),i=e=>{J(e,ro())},a=e=>{var t=io(),n=wt(t,!0);yr(()=>ui(n,G(ge).expired)),J(e,t)},o=e=>{var t=io(),n=wt(t,!0);yr(()=>{X(t,`title`,G(S)),ui(n,G(C)||G(ge).error)}),J(e,t)};Y(r,e=>{!G(S)&&!s?e(i):!G(S)&&G(y)===$.EXPIRED?e(a,1):e(o,-1)}),J(e,n)},$$slots:{default:!0}})},Ht=e=>{var t=$r();xi(Ct(t),()=>G(_),e=>{{let t=en(()=>G(E).codeChallengeDisplay!==`standard`);Ka(e,{get anchor(){return G(x)},get backdrop(){return G(t)},get display(){return G(E).codeChallengeDisplay},onClose:()=>{j()},get placement(){return G(E).popoverPlacement},role:`dialog`,get"aria-label"(){return G(ge).verificationRequired},get dir(){return G(he)},get updateUISignal(){return G(oe)},children:(e,t)=>{var n=ao(),r=Ct(n);Ba(r,{get audioUrl(){return G(_e)},get imageUrl(){return G(ve)},onCancel:()=>j(),onReload:()=>lt(),onSubmit:e=>nt(e).catch(st),get codeChallenge(){return G(_)},get config(){return G(E)},get strings(){return G(ge)}});var i=L(r,2),a=e=>{Da(e,{get logo(){return G(pe)},get strings(){return G(ge)}})};Y(i,e=>{G(fe)&&G(E).codeChallengeDisplay!==`standard`&&e(a)}),J(e,n)},$$slots:{default:!0}})}}),J(e,t)};Y(Rt,e=>{G(S)||G(y)===$.EXPIRED||!s?e(zt):G(_)&&G(y)===$.CODE&&e(Ht,1)}),P(_t),la(_t,e=>H(x,e),()=>G(x)),yr(e=>{X(_t,`data-state`,G(y)),X(_t,`data-display`,G(E).display||void 0),X(_t,`data-placement`,e),X(_t,`data-visible`,G(ce)||void 0),X(_t,`dir`,G(he)),X(Tt,`for`,G(le)),_t.dir=_t.dir},[()=>je(G(E).display)]),J(e,dt);var Ut=Ze(ut);return a(),Ut}typeof window<`u`&&window.customElements&&!customElements.get(`altcha-widget`)&&customElements.define(`altcha-widget`,_a(so,{auto:{type:`String`},challenge:{type:`String`},configuration:{type:`String`},display:{type:`String`},form:{type:`String`},language:{type:`String`},name:{type:`String`},theme:{type:`String`},type:{type:`String`},workers:{type:`Number`}},[],[`configure`,`getConfiguration`,`getState`,`hide`,`log`,`reset`,`setState`,`show`,`updateUI`,`verify`]));var co=`(function() {
  "use strict";
  function assertAlgorithm(algorithm, allowed) {
    if (!allowed.includes(algorithm)) {
      throw new Error(
        \`Unsupported algorithm: \${String(algorithm)}. Expected one of: \${allowed.join(", ")}.\`
      );
    }
  }
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Hex string contains non-hex characters.");
    }
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return buffer;
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  var HmacAlgorithm = /* @__PURE__ */ ((HmacAlgorithm2) => {
    HmacAlgorithm2["SHA_256"] = "SHA-256";
    HmacAlgorithm2["SHA_384"] = "SHA-384";
    HmacAlgorithm2["SHA_512"] = "SHA-512";
    return HmacAlgorithm2;
  })(HmacAlgorithm || {});
  Object.values(HmacAlgorithm);
  const MAX_COUNTER = {
    string: Number.MAX_SAFE_INTEGER,
    uint32: 4294967295
  };
  function isValidCounter(n, mode) {
    return Number.isInteger(n) && n >= 0 && n <= MAX_COUNTER[mode];
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     * Throws a RangeError unless the counter is an integer the mode encodes exactly.
     */
    setCounter(n) {
      if (!isValidCounter(n, this.mode)) {
        throw new RangeError(
          \`counter must be an integer from 0 to \${MAX_COUNTER[this.mode]}. Got: \${n}\`
        );
      }
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  function assertKeyPrefix(keyPrefix, keyLength) {
    if (typeof keyPrefix !== "string" || !/^[0-9a-fA-F]+$/.test(keyPrefix)) {
      throw new Error("keyPrefix must be a non-empty hex string.");
    }
    if (keyPrefix.length > keyLength * 2) {
      throw new Error(
        \`keyPrefix (\${keyPrefix.length} hex characters) must not be longer than the key (keyLength: \${keyLength} bytes).\`
      );
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyLength = 32, keyPrefix, salt } = challenge.parameters;
    assertKeyPrefix(keyPrefix, keyLength);
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixHex = keyPrefix.toLowerCase();
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefixHex)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    assertAlgorithm(algorithm, ["PBKDF2/SHA-256", "PBKDF2/SHA-384", "PBKDF2/SHA-512"]);
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveBits"]
    );
    const derivedBits = await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: algorithm.slice("PBKDF2/".length)
      },
      passwordKey,
      keyLength * 8
    );
    return {
      parameters: {},
      derivedKey: new Uint8Array(derivedBits)
    };
  }
  handler({
    deriveKey
  });
})();
`,lo=typeof self<`u`&&self.Blob&&new Blob([`(self.URL || self.webkitURL).revokeObjectURL(self.location.href);`,co],{type:`text/javascript;charset=utf-8`});function uo(e){let t;try{if(t=lo&&(self.URL||self.webkitURL).createObjectURL(lo),!t)throw``;let n=new Worker(t,{name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(co),{name:e?.name})}}var fo=`(function() {
  "use strict";
  function assertAlgorithm(algorithm, allowed) {
    if (!allowed.includes(algorithm)) {
      throw new Error(
        \`Unsupported algorithm: \${String(algorithm)}. Expected one of: \${allowed.join(", ")}.\`
      );
    }
  }
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Hex string contains non-hex characters.");
    }
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return buffer;
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  var HmacAlgorithm = /* @__PURE__ */ ((HmacAlgorithm2) => {
    HmacAlgorithm2["SHA_256"] = "SHA-256";
    HmacAlgorithm2["SHA_384"] = "SHA-384";
    HmacAlgorithm2["SHA_512"] = "SHA-512";
    return HmacAlgorithm2;
  })(HmacAlgorithm || {});
  Object.values(HmacAlgorithm);
  const MAX_COUNTER = {
    string: Number.MAX_SAFE_INTEGER,
    uint32: 4294967295
  };
  function isValidCounter(n, mode) {
    return Number.isInteger(n) && n >= 0 && n <= MAX_COUNTER[mode];
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     * Throws a RangeError unless the counter is an integer the mode encodes exactly.
     */
    setCounter(n) {
      if (!isValidCounter(n, this.mode)) {
        throw new RangeError(
          \`counter must be an integer from 0 to \${MAX_COUNTER[this.mode]}. Got: \${n}\`
        );
      }
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  function assertKeyPrefix(keyPrefix, keyLength) {
    if (typeof keyPrefix !== "string" || !/^[0-9a-fA-F]+$/.test(keyPrefix)) {
      throw new Error("keyPrefix must be a non-empty hex string.");
    }
    if (keyPrefix.length > keyLength * 2) {
      throw new Error(
        \`keyPrefix (\${keyPrefix.length} hex characters) must not be longer than the key (keyLength: \${keyLength} bytes).\`
      );
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyLength = 32, keyPrefix, salt } = challenge.parameters;
    assertKeyPrefix(keyPrefix, keyLength);
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixHex = keyPrefix.toLowerCase();
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefixHex)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    assertAlgorithm(algorithm, ["SHA-256", "SHA-384", "SHA-512"]);
    const iterations = Math.max(1, parameters.cost);
    let derivedKey = concatBuffers(salt, password);
    for (let i = 0; i < iterations; i++) {
      derivedKey = new Uint8Array(await crypto.subtle.digest(algorithm, derivedKey));
    }
    return {
      parameters: {},
      derivedKey: derivedKey.slice(0, keyLength)
    };
  }
  handler({
    deriveKey
  });
})();
`,po=typeof self<`u`&&self.Blob&&new Blob([`(self.URL || self.webkitURL).revokeObjectURL(self.location.href);`,fo],{type:`text/javascript;charset=utf-8`});function mo(e){let t;try{if(t=po&&(self.URL||self.webkitURL).createObjectURL(po),!t)throw``;let n=new Worker(t,{name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(fo),{name:e?.name})}}Ya(`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none) {
  .altcha-checkbox input {
    /* Safari-only: fixes focus outline */
  }
  .altcha-checkbox input:focus {
    outline-width: 2px;
    outline-style: solid;
  }
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`),$altcha.algorithms.set(`SHA-256`,()=>new mo),$altcha.algorithms.set(`SHA-384`,()=>new mo),$altcha.algorithms.set(`SHA-512`,()=>new mo),$altcha.algorithms.set(`PBKDF2/SHA-256`,()=>new uo),$altcha.algorithms.set(`PBKDF2/SHA-384`,()=>new uo),$altcha.algorithms.set(`PBKDF2/SHA-512`,()=>new uo);var ho=()=>{};function go(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function _o(e,t,n){if(e==null)return t(void 0),ho;let r=So(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var vo=[];function yo(e,t=ho){let n=null,r=new Set;function i(t){if(go(e,t)&&(e=t,n)){let t=!vo.length;for(let t of r)t[1](),vo.push(t,e);if(t){for(let e=0;e<vo.length;e+=2)vo[e][0](vo[e+1]);vo.length=0}}}function a(t){i(t(e))}function o(o,s=ho){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||ho),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function bo(e){let t;return _o(e,e=>t=e)(),t}var xo=!1;function So(e){var t=xo;try{return xo=!0,e()}finally{xo=t}}function Co(e){let t={get:e=>bo(t.store)[e],set:(e,n)=>{typeof e==`string`?Object.assign(bo(t.store),{[e]:n}):Object.assign(bo(t.store),e),t.store.set(bo(t.store))},store:yo(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Co({}),i18n:Co({}),instances:new Set,plugins:new Set},globalThis.$altcha.i18n.set(`da`,{ariaLinkLabel:`Altcha (officiel hjemmeside)`,enterCode:`Indtast kode`,enterCodeAria:`Indtast den kode, du hører. Tryk på mellemrumstasten for at afspille lyd.`,error:`Verificering mislykkedes. Prøv venligst igen senere.`,expired:`Verificering udløbet. Prøv venligst igen.`,footer:`Beskyttet af <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (officiel hjemmeside, åbner i en ny fane)">ALTCHA</a>`,getAudioChallenge:`Hent lydudfordring`,label:`Jeg er ikke en robot`,loading:`Indlæser...`,reload:`Genindlæs`,verify:`Verificer`,verificationRequired:`Verificering kræves!`,verified:`Verificeret`,verifying:`Verificerer...`,waitAlert:`Verificerer... vent venligst.`,cancel:`Annuller`,enterCodeFromImage:`For at fortsætte, bedes du indtaste koden fra billedet herunder.`});var wo=document.getElementById(`contact-form`),To=document.getElementById(`form-status`),Eo=(e,t)=>{To.textContent=t,To.className=`text-sm font-medium `+(e?`text-teal-600 dark:text-teal-400`:`text-red-600 dark:text-red-400`)},Do=new URLSearchParams(location.search).get(`status`);Do&&Eo(Do===`sendt`,Do===`sendt`?`Tak for din besked. Jeg vender tilbage hurtigst muligt.`:`Beskeden kunne ikke sendes. Prøv igen.`),wo.addEventListener(`submit`,async e=>{e.preventDefault();let t=wo.querySelector(`button`);t.disabled=!0,Eo(!0,`Sender…`);try{let e=await(await fetch(wo.action,{method:`POST`,body:new FormData(wo),headers:{Accept:`application/json`}})).json();Eo(e.ok,e.message),e.ok&&wo.reset(),document.getElementById(`altcha`)?.reset?.()}catch{Eo(!1,`Beskeden kunne ikke sendes. Prøv igen senere.`)}finally{t.disabled=!1}});