import{u as o}from"./useECharts-BqDLaQ6j.js";import{o as n}from"./antd-BPAr-OsJ.js";import{d as r,f as l,w as s,_ as d,a7 as f,a8 as m,a0 as u,af as c,u as h}from"./vue-BMCEF3Jf.js";import"./entry/index-DvPJ5Vzs-1718250502895.js";const S=r({__name:"VisitSource",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=l(null),{setOptions:i}=o(t);return s(()=>a.loading,()=>{a.loading||i({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"访问来源",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),(p,g)=>(d(),f(h(n),{title:"访问来源",loading:e.loading},{default:m(()=>[u("div",{ref_key:"chartRef",ref:t,style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{S as default};
