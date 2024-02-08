"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8957:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Getting Started",s={unversionedId:"Getting-Started",id:"Getting-Started",isDocsHomePage:!1,title:"Getting Started",description:"FLAML is a lightweight Python library for efficient automation of machine",source:"@site/docs/Getting-Started.md",sourceDirName:".",slug:"/Getting-Started",permalink:"/FLAML/docs/Getting-Started",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Getting-Started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/FLAML/docs/Installation"}},l=[{value:"Main Features",id:"main-features",children:[],level:3},{value:"Quickstart",id:"quickstart",children:[{value:"(New) AutoGen",id:"new-autogen",children:[],level:4},{value:"Task-oriented AutoML",id:"task-oriented-automl",children:[],level:4},{value:"Tune user-defined function",id:"tune-user-defined-function",children:[],level:4},{value:"Zero-shot AutoML",id:"zero-shot-automl",children:[],level:4}],level:3},{value:"Where to Go Next?",id:"where-to-go-next",children:[],level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"FLAML is a lightweight Python library for efficient automation of machine\nlearning and AI operations. It automates workflow based on large language models, machine learning models, etc.\nand optimizes their performance."),(0,r.kt)("h3",{id:"main-features"},"Main Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FLAML enables building next-gen GPT-X applications based on multi-agent conversations with minimal effort. It simplifies the orchestration, automation and optimization of a complex GPT-X workflow. It maximizes the performance of GPT-X models and augments their weakness."),(0,r.kt)("li",{parentName:"ul"},"For common machine learning tasks like classification and regression, it quickly finds quality models for user-provided data with low computational resources. It is easy to customize or extend."),(0,r.kt)("li",{parentName:"ul"},"It supports fast and economical automatic tuning, capable of handling large search space with heterogeneous evaluation cost and complex constraints/guidance/early stopping.")),(0,r.kt)("p",null,"FLAML is powered by a series of ",(0,r.kt)("a",{parentName:"p",href:"/docs/Research"},"research studies")," from Microsoft Research and collaborators such as Penn State University, Stevens Institute of Technology, University of Washington, and University of Waterloo."),(0,r.kt)("h3",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"Install FLAML from pip: ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install flaml"),". Find more options in ",(0,r.kt)("a",{parentName:"p",href:"/docs/Installation"},"Installation"),"."),(0,r.kt)("p",null,"There are several ways of using flaml:"),(0,r.kt)("h4",{id:"new-autogen"},"(New) ",(0,r.kt)("a",{parentName:"h4",href:"https://microsoft.github.io/autogen/"},"AutoGen")),(0,r.kt)("p",null,"Autogen enables the next-gen GPT-X applications with a generic multi-agent conversation framework.\nIt offers customizable and conversable agents which integrate LLMs, tools and human.\nBy automating chat among multiple capable agents, one can easily make them collectively perform tasks autonomously or with human feedback, including tasks that require using tools via code. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import autogen\nassistant = autogen.AssistantAgent("assistant")\nuser_proxy = autogen.UserProxyAgent("user_proxy")\nuser_proxy.initiate_chat(assistant, message="Show me the YTD gain of 10 largest technology companies as of today.")\n# This initiates an automated chat between the two agents to solve the task\n')),(0,r.kt)("p",null,"Autogen also helps maximize the utility out of the expensive LLMs such as ChatGPT and GPT-4. It offers a drop-in replacement of ",(0,r.kt)("inlineCode",{parentName:"p"},"openai.Completion")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"openai.ChatCompletion")," with powerful functionalites like tuning, caching, error handling, templating. For example, you can optimize generations by LLM with your own tuning data, success metrics and budgets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# perform tuning\nconfig, analysis = autogen.Completion.tune(\n    data=tune_data,\n    metric="success",\n    mode="max",\n    eval_func=eval_func,\n    inference_budget=0.05,\n    optimization_budget=3,\n    num_samples=-1,\n)\n# perform inference for a test instance\nresponse = autogen.Completion.create(context=test_instance, **config)\n')),(0,r.kt)("h4",{id:"task-oriented-automl"},(0,r.kt)("a",{parentName:"h4",href:"/docs/Use-Cases/task-oriented-automl"},"Task-oriented AutoML")),(0,r.kt)("p",null,"With three lines of code, you can start using this economical and fast AutoML engine as a scikit-learn style estimator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nautoml = AutoML()\nautoml.fit(X_train, y_train, task="classification", time_budget=60)\n')),(0,r.kt)("p",null,"It automatically tunes the hyperparameters and selects the best model from default learners such as LightGBM, XGBoost, random forest etc. for the specified time budget 60 seconds. ",(0,r.kt)("a",{parentName:"p",href:"/docs/Use-Cases/task-oriented-automl#customize-automlfit"},"Customizing")," the optimization metrics, learners and search spaces etc. is very easy. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'automl.add_learner("mylgbm", MyLGBMEstimator)\nautoml.fit(X_train, y_train, task="classification", metric=custom_metric, estimator_list=["mylgbm"], time_budget=60)\n')),(0,r.kt)("h4",{id:"tune-user-defined-function"},(0,r.kt)("a",{parentName:"h4",href:"/docs/Use-Cases/Tune-User-Defined-Function"},"Tune user-defined function")),(0,r.kt)("p",null,"You can run generic hyperparameter tuning for a custom function (machine learning or beyond). For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import tune\nfrom flaml.automl.model import LGBMEstimator\n\n\ndef train_lgbm(config: dict) -> dict:\n    # convert config dict to lgbm params\n    params = LGBMEstimator(**config).params\n    # train the model\n    train_set = lightgbm.Dataset(csv_file_name)\n    model = lightgbm.train(params, train_set)\n    # evaluate the model\n    pred = model.predict(X_test)\n    mse = mean_squared_error(y_test, pred)\n    # return eval results as a dictionary\n    return {"mse": mse}\n\n\n# load a built-in search space from flaml\nflaml_lgbm_search_space = LGBMEstimator.search_space(X_train.shape)\n# specify the search space as a dict from hp name to domain; you can define your own search space same way\nconfig_search_space = {hp: space["domain"] for hp, space in flaml_lgbm_search_space.items()}\n# give guidance about hp values corresponding to low training cost, i.e., {"n_estimators": 4, "num_leaves": 4}\nlow_cost_partial_config = {\n    hp: space["low_cost_init_value"]\n    for hp, space in flaml_lgbm_search_space.items()\n    if "low_cost_init_value" in space\n}\n# run the tuning, minimizing mse, with total time budget 3 seconds\nanalysis = tune.run(\n    train_lgbm, metric="mse", mode="min", config=config_search_space,\n    low_cost_partial_config=low_cost_partial_config, time_budget_s=3, num_samples=-1,\n)\n')),(0,r.kt)("p",null,"Please see this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/test/tune_example.py"},"script")," for the complete version of the above example."),(0,r.kt)("h4",{id:"zero-shot-automl"},(0,r.kt)("a",{parentName:"h4",href:"/docs/Use-Cases/Zero-Shot-AutoML"},"Zero-shot AutoML")),(0,r.kt)("p",null,"FLAML offers a unique, seamless and effortless way to leverage AutoML for the commonly used classifiers and regressors such as LightGBM and XGBoost. For example, if you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"lightgbm.LGBMClassifier")," as your current learner, all you need to do is to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"from lightgbm import LGBMClassifier")," by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from flaml.default import LGBMClassifier\n")),(0,r.kt)("p",null,"Then, you can use it just like you use the original ",(0,r.kt)("inlineCode",{parentName:"p"},"LGMBClassifier"),". Your other code can remain unchanged. When you call the ",(0,r.kt)("inlineCode",{parentName:"p"},"fit()")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"flaml.default.LGBMClassifier"),", it will automatically instantiate a good data-dependent hyperparameter configuration for your dataset, which is expected to work better than the default configuration."),(0,r.kt)("h3",{id:"where-to-go-next"},"Where to Go Next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand the use cases for ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/autogen/"},"AutoGen"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/Use-Cases/Task-Oriented-Automl"},"Task-oriented AutoML"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/Use-Cases/Tune-User-Defined-Function"},"Tune user-defined function")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/Use-Cases/Zero-Shot-AutoML"},"Zero-shot AutoML"),"."),(0,r.kt)("li",{parentName:"ul"},'Find code examples under "Examples": from ',(0,r.kt)("a",{parentName:"li",href:"/docs/Examples/AutoGen-AgentChat"},"AutoGen - AgentChat")," to ",(0,r.kt)("a",{parentName:"li",href:"/docs/Examples/Tune-PyTorch"},"Tune - PyTorch"),"."),(0,r.kt)("li",{parentName:"ul"},"Learn about ",(0,r.kt)("a",{parentName:"li",href:"/docs/Research"},"research")," around FLAML and check ",(0,r.kt)("a",{parentName:"li",href:"/blog"},"blogposts"),"."),(0,r.kt)("li",{parentName:"ul"},"Chat on ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/Cppx2vSPVP"},"Discord"),".")),(0,r.kt)("p",null,"If you like our project, please give it a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/stargazers"},"star")," on GitHub. If you are interested in contributing, please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/Contribute"},"Contributor's Guide"),"."),(0,r.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=microsoft&repo=FLAML&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"}))}u.isMDXComponent=!0}}]);