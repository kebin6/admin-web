import{I as l,by as m,b as _,P as d,_ as f}from"./entry/index-DvPJ5Vzs-1718250502895.js";import{d as g,S as E,c as C,_ as L,a7 as h,a8 as a,k as c,ab as e}from"./vue-BMCEF3Jf.js";import{T,aE as b}from"./antd-BPAr-OsJ.js";const k=g({name:"ErrorAction",components:{Icon:l,Tooltip:T,Badge:b},setup(){const{t:o}=_(),{push:n}=E(),t=m(),r=C(()=>t.getErrorLogListCount);function s(){n(d.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function B(o,n,t,r,s,I){const u=e("Icon"),i=e("Badge"),p=e("Tooltip");return L(),h(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","onClick"])}const A=f(k,[["render",B]]);export{A as default};
