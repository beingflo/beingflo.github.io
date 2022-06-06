const K=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};K();const y={};let Q=F;const b={},x=1,m=2,U={owned:null,cleanups:null,context:null,owner:null};var u=null;let C=null,w=null,r=null,h=null,B=0;function V(e,t){const n=u,i=e.length===0?U:{owned:null,cleanups:null,context:null,owner:t||n};u=i;try{return L(()=>e(()=>O(i)),!0)}finally{u=n}}function S(e,t,n){const i=$(e,t,!1,x);M(i)}function W(e){if(w)return e();let t;const n=w=[];try{t=e()}finally{w=null}return L(()=>{for(let i=0;i<n.length;i+=1){const s=n[i];if(s.pending!==b){const l=s.pending;s.pending=b,q(s,l)}}},!1),t}function D(e){let t;return t=e(),t}function q(e,t,n){if(w)return e.pending===b&&w.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let i=!1;return e.value=t,e.observers&&e.observers.length&&L(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s];i&&C.disposed.has(l),(i&&!l.tState||!i&&!l.state)&&(l.pure?r.push(l):h.push(l),l.observers&&G(l)),i||(l.state=x)}if(r.length>1e6)throw r=[],new Error},!1),t}function M(e){if(!e.fn)return;O(e);const t=u,n=B;u=e,_(e,e.value,n),u=t}function _(e,t,n){let i;try{i=e.fn(t)}catch(s){v(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?q(e,i):e.value=i,e.updatedAt=n)}function $(e,t,n,i=x,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:n};return u===null||u!==U&&(u.owned?u.owned.push(l):u.owned=[l]),l}function R(e){const t=C;if(e.state===0||t)return;if(e.state===m||t)return E(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===x||t)M(e);else if(e.state===m||t){const s=r;r=null,E(e,n[0]),r=s}}function L(e,t){if(r)return e();let n=!1;t||(r=[]),h?n=!0:h=[],B++;try{const i=e();return j(n),i}catch(i){v(i)}finally{r=null,n||(h=null)}}function j(e){r&&(F(r),r=null),!e&&(h.length?W(()=>{Q(h),h=null}):h=null)}function F(e){for(let t=0;t<e.length;t++)R(e[t])}function E(e,t){const n=C;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===x||n?s!==t&&R(s):(s.state===m||n)&&E(s,t))}}function G(e){const t=C;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=m,i.pure?r.push(i):h.push(i),i.observers&&G(i))}}function O(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),o=n.observerSlots.pop();i<s.length&&(l.sourceSlots[o]=i,s[i]=l,n.observerSlots[i]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)O(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function v(e){throw e}function J(e,t){return D(()=>e(t||{}))}function X(e,t,n){let i=n.length,s=t.length,l=i,o=0,f=0,p=t[s-1].nextSibling,a=null;for(;o<s||f<l;){if(t[o]===n[f]){o++,f++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===o){const c=l<i?f?n[f-1].nextSibling:n[l-f]:p;for(;f<l;)e.insertBefore(n[f++],c)}else if(l===f)for(;o<s;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[f]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[f++],t[o++].nextSibling),e.insertBefore(n[--l],c),t[s]=n[l]}else{if(!a){a=new Map;let g=f;for(;g<l;)a.set(n[g],g++)}const c=a.get(t[o]);if(c!=null)if(f<c&&c<l){let g=o,N=1,P;for(;++g<s&&g<l&&!((P=a.get(t[g]))==null||P!==c+N);)N++;if(N>c-f){const H=t[o];for(;f<c;)e.insertBefore(n[f++],H)}else e.replaceChild(n[f++],t[o++])}else o++;else t[o++].remove()}}}function Y(e,t,n){let i;return V(s=>{i=s,t===document?e():z(t,e(),t.firstChild?null:void 0,n)}),()=>{i(),t.textContent=""}}function Z(e,t,n){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function z(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return A(e,t,i,n);S(s=>A(e,t(),s,n),i)}function A(e,t,n,i,s){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(y.context)return n;if(l==="number"&&(t=t.toString()),o){let f=n[0];f&&f.nodeType===3?f.data=t:f=document.createTextNode(t),n=d(e,n,i,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(y.context)return n;n=d(e,n,i)}else{if(l==="function")return S(()=>{let f=t();for(;typeof f=="function";)f=f();n=A(e,f,n,i)}),()=>n;if(Array.isArray(t)){const f=[];if(T(f,t,s))return S(()=>n=A(e,f,n,i,!0)),()=>n;if(y.context){for(let p=0;p<f.length;p++)if(f[p].parentNode)return n=f}if(f.length===0){if(n=d(e,n,i),o)return n}else Array.isArray(n)?n.length===0?I(e,f,i):X(e,n,f):(n&&d(e),I(e,f));n=f}else if(t instanceof Node){if(y.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=d(e,n,i,t);d(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function T(e,t,n){let i=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],f;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=T(e,o)||i;else if((f=typeof o)=="string")e.push(document.createTextNode(o));else if(f==="function")if(n){for(;typeof o=="function";)o=o();i=T(e,Array.isArray(o)?o:[o])||i}else e.push(o),i=!0;else e.push(document.createTextNode(o.toString()))}return i}function I(e,t,n){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function d(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const f=t[o];if(s!==f){const p=f.parentNode===e;!l&&!o?p?e.replaceChild(s,f):e.insertBefore(s,n):p&&f.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}const k=Z('<p class="text-2xl text-green-800 text-center py-10">rest.quest</p>'),ee=()=>k.cloneNode(!0);Y(()=>J(ee,{}),document.getElementById("root"));
