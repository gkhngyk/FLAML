"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8942],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return g}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),g=a,d=s["".concat(l,".").concat(g)]||s[g]||f[g]||i;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4082:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={sidebar_label:"trainer",title:"nlp.huggingface.trainer"},l=void 0,u={unversionedId:"reference/nlp/huggingface/trainer",id:"reference/nlp/huggingface/trainer",isDocsHomePage:!1,title:"nlp.huggingface.trainer",description:"TrainerForAuto Objects",source:"@site/docs/reference/nlp/huggingface/trainer.md",sourceDirName:"reference/nlp/huggingface",slug:"/reference/nlp/huggingface/trainer",permalink:"/FLAML/docs/reference/nlp/huggingface/trainer",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/nlp/huggingface/trainer.md",tags:[],version:"current",frontMatter:{sidebar_label:"trainer",title:"nlp.huggingface.trainer"},sidebar:"referenceSideBar",previous:{title:"switch_head_auto",permalink:"/FLAML/docs/reference/nlp/huggingface/switch_head_auto"},next:{title:"utils",permalink:"/FLAML/docs/reference/nlp/utils"}},p=[{value:"TrainerForAuto Objects",id:"trainerforauto-objects",children:[{value:"evaluate",id:"evaluate",children:[],level:4}],level:2}],f={toc:p};function s(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"trainerforauto-objects"},"TrainerForAuto Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class TrainerForAuto(TFTrainer)\n")),(0,i.kt)("h4",{id:"evaluate"},"evaluate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def evaluate(eval_dataset=None, ignore_keys=None, metric_key_prefix="eval", is_seq2seq=False)\n')),(0,i.kt)("p",null,"Overriding transformers.Trainer.evaluate by saving metrics and checkpoint path."))}s.isMDXComponent=!0}}]);