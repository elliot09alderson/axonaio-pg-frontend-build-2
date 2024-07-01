"use strict";(self.webpackChunkaxonaio=self.webpackChunkaxonaio||[]).push([[454,188],{47188:function(e,s,a){a.r(s);var r=a(29439),t=a(72791),n=a(57689),l=a(70828),c=(a(66500),a(18052),a(11912)),i=a(74600),o=a(27441),d=a(80184);s.default=function(e){e.isTokenValid;var s=e.merchantLogo,a=(0,n.s0)(),m=(0,t.useState)(""),u=(0,r.Z)(m,2),x=u[0],f=u[1],p=(0,t.useState)(""),h=(0,r.Z)(p,2),w=h[0],j=h[1],g=(0,i.Ds)().enqueueSnackbar;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2  min-h-screen ",children:[(0,d.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,d.jsxs)("form",{action:"#",method:"post",className:"lg:max-w-[400px] flex flex-col justify-center  mb-4 sm:max-w-[300px] max-w-[80%]",children:[(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("img",{src:s,className:"w-32 mx-auto pb-2"}),(0,d.jsx)("p",{className:" text-center font-medium text-slate-800 my-4 mb-6 select-none mt-2 drop-shadow-sm",children:"Forgot Password"})]}),(0,d.jsx)("div",{className:"form-group first my-4 flex flex-col gap-5",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("input",{type:"email",className:"py-1 h-10 rounded-sm mb-2 sm:w-full w-full  pl-2 focus:ring-1 focus:outline-none ring-1 ring-blue-400",value:x,onChange:function(e){return f(e.target.value)},placeholder:"Email",name:"email",focused:!0,required:!0}),w&&(0,d.jsx)(o.U2,{className:"font-normal pl-1",children:w})]})}),(0,d.jsx)("div",{className:"my-2  flex  items-centers justify-center",children:(0,d.jsx)("input",{type:"submit",onClick:function(e){e.preventDefault();/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(x)?c.Z.post("".concat("http://10.0.3.214:5000","/api/v1/user/forgotpassword"),{email:x}).then((function(e){e.data.result?(g("reset password link has sent in your gmail!"),a("/")):(g(e.data.message),j(e.data.message))})).catch((function(e){g(e.response.data.message)})):j("Please enter a valid email address.")},value:" Send reset link",className:"w-screen py-2 bg-[#552288] text-center text-white rounded-lg "})}),(0,d.jsxs)("div",{className:"mt-4",children:[(0,d.jsxs)("p",{className:"mb-1 justify-center flex items-center gap-1 text-xs  text-[#552288] font-medium",children:[(0,d.jsx)("span",{className:" sm:inline  ",children:"already have otp "}),(0,d.jsx)("span",{onClick:function(){return a("/user/reset-password")},className:" cursor-pointer underline transition-all hover:opacity-70",children:"reset passsword"}),(0,d.jsx)(l.OJV,{})]}),(0,d.jsxs)("p",{className:"mb-1 justify-center flex items-center gap-1 text-xs  text-[#552288] font-medium",children:[(0,d.jsx)("span",{className:" sm:inline  ",children:"Go back to "}),(0,d.jsx)("span",{onClick:function(){return a("/")},className:" cursor-pointer underline transition-all hover:opacity-70",children:"Log in"}),(0,d.jsx)(l.OJV,{})]}),(0,d.jsxs)("p",{className:"text-xs pt-2 sm:text-md  sm:text-center sm:opacity-80 text-left font-medium opacity-50 ",children:["Protected by reCAPTCHA. ",(0,d.jsx)("br",{})," Google"," ",(0,d.jsx)("a",{href:"#",children:"Privacy Policy "}),"&",(0,d.jsx)("a",{href:"#",children:" Terms of Service"})]})]})]})}),(0,d.jsx)("div",{className:" min-h-[100vh] hidden flex-col bg-[#440a64] min-w-[50%] p-16 sm:flex items-center justify-center"})]})})}},2454:function(e,s,a){a.r(s),a.d(s,{default:function(){return w}});var r=a(4942),t=a(74165),n=a(1413),l=a(15861),c=a(29439),i=a(72791),o=a(57689);a(79009);var d=a.p+"static/media/undraw_remotely_2j6y.dd89de4d40438030c0df702eeb30f7fe.svg",m=(a(66500),a(18052),a(11912)),u=a(74600),x=(a(47188),a(27441)),f=a(16856),p=a(41213),h=a(80184);var w=function(){var e=(0,u.Ds)().enqueueSnackbar,s=(0,o.s0)(),a=(0,i.useState)(!1),w=(0,c.Z)(a,2),j=(w[0],w[1],(0,i.useState)({password:"",confirmPassword:""})),g=(0,c.Z)(j,2),v=g[0],b=g[1],N=(0,i.useState)({passwordError:"",confirmPasswordError:""}),y=(0,c.Z)(N,2),k=y[0],Z=y[1],P=(0,i.useState)(!0),C=(0,c.Z)(P,2),E=(C[0],C[1],function(){var a=(0,l.Z)((0,t.Z)().mark((function a(r){var l;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),!k.passwordError&&!k.confirmPasswordError){a.next=5;break}Z((0,n.Z)((0,n.Z)({},k),{},{passwordError:"Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."})),a.next=26;break;case 5:if(a.prev=5,v.password!==v.confirmPassword){a.next=20;break}if(l=window.location.search.substring(7),console.log("substringtoken",l),!l){a.next=16;break}return a.next=12,m.Z.patch("".concat("http://10.0.3.214:5000","/api/v1/user/update-password"),null,{params:{password:v.password,token:l}});case 12:a.sent&&(e("password has updated successfully!"),s("/merchants/login")),a.next=18;break;case 16:e("session expired ..."),s("/user/forgot-password");case 18:a.next=21;break;case 20:Z((0,n.Z)((0,n.Z)({},k),{},{confirmPasswordError:"password does not match"}));case 21:a.next=26;break;case 23:a.prev=23,a.t0=a.catch(5),e(a.t0.response.data.message);case 26:case"end":return a.stop()}}),a,null,[[5,23]])})));return function(e){return a.apply(this,arguments)}}()),S=function(e){b((0,n.Z)((0,n.Z)({},v),{},(0,r.Z)({},e.target.name,e.target.value)));/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(v.password)?Z({password:"",confirmPassword:""}):Z((0,n.Z)((0,n.Z)({},k),{},{passwordError:"Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."}))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"w-full",children:(0,h.jsxs)("div",{className:" flex  items-center justify-center  w-full",children:[(0,h.jsx)("div",{className:"w-full flex",children:(0,h.jsxs)("form",{action:"#",method:"post",className:"w-full",children:[(0,h.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,h.jsx)("h1",{className:"text-center my-12 underline text-3xl font-semibold",children:"Reset Password"}),(0,h.jsx)(f.hHI,{size:30})]}),(0,h.jsxs)("div",{className:"w-full flex flex-col  items-center  gap-8",children:[(0,h.jsxs)("div",{className:"flex flex-col gap-1 lg:w-96 w-72 ",children:[(0,h.jsx)("label",{className:"text-black",children:"Password"}),(0,h.jsx)("input",{name:"password",type:"password",className:"lg:w-96 w-72  rounded-lg",value:v.password,onChange:S,placeholder:"Password",focused:!0,required:!0}),(null===k||void 0===k?void 0:k.passwordError)&&(0,h.jsx)(x.U2,{children:k.passwordError})]}),(0,h.jsxs)("div",{className:"flex flex-col gap-1 lg:w-96 w-72",children:[(0,h.jsx)("label",{className:"text-black",children:"Confirm Password"}),(0,h.jsx)("input",{name:"confirmPassword",type:"password",className:"lg:w-96 w-72 rounded-lg",value:v.confirmPassword,onChange:S,placeholder:"Confirm Password",focused:!0,required:!0}),(null===k||void 0===k?void 0:k.confirmPasswordError)&&(0,h.jsx)(x.U2,{children:k.confirmPasswordError})]}),(0,h.jsx)("button",{type:"submit",onClick:function(e){return E(e)},value:" Submit",className:"tairo-bg-blue px-5 py-2 rounded-lg text-white lg:w-96 w-72 mt-4 ",children:"Submit"}),(0,h.jsxs)("div",{className:"flex ",children:[(0,h.jsx)("p",{className:"cursor-pointer text-sm underline",onClick:function(){return s("/merchant/login")},children:"Go back to Login"}),(0,h.jsx)(p.Z4w,{size:20,className:""})]})]})]})}),(0,h.jsx)("div",{className:"hidden lg:flex w-full  items-center justify-center",children:(0,h.jsx)("img",{src:d,alt:"Image",className:""})})]})})})}},66500:function(){},18052:function(){}}]);
//# sourceMappingURL=454.105ac344.chunk.js.map