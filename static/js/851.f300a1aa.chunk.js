"use strict";(self.webpackChunkreact_ecommerce=self.webpackChunkreact_ecommerce||[]).push([[851],{8697:function(s,e,n){n.d(e,{Z:function(){return l}});var c=n(7022),i=n(9743),t=n(2677),a=n.p+"static/media/table.c96637810cb2ae358aca.jpg",r=n(184),l=function(s){var e=s.title;return(0,r.jsxs)("div",{className:"image-container",children:[(0,r.jsx)("img",{src:a,alt:"Product-bg"}),(0,r.jsx)("div",{className:"overlay",children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(t.Z,{children:(0,r.jsx)("h2",{children:e})})})})})]})}},5434:function(s,e,n){n.d(e,{Z:function(){return d}});var c=n(2677),i=n(7689),t=n(9085),a=n(9434),r=n(9597),l=n(184),d=function(s){var e=s.title,n=s.productItem,d=(0,a.I0)(),o=(0,i.s0)(),u=function(){o("/shop/".concat(n.id))};return(0,l.jsxs)(c.Z,{md:3,sm:5,xs:10,className:"product mtop",children:["Big Discount"===e?(0,l.jsxs)("span",{className:"discount",children:[n.discount,"% Off"]}):null,(0,l.jsx)("img",{loading:"lazy",onClick:function(){return u()},src:n.imgUrl,alt:""}),(0,l.jsx)("div",{className:"product-like",children:(0,l.jsx)("ion-icon",{name:"heart-outline"})}),(0,l.jsxs)("div",{className:"product-details",children:[(0,l.jsx)("h3",{onClick:function(){return u()},children:n.productName}),(0,l.jsxs)("div",{className:"rate",children:[(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"})]}),(0,l.jsxs)("div",{className:"price",children:[(0,l.jsxs)("h4",{children:["$",n.price]}),(0,l.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(s){d((0,r.Xq)({product:s,num:1})),t.Am.success("Product has been added to cart!")}(n)},children:(0,l.jsx)("ion-icon",{name:"add"})})]})]})]})}},9135:function(s,e,n){var c=n(9743),i=n(2791),t=n(5434),a=n(184),r=function(s){var e=s.productItems;return(0,i.useEffect)((function(){}),[e]),0===e.length?(0,a.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,a.jsx)(c.Z,{className:"justify-content-center",children:e.map((function(s){return(0,a.jsx)(t.Z,{title:null,productItem:s},s.id)}))})};e.Z=(0,i.memo)(r)},76:function(s,e,n){var c=n(2791);e.Z=function(){(0,c.useEffect)((function(){window.scrollTo(0,0)}),[])}},1030:function(s,e,n){n.r(e),n.d(e,{default:function(){return N}});var c=n(9439),i=n(2791),t=n(8697),a=n(7022),r=n(9135),l=n(4783),d=n(7689),o=n(9743),u=n(2677),m=n(9434),f=n(9085),j=n(9597),x=n(184),h=function(s){var e=s.selectedProduct,n=(0,m.I0)(),t=(0,i.useState)(1),r=(0,c.Z)(t,2),l=r[0],d=r[1];return(0,x.jsx)("section",{className:"product-page",children:(0,x.jsx)(a.Z,{children:(0,x.jsxs)(o.Z,{className:"justify-content-center",children:[(0,x.jsx)(u.Z,{md:6,children:(0,x.jsx)("img",{loading:"lazy",src:null===e||void 0===e?void 0:e.imgUrl,alt:""})}),(0,x.jsxs)(u.Z,{md:6,children:[(0,x.jsx)("h2",{children:null===e||void 0===e?void 0:e.productName}),(0,x.jsxs)("div",{className:"rate",children:[(0,x.jsxs)("div",{className:"stars",children:[(0,x.jsx)("i",{className:"fa fa-star"}),(0,x.jsx)("i",{className:"fa fa-star"}),(0,x.jsx)("i",{className:"fa fa-star"}),(0,x.jsx)("i",{className:"fa fa-star"}),(0,x.jsx)("i",{className:"fa fa-star"})]}),(0,x.jsxs)("span",{children:[null===e||void 0===e?void 0:e.avgRating," ratings"]})]}),(0,x.jsxs)("div",{className:"info",children:[(0,x.jsxs)("span",{className:"price",children:["$",null===e||void 0===e?void 0:e.price]}),(0,x.jsxs)("span",{children:["category:",null===e||void 0===e?void 0:e.category]})]}),(0,x.jsx)("p",{children:null===e||void 0===e?void 0:e.shortDesc}),(0,x.jsx)("input",{className:"qty-input",type:"number",placeholder:"Qty",value:l,onChange:function(s){d(s.target.value)},min:"1"}),(0,x.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(s,e){n((0,j.Xq)({product:s,num:e})),f.Am.success("Product has been added to cart!")}(e,l)},children:"Add To Cart"})]})]})})})},v=function(s){var e=s.selectedProduct,n=(0,i.useState)("desc"),t=(0,c.Z)(n,2),r=t[0],l=t[1];return(0,x.jsx)("section",{className:"product-reviews",children:(0,x.jsxs)(a.Z,{children:[(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{style:{color:"desc"===r?"black":"#9c9b9b"},onClick:function(){return l("desc")},children:"Description"}),(0,x.jsxs)("li",{style:{color:"rev"===r?"black":"#9c9b9b"},onClick:function(){return l("rev")},children:["Reviews (",null===e||void 0===e?void 0:e.reviews.length,")"]})]}),"desc"===r?(0,x.jsx)("p",{children:null===e||void 0===e?void 0:e.description}):(0,x.jsx)("div",{className:"rates",children:null===e||void 0===e?void 0:e.reviews.map((function(s){return(0,x.jsxs)("div",{className:"rate-comment",children:[(0,x.jsx)("span",{children:"Abdelghafour Kissai"}),(0,x.jsxs)("span",{children:[s.rating," (rating)"]}),(0,x.jsx)("p",{children:s.text})]},s.rating)}))})]})})},p=n(76),N=function(){var s=(0,d.UO)().id,e=(0,i.useState)(l.RB.filter((function(e){return parseInt(e.id)===parseInt(s)}))[0]),n=(0,c.Z)(e,2),o=n[0],u=n[1],m=(0,i.useState)([]),f=(0,c.Z)(m,2),j=f[0],N=f[1];return(0,i.useEffect)((function(){window.scrollTo(0,0),u(l.RB.filter((function(e){return parseInt(e.id)===parseInt(s)}))[0]),N(l.RB.filter((function(s){return s.category===(null===o||void 0===o?void 0:o.category)&&s.id!==(null===o||void 0===o?void 0:o.id)})))}),[o,s]),(0,p.Z)(),(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(t.Z,{title:null===o||void 0===o?void 0:o.productName}),(0,x.jsx)(h,{selectedProduct:o}),(0,x.jsx)(v,{selectedProduct:o}),(0,x.jsxs)("section",{className:"related-products",children:[(0,x.jsx)(a.Z,{children:(0,x.jsx)("h3",{children:"You might also like"})}),(0,x.jsx)(r.Z,{productItems:j})]})]})}}}]);
//# sourceMappingURL=851.f300a1aa.chunk.js.map