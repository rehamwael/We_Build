(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: Narziss;\n  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/Narziss_Bold_Drops.woff2); }\n\n@font-face {\n  font-family: Narziss-medium;\n  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/Narziss_Bold_Drops.woff2); }\n\n*, *::after, *::before {\n  box-sizing: border-box; }\n\nbody, html {\n  background: transparent;\n  font-size: 6px;\n  padding: 0;\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: 'Montserrat', sans-serif;\n  scroll-behavior: smooth; }\n\nbody.home {\n  overflow: hidden; }\n\n@media (min-width: 860px) {\n  body, html {\n    font-size: 8px;\n    padding: 3rem 5rem; } }\n\n@media (min-width: 1200px) {\n  body, html {\n    font-size: 10px;\n    padding: 0; } }\n\n.header-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 2rem 3rem 2rem;\n  z-index: 999; }\n\n.header-wrapper .header {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 6rem; }\n\n.header-wrapper .menu-wrapper {\n  position: relative;\n  float: left;\n  display: block;\n  cursor: pointer;\n  width: auto;\n  height: 3rem;\n  right: 0;\n  margin: 0;\n  text-align: left; }\n\n.header-wrapper .menu-wrapper:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.header-wrapper .menu-hamburger {\n  position: relative;\n  width: 1.4rem;\n  display: inline-block;\n  vertical-align: middle;\n  background: white;\n  height: 1px;\n  cursor: pointer;\n  right: 0;\n  top: 1rem;\n  opacity: 0.1; }\n\n.header-wrapper .menu-hamburger::before {\n  content: \"\";\n  width: 2.5rem;\n  height: 1px;\n  background: white;\n  position: absolute;\n  top: -0.8rem;\n  left: 0;\n  transition: all 0.4s ease-in-out; }\n\n.header-wrapper .menu-hamburger::after {\n  content: \"\";\n  width: 2rem;\n  height: 1px;\n  background: white;\n  position: absolute;\n  top: 0.8rem;\n  left: 0;\n  transition: all 0.4s ease-in-out; }\n\n.header-wrapper .nav-wrapper {\n  position: relative;\n  float: right;\n  top: 11px; }\n\n.header-wrapper nav {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: bold;\n  line-height: 1;\n  font-weight: 700;\n  color: white; }\n\n.header-wrapper nav ul {\n  padding: 0;\n  display: block;\n  list-style: none; }\n\n.header-wrapper nav ul:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.header-wrapper nav li {\n  float: left;\n  margin: 0 1.2rem;\n  font-family: 'Dosis', sans-serif;\n  font-size: 1.8rem;\n  font-weight: 300; }\n\n.header-wrapper nav li a:hover, .header-wrapper nav li a.active {\n  color: #fff;\n  font-weight: bold; }\n\n.header-wrapper nav li a {\n  transition: all 0.3s ease;\n  padding: 0.4em 1em; }\n\n.header-wrapper nav li:last-child {\n  margin-left: 0; }\n\n.lines-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  pointer-events: none; }\n\n.lines-wrapper span.vertical {\n  position: absolute;\n  height: 1px;\n  width: 100%;\n  background: white;\n  top: 12%;\n  left: 0;\n  z-index: 1;\n  opacity: 0.05; }\n\n.lines-wrapper .croses span {\n  color: white;\n  font-size: 1rem;\n  position: absolute;\n  top: 11%;\n  left: calc(20% - 2px); }\n\n.lines-wrapper .croses span:nth-child(2) {\n  left: calc(40% - 2px); }\n\n.lines-wrapper .croses span:nth-child(3) {\n  left: calc(60% - 2px); }\n\n.lines-wrapper .croses span:nth-child(4) {\n  left: calc(80% - 2px); }\n\n.lines-wrapper span.horizontal {\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background: white;\n  z-index: 1;\n  left: 20%;\n  opacity: 0.05; }\n\n.lines-wrapper span.horizontal:nth-child(2) {\n  left: 40%; }\n\n.lines-wrapper span.horizontal:nth-child(3) {\n  left: 60%; }\n\n.lines-wrapper span.horizontal:nth-child(4) {\n  left: 80%; }\n\nsvg:not(:root) {\n  position: absolute; }\n\n.slider-content {\n  position: relative;\n  max-width: none;\n  min-width: 100%;\n  background: #fff;\n  margin: 0 auto;\n  overflow: hidden; }\n\n.slider-content .slider-container {\n  position: relative;\n  height: 100vh; }\n\n.slider-content .slide-content {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n.slider-content .slide {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-blend-mode: multiply;\n  background-size: auto 125%;\n  background-position: 0px -45px;\n  background-repeat: no-repeat;\n  opacity: 0; }\n\n.slider-content .slide:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.slider-content .slide.active {\n  opacity: 1;\n  z-index: 50; }\n\n.slider-content .slide.next {\n  opacity: 1; }\n\n.slider-content .slide.red {\n  background-color: #000; }\n\n.slider-content .slide.blue {\n  background-color: #b93e3e; }\n\n.slider-content .slide.green {\n  background-color: #000; }\n\n.slider-content .slide.grey {\n  background-color: #b93e3e; }\n\n.slider-content .canvas {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.slider-content .fake-bg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-blend-mode: multiply;\n  background-size: auto 125%;\n  background-position: 0px -45px;\n  background-repeat: no-repeat; }\n\nsvg#instagram {\n  width: 232%;\n  float: right;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9); }\n\n.slider-content .fake-bg.red {\n  background-color: #656565;\n  background-image: url('sales-company.jpg');\n  background-size: cover; }\n\n.slider-content .fake-bg.blue {\n  background-color: #4e4e4e;\n  background-image: url('ismael-bg.png');\n  background-size: 50% 110%;\n  height: 100%; }\n\n.slider-content .fake-bg.green {\n  background-color: #4e4e4e;\n  background-image: url('reham-bg.png');\n  background-size: 50%;\n  height: 100%; }\n\n.slider-content .fake-bg.grey {\n  background-color: #4e4e4e; }\n\n.slider-content .image-mask {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  overflow: hidden; }\n\n.slider-content .image-mask img {\n  position: absolute;\n  display: block;\n  width: auto;\n  height: 100vh;\n  top: -45px;\n  display: none; }\n\n.slider-content .mask-animation {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0rem;\n  left: -5rem; }\n\n.slider-content .mask-animation img.clip {\n  width: 100%;\n  -webkit-clip-path: url(#svgPathBig);\n  clip-path: url(#svgPathBig); }\n\n.slider-content .image-caption.right {\n  left: auto;\n  right: -4em; }\n\n.slider-content .image-caption {\n  position: absolute;\n  color: white;\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n  top: 20rem;\n  left: 12rem;\n  font-size: 1.3rem;\n  z-index: 10;\n  clip: rect(0rem, 21rem, 12rem, 0px);\n  display: inline-block;\n  transition: all 0.3s ease; }\n\n.slider-content .image-caption.mask-up {\n  clip: rect(0rem, 0rem, 12rem, 0px); }\n\n.slider-content .image-caption.mask-down {\n  clip: rect(0rem, 21rem, 2rem, 200px); }\n\n.slider-content .image-caption span {\n  display: inline-block;\n  vertical-align: top; }\n\n.slider-content .image-caption .line {\n  position: relative;\n  background: white;\n  height: 1px;\n  width: 5rem;\n  top: 1rem; }\n\n.slider-content .title-background {\n  position: absolute;\n  font-size: 25rem;\n  top: 4rem;\n  left: 3rem;\n  color: black;\n  opacity: 0.03;\n  text-align: left; }\n\n.slider-content .title-background span.mask-wrap {\n  display: block;\n  height: 25rem;\n  position: relative; }\n\n.slider-content .title-background span.mask-wrap span.mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  clip: rect(0rem, 120rem, 33rem, 0px);\n  -webkit-animation: fadeIn 3s;\n          animation: fadeIn 3s; }\n\n.slider-content .title-background span.mask-wrap.mask-up span.mask {\n  clip: rect(0rem, 120rem, 0rem, 0px); }\n\n.slider-content .title-background span.mask-wrap.mask-down span.mask {\n  clip: rect(25rem, 44rem, 25rem, 0px); }\n\n.slider-content .title-wrapper {\n  position: relative;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n  width: 48%;\n  text-align: left;\n  float: right;\n  margin-top: 20rem;\n  z-index: 5; }\n\n.slider-content .title-wrapper h1 {\n  font-size: 7.5rem;\n  margin: 0;\n  line-height: 1;\n  margin-bottom: 1rem;\n  font-weight: 900;\n  text-align: left;\n  font-family: 'Aclonica', sans-serif;\n  margin-left: 5rem; }\n\n.slider-content .title-wrapper h1 span.mask-wrap {\n  display: block;\n  height: 7rem;\n  position: relative; }\n\n.title-wrapper .content-paragraph {\n  text-align: left;\n  font-size: 19px;\n  line-height: 1.4em;\n  font-family: 'Dosis', sans-serif !important;\n  font-weight: 300;\n  height: auto !important;\n  width: 73%;\n  margin-top: 1em; }\n\n.slider-content .title-wrapper h1 span.mask-wrap span.mask {\n  position: absolute;\n  top: -17px;\n  left: 0;\n  clip: rect(0rem, 89rem, 20rem, 0px);\n  transition: all 0.3s ease-in; }\n\n.slider-content .title-wrapper h1 span.mask-wrap:last-child span.mask {\n  transition-delay: 0.15s; }\n\n.slider-content .title-wrapper h1 span.mask-wrap.mask-up span.mask {\n  clip: rect(0rem, 44rem, 0rem, 0px); }\n\n.slider-content .title-wrapper h1 span.mask-wrap.mask-down span.mask {\n  clip: rect(12rem, 44rem, 12rem, 0px); }\n\n.slider-content .title-wrapper span.gallery {\n  position: relative;\n  text-align: right;\n  padding: 0 2rem;\n  cursor: pointer;\n  margin-right: 5rem; }\n\n.slider-content .title-wrapper span.gallery::before {\n  content: \"\";\n  position: absolute;\n  left: -2rem;\n  display: block;\n  width: 1px;\n  height: 2.5rem;\n  background: white;\n  top: -0.5rem;\n  opacity: 0.9; }\n\n.slider-content .title-wrapper span.gallery::after {\n  content: \"\";\n  position: absolute;\n  right: -2rem;\n  display: block;\n  width: 1px;\n  height: 2.5rem;\n  background: white;\n  top: -0.5rem;\n  opacity: 0.9; }\n\n.control-nav {\n  position: absolute;\n  right: 3rem;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  z-index: 99; }\n\n.control-nav ul {\n  position: relative;\n  list-style: none;\n  padding: 0; }\n\n.control-nav li {\n  position: relative;\n  margin: 0.2rem 0;\n  opacity: 0.5;\n  border-radius: 3rem;\n  color: white;\n  font-size: 1rem; }\n\na, a:hover {\n  color: #fff;\n  text-decoration: none; }\n\n.control-nav li.active {\n  opacity: 1; }\n\n.control-nav li.active .line {\n  -webkit-transform: translateX(-1.2rem);\n  transform: translateX(-1.2rem);\n  width: 1.8rem; }\n\n.control-nav li.active .number {\n  opacity: 1; }\n\n.control-nav .line {\n  width: 1.5rem;\n  height: 1px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  background: white;\n  left: -1rem;\n  transition: all 0.3s ease; }\n\n.control-nav .number {\n  position: relative;\n  opacity: 0;\n  transition: opacity 0.3s ease; }\n\n.social-icons a.inside {\n  margin-left: -6px;\n  width: 3.7rem; }\n\n.social-icons.inside {\n  left: auto;\n  right: 3rem; }\n\n.social-icons {\n  position: absolute;\n  bottom: 3rem;\n  left: 3rem;\n  z-index: 999; }\n\n.social-icons ul {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.social-icons ul li {\n  position: relative;\n  display: block;\n  padding: 1.2rem 0; }\n\n.social-icons ul a {\n  display: block;\n  width: 2.8rem;\n  height: 2.8rem; }\n\n.social-icons ul a svg {\n  fill: white;\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n.logo {\n  position: relative;\n  left: 3EM;\n  width: 100%;\n  top: -9px;\n  font-weight: bold;\n  font-size: 20px;\n  letter-spacing: 4px;\n  color: #fff;\n  font-family: 'Aclonica', sans-serif; }\n\n.footer-wrapper {\n  position: absolute;\n  color: white;\n  bottom: 0rem;\n  right: 4rem;\n  width: 60%;\n  height: 6rem;\n  z-index: 999; }\n\n.footer-wrapper ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  text-align: center;\n  height: 100%; }\n\n.footer-wrapper ul:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.footer-wrapper li {\n  position: relative;\n  float: left;\n  width: 25%;\n  padding: 1.5rem;\n  background: rgba(0, 0, 0, 0.1);\n  text-transform: uppercase;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n  cursor: pointer; }\n\n.footer-wrapper li:last-child {\n  border: none; }\n\n.footer-wrapper li.active .hover-box {\n  opacity: 1;\n  -webkit-transform: scale(1.15);\n  transform: scale(1.15); }\n\n.footer-wrapper li .hover-box {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #d63232;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: all 0.3s ease-in;\n  z-index: 1; }\n\n.footer-wrapper li.active .box-content {\n  font-weight: bold; }\n\n.footer-wrapper li .box-content {\n  position: relative;\n  z-index: 5;\n  font-family: 'Dosis', sans-serif;\n  font-size: 1.6rem;\n  font-weight: 300;\n  text-transform: capitalize;\n  letter-spacing: 1.6px; }\n\n.slider-container .slide-content.txt {\n  display: table;\n  padding: 8rem 30rem; }\n\n.slider-container .slide-content .txt-wrapper {\n  position: relative;\n  display: table-cell;\n  vertical-align: middle;\n  opacity: 0;\n  transition: all .3s ease; }\n\n.slider-container .slide.grey.active .slide-content .txt-wrapper {\n  opacity: 1; }\n\n.slider-container .slide-content .txt-wrapper span.copy {\n  position: relative;\n  text-transform: uppercase;\n  width: 2rem;\n  display: block;\n  font-size: 1rem;\n  line-height: 1;\n  margin-bottom: 4rem;\n  font-weight: 500;\n  opacity: 0; }\n\n.slider-container .slide-content .txt-wrapper h2 {\n  margin: 0;\n  font-size: 4.3rem;\n  margin-bottom: 4rem;\n  line-height: 1;\n  font-weight: 600; }\n\n.slider-container .slide-content .txt-wrapper h2 span {\n  display: block; }\n\n.slider-container .slide-content .txt-wrapper h3 {\n  margin: 0;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n  line-height: 1;\n  font-weight: 400; }\n\n.slider-container .slide-content .txt-wrapper h3 span {\n  color: #ccc; }\n\n.slider-container .slide-content .txt-wrapper a {\n  text-decoration: none;\n  color: #AEACAB; }\n\n.slider-container .slide-content .txt-wrapper button {\n  position: relative;\n  padding: 1rem 3.5rem;\n  color: white;\n  text-align: center;\n  display: block;\n  border-radius: 3rem;\n  background: #d02e2e;\n  text-transform: uppercase;\n  border: none;\n  font-size: 1rem;\n  margin-top: 3rem;\n  font-weight: bold;\n  outline: none;\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3); }\n\n.slider-container .slide-content .txt-wrapper .phone {\n  display: block;\n  color: black;\n  font-size: 1.9rem; }\n\n.slider-container .slide-content .txt-wrapper .subtitle {\n  display: block;\n  text-transform: uppercase;\n  color: #AEACAB;\n  font-weight: bold;\n  letter-spacing: 0.3rem;\n  font-size: 1.2rem;\n  margin-bottom: 1rem; }\n\n.slider-container .slide-content .txt-wrapper p.excerpt {\n  margin: 0;\n  color: #AEACAB;\n  font-size: 1.2rem;\n  line-height: 1.5; }\n\n.slider-content .title-wrapper.mask4 {\n  width: 40%; }\n\n.slider-container .slide-content .txt-wrapper a {\n  transition: all 0.4s ease-in; }\n\n.slider-container .slide-content .txt-wrapper a:hover .post-wrapper .post-title {\n  transition: all 0.1s ease-in;\n  color: #f56e6e;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01); }\n\n.slider-container .slide-content .txt-wrapper a:hover .date-wrapper {\n  color: #ccc;\n  transition: all 0.2s ease-in;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01); }\n\n.slider-container .slide-content .txt-wrapper span.view-all {\n  color: #fff;\n  margin-top: 35px;\n  display: block;\n  font-size: 14px;\n  text-transform: capitalize; }\n\n.slider-container .slide-content .txt-wrapper ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-bottom: 1.5rem; }\n\n.slider-container .slide-content .txt-wrapper ul li {\n  position: relative;\n  margin: 2.5rem 0;\n  padding: 0; }\n\n.slider-container .slide-content .txt-wrapper ul li:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.slider-container .slide-content .txt-wrapper .date-wrapper {\n  width: 15%;\n  float: left;\n  color: #fff;\n  text-align: left;\n  transition: all 0.3s ease-in; }\n\n.slider-container .slide-content .txt-wrapper .date-wrapper .date {\n  font-size: 2.3rem; }\n\n.slider-container .slide-content .txt-wrapper .date-wrapper .month {\n  font-size: 1.3rem; }\n\n.slider-container .slide-content .txt-wrapper .post-wrapper {\n  width: 50%;\n  float: left; }\n\n.slider-container .slide-content .txt-wrapper .post-wrapper .post-title {\n  display: block;\n  font-size: 1.4rem;\n  line-height: 1.3; }\n\n.slider-container .slide-content .txt-wrapper .post-wrapper .post-title {\n  display: block;\n  color: #ce8686;\n  cursor: pointer;\n  font-size: 19px;\n  transition: all 0.4s ease-in; }\n\n.slider-container .slide-content .txt-wrapper .post-wrapper .post-title a:hover {\n  text-decoration: underline; }\n\n.slider-container .slide-content .txt-wrapper .post-wrapper .post-info {\n  display: block;\n  color: #AEACAB;\n  font-size: 1.15rem; }\n\n.slider-container .slide-content .txt-wrapper .post-wrapper .post-info:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.slider-container .slide-content .txt-wrapper .post-wrapper .post-info ul {\n  margin: 0; }\n\n.slider-container .slide-content .txt-wrapper .post-wrapper .post-info li {\n  float: left;\n  margin: 0 0.5rem; }\n\n.slider-container .slide-content .txt-wrapper .post-wrapper .post-info li:first-child {\n  margin-left: 0; }\n\n.slider-container .slide-content img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover; }\n\n.inner a, .inner .header-wrapper nav li a:hover, .inner a .active, .inner .logo, .inner .slider-content .image-caption, .inner .header-wrapper nav li a.active, .inner .slider-content .title-wrapper, .inner .lines-wrapper .croses span {\n  color: #000; }\n\n.inner .slider-content .image-caption .line, .inner .header-wrapper .menu-hamburger, .inner .header-wrapper .menu-hamburger::after, .inner .header-wrapper .menu-hamburger::before,\n.inner .lines-wrapper span.horizontal, .inner .lines-wrapper span.vertical {\n  background: #000; }\n\n.inner .slider-content .fake-bg.green, .inner .slider-content .fake-bg.blue {\n  background: #fff; }\n\n.view-more-link {\n  position: relative;\n  top: 6.8em;\n  background: #eee;\n  transition: all .3s ease;\n  padding: 0.7em 1.9em 0.7em 1.5em;\n  cursor: pointer;\n  -webkit-animation: fadeIn 4s;\n          animation: fadeIn 4s; }\n\n.view-more-link:hover, .view-more-link:focus {\n  background: #d7302a;\n  color: #fff !important;\n  font-weight: bold; }\n\n.fa-angle-double-down {\n  color: #d7302a; }\n\n.project-bg {\n  background-size: cover !important;\n  height: 253px;\n  position: relative;\n  background-repeat: no-repeat !important;\n  transition: all .7s ease-in;\n  border-radius: 3px; }\n\n.title-main {\n  font-family: 'Aclonica', sans-serif; }\n\n.overlay-text {\n  align-self: center;\n  color: #fff;\n  position: absolute;\n  z-index: 9;\n  top: 50%;\n  left: 50%;\n  opacity: 1;\n  opacity: 0;\n  transition: all 0.3s ease-in;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.project-bg:after {\n  background: rgba(0, 0, 0, 0.4);\n  content: '';\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 3px; }\n\n.project-bg:hover:after {\n  background: rgba(0, 0, 0, 0.8);\n  transition: all .3s ease-in; }\n\n.project-bg:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05); }\n\n.project-bg:hover .overlay-text {\n  opacity: 1;\n  transition: all 0.3s ease-in; }\n\n.blog-posts .col-md-4 {\n  margin-bottom: 3em; }\n\n.blog-posts img {\n  height: 250px;\n  width: 100%;\n  transition: all 0.6s ease; }\n\n.blog-posts a .content_div {\n  transition: all 0.4s ease-in; }\n\n.blog-posts a:hover .content_div {\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03); }\n\n.blog-posts a:hover img {\n  filter: saturate(1.5);\n  -webkit-filter: saturate(1.5);\n  transition: all 0.6s ease; }\n\n.blog-posts a:hover .read-more h5 {\n  opacity: 1; }\n\n.blog-posts .content_div {\n  background: #eee; }\n\n.image-conetnt {\n  background: #eee;\n  padding: 2em 1.3em; }\n\n.image-conetnt h2 {\n  height: 2.5em;\n  margin-top: 1em;\n  font-family: 'Aclonica', sans-serif; }\n\n.diff-color {\n  color: #d7302a;\n  font-weight: bold; }\n\n.image-conetnt .more-info {\n  font-size: 13px;\n  font-weight: bold;\n  margin-bottom: 1em; }\n\n.image-conetnt p {\n  font-size: 12px;\n  height: 5em; }\n\n.read-more h5 {\n  font-weight: bold;\n  opacity: 0;\n  transition: all 0.3s ease-in; }\n\n.slider-content .blog-detail .title-wrapper h1 span.mask-wrap span.mask {\n  clip: unset;\n  position: relative; }\n\n.slider-content .blog-detail .title-wrapper h1 {\n  font-size: 4.5rem;\n  margin: 0;\n  line-height: 1.3;\n  text-align: center; }\n\n.blog-detail .title-wrapper .content-paragraph {\n  width: 100%;\n  text-align: center; }\n\n.slider-content .blog-detail .title-wrapper {\n  width: 100%;\n  padding: 0 15em; }\n\n.slider-content .blog-detail .title-wrapper h1 span.mask-wrap {\n  height: 15rem; }\n\n.slider-container.blog-detail-page, .slide.blog-detail {\n  height: 80vh; }\n\n.post p {\n  font-size: 13px; }\n\n.post h2 {\n  font-weight: bold;\n  margin-bottom: 1em; }\n\n.image img {\n  width: 100%; }\n\n.inner-blog.inner .header-wrapper .menu-wrapper {\n  top: -12px; }\n\n.inner-blog.inner .header-wrapper .nav-wrapper {\n  top: 0; }\n\n.mat-card {\n  padding: 0 !important; }\n\n.animated {\n  visibility: visible !important;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  animation-duration: 1.3s;\n  -webkit-animation-duration: 1.3s;\n  -moz-animation-duration: 1.3s;\n  -o-animation-duration: 1.3s; }\n\nfooter {\n  background-color: #eee;\n  color: #000;\n  font-size: 1.5rem; }\n\n.hidden {\n  display: none !important; }\n\n.blog-posts {\n  margin-bottom: 6%; }\n\n.animated-delay {\n  animation-delay: .15s;\n  -webkit-animation-delay: .15s;\n  -moz-animation-delay: .15s;\n  -o-animation-delay: .15s; }\n\n.hide-on-init {\n  visibility: hidden; }\n\n.inner .my-mask-wrap {\n  position: relative;\n  overflow: hidden; }\n\n.inner .my-mask-wrap .my-mask, .inner .content-paragraph .mask {\n  -webkit-animation: fadeIn 0s 0.6s;\n          animation: fadeIn 0s 0.6s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n  top: -4px !important; }\n\n.inner .my-mask-wrap .my-mask::after, .inner .content-paragraph .mask:after {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  -webkit-animation: secondaryImageOverlayIn 0.6s 0s, secondaryImageOverlayOut 0.6s 0.6s;\n          animation: secondaryImageOverlayIn 0.6s 0s, secondaryImageOverlayOut 0.6s 0.6s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes secondaryImageOverlayIn {\n  0% {\n    width: 0; }\n  100% {\n    width: 100%; } }\n\n@keyframes secondaryImageOverlayIn {\n  0% {\n    width: 0; }\n  100% {\n    width: 100%; } }\n\n@-webkit-keyframes secondaryImageOverlayOut {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n@keyframes secondaryImageOverlayOut {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n@media (min-width: 860px) {\n  body, html {\n    padding: 0; } }\n\n@media (min-width: 1500px) {\n  .slider-content .title-wrapper {\n    margin-top: 30em; }\n  .blog-posts img {\n    height: 40vh; }\n  .project-bg {\n    height: 30vh; } }\n\n@media (min-width: 700px) and (max-width: 1024px) {\n  .slider-content .fake-bg.red, .slider-content .fake-bg.blue, .slider-content .fake-bg.green {\n    background-size: inherit; }\n  .header-wrapper .menu-hamburger {\n    top: 6.7rem; }\n  .slider-content .title-wrapper {\n    margin-top: 34%;\n    width: 80%; }\n  .inner-blog.inner .header-wrapper .nav-wrapper {\n    top: 5em; }\n  .header-wrapper .nav-wrapper {\n    top: 6em; }\n  .inner .header-wrapper .menu-hamburger {\n    top: 6rem; }\n  div.inner .header-wrapper .nav-wrapper {\n    top: 6rem; }\n  .slider-content .image-caption {\n    top: 32rem; }\n  .logo {\n    top: 4rem; }\n  .slider-content .slide.grey .title-wrapper.mask4 {\n    width: 80%;\n    margin-top: 25%; }\n  .slider-content .canvas {\n    opacity: 0 !important; }\n  svg#instagram {\n    width: 152%;\n    float: right;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  .slider-content .title-wrapper h1 {\n    font-size: 6.8rem; }\n  .blog-posts img {\n    height: 14vh; }\n  .project-bg {\n    height: 18vh; } }\n\n.inner .header-wrapper .nav-wrapper {\n  top: 12px; }\n\n.inner .header-wrapper .menu-wrapper {\n  top: 0; }\n\n@media (max-width: 767px) {\n  .slider-content .fake-bg.red, .slider-content .fake-bg.blue, .slider-content .fake-bg.green {\n    background-size: inherit; }\n  .social-icons ul a {\n    width: 4.7em; }\n  .inner .header-wrapper .nav-wrapper {\n    top: 12em; }\n  .header-wrapper.open .menu-hamburger::before {\n    width: 3.1rem;\n    height: 1px;\n    top: -.9rem;\n    -webkit-transform: rotate(220deg);\n    transform: rotate(227deg); }\n  .header-wrapper.open .menu-hamburger::after {\n    width: 3rem;\n    top: -1rem;\n    left: 0;\n    -webkit-transform: rotate(128deg);\n            transform: rotate(128deg); }\n  .header-wrapper.open .menu-hamburger {\n    width: 0;\n    top: 2.4rem;\n    z-index: 9; }\n  .header-wrapper.open .logo {\n    z-index: 9; }\n  .header-wrapper.open .nav-wrapper {\n    display: block;\n    padding-top: 7em; }\n  .header-wrapper .menu-hamburger {\n    opacity: 1; }\n  .header-wrapper .menu-wrapper {\n    height: 6rem;\n    padding: 1em 0; }\n  .inner .header-wrapper .menu-wrapper {\n    top: -9px; }\n  .social-icons ul a svg {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  .social-icons a.inside {\n    margin-left: -3px; }\n  .header-wrapper nav li:last-child {\n    margin: 0 1.2rem; }\n  .header-wrapper .nav-wrapper {\n    display: none;\n    position: fixed;\n    background-color: #4e4e4e;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    top: 13.1em;\n    left: 0; }\n  .header-wrapper.open {\n    background-color: #4e4e4e;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999; }\n  .inner span.horizontal, .inner .croses, .inner span.vertical {\n    display: none; }\n  .inner .header-wrapper .nav-wrapper, .inner .header-wrapper.open {\n    background: #eee;\n    border-bottom: 1px solid #000; }\n  .overlay-text {\n    opacity: 1; }\n  .project-bg:after {\n    background: rgba(0, 0, 0, 0.8); }\n  .title-main {\n    font-size: 3.3rem;\n    margin: 3em 0; }\n  .inner .header-wrapper.open .nav-wrapper {\n    padding-top: 13.5rem; }\n  .h2, h2 {\n    font-size: 3rem; }\n  p {\n    margin: 1.4rem 0;\n    font-size: 1.5rem; }\n  .inner .header-wrapper {\n    padding: 5rem 3rem 1rem 3rem;\n    position: fixed;\n    background: #fff;\n    border-bottom: 1px solid #eee;\n    z-index: 999; }\n  .post.container.mb-5 {\n    padding-bottom: 9rem; }\n  .header-wrapper nav li {\n    width: 100%;\n    padding: 1.5em 0;\n    font-size: 3.9rem; }\n  .slider-content .title-wrapper {\n    margin-top: 45%;\n    width: 100%; }\n  .inner .slider-content .slider-container {\n    position: relative;\n    height: 76vh; }\n  .inner-blog .slider-container.blog-detail-page, .inner-blog .slide.blog-detail {\n    height: 70vh; }\n  .slider-content .blog-detail .title-wrapper h1 span.mask-wrap span.mask {\n    left: auto; }\n  .slider-content .blog-detail .title-wrapper {\n    padding: 0 1em; }\n  .blog-detail .title-wrapper .content-paragraph {\n    margin-top: 32px; }\n  .post img {\n    height: 30vh; }\n  .view-more-link {\n    top: 8.5em;\n    left: 29px; }\n  .blog-posts img {\n    height: auto; }\n  .slider-content .title-wrapper h1 span.mask-wrap span.mask {\n    left: 29px; }\n  .slider-content .title-background span.mask-wrap span.mask {\n    display: none; }\n  .slider-content .slide.grey .title-wrapper.mask4 {\n    width: 100%;\n    margin-top: 40%; }\n  .slider-content .slide.grey .title-wrapper h1 {\n    font-size: 4.8rem; }\n  .slide.grey .title-wrapper .content-paragraph {\n    font-size: 16px;\n    margin-top: 0px; }\n  .project-bg {\n    height: 33vh; }\n  .slider-content .canvas {\n    opacity: 0 !important; }\n  svg#instagram {\n    width: 152%;\n    float: right;\n    -webkit-transform: scale(0.67);\n            transform: scale(0.67); }\n  .social-icons {\n    position: absolute;\n    bottom: 9%;\n    left: 3rem;\n    z-index: 90; }\n  .footer-wrapper {\n    position: fixed;\n    color: white;\n    left: 0rem;\n    right: auto;\n    width: 100%;\n    height: 6rem;\n    z-index: 99;\n    bottom: 0em; }\n  .slider-content .image-caption {\n    top: 30rem;\n    left: -5rem; }\n  .header-wrapper .nav-wrapper {\n    display: none; }\n  .title-wrapper .content-paragraph {\n    font-size: 17px;\n    margin-top: 10px; }\n  .slider-container .slide-content.txt {\n    display: table;\n    padding: 0 4rem; }\n  .slider-container .slide-content .txt-wrapper .post-wrapper {\n    width: 74%; }\n  .header-wrapper {\n    padding: 5rem 3rem 3rem; }\n  .slider-container .slide-content .txt-wrapper .post-wrapper .post-title {\n    width: 74%;\n    font-size: 15px; }\n  .footer-wrapper li .box-content {\n    font-size: 1.8rem; }\n  .slider-content .slide.grey {\n    background-color: #333232; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWhhbWhhYmJhcy9Eb2N1bWVudHMvYnVpbGQvV2VfQnVpbGQvc3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQW9CO0VBQ3BCLHNGQUFxRixFQUFBOztBQUV2RjtFQUNFLDRCQUEyQjtFQUMzQixzRkFBcUYsRUFBQTs7QUFFdkY7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSx3QkFBdUI7RUFDdkIsZUFBYztFQUNkLFdBQVM7RUFDVCxVQUFTO0VBQ1Qsb0NBQW1DO0VBQ25DLG1DQUFrQztFQUNsQyxzQ0FBcUM7RUFDckMsd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0U7SUFDRSxlQUFjO0lBQ2QsbUJBQWtCLEVBQ25CLEVBQUE7O0FBRUg7RUFDRTtJQUNFLGdCQUFlO0lBQ2YsV0FBVSxFQUNYLEVBQUE7O0FBR0g7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxZQUFXO0VBQ1gsd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZUFBYztFQUNkLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWixTQUFRO0VBQ1IsVUFBUztFQUNULGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2QsWUFBVyxFQUNaOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixTQUFRO0VBQ1IsVUFBUztFQUNULGFBQVksRUFDYjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxjQUFhO0VBQ2IsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsYUFBWTtF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RUFDRDtJQUNDLGVBQWMsRUFDZDtFQUNEO0lBQ0MsaUJBQWdCLEVBQ2hCO0VBQ0Q7SUFDQyxhQUFZLEVBQ1o7RUFDRDtJQUNDLFdBQVU7SUFDVixXQUFVLEVBQ1Y7RUFDRDtJQUNDLGFBQVksRUFDWjtFQUNEO0lBQ0MsV0FBVSxFQUNWO0VBQ0Q7SUFDQyxjQUFhLEVBQ2I7RUFDRDtJQUNDLFlBQVc7SUFDWCxnQkFBZSxFQUNoQjtFQUNEO0lBQ0Usa0JBQWlCLEVBQ2xCO0VBQ0Q7SUFDRSxnQkFBZTtJQUNmLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSxhQUFZLEVBQ2I7RUFDRDtJQUNFLHNCQUFxQixFQUN0QjtFQUNEO0lBQ0UsWUFBVztJQUNYLGFBQVk7SUFDWiwrQkFBc0I7WUFBdEIsdUJBQXNCLEVBQ3ZCO0VBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFdBQVU7SUFDVixZQUFXLEVBQ1o7RUFDRDtJQUNFLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLFdBQVU7SUFDVixZQUFXO0lBQ1gsWUFBVztJQUNYLGFBQVk7SUFDWixZQUFXO0lBQ1gsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxXQUFVO0lBQ1YsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxjQUFhLEVBQ2Q7RUFDRDtJQUNFLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ2pCO0VBQ0Q7SUFDRSxlQUFjO0lBQ2QsZ0JBQWUsRUFDaEI7RUFDRDtJQUNFLFdBQVUsRUFDWDtFQUNEO0lBQ0Usd0JBQXVCLEVBQ3hCO0VBQ0Q7SUFDRSxXQUFVO0lBQ1YsZ0JBQWUsRUFDaEI7RUFDRDtJQUNFLGtCQUFpQixFQUNsQjtFQUNEO0lBQ0UsMEJBQXlCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJ6aXNzO1xuICBzcmM6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby80Mjc2NC9OYXJ6aXNzX0JvbGRfRHJvcHMud29mZjIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJ6aXNzLW1lZGl1bTtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vNDI3NjQvTmFyemlzc19Cb2xkX0Ryb3BzLndvZmYyKTtcbn1cbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5LCBodG1sIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogNnB4O1xuICBwYWRkaW5nOjA7XG4gIG1hcmdpbjogMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuYm9keS5ob21le1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDg2MHB4KSB7XG4gIGJvZHksIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHBhZGRpbmc6IDNyZW0gNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBib2R5LCBodG1sIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4uaGVhZGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbSAycmVtO1xuICB6LWluZGV4OiA5OTk7XG59XG4uaGVhZGVyLXdyYXBwZXIgLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZyZW07XG59XG4uaGVhZGVyLXdyYXBwZXIgLm1lbnUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDNyZW07XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaGVhZGVyLXdyYXBwZXIgLm1lbnUtd3JhcHBlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5oZWFkZXItd3JhcHBlciAubWVudS1oYW1idXJnZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxLjRyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDFyZW07XG4gIG9wYWNpdHk6IDAuMTtcbn1cbi5oZWFkZXItd3JhcHBlciAubWVudS1oYW1idXJnZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjhyZW07XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuLmhlYWRlci13cmFwcGVyIC5tZW51LWhhbWJ1cmdlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC44cmVtO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cbi5oZWFkZXItd3JhcHBlciAubmF2LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgdG9wOiAxMXB4O1xufVxuLmhlYWRlci13cmFwcGVyIG5hdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVhZGVyLXdyYXBwZXIgbmF2IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uaGVhZGVyLXdyYXBwZXIgbmF2IHVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuLmhlYWRlci13cmFwcGVyIG5hdiBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMS4ycmVtO1xuICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG5cbn1cbi5oZWFkZXItd3JhcHBlciBuYXYgbGkgYTpob3ZlciAsLmhlYWRlci13cmFwcGVyIG5hdiBsaSBhLmFjdGl2ZXtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRlci13cmFwcGVyIG5hdiBsaSBhe1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBwYWRkaW5nOiAwLjRlbSAxZW07XG4gIFxufVxuLmhlYWRlci13cmFwcGVyIG5hdiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5saW5lcy13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubGluZXMtd3JhcHBlciBzcGFuLnZlcnRpY2FsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0b3A6IDEyJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC4wNTtcbn1cbi5saW5lcy13cmFwcGVyIC5jcm9zZXMgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTElO1xuICBsZWZ0OiBjYWxjKDIwJSAtIDJweCk7XG59XG4ubGluZXMtd3JhcHBlciAuY3Jvc2VzIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogY2FsYyg0MCUgLSAycHgpO1xufVxuLmxpbmVzLXdyYXBwZXIgLmNyb3NlcyBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IGNhbGMoNjAlIC0gMnB4KTtcbn1cbi5saW5lcy13cmFwcGVyIC5jcm9zZXMgc3BhbjpudGgtY2hpbGQoNCkge1xuICBsZWZ0OiBjYWxjKDgwJSAtIDJweCk7XG59XG4ubGluZXMtd3JhcHBlciBzcGFuLmhvcml6b250YWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDIwJTtcbiAgb3BhY2l0eTogMC4wNTtcbn1cbi5saW5lcy13cmFwcGVyIHNwYW4uaG9yaXpvbnRhbDpudGgtY2hpbGQoMikge1xuICBsZWZ0OiA0MCU7XG59XG4ubGluZXMtd3JhcHBlciBzcGFuLmhvcml6b250YWw6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogNjAlO1xufVxuLmxpbmVzLXdyYXBwZXIgc3Bhbi5ob3Jpem9udGFsOm50aC1jaGlsZCg0KSB7XG4gIGxlZnQ6IDgwJTtcbn1cbnN2Zzpub3QoOnJvb3Qpe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc2xpZGVyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zbGlkZXItY29udGVudCAuc2xpZGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5zbGlkZXItY29udGVudCAuc2xpZGUtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zbGlkZXItY29udGVudCAuc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEyNSU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMDtcbn1cbi5zbGlkZXItY29udGVudCAuc2xpZGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uc2xpZGVyLWNvbnRlbnQgLnNsaWRlLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDUwO1xufVxuLnNsaWRlci1jb250ZW50IC5zbGlkZS5uZXh0IHtcbiAgb3BhY2l0eTogMTtcbn1cbi5zbGlkZXItY29udGVudCAuc2xpZGUucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5zbGlkZXItY29udGVudCAuc2xpZGUuYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTNlM2U7XG59XG4uc2xpZGVyLWNvbnRlbnQgLnNsaWRlLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5zbGlkZXItY29udGVudCAuc2xpZGUuZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTNlM2U7XG59XG4uc2xpZGVyLWNvbnRlbnQgLmNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnNsaWRlci1jb250ZW50IC5mYWtlLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTI1JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC00NXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuc3ZnI2luc3RhZ3JhbXtcbiAgICAgIHdpZHRoOiAyMzIlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG4uc2xpZGVyLWNvbnRlbnQgLmZha2UtYmcucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1NjU2NTtcbiAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGFzc2V0cy9zYWxlcy1jb21wYW55LmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2xpZGVyLWNvbnRlbnQgLmZha2UtYmcuYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKGFzc2V0cy9pc21hZWwtYmcucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgMTEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG59XG4uc2xpZGVyLWNvbnRlbnQgLmZha2UtYmcuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybChhc3NldHMvcmVoYW0tYmcucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcblxufVxuLnNsaWRlci1jb250ZW50IC5mYWtlLWJnLmdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xufVxuLnNsaWRlci1jb250ZW50IC5pbWFnZS1tYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNsaWRlci1jb250ZW50IC5pbWFnZS1tYXNrIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IC00NXB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNsaWRlci1jb250ZW50IC5tYXNrLWFuaW1hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwcmVtO1xuICBsZWZ0OiAtNXJlbTtcbn1cbi5zbGlkZXItY29udGVudCAubWFzay1hbmltYXRpb24gaW1nLmNsaXAge1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHVybCgjc3ZnUGF0aEJpZyk7XG4gICAgICAgICAgY2xpcC1wYXRoOiB1cmwoI3N2Z1BhdGhCaWcpO1xufVxuLnNsaWRlci1jb250ZW50IC5pbWFnZS1jYXB0aW9uLnJpZ2h0e1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTRlbTtcbn1cbi5zbGlkZXItY29udGVudCAuaW1hZ2UtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgdG9wOiAyMHJlbTtcbiAgbGVmdDogMTJyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB6LWluZGV4OiAxMDtcbiAgY2xpcDogcmVjdCgwcmVtLCAyMXJlbSwgMTJyZW0sIDBweCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5zbGlkZXItY29udGVudCAuaW1hZ2UtY2FwdGlvbi5tYXNrLXVwIHtcbiAgY2xpcDogcmVjdCgwcmVtLCAwcmVtLCAxMnJlbSwgMHB4KTtcbn1cbi5zbGlkZXItY29udGVudCAuaW1hZ2UtY2FwdGlvbi5tYXNrLWRvd24ge1xuICBjbGlwOiByZWN0KDByZW0sIDIxcmVtLCAycmVtLCAyMDBweCk7XG59XG4uc2xpZGVyLWNvbnRlbnQgLmltYWdlLWNhcHRpb24gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5zbGlkZXItY29udGVudCAuaW1hZ2UtY2FwdGlvbiAubGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNXJlbTtcbiAgdG9wOiAxcmVtO1xufVxuLnNsaWRlci1jb250ZW50IC50aXRsZS1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDI1cmVtO1xuICB0b3A6IDRyZW07XG4gIGxlZnQ6IDNyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC4wMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zbGlkZXItY29udGVudCAudGl0bGUtYmFja2dyb3VuZCBzcGFuLm1hc2std3JhcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpZGVyLWNvbnRlbnQgLnRpdGxlLWJhY2tncm91bmQgc3Bhbi5tYXNrLXdyYXAgc3Bhbi5tYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGNsaXA6IHJlY3QoMHJlbSwgMTIwcmVtLCAzM3JlbSwgMHB4KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gM3M7XG59XG4uc2xpZGVyLWNvbnRlbnQgLnRpdGxlLWJhY2tncm91bmQgc3Bhbi5tYXNrLXdyYXAubWFzay11cCBzcGFuLm1hc2sge1xuICBjbGlwOiByZWN0KDByZW0sIDEyMHJlbSwgMHJlbSwgMHB4KTtcbn1cbi5zbGlkZXItY29udGVudCAudGl0bGUtYmFja2dyb3VuZCBzcGFuLm1hc2std3JhcC5tYXNrLWRvd24gc3Bhbi5tYXNrIHtcbiAgY2xpcDogcmVjdCgyNXJlbSwgNDRyZW0sIDI1cmVtLCAwcHgpO1xufVxuLnNsaWRlci1jb250ZW50IC50aXRsZS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNDglO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIwcmVtO1xuICAgIHotaW5kZXg6IDU7XG59XG4uc2xpZGVyLWNvbnRlbnQgLnRpdGxlLXdyYXBwZXIgaDEge1xuICBmb250LXNpemU6IDcuNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIGZvbnQtZmFtaWx5OiAnQWNsb25pY2EnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tbGVmdDogNXJlbTtcbn1cbi5zbGlkZXItY29udGVudCAudGl0bGUtd3JhcHBlciBoMSBzcGFuLm1hc2std3JhcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDdyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aXRsZS13cmFwcGVyIC5jb250ZW50LXBhcmFncmFwaHtcbnRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDczJTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG4uc2xpZGVyLWNvbnRlbnQgLnRpdGxlLXdyYXBwZXIgaDEgc3Bhbi5tYXNrLXdyYXAgc3Bhbi5tYXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTdweDtcbiAgICBsZWZ0OiAwO1xuICAgIGNsaXA6IHJlY3QoMHJlbSwgODlyZW0sIDIwcmVtLCAwcHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG59XG4uc2xpZGVyLWNvbnRlbnQgLnRpdGxlLXdyYXBwZXIgaDEgc3Bhbi5tYXNrLXdyYXA6bGFzdC1jaGlsZCBzcGFuLm1hc2sge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbn1cbi5zbGlkZXItY29udGVudCAudGl0bGUtd3JhcHBlciBoMSBzcGFuLm1hc2std3JhcC5tYXNrLXVwIHNwYW4ubWFzayB7XG4gIGNsaXA6IHJlY3QoMHJlbSwgNDRyZW0sIDByZW0sIDBweCk7XG59XG4uc2xpZGVyLWNvbnRlbnQgLnRpdGxlLXdyYXBwZXIgaDEgc3Bhbi5tYXNrLXdyYXAubWFzay1kb3duIHNwYW4ubWFzayB7XG4gIGNsaXA6IHJlY3QoMTJyZW0sIDQ0cmVtLCAxMnJlbSwgMHB4KTtcbn1cbi5zbGlkZXItY29udGVudCAudGl0bGUtd3JhcHBlciBzcGFuLmdhbGxlcnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xufVxuLnNsaWRlci1jb250ZW50IC50aXRsZS13cmFwcGVyIHNwYW4uZ2FsbGVyeTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMnJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMi41cmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdG9wOiAtMC41cmVtO1xuICBvcGFjaXR5OiAwLjk7XG59XG4uc2xpZGVyLWNvbnRlbnQgLnRpdGxlLXdyYXBwZXIgc3Bhbi5nYWxsZXJ5OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0ycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0b3A6IC0wLjVyZW07XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmNvbnRyb2wtbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3JlbTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogOTk7XG59XG4uY29udHJvbC1uYXYgdWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udHJvbC1uYXYgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMC4ycmVtIDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG59XG5hICwgYTpob3ZlcntcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250cm9sLW5hdiBsaS5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRyb2wtbmF2IGxpLmFjdGl2ZSAubGluZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjJyZW0pO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS4ycmVtKTtcbiAgd2lkdGg6IDEuOHJlbTtcbn1cbi5jb250cm9sLW5hdiBsaS5hY3RpdmUgLm51bWJlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY29udHJvbC1uYXYgLmxpbmUge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsZWZ0OiAtMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jb250cm9sLW5hdiAubnVtYmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cbi5zb2NpYWwtaWNvbnMgYS5pbnNpZGV7XG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gICAgd2lkdGg6IDMuN3JlbTtcbn1cbi5zb2NpYWwtaWNvbnMuaW5zaWRle1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogM3JlbTtcbn1cbi5zb2NpYWwtaWNvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogM3JlbTtcbiAgbGVmdDogM3JlbTtcbiAgei1pbmRleDogOTk5O1xufVxuLnNvY2lhbC1pY29ucyB1bCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNvY2lhbC1pY29ucyB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xufVxuLnNvY2lhbC1pY29ucyB1bCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyLjhyZW07XG4gIGhlaWdodDogMi44cmVtO1xufVxuLnNvY2lhbC1pY29ucyB1bCBhIHN2ZyB7XG4gIGZpbGw6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sb2dve1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAzRU07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAtOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnQWNsb25pY2EnLCBzYW5zLXNlcmlmO1xufVxuLmZvb3Rlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMHJlbTtcbiAgcmlnaHQ6IDRyZW07XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNnJlbTtcbiAgei1pbmRleDogOTk5O1xufVxuLmZvb3Rlci13cmFwcGVyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9vdGVyLXdyYXBwZXIgdWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uZm9vdGVyLXdyYXBwZXIgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb290ZXItd3JhcHBlciBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmZvb3Rlci13cmFwcGVyIGxpLmFjdGl2ZSAuaG92ZXItYm94IHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG59XG4uZm9vdGVyLXdyYXBwZXIgbGkgLmhvdmVyLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2Q2MzIzMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICB6LWluZGV4OiAxO1xufVxuLmZvb3Rlci13cmFwcGVyIGxpLmFjdGl2ZSAuYm94LWNvbnRlbnR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvb3Rlci13cmFwcGVyIGxpIC5ib3gtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTtcbiAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xufVxuXG5cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50LnR4dCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwYWRkaW5nOiA4cmVtIDMwcmVtO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG59XG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUuZ3JleS5hY3RpdmUgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciBzcGFuLmNvcHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3BhY2l0eTogMDtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA0LjNyZW07XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIGgyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciBoMyBzcGFuIHtcbiAgY29sb3I6ICNjY2M7XG59XG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUtY29udGVudCAudHh0LXdyYXBwZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNBRUFDQUI7XG59XG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUtY29udGVudCAudHh0LXdyYXBwZXIgYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxcmVtIDMuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiAjZDAyZTJlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5waG9uZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS45cmVtO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI0FFQUNBQjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIHAuZXhjZXJwdCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNBRUFDQUI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLnNsaWRlci1jb250ZW50IC50aXRsZS13cmFwcGVyLm1hc2s0e1xuICB3aWR0aDogNDAlO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIGF7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG59XG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUtY29udGVudCAudHh0LXdyYXBwZXIgYTpob3ZlciAucG9zdC13cmFwcGVyIC5wb3N0LXRpdGxle1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICBjb2xvcjogI2Y1NmU2ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciBhOmhvdmVyIC5kYXRlLXdyYXBwZXJ7XG4gIGNvbG9yOiAjY2NjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIHNwYW4udmlldy1hbGwge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUtY29udGVudCAudHh0LXdyYXBwZXIgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyLjVyZW0gMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciB1bCBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciAuZGF0ZS13cmFwcGVyIHtcbiAgd2lkdGg6IDE1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5kYXRlLXdyYXBwZXIgLmRhdGUge1xuICBmb250LXNpemU6IDIuM3JlbTtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciAuZGF0ZS13cmFwcGVyIC5tb250aCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5wb3N0LXdyYXBwZXIge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciAucG9zdC13cmFwcGVyIC5wb3N0LXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5wb3N0LXdyYXBwZXIgLnBvc3QtdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjY2U4Njg2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcblxufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5wb3N0LXdyYXBwZXIgLnBvc3QtdGl0bGUgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5wb3N0LXdyYXBwZXIgLnBvc3QtaW5mbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI0FFQUNBQjtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5wb3N0LXdyYXBwZXIgLnBvc3QtaW5mbzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50IC50eHQtd3JhcHBlciAucG9zdC13cmFwcGVyIC5wb3N0LWluZm8gdWwge1xuICBtYXJnaW46IDA7XG59XG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUtY29udGVudCAudHh0LXdyYXBwZXIgLnBvc3Qtd3JhcHBlciAucG9zdC1pbmZvIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUtY29udGVudCAudHh0LXdyYXBwZXIgLnBvc3Qtd3JhcHBlciAucG9zdC1pbmZvIGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGUtY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW5uZXIgYSwuaW5uZXIgLmhlYWRlci13cmFwcGVyIG5hdiBsaSBhOmhvdmVyICwuaW5uZXIgYSAuYWN0aXZlLCAuaW5uZXIgLmxvZ28gLC5pbm5lciAuc2xpZGVyLWNvbnRlbnQgLmltYWdlLWNhcHRpb24gLC5pbm5lciAuaGVhZGVyLXdyYXBwZXIgbmF2IGxpIGEuYWN0aXZlICwuaW5uZXIgLnNsaWRlci1jb250ZW50IC50aXRsZS13cmFwcGVyICwuaW5uZXIgLmxpbmVzLXdyYXBwZXIgLmNyb3NlcyBzcGFue1xuIGNvbG9yOiAjMDAwO1xufVxuLmlubmVyIC5zbGlkZXItY29udGVudCAuaW1hZ2UtY2FwdGlvbiAubGluZSAsLmlubmVyICAuaGVhZGVyLXdyYXBwZXIgLm1lbnUtaGFtYnVyZ2VyICwuaW5uZXIgLmhlYWRlci13cmFwcGVyIC5tZW51LWhhbWJ1cmdlcjo6YWZ0ZXIsLmlubmVyIC5oZWFkZXItd3JhcHBlciAubWVudS1oYW1idXJnZXI6OmJlZm9yZSxcbi5pbm5lciAubGluZXMtd3JhcHBlciBzcGFuLmhvcml6b250YWwgLC5pbm5lciAubGluZXMtd3JhcHBlciBzcGFuLnZlcnRpY2Fse1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmlubmVyIC5zbGlkZXItY29udGVudCAuZmFrZS1iZy5ncmVlbiAsIC5pbm5lciAuc2xpZGVyLWNvbnRlbnQgLmZha2UtYmcuYmx1ZXtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi52aWV3LW1vcmUtbGlua3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDYuOGVtO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDAuN2VtIDEuOWVtIDAuN2VtIDEuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZUluIDRzO1xufVxuLnZpZXctbW9yZS1saW5rOmhvdmVyICwudmlldy1tb3JlLWxpbms6Zm9jdXN7XG4gIGJhY2tncm91bmQ6ICNkNzMwMmE7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZhLWFuZ2xlLWRvdWJsZS1kb3due1xuICBjb2xvcjogI2Q3MzAyYTtcbn1cbi5wcm9qZWN0LWJne1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjUzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgLjdzIGVhc2UtaW47XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcblxufVxuLnRpdGxlLW1haW57XG4gICAgICBmb250LWZhbWlseTogJ0FjbG9uaWNhJywgc2Fucy1zZXJpZjtcbn1cbi5vdmVybGF5LXRleHR7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ucHJvamVjdC1iZzphZnRlcntcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5wcm9qZWN0LWJnOmhvdmVyOmFmdGVye1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XG4gIHRyYW5zaXRpb246ICBhbGwgLjNzIGVhc2UtaW47XG59XG4ucHJvamVjdC1iZzpob3ZlcntcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnByb2plY3QtYmc6aG92ZXIgLm92ZXJsYXktdGV4dHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbn1cbi5ibG9nLXBvc3RzIC5jb2wtbWQtNHtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xufVxuLmJsb2ctcG9zdHMgaW1ne1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbn1cbi5ibG9nLXBvc3RzIGEgLmNvbnRlbnRfZGl2e1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xufVxuLmJsb2ctcG9zdHMgYTpob3ZlciAuY29udGVudF9kaXZ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG4uYmxvZy1wb3N0cyBhOmhvdmVyIGltZ3tcbiAgICAgIGZpbHRlcjogc2F0dXJhdGUoMS41KTtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBzYXR1cmF0ZSgxLjUpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbn1cbi5ibG9nLXBvc3RzIGE6aG92ZXIgLnJlYWQtbW9yZSBoNXtcbiAgb3BhY2l0eTogMTtcbn1cbi5ibG9nLXBvc3RzIC5jb250ZW50X2RpdntcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi5pbWFnZS1jb25ldG50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHBhZGRpbmc6IDJlbSAxLjNlbTtcbn1cbi5pbWFnZS1jb25ldG50IGgye1xuICBoZWlnaHQ6IDIuNWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGZvbnQtZmFtaWx5OiAnQWNsb25pY2EnLCBzYW5zLXNlcmlmO1xufVxuLmRpZmYtY29sb3J7XG4gIGNvbG9yOiAjZDczMDJhO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pbWFnZS1jb25ldG50IC5tb3JlLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uaW1hZ2UtY29uZXRudCAgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogNWVtO1xufVxuLnJlYWQtbW9yZSBoNSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufVxuLnNsaWRlci1jb250ZW50IC5ibG9nLWRldGFpbCAudGl0bGUtd3JhcHBlciBoMSBzcGFuLm1hc2std3JhcCBzcGFuLm1hc2t7XG4gIGNsaXA6IHVuc2V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpZGVyLWNvbnRlbnQgLmJsb2ctZGV0YWlsIC50aXRsZS13cmFwcGVyIGgxIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmxvZy1kZXRhaWwgLnRpdGxlLXdyYXBwZXIgLmNvbnRlbnQtcGFyYWdyYXBoe1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNsaWRlci1jb250ZW50IC5ibG9nLWRldGFpbCAudGl0bGUtd3JhcHBlcntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVlbTtcbn1cbi5zbGlkZXItY29udGVudCAuYmxvZy1kZXRhaWwgLnRpdGxlLXdyYXBwZXIgaDEgc3Bhbi5tYXNrLXdyYXB7XG4gIGhlaWdodDogMTVyZW07XG5cbn1cbi5zbGlkZXItY29udGFpbmVyLmJsb2ctZGV0YWlsLXBhZ2UsLnNsaWRlLmJsb2ctZGV0YWlse1xuICBoZWlnaHQ6IDgwdmg7XG59XG4ucG9zdCBwe1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucG9zdCBoMntcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5pbWFnZSBpbWd7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlubmVyLWJsb2cuaW5uZXIgLmhlYWRlci13cmFwcGVyIC5tZW51LXdyYXBwZXIge1xuICB0b3A6IC0xMnB4O1xufVxuLmlubmVyLWJsb2cuaW5uZXIgLmhlYWRlci13cmFwcGVyIC5uYXYtd3JhcHBlciB7XG4gIHRvcDogMDtcbn1cbi5tYXQtY2FyZHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYW5pbWF0ZWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjNzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS4zcztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuM3M7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMS4zcztcbn1cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5oaWRkZW57XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5ibG9nLXBvc3RzIHtcbiAgbWFyZ2luLWJvdHRvbTogNiU7XG59XG4uYW5pbWF0ZWQtZGVsYXl7XG4gIGFuaW1hdGlvbi1kZWxheTogLjE1cztcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC4xNXM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAuMTVzO1xuICAtby1hbmltYXRpb24tZGVsYXk6IC4xNXNcbn1cbi5oaWRlLW9uLWluaXQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uaW5uZXIgLm15LW1hc2std3JhcHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmlubmVyIC5teS1tYXNrLXdyYXAgLm15LW1hc2sgLC5pbm5lciAuY29udGVudC1wYXJhZ3JhcGggLm1hc2t7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMHMgMC42cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG4gICAgdG9wOiAtNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW5uZXIgLm15LW1hc2std3JhcCAubXktbWFzazo6YWZ0ZXIgLC5pbm5lciAuY29udGVudC1wYXJhZ3JhcGggLm1hc2s6YWZ0ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBhbmltYXRpb246IHNlY29uZGFyeUltYWdlT3ZlcmxheUluIDAuNnMgMHMsXG4gICAgICBzZWNvbmRhcnlJbWFnZU92ZXJsYXlPdXQgMC42cyAwLjZzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cblxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzZWNvbmRhcnlJbWFnZU92ZXJsYXlJbiB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNlY29uZGFyeUltYWdlT3ZlcmxheU91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG59XG5cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogODYwcHgpe1xuICBib2R5LCBodG1sIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpe1xuICAuc2xpZGVyLWNvbnRlbnQgLnRpdGxlLXdyYXBwZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBlbTtcbiAgfVxuICAuYmxvZy1wb3N0cyBpbWcge1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxuICAucHJvamVjdC1iZ3tcbiAgICBoZWlnaHQ6IDMwdmg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zbGlkZXItY29udGVudCAuZmFrZS1iZy5yZWQgLC5zbGlkZXItY29udGVudCAuZmFrZS1iZy5ibHVlICwuc2xpZGVyLWNvbnRlbnQgLmZha2UtYmcuZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogaW5oZXJpdDtcbiAgIH1cbiAgIC5oZWFkZXItd3JhcHBlciAubWVudS1oYW1idXJnZXJ7XG4gICAgIHRvcDogNi43cmVtO1xuICAgfVxuICAgLnNsaWRlci1jb250ZW50IC50aXRsZS13cmFwcGVye1xuICAgIG1hcmdpbi10b3A6IDM0JTtcbiAgICB3aWR0aDogODAlXG4gICB9XG4gICAuaW5uZXItYmxvZy5pbm5lciAuaGVhZGVyLXdyYXBwZXIgLm5hdi13cmFwcGVyIHtcbiAgICB0b3A6IDVlbTtcbiAgIH1cbiAgIC5oZWFkZXItd3JhcHBlciAubmF2LXdyYXBwZXJ7XG4gICAgIHRvcDogNmVtO1xuICAgfVxuICAgLmlubmVyIC5oZWFkZXItd3JhcHBlciAubWVudS1oYW1idXJnZXJ7XG4gICAgdG9wOiA2cmVtO1xuICAgfVxuICAgZGl2LmlubmVyIC5oZWFkZXItd3JhcHBlciAubmF2LXdyYXBwZXIge1xuICAgIHRvcDogNnJlbTtcbiAgfVxuICAgLnNsaWRlci1jb250ZW50IC5pbWFnZS1jYXB0aW9ue1xuICAgICB0b3A6IDMycmVtO1xuICAgfVxuICAgLmxvZ297XG4gICAgIHRvcDogNHJlbTtcbiAgIH1cbiAgIC5zbGlkZXItY29udGVudCAuc2xpZGUuZ3JleSAudGl0bGUtd3JhcHBlci5tYXNrNCB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWFyZ2luLXRvcDogMjUlO1xuICB9XG4gIC5zbGlkZXItY29udGVudCAuY2FudmFze1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgfVxuICBzdmcjaW5zdGFncmFtIHtcbiAgICB3aWR0aDogMTUyJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xufVxuICAuc2xpZGVyLWNvbnRlbnQgLnRpdGxlLXdyYXBwZXIgaDF7XG4gICAgZm9udC1zaXplOiA2LjhyZW07XG4gIH1cbiAgLmJsb2ctcG9zdHMgaW1nIHtcbiAgICBoZWlnaHQ6IDE0dmg7XG4gIH1cbiAgLnByb2plY3QtYmd7XG4gICAgaGVpZ2h0OiAxOHZoO1xuICB9XG59XG5cbi5pbm5lciAuaGVhZGVyLXdyYXBwZXIgLm5hdi13cmFwcGVye1xuICB0b3A6IDEycHg7XG59XG4uaW5uZXIgLmhlYWRlci13cmFwcGVyIC5tZW51LXdyYXBwZXJ7XG4gIHRvcDogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zbGlkZXItY29udGVudCAuZmFrZS1iZy5yZWQgLC5zbGlkZXItY29udGVudCAuZmFrZS1iZy5ibHVlICwuc2xpZGVyLWNvbnRlbnQgLmZha2UtYmcuZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogaW5oZXJpdDtcbiAgIH1cbiAgIC5zb2NpYWwtaWNvbnMgdWwgYXtcbiAgICB3aWR0aDogNC43ZW07XG4gICB9XG4gICAuaW5uZXIgLmhlYWRlci13cmFwcGVyIC5uYXYtd3JhcHBlcntcbiAgICB0b3A6IDEyZW07XG4gIH1cbiAgIC5oZWFkZXItd3JhcHBlci5vcGVuIC5tZW51LWhhbWJ1cmdlcjo6YmVmb3Jle1xuICAgIHdpZHRoOiAzLjFyZW07XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgdG9wOiAtLjlyZW07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyN2RlZyk7XG4gICB9XG4gICAuaGVhZGVyLXdyYXBwZXIub3BlbiAubWVudS1oYW1idXJnZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICB0b3A6IC0xcmVtO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTI4ZGVnKTtcbiAgIH1cbiAgIC5oZWFkZXItd3JhcHBlci5vcGVuIC5tZW51LWhhbWJ1cmdlcntcbiAgICAgd2lkdGg6IDA7XG4gICAgIHRvcDogMi40cmVtO1xuICAgICB6LWluZGV4OiA5O1xuICAgfVxuICAgLmhlYWRlci13cmFwcGVyLm9wZW4gLmxvZ297XG4gICAgIHotaW5kZXg6IDk7XG4gICB9XG4gICAuaGVhZGVyLXdyYXBwZXIub3BlbiAubmF2LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiA3ZW07XG4gICB9XG4gICAuaGVhZGVyLXdyYXBwZXIgLm1lbnUtaGFtYnVyZ2Vye1xuICAgICBvcGFjaXR5OiAxO1xuICAgfVxuICAgLmhlYWRlci13cmFwcGVyIC5tZW51LXdyYXBwZXJ7XG4gICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICBwYWRkaW5nOiAxZW0gMDtcbiAgIH1cbiAgIC5pbm5lciAuaGVhZGVyLXdyYXBwZXIgLm1lbnUtd3JhcHBlciB7XG4gICAgdG9wOiAtOXB4O1xuICAgfVxuICAgLnNvY2lhbC1pY29ucyB1bCBhIHN2Z3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gICB9XG4gICAuc29jaWFsLWljb25zIGEuaW5zaWRlIHtcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgIH1cbiAgIC5oZWFkZXItd3JhcHBlciBuYXYgbGk6bGFzdC1jaGlsZHtcbiAgICAgIG1hcmdpbjogMCAxLjJyZW07XG4gICB9XG4gICAuaGVhZGVyLXdyYXBwZXIgLm5hdi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB0b3A6IDEzLjFlbTtcbiAgICBsZWZ0OiAwO1xuICAgfVxuICAgLmhlYWRlci13cmFwcGVyLm9wZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGU0ZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5O1xuICAgfVxuICAgLmlubmVyIHNwYW4uaG9yaXpvbnRhbCAsLmlubmVyIC5jcm9zZXMgLC5pbm5lciBzcGFuLnZlcnRpY2Fse1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICB9XG4gICAuaW5uZXIgLmhlYWRlci13cmFwcGVyIC5uYXYtd3JhcHBlciAsIC5pbm5lciAuaGVhZGVyLXdyYXBwZXIub3BlbntcbiAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICB9XG4gICAub3ZlcmxheS10ZXh0e1xuICAgICBvcGFjaXR5OiAxO1xuICAgfVxuICAgLnByb2plY3QtYmc6YWZ0ZXJ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgfVxuICAgLnRpdGxlLW1haW57XG4gICAgZm9udC1zaXplOiAzLjNyZW07XG4gICAgbWFyZ2luOiAzZW0gMDtcbiAgIH1cbiAgIC5pbm5lciAuaGVhZGVyLXdyYXBwZXIub3BlbiAubmF2LXdyYXBwZXJ7XG4gICAgIHBhZGRpbmctdG9wOiAxMy41cmVtO1xuICAgfVxuICAgLmgyLCBoMiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMS40cmVtIDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmlubmVyIC5oZWFkZXItd3JhcHBlcntcbiAgICBwYWRkaW5nOiA1cmVtIDNyZW0gMXJlbSAzcmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxuICAucG9zdC5jb250YWluZXIubWItNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDlyZW07XG4gIH1cbiAgIC5oZWFkZXItd3JhcHBlciBuYXYgbGl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMS41ZW0gMDtcbiAgICBmb250LXNpemU6IDMuOXJlbTtcbiAgIH1cbiAgIC5zbGlkZXItY29udGVudCAudGl0bGUtd3JhcHBlcntcbiAgICAgbWFyZ2luLXRvcDogNDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgfVxuICAgLmlubmVyIC5zbGlkZXItY29udGVudCAuc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNzZ2aDtcbiAgIH1cbiAgIC5pbm5lci1ibG9nIC5zbGlkZXItY29udGFpbmVyLmJsb2ctZGV0YWlsLXBhZ2UsIC5pbm5lci1ibG9nIC5zbGlkZS5ibG9nLWRldGFpbCB7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgfVxuICAgLnNsaWRlci1jb250ZW50IC5ibG9nLWRldGFpbCAudGl0bGUtd3JhcHBlciBoMSBzcGFuLm1hc2std3JhcCBzcGFuLm1hc2t7XG4gICAgbGVmdDogYXV0bztcbiAgIH1cbiAgIC5zbGlkZXItY29udGVudCAuYmxvZy1kZXRhaWwgLnRpdGxlLXdyYXBwZXJ7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICB9XG4gICAuYmxvZy1kZXRhaWwgLnRpdGxlLXdyYXBwZXIgLmNvbnRlbnQtcGFyYWdyYXBoe1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICB9XG4gICAucG9zdCBpbWd7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgfVxuICAgLnZpZXctbW9yZS1saW5re1xuICAgIHRvcDogOC41ZW07XG4gICAgbGVmdDogMjlweDtcbiAgIH1cbiAgIC5ibG9nLXBvc3RzIGltZ3tcbiAgICBoZWlnaHQ6IGF1dG87XG4gICB9XG4gICAuc2xpZGVyLWNvbnRlbnQgLnRpdGxlLXdyYXBwZXIgaDEgc3Bhbi5tYXNrLXdyYXAgc3Bhbi5tYXNre1xuICAgIGxlZnQ6IDI5cHg7XG4gICB9XG4gICAuc2xpZGVyLWNvbnRlbnQgLnRpdGxlLWJhY2tncm91bmQgc3Bhbi5tYXNrLXdyYXAgc3Bhbi5tYXNre1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICB9XG4gICAuc2xpZGVyLWNvbnRlbnQgLnNsaWRlLmdyZXkgLnRpdGxlLXdyYXBwZXIubWFzazQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgfVxuICAuc2xpZGVyLWNvbnRlbnQgLnNsaWRlLmdyZXkgLnRpdGxlLXdyYXBwZXIgaDF7XG4gICAgZm9udC1zaXplOiA0LjhyZW07XG4gIH1cbiAgLnNsaWRlLmdyZXkgLnRpdGxlLXdyYXBwZXIgLmNvbnRlbnQtcGFyYWdyYXBoe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgLnByb2plY3QtYmd7XG4gICAgaGVpZ2h0OiAzM3ZoO1xuICB9XG4gIC5zbGlkZXItY29udGVudCAuY2FudmFze1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgfVxuICBzdmcjaW5zdGFncmFtIHtcbiAgICB3aWR0aDogMTUyJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY3KTtcbiAgfVxuICAuc29jaWFsLWljb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA5JTtcbiAgICBsZWZ0OiAzcmVtO1xuICAgIHotaW5kZXg6IDkwO1xuICB9XG4gIC5mb290ZXItd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZWZ0OiAwcmVtO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBib3R0b206IDBlbTtcbiAgfVxuICAuc2xpZGVyLWNvbnRlbnQgLmltYWdlLWNhcHRpb257XG4gICAgdG9wOiAzMHJlbTtcbiAgICBsZWZ0OiAtNXJlbTtcbiAgfVxuICAuaGVhZGVyLXdyYXBwZXIgLm5hdi13cmFwcGVye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnRpdGxlLXdyYXBwZXIgLmNvbnRlbnQtcGFyYWdyYXBoe1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5zbGlkZXItY29udGFpbmVyIC5zbGlkZS1jb250ZW50LnR4dHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwYWRkaW5nOiAwIDRyZW07XG4gIH1cbiAgLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5wb3N0LXdyYXBwZXJ7XG4gICAgd2lkdGg6IDc0JTtcbiAgfVxuICAuaGVhZGVyLXdyYXBwZXJ7XG4gICAgcGFkZGluZzogNXJlbSAzcmVtIDNyZW07XG4gIH1cbiAgLnNsaWRlci1jb250YWluZXIgLnNsaWRlLWNvbnRlbnQgLnR4dC13cmFwcGVyIC5wb3N0LXdyYXBwZXIgLnBvc3QtdGl0bGV7XG4gICAgd2lkdGg6IDc0JTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmZvb3Rlci13cmFwcGVyIGxpIC5ib3gtY29udGVudHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxuICAuc2xpZGVyLWNvbnRlbnQgLnNsaWRlLmdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMyMzI7XG4gIH1cbn1cblxuXG5cblxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rehamhabbas/Documents/build/We_Build/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map