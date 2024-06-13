var y=Object.defineProperty;var f=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var g=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&g(e,r,t[r]);if(f)for(var r of f(t))D.call(t,r)&&g(e,r,t[r]);return e};var h=(e,t,r)=>new Promise((u,l)=>{var d=o=>{try{n(r.next(o))}catch(i){l(i)}},c=o=>{try{n(r.throw(o))}catch(i){l(i)}},n=o=>o.done?u(o.value):Promise.resolve(o.value).then(d,c);n((r=r.apply(e,t)).next())});import{_ as O,a as x}from"./useForm-DGqLGoed.js";import{b as P,as as B,a as p,v as S,_ as U}from"./entry/index-DvPJ5Vzs-1718250502895.js";import{B as q,a as F}from"./index-BsqrLki-.js";import{d as R,f as L,c as k,u as m,ab as b,_ as $,a7 as T,a8 as C,k as j,ac as A}from"./vue-BMCEF3Jf.js";const{t:s}=P(),Z=[{title:s("common.name"),dataIndex:"name",width:50},{title:s("sys.oauth.clientId"),dataIndex:"clientId",width:50},{title:s("common.createTime"),dataIndex:"createdAt",width:50,customRender:({record:e})=>B(e.createdAt)}],N=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:s("common.name"),required:!0,component:"Input",rules:[{max:30}]},{field:"clientId",label:s("sys.oauth.clientId"),required:!0,component:"Input",rules:[{max:80}]},{field:"clientSecret",label:s("sys.oauth.clientSecret"),required:!0,component:"Input",rules:[{max:100}]},{field:"redirectUrl",label:s("sys.oauth.redirectURL"),required:!0,component:"Input",rules:[{max:300}]},{field:"scopes",label:s("sys.oauth.scope"),required:!0,component:"Input",rules:[{max:50}]},{field:"authUrl",label:s("sys.oauth.authURL"),required:!0,component:"Input",rules:[{max:300}]},{field:"tokenUrl",label:s("sys.oauth.tokenURL"),required:!0,component:"Input",rules:[{max:300}]},{field:"infoUrl",label:s("sys.oauth.infoURL"),required:!0,component:"Input",rules:[{max:300}]},{field:"authStyle",label:s("sys.oauth.authStyle"),required:!0,component:"Select",componentProps:{options:[{label:s("sys.oauth.params"),value:1},{label:s("sys.oauth.header"),value:2}]}}],ee=(e,t="notice")=>p.post({url:"/mms-api/oauth_provider/list",params:e},{errorMessageMode:t}),V=(e,t="notice")=>p.post({url:"/mms-api/oauth_provider/create",params:e},{errorMessageMode:t,successMessageMode:t}),z=(e,t="notice")=>p.post({url:"/mms-api/oauth_provider/update",params:e},{errorMessageMode:t,successMessageMode:t}),te=(e,t="notice")=>p.post({url:"/mms-api/oauth_provider/delete",params:e},{errorMessageMode:t,successMessageMode:t}),G=R({name:"OauthDrawer",components:{BasicDrawer:q,BasicForm:O},emits:["success","register"],setup(e,{emit:t}){const r=L(!0),{t:u}=S.useI18n(),[l,{resetFields:d,setFieldsValue:c,validate:n}]=x({labelWidth:160,baseColProps:{span:24},layout:"vertical",schemas:N,showActionButtonGroup:!1}),[o,{setDrawerProps:i,closeDrawer:w}]=F(a=>h(this,null,function*(){d(),i({confirmLoading:!1}),r.value=!!(a!=null&&a.isUpdate),m(r)&&c(_({},a.record))})),I=k(()=>m(r)?u("sys.oauth.editProvider"):u("sys.oauth.addProvider"));function v(){return h(this,null,function*(){const a=yield n();i({confirmLoading:!0}),a.id=m(r)?Number(a.id):0,(m(r)?yield z(a):yield V(a)).code===0&&(w(),t("success")),i({confirmLoading:!1})})}return{registerDrawer:o,registerForm:l,getTitle:I,handleSubmit:v}}});function H(e,t,r,u,l,d){const c=b("BasicForm"),n=b("BasicDrawer");return $(),T(n,A(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:C(()=>[j(c,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const W=U(G,[["render",H]]),re=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as O,re as a,Z as c,te as d,ee as g};
