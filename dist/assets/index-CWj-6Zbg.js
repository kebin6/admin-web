var c=(e,s,o)=>new Promise((p,l)=>{var u=t=>{try{r(o.next(t))}catch(i){l(i)}},n=t=>{try{r(o.throw(t))}catch(i){l(i)}},r=t=>t.done?p(t.value):Promise.resolve(t.value).then(u,n);r((o=o.apply(e,s)).next())});import{i as T}from"./index-DFMDnBcl.js";import{B as S,u as v}from"./useTable-CCLOgsii.js";import{T as P}from"./useForm-5wnZKxWU.js";import{aq as I,v as R,_ as $}from"./entry/index-C41ZFr6n-1718602026943.js";import{u as E}from"./index-DDf_l8hU.js";import{P as A,g as M,c as N,s as V,d as w}from"./PlayerDrawer-BrnUJI3C.js";import{M as F}from"./antd-BPAr-OsJ.js";import{d as L,f as C,k as f,ab as m,_ as b,$ as O,a8 as d,a7 as _,G as k,a1 as B,aa as D}from"./vue-BMCEF3Jf.js";import"./ExclamationCircleOutlined-cpSGxMVL.js";import"./index-oRM4bmDd.js";import"./isBoolean-Dou3jA6I.js";import"./index-G5Wa8967.js";import"./useWindowSizeFn-Cczi9si3.js";import"./isDeepEqual-CCjWtLPA.js";import"./isNumber-j3SIk7av.js";import"./index-CrgunjrK.js";import"./object-BY_VTB7H.js";import"./onMountedOrActivated-CPthIpwg.js";import"./sortable.esm-DFFrMEeC.js";import"./index-D93fFNl6.js";import"./copyTextToClipboard-Cxs8Y4LI.js";import"./useSortable-B_A9JW_B.js";import"./index-CqgpaEX_.js";import"./index-9koevRY3.js";const U=L({name:"PlayerManagement",components:{BasicTable:S,PlayerDrawer:A,TableAction:P,Button:I},setup(){const{t:e}=R.useI18n(),s=C(),o=C(!1),[p,{openDrawer:l}]=E(),[u,{reload:n}]=v({title:e("platform_management.player.playerList"),api:M,columns:N,formConfig:{labelWidth:120,schemas:V},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,clickToRowSelect:!1,actionColumn:{width:100,title:e("common.action"),dataIndex:"action",fixed:void 0},rowKey:"id",rowSelection:{type:"checkbox",onChange:(a,g)=>{s.value=a,o.value=a.length>0}}});function r(){l(!0,{isUpdate:!1})}function t(a){l(!0,{record:a,isUpdate:!0})}function i(a){return c(this,null,function*(){(yield w({ids:[a.id]})).code===0&&(yield n())})}function h(){return c(this,null,function*(){F.confirm({title:e("common.deleteConfirm"),icon:f(T.ExclamationCircleOutlined),onOk(){return c(this,null,function*(){(yield w({ids:s.value})).code===0&&(o.value=!1,yield n())})},onCancel(){}})})}function y(){return c(this,null,function*(){yield n()})}return{t:e,registerTable:u,registerDrawer:p,handleCreate:r,handleEdit:t,handleDelete:i,handleSuccess:y,handleBatchDelete:h,showDeleteButton:o}}});function j(e,s,o,p,l,u){const n=m("Button"),r=m("a-button"),t=m("TableAction"),i=m("BasicTable"),h=m("PlayerDrawer");return b(),O("div",null,[f(i,{onRegister:e.registerTable},{tableTitle:d(()=>[e.showDeleteButton?(b(),_(n,{key:0,type:"primary",danger:"",preIcon:"ant-design:delete-outlined",onClick:e.handleBatchDelete},{default:d(()=>[k(B(e.t("common.delete")),1)]),_:1},8,["onClick"])):D("",!0)]),toolbar:d(()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:d(()=>[k(B(e.t("platform_management.player.addPlayer")),1)]),_:1},8,["onClick"])]),bodyCell:d(({column:y,record:a})=>[y.key==="action"?(b(),_(t,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:e.t("common.deleteConfirm"),placement:"left",confirm:e.handleDelete.bind(null,a)}}]},null,8,["actions"])):D("",!0)]),_:1},8,["onRegister"]),f(h,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const ue=$(U,[["render",j]]);export{ue as default};
