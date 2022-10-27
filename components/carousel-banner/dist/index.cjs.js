"use strict";var b=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var x=(r,o)=>{for(var a in o)b(r,a,{get:o[a],enumerable:!0})},y=(r,o,a,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of g(o))!f.call(r,n)&&n!==a&&b(r,n,{get:()=>o[n],enumerable:!(i=h(o,n))||i.enumerable});return r};var v=r=>y(b({},"__esModule",{value:!0}),r);var z={};x(z,{CarouselBanner:()=>N,useCarouselBanner:()=>k});module.exports=v(z);function k(r){return{}}var d=require("react"),m=require("@hoanggiangg199/hooks"),u=require("@chakra-ui/icons"),p=require("@hoanggiangg199/utilities");function c(r,{insertAt:o}={}){if(!r||typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",o==="top"&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=r:i.appendChild(document.createTextNode(r))}c(`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.absolute{position:absolute}.relative{position:relative}.bottom-0{bottom:0}.m-auto{margin:auto}.my-auto{margin-top:auto;margin-bottom:auto}.mt-5{margin-top:1.25rem}.mt-7{margin-top:1.75rem}.ml-3{margin-left:.75rem}.ml-2{margin-left:.5rem}.flex{display:flex}.hidden{display:none}.h-full{height:100%}.h-\\[16\\%\\]{height:16%}.h-\\[100\\%\\]{height:100%}.w-\\[40\\%\\]{width:40%}.basis-5\\/6{flex-basis:83.333333%}.basis-1\\/2{flex-basis:50%}.basis-3\\/4{flex-basis:75%}.basis-1\\/6{flex-basis:16.666667%}.basis-1\\/4{flex-basis:25%}.basis-2\\/4{flex-basis:50%}@keyframes progress_loading{0%{width:0%}to{width:100%;border-radius:.75rem}}.animate-progress_loading{animation:progress_loading 4s linear}@keyframes slide{0%{transform:translate(10px);opacity:0}10%,to{transform:translate(0);opacity:1}}.animate-slide{animation:slide 3s cubic-bezier(.455,.03,.515,.955)}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.justify-between{justify-content:space-between}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-2{row-gap:.5rem}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-2xl{border-radius:1rem}.rounded-xl{border-radius:.75rem}.rounded-lg{border-radius:.5rem}.rounded-l-xl{border-top-left-radius:.75rem;border-bottom-left-radius:.75rem}.border{border-width:1px}.border-\\[2px\\]{border-width:2px}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[rgba\\(192\\,192\\,192\\,0\\.3\\)\\]{background-color:#c0c0c04d}.bg-\\[rgba\\(0\\,0\\,0\\,0\\.5\\)\\]{background-color:#00000080}.p-10{padding:2.5rem}.p-3{padding:.75rem}.p-2{padding:.5rem}.p-1{padding:.25rem}.text-center{text-align:center}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[10px\\]{font-size:10px}.text-sm{font-size:.875rem;line-height:1.25rem}.font-black{font-weight:900}.font-semibold{font-weight:600}.leading-4{line-height:1rem}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hover\\:border:hover{border-width:1px}.hover\\:bg-\\[rgba\\(192\\,192\\,192\\,0\\.3\\)\\]:hover{background-color:#c0c0c04d}.hover\\:bg-\\[rgba\\(0\\,0\\,0\\,0\\.5\\)\\]:hover{background-color:#00000080}@media (max-width: 903px){.bp-2\\:rounded-lg{border-radius:.5rem}}@media (max-width: 961px){.bp-3\\:rounded{border-radius:.25rem}}@media (max-width: 841px){.mobile\\:hidden{display:none}.mobile\\:w-\\[90\\%\\]{width:90%}.mobile\\:basis-full{flex-basis:100%}}
`);var e=require("react/jsx-runtime"),N=({listItems:r})=>{let[o,a]=(0,d.useState)(1),i=t=>{a(t)};(0,d.useEffect)(()=>{let t=setInterval(async()=>{let w=await(0,m.useLatestState)(a),s;s=w+1,s>r.length&&(s=1),i(s)},3e3);return()=>clearInterval(t)},[]);let n=t=>t===o;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"flex flex-row gap-x-4",children:[r.map(t=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{id:t.id,className:`relative h-full basis-5/6 mobile:basis-full animate-slide ${n(t.id)?"":"hidden"}`,children:[(0,e.jsxs)("div",{className:"absolute bottom-0 p-10 w-[40%] mobile:w-[90%] mobile:hidden",children:[(0,e.jsx)("h1",{className:"text-xl antialiased leading-4 font-black",children:t.name}),(0,e.jsx)("h1",{className:"antialiased mt-5",children:(0,p.getElipsisString)(t.description,100)}),(0,e.jsxs)("p",{className:"mt-5",children:["Starting at ",(0,e.jsxs)("span",{className:"font-semibold",children:[t.price,"$"]})]}),(0,e.jsxs)("div",{className:"mt-7 flex flex-row",children:[(0,e.jsx)("a",{className:"bg-white border text-black rounded p-3 basis-1/2 text-center",href:`/${t.nameAlias}`,children:"BUY NOW"}),(0,e.jsx)("button",{className:"rounded ml-3 basis-1/2 hover:border hover:bg-[rgba(192,192,192,0.3)] p-2 text-white text-[10px]",children:(0,e.jsxs)("div",{className:"flex flex-row",children:[(0,e.jsx)(u.AddIcon,{boxSize:"2em",className:"m-auto border-white border-[2px] rounded-full p-1 "}),(0,e.jsx)("span",{className:"my-auto ml-2 basis-3/4",children:"ADD TO WISHLIST"})]})})]})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("picture",{children:[(0,e.jsx)("source",{media:"(max-width:841px)",srcSet:t.thumbnailUrl}),(0,e.jsx)("img",{className:"rounded-2xl h-full",src:t.imageUrl})]})})]},t.id)})),(0,e.jsx)("div",{className:"basis-1/6 flex flex-col justify-between mobile:hidden gap-y-2",children:r.map(t=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"h-[16%] relative",onClick:()=>i(t.id),children:[(0,e.jsx)("div",{id:`progress-bar-${t.id}`,className:`absolute rounded-l-xl h-[100%] ${n(t.id)?"bg-[rgba(192,192,192,0.3)] ":""}`},t.id),(0,e.jsxs)("div",{className:`hover:bg-[rgba(0,0,0,0.5)] ${n(t.id)?"bg-[rgba(0,0,0,0.5)]":""} rounded-xl bp-2:rounded-lg h-[100%] flex flex-row my-auto`,children:[(0,e.jsx)("div",{className:"my-auto ml-2 basis-1/4",children:(0,e.jsx)("img",{className:"bp-3:rounded rounded-lg",src:`${t.thumbnailUrl}`})}),(0,e.jsx)("div",{className:"ml-3 m-auto basis-2/4",children:(0,e.jsx)("span",{className:"text-sm",children:(0,p.getElipsisString)(t.name,100)})})]})]},t.id)}))})]})})};0&&(module.exports={CarouselBanner,useCarouselBanner});
