webpackJsonp([6],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationPageModule = (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_manager_user_manager__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationPage = (function () {
    function NotificationPage(navCtrl, storage, userManager, common, alertCtrl, ev, callNumber, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.userManager = userManager;
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.ev = ev;
        this.callNumber = callNumber;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.isRecAvailable = true;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isRecAvailable = true;
        this.paged = 1;
        var result;
        var postData = { page: this.paged, limit: 20 };
        this.common.showLoading();
        this.userManager.getAppointment(postData)
            .then(function (res) {
            console.log(res);
            result = res;
            //-------------------
            if (result.status) {
                _this.listData = result.data;
                _this.paged++;
                if (_this.paged == 2) {
                    if (result.total_appointments != '' && typeof (result.total_appointments) != 'undefined') {
                        _this.storage.set("total_appointments", result.total_appointments)
                            .then(function (res) {
                            _this.ev.publish('check_appointments', result.total_appointments);
                            _this.ev.publish('clearNotification', {});
                        });
                    }
                }
            }
            else {
                _this.isRecAvailable = false;
                if (_this.paged == 1 && !result.loginstatus && typeof (result.loginstatus) != 'undefined') {
                    _this.storage.set("userData", '');
                    _this.navCtrl.push('LoginPage');
                    _this.common.showAlert(result.msg);
                }
            }
            _this.common.hideLoading();
            //--------------------
        }, function (err) {
            if (_this.paged == 1)
                _this.isRecAvailable = false;
            _this.common.hideLoading();
            _this.common.showError(err);
        });
    };
    NotificationPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        //console.log('ref',ref);
        this.listData = [];
        var result;
        this.paged = 1;
        this.isRecAvailable = true;
        this.infiniteScrollComplete = false;
        var postData = { page: this.paged, limit: 20 };
        this.userManager.getAppointment(postData).then(function (res) {
            result = res;
            if (result.status) {
                _this.paged++;
                _this.listData = _this.listData.concat(result.data);
            }
            else {
                _this.isRecAvailable = false;
                _this.infiniteScrollComplete = true;
            }
            refresher.complete();
        }, function (err) {
            refresher.complete();
            if (_this.paged == 1)
                _this.isRecAvailable = false;
            _this.common.showError(err);
        });
    };
    NotificationPage.prototype.callMember = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    NotificationPage.prototype.goToNotification = function (notificationData) {
        var notificationModal = this.modalCtrl.create('NotificationDetailPage', { notificationData: notificationData });
        notificationModal.present();
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\notification\notification.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Appointments</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="commonBackground">\n  \n     <ion-refresher (ionRefresh)="doRefresh($event);" >\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher> \n    <!-- <div class="noResult" >No Result Found <p>Pull Down screen to refresh.</p></div>\n   -->\n    <ion-list >\n        <ion-list *ngFor="let obj of listData; let i=index">\n         \n                <ion-item text-wrap >\n                  <h2>{{obj.fullname}}</h2>\n                  <p>{{obj.meeting_date}}({{obj.meeting_time}})</p>\n                  <button ion-button outline (click)="goToNotification(obj)" item-end>View</button>\n                </ion-item>\n        </ion-list>\n    </ion-list>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_manager_user_manager__["a" /* UserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=6.js.map