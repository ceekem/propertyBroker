webpackJsonp([9],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingMapviewPageModule", function() { return ListingMapviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listing_mapview__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListingMapviewPageModule = (function () {
    function ListingMapviewPageModule() {
    }
    ListingMapviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listing_mapview__["a" /* ListingMapviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listing_mapview__["a" /* ListingMapviewPage */]),
            ],
        })
    ], ListingMapviewPageModule);
    return ListingMapviewPageModule;
}());

//# sourceMappingURL=listing-mapview.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingMapviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_manager_user_manager__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_property_property__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var markersArray = [];
var addr;
var ListingMapviewPage = (function () {
    function ListingMapviewPage(navCtrl, loadingCtrl, toastCtrl, app, nav, zone, platform, alertCtrl, actionSheetCtrl, geolocation, viewCtrl, events, propertyManager, common, userManager) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.nav = nav;
        this.zone = zone;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.propertyManager = propertyManager;
        this.common = common;
        this.userManager = userManager;
        this.addressElement = null;
        this.listSearch = '';
        this.search = false;
        this.switch = "map";
        this.location1 = { address: '' };
        this.regionals = [];
        this.paged = 1;
        this.propertyStatus = 'publish';
        this.platform.ready().then(function () {
            _this.loading = _this.loadingCtrl.create({
                content: 'Getting location ...'
            });
            _this.loading.present();
            _this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (res) {
                _this.loading.dismiss();
                //this.latitude = res.coords.latitude;
                //this.longitude = res.coords.longitude;
                //-------static data 
                _this.latitude = 25.9347377;
                _this.longitude = -80.1372757;
                _this.loadMaps();
            });
        });
    }
    ListingMapviewPage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    ListingMapviewPage.prototype.errorAlert = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [{
                    text: 'OK',
                    handler: function (data) {
                        _this.loadMaps();
                    }
                }]
        });
        alert.present();
    };
    ListingMapviewPage.prototype.getFomatedPrice = function (n) {
        //n = n.toFixed(2);
        return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    ListingMapviewPage.prototype.mapsSearchBar = function (ev) {
        console.log(ev);
        var autocomplete = new google.maps.places.Autocomplete(ev);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    sub.next(place.geometry.location);
                    sub.complete();
                }
            });
        });
    };
    ListingMapviewPage.prototype.initAutocomplete = function () {
        var _this = this;
        this.addressElement =
            this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            _this.lact = location;
            var options = {
                center: location.geometry.location,
                zoom: 12
            };
            _this.map.setOptions(options);
            _this.addMarker(_this.lact.geometry.location, _this.lact.formatted_address);
        });
    };
    ListingMapviewPage.prototype.createAutocomplete = function (addressEl) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    _this.loca = place;
                    _this.events.publish('address', _this.loca);
                    sub.next(place);
                }
            });
        });
    };
    ListingMapviewPage.prototype.initializeMap = function () {
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        var mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker(latLng, 'You are here');
    };
    ListingMapviewPage.prototype.addMarker = function (position, content) {
        var _this = this;
        this.propertyManager.getListing(this.paged, this.propertyStatus).then(function (result) {
            _this.properties = result;
            _this.allData = _this.properties.data;
            for (var _i = 0, _a = _this.allData; _i < _a.length; _i++) {
                _this.property = _a[_i];
                var latLng = new google.maps.LatLng(_this.property.property_lat, _this.property.property_lon);
                var marker = new google.maps.Marker({
                    map: _this.map,
                    position: latLng
                });
                var content_1 = '<div id="infoButton"><img src="' + _this.property.thumb + '" width="220"><h4>' + _this.property.post_title + '</h4>';
                content_1 += '</p>Sq Ft : ' + _this.property.property_size + ', Price: ' + _this.getFomatedPrice(_this.property.property_price) + '</p></div>';
                _this.addInfoWindow(marker, content_1, _this.property);
            }
        });
    };
    ListingMapviewPage.prototype.addInfoWindow = function (marker, content, prop) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        var parent = this;
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
        google.maps.event.addListenerOnce(infoWindow, 'domready', function () {
            document.getElementById('infoButton').addEventListener('click', function () {
                console.log('Clicked : ', prop);
                _this.navCtrl.push('PropertyDetailPage', { propertydata: prop });
            });
        });
    };
    ListingMapviewPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(this.loca);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ListingMapviewPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ListingMapviewPage.prototype, "searchbar", void 0);
    ListingMapviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listing-mapview',template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\listing-mapview\listing-mapview.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-searchbar #searchbar placeholder="Search a location"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="map">\n    <div id="map" #map></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\pages\listing-mapview\listing-mapview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_property_property__["a" /* PropertyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_manager_user_manager__["a" /* UserManagerProvider */]])
    ], ListingMapviewPage);
    return ListingMapviewPage;
}());

//# sourceMappingURL=listing-mapview.js.map

/***/ })

});
//# sourceMappingURL=9.js.map