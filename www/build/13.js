webpackJsonp([13],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplainerPageModule", function() { return ExplainerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explainer__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExplainerPageModule = (function () {
    function ExplainerPageModule() {
    }
    ExplainerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__explainer__["a" /* ExplainerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__explainer__["a" /* ExplainerPage */]),
            ],
        })
    ], ExplainerPageModule);
    return ExplainerPageModule;
}());

//# sourceMappingURL=explainer.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplainerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ExplainerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExplainerPage = (function () {
    function ExplainerPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ExplainerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExplainerPage');
    };
    ExplainerPage.prototype.startLogin = function () {
        var _this = this;
        this.storage.set("explainer", 'viewed').then(function (data) {
            _this.navCtrl.push('LoginPage');
        });
    };
    ExplainerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-explainer',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\explainer\explainer.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title>explainer</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content padding>\n\n\n  <ion-slides centeredSlides="false">\n    <ion-slide >\n      <div text-center><img src="assets/logo.png" ></div>\n      <h1>Welcome!</h1>\n      <p>This is a Property template.</p>\n      <button ion-button block (click)="startLogin()">Get Started!</button>\n    </ion-slide>\n\n    <ion-slide >\n      <div text-center><img src="assets/logo.png" ></div>\n      <h1>Important!</h1>\n      <p text-center>Lorem ipsum dummy text</p>\n      <button ion-button block (click)="startLogin()">Try It Now!</button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\explainer\explainer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ExplainerPage);
    return ExplainerPage;
}());

//# sourceMappingURL=explainer.js.map

/***/ })

});
//# sourceMappingURL=13.js.map