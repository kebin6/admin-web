var p=(o,s,t)=>new Promise((v,l)=>{var i=e=>{try{n(t.next(e))}catch(u){l(u)}},C=e=>{try{n(t.throw(e))}catch(u){l(u)}},n=e=>e.done?v(e.value):Promise.resolve(e.value).then(i,C);n((t=t.apply(o,s)).next())});import{C as g}from"./index-Do9um7lE.js";import{a as w}from"./entry/index-DaEB-Y-8-1718870402071.js";import{H as P,o as m}from"./antd-BNMfrwLX.js";import{d as x,f as h,_ as d,$ as _,a0 as y,k as c,a8 as f,F as k,a9 as B,u as r,a7 as V,ag as N,ah as b}from"./vue-BMCEF3Jf.js";const a=[{title:"今日参与游戏玩家数",value:0,total:0},{title:"今日新增游戏玩家数",value:0,total:0},{title:"今日游戏开局次数",value:0,total:0},{title:"今日累积吃羊数",value:0,total:0},{title:"今日平台收益",value:0,total:0},{title:"平台累积收益",value:0,total:0},{title:"平台累积人数",value:0,total:0}],z=(o,s="notice")=>w.post({url:"/wl-api/overview",params:o},{errorMessageMode:s}),E={class:"lg:flex"},F={class:"lg:w-10/10 w-full enter-y"},G={class:"py-8 px-6 justify-between items-center"},$=x({__name:"GrowCard",props:{loading:{type:Boolean}},setup(o){return h(),p(this,null,function*(){const{data:t}=yield z({});a[0].value=t.todayParticipateCount,a[1].value=t.todayNewPlayerCount,a[2].value=t.todayRoundCount,a[3].value=t.todayEatCount,a[4].value=t.todayPlatformProfit,a[5].value=t.totalPlatformProfit,a[6].value=t.totalPlayerCount}),(t,v)=>(d(),_("div",E,[y("div",F,[c(r(m),N(b(t.$attrs)),{default:f(()=>[(d(!0),_(k,null,B(r(a),(l,i)=>(d(),V(r(P),{key:i},{default:f(()=>[c(r(m),{size:"default",loading:o.loading,title:l.title,bordered:!0},{default:f(()=>[y("div",G,[c(r(g),{prefix:"",startVal:1,endVal:l.value,class:"text-2xl"},null,8,["endVal"])])]),_:2},1032,["loading","title"])]),_:2},1024))),128))]),_:1},16)])]))}});export{$ as _};