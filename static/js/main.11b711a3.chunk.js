(this["webpackJsonpbasic-counter-in-solodity-and-react"]=this["webpackJsonpbasic-counter-in-solodity-and-react"]||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Counter","sourceName":"src/contracts/Counter.sol","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int256","name":"counter","type":"int256"},{"indexed":false,"internalType":"address","name":"userAddress","type":"address"}],"name":"CounterChanged","type":"event"},{"inputs":[],"name":"counter","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decrement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"increment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526000805534801561001457600080fd5b5061030c806100246000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632baeceb71461005157806361bc221a1461005b578063d09de08a14610079578063d826f88f14610083575b600080fd5b61005961008d565b005b6100636100dd565b6040516100709190610195565b60405180910390f35b6100816100e3565b005b61008b610133565b005b7f2371416f596f7d178bec752835988464a33cfb2abf3864a94aa9b3a0ad6099e96000808154809291906100c090610215565b91905055336040516100d39291906101b0565b60405180910390a1565b60005481565b7f2371416f596f7d178bec752835988464a33cfb2abf3864a94aa9b3a0ad6099e96000808154809291906101169061025e565b91905055336040516101299291906101b0565b60405180910390a1565b600080819055507f2371416f596f7d178bec752835988464a33cfb2abf3864a94aa9b3a0ad6099e96000543360405161016d9291906101b0565b60405180910390a1565b610180816101d9565b82525050565b61018f816101eb565b82525050565b60006020820190506101aa6000830184610186565b92915050565b60006040820190506101c56000830185610186565b6101d26020830184610177565b9392505050565b60006101e4826101f5565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610220826101eb565b91507f8000000000000000000000000000000000000000000000000000000000000000821415610253576102526102a7565b5b600182039050919050565b6000610269826101eb565b91507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561029c5761029b6102a7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122020f9da65e702da7f8b952970291de437fd7e1d41a287dc3fb7829304a0abe28064736f6c63430008000033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80632baeceb71461005157806361bc221a1461005b578063d09de08a14610079578063d826f88f14610083575b600080fd5b61005961008d565b005b6100636100dd565b6040516100709190610195565b60405180910390f35b6100816100e3565b005b61008b610133565b005b7f2371416f596f7d178bec752835988464a33cfb2abf3864a94aa9b3a0ad6099e96000808154809291906100c090610215565b91905055336040516100d39291906101b0565b60405180910390a1565b60005481565b7f2371416f596f7d178bec752835988464a33cfb2abf3864a94aa9b3a0ad6099e96000808154809291906101169061025e565b91905055336040516101299291906101b0565b60405180910390a1565b600080819055507f2371416f596f7d178bec752835988464a33cfb2abf3864a94aa9b3a0ad6099e96000543360405161016d9291906101b0565b60405180910390a1565b610180816101d9565b82525050565b61018f816101eb565b82525050565b60006020820190506101aa6000830184610186565b92915050565b60006040820190506101c56000830185610186565b6101d26020830184610177565b9392505050565b60006101e4826101f5565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610220826101eb565b91507f8000000000000000000000000000000000000000000000000000000000000000821415610253576102526102a7565b5b600182039050919050565b6000610269826101eb565b91507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561029c5761029b6102a7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122020f9da65e702da7f8b952970291de437fd7e1d41a287dc3fb7829304a0abe28064736f6c63430008000033","linkReferences":{},"deployedLinkReferences":{}}')},323:function(e,t){},325:function(e,t){},327:function(e,t){},331:function(e,t){},358:function(e,t){},360:function(e,t){},369:function(e,t){},371:function(e,t){},381:function(e,t){},383:function(e,t){},501:function(e,t){},503:function(e,t){},510:function(e,t){},511:function(e,t){},605:function(e,t,n){"use strict";n.r(t);var a=n(664),c=n(659),r=n(0),f=n.n(r),o=n(56),s=n.n(o),i=n(85),b=n(282),d=Object(b.a)({palette:{mode:"dark"}}),l=n(22),u=n(658),j=n(38),h=n.n(j),p=n(124),O=n(11),m=n(274),x=n.n(m);var y=function(){var e=Object(r.useState)(),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),f=Object(O.a)(c,2),o=f[0],s=f[1];Object(r.useEffect)((function(){var e,t;if(null===(e=window)||void 0===e||null===(t=e.web3)||void 0===t?void 0:t.currentProvider){var n=new x.a(window.web3.currentProvider);a(n)}}),[]),Object(r.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return t=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.eth.getAccounts().then((function(e){s(e[0])}));case 1:case"end":return e.stop()}}),e)}))),t.apply(this,arguments)}n&&(e(),n.currentProvider.on("accountsChanged",(function(){e()})))}),[n]);var i=(null===n||void 0===n?void 0:n.currentProvider.isMetaMask)&&!!o,b="".concat("https://rinkeby.etherscan.io","/address/").concat(o);return{metamaskInstance:n,userAddress:o,isMetamaskDefined:i,userAddressDetailsUrl:b}},v=n(667),g=n(669),C=n(660),k=n(665),A=n(666),D=n(656),w=n(126),S=n.n(w),M=n(127),E=n.n(M),I=n(2);var L=function(e){var t=e.address,n=Object(r.useMemo)((function(){if(t){var e=t.slice(0,6),n=t.slice(36);return"".concat(e,"...").concat(n)}return t}),[t]);return Object(I.jsx)(C.a,{title:t,children:Object(I.jsx)("span",{children:n})})};var T=function(e){var t=e.userAddress,n=e.userAddressDetailsUrl,a=e.isMetamaskDefined;return Object(I.jsx)(U,{children:Object(I.jsx)(B,{children:a?Object(I.jsx)(k.a,{children:Object(I.jsxs)(D.a,{direction:"row",alignItems:"center",spacing:2,component:"span",children:[Object(I.jsx)(L,{address:t})," ",Object(I.jsx)(C.a,{title:"Show your address details on Etherscan",children:Object(I.jsx)(A.a,{color:"primary","aria-label":"Show your address details on Etherscan",component:"a",href:n,target:"_blank",rel:"noopener",style:{marginLeft:0},children:Object(I.jsx)(S.a,{fontSize:"small"})})}),Object(I.jsx)(C.a,{title:"Copy your address to clipboard",children:Object(I.jsx)(A.a,{color:"primary","aria-label":"Copy your address to clipboard",style:{marginLeft:0},onClick:function(){return navigator.clipboard.writeText(t)},children:Object(I.jsx)(E.a,{fontSize:"small"})})})]})}):"Install Metamask First TODO: LINK"})})},U=Object(u.a)(v.a)({height:"64px"}),B=Object(u.a)(g.a)({display:"flex",justifyContent:"flex-end",maxWidth:"1200px",width:"100%",margin:"0 auto"}),P=n(668),N=n.p+"static/media/Counter.47467aab.sol",z=n(102),R="deploy-contract";var F=function(e,t,n){var a=Object(l.g)(),c=Object(r.useState)(),f=Object(O.a)(c,2),o=f[0],s=f[1],i=Object(r.useState)(),b=Object(O.a)(i,2),d=b[0],u=b[1];return{deployContract:function(){t&&new e.eth.Contract(z.abi).deploy({data:z.bytecode}).send({from:n}).on("error",(function(e){console.log("Error: ",e)})).on("transactionHash",(function(e){console.log("transactionDeploymentHash: ",e),s(e)})).on("receipt",(function(e){console.log(e.contractAddress),u(e.contractAddress)})).on("confirmation",(function(e,t){console.log("confirmationNumber: ",e)})).then((function(e){console.log(e.options.address),s(),u(e.options.address),a("".concat("/","?contractAddress=").concat(e.options.address))}))},transactionDeploymentHash:o,isDeploymentLoading:!!o,contractAddress:d,transactionDeploymentUrl:"".concat("https://rinkeby.etherscan.io","/tx/").concat(o)}},H=n(670);var J=function(e){var t=e.height,n=e.children;return Object(I.jsxs)(W,{height:t,children:[Object(I.jsx)(H.a,{}),n?Object(I.jsx)(_,{children:n}):null]})},W=Object(u.a)("div",{shouldForwardProp:function(e){return"height"!==e}})((function(e){return{display:"flex",justifyContent:"center",alignItems:"center",height:e.height,flexDirection:"column"}})),_=Object(u.a)("div")({marginTop:"16px"}),K=n(663),q=Object(u.a)(K.a)({margin:8});var G=function(e){var t=e.onClick,n=e.children;return Object(I.jsx)(q,{onClick:t,variant:"contained",children:n})};var Q=function(e){var t=e.metamaskInstance,n=e.isMetamaskDefined,a=e.userAddress,c=Object(r.useState)(),f=Object(O.a)(c,2),o=f[0],s=f[1];Object(r.useEffect)((function(){fetch(N).then((function(e){return e.text()})).then((function(e){s(e)}))}),[]);var i=F(t,n,a),b=i.deployContract,d=i.isDeploymentLoading;return Object(I.jsx)("main",{children:Object(I.jsxs)(V,{children:[Object(I.jsx)(k.a,{component:"h2",variant:"h5",children:"Deploy your Counter Contract"}),d?Object(I.jsx)(J,{height:"300px",children:"Deploying your contract..."}):Object(I.jsxs)("div",{children:[Object(I.jsx)(X,{children:Object(I.jsx)("code",{lang:"solidity",children:o||Object(I.jsx)(J,{height:"300px"})})}),Object(I.jsx)(G,{onClick:b,children:"Deploy Counter"})]})]})})},V=Object(u.a)(P.a)({padding:"16px"}),X=Object(u.a)("pre")({margin:"16px auto;",textAlign:"left",backgroundColor:"#001e3c",padding:"16px",borderRadius:"4px",border:"1px solid #132f4c"}),Y=n(661);var Z=function(e,t,n,a){var c=Object(r.useState)(),f=Object(O.a)(c,2),o=f[0],s=f[1],i=Object(r.useState)(),b=Object(O.a)(i,2),d=b[0],l=b[1];Object(r.useEffect)((function(){if(t&&a){var n=new e.eth.Contract(z.abi,a);s(n)}return function(){s()}}),[t,e,a]);var u=Object(r.useCallback)(Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=11;break}return e.prev=1,e.next=4,o.methods.counter().call();case 4:t=e.sent,l(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s();case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[o]);Object(r.useEffect)((function(){u()}),[u]);var j=Object(r.useCallback)((function(){o&&o.methods.increment().send({from:n})}),[o,n]),m=Object(r.useCallback)((function(){o&&o.methods.decrement().send({from:n})}),[o,n]),x=Object(r.useCallback)((function(){o&&o.methods.reset().send({from:n})}),[o,n]);Object(r.useEffect)((function(){o&&o.events.CounterChanged().on("data",(function(){u()}))}),[o,u]);var y=!!a&&!o,v="".concat("https://rinkeby.etherscan.io","/address/").concat(a);return{counter:d,updateCounter:u,incrementCounter:j,decrementCounter:m,resetCounter:x,isCounterContractLoading:y,contractDetailsUrl:v}};var $=function(e){var t=e.children;return Object(I.jsx)("div",{children:Object(I.jsx)(k.a,{variant:"h2",component:"span",children:t})})};var ee=function(e){var t=e.metamaskInstance,n=e.isMetamaskDefined,a=e.userAddress,c=Object(i.c)(),f=Object(O.a)(c,2),o=f[0],s=f[1],b=Object(r.useState)((function(){return o.get("contractAddress")||"0x84E9f561F75dE8Aeb388d33BD6835955f19fA418"})),d=Object(O.a)(b,2),l=d[0],u=d[1],j=Object(r.useState)(""),h=Object(O.a)(j,2),p=h[0],m=h[1],x=Z(t,n,a,p),y=x.counter,v=x.incrementCounter,g=x.decrementCounter,w=x.resetCounter,M=x.isCounterContractLoading,T=x.contractDetailsUrl;return Object(r.useEffect)((function(){var e=o.get("contractAddress");e&&u(e)}),[o]),Object(r.useEffect)((function(){!!l&&(null===t||void 0===t?void 0:t.utils.isAddress(l))&&(s({contractAddress:l}),m(l))}),[l,t,s]),Object(I.jsxs)("div",{children:[Object(I.jsxs)(te,{children:[Object(I.jsx)(Y.a,{value:l,onChange:function(e){var t=e.target.value;u(t)},id:"contract-address-field",label:"Contract Address",variant:"standard",fullWidth:!0}),Object(I.jsxs)(ne,{children:["Or you can Deploy your own Counter Smart Contract in the"," ",Object(I.jsx)(ce,{to:R,children:"Deployment Page."})]})]}),Object(I.jsx)("main",{children:M?Object(I.jsx)("div",{children:"Loading contract..."}):p&&Object(I.jsxs)(ae,{elevation:4,children:[Object(I.jsx)(k.a,{component:"h2",variant:"h4",gutterBottom:!0,children:"Counter Contract"}),Object(I.jsx)(k.a,{component:"h3",variant:"h6",gutterBottom:!0,children:Object(I.jsxs)(D.a,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,component:"span",children:[Object(I.jsx)(L,{address:p})," ",Object(I.jsx)(C.a,{title:"Show contract details on Etherscan",children:Object(I.jsx)(A.a,{color:"primary",component:"a",href:T,"aria-label":"Show contract details on Etherscan",target:"_blank",rel:"noopener",style:{marginLeft:0},children:Object(I.jsx)(S.a,{fontSize:"small"})})}),Object(I.jsx)(C.a,{title:"Copy contract address to clipboard",children:Object(I.jsx)(A.a,{color:"primary","aria-label":"Copy contract address to clipboard",style:{marginLeft:0},onClick:function(){return navigator.clipboard.writeText(p)},children:Object(I.jsx)(E.a,{fontSize:"small"})})})]})}),Object(I.jsx)($,{children:y}),Object(I.jsxs)("div",{children:[Object(I.jsx)(K.a,{onClick:g,children:"Decrement"}),Object(I.jsx)(K.a,{onClick:w,children:"Reset"}),Object(I.jsx)(K.a,{onClick:v,children:"Increment"})]})]})})]})},te=Object(u.a)(P.a)({margin:"24px auto",padding:24}),ne=Object(u.a)(k.a)({marginTop:"16px",textAlign:"left"}),ae=Object(u.a)(P.a)({margin:"24px auto",padding:16}),ce=Object(u.a)(i.b)({color:"rgb(102, 178, 255);"});var re=function(){var e=y(),t=e.metamaskInstance,n=e.isMetamaskDefined,a=e.userAddress,c=e.userAddressDetailsUrl;return Object(I.jsxs)(fe,{children:[Object(I.jsx)(T,{userAddressDetailsUrl:c,userAddress:a,isMetamaskDefined:n}),Object(I.jsx)(k.a,{component:"h1",variant:"h2",gutterBottom:!0,children:"Counter in Solidity"}),Object(I.jsxs)(l.d,{children:[Object(I.jsx)(l.b,{path:"/",element:Object(I.jsx)(ee,{metamaskInstance:t,isMetamaskDefined:n,userAddress:a})}),Object(I.jsx)(l.b,{path:R,element:Object(I.jsx)(Q,{metamaskInstance:t,isMetamaskDefined:n,userAddress:a})}),Object(I.jsx)(l.b,{path:"*",element:Object(I.jsx)(l.a,{to:"/",replace:!0})})]})]})},fe=Object(u.a)("div")({margin:"82px auto 0 auto",maxWidth:"700px",textAlign:"center"});s.a.render(Object(I.jsx)(f.a.StrictMode,{children:Object(I.jsxs)(a.a,{theme:d,children:[Object(I.jsx)(c.a,{}),Object(I.jsx)(i.a,{children:Object(I.jsx)(re,{})})]})}),document.getElementById("root"))}},[[605,1,2]]]);
//# sourceMappingURL=main.11b711a3.chunk.js.map