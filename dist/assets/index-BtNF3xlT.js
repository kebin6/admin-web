var m=(e,r,o)=>new Promise((f,s)=>{var l=t=>{try{n(o.next(t))}catch(i){s(i)}},c=t=>{try{n(o.throw(t))}catch(i){s(i)}},n=t=>t.done?f(t.value):Promise.resolve(t.value).then(l,c);n((o=o.apply(e,r)).next())});import{i as v}from"./index-DFMDnBcl.js";import{B as I,u as A}from"./useTable-CCLOgsii.js";import{T as R}from"./useForm-5wnZKxWU.js";import{aq as $,v as E,u as M,_ as N}from"./entry/index-C41ZFr6n-1718602026943.js";import{u as V}from"./index-DDf_l8hU.js";import{D as F,c as G,s as L}from"./DictionaryDrawer-C-xcFQAi.js";import{g as O,d as g}from"./dictionary-Di0GR5O7.js";import{M as U}from"./antd-BPAr-OsJ.js";import{d as j,f as w,k as h,ab as u,_ as b,$ as q,a8 as p,a7 as k,G as B,a1 as T,aa as _}from"./vue-BMCEF3Jf.js";import"./ExclamationCircleOutlined-cpSGxMVL.js";import"./index-oRM4bmDd.js";import"./isBoolean-Dou3jA6I.js";import"./index-G5Wa8967.js";import"./useWindowSizeFn-Cczi9si3.js";import"./isDeepEqual-CCjWtLPA.js";import"./isNumber-j3SIk7av.js";import"./index-CrgunjrK.js";import"./object-BY_VTB7H.js";import"./onMountedOrActivated-CPthIpwg.js";import"./sortable.esm-DFFrMEeC.js";import"./index-D93fFNl6.js";import"./copyTextToClipboard-Cxs8Y4LI.js";import"./useSortable-B_A9JW_B.js";import"./index-CqgpaEX_.js";import"./index-9koevRY3.js";const W=j({name:"DictionaryManagement",components:{BasicTable:I,DictionaryDrawer:F,TableAction:R,Button:$},setup(){const{t:e}=E.useI18n(),r=w(),o=w(!1),f=M(),[s,{openDrawer:l}]=V(),[c,{reload:n}]=A({title:e("sys.dictionary.dictionaryList"),api:O,columns:G,formConfig:{labelWidth:120,schemas:L},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,clickToRowSelect:!1,actionColumn:{width:30,title:e("common.action"),dataIndex:"action",fixed:void 0},rowKey:"id",rowSelection:{type:"checkbox",onChange:(a,C)=>{r.value=a,o.value=a.length>0}}});function t(){l(!0,{isUpdate:!1})}function i(a){l(!0,{record:a,isUpdate:!0})}function y(a){return m(this,null,function*(){(yield g({ids:[a.id]})).code===0&&(yield n())})}function D(){return m(this,null,function*(){U.confirm({title:e("common.deleteConfirm"),icon:h(v.ExclamationCircleOutlined),onOk(){return m(this,null,function*(){(yield g({ids:r.value})).code===0&&(o.value=!1,yield n())})},onCancel(){}})})}function d(){return m(this,null,function*(){yield n()})}function S(a){f("/dictionary/detail/"+a.id)}return{t:e,registerTable:c,registerDrawer:s,handleCreate:t,handleEdit:i,handleDelete:y,handleSuccess:d,handleBatchDelete:D,showDeleteButton:o,handleAddDetail:S}}});function z(e,r,o,f,s,l){const c=u("Button"),n=u("a-button"),t=u("TableAction"),i=u("BasicTable"),y=u("DictionaryDrawer");return b(),q("div",null,[h(i,{onRegister:e.registerTable},{tableTitle:p(()=>[e.showDeleteButton?(b(),k(c,{key:0,type:"primary",danger:"",preIcon:"ant-design:delete-outlined",onClick:e.handleBatchDelete},{default:p(()=>[B(T(e.t("common.delete")),1)]),_:1},8,["onClick"])):_("",!0)]),toolbar:p(()=>[h(n,{type:"primary",onClick:e.handleCreate},{default:p(()=>[B(T(e.t("sys.dictionary.addDictionary")),1)]),_:1},8,["onClick"])]),bodyCell:p(({column:D,record:d})=>[D.key==="action"?(b(),k(t,{key:0,actions:[{icon:"ant-design:file-add-outlined",onClick:e.handleAddDetail.bind(null,d)},{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,d)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:e.t("common.deleteConfirm"),placement:"left",confirm:e.handleDelete.bind(null,d)}}]},null,8,["actions"])):_("",!0)]),_:1},8,["onRegister"]),h(y,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const De=N(W,[["render",z]]);export{De as default};
