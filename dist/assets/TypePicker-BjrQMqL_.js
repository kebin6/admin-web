import{f as r,_ as i}from"./entry/index-C41ZFr6n-1718602026943.js";import{d as l,_ as s,$ as o,F as c,a9 as d,a7 as f,a8 as u,a0 as n,a2 as a,ab as _,a3 as m,a4 as y}from"./vue-BMCEF3Jf.js";import{T as C}from"./antd-BPAr-OsJ.js";const $=l({name:"MenuTypePicker",components:{Tooltip:C},props:{menuTypeList:{type:Array,default:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=r("setting-menu-type-picker");return{prefixCls:e}}}),h=e=>(m("data-v-3ebdb418"),e=e(),y(),e),k=["onClick"],v=h(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[v];function b(e,g,B,I,S,x){const p=_("Tooltip");return s(),o("div",{class:a(e.prefixCls)},[(s(!0),o(c,null,d(e.menuTypeList||[],t=>(s(),f(p,{key:t.title,title:t.title,placement:"bottom"},{default:u(()=>[n("div",{onClick:F=>e.handler(t),class:a([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,k)]),_:2},1032,["title"]))),128))],2)}const z=i($,[["render",b],["__scopeId","data-v-3ebdb418"]]);export{z as default};
