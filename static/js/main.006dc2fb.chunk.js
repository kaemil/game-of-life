(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(5),i=t.n(a),o=t(2),u=t(4),s=(t(10),function(e,n){for(var t=[],r=0;r<e;r++)t.push(Array(n).fill(0));return t}),l=function(e,n,t){for(var r=[],c=0;c<e;c++)r.push(Array.from(Array(n),(function(){return Math.random()>t/100?0:1})));return r},d=function(){return window.innerWidth<660?Math.floor((window.innerWidth-20)/25):25},b=t(0),j=function(e){var n=e.board,t=e.handleClick,r=e.colsNumber,c=e.countCurrent,a=25*r;return Object(b.jsx)("div",{className:"game__board",style:{display:"grid",gridTemplateColumns:"repeat(".concat(c,",25px)"),backgroundColor:"#424242",width:a},children:n.map((function(e,r){return e.map((function(e,c){return Object(b.jsx)("div",{onClick:function(){return t(r,c)},style:{width:25,height:25,boxSizing:"border-box",border:"1px solid #212121",backgroundColor:n[r][c]?"#e65e8b":null}},"".concat(r,"-").concat(c))}))}))})},f=function(){return Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("button",{children:"About"})})},h=function(e){var n=e.handleClear,t=e.handleStart,r=e.working;return Object(b.jsxs)("div",{className:"game__buttons--control",children:[Object(b.jsx)("button",{onClick:n,children:"Clear"}),Object(b.jsx)("button",{onClick:t,children:r?"Stop":"Start"})]})},O=function(e){var n=e.percentValue,t=e.handleRandom,r=e.handleChange;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"game__buttonsRange--bar",children:[Object(b.jsxs)("span",{children:[n,"%"]}),Object(b.jsx)("input",{type:"range",onChange:r,value:n,min:"0",max:"100"}),Object(b.jsx)("span",{children:"100%"})]}),Object(b.jsx)("button",{className:"game__buttonsRange--button slider",onClick:t,children:"Random"})]})},m=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];var g=function(){var e=Object(r.useState)(!1),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(50),i=Object(o.a)(a,2),g=i[0],x=i[1],v=Object(r.useState)(window.innerWidth),w=Object(o.a)(v,2),p=w[0],C=w[1],k=Object(r.useState)(d),_=Object(o.a)(k,2),S=_[0],y=_[1],N=Object(r.useState)(d),R=Object(o.a)(N,2),W=R[0],E=R[1],A=Object(r.useRef)(S),M=Object(r.useState)((function(){return s(S,W)})),z=Object(o.a)(M,2),L=z[0],G=z[1],J=Object(r.useRef)(t);J.current=t;var T=Object(r.useCallback)((function(){window.innerWidth<660&&(A.current=Math.floor((window.innerWidth-20)/25),C(window.innerWidth),y(d),E(d),G((function(){return s(A.current,A.current)})))}),[]);Object(r.useEffect)((function(){return window.addEventListener("resize",T),function(){window.removeEventListener("resize",T)}}),[p,T]);var V=Object(r.useCallback)((function(){J.current&&(G((function(e){return Object(u.a)(e,(function(n){for(var t=function(t){for(var r=function(r){var c=0;m.forEach((function(n){var a=Object(o.a)(n,2),i=a[0],u=a[1],s=t+i,l=r+u;s>=0&&s<S&&l>=0&&l<W&&(c+=e[s][l])})),c<2||c>3?n[t][r]=0:0===e[t][r]&&3===c&&(n[t][r]=1)},c=0;c<W;c++)r(c)},r=0;r<S;r++)t(r)}))})),setTimeout(V,200))}),[W,S]);return Object(b.jsxs)("div",{className:"game__container",style:{width:25*W},children:[Object(b.jsx)("h1",{children:"Game of life"}),Object(b.jsxs)("div",{className:"game__buttons",children:[Object(b.jsx)(f,{}),Object(b.jsx)(O,{handleRandom:function(){G((function(){return l(S,W,g)}))},percentValue:g,handleChange:function(e){x(e.target.value)}}),Object(b.jsx)(h,{handleClear:function(){G((function(){return s(S,W)}))},handleStart:function(){c(!t),t||(J.current=!0,V())},working:t})]}),Object(b.jsx)(j,{board:L,handleClick:function(e,n){var t=Object(u.a)(L,(function(t){t[e][n]=L[e][n]?0:1}));G(t)},countCurrent:A.current,colsNumber:W})]})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.006dc2fb.chunk.js.map