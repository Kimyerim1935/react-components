import{j as o}from"./jsx-runtime-BjgbQsUx.js";import{r as b}from"./index-DDT2H6na.js";import{j as e}from"./format-BvyHdC65.js";const i={list:e("max-h-75 w-full overflow-y-auto overflow-x-hidden rounded border border-gray-100 bg-white py-1"),listItem:e("h-10 w-full min-w-30 shadow-inset01 hover:bg-primary-50"),listItemButton:e("h-10 w-full truncate px-3 text-left text-14 font-normal leading-normal hover:font-medium hover:text-primary-900 focus:font-medium focus:text-primary-900"),selected:e("bg-primary-600 font-medium text-white hover:font-medium hover:text-white focus:font-medium focus:text-white")};function d({className:a,currentValue:r,label:m,onClick:s,value:t,...u}){return o.jsx("li",{...u,"aria-selected":r===t,className:e(i.listItem,a&&a),role:"option",children:o.jsx("button",{className:e(i.listItemButton,r===t&&i.selected),type:"button",value:t,onClick:s,children:m})})}d.__docgenInfo={description:"",methods:[],displayName:"ListboxItem",props:{currentValue:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},label:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const x=b.forwardRef(function(r,m){const{className:s,id:t,labelId:u,onClick:p,options:c,renderItem:l,value:y,...f}=r;return o.jsx("ul",{...f,ref:m,"aria-labelledby":u,className:e(i.list,s&&s),id:t,tabIndex:-1,role:"listbox",children:c.map(n=>(l==null?void 0:l(n))||o.jsx(d,{currentValue:y,label:n.label,value:n.value,onClick:p},`${n.label}-${n.value}`))})});x.__docgenInfo={description:"",methods:[],displayName:"Listbox",props:{id:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"OptionsType"}],raw:"OptionsType[]"},description:""},labelId:{required:!1,tsType:{name:"string"},description:""},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: OptionsType) => ReactNode",signature:{arguments:[{type:{name:"OptionsType"},name:"option"}],return:{name:"ReactNode"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:""}},composes:["Omit"]};export{x as L,d as a,i as l};
