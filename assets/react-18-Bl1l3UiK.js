import{r as s}from"./index-DDT2H6na.js";import{r as m}from"./index-CTOC-uzv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D2MAbzvX.js";var n={},u;function c(){if(u)return n;u=1;var e=m();return n.createRoot=e.createRoot,n.hydrateRoot=e.hydrateRoot,n}var R=c(),i=new Map;function v(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var p=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var y=async(e,t,r)=>{let o=await f(t,r);if(v()){o.render(e);return}let{promise:a,resolve:l}=Promise.withResolvers();return o.render(s.createElement(p,{callback:l},e)),a},g=(e,t)=>{let r=i.get(e);r&&(r.unmount(),i.delete(e))},f=async(e,t)=>{let r=i.get(e);return r||(r=R.createRoot(e,t),i.set(e,r)),r};export{y as renderElement,g as unmountElement};
