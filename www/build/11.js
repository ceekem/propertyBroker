webpackJsonp([11],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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

/***/ })

});
//# sourceMappingURL=11.js.map