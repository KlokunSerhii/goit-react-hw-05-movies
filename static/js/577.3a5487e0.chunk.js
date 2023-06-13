"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[577],{7796:function(n,e,t){t.d(e,{Z:function(){return b}});var r=t(1413),a=t(9439),c=t(5987),o=t(1694),i=t.n(o),u=t(2791),s=t(5341),f=t(162),d=t(184),l=["as","bsPrefix","variant","size","active","disabled","className"],p=u.forwardRef((function(n,e){var t=n.as,o=n.bsPrefix,u=n.variant,p=void 0===u?"primary":u,v=n.size,m=n.active,h=void 0!==m&&m,x=n.disabled,g=void 0!==x&&x,b=n.className,Z=(0,c.Z)(n,l),y=(0,f.vE)(o,"btn"),j=(0,s.FT)((0,r.Z)({tagName:t,disabled:g},Z)),w=(0,a.Z)(j,2),N=w[0],k=w[1].tagName;return(0,d.jsx)(k,(0,r.Z)((0,r.Z)((0,r.Z)({},N),Z),{},{ref:e,disabled:g,className:i()(b,y,h&&"active",p&&"".concat(y,"-").concat(p),v&&"".concat(y,"-").concat(v),Z.href&&g&&"disabled")}))}));p.displayName="Button";var v=p,m=t(9140),h=t(7689),x=t(1087),g=(t(7632),t(7008));var b=function(n){var e=n.results,t=(0,h.TH)();return(0,d.jsx)(d.Fragment,{children:e.map((function(n){var e=n.title,r=n.poster_path,a=n.id;return(0,d.jsxs)(m.Z,{style:{width:"15rem"},children:[(0,d.jsx)(m.Z.Img,{variant:"top",src:(0,g.N)(r)}),(0,d.jsxs)(m.Z.Body,{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,d.jsx)(m.Z.Title,{children:e}),(0,d.jsx)(x.rU,{to:"/movie/".concat(a),state:{from:t},children:(0,d.jsx)(v,{variant:"primary",children:"Movie Details"})})]})]},a)}))})}},6300:function(n,e,t){t.d(e,{D:function(){return f},Ul:function(){return s},W:function(){return u}});var r,a,c,o=t(168),i=t(6444),u=i.ZP.div(r||(r=(0,o.Z)(["\n  background-color: #0f0f0f;\n  color: #ffffff;\n  justify-content: space-around;\n  padding: 10px;\n"]))),s=i.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-around;\n  margin-top: 20px;\n"]))),f=i.ZP.h1(c||(c=(0,o.Z)(["\n  margin-top: 20px;\n"])))},3577:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(3433),a=t(9439),c=t(2791),o=t(7433),i=t(6300),u=t(7796),s=t(8185),f=t(184);var d=function(){var n=(0,c.useState)([]),e=(0,a.Z)(n,2),t=e[0],d=e[1];return(0,c.useEffect)((function(){(0,o.Tg)().then((function(n){var e=n.results;d((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(e))}))})).catch((0,f.jsx)(s.nG9,{}))}),[]),(0,f.jsxs)(i.W,{children:[(0,f.jsx)(i.D,{children:"The most popular movies today"}),(0,f.jsx)(i.Ul,{children:(0,f.jsx)(u.Z,{results:t})})]})}},7433:function(n,e,t){function r(n,e,t,r,a,c,o){try{var i=n[c](o),u=i.value}catch(s){return void t(s)}i.done?e(u):Promise.resolve(u).then(r,a)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(a,c){var o=n.apply(e,t);function i(n){r(o,a,c,i,u,"next",n)}function u(n){r(o,a,c,i,u,"throw",n)}i(void 0)}))}}t.d(e,{y:function(){return l},Bt:function(){return p},on:function(){return f},Tg:function(){return s},EC:function(){return d}});var c=t(4687),o=t.n(c),i="https://api.themoviedb.org/3/",u="856f57e7a2f2f6acb1983cbef8b64e80",s=function(){var n=a(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/day?api_key=").concat(u,"&language=en-US")).then((function(n){return n.json()}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=a(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(u,"&query=").concat(e,"&include_adult=false&language=en-US&page=").concat(t)).then((function(n){return n.json()}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=a(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US")).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=a(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US")).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=a(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1")).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7008:function(n,e,t){function r(n){return n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://via.placeholder.com/395x574?text=No+Image"}function a(n){return n?"https://image.tmdb.org/t/p/w1280/".concat(n):"https://via.placeholder.com/395x574?text=No+Image"}t.d(e,{N:function(){return r},k:function(){return a}})},9140:function(n,e,t){t.d(e,{Z:function(){return U}});var r=t(1413),a=t(5987),c=t(1694),o=t.n(c),i=t(2791),u=t(162),s=t(6543),f=t(7472),d=t(184),l=["bsPrefix","className","variant","as"],p=i.forwardRef((function(n,e){var t=n.bsPrefix,c=n.className,i=n.variant,s=n.as,f=void 0===s?"img":s,p=(0,a.Z)(n,l),v=(0,u.vE)(t,"card-img");return(0,d.jsx)(f,(0,r.Z)({ref:e,className:o()(i?"".concat(v,"-").concat(i):v,c)},p))}));p.displayName="CardImg";var v=p,m=t(6040),h=["bsPrefix","className","as"],x=i.forwardRef((function(n,e){var t=n.bsPrefix,c=n.className,s=n.as,f=void 0===s?"div":s,l=(0,a.Z)(n,h),p=(0,u.vE)(t,"card-header"),v=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,d.jsx)(m.Z.Provider,{value:v,children:(0,d.jsx)(f,(0,r.Z)((0,r.Z)({ref:e},l),{},{className:o()(c,p)}))})}));x.displayName="CardHeader";var g=x,b=["bsPrefix","className","bg","text","border","body","children","as"],Z=(0,f.Z)("h5"),y=(0,f.Z)("h6"),j=(0,s.Z)("card-body"),w=(0,s.Z)("card-title",{Component:Z}),N=(0,s.Z)("card-subtitle",{Component:y}),k=(0,s.Z)("card-link",{Component:"a"}),P=(0,s.Z)("card-text",{Component:"p"}),_=(0,s.Z)("card-footer"),C=(0,s.Z)("card-img-overlay"),T=i.forwardRef((function(n,e){var t=n.bsPrefix,c=n.className,i=n.bg,s=n.text,f=n.border,l=n.body,p=void 0!==l&&l,v=n.children,m=n.as,h=void 0===m?"div":m,x=(0,a.Z)(n,b),g=(0,u.vE)(t,"card");return(0,d.jsx)(h,(0,r.Z)((0,r.Z)({ref:e},x),{},{className:o()(c,g,i&&"bg-".concat(i),s&&"text-".concat(s),f&&"border-".concat(f)),children:p?(0,d.jsx)(j,{children:v}):v}))}));T.displayName="Card";var U=Object.assign(T,{Img:v,Title:w,Subtitle:N,Body:j,Link:k,Text:P,Header:g,Footer:_,ImgOverlay:C})}}]);
//# sourceMappingURL=577.3a5487e0.chunk.js.map