"use strict";(self.webpackChunkaxonaio=self.webpackChunkaxonaio||[]).push([[188],{47188:function(e,s,t){t.r(s);var a=t(29439),n=t(72791),i=t(57689),r=t(70828),l=(t(66500),t(18052),t(11912)),c=t(74600),o=t(27441),m=t(80184);s.default=function(e){e.isTokenValid;var s=e.merchantLogo,t=(0,i.s0)(),d=(0,n.useState)(""),u=(0,a.Z)(d,2),x=u[0],f=u[1],p=(0,n.useState)(""),h=(0,a.Z)(p,2),j=h[0],g=h[1],v=(0,c.Ds)().enqueueSnackbar;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2  min-h-screen ",children:[(0,m.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,m.jsxs)("form",{action:"#",method:"post",className:"lg:max-w-[400px] flex flex-col justify-center  mb-4 sm:max-w-[300px] max-w-[80%]",children:[(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("img",{src:s,className:"w-32 mx-auto pb-2"}),(0,m.jsx)("p",{className:" text-center font-medium text-slate-800 my-4 mb-6 select-none mt-2 drop-shadow-sm",children:"Forgot Password"})]}),(0,m.jsx)("div",{className:"form-group first my-4 flex flex-col gap-5",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("input",{type:"email",className:"py-1 h-10 rounded-sm mb-2 sm:w-full w-full  pl-2 focus:ring-1 focus:outline-none ring-1 ring-blue-400",value:x,onChange:function(e){return f(e.target.value)},placeholder:"Email",name:"email",focused:!0,required:!0}),j&&(0,m.jsx)(o.U2,{className:"font-normal pl-1",children:j})]})}),(0,m.jsx)("div",{className:"my-2  flex  items-centers justify-center",children:(0,m.jsx)("input",{type:"submit",onClick:function(e){e.preventDefault();/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(x)?l.Z.post("".concat("http://10.0.3.214:5000","/api/v1/user/forgotpassword"),{email:x}).then((function(e){e.data.result?(v("reset password link has sent in your gmail!"),t("/")):(v(e.data.message),g(e.data.message))})).catch((function(e){v(e.response.data.message)})):g("Please enter a valid email address.")},value:" Send reset link",className:"w-screen py-2 bg-[#552288] text-center text-white rounded-lg "})}),(0,m.jsxs)("div",{className:"mt-4",children:[(0,m.jsxs)("p",{className:"mb-1 justify-center flex items-center gap-1 text-xs  text-[#552288] font-medium",children:[(0,m.jsx)("span",{className:" sm:inline  ",children:"already have otp "}),(0,m.jsx)("span",{onClick:function(){return t("/user/reset-password")},className:" cursor-pointer underline transition-all hover:opacity-70",children:"reset passsword"}),(0,m.jsx)(r.OJV,{})]}),(0,m.jsxs)("p",{className:"mb-1 justify-center flex items-center gap-1 text-xs  text-[#552288] font-medium",children:[(0,m.jsx)("span",{className:" sm:inline  ",children:"Go back to "}),(0,m.jsx)("span",{onClick:function(){return t("/")},className:" cursor-pointer underline transition-all hover:opacity-70",children:"Log in"}),(0,m.jsx)(r.OJV,{})]}),(0,m.jsxs)("p",{className:"text-xs pt-2 sm:text-md  sm:text-center sm:opacity-80 text-left font-medium opacity-50 ",children:["Protected by reCAPTCHA. ",(0,m.jsx)("br",{})," Google"," ",(0,m.jsx)("a",{href:"#",children:"Privacy Policy "}),"&",(0,m.jsx)("a",{href:"#",children:" Terms of Service"})]})]})]})}),(0,m.jsx)("div",{className:" min-h-[100vh] hidden flex-col bg-[#440a64] min-w-[50%] p-16 sm:flex items-center justify-center"})]})})}},66500:function(){},18052:function(){}}]);
//# sourceMappingURL=188.870bc435.chunk.js.map