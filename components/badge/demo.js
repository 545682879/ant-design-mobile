webpackJsonp([40],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},17:function(n,a,s){"use strict";s(9),s(40)},18:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(4),c=t(o),l=s(6),u=t(l),i=s(5),r=t(i),k=s(1),d=t(k),f=s(39),m=t(f),g=s(3),h=t(g),v=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.children,p=a.className,o=a.style,c=a.renderHeader,l=a.renderFooter,u=(0,h["default"])((n={},(0,e["default"])(n,s,!0),(0,e["default"])(n,p,p),n));return d["default"].createElement("div",{className:u,style:o},c?d["default"].createElement("div",{className:s+"-header"},c()):null,t?d["default"].createElement("div",{className:s+"-body"},t):null,l?d["default"].createElement("div",{className:s+"-footer"},l()):null)},a}(d["default"].Component);a["default"]=v,v.Item=m["default"],v.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},19:function(n,a){"use strict";function s(n){var a={};return Object.keys(n).forEach(function(s){0===s.indexOf("data-")&&(a[s]=n[s])}),a}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},22:function(n,a,s){"use strict";s(31)},31:function(n,a){},39:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=a.Brief=void 0;var p=s(8),e=t(p),o=s(7),c=t(o),l=s(4),u=t(l),i=s(6),r=t(i),k=s(5),d=t(k),f=s(1),m=t(f),g=s(3),h=t(g),v=s(19),b=t(v),x=a.Brief=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){return m["default"].createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)},a}(m["default"].Component),y=function(n){function a(s){(0,u["default"])(this,a);var t=(0,r["default"])(this,n.call(this,s));return t.onClick=function(n){t.props.onClick&&t.props.onClick(n)},t.onTouchStart=function(){t.props.onClick&&t.setState({hover:!0})},t.onTouchEnd=function(){t.props.onClick&&t.setState({hover:!1})},t.state={hover:!1},t}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a,s,t=this.props,p=t.prefixCls,o=t.thumb,l=t.arrow,u=t.error,i=t.children,r=t.extra,k=t.className,d=t.align,f=t.multipleLine,g=t.wrap,v=t.style,x=this.state.hover,y=void 0,E=void 0,L=(0,h["default"])((n={},(0,c["default"])(n,p+"-item",!0),(0,c["default"])(n,p+"-item-error",u),(0,c["default"])(n,p+"-item-top","top"===d),(0,c["default"])(n,p+"-item-middle","middle"===d),(0,c["default"])(n,p+"-item-bottom","bottom"===d),(0,c["default"])(n,p+"-item-hover",x),(0,c["default"])(n,k,k),n)),w=(0,h["default"])((a={},(0,c["default"])(a,p+"-line",!0),(0,c["default"])(a,p+"-line-multiple",f),(0,c["default"])(a,p+"-line-wrap",g),a)),C=(0,h["default"])((s={},(0,c["default"])(s,p+"-arrow",!0),(0,c["default"])(s,p+"-arrow-horizontal","horizontal"===l),(0,c["default"])(s,p+"-arrow-vertical","down"===l||"up"===l),(0,c["default"])(s,p+"-arrow-vertical-up","up"===l),s));return o&&(y="string"==typeof o?m["default"].createElement("div",{className:p+"-thumb"},m["default"].createElement("img",{src:o})):m["default"].createElement("div",{className:p+"-thumb"},o)),E=""!==l?m["default"].createElement("div",{className:C}):null,m["default"].createElement("div",(0,e["default"])({},(0,b["default"])(this.props),{className:L,onClick:this.onClick,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd,style:v}),y,m["default"].createElement("div",{className:w},""!==i?m["default"].createElement("div",{className:p+"-content"},i):null,""!==r?m["default"].createElement("div",{className:p+"-extra"},r):null,E))},a}(m["default"].Component);a["default"]=y,y.Brief=x,y.defaultProps={prefixCls:"am-list",thumb:"",arrow:"",children:"",extra:"",error:!1,multipleLine:!1,align:"middle",wrap:!1},y.myName="ListItem"},40:function(n,a){},321:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(4),c=t(o),l=s(6),u=t(l),i=s(5),r=t(i),k=s(1),d=t(k),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.text,p=s.prefixCls,o=s.overflowCount,c=s.className,l=s.style,u=s.children,i=this.props.dot,r=this.props.size,k=this.props.corner;t=t>o?o+"+":t,i&&(t="");var f=!(t&&"0"!==t||i),g=(0,m["default"])((n={},(0,e["default"])(n,p+"-dot",i),(0,e["default"])(n,p+"-dot-large",i&&"large"===r),(0,e["default"])(n,p+"-text",!i&&!k),(0,e["default"])(n,p+"-corner",k),(0,e["default"])(n,p+"-corner-large",k&&"large"===r),n)),h=(0,m["default"])((a={},(0,e["default"])(a,c,!!c),(0,e["default"])(a,p,!0),(0,e["default"])(a,p+"-not-a-wrapper",!u),(0,e["default"])(a,p+"-corner-wrapper",k),(0,e["default"])(a,p+"-corner-wrapper-large",k&&"large"===r),a));return d["default"].createElement("span",{className:h,title:t},u,!f&&d["default"].createElement("sup",{className:g,style:l},t))},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-badge",text:null,dot:!1,corner:!1,overflowCount:99,size:null},n.exports=a["default"]},322:function(n,a,s){"use strict";s(9),s(22),s(403)},403:function(n,a){},676:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(17),s(18)),e=t(p),o=(s(322),s(321)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[["p","\u7ed3\u5408\u5217\u8868\u7684\u6848\u4f8b\u53c2\u8003"]],meta:{order:4,title:"\u7efc\u5408\u793a\u4f8b",filename:"components/badge/demo/basic.md",id:"components-badge-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Badge <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'\'</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >dot</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token string" >\'0.52rem\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token string" >\'0.52rem\'</span><span class="token punctuation" >,</span> background<span class="token punctuation" >:</span> <span class="token string" >\'#ddd\'</span><span class="token punctuation" >,</span> display<span class="token punctuation" >:</span> <span class="token string" >\'inline-block\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5c0f\u5706\u70b9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n      <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Badge text<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >77</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span>\n      arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n    <span class="token operator" >></span>\n      \u53f3\u4fa7\u5185\u5bb9\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      \u6587\u672c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'new\'</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span><span class="token punctuation" >></span></span>\n      \u96c6\u5408\uff1a\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5238<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span><span class="token punctuation" >,</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'0 6px\'</span><span class="token punctuation" >,</span> backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'#f19736\'</span><span class="token punctuation" >,</span> borderRadius<span class="token punctuation" >:</span> <span class="token number" >2</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>NEW<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span><span class="token punctuation" >,</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'0 6px\'</span><span class="token punctuation" >,</span> backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'#21b68a\'</span><span class="token punctuation" >,</span> borderRadius<span class="token punctuation" >:</span> <span class="token number" >2</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u81ea\u52a8\u7f34\u8d39<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n        marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span><span class="token punctuation" >,</span>\n        padding<span class="token punctuation" >:</span> <span class="token string" >\'0 6px\'</span><span class="token punctuation" >,</span>\n        backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'#fff\'</span><span class="token punctuation" >,</span>\n        borderRadius<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span>\n        color<span class="token punctuation" >:</span> <span class="token string" >\'#f19736\'</span><span class="token punctuation" >,</span>\n        border<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #f19736\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      \u8d85\u51fa<span class="token number" >99</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >100</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(e["default"],{renderHeader:function(){return""}},u["default"].createElement(e["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},u["default"].createElement(c["default"],{dot:!0},u["default"].createElement("span",{style:{width:"0.52rem",height:"0.52rem",background:"#ddd",display:"inline-block"}})),u["default"].createElement("span",{style:{marginLeft:12}},"\u5c0f\u5706\u70b9")),u["default"].createElement(e["default"].Item,{thumb:"https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png",extra:u["default"].createElement(c["default"],{text:77}),arrow:"horizontal"},"\u53f3\u4fa7\u5185\u5bb9"),u["default"].createElement(e["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},"\u6587\u672c\u5185\u5bb9",u["default"].createElement(c["default"],{text:"new",style:{marginLeft:12}})),u["default"].createElement(e["default"].Item,null,"\u96c6\u5408\uff1a",u["default"].createElement(c["default"],{text:4,style:{marginLeft:12}}),u["default"].createElement(c["default"],{text:"\u5238",style:{marginLeft:12,padding:"0 6px",backgroundColor:"#f19736",borderRadius:2}}),u["default"].createElement(c["default"],{text:"NEW",style:{marginLeft:12,padding:"0 6px",backgroundColor:"#21b68a",borderRadius:2}}),u["default"].createElement(c["default"],{text:"\u81ea\u52a8\u7f34\u8d39",style:{marginLeft:12,padding:"0 6px",backgroundColor:"#fff",borderRadius:2,color:"#f19736",border:"1px solid #f19736"}})),u["default"].createElement(e["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},"\u8d85\u51fa99",u["default"].createElement(c["default"],{text:100,style:{marginLeft:12}})))}}},885:function(n,a,s){n.exports={basic:s(676)}}});