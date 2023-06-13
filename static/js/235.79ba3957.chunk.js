"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[235],{5235:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,c,a,o,i=e(9439),u=e(2791),s=e(7689),f=e(1087),p=e(7433),l=e(168),d=e(6444),h=d.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  color: orange;\n  font-size: 24px;\n  font-weight: 700;\n  justify-content: space-around;\n  padding: 10px;\n"]))),v=d.ZP.img(c||(c=(0,l.Z)(["\n  width: 350px;\n"]))),x=d.ZP.div(a||(a=(0,l.Z)(["\n  width: 500px;\n"]))),g=d.ZP.div(o||(o=(0,l.Z)(["\n  display: block;\n  text-align: start;\n  padding: 15px;\n  a {\n    text-decoration: none;\n    &:hover {\n      color: orange;\n    }\n  }\n"]))),m=e(7935),j=e(699),k=e(6966),w=e(7008),y=e(8185),b=e(3521),_=e(184);var Z=function(){var n,t,e=(0,u.useState)({}),r=(0,i.Z)(e,2),c=r[0],a=r[1],o=(0,s.UO)().movieId,l=(0,s.TH)(),d=(0,u.useRef)(null!==(n=null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,u.useEffect)((function(){(0,p.EC)(o).then((function(n){return a(n)})).catch((0,_.jsx)(y.nG9,{}))}),[o]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(g,{children:(0,_.jsx)(f.rU,{to:d.current,children:"Back"})}),(0,_.jsxs)(h,{style:{backgroundImage:"url(".concat((0,w.k)(c.backdrop_path),")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:[(0,_.jsx)(v,{src:(0,w.N)(c.poster_path),alt:c.original_name,loading:"lazy"}),(0,_.jsxs)(x,{children:[(0,_.jsx)("h1",{children:c.title}),(0,_.jsxs)("p",{children:["Popularity ",(0,_.jsx)("span",{children:c.popularity})]}),(0,_.jsx)("p",{children:"ABOUT"}),(0,_.jsx)("p",{children:c.overview})]})]}),(0,_.jsx)(m.Z,{bg:"dark",variant:"dark",style:{display:"flex",justifyContent:"center"},children:(0,_.jsx)("div",{children:(0,_.jsxs)(j.Z,{className:"me-auhref",children:[(0,_.jsx)(k.Fg,{to:"cast",children:"Cast"}),(0,_.jsx)(k.Fg,{to:"reviews",children:"Reviews"})]})})}),(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(b.Z,{}),children:(0,_.jsx)(s.j3,{})})]})}},7433:function(n,t,e){function r(n,t,e,r,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void e(s)}i.done?t(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var o=n.apply(t,e);function i(n){r(o,c,a,i,u,"next",n)}function u(n){r(o,c,a,i,u,"throw",n)}i(void 0)}))}}e.d(t,{y:function(){return l},Bt:function(){return d},on:function(){return f},Tg:function(){return s},EC:function(){return p}});var a=e(4687),o=e.n(a),i="https://api.themoviedb.org/3/",u="856f57e7a2f2f6acb1983cbef8b64e80",s=function(){var n=c(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/day?api_key=").concat(u,"&language=en-US")).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=c(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(u,"&query=").concat(t,"&include_adult=false&language=en-US&page=").concat(e)).then((function(n){return n.json()}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=c(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US")).then((function(n){return n.json()}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=c(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US")).then((function(n){return n.json()}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=c(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1")).then((function(n){return n.json()}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7008:function(n,t,e){function r(n){return n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://via.placeholder.com/395x574?text=No+Image"}function c(n){return n?"https://image.tmdb.org/t/p/w1280/".concat(n):"https://via.placeholder.com/395x574?text=No+Image"}e.d(t,{N:function(){return r},k:function(){return c}})}}]);
//# sourceMappingURL=235.79ba3957.chunk.js.map