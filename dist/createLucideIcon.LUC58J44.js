import{D as h}from"./runtime-core.esm-bundler.BFyEmjCE.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const toKebabCase=string=>string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),toCamelCase=string=>string.replace(/^([A-Z])|[\s-_]+(\w)/g,(match,p1,p2)=>p2?p2.toUpperCase():p1.toLowerCase()),toPascalCase=string=>{const camelCase=toCamelCase(string);return camelCase.charAt(0).toUpperCase()+camelCase.slice(1)},mergeClasses=(...classes)=>classes.filter((className,index,array)=>!!className&&className.trim()!==""&&array.indexOf(className)===index).join(" ").trim(),isEmptyString=value=>value==="";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Icon=({name,iconNode,absoluteStrokeWidth,"absolute-stroke-width":absoluteStrokeWidthKebabCase,strokeWidth,"stroke-width":strokeWidthKebabCase,size=defaultAttributes.width,color=defaultAttributes.stroke,...props},{slots})=>h("svg",{...defaultAttributes,...props,width:size,height:size,stroke:color,"stroke-width":isEmptyString(absoluteStrokeWidth)||isEmptyString(absoluteStrokeWidthKebabCase)||absoluteStrokeWidth===!0||absoluteStrokeWidthKebabCase===!0?Number(strokeWidth||strokeWidthKebabCase||defaultAttributes["stroke-width"])*24/Number(size):strokeWidth||strokeWidthKebabCase||defaultAttributes["stroke-width"],class:mergeClasses("lucide",props.class,...name?[`lucide-${toKebabCase(toPascalCase(name))}-icon`,`lucide-${toKebabCase(name)}`]:["lucide-icon"])},[...iconNode.map(child=>h(...child)),...slots.default?[slots.default()]:[]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const createLucideIcon=(iconName,iconNode)=>(props,{slots,attrs})=>h(Icon,{...attrs,...props,iconNode,name:iconName},slots);export{Icon as I,createLucideIcon as c};
