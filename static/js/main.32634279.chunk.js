(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{10:function(n,t,r){},12:function(n,t,r){"use strict";r.r(t);var e=r(1),c=r.n(e),o=r(5),u=r.n(o),i=r(2),a=r(4),f=(r(10),r(0)),s=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],b=function(){for(var n=[],t=0;t<50;t++)n.push(Array(50).fill(0));return n};var l=function(){var n=Object(e.useState)(!1),t=Object(i.a)(n,2),r=t[0],c=t[1],o=Object(e.useState)((function(){return b()})),u=Object(i.a)(o,2),l=u[0],j=u[1],d=Object(e.useRef)(r);d.current=r;var O=Object(e.useCallback)((function(){d.current?(j((function(n){return Object(a.a)(n,(function(t){for(var r=function(r){for(var e=function(e){var c=0;s.forEach((function(t){var o=Object(i.a)(t,2),u=o[0],a=o[1],f=r+u,s=e+a;f>=0&&f<50&&s>=0&&s<50&&(c+=n[f][s])})),c<2||c>3?t[r][e]=0:0===n[r][e]&&3===c&&(t[r][e]=1)},c=0;c<50;c++)e(c)},e=0;e<50;e++)r(e)}))})),setTimeout(O,250)):console.log("koniec")}),[]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){c(!r),r||(d.current=!0,O())},children:r?"stop":"start"}),Object(f.jsx)("button",{onClick:function(){j((function(){return b()}))},children:"clear"}),Object(f.jsx)("button",{onClick:function(){j((function(){return function(){for(var n=[],t=0;t<50;t++)n.push(Array.from(Array(50),(function(){return Math.random()>.5?1:0})));return n}()}))},children:"random"}),Object(f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(50,",20px)"),backgroundColor:"#2C2C2C"},children:l.map((function(n,t){return n.map((function(n,r){return Object(f.jsx)("div",{onClick:function(){return function(n,t){var r=Object(a.a)(l,(function(r){r[n][t]=l[n][t]?0:1}));j(r)}(t,r)},style:{width:20,height:20,boxSizing:"border-box",border:"1px solid #212121",backgroundColor:l[t][r]?"#e65e8b":null}},"".concat(t,"-").concat(r))}))}))})]})};u.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(l,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.32634279.chunk.js.map