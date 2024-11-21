"use strict";(self.webpackChunkreact_ecommerce=self.webpackChunkreact_ecommerce||[]).push([[732],{8697:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7022),s=n(9743),a=n(2677),c=n.p+"static/media/table.c96637810cb2ae358aca.jpg",i=n(184),l=function(e){var t=e.title;return(0,i.jsxs)("div",{className:"image-container",children:[(0,i.jsx)("img",{src:c,alt:"Product-bg"}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(s.Z,{children:(0,i.jsx)(a.Z,{children:(0,i.jsx)("h2",{children:t})})})})})]})}},5434:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2677),s=n(7689),a=n(9085),c=n(9434),i=n(9597),l=n(184),o=function(e){var t=e.title,n=e.productItem,o=(0,c.I0)(),u=(0,s.s0)(),d=function(){u("/shop/".concat(n.id))};return(0,l.jsxs)(r.Z,{md:3,sm:5,xs:10,className:"product mtop",children:["Big Discount"===t?(0,l.jsxs)("span",{className:"discount",children:[n.discount,"% Off"]}):null,(0,l.jsx)("img",{loading:"lazy",onClick:function(){return d()},src:n.imgUrl,alt:""}),(0,l.jsx)("div",{className:"product-like",children:(0,l.jsx)("ion-icon",{name:"heart-outline"})}),(0,l.jsxs)("div",{className:"product-details",children:[(0,l.jsx)("h3",{onClick:function(){return d()},children:n.productName}),(0,l.jsxs)("div",{className:"rate",children:[(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"})]}),(0,l.jsxs)("div",{className:"price",children:[(0,l.jsxs)("h4",{children:["$",n.price]}),(0,l.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(e){o((0,i.Xq)({product:e,num:1})),a.Am.success("Product has been added to cart!")}(n)},children:(0,l.jsx)("ion-icon",{name:"add"})})]})]})]})}},9135:function(e,t,n){var r=n(9743),s=n(2791),a=n(5434),c=n(184),i=function(e){var t=e.productItems;return(0,s.useEffect)((function(){}),[t]),0===t.length?(0,c.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,c.jsx)(r.Z,{className:"justify-content-center",children:t.map((function(e){return(0,c.jsx)(a.Z,{title:null,productItem:e},e.id)}))})};t.Z=(0,s.memo)(i)},76:function(e,t,n){var r=n(2791);t.Z=function(){(0,r.useEffect)((function(){window.scrollTo(0,0)}),[])}},167:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(9439),s=n(7022),a=n(9743),c=n(2677),i=n(1413),l=n(4249),o=n(4783),u=n(184),d=[{value:"sofa",label:"Sofa"},{value:"chair",label:"Chair"},{value:"watch",label:"Watch"},{value:"mobile",label:"Mobile"},{value:"wireless",label:"Wireless"}],f={control:function(e){return(0,i.Z)((0,i.Z)({},e),{},{backgroundColor:"#0f3460",color:"white",borderRadius:"5px",border:"none",boxShadow:"none",width:"200px",height:"40px"})},option:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{backgroundColor:t.isSelected?"#0f3460":"white",color:t.isSelected?"white":"#0f3460","&:hover":{backgroundColor:"#0f3460",color:"white"}})},singleValue:function(e){return(0,i.Z)((0,i.Z)({},e),{},{color:"white"})}},h=function(e){var t=e.setFilterList;return(0,u.jsx)(l.ZP,{options:d,defaultValue:{value:"",label:"Filter By Category"},styles:f,onChange:function(e){t(o.RB.filter((function(t){return t.category===e.value})))}})},m=n(2791),x=function(e){var t=e.setFilterList,n=(0,m.useState)(null),s=(0,r.Z)(n,2),a=s[0],c=s[1];return(0,u.jsxs)("div",{className:"search-container",children:[(0,u.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){c(e.target.value),t(o.RB.filter((function(e){var t;return null===(t=e.productName)||void 0===t?void 0:t.toLowerCase().includes(null===a||void 0===a?void 0:a.toLowerCase())})))}}),(0,u.jsx)("ion-icon",{name:"search-outline",className:"search-icon"})]})},j=n(9135),v=n(8697),p=n(76),Z=function(){var e=(0,m.useState)(o.RB.filter((function(e){return"sofa"===e.category}))),t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,p.Z)(),(0,u.jsxs)(m.Fragment,{children:[(0,u.jsx)(v.Z,{title:"product"}),(0,u.jsxs)("section",{className:"filter-bar",children:[(0,u.jsx)(s.Z,{className:"filter-bar-contianer",children:(0,u.jsxs)(a.Z,{className:"justify-content-center",children:[(0,u.jsx)(c.Z,{md:4,children:(0,u.jsx)(h,{setFilterList:i})}),(0,u.jsx)(c.Z,{md:8,children:(0,u.jsx)(x,{setFilterList:i})})]})}),(0,u.jsx)(s.Z,{children:(0,u.jsx)(j.Z,{productItems:n})})]})]})}}}]);
//# sourceMappingURL=732.f613b0f3.chunk.js.map