(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,a,t){e.exports=t(284)},146:function(e,a,t){},283:function(e,a,t){},284:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(7),r=t.n(c),s=(t(146),t(15)),m=t(16),i=t(18),o=t(17),u=t(19),p=t(96),d=t(14),h=(t(285),t(76)),b=t(11),f=t(101),E=(t(103),t(73)),g=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,k=function(e,a){var t=0===e.name.indexOf("title")?"h1":"div";t=e.href?"a":t;var l="string"===typeof e.children&&e.children.match(g)?n.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(l=n.a.createElement(E.a,Object(f.a)({},e.children))),n.a.createElement(t,Object(f.a)({key:a.toString()},e),l)},N=h.a.Item,v=h.a.SubMenu,w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).phoneClick=function(){var e=!t.state.phoneOpen;t.setState({phoneOpen:e})},t.state={phoneOpen:void 0},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.dataSource,l=a.isMobile,c=Object(d.a)(a,["dataSource","isMobile"]),r=this.state.phoneOpen,s=t.Menu.children.map(function(e){var a=e.children,t=e.subItem,l=Object(d.a)(e,["children","subItem"]);return t?n.a.createElement(v,Object.assign({key:e.name},l,{title:n.a.createElement("div",Object.assign({},a,{className:"header0-item-block ".concat(a.className).trim()}),a.children.map(k)),popupClassName:"header0-item-child"}),t.map(function(e,a){var t=e.children,l=t.href?n.a.createElement("a",t,t.children.map(k)):n.a.createElement("div",t,t.children.map(k));return n.a.createElement(N,Object.assign({key:e.name||a.toString()},e),l)})):n.a.createElement(N,Object.assign({key:e.name},l),n.a.createElement("a",Object.assign({},a,{className:"header0-item-block ".concat(a.className).trim()}),a.children.map(k)))}),m=void 0===r?300:null;return n.a.createElement(b.a,Object.assign({component:"header",animation:{opacity:0,type:"from"}},t.wrapper,c),n.a.createElement("div",Object.assign({},t.page,{className:"".concat(t.page.className).concat(r?" open":"")}),n.a.createElement(b.a,Object.assign({animation:{x:-30,type:"from",ease:"easeOutQuad"}},t.logo),n.a.createElement("img",{width:"100%",src:t.logo.children,alt:"img"})),l&&n.a.createElement("div",Object.assign({},t.mobileMenu,{onClick:function(){e.phoneClick()}}),n.a.createElement("em",null),n.a.createElement("em",null),n.a.createElement("em",null)),n.a.createElement(b.a,Object.assign({},t.Menu,{animation:l?{height:0,duration:300,onComplete:function(a){e.state.phoneOpen&&(a.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:m,reverse:!!r}),n.a.createElement(h.a,{mode:l?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark"},s))))}}]),a}(n.a.Component),y=t(36),j=t(29),O=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=Object(y.a)({},this.props),a=e.dataSource;return delete e.dataSource,delete e.isMobile,n.a.createElement("div",Object.assign({},e,a.wrapper),n.a.createElement(j.a,Object.assign({key:"QueueAnim",type:["bottom","top"],delay:200},a.textWrapper),n.a.createElement("div",Object.assign({key:"title"},a.title),"string"===typeof a.title.children&&a.title.children.match(g)?n.a.createElement("img",{src:a.title.children,width:"100%",alt:"img"}):a.title.children),n.a.createElement("div",Object.assign({key:"content"},a.content),a.content.children),n.a.createElement(E.a,Object.assign({ghost:!0,key:"button"},a.button),a.button.children)),n.a.createElement(b.a,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",key:"icon"}))}}]),a}(n.a.PureComponent),x=(t(69),t(37)),_=(t(70),t(30)),z=(t(255),t(100)),S=t(27),M=t.n(S),W=t(290),C=z.a.TabPane,P=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).onChange=function(e){t.setState({current:parseFloat(e)})},t.getBlockChildren=function(e,a){var l=e.tag,c=e.content,r=c.text,s=c.img,m=r.children,i=l.icon,o=i.children,u=l.text;return n.a.createElement(C,{key:a+1,tab:n.a.createElement("div",{className:l.className},n.a.createElement(W.a,{type:o,className:i.className}),n.a.createElement("div",u,u.children)),className:e.className},n.a.createElement(b.a.TweenOneGroup,{enter:{y:30,delay:300,opacity:0,type:"from",ease:"easeOutQuad"},leave:null,component:""},t.state.current===a+1&&n.a.createElement(x.a,{key:"content",className:c.className,gutter:c.gutter},n.a.createElement(_.a,{className:r.className,xs:r.xs,md:r.md},m),n.a.createElement(_.a,{className:s.className,xs:s.xs,md:s.md},n.a.createElement("img",{src:s.children,width:"100%",alt:"img"})))))},t.state={current:1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=Object(y.a)({},this.props),a=e.dataSource;delete e.dataSource,delete e.isMobile;var t=a.block.children.map(this.getBlockChildren);return n.a.createElement("div",Object.assign({},e,a.wrapper),n.a.createElement("div",a.page,n.a.createElement("div",a.titleWrapper,a.titleWrapper.children.map(k)),n.a.createElement(M.a,a.OverPack,n.a.createElement(b.a.TweenOneGroup,Object.assign({key:"tabs",enter:{y:30,opacity:0,delay:200,type:"from"},leave:{y:30,opacity:0}},a.tabsWrapper),n.a.createElement(z.a,Object.assign({key:"tabs",onChange:this.onChange,activeKey:"".concat(this.state.current)},a.block),t)))))}}]),a}(n.a.Component),R=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.dataSource,t=(e.isMobile,Object(d.a)(e,["dataSource","isMobile"])),l=a.wrapper,c=a.titleWrapper,r=a.page,s=a.OverPack,m=a.childWrapper;return n.a.createElement("div",Object.assign({},t,l),n.a.createElement("div",r,n.a.createElement("div",c,c.children.map(k)),n.a.createElement(M.a,s,n.a.createElement(j.a,{type:"bottom",key:"block",leaveReverse:!0,component:x.a,componentProps:m},m.children.map(function(e,a){var t=e.children,l=Object(d.a)(e,["children"]);return n.a.createElement(_.a,Object.assign({key:a.toString()},l),n.a.createElement("div",t,t.children.map(k)))})))))}}]),a}(n.a.PureComponent);var F,B=function(e){var a=e.dataSource,t=(e.isMobile,Object(d.a)(e,["dataSource","isMobile"])),l=a.blockWrapper,c=a.titleWrapper,r=l.children.map(function(e,a){return n.a.createElement(_.a,Object.assign({},e,{key:a.toString()}),n.a.createElement("a",e.children,e.children.children.map(k)))});return n.a.createElement("div",Object.assign({},t,a.wrapper),n.a.createElement("div",a.page,n.a.createElement("div",a.titleWrapper,c.children.map(k)),n.a.createElement(M.a,a.OverPack,n.a.createElement(j.a,Object.assign({key:"queue",type:"bottom",leaveReverse:!0,interval:50,component:x.a},l),r))))},q=(t(271),t(138)),T=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).onTitleClick=function(e,a){t.carouselRef.current.childRefs.carousel.goTo(a)},t.onBeforeChange=function(e,a){t.setState({current:a})},t.getChildrenToRender=function(e){var a=t.state.current,l=e.Carousel,c=e.childWrapper,r=l.children,s=(l.wrapper,Object(d.a)(l,["children","wrapper"])),m=r.titleWrapper,i=r.children,o=Object(d.a)(r,["titleWrapper","children"]),u=(m.barWrapper,m.title),p=Object(d.a)(m,["barWrapper","title"]),h=[],b=i.map(function(e,l){var c=e.title,r=e.children,s=Object(d.a)(e,["title","children"]);i.length>1&&h.push(n.a.createElement("div",Object.assign({},c,{key:l.toString(),onClick:function(e){t.onTitleClick(e,l)},className:l===a?"".concat(c.className||""," active"):c.className}),c.children));var m=r.map(function(e,a){var t=e.children,l=e.arrow,c=Object(d.a)(e,["children","arrow"]),r=Object(y.a)({},t);return n.a.createElement(_.a,Object.assign({},c,{key:a.toString()}),n.a.createElement("div",r,t.children.map(k)),l&&n.a.createElement("div",l,n.a.createElement("img",{src:l.children,alt:"img"})))});return n.a.createElement("div",{key:l.toString()},n.a.createElement(j.a,Object.assign({component:x.a,type:"bottom",componentProps:{type:"flex"}},s),m))});return n.a.createElement(j.a,Object.assign({key:"queue",type:"bottom",ref:t.carouselRef},o),i.length>1&&n.a.createElement("div",Object.assign({},p,{key:"title"}),n.a.createElement("div",u,h)),n.a.createElement(q.a,Object.assign({key:"carousel"},s,{infinite:!1,beforeChange:t.onBeforeChange}),b),n.a.createElement("div",Object.assign({key:"button"},c),c.children.map(k)))},t.carouselRef=n.a.createRef(),t.state={current:0},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.dataSource,t=(e.isMobile,Object(d.a)(e,["dataSource","isMobile"])),l=a.titleWrapper;return n.a.createElement("div",Object.assign({},t,a.wrapper),n.a.createElement("div",a.page,n.a.createElement("div",a.titleWrapper,l.children.map(k)),n.a.createElement(M.a,a.OverPack,this.getChildrenToRender(a))))}}]),a}(n.a.PureComponent),I=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=Object(y.a)({},this.props),a=e.dataSource;return delete e.dataSource,delete e.isMobile,n.a.createElement("div",Object.assign({},e,a.wrapper),n.a.createElement(M.a,a.OverPack,n.a.createElement(b.a,Object.assign({animation:{y:"+=30",opacity:0,type:"from"},key:"footer"},a.copyright),a.copyright.children)))}}]),a}(n.a.PureComponent),A={wrapper:{className:"header0 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header0-logo",children:"https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg"},Menu:{className:"header0-menu",children:[{name:"item0",className:"header0-item",children:{href:"#",children:[{children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u9996\u9875"))),name:"text"}]},subItem:null},{name:"item1",className:"header0-item",children:{href:"#",children:[{children:n.a.createElement("span",null,n.a.createElement("p",null,"\u6210\u5458\u98ce\u91c7")),name:"text"}]}},{name:"item~lrezj6oc0zg",className:"header0-item",children:{href:"#",children:[{children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u798fuu"))),name:"text"}]}},{name:"item~lrezj7o66eo",className:"header0-item",children:{href:"#",children:[{children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u52a0\u5165\u6211\u4eec"))),name:"text"}]}}]},mobileMenu:{className:"header0-mobile-menu"}},U={wrapper:{className:"banner0 lrewhglq7n-editor_css"},textWrapper:{className:"banner0-text-wrapper"},title:{className:"banner0-title",children:"https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"},content:{className:"banner0-content lrf094brh69-editor_css",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u798f\u5dde\u5927\u5b66\u897f\u4e8c\u5728\u7ebf\u5de5\u4f5c\u5ba4\uff0c\u6210\u7acb\u4e8e1998\u5e74\u3002 \u662f\u96c6\u7f8e\u8c8c\u4e0e\u667a\u6167\u4e8e\u4e00\u8eab\u7684\u5b66\u751f\u7ec4\u7ec7\u3002\u59cb\u4e8e\u60c5\u6000\uff0c\u7cbe\u4e8e\u6280\u672f\uff0c\u91cd\u4e8e\u4f20\u627f\u3002\u6211\u4eec\u8fde\u63a5\u6821\u5185\u5916\u4f18\u79c0\u5b66\u751f\u8d44\u6e90\uff0c\u5e2e\u52a9\u5b66\u751f\u5728\u4e92\u8054\u7f51\u9886\u57df\u5185\u6709\u66f4\u597d\u7684\u53d1\u5c55\uff0c\u662f\u63d0\u9ad8\u4e2a\u4eba\u80fd\u529b\uff0c\u57f9\u517b\u4f18\u79c0\u4eba\u624d\u7684\u5b75\u5316\u5668",n.a.createElement("br",null)))))))},button:{className:"banner0-button",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u4e86\u89e3\u66f4\u591a")))}},G={wrapper:{className:"home-page-wrapper content7-wrapper"},page:{className:"home-page content7"},OverPack:{},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u6211\u4eec\u7684\u4f18\u52bf")),className:"title-h1"},{name:"content",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u5728\u897f\u4e8c\u5728\u7ebf\uff0c\u4f60\u53ef\u4ee5\u5b66\u4e60\u5230\u6700\u524d\u6cbf\u7684\u77e5\u8bc6,\u4ee5\u53ca\u6700\u8d34\u8fd1\u4f01\u4e1a\u7814\u53d1\u7684\u6280\u672f\u3002\u65e0\u8bba\u4f60\u672a\u6765\u662f\u60f3\u5c31\u4e1a\u8fd8\u662f\u4fdd\u7814\uff0c\u52a0\u5165\u6211\u4eec\u90fd\u5c06\u662f\u6b63\u786e\u7684\u9009\u62e9"))))}]},tabsWrapper:{className:"content7-tabs-wrapper"},block:{children:[{name:"block0",tag:{className:"content7-tag",text:{children:n.a.createElement("span",null,n.a.createElement("p",null,"\u9762\u5411\u5c31\u4e1a")),className:"content7-tag-name"},icon:{children:"mobile"}},content:{className:"content7-content",text:{className:"content7-text",md:14,xs:24,children:n.a.createElement("span",null,n.a.createElement("h3",null,"\u6280\u672f"),n.a.createElement("p",null,"\u4e30\u5bcc\u7684\u6280\u672f\u7ec4\u4ef6\uff0c\u7b80\u5355\u7ec4\u88c5\u5373\u53ef\u5feb\u901f\u642d\u5efa\u91d1\u878d\u7ea7\u5e94\u7528\uff0c\u4e30\u5bcc\u7684\u6280\u672f\u7ec4\u4ef6\uff0c\u7b80\u5355\u7ec4\u88c5\u5373\u53ef\u5feb\u901f\u642d\u5efa\u91d1\u878d\u7ea7\u5e94\u7528\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u878d\u5408"),n.a.createElement("p",null,"\u89e3\u653e\u4e1a\u52a1\u53ca\u6280\u672f\u751f\u4ea7\u529b\uff0c\u63a8\u52a8\u91d1\u878d\u670d\u52a1\u5e95\u5c42\u521b\u65b0\uff0c\u63a8\u52a8\u91d1\u878d\u670d\u52a1\u5e95\u5c42\u521b\u65b0\u3002\u89e3\u653e\u4e1a\u52a1\u53ca\u6280\u672f\u751f\u4ea7\u529b\uff0c\u63a8\u52a8\u91d1\u878d\u670d\u52a1\u5e95\u5c42\u521b\u65b0\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u5f00\u653e"),"\u7b26\u5408\u91d1\u878d\u53ca\u8981\u6c42\u7684\u5b89\u5168\u53ef\u9760\u3001\u9ad8\u53ef\u7528\u3001\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u80fd\u529b\uff0c\u7b26\u5408\u91d1\u878d\u53ca\u8981\u6c42\u7684\u5b89\u5168\u53ef\u9760\u3001\u9ad8\u53ef\u7528\u3001\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u80fd\u529b\u3002")},img:{className:"content7-img",children:"https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",md:10,xs:24}}},{name:"block1",tag:{className:"content7-tag",icon:{children:"tablet"},text:{className:"content7-tag-name",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u9762\u5411\u4fdd\u7814"))}},content:{className:"content7-content",text:{className:"content7-text",md:14,xs:24,children:n.a.createElement("span",null,n.a.createElement("h3",null,"\u6280\u672f"),n.a.createElement("p",null,"\u4e30\u5bcc\u7684\u6280\u672f\u7ec4\u4ef6\uff0c\u7b80\u5355\u7ec4\u88c5\u5373\u53ef\u5feb\u901f\u642d\u5efa\u91d1\u878d\u7ea7\u5e94\u7528\uff0c\u4e30\u5bcc\u7684\u6280\u672f\u7ec4\u4ef6\uff0c\u7b80\u5355\u7ec4\u88c5\u5373\u53ef\u5feb\u901f\u642d\u5efa\u91d1\u878d\u7ea7\u5e94\u7528\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u878d\u5408"),n.a.createElement("p",null,"\u89e3\u653e\u4e1a\u52a1\u53ca\u6280\u672f\u751f\u4ea7\u529b\uff0c\u63a8\u52a8\u91d1\u878d\u670d\u52a1\u5e95\u5c42\u521b\u65b0\uff0c\u63a8\u52a8\u91d1\u878d\u670d\u52a1\u5e95\u5c42\u521b\u65b0\u3002\u89e3\u653e\u4e1a\u52a1\u53ca\u6280\u672f\u751f\u4ea7\u529b\uff0c\u63a8\u52a8\u91d1\u878d\u670d\u52a1\u5e95\u5c42\u521b\u65b0\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u5f00\u653e"),"\u7b26\u5408\u91d1\u878d\u53ca\u8981\u6c42\u7684\u5b89\u5168\u53ef\u9760\u3001\u9ad8\u53ef\u7528\u3001\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u80fd\u529b\uff0c\u7b26\u5408\u91d1\u878d\u53ca\u8981\u6c42\u7684\u5b89\u5168\u53ef\u9760\u3001\u9ad8\u53ef\u7528\u3001\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u80fd\u529b\u3002")},img:{className:"content7-img",md:10,xs:24,children:"https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png"}}}]}},J={wrapper:{className:"home-page-wrapper content0-wrapper"},page:{className:"home-page content0"},OverPack:{playScale:[.5,.5],className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u5b75\u5316\u4ea7\u54c1"))},{name:"content~lrezcz4kvvm",className:"",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u6211\u4eec\u9762\u5411\u798f\u5927\u5b66\u5b50\u7684\u6821\u56ed\u751f\u6d3b\uff0c\u521b\u9020\u4e86\u591a\u4e2a\u4ea7\u54c1"))}]},childWrapper:{className:"content0-block-wrapper lreyb6uwrv-editor_css",children:[{name:"block0",className:"content0-block",md:12,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://img.w2fzu.com/assets/index/202401152141898.png"},{name:"title",className:"content0-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u798fuu"))},{name:"content",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u9762\u5411\u798f\u5dde\u5927\u5b66\u7684\u6821\u56ed\u751f\u6d3bAPP\uff0c\u8bfe\u8868\u6559\u52a1\u4fe1\u606f\u4e00\u5e94\u4ff1\u5168\uff0c\u52a9\u529b\u60a8\u7684\u5927\u5b66\u751f\u6d3b"))))}]}},{name:"block1",className:"content0-block",md:12,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://run.w2fzu.com/assets/logo.svg"},{name:"title",className:"content0-block-title",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"FZU-RUN"))))},{name:"content",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u4e3a\u798f\u5927\u5b66\u5b50\u63d0\u4f9b\u8f6c\u4e13\u4e1a\u3001\u5347\u5b66\u7684\u7ecf\u9a8c\u5206\u4eab\u6307\u5bfc\u6587\u6863\u7ad9\u70b9")))))}]}}]}},Q={wrapper:{className:"home-page-wrapper feature7-wrapper"},page:{className:"home-page feature7"},OverPack:{playScale:.3},titleWrapper:{className:"feature7-title-wrapper",children:[{name:"title",className:"feature7-title-h1",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,n.a.createElement("span",null,"\u591a\u4e2a\u65b9\u5411"),n.a.createElement("br",null)))))},{name:"content",className:"feature7-title-content",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u6211\u4eec\u5f00\u8bbe\u4e86\u591a\u4e2a\u8003\u6838\u65b9\u5411\uff0c\u6b22\u8fce\u4e0d\u540c\u5b66\u9662\u3001\u4e0d\u540c\u5e74\u7ea7\u7684\u540c\u5b66\u6765\u52a0\u5165\u6211\u4eec")))))))}]},blockWrapper:{className:"feature7-block-wrapper",gutter:24,children:[{md:6,xs:24,name:"block0",className:"feature7-block",children:{className:"feature7-block-group lrexcejxg-editor_css",children:[{name:"image",className:"feature7-block-image lrexju6g8ap-editor_css",children:"https://img.w2fzu.com/assets/index/202401152124955.svg"},{name:"title",className:"feature7-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"Java"))},{name:"content",className:"feature7-block-content",children:n.a.createElement("span",null,n.a.createElement("p",null,"Write once, run anywhere"))}]}},{md:6,xs:24,name:"block1",className:"feature7-block",children:{className:"feature7-block-group lrexc4ice5q-editor_css",children:[{name:"image",className:"feature7-block-image lrexnzy43lf-editor_css",children:"https://img.w2fzu.com/assets/index/202401152130580.svg"},{name:"title",className:"feature7-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"Unity"))},{name:"content",className:"feature7-block-content",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"We unity\uff01"))))}]}},{md:6,xs:24,name:"block4",className:"feature7-block",children:{className:"feature7-block-group lrexclbi6uh-editor_css",children:[{name:"image",className:"feature7-block-image lreyqjbh33-editor_css",children:"https://img.w2fzu.com/assets/index/202401152130578.svg"},{name:"title",className:"feature7-block-title",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"Python"))))},{name:"content",className:"feature7-block-content",children:n.a.createElement("span",null,n.a.createElement("p",null,"Life is short, you need Python"))}]}},{md:6,xs:24,name:"block5",className:"feature7-block lrexedrzaog-editor_css",children:{className:"feature7-block-group lrexeqxz85m-editor_css",children:[{name:"image",className:"feature7-block-image lreyr0i0x8-editor_css",children:"https://img.w2fzu.com/assets/index/202401152130577.svg"},{name:"title",className:"feature7-block-title",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"Android")))))},{name:"content",className:"feature7-block-content",children:n.a.createElement("span",null,n.a.createElement("p",null,"not ardunio"))}]}},{md:6,xs:24,name:"block2",className:"feature7-block",children:{className:"feature7-block-group",children:[{name:"image",className:"feature7-block-image lreyrox6qf-editor_css",children:"https://img.w2fzu.com/assets/index/202401152130576.svg"},{name:"title",className:"feature7-block-title",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u524d\u7aef"))))},{name:"content",className:"feature7-block-content",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"Everything that can be written in JavaScript, will be")))}]}},{md:6,xs:24,name:"block3",className:"feature7-block",children:{className:"feature7-block-group",children:[{name:"image",className:"feature7-block-image lreys0uhq9-editor_css",children:"https://img.w2fzu.com/assets/index/202401152134928.svg"},{name:"title",className:"feature7-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"Golang"))},{name:"content",className:"feature7-block-content",children:n.a.createElement("span",null,n.a.createElement("p",null,"Go towards the distant stars and the vast ocean"))}]}},{md:6,xs:24,name:"block6",className:"feature7-block",children:{className:"feature7-block-group",children:[{name:"image",className:"feature7-block-image lreywlvi1xb-editor_css",children:"https://img.w2fzu.com/assets/index/202401152134929.svg"},{name:"title",className:"feature7-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u7f8e\u672f"))},{name:"content",className:"feature7-block-content lrexek20jq-editor_css",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"Simplicity refined, design defines value")))}]}},{md:6,xs:24,name:"block7",className:"feature7-block",children:{className:"feature7-block-group",children:[{name:"image",className:"feature7-block-image lreyx9kmfj-editor_css",children:"https://img.w2fzu.com/assets/index/202401152134927.svg"},{name:"title",className:"feature7-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u4ea7\u54c1"))},{name:"content",className:"feature7-block-content",children:n.a.createElement("span",null,n.a.createElement("p",null,"Innovate, iterate, inspire - The PM way"))}]}}]}},D={wrapper:{className:"home-page-wrapper feature8-wrapper"},page:{className:"home-page feature8"},OverPack:{playScale:.3},titleWrapper:{className:"feature8-title-wrapper",children:[{name:"title",className:"feature8-title-h1",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u8003\u6838\u6d41\u7a0b")))},{name:"content",className:"feature8-title-content",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u6211\u4eec\u7684\u8003\u6838\u662f\u5f00\u653e\u3001\u514d\u8d39\u4e14\u81ea\u7531\u7684\uff0c\u591a\u79cd\u8003\u6838\u65b9\u5f0f\uff0c\u603b\u6709\u4e00\u79cd\u9002\u5408\u4f60"))))}]},childWrapper:{className:"feature8-button-wrapper",children:[{name:"button",className:"feature8-button",children:{href:"#",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u52a0\u5165\u6211\u4eec")))}}]},Carousel:{dots:!1,className:"feature8-carousel",wrapper:{className:"feature8-block-wrapper"},children:{className:"feature8-block",titleWrapper:{className:"feature8-carousel-title-wrapper",title:{className:"feature8-carousel-title"}},children:[{name:"block0",className:"feature8-block-row",gutter:120,title:{className:"feature8-carousel-title-block lrexr8xbl1t-editor_css",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u6b63\u5e38\u6d41\u7a0b"))},children:[{className:"feature8-block-col",md:6,xs:24,name:"child0",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,n.a.createElement("span",null,"\u52a0\u5165\u5bf9\u5e94\u65b9\u5411\u7eb3\u65b0\u7fa4"),n.a.createElement("br",null))))))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child1",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u8ddf\u968f\u6d41\u7a0b\u8fdb\u884c\u8003\u6838"))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child2",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u53c2\u4e0e\u7b54\u8fa9"))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child3",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u6210\u4e3a\u6b63\u5f0f\u6210\u5458"))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}}]},{name:"block1",className:"feature8-block-row",gutter:120,title:{children:n.a.createElement("span",null,n.a.createElement("p",null,"\u9ad8\u624b\u6d41\u7a0b")),className:"feature8-carousel-title-block"},children:[{className:"feature8-block-col",md:6,xs:24,name:"child0",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u968f\u65f6\u5f00\u59cb"))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child1",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u63d0\u524d\u5b8c\u6210\u8003\u6838\u5185\u5bb9"))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child2",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u548c\u7ec4\u957f\u6c9f\u901a\u8fdb\u884c\u7b54\u8fa9")))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child3",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u6210\u4e3a\u6b63\u5f0f\u6210\u5458"))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}}]},{name:"elem~lrextc7h4d",className:"feature8-block-row",gutter:120,title:{children:n.a.createElement("span",null,n.a.createElement("p",null,"\u65e5\u5e38\u5b66\u4e60\u6d41\u7a0b")),className:"feature8-carousel-title-block"},children:[{className:"feature8-block-col",md:6,xs:24,name:"child0",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u8fdb\u5165\u957f\u671f\u65e5\u5e38\u5b66\u4e60\u7fa4")))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child1",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u968f\u65f6\u5b8c\u6210"))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child2",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("span",null,n.a.createElement("p",null,"\u65e5\u5e38\u5b66\u4e60\u8003\u6838\u7b54\u8fa9")))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child3",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:n.a.createElement("span",null,n.a.createElement("p",null,"\u6210\u4e3a\u6b63\u5f0f\u6210\u5458"))},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69\u6c9f\u901a\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u63a5\u4eba\uff1a\u8bda\u51e1\u3001\u82b8\u5f69"}]}}]}]}}},L={wrapper:{className:"home-page-wrapper footer0-wrapper"},OverPack:{className:"home-page footer0",playScale:.05},copyright:{className:"copyright",children:n.a.createElement("span",null,n.a.createElement("span",null,"\xa92018 ",n.a.createElement("a",{href:"https://motion.ant.design"},"Ant Motion")," All Rights Reserved"))}};t(283);Object(p.enquireScreen)(function(e){F=e});var Z=("undefined"!==typeof window?window:{}).location,K=void 0===Z?{}:Z,H=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={isMobile:F,show:!K.port},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(p.enquireScreen)(function(a){e.setState({isMobile:!!a})}),K.port&&setTimeout(function(){e.setState({show:!0})},500)}},{key:"render",value:function(){var e=this,a=[n.a.createElement(w,{id:"Nav0_0",key:"Nav0_0",dataSource:A,isMobile:this.state.isMobile}),n.a.createElement(O,{id:"Banner0_0",key:"Banner0_0",dataSource:U,isMobile:this.state.isMobile}),n.a.createElement(P,{id:"Feature5_0",key:"Feature5_0",dataSource:G,isMobile:this.state.isMobile}),n.a.createElement(R,{id:"Feature0_0",key:"Feature0_0",dataSource:J,isMobile:this.state.isMobile}),n.a.createElement(B,{id:"Feature7_0",key:"Feature7_0",dataSource:Q,isMobile:this.state.isMobile}),n.a.createElement(T,{id:"Feature8_0",key:"Feature8_0",dataSource:D,isMobile:this.state.isMobile}),n.a.createElement(I,{id:"Footer0_0",key:"Footer0_0",dataSource:L,isMobile:this.state.isMobile})];return n.a.createElement("div",{className:"templates-wrapper",ref:function(a){e.dom=a}},this.state.show&&a)}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[141,1,2]]]);
//# sourceMappingURL=main.c26a679e.chunk.js.map