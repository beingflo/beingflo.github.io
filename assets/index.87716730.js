const Re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};Re();const N={};function Be(e){N.context=e}const Ke=(e,t)=>e===t,D=Symbol("solid-proxy"),Ee=Symbol("solid-track"),J={equals:Ke};let xe=_e;const I={},k=1,X=2,Pe={owned:null,cleanups:null,context:null,owner:null};var m=null;let V=null,w=null,B=null,b=null,j=null,de=0;function H(e,t){const n=w,r=m,s=e.length===0?Pe:{owned:null,cleanups:null,context:null,owner:t||r};m=s,w=null;try{return pe(()=>e(()=>he(s)),!0)}finally{w=n,m=r}}function S(e,t){t=t?Object.assign({},J,t):J;const n={value:e,observers:null,observerSlots:null,pending:I,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==I?n.pending:n.value)),ae(n,s));return[Ae.bind(n),r]}function Fe(e,t,n){const r=te(e,t,!0,k);U(r)}function C(e,t,n){const r=te(e,t,!1,k);U(r)}function Ve(e,t,n){xe=Ze;const r=te(e,t,!1,k);r.user=!0,j?j.push(r):U(r)}function F(e,t,n){n=n?Object.assign({},J,n):J;const r=te(e,t,!0,0);return r.pending=I,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,U(r),Ae.bind(r)}function Ne(e){if(B)return e();let t;const n=B=[];try{t=e()}finally{B=null}return pe(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==I){const o=s.pending;s.pending=I,ae(s,o)}}},!1),t}function W(e){let t,n=w;return w=null,t=e(),w=n,t}function We(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function Se(){return w}function Ge(e){const t=Symbol("context");return{id:t,Provider:ze(t),defaultValue:e}}function He(e){let t;return(t=ke(m,e.id))!==void 0?t:e.defaultValue}function Je(e){const t=F(e);return F(()=>oe(t()))}function Ae(){const e=V;if(this.sources&&(this.state||e)){const t=b;b=null,this.state===k||e?U(this):Y(this),b=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function ae(e,t,n){if(B)return e.pending===I&&B.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&pe(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];r&&V.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?b.push(o):j.push(o),o.observers&&Ce(o)),r||(o.state=k)}if(b.length>1e6)throw b=[],new Error},!1),t}function U(e){if(!e.fn)return;he(e);const t=m,n=w,r=de;w=m=e,Xe(e,e.value,r),w=n,m=t}function Xe(e,t,n){let r;try{r=e.fn(t)}catch(s){Oe(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?ae(e,r):e.value=r,e.updatedAt=n)}function te(e,t,n,r=k,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==Pe&&(m.owned?m.owned.push(o):m.owned=[o]),o}function K(e){const t=V;if(e.state===0||t)return;if(e.state===X||t)return Y(e);if(e.suspense&&W(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<de);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===k||t)U(e);else if(e.state===X||t){const s=b;b=null,Y(e,n[0]),b=s}}function pe(e,t){if(b)return e();let n=!1;t||(b=[]),j?n=!0:j=[],de++;try{const r=e();return Ye(n),r}catch(r){Oe(r)}finally{b=null,n||(j=null)}}function Ye(e){b&&(_e(b),b=null),!e&&(j.length?Ne(()=>{xe(j),j=null}):j=null)}function _e(e){for(let t=0;t<e.length;t++)K(e[t])}function Ze(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:K(s)}N.context&&Be();const r=e.length;for(t=0;t<n;t++)K(e[t]);for(t=r;t<e.length;t++)K(e[t])}function Y(e,t){const n=V;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===k||n?s!==t&&K(s):(s.state===X||n)&&Y(s,t))}}function Ce(e){const t=V;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=X,r.pure?b.push(r):j.push(r),r.observers&&Ce(r))}}function he(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.owned){for(t=0;t<e.owned.length;t++)he(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Oe(e){throw e}function ke(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ke(e.owner,t):void 0}function oe(e){if(typeof e=="function"&&!e.length)return oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=oe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ze(e){return function(n){let r;return Fe(()=>r=W(()=>(m.context={[e]:n.value},Je(()=>n.children)))),r}}const et=Symbol("fallback");function we(e){for(let t=0;t<e.length;t++)e[t]()}function tt(e,t,n={}){let r=[],s=[],o=[],i=0,l=t.length>1?[]:null;return We(()=>we(o)),()=>{let f=e()||[],d,c;return f[Ee],W(()=>{let u=f.length,a,p,y,E,_,x,P,A,T;if(u===0)i!==0&&(we(o),o=[],r=[],s=[],i=0,l&&(l=[])),n.fallback&&(r=[et],s[0]=H(Ue=>(o[0]=Ue,n.fallback())),i=1);else if(i===0){for(s=new Array(u),c=0;c<u;c++)r[c]=f[c],s[c]=H(h);i=u}else{for(y=new Array(u),E=new Array(u),l&&(_=new Array(u)),x=0,P=Math.min(i,u);x<P&&r[x]===f[x];x++);for(P=i-1,A=u-1;P>=x&&A>=x&&r[P]===f[A];P--,A--)y[A]=s[P],E[A]=o[P],l&&(_[A]=l[P]);for(a=new Map,p=new Array(A+1),c=A;c>=x;c--)T=f[c],d=a.get(T),p[c]=d===void 0?-1:d,a.set(T,c);for(d=x;d<=P;d++)T=r[d],c=a.get(T),c!==void 0&&c!==-1?(y[c]=s[d],E[c]=o[d],l&&(_[c]=l[d]),c=p[c],a.set(T,c)):o[d]();for(c=x;c<u;c++)c in y?(s[c]=y[c],o[c]=E[c],l&&(l[c]=_[c],l[c](c))):s[c]=H(h);s=s.slice(0,i=u),r=f.slice(0)}return s});function h(u){if(o[c]=u,l){const[a,p]=S(c);return l[c]=p,t(f[c],a)}return t(f[c])}}}function g(e,t){return W(()=>e(t||{}))}function ie(e){const t="fallback"in e&&{fallback:()=>e.fallback};return F(tt(()=>e.each,e.children,t||void 0))}function O(e){let t=!1;const n=F(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return F(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?W(()=>s(r)):s}return e.fallback})}function nt(e,t,n){let r=n.length,s=t.length,o=r,i=0,l=0,f=t[s-1].nextSibling,d=null;for(;i<s||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const c=o<r?l?n[l-1].nextSibling:n[o-l]:f;for(;l<o;)e.insertBefore(n[l++],c)}else if(o===l)for(;i<s;)(!d||!d.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],c),t[s]=n[o]}else{if(!d){d=new Map;let h=l;for(;h<o;)d.set(n[h],h++)}const c=d.get(t[i]);if(c!=null)if(l<c&&c<o){let h=i,u=1,a;for(;++h<s&&h<o&&!((a=d.get(t[h]))==null||a!==c+u);)u++;if(u>c-l){const p=t[i];for(;l<c;)e.insertBefore(n[l++],p)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const me="_$DX_DELEGATE";function rt(e,t,n){let r;return H(s=>{r=s,t===document?e():v(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function $(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function ne(e,t=window.document){const n=t[me]||(t[me]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,st))}}function le(e,t){t==null?e.removeAttribute("class"):e.className=t}function v(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Z(e,t,r,n);C(s=>Z(e,t(),s,n),r)}function st(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),N.registry&&!N.done&&(N.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r(s,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Z(e,t,n,r,s){for(N.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(N.context)return n;if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=L(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(N.context)return n;n=L(e,n,r)}else{if(o==="function")return C(()=>{let l=t();for(;typeof l=="function";)l=l();n=Z(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[];if(ce(l,t,s))return C(()=>n=Z(e,l,n,r,!0)),()=>n;if(N.context){for(let f=0;f<l.length;f++)if(l[f].parentNode)return n=l}if(l.length===0){if(n=L(e,n,r),i)return n}else Array.isArray(n)?n.length===0?be(e,l,r):nt(e,n,l):(n&&L(e),be(e,l));n=l}else if(t instanceof Node){if(N.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=L(e,n,r,t);L(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ce(e,t,n){let r=!1;for(let s=0,o=t.length;s<o;s++){let i=t[s],l;if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=ce(e,i)||r;else if((l=typeof i)=="string")e.push(document.createTextNode(i));else if(l==="function")if(n){for(;typeof i=="function";)i=i();r=ce(e,Array.isArray(i)?i:[i])||r}else e.push(i),r=!0;else e.push(document.createTextNode(i.toString()))}return r}function be(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function L(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(s!==l){const f=l.parentNode===e;!o&&!i?f?e.replaceChild(s,l):e.insertBefore(s,n):f&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const ge=Symbol("store-raw"),z=Symbol("store-node"),ot=Symbol("store-name");function Te(e,t){let n=e[D];if(!n){Object.defineProperty(e,D,{value:n=new Proxy(e,ct)});const r=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let o=0,i=r.length;o<i;o++){const l=r[o];if(s[l].get){const f=s[l].get.bind(n);Object.defineProperty(e,l,{get:f})}}}return n}function q(e){return e!=null&&typeof e=="object"&&(e[D]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function M(e,t=new Set){let n,r,s,o;if(n=e!=null&&e[ge])return n;if(!q(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let i=0,l=e.length;i<l;i++)s=e[i],(r=M(s,t))!==s&&(e[i]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const i=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let f=0,d=i.length;f<d;f++)o=i[f],!l[o].get&&(s=e[o],(r=M(s,t))!==s&&(e[o]=r))}return e}function ye(e){let t=e[z];return t||Object.defineProperty(e,z,{value:t={}}),t}function ue(e,t,n){return e[t]||(e[t]=De(n,!0))}function it(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===D||t===z||t===ot||(delete n.value,delete n.writable,n.get=()=>e[D][t]),n}function Le(e){if(Se()){const t=ye(e);(t._||(t._=De()))()}}function lt(e){return Le(e),Reflect.ownKeys(e)}function De(e,t){const[n,r]=S(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=r,n}const ct={get(e,t,n){if(t===ge)return e;if(t===D)return n;if(t===Ee)return Le(e);const r=ye(e),s=r[t];let o=s?r[t]():e[t];if(t===z||t==="__proto__")return o;if(!s){const i=Object.getOwnPropertyDescriptor(e,t);Se()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(i&&i.get)&&(o=ue(r,t,o)())}return q(o)?Te(o):o},set(){return!0},deleteProperty(){return!0},ownKeys:lt,getOwnPropertyDescriptor:it};function Q(e,t,n){if(e[t]===n)return;const r=e[t],s=e.length;n===void 0?delete e[t]:e[t]=n;let o=ye(e),i;(i=ue(o,t,r))&&i.$(()=>n),Array.isArray(e)&&e.length!==s&&(i=ue(o,"length",s))&&i.$(e.length),(i=o._)&&i.$()}function Ie(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const s=n[r];Q(e,s,t[s])}}function ut(e,t){if(typeof t=="function"&&(t=t(e)),t=M(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const s=t[n];e[n]!==s&&Q(e,n,s)}Q(e,"length",r)}else Ie(e,t)}function R(e,t,n=[]){let r,s=e;if(t.length>1){r=t.shift();const i=typeof r,l=Array.isArray(e);if(Array.isArray(r)){for(let f=0;f<r.length;f++)R(e,[r[f]].concat(t),n);return}else if(l&&i==="function"){for(let f=0;f<e.length;f++)r(e[f],f)&&R(e,[f].concat(t),n);return}else if(l&&i==="object"){const{from:f=0,to:d=e.length-1,by:c=1}=r;for(let h=f;h<=d;h+=c)R(e,[h].concat(t),n);return}else if(t.length>1){R(e[r],t,[r].concat(n));return}s=e[r],n=[r].concat(n)}let o=t[0];typeof o=="function"&&(o=o(s,n),o===s)||r===void 0&&o==null||(o=M(o),r===void 0||q(s)&&q(o)&&!Array.isArray(o)?Ie(s,o):Q(e,r,o))}function ft(e,t){const n=M(e||{}),r=Array.isArray(n),s=Te(n);function o(...i){Ne(()=>{r&&i.length===1?ut(n,i[0]):R(n,i)})}return[s,o]}const ee=new WeakMap,qe={get(e,t){if(t===ge)return e;const n=e[t];let r;return q(n)?ee.get(n)||(ee.set(n,r=new Proxy(n,qe)),r):n},set(e,t,n){return Q(e,t,M(n)),!0},deleteProperty(e,t){return Q(e,t,void 0),!0}};function G(e){return t=>{if(q(t)){let n;(n=ee.get(t))||ee.set(t,n=new Proxy(t,qe)),e(n)}return t}}const fe=e=>t=>{t.target.tagName!=="INPUT"&&(t.preventDefault(),e())},ve=()=>crypto.randomUUID(),$e="store",Me=Ge({});function dt(e){const t=localStorage.getItem($e),[n,r]=ft(t?JSON.parse(t):{});Ve(()=>localStorage.setItem($e,JSON.stringify(n)));const s=[n,{toggleView(){r({view:!n.view})},setSelectedProject(o){r({...n,selectedProject:o})},changeSelectedProject(o){r(G(i=>{const l=i.projects.findIndex(c=>c.id===i.selectedProject),f=o==="UP"?-1:1;let d=l;do d=d+f,d<0&&(d=i.projects.length-1),d>=i.projects.length&&(d=0);while(i.projects[d].deleted);i.selectedProject=i.projects[d].id}))},addProject(o){const i=ve();return r({projects:[...n.projects??[],{id:i,name:o,quests:[]}]}),i},renameProject(o,i){r("projects",l=>l.id===o,"name",l=>i)},deleteProject(o){r("projects",i=>i.id===o,"deleted",i=>!0)},addQuest(o){r(G(i=>{i.projects.find(f=>f.id===i.selectedProject).quests.push({id:ve(),name:o,created_at:Date.now()})}))},renameQuest(o,i){r(G(l=>{const d=l.projects.flatMap(c=>c.quests)?.find(c=>c.id===o);d&&(d.name=i)}))},completeQuest(o){r(G(i=>{const f=i.projects.flatMap(d=>d.quests)?.find(d=>d.id===o);f&&(f.complete=!0)}))}}];return g(Me.Provider,{value:s,get children(){return e.children}})}function re(){return He(Me)}const at=$('<form><input class="rounded-sm focus:outline-none" type="text"></form>'),pt=$('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Edit</div>'),ht=$('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Del</div>'),gt=$('<div class="group flex flex-row gap-1 items-baseline"></div>'),yt=$("<div></div>"),wt=e=>{const[t,{setSelectedProject:n,deleteProject:r,renameProject:s}]=re(),[o,i]=S(!1),[l,f]=S(e.project.name);let d;const c=()=>{n(e.project.id)},h=()=>{i(!0),d.focus()},u=()=>{s(e.project.id,l()),i(!1)};return(()=>{const a=gt.cloneNode(!0);return v(a,g(O,{get when(){return o()},get fallback(){return(()=>{const p=yt.cloneNode(!0);return p.$$click=c,v(p,()=>l()||"unnamed"),C(()=>le(p,`truncate cursor-pointer ${t.selectedProject===e.project.id&&"underline"}`)),p})()},get children(){const p=at.cloneNode(!0),y=p.firstChild;p.addEventListener("submit",u),y.$$input=_=>f(_?.currentTarget.value),y.addEventListener("blur",u);const E=d;return typeof E=="function"?E(y):d=y,C(()=>y.value=l()),p}}),null),v(a,g(O,{get when(){return!o()},get children(){return[(()=>{const p=pt.cloneNode(!0);return p.$$click=h,p})(),(()=>{const p=ht.cloneNode(!0);return p.$$click=()=>r(e.project.id),p})()]}}),null),a})()};ne(["input","click"]);var mt=["Shift","Meta","Alt","Control"],bt=typeof navigator=="object"&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function se(e,t){return typeof e.getModifierState=="function"&&e.getModifierState(t)}function vt(e){return e.trim().split(" ").map(function(t){var n=t.split(/\b\+/),r=n.pop();return[n=n.map(function(s){return s==="$mod"?bt:s}),r]})}function $t(e,t){var n;t===void 0&&(t={});var r=(n=t.timeout)!=null?n:1e3,s=Object.keys(e).map(function(l){return[vt(l),e[l]]}),o=new Map,i=null;return function(l){l instanceof KeyboardEvent&&(s.forEach(function(f){var d=f[0],c=f[1],h=o.get(d)||d;(function(u,a){return!(a[1].toUpperCase()!==u.key.toUpperCase()&&a[1]!==u.code||a[0].find(function(p){return!se(u,p)})||mt.find(function(p){return!a[0].includes(p)&&a[1]!==p&&se(u,p)}))})(l,h[0])?h.length>1?o.set(d,h.slice(1)):(o.delete(d),c(l)):se(l,l.key)||o.delete(d)}),i&&clearTimeout(i),i=setTimeout(o.clear.bind(o),r))}}function Qe(e,t,n){var r;n===void 0&&(n={});var s=(r=n.event)!=null?r:"keydown",o=$t(t,n);return e.addEventListener(s,o),function(){e.removeEventListener(s,o)}}const jt=$('<form><input class="rounded-sm focus:outline-none" type="text"></form>'),Et=$('<div class="w-1/5 h-screen p-4 flex overflow-y-scroll"><div class="my-auto w-full"></div></div>'),xt=()=>{const[e,{addProject:t,setSelectedProject:n,changeSelectedProject:r}]=re(),[s,o]=S(!1),[i,l]=S("");let f;Qe(window,{l:fe(()=>{o(!0),f.focus()}),Escape:()=>o(!1),ArrowUp:()=>r("UP"),ArrowDown:()=>r("DOWN")});const c=()=>{const u=t(i());o(!1),n(u)},h=()=>e.projects.filter(u=>!u.deleted)??[];return(()=>{const u=Et.cloneNode(!0),a=u.firstChild;return v(a,g(ie,{get each(){return h()},children:p=>g(wt,{project:p})}),null),v(a,g(O,{get when(){return s()},get children(){const p=jt.cloneNode(!0),y=p.firstChild;p.addEventListener("submit",c),y.$$input=_=>l(_?.currentTarget.value),y.addEventListener("blur",c);const E=f;return typeof E=="function"?E(y):f=y,p}}),null),u})()};ne(["input"]);const Pt=$('<form class="w-full"><input class="w-full rounded-sm focus:outline-none" type="text"></form>'),Nt=$("<div>Edit</div>"),St=$('<div class="group flex flex-row gap-1 items-baseline"></div>'),At=$("<div></div>"),je=e=>{const[,{renameQuest:t,completeQuest:n}]=re(),[r,s]=S(!1),[o,i]=S(e.quest.name);let l;const f=()=>{s(!0),l.focus()},d=()=>{t(e.quest.id,o()),s(!1)},c=()=>{n(e.quest.id)};return(()=>{const h=St.cloneNode(!0);return v(h,g(O,{get when(){return r()},get fallback(){return(()=>{const u=At.cloneNode(!0);return u.$$click=c,v(u,()=>e.quest.name||"unnamed"),C(()=>le(u,`truncate cursor-pointer ${e.quest.complete&&"invisible"}`)),u})()},get children(){const u=Pt.cloneNode(!0),a=u.firstChild;u.addEventListener("submit",d),a.$$input=y=>i(y?.currentTarget.value),a.addEventListener("blur",d);const p=l;return typeof p=="function"?p(a):l=a,C(()=>a.value=o()),u}}),null),v(h,g(O,{get when(){return!r()},get children(){const u=Nt.cloneNode(!0);return u.$$click=f,C(()=>le(u,`hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer ${e.quest.complete&&"invisible"}`)),u}}),null),h})()};ne(["input","click"]);const _t=$('<form class="w-full"><input class="w-full rounded-sm focus:outline-none" type="text"></form>'),Ct=$('<div class="w-full pt-4"><div class="grid grid-cols-4 gap-1"></div></div>'),Ot=$('<div class="w-full"><div class="mx-auto w-96 py-4"></div></div>'),kt=()=>{const[e,{addQuest:t,toggleView:n}]=re(),[r,s]=S(!1),[o,i]=S("");let l;Qe(window,{n:fe(()=>{s(!0),l.focus()}),Escape:()=>s(!1),v:fe(n)});const d=()=>{t(o()),s(!1)},c=()=>(()=>{const u=_t.cloneNode(!0),a=u.firstChild;u.addEventListener("submit",d),a.$$input=y=>i(y?.currentTarget.value),a.addEventListener("blur",d);const p=l;return typeof p=="function"?p(a):l=a,u})(),h=()=>{const u=e.projects?.find(a=>a.id===e.selectedProject);return e.view?u?.quests??[]:u?.quests?.filter(a=>!a.complete)??[]};return g(O,{get when(){return e.view},get fallback(){return(()=>{const u=Ot.cloneNode(!0),a=u.firstChild;return v(a,g(ie,{get each(){return h()},children:p=>g(je,{quest:p})}),null),v(a,g(O,{get when(){return r()},get children(){return g(c,{})}}),null),u})()},get children(){const u=Ct.cloneNode(!0),a=u.firstChild;return v(a,g(ie,{get each(){return h()},children:p=>g(je,{quest:p})}),null),v(a,g(O,{get when(){return r()},get children(){return g(c,{})}}),null),u}})};ne(["input"]);const Tt=$('<div class="flex flex-row"></div>'),Lt=()=>g(dt,{get children(){const e=Tt.cloneNode(!0);return v(e,g(xt,{}),null),v(e,g(kt,{}),null),e}});rt(()=>g(Lt,{}),document.getElementById("root"));
