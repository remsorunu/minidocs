"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[866],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?i.createElement(m,r(r({ref:t},h),{},{components:n})):i.createElement(m,r({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],c={sidebar_position:5},l="The Blockchain",s={unversionedId:"learn/theblockchain",id:"learn/theblockchain",title:"The Blockchain",description:"Overview",source:"@site/docs/learn/theblockchain.md",sourceDirName:"learn",slug:"/learn/theblockchain",permalink:"/minidocs/docs/learn/theblockchain",editUrl:"https://github.com/minima-global/minidocs/docs/learn/theblockchain.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TxPoW Units (Blocks)",permalink:"/minidocs/docs/learn/txpowunits"},next:{title:"Quantum Security",permalink:"/minidocs/docs/learn/quantumsecurity"}},h={},u=[{value:"Overview",id:"overview",level:2},{value:"TxPoW Tree",id:"txpow-tree",level:2},{value:"Ghost algorithm",id:"ghost-algorithm",level:2}],p={toc:u};function d(e){var t=e.components,c=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-blockchain"},"The Blockchain"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Minima blockchain is structured to be compact and \u2018lightweight\u2019, it is therefore heavily pruned to meet this requirement. The chain itself is a tree of TxPoW blocks which hold transactions. "),(0,o.kt)("p",null,"As the ",(0,o.kt)("strong",{parentName:"p"},"TxPow tree")," is pruned periodically, the headers from the \u2018heaviest\u2019 blocks (blocks with the highest difficulty by chance) are added into a \u2018Cascading\u2019 chain. The root of the TxPow tree always remains connected to the tip of the Cascading chain."),(0,o.kt)("p",null,"The TxPoW tree is the main blockchain, a chain of the most recent TxPoW units that met the difficulty required to become a block.\nThe ",(0,o.kt)("strong",{parentName:"p"},"Cascading chain")," is an unbroken chain of the headers of so called \u2018super blocks\u2019, designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. Blocks are added to the Cascading chain on a periodic basis."),(0,o.kt)("h2",{id:"txpow-tree"},"TxPoW Tree"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"TxPoW tree")," is the main blockchain and has a ",(0,o.kt)("strong",{parentName:"p"},"root")," - the start of the chain, ",(0,o.kt)("strong",{parentName:"p"},"tip")," - end of the chain, ",(0,o.kt)("strong",{parentName:"p"},"blocks")," (nodes) and ",(0,o.kt)("strong",{parentName:"p"},"length")," (number of blocks).\nThe root of the chain meets the tip of the Cascade."),(0,o.kt)("p",null,"If a TxPoW unit becomes a block, it will have a static ",(0,o.kt)("strong",{parentName:"p"},"base weight")," equal to its difficulty and a ",(0,o.kt)("strong",{parentName:"p"},"total weight")," equal to its base weight plus the sum of the weights of its children. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Base weight")," = Difficulty (i.e. number of hashes it took to mine the block)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total weight")," = Base weight + Sum(Base weight of all children) ")),(0,o.kt)("p",null,"By default, all blocks in the chain are Level 0 blocks."),(0,o.kt)("p",null,"Branching in the tree can occur if multiple blocks with the same height (block number) are found simultaneously. Branching is a natural occurrence and will resolve over time as a heavier branch continues to be built on."),(0,o.kt)("h2",{id:"ghost-algorithm"},"Ghost algorithm"),(0,o.kt)("p",null,"The GHOST (Greedy Heaviest Observed SubTree) protocol is used by Minima nodes to come to consensus on which chain is the valid one when multiple branches are established. Branching occurs naturally when two blocks with the same number (block height) are found simultaneously. "),(0,o.kt)("p",null,"Rather than using the simple \u2018Longest chain\u2019 rule, where the valid chain is considered to be the one with the most number of blocks in it, GHOST considers the \u2018heaviest\u2019 chain to be the valid one. The \u2018heaviest\u2019 chain is the branch which has had the most Proof-of-Work put into it."),(0,o.kt)("p",null,"The faster the block time, the more likely it is that two blocks of the same number (height) will be found. If a simple \u2018Longest chain\u2019 rule applies, fast block times can reduce the security of the network if an attacker is able to secretly build a longer chain."),(0,o.kt)("p",null,"GHOST was originally proposed as an alternative to Longest Chain by Sompolinsky and Zohar in the paper ",(0,o.kt)("a",{parentName:"p",href:"http://www.avivz.net/pubs/15/btc_ghost.pdf"},"Secure High-Rate Transaction Processing in Bitcoin"),". "),(0,o.kt)("p",null,"Diagram illustrating the the main chain according to GHOST:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Minima",src:n(2700).Z+"#gh-light-mode-only",width:"469",height:"243"}),(0,o.kt)("img",{loading:"lazy",alt:"Minima",src:n(3241).Z+"#gh-dark-mode-only",width:"469",height:"243"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A block tree in which the longest chain and the chain selected by GHOST differ. An attacker's chain is able to switch the longest chain, but not the one selected by GHOST.")))}d.isMDXComponent=!0},3241:function(e,t,n){t.Z=n.p+"assets/images/theBlockchainDm-fe7cf836dcc991f7a4ed4834a0b42c7d.svg"},2700:function(e,t,n){t.Z=n.p+"assets/images/theBlockchainLm-94f169cc1672dd2ff3e7c943bccdf935.svg"}}]);