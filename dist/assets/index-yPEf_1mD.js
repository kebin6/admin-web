import{d as c,S as p,u as _,_ as i,$ as u}from"./vue-BMCEF3Jf.js";const y=c({__name:"index",setup(l){const{currentRoute:s,replace:n}=p(),{params:r,query:e}=_(s),{path:a}=r,{_redirect_type:o}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(r,"path");const t=Array.isArray(a)?a.join("/"):a;return n(o==="name"?{name:t,query:e,params:r}:{path:t.startsWith("/")?t:"/"+t,query:e}),(d,m)=>(i(),u("div"))}});export{y as default};
