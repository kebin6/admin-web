var v=(F,f,g)=>new Promise((i,k)=>{var T=s=>{try{p(g.next(s))}catch(y){k(y)}},h=s=>{try{p(g.throw(s))}catch(y){k(y)}},p=s=>s.done?i(s.value):Promise.resolve(s.value).then(T,h);p((g=g.apply(F,f)).next())});import{d as K,f as z,c as G,r as W,u as e,_ as m,$ as j,m as _,A as B,k as l,a8 as o,a0 as O,G as c,a1 as d,a7 as w,aa as x,a2 as Q,am as X,F as Y}from"./vue-BMCEF3Jf.js";import{u as J,a as Z,L as S,b as ee,c as ae}from"./LoginFormTitle-CzU2a9o1.js";import{u as se,f as te,c as le,b as oe,P}from"./entry/index-C41ZFr6n-1718602026943.js";import{g as ne,a as re,b as ie}from"./captcha-DWZvqVGS.js";import{a as ue}from"./oauthProvider-BvWZvGeL.js";import{C as ce}from"./index-D93fFNl6.js";import{U as H,i as C,O as de,B as b,n as pe,V as ge,W as me,p as fe,R as he,X as ye,Y as ve}from"./antd-BPAr-OsJ.js";const we={class:"pt-4 pb-4"},Ee=K({__name:"LoginForm",setup(F){const f=fe,g=he,i=H.Item,k=C.Password,T=ye,h=ve,p=se(),{t:s}=oe(),{prefixCls:y}=te("login"),I=le(),{setLoginState:R,getLoginState:N}=J(),{getFormRules:$}=Z(),L=z(),u=z(!1),V=G(()=>a.msgType==="email"?s("sys.login.emailPlaceholder"):s("sys.login.mobilePlaceholder")),a=W({msgType:"captcha",account:"",password:"",captcha:"",captchaId:"",imgPath:"",target:"",captchaVerified:""}),{validForm:q}=ae(L),U=G(()=>e(N)===S.LOGIN);function A(){return v(this,null,function*(){const n=yield q();n&&(u.value=!0,a.msgType==="captcha"?I.login({password:n.password,username:n.account,captcha:n.captcha,captchaId:n.captchaId,goHome:!1,mode:"notice"}).then(()=>{u.value=!1,p(P.BASE_HOME)}).catch(()=>{E(),u.value=!1}):a.msgType==="email"?I.loginByEmail({captcha:n.captchaVerified,email:n.target,goHome:!1,mode:"notice"}).then(()=>{u.value=!1,p(P.BASE_HOME)}).catch(()=>{u.value=!1}):a.msgType==="sms"&&I.loginBySms({captcha:n.captchaVerified,phoneNumber:n.target,goHome:!1,mode:"notice"}).then(()=>{u.value=!1,p(P.BASE_HOME)}).catch(()=>{u.value=!1}))})}function E(){return v(this,null,function*(){const n=yield ne("none");n.code===0&&(a.captchaId=n.data.captchaId,a.imgPath=n.data.imgPath)})}function M(){return v(this,null,function*(){return a.msgType=="email"?(yield re({email:a.target})).code==0:(yield ie({phoneNumber:a.target})).code==0})}E();function D(n){return v(this,null,function*(){const t=yield ue({state:new Date().getMilliseconds()+"-"+n,provider:n});t.code===0&&window.open(t.data.URL)})}return(n,t)=>(m(),j(Y,null,[_(l(ee,{class:"enter-x"},null,512),[[B,U.value]]),_(l(e(H),{class:"p-4 enter-x",model:a,rules:e($),ref_key:"formRef",ref:L,onKeypress:X(A,["enter"])},{default:o(()=>[O("div",we,[l(e(T),{value:a.msgType,"onUpdate:value":t[0]||(t[0]=r=>a.msgType=r),"button-style":"solid",size:"large"},{default:o(()=>[l(e(h),{class:"bg-transparent",value:"captcha"},{default:o(()=>[c(d(e(s)("sys.login.captcha")),1)]),_:1}),l(e(h),{class:"bg-transparent",value:"email"},{default:o(()=>[c(d(e(s)("sys.login.email")),1)]),_:1}),l(e(h),{class:"bg-transparent",value:"sms"},{default:o(()=>[c(d(e(s)("sys.login.mobile")),1)]),_:1})]),_:1},8,["value"])]),a.msgType!=="captcha"?(m(),w(e(i),{key:0,name:"target",class:"enter-x"},{default:o(()=>[l(e(C),{size:"large",value:a.target,"onUpdate:value":t[1]||(t[1]=r=>a.target=r),placeholder:V.value,"onUpdate:placeholder":t[2]||(t[2]=r=>V.value=r)},null,8,["value","placeholder"])]),_:1})):x("",!0),a.msgType!=="captcha"?(m(),w(e(i),{key:1,name:"captchaVerified",class:"enter-x"},{default:o(()=>[l(e(ce),{size:"large",value:a.captchaVerified,"onUpdate:value":t[3]||(t[3]=r=>a.captchaVerified=r),count:60,placeholder:e(s)("sys.login.captcha"),"send-code-api":M},null,8,["value","placeholder"])]),_:1})):x("",!0),a.msgType==="captcha"?(m(),w(e(i),{key:2,name:"account",class:"enter-x",rules:[{required:!0,message:e(s)("sys.login.accountPlaceholder")},{max:30,message:e(s)("sys.login.accountMaxLength")}]},{default:o(()=>[l(e(C),{size:"large",value:a.account,"onUpdate:value":t[4]||(t[4]=r=>a.account=r),placeholder:e(s)("sys.login.username"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1},8,["rules"])):x("",!0),a.msgType==="captcha"?(m(),w(e(i),{key:3,name:"password",class:"enter-x",rules:[{required:!0,message:e(s)("sys.login.passwordPlaceholder")},{min:6,max:30,message:e(s)("sys.login.passwordLength")}]},{default:o(()=>[l(e(k),{size:"large",visibilityToggle:"",value:a.password,"onUpdate:value":t[5]||(t[5]=r=>a.password=r),placeholder:e(s)("sys.login.password"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1},8,["rules"])):x("",!0),a.msgType==="captcha"?(m(),w(e(i),{key:4,name:"captcha",class:"enter-x",rules:[{required:!0,len:5,message:e(s)("sys.login.captchaRequired")}]},{default:o(()=>[l(e(C),{size:"large",value:a.captcha,"onUpdate:value":t[6]||(t[6]=r=>a.captcha=r),placeholder:e(s)("sys.login.captcha"),class:"fix-auto-fill bg-transparent"},{suffix:o(()=>[l(e(de),{src:a.imgPath,width:120,height:40,preview:!1,onClick:E,class:"rounded"},null,8,["src"])]),_:1},8,["value","placeholder"])]),_:1},8,["rules"])):x("",!0),_(l(e(i),{name:"captchaId",class:"enter-x"},{default:o(()=>[l(e(C),{value:a.captchaId},null,8,["value"])]),_:1},512),[[B,!1]]),l(e(i),{class:"enter-x"},{default:o(()=>[l(e(b),{type:"primary",size:"large",block:"",onClick:A,loading:u.value},{default:o(()=>[c(d(e(s)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1}),l(e(g),{class:"enter-x",gutter:5},{default:o(()=>[l(e(f),{md:8,xs:24},{default:o(()=>[l(e(b),{block:"",onClick:t[7]||(t[7]=r=>e(R)(e(S).QR_CODE))},{default:o(()=>[c(d(e(s)("sys.login.qrSignInFormTitle")),1)]),_:1})]),_:1}),l(e(f),{md:8,xs:24},{default:o(()=>[l(e(b),{block:"",onClick:t[8]||(t[8]=r=>e(R)(e(S).REGISTER))},{default:o(()=>[c(d(e(s)("sys.login.registerButton")),1)]),_:1})]),_:1}),l(e(f),{md:8,xs:24},{default:o(()=>[l(e(b),{block:"",onClick:t[9]||(t[9]=r=>e(R)(e(S).RESET_PASSWORD))},{default:o(()=>[c(d(e(s)("sys.login.forgetFormTitle")),1)]),_:1})]),_:1})]),_:1}),l(e(pe),{class:"enter-x"},{default:o(()=>[c(d(e(s)("sys.login.otherSignIn")),1)]),_:1}),O("div",{class:Q(["flex justify-evenly enter-x",`${e(y)}-sign-in-way`])},[l(e(ge),{onClick:t[10]||(t[10]=r=>D("github"))}),l(e(me),{onClick:t[11]||(t[11]=r=>D("google"))})],2)]),_:1},8,["model","rules"]),[[B,U.value]])],64))}});export{Ee as _};
