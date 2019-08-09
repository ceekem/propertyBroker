webpackJsonp([7],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDetailPageModule", function() { return NotificationDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_detail__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationDetailPageModule = (function () {
    function NotificationDetailPageModule() {
    }
    NotificationDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification_detail__["a" /* NotificationDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification_detail__["a" /* NotificationDetailPage */]),
            ],
        })
    ], NotificationDetailPageModule);
    return NotificationDetailPageModule;
}());

//# sourceMappingURL=notification-detail.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationDetailPage = (function () {
    function NotificationDetailPage(navCtrl, navParams, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.notificationData = this.navParams.get('notificationData');
        console.log(this.notificationData);
    }
    NotificationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationDetailPage');
    };
    NotificationDetailPage.prototype.close = function () { this.navCtrl.pop(); };
    NotificationDetailPage.prototype.callMember = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    NotificationDetailPage.prototype.goToProperty = function (pObj) {
        this.navCtrl.push('PropertyDetailPage', { propertydata: pObj });
    };
    NotificationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification-detail',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\notification-detail\notification-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detail</ion-title>\n      <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n         <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="commonBackground">\n  <h5 class="header">Name</h5>\n  <p>{{notificationData.fullname}}</p>\n  <h5 class="header">Email</h5>\n  <p>{{notificationData.email}}</p>\n  <h5 class="header">Date & Time</h5>\n  <p> {{notificationData.meeting_date}} & {{notificationData.meeting_time}}</p>\n  <h5 class="header">Message</h5>\n  <p>{{notificationData.note}}\n    <button ion-button outline (click)="goToProperty(notificationData.property)" end>Detail</button>\n  </p>\n\n  <button class="callicon" ion-fab (click)="callMember(notificationData.phone)"><ion-icon name="ios-call"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\notification-detail\notification-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], NotificationDetailPage);
    return NotificationDetailPage;
}());

//# sourceMappingURL=notification-detail.js.map

/***/ })

});
//# sourceMappingURL=7.js.map