(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{142:function(n,e,t){"use strict";t.r(e);var i,a=t(1),r=t(15),o=t.n(r),c=t(11),s=t(7),l=t(21),d=t(17),m=t(5),b=t(6),j=b.b.nav(i||(i=Object(m.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"]))),h=t(0);function p(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1];return Object(h.jsxs)(j,{children:[Object(h.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(h.jsx)(d.d,{})}),Object(h.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(h.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(h.jsx)(d.a,{})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.c,{to:"/Portfolio",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.c,{to:"/Portfolio/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.c,{to:"/Portfolio/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(h.jsx)("li",{children:Object(h.jsx)(c.c,{to:"/Portfolio/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}var x,g,u=t.p+"static/media/me-1.21755e02.JPG",f=b.b.div(x||(x=Object(m.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function O(n){var e=n.children;return Object(h.jsx)(f,{className:"para",children:Object(h.jsx)("p",{children:e})})}var v=b.b.div(g||(g=Object(m.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function y(n){var e=n.btnLink,t=void 0===e?"":e,i=n.btnText,a=void 0===i?"Default":i,r=n.outline,o=void 0!==r&&r;return Object(h.jsx)(v,{outline:o,className:"button-wrapper",children:/(http|https):\/\/([\w.]+\/?)\S*/.test(t)?Object(h.jsx)("a",{className:"button",href:t,target:"_blank",rel:"noreferrer",children:a}):Object(h.jsx)(c.b,{className:"button",to:t,children:a})})}var w,k,_=t.p+"static/media/social-media-arrow.f5e093ce.svg",N=t.p+"static/media/scroll-down-arrow.b013ca45.svg",S=b.b.div(w||(w=Object(m.a)(["\n  .intro {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .intro_heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .intro_name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .intro_img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .intro_info {\n    margin-top: -18rem;\n  }\n  .intro_social,\n  .intro_scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n    bottom: 20px;\n    width: 50px;\n  }\n  .intro_social {\n    left: 50px;\n  }\n  .intro_scrollDown {\n    right: 50px;\n  }\n  .intro_social_indicator,\n  .intro_scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .intro_scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n  .intro_social_text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .intro {\n      min-height: 750px;\n    }\n    .intro_heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .intro_name {\n        font-size: 4.5rem;\n      }\n    }\n    .intro_img {\n      height: 400px;\n    }\n    .intro_info {\n      margin-top: 3rem;\n    }\n    .intro_social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .intro_social_indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .intro_social_text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .intro_scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function I(){return Object(h.jsx)(S,{children:Object(h.jsx)("div",{className:"intro",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"intro_heading",children:[Object(h.jsx)("span",{children:"Hello, This is"}),Object(h.jsx)("span",{className:"intro_name",children:"Xinyi Wang"})]}),Object(h.jsx)("div",{className:"intro_img",children:Object(h.jsx)("img",{src:u,alt:""})}),Object(h.jsxs)("div",{className:"intro_info",children:[Object(h.jsx)(O,{children:"I am a front-end developer, music lover, and fika addict based in Stockholm, Sweden."}),Object(h.jsx)(y,{btnLink:"/Portfolio/projects",btnText:"see my works"})]}),Object(h.jsxs)("div",{className:"intro_social",children:[Object(h.jsxs)("div",{className:"intro_social_indicator",children:[Object(h.jsx)("p",{children:"Follow"}),Object(h.jsx)("img",{src:_,alt:"social media arrow"})]}),Object(h.jsx)("div",{className:"intro_social_text",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/xinyi-wang-b48290200/",target:"_blank",rel:"noreferrer",children:"LI"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.facebook.com/people/Xinyi-Wang/100050512331010/",target:"_blank",rel:"noreferrer",children:"FB"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.instagram.com/nolook1ngback_/",target:"_blank",rel:"noreferrer",children:"IG"})})]})})]}),Object(h.jsxs)("div",{className:"intro_scrollDown",children:[Object(h.jsx)("p",{children:"Scroll"}),Object(h.jsx)("img",{src:N,alt:"scroll down arrow"})]})]})})})}var z=b.b.div(k||(k=Object(m.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function M(n){var e=n.subheading,t=void 0===e?"This is subheading":e,i=n.heading,a=void 0===i?"This is heading":i;return Object(h.jsxs)(z,{className:"section-title",children:[Object(h.jsx)("p",{children:t}),Object(h.jsx)("h2",{children:a})]})}var T,P=t.p+"static/media/about-section-img.00018880.JPG",B=b.b.div(T||(T=Object(m.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection_left,\n  .aboutSection_right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection_buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  .aboutSection_img {\n    height: 100vh;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection_left {\n      flex: 4;\n    }\n    .aboutSection_right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection_left,\n    .aboutSection_right {\n      width: 100%;\n    }\n    .aboutSection_right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection_buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function C(){return Object(h.jsx)(B,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"aboutSection_left",children:[Object(h.jsx)(M,{className:"section-title",subheading:"Let me introduce myself",heading:"About me"}),Object(h.jsx)(O,{children:"Hej hej! My name is Xinyi Wang. I am made in China, currently doing Master of Interactive Media Technology at KTH Royal Institute of Technology in Stockholm, Sweden. I am a front-end developer, music lover, and fika addict. I\u2019m also a Basketettan Dam(Division 1) basketball player and former college basketball athlete. Wanna play a match?"}),Object(h.jsxs)("div",{className:"aboutSection_buttons",children:[Object(h.jsx)(y,{btnLink:"/Portfolio/projects",btnText:"Works"}),Object(h.jsx)(y,{btnLink:"/Portfolio/about",btnText:"Read More",outline:!0})]})]}),Object(h.jsx)("div",{className:"aboutSection_right",children:Object(h.jsx)("img",{src:P,alt:"",className:"aboutSection_img"})})]})})}var R,D,L=t(149),H=t(147),F=t(148),K=t(146),E=(t(102),t(150)),A=t.p+"static/media/Listify.90f42b7c.png",W=t.p+"static/media/Sabel & Tiny.c827bf78.png",G=t.p+"static/media/Steamind.91974304.png",J=t.p+"static/media/Spir.970072ca.png",X=[{id:Object(E.a)(),name:"Listify",desc:"The interface of customizing your playlists and discovering inspirations for your playlists.",img:A,link:"//martinfalke.github.io/spotify-project/#login"},{id:Object(E.a)(),name:"Sabel & Tiny",desc:"A 2D side scroller platform puzzle game where the player has control over Sabel and her companion Tiny as they explore the world, a moon named Mira.",img:W,link:"//sabeltiny.github.io/"},{id:Object(E.a)(),name:"Steamind",desc:"Steamind is a tool for visualizing games from your own Steam library as well as other games from Steam that might suit your interests.",img:G,link:"//gits-15.sys.kth.se/pages/karshi/SteamViz/"},{id:Object(E.a)(),name:"Spir: Take a breather with a smart coaster",desc:"Take a breather with a smart coaster",img:J,link:"//www.behance.net/gallery/106377691/Spir-Take-A-Breather-With-A-Smart-Coaster"}],Y=t.p+"static/media/projectImg.771236e1.png",V=b.b.div(R||(R=Object(m.a)(["\n  .projectItem_img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem_info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem_title {\n    font-size: 2.2rem;\n  }\n  .projectItem_desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem_img {\n      height: 350px;\n    }\n  }\n"])));function Z(n){var e=n.img,t=void 0===e?Y:e,i=n.title,a=void 0===i?"Project Name":i,r=n.desc,o=void 0===r?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":r,c=n.link,s=void 0===c?"/projects":c;return Object(h.jsxs)(V,{children:[Object(h.jsx)("div",{className:"projectItem_img",children:Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:t,alt:"project img"})})}),Object(h.jsxs)("div",{className:"projectItem_info",children:[Object(h.jsx)("a",{herf:s,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("h3",{className:"projectItem__title",children:a})}),Object(h.jsx)("p",{className:"projectItem__desc",children:o})]})]})}var U,q=b.b.div(D||(D=Object(m.a)(["\n  padding: 10rem 0;\n  .projects_allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects_allItems {\n      flex-direction: column;\n      max-width: 500px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem_img {\n        width: 100%;\n      }\n    }\n  }\n"])));function Q(){return Object(h.jsx)(q,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(M,{heading:"Projects",subheading:"Some of my recent works"}),Object(h.jsx)("div",{className:"projects_allItems",children:Object(h.jsx)(L.a,{spaceBetween:30,slidesPerView:2,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2}},children:X.map((function(n,e){if(!(e>=10))return Object(h.jsx)(H.a,{children:Object(h.jsx)(Z,{title:n.name,img:n.img,desc:n.desc,link:n.link})},n.id)}))})})]})})}F.a.use([K.a]);var $,nn=b.b.div(U||(U=Object(m.a)(["\n  padding: 10rem 0;\n  .contactBanner_wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner_heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner_heading {\n      font-size: 2.5rem;\n    }\n  }\n"])));function en(){return Object(h.jsx)(nn,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"contactBanner_wrapper",children:[Object(h.jsx)(O,{children:"If you have any idea"}),Object(h.jsx)("h3",{className:"contactBanner_heading",children:"Don't hesitate to contact me"}),Object(h.jsx)(y,{btnLink:"/Portfolio/contact",btnText:"Contact me"})]})})})}var tn,an=b.b.div($||($=Object(m.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function rn(n){var e=n.heading,t=void 0===e?"col heading":e,i=n.links,a=void 0===i?[{type:"link",title:"Home",path:"/Portfolio"},{type:"link",title:"About",path:"/Portfolio/about"}]:i;return Object(h.jsxs)(an,{children:[Object(h.jsx)("h1",{className:"heading",children:t}),Object(h.jsx)("ul",{children:a.map((function(n,e){return Object(h.jsx)("li",{children:"link"===n.type?Object(h.jsx)(c.b,{to:n.path,children:n.title}):Object(h.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var on=b.b.div(tn||(tn=Object(m.a)(["\n  padding-top: 10rem;\n  background-color: var(--deep-dark);\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer_col1 {\n    flex: 2;\n  }\n  .footer_col2,\n  .footer_col3,\n  .footer_col4 {\n    flex: 1;\n  }\n  .footer_col1_title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer_col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function cn(){return Object(h.jsxs)(on,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"footer_col1",children:[Object(h.jsx)("h1",{className:"footer_col1_title",children:"Xinyi Wang"}),Object(h.jsx)(O,{children:"A Master student at KTH Royal Institute of Technology in Stockholm, Sweden. Open for any possibility."})]}),Object(h.jsx)("div",{className:"footer_col2",children:Object(h.jsx)(rn,{heading:"Links",links:[{title:"Home",path:"/Portfolio",type:"link"},{title:"About",path:"/Portfolio/about",type:"link"},{title:"Projects",path:"/Portfolio/projects",type:"link"},{title:"Contact",path:"/Portfolio/contact",type:"link"}]})}),Object(h.jsx)("div",{className:"footer_col3",children:Object(h.jsx)(rn,{heading:"Contact Info",links:[{title:"+460724420618",path:"tel:+460724420618"},{title:"is.xinyiwang@outlook.com",path:"mailto:is.xinyiwang@outlook.com"},{title:"KTH, Stockholm, Sweden",path:"https://www.google.com/maps/place/KTH+Royal+Institute+of+Technology/@59.3498706,18.0680679,17z/data=!3m1!4b1!4m5!3m4!1s0x465f779d96ed48cb:0xb1366ae00b879b4a!8m2!3d59.3498706!4d18.0702566"}]})}),Object(h.jsx)("div",{className:"footer_col4",children:Object(h.jsx)(rn,{heading:"Social Media",links:[{title:"Linkedin",path:"https://www.linkedin.com/in/xinyi-wang-b48290200/"},{title:"Facebook",path:"https://www.facebook.com/people/Xinyi-Wang/100050512331010/"},{title:"Instagram",path:"https://www.instagram.com/nolook1ngback_/"}]})})]}),Object(h.jsx)("div",{className:"copyright",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(O,{children:"@ 2021 - Xinyi Wang"})})})]})}function sn(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(I,{}),Object(h.jsx)(C,{}),Object(h.jsx)(Q,{}),Object(h.jsx)(en,{}),Object(h.jsx)(cn,{})]})}var ln,dn,mn,bn=t.p+"static/media/about-page-img.edbd41a7.JPG",jn=b.b.div(ln||(ln=Object(m.a)(["\n  padding: 20rem 0 10rem 0;\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about_subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about_heading {\n    font-size: 3.7rem;\n    margin-bottom: 3rem;\n  }\n  .about_info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about_info_items {\n    margin-top: 15rem;\n  }\n  .about_info_item {\n    margin-bottom: 10rem;\n  }\n  .about_info_heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about_subheading {\n      font-size: 1.8rem;\n    }\n    .about_heading {\n      font-size: 2.8rem;\n    }\n    .about_info_heading {\n      font-size: 3rem;\n    }\n  }\n"]))),hn=b.b.div(dn||(dn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  gap: 5rem;\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 25rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function pn(n){var e=n.title,t=void 0===e?"title":e,i=n.items,a=void 0===i?["HTML","CSS","JS"]:i;return Object(h.jsxs)(hn,{children:[Object(h.jsx)("h1",{className:"title",children:t}),Object(h.jsx)("div",{className:"items",children:a.map((function(n,e){return Object(h.jsx)("div",{className:"item",children:Object(h.jsx)(O,{children:n})},e)}))})]})}function xn(){return Object(h.jsxs)(jn,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"top-section",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsxs)("p",{className:"about_subheading",children:["Hi, I am ",Object(h.jsx)("span",{children:"Xinyi Wang"})]}),Object(h.jsx)("h2",{className:"about_heading",children:"A Master student at KTH"}),Object(h.jsx)("div",{className:"about_info",children:Object(h.jsxs)(O,{children:["Hi! I am made in China. More specifically, I am from Ningbo, Zhejiang, a place which sits at the mid-point of the Chinese coastline.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"I did my Bachelor Degree of Digital Media Technology at Zhejiang University in Hangzhou, Zhejiang. From there, I started to enjoy the beauty of programming. For me, programming is a useful art, which gives me tremendous happiness and satisfaction whenever I create something cool.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Now I am doing my Master of Interactive Media Technology at KTH Royal Institute of Technology in Stockholm, Sweden. I met lots of talented people and we worked together to create fun stuffs. My vision is to make a difference in peoples\u2019 lives by creating amazing applications. Let's do it!"]})}),Object(h.jsx)(y,{btnText:"My Linkedin",btnLink:" https://www.linkedin.com/in/xinyi-wang-b48290200/"})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)("img",{src:bn,alt:""})})]}),Object(h.jsxs)("div",{className:"about_info_items",children:[Object(h.jsxs)("div",{className:"about_info_item",children:[Object(h.jsx)("h1",{className:"about_info_heading",children:"Education"}),Object(h.jsx)(pn,{title:"Bachelor",items:["Zhejiang University"]}),Object(h.jsx)(pn,{title:"Master",items:["KTH Royal Institute of Technology"]})]}),Object(h.jsxs)("div",{className:"about_info_item",children:[Object(h.jsx)("h1",{className:"about_info_heading",children:"My Skill"}),Object(h.jsx)(pn,{title:"Front-end",items:["HTML","CSS","JS","React","Redux","TypeScript"]}),Object(h.jsx)(pn,{title:"Back-end",items:["Node","Express"]}),Object(h.jsx)(pn,{title:"Design",items:["Figma","Maya"]}),Object(h.jsx)(pn,{title:"Others",items:["Final cut pro","iMovie","Fl Studio"]})]}),Object(h.jsxs)("div",{className:"about_info_item",children:[Object(h.jsx)("h1",{className:"about_info_heading",children:"Experience"}),Object(h.jsx)(pn,{title:"2021.06 - Present",items:["VR developer Intern at Ericsson"]}),Object(h.jsx)(pn,{title:"2020.10 - Present",items:["Student Ambassador at Svenska Institutet"]}),Object(h.jsx)(pn,{title:"2020.05 - 2020.08",items:["Data Scientist Intern at NetEase Game"]}),Object(h.jsx)(pn,{title:"2019.07 - 2019.09",items:["Game Designer Intern at Giant Game"]})]})]})]}),Object(h.jsx)(en,{}),Object(h.jsx)(cn,{})]})}var gn,un=b.b.div(mn||(mn=Object(m.a)(["\n  padding: 10rem 0;\n  .projects_allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n  }\n  .projects_searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects_searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects_searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n    right: 1rem;\n  }\n  .projects_searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects_searchBar,\n    .projects_searchBar form,\n    .projects_searchBar input {\n      width: 100%;\n    }\n  }\n"])));function fn(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(X),o=Object(l.a)(r,2),c=o[0],s=o[1];Object(a.useEffect)((function(){""!==t&&s((function(){return X.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(h.jsxs)(un,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(M,{heading:"Projects",subheading:"Some of my recent works"}),Object(h.jsx)("div",{className:"projects_searchBar",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),i(n.target.value),!n.target.value.length>0&&s(X)},placeholder:"project name"}),Object(h.jsx)(d.f,{className:"searchIcon"})]})}),Object(h.jsx)("div",{className:"projects_allItems",children:c.map((function(n){return Object(h.jsx)(Z,{title:n.name,desc:n.desc,img:n.img,link:n.link},n.id)}))})]}),Object(h.jsx)(en,{}),Object(h.jsx)(cn,{})]})}var On,vn,yn=b.b.div(gn||(gn=Object(m.a)(["\n  padding: 10rem 0;\n  .contactSection_wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection_wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection_wrapper {\n      flex-direction: column;\n    }\n    .contactSection_wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"]))),wn=b.b.div(On||(On=Object(m.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function kn(n){var e=n.icon,t=void 0===e?Object(h.jsx)(d.e,{}):e,i=n.text,a=void 0===i?"an info":i;return Object(h.jsxs)(wn,{children:[Object(h.jsx)("div",{className:"icon",children:t}),Object(h.jsx)("div",{className:"info",children:Object(h.jsx)(O,{children:a})})]})}var _n,Nn=b.b.div(vn||(vn=Object(m.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    padding: 1rem 4rem;\n    cursor: pointer;\n  }\n"])));function Sn(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),c=o[0],s=o[1],d=Object(a.useState)(""),m=Object(l.a)(d,2),b=m[0],j=m[1];return Object(h.jsx)("div",{children:Object(h.jsxs)(Nn,{children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{htmlFor:"name",children:["Your name",Object(h.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return i(n.target.value)}})]})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{htmlFor:"email",children:["Your email",Object(h.jsx)("input",{type:"text",id:"email",email:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{htmlFor:"message",children:["Your message",Object(h.jsx)("textarea",{type:"text",id:"message",message:"message",value:b,onChange:function(n){return j(n.target.value)}})]})}),Object(h.jsx)("button",{type:"submit",children:"Send"})]})})}function In(){return Object(h.jsx)(yn,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(M,{heading:"Contact",subheading:"Get in touch"}),Object(h.jsxs)("div",{className:"contactSection_wrapper",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)(kn,{icon:Object(h.jsx)(d.c,{}),text:"+460724420618"}),Object(h.jsx)(kn,{icon:Object(h.jsx)(d.b,{}),text:"is.xinyiwang@outlook.com"}),Object(h.jsx)(kn,{text:"Stockholm, Sweden"})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)(Sn,{})})]})]})})}b.b.div(_n||(_n=Object(m.a)(["\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map_card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background-color: var(--deep-dark);\n  }\n"])));var zn;t(90),b.b.div(zn||(zn=Object(m.a)(["\n  color: white;\n  background-color: var(--gray-1);\n  padding: 15px 10px;\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  transform: translate(-50%, -50%);\n"])));function Mn(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(In,{}),Object(h.jsx)(cn,{})]})}function Tn(){var n=Object(s.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var Pn;t(88);function Bn(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(c.a,{basename:"".concat("/Portfolio","/"),children:[Object(h.jsx)(p,{}),Object(h.jsx)(Tn,{}),Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/Portfolio/about",children:Object(h.jsx)(xn,{})}),Object(h.jsx)(s.a,{path:"/Portfolio/contact",children:Object(h.jsx)(Mn,{})}),Object(h.jsx)(s.a,{path:"/Portfolio/projects",children:Object(h.jsx)(fn,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/Portfolio",children:Object(h.jsx)(sn,{})})]})]})})}var Cn,Rn=Object(b.a)(Pn||(Pn=Object(m.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Dn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Ln=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Hn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Fn=Object(b.a)(Cn||(Cn=Object(m.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n"])),Dn,Ln,Hn);o.a.render(Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Rn,{}),Object(h.jsx)(Fn,{}),Object(h.jsx)(Bn,{})]}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.ab915ea8.chunk.js.map