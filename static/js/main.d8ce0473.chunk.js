(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{27:function(e,n,t){e.exports=t(40)},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(6),r=t.n(i),c=(t(32),t(15)),s=t(16),u=t(20),l=t(18),d=(t(33),t(24)),h=(t(34),function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=n.call(this,e)).componentDidMount=function(){o.fetchContent()},o.fetchRawContent=function(e,n){fetch(n).then((function(e){return e.text()})).then((function(n){o.codeMap[e]=encodeURIComponent(encodeURIComponent(n))}))},o.parseJson=function(e){var n=e.files,t=0;for(var a in n)n.hasOwnProperty(a)&&(o.fetchRawContent(a,n[a].raw_url),t++);o.pageCnt=t-1,o.props.onPageCountChange(o.pageCnt)},o.fetchContent=function(){fetch("https://api.github.com/gists/"+o.gistId).then((function(e){return e.json()})).then((function(e){o.parseJson(e)}))},o.getFrameSource=function(){var e=o.props.pageNum,n="bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=c&ds=true&dsyoff=10px&dsblur=18px&fs=14px";return o.codeMap.length<=e?"https://carbon.now.sh/embed/"+o.gistId+"?filename="+e+"&"+n:(console.log("getting from local"),"https://carbon.now.sh/embed/[id]?"+n+"&code="+o.codeMap[e])},o.gistId="ab55cb8921d8538dabad8d6d2b16afde",o.codeMap=[],o}return Object(s.a)(t,[{key:"render",value:function(){var e=this.getFrameSource();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"IframeClass"},a.a.createElement(d.a,{url:e,id:"myId",loading:"loading...",sandbox:"allow-scripts allow-same-origin",className:"CodeView",position:"relative"})))}}]),t}(a.a.PureComponent)),g=t(57),f=t(59),p=(t(35),Object(g.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}})));function m(e){var n=p().root+" NavigationView";return a.a.createElement("div",{className:n},a.a.createElement("div",{className:"NavigationViewInner"},a.a.createElement(f.a,{count:e.pageCount,color:"primary",onChange:e.onPageChange})))}var w=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=n.call(this,e)).handleWindowSizeChange=function(){o.setState({width:window.innerWidth})},o.onPageCountChange=function(e){o.setState({pageCount:e})},o.onPageChange=function(e,n){n&&o.setState({pageNum:n})},o.state={pageNum:1,pageCount:3,width:window.innerWidth},o}return Object(s.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){this.state.width;return a.a.createElement("div",{className:"App"},a.a.createElement(h,{codeId:this.props.codeId,pageNum:this.state.pageNum,onPageCountChange:this.onPageCountChange}),a.a.createElement(m,{onPageChange:this.onPageChange,pageCount:this.state.pageCount}))}}]),t}(a.a.PureComponent),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/code",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/code","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(n,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.d8ce0473.chunk.js.map