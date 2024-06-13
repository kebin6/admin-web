var G=Object.defineProperty;var V=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var h=(t,a,e)=>a in t?G(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,w=(t,a)=>{for(var e in a||(a={}))I.call(a,e)&&h(t,e,a[e]);if(V)for(var e of V(a))j.call(a,e)&&h(t,e,a[e]);return t};import{ak as b,al as L,_ as D,am as M,I as P}from"./entry/index-DvPJ5Vzs-1718250502895.js";import{d as $,f as S,c as q,u as s,h as A,w as H,o as J,_ as c,$ as g,a1 as y,af as K,F as O,a9 as Q,a7 as R,a8 as p,k as i,G as U,a0 as m,a2 as W}from"./vue-BMCEF3Jf.js";import{i as X}from"./isNumber-j3SIk7av.js";import{G as Y,o as Z}from"./antd-BPAr-OsJ.js";const tt={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},et=$({name:"CountTo",props:tt,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=S(t.startVal),o=S(!1);let n=b(e);const _=q(()=>B(s(n)));A(()=>{e.value=t.startVal}),H([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&u()}),J(()=>{t.autoplay&&u()});function u(){x(),e.value=t.endVal}function C(){e.value=t.startVal,x()}function x(){n=b(e,w({disabled:o,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:L[t.transition]}:{}))}function B(l){if(!l&&l!==0)return"";const{decimals:T,decimal:k,separator:d,suffix:F,prefix:z}=t;l=Number(l).toFixed(T),l+="";const f=l.split(".");let r=f[0];const E=f.length>1?k+f[1]:"",v=/(\d+)(\d{3})/;if(d&&!X(d))for(;v.test(r);)r=r.replace(v,"$1"+d+"$2");return z+r+E+F}return{value:_,start:u,reset:C}}});function at(t,a,e,o,n,_){return c(),g("span",{style:K({color:t.color})},y(t.value),5)}const ot=D(et,[["render",at]]),N=M(ot),nt=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}],lt={class:"md:flex"},st={class:"py-4 px-4 flex justify-between items-center"},rt={class:"p-2 px-4 flex justify-between"},pt=$({__name:"GrowCard",props:{loading:{type:Boolean}},setup(t){return(a,e)=>(c(),g("div",lt,[(c(!0),g(O,null,Q(s(nt),(o,n)=>(c(),R(s(Z),{key:o.title,size:"small",loading:t.loading,title:o.title,class:W(["md:w-1/4 w-full !md:mt-0",{"!md:mr-4":n+1<4,"!mt-4":n>0}])},{extra:p(()=>[i(s(Y),{color:o.color},{default:p(()=>[U(y(o.action),1)]),_:2},1032,["color"])]),default:p(()=>[m("div",st,[i(s(N),{prefix:"$",startVal:1,endVal:o.value,class:"text-2xl"},null,8,["endVal"]),i(P,{icon:o.icon,size:40},null,8,["icon"])]),m("div",rt,[m("span",null,"总"+y(o.title),1),i(s(N),{prefix:"$",startVal:1,endVal:o.total},null,8,["endVal"])])]),_:2},1032,["loading","title","class"]))),128))]))}});export{pt as _};
