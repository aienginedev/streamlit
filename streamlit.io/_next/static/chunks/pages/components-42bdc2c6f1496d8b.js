(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47505],{20640:function(e,t,a){"use strict";var r=a(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,n,l,s,i,u,c,d,f=!1;t||(t={}),l=t.debug||!1;try{if(i=r(),u=document.createRange(),c=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(a){if(a.stopPropagation(),t.format){if(a.preventDefault(),void 0===a.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e)}t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))}),document.body.appendChild(d),u.selectNodeContents(d),c.addRange(u),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(x){l&&console.error("unable to copy using execCommand: ",x),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(p){l&&console.error("unable to copy using clipboardData: ",p),l&&console.error("falling back to prompt"),a="message"in t?t.message:"Copy to clipboard: #{key}, Enter",n=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",s=a.replace(/#{\s*key\s*}/g,n),window.prompt(s,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(u):c.removeAllRanges()),d&&document.body.removeChild(d),i()}return f}},54976:function(e,t,a){let r=a(67294);e.exports={attributes:{pageTitle:"Components"},react:function(e){Object.keys(e).forEach(function(t){this[t]=e[t]});let t=r.createElement("div",{className:"frontmatter-markdown"},r.createElement("p",null,"Components are third-party modules that extend what’s possible with Streamlit. They couldn't be simpler to use, just\xa0a pip-install away. Below are some Components we curated from either ",r.createElement("a",{href:"https://discuss.streamlit.io"},"our forums")," or from ",r.createElement("a",{href:"https://twitter.com/search?q=%23streamlit"},"Twitter"),"."),r.createElement("p",null,"Try one out today or ",r.createElement("a",{href:"https://docs.streamlit.io/library/components/create"},"write your own!")));return t}}},23251:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components",function(){return a(63668)}])},64563:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(85893),o=a(94184),n=a.n(o),l=a(84737);function s(e){let{title:t,titleComponent:a,text:o,textClass:s,textComponent:i,topChildren:u,children:c,bottomPadding:d}=e;return(0,r.jsxs)(l.$0,{layout:"grid",topPadding:"medium",bottomPadding:d,className:"md:text-center grid gap-y-6 sm:gap-y-12",children:[u&&u,t&&(0,r.jsx)(l.LR,{dangerouslySetInnerHTML:{__html:t}}),a&&(0,r.jsx)(l.LR,{children:a}),o&&(0,r.jsx)(l.Wr,{className:n()(s,"sm:col-start-1 sm:col-end-13","lg:col-start-2 lg:col-end-12"),dangerouslySetInnerHTML:{__html:o}}),i&&(0,r.jsx)(l.Wr,{className:n()(s,"sm:col-start-1 sm:col-end-13","lg:col-start-2 lg:col-end-12"),children:i}),c]})}},37645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=n.default,o=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:a,pastDelay:r}=e;return null}};if(e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=r({},o,e)),(o=r({},o,t)).suspense&&(delete o.ssr,delete o.loading),o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated)).loadableGenerated,"boolean"==typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,l(a,o);delete o.ssr}return a(o)},t.noSSR=l;var r=a(6495).Z,o=a(92648).Z,n=(o(a(67294)),o(a(14588)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,a(92648).Z)(a(67294));let o=r.default.createContext(null);t.LoadableContext=o},14588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(6495).Z,o=(0,a(91598).Z)(a(67294)),n=a(33644);let l=[],s=[],i=!1;function u(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=o.default.lazy(a.loader));let l=null;function u(){if(!l){let t=new c(e,a);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!i){let d=a.webpack?a.webpack():a.modules;d&&s.push(e=>{for(let t of d)if(-1!==e.indexOf(t))return u()})}function f(){u();let e=o.default.useContext(n.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}let p=a.suspense?function(e,t){return f(),o.default.createElement(a.lazy,r({},e,{ref:t}))}:function(e,t){f();let r=o.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),o.default.useMemo(()=>{var t;return r.loading||r.error?o.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:l.retry}):r.loaded?o.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null},[e,r])};return p.preload=()=>u(),p.displayName="LoadableComponent",o.default.forwardRef(p)}(u,e)}function f(e,t){let a=[];for(;e.length;){let r=e.pop();a.push(r(t))}return Promise.all(a).then(()=>{if(e.length)return f(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{f(l).then(e,t)}),d.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(i=!0,t());f(s,e).then(a,a)})},window.__NEXT_PRELOADREADY=d.preloadReady,t.default=d},63668:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return b}});var r=a(85893),o=a(67294),n=a(11163),l=a(94184),s=a.n(l),i=a(5152),u=a.n(i),c=a(98650),d=a(80886),f=a(64563),p=a(84737),x=a(21320),m=a(54976),y=a(85586),h=a.n(y);u()(()=>a.e(3033).then(a.bind(a,3033)),{loadableGenerated:{webpack:()=>[3033]}});let g=e=>{let{allComponentsData:t,activePage:a,allCategoriesData:l}=e,{pageTitle:i,pageDescription:u,sharingImage:y}=m.attributes,[g,b]=(0,o.useState)("featured"),_=(0,n.useRouter)(),w=window;return(0,o.useEffect)(()=>{if(""!==w.location.search){let e=w.location.search.substr(10).toLowerCase();e?b(e):b("featured")}},[w.location.search]),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{pageTitle:i,pageDescription:u,sharingImage:y}),(0,r.jsx)(f.Z,{title:i,textClass:s()(h().componentsContainer,"xl:col-start-3 xl:col-end-11"),textComponent:(0,r.jsx)(m.react,{}),bottomPadding:"none"}),(0,r.jsx)(p.$0,{topPadding:"medium",children:(0,r.jsx)(x.Z,{activePage:"components",apps:t,categories:l,appsPerPage:24,appsPerRow:3,router:_,activeCategory:g,setActiveCategory:b,colors:{text:{base:"text-gray-70",hover:"hover:text-gray-90"},active:{bg:"bg-indigo-10",text:"text-indigo-60",hover:"hover:text-gray-90"}}})})]})};var b=!0;t.default=g},85586:function(e){e.exports={componentsContainer:"components_componentsContainer__4fM5x"}},5152:function(e,t,a){e.exports=a(37645)},90332:function(e,t){"use strict";var a=function(e){var t="\xc0\xc1\xc2\xc3\xc4\xc5Ą\xe0\xe1\xe2\xe3\xe4\xe5ą\xd2\xd3\xd4\xd5\xd5\xd6\xd8\xf2\xf3\xf4\xf5\xf6\xf8\xc8\xc9\xca\xcbĘ\xe8\xe9\xea\xeb\xf0ę\xc7Ć\xe7ć\xd0\xcc\xcd\xce\xcf\xec\xed\xee\xef\xd9\xda\xdb\xdc\xf9\xfa\xfb\xfc\xd1\xf1ŠŚšśŸ\xff\xfdŽŹŻžźżŁłŃń\xe0\xe1\xe3ảạăằắẳẵặ\xe2ầấẩẫậ\xe8\xe9ẻẽẹ\xeaềếểễệđ\xf9\xfaủũụưừứửữự\xf2\xf3ỏ\xf5ọ\xf4ồốổỗộơờớởỡợ\xec\xedỉĩị\xe4\xeb\xef\xee\xf6\xfc\xfb\xf1\xe7\xfdỳỹỵỷ",a=RegExp("("+t.split("").join("|")+")","g");return e.replace(a,function(e){return"AAAAAAAaaaaaaaOOOOOOOooooooEEEEEeeeeeeCCccDIIIIiiiiUUUUuuuuNnSSssYyyZZZzzzLlNnaaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy"[t.indexOf(e)]||""})},r=function(e,t,r){void 0===r&&(r=!1);var o=a(e).trim().toLowerCase(),n=t.split("").map(function(e){return"\\"+e}).join("");return r?o.replace(/\s+/g,t):o.replace(RegExp("[^a-z0-9"+n+"]+","g"),t).replace(RegExp(n+"+","g"),t).replace(RegExp("^"+n,"g"),"").replace(RegExp(n+"$","g"),"")},o=function(e,t){if(void 0===t&&(t={delimiter:"-",prefix:""}),t.delimiter||(t.delimiter="-"),t.prefix||(t.prefix=""),!e||"boolean"==typeof e)return"";var a=t.delimiter,n=t.prefix;if("string"==typeof e||"number"==typeof e){var l=r(n,a,!0),s=r(String(e),a);return l?""+l+a+s:s}return"object"==typeof e&&0===Object.keys(e).length?"":"children"in e?o(e.children):e instanceof Array?o(e.map(function(e){return o(e,{delimiter:a})}).join(a),t):"type"in e?o(e.props.children,t):""};t.Z=o},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<e.rangeCount;r++)a.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[29515,1534,21320,49774,92888,40179],function(){return e(e.s=23251)}),_N_E=e.O()}]);