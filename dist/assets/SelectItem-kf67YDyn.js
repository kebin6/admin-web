import{f as i,_ as r}from"./entry/index-DaEB-Y-8-1718870402071.js";import{b as l}from"./index-Cv0AZ6L4.js";import{a6 as p}from"./antd-BNMfrwLX.js";import{d as m,c as d,_ as c,$ as u,a0 as f,a1 as g,k as b,ac as C,a2 as h,ab as S}from"./vue-BMCEF3Jf.js";import"./index-DxzXX1s5.js";import"./isBoolean-Dou3jA6I.js";import"./index-_IGEAUeY.js";import"./useContentViewHeight-CtHro70F.js";import"./useWindowSizeFn-NWtUJjFU.js";import"./useSortable-nsvvptnY.js";import"./index-CL7BM-aX.js";import"./isNumber-j3SIk7av.js";import"./isDeepEqual-BYVIA4i9.js";import"./lock-OHyInnVv.js";const y=m({name:"SelectItem",components:{Select:p},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=i("setting-select-item"),a=d(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});return{prefixCls:t,handleChange:n=>{e.event&&l(e.event,n)},getBindValue:a}}});function v(e,t,a,s,n,V){const o=S("Select");return c(),u("div",{class:h(e.prefixCls)},[f("span",null,g(e.title),1),b(o,C(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}const w=r(y,[["render",v],["__scopeId","data-v-acb93ae2"]]);export{w as default};