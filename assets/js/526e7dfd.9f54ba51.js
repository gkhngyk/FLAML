"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8468],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=s,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,l=new Array(n);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8847:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=r(7462),s=r(3366),n=(r(7294),r(3905)),l=["components"],o={sidebar_label:"model",title:"model"},i=void 0,c={unversionedId:"reference/model",id:"reference/model",isDocsHomePage:!1,title:"model",description:"BaseEstimator Objects",source:"@site/docs/reference/model.md",sourceDirName:"reference",slug:"/reference/model",permalink:"/FLAML/docs/reference/model",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/model.md",tags:[],version:"current",frontMatter:{sidebar_label:"model",title:"model"},sidebar:"referenceSideBar",previous:{title:"ml",permalink:"/FLAML/docs/reference/ml"}},p=[{value:"BaseEstimator Objects",id:"baseestimator-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"model",id:"model",children:[],level:4},{value:"estimator",id:"estimator",children:[],level:4},{value:"fit",id:"fit",children:[],level:4},{value:"predict",id:"predict",children:[],level:4},{value:"predict_proba",id:"predict_proba",children:[],level:4},{value:"search_space",id:"search_space",children:[],level:4},{value:"size",id:"size",children:[],level:4},{value:"cost_relative2lgbm",id:"cost_relative2lgbm",children:[],level:4},{value:"init",id:"init",children:[],level:4},{value:"config2params",id:"config2params",children:[],level:4}],level:2},{value:"TransformersEstimator Objects",id:"transformersestimator-objects",children:[],level:2},{value:"SKLearnEstimator Objects",id:"sklearnestimator-objects",children:[],level:2},{value:"LGBMEstimator Objects",id:"lgbmestimator-objects",children:[],level:2},{value:"XGBoostEstimator Objects",id:"xgboostestimator-objects",children:[],level:2},{value:"XGBoostSklearnEstimator Objects",id:"xgboostsklearnestimator-objects",children:[],level:2},{value:"XGBoostLimitDepthEstimator Objects",id:"xgboostlimitdepthestimator-objects",children:[],level:2},{value:"RandomForestEstimator Objects",id:"randomforestestimator-objects",children:[],level:2},{value:"ExtraTreesEstimator Objects",id:"extratreesestimator-objects",children:[],level:2},{value:"LRL1Classifier Objects",id:"lrl1classifier-objects",children:[],level:2},{value:"LRL2Classifier Objects",id:"lrl2classifier-objects",children:[],level:2},{value:"CatBoostEstimator Objects",id:"catboostestimator-objects",children:[],level:2},{value:"Prophet Objects",id:"prophet-objects",children:[],level:2},{value:"ARIMA Objects",id:"arima-objects",children:[],level:2},{value:"SARIMAX Objects",id:"sarimax-objects",children:[],level:2},{value:"TS_SKLearn_Regressor Objects",id:"ts_sklearn_regressor-objects",children:[],level:2},{value:"LGBM_TS_Regressor Objects",id:"lgbm_ts_regressor-objects",children:[],level:2},{value:"XGBoost_TS_Regressor Objects",id:"xgboost_ts_regressor-objects",children:[],level:2},{value:"RF_TS_Regressor Objects",id:"rf_ts_regressor-objects",children:[],level:2},{value:"ExtraTrees_TS_Regressor Objects",id:"extratrees_ts_regressor-objects",children:[],level:2},{value:"XGBoostLimitDepth_TS_Regressor Objects",id:"xgboostlimitdepth_ts_regressor-objects",children:[],level:2}],m={toc:p};function u(e){var t=e.components,r=(0,s.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"baseestimator-objects"},"BaseEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class BaseEstimator()\n")),(0,n.kt)("p",null,"The abstract class for all learners."),(0,n.kt)("p",null,"Typical examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"XGBoostEstimator: for regression."),(0,n.kt)("li",{parentName:"ul"},"XGBoostSklearnEstimator: for classification."),(0,n.kt)("li",{parentName:"ul"},"LGBMEstimator, RandomForestEstimator, LRL1Classifier, LRL2Classifier:\nfor both regression and classification.")),(0,n.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(task="binary", **config)\n')),(0,n.kt)("p",null,"Constructor."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"task")," - A string of the task type, one of\n'binary', 'multi', 'regression', 'rank', 'forecast'."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"config")," - A dictionary containing the hyperparameter names, 'n_jobs' as keys.\nn_jobs is the number of parallel threads.")),(0,n.kt)("h4",{id:"model"},"model"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef model()\n")),(0,n.kt)("p",null,"Trained model after fit() is called, or None before fit() is called."),(0,n.kt)("h4",{id:"estimator"},"estimator"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef estimator()\n")),(0,n.kt)("p",null,"Trained model after fit() is called, or None before fit() is called."),(0,n.kt)("h4",{id:"fit"},"fit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def fit(X_train, y_train, budget=None, **kwargs)\n")),(0,n.kt)("p",null,"Train the model from given training data."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"X_train")," - A numpy array or a dataframe of training data in shape n*m."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y_train")," - A numpy array or a series of labels in shape n*1."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"budget")," - A float of the time budget in seconds.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"train_time")," - A float of the training time in seconds.")),(0,n.kt)("h4",{id:"predict"},"predict"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def predict(X_test)\n")),(0,n.kt)("p",null,"Predict label from features."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"X_test")," - A numpy array or a dataframe of featurized instances, shape n*m.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("p",null,"  A numpy array of shape n*1.\nEach element is the label for a instance."),(0,n.kt)("h4",{id:"predict_proba"},"predict","_","proba"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def predict_proba(X_test)\n")),(0,n.kt)("p",null,"Predict the probability of each class from features."),(0,n.kt)("p",null,"Only works for classification problems"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"X_test")," - A numpy array of featurized instances, shape n*m.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("p",null,"  A numpy array of shape n*c. c is the # classes.\nEach element at (i,j) is the probability for instance i to be in\nclass j."),(0,n.kt)("h4",{id:"search_space"},"search","_","space"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef search_space(cls, data_size, task, **params)\n")),(0,n.kt)("p",null,"[required method]"," search space."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"data_size")," - A tuple of two integers, number of rows and columns."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"task"),' - A str of the task type, e.g., "binary", "multi", "regression".')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("p",null,"  A dictionary of the search space.\nEach key is the name of a hyperparameter, and value is a dict with\nits domain (required) and low_cost_init_value, init_value,\ncat_hp_cost (if applicable).\ne.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"{'domain': tune.randint(lower=1, upper=10), 'init_value': 1}"),"."),(0,n.kt)("h4",{id:"size"},"size"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef size(cls, config: dict) -> float\n")),(0,n.kt)("p",null,"[optional method]"," memory size of the estimator in bytes."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"config")," - A dict of the hyperparameter config.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("p",null,"  A float of the memory size required by the estimator to train the\ngiven config."),(0,n.kt)("h4",{id:"cost_relative2lgbm"},"cost","_","relative2lgbm"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef cost_relative2lgbm(cls) -> float\n")),(0,n.kt)("p",null,"[optional method]"," relative cost compared to lightgbm."),(0,n.kt)("h4",{id:"init"},"init"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef init(cls)\n")),(0,n.kt)("p",null,"[optional method]"," initialize the class."),(0,n.kt)("h4",{id:"config2params"},"config2params"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def config2params(config: dict) -> dict\n")),(0,n.kt)("p",null,"[optional method]"," config dict to params dict"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"config")," - A dict of the hyperparameter config.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("p",null,"  A dict that will be passed to self.estimator_class's constructor."),(0,n.kt)("h2",{id:"transformersestimator-objects"},"TransformersEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class TransformersEstimator(BaseEstimator)\n")),(0,n.kt)("p",null,"The class for fine-tuning language models, using huggingface transformers API."),(0,n.kt)("h2",{id:"sklearnestimator-objects"},"SKLearnEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class SKLearnEstimator(BaseEstimator)\n")),(0,n.kt)("p",null,"The base class for tuning scikit-learn estimators."),(0,n.kt)("h2",{id:"lgbmestimator-objects"},"LGBMEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class LGBMEstimator(BaseEstimator)\n")),(0,n.kt)("p",null,"The class for tuning LGBM, using sklearn API."),(0,n.kt)("h2",{id:"xgboostestimator-objects"},"XGBoostEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class XGBoostEstimator(SKLearnEstimator)\n")),(0,n.kt)("p",null,"The class for tuning XGBoost regressor, not using sklearn API."),(0,n.kt)("h2",{id:"xgboostsklearnestimator-objects"},"XGBoostSklearnEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class XGBoostSklearnEstimator(SKLearnEstimator,  LGBMEstimator)\n")),(0,n.kt)("p",null,"The class for tuning XGBoost with unlimited depth, using sklearn API."),(0,n.kt)("h2",{id:"xgboostlimitdepthestimator-objects"},"XGBoostLimitDepthEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class XGBoostLimitDepthEstimator(XGBoostSklearnEstimator)\n")),(0,n.kt)("p",null,"The class for tuning XGBoost with limited depth, using sklearn API."),(0,n.kt)("h2",{id:"randomforestestimator-objects"},"RandomForestEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class RandomForestEstimator(SKLearnEstimator,  LGBMEstimator)\n")),(0,n.kt)("p",null,"The class for tuning Random Forest."),(0,n.kt)("h2",{id:"extratreesestimator-objects"},"ExtraTreesEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class ExtraTreesEstimator(RandomForestEstimator)\n")),(0,n.kt)("p",null,"The class for tuning Extra Trees."),(0,n.kt)("h2",{id:"lrl1classifier-objects"},"LRL1Classifier Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class LRL1Classifier(SKLearnEstimator)\n")),(0,n.kt)("p",null,"The class for tuning Logistic Regression with L1 regularization."),(0,n.kt)("h2",{id:"lrl2classifier-objects"},"LRL2Classifier Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class LRL2Classifier(SKLearnEstimator)\n")),(0,n.kt)("p",null,"The class for tuning Logistic Regression with L2 regularization."),(0,n.kt)("h2",{id:"catboostestimator-objects"},"CatBoostEstimator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class CatBoostEstimator(BaseEstimator)\n")),(0,n.kt)("p",null,"The class for tuning CatBoost."),(0,n.kt)("h2",{id:"prophet-objects"},"Prophet Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class Prophet(SKLearnEstimator)\n")),(0,n.kt)("p",null,"The class for tuning Prophet."),(0,n.kt)("h2",{id:"arima-objects"},"ARIMA Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class ARIMA(Prophet)\n")),(0,n.kt)("p",null,"The class for tuning ARIMA."),(0,n.kt)("h2",{id:"sarimax-objects"},"SARIMAX Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class SARIMAX(ARIMA)\n")),(0,n.kt)("p",null,"The class for tuning SARIMA."),(0,n.kt)("h2",{id:"ts_sklearn_regressor-objects"},"TS","_","SKLearn","_","Regressor Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class TS_SKLearn_Regressor(SKLearnEstimator)\n")),(0,n.kt)("p",null,"The class for tuning SKLearn Regressors for time-series forecasting, using hcrystalball"),(0,n.kt)("h2",{id:"lgbm_ts_regressor-objects"},"LGBM","_","TS","_","Regressor Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class LGBM_TS_Regressor(TS_SKLearn_Regressor)\n")),(0,n.kt)("p",null,"The class for tuning LGBM Regressor for time-series forecasting"),(0,n.kt)("h2",{id:"xgboost_ts_regressor-objects"},"XGBoost","_","TS","_","Regressor Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class XGBoost_TS_Regressor(TS_SKLearn_Regressor)\n")),(0,n.kt)("p",null,"The class for tuning XGBoost Regressor for time-series forecasting"),(0,n.kt)("h2",{id:"rf_ts_regressor-objects"},"RF","_","TS","_","Regressor Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class RF_TS_Regressor(TS_SKLearn_Regressor)\n")),(0,n.kt)("p",null,"The class for tuning Random Forest Regressor for time-series forecasting"),(0,n.kt)("h2",{id:"extratrees_ts_regressor-objects"},"ExtraTrees","_","TS","_","Regressor Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class ExtraTrees_TS_Regressor(TS_SKLearn_Regressor)\n")),(0,n.kt)("p",null,"The class for tuning Extra Trees Regressor for time-series forecasting"),(0,n.kt)("h2",{id:"xgboostlimitdepth_ts_regressor-objects"},"XGBoostLimitDepth","_","TS","_","Regressor Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class XGBoostLimitDepth_TS_Regressor(TS_SKLearn_Regressor)\n")),(0,n.kt)("p",null,"The class for tuning XGBoost Regressor with unlimited depth for time-series forecasting"))}u.isMDXComponent=!0}}]);