(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9101:function(e,t,s){Promise.resolve().then(s.bind(s,5880))},5880:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var l=s(4357),r=s(6439),a=s(2091),n=s(8892);function o(){let e=(0,a.useRouter)(),[t,s]=(0,r.useState)(""),[o,i]=(0,r.useState)([{role:"system",content:"アーニャは漫画のキャラクターで、4歳の女の子です。周囲の人間の思惑を読むことができる超能力を持っています。あなたはアーニャになりきってください。"}]),[d,c]=(0,r.useState)("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"),[u,b]=(0,r.useState)(""),[g,h]=(0,r.useState)(""),[m,p]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=e=>{b(e.detail.title),h(e.detail.url)};return window.addEventListener("setDataFromExtension",e),()=>{window.removeEventListener("setDataFromExtension",e)}},[]);let x=async e=>{p(!0),e.preventDefault();let l=[...o,{role:"user",content:t}];i(l),s(""),console.log(l);let r=new n.Pp({apiKey:d,dangerouslyAllowBrowser:!0}),a=await r.chat.completions.create({model:"ft:gpt-3.5-turbo-0613:personal::7x803BiH",messages:l,stream:!0}),c="",u="assistant";for await(let e of a){var b,g,h,m,x,f;(null===(g=e.choices[0])||void 0===g?void 0:null===(b=g.delta)||void 0===b?void 0:b.role)&&(u=null===(f=e.choices[0])||void 0===f?void 0:null===(x=f.delta)||void 0===x?void 0:x.role),i([...l,{role:u,content:c+=(null===(m=e.choices[0])||void 0===m?void 0:null===(h=m.delta)||void 0===h?void 0:h.content)||""}])}p(!1)};return d?(0,l.jsxs)("div",{className:"h-screen flex flex-col bg-gray-200 dark:bg-gray-800",children:[(0,l.jsx)("div",{className:"p-4 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-600",children:(0,l.jsx)("h1",{className:"text-3xl text-black text-center font-bold",children:"OshiRemind"})}),(0,l.jsx)("div",{className:"flex-1 overflow-y-auto p-4",children:o.map((e,t)=>"system"!==e.role&&(0,l.jsx)("div",{className:"flex mb-2 ".concat("user"===e.role?"justify-end":"justify-start"),children:(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"px-4 py-2 rounded-lg whitespace-pre-line flex flex-col ".concat("user"===e.role?"bg-blue-500 text-white dark:bg-blue-700":"bg-green-500 dark:bg-green-700 text-white"),children:[(0,l.jsx)("div",{className:"bg-white w-14 h-14 rounded-full p-2 mb-2 flex ".concat("user"===e.role?"justify-start":"justify-end"),children:(0,l.jsx)("img",{className:"",src:"user"===e.role?"https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png":"https://1.bp.blogspot.com/-VthzAuEo8fc/X96mhYv33UI/AAAAAAABdBs/HXCc0J0WsHUMSuQ00UZ5UuLPUXatMIq-wCNcBGAsYHQ/s831/onepiece01_luffy2.png",alt:"Icon"})}),(0,l.jsx)("div",{children:e.content})]})})},t))}),(0,l.jsx)("div",{className:"p-4 bg-gray-300 dark:bg-gray-700",children:(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("form",{onSubmit:x,className:"flex-1 flex",children:[(0,l.jsx)("input",{value:t,onChange:e=>s(e.target.value),className:"flex-1 rounded p-2 mr-2 dark:bg-gray-800 dark:text-white",placeholder:"Enter your message..."}),(0,l.jsx)("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded",disabled:m,children:m?"Sending...":"Send"})]}),(0,l.jsx)("button",{onClick:()=>e.push("/todo-list"),className:"bg-blue-500 ml-2 text-white py-2 px-4 rounded",children:"Go to Task Management Page"})]})})]}):(0,l.jsx)("div",{className:"h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800",children:(0,l.jsxs)("div",{className:"p-4 bg-white dark:bg-gray-900 rounded shadow",children:[(0,l.jsx)("h1",{className:"text-xl mb-4",children:"Enter your OpenAI API Key"}),(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),c(e.currentTarget.apiKey.value)},children:[(0,l.jsx)("input",{name:"apiKey",type:"password",placeholder:"API Key",className:"p-2 mb-4 border rounded w-full dark:bg-gray-800 dark:text-white"}),(0,l.jsx)("button",{type:"submit",className:"bg-blue-500 text-white rounded-r p-2",children:"Send"})]})]})})}}},function(e){e.O(0,[191,702,431,744],function(){return e(e.s=9101)}),_N_E=e.O()}]);