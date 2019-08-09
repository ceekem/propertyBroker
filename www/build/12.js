webpackJsonp([12],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpasswordPageModule = (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */]),
            ],
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());

//# sourceMappingURL=forgotpassword.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_manager_user_manager__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, userManager, common) {
        this.navCtrl = navCtrl;
        this.userManager = userManager;
        this.common = common;
        this.frmData = { email: '', token: '' };
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
    };
    ForgotpasswordPage.prototype.goToRegister = function () {
        this.navCtrl.push('RegisterPage');
    };
    ForgotpasswordPage.prototype.goToLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    ForgotpasswordPage.prototype.frmSubmit = function () {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var chk = re.test(String(this.frmData.email).toLowerCase());
        if (this.frmData.email == '') {
            this.common.showToast('Email address is required field.');
        }
        else if (!chk) {
            this.common.showToast('This is not a valid email');
        }
        else {
            this.common.showLoading();
            this.common.showAlert('Password has been sent to your mail');
            this.navCtrl.setRoot('LoginPage');
            this.common.hideLoading();
        }
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\forgotpassword\forgotpassword.html"*/'<ion-content padding class="redBackground">\n\n  <div class="logo" text-center>\n      <img src="assets/dummy-logo.png">\n  </div>\n  <form (ngSubmit)="frmSubmit()">\n    <ion-list no-lines>\n      <ion-item>\n        <ion-input type="text"  name="email"  placeholder="Email Address"  [(ngModel)]="frmData.email"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button round block>Submit</button>\n  </form>\n  \n        <button ion-button clear block color="light" (click)="goToLogin()" >Login</button>\n\n        <button ion-button clear block color="light" outline (click)="goToRegister()" end> Register</button>    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_manager_user_manager__["a" /* UserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ })

});
//# sourceMappingURL=12.js.map