var h=(t,i,e)=>new Promise((a,o)=>{var H=n=>{try{u(e.next(n))}catch(s){o(s)}},w=n=>{try{u(e.throw(n))}catch(s){o(s)}},u=n=>n.done?a(n.value):Promise.resolve(n.value).then(H,w);u((e=e.apply(t,i)).next())});import{w as m}from"./entry/index-DvPJ5Vzs-1718250502895.js";import{u as d}from"./useWindowSizeFn-DLNrSaDV.js";import{f as r,c as p,u as c}from"./vue-BMCEF3Jf.js";const l=Symbol();function v(t){return m(t,l,{native:!0})}const g=r(0),f=r(0);function P(){function t(e){g.value=e}function i(e){f.value=e}return{headerHeightRef:g,footerHeightRef:f,setHeaderHeight:t,setFooterHeight:i}}function R(){const t=r(window.innerHeight),i=r(window.innerHeight),e=p(()=>c(t)-c(g)-c(f)||0);d(()=>{t.value=window.innerHeight},{wait:100,immediate:!0});function a(o){return h(this,null,function*(){i.value=o})}v({contentHeight:e,setPageHeight:a,pageHeight:i})}export{P as a,R as u};
