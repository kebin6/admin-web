import{u as r}from"./useECharts-BqDLaQ6j.js";import{o as i}from"./antd-BPAr-OsJ.js";import{d as n,f as s,w as l,_ as d,a7 as m,a8 as f,a0 as u,af as c,u as h}from"./vue-BMCEF3Jf.js";import"./entry/index-DvPJ5Vzs-1718250502895.js";const B=n({__name:"VisitRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(a){const e=a,t=s(null),{setOptions:o}=r(t);return l(()=>e.loading,()=>{e.loading||o({legend:{bottom:0,data:["访问","购买"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"电脑"},{name:"充电器"},{name:"耳机"},{name:"手机"},{name:"Ipad"},{name:"耳机"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"访问",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"购买",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(p,g)=>(d(),m(h(i),{title:"转化率",loading:a.loading},{default:f(()=>[u("div",{ref_key:"chartRef",ref:t,style:c({width:a.width,height:a.height})},null,4)]),_:1},8,["loading"]))}});export{B as default};
