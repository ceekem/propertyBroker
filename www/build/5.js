webpackJsonp([5],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_common__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_manager_user_manager__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(common, camera, navParams, ev, userManager, navCtrl) {
        this.common = common;
        this.camera = camera;
        this.navParams = navParams;
        this.ev = ev;
        this.userManager = userManager;
        this.navCtrl = navCtrl;
        this.frmVArray = ['', '', '', '', '', ''];
        this.frmData = {
            fullname: 'Guest',
            phone_number: "(123) 456-7890",
            email: "demo@gmail.com",
            office: "Fl",
            company_info: "",
            brokerrage_address: '514 S. Magnolia St. Orlando, FL 32806',
            license: '987123456',
        };
    }
    //-----------------------
    ProfilePage.prototype.autoValidate = function (index, value) {
        if (value != '') {
            this.frmVArray[index] = '';
        }
        else {
            this.frmVArray[index] = 'ngR';
        }
    };
    ProfilePage.prototype.frmSubmit = function () {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var chk = re.test(String(this.frmData.email).toLowerCase());
        this.frmVArray = ['', '', '', '', '', ''];
        var isValid = true;
        if (this.frmData.fullname == '')
            this.frmVArray[0] = 'ngR';
        if (this.frmData.email == '')
            this.frmVArray[1] = 'ngR';
        else if (!chk) {
            this.common.showToast('This is not a valid email');
        }
        if (this.frmData.phone_number == '')
            this.frmVArray[2] = 'ngR';
        //    if(this.frmData.brokerrage_address=='') this.frmVArray[3]   = 'ngR';
        if (this.frmData.license == '')
            this.frmVArray[4] = 'ngR';
        for (var i = 0; i < this.frmVArray.length; i++) {
            if (this.frmVArray[i] != '')
                isValid = false;
        }
        if (isValid) {
            this.common.showLoading();
            console.log(this.frmData);
            this.common.showAlert('Your profile has been updated');
            this.common.hideLoading();
        }
    };
    ProfilePage.prototype.notification = function () {
        this.navCtrl.setRoot('NotificationPage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle> <ion-icon name="menu"></ion-icon> </button>\n    <ion-title>Profile</ion-title>\n     <ion-buttons end>\n      <button ion-button icon-only (click)="notification()">\n        <ion-icon name="notifications-outline"><ion-badge *ngIf="notificationCount>0">{{notificationCount}}</ion-badge></ion-icon>\n      </button> \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="commonBackground">\n\n  <form (ngSubmit)="frmSubmit()">\n    <ion-list no-lines>\n      <ion-item [ngClass]="frmVArray[0]">\n       <ion-input  name="fullname" placeholder="Full Name"\n       (ionChange)="autoValidate(0,frmData.fullname)" [(ngModel)]="frmData.fullname" ></ion-input>\n     </ion-item>\n\n     <ion-item [ngClass]="frmVArray[1]">\n      <ion-input  name="email" placeholder="Email Address" (ionChange)="autoValidate(1,frmData.email)" [(ngModel)]="frmData.email" ></ion-input>\n    </ion-item>\n\n        <ion-item [ngClass]="frmVArray[2]">\n         <ion-input type="text"\n         [brmasker]="{mask:\'(000) 000-0000\', len:14}"\n         name="phone_number" (ionChange)="autoValidate(2,frmData.phone_number)" placeholder="Mobile Number" [(ngModel)]="frmData.phone_number"></ion-input>\n        </ion-item>\n\n        <ion-item [ngClass]="frmVArray[3]">\n         <ion-textarea  name="brokerrage_address" placeholder="Brokerage Address" [(ngModel)]="frmData.brokerrage_address" ></ion-textarea>\n        </ion-item>\n\n        <ion-item [ngClass]="frmVArray[4]">\n         <ion-input  type="number" name="license" placeholder="License Number" [(ngModel)]="frmData.license" ></ion-input>\n        </ion-item>\n\n    </ion-list>\n  <button ion-button block round>Update</button>\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_manager_user_manager__["a" /* UserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=5.js.map