self.uhtml=function(e){"use strict";class t extends Map{set(e,t){return super.set(e,t),t}}class n extends WeakMap{set(e,t){return super.set(e,t),t}}
/*! (c) Andrea Giammarchi - ISC */const r=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,s=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g,l=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,o=/[\x01\x02]/g;const a=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,{isArray:i}=Array,c=e=>null==e?e:e.valueOf(),u=(e,t)=>{let n,r,s=t.slice(2);return!(t in e)&&(r=t.toLowerCase())in e&&(s=r.slice(2)),t=>{const r=i(t)?t:[t,!1];n!==r[0]&&(n&&e.removeEventListener(s,n,r[1]),(n=r[0])&&e.addEventListener(s,n,r[1]))}};const{isArray:d,prototype:p}=Array,{indexOf:f}=p,{createDocumentFragment:h,createElement:m,createElementNS:g,createTextNode:y,createTreeWalker:b,importNode:w}=new Proxy({},{get:(e,t)=>document[t].bind(document)});let v;const x=(e,t)=>t?(e=>{v||(v=g("http://www.w3.org/2000/svg","svg")),v.innerHTML=e;const t=h();return t.append(...v.childNodes),t})(e):(e=>{const t=m("template");return t.innerHTML=e,t.content})(e),N=({childNodes:e},t)=>e[t],C=(e,t,n)=>((e,t,n,r,s)=>{const l=n.length;let o=t.length,a=l,i=0,c=0,u=null;for(;i<o||c<a;)if(o===i){const t=a<l?c?r(n[c-1],-0).nextSibling:r(n[a-c],0):s;for(;c<a;)e.insertBefore(r(n[c++],1),t)}else if(a===c)for(;i<o;)u&&u.has(t[i])||e.removeChild(r(t[i],-1)),i++;else if(t[i]===n[c])i++,c++;else if(t[o-1]===n[a-1])o--,a--;else if(t[i]===n[a-1]&&n[c]===t[o-1]){const s=r(t[--o],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[i++],-1).nextSibling),e.insertBefore(r(n[--a],1),s),t[o]=n[a]}else{if(!u){u=new Map;let e=c;for(;e<a;)u.set(n[e],e++)}if(u.has(t[i])){const s=u.get(t[i]);if(c<s&&s<a){let l=i,d=1;for(;++l<o&&l<a&&u.get(t[l])===s+d;)d++;if(d>s-c){const l=r(t[i],0);for(;c<s;)e.insertBefore(r(n[c++],1),l)}else e.replaceChild(r(n[c++],1),r(t[i++],-1))}else i++}else e.removeChild(r(t[i++],-1))}return n})(e.parentNode,t,n,a,e),A=(e,t)=>{switch(t[0]){case"?":return((e,t,n)=>r=>{const s=!!c(r);n!==s&&((n=s)?e.setAttribute(t,""):e.removeAttribute(t))})(e,t.slice(1),!1);case".":return((e,t)=>"dataset"===t?(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e):n=>{e[t]=n})(e,t.slice(1));case"@":return u(e,"on"+t.slice(1));case"o":if("n"===t[1])return u(e,t)}switch(t){case"ref":return(e=>{let t;return n=>{t!==n&&(t=n,"function"==typeof n?n(e):n.current=e)}})(e);case"aria":return(e=>t=>{for(const n in t){const r="role"===n?n:`aria-${n}`,s=t[n];null==s?e.removeAttribute(r):e.setAttribute(r,s)}})(e)}return((e,t)=>{let n,r=!0;const s=document.createAttributeNS(null,t);return t=>{const l=c(t);n!==l&&(null==(n=l)?r||(e.removeAttributeNode(s),r=!0):(s.value=l,r&&(e.setAttributeNodeNS(s),r=!1)))}})(e,t)};function k(e){const{type:t,path:n}=e,r=n.reduceRight(N,this);return"node"===t?(e=>{let t,n,r=[];const s=l=>{switch(typeof l){case"string":case"number":case"boolean":t!==l&&(t=l,n||(n=y("")),n.data=l,r=C(e,r,[n]));break;case"object":case"undefined":if(null==l){t!=l&&(t=l,r=C(e,r,[]));break}if(d(l)){t=l,0===l.length?r=C(e,r,[]):"object"==typeof l[0]?r=C(e,r,l):s(String(l));break}if(t!==l)if("ELEMENT_NODE"in l)t=l,r=C(e,r,11===l.nodeType?[...l.childNodes]:[l]);else{const e=l.valueOf();e!==l&&s(e)}break;case"function":s(l(e))}};return s})(r):"attr"===t?A(r,e.name):(e=>{let t;return n=>{const r=c(n);t!=r&&(t=r,e.textContent=null==r?"":r)}})(r)}const $=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(f.call(n.childNodes,e)),e=n,({parentNode:n}=e);return t},E="isµ",O=new n,T=/^(?:textarea|script|style|title|plaintext|xmp)$/,S=(e,t)=>{const n="svg"===e,a=((e,t,n)=>{let a=0;return e.join("").trim().replace(s,((e,t,s,o)=>{let a=t+s.replace(l,"=$2$1").trimEnd();return o.length&&(a+=n||r.test(t)?" /":"></"+t),"<"+a+">"})).replace(o,(e=>""===e?"\x3c!--"+t+a+++"--\x3e":t+a++))})(t,E,n),i=x(a,n),c=b(i,129),u=[],d=t.length-1;let p=0,f=`${E}${p}`;for(;p<d;){const e=c.nextNode();if(!e)throw`bad template: ${a}`;if(8===e.nodeType)e.data===f&&(u.push({type:"node",path:$(e)}),f=`${E}${++p}`);else{for(;e.hasAttribute(f);)u.push({type:"attr",path:$(e),name:e.getAttribute(f)}),e.removeAttribute(f),f=`${E}${++p}`;T.test(e.localName)&&e.textContent.trim()===`\x3c!--${f}--\x3e`&&(e.textContent="",u.push({type:"text",path:$(e)}),f=`${E}${++p}`)}}return{content:i,nodes:u}},L=(e,t)=>{const{content:n,nodes:r}=O.get(t)||O.set(t,S(e,t)),s=w(n,!0);return{content:s,updates:r.map(k,s)}},M=(e,{type:t,template:n,values:r})=>{const s=j(e,r);let{entry:l}=e;l&&l.template===n&&l.type===t||(e.entry=l=((e,t)=>{const{content:n,updates:r}=L(e,t);return{type:e,template:t,content:n,updates:r,wire:null}})(t,n));const{content:o,updates:a,wire:i}=l;for(let e=0;e<s;e++)a[e](r[e]);return i||(l.wire=(e=>{const{firstChild:t,lastChild:n}=e;if(t===n)return n||e;const{childNodes:r}=e,s=[...r];return{ELEMENT_NODE:1,nodeType:111,firstChild:t,lastChild:n,valueOf:()=>(r.length!==s.length&&e.append(...s),e)}})(o))},j=({stack:e},t)=>{const{length:n}=t;for(let r=0;r<n;r++){const n=t[r];n instanceof B?t[r]=M(e[r]||(e[r]={stack:[],entry:null,wire:null}),n):d(n)?j(e[r]||(e[r]={stack:[],entry:null,wire:null}),n):e[r]=null}return n<e.length&&e.splice(n),n};class B{constructor(e,t,n){this.type=e,this.template=t,this.values=n}}const D=e=>{const r=new n;return Object.assign(((t,...n)=>new B(e,t,n)),{for(n,s){const l=r.get(n)||r.set(n,new t);return l.get(s)||l.set(s,(t=>(n,...r)=>M(t,{type:e,template:n,values:r}))({stack:[],entry:null,wire:null}))},node:(t,...n)=>M({stack:[],entry:null,wire:null},new B(e,t,n)).valueOf()})},H=new n,_=D("html"),z=D("svg");return e.Hole=B,e.html=_,e.render=(e,t)=>{const n="function"==typeof t?t():t,r=H.get(e)||H.set(e,{stack:[],entry:null,wire:null}),s=n instanceof B?M(r,n):n;return s!==r.wire&&(r.wire=s,e.replaceChildren(s.valueOf())),e},e.svg=z,e}({});
