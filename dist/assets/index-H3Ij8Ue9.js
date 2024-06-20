var C=(e,r,u)=>new Promise((T,v)=>{var w=t=>{try{f(u.next(t))}catch(i){v(i)}},p=t=>{try{f(u.throw(t))}catch(i){v(i)}},f=t=>t.done?T(t.value):Promise.resolve(t.value).then(w,p);f((u=u.apply(e,r)).next())});import{B as Q,u as X}from"./useTable-CCLOgsii.js";import{T as Y,B as Z,A as _,u as x}from"./useForm-5wnZKxWU.js";import{aq as ee,v as oe,ar as ae,_ as ne}from"./entry/index-C41ZFr6n-1718602026943.js";import{u as le}from"./index-DDf_l8hU.js";import{C as ie,c as te,s as se}from"./CloudFileDrawer-DQXyvHhx.js";import{g as re,u as de,d as L}from"./cloudFile-B0Scyq7f.js";import{i as ce}from"./index-DFMDnBcl.js";import"./index-oRM4bmDd.js";import{O as me,M as P}from"./antd-BPAr-OsJ.js";import"./index-G5Wa8967.js";import{g as ue}from"./storageProvider-fqhiXNN5.js";import{d as pe,f as s,c as fe,k as l,ab as c,_ as U,$ as he,a8 as n,a7 as A,G as b,a1 as h,aa as N,a0 as I}from"./vue-BMCEF3Jf.js";import"./isBoolean-Dou3jA6I.js";import"./isNumber-j3SIk7av.js";import"./index-CrgunjrK.js";import"./object-BY_VTB7H.js";import"./isDeepEqual-CCjWtLPA.js";import"./useWindowSizeFn-Cczi9si3.js";import"./onMountedOrActivated-CPthIpwg.js";import"./sortable.esm-DFFrMEeC.js";import"./index-D93fFNl6.js";import"./copyTextToClipboard-Cxs8Y4LI.js";import"./useSortable-B_A9JW_B.js";import"./index-CqgpaEX_.js";import"./index-9koevRY3.js";import"./cloudFileTag-Da1QuCa6.js";import"./ExclamationCircleOutlined-cpSGxMVL.js";const ve=pe({name:"CloudFileManagement",components:{BasicTable:Q,CloudFileDrawer:ie,Button:ee,TableAction:Y,BasicUpload:Z,Image:me,Modal:P,ApiSelect:_},setup(){const{t:e}=oe.useI18n(),{toClipboard:r}=x(),{createErrorModal:u,createMessage:T}=ae(),v=s(!1),w=s(),p=s(e("fms.storageProvider.chooseProvider")),f=fe(()=>({provider:p.value})),[t,{openDrawer:i}]=le(),[B,{reload:k}]=X({title:e("fms.file.fileList"),api:re,columns:te,formConfig:{labelWidth:140,schemas:se},useSearchForm:!0,showTableSetting:!0,bordered:!0,clickToRowSelect:!1,showIndexColumn:!1,actionColumn:{width:50,title:e("common.action"),dataIndex:"action",fixed:void 0},rowKey:"id",rowSelection:{type:"checkbox",onChange:(o,a)=>{w.value=o,v.value=o.length>0}}}),D=s(!1),g=s(!1),y=s(!1),d=o=>{D.value=o},m=s(""),S=s(""),O=s(""),E=s(""),V=s("");function M(){i(!0,{isUpdate:!1})}function $(o){for(let a=0;a<o.length;a++)if(o[a].isDefault){p.value=o[a].label;break}}function j(o){return C(this,null,function*(){if(o.fileType===2)y.value=!0,m.value=o.url;else if(o.fileType===3)g.value=!0,S.value=o.url,O.value=o.name;else{const a=document.createElement("a");a.href=o.url,a.download=V.value,a.click(),a.remove(),URL.revokeObjectURL(a.href)}})}function z(){const o=document.createElement("a");o.href=S.value,o.download=V.value,o.click(),o.remove(),URL.revokeObjectURL(o.href),R()}function q(){const o=document.createElement("a");o.href=m.value,o.download=V.value,o.click(),o.remove(),URL.revokeObjectURL(o.href),F()}function R(){g.value=!1}function F(){y.value=!1}function G(o){i(!0,{record:o,isUpdate:!0})}function W(o){return C(this,null,function*(){yield L({ids:[o.id]}),k()})}function H(){return C(this,null,function*(){P.confirm({title:e("common.deleteConfirm"),icon:l(ce.ExclamationCircleOutlined),onOk(){return C(this,null,function*(){const a=w.value;(yield L({ids:a})).code===0&&(yield k())})},onCancel(){}})})}function J(o){return C(this,null,function*(){try{yield r(o.url),T.success(e("fms.file.copyURLSuccess"))}catch(a){u({title:e("fms.file.copyURLFailed"),content:o.publicPath})}})}function K(){k()}return{t:e,registerTable:B,registerDrawer:t,handleCreate:M,handleEdit:G,handleDelete:W,handleSuccess:K,providerName:p,providerParams:f,handleOptionsChange:$,handleDownload:j,handleChange:o=>{},uploadApi:de,visible:D,videoVisible:g,imageVisible:y,setVisible:d,imagePath:m,videoPath:S,videoTitle:O,imageTitle:E,handleDownloadVideo:z,handleDownloadImage:q,handleCloseVideo:R,handleCloseImage:F,handleCopyToClipboard:J,handleBatchDelete:H,showDeleteButton:v,getStorageProviderList:ue}}}),ge={width:"1280",height:"720",controls:""},Ce=["src"];function be(e,r,u,T,v,w){const p=c("Button"),f=c("ApiSelect"),t=c("BasicUpload"),i=c("a-button"),B=c("TableAction"),k=c("BasicTable"),D=c("CloudFileDrawer"),g=c("Modal"),y=c("Image");return U(),he("div",null,[l(k,{onRegister:e.registerTable},{tableTitle:n(()=>[e.showDeleteButton?(U(),A(p,{key:0,type:"primary",danger:"",preIcon:"ant-design:delete-outlined",onClick:e.handleBatchDelete},{default:n(()=>[b(h(e.t("common.delete")),1)]),_:1},8,["onClick"])):N("",!0)]),toolbar:n(()=>[I("span",null,h(e.t("fms.cloudFile.providerId")),1),l(f,{api:e.getStorageProviderList,params:{page:1,pageSize:1e3},"result-field":"data.data","label-field":"name","value-field":"name",class:"w-32",value:e.providerName,"onUpdate:value":r[0]||(r[0]=d=>e.providerName=d),onOptionsChange:e.handleOptionsChange},null,8,["api","value","onOptionsChange"]),l(t,{maxSize:1e3,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,"upload-params":e.providerParams,class:"my-5",accept:["image/*","video/*","audio/*"]},null,8,["onChange","api","upload-params"]),l(i,{type:"primary",onClick:e.handleCreate},{default:n(()=>[b(h(e.t("fms.cloudFile.addCloudFile")),1)]),_:1},8,["onClick"])]),bodyCell:n(({column:d,record:m})=>[d.key==="action"?(U(),A(B,{key:0,actions:[{icon:"ant-design:cloud-download-outlined",tooltip:e.t("fms.file.download"),onClick:e.handleDownload.bind(null,m)},{icon:"ant-design:copy-outlined",tooltip:e.t("fms.file.copyURL"),onClick:e.handleCopyToClipboard.bind(null,m)},{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,m)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:e.t("common.deleteConfirm"),placement:"left",confirm:e.handleDelete.bind(null,m)}}]},null,8,["actions"])):N("",!0)]),_:1},8,["onRegister"]),l(D,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),l(g,{open:e.videoVisible,"onUpdate:open":r[1]||(r[1]=d=>e.videoVisible=d),title:e.videoTitle,width:"80%","wrap-class-name":"full-modal",onOk:e.handleDownloadVideo},{footer:n(()=>[l(i,{key:"back",onClick:e.handleCloseVideo},{default:n(()=>[b(h(e.t("common.closeText")),1)]),_:1},8,["onClick"]),l(i,{key:"download",type:"primary",onClick:e.handleDownloadVideo},{default:n(()=>[b(h(e.t("fms.file.download")),1)]),_:1},8,["onClick"])]),default:n(()=>[I("video",ge,[I("source",{src:e.videoPath,type:"video/mp4"},null,8,Ce)])]),_:1},8,["open","title","onOk"]),l(g,{open:e.imageVisible,"onUpdate:open":r[2]||(r[2]=d=>e.imageVisible=d),title:e.imageTitle,width:"50%","wrap-class-name":"full-modal",onOk:e.handleDownloadImage},{footer:n(()=>[l(i,{key:"back",onClick:e.handleCloseImage},{default:n(()=>[b(h(e.t("common.closeText")),1)]),_:1},8,["onClick"]),l(i,{key:"download",type:"primary",onClick:e.handleDownloadImage},{default:n(()=>[b(h(e.t("fms.file.download")),1)]),_:1},8,["onClick"])]),default:n(()=>[l(y,{width:"100%",style:{},preview:{visible:e.visible,onVisibleChange:e.setVisible},src:e.imagePath},null,8,["preview","src"])]),_:1},8,["open","title","onOk"])])}const Xe=ne(ve,[["render",be]]);export{Xe as default};
