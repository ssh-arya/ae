import{r as g,an as D,am as F,ak as G,M as A,I as T,a7 as X,o as H,a9 as J,d as M,y as K,b as h,c as k,e as $,g as O,w as Q,X as I,T as U,n as L,a6 as Y,p as Z,i as ee,l as W,t as te,f as ne,a5 as oe}from"./DRYbQ9f_.js";function N(e){return F()?(G(e),!0):!1}function S(e){return typeof e=="function"?e():A(e)}const C=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ae=Object.prototype.toString,se=e=>ae.call(e)==="[object Object]",b=()=>{},ie=re();function re(){var e,t;return C&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function ce(e){let t;function a(){return t||(t=e()),t}return a.reset=async()=>{const n=t;t=void 0,n&&await n},a}function ue(e,t,a={}){const{immediate:n=!0}=a,i=g(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function c(){i.value=!1,l()}function d(...p){l(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...p)},S(t))}return n&&(i.value=!0,C&&d()),N(c),{isPending:D(i),start:d,stop:c}}function w(e){var t;const a=S(e);return(t=a==null?void 0:a.$el)!=null?t:a}const R=C?window:void 0,j=C?window.navigator:void 0;function _(...e){let t,a,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,n,i]=e,t=R):[t,a,n,i]=e,!t)return b;Array.isArray(a)||(a=[a]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(u=>u()),o.length=0},c=(u,m,s,r)=>(u.addEventListener(m,s,r),()=>u.removeEventListener(m,s,r)),d=X(()=>[w(t),S(i)],([u,m])=>{if(l(),!u)return;const s=se(m)?{...m}:m;o.push(...a.flatMap(r=>n.map(v=>c(u,r,v,s))))},{immediate:!0,flush:"post"}),p=()=>{d(),l()};return N(p),p}let P=!1;function le(e,t,a={}){const{window:n=R,ignore:i=[],capture:o=!0,detectIframe:l=!1}=a;if(!n)return b;ie&&!P&&(P=!0,Array.from(n.document.body.children).forEach(s=>s.addEventListener("click",b)),n.document.documentElement.addEventListener("click",b));let c=!0;const d=s=>i.some(r=>{if(typeof r=="string")return Array.from(n.document.querySelectorAll(r)).some(v=>v===s.target||s.composedPath().includes(v));{const v=w(r);return v&&(s.target===v||s.composedPath().includes(v))}}),u=[_(n,"click",s=>{const r=w(e);if(!(!r||r===s.target||s.composedPath().includes(r))){if(s.detail===0&&(c=!d(s)),!c){c=!0;return}t(s)}},{passive:!0,capture:o}),_(n,"pointerdown",s=>{const r=w(e);c=!d(s)&&!!(r&&!s.composedPath().includes(r))},{passive:!0}),l&&_(n,"blur",s=>{setTimeout(()=>{var r;const v=w(e);((r=n.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(v!=null&&v.contains(n.document.activeElement))&&t(s)},0)})].filter(Boolean);return()=>u.forEach(s=>s())}function de(){const e=g(!1),t=J();return t&&H(()=>{e.value=!0},t),e}function V(e){const t=de();return T(()=>(t.value,!!e()))}function B(e,t={}){const{controls:a=!1,navigator:n=j}=t,i=V(()=>n&&"permissions"in n);let o;const l=typeof e=="string"?{name:e}:e,c=g(),d=()=>{o&&(c.value=o.state)},p=ce(async()=>{if(i.value){if(!o)try{o=await n.permissions.query(l),_(o,"change",d),d()}catch{c.value="prompt"}return o}});return p(),a?{state:c,isSupported:i,query:p}:c}function pe(e={}){const{navigator:t=j,read:a=!1,source:n,copiedDuring:i=1500,legacy:o=!1}=e,l=V(()=>t&&"clipboard"in t),c=B("clipboard-read"),d=B("clipboard-write"),p=T(()=>l.value||o),u=g(""),m=g(!1),s=ue(()=>m.value=!1,i);function r(){l.value&&E(c.value)?t.clipboard.readText().then(f=>{u.value=f}):u.value=z()}p.value&&a&&_(["copy","cut"],r);async function v(f=S(n)){p.value&&f!=null&&(l.value&&E(d.value)?await t.clipboard.writeText(f):q(f),u.value=f,m.value=!0,s.start())}function q(f){const y=document.createElement("textarea");y.value=f??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function z(){var f,y,x;return(x=(y=(f=document==null?void 0:document.getSelection)==null?void 0:f.call(document))==null?void 0:y.toString())!=null?x:""}function E(f){return f==="granted"||f==="prompt"}return{isSupported:p,text:u,copied:m,copy:v}}const fe=e=>(Z("data-v-bb39563a"),e=e(),ee(),e),me=fe(()=>$("span",{class:"sr-only"},"Copy to clipboard",-1)),ve={class:"icon-wrapper"},ye=M({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const t=e,a=g(),{copy:n}=pe();le(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:i}=K(),o=g("init"),l=c=>{n(t.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(c,d)=>{const p=Y;return h(),k("button",{ref_key:"copyButtonRef",ref:a,class:L([(e.show||o.value==="copied")&&"show"]),onClick:l},[me,$("span",ve,[O(U,{name:"fade"},{default:Q(()=>{var u,m;return[o.value==="copied"?(h(),I(p,{key:0,name:(u=A(i).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),I(p,{key:1,name:(m=A(i).copyButton)==null?void 0:m.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),ge=W(ye,[["__scopeId","data-v-bb39563a"]]),we={key:0,class:"filename"},he=M({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const t=g(!1);return(a,n)=>{const i=ge;return h(),k("div",{class:L([[`highlight-${e.language}`],"prose-code"]),onMouseenter:n[0]||(n[0]=o=>t.value=!0),onMouseleave:n[1]||(n[1]=o=>t.value=!1)},[e.filename?(h(),k("span",we,te(e.filename),1)):ne("",!0),oe(a.$slots,"default",{},void 0,!0),O(i,{show:t.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),be=W(he,[["__scopeId","data-v-98a4a347"]]);export{be as default};
