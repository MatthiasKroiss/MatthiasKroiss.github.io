import{S as xe,i as ye,s as Ne,k as o,r as g,a as S,l as i,m as l,u as x,h as r,c as y,p as s,b as C,E as e,J as Te,n as ie,x as Pe}from"../chunks/index.08c0c20c.js";const H={_origin:"https://api.emailjs.com"},we=(n,t="https://api.emailjs.com")=>{H._userID=n,H._origin=t},ge=(n,t,m)=>{if(!n)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!m)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Ie{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const Se=(n,t,m={})=>new Promise((d,c)=>{const p=new XMLHttpRequest;p.addEventListener("load",({target:a})=>{const h=new Ie(a);h.status===200||h.text==="OK"?d(h):c(h)}),p.addEventListener("error",({target:a})=>{c(new Ie(a))}),p.open("POST",H._origin+n,!0),Object.keys(m).forEach(a=>{p.setRequestHeader(a,m[a])}),p.send(t)}),Ve=(n,t,m,d)=>{const c=d||H._userID;return ge(c,n,t),Se("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:c,service_id:n,template_id:t,template_params:m}),{"Content-type":"application/json"})},De=n=>{let t;if(typeof n=="string"?t=document.querySelector(n):t=n,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Oe=(n,t,m,d)=>{const c=d||H._userID,p=De(m);ge(c,n,t);const a=new FormData(p);return a.append("lib_version","3.10.0"),a.append("service_id",n),a.append("template_id",t),a.append("user_id",c),Se("/api/v1.0/email/send-form",a)},qe={init:we,send:Ve,sendForm:Oe};function Ae(n){let t,m,d,c,p,a,h,k,f,N,T,A,X,$,_,z,P,F,G,Q,E,W,K,b,Y,w,L,Z,ee,v,I,te,V,se,D,ae,re,j,ne,oe,le;return{c(){t=o("h1"),m=g("Kontaktformular"),d=S(),c=o("h2"),p=g("Nehmen Sie Kontakt mit mir auf"),a=S(),h=o("div"),k=o("div"),f=o("form"),N=o("div"),T=o("div"),A=o("span"),X=g("@"),$=S(),_=o("input"),z=S(),P=o("div"),F=o("span"),G=g("Vor- und Nachname"),Q=S(),E=o("input"),W=S(),K=o("div"),b=o("textarea"),Y=S(),w=o("div"),L=o("span"),Z=g("In welche Kategorie fällt ihr Anliegen"),ee=S(),v=o("select"),I=o("option"),te=g("Beruflich"),V=o("option"),se=g("Privat"),D=o("option"),ae=g("Anderes"),re=S(),j=o("button"),ne=g("Senden"),this.h()},l(u){t=i(u,"H1",{});var O=l(t);m=x(O,"Kontaktformular"),O.forEach(r),d=y(u),c=i(u,"H2",{class:!0});var ce=l(c);p=x(ce,"Nehmen Sie Kontakt mit mir auf"),ce.forEach(r),a=y(u),h=i(u,"DIV",{class:!0});var ue=l(h);k=i(ue,"DIV",{class:!0});var de=l(k);f=i(de,"FORM",{});var q=l(f);N=i(q,"DIV",{class:!0});var M=l(N);T=i(M,"DIV",{class:!0});var R=l(T);A=i(R,"SPAN",{class:!0,id:!0});var me=l(A);X=x(me,"@"),me.forEach(r),$=y(R),_=i(R,"INPUT",{type:!0,class:!0,id:!0,name:!0,placeholder:!0}),R.forEach(r),z=y(M),P=i(M,"DIV",{class:!0});var U=l(P);F=i(U,"SPAN",{class:!0,id:!0});var pe=l(F);G=x(pe,"Vor- und Nachname"),pe.forEach(r),Q=y(U),E=i(U,"INPUT",{type:!0,class:!0,id:!0,name:!0,placeholder:!0}),U.forEach(r),M.forEach(r),W=y(q),K=i(q,"DIV",{class:!0});var fe=l(K);b=i(fe,"TEXTAREA",{class:!0,id:!0,name:!0,placeholder:!0}),l(b).forEach(r),fe.forEach(r),Y=y(q),w=i(q,"DIV",{class:!0});var B=l(w);L=i(B,"SPAN",{class:!0});var he=l(L);Z=x(he,"In welche Kategorie fällt ihr Anliegen"),he.forEach(r),ee=y(B),v=i(B,"SELECT",{class:!0,"aria-label":!0,name:!0});var J=l(v);I=i(J,"OPTION",{});var ve=l(I);te=x(ve,"Beruflich"),ve.forEach(r),V=i(J,"OPTION",{});var _e=l(V);se=x(_e,"Privat"),_e.forEach(r),D=i(J,"OPTION",{});var Ee=l(D);ae=x(Ee,"Anderes"),Ee.forEach(r),J.forEach(r),B.forEach(r),re=y(q),j=i(q,"BUTTON",{type:!0,class:!0});var be=l(j);ne=x(be,"Senden"),be.forEach(r),q.forEach(r),de.forEach(r),ue.forEach(r),this.h()},h(){s(c,"class","p-3"),s(A,"class","input-group-text"),s(A,"id","basic-addon1"),s(_,"type","email"),s(_,"class","form-control"),s(_,"id","email"),s(_,"name","email"),s(_,"placeholder","Email"),_.required=!0,s(T,"class","col input-group"),s(F,"class","input-group-text"),s(F,"id","basic-addon1"),s(E,"type","text"),s(E,"class","form-control"),s(E,"id","name"),s(E,"name","name"),E.required=!0,s(E,"placeholder","Name"),s(P,"class","col input-group"),s(N,"class","row mb-3"),s(b,"class","form-control"),s(b,"id","issue"),s(b,"name","message"),b.required=!0,s(b,"placeholder","Ihr Anliegen an mich"),s(K,"class","mb-3"),s(L,"class","input-group-text"),I.selected=!0,I.__value="business",I.value=I.__value,V.__value="private",V.value=V.__value,D.__value="someting different",D.value=D.__value,s(v,"class","form-select form-select-sm "),s(v,"aria-label",".form-select-sm example"),s(v,"name","category"),s(w,"class","mb-4 input-group"),s(j,"type","submit"),s(j,"class","btn btn-outline-primary bi-send btnMyColor"),s(k,"class","p-2"),s(h,"class","p-4 justify-content-center")},m(u,O){C(u,t,O),e(t,m),C(u,d,O),C(u,c,O),e(c,p),C(u,a,O),C(u,h,O),e(h,k),e(k,f),e(f,N),e(N,T),e(T,A),e(A,X),e(T,$),e(T,_),e(N,z),e(N,P),e(P,F),e(F,G),e(P,Q),e(P,E),e(f,W),e(f,K),e(K,b),e(f,Y),e(f,w),e(w,L),e(L,Z),e(w,ee),e(w,v),e(v,I),e(I,te),e(v,V),e(V,se),e(v,D),e(D,ae),e(f,re),e(f,j),e(j,ne),n[2](f),oe||(le=Te(f,"submit",n[1]),oe=!0)},p:ie,i:ie,o:ie,d(u){u&&r(t),u&&r(d),u&&r(c),u&&r(a),u&&r(h),n[2](null),oe=!1,le()}}}function Fe(n,t,m){let d;function c(){qe.sendForm("gmx","template_5sq19rg",d,"q78RxbcNIVwlXus-V").then(function(a){console.log("SUCCESS!",a.status,a.text)},function(a){console.log("FAILED...",a)}),d.reset()}function p(a){Pe[a?"unshift":"push"](()=>{d=a,m(0,d)})}return[d,c,p]}class ke extends xe{constructor(t){super(),ye(this,t,Fe,Ae,Ne,{})}}export{ke as default};
