"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[697],{1526:function(n,e,t){t.d(e,{Z:function(){return m}});var r,i,a,o=t(168),s=t(6444),u=s.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: ","px;\n"])),(function(n){return n.theme.space[5]})),c=s.ZP.p(i||(i=(0,o.Z)(["\n  text-align: center;\n  font-weight: ",";\n  font-size: 24px;\n"])),(function(n){return n.theme.fontWeights.bold})),l=s.ZP.img(a||(a=(0,o.Z)(["\n  max-width: 200px;\n"]))),p=t(6316),d=t(9057),f=t(7001),h=t(184),x={emptyQuery:{text:"Type to search something",image:p},error:{text:"Something went wrong. Try again later",image:d},noResults:{text:"Nothing to see here",image:f}},m=function(n){var e=n.type,t=x[e];return(0,h.jsxs)(u,{children:[(0,h.jsx)(c,{children:t.text}),(0,h.jsx)(l,{src:t.image,alt:t.text})]})}},2178:function(n,e,t){t.d(e,{Z:function(){return P}});var r,i,a,o,s,u,c=t(168),l=t(6444),p=l.ZP.ul(r||(r=(0,c.Z)(["\n  padding: ","px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  grid-gap: ","px;\n  list-style: none;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),d=l.ZP.li(i||(i=(0,c.Z)(["\n  box-shadow: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.shadows[2]}),(function(n){return n.theme.radii.normal})),f=t(6731),h=(0,l.ZP)(f.OL)(a||(a=(0,c.Z)(["\n  padding: ","px;\n  display: flex;\n  flex-wrap: nowrap;\n  gap: ","px;\n  text-decoration: none;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]})),x=l.ZP.img(o||(o=(0,c.Z)(["\n  width: 100px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: ",";\n"])),(function(n){return n.theme.radii.normal})),m=l.ZP.h2(s||(s=(0,c.Z)(["\n  font-size: ",";\n  font-style: normal;\n"])),(function(n){return n.theme.fontSizes.m})),g=l.ZP.div(u||(u=(0,c.Z)(["\n  font-size: ",";\n  font-style: italic;\n  color: black;\n\n  > p {\n    margin: ","px 0;\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.space[3]})),Z=t(8088),v=t(4345),y=t(7689),b=t(3708),w=t(184),j=function(n){var e=n.id,t=n.posterPath,r=n.title,i=n.release,a=n.genresIds,o=(0,v.F)().getGenresByIds,s=(0,y.TH)(),u=t?"".concat(b.yA).concat(t):Z,c=new Date(i).getFullYear(),l=o(a);return(0,w.jsxs)(h,{to:"/movies/".concat(e),state:{from:s},children:[(0,w.jsx)(x,{src:u,alt:r}),(0,w.jsxs)(g,{children:[(0,w.jsx)(m,{children:r}),!isNaN(c)&&(0,w.jsxs)("p",{children:["Year: ",c]}),""!==l&&(0,w.jsxs)("p",{children:["Genres: ",l]})]})]})},P=function(n){var e=n.items;return(0,w.jsx)(p,{children:e.map((function(n){return(0,w.jsx)(d,{children:(0,w.jsx)(j,{id:n.id,posterPath:n.poster_path,title:n.original_title,release:n.release_date,genresIds:n.genre_ids})},n.id)}))})}},697:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,i,a,o,s=t(5861),u=t(885),c=t(7757),l=t.n(c),p=t(2791),d=t(6731),f=t(168),h=t(6444),x=h.ZP.form(r||(r=(0,f.Z)(["\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: ",";\n  border: 1px solid lightgrey;\n  overflow: hidden;\n"])),(function(n){return n.theme.radii.normal})),m=h.ZP.button(i||(i=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),g=h.ZP.span(a||(a=(0,f.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),Z=h.ZP.input(o||(o=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),v=t(7692),y=t(184),b=function(n){var e=n.searchQuery,t=n.onSubmit;return(0,y.jsxs)(x,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.searchQuery.value;t(e)},children:[(0,y.jsxs)(m,{type:"submit",children:[(0,y.jsx)(v.wnI,{size:"20"}),(0,y.jsx)(g,{children:"Search"})]}),(0,y.jsx)(Z,{type:"text",name:"searchQuery",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",defaultValue:e})]})},w=t(7953),j=t(3708),P=function(){var n=(0,s.Z)(l().mark((function n(e){var t,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{query:e,page:j.oe.page,include_adult:j.oe.includeAdult}},n.prev=1,n.next=4,w.Z.get(j.fp.SEARCH,t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",null);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),S=t(2178),_=t(7013),k=t(1526),z=t(7092),R=function(){var n,e=(0,p.useState)([]),t=(0,u.Z)(e,2),r=t[0],i=t[1],a=(0,p.useState)(!1),o=(0,u.Z)(a,2),c=o[0],f=o[1],h=(0,p.useState)(null),x=(0,u.Z)(h,2),m=x[0],g=x[1],Z=(0,d.lr)(),v=(0,u.Z)(Z,2),w=v[0],j=v[1],R=null!==(n=w.get("query"))&&void 0!==n?n:"";(0,p.useEffect)((function(){if(""!==R.trim())return f(!0),(0,s.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P(R);case 3:e=n.sent,i(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),g(n.t0);case 10:return n.prev=10,f(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))(),function(){g(null),i([])}}),[R]);var E={hasError:m,hasResults:r.length>0,hasSearchQuery:""!==R.trim()},Q=(0,z.Z)(E);return(0,y.jsxs)("section",{children:[(0,y.jsx)(b,{searchQuery:R,onSubmit:function(n){j(""!==n?{query:n}:{})}}),r.length>0&&(0,y.jsx)(S.Z,{items:r}),c&&(0,y.jsx)(_.Z,{}),!c&&Q&&(0,y.jsx)(k.Z,{type:Q})]})}},7092:function(n,e,t){var r=t(3708);e.Z=function(n){var e=n.hasError,t=n.hasResults,i=n.hasSearchQuery,a=void 0===i||i;return e?r.oK.ERROR:t||a?!t&&a?r.oK.NO_RESULTS:null:r.oK.EMPTY_QUERY}},6316:function(n,e,t){n.exports=t.p+"static/media/empty-query.cf923ecdacb47d96d5ff.png"},9057:function(n,e,t){n.exports=t.p+"static/media/error.5496863544fb5a519bcf.png"},8088:function(n,e,t){n.exports=t.p+"static/media/image-not-found.0ee629d08e998d7c4c0d.png"},7001:function(n,e,t){n.exports=t.p+"static/media/no-results.d438399ff68428d0774c.png"}}]);
//# sourceMappingURL=697.661c60b5.chunk.js.map