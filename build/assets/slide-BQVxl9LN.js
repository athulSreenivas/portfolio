import{r as G,p as J,b as de,g as ve}from"./index-C6cgQBGM.js";function pe(f,m){for(var h=0;h<m.length;h++){const d=m[h];if(typeof d!="string"&&!Array.isArray(d)){for(const i in d)if(i!=="default"&&!(i in f)){const C=Object.getOwnPropertyDescriptor(d,i);C&&Object.defineProperty(f,i,C.get?C:{enumerable:!0,get:()=>d[i]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var z={exports:{}},H={exports:{}},K={exports:{}};(function(f,m){Object.defineProperty(m,"__esModule",{value:!0});var h={overlay:function(i){return{position:"fixed",zIndex:1e3,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:i?1:0,MozTransform:i?"":"translate3d(100%, 0, 0)",MsTransform:i?"":"translate3d(100%, 0, 0)",OTransform:i?"":"translate3d(100%, 0, 0)",WebkitTransform:i?"":"translate3d(100%, 0, 0)",transform:i?"":"translate3d(100%, 0, 0)",transition:i?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(i,C,u){return{position:"fixed",right:u?0:"inherit",zIndex:1100,width:C,height:"100%",MozTransform:i?"":u?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:i?"":u?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:i?"":u?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:i?"":u?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:i?"":u?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block"}}};m.default=h,f.exports=m.default})(K,K.exports);var ye=K.exports,M={};Object.defineProperty(M,"__esModule",{value:!0});M.focusOnFirstMenuItem=te;M.focusOnLastMenuItem=ne;M.focusOnCrossButton=re;M.focusOnMenuButton=ge;M.focusOnMenuItem=Q;M.focusOnNextMenuItem=he;M.focusOnPreviousMenuItem=be;function te(){var f=Array.from(document.getElementsByClassName("bm-item")).shift();f&&f.focus()}function ne(){var f=Array.from(document.getElementsByClassName("bm-item")).pop();f&&f.focus()}function re(){var f=document.getElementById("react-burger-cross-btn");f&&f.focus()}function ge(){var f=document.getElementById("react-burger-menu-btn");f&&f.focus()}function Q(f){if(document.activeElement.className.includes("bm-item")){var m=document.activeElement[f];m?m.focus():re()}else f==="previousElementSibling"?ne():te()}function he(){Q("nextElementSibling")}function be(){Q("previousElementSibling")}var $={exports:{}};(function(f,m){Object.defineProperty(m,"__esModule",{value:!0});var h=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(o[a]=l[a])}return o},d=function(){function o(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,l,a){return l&&o(e.prototype,l),a&&o(e,a),e}}(),i=function(e,l,a){var t=!0;e:for(;t;){var c=e,v=l,y=a;t=!1,c===null&&(c=Function.prototype);var b=Object.getOwnPropertyDescriptor(c,v);if(b===void 0){var N=Object.getPrototypeOf(c);if(N===null)return;e=N,l=v,a=y,t=!0,b=N=void 0;continue e}else{if("value"in b)return b.value;var S=b.get;return S===void 0?void 0:S.call(y)}}};function C(o){return o&&o.__esModule?o:{default:o}}function u(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function A(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(o,e):o.__proto__=e)}var x=G,r=C(x),D=J,E=C(D),I=function(o){A(e,o);function e(l){u(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,l),this.state={hover:!1}}return d(e,[{key:"getLineStyle",value:function(a){return h({position:"absolute",height:"20%",left:0,right:0,top:20*(a*2)+"%",opacity:this.state.hover?.6:1},this.state.hover&&this.props.styles.bmBurgerBarsHover)}},{key:"render",value:function(){var a=this,t=void 0,c={position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"};if(this.props.customIcon){var v={className:("bm-icon "+(this.props.customIcon.props.className||"")).trim(),style:h({width:"100%",height:"100%"},this.props.styles.bmIcon)};t=r.default.cloneElement(this.props.customIcon,v)}else t=r.default.createElement("span",null,[0,1,2].map(function(y){return r.default.createElement("span",{key:y,className:("bm-burger-bars "+a.props.barClassName+" "+(a.state.hover?"bm-burger-bars-hover":"")).trim(),style:h({},a.getLineStyle(y),a.props.styles.bmBurgerBars)})}));return r.default.createElement("div",{className:("bm-burger-button "+this.props.className).trim(),style:h({zIndex:1e3},this.props.styles.bmBurgerButton)},r.default.createElement("button",{type:"button",id:"react-burger-menu-btn",onClick:this.props.onClick,onMouseOver:function(){a.setState({hover:!0}),a.props.onIconHoverChange&&a.props.onIconHoverChange({isMouseIn:!0})},onMouseOut:function(){a.setState({hover:!1}),a.props.onIconHoverChange&&a.props.onIconHoverChange({isMouseIn:!1})},style:c},"Open Menu"),t)}}]),e}(x.Component);m.default=I,I.propTypes={barClassName:E.default.string,customIcon:E.default.element,styles:E.default.object},I.defaultProps={barClassName:"",className:"",styles:{}},f.exports=m.default})($,$.exports);var Oe=$.exports,U={exports:{}};(function(f,m){Object.defineProperty(m,"__esModule",{value:!0});var h=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(o[a]=l[a])}return o},d=function(){function o(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,l,a){return l&&o(e.prototype,l),a&&o(e,a),e}}(),i=function(e,l,a){var t=!0;e:for(;t;){var c=e,v=l,y=a;t=!1,c===null&&(c=Function.prototype);var b=Object.getOwnPropertyDescriptor(c,v);if(b===void 0){var N=Object.getPrototypeOf(c);if(N===null)return;e=N,l=v,a=y,t=!0,b=N=void 0;continue e}else{if("value"in b)return b.value;var S=b.get;return S===void 0?void 0:S.call(y)}}};function C(o){return o&&o.__esModule?o:{default:o}}function u(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function A(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(o,e):o.__proto__=e)}var x=G,r=C(x),D=J,E=C(D),I=function(o){A(e,o);function e(){u(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return d(e,[{key:"getCrossStyle",value:function(a){return{position:"absolute",width:3,height:14,transform:a==="before"?"rotate(45deg)":"rotate(-45deg)"}}},{key:"render",value:function(){var a=this,t,c={position:"absolute",width:24,height:24,right:8,top:8},v={position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"};if(this.props.customIcon){var y={className:("bm-cross "+(this.props.customIcon.props.className||"")).trim(),style:h({width:"100%",height:"100%"},this.props.styles.bmCross)};t=r.default.cloneElement(this.props.customIcon,y)}else t=r.default.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map(function(b,N){return r.default.createElement("span",{key:N,className:("bm-cross "+a.props.crossClassName).trim(),style:h({},a.getCrossStyle(b),a.props.styles.bmCross)})}));return r.default.createElement("div",{className:("bm-cross-button "+this.props.className).trim(),style:h({},c,this.props.styles.bmCrossButton)},r.default.createElement("button",h({type:"button",id:"react-burger-cross-btn",onClick:this.props.onClick,style:v},!this.props.isOpen&&{tabIndex:-1}),"Close Menu"),t)}}]),e}(x.Component);m.default=I,I.propTypes={crossClassName:E.default.string,customIcon:E.default.element,isOpen:E.default.bool,styles:E.default.object},I.defaultProps={crossClassName:"",className:"",styles:{},isOpen:!1},f.exports=m.default})(U,U.exports);var Ce=U.exports;(function(f,m){Object.defineProperty(m,"__esModule",{value:!0});var h=function(){function t(c,v){var y=[],b=!0,N=!1,S=void 0;try{for(var W=c[Symbol.iterator](),k;!(b=(k=W.next()).done)&&(y.push(k.value),!(v&&y.length===v));b=!0);}catch(T){N=!0,S=T}finally{try{!b&&W.return&&W.return()}finally{if(N)throw S}}return y}return function(c,v){if(Array.isArray(c))return c;if(Symbol.iterator in Object(c))return t(c,v);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=Object.assign||function(t){for(var c=1;c<arguments.length;c++){var v=arguments[c];for(var y in v)Object.prototype.hasOwnProperty.call(v,y)&&(t[y]=v[y])}return t};function i(t){return t&&t.__esModule?t:{default:t}}var C=G,u=i(C),A=de;i(A);var x=J,r=i(x),D=ye,E=i(D),I=M,o=Oe,e=i(o),l=Ce,a=i(l);m.default=function(t){if(!t)throw new Error("No styles supplied");var c="ArrowDown",v="ArrowUp",y="Escape",b=" ",N="Home",S="End";function W(T){var n=u.default.useRef(T);return u.default.useEffect(function(){n.current=T}),n.current}var k=function(n){var oe=u.default.useState(!1),V=h(oe,2),w=V[0],se=V[1],j=u.default.useRef(),X=u.default.useRef({}),ue=W(n.isOpen);u.default.useEffect(function(){return n.isOpen&&P({isOpen:!0,noStateChange:!0}),function(){q(!1),Z()}},[]),u.default.useEffect(function(){var s=typeof n.isOpen<"u"&&n.isOpen!==w&&n.isOpen!==ue;if(s){P();return}t.svg&&function(){var O=document.getElementById("bm-morph-shape"),g=t.svg.lib(O).select("path");w?t.svg.animate(g):setTimeout(function(){g.attr("d",t.svg.pathInitial)},300)}()}),u.default.useEffect(function(){var s=X.current,O=s.noStateChange,g=s.focusOnLastItem;O||n.onStateChange({isOpen:w}),n.disableAutoFocus||(w?g?(0,I.focusOnLastMenuItem)():(0,I.focusOnFirstMenuItem)():document.activeElement?document.activeElement.blur():document.body.blur()),Z(),j.current=setTimeout(function(){j.current=null,w||q(!1)},500);var _=w?ie:fe,p=n.customOnKeyDown||_;return window.addEventListener("keydown",p),function(){window.removeEventListener("keydown",p)}},[w]);function P(){var s=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];X.current=s,q(),setTimeout(function(){se(function(O){return typeof s.isOpen<"u"?s.isOpen:!O})})}function le(){typeof n.onOpen=="function"?n.onOpen():P()}function R(){typeof n.onClose=="function"?n.onClose():P()}function F(s,O){var g=n.width,_=n.right,p=typeof g!="string"?g+"px":g;return s(w,p,_,O)}function B(s,O,g){var _="bm"+s.replace(s.charAt(0),s.charAt(0).toUpperCase()),p=E.default[s]?F(E.default[s]):{};return t[s]&&(p=d({},p,F(t[s],O+1))),n.styles[_]&&(p=d({},p,n.styles[_])),g&&(p=d({},p,g)),n.noTransition&&delete p.transition,p}function Y(s,O,g){var _=document.getElementById(s);if(!_){console.error("Element with ID '"+s+"' not found");return}var p=F(O);for(var L in p)p.hasOwnProperty(L)&&(_.style[L]=g?p[L]:"");var ee=function(me){return me.style["overflow-x"]=g?"hidden":""};n.htmlClassName||ee(document.querySelector("html")),n.bodyClassName||ee(document.querySelector("body"))}function q(){var s=arguments.length<=0||arguments[0]===void 0?!0:arguments[0],O=function(p,L){return p.classList[s?"add":"remove"](L)};n.htmlClassName&&O(document.querySelector("html"),n.htmlClassName),n.bodyClassName&&O(document.querySelector("body"),n.bodyClassName),t.pageWrap&&n.pageWrapId&&Y(n.pageWrapId,t.pageWrap,s),t.outerContainer&&n.outerContainerId&&Y(n.outerContainerId,t.outerContainer,s);var g=document.querySelector(".bm-menu-wrap");g&&(s?g.removeAttribute("hidden"):g.setAttribute("hidden",!0))}function Z(){j.current&&clearTimeout(j.current)}function ie(s){switch(s=s||window.event,s.key){case y:n.disableCloseOnEsc||(R(),(0,I.focusOnMenuButton)());break;case c:(0,I.focusOnNextMenuItem)();break;case v:(0,I.focusOnPreviousMenuItem)();break;case N:(0,I.focusOnFirstMenuItem)();break;case S:(0,I.focusOnLastMenuItem)();break}}function fe(s){if(s=s||window.event,s.target===document.getElementById("react-burger-menu-btn"))switch(s.key){case c:case b:P();break;case v:P({focusOnLastItem:!0});break}}function ce(){n.disableOverlayClick===!0||typeof n.disableOverlayClick=="function"&&n.disableOverlayClick()||R()}return u.default.createElement("div",null,!n.noOverlay&&u.default.createElement("div",{className:("bm-overlay "+n.overlayClassName).trim(),onClick:ce,style:B("overlay")}),n.customBurgerIcon!==!1&&u.default.createElement("div",{style:B("burgerIcon")},u.default.createElement(e.default,{onClick:le,styles:n.styles,customIcon:n.customBurgerIcon,className:n.burgerButtonClassName,barClassName:n.burgerBarClassName,onIconStateChange:n.onIconStateChange})),u.default.createElement("div",{id:n.id,className:("bm-menu-wrap "+n.className).trim(),style:B("menuWrap"),"aria-hidden":!w},t.svg&&u.default.createElement("div",{id:"bm-morph-shape",className:("bm-morph-shape "+n.morphShapeClassName).trim(),style:B("morphShape")},u.default.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 800",preserveAspectRatio:"none"},u.default.createElement("path",{d:t.svg.pathInitial}))),u.default.createElement("div",{className:("bm-menu "+n.menuClassName).trim(),style:B("menu")},u.default.createElement(n.itemListElement,{className:("bm-item-list "+n.itemListClassName).trim(),style:B("itemList")},u.default.Children.map(n.children,function(s,O){if(s){var g=["bm-item",n.itemClassName,s.props.className].filter(function(p){return!!p}).join(" "),_=d({key:O,className:g,style:B("item",O,s.props.style)},!w&&{tabIndex:-1});return u.default.cloneElement(s,_)}}))),n.customCrossIcon!==!1&&u.default.createElement("div",{style:B("closeButton")},u.default.createElement(a.default,{onClick:R,styles:n.styles,customIcon:n.customCrossIcon,className:n.crossButtonClassName,crossClassName:n.crossClassName,isOpen:w}))))};return k.propTypes={bodyClassName:r.default.string,burgerBarClassName:r.default.string,burgerButtonClassName:r.default.string,className:r.default.string,crossButtonClassName:r.default.string,crossClassName:r.default.string,customBurgerIcon:r.default.oneOfType([r.default.element,r.default.oneOf([!1])]),customCrossIcon:r.default.oneOfType([r.default.element,r.default.oneOf([!1])]),customOnKeyDown:r.default.func,disableAutoFocus:r.default.bool,disableCloseOnEsc:r.default.bool,disableOverlayClick:r.default.oneOfType([r.default.bool,r.default.func]),htmlClassName:r.default.string,id:r.default.string,isOpen:r.default.bool,itemClassName:r.default.string,itemListClassName:r.default.string,itemListElement:r.default.oneOf(["div","nav"]),menuClassName:r.default.string,morphShapeClassName:r.default.string,noOverlay:r.default.bool,noTransition:r.default.bool,onClose:r.default.func,onIconHoverChange:r.default.func,onOpen:r.default.func,onStateChange:r.default.func,outerContainerId:t&&t.outerContainer?r.default.string.isRequired:r.default.string,overlayClassName:r.default.string,pageWrapId:t&&t.pageWrap?r.default.string.isRequired:r.default.string,right:r.default.bool,styles:r.default.object,width:r.default.oneOfType([r.default.number,r.default.string])},k.defaultProps={bodyClassName:"",burgerBarClassName:"",burgerButtonClassName:"",className:"",crossButtonClassName:"",crossClassName:"",disableAutoFocus:!1,disableCloseOnEsc:!1,htmlClassName:"",id:"",itemClassName:"",itemListClassName:"",menuClassName:"",morphShapeClassName:"",noOverlay:!1,noTransition:!1,onStateChange:function(){},outerContainerId:"",overlayClassName:"",pageWrapId:"",styles:{},width:300,onIconHoverChange:function(){},itemListElement:"nav"},k},f.exports=m.default})(H,H.exports);var Ie=H.exports;(function(f,m){Object.defineProperty(m,"__esModule",{value:!0});function h(u){return u&&u.__esModule?u:{default:u}}var d=Ie,i=h(d),C={};m.default=(0,i.default)(C),f.exports=m.default})(z,z.exports);var ae=z.exports;const Ne=ve(ae),we=pe({__proto__:null,default:Ne},[ae]);export{we as s};