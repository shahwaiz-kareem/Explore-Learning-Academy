(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{5922:function(e,s,t){Promise.resolve().then(t.bind(t,8550))},377:function(e,s,t){"use strict";t.d(s,{GK:function(){return r},j6:function(){return a}}),t(4590);var n=t(8064),r=(0,n.$)("5438b481def50e893170aec41126c02bf9b6f922"),a=(0,n.$)("9e8da348598ec651eca75d16af0dba791789e6c7");(0,n.$)("c86108421ec082806636d0df36adb06980d0550e")},8550:function(e,s,t){"use strict";t.d(s,{default:function(){return c}});var n=t(7437),r=t(9343),a=t(1014);let{z:o}=t(2896),l=o.object({name:o.string().min(3,"Name must be at least 3 characters long").nonempty("Name is required"),email:o.string().email("Invalid email address").nonempty("Email is required"),phone:o.string().regex(/^[0-9]{10,14}$/,"Phone number must be between 10 to 14 digits"),message:o.string().min(10,"Message must be at least 10 characters long").nonempty("Message is required")});var i=t(377),d=t(2265),m=t(2483),c=()=>{let{setNotify:e}=(0,d.useContext)(m.T),{register:s,handleSubmit:t,formState:{errors:o,isSubmitting:c},reset:u}=(0,r.cI)({resolver:(0,a.F)(l)}),g=async s=>{let t=await (0,i.j6)(s);e({notify:!0,success:t.success,message:t.message}),u()};return(0,n.jsxs)("div",{className:"max-w-lg mx-auto py-10 px-5",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold text-center mb-6",children:"Contact Us"}),(0,n.jsxs)("form",{onSubmit:t(g),className:"space-y-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block mb-1 text-lg font-medium",htmlFor:"name",children:"Name"}),(0,n.jsx)("input",{type:"text",id:"name",className:"w-full px-4 py-2 border ".concat(o.name?"border-red-500":"border-gray-300"," rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"),...s("name")}),o.name&&(0,n.jsx)("p",{className:"text-red-500 mt-1 text-sm",children:o.name.message})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block mb-1 text-lg font-medium",htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{type:"email",id:"email",className:"w-full px-4 py-2 border ".concat(o.email?"border-red-500":"border-gray-300"," rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"),...s("email")}),o.email&&(0,n.jsx)("p",{className:"text-red-500 mt-1 text-sm",children:o.email.message})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block mb-1 text-lg font-medium",htmlFor:"phone",children:"Phone Number"}),(0,n.jsx)("input",{type:"tel",id:"phone",className:"w-full px-4 py-2 border ".concat(o.phone?"border-red-500":"border-gray-300"," rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"),...s("phone")}),o.phone&&(0,n.jsx)("p",{className:"text-red-500 mt-1 text-sm",children:o.phone.message})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block mb-1 text-lg font-medium",htmlFor:"message",children:"Message or Question"}),(0,n.jsx)("textarea",{id:"message",rows:"5",className:"w-full px-4 py-2 border ".concat(o.message?"border-red-500":"border-gray-300"," rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"),...s("message")}),o.message&&(0,n.jsx)("p",{className:"text-red-500 mt-1 text-sm",children:o.message.message})]}),(0,n.jsx)("button",{type:"submit",disabled:c,className:"bg-gradient-to-l px-2 from-blue-400 via-teal-400 to-green-300 w-full py-3 bg-green-500 text-white font-bold rounded-md shadow-md hover:bg-green-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed",children:c?"Sending...":"Send Message"})]})]})}},2483:function(e,s,t){"use strict";t.d(s,{RootContextProvider:function(){return l},T:function(){return o}});var n=t(7437),r=t(6463),a=t(2265);let o=(0,a.createContext)(),l=e=>{let{children:s}=e,t=(0,r.usePathname)(),[l,i]=(0,a.useState)(t.includes("dashboard")),[d,m]=(0,a.useState)({notify:!1,success:!1,message:!0});return(0,n.jsx)(o.Provider,{value:{showMenu:l,setShowMenu:i,notify:d,setNotify:m},children:s})}}},function(e){e.O(0,[657,896,971,23,744],function(){return e(e.s=5922)}),_N_E=e.O()}]);