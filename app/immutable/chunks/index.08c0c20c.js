function E(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(B)}function T(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function I(t){return Object.keys(t).length===0}function ut(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?H(n.ctx.slice(),t[1](i(e))):n.ctx}function ot(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)a[o]=e.dirty[o]|r[o];return a}return e.dirty|r}return e.dirty}function at(t,e,n,i,r,a){if(r){const c=L(e,n,i,a);t.p(c,r)}}function ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let w=!1;function G(){w=!0}function J(){w=!1}function W(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const s=e[u];s.claim_order!==void 0&&l.push(s)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,s=(r>0&&e[n[r]].claim_order<=u?r+1:W(1,r,g=>e[n[g]].claim_order,u))-1;i[l]=n[s]+1;const f=s+1;n[f]=l,r=Math.max(f,r)}const a=[],c=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(a.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);a.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<a.length&&c[l].claim_order>=a[u].claim_order;)u++;const s=u<a.length?a[u]:null;t.insertBefore(c[l],s)}}function Q(t,e){if(w){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function st(t,e,n){w&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function _t(){return S(" ")}function dt(){return S("")}function ht(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,r=!1){X(t);const a=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function Y(t,e,n,i){return O(t,r=>r.nodeName===e,r=>{const a=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||a.push(o.name)}a.forEach(c=>r.removeAttribute(c))},()=>i(e))}function pt(t,e,n){return Y(t,e,n,U)}function Z(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function yt(t){return Z(t," ")}function gt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function xt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function bt(t,e){return new t(e)}let p;function m(t){p=t}function P(){if(!p)throw new Error("Function called outside component initialization");return p}function $t(t){P().$$.on_mount.push(t)}function wt(t){P().$$.after_update.push(t)}const h=[],k=[],b=[],q=[],z=Promise.resolve();let N=!1;function D(){N||(N=!0,z.then(F))}function vt(){return D(),z}function A(t){b.push(t)}const v=new Set;let d=0;function F(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const e=h[d];d++,m(e),tt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(m(null),h.length=0,d=0;k.length;)k.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];v.has(n)||(v.add(n),n())}b.length=0}while(h.length);for(;q.length;)q.pop()();N=!1,v.clear(),m(t)}function tt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const $=new Set;let _;function Et(){_={r:0,c:[],p:_}}function Nt(){_.r||y(_.c),_=_.p}function et(t,e){t&&t.i&&($.delete(t),t.i(e))}function At(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function St(t){t&&t.c()}function jt(t,e){t&&t.l(e)}function nt(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(B).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),a.forEach(A)}function it(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){t.$$.dirty[0]===-1&&(h.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ct(t,e,n,i,r,a,c,o=[-1]){const l=p;m(t);const u=t.$$={fragment:null,ctx:[],props:a,update:E,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let s=!1;if(u.ctx=n?n(t,e.props||{},(f,g,...j)=>{const C=j.length?j[0]:g;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),s&&rt(t,f)),g}):[],u.update(),s=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){G();const f=V(e.target);u.fragment&&u.fragment.l(f),f.forEach(R)}else u.fragment&&u.fragment.c();e.intro&&et(t.$$.fragment),nt(t,e.target,e.anchor,e.customElement),J(),F()}m(l)}class Mt{$destroy(){it(this,1),this.$destroy=E}$on(e,n){if(!T(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{jt as A,nt as B,it as C,lt as D,Q as E,ut as F,at as G,ft as H,ot as I,ht as J,Mt as S,_t as a,st as b,yt as c,At as d,dt as e,Nt as f,et as g,R as h,Ct as i,wt as j,U as k,pt as l,V as m,E as n,$t as o,mt as p,xt as q,S as r,ct as s,vt as t,Z as u,gt as v,Et as w,k as x,bt as y,St as z};
