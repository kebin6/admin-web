var I=Object.defineProperty;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var P=(e,r,a)=>r in e?I(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,g=(e,r)=>{for(var a in r||(r={}))S.call(r,a)&&P(e,a,r[a]);if(h)for(var a of h(r))M.call(r,a)&&P(e,a,r[a]);return e};var v=(e,r,a)=>new Promise((m,d)=>{var u=o=>{try{i(a.next(o))}catch(n){d(n)}},c=o=>{try{i(a.throw(o))}catch(n){d(n)}},i=o=>o.done?m(o.value):Promise.resolve(o.value).then(u,c);i((a=a.apply(e,r)).next())});import{_ as T,a as B}from"./useForm-5wnZKxWU.js";import{a as f,b as q,as as A,v as E,_ as F}from"./entry/index-C41ZFr6n-1718602026943.js";import{l as R,d as C,f as k,c as $,u as p,ab as w,_ as N,a7 as x,a8 as L,k as O,ac as V}from"./vue-BMCEF3Jf.js";import{Q as j}from"./antd-BPAr-OsJ.js";import{B as G,a as U}from"./index-DDf_l8hU.js";const te=(e,r="notice")=>f.post({url:"/sys-api/email_provider/list",params:e},{errorMessageMode:r}),z=(e,r="notice")=>f.post({url:"/sys-api/email_provider/create",params:e},{errorMessageMode:r,successMessageMode:r}),b=(e,r="notice")=>f.post({url:"/sys-api/email_provider/update",params:e},{errorMessageMode:r,successMessageMode:r}),oe=(e,r="notice")=>f.post({url:"/sys-api/email_provider/delete",params:e},{errorMessageMode:r,successMessageMode:r}),{t}=q(),se=[{title:t("mcms.emailProvider.name"),dataIndex:"name",width:50},{title:t("mcms.emailProvider.emailAddr"),dataIndex:"emailAddr",width:50},{title:t("mcms.emailProvider.isDefault"),dataIndex:"isDefault",width:20,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),R(j,{checked:e.isDefault===!0,checkedChildren:t("common.yes"),unCheckedChildren:t("common.no"),loading:e.pendingStatus,onChange(r,a){e.pendingStatus=!0,b({id:e.id,isDefault:r}).then(()=>{e.isDefault=r}).finally(()=>{e.pendingStatus=!1})}}))},{title:t("common.createTime"),dataIndex:"createdAt",width:20,customRender:({record:e})=>A(e.createdAt)}],ie=[{field:"name",label:t("mcms.emailProvider.name"),component:"Input",colProps:{span:8}},{field:"emailAddr",label:t("mcms.emailProvider.emailAddr"),component:"Input",colProps:{span:8}}],l=e=>e===1,H=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:t("mcms.emailProvider.name"),component:"Input",required:!0},{field:"authType",label:t("mcms.emailProvider.authType"),component:"Select",required:!0,componentProps:{options:[{label:"plain",value:1},{label:"CRAMMD5",value:2}]}},{field:"emailAddr",label:t("mcms.emailProvider.emailAddr"),component:"Input",required:!0,ifShow:({values:e})=>l(e.authType)},{field:"password",label:t("mcms.emailProvider.password"),component:"Input",required:!0,ifShow:({values:e})=>l(e.authType)},{field:"hostName",label:t("mcms.emailProvider.hostName"),component:"Input",required:!0,ifShow:({values:e})=>l(e.authType)},{field:"identify",label:t("mcms.emailProvider.identify"),component:"Input",required:!0,ifShow:({values:e})=>!l(e.authType)},{field:"secret",label:t("mcms.emailProvider.secret"),component:"Input",required:!0,ifShow:({values:e})=>!l(e.authType)},{field:"port",label:t("mcms.emailProvider.port"),component:"InputNumber",required:!0,ifShow:({values:e})=>l(e.authType)},{field:"tls",label:t("mcms.emailProvider.tls"),component:"RadioButtonGroup",required:!0,defaultValue:!1,componentProps:{options:[{label:t("common.yes"),value:!0},{label:t("common.no"),value:!1}]}},{field:"isDefault",label:t("mcms.emailProvider.isDefault"),component:"RadioButtonGroup",required:!0,defaultValue:!1,componentProps:{options:[{label:t("common.yes"),value:!0},{label:t("common.no"),value:!1}]}}],Q=C({name:"EmailProviderDrawer",components:{BasicDrawer:G,BasicForm:T},emits:["success","register"],setup(e,{emit:r}){const a=k(!0),{t:m}=E.useI18n(),[d,{resetFields:u,setFieldsValue:c,validate:i}]=B({labelWidth:140,baseColProps:{span:24},layout:"vertical",schemas:H,showActionButtonGroup:!1}),[o,{setDrawerProps:n,closeDrawer:_}]=U(s=>v(this,null,function*(){u(),n({confirmLoading:!1}),a.value=!!(s!=null&&s.isUpdate),p(a)&&c(g({},s.record))})),y=$(()=>p(a)?m("mcms.emailProvider.editEmailProvider"):m("mcms.emailProvider.addEmailProvider"));function D(){return v(this,null,function*(){const s=yield i();n({confirmLoading:!0}),s.id=p(a)?Number(s.id):0,(p(a)?yield b(s):yield z(s)).code===0&&(_(),r("success")),n({confirmLoading:!1})})}return{registerDrawer:o,registerForm:d,getTitle:y,handleSubmit:D}}});function W(e,r,a,m,d,u){const c=w("BasicForm"),i=w("BasicDrawer");return N(),x(i,V(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:L(()=>[O(c,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const J=F(Q,[["render",W]]),ne=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{J as E,ne as a,se as c,oe as d,te as g,ie as s};
