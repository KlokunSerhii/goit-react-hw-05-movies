"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(n,e,t){t.r(e);var a=t(3433),r=t(9439),c=t(2791),o=t(4390),i=t(7689),u=t(9140),d=t(2061),f=t(184);e.default=function(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],s=e[1],l=(0,i.UO)().movieId;return(0,c.useEffect)((function(){(0,o.Bt)(l).then((function(n){var e=n.results;return s((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e))}))}))}),[l]),(0,f.jsx)(d.W,{children:t.map((function(n){var e=n.author,t=n.id,a=n.content;return(0,f.jsx)(u.Z,{border:"danger",style:{width:"90%",margin:"10px auto"},children:(0,f.jsxs)(u.Z.Body,{children:[(0,f.jsx)(u.Z.Title,{children:e}),(0,f.jsx)(u.Z.Text,{children:a})]})},t)}))})}},2061:function(n,e,t){t.d(e,{D:function(){return f},Ul:function(){return d},W:function(){return u}});var a,r,c,o=t(168),i=t(6444),u=i.ZP.div(a||(a=(0,o.Z)(["\n  background-color: #0f0f0f;\n  color: #ffffff;\n  justify-content: space-around;\n  padding: 10px;\n"]))),d=i.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-around;\n  margin-top: 20px;\n"]))),f=i.ZP.h1(c||(c=(0,o.Z)(["\n  margin-top: 20px;\n"])))},4390:function(n,e,t){t.d(e,{Bt:function(){return f},Tg:function(){return o},d5:function(){return d},on:function(){return i},xW:function(){return u}});var a=t(1243),r="https://api.themoviedb.org/3/",c="856f57e7a2f2f6acb1983cbef8b64e80",o=function(){return a.Z.get("".concat(r,"trending/movie/day?api_key=").concat(c,"&language=en-US")).then((function(n){return n.data}))},i=function(n,e){return a.Z.get("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(n,"&include_adult=false&language=en-US&page=").concat(e)).then((function(n){return n.data}))},u=function(n){return a.Z.get("".concat(r,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US")).then((function(n){return n.data}))},d=function(n){return a.Z.get("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US")).then((function(n){return n.data}))},f=function(n){return a.Z.get("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){return n.data}))}},9140:function(n,e,t){t.d(e,{Z:function(){return U}});var a=t(1413),r=t(5987),c=t(1694),o=t.n(c),i=t(2791),u=t(162),d=t(6543),f=t(7472),s=t(184),l=["bsPrefix","className","variant","as"],g=i.forwardRef((function(n,e){var t=n.bsPrefix,c=n.className,i=n.variant,d=n.as,f=void 0===d?"img":d,g=(0,r.Z)(n,l),v=(0,u.vE)(t,"card-img");return(0,s.jsx)(f,(0,a.Z)({ref:e,className:o()(i?"".concat(v,"-").concat(i):v,c)},g))}));g.displayName="CardImg";var v=g,Z=t(6040),m=["bsPrefix","className","as"],p=i.forwardRef((function(n,e){var t=n.bsPrefix,c=n.className,d=n.as,f=void 0===d?"div":d,l=(0,r.Z)(n,m),g=(0,u.vE)(t,"card-header"),v=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:g}}),[g]);return(0,s.jsx)(Z.Z.Provider,{value:v,children:(0,s.jsx)(f,(0,a.Z)((0,a.Z)({ref:e},l),{},{className:o()(c,g)}))})}));p.displayName="CardHeader";var x=p,h=["bsPrefix","className","bg","text","border","body","children","as"],b=(0,f.Z)("h5"),y=(0,f.Z)("h6"),_=(0,d.Z)("card-body"),j=(0,d.Z)("card-title",{Component:b}),k=(0,d.Z)("card-subtitle",{Component:y}),N=(0,d.Z)("card-link",{Component:"a"}),w=(0,d.Z)("card-text",{Component:"p"}),P=(0,d.Z)("card-footer"),C=(0,d.Z)("card-img-overlay"),S=i.forwardRef((function(n,e){var t=n.bsPrefix,c=n.className,i=n.bg,d=n.text,f=n.border,l=n.body,g=void 0!==l&&l,v=n.children,Z=n.as,m=void 0===Z?"div":Z,p=(0,r.Z)(n,h),x=(0,u.vE)(t,"card");return(0,s.jsx)(m,(0,a.Z)((0,a.Z)({ref:e},p),{},{className:o()(c,x,i&&"bg-".concat(i),d&&"text-".concat(d),f&&"border-".concat(f)),children:g?(0,s.jsx)(_,{children:v}):v}))}));S.displayName="Card";var U=Object.assign(S,{Img:v,Title:j,Subtitle:k,Body:_,Link:N,Text:w,Header:x,Footer:P,ImgOverlay:C})}}]);
//# sourceMappingURL=186.c6f55d74.chunk.js.map