import{C as r}from"./index-Do9um7lE.js";import{I as u}from"./entry/index-DaEB-Y-8-1718870402071.js";import{G as p,o as f}from"./antd-BNMfrwLX.js";import{d as m,_ as o,$ as c,F as _,a9 as g,a7 as v,a8 as l,k as e,u as t,G as x,a1 as i,a0 as s,a2 as V}from"./vue-BMCEF3Jf.js";const w=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}],C={class:"md:flex"},y={class:"py-4 px-4 flex justify-between items-center"},h={class:"p-2 px-4 flex justify-between"},T=m({__name:"GrowCard",props:{loading:{type:Boolean}},setup(d){return(k,B)=>(o(),c("div",C,[(o(!0),c(_,null,g(t(w),(a,n)=>(o(),v(t(f),{key:a.title,size:"small",loading:d.loading,title:a.title,class:V(["md:w-1/4 w-full !md:mt-0",{"!md:mr-4":n+1<4,"!mt-4":n>0}])},{extra:l(()=>[e(t(p),{color:a.color},{default:l(()=>[x(i(a.action),1)]),_:2},1032,["color"])]),default:l(()=>[s("div",y,[e(t(r),{prefix:"$",startVal:1,endVal:a.value,class:"text-2xl"},null,8,["endVal"]),e(u,{icon:a.icon,size:40},null,8,["icon"])]),s("div",h,[s("span",null,"总"+i(a.title),1),e(t(r),{prefix:"$",startVal:1,endVal:a.total},null,8,["endVal"])])]),_:2},1032,["loading","title","class"]))),128))]))}});export{T as _};