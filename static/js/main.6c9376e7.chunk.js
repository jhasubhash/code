(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),c=(n(93),n(12)),s=n(17),u=n(18),l=n(20),f=(n(94),n(83)),d=n(73),m=n(4),h=(n(95),n(64));var p=function(e){return o.a.createElement(h.b,{options:{limitToBounds:!1,minScale:.2}},(function(t){t.zoomIn,t.zoomOut,t.resetTransform,Object(f.a)(t,["zoomIn","zoomOut","resetTransform"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,null,o.a.createElement("div",{className:"IframeClass"},o.a.createElement(d.a,{url:e.src,id:"myId",sandbox:"allow-scripts allow-same-origin",className:Object(m.a)("CodeView",e.isMobile&&"IframeClassMobile"),onLoad:function(){return e.iFrameLoaded(!0)},position:"relative"}))))}))},v=n(22);n(81),n(58),n(75),n(96);var g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.fetchContent()},a.fetchRawContent=function(e,t){fetch(t).then((function(e){return e.text()})).then((function(t){a.codeMap[e]=encodeURIComponent(encodeURIComponent(t))}))},a.parseJson=function(e){var t=e.files,n=0;for(var o in t)t.hasOwnProperty(o)&&(a.fetchRawContent(o,t[o].raw_url),n++);a.props.setManifest(t[0].content),a.pageCnt=n-1,a.props.onPageCountChange(a.pageCnt)},a.fetchContent=function(){fetch("https://api.github.com/gists/"+a.gistId).then((function(e){return e.json()})).then((function(e){a.parseJson(e)}))},a.getFrameSource=function(){var e=a.props.pageNum,t=a.props.isMobile?"8px":"14px",n="bg=rgba(171%2C%20184%2C%20195%2C%201)&wc="+!a.props.isMobile+"&t=seti&wt=none&l=c&ds=true&dsyoff=10px&dsblur=18px&fs="+t;return a.codeMap.length<=e?"https://carbon.now.sh/embed/"+a.gistId+"?filename="+e+"&"+n:"https://carbon.now.sh/embed/[id]?"+n+"&code="+a.codeMap[e]},a.iFrameLoaded=function(e){a.setState({hasFrameLoaded:e})},a.gistId="ab55cb8921d8538dabad8d6d2b16afde",a.codeMap=[],a.state={hasFrameLoaded:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.getFrameSource();return o.a.createElement("div",null,o.a.createElement(p,{src:e,iFrameLoaded:this.iFrameLoaded,isMobile:this.props.isMobile}),!1)}}]),n}(o.a.PureComponent),w=n(141),b=n(149),E=(n(100),Object(w.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}})));function C(e){var t=o.a.useState(1),n=Object(v.a)(t,2),a=(n[0],n[1]),r=E().root+" NavigationView",i=o.a.useRef(null);return o.a.useLayoutEffect((function(){var e=i.current;if(e){var t=function(e){e.touches&&e.touches.length>1&&e.preventDefault(),e.touches||e.preventDefault()};return e.addEventListener("touchmove",t,{passive:!1}),e.addEventListener("wheel",t,{passive:!1}),function(){e.removeEventListener("touchmove",t),e.removeEventListener("wheel",t)}}}),[]),o.a.createElement("div",{ref:i,className:r},o.a.createElement("div",{className:"NavigationViewInner"},o.a.createElement(b.a,{page:e.pageNum,count:e.pageCount,color:"primary",onChange:function(t,n){a(n),e.onPageChange(n)}})))}var y=n(49),L=n(68),O=n(148),k=n(147),j=n(144),N=n(146),S=n(150),P=n(145),M=n(151),W=n(69),I=n.n(W),R=n(80),z=n.n(R),F=n(152),x=n(79),T=n.n(x),D=(n(105),Object(w.a)({list:{width:350},fullList:{width:"auto"}}));function A(e){var t=D(),n=o.a.useRef(null),a=o.a.useRef(o.a.createRef()),r=o.a.useState(1),i=Object(v.a)(r,2),c=i[0],s=i[1],u=o.a.useState({top:!1,left:!1,bottom:!1,right:!1}),l=Object(v.a)(u,2),f=l[0],d=l[1],h=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&d(Object(L.a)(Object(L.a)({},f),{},Object(y.a)({},e,t)))}},p=function(){var e=a.current;if(e&&e.addEventListener){var t=function(e){(e.touches&&e.touches.length>1||e.ctrlKey)&&e.preventDefault()};e.addEventListener("touchmove",t,{passive:!1}),e.addEventListener("wheel",t,{passive:!1})}};return o.a.useEffect((function(){setTimeout(p,200)})),o.a.useLayoutEffect((function(){console.log("useLayoutEffect called");var e=n.current;if(e){var t=function(e){e.touches&&e.touches.length>1&&e.preventDefault(),e.touches||e.preventDefault()};return e.addEventListener("touchmove",t,{passive:!1}),e.addEventListener("wheel",t,{passive:!1}),function(){e.removeEventListener("touchmove",t),e.removeEventListener("wheel",t)}}}),[]),o.a.createElement("div",{ref:n,className:"ListView"},o.a.createElement(o.a.Fragment,{key:"left"},o.a.createElement(k.a,{onClick:function(e,t,n){return function(a){s(n),h(e,t)(a)}}("left",!0,e.pageNum)},o.a.createElement(z.a,null)),o.a.createElement(O.a,{anchor:"left",open:f.left,onClose:h("left",!1)},function(n,a){return o.a.createElement("div",{ref:a,className:Object(m.a)(t.list,Object(y.a)({},t.fullList,"top"===n||"bottom"===n)),role:"presentation",onClick:h(n,!1),onKeyDown:h(n,!1)},o.a.createElement(j.a,null,["Problems Browser"].map((function(e,t){return o.a.createElement(S.a,{button:!0,key:e},o.a.createElement(P.a,null,o.a.createElement(T.a,null)),o.a.createElement(M.a,{primary:e}))}))),o.a.createElement(N.a,null),o.a.createElement(j.a,null,e.manifest.map((function(t,n){return o.a.createElement(S.a,{button:!0,key:t.id,onClick:function(){var n;n=t.id,s(n),e.onPageChange(parseInt(n))},selected:c==t.id},o.a.createElement(P.a,null,o.a.createElement(I.a,null)),o.a.createElement(M.a,{primary:t.name}),o.a.createElement(F.a,{size:"small",label:t.tag}))}))))}("left",a))))}var U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.onPageCountChange=function(e){a.setState({pageCount:e})},a.onPageChange=function(e){a.setState({pageNum:e})},a.setManifest=function(e){var t=JSON.parse(e),n=[];for(var o in t)t.hasOwnProperty(o)&&n.push({id:o,name:t[o].name,tag:t[o].tag});a.setState({manifest:n})},a.state={pageNum:1,pageCount:3,width:window.innerWidth,manifest:[]},a}return Object(s.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state.width<=500;return o.a.createElement("div",{className:"App"},o.a.createElement(A,{manifest:this.state.manifest,onPageChange:this.onPageChange,pageNum:this.state.pageNum}),o.a.createElement(g,{pageNum:this.state.pageNum,onPageCountChange:this.onPageCountChange,setManifest:this.setManifest,isMobile:e}),o.a.createElement(C,{pageNum:this.state.pageNum,onPageChange:this.onPageChange,pageCount:this.state.pageCount}))}}]),n}(o.a.PureComponent),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/code",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/code","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()},88:function(e,t,n){e.exports=n(107)},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.6c9376e7.chunk.js.map