(function(e){function t(t){for(var c,a,l=t[0],i=t[1],s=t[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var b=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0794":function(e,t,n){},ba8c:function(e,t,n){},c220:function(e,t,n){"use strict";n("0794")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t){var n=Object(c["t"])("router-view");return Object(c["o"])(),Object(c["d"])(n)}n("c220");const o={};o.render=r;var a=o,l=n("6c02"),i={class:"home"},s={class:"h-screen flex"};function b(e,t,n,r,o,a){var l=Object(c["t"])("HelloWorld");return Object(c["o"])(),Object(c["d"])("div",i,[Object(c["f"])("div",s,[Object(c["f"])(l,{myName:"Il Yong Hwang",msg:"Hello World! Welcome to my Portfolio site."})])])}var u={class:"m-auto pb-12"},d={class:"font-mono text-5xl mb-5"},O=Object(c["e"])(" I'm "),j={class:"text-7xl"},f=Object(c["e"])(" . "),p={class:"\n        text-3xl\n        duration-500\n        transition-all\n        transform\n        translate-y-12\n        ease-out\n      ","data-replace":'{ "translate-y-12": "translate-y-0", "opacity-0":"opacity-100"}'};function v(e,t,n,r,o,a){var l=Object(c["t"])("Carousel");return Object(c["o"])(),Object(c["d"])("div",u,[Object(c["f"])("div",d,[O,Object(c["f"])("span",j,Object(c["v"])(e.myName),1),f]),Object(c["f"])("div",p,[Object(c["f"])(l)])])}var m={class:"relative"};function g(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",m,[(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["s"])(e.slides,(function(e,t){return Object(c["o"])(),Object(c["d"])("div",{key:t,class:["\n        absolute\n        w-full\n        flex\n        items-center\n        justify-center\n        text-3xl\n        transition-all\n        ease-in-out\n        duration-1000\n        transform\n        slide\n      ",e.animationProps]},Object(c["v"])(e.text),3)})),128))])}var x=Object(c["g"])({name:"Carousel",setup:function(){var e=Object(c["r"])(0),t=Object(c["r"])([{text:"헬로 월드! 제 포트폴리오 사이트에 오신 것을 환영합니다.",animationProps:"scale-100 opacity-100"},{text:"Hello World! Welcome to my Portfolio site.",animationProps:"scale-0 opacity-0"},{text:"ハローワールド！ 私のポートフォリオサイトへようこそ。",animationProps:"scale-0 opacity-0"}]),n=function(){var n=t.value.length,c=e.value,r=(c+1)%n;t.value[c].animationProps="scale-0 opacity-0",t.value[r].animationProps="scale-100 opacity-100",e.value=r},r=function(){var n=t.value.length,c=e.value,r=(n+c-1)%n;t.value[c].animationProps="scale-0 opacity-0",t.value[r].animationProps="scale-100 opacity-100",e.value=r};return setInterval((function(){n()}),2e3),{currentSlideIdx:e,slides:t,nextSlide:n,previousSlide:r}}});x.render=g;var y=x,h=Object(c["g"])({name:"HelloWorld",components:{Carousel:y},props:{myName:String,msg:String}});h.render=v;var k=h,S=Object(c["g"])({name:"Home",components:{HelloWorld:k}});S.render=b;var w=S,P={class:"m-10"},D=Object(c["f"])("div",{class:"text-4xl font-black px-4 pb-4"},[Object(c["e"])(" About "),Object(c["f"])("span",{class:"text-green-500"},"Me")],-1),I={class:"grid grid-cols-1 sm:grid-cols-2 gap-6 p-4"},W={class:"grid grid-cols-1 p-4"},A={class:"grid grid-cols-1 p-4"};function M(e,t,n,r,o,a){var l=Object(c["t"])("Intro"),i=Object(c["t"])("Detail"),s=Object(c["t"])("WhatIDo"),b=Object(c["t"])("Recent");return Object(c["o"])(),Object(c["d"])("div",P,[D,Object(c["f"])("div",null,[Object(c["f"])("div",I,[Object(c["f"])(l),Object(c["f"])(i)]),Object(c["f"])("div",W,[Object(c["f"])(s)]),Object(c["f"])("div",A,[Object(c["f"])(b)])])])}var R={class:"text-xl font-medium"},_=Object(c["f"])("p",null,"안녕하세요 👋🏻",-1),C=Object(c["f"])("p",null," 웹 제작이 재밌어서 시작했던 일이 어느새 웹 풀스택 개발자가 목표가 되었습니다. ",-1),E=Object(c["f"])("p",null," 웹의 다양한 기능과 사용성 또한 계속 발전하는 기술스택들이 저에게 의욕과 즐거움을 줬습니다. ",-1),H=Object(c["f"])("p",null," 웹 개발자로 일하면서 기본 지식부터 최신 기술까지 많은 지식을 끊임없이 배워, 다른 사람들에게 편리함을 주는 일을 하고싶습니다. ",-1);function N(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",R,[_,C,E,H])}var q=Object(c["g"])({name:"Intro"});q.render=N;var J=q,z=Object(c["f"])("div",{class:"text-3xl font-black pb-4"},[Object(c["e"])(" What "),Object(c["f"])("span",{class:"text-green-500"},"I Do")],-1),K={class:"grid grid-cols-1 sm:grid-cols-2 gap-6"},T={class:"text-xl font-black text-green-500"},B={class:"font-extrabold text-gray-500"};function F(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])(c["a"],null,[z,Object(c["f"])("div",K,[(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["s"])(e.items,(function(e,t){return Object(c["o"])(),Object(c["d"])("div",{key:t},[Object(c["f"])("span",null,[Object(c["f"])("i",{class:["text-5xl text-green-400 p-2",e.icon]},null,2)]),Object(c["f"])("div",T,Object(c["v"])(e.title),1),Object(c["f"])("div",B,Object(c["v"])(e.content),1)])})),128))])],64)}var G=Object(c["g"])({name:"WhatIDo",setup:function(){var e=Object(c["r"])([{icon:"fas fa-server",title:"Back-End Development",content:"저는 주로 NodeJS와 NestJS 프레임워크를 주로 사용하여 API Server를 개발하고 있습니다. 그 밖에도 Database로는 Redis, MongoDB와 MySQL을 사용하며 Docker를 사용하여 애플리케이션들을 관리합니다."},{icon:"fas fa-globe-asia",title:"Infrastructure Management",content:"Microsoft Azure 클라우드 컴퓨팅 서비스를 사용하여 리소스들을 관리하고 있습니다. 또한 Docker, Jenkins 그리고 Github를 사용하여 CI/CD 파이프라인을 구축합니다. Azure를 사용하다보니 관심이 생겨 AZ-900: Azure Fundamentals certification을 가지고 있습니다."},{icon:"fas fa-tv",title:"Front-End Development",content:"Vue.js 프레임워크를 주로 사용하여 Vue 3, TypeScript 그리고 tailwindcss 등을 사용하여 개발하고 있습니다."},{icon:"far fa-lightbulb",title:"Thinking Practical Idea",content:"저의 이름 '일용(日用)'처럼 날마다 일상에 도움이 되는 모든 것을 만들고자 노력합니다. 그러기 위해 항상 새롭고 다양한 것들을 접하여 개발하며 이 과정에서 저의 개발 역량을 키우고 있다고 생각합니다."}]);return{items:e}}});G.render=F;var V=G,L={class:"text-xl"},Q={class:"capitalize mr-4 font-black text-green-500"},Y={key:0,class:"font-medium",href:"https://github.com/dlfdyd96",target:"_blank"},Z={key:1,class:"font-medium"};function U(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",L,[(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["s"])(e.myInfo,(function(e,t){return Object(c["o"])(),Object(c["d"])("div",{key:t,class:"mb-2"},[Object(c["f"])("span",Q,Object(c["v"])(t),1),"github"===t?(Object(c["o"])(),Object(c["d"])("a",Y,Object(c["v"])(e),1)):(Object(c["o"])(),Object(c["d"])("span",Z,Object(c["v"])(e),1))])})),128))])}var X=Object(c["g"])({name:"Detail",setup:function(){var e=Object(c["r"])({birth:"Oct 18th, 1996",residence:"Republic of Korea",address:"Solbat-ro, Gwanak-gu, Seoul",e_mail:"1yongs_@naver.com",github:"https://github.com/dlfdyd96"});return{myInfo:e}}});X.render=U;var $=X,ee={class:"text-2xl font-black"};function te(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",ee,"Recent News")}var ne=Object(c["g"])({name:"Recent"});ne.render=te;var ce=ne,re=Object(c["g"])({components:{Intro:J,WhatIDo:V,Detail:$,Recent:ce}});re.render=M;var oe=re,ae={class:"m-10"},le=Object(c["f"])("div",{class:"text-4xl font-black px-4 pb-4"},"Resume",-1),ie={class:"grid grid-cols-1 sm:grid-cols-2 gap-6 p-4"};function se(e,t,n,r,o,a){var l=Object(c["t"])("Education"),i=Object(c["t"])("DevelopSkills"),s=Object(c["t"])("Knowledges"),b=Object(c["t"])("Experience"),u=Object(c["t"])("Awards");return Object(c["o"])(),Object(c["d"])("div",ae,[le,Object(c["f"])("div",ie,[Object(c["f"])(l,{title:"Education"}),Object(c["f"])(i,{title:"DevelopSkills"}),Object(c["f"])(s,{title:"Knowledges"}),Object(c["f"])(b,{title:"Experience"}),Object(c["f"])(u,{title:"Awards",class:"col-span-2"})])])}var be={class:"text-2xl font-black"};function ue(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",be,Object(c["v"])(e.title),1)}var de=Object(c["g"])({props:{title:{type:String,required:!0}}});de.render=ue;var Oe=de,je={class:"text-2xl font-black"};function fe(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",je,Object(c["v"])(e.title),1)}var pe=Object(c["g"])({props:{title:{type:String,required:!0}}});pe.render=fe;var ve=pe,me={class:"text-2xl font-black"};function ge(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",me,Object(c["v"])(e.title),1)}var xe=Object(c["g"])({props:{title:{type:String,required:!0}}});xe.render=ge;var ye=xe,he={class:"text-2xl font-black"};function ke(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",he,Object(c["v"])(e.title),1)}var Se=Object(c["g"])({props:{title:{type:String,required:!0}}});Se.render=ke;var we=Se,Pe={class:"text-2xl font-black"};function De(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",Pe,Object(c["v"])(e.title),1)}var Ie=Object(c["g"])({props:{title:{type:String,required:!0}}});Ie.render=De;var We=Ie,Ae=Object(c["g"])({name:"Resume",components:{Awards:Oe,DevelopSkills:ve,Education:ye,Experience:we,Knowledges:We}});Ae.render=se;var Me=Ae;function Re(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",null,"Portfolio")}var _e=Object(c["g"])({name:"Portfolio",components:{}});_e.render=Re;var Ce=_e;function Ee(e,t,n,r,o,a){return Object(c["o"])(),Object(c["d"])("div",null,"Contact")}var He=Object(c["g"])({name:"Contact",components:{}});He.render=Ee;var Ne=He,qe=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:oe},{path:"/resume",name:"Resume",component:Me},{path:"/portfolio",name:"Portfolio",component:Ce},{path:"/contact",name:"Contact",component:Ne}],Je=Object(l["a"])({history:Object(l["b"])(),routes:qe}),ze=Je,Ke=n("5502"),Te=Object(Ke["a"])({state:{},mutations:{},actions:{},modules:{}});n("ba8c");Object(c["c"])(a).use(Te).use(ze).mount("#app")}});
//# sourceMappingURL=app.017eb02b.js.map