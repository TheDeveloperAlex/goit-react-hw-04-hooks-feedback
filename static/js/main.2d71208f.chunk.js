(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(4),o=n.n(r),s=(n(9),n(2)),i=n(0),a=function(t){var e=t.good,n=t.neutral,c=t.bad,r=t.total,o=t.percentage;return Object(i.jsxs)("section",{children:[Object(i.jsxs)("p",{children:["good: ",e]}),Object(i.jsxs)("p",{children:["neutral: ",n]}),Object(i.jsxs)("p",{children:["bad: ",c]}),Object(i.jsxs)("p",{children:["total: ",r]}),Object(i.jsxs)("p",{children:["Good: ",o,"% "]})]})},j=function(t){var e=t.message;return Object(i.jsx)("h2",{children:e})},u=function(t){var e=t.fn;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{type:"button",onClick:function(){return e("good")},children:"good"}),Object(i.jsx)("button",{type:"button",onClick:function(){return e("neutral")},children:"neutral"}),Object(i.jsx)("button",{type:"button",onClick:function(){return e("bad")},children:"bad"})]})})},b=function(t){var e=t.title,n=t.children;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:e}),n]})},d=function(){var t=Object(c.useState)(0),e=Object(s.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(0),d=Object(s.a)(o,2),l=d[0],h=d[1],O=Object(c.useState)(0),f=Object(s.a)(O,2),x=f[0],g=f[1],p=function(){return x+n+l};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{title:"Leave feedback",children:Object(i.jsx)(u,{fn:function(t){switch(t){case"good":return r((function(t){return t+1}));case"neutral":return h((function(t){return t+1}));case"bad":return g((function(t){return t+1}))}}})}),Object(i.jsx)(b,{title:"Statistics",children:0!==p()?Object(i.jsx)(a,{good:n,neutral:l,bad:x,total:p(),percentage:Math.floor(100*n/(x+n+l))}):Object(i.jsx)(j,{message:"No feedback given"})})]})};o.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.2d71208f.chunk.js.map