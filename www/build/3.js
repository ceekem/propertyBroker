webpackJsonp([3],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFormPageModule", function() { return PropertyFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_form__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PropertyFormPageModule = (function () {
    function PropertyFormPageModule() {
    }
    PropertyFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__property_form__["a" /* PropertyFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__property_form__["a" /* PropertyFormPage */]),
            ],
        })
    ], PropertyFormPageModule);
    return PropertyFormPageModule;
}());

//# sourceMappingURL=property-form.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_property_property__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PropertyFormPage = (function () {
    function PropertyFormPage(propertyManager, common, camera, storage, navParams, actionSheetCtrl, transfer, filePathClean, fileChooser, alertCtrl, ev, navCtrl) {
        var _this = this;
        this.propertyManager = propertyManager;
        this.common = common;
        this.camera = camera;
        this.storage = storage;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.filePathClean = filePathClean;
        this.fileChooser = fileChooser;
        this.alertCtrl = alertCtrl;
        this.ev = ev;
        this.navCtrl = navCtrl;
        this.currentIndex = -1;
        this.playerShowhide = 'hidePlayer';
        this.isPlaying = false;
        this.audioFilePath = '';
        this.screenType = 'M';
        this.tabsStatus = { tab2: true, tab3: true };
        this.frmVArray = { frm1: ['', '', '', '', '', '', '', '', ''], frm2: [''], frm3: ['', ''] };
        this.bedbathData = [1, 2, 3, 4, 5, 6, 7, 8];
        this.frmData = {
            //property_status:'',
            street_name: "",
            postal_code: "",
            city: "",
            state: "", size: "", bedrooms: '', bathrooms: '', property_type: '', prop_price: '',
            audio_file: '',
            vidoe_file: "", title: "",
            description: "", uauth: "", thumb: "",
            prop_images: [],
            status: '',
            cobroke: '',
            pro_id: ''
        };
        this.audioFileName = "";
        var propData = this.navParams.get('pobj');
        this.pData = propData;
        //console.log('propData : ',propData);
        if (typeof (propData) != 'undefined') {
            this.frmData.property_status = propData.property_statusid;
            this.frmData.street_name = propData.street_name;
            this.frmData.postal_code = propData.postal_code;
            this.frmData.city = propData.property_city;
            this.frmData.state = propData.property_state_ab;
            this.frmData.size = propData.property_size;
            //  this.frmData.bedrooms         = propData.bedrooms;
            //  this.frmData.bathrooms        = propData.bathrooms;
            this.frmData.property_type = propData.property_typeid;
            this.frmData.prop_price = propData.property_price;
            this.frmData.audio_file = propData.audio_file;
            this.frmData.vidoe_file = propData.vidoe_file;
            this.frmData.title = propData.post_title;
            this.frmData.description = propData.post_content;
            this.frmData.thumb = propData.thumb;
            this.frmData.prop_images = [];
            this.frmData.status = propData.post_status;
            this.frmData.pro_id = propData.id;
            //  this.frmData.cobroke          = propData.cobroke;
            this.frmData.uauth = '';
            if (this.frmData.thumb != '') {
                this.overlayIcon = 'overlayCamera';
            }
            this.formatNumber(this.frmData.size, 'size');
            this.formatNumber(this.frmData.prop_price, 'price');
        }
        this.storage.get("userData").then(function (data) {
            if (data != null && typeof (data) != 'undefined') {
                _this.frmData.uauth = data.uauth;
            }
        });
        this.commFields = { propertystatus: '' };
    }
    PropertyFormPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.common.showLoading();
        this.propertyManager.getStaticFields()
            .then(function (res) {
            _this.result = res;
            if (_this.result.status) {
                _this.commFields = _this.result.data;
            }
            _this.common.hideLoading();
            //console.log(this.commFields);
        }, function (err) {
            // Handle error
            _this.common.hideLoading();
            _this.common.showError(err);
        });
    };
    PropertyFormPage.prototype.selectScreenType = function (stype) {
        //console.log(stype);
        if (this.isPlaying) {
            this.audioObj.pause();
            this.isPlaying = false;
        }
        this.screenType = stype;
    };
    PropertyFormPage.prototype.formatNumber = function (obj, type) {
        //console.log('obj ',obj);
        var tmpNumber = obj.replace(/,/g, "");
        var formatedNumber = tmpNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (type == 'price') {
            if (tmpNumber > 0) {
                this.frmData.prop_price = formatedNumber;
            }
            else {
                this.frmData.prop_price = '';
            }
        }
        if (type == 'size') {
            if (tmpNumber > 0) {
                this.frmData.size = formatedNumber;
            }
            else {
                this.frmData.size = '';
            }
        }
        if (type == 'cobroke') {
            this.frmData.cobroke = formatedNumber;
        }
    };
    PropertyFormPage.prototype.continueToPayment = function () {
        var _this = this;
        this.frmVArray = { frm1: ['', '', '', '', '', '', '', '', ''], frm2: [''], frm3: ['', ''] };
        //------Form 2---------
        if (this.screenType == 'M') {
            var isValid = true;
            // if(!this.frmData.prop_images.length && this.frmData.thumb=='') this.frmVArray.frm2[0] = 'ngR';
            for (i = 0; i < this.frmVArray.frm2.length; i++) {
                if (this.frmVArray.frm2[i] != '')
                    isValid = false;
            }
            if (isValid) {
                if (this.isPlaying)
                    this.audioObj.pause();
                this.tabsStatus.tab3 = false;
                console.log(this.frmData.pro_id);
                if (this.frmData.pro_id) {
                    this.tabsStatus.tab3 = true;
                }
                this.screenType = 'S';
            }
        }
        else if (this.screenType == 'S') {
            var isValid = true;
            //if(this.frmData.property_status=='') this.frmVArray.frm1[0] = 'ngR';
            if (this.frmData.street_name == '')
                this.frmVArray.frm1[0] = 'ngR';
            if (this.frmData.postal_code == '')
                this.frmVArray.frm1[1] = 'ngR';
            if (this.frmData.city == '')
                this.frmVArray.frm1[2] = 'ngR';
            if (this.frmData.state == '')
                this.frmVArray.frm1[3] = 'ngR';
            if (this.frmData.size == '')
                this.frmVArray.frm1[4] = 'ngR';
            //   if(this.frmData.bedrooms=='') this.frmVArray.frm1[5] = 'ngR';
            //   if(this.frmData.bathrooms=='') this.frmVArray.frm1[6] = 'ngR';
            if (this.frmData.property_type == '')
                this.frmVArray.frm1[7] = 'ngR';
            if (this.frmData.prop_price == '')
                this.frmVArray.frm1[8] = 'ngR';
            for (var i = 0; i < this.frmVArray.frm1.length; i++) {
                if (this.frmVArray.frm1[i] != '')
                    isValid = false;
            }
            if (isValid) {
                //    this.tabsStatus.tab2 = false;
                this.screenType = 'D';
            }
        }
        else if (this.screenType == 'D') {
            var alert_1 = this.alertCtrl.create({
                title: 'Information',
                message: 'Do you want to publish your property?',
                buttons: [
                    {
                        text: 'Yes',
                        //role: 'destructive',
                        handler: function () {
                            _this.navCtrl.setRoot('HomePage');
                            _this.common.showAlert('Your property has been published');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    //-----------------------
    PropertyFormPage.prototype.actionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Property Image',
            buttons: [
                {
                    text: 'Camera',
                    //role: 'destructive',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.captureImage(0);
                    }
                }, {
                    text: 'Library',
                    handler: function () {
                        //console.log('Archive clicked');
                        _this.captureImage(1);
                    }
                }, {
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
    PropertyFormPage.prototype.getCameraOption = function (type) {
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
            targetHeight: 500,
            saveToPhotoAlbum: false,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        return options;
    };
    PropertyFormPage.prototype.captureImage = function (type) {
        var _this = this;
        this.common.showLoading();
        var options = this.getCameraOption(type);
        this.camera.getPicture(options).then(function (imageData) {
            _this.common.hideLoading();
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.overlayIcon = 'overlayCamera';
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            var base64Image = imageData;
            _this.frmData.prop_images[0] = base64Image;
            _this.frmData.thumb = 'data:image/jpeg;base64,' + base64Image;
        }, function (err) {
            // Handle error
            _this.common.hideLoading();
            _this.common.showError(err);
        });
    };
    PropertyFormPage.prototype.removeImage = function () {
        this.frmData.prop_images[0] = '';
        this.frmData.thumb = '';
        this.overlayIcon = '';
    };
    //------------------------
    PropertyFormPage.prototype.saveAsDraft = function () {
        var _this = this;
        // this.common.showAlert('Property has been saved as draft');
        var alert = this.alertCtrl.create({
            title: 'Information',
            message: 'Do you want to unpublish your property?',
            buttons: [
                {
                    text: 'Yes',
                    //role: 'destructive',
                    handler: function () {
                        _this.common.showAlert('Your property has been unpublished');
                        _this.navCtrl.pop();
                        _this.common.hideLoading();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    PropertyFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-property-form',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\property-form\property-form.html"*/'<ion-header no-border>\n  <ion-navbar >\n    <ion-title>{{frmData.pro_id ? \'Edit\' : \'Add\'}} Property</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <img style="opacity:0" src="" />\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-segment color="light" [(ngModel)]="screenType" (ionChange)="selectScreenType(screenType)">\n      <ion-segment-button  value="M">Media</ion-segment-button>\n      <ion-segment-button  value="S">Description</ion-segment-button>\n      <ion-segment-button *ngIf="!frmData.pro_id" [disabled]="tabsStatus.tab3" value="D">Summary</ion-segment-button>\n      <ion-segment-button *ngIf="frmData.pro_id" value="D">Summary</ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form name="propertyFrm" (ngSubmit)="frmSubmit()">\n    <ion-list class="firstFrm" no-lines *ngIf="screenType==\'S\'">\n\n      <ion-item  [ngClass]="frmVArray.frm1[0]">\n       <ion-textarea  name="fullname" placeholder="Street Address"  [(ngModel)]="frmData.street_name" ></ion-textarea>\n      </ion-item>\n\n      <ion-item [ngClass]="frmVArray.frm1[1]" >\n       <ion-input  name="city" placeholder="City" [(ngModel)]="frmData.city" ></ion-input>\n      </ion-item>\n\n      <ion-item [ngClass]="frmVArray.frm1[2]">\n       <ion-label>State</ion-label>\n       <ion-select name="state" [(ngModel)]="frmData.state" >\n         <ion-option *ngFor="let obj of commFields.propertystate" [value]="obj.abbreviation" >{{obj.title}}</ion-option>\n       </ion-select>\n     </ion-item>\n\n      <ion-item [ngClass]="frmVArray.frm1[3]" >\n       <ion-input type="tel" maxlength="5" name="postal_code" placeholder="Zip Code" [(ngModel)]="frmData.postal_code" ></ion-input>\n      </ion-item>\n\n      <ion-item [ngClass]="frmVArray.frm1[4]">\n       <ion-input  type="tel" maxlength="10"\n       name="size"\n       (keyup)="formatNumber($event.target.value,\'size\')"\n       placeholder="Square Footage" [(ngModel)]="frmData.size" ></ion-input>\n       <div *ngIf="frmData.size" class="sqFeet" item-end>Sq. Ft.</div>\n      </ion-item>\n\n      <!-- <ion-item [ngClass]="frmVArray.frm1[5]">\n       <ion-label>Bedrooms</ion-label>\n       <ion-select name="bedrooms" [(ngModel)]="frmData.bedrooms" >\n         <ion-option *ngFor="let item of bedbathData" [value]="item">{{item}}</ion-option>\n       </ion-select>\n     </ion-item>\n\n     <ion-item [ngClass]="frmVArray.frm1[6]">\n      <ion-label>Baths</ion-label>\n      <ion-select name="bathrooms" [(ngModel)]="frmData.bathrooms" >\n          <ion-option *ngFor="let item of bedbathData" [value]="item">{{item}}</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ion-item [ngClass]="frmVArray.frm1[7]">\n     <ion-label>Property Type</ion-label>\n     <ion-select name="property_type" [(ngModel)]="frmData.property_type" >\n       <ion-option *ngFor="let obj of commFields.propertytype" [value]="obj.id" >{{obj.title}}</ion-option>\n     </ion-select>\n   </ion-item>\n\n   <ion-item [ngClass]="frmVArray.frm1[8]">\n     <div *ngIf="frmData.prop_price" class="priceLabel" item-start>$</div>\n    <ion-input  type="tel" maxlength="10"\n     name="prop_price"\n     (keyup)="formatNumber($event.target.value,\'price\')"\n     placeholder="Price" [(ngModel)]="frmData.prop_price" ></ion-input>\n   </ion-item>\n\n   <!-- <ion-item [ngClass]="frmVArray.frm1[9]">\n    <ion-input  type="tel" maxlength="6"\n    name="cobroke"\n    placeholder="Co-broke" [(ngModel)]="frmData.cobroke" ></ion-input>\n    <div *ngIf="frmData.cobroke" class="sqFeet" item-end>%</div>\n   </ion-item> -->\n\n    </ion-list>\n\n    <div class="mediaSection" *ngIf="screenType==\'M\'">\n      <ion-card [ngClass]="frmVArray.frm2[0]" >\n        <ion-card-header *ngIf="frmData.thumb">\n          <div class="removeBtn" ion-button icon-only  (click)="removeImage()">\n            <ion-icon name="trash"> </ion-icon>\n          </div>\n        </ion-card-header>\n       <ion-card-content (click)="actionSheet();" text-center>\n         <ion-icon [ngClass]="overlayIcon" name="ios-camera"> </ion-icon>\n         <img  *ngIf="frmData.thumb" src="{{frmData.thumb}}">\n         <div *ngIf="!frmData.thumb">\n         <p>Take Photo</p>\n       </div>\n       </ion-card-content>\n     </ion-card>\n  </div>\n\n  <ion-list class="descSec" no-lines *ngIf="screenType==\'D\'">\n    <ion-item [ngClass]="frmVArray.frm3[0]">\n     <ion-input  name="title" placeholder="Title" [(ngModel)]="frmData.title" ></ion-input>\n    </ion-item>\n\n    <ion-item [ngClass]="frmVArray.frm3[1]">\n     <ion-textarea  name="description" placeholder="Description"  [(ngModel)]="frmData.description" ></ion-textarea>\n    </ion-item>\n  </ion-list>\n  </form>\n\n\n</ion-content>\n\n<ion-footer >\n\n  <ion-toolbar>\n  <ion-row>\n    <ion-col >\n      <button  ion-button block color="light" (click)="saveAsDraft()">Unpublish</button>\n    </ion-col>\n    <ion-col>\n      <button  ion-button full icon-right (click)="continueToPayment()">\n           <p>{{screenType!=\'D\' ? \'Next\' : \'Publish\'}}</p>\n           <ion-icon *ngIf="screenType!=\'D\'" name="ios-arrow-forward"> </ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\property-form\property-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_property_property__["a" /* PropertyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], PropertyFormPage);
    return PropertyFormPage;
}());

//# sourceMappingURL=property-form.js.map

/***/ })

});
//# sourceMappingURL=3.js.map