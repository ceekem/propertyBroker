webpackJsonp([14],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordPageModule = (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_common__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
        this.frmData = { old_password: "", new_password: "", confirm_new_password: "" };
    }
    ChangePasswordPage.prototype.frmSubmit = function () {
        if (this.frmData.old_password == '' || this.frmData.new_password == '') {
            this.common.showAlert('All fields are required fields.');
        }
        else {
            if (this.frmData.new_password != this.frmData.confirm_new_password) {
                this.common.showToast('New password and confirm password should be same');
            }
            else {
                this.common.showLoading();
                this.common.showAlert('You password has been changed');
                this.frmData = { old_password: "", new_password: "", confirm_new_password: "" };
                this.common.hideLoading();
            }
        }
    };
    ChangePasswordPage.prototype.notification = function () {
        this.navCtrl.setRoot('NotificationPage');
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\change-password\change-password.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Change Password</ion-title>\n     <ion-buttons end>\n      <button ion-button icon-only (click)="notification()">\n        <ion-icon name="notifications-outline"><ion-badge *ngIf="notificationCount>0">{{notificationCount}}</ion-badge></ion-icon>\n      </button> \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="commonBackground">\n  <form (ngSubmit)="frmSubmit()">\n  <ion-list no-lines>\n    <ion-item>\n    <ion-input type="password" name="old_password"  placeholder="Old Password" [(ngModel)]="frmData.old_password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n    <ion-input type="password" name="new_password"  placeholder="New Password" [(ngModel)]="frmData.new_password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n    <ion-input type="password" name="confirm_new_password"   placeholder="Confirm New Password"\n    [(ngModel)]="frmData.confirm_new_password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button block round>Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\change-password\change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=14.js.map