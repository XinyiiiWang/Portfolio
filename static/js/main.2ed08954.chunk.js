(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{36:function(n,e,t){"use strict";t.r(e);var i,o=t(1),r=t(20),a=t.n(r),c=t(9),s=t(4),l=t(12),d=t(13),m=t(7),b=t(6),j=b.b.nav(i||(i=Object(m.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"]))),h=t(0);function p(){var n=Object(o.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1];return Object(h.jsxs)(j,{children:[Object(h.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(h.jsx)(d.b,{})}),Object(h.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(h.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(h.jsx)(d.a,{})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.c,{to:"/Portfolio",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.c,{to:"/Portfolio/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.c,{to:"/Portfolio/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.c,{to:"/Portfolio/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}var x,g,u=t.p+"static/media/me.bc7f51bd.JPG",f=b.b.div(x||(x=Object(m.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function O(n){var e=n.children;return Object(h.jsx)(f,{className:"para",children:Object(h.jsx)("p",{children:e})})}var v=b.b.div(g||(g=Object(m.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function y(n){var e=n.btnLink,t=void 0===e?"test":e,i=n.btnText,o=void 0===i?"Test":i,r=n.outline,a=void 0!==r&&r;return Object(h.jsx)(v,{outline:a,className:"button-wrapper",children:Object(h.jsx)(c.b,{className:"button",to:t,children:o})})}var w,k,_=t.p+"static/media/social-media-arrow.f5e093ce.svg",N=t.p+"static/media/scroll-down-arrow.b013ca45.svg",I=b.b.div(w||(w=Object(m.a)(["\n  .intro {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .intro_heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .intro_name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .intro_img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .intro_info {\n    margin-top: -18rem;\n  }\n  .intro_social,\n  .intro_scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n    bottom: 20px;\n    width: 50px;\n  }\n  .intro_social {\n    left: 50px;\n  }\n  .intro_scrollDown {\n    right: 50px;\n  }\n  .intro_social_indicator,\n  .intro_scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .intro_scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n  .intro_social_text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .intro {\n      min-height: 750px;\n    }\n    .intro_heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .intro_name {\n        font-size: 4.5rem;\n      }\n    }\n    .intro_img {\n      height: 400px;\n    }\n    .intro_info {\n      margin-top: 3rem;\n    }\n    .intro_social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .intro_social_indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .intro_social_text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .intro_scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function S(){return Object(h.jsx)(I,{children:Object(h.jsx)("div",{className:"intro",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"intro_heading",children:[Object(h.jsx)("span",{children:"Hello, This is"}),Object(h.jsx)("span",{className:"intro_name",children:"Xinyi Wang"})]}),Object(h.jsx)("div",{className:"intro_img",children:Object(h.jsx)("img",{src:u,alt:""})}),Object(h.jsxs)("div",{className:"intro_info",children:[Object(h.jsx)(O,{children:"I am a front-end developer, music lover, and fika addict based in Stockholm, Sweden."}),Object(h.jsx)(y,{btnLink:"/Portfolio/projects",btnText:"see my works"})]}),Object(h.jsxs)("div",{className:"intro_social",children:[Object(h.jsxs)("div",{className:"intro_social_indicator",children:[Object(h.jsx)("p",{children:"Follow"}),Object(h.jsx)("img",{src:_,alt:"social media arrow"})]}),Object(h.jsx)("div",{className:"intro_social_text",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/xinyi-wang-b48290200/",target:"_blank",rel:"noreferrer",children:"LI"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.facebook.com/people/Xinyi-Wang/100050512331010/",target:"_blank",rel:"noreferrer",children:"FB"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.instagram.com/nolook1ngback_/",target:"_blank",rel:"noreferrer",children:"IG"})})]})})]}),Object(h.jsxs)("div",{className:"intro_scrollDown",children:[Object(h.jsx)("p",{children:"Scroll"}),Object(h.jsx)("img",{src:N,alt:"scroll down arrow"})]})]})})})}var z=b.b.div(k||(k=Object(m.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function P(n){var e=n.subheading,t=void 0===e?"This is subheading":e,i=n.heading,o=void 0===i?"This is heading":i;return Object(h.jsxs)(z,{className:"section-title",children:[Object(h.jsx)("p",{children:t}),Object(h.jsx)("h2",{children:o})]})}var B,T=t.p+"static/media/about-section-img.00018880.JPG",M=b.b.div(B||(B=Object(m.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection_left,\n  .aboutSection_right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection_buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  .aboutSection_img {\n    height: 100vh;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection_left {\n      flex: 4;\n    }\n    .aboutSection_right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection_left,\n    .aboutSection_right {\n      width: 100%;\n    }\n    .aboutSection_right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection_buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function R(){return Object(h.jsx)(M,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"aboutSection_left",children:[Object(h.jsx)(P,{className:"section-title",subheading:"Let me introduce myself",heading:"About me"}),Object(h.jsx)(O,{children:"Hej hej! My name is Xinyi Wang. I am made in China, currently doing Master of Interactive Media Technology at KTH Royal Institute of Technology in Stockholm, Sweden. I am a front-end developer, music lover, and fika addict.I\u2019m also a former college basketball athlete. Wanna play a match?"}),Object(h.jsxs)("div",{className:"aboutSection_buttons",children:[Object(h.jsx)(y,{btnLink:"/Portfolio/projects",btnText:"Works"}),Object(h.jsx)(y,{btnLink:"/Portfolio/about",btnText:"Read More",outline:!0})]})]}),Object(h.jsx)("div",{className:"aboutSection_right",children:Object(h.jsx)("img",{src:T,alt:"",className:"aboutSection_img"})})]})})}var C,D,L=t(42),K=t(40),H=t(41),W=t(39),A=(t(35),t(43)),X=t.p+"static/media/Listify.90f42b7c.png",E=t.p+"static/media/Sabel & Tiny.c827bf78.png",F=t.p+"static/media/Steamind.91974304.png",J=t.p+"static/media/Spir.970072ca.png",G=[{id:Object(A.a)(),name:"Listify",desc:"The interface of customizing your playlists and discovering inspirations for your playlists.",img:X},{id:Object(A.a)(),name:"Sabel & Tiny",desc:"A 2D side scroller platform puzzle game where the player has control over Sabel and her companion Tiny as they explore the world, a moon named Mira.",img:E},{id:Object(A.a)(),name:"Steamind",desc:"Steamind is a tool for visualizing games from your own Steam library as well as other games from Steam that might suit your interests.",img:F},{id:Object(A.a)(),name:"Spir: Take a breather with a smart coaster",desc:"Take a breather with a smart coaster",img:J}],V=t.p+"static/media/projectImg.771236e1.png",Y=b.b.div(C||(C=Object(m.a)(["\n  .projectItem_img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem_info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem_title {\n    font-size: 2.2rem;\n  }\n  .projectItem_desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem_img {\n      height: 350px;\n    }\n  }\n"])));function q(n){var e=n.img,t=void 0===e?V:e,i=n.title,o=void 0===i?"Project Name":i,r=n.desc,a=void 0===r?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":r;return Object(h.jsxs)(Y,{children:[Object(h.jsx)(c.b,{to:"/projects",className:"projectItem_img",children:Object(h.jsx)("img",{src:t,alt:"project img"})}),Object(h.jsxs)("div",{className:"projectItem_info",children:[Object(h.jsx)(c.b,{to:"#",children:Object(h.jsx)("h3",{className:"projectItem__title",children:o})}),Object(h.jsx)("p",{className:"projectItem__desc",children:a})]})]})}var Q,U=b.b.div(D||(D=Object(m.a)(["\n  padding: 10rem 0;\n  .projects_allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects_allItems {\n      flex-direction: column;\n      max-width: 500px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem_img {\n        width: 100%;\n      }\n    }\n  }\n"])));function Z(){return Object(h.jsx)(U,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(P,{heading:"Projects",subheading:"Some of my recent works"}),Object(h.jsx)("div",{className:"projects_allItems",children:Object(h.jsx)(L.a,{spaceBetween:30,slidesPerView:2,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2}},children:G.map((function(n,e){if(!(e>=10))return Object(h.jsx)(K.a,{children:Object(h.jsx)(q,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})}H.a.use([W.a]);var $,nn=b.b.div(Q||(Q=Object(m.a)(["\n  padding: 10rem 0;\n  .contactBanner_wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner_heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner_heading {\n      font-size: 2.5rem;\n    }\n  }\n"])));function en(){return Object(h.jsx)(nn,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"contactBanner_wrapper",children:[Object(h.jsx)(O,{children:"If you have any idea"}),Object(h.jsx)("h3",{className:"contactBanner_heading",children:"Don't hesitate to contact me"}),Object(h.jsx)(y,{btnLink:"/Portfolio/contact",btnText:"Contact me"})]})})})}var tn,on=b.b.div($||($=Object(m.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function rn(n){var e=n.heading,t=void 0===e?"col heading":e,i=n.links,o=void 0===i?[{type:"link",title:"Home",path:"/Portfolio"},{type:"link",title:"About",path:"/Portfolio/about"}]:i;return Object(h.jsxs)(on,{children:[Object(h.jsx)("h1",{className:"heading",children:t}),Object(h.jsx)("ul",{children:o.map((function(n,e){return Object(h.jsx)("li",{children:"link"===n.type?Object(h.jsx)(c.b,{to:n.path,children:n.title}):Object(h.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var an,cn=b.b.div(tn||(tn=Object(m.a)(["\n  padding-top: 10rem;\n  background-color: var(--deep-dark);\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer_col1 {\n    flex: 2;\n  }\n  .footer_col2,\n  .footer_col3,\n  .footer_col4 {\n    flex: 1;\n  }\n  .footer_col1_title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer_col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function sn(){return Object(h.jsxs)(cn,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"footer_col1",children:[Object(h.jsx)("h1",{className:"footer_col1_title",children:"Xinyi Wang"}),Object(h.jsx)(O,{children:"A Master student at KTH Royal Institute of Technology in Stockholm, Sweden. Open for any possibility."})]}),Object(h.jsx)("div",{className:"footer_col2",children:Object(h.jsx)(rn,{heading:"Links",links:[{title:"Home",path:"/Portfolio",type:"link"},{title:"About",path:"/Portfolio/about",type:"link"},{title:"Projects",path:"/Portfolio/projects",type:"link"},{title:"Contact",path:"/Portfolio/contact",type:"link"}]})}),Object(h.jsx)("div",{className:"footer_col3",children:Object(h.jsx)(rn,{heading:"Contact Info",links:[{title:"+460724420618",path:"tel:+460724420618"},{title:"is.xinyiwang@outlook.com",path:"mailto:is.xinyiwang@outlook.com"},{title:"KTH, Stockholm, Sweden",path:"https://www.google.com/maps/place/KTH+Royal+Institute+of+Technology/@59.3498706,18.0680679,17z/data=!3m1!4b1!4m5!3m4!1s0x465f779d96ed48cb:0xb1366ae00b879b4a!8m2!3d59.3498706!4d18.0702566"}]})}),Object(h.jsx)("div",{className:"footer_col4",children:Object(h.jsx)(rn,{heading:"Social Media",links:[{title:"Linkedin",path:"https://www.linkedin.com/in/xinyi-wang-b48290200/"},{title:"Facebook",path:"https://www.facebook.com/people/Xinyi-Wang/100050512331010/"},{title:"Instagram",path:"https://www.instagram.com/nolook1ngback_/"}]})})]}),Object(h.jsx)("div",{className:"copyright",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(O,{children:"@ 2021 - Xinyi Wang"})})})]})}function ln(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{}),Object(h.jsx)(R,{}),Object(h.jsx)(Z,{}),Object(h.jsx)(en,{}),Object(h.jsx)(sn,{})]})}function dn(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"This is About page."})})}var mn,bn=b.b.div(an||(an=Object(m.a)(["\n  padding: 10rem 0;\n  .projects_allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects_searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects_searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects_searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n    right: 1rem;\n  }\n  .projects_searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects_searchBar,\n    .projects_searchBar form,\n    .projects_searchBar input {\n      width: 100%;\n    }\n  }\n"])));function jn(){var n=Object(o.useState)(""),e=Object(l.a)(n,2),t=e[0],i=e[1],r=Object(o.useState)(G),a=Object(l.a)(r,2),c=a[0],s=a[1];Object(o.useEffect)((function(){""!==t&&s((function(){return G.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(h.jsx)(bn,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(P,{heading:"Projects",subheading:"Some of my recent works"}),Object(h.jsx)("div",{className:"projects_searchBar",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),i(n.target.value),!n.target.value.length>0&&s(G)},placeholder:"project name"}),Object(h.jsx)(d.c,{className:"searchIcon"})]})}),Object(h.jsx)("div",{className:"projects_allItems",children:c.map((function(n){return Object(h.jsx)(q,{title:n.name,desc:n.description,img:n.img},n.id)}))})]})})}function hn(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"This is Contact page."})})}function pn(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(c.a,{basename:"".concat("/Portfolio","/"),children:[Object(h.jsx)(p,{}),Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/Portfolio/about",children:Object(h.jsx)(dn,{})}),Object(h.jsx)(s.a,{path:"/Portfolio/contact",children:Object(h.jsx)(hn,{})}),Object(h.jsx)(s.a,{path:"/Portfolio/projects",children:Object(h.jsx)(jn,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/Portfolio",children:Object(h.jsx)(ln,{})})]})]})})}var xn,gn=Object(b.a)(mn||(mn=Object(m.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),un=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",fn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",On=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",vn=Object(b.a)(xn||(xn=Object(m.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n"])),un,fn,On);a.a.render(Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(gn,{}),Object(h.jsx)(vn,{}),Object(h.jsx)(pn,{})]}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.2ed08954.chunk.js.map