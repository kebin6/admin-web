var C=Object.defineProperty;var g=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var y=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&y(e,n,t[n]);if(g)for(var n of g(t))M.call(t,n)&&y(e,n,t[n]);return e};var f=(e,t,n)=>new Promise((s,i)=>{var p=r=>{try{l(n.next(r))}catch(m){i(m)}},d=r=>{try{l(n.throw(r))}catch(m){i(m)}},l=r=>r.done?s(r.value):Promise.resolve(r.value).then(p,d);l((n=n.apply(e,t)).next())});import{_ as x,a as S}from"./useForm-Cq3McrEd.js";import{a as c,b as k,v as B,_ as D}from"./entry/index-DaEB-Y-8-1718870402071.js";import{l as N,d as F,f as q,c as A,u,ab as w,_ as R,a7 as $,a8 as L,k as O,ac as j}from"./vue-BMCEF3Jf.js";import{Q as T}from"./antd-BNMfrwLX.js";import{B as V,a as G}from"./index-CL7BM-aX.js";const te=(e,t="notice")=>c.post({url:"/wl-api/player/list",params:e},{errorMessageMode:t}),U=(e,t="notice")=>c.post({url:"/wl-api/player/create",params:e},{errorMessageMode:t,successMessageMode:t}),h=(e,t="notice")=>c.post({url:"/wl-api/player/update",params:e},{errorMessageMode:t,successMessageMode:t}),ae=(e,t="notice")=>c.post({url:"/wl-api/player/delete",params:e},{errorMessageMode:t,successMessageMode:t}),{t:a}=k(),ne=[{title:a("platform_management.player.id"),dataIndex:"id",width:50},{title:a("platform_management.player.email"),dataIndex:"email",width:200},{title:a("platform_management.player.rank"),dataIndex:"rank",width:80},{title:a("platform_management.player.amount"),dataIndex:"amount",width:80},{title:a("platform_management.player.invitedNum"),dataIndex:"invitedNum",width:80},{title:a("platform_management.player.totalIncome"),dataIndex:"totalIncome",width:80},{title:a("platform_management.player.inviteCode"),dataIndex:"inviteCode",width:80},{title:a("platform_management.player.lamb"),dataIndex:"lamb",width:80},{title:a("platform_management.player.depositAddress"),dataIndex:"depositAddress",width:100},{title:a("platform_management.player.systemCommission"),dataIndex:"systemCommission",width:100},{title:a("platform_management.player.createdAt"),dataIndex:"createdAt",width:100},{title:a("platform_management.player.updatedAt"),dataIndex:"updatedAt",width:100},{title:a("platform_management.player.status"),dataIndex:"status",width:60,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),N(T,{checked:e.status===1,checkedChildren:a("common.on"),unCheckedChildren:a("common.off"),loading:e.pendingStatus,onChange(t,n){e.pendingStatus=!0;const s=t?1:2;h({id:e.id,status:s}).then(()=>{e.status=s}).finally(()=>{e.pendingStatus=!1})}}))}],re=[],z=[{field:"id",label:a("platform_management.player.id"),component:"Input",componentProps:{disabled:!0}},{field:"email",label:a("platform_management.player.email"),component:"Input",required:!0},{field:"rank",label:a("platform_management.player.rank"),component:"InputNumber",required:!0},{field:"amount",label:a("platform_management.player.amount"),component:"InputNumber",required:!0},{field:"invitedNum",label:a("platform_management.player.invitedNum"),component:"InputNumber",required:!0},{field:"inviteCode",label:a("platform_management.player.inviteCode"),component:"Input",required:!0},{field:"invitedCode",label:a("platform_management.player.invitedCode"),component:"Input",required:!0},{field:"lamb",label:a("platform_management.player.lamb"),component:"InputNumber",required:!0},{field:"depositAddress",label:a("platform_management.player.depositAddress"),component:"Input",required:!0},{field:"systemCommission",label:a("platform_management.player.systemCommission"),component:"InputNumber",required:!0},{field:"status",label:a("platform_management.player.status"),component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:a("common.on"),value:1},{label:a("common.off"),value:2}]}}],H=F({name:"PlayerDrawer",components:{BasicDrawer:V,BasicForm:x},emits:["success","register"],setup(e,{emit:t}){const n=q(!0),{t:s}=B.useI18n(),[i,{resetFields:p,setFieldsValue:d,validate:l}]=S({labelWidth:160,baseColProps:{span:24},layout:"vertical",schemas:z,showActionButtonGroup:!1}),[r,{setDrawerProps:m,closeDrawer:b}]=G(o=>f(this,null,function*(){p(),m({confirmLoading:!1}),n.value=!!(o!=null&&o.isUpdate),u(n)&&d(_({},o.record))})),I=A(()=>u(n)?s("platform_management.player.editPlayer"):s("platform_management.player.addPlayer"));function v(){return f(this,null,function*(){const o=yield l();m({confirmLoading:!0}),o.id=u(n)?Number(o.id):0,(u(n)?yield h(o):yield U(o)).code===0&&(b(),t("success")),m({confirmLoading:!1})})}return{registerDrawer:r,registerForm:i,getTitle:I,handleSubmit:v}}});function Q(e,t,n,s,i,p){const d=w("BasicForm"),l=w("BasicDrawer");return R(),$(l,j(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:L(()=>[O(d,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const W=D(H,[["render",Q]]),oe=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as P,oe as a,ne as c,ae as d,te as g,re as s};