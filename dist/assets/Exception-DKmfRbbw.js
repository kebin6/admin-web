import{E as e,u as N,e as O,b as R,f as S,P as m}from"./entry/index-C41ZFr6n-1718602026943.js";import{d as A,f as k,ai as G,c as d,u as s,k as r}from"./vue-BMCEF3Jf.js";import{B as P,q as D}from"./antd-BPAr-OsJ.js";const C="/assets/no-data-BKo151DF.svg",h="/assets/net-error-sXkbaH3y.svg",F=A({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=k(new Map),{query:E}=G(),o=N(),c=O(),{t}=R(),{prefixCls:p}=S("app-exception-page"),x=d(()=>{const{status:l}=E,{status:i}=n;return Number(l)||i}),_=d(()=>s(a).get(s(x))),T=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?T:u,handler:()=>n.full?o(m.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?T:u,handler:()=>n.full?o(m.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:h}),()=>{const{title:l,subTitle:i,btnText:b,icon:f,handler:g,status:y}=s(_)||{};return r(D,{class:p,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>b&&r(P,{type:"primary",onClick:g},{default:()=>b}),icon:()=>f?r("img",{src:f},null):null})}}});export{F as default};
