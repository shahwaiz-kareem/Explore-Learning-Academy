(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{2431:function(){},8928:function(e,t,n){Promise.resolve().then(n.t.bind(n,696,23)),Promise.resolve().then(n.bind(n,6402)),Promise.resolve().then(n.bind(n,7422)),Promise.resolve().then(n.bind(n,8936)),Promise.resolve().then(n.bind(n,8111)),Promise.resolve().then(n.bind(n,3921)),Promise.resolve().then(n.bind(n,2483))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var r=n(5601),s=n.n(r)},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var r=n(231),s=n.n(r)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},getImageProps:function(){return l}});let r=n(9920),s=n(497),a=n(8173),o=r._(n(1241));function l(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let i=a.Image},9350:function(e,t,n){"use strict";n.d(t,{w_:function(){return i}});var r=n(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(s),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function i(e){return function(t){return r.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var n,s=e.attr,a=e.size,i=e.title,c=l(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return t(e)}):t(s)}},6402:function(e,t,n){"use strict";var r=n(7437),s=n(2483),a=n(2265);t.default=e=>{let{children:t}=e,{showMenu:n}=(0,a.useContext)(s.T);return(0,r.jsx)("main",{className:"w-full transition-all  duration-300 bg-gray-200 min-h-screen ".concat(n?"md:ml-64  md:w-[calc(100%-256px)]":""),children:t})}},7422:function(e,t,n){"use strict";var r=n(7437),s=n(2483),a=n(2265);t.default=()=>{let{setShowMenu:e}=(0,a.useContext)(s.T);return(0,r.jsx)("div",{className:"py-6 px-6 bg-[#f8f4f3] flex items-center justify-between shadow-md shadow-black/5 sticky top-0 left-0 z-30",children:(0,r.jsxs)("div",{className:"flex items-center justify-center gap-2 flex-row-reverse",children:[(0,r.jsx)("a",{href:"#",className:"flex md:hidden     border-b border-b-gray-800",children:(0,r.jsxs)("h2",{className:"font-bold text-lg sm:text-2xl",children:["Mountain",(0,r.jsx)("span",{className:"bg-green-400 text-white px-2 rounded-md",children:"Coaders"})]})}),(0,r.jsxs)("button",{type:"button",onClick:()=>e(e=>!e),className:"text-lg flex gap-0.5 flex-col text-gray-900 font-semibold z-40 relative",children:[(0,r.jsx)("div",{className:"w-7 h-1 rounded-full bg-gray-700"}),(0,r.jsx)("div",{className:"w-7 h-1 rounded-full bg-gray-700"}),(0,r.jsx)("div",{className:"w-7 h-1 rounded-full bg-gray-700"})]})]})})}},8936:function(e,t,n){"use strict";n.d(t,{default:function(){return h}});var r=n(7437),s=n(7138),a=n(6463),o=()=>{let e=(0,a.useRouter)(),t=async()=>{document.cookie="dashboard-token=; Max-Age=0; path=/;",e.push("/auth/signin")};return(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:t,className:"px-4 py-2 w-full bg-black rounded-lg text-white ",children:"Logout"})})},l=n(2034),i=n(3850),c=n(1379);let u=[{heading:"ADMIN",pages:[{name:"Dashboard",href:"/dashboard",icon:l.Ez2},{name:"Batches",href:"/dashboard/batches",icon:c.Zev},{name:"Contact info",href:"/dashboard/contact",icon:i.a54},{name:"Settings",href:"/dashboard/settings",icon:i.MBj},{name:"FAQs",href:"/dashboard/faqs",icon:c.KpA}]},{heading:"Student Resources",pages:[{name:"Notes&code",href:"/dashboard/notes",icon:i.lOc}]}];var d=n(2265),f=n(2483),m=n(6648),h=()=>{let{showMenu:e}=(0,d.useContext)(f.T);return(0,r.jsxs)("div",{className:"fixed top-0 left-0 h-full w-64 bg-[#f8f4f3] p-2 z-20 transition-transform duration-300 transform ".concat(e?"translate-x-0":"-translate-x-full"),children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)(m.default,{className:" ",src:"/assets/logo.png",height:20,width:70})}),u.map(e=>(0,r.jsxs)("ul",{className:"mt-12 md:mt-6",children:[(0,r.jsx)("span",{className:"text-gray-400 mt-2 font-bold",children:e.heading}),e.pages.map((e,t)=>(0,r.jsx)("li",{className:"mb-6 group",children:(0,r.jsxs)(s.default,{href:e.href,className:"flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100",children:[(0,r.jsx)(e.icon,{className:"ri-home-2-line mr-3 text-lg"}),(0,r.jsx)("span",{className:"text-sm",children:e.name})]})},"".concat(e.name,"-").concat(e.href)))]},"".concat(e.heading,"-").concat(JSON.stringify(e.pages)))),(0,r.jsx)(o,{})]})}},8111:function(e,t,n){"use strict";var r=n(7437),s=n(2483),a=n(2265);t.default=()=>{let{notify:e,setNotify:t}=(0,a.useContext)(s.T);return(0,a.useEffect)(()=>{if(e.notify){let e=setTimeout(()=>{t({notify:!1,success:!1,message:""})},8e3);return()=>clearTimeout(e)}},[e,t]),(0,r.jsxs)("div",{className:"".concat(e.notify?"translate-x-0 right-1":"translate-x-full"," transition-all fixed right-0  bg-white shadow-lg rounded-xl flex items-center max-w-xs sm:max-w-sm md:max-w-md z-20 lg:max-w-lg px-4 py-3 mt-2"),children:[(0,r.jsx)("div",{className:"".concat(e.success?"bg-green-500":"bg-red-500"," h-8 w-2 flex-shrink-0 rounded-l-xl")}),(0,r.jsx)("div",{className:"ml-3 text-gray-900 text-sm",children:e.message})]})}},3921:function(e,t,n){"use strict";var r=n(7437),s=n(5811);t.default=e=>{let{color:t}=e;return(0,r.jsx)(s.Cd,{height:"2.6px",color:t,options:{showSpinner:!1},shallowRouting:!0})}},2483:function(e,t,n){"use strict";n.d(t,{RootContextProvider:function(){return l},T:function(){return o}});var r=n(7437),s=n(6463),a=n(2265);let o=(0,a.createContext)(),l=e=>{let{children:t}=e,n=(0,s.usePathname)(),[l,i]=(0,a.useState)(n.includes("dashboard")),[c,u]=(0,a.useState)({notify:!1,success:!1,message:!0});return(0,r.jsx)(o.Provider,{value:{showMenu:l,setShowMenu:i,notify:c,setNotify:u},children:t})}},696:function(){}},function(e){e.O(0,[562,712,115,929,881,231,173,811,971,23,744],function(){return e(e.s=8928)}),_N_E=e.O()}]);