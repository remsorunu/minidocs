"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[9680],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,d=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return n?o.createElement(d,i(i({ref:t},h),{},{components:n})):o.createElement(d,i({ref:t},h))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7531:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="Tx-PoW",l={unversionedId:"minimawhitepaper/txpow",id:"minimawhitepaper/txpow",title:"Tx-PoW",description:"Removing the miners requires the users themselves to secure the chain. User-based PoW security has been tried before. The DAG[3] style IOTA[8] allows users to perform a small amount of PoW work before they can send their transaction. Unlike Minima, IOTA does not use a blockchain, instead, opting for a transaction DAG or Tangle. Whether the Tangle can converge in a decentralized fashion is still a topic of debate and recently IOTA switched to a new system, in an attempt to rectify their current solution, a centralized checkpoint server.",source:"@site/docs/minimawhitepaper/txpow.md",sourceDirName:"minimawhitepaper",slug:"/minimawhitepaper/txpow",permalink:"/minidocs/docs/minimawhitepaper/txpow",editUrl:"https://github.com/minima-global/minidocs/docs/minimawhitepaper/txpow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/minidocs/docs/minimawhitepaper/introduction"},next:{title:"Maxima",permalink:"/minidocs/docs/minimawhitepaper/maxima"}},h={},u=[],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tx-pow"},"Tx-PoW"),(0,a.kt)("p",null,"Removing the miners requires the users themselves to secure the chain. User-based PoW security has been tried before. The DAG",(0,a.kt)("a",{parentName:"p",href:"/docs/minimawhitepaper/specialthanksto"},"[3]")," style IOTA",(0,a.kt)("a",{parentName:"p",href:"/docs/minimawhitepaper/specialthanksto"},"[8]")," allows users to perform a small amount of PoW work before they can send their transaction. Unlike Minima, IOTA does not use a blockchain, instead, opting for a transaction DAG or Tangle. Whether the Tangle can converge in a decentralized fashion is still a topic of debate and recently IOTA switched to a new system, in an attempt to rectify their current solution, a centralized checkpoint server."),(0,a.kt)("p",null,"Minima uses a Tx-PoW blockchain, an idea first started with P2Pool",(0,a.kt)("a",{parentName:"p",href:"/docs/minimawhitepaper/specialthanksto"},"[10]"),", a protocol that allows multiple users to trustlessly perform small amounts of work and then sum all of those pieces up into a full block's worth of PoW. With a single PoW value equal to the sum of the smaller parts. Everyone benefits from the total work done. This would work well in a transaction based security protocol. All the transactions could do a small amount of work, and then sum all of that up into single blocks. This way Minima removes the miners but keeps the blockchain as the single PoW-secured time-ordered list of events. "),(0,a.kt)("p",null,"Each transaction in Minima is PoW mined. The process is very similar to searching for blocks on any other PoW blockchain. When you find a Tx-PoW that satisfies the network allowed difficulty, 10s average work per device, your transaction may be broadcast, relayed across the network, and added to blocks. The network can determine the minimum Tx-PoW by averaging recent transactions. But, this is also how the blockchain is constructed, since if by chance your Tx-PoW value is high enough, determined by the network to be 1 Tx-PoW every 10 seconds, you have not only mined your transaction but you have also mined a block, that users can add to the current chain. The more transactions being sent the higher this block difficulty will be. Users wanting to send transactions, construct a Tx-PoW header that is foremost a record of their own transaction and as an adjunct a block header that represents their current view of the network. Since blocks only store the hashes of transactions, like Compact blocks in Bitcoin, they are of negligible size. A 10KB block would hold about 330 transaction hashes. Finding a block is the most secure action a user can do to safeguard their coins and honest blocks help sustain the health of the network. For the user, this is all seamless. Whenever a user sends a transaction, sometimes they also find a block."),(0,a.kt)("p",null,"The Tx-PoW chain lends itself well to GHOST",(0,a.kt)("a",{parentName:"p",href:"/docs/minimawhitepaper/specialthanksto"},"[7]")," as transactions are added to blocks even if they themselves are blocks. With a complete list of the last n blocks, it is independently possible to calculate the block tree created by all the stale blocks included as transactions in the main chain. GHOST allows for consensus to be reached, with much faster block times than a simple Longest Chain Rule."),(0,a.kt)("p",null,"This type of system means that if there are no transactions then there can be no blocks. Minima will need to reach a critical mass of transactions to sustain a secure blockchain. The transaction rate will need to be very high. Since all the security of Minima is derived from the number of transactions, the more transactions there are, the more secure the network. There will be a bootstrap period until Minima processes enough transactions to secure the network adequately."),(0,a.kt)("p",null,"Now \u2013 every single user is involved in not only validating the entire chain but also in maintaining the liveliness of the network and in preventing censorship attacks. All Minima users perform both the validation and construction of the blockchain."))}p.isMDXComponent=!0}}]);