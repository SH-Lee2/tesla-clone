(this["webpackJsonptesla-clone2"]=this["webpackJsonptesla-clone2"]||[]).push([[0],{36:function(e,n,t){},37:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var r,i,c,o,s,a,l,d=t(0),j=t.n(d),b=t(13),x=t.n(b),h=(t(36),t(37),t(5)),g=t(7),O=t(6),p=t(29),u=t.n(p),f=t(30),m=t.n(f),v=t(17),w=Object(v.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),y=function(e){return e.car.cars},T=w.reducer,k=t(16),I=t(1);var B,C,S,M,D,E,L,P=function(){var e=Object(d.useState)(!1),n=Object(g.a)(e,2),t=n[0],r=n[1],i=Object(k.b)(y);return Object(I.jsxs)(F,{children:[Object(I.jsx)("a",{href:"#",children:Object(I.jsx)("img",{src:"https://sh-lee2.github.io/tesla-clone/images/logo.svg",alt:""})}),Object(I.jsx)(R,{children:i&&i.map((function(e,n){return Object(I.jsx)("a",{href:"#",children:e},n)}))}),Object(I.jsxs)(X,{children:[Object(I.jsx)("a",{href:"#",children:"shop"}),Object(I.jsx)("a",{href:"#",children:"tesla account"}),Object(I.jsx)(z,{onClick:function(){return r(!0)}})]}),Object(I.jsxs)(A,{show:t,children:[Object(I.jsx)(N,{children:Object(I.jsx)(J,{onClick:function(){return r(!1)}})}),i&&i.map((function(e,n){return Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:e})},n)})),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Used Inventory"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Trade-In"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Cybertruck"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Riadaster"})})]})]})},F=O.a.div(r||(r=Object(h.a)(["\n    min-height: 60px;\n    position: fixed;\n    padding: 0 20px;\n    top: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    z-index: 1;\n"]))),R=O.a.div(i||(i=Object(h.a)(["\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n    a {\n        text-transform: uppercase;\n        font-weight: 600;\n        padding: 10px;\n        flex-wrap: nowrap; // \ud55c\uc904 \uac15\uc81c \uc801\uc6a9\n    }\n    @media (max-width: 768px) {\n        display: none;\n    }\n"]))),X=O.a.div(c||(c=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    a {\n        font-weight: 600;\n        text-transform: uppercase;\n        margin-right: 10px;\n    }\n"]))),z=Object(O.a)(u.a)(o||(o=Object(h.a)(["\n    cursor: pointer;\n"]))),A=O.a.div(s||(s=Object(h.a)(["\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    text-align: start;\n    padding: 20px;\n    transform: ",";\n    transition: transform 0.2s;\n    li {\n        list-style: none;\n        padding: 15px 0;\n        border-bottom: 1px solid rgb(0, 0, 0, 0.2);\n        a {\n            font-weight: 600;\n        }\n    }\n"])),(function(e){return e.show?"translateX(0)":"translateX(100%)"})),N=O.a.div(a||(a=Object(h.a)(["\n    text-align: end;\n"]))),J=Object(O.a)(m.a)(l||(l=Object(h.a)(["\n    cursor: pointer;\n"]))),Y=t(21),U=t.n(Y);var q,G=function(e){var n=e.title,t=e.description,r=e.leftBtnText,i=e.rightBtnText,c=e.backgroundImg;return Object(I.jsxs)(H,{bgImage:c,children:[Object(I.jsx)(U.a,{bottom:!0,children:Object(I.jsxs)(K,{children:[Object(I.jsx)("h1",{children:n}),Object(I.jsx)("p",{children:t})]})}),Object(I.jsxs)($,{children:[Object(I.jsx)(U.a,{bottom:!0,children:Object(I.jsxs)(W,{children:[Object(I.jsx)(Q,{children:r}),Object(I.jsx)(V,{children:i})]})}),Object(I.jsx)(Z,{src:"https://sh-lee2.github.io/tesla-clone/images/down-arrow.svg"})]})]})},H=O.a.div(B||(B=Object(h.a)(["\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: center;\n    background-repeat: not-repeat;\n    background-image: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n"])),(function(e){return'url("https://sh-lee2.github.io/tesla-clone/images/'.concat(e.bgImage,'")')})),K=O.a.div(C||(C=Object(h.a)(["\n    padding: 15vh;\n    text-align: center;\n"]))),Q=O.a.div(S||(S=Object(h.a)(["\n    background-color: rgb(23, 26, 32, 0.8);\n    height: 40px;\n    width: 256px;\n    border-radius: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    font-size: 12px;\n    cursor: pointer;\n    color: white;\n    opacity: 0.85;\n    margin: 8px;\n"]))),V=Object(O.a)(Q)(M||(M=Object(h.a)(["\n    background: white;\n    color: black;\n    opacity: 0.65;\n"]))),W=O.a.div(D||(D=Object(h.a)(["\n    display: flex;\n    margin-bottom: 30px;\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n"]))),Z=O.a.img(E||(E=Object(h.a)(["\n    height: 40px;\n    animation: animateDown infinite 1.2s;\n    overflow-x: hidden;\n"]))),$=O.a.div(L||(L=Object(h.a)([""])));var _=function(){return Object(I.jsxs)(ee,{children:[Object(I.jsx)(G,{title:"Model S",description:"Order Online for Touchless Delivery",backgroundImg:"model-s.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(G,{title:"Model Y",description:"Order Online for Touchless Delivery",backgroundImg:"model-y.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(G,{title:"Model 3",description:"Order Online for Touchless Delivery",backgroundImg:"model-3.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(G,{title:"Model X",description:"Order Online for Touchless Delivery",backgroundImg:"model-x.jpg",leftBtnText:"Custom Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(G,{title:"Lowest Cost Solar Panels in America",description:"Money-back guarantee",backgroundImg:"solar-panel.jpg",leftBtnText:"Order now",rightBtnText:"Learn more"}),Object(I.jsx)(G,{title:"Solar for New Roofs",description:"Solar Roof Costs Less Than a New Roof Plus Solar Panels",backgroundImg:"solar-roof.jpg",leftBtnText:"Order now",rightBtnText:"Learn more"}),Object(I.jsx)(G,{title:"Accessories",description:"",backgroundImg:"accessories.jpg",leftBtnText:"Shop now"})]})},ee=O.a.div(q||(q=Object(h.a)(["\n    height: 100 vh;\n"])));var ne=function(){return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(P,{}),Object(I.jsx)(_,{})]})},te=Object(v.a)({reducer:{car:T}}),re=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),c(e),o(e)}))};x.a.render(Object(I.jsx)(j.a.StrictMode,{children:Object(I.jsx)(k.a,{store:te,children:Object(I.jsx)(ne,{})})}),document.getElementById("root")),re()}},[[47,1,2]]]);
//# sourceMappingURL=main.3b7812bb.chunk.js.map