"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(i,".").concat(g)]||u[g]||m[g]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"Install Plugin",sidebar_label:"Install Plugin"},o=void 0,s={unversionedId:"setup/install_plugin",id:"setup/install_plugin",title:"Install Plugin",description:"You can install the plugin by copying the file into your PATH.",source:"@site/docs/2_setup/2_install_plugin.md",sourceDirName:"2_setup",slug:"/setup/install_plugin",permalink:"/casskop/docs/setup/install_plugin",draft:!1,editUrl:"https://github.com/cscetbon/casskop/edit/master/website/docs/2_setup/2_install_plugin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install Plugin",sidebar_label:"Install Plugin"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/casskop/docs/setup/getting_started"},next:{title:"Multi-CassKop",permalink:"/casskop/docs/setup/multi_casskop"}},i={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can install the plugin by copying the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cscetbon/casskop/tree/master/plugins/kubectl-casskop"},"file")," into your PATH."),(0,a.kt)("p",null,"For example on a linux/ mac machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cp plugins/kubectl-casskop /usr/local/bin\n")),(0,a.kt)("p",null,"Then you can test the plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl casskop\n\nusage: kubectl-casskop <command> [<args>]\n\nThe available commands are:\n   cleanup\n   upgradesstables\n   rebuild\n   remove\n   restart\n   pause\n   unpause\n\nFor more information you can run kubectl-casskop <command> --help\nkubectl-casskop: error: the following arguments are required: command\n")),(0,a.kt)("p",null,"Your CassKop plugin is now installed!"))}m.isMDXComponent=!0}}]);