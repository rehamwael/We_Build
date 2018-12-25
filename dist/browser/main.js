(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _hello_you_hello_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hello-you/hello-you.component */ "./src/app/hello-you/hello-you.component.ts");
/* harmony import */ var _blog_post_listing_blog_post_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-post-listing/blog-post-listing.component */ "./src/app/blog-post-listing/blog-post-listing.component.ts");
/* harmony import */ var _customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-listing/customer-listing.component */ "./src/app/customer-listing/customer-listing.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer-details/customer-details.component.ts");
/* harmony import */ var _blog_post_details_blog_post_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog-post-details/blog-post-details.component */ "./src/app/blog-post-details/blog-post-details.component.ts");
/* harmony import */ var _reham_profile_reham_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reham-profile/reham-profile.component */ "./src/app/reham-profile/reham-profile.component.ts");
/* harmony import */ var _ismael_profile_ismael_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ismael-profile/ismael-profile.component */ "./src/app/ismael-profile/ismael-profile.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");













var appRoutes = [
    { path: 'customer', component: _customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_7__["CustomerListingComponent"] },
    { path: 'customer/:slug', component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_8__["CustomerDetailsComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"] },
    { path: 'blog', component: _blog_post_listing_blog_post_listing_component__WEBPACK_IMPORTED_MODULE_6__["BlogPostListingComponent"] },
    { path: 'blog/:slug', component: _blog_post_details_blog_post_details_component__WEBPACK_IMPORTED_MODULE_9__["BlogPostDetailsComponent"] },
    { path: 'hello-you', component: _hello_you_hello_you_component__WEBPACK_IMPORTED_MODULE_5__["HelloYouComponent"] },
    { path: 'reham', component: _reham_profile_reham_profile_component__WEBPACK_IMPORTED_MODULE_10__["RehamProfile"] },
    { path: 'ismael', component: _ismael_profile_ismael_profile_component__WEBPACK_IMPORTED_MODULE_11__["IsmaelProfile"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid outlet-container px-0\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'buttercms-angular-seven';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/dist/index.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hello_you_hello_you_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hello-you/hello-you.component */ "./src/app/hello-you/hello-you.component.ts");
/* harmony import */ var _blog_post_details_blog_post_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-post-details/blog-post-details.component */ "./src/app/blog-post-details/blog-post-details.component.ts");
/* harmony import */ var _blog_post_listing_blog_post_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-post-listing/blog-post-listing.component */ "./src/app/blog-post-listing/blog-post-listing.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-listing/customer-listing.component */ "./src/app/customer-listing/customer-listing.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topnav/topnav.component */ "./src/app/topnav/topnav.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _reham_profile_reham_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reham-profile/reham-profile.component */ "./src/app/reham-profile/reham-profile.component.ts");
/* harmony import */ var _ismael_profile_ismael_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ismael-profile/ismael-profile.component */ "./src/app/ismael-profile/ismael-profile.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _hello_you_hello_you_component__WEBPACK_IMPORTED_MODULE_6__["HelloYouComponent"],
                _blog_post_details_blog_post_details_component__WEBPACK_IMPORTED_MODULE_7__["BlogPostDetailsComponent"],
                _blog_post_listing_blog_post_listing_component__WEBPACK_IMPORTED_MODULE_8__["BlogPostListingComponent"],
                _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_9__["CustomerDetailsComponent"],
                _customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_10__["CustomerListingComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_12__["TopnavComponent"],
                _reham_profile_reham_profile_component__WEBPACK_IMPORTED_MODULE_19__["RehamProfile"],
                _ismael_profile_ismael_profile_component__WEBPACK_IMPORTED_MODULE_20__["IsmaelProfile"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _shared__WEBPACK_IMPORTED_MODULE_17__["AppMaterialModule"],
                ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__["AnimateOnScrollModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-post-details/blog-post-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/blog-post-details/blog-post-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n<div class=\"inner inner-blog\">\n    <div class=\"slider-content\">\n        <div class=\"header-wrapper\">\n          <div class=\"header\">\n            <div class=\"menu-wrapper\" (click)=\"menuToggle()\">\n              <div class=\"menu-hamburger\"></div>\n              <a href=\"#/\"><div class=\"logo\">WE BUILD</div></a>\n            </div>\n            <div class=\"nav-wrapper\">\n              <nav>\n                <ul>\n                    <li><a href=\"#/\">Home</a></li>\n                    <li><a href=\"#/reham\">Reham Profile</a></li>\n                    <li><a href=\"#/ismael\">Ismael Profile</a></li>\n                    <li><a href=\"#/blog\" class=\"active\">Blog</a></li>\n                </ul>\n              </nav>\n            </div>\n          </div>\n        </div>\n      <div class=\"slider-wrapper\">\n        <div class=\"slider-container blog-detail-page\"> \n         <div class=\"lines-wrapper\">\n           <div class=\"croses\">\n             <span>+</span>\n             <span>+</span>\n             <span>+</span>\n             <span>+</span>\n           </div>\n           <span class=\"vertical\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n          </div>\n          <div class=\"image-mask\">\n            <img class=\"\" src=\"\" alt=\"\" />\n          </div>\n         <div class=\"slide active green blog-detail\" data-order=\"1\" data-color=\"#f96666\" data-img=\"\">\n            <div class=\"fake-bg green\"></div>\n            <canvas class=\"canvas\" data-image=\"\"></canvas>\n            <div class=\"slide-content \">\n              <div class=\"title-background\">\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">We Build</span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Blog</span>\n                  </span>\n              </div>\n              <div class=\"title-wrapper\">\n                <h1>\n                   <span class=\"mask-wrap\">\n                    <span class=\"mask\">{{post.data?.title}}</span>\n                  </span>\n                   <span class=\"mask-wrap content-paragraph\"> <span class=\"mask\"><div class=\"more-info\">In <span class=\"diff-color\">{{ post.data?.categories[0]?.name }}</span> By <span class=\"diff-color\">{{ post.data?.author?.first_name }}</span> {{post.data?.published | date: 'dd/MM/yyyy' }}</div></span></span>\n                </h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"post container mb-5\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"post-body\" [innerHTML]=\"post.data?.body\"></div>\n          </div>\n        </div>\n      </div>\n      </div>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/blog-post-details/blog-post-details.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/blog-post-details/blog-post-details.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-details {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n  .blog-details img {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWhhbWhhYmJhcy9Eb2N1bWVudHMvYnVpbGQvV2VfQnVpbGQvc3JjL2FwcC9ibG9nLXBvc3QtZGV0YWlscy9ibG9nLXBvc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlLQUF3SyxFQUl6SztFQUxEO0lBR0ksWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvYmxvZy1wb3N0LWRldGFpbHMvYmxvZy1wb3N0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1kZXRhaWxzIHtcbiAgZm9udC1mYW1pbHk6IEJsaW5rTWFjU3lzdGVtRm9udCwgLWFwcGxlLXN5c3RlbSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/blog-post-details/blog-post-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/blog-post-details/blog-post-details.component.ts ***!
  \******************************************************************/
/*! exports provided: BlogPostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostDetailsComponent", function() { return BlogPostDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var BlogPostDetailsComponent = /** @class */ (function () {
    function BlogPostDetailsComponent(route) {
        this.route = route;
        this.post = {
            meta: null,
            data: null
        };
    }
    BlogPostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadScripts();
        this.slug$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return (params.get('slug')); }));
        this.slug$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (slug) {
            _services__WEBPACK_IMPORTED_MODULE_3__["butterService"].post.retrieve(slug)
                .then(function (res) {
                _this.post = res.data;
                console.log(res);
            }).catch(function (res) {
                console.log(res);
            });
        });
    };
    BlogPostDetailsComponent.prototype.loadScripts = function () {
        var dynamicScripts = [
            '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c20b014c1d59cd6'
        ];
        for (var i = 0; i < dynamicScripts.length; i++) {
            var node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    };
    BlogPostDetailsComponent.prototype.menuToggle = function () {
        var header = document.querySelector(".header-wrapper");
        if (header.classList.contains("open")) {
            header.classList.remove("open");
        }
        else {
            header.classList.add("open");
        }
    };
    BlogPostDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-post-details',
            template: __webpack_require__(/*! ./blog-post-details.component.html */ "./src/app/blog-post-details/blog-post-details.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./blog-post-details.component.scss */ "./src/app/blog-post-details/blog-post-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BlogPostDetailsComponent);
    return BlogPostDetailsComponent;
}());



/***/ }),

/***/ "./src/app/blog-post-listing/blog-post-listing.component.html":
/*!********************************************************************!*\
  !*** ./src/app/blog-post-listing/blog-post-listing.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner\">\n<div class=\"slider-content\">\n  <div class=\"header-wrapper\">\n    <div class=\"header\">\n      <div class=\"menu-wrapper\" (click)=\"menuToggle()\">\n        <div class=\"menu-hamburger\"></div>\n        <a href=\"#/\"><div class=\"logo\">WE BUILD</div></a>\n      </div>\n      <div class=\"nav-wrapper\">\n        <nav>\n          <ul>\n              <li><a href=\"#/\">Home</a></li>\n              <li><a href=\"#/reham\">Reham Profile</a></li>\n              <li><a href=\"#/ismael\">Ismael Profile</a></li>\n              <li><a href=\"#/blog\" class=\"active\">Blog</a></li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>\n\n<div class=\"slider-wrapper\">\n  <div class=\"slider-container\">\n   <div class=\"lines-wrapper\">\n     <div class=\"croses\">\n       <span>+</span>\n       <span>+</span>\n       <span>+</span>\n       <span>+</span>\n     </div>\n     <span class=\"vertical\"></span>\n     <span class=\"horizontal\"></span>\n     <span class=\"horizontal\"></span>\n     <span class=\"horizontal\"></span>\n     <span class=\"horizontal\"></span>\n    </div>\n    <div class=\"image-mask\">\n      <img class=\"\" src=\"\" alt=\"\" />\n    </div>\n   <div class=\"slide active green\" data-order=\"1\" data-color=\"#f96666\" data-img=\"\">\n      <div class=\"fake-bg green\"></div>\n      <canvas class=\"canvas\" data-image=\"\"></canvas>\n      <div class=\"slide-content \">\n        <div class=\"title-background\">\n            <span class=\"mask-wrap\">\n              <span class=\"mask\">We Build</span>\n            </span>\n            <span class=\"mask-wrap\">\n              <span class=\"mask\">Blog</span>\n            </span>\n        </div>\n        <div class=\"title-wrapper\">\n          <h1>\n              <span class=\"mask-wrap my-mask-wrap\">\n                  <span class=\"mask my-mask\">We Build</span>\n                </span>\n                <span class=\"mask-wrap my-mask-wrap\">\n                  <span class=\"mask my-mask\">Blog</span>\n                </span>\n             <span class=\"mask-wrap content-paragraph\"> <span class=\"mask\">We Build , Write , Explore, Discuss Topics Related to Technlogy , Design , Managment , Development ,in Details and many more Topics and Posts.</span></span>\n            <span class=\"mask-wrap content-paragraph\"><a (click)=\"scrollTo()\" class=\"button view-more-link\" title=\"View portfolio items\">View Blog Posts <i class=\"fa fa-angle-down ml-4\"></i></a></span>\n\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<div id=\"Blog-Posts\">\n<div class=\"container-fluid mb-5\">\n  <div class=\"row mt-4 blog-posts\">\n    <h1 class=\"col-md-12 title-main mb-5\">Blog Posts.</h1>\n    <div class=\"col-md-4 hide-on-init\" *ngFor=\"let post of posts\" animateOnScroll animationName=\"animated slideUp\" animation-duration=\"1s\" animation-delay=\"1s\">\n        <a [routerLink]=\"['/blog/'+post.slug]\">\n          <div class=\"content_div\">\n            <img *ngIf=\"post.featured_image\" src=\"{{post.featured_image}}\" alt=\"featured image\"\n            class=\"responsive\"/>\n        <div class=\"image-conetnt\">\n        <div class=\"blog-info hide-on-init\" animateOnScroll animationName=\"animated slideUp\" animation-duration=\"1.4s\" animation-delay=\"1s\">\n            <h2 class=\"slideInUp\"> {{post.title}}</h2>\n            <div class=\"more-info\">In <span class=\"diff-color\">{{ post.categories[0]?.name }}</span> By <span class=\"diff-color\">{{ post.author?.first_name }}</span> {{post.published | date: 'dd/MM/yyyy' }}</div>\n            <p class=\"slideInUp slideInUp2\" [innerHTML]=\"post.summary\"></p>\n            <div class=\"read-more\">\n             <h5>Read More →</h5>\n            </div>\n        </div>\n      </div>\n    </div>\n  </a>\n  </div>\n      </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/blog-post-listing/blog-post-listing.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/blog-post-listing/blog-post-listing.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-title {\n  margin: auto 0; }\n  mat-card-title img {\n    margin-right: 1em; }\n  mat-card-title a {\n    text-decoration: none;\n    color: black; }\n  mat-card-title .summary {\n    margin: 1em;\n    font-size: 70%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWhhbWhhYmJhcy9Eb2N1bWVudHMvYnVpbGQvV2VfQnVpbGQvc3JjL2FwcC9ibG9nLXBvc3QtbGlzdGluZy9ibG9nLXBvc3QtbGlzdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWMsRUFhZjtFQWREO0lBR0ksa0JBQWlCLEVBQ2xCO0VBSkg7SUFNSSxzQkFBcUI7SUFDckIsYUFBWSxFQUNiO0VBUkg7SUFXSSxZQUFXO0lBQ1gsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYmxvZy1wb3N0LWxpc3RpbmcvYmxvZy1wb3N0LWxpc3RpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogYXV0byAwO1xuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuc3VtbWFyeSB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgZm9udC1zaXplOiA3MCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/blog-post-listing/blog-post-listing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/blog-post-listing/blog-post-listing.component.ts ***!
  \******************************************************************/
/*! exports provided: BlogPostListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostListingComponent", function() { return BlogPostListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var BlogPostListingComponent = /** @class */ (function () {
    function BlogPostListingComponent() {
    }
    BlogPostListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].post.list({
            page: 1,
            page_size: 10
        }).then(function (res) {
            _this.posts = res.data.data;
            console.log(res);
        });
    };
    BlogPostListingComponent.prototype.scrollTo = function () {
        var x = document.querySelector("#Blog-Posts");
        if (x) {
            x.scrollIntoView();
        }
    };
    BlogPostListingComponent.prototype.menuToggle = function () {
        var header = document.querySelector(".header-wrapper");
        if (header.classList.contains("open")) {
            header.classList.remove("open");
        }
        else {
            header.classList.add("open");
        }
    };
    BlogPostListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-post-listing',
            template: __webpack_require__(/*! ./blog-post-listing.component.html */ "./src/app/blog-post-listing/blog-post-listing.component.html"),
            styles: [__webpack_require__(/*! ./blog-post-listing.component.scss */ "./src/app/blog-post-listing/blog-post-listing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogPostListingComponent);
    return BlogPostListingComponent;
}());



/***/ }),

/***/ "./src/app/customer-details/customer-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"container\">\n    <div fxLayout=\"column\" class=\"details\">\n      <div class=\"blocks\">\n        <img src=\"{{page?.fields?.customer_logo}}\" alt=\"\" height=\"124\" width=\"124\"/>\n      </div>\n\n      <h1 class=\"blocks\">\n        {{page?.fields?.headline}}\n      </h1>\n      <h3 class=\"is-size-3\">Testimonials</h3>\n      <div [innerHTML]=\"page?.fields?.testimonial\"></div>\n      <div [innerHTML]=\"page?.fields?.body\"></div>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/customer-details/customer-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWhhbWhhYmJhcy9Eb2N1bWVudHMvYnVpbGQvV2VfQnVpbGQvc3JjL2FwcC9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5S0FBd0ssRUFDeksiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscyB7XG4gIGZvbnQtZmFtaWx5OiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/customer-details/customer-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(route) {
        this.route = route;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slug$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return (params.get('slug')); }));
        this.slug$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (slug) {
            _services__WEBPACK_IMPORTED_MODULE_3__["butterService"].page.retrieve('customer_case_study', slug)
                .then(function (res) {
                _this.page = res.data.data;
            }).catch(function (res) {
                console.log(res);
            });
        });
    };
    CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.scss */ "./src/app/customer-details/customer-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customer-listing/customer-listing.component.html":
/*!******************************************************************!*\
  !*** ./src/app/customer-listing/customer-listing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title class=\"page-title\">Customers</mat-card-title>\n  <mat-divider></mat-divider>\n  <mat-card-content class=\"page-body\">\n    <mat-card *ngFor=\"let page of pages\">\n      <mat-card-title>\n        <div class=\"container\">\n          <a [routerLink]=\"[page.slug]\">\n            <div fxLayout=\"row\" fxLayout.xs=\"column\"\n                 fxFlex class=\"content\">\n              <div class=\"blocks\">\n                <img src=\"{{page.fields.customer_logo}}\" alt=\"{{page.fields.seotitle}}\" height=\"64\"\n                     width=\"64\"/>\n              </div>\n              <div class=\"blocks\">\n                {{page.fields.headline}}\n              </div>\n            </div>\n          </a>\n        </div>\n      </mat-card-title>\n    </mat-card>\n  </mat-card-content>\n  <mat-divider></mat-divider>\n  <mat-card-footer>\n    <div class=\"page-footer\">\n      <mat-icon>whatshot</mat-icon>\n    </div>\n  </mat-card-footer>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/customer-listing/customer-listing.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/customer-listing/customer-listing.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-title {\n  margin: auto 0; }\n  mat-card-title img {\n    margin-right: 1em; }\n  mat-card-title a {\n    text-decoration: none;\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWhhbWhhYmJhcy9Eb2N1bWVudHMvYnVpbGQvV2VfQnVpbGQvc3JjL2FwcC9jdXN0b21lci1saXN0aW5nL2N1c3RvbWVyLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjLEVBUWY7RUFURDtJQUdJLGtCQUFpQixFQUNsQjtFQUpIO0lBTUksc0JBQXFCO0lBQ3JCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWxpc3RpbmcvY3VzdG9tZXItbGlzdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG4gIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/customer-listing/customer-listing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-listing/customer-listing.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListingComponent", function() { return CustomerListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var CustomerListingComponent = /** @class */ (function () {
    function CustomerListingComponent() {
    }
    CustomerListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].page.list('customer_case_study')
            .then(function (res) {
            _this.pages = res.data.data;
        });
    };
    CustomerListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer-listing.component.html */ "./src/app/customer-listing/customer-listing.component.html"),
            styles: [__webpack_require__(/*! ./customer-listing.component.scss */ "./src/app/customer-listing/customer-listing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerListingComponent);
    return CustomerListingComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title class=\"page-title\">{{faq.title}}</mat-card-title>\n  <mat-divider></mat-divider>\n  <mat-card-content class=\"page-body\">\n    <mat-card *ngFor=\"let item of faq.items\">\n      <mat-card-content>\n        <h3>\n          {{item.question}}\n        </h3>\n        <div>\n          {{item.answer}}\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </mat-card-content>\n  <mat-divider></mat-divider>\n  <mat-card-footer>\n    <div class=\"page-footer\">\n      <mat-icon>whatshot</mat-icon>\n    </div>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/faq/faq.component.scss":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
        this.faq = {
            items: [],
            title: 'FAQ'
        };
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].content.retrieve(['faq_headline', 'faq_items'])
            .then(function (res) {
            _this.faq.title = res.data.data.faq_headline;
            _this.faq.items = res.data.data.faq_items;
        });
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/hello-you/hello-you.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hello-you/hello-you.component.ts ***!
  \**************************************************/
/*! exports provided: HelloYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloYouComponent", function() { return HelloYouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var HelloYouComponent = /** @class */ (function () {
    function HelloYouComponent() {
    }
    HelloYouComponent.prototype.ngOnInit = function () {
        this.fetchPosts();
        this.fetchHeadline();
    };
    HelloYouComponent.prototype.fetchHeadline = function () {
        var _this = this;
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].content.retrieve(['homepage_headline'])
            .then(function (res) {
            console.log('Headline from ButterCMS');
            console.log(res);
            _this.headlines = res.data;
        });
    };
    HelloYouComponent.prototype.fetchPosts = function () {
        var _this = this;
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].post.list({
            page: 1,
            page_size: 10
        })
            .then(function (res) {
            console.log('Content from ButterCMS');
            console.log(res);
            _this.posts = res.data;
        });
    };
    HelloYouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hello-you',
            template: "\n        <h1>Hello-You</h1>\n        <p>\n            Headline:\n            {{headlines?.data?.homepage_headline}}\n        </p>\n        <p>\n            Sample Post:\n            {{posts? posts.data[0]?.url : 'no posts'}}\n        </p>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelloYouComponent);
    return HelloYouComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n    <svg height=\"0\" width=\"0\">\n      <symbol id=\"twitter\" viewBox=\"0 0 700 700\">\n          <path d=\"M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z\"/>\n       </symbol>\n       <symbol id=\"instagram\">\n        <path d=\"M16.3189 0H6.68114C2.99714 0 0 2.86683 0 6.39066V15.6093C0 19.1332 2.99714 22 6.68114 22H16.3189C20.0029 22 23 19.1332 23 15.6094V6.39066C23 2.86683 20.0029 0 16.3189 0ZM21.2031 15.6093C21.2031 18.1854 19.0121 20.2812 16.3189 20.2812H6.68114C3.98794 20.2812 1.79688 18.1854 1.79688 15.6094V6.39066C1.79688 3.81455 3.98794 1.71875 6.68114 1.71875H16.3189C19.0121 1.71875 21.2031 3.81455 21.2031 6.39066V15.6093Z\" fill=\"white\"/>\n        <path d=\"M11.5 5.07031C8.08171 5.07031 5.30078 7.73034 5.30078 11C5.30078 14.2697 8.08171 16.9297 11.5 16.9297C14.9183 16.9297 17.6992 14.2697 17.6992 11C17.6992 7.73034 14.9183 5.07031 11.5 5.07031ZM11.5 15.2109C9.07256 15.2109 7.09766 13.3219 7.09766 11C7.09766 8.6781 9.07256 6.78906 11.5 6.78906C13.9274 6.78906 15.9023 8.6781 15.9023 11C15.9023 13.3219 13.9274 15.2109 11.5 15.2109Z\" fill=\"white\"/>\n        <path d=\"M17.7891 5.84375C18.2853 5.84375 18.6875 5.45899 18.6875 4.98438C18.6875 4.50976 18.2853 4.125 17.7891 4.125C17.2929 4.125 16.8906 4.50976 16.8906 4.98438C16.8906 5.45899 17.2929 5.84375 17.7891 5.84375Z\" fill=\"white\"/>\n        </symbol>\n    </svg>\n    <div class=\"slider-content\">\n        <div class=\"header-wrapper\">\n          <div class=\"header\">\n            <div class=\"menu-wrapper\" (click)=\"menuToggle()\">\n              <div class=\"menu-hamburger\"></div>\n              <div class=\"logo\">WE BUILD</div>\n            </div>\n            <div class=\"nav-wrapper\">\n              <nav>\n                <ul>\n                    <li><a href=\"#/\" class=\"active\">Home</a></li>\n                    <li><a href=\"#/reham\">Reham Profile</a></li>\n                    <li><a href=\"#/ismael\">Ismael Profile</a></li>\n                    <li><a href=\"#/blog\">Blog</a></li>\n                </ul>\n              </nav>\n            </div>\n          </div>\n        </div>\n      <div class=\"slider-wrapper\">\n        <div class=\"slider-container\"> \n          <div class=\"control-nav\">\n            <ul>\n              <li class=\"active\"><span class=\"line\"></span><span class=\"number\">1</span></li>\n              <li><span class=\"line\"></span><span class=\"number\">2</span></li>\n              <li><span class=\"line\"></span><span class=\"number\">3</span></li>\n              <li><span class=\"line\"></span><span class=\"number\">4</span></li>\n            </ul>\n          </div>\n         <div class=\"lines-wrapper\">\n           <div class=\"croses\">\n             <span>+</span>\n             <span>+</span>\n             <span>+</span>\n             <span>+</span>\n           </div>\n           <span class=\"vertical\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n          </div>\n          <div class=\"image-mask\">\n            <img class=\"\" src=\"\" alt=\"\" />\n          </div>\n          <div class=\"slide active red\" data-order=\"1\" data-color=\"#000\" data-img=\"\">\n            <div class=\"fake-bg red\"></div>\n            <canvas class=\"canvas\" data-image=\"../assets/sales-company.jpg\"></canvas>\n            <div class=\"slide-content \">\n               <div class=\"image-caption\">\n                 <span class=\"line\"></span>\n                 <span>Think Big Start Small !</span>\n                </div>\n              <div class=\"title-background\">\n                <span class=\"mask-wrap\">\n                    <span class=\"mask\">We Build .Com</span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Blog</span>\n                  </span>\n              </div>\n              <div class=\"title-wrapper\">\n                <h1>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">We Build </span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Blog</span>\n                  </span>\n                  <span class=\"mask-wrap content-paragraph\"> <span class=\"mask\">{{ page?.description_ }}</span></span>\n                </h1>\n              </div>\n            </div>\n          </div>\n         <div class=\"slide blue\" data-order=\"2\" data-color=\"#EE4654\" data-img=\"\">\n            <div class=\"fake-bg blue\"></div>\n            <canvas class=\"canvas\" data-image=\"\"></canvas>\n            <div class=\"slide-content \">\n              <div class=\"image-caption\">\n                 <span class=\"line\"></span>\n                  <span>Project Management</span>\n                </div>\n              <div class=\"title-background\">\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Ismael</span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Al-Akhras</span>\n                  </span>\n              </div>\n              <div class=\"title-wrapper\">\n                <h1>\n                   <span class=\"mask-wrap\">\n                    <span class=\"mask\">Ismael</span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Al-Akhras</span>\n                  </span>\n                   <span class=\"mask-wrap content-paragraph\"> <span class=\"mask\">{{ page?.ismael_description_home }}</span></span>\n                </h1>\n              </div>\n            </div>\n          </div>\n         <div class=\"slide green\" data-order=\"3\" data-color=\"#f96666\" data-img=\"\">\n            <div class=\"fake-bg green\"></div>\n            <canvas class=\"canvas\" data-image=\"\"></canvas>\n            <div class=\"slide-content \">\n              <div class=\"image-caption\">\n                 <span class=\"line\"></span>\n                  <span>Front-End Develpment</span>\n                </div>\n              <div class=\"title-background\">\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Reham</span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Habbas</span>\n                  </span>\n              </div>\n              <div class=\"title-wrapper\">\n                <h1>\n                   <span class=\"mask-wrap\">\n                    <span class=\"mask\">Reham</span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Habbas</span>\n                  </span>\n                   <span class=\"mask-wrap content-paragraph\"> <span class=\"mask\">{{ page?.reham_description_home }}</span></span>\n                </h1>\n              </div>\n            </div>\n          </div>\n          <div class=\"slide grey\" data-order=\"4\" data-color=\"#bcbcbc\" data-img=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/kate-moss-color.png\">\n            <div class=\"fake-bg grey\"></div>\n            <canvas class=\"canvas\" data-image=\"\"></canvas>\n            <div class=\"slide-content\">\n            <div class=\"image-caption\">\n                 <span class=\"line\"></span>\n                  <span>Featured Blog Posts</span>\n                </div>\n              <div class=\"title-background\">\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">We</span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Blog</span>\n                  </span>\n              </div>\n              <div class=\"title-wrapper mask4\">\n                <h1>\n                   <span class=\"mask-wrap\">\n                    <span class=\"mask\">We Blog</span>\n                  </span>\n                  <span class=\"mask-wrap content-paragraph\"> <span class=\"mask\">{{ page?.weblog_description_home }}</span></span>\n                </h1>\n              </div>\n              <div class=\"slide-content txt mt-4\">\n                <div class=\"txt-wrapper\">\n                  <ul>\n                    <li *ngFor=\"let post of posts; let i=index\">\n                    <a [routerLink]=\"['/blog/'+post.slug]\" *ngIf=\"i < 4\">\n                      <div class=\"date-wrapper\">\n                        <div class=\"date\">{{post.published | date: 'dd' }}</div>\n                        <div class=\"month\">{{post.published | date: 'MMMM' }}</div>\n                      </div>\n                      <div class=\"post-wrapper\">\n                        <div class=\"post-title\">{{post.title}}</div>\n                        <div class=\"post-info\">\n                          <ul>\n                            <li>By - {{ post.author?.first_name }} /</li>\n                            <li>{{ post.categories[0]?.name }}</li>\n                          </ul>\n                        </div>\n                      </div>\n                      </a>\n                    </li>\n                  </ul>\n                  <span class=\"view-all\"><a href=\"/blog\">View all articles ></a></span> \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n        <div class=\"social-icons\">\n          <ul>\n            <li><a href=\"{{page?.twitter_link}}\" target=\"_blank\" class=\"inside\">\n               <svg id=\"twitter-icon\">\n                <use xlink:href=\"#twitter\"></use>\n              </svg>\n              </a></li>\n            <li><a href=\"{{page?.instagram_link}}\" target=\"_blank\">\n                  <svg id=\"instagram-icon\">\n                <use xlink:href=\"#instagram\"></use>\n              </svg>\n              </a></li>\n          </ul>\n      </div>\n        <div class=\"footer-wrapper\">\n          <ul>\n            <li class=\"active box\" data-id=\"1\">\n              <div class=\"hover-box\"></div>\n              <div class=\"box-content\">\n                <span>WE BUILD</span><span></span>\n              </div>\n            </li>\n            <li class=\"box\" data-id=\"2\">\n               <div class=\"hover-box\"></div>\n              <div class=\"box-content\">\n                <span>Ismael</span><span></span>\n              </div>\n            </li>\n            <li class=\"box\" data-id=\"3\" >\n              <div class=\"hover-box\"></div>\n              <div class=\"box-content\">\n              <span>Reham</span><span></span>\n              </div>\n            </li>\n            <li class=\"box\" data-id=\"4\"  >\n              <div class=\"hover-box\"></div>\n              <div class=\"box-content\">\n              <span>We Blog</span><span></span>\n              </div>\n             </li>\n          </ul>\n        </div>\n    </div>\n    </mat-card>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].page.retrieve('*', 'home-page')
            .then(function (res) {
            _this.page = res.data.data.fields;
        }).catch(function (res) {
            console.log(res);
        });
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].post.list({
            page: 1,
            page_size: 10
        }).then(function (res) {
            _this.posts = res.data.data;
        });
    };
    HomeComponent.prototype.menuToggle = function () {
        var header = document.querySelector(".header-wrapper");
        if (header.classList.contains("open")) {
            header.classList.remove("open");
        }
        else {
            header.classList.add("open");
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ismael-profile/ismael-profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ismael-profile/ismael-profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"inner\">\n    <div class=\"slider-content\">\n        <div class=\"header-wrapper\">\n          <div class=\"header\">\n            <div class=\"menu-wrapper\" (click)=\"menuToggle()\">\n              <div class=\"menu-hamburger\"></div>\n              <a href=\"#/\"><div class=\"logo\">WE BUILD</div></a>\n            </div>\n            <div class=\"nav-wrapper\">\n              <nav>\n                <ul>\n                  <li><a href=\"#/\">Home</a></li>\n                  <li><a href=\"#/reham\">Reham Profile</a></li>\n                  <li><a href=\"#/ismael\" class=\"active\">Ismael Profile</a></li>\n                  <li><a href=\"#/blog\">Blog</a></li>\n                </ul>\n              </nav>\n            </div>\n          </div>\n        </div>\n      <div class=\"slider-wrapper\">\n        <div class=\"slider-container\">\n         <div class=\"lines-wrapper\">\n           <div class=\"croses\">\n             <span>+</span>\n             <span>+</span>\n             <span>+</span>\n             <span>+</span>\n           </div>\n           <span class=\"vertical\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n          </div>\n          <div class=\"image-mask\">\n            <img class=\"\" src=\"\" alt=\"\" />\n          </div>\n         <div class=\"slide active green\" data-order=\"1\" data-color=\"#f96666\" data-img=\"\">\n            <div class=\"fake-bg green\"></div>\n            <canvas class=\"canvas\" data-image=\"\"></canvas>\n            <div class=\"slide-content \">\n              <div class=\"image-caption right\">\n                 <span class=\"line\"></span>\n                  <span>Project Managemnet</span>\n                </div>\n              <div class=\"title-background\">\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Ismael</span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Akhras</span>\n                  </span>\n              </div>\n              <div class=\"title-wrapper\">\n                <h1>\n                    <span class=\"mask-wrap my-mask-wrap\">\n                        <span class=\"mask my-mask\">Ismael</span>\n                      </span>\n                      <span class=\"mask-wrap my-mask-wrap\">\n                        <span class=\"mask my-mask\">Al-Akhras</span>\n                      </span>\n                   <span class=\"mask-wrap content-paragraph\"> <span class=\"mask\">{{page?.profile_description}}</span></span>\n                   <span class=\"mask-wrap content-paragraph\"><a (click)=\"scrollTo()\" class=\"button view-more-link\" title=\"View portfolio items\">View Projects <i class=\"fa fa-angle-down ml-4\"></i></a></span>\n                </h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"projects\" *ngIf=\"projects\">\n      <div class=\"container-fluid mb-5\">\n        <div class=\"row mt-4\">\n          <h1 class=\"col-md-12 title-main mb-5\">Ismael Projects</h1>\n          <div class=\"col-md-4 mb-5  hide-on-init\" *ngFor=\"let project of projects\" animateOnScroll animationName=\"animated zoomIn animated-delay\">\n              <a href=\"{{project?.project_url}}\" target=\"_blank\">\n                <div class=\"project-bg\" [ngStyle]=\"{'background-image':'url(' + project?.project_placeholder + ')'}\">\n                  <div class=\"overlay-text text-center p-3 hide-on-init\" animateOnScroll animationName=\"animated slideDown\" animation-duration=\"1.3s\" animation-delay=\"1s\">\n                    <h2>{{project?.project_name}}</h2>\n                    <p>{{project?.project_description}}</p>\n                  </div>\n                </div>\n              </a>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"Blog\" *ngIf=\"posts\">\n      <div class=\"container-fluid mb-5\">\n        <div class=\"row mt-4 blog-posts\">\n          <h1 class=\"col-md-12 title-main mb-5\">Ismael Blog Posts.</h1>\n          <div class=\"col-md-4 hide-on-init\" *ngFor=\"let post of posts\" animateOnScroll animationName=\"animated slideUp\" animation-duration=\"1s\" animation-delay=\"1s\">\n              <a [routerLink]=\"['/blog/'+post.slug]\">\n                <div class=\"content_div\">\n                  <img *ngIf=\"post.featured_image\" src=\"{{post.featured_image}}\" alt=\"featured image\"\n                  class=\"responsive\"/>\n              <div class=\"image-conetnt\">\n              <div class=\"blog-info hide-on-init\" animateOnScroll animationName=\"animated slideUp\" animation-duration=\"1.4s\" animation-delay=\"1s\">\n                  <h2 class=\"slideInUp\"> {{post.title}}</h2>\n                  <div class=\"more-info\">In <span class=\"diff-color\">{{ post.categories[0]?.name }}</span> By <span class=\"diff-color\">{{ post.author?.first_name }}</span> {{post.published | date: 'dd/MM/yyyy' }}</div>\n                  <p class=\"slideInUp slideInUp2\" [innerHTML]=\"post.summary\"></p>\n                  <div class=\"read-more\">\n                   <h5>Read More →</h5>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </a>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/ismael-profile/ismael-profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ismael-profile/ismael-profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzbWFlbC1wcm9maWxlL2lzbWFlbC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ismael-profile/ismael-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ismael-profile/ismael-profile.component.ts ***!
  \************************************************************/
/*! exports provided: IsmaelProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmaelProfile", function() { return IsmaelProfile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var IsmaelProfile = /** @class */ (function () {
    function IsmaelProfile() {
    }
    IsmaelProfile.prototype.ngOnInit = function () {
        var _this = this;
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].page.retrieve('*', 'ismael-profile')
            .then(function (res) {
            _this.page = res.data.data.fields;
        }).catch(function (res) {
            console.log(res);
        });
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].post.list({
            page: 1,
            page_size: 10,
            author_slug: "ismael-al-akhras"
        }).then(function (res) {
            _this.posts = res.data.data;
            console.log(res);
        });
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].content.retrieve(['projects'])
            .then(function (res) {
            _this.projects = res.data.data.projects;
            console.log(res);
        }).catch(function (res) {
            console.log(res);
        });
    };
    IsmaelProfile.prototype.scrollTo = function () {
        var x = document.querySelector("#projects");
        if (x) {
            x.scrollIntoView();
        }
    };
    IsmaelProfile.prototype.menuToggle = function () {
        var header = document.querySelector(".header-wrapper");
        if (header.classList.contains("open")) {
            header.classList.remove("open");
        }
        else {
            header.classList.add("open");
        }
    };
    IsmaelProfile = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./ismael-profile.component.html */ "./src/app/ismael-profile/ismael-profile.component.html"),
            styles: [__webpack_require__(/*! ./ismael-profile.component.scss */ "./src/app/ismael-profile/ismael-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IsmaelProfile);
    return IsmaelProfile;
}());



/***/ }),

/***/ "./src/app/reham-profile/reham-profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/reham-profile/reham-profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"inner\">\n    <div class=\"slider-content\">\n        <div class=\"header-wrapper\">\n          <div class=\"header\">\n            <div class=\"menu-wrapper\" (click)=\"menuToggle()\">\n              <div class=\"menu-hamburger\"></div>\n              <a href=\"#/\"><div class=\"logo\">WE BUILD</div></a>\n            </div>\n            <div class=\"nav-wrapper\">\n              <nav>\n                <ul>\n                  <li><a href=\"#/\">Home</a></li>\n                  <li><a href=\"#/reham\" class=\"active\">Reham Profile</a></li>\n                  <li><a href=\"#/ismael\">Ismael Profile</a></li>\n                  <li><a href=\"#/blog\">Blog</a></li>\n                </ul>\n              </nav>\n            </div>\n          </div>\n        </div>\n      <div class=\"slider-wrapper\">\n        <div class=\"slider-container\">\n         <div class=\"lines-wrapper\">\n           <div class=\"croses\">\n             <span>+</span>\n             <span>+</span>\n             <span>+</span>\n             <span>+</span>\n           </div>\n           <span class=\"vertical\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n           <span class=\"horizontal\"></span>\n          </div>\n          <div class=\"image-mask\">\n            <img class=\"\" src=\"\" alt=\"\" />\n          </div>\n         <div class=\"slide active green\" data-order=\"1\" data-color=\"#f96666\" data-img=\"\">\n            <div class=\"fake-bg green\"></div>\n            <canvas class=\"canvas\" data-image=\"\"></canvas>\n            <div class=\"slide-content \">\n              <div class=\"image-caption right\">\n                 <span class=\"line\"></span>\n                  <span>Front-End Develpment</span>\n                </div>\n              <div class=\"title-background\">\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Reham</span>\n                  </span>\n                  <span class=\"mask-wrap\">\n                    <span class=\"mask\">Habbas</span>\n                  </span>\n              </div>\n              <div class=\"title-wrapper\">\n                <h1>\n                   <span class=\"mask-wrap my-mask-wrap\">\n                    <span class=\"mask my-mask\">Reham</span>\n                  </span>\n                  <span class=\"mask-wrap my-mask-wrap\">\n                    <span class=\"mask my-mask\">Habbas</span>\n                  </span>\n                   <span class=\"mask-wrap content-paragraph\"> <span class=\"mask\">{{page?.profile_description}}</span></span>\n                   <span class=\"mask-wrap content-paragraph\"><a (click)=\"scrollTo()\" class=\"button view-more-link\" title=\"View portfolio items\">View Projects <i class=\"fa fa-angle-down ml-4\"></i></a></span>\n                </h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"projects\" *ngIf=\"projects\">\n      <div class=\"container-fluid mb-5\">\n        <div class=\"row mt-4\">\n          <h1 class=\"col-md-12 title-main mb-5\">Reham Projects</h1>\n          <div class=\"col-md-4 mb-5  hide-on-init\" *ngFor=\"let project of projects\" animateOnScroll animationName=\"animated zoomIn animated-delay\">\n            <a href=\"{{project?.project_url}}\" target=\"_blank\">\n              <div class=\"project-bg\" [ngStyle]=\"{'background-image':'url(' + project?.project_placeholder + ')'}\">\n                <div class=\"overlay-text text-center p-3 hide-on-init\" animateOnScroll animationName=\"animated slideDown\" animation-duration=\"1.3s\" animation-delay=\"1s\">\n                  <h2>{{project?.project_name}}</h2>\n                  <p>{{project?.project_description}}</p>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"Blog\" *ngIf=\"posts\">\n      <div class=\"container-fluid mb-5\">\n        <div class=\"row mt-4 blog-posts\">\n          <h1 class=\"col-md-12 title-main mb-5\">Reham Blog Posts.</h1>\n          <div class=\"col-md-4 hide-on-init\" *ngFor=\"let post of posts\" animateOnScroll animationName=\"animated slideUp\" animation-duration=\"1s\" animation-delay=\"1s\">\n              <a [routerLink]=\"['/blog/'+post.slug]\">\n                <div class=\"content_div\">\n                  <img *ngIf=\"post.featured_image\" src=\"{{post.featured_image}}\" alt=\"featured image\"\n                  class=\"responsive\"/>\n              <div class=\"image-conetnt\">\n              <div class=\"blog-info hide-on-init\" animateOnScroll animationName=\"animated slideUp\" animation-duration=\"1.4s\" animation-delay=\"1s\">\n                  <h2 class=\"slideInUp\"> {{post.title}}</h2>\n                  <div class=\"more-info\">In <span class=\"diff-color\">{{ post.categories[0]?.name }}</span> By <span class=\"diff-color\">{{ post.author?.first_name }}</span> {{post.published | date: 'dd/MM/yyyy' }}</div>\n                  <p class=\"slideInUp slideInUp2\" [innerHTML]=\"post.summary\"></p>\n                  <div class=\"read-more\">\n                   <h5>Read More →</h5>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </a>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/reham-profile/reham-profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/reham-profile/reham-profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlaGFtLXByb2ZpbGUvcmVoYW0tcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reham-profile/reham-profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reham-profile/reham-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: RehamProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RehamProfile", function() { return RehamProfile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var RehamProfile = /** @class */ (function () {
    function RehamProfile() {
    }
    RehamProfile.prototype.ngOnInit = function () {
        var _this = this;
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].page.retrieve('*', 'reham-profile')
            .then(function (res) {
            _this.page = res.data.data.fields;
        }).catch(function (res) {
            console.log(res);
        });
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].post.list({
            page: 1,
            page_size: 10,
            author_slug: "reham-habbas"
        }).then(function (res) {
            _this.posts = res.data.data;
            console.log(res);
        });
        _services__WEBPACK_IMPORTED_MODULE_2__["butterService"].content.retrieve(['reham_projects'])
            .then(function (res) {
            _this.projects = res.data.data.reham_projects;
            console.log(res);
        }).catch(function (res) {
            console.log(res);
        });
    };
    RehamProfile.prototype.scrollTo = function () {
        var x = document.querySelector("#projects");
        if (x) {
            x.scrollIntoView();
        }
    };
    RehamProfile.prototype.menuToggle = function () {
        var header = document.querySelector(".header-wrapper");
        if (header.classList.contains("open")) {
            header.classList.remove("open");
        }
        else {
            header.classList.add("open");
        }
    };
    RehamProfile = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./reham-profile.component.html */ "./src/app/reham-profile/reham-profile.component.html"),
            styles: [__webpack_require__(/*! ./reham-profile.component.scss */ "./src/app/reham-profile/reham-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RehamProfile);
    return RehamProfile;
}());



/***/ }),

/***/ "./src/app/services/butterCMS.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/butterCMS.service.ts ***!
  \***********************************************/
/*! exports provided: butterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "butterService", function() { return butterService; });
/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buttercms */ "./node_modules/buttercms/lib/butter.js");
/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buttercms__WEBPACK_IMPORTED_MODULE_0__);

var butterService = buttercms__WEBPACK_IMPORTED_MODULE_0__('580133480235ce7310dd7826d1a52ce43a353cf8');
// replace `your_api_token` with the token provided to you by ButterCMS


/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: butterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _butterCMS_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butterCMS.service */ "./src/app/services/butterCMS.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "butterService", function() { return _butterCMS_service__WEBPACK_IMPORTED_MODULE_0__["butterService"]; });




/***/ }),

/***/ "./src/app/shared/app-material.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/app-material.module.ts ***!
  \***********************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");


























var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"]
            ],
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-material.module */ "./src/app/shared/app-material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return _app_material_module__WEBPACK_IMPORTED_MODULE_0__["AppMaterialModule"]; });




/***/ }),

/***/ "./src/app/topnav/topnav.component.html":
/*!**********************************************!*\
  !*** ./src/app/topnav/topnav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row class=\"equal_column_spacer\">\n        <div>\n            <button mat-menu-item (click)=\"item.click()\" *ngFor=\"let item of topNav.home\">\n                <mat-icon\n                        *ngIf=\"item.icon\">\n                    {{item.icon}}\n                </mat-icon>\n            </button>\n        </div>\n        <nav>\n            <ul>\n                <li *ngFor=\"let item of topNav.commonItems\">\n                    <button mat-button (click)=\"item.click()\">\n                        <mat-icon\n                                *ngIf=\"item.icon\">\n                            {{item.icon}}\n                        </mat-icon>\n                        <span class=\"d-none d-md-inline\">{{item.textContent}}</span>\n                    </button>\n                </li>\n            </ul>\n        </nav>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n\n\n"

/***/ }),

/***/ "./src/app/topnav/topnav.component.scss":
/*!**********************************************!*\
  !*** ./src/app/topnav/topnav.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none; }\n\nli {\n  display: inline;\n  align-items: right;\n  font-size: 12px;\n  cursor: pointer; }\n\nli::after {\n    content: '|';\n    padding: 5px; }\n\nli:last-child::after {\n    content: ''; }\n\n.equal_column {\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWhhbWhhYmJhcy9Eb2N1bWVudHMvYnVpbGQvV2VfQnVpbGQvc3JjL2FwcC90b3BuYXYvdG9wbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixnQkFBZSxFQVFsQjs7QUFaRDtJQU1RLGFBQVk7SUFDWixhQUFZLEVBQ2Y7O0FBUkw7SUFVUSxZQUFXLEVBQ2Q7O0FBR0w7RUFDSSxjQUFhO0VBQ2IsK0JBQThCLEVBQ2pDIiwiZmlsZSI6InNyYy9hcHAvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BiYXItcGFkZGluZy10b3A6IDE1cHg7XG4kdG9wYmFyLXBhZGRpbmctcmlnaHQ6IDIwcHg7XG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBhbGlnbi1pdGVtczogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICd8JztcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQ6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgfVxufVxuXG4uZXF1YWxfY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/topnav/topnav.component.ts":
/*!********************************************!*\
  !*** ./src/app/topnav/topnav.component.ts ***!
  \********************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(router) {
        this.router = router;
    }
    TopnavComponent.prototype.ngOnInit = function () {
        this.createTopNavItems();
    };
    TopnavComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TopnavComponent.prototype.createTopNavItems = function () {
        var _this = this;
        this.topNav = {
            home: [
                {
                    textContent: 'Home',
                    icon: 'home',
                    svg: true,
                    click: function () { return _this.gotoHome(); }
                }
            ],
            commonItems: [
                {
                    textContent: 'Customer',
                    icon: undefined,
                    click: function () { return _this.gotoCustomer(); }
                },
                {
                    textContent: 'FAQ',
                    icon: undefined,
                    click: function () { return _this.gotoFaq(); }
                },
                {
                    textContent: 'Blog Posts',
                    icon: undefined,
                    click: function () { return _this.gotoBlogPosts(); }
                },
                {
                    textContent: 'RSS, Atom & Sitemap',
                    icon: undefined,
                    click: function () { return _this.gotoMisc(); }
                }
            ]
        };
    };
    TopnavComponent.prototype.gotoHome = function () {
        this.router.navigate(["/home"]);
    };
    TopnavComponent.prototype.gotoCustomer = function () {
        this.router.navigate(["/customer"]);
    };
    TopnavComponent.prototype.gotoFaq = function () {
        this.router.navigate(["/faq"]);
    };
    TopnavComponent.prototype.gotoBlogPosts = function () {
        this.router.navigate(["/blog"]);
    };
    TopnavComponent.prototype.gotoMisc = function () {
        this.router.navigate(["/rss"]);
    };
    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.scss */ "./src/app/topnav/topnav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rehamhabbas/Documents/build/We_Build/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map