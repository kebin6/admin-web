var c=(e,s,t)=>new Promise((u,r)=>{var p=o=>{try{i(t.next(o))}catch(l){r(l)}},n=o=>{try{i(t.throw(o))}catch(l){r(l)}},i=o=>o.done?u(o.value):Promise.resolve(o.value).then(p,n);i((t=t.apply(e,s)).next())});import{i as D}from"./index-D46PiUjU.js";import{B as F,u as S}from"./useTable-DUDBe34E.js";import{T as v}from"./useForm-DGqLGoed.js";import{aq as I,v as R,_ as $}from"./entry/index-DvPJ5Vzs-1718250502895.js";import{u as E}from"./index-BsqrLki-.js";import{C as A,c as M,s as N}from"./CloudFileTagDrawer-BGvC1hr3.js";import{g as V,d as b}from"./cloudFileTag-C71zMwBV.js";import{M as L}from"./antd-BPAr-OsJ.js";import{d as O,f as w,k as f,ab as m,_ as h,$ as U,a8 as d,a7 as k,G as y,a1 as _,aa as B}from"./vue-BMCEF3Jf.js";import"./ExclamationCircleOutlined-s2Xy4hHc.js";import"./index-CU9epjG0.js";import"./isBoolean-Dou3jA6I.js";import"./index-3BhCtvAk.js";import"./useWindowSizeFn-DLNrSaDV.js";import"./isDeepEqual-DDA9_BTC.js";import"./isNumber-j3SIk7av.js";import"./index-Bji4O60f.js";import"./object-BY_VTB7H.js";import"./onMountedOrActivated-CPthIpwg.js";import"./sortable.esm-DFFrMEeC.js";import"./index-CBIPPzDl.js";import"./copyTextToClipboard-sKBLHCHY.js";import"./useSortable-DDWVM7pI.js";import"./index-DQkEJ5Ra.js";import"./index-DsLJPeYo.js";const j=O({name:"CloudFileTagManagement",components:{BasicTable:F,CloudFileTagDrawer:A,TableAction:v,Button:I},setup(){const{t:e}=R.useI18n(),s=w(),t=w(!1),[u,{openDrawer:r}]=E(),[p,{reload:n}]=S({title:e("fms.cloudFileTag.cloudFileTagList"),api:V,columns:M,formConfig:{labelWidth:120,schemas:N},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,clickToRowSelect:!1,actionColumn:{width:30,title:e("common.action"),dataIndex:"action",fixed:void 0},rowKey:"id",rowSelection:{type:"checkbox",onChange:(a,T)=>{s.value=a,t.value=a.length>0}}});function i(){r(!0,{isUpdate:!1})}function o(a){r(!0,{record:a,isUpdate:!0})}function l(a){return c(this,null,function*(){(yield b({ids:[a.id]})).code===0&&(yield n())})}function g(){return c(this,null,function*(){L.confirm({title:e("common.deleteConfirm"),icon:f(D.ExclamationCircleOutlined),onOk(){return c(this,null,function*(){(yield b({ids:s.value})).code===0&&(t.value=!1,yield n())})},onCancel(){}})})}function C(){return c(this,null,function*(){yield n()})}return{t:e,registerTable:p,registerDrawer:u,handleCreate:i,handleEdit:o,handleDelete:l,handleSuccess:C,handleBatchDelete:g,showDeleteButton:t}}});function q(e,s,t,u,r,p){const n=m("Button"),i=m("a-button"),o=m("TableAction"),l=m("BasicTable"),g=m("CloudFileTagDrawer");return h(),U("div",null,[f(l,{onRegister:e.registerTable},{tableTitle:d(()=>[e.showDeleteButton?(h(),k(n,{key:0,type:"primary",danger:"",preIcon:"ant-design:delete-outlined",onClick:e.handleBatchDelete},{default:d(()=>[y(_(e.t("common.delete")),1)]),_:1},8,["onClick"])):B("",!0)]),toolbar:d(()=>[f(i,{type:"primary",onClick:e.handleCreate},{default:d(()=>[y(_(e.t("fms.cloudFileTag.addCloudFileTag")),1)]),_:1},8,["onClick"])]),bodyCell:d(({column:C,record:a})=>[C.key==="action"?(h(),k(o,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:e.t("common.deleteConfirm"),placement:"left",confirm:e.handleDelete.bind(null,a)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),f(g,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const fe=$(j,[["render",q]]);export{fe as default};
