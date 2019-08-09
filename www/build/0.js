webpackJsonp([0],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterProfileimgPageModule", function() { return RegisterProfileimgPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_profileimg__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterProfileimgPageModule = (function () {
    function RegisterProfileimgPageModule() {
    }
    RegisterProfileimgPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_profileimg__["a" /* RegisterProfileimgPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_profileimg__["a" /* RegisterProfileimgPage */]),
            ],
        })
    ], RegisterProfileimgPageModule);
    return RegisterProfileimgPageModule;
}());

//# sourceMappingURL=register-profileimg.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_property__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(199);
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





var HomePage = (function () {
    function HomePage(navCtrl, common, alertCtrl, userManager, propertyManager, modalCtrl, platform, ev, menu, navParams) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.userManager = userManager;
        this.propertyManager = propertyManager;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.ev = ev;
        this.menu = menu;
        this.navParams = navParams;
        this.menu.enable(true);
        this.filterData = [];
        this.savedSearchData = [];
        this.isRecAvailable = true;
        this.paged = 1;
        this.propertyStatus = 'publish';
        this.infiniteScrollComplete = false;
        this.showListing();
    }
    HomePage.prototype.getFomatedPrice = function (n) {
        //n = n.toFixed(2);
        return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    HomePage.prototype.showListing = function () {
        var _this = this;
        this.paged = 1;
        if (this.paged == 1)
            this.propertyData = [];
        this.isRecAvailable = true;
        this.infiniteScrollComplete = false;
        this.propertyManager.getListing(this.paged, this.propertyStatus)
            .then(function (res) {
            _this.result = res;
            _this.propertyData = _this.propertyData.concat(_this.result.data);
        }, function (err) {
            if (_this.paged == 1)
                _this.isRecAvailable = false;
            _this.common.showError(err);
        });
    };
    HomePage.prototype.doInfinite = function (inifinteScroll) {
        var _this = this;
        if (this.paged == 1)
            this.propertyData = [];
        this.propertyManager.getListing(this.paged, this.propertyStatus).then(function (res) {
            _this.result = res;
            if (_this.result.status) {
                _this.paged++;
                _this.propertyData = _this.propertyData.concat(_this.result.data);
                inifinteScroll.complete();
            }
            else {
                _this.infiniteScrollComplete = true;
            }
        }, function (err) {
            _this.infiniteScrollComplete = true;
            _this.common.showError(err);
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.propertyData = [];
        this.propertyManager.getListing(this.paged, this.propertyStatus).then(function (res) {
            _this.result = res;
            if (_this.result.status) {
                _this.propertyData = _this.result.data;
            }
            else {
                // no data
            }
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.common.showError(err);
        });
    };
    HomePage.prototype.filterListing = function (tabType, audioObj) {
        this.propertyStatus = tabType;
        this.showListing();
    };
    HomePage.prototype.viewDetail = function (pobj) {
        this.navCtrl.push('PropertyDetailPage', { propertydata: pobj });
    };
    HomePage.prototype.editProperty = function (pobj, slidingItem) {
        slidingItem.close();
        this.navCtrl.push('PropertyFormPage', { pobj: pobj });
    };
    HomePage.prototype.removeProperty = function (pobj, index, slidingItem) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Information',
            message: 'Do you want to delete this property?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.common.showLoading();
                        _this.common.showAlert('Property has been removed');
                        _this.common.hideLoading();
                    }
                }
            ]
        });
        confirm.present();
    };
    //---Add property page ---
    HomePage.prototype.addPropertyPage = function () {
        this.navCtrl.push('PropertyFormPage');
    };
    //------------------
    HomePage.prototype.notification = function () {
        this.navCtrl.setRoot('NotificationPage');
    };
    HomePage.prototype.goToMapview = function () {
        this.navCtrl.push('ListingMapviewPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Properties</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToMapview()">\n        <ion-icon name="pin"></ion-icon>\n     </button>\n     <button ion-button icon-only (click)="addPropertyPage()">\n      <ion-icon name="add"></ion-icon>\n   </button>\n   <button ion-button icon-only (click)="notification()">\n        <ion-icon name="notifications-outline"><ion-badge *ngIf="notificationCount>0">{{notificationCount}}</ion-badge></ion-icon>\n      </button> \n    </ion-buttons>\n  </ion-navbar>\n  <!-- subheader section -->\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="propertyStatus"\n    (ionChange)="filterListing(propertyStatus,audioTrack);" color="light">\n      <ion-segment-button value="publish">Published</ion-segment-button>\n      <ion-segment-button value="draft">Unpublished</ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event);" >\n      <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class="noResult" *ngIf="!isRecAvailable">\n    {{propertyStatus==\'publish\' ? \'Alert! You have not uploaded a home in the last 72 hours!\' : \'No Record Found.\'}}\n\n     <p>Pull Down screen to refresh.</p></div>\n     <div [ngSwitch]="propertyStatus" *ngFor="let pObj of propertyData; let i=index">\n       <div *ngIf="pObj.post_status ==\'publish\'">\n          <ion-card  *ngSwitchCase="\'publish\'">\n                  <ion-card-header col-6>\n                    <img src="{{pObj.thumb!=\'\'? pObj.thumb  : \'assets/imgs/no-image.jpg\'}}" (click)="viewDetail(pObj)">\n                    <button  ion-fab mini class="customFab" (click)="removeProperty(pObj)"><ion-icon name="trash"></ion-icon></button>\n                  </ion-card-header>\n                  <ion-card-content col-6 (click)="viewDetail(pObj)">\n                        <ion-card-title >{{pObj.post_title}}</ion-card-title>\n                        <p>{{getFomatedPrice(pObj.property_price)}}</p>\n                        <p>{{pObj.street_name}}</p>\n                        <p>{{pObj.property_city}}, {{pObj.property_state_ab}}, {{pObj.postal_code}}</p>\n                         <p>Sq Ft: {{pObj.property_size}}</p>  \n                  </ion-card-content>\n             \n            </ion-card>\n       </div>\n       <div *ngIf="pObj.post_status ==\'draft\'">\n          <ion-card  *ngSwitchCase="\'draft\'">\n                  <ion-card-header col-6>\n                    <img src="{{pObj.thumb!=\'\'? pObj.thumb  : \'assets/imgs/no-image.jpg\'}}" (click)="viewDetail(pObj)">\n                    <button  ion-fab mini class="customFab" (click)="removeProperty(pObj)"><ion-icon name="trash"></ion-icon></button>\n                  </ion-card-header>\n                  <ion-card-content col-6 (click)="viewDetail(pObj)">\n                        <ion-card-title >{{pObj.post_title}}</ion-card-title>\n                        <p>{{getFomatedPrice(pObj.property_price)}}</p>\n                        <p>{{pObj.street_name}}</p>\n                        <p>{{pObj.property_city}}, {{pObj.property_state_ab}}, {{pObj.postal_code}}</p>\n                         <p>Sq Ft: {{pObj.property_size}}</p>  \n                  </ion-card-content>\n            </ion-card>\n       </div>\n       <div *ngIf="pObj.post_status ==\'expired\'">\n          <ion-card  *ngSwitchCase="\'expired\'" >\n                  <ion-card-header col-6>\n                    <img src="{{pObj.thumb!=\'\'? pObj.thumb  : \'assets/imgs/no-image.jpg\'}}" (click)="viewDetail(pObj)">\n                    <button  ion-fab mini class="customFab" (click)="removeProperty(pObj)"><ion-icon name="trash"></ion-icon></button>\n                  </ion-card-header>\n                  <ion-card-content col-6 (click)="viewDetail(pObj)">\n                          <ion-card-title >{{pObj.post_title}}</ion-card-title>\n                          <p>{{getFomatedPrice(pObj.property_price)}}</p>\n                          <p>{{pObj.street_name}}</p>\n                          <p>{{pObj.property_city}}, {{pObj.property_state_ab}}, {{pObj.postal_code}}</p>\n                          <p>Sq Ft: {{pObj.property_size}}</p>  \n                   \n                  </ion-card-content>      \n            </ion-card>\n       </div>\n \n      </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_manager_user_manager__["a" /* UserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_property_property__["a" /* PropertyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProfileimgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_manager_user_manager__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterProfileimgPage = (function () {
    function RegisterProfileimgPage(navCtrl, ev, common, camera, storage, userManager, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.ev = ev;
        this.common = common;
        this.camera = camera;
        this.storage = storage;
        this.userManager = userManager;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.frmData = {
            fullname: '',
            email: "",
            phone_number: "",
            brokerrage_name: '',
            brokerrage_address: '',
            license: '',
            profile_image: "",
            is_image_update: false
        };
        var data = this.navParams.get('userData');
        this.userData = data;
        if (data != null && typeof (data) != 'undefined') {
            this.frmData.fullname = data.fullname;
            this.frmData.email = data.email;
            this.frmData.phone_number = data.phone_number;
            this.frmData.brokerrage_name = data.brokerrage_name;
            this.frmData.brokerrage_address = data.brokerrage_address;
            this.frmData.license = data.license;
            this.frmData.uauth = data.uauth;
        }
    }
    RegisterProfileimgPage.prototype.skipToHome = function () {
        //console.log('this.userData :',this.userData);
        this.ev.publish('checkRegister', '');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    //------------------------
    RegisterProfileimgPage.prototype.actionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Profile Image',
            buttons: [
                {
                    text: 'Camera',
                    //role: 'destructive',
                    handler: function () {
                        _this.captureImage(0);
                    }
                }, {
                    text: 'Library',
                    handler: function () {
                        _this.captureImage(1);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RegisterProfileimgPage.prototype.getCameraOption = function (type) {
        var source;
        switch (type) {
            case 0:
                source = this.camera.PictureSourceType.CAMERA;
                break;
            case 1:
                source = this.camera.PictureSourceType.PHOTOLIBRARY;
                break;
        }
        var options = {
            quality: 100,
            sourceType: source,
            targetWidth: 300,
            targetHeight: 400,
            saveToPhotoAlbum: false,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        return options;
    };
    RegisterProfileimgPage.prototype.captureImage = function (type) {
        var _this = this;
        this.common.showLoading();
        var options = this.getCameraOption(type);
        this.camera.getPicture(options).then(function (imageData) {
            _this.common.hideLoading();
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            var base64Image = imageData;
            //this.frmData.profile_img = base64Image;
            _this.frmData.is_image_update = true;
            _this.frmData.profile_image = 'data:image/jpeg;base64,' + base64Image;
        }, function (err) {
            _this.common.hideLoading();
            _this.common.showError(err);
        });
    };
    RegisterProfileimgPage.prototype.removeImage = function () {
        this.frmData.profile_image = '';
        this.frmData.is_image_update = true;
    };
    RegisterProfileimgPage.prototype.continue = function () {
        var _this = this;
        this.common.showLoading();
        //console.log(this.frmData);
        this.userManager.updateProfile(this.frmData)
            .then(function (res) {
            _this.common.hideLoading();
            _this.result = res;
            if (_this.result.status) {
                _this.result.data.uauth = _this.frmData.uauth;
                _this.storage.set("userData", _this.result.data).then(function () {
                    _this.ev.publish('checkRegister', _this.result.data);
                    _this.navCtrl.push('HomePage');
                });
            }
            else {
                _this.common.showToast(_this.result.msg);
            }
        }, function (err) {
            _this.common.hideLoading();
            _this.common.showError(err);
        });
    };
    RegisterProfileimgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register-profileimg',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\register-profileimg\register-profileimg.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>Profile Picture</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="profileAvtar" text-center>\n\n    <div class="removeBtn" *ngIf="frmData.profile_image" ion-button icon-only  (click)="removeImage()">\n      <ion-icon name="trash"> </ion-icon>\n    </div>\n    <img  src="{{frmData.profile_image!=\'\' ? frmData.profile_image : \'assets/imgs/no-image.jpg\' }}">\n  </div>\n\n  <button ion-button block *ngIf="!frmData.profile_image"  (click)="actionSheet()">Select Profile Picture</button>\n  <button ion-button block\n  *ngIf="frmData.profile_image"\n   (click)="continue()">Continue</button>\n  <br/>\n  <button ion-button block color="dark" outline (click)="skipToHome()">SKIP</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\register-profileimg\register-profileimg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_manager_user_manager__["a" /* UserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], RegisterProfileimgPage);
    return RegisterProfileimgPage;
}());

//# sourceMappingURL=register-profileimg.js.map

/***/ })

});
//# sourceMappingURL=0.js.map