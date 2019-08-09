webpackJsonp([2],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_manager_user_manager__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, storage, userManager, common) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userManager = userManager;
        this.common = common;
        this.frmVArray = ['', '', '', '', '', '', '', ''];
        this.frmData = {
            fullname: "",
            username: "",
            brokerage: "",
            agency: "",
            brokerrage_address: '',
            license: '',
            phone_number: "", email: "", password: "", confirm_password: "", device_token: ''
        };
        this.commFields = { brokeragerange: [], agencies: [] };
        this.storage.get("device_token").then(function (data) {
            if (data != null && data != '') {
                _this.frmData.device_token = data;
            }
        });
    }
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    RegisterPage.prototype.goToForgot = function () {
        this.navCtrl.push('ForgotpasswordPage');
    };
    RegisterPage.prototype.frmSubmit = function () {
        //console.log(this.frmData);
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var chk = re.test(String(this.frmData.email).toLowerCase());
        this.frmVArray = ['', '', '', '', '', '', '', ''];
        var isValid = true;
        if (this.frmData.fullname == '')
            this.frmVArray[0] = 'ngR';
        if (this.frmData.email == '')
            this.frmVArray[1] = 'ngR';
        if (this.frmData.phone_number == '')
            this.frmVArray[2] = 'ngR';
        if (this.frmData.brokerrage_address == '')
            this.frmVArray[3] = 'ngR';
        if (this.frmData.license == '')
            this.frmVArray[4] = 'ngR';
        if (this.frmData.password == '')
            this.frmVArray[5] = 'ngR';
        if (this.frmData.confirm_password == '')
            this.frmVArray[6] = 'ngR';
        for (var i = 0; i < this.frmVArray.length; i++) {
            if (this.frmVArray[i] != '')
                isValid = false;
        }
        if (this.frmData.fullname == '' || this.frmData.email == '' || this.frmData.password == '' || this.frmData.phone_number == '' || this.frmData.brokerrage_address == '') {
            this.common.showToast('Please fill all required field');
        }
        else if (!chk) {
            this.common.showToast('This is not a valid email');
        }
        else if (this.frmData.password !== this.frmData.confirm_password) {
            this.common.showToast('Password and confirm password should be same');
        }
        else {
            this.common.showLoading();
            this.common.showAlert('Successful Registered');
            this.navCtrl.setRoot('LoginPage');
            this.common.hideLoading();
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\register\register.html"*/'<!-- <ion-header>\n  <ion-navbar >\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="redBackground">\n\n  <div class="logo" text-center>\n    <img src="assets/dummy-logo.png">\n  </div>\n\n  <form (ngSubmit)="frmSubmit()">\n  <ion-list no-lines>\n    <ion-item [ngClass]="frmVArray[0]">\n     <ion-input  name="fullname" placeholder="Full Name" [(ngModel)]="frmData.fullname" ></ion-input>\n    </ion-item>\n\n    <ion-item [ngClass]="frmVArray[1]">\n      <ion-input type="text"  name="email"  placeholder="Email Address"  [(ngModel)]="frmData.email"></ion-input>\n    </ion-item>\n\n    <ion-item [ngClass]="frmVArray[2]">\n     <ion-input\n     type="text"\n     [brmasker]="{mask:\'(000) 000-0000\', len:14}"\n     name="phone_number" placeholder="Phone Number" [(ngModel)]="frmData.phone_number"></ion-input>\n    </ion-item>\n\n    <ion-item [ngClass]="frmVArray[4]">\n     <ion-textarea  name="brokerrage_address" placeholder="Brokerage Address" [(ngModel)]="frmData.brokerrage_address" ></ion-textarea>\n    </ion-item>\n\n    <ion-item [ngClass]="frmVArray[5]">\n     <ion-input  type="number" name="license" placeholder="License Number" [(ngModel)]="frmData.license" ></ion-input>\n    </ion-item>\n\n    <ion-item [ngClass]="frmVArray[7]">\n      <ion-input type="password" name="password"  placeholder="Password" [(ngModel)]="frmData.password"></ion-input>\n    </ion-item>\n\n    <ion-item [ngClass]="frmVArray[8]">\n      <ion-input type="password" name="confirm_password"   placeholder="Confirm Password" [(ngModel)]="frmData.confirm_password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button block>Submit</button>\n</form>\n<button ion-button clear block  color="light" (click)="goToLogin()">Login</button>\n<button ion-button clear text-right color="light" outline block (click)="goToForgot()" >Forgot Password?</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_manager_user_manager__["a" /* UserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=2.js.map