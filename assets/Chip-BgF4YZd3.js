import{j as n}from"./jsx-runtime-BjgbQsUx.js";import{r as m}from"./index-DDT2H6na.js";import{j as e}from"./format-BvyHdC65.js";import{g as c}from"./styles-D32WepGD.js";import{F as b}from"./XMarkIcon-D5luaRUA.js";const u={contained:e("border border-primary-600 bg-primary-600"),outlined:e("border border-primary-700 bg-white"),text:e("border-[0.3px] border-gray-200 bg-white")},g=t=>t?u[t]:u.outlined;function f(t){const{className:o,isDeletable:r=!0,label:p,onDelete:a,value:s,variant:i="outlined"}=t,d=m.useCallback(l=>{r&&a?(l.currentTarget.blur(),a(s)):l.preventDefault()},[r,a,s]);return n.jsxs("div",{className:e("flex w-max items-center gap-2 rounded-full",g(i),r?"pointer-events-auto py-1 pl-3.5 pr-2":"pointer-events-none px-3 py-1",o&&o),children:[n.jsx("span",{className:"text-16 font-medium leading-normal",children:p}),r&&n.jsx("button",{"aria-label":"delete",type:"button",onClick:d,className:e("group flex cursor-pointer items-center justify-center rounded-full p-0.5",c(i),i==="text"&&"border border-gray-200"),children:n.jsx(b,{className:"!block size-3 text-inherit"})})]})}f.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},isDeletable:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'outlined' | 'text'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'text'"}]},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};export{f as C,g};