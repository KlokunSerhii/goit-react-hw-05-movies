"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[577],{7796:function(n,e,t){t.d(e,{Z:function(){return x}});var a=t(1413),r=t(9439),c=t(5987),i=t(1694),o=t.n(i),s=t(2791),u=t(5341),d=t(162),f=t(184),l=["as","bsPrefix","variant","size","active","disabled","className"],v=s.forwardRef((function(n,e){var t=n.as,i=n.bsPrefix,s=n.variant,v=void 0===s?"primary":s,m=n.size,p=n.active,g=void 0!==p&&p,Z=n.disabled,x=void 0!==Z&&Z,h=n.className,b=(0,c.Z)(n,l),y=(0,d.vE)(i,"btn"),j=(0,u.FT)((0,a.Z)({tagName:t,disabled:x},b)),N=(0,r.Z)(j,2),_=N[0],w=N[1].tagName;return(0,f.jsx)(w,(0,a.Z)((0,a.Z)((0,a.Z)({},_),b),{},{ref:e,disabled:x,className:o()(h,y,g&&"active",v&&"".concat(y,"-").concat(v),m&&"".concat(y,"-").concat(m),b.href&&x&&"disabled")}))}));v.displayName="Button";var m=v,p=t(9140),g=t(1087),Z=(t(7632),t(7008));var x=function(n){var e=n.results,t=n.location;return(0,f.jsx)(f.Fragment,{children:e.map((function(n){var e=n.title,a=n.poster_path,r=n.id;return(0,f.jsxs)(p.Z,{style:{width:"15rem"},children:[(0,f.jsx)(p.Z.Img,{variant:"top",src:(0,Z.N)(a)}),(0,f.jsxs)(p.Z.Body,{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,f.jsx)(p.Z.Title,{children:e}),(0,f.jsx)(g.rU,{to:"/movie/".concat(r),state:{from:t},children:(0,f.jsx)(m,{variant:"primary",children:"Movie Details"})})]})]},r)}))})}},6300:function(n,e,t){t.d(e,{D:function(){return d},Ul:function(){return u},W:function(){return s}});var a,r,c,i=t(168),o=t(6444),s=o.ZP.div(a||(a=(0,i.Z)(["\n  background-color: #0f0f0f;\n  color: #ffffff;\n  justify-content: space-around;\n  padding: 10px;\n"]))),u=o.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-around;\n  margin-top: 20px;\n"]))),d=o.ZP.h1(c||(c=(0,i.Z)(["\n  margin-top: 20px;\n"])))},3577:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var a=t(3433),r=t(9439),c=t(2791),i=t(4390),o=t(7689),s=t(6300),u=t(7796),d=t(8185),f=t(184);var l=function(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],l=e[1],v=(0,o.TH)();return(0,c.useEffect)((function(){(0,i.Tg)().then((function(n){var e=n.results;l((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e))}))})).catch((0,f.jsx)(d.nG9,{}))}),[]),(0,f.jsxs)(s.W,{children:[(0,f.jsx)(s.D,{children:"The most popular movies today"}),(0,f.jsx)(s.Ul,{children:(0,f.jsx)(u.Z,{results:t,location:v})})]})}},4390:function(n,e,t){t.d(e,{Bt:function(){return d},EC:function(){return s},Tg:function(){return i},on:function(){return o},y:function(){return u}});var a=t(1243),r="https://api.themoviedb.org/3/",c="856f57e7a2f2f6acb1983cbef8b64e80",i=function(){return a.Z.get("".concat(r,"trending/movie/day?api_key=").concat(c,"&language=en-US")).then((function(n){return n.data}))},o=function(n,e){return a.Z.get("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(n,"&include_adult=false&language=en-US&page=").concat(e)).then((function(n){return n.data}))},s=function(n){return a.Z.get("".concat(r,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US")).then((function(n){return n.data}))},u=function(n){return a.Z.get("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US")).then((function(n){return n.data}))},d=function(n){return a.Z.get("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){return n.data}))}},7008:function(n,e,t){function a(n){return n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://via.placeholder.com/395x574?text=No+Image"}t.d(e,{N:function(){return a}})},9140:function(n,e,t){t.d(e,{Z:function(){return U}});var a=t(1413),r=t(5987),c=t(1694),i=t.n(c),o=t(2791),s=t(162),u=t(6543),d=t(7472),f=t(184),l=["bsPrefix","className","variant","as"],v=o.forwardRef((function(n,e){var t=n.bsPrefix,c=n.className,o=n.variant,u=n.as,d=void 0===u?"img":u,v=(0,r.Z)(n,l),m=(0,s.vE)(t,"card-img");return(0,f.jsx)(d,(0,a.Z)({ref:e,className:i()(o?"".concat(m,"-").concat(o):m,c)},v))}));v.displayName="CardImg";var m=v,p=t(6040),g=["bsPrefix","className","as"],Z=o.forwardRef((function(n,e){var t=n.bsPrefix,c=n.className,u=n.as,d=void 0===u?"div":u,l=(0,r.Z)(n,g),v=(0,s.vE)(t,"card-header"),m=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,f.jsx)(p.Z.Provider,{value:m,children:(0,f.jsx)(d,(0,a.Z)((0,a.Z)({ref:e},l),{},{className:i()(c,v)}))})}));Z.displayName="CardHeader";var x=Z,h=["bsPrefix","className","bg","text","border","body","children","as"],b=(0,d.Z)("h5"),y=(0,d.Z)("h6"),j=(0,u.Z)("card-body"),N=(0,u.Z)("card-title",{Component:b}),_=(0,u.Z)("card-subtitle",{Component:y}),w=(0,u.Z)("card-link",{Component:"a"}),P=(0,u.Z)("card-text",{Component:"p"}),k=(0,u.Z)("card-footer"),C=(0,u.Z)("card-img-overlay"),T=o.forwardRef((function(n,e){var t=n.bsPrefix,c=n.className,o=n.bg,u=n.text,d=n.border,l=n.body,v=void 0!==l&&l,m=n.children,p=n.as,g=void 0===p?"div":p,Z=(0,r.Z)(n,h),x=(0,s.vE)(t,"card");return(0,f.jsx)(g,(0,a.Z)((0,a.Z)({ref:e},Z),{},{className:i()(c,x,o&&"bg-".concat(o),u&&"text-".concat(u),d&&"border-".concat(d)),children:v?(0,f.jsx)(j,{children:m}):m}))}));T.displayName="Card";var U=Object.assign(T,{Img:m,Title:N,Subtitle:_,Body:j,Link:w,Text:P,Header:x,Footer:k,ImgOverlay:C})}}]);
//# sourceMappingURL=577.4d72d1a3.chunk.js.map