var v=Object.defineProperty;var g=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var b=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&b(e,a,t[a]);if(g)for(var a of g(t))D.call(t,a)&&b(e,a,t[a]);return e};var f=(e,t,a)=>new Promise((r,l)=>{var d=n=>{try{i(a.next(n))}catch(m){l(m)}},u=n=>{try{i(a.throw(n))}catch(m){l(m)}},i=n=>n.done?r(n.value):Promise.resolve(n.value).then(d,u);i((a=a.apply(e,t)).next())});import{_ as k,a as B}from"./useForm-Cq3McrEd.js";import{b as T,bt as y,as as A,ar as I,v as C,bu as U,_ as R}from"./entry/index-DaEB-Y-8-1718870402071.js";import{g as F}from"./role-BtYuqNKr.js";import{g as q}from"./department-oJEmH31A.js";import{g as L}from"./position-Dw9D9jok.js";import{u as M}from"./cloudFile-ULoT_c9i.js";import{l as $,d as V,f as z,c as O,u as p,ab as w,_ as j,a7 as G,a8 as N,k as Q,ac as W}from"./vue-BMCEF3Jf.js";import{Q as E}from"./antd-BNMfrwLX.js";import{B as H,a as J}from"./index-CL7BM-aX.js";const{t:s}=T(),pe=[{title:s("sys.login.username"),dataIndex:"username",width:30},{title:s("sys.user.nickname"),dataIndex:"nickname",width:30},{title:s("sys.login.email"),dataIndex:"email",width:50},{title:s("common.status"),dataIndex:"status",width:20,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),$(E,{checked:e.status===1,checkedChildren:s("common.on"),unCheckedChildren:s("common.off"),loading:e.pendingStatus,onChange(t,a){const{createMessage:r}=I();if(e.id==1){r.warn(s("sys.role.adminStatusChangeForbidden"));return}e.pendingStatus=!0;const l=t?1:2;y({id:e.id,status:l}).then(()=>{e.status=l}).finally(()=>{e.pendingStatus=!1})}}))},{title:s("common.createTime"),dataIndex:"createdAt",width:40,customRender:({record:e})=>A(e.createdAt)}],de=[{field:"username",label:s("sys.login.username"),component:"Input",colProps:{span:8},rules:[{max:50}]},{field:"nickname",label:s("sys.user.nickname"),component:"Input",colProps:{span:8},rules:[{max:40}]},{field:"roleIds",label:s("sys.role.roleTitle"),component:"ApiMultipleSelect",componentProps:{api:F,params:{page:1,pageSize:100},resultField:"data.data",labelField:"trans",valueField:"id"},colProps:{span:8}},{field:"mobile",label:s("sys.login.mobile"),component:"Input",colProps:{span:8},rules:[{max:18}]},{field:"email",label:s("sys.login.email"),component:"Input",colProps:{span:8},rules:[{max:70}]}],K=[{field:"avatar",label:s("sys.user.avatar"),defaultValue:"",component:"CropperAvatar",show:!0,componentProps:{uploadApi:M,btnText:s("sys.user.changeAvatar"),width:100,formValueType:"string"}},{field:"id",label:"ID",component:"Input",show:!1},{field:"username",label:s("sys.login.username"),required:!0,component:"Input",rules:[{max:50}]},{field:"nickname",label:s("sys.user.nickname"),required:!0,component:"Input",rules:[{max:40}]},{field:"description",label:s("sys.user.description"),required:!1,component:"Input",rules:[{max:100}]},{field:"homePath",label:s("sys.user.homePath"),required:!1,defaultValue:"/dashboard",component:"Input",rules:[{max:70}]},{field:"mobile",label:s("sys.login.mobile"),component:"Input",rules:[{max:18}]},{field:"email",label:s("sys.login.email"),required:!0,component:"Input",rules:[{type:"email"}]},{field:"password",label:s("sys.login.password"),component:"Input"},{field:"roleIds",label:s("sys.role.roleTitle"),required:!0,component:"ApiMultipleSelect",componentProps:{api:F,params:{page:1,pageSize:100},resultField:"data.data",labelField:"trans",valueField:"id"}},{field:"departmentId",label:s("sys.department.userDepartment"),component:"ApiTreeSelect",required:!0,componentProps:{api:q,params:{page:1,pageSize:1e3,name:"",leader:""},resultField:"data.data",labelField:"trans",valueField:"id"}},{field:"positionId",label:s("sys.position.userPosition"),component:"ApiMultipleSelect",required:!0,componentProps:{api:L,params:{page:1,pageSize:1e3,name:""},resultField:"data.data",labelField:"trans",valueField:"id"}},{field:"status",label:s("common.status"),component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:s("common.on"),value:1},{label:s("common.off"),value:2}]}}],X=V({name:"UserDrawer",components:{BasicDrawer:H,BasicForm:k},emits:["success","register"],setup(e,{emit:t}){const a=z(!0),{t:r}=C.useI18n(),{createMessage:l}=I(),[d,{resetFields:u,setFieldsValue:i,validate:n}]=B({labelWidth:160,baseColProps:{span:24},layout:"vertical",schemas:K,showActionButtonGroup:!1}),[m,{setDrawerProps:c,closeDrawer:S}]=J(o=>f(this,null,function*(){u(),c({confirmLoading:!1}),a.value=!!(o!=null&&o.isUpdate),p(a)&&i(h({},o.record))})),P=O(()=>p(a)?r("sys.user.editUser"):r("sys.user.addUser"));function _(){return f(this,null,function*(){const o=yield n();if(c({confirmLoading:!0}),!p(a)&&o.password===void 0){l.warning(r("sys.login.passwordPlaceholder")),c({confirmLoading:!1});return}o.id=p(a)?o.id:"",(p(a)?yield y(o):yield U(o)).code===0&&(S(),t("success")),c({confirmLoading:!1})})}return{registerDrawer:m,registerForm:d,handleSubmit:_,getTitle:P}}});function Y(e,t,a,r,l,d){const u=w("BasicForm"),i=w("BasicDrawer");return j(),G(i,W(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:N(()=>[Q(u,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const Z=R(X,[["render",Y]]),ce=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{Z as U,ce as a,pe as c,de as s};