var m=(e,l,a)=>new Promise((c,u)=>{var p=t=>{try{o(a.next(t))}catch(s){u(s)}},f=t=>{try{o(a.throw(t))}catch(s){u(s)}},o=t=>t.done?c(t.value):Promise.resolve(t.value).then(p,f);o((a=a.apply(e,l)).next())});import{i as A}from"./index-D46PiUjU.js";import{B as O,u as $}from"./useTable-DUDBe34E.js";import{T as q,_ as V,a as j}from"./useForm-DGqLGoed.js";import{b as N,aq as U,v as G,_ as W}from"./entry/index-DvPJ5Vzs-1718250502895.js";import{u as z}from"./index-BsqrLki-.js";import{g as F,E as H,c as J,s as K,d as T}from"./EmailProviderDrawer-BzESSnXo.js";import{B as Q,b as X}from"./index-3BhCtvAk.js";import Y from"./LogModal-DNUJg2-H.js";import{s as Z}from"./messageSender-RcmoMCS5.js";import{M as x}from"./antd-BPAr-OsJ.js";import{d as ee,f as k,k as r,ab as i,_ as E,$ as oe,a8 as d,a7 as D,G as M,a1 as S,aa as _}from"./vue-BMCEF3Jf.js";import"./ExclamationCircleOutlined-s2Xy4hHc.js";import"./index-CU9epjG0.js";import"./isBoolean-Dou3jA6I.js";import"./isNumber-j3SIk7av.js";import"./index-Bji4O60f.js";import"./object-BY_VTB7H.js";import"./isDeepEqual-DDA9_BTC.js";import"./useWindowSizeFn-DLNrSaDV.js";import"./onMountedOrActivated-CPthIpwg.js";import"./sortable.esm-DFFrMEeC.js";import"./index-CBIPPzDl.js";import"./copyTextToClipboard-sKBLHCHY.js";import"./useSortable-DDWVM7pI.js";import"./index-DQkEJ5Ra.js";import"./index-DsLJPeYo.js";import"./components-CoxIuU15.js";const{t:b}=N(),te=[{field:"target",label:b("mcms.email.targetAddress"),component:"Input",required:!0},{field:"subject",label:b("mcms.email.subject"),component:"Input",required:!0},{field:"content",label:b("mcms.email.content"),component:"InputTextArea",required:!0},{field:"provider",label:b("mcms.emailLog.provider"),component:"ApiSelect",required:!0,defaultValue:"tencent",componentProps:{api:F,params:{page:1,pageSize:1e3},resultField:"data.data",labelField:"name",valueField:"name"}}],ne=ee({name:"EmailProviderManagement",components:{BasicTable:O,EmailProviderDrawer:H,TableAction:q,Button:U,LogModal:Y,BasicModal:Q,BasicForm:V},setup(){const{t:e}=G.useI18n(),l=k(),a=k(!1),c=k(!1),[u,{openDrawer:p}]=z(),[f,{reload:o}]=$({title:e("mcms.emailProvider.emailProviderList"),api:F,columns:J,formConfig:{labelWidth:160,schemas:K},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,clickToRowSelect:!1,actionColumn:{width:30,title:e("common.action"),dataIndex:"action",fixed:void 0},rowKey:"id",rowSelection:{type:"checkbox",onChange:(n,y)=>{l.value=n,a.value=n.length>0}}}),[t,{openModal:s}]=X(),[w,{validate:v}]=j({labelWidth:160,baseColProps:{span:18},schemas:te,showActionButtonGroup:!1,labelAlign:"right"});function C(n){s(!0,{record:n})}function B(){p(!0,{isUpdate:!1})}function g(n){p(!0,{record:n,isUpdate:!0})}function h(n){return m(this,null,function*(){(yield T({ids:[n.id]})).code===0&&(yield o())})}function P(){return m(this,null,function*(){x.confirm({title:e("common.deleteConfirm"),icon:r(A.ExclamationCircleOutlined),onOk(){return m(this,null,function*(){(yield T({ids:l.value})).code===0&&(a.value=!1,yield o())})},onCancel(){}})})}function I(){return m(this,null,function*(){yield o()})}function L(){c.value=!0}function R(){return m(this,null,function*(){const n=yield v();yield Z(n)})}return{t:e,registerTable:f,registerDrawer:u,handleCreate:B,handleEdit:g,handleDelete:h,handleSuccess:I,handleBatchDelete:P,showDeleteButton:a,reload:o,registerModal:t,handleOpenLogModal:C,showSenderModal:c,handleOpenSenderModal:L,registerForm:w,handleSendEmail:R}}});function ae(e,l,a,c,u,p){const f=i("Button"),o=i("a-button"),t=i("TableAction"),s=i("BasicTable"),w=i("EmailProviderDrawer"),v=i("LogModal"),C=i("BasicForm"),B=i("BasicModal");return E(),oe("div",null,[r(s,{onRegister:e.registerTable,onEditEnd:e.reload},{tableTitle:d(()=>[e.showDeleteButton?(E(),D(f,{key:0,type:"primary",danger:"",preIcon:"ant-design:delete-outlined",onClick:e.handleBatchDelete},{default:d(()=>[M(S(e.t("common.delete")),1)]),_:1},8,["onClick"])):_("",!0)]),toolbar:d(()=>[r(o,{type:"success",onClick:e.handleOpenSenderModal},{default:d(()=>[M(S(e.t("mcms.email.sendEmail")),1)]),_:1},8,["onClick"]),r(o,{type:"primary",onClick:e.handleCreate},{default:d(()=>[M(S(e.t("mcms.emailProvider.addEmailProvider")),1)]),_:1},8,["onClick"])]),bodyCell:d(({column:g,record:h})=>[g.key==="action"?(E(),D(t,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,h)},{icon:"ic:round-library-books",tooltip:e.t("common.viewLog"),onClick:e.handleOpenLogModal.bind(null,h)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:e.t("common.deleteConfirm"),placement:"left",confirm:e.handleDelete.bind(null,h)}}]},null,8,["actions"])):_("",!0)]),_:1},8,["onRegister","onEditEnd"]),r(w,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),r(v,{onRegister:e.registerModal,defaultFullscreen:!0},null,8,["onRegister"]),r(B,{open:e.showSenderModal,"onUpdate:open":l[0]||(l[0]=g=>e.showSenderModal=g),title:e.t("mcms.email.sendEmail"),onOk:e.handleSendEmail},{default:d(()=>[r(C,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},8,["open","title","onOk"])])}const Le=W(ne,[["render",ae]]);export{Le as default};
