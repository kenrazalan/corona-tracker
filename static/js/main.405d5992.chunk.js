(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{210:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n.n(r),s=n(74),o=n.n(s),u=(n(90),n(6)),i=n.n(u),d=n(11),l=n(16),f=n(30),p=(n(92),n(34)),b=n.n(p),j="https://covid19.mathdro.id/api",v=function(){var e=Object(d.a)(i.a.mark((function e(t){var n,a,r,c,s,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j,t&&(n="".concat(j,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(n);case 5:return a=e.sent,r=a.data,c=r.confirmed,s=r.recovered,o=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:s,deaths:o,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(j,"/countries"));case 3:return t=e.sent,n=t.data.countries,e.abrupt("return",n.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,n=t.data,e.abrupt("return",n.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=n(230),x=n(228),g=n(232),w=n(229),C=(n(58),n(75)),y=n.n(C),k=n(76),N=n.n(k),D=function(e){var t=e.className,n=e.cardTitle,r=e.value,c=e.subtitle,s=e.lastUpdate;return Object(a.jsx)(x.a,{item:!0,xs:12,md:3,component:g.a,className:y()("card",t),children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(O.a,{gutterBottom:!0,children:n}),Object(a.jsx)(O.a,{variant:"h5",component:"h2",children:Object(a.jsx)(N.a,{start:0,end:r,duration:2.75})}),Object(a.jsx)(O.a,{children:new Date(s).toDateString()}),Object(a.jsx)(O.a,{children:c})]})})},I=function(e){var t=e.data,n=t.confirmed,r=t.recovered,c=t.deaths,s=t.lastUpdate;return n?Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(O.a,{gutterBottom:!0,variant:"h4",component:"h2",children:"Global"}),Object(a.jsxs)(x.a,{container:!0,spacing:3,justify:"center",children:[Object(a.jsx)(D,{className:"infected",cardTitle:"Infected",value:n.value,lastUpdate:s,subtitle:"Number of active cases from COVID-19."}),Object(a.jsx)(D,{className:"recovered",cardTitle:"Recovered",value:r.value,lastUpdate:s,subtitle:"Number of recoveries from COVID-19."}),Object(a.jsx)(D,{className:"deaths",cardTitle:"Deaths",value:c.value,lastUpdate:s,subtitle:"Number of deaths from COVID-19."})]})]}):"Loading..."},S=n(233),U=n(231),B=n(20);function T(){var e=Object(f.a)(['\n    .formControl{\n        width:"30%";\n        margin-bottom: 30px;\n    }\n']);return T=function(){return e},e}var _=B.a.div(T()),L=function(e){var t=e.handleChange,n=Object(r.useState)([]),c=Object(l.a)(n,2),s=c[0],o=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h(),e.t0=o,e.next=4,t;case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(_,{children:Object(a.jsx)(S.a,{className:"formControl",children:Object(a.jsxs)(U.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(a.jsx)("option",{value:"",children:"World Wide "}),s.map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))]})})})},V=n(47),E=n(83),F=n.n(E),A=function(e){var t=e.data,n=t.confirmed,c=t.recovered,s=t.deaths,o=(t.lastUpdate,e.country),u=Object(r.useState)({}),f=Object(l.a)(u,2),p=f[0],b=f[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=n?Object(a.jsx)(V.Bar,{data:{labels:["Infected","Recoverd","Deaths"],datasets:[{label:"People",backgroundColor:"['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)']",data:[n.value,c.value,s.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null,v=p[0]?Object(a.jsx)(V.Line,{data:{labels:p.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:p.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null;return Object(a.jsx)("div",{className:F.a.charts,style:{width:"65%"},children:o?j:v})};function P(){var e=Object(f.a)(["\n    .App{\n       display: flex;\n       align-items: center;\n       flex-direction: column;\n    }\n    @media only screen and (max-width: 770px) {\n      .App {\n    margin: 0 10%;\n  }\n}\n  "]);return P=function(){return e},e}var R=B.a.div(P());var J=function(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),o=Object(l.a)(s,2),u=o[0],f=o[1];Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var p=function(){var e=Object(d.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:n=e.sent,c(n),f(t),console.log(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(R,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(I,{data:n}),Object(a.jsx)(L,{handleChange:p}),Object(a.jsx)(A,{data:n,country:u})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),W()},58:function(e,t,n){},83:function(e,t,n){e.exports={charts:"Chart_charts__28kB4",chart:"Chart_chart__1-8qV"}},90:function(e,t,n){},92:function(e,t,n){}},[[210,1,2]]]);
//# sourceMappingURL=main.405d5992.chunk.js.map