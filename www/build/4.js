webpackJsonp([4],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailPageModule", function() { return PropertyDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_detail__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PropertyDetailPageModule = (function () {
    function PropertyDetailPageModule() {
    }
    PropertyDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__property_detail__["a" /* PropertyDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__property_detail__["a" /* PropertyDetailPage */]),
            ],
        })
    ], PropertyDetailPageModule);
    return PropertyDetailPageModule;
}());

//# sourceMappingURL=property-detail.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyDetailPage = (function () {
    function PropertyDetailPage(navCtrl, ev, navParams, actionSheetCtrl, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.ev = ev;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.currentIndex = -1;
        this.propertyData = this.navParams.get('propertydata');
        console.log('Property Data', this.propertyData);
        this.sortdDesc = this.propertyData.post_content.split(".");
        this.fullDetail = false;
        this.propertyData.custom_desc = this.sortdDesc[0];
        //--------------------
        this.ev.subscribe('propertyUpdate', function (data) {
            //console.log('propertyUpdate : ',data);
            _this.propertyData.post_title = data.title;
            _this.propertyData.thumb = data.thumb;
            _this.propertyData.street_name = data.street_name;
            _this.propertyData.property_state = data.state;
            _this.propertyData.property_size = data.size;
            _this.propertyData.property_type = data.property_type;
            _this.propertyData.property_status = data.property_status;
            _this.propertyData.property_price = data.prop_price;
            _this.propertyData.post_content = data.description;
            _this.propertyData.property_city = data.city;
            _this.propertyData.bedrooms = data.bedrooms;
            _this.propertyData.bathrooms = data.bathrooms;
            _this.propertyData.audio_file = data.audio_file;
        });
        //--------------------
        //console.log('content :',content);
        console.log('propertyData', this.propertyData);
    }
    PropertyDetailPage.prototype.ionViewDidEnter = function () {
        this.propertyData = this.navParams.get('propertydata');
        console.log('PD', this.propertyData);
    };
    PropertyDetailPage.prototype.actionSheet = function (i) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Whatsapp',
                    handler: function () {
                        _this.whatsappShare(i);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PropertyDetailPage.prototype.whatsappShare = function (index) {
        var msg = "Property Title: " + index.post_title + "\n\r Price: $" + index.property_price + "\n\r Bedrooms: " + index.bedrooms + "\n\r Bathrooms: " + index.bathrooms;
        this.socialSharing.shareViaWhatsApp(msg, null, null);
    };
    PropertyDetailPage.prototype.getFomatedPrice = function (n) {
        return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    PropertyDetailPage.prototype.editProperty = function (pobj) {
        this.navCtrl.push('PropertyFormPage', { pobj: pobj });
    };
    PropertyDetailPage.prototype.readMore = function () {
        this.fullDetail = !this.fullDetail;
        if (this.fullDetail) {
            this.propertyData.custom_desc = this.propertyData.post_content;
        }
        else {
            this.propertyData.custom_desc = this.sortdDesc[0];
            ;
        }
    };
    PropertyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-property-detail',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\property-detail\property-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Property Detail</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editProperty(propertyData)"><ion-icon name="open"></ion-icon></button>\n      <button ion-button icon-only (click)="actionSheet(propertyData)"><ion-icon name="share"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <ion-slides pager="true">\n      <ion-slide>\n          <div class="detailImg"> <img src="{{propertyData.thumb!=\'\'? propertyData.thumb  : \'assets/imgs/no-image.jpg\'}}"></div>\n      </ion-slide>\n  \n      <ion-slide >\n          <div class="detailImg"> <img src="{{propertyData.thumb!=\'\'? propertyData.thumb  : \'assets/imgs/no-image.jpg\'}}"></div>\n      </ion-slide>\n  </ion-slides>\n  <ion-row class="" style="width:100%;padding:0 3%;">\n      <ion-col text-left col-8>\n          <h1>{{propertyData.post_title}}</h1>\n      </ion-col>\n      <ion-col text-right col-4 class="price"><h1>{{getFomatedPrice(propertyData.property_price)}}</h1></ion-col>\n    </ion-row>\n\n  <ion-card>\n    <ion-card-content>\n        <ion-row style="margin-bottom:3%;">\n            <ion-col col-6 *ngIf="propertyData.property_type">\n                <h2>Property Type</h2>\n                <p>{{propertyData.property_type}}</p>\n                </ion-col>\n            <ion-col col-6 *ngIf="propertyData.property_size">\n              <h2>Size</h2>\n              <p>{{propertyData.property_size}} sq ft.</p>\n            </ion-col>\n         </ion-row>\n         <ion-row style="margin-top:3%;">\n           <ion-col >\n             <h2>Address</h2>\n             <p>{{propertyData.street_name}}, {{propertyData.property_city}}, {{propertyData.property_state}}, {{propertyData.postal_code}}</p>\n           </ion-col>\n         </ion-row >\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n      <ion-card-header>\n        <h2>Description</h2>\n      </ion-card-header>\n  \n      <ion-card-content [innerHtml]="propertyData.custom_desc"></ion-card-content>\n  \n      <ion-row *ngIf="propertyData.custom_desc.length>50">\n        <ion-col col-7></ion-col>\n        <ion-col col-5 right text-center>\n              <button ion-button small clear end (click)=\'readMore()\'>{{fullDetail? \'Read Less\' : \'Read More ...\'}} </button>\n        </ion-col>\n     </ion-row>\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\property-detail\property-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());

//# sourceMappingURL=property-detail.js.map

/***/ })

});
//# sourceMappingURL=4.js.map