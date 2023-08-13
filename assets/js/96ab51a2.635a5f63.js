"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3425:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"math_utils",title:"autogen.math_utils"},o=void 0,i={unversionedId:"reference/autogen/math_utils",id:"reference/autogen/math_utils",isDocsHomePage:!1,title:"autogen.math_utils",description:"solve\\_problem",source:"@site/docs/reference/autogen/math_utils.md",sourceDirName:"reference/autogen",slug:"/reference/autogen/math_utils",permalink:"/FLAML/docs/reference/autogen/math_utils",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/autogen/math_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"math_utils",title:"autogen.math_utils"},sidebar:"referenceSideBar",previous:{title:"code_utils",permalink:"/FLAML/docs/reference/autogen/code_utils"},next:{title:"retrieve_utils",permalink:"/FLAML/docs/reference/autogen/retrieve_utils"}},s=[{value:"solve_problem",id:"solve_problem",children:[],level:4},{value:"remove_boxed",id:"remove_boxed",children:[],level:4},{value:"last_boxed_only_string",id:"last_boxed_only_string",children:[],level:4},{value:"is_equiv",id:"is_equiv",children:[],level:4},{value:"is_equiv_chain_of_thought",id:"is_equiv_chain_of_thought",children:[],level:4},{value:"eval_math_responses",id:"eval_math_responses",children:[],level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"solve_problem"},"solve","_","problem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def solve_problem(problem: str, **config) -> str\n")),(0,a.kt)("p",null,"(Experimental) Solve the math problem."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"problem")," ",(0,a.kt)("em",{parentName:"li"},"str")," - The problem statement."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config")," ",(0,a.kt)("em",{parentName:"li"},"Optional, dict")," - The configuration for the API call.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str")," - The solution to the problem.")),(0,a.kt)("h4",{id:"remove_boxed"},"remove","_","boxed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def remove_boxed(string: str) -> Optional[str]\n")),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hendrycks/math"},"https://github.com/hendrycks/math"),"\nExtract the text within a ","\\","boxed{...} environment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},'remove_boxed("',"\\","boxed{","\\",'frac{2}{3}}")'))),(0,a.kt)("p",null,"  ","\\","frac{2}{3}"),(0,a.kt)("h4",{id:"last_boxed_only_string"},"last","_","boxed","_","only","_","string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def last_boxed_only_string(string: str) -> Optional[str]\n")),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hendrycks/math"},"https://github.com/hendrycks/math"),"\nExtract the last ","\\","boxed{...} or ","\\","fbox{...} element from a string."),(0,a.kt)("h4",{id:"is_equiv"},"is","_","equiv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def is_equiv(str1: Optional[str], str2: Optional[str]) -> float\n")),(0,a.kt)("p",null,"Returns (as a float) whether two strings containing math are equivalent up to differences of formatting in"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"units"),(0,a.kt)("li",{parentName:"ul"},"fractions"),(0,a.kt)("li",{parentName:"ul"},"square roots"),(0,a.kt)("li",{parentName:"ul"},"superfluous LaTeX.\nSource: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hendrycks/math"},"https://github.com/hendrycks/math"))),(0,a.kt)("h4",{id:"is_equiv_chain_of_thought"},"is","_","equiv","_","chain","_","of","_","thought"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def is_equiv_chain_of_thought(str1: str, str2: str) -> float\n")),(0,a.kt)("p",null,"Strips the solution first before calling ",(0,a.kt)("inlineCode",{parentName:"p"},"is_equiv"),"."),(0,a.kt)("h4",{id:"eval_math_responses"},"eval","_","math","_","responses"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def eval_math_responses(responses, solution=None, **args)\n")),(0,a.kt)("p",null,"Select a response for a math problem using voting, and check if the response is correct if the solution is provided."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"responses")," ",(0,a.kt)("em",{parentName:"li"},"list")," - The list of responses."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"solution")," ",(0,a.kt)("em",{parentName:"li"},"str")," - The canonical solution.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dict")," - The success metrics.")))}p.isMDXComponent=!0}}]);