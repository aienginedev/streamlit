(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29582],{13883:function(e,n,r){"use strict";r.d(n,{H1:function(){return i},H2:function(){return o},H3:function(){return c}});var a=r(85893),t=r(94709),i=function(e){return(0,a.jsx)(t.Z,{level:1,name:d(e),className:e.className,children:l(e)})},o=function(e){return(0,a.jsx)(t.Z,{level:2,name:d(e),className:e.className,children:l(e)})},c=function(e){return(0,a.jsx)(t.Z,{level:3,name:d(e),className:e.className,children:l(e)})},l=function(e){return Object.keys(e).length>1?e.children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#".concat(s(e.children)),children:(0,a.jsx)("span",{className:"icon icon-link"})}),e.children]})},s=function(e){return String(e).replace(".","").replace(" ","-")},d=function(e){if(e.name)return e.name;if(e.id)return e.id;for(var n=Array.isArray(e.children)?Array.from(e.children):[e.children];n.length;){var r,a=n.pop();if("string"===typeof a)return a;if(Array.isArray(a)&&a.length>0)n=n.concat(a);else{if(!(null===a||void 0===a||null===(r=a.props)||void 0===r?void 0:r.children))break;n.push(a.props.children)}}}},34263:function(e,n,r){"use strict";var a=r(85893),t=r(41664),i=r(94184),o=r.n(i),c=r(12194),l=r.n(c);n.Z=function(e){var n=e.children,r=e.size,i=e.href,c=e.deprecated,s="full"===r?l().Full:"half"===r?l().Half:"third"===r?l().Third:"two-third"===r?l().TwoThirds:l().Third;return(0,a.jsx)(t.default,{href:i,children:(0,a.jsxs)("a",{className:o()(l().Container,s),children:[!0===c?(0,a.jsxs)("div",{className:o()("group",l().DeprecationNotice),children:[(0,a.jsx)("span",{className:o()("h-3 w-3 p-0 transform rotate-45 absolute right-[13px] -top-2 bg-orange-10 transition ease-in-out duration-100 opacity-0 group-hover:opacity-100",l().DeprecatedArrow)}),(0,a.jsx)("i",{className:o()("material-icons-sharp",l().DeprecatedIcon),children:"delete"})]}):"",n]})})}},23668:function(e,n,r){"use strict";r.d(n,{Z:function(){return w}});var a=r(85893),t=r(96486),i=r(67294),o=r(94184),c=r.n(o),l=r(93722),s=r(41664),d=r(54601),u=r(13173),_=r(3273),v=r.n(_),h=function(e){var n,r,t=e.slug,o=e.page,l=e.color,d=e.className,_=(0,i.useState)(null),m=_[0],f=_[1],C=(0,u.Z)();/^[\d\.]+$/.test(t[0])&&t.shift();var p,g,N,w,y,I="/".concat(t.join("/")),j=I===o.url,x=I.startsWith(o.url),b=null!==m&&void 0!==m?m:x,k=o.children.filter((function(e){return!1!==e.visible}));(null===(n=o.children)||void 0===n?void 0:n.length)>0&&k.length>0&&b&&(p=(0,a.jsx)("ul",{className:v().List,children:o.children.filter((function(e){return!1!==e.visible})).map((function(e){return(0,a.jsx)(h,{slug:t,page:e,color:l,depth:e.depth+1},e.menu_key)}))})),(null===(r=o.children)||void 0===r?void 0:r.length)>0&&k.length>0&&(g=(0,a.jsx)("div",{className:v().Accordion,children:(0,a.jsx)("i",{className:c()(v().AccordionIcon,b?"close":"open"),onClick:function(){f(!b)},children:b?"remove":"add"})}));var B=o.url,S=o.url.startsWith("/");if(S||(w=(0,a.jsx)("i",{className:v().ExternalIcon,children:"open_in_new"}),y="_blank"),o.isVersioned&&C&&S){var A=o.url.split("/");A[0]=C,B="/".concat(A.join("/"))}return N=(0,a.jsxs)("span",{className:v().LinkContainer,children:[(0,a.jsx)(s.default,{href:B,children:(0,a.jsxs)("a",{className:c()("not-link",v().Link),target:y,children:[(0,a.jsx)("span",{className:c()(v().Circle,j?v().ActiveCircle:"","violet-70"===l?v().LibraryCircle:"l-blue-70"===l?v().CloudCircle:v().KBCircle)}),(0,a.jsx)("span",{className:c()(v().PageName,j&&v().ActivePage),children:o.name}),!0===o.isDeprecated?(0,a.jsx)("i",{className:c()("material-icons-sharp",v().Icon),children:"delete"}):w]})}),g]}),(0,a.jsxs)("li",{className:c()(v().Container,d),children:[N,p]})},m=h,f=r(10284),C=r.n(f),p=function(e){var n,r,t=e.page,i=e.slug,o=e.condensed,l=e.className,u=(0,d.vx)(t,"/".concat(i.join("/"))),_=o||!1,v="violet-70"===t.color?C().LibraryCategory:"l-blue-70"===t.color?C().CloudCategory:C().KBCategory;return v=_||u?v:"",r=(0,a.jsxs)("section",{className:c()(C().HeadingContainer,_?C().CondensedHeadingContainer:""),children:[(0,a.jsx)("div",{className:c()(C().HeadingIconContainer,_?C().CondensedHeadingIconContainer:"","violet-70"===t.color?C().LibraryIcon:"l-blue-70"===t.color?C().CloudIcon:C().KBIcon),children:(0,a.jsx)("i",{className:C().Icon,children:t.icon})}),(0,a.jsx)("p",{className:c()(C().CategoryName,_?C().CondensedCategoryName:"",v),children:t.name})]}),t.children&&t.children.length>0&&(n=(0,a.jsx)("ul",{className:c()(C().SubNav,_?C().CondensedSubNav:C().ExpandedSubNav),children:t.children.map((function(e){return(0,a.jsx)(m,{slug:i,page:e,color:t.color,depth:e.depth+1,className:l},e.menu_key)}))})),t.url.startsWith("/")?(0,a.jsxs)("li",{className:C().NavItem,id:t.menu_key,children:["/library"===t.url?(0,a.jsx)("a",{href:t.url,className:"not-link",children:r}):(0,a.jsx)(s.default,{href:t.url,children:(0,a.jsx)("a",{className:"not-link",children:r})}),n]}):(0,a.jsxs)("li",{className:C().NavItem,id:t.menu_key,children:[(0,a.jsx)("a",{className:"not-link",href:t.url,target:"_blank",children:r}),n]})},g=r(16184),N=r.n(g),w=function(e){var n,r=e.menu,o=e.slug,s=(0,i.useState)(!1),d=s[0],u=s[1],_=(0,i.useState)("none"),v=_[0],h=_[1],m=(0,i.useState)(!1),f=m[0],C=m[1],g=(0,i.useState)(!1),w=g[0],y=g[1],I=(0,i.useState)("light-mode"),j=(I[0],I[1]),x=(0,i.useState)(""),b=(x[0],x[1]),k=function(){j(document.body.dataset.theme)},B=function(){window.innerWidth<1250&&window.innerWidth>=1024?u(!0):u(!1)},S=function(e){var n=window.scrollY,r=e.target.scrollTop;h(n>20?"window":r>5?"scrollbar":"none")},A=(0,t.debounce)(B,200);return(0,i.useEffect)((function(){return window.addEventListener("resize",A),window.addEventListener("scroll",S),window.addEventListener("ChangeTheme",k),l.Z.on("streamlit_nav_open",(function(){return y(!0)})),l.Z.on("streamlit_nav_closed",(function(){return y(!1)})),B(),b(window.location.href),function(){window.removeEventListener("resize",A),window.removeEventListener("scroll",S),window.removeEventListener("ChangeTheme",k)}}),[]),n=r.map((function(e){return(0,a.jsx)(p,{slug:o,page:e,depth:e.depth+1,condensed:d},e.menu_key)})),(0,a.jsxs)("section",{className:c()(N().Container,w?N().OpenNav:N().ClosedNav,f?N().OverNav:N().CollapsedNav,"window"===v&&N().WindowStickyNav),onScroll:function(e){return S(e)},children:[(0,a.jsx)("div",{className:c()(N().TopGradient,"window"===v?N().WindowStickyGradient:"scrollbar"===v?N().ScrollBarStickyGradient:N().StandardGradient)}),(0,a.jsx)("nav",{onMouseEnter:function(){window.innerWidth<1250&&window.innerWidth>=1024&&(u(!1),C(!0))},onMouseLeave:function(){window.innerWidth<1250&&window.innerWidth>=1024&&(u(!0),C(!1))},children:(0,a.jsx)("ul",{className:N().NavList,children:n})})]})}},72496:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var a,t,i=r(85893),o=r(67294),c=r(11163),l=r(94184),s=r.n(l),d=r(28093);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)}var _=function(e){return o.createElement("svg",u({width:36,height:36,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=o.createElement("path",{d:"M30.64 31.565c-2.33 1.682-3.95 2.888-6.768 3.622-2.795.729-5.96.315-8.786.023-5.526-.571-9.762-3.03-12.828-7.693-1.175-1.78-1.78-3.81-1.935-5.928-.07-.945-.061-1.899-.033-2.846.028-.943-.012-1.95.14-2.883.293-1.783.717-3.564 1.381-5.246.69-1.757 1.764-3.026 2.863-4.525C7.926 1.651 14.304.335 19.504.411c1.832.025 3.958.188 5.71.736a14.708 14.708 0 0 1 3.952 1.938c1.229.855 2.28 2.065 3.031 3.358a21.688 21.688 0 0 1 2.093 4.922c.647 2.248 1.339 4.843 1.423 7.186.18 4.773-1.015 10.086-5.074 13.014Z",fill:"#B89278"})),t||(t=o.createElement("path",{d:"M24.086.993a1.873 1.873 0 0 0-.166.604c-.078.656-.115 1.43-.01 2.07.067.422.174 1.168.623 1.353.417.17.819-.056 1.193-.208.405-.166.832-.36 1.263-.472.678-.175 1.316-.63 1.952-.923.537-.244.309-.934-.08-1.243-.27-.216-.593-.39-.874-.61-.3-.24-.686-.442-1.035-.6C26.437.732 25.917.637 25.37.52c-.506-.107-1.03-.03-1.283.473ZM30.949 10.842a1.035 1.035 0 0 0-.52-.163c-.316-.014-.698.048-1.007.087-.428.054-1.005.177-1.376.377-.292.155-.371.262-.34.56.05.554.028 1.069.166 1.617.169.683.22 1.887 1.083 1.991a6.108 6.108 0 0 0 1.755-.07c.354-.068.94-.132 1.237-.335.22-.149.245-.41.245-.666-.003-.53-.242-1.033-.371-1.536-.119-.442-.293-.855-.448-1.28a1.142 1.142 0 0 0-.424-.582ZM15.044 8.747c-.487-.15-1.083.02-1.578.146-.801.205-1.752.264-2.492.636-.424.213-.393 1.077-.402 1.493-.011.416-.04.864-.003 1.277.028.298.034.692.135.973.197.543 1.148.332 1.632.335.92.006 1.783-.222 2.657-.478.231-.065.597-.118.771-.318.135-.158.144-.506.169-.7.062-.524.067-1.004-.031-1.514-.09-.47-.008-1.01-.293-1.428a1.045 1.045 0 0 0-.565-.422ZM8.854 21.1a.96.96 0 0 0-.104-.02c-.29-.037-.58-.087-.895-.118-.329-.034-.627-.068-.962-.074-.48-.005-.933-.118-1.375.189-.169.112-.245.275-.32.441-.335.712-.98 1.75-.417 2.51.588.795 3.879.972 4.278-.006.23-.557.394-1.21.41-1.814.006-.366-.21-1.013-.615-1.109ZM21.746 24.294c.259.585.571 1.106 1.007 1.57.166.174.366.385.543.543.245.213.574.244.886.272.621.062 1.42.088 2.045-.002.509-.074 1.063-.625 1.274-1.092.256-.562.587-.984.495-1.634-.06-.4-.394-.66-.602-.984-.245-.388-.456-.706-.83-.993-.568-.43-1.274-.813-2.005-.666-.765.151-1.373.762-1.918 1.274-.515.48-1.25.916-.895 1.712ZM14.943 30.142c-.698.039-1.39.511-1.924.961-.467.391-.858.62-.596 1.294.41 1.052 1.229 1.885 2.143 2.461.503.318.889.158 1.395-.146.65-.388 2.728-1.494 1.766-2.54-.264-.29-.506-.56-.765-.85-.306-.342-.644-.607-1.024-.882a1.465 1.465 0 0 0-.995-.298ZM25.94 31.86a.864.864 0 0 0-.33-.374c-.683-.453-1.937-.124-2.337.596-.573 1.035 1.367 1.35 1.997 1.007.394-.22.864-.748.67-1.229ZM28.004 29.298c.616.56 2.36.644 2.225-.546-.068-.593-1.432-.697-1.86-.582-.418.115-.745.785-.365 1.128ZM32.797 25.2c.25-.104.444-.287.506-.565.079-.366-.138-.642-.495-.732-.439-.11-1.271-.154-1.592.231-.287.346-.155.703.183.948.334.239.953.304 1.398.118ZM18.04 28.308c.334.005.65-.087.807-.31.25-.348.295-1.164-.192-1.352-.683-.265-2.236.03-1.817 1.06.144.36.695.59 1.201.602ZM26.823 18.863c.326-.008.855-.073.976-.43.079-.225.067-.588-.082-.785-.413-.534-2.27-.337-2.061.546.11.487.64.684 1.167.67ZM31.36 20.334c.762.217 1.937-.601 1.605-1.37-.41-.961-2.565-.295-2.132.873.11.275.296.433.526.497ZM22.587 12.786c.982-.118 1.224-1.16.447-1.505-.945-.42-2.185.776-1.327 1.356.222.151.585.182.88.149Z",fill:"#855C52"})))},v=(r.p,r(85626)),h=r.n(v);function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(n){m(e,n,r[n])}))}return e}var C="InsertAnalyticsCode";var p=function(e){var n=e.title,r=e.content,a=(e.data,(0,c.useRouter)().asPath,Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe"));var t=null!=localStorage.getItem(C);t||a||localStorage.setItem(C,!0);var l=a&&!t,u=(0,o.useState)(l),v=u[0],m=u[1],p=(0,o.useState)("true"==localStorage.getItem(C)),g=p[0],N=p[1];return(0,o.useEffect)((function(){g&&function(){var e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"],e.factory=function(n){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(n),e.push(r),e}};for(var n=0;n<e.methods.length;n++){var r=e.methods[n];e[r]=e.factory(r)}e.load=function(n,r){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.segment.com/analytics.js/v1/"+n+"/analytics.min.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(a,t),e._loadOptions=r},e._writeKey="pUoB6ihRTAFLDtLp2NWEuJvBNtiooQwE",e.SNIPPET_VERSION="4.13.2",e.load("pUoB6ihRTAFLDtLp2NWEuJvBNtiooQwE"),e.page()}}()}),[g]),v?(0,i.jsx)("div",{className:h().Container,children:(0,i.jsxs)("div",{className:h().BannerBackground,children:[(0,i.jsx)("div",{className:h().ImageContainer,children:(0,i.jsx)(_,{className:h().Image})}),(0,i.jsxs)("div",{className:h().TextContainer,children:[(0,i.jsx)("h3",{className:h().Title,children:n}),(0,i.jsx)(d.R,f({},r)),(0,i.jsxs)("div",{className:h().CtasContainer,children:[(0,i.jsx)("button",{onClick:function(e){m(!1);N(false),localStorage.setItem(C,false)},className:s()(h().Button,h().DeclineButton),children:"Decline"}),(0,i.jsx)("button",{onClick:function(e){m(!1);N(true),localStorage.setItem(C,true)},className:s()(h().Button,h().AllowButton),children:"Allow"})]})]})]})}):""}},13173:function(e,n,r){"use strict";var a=r(67294),t=r(22130);n.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=n[n.length-1],o=(0,t.b)(),c=o.version,l=o.setVersion;return r&&r.isVersioned&&e&&l(e===i?null:e),(0,a.useEffect)((function(){r&&r.isVersioned&&l(e===i?null:e)}),[e]),c}},54601:function(e,n){function r(e,n){var a=!1;if(e.url&&e.url===n&&(a=!0),!a&&e.children&&e.children.length>0)for(var t in e.children)a||(a=r(e.children[t],n));return a}n.oH=function e(n,a,t){return t=t||[],n.forEach((function(n){r(n,a)&&(t.push({name:n.name,url:n.url,icon:n.icon,color:n.color}),n.children&&n.children.length>0&&e(n.children,a,t))})),t},n.vx=r},12194:function(e){e.exports={Container:"refCard_Container__LoksC",DeprecatedArrow:"refCard_DeprecatedArrow__h9W9D",DeprecatedIcon:"refCard_DeprecatedIcon__UZvY6",DeprecationNotice:"refCard_DeprecationNotice__NEIi_",Full:"refCard_Full__VYBKc",Half:"refCard_Half__LNH50",TwoThirds:"refCard_TwoThirds__dz99_",Third:"refCard_Third__Au4Xh"}},86909:function(e){e.exports={Container:"container_Container___G6N_",InnerContainer:"container_InnerContainer__gGy_B",ArticleContainer:"container_ArticleContainer__P0WuI","advanced-features":"container_advanced-features__2q_Iv",ContentContainer:"container_ContentContainer__3105j"}},3273:function(e){e.exports={Container:"navChild_Container__uzY5D",dark:"navChild_dark__9_XbJ",List:"navChild_List__U7Y10",Accordion:"navChild_Accordion__KuAkH",AccordionIcon:"navChild_AccordionIcon__TMYJv",ExternalIcon:"navChild_ExternalIcon__T3Tns",ActivePage:"navChild_ActivePage__AifsG",Icon:"navChild_Icon__v_krN",LinkContainer:"navChild_LinkContainer__90x_e",Link:"navChild_Link__AeMWY",Circle:"navChild_Circle__1qcbH",ActiveCircle:"navChild_ActiveCircle__MeXVa",PageName:"navChild_PageName__N8Q5l",LibraryCircle:"navChild_LibraryCircle__IyC4S",CloudCircle:"navChild_CloudCircle__tknZK",KBCircle:"navChild_KBCircle__sDGh0"}},10284:function(e){e.exports={HeadingContainer:"navItem_HeadingContainer__JBzsM",HeadingIconContainer:"navItem_HeadingIconContainer__ABBX1",CondensedHeadingContainer:"navItem_CondensedHeadingContainer__uT_lL",CondensedHeadingIconContainer:"navItem_CondensedHeadingIconContainer__j9tpA",Icon:"navItem_Icon__wRJ_K",LibraryIcon:"navItem_LibraryIcon__3PAjf",CloudIcon:"navItem_CloudIcon__DZsn_",KBIcon:"navItem_KBIcon__BIed4",CategoryName:"navItem_CategoryName__8ILNs",CondensedCategoryName:"navItem_CondensedCategoryName__4oGsw",LibraryCategory:"navItem_LibraryCategory__mt7RI",CloudCategory:"navItem_CloudCategory__iWLNl",KBCategory:"navItem_KBCategory__cjGXO",SubNav:"navItem_SubNav__GUy5S",CondensedSubNav:"navItem_CondensedSubNav__1rmoj",ExpandedSubNav:"navItem_ExpandedSubNav__UPS5S",NavItem:"navItem_NavItem__ApcKe"}},16184:function(e){e.exports={Container:"sideBar_Container__ihGfR",OpenNav:"sideBar_OpenNav__80EON",ClosedNav:"sideBar_ClosedNav__1MFNg",CollapsedNav:"sideBar_CollapsedNav__pEYSt",OverNav:"sideBar_OverNav__fMt2h",OverNavItem:"sideBar_OverNavItem__bPpy8",NavList:"sideBar_NavList__U6cpU",TopGradient:"sideBar_TopGradient__1IuC_",WindowStickyNav:"sideBar_WindowStickyNav__H0I6u",WindowStickyGradient:"sideBar_WindowStickyGradient___Nzdx",ScrollBarStickyGradient:"sideBar_ScrollBarStickyGradient__JsbpF"}},85626:function(e){e.exports={Container:"gdpr_Container__GOc_q",BannerBackground:"gdpr_BannerBackground__PmTiO",Title:"gdpr_Title__Lfyk3",ImageContainer:"gdpr_ImageContainer__dwj6z",CtasContainer:"gdpr_CtasContainer__aTfBw",Button:"gdpr_Button__5Y_Rj",DeclineButton:"gdpr_DeclineButton__qXE_u",AllowButton:"gdpr_AllowButton__wzPQi"}}}]);