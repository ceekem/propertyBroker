webpackJsonp([15],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/change-password/change-password.module": [
		292,
		14
	],
	"../pages/explainer/explainer.module": [
		291,
		13
	],
	"../pages/forgotpassword/forgotpassword.module": [
		299,
		12
	],
	"../pages/home/home.module": [
		293,
		11
	],
	"../pages/inbox/inbox.module": [
		294,
		10
	],
	"../pages/listing-mapview/listing-mapview.module": [
		295,
		9
	],
	"../pages/login/login.module": [
		296,
		8
	],
	"../pages/notification-detail/notification-detail.module": [
		297,
		7
	],
	"../pages/notification/notification.module": [
		298,
		6
	],
	"../pages/profile/profile.module": [
		300,
		5
	],
	"../pages/property-detail/property-detail.module": [
		301,
		4
	],
	"../pages/property-form/property-form.module": [
		305,
		3
	],
	"../pages/register-profileimg/register-profileimg.module": [
		302,
		0
	],
	"../pages/register/register.module": [
		304,
		2
	],
	"../pages/support/support.module": [
		303,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonProvider = (function () {
    function CommonProvider(alertCtrl, toastCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        //console.log('Hello CommonProvider Provider');
    }
    CommonProvider.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({ title: 'Information', subTitle: message, buttons: ['OK'] });
        alert.present();
    };
    CommonProvider.prototype.showLoading = function () {
        this.loader = this.loadingCtrl.create({ content: "Loading..." });
        this.loader.present();
    };
    CommonProvider.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({ message: msg, duration: 3000 });
        toast.present();
    };
    CommonProvider.prototype.showError = function (obj) {
        console.log(obj);
        var errorMeg = '';
        if (obj.status == 404 && typeof (obj.name) == 'undefined') {
            errorMeg = 'Api request failed.';
        }
        else if (obj.name == 'TimeoutError' && typeof (obj.status) == 'undefined') {
            errorMeg = 'Connection timed out. Please try again.';
        }
        else {
            errorMeg = 'An error occured. Please try again.';
        }
        var toast = this.toastCtrl.create({ message: errorMeg, duration: 3000 });
        toast.present();
    };
    CommonProvider.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserManagerProvider = (function () {
    function UserManagerProvider(http) {
        this.http = http;
        console.log('Hello UserManagerProvider Provider');
    }
    //----------Get Access Token----------------------------------
    UserManagerProvider.prototype.getAccessToken = function () {
        var _this = this;
        var postData = { "grant_type": "client_credentials", "client_id": "apirrstestclient", "client_secret": "rrstestpassapi" };
        return new Promise(function (resolve, reject) {
            _this.http.post('createaccesstoken', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //-----------Credae New Customer---------------------------------
    UserManagerProvider.prototype.agentRegister = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('agentregister', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //------------Login--------------------------------
    UserManagerProvider.prototype.login = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('agentlogin', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //-----------Forgot Password---------------------------------
    UserManagerProvider.prototype.updateProfile = function (postData) {
        var _this = this;
        //console.log("TTTTTTTTTTTTTTTTT ",postData);
        return new Promise(function (resolve, reject) {
            _this.http.post('agentProfileUpdate', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //-----------Forgot Password---------------------------------
    UserManagerProvider.prototype.forgotPasswrod = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('forgotpassword', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //-----------Change Password---------------------------------
    UserManagerProvider.prototype.changePasswrod = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('changepassword', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //-----------Reset Password---------------------------------
    UserManagerProvider.prototype.resetPassword = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('resetpassword', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //---Get brokerage value ---
    UserManagerProvider.prototype.getBrokerage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('Brokerage')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //---Get agency value ---
    UserManagerProvider.prototype.getAgencyData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('GetAgencies')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //-----------Register Device---------------------------------
    UserManagerProvider.prototype.registerDevice = function (pastData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('registerDevice', pastData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //---Get Appointment Data user vise ---
    UserManagerProvider.prototype.getAppointment = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('assets/data/notifications.json')
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UserManagerProvider.prototype.deleteAppointment = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('deleteAppointment', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //==========Other Section==============================
    //-----------About App---------------------------------
    UserManagerProvider.prototype.getAbaoutApp = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('aboutagentapp')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserManagerProvider);
    return UserManagerProvider;
}());

//# sourceMappingURL=user-manager.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Storage } from '@ionic/storage';
var PropertyProvider = (function () {
    function PropertyProvider(http) {
        //console.log('Hello PropertyProvider Provider');
        this.http = http;
    }
    //-----------Get Property Listing---------------------------------
    PropertyProvider.prototype.getListing = function (paged, propStatus) {
        var _this = this;
        var postData = { page: paged, limit: '30', status: propStatus };
        console.log("postdata", postData);
        return new Promise(function (resolve, reject) {
            _this.http.get('assets/data/properties.json')
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    //-----------Add New Property Search---------------------------------
    PropertyProvider.prototype.getStaticFields = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('assets/data/propertyadd_field.json')
                .subscribe(function (data) {
                console.log(data);
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    //-----------Add New Property Search---------------------------------
    PropertyProvider.prototype.addNewProperty = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('addProperty', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //-----------Add New Property Search---------------------------------
    PropertyProvider.prototype.removeProperty = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('removeProperty', postData)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PropertyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PropertyProvider);
    return PropertyProvider;
}());

//# sourceMappingURL=property.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(235);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_property_property__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_manager_user_manager__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_brmasker_ionic_3__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_call_number__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HomePage } from '../pages/home/home';
// import { PropertyDetailPage } from '../pages/property-detail/property-detail';
// import { PropertyFormPage } from '../pages/property-form/property-form';
//import { ListingMapviewPage } from "../pages/listing-mapview/listing-mapview";






 // for HTTP request








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    //mode: 'md',
                    backButtonText: '',
                }, {
                    links: [
                        { loadChildren: '../pages/explainer/explainer.module#ExplainerPageModule', name: 'ExplainerPage', segment: 'explainer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listing-mapview/listing-mapview.module#ListingMapviewPageModule', name: 'ListingMapviewPage', segment: 'listing-mapview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-detail/notification-detail.module#NotificationDetailPageModule', name: 'NotificationDetailPage', segment: 'notification-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-detail/property-detail.module#PropertyDetailPageModule', name: 'PropertyDetailPage', segment: 'property-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-profileimg/register-profileimg.module#RegisterProfileimgPageModule', name: 'RegisterProfileimgPage', segment: 'register-profileimg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-form/property-form.module#PropertyFormPageModule', name: 'PropertyFormPage', segment: 'property-form', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__["a" /* FileTransfer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_property_property__["a" /* PropertyProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_user_manager_user_manager__["a" /* UserManagerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'My Property', icon: 'home', component: 'HomePage' },
            { title: 'Profile', icon: 'person', component: 'ProfilePage' },
            { title: 'Change Password', icon: 'lock', component: 'ChangePasswordPage' },
            { title: 'My Appointments', icon: 'notifications', component: 'NotificationPage' },
            { title: 'Inbox', icon: 'mail', component: 'InboxPage' },
            { title: 'Logout', icon: 'log-out', component: 'LoginPage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\app\app.html"*/'<ion-menu [content]="content" id="menu1">\n  <ion-header>\n    <ion-toolbar>\n     <img class="sidebar-img" src="assets/imgs/userbackground.jpg" >\n     <h5 class="welcomeText">Welcome Guest</h5>\n    </ion-toolbar>\n  </ion-header> \n\n<ion-content class="sidemenu">\n  <ion-list>\n    <button class="sidelist" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n      <ion-icon [name]="p.icon" item-left></ion-icon> {{p.title}}\n    </button>\n  </ion-list>\n</ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Raymond Mortu\Documents\Eddie property\property_broker\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map