import{s as Pe,d as l,i as n,a as de,b as m,c as je,e as d,h as Je,f as q,g as De,j as $,k as xe,l as v,m as k,n as Ee,o as Qe,p as Ve,q as Be,r as Ge,t as be}from"../chunks/scheduler.BihxvvKE.js";import{S as ze,i as Ke,d as ae,t as R,a as T,c as we,m as oe,b as re,e as le,g as he}from"../chunks/index.C8lMhvGQ.js";import{e as Xe,s as Ye,Q as qe,p as We,r as Fe,C as Ze}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DOxAi7-q.js";import{w as et}from"../chunks/entry.bY31C56C.js";import{h as te,p as tt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as at}from"../chunks/stores.BA5vs2QC.js";import{B as Ne,L as ot,Q as ke}from"../chunks/LineChart.jgdcS2Ee.js";function rt(s){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:be,p:be,d:be}}function Ie(s){let r,o;return r=new ke({props:{queryID:"marquin_summary",queryResult:s[0]}}),{c(){le(r.$$.fragment)},l(a){re(r.$$.fragment,a)},m(a,f){oe(r,a,f),o=!0},p(a,f){const y={};f&1&&(y.queryResult=a[0]),r.$set(y)},i(a){o||(T(r.$$.fragment,a),o=!0)},o(a){R(r.$$.fragment,a),o=!1},d(a){ae(r,a)}}}function Ue(s){let r,o;return r=new ke({props:{queryID:"javanne_summary",queryResult:s[1]}}),{c(){le(r.$$.fragment)},l(a){re(r.$$.fragment,a)},m(a,f){oe(r,a,f),o=!0},p(a,f){const y={};f&2&&(y.queryResult=a[1]),r.$set(y)},i(a){o||(T(r.$$.fragment,a),o=!0)},o(a){R(r.$$.fragment,a),o=!1},d(a){ae(r,a)}}}function Ae(s){let r,o;return r=new ke({props:{queryID:"portfolio_performance",queryResult:s[2]}}),{c(){le(r.$$.fragment)},l(a){re(r.$$.fragment,a)},m(a,f){oe(r,a,f),o=!0},p(a,f){const y={};f&4&&(y.queryResult=a[2]),r.$set(y)},i(a){o||(T(r.$$.fragment,a),o=!0)},o(a){R(r.$$.fragment,a),o=!1},d(a){ae(r,a)}}}function lt(s){var He,$e;let r,o,a,f,y,i,ie='<a href="#portfolio-competition">Portfolio Competition</a>',X,C,ne='<a href="#summary">Summary</a>',I,b,S="This is a high level report of the portfolio competition between Marquin and Javanne.",L,g,Y='<strong class="markdown">Marquin</strong>: 100% BTC',O,w,j='<strong class="markdown">Javanne</strong>: 25% Google, 25% Apple, 25% Nvidia, 25% Rolls Royce',D,M,W='<a href="#scenario-and-performance">Scenario and performance</a>',P,h,E="How does $10k invested in Marquin's portfolio compare with $10k invested in Javannes portfolio?",F,H,Z="Investment date: 20th May 2026",J,u,x,N,Q,ve,V,ue,ee,U,Te='<a href="#portfolio-comparison">Portfolio Comparison</a>',me,B,fe,A,Me='<a href="#details">Details</a>',_e,G,Ce='<strong class="markdown">Competition Start:</strong> May 20, 2026',pe,z,ge='<strong class="markdown">Competition End:</strong> May 20, 2027',ce;function Oe(e,t){return rt}let se=Oe()(s),_=s[0]&&Ie(s),p=s[1]&&Ue(s);Q=new Ne({props:{data:s[0],value:"total_value",comparison:"absolute_delta",comparisonTitle:`(${(He=s[0][0].perc_diff)==null?void 0:He.toLocaleString()}%) since start`,title:"Marquin Portfolio ($10k)",fmt:"usd"}}),V=new Ne({props:{data:s[1],value:"total_value",comparison:"absolute_delta",comparisonTitle:`(${($e=s[1][0].perc_diff)==null?void 0:$e.toLocaleString()}%) since start`,title:"Javanne Portfolio ($10k)",fmt:"usd"}});let c=s[2]&&Ae(s);return B=new ot({props:{data:s[2],x:"date",y:"portfolio_value",series:"candidate",yMin:"0",seriesColors:{Marquin:"#f7931a",Javanne:"#007aff"}}}),{c(){r=v(),se.c(),o=k("meta"),a=k("meta"),f=De(),y=v(),i=k("h1"),i.innerHTML=ie,X=v(),C=k("h2"),C.innerHTML=ne,I=v(),b=k("p"),b.textContent=S,L=v(),g=k("p"),g.innerHTML=Y,O=v(),w=k("p"),w.innerHTML=j,D=v(),M=k("h2"),M.innerHTML=W,P=v(),h=k("p"),h.textContent=E,F=v(),H=k("p"),H.textContent=Z,J=v(),_&&_.c(),u=v(),p&&p.c(),x=v(),N=k("div"),le(Q.$$.fragment),ve=v(),le(V.$$.fragment),ue=v(),c&&c.c(),ee=v(),U=k("h2"),U.innerHTML=Te,me=v(),le(B.$$.fragment),fe=v(),A=k("h2"),A.innerHTML=Me,_e=v(),G=k("p"),G.innerHTML=Ce,pe=v(),z=k("p"),z.innerHTML=ge,this.h()},l(e){r=d(e);const t=Je("svelte-2igo1p",document.head);se.l(t),o=q(t,"META",{name:!0,content:!0}),a=q(t,"META",{name:!0,content:!0}),f=De(),t.forEach(l),y=d(e),i=q(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),$(i)!=="svelte-l5jsel"&&(i.innerHTML=ie),X=d(e),C=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$(C)!=="svelte-y5osc8"&&(C.innerHTML=ne),I=d(e),b=q(e,"P",{class:!0,"data-svelte-h":!0}),$(b)!=="svelte-1cin6sj"&&(b.textContent=S),L=d(e),g=q(e,"P",{class:!0,"data-svelte-h":!0}),$(g)!=="svelte-couarb"&&(g.innerHTML=Y),O=d(e),w=q(e,"P",{class:!0,"data-svelte-h":!0}),$(w)!=="svelte-1qknqyq"&&(w.innerHTML=j),D=d(e),M=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$(M)!=="svelte-1ufp5hz"&&(M.innerHTML=W),P=d(e),h=q(e,"P",{class:!0,"data-svelte-h":!0}),$(h)!=="svelte-46ii3o"&&(h.textContent=E),F=d(e),H=q(e,"P",{class:!0,"data-svelte-h":!0}),$(H)!=="svelte-muef9w"&&(H.textContent=Z),J=d(e),_&&_.l(e),u=d(e),p&&p.l(e),x=d(e),N=q(e,"DIV",{style:!0});var K=xe(N);re(Q.$$.fragment,K),ve=d(K),re(V.$$.fragment,K),K.forEach(l),ue=d(e),c&&c.l(e),ee=d(e),U=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$(U)!=="svelte-1yok5f7"&&(U.innerHTML=Te),me=d(e),re(B.$$.fragment,e),fe=d(e),A=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$(A)!=="svelte-13iv4h6"&&(A.innerHTML=Me),_e=d(e),G=q(e,"P",{class:!0,"data-svelte-h":!0}),$(G)!=="svelte-1jem7wb"&&(G.innerHTML=Ce),pe=d(e),z=q(e,"P",{class:!0,"data-svelte-h":!0}),$(z)!=="svelte-n99i7z"&&(z.innerHTML=ge),this.h()},h(){m(o,"name","twitter:card"),m(o,"content","summary_large_image"),m(a,"name","twitter:site"),m(a,"content","@evidence_dev"),m(i,"class","markdown"),m(i,"id","portfolio-competition"),m(C,"class","markdown"),m(C,"id","summary"),m(b,"class","markdown"),m(g,"class","markdown"),m(w,"class","markdown"),m(M,"class","markdown"),m(M,"id","scenario-and-performance"),m(h,"class","markdown"),m(H,"class","markdown"),je(N,"display","flex"),je(N,"gap","20px"),m(U,"class","markdown"),m(U,"id","portfolio-comparison"),m(A,"class","markdown"),m(A,"id","details"),m(G,"class","markdown"),m(z,"class","markdown")},m(e,t){n(e,r,t),se.m(document.head,null),de(document.head,o),de(document.head,a),de(document.head,f),n(e,y,t),n(e,i,t),n(e,X,t),n(e,C,t),n(e,I,t),n(e,b,t),n(e,L,t),n(e,g,t),n(e,O,t),n(e,w,t),n(e,D,t),n(e,M,t),n(e,P,t),n(e,h,t),n(e,F,t),n(e,H,t),n(e,J,t),_&&_.m(e,t),n(e,u,t),p&&p.m(e,t),n(e,x,t),n(e,N,t),oe(Q,N,null),de(N,ve),oe(V,N,null),n(e,ue,t),c&&c.m(e,t),n(e,ee,t),n(e,U,t),n(e,me,t),oe(B,e,t),n(e,fe,t),n(e,A,t),n(e,_e,t),n(e,G,t),n(e,pe,t),n(e,z,t),ce=!0},p(e,[t]){var Se,Le;se.p(e,t),e[0]?_?(_.p(e,t),t&1&&T(_,1)):(_=Ie(e),_.c(),T(_,1),_.m(u.parentNode,u)):_&&(he(),R(_,1,1,()=>{_=null}),we()),e[1]?p?(p.p(e,t),t&2&&T(p,1)):(p=Ue(e),p.c(),T(p,1),p.m(x.parentNode,x)):p&&(he(),R(p,1,1,()=>{p=null}),we());const K={};t&1&&(K.data=e[0]),t&1&&(K.comparisonTitle=`(${(Se=e[0][0].perc_diff)==null?void 0:Se.toLocaleString()}%) since start`),Q.$set(K);const ye={};t&2&&(ye.data=e[1]),t&2&&(ye.comparisonTitle=`(${(Le=e[1][0].perc_diff)==null?void 0:Le.toLocaleString()}%) since start`),V.$set(ye),e[2]?c?(c.p(e,t),t&4&&T(c,1)):(c=Ae(e),c.c(),T(c,1),c.m(ee.parentNode,ee)):c&&(he(),R(c,1,1,()=>{c=null}),we());const Re={};t&4&&(Re.data=e[2]),B.$set(Re)},i(e){ce||(T(_),T(p),T(Q.$$.fragment,e),T(V.$$.fragment,e),T(c),T(B.$$.fragment,e),ce=!0)},o(e){R(_),R(p),R(Q.$$.fragment,e),R(V.$$.fragment,e),R(c),R(B.$$.fragment,e),ce=!1},d(e){e&&(l(r),l(y),l(i),l(X),l(C),l(I),l(b),l(L),l(g),l(O),l(w),l(D),l(M),l(P),l(h),l(F),l(H),l(J),l(u),l(x),l(N),l(ue),l(ee),l(U),l(me),l(fe),l(A),l(_e),l(G),l(pe),l(z)),se.d(e),l(o),l(a),l(f),_&&_.d(e),p&&p.d(e),ae(Q),ae(V),c&&c.d(e),ae(B,e)}}}function it(s,r,o){let a,f;Ee(s,at,u=>o(17,a=u)),Ee(s,Fe,u=>o(23,f=u));let{data:y}=r,{data:i={},customFormattingSettings:ie,__db:X,inputs:C}=y;Qe(Fe,f="6666cd76f96956469e7be39d750cc7d9",f);let ne=Xe(et(C));Ve(ne.subscribe(u=>C=u)),Be(Ze,{getCustomFormats:()=>ie.customFormats||[]});const I=(u,x)=>tt(X.query,u,{query_name:x});Ye(I),a.params,Ge(()=>!0);let b={initialData:void 0,initialError:void 0},S=te`select 
    portfolio_value as total_value,
    portfolio_value - 10000 as absolute_delta,
    10000 as start_value,
    ROUND((100 *(portfolio_value - 10000) / 10000), 0) AS perc_diff
from portfolio.comparison
where candidate = 'Marquin'
order by date desc
limit 1`,L=`select 
    portfolio_value as total_value,
    portfolio_value - 10000 as absolute_delta,
    10000 as start_value,
    ROUND((100 *(portfolio_value - 10000) / 10000), 0) AS perc_diff
from portfolio.comparison
where candidate = 'Marquin'
order by date desc
limit 1`;i.marquin_summary_data&&(i.marquin_summary_data instanceof Error?b.initialError=i.marquin_summary_data:b.initialData=i.marquin_summary_data,i.marquin_summary_columns&&(b.knownColumns=i.marquin_summary_columns));let g,Y=!1;const O=qe.createReactive({callback:u=>{o(0,g=u)},execFn:I},{id:"marquin_summary",...b});O(L,{noResolve:S,...b}),globalThis[Symbol.for("marquin_summary")]={get value(){return g}};let w={initialData:void 0,initialError:void 0},j=te`select 
    portfolio_value as total_value,
    portfolio_value - 10000 as absolute_delta,
    10000 as start_value,
    ROUND((100 *(portfolio_value - 10000) / 10000), 0) AS perc_diff
from portfolio.comparison
where candidate = 'Javanne'
order by date desc
limit 1`,D=`select 
    portfolio_value as total_value,
    portfolio_value - 10000 as absolute_delta,
    10000 as start_value,
    ROUND((100 *(portfolio_value - 10000) / 10000), 0) AS perc_diff
from portfolio.comparison
where candidate = 'Javanne'
order by date desc
limit 1`;i.javanne_summary_data&&(i.javanne_summary_data instanceof Error?w.initialError=i.javanne_summary_data:w.initialData=i.javanne_summary_data,i.javanne_summary_columns&&(w.knownColumns=i.javanne_summary_columns));let M,W=!1;const P=qe.createReactive({callback:u=>{o(1,M=u)},execFn:I},{id:"javanne_summary",...w});P(D,{noResolve:j,...w}),globalThis[Symbol.for("javanne_summary")]={get value(){return M}};let h={initialData:void 0,initialError:void 0},E=te`select * from portfolio.comparison`,F="select * from portfolio.comparison";i.portfolio_performance_data&&(i.portfolio_performance_data instanceof Error?h.initialError=i.portfolio_performance_data:h.initialData=i.portfolio_performance_data,i.portfolio_performance_columns&&(h.knownColumns=i.portfolio_performance_columns));let H,Z=!1;const J=qe.createReactive({callback:u=>{o(2,H=u)},execFn:I},{id:"portfolio_performance",...h});return J(F,{noResolve:E,...h}),globalThis[Symbol.for("portfolio_performance")]={get value(){return H}},s.$$set=u=>{"data"in u&&o(3,y=u.data)},s.$$.update=()=>{s.$$.dirty&8&&o(4,{data:i={},customFormattingSettings:ie,__db:X}=y,i),s.$$.dirty&16&&We.set(Object.keys(i).length>0),s.$$.dirty&131072&&a.params,s.$$.dirty&480&&(S||!Y?S||(O(L,{noResolve:S,...b}),o(8,Y=!0)):O(L,{noResolve:S})),s.$$.dirty&7680&&(j||!W?j||(P(D,{noResolve:j,...w}),o(12,W=!0)):P(D,{noResolve:j})),s.$$.dirty&122880&&(E||!Z?E||(J(F,{noResolve:E,...h}),o(16,Z=!0)):J(F,{noResolve:E}))},o(6,S=te`select 
    portfolio_value as total_value,
    portfolio_value - 10000 as absolute_delta,
    10000 as start_value,
    ROUND((100 *(portfolio_value - 10000) / 10000), 0) AS perc_diff
from portfolio.comparison
where candidate = 'Marquin'
order by date desc
limit 1`),o(7,L=`select 
    portfolio_value as total_value,
    portfolio_value - 10000 as absolute_delta,
    10000 as start_value,
    ROUND((100 *(portfolio_value - 10000) / 10000), 0) AS perc_diff
from portfolio.comparison
where candidate = 'Marquin'
order by date desc
limit 1`),o(10,j=te`select 
    portfolio_value as total_value,
    portfolio_value - 10000 as absolute_delta,
    10000 as start_value,
    ROUND((100 *(portfolio_value - 10000) / 10000), 0) AS perc_diff
from portfolio.comparison
where candidate = 'Javanne'
order by date desc
limit 1`),o(11,D=`select 
    portfolio_value as total_value,
    portfolio_value - 10000 as absolute_delta,
    10000 as start_value,
    ROUND((100 *(portfolio_value - 10000) / 10000), 0) AS perc_diff
from portfolio.comparison
where candidate = 'Javanne'
order by date desc
limit 1`),o(14,E=te`select * from portfolio.comparison`),o(15,F="select * from portfolio.comparison"),[g,M,H,y,i,b,S,L,Y,w,j,D,W,h,E,F,Z,a]}class dt extends ze{constructor(r){super(),Ke(this,r,it,lt,Pe,{data:3})}}export{dt as component};
