webpackJsonp([1,4],{

/***/ 270:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 270;


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(299);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantica_dynamic_form_generator_src_form_model__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.selectedTab = 0;
        this.pageCount = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var formConfig = new __WEBPACK_IMPORTED_MODULE_1_semantica_dynamic_form_generator_src_form_model__["d" /* FormConfig */](this.getConfig());
        this.pages = formConfig.pages;
        this.pageCount = this.pages.length;
    };
    AppComponent.prototype.getConfig = function () {
        var config = {
            "formId": '123456Test',
            "form": 'animals',
            "type": 'lion',
            "version": 'v1',
            "pages": [
                {
                    "title": "Basic",
                    "groups": [
                        {
                            "orientation": 1,
                            "fields": [
                                {
                                    "fieldName": 'firstName',
                                    "placeholder": 'First name',
                                    "type": 'text'
                                },
                                {
                                    "fieldName": 'lastName',
                                    "placeholder": 'Last name',
                                    "type": 'text'
                                },
                                {
                                    "fieldName": 'birthDate',
                                    "placeholder": 'Birthdate',
                                    "type": 'date'
                                }
                            ]
                        },
                        {
                            "orientation": 0,
                            "fields": [
                                {
                                    "fieldName": 'hobbies',
                                    "placeholder": 'Hobbies',
                                    "type": 'select',
                                    "class": "three",
                                    "options": [
                                        {
                                            "key": '1',
                                            "value": 'Football'
                                        },
                                        {
                                            "key": '2',
                                            "value": 'Baseball'
                                        }
                                    ]
                                },
                                {
                                    "fieldName": 'other',
                                    "placeholder": 'Other hobbies',
                                    "class": "twelve",
                                    "type": 'text'
                                }
                            ]
                        },
                        {
                            "orientation": 1,
                            "fields": [
                                {
                                    "fieldName": 'nextbutton',
                                    "placeholder": 'Next',
                                    "class": "two",
                                    "type": "button"
                                },
                                {
                                    "fieldName": 'clearButton',
                                    "placeholder": 'Clear',
                                    "type": "reset"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Extra",
                    "groups": [
                        {
                            "orientation": 0,
                            "fields": [
                                {
                                    "fieldName": 'age',
                                    "placeholder": "Age",
                                    "class": "two",
                                    "type": 'number'
                                },
                                {
                                    "fieldName": 'height',
                                    "placeholder": "Height",
                                    "class": "two",
                                    "type": 'number'
                                },
                                {
                                    "fieldName": 'weight',
                                    "placeholder": "Weight",
                                    "class": "two",
                                    "type": 'number'
                                }
                            ]
                        },
                        {
                            "orientation": 1,
                            "fields": [
                                {
                                    "fieldName": 'clearButton',
                                    "placeholder": 'Clear',
                                    "type": "reset"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        return config;
    };
    AppComponent.prototype.doNext = function () {
        console.log('old : ' + this.selectedTab);
        if (this.selectedTab <= this.pageCount) {
            this.selectedTab += 1;
        }
        console.log('new : ' + this.selectedTab);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(381),
            styles: [__webpack_require__(366)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ViewEncapsulation */].None
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantica_dynamic_form_generator__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_semantica_dynamic_form_generator__["a" /* FormGeneratorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".mat-tab-body, .mat-tab-body-wrapper, .mat-tab-body-content{\r\n    overflow: visible !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 105,
	"./af.js": 105,
	"./ar": 112,
	"./ar-dz": 106,
	"./ar-dz.js": 106,
	"./ar-kw": 107,
	"./ar-kw.js": 107,
	"./ar-ly": 108,
	"./ar-ly.js": 108,
	"./ar-ma": 109,
	"./ar-ma.js": 109,
	"./ar-sa": 110,
	"./ar-sa.js": 110,
	"./ar-tn": 111,
	"./ar-tn.js": 111,
	"./ar.js": 112,
	"./az": 113,
	"./az.js": 113,
	"./be": 114,
	"./be.js": 114,
	"./bg": 115,
	"./bg.js": 115,
	"./bn": 116,
	"./bn.js": 116,
	"./bo": 117,
	"./bo.js": 117,
	"./br": 118,
	"./br.js": 118,
	"./bs": 119,
	"./bs.js": 119,
	"./ca": 120,
	"./ca.js": 120,
	"./cs": 121,
	"./cs.js": 121,
	"./cv": 122,
	"./cv.js": 122,
	"./cy": 123,
	"./cy.js": 123,
	"./da": 124,
	"./da.js": 124,
	"./de": 127,
	"./de-at": 125,
	"./de-at.js": 125,
	"./de-ch": 126,
	"./de-ch.js": 126,
	"./de.js": 127,
	"./dv": 128,
	"./dv.js": 128,
	"./el": 129,
	"./el.js": 129,
	"./en-au": 130,
	"./en-au.js": 130,
	"./en-ca": 131,
	"./en-ca.js": 131,
	"./en-gb": 132,
	"./en-gb.js": 132,
	"./en-ie": 133,
	"./en-ie.js": 133,
	"./en-nz": 134,
	"./en-nz.js": 134,
	"./eo": 135,
	"./eo.js": 135,
	"./es": 137,
	"./es-do": 136,
	"./es-do.js": 136,
	"./es.js": 137,
	"./et": 138,
	"./et.js": 138,
	"./eu": 139,
	"./eu.js": 139,
	"./fa": 140,
	"./fa.js": 140,
	"./fi": 141,
	"./fi.js": 141,
	"./fo": 142,
	"./fo.js": 142,
	"./fr": 145,
	"./fr-ca": 143,
	"./fr-ca.js": 143,
	"./fr-ch": 144,
	"./fr-ch.js": 144,
	"./fr.js": 145,
	"./fy": 146,
	"./fy.js": 146,
	"./gd": 147,
	"./gd.js": 147,
	"./gl": 148,
	"./gl.js": 148,
	"./gom-latn": 149,
	"./gom-latn.js": 149,
	"./he": 150,
	"./he.js": 150,
	"./hi": 151,
	"./hi.js": 151,
	"./hr": 152,
	"./hr.js": 152,
	"./hu": 153,
	"./hu.js": 153,
	"./hy-am": 154,
	"./hy-am.js": 154,
	"./id": 155,
	"./id.js": 155,
	"./is": 156,
	"./is.js": 156,
	"./it": 157,
	"./it.js": 157,
	"./ja": 158,
	"./ja.js": 158,
	"./jv": 159,
	"./jv.js": 159,
	"./ka": 160,
	"./ka.js": 160,
	"./kk": 161,
	"./kk.js": 161,
	"./km": 162,
	"./km.js": 162,
	"./kn": 163,
	"./kn.js": 163,
	"./ko": 164,
	"./ko.js": 164,
	"./ky": 165,
	"./ky.js": 165,
	"./lb": 166,
	"./lb.js": 166,
	"./lo": 167,
	"./lo.js": 167,
	"./lt": 168,
	"./lt.js": 168,
	"./lv": 169,
	"./lv.js": 169,
	"./me": 170,
	"./me.js": 170,
	"./mi": 171,
	"./mi.js": 171,
	"./mk": 172,
	"./mk.js": 172,
	"./ml": 173,
	"./ml.js": 173,
	"./mr": 174,
	"./mr.js": 174,
	"./ms": 176,
	"./ms-my": 175,
	"./ms-my.js": 175,
	"./ms.js": 176,
	"./my": 177,
	"./my.js": 177,
	"./nb": 178,
	"./nb.js": 178,
	"./ne": 179,
	"./ne.js": 179,
	"./nl": 181,
	"./nl-be": 180,
	"./nl-be.js": 180,
	"./nl.js": 181,
	"./nn": 182,
	"./nn.js": 182,
	"./pa-in": 183,
	"./pa-in.js": 183,
	"./pl": 184,
	"./pl.js": 184,
	"./pt": 186,
	"./pt-br": 185,
	"./pt-br.js": 185,
	"./pt.js": 186,
	"./ro": 187,
	"./ro.js": 187,
	"./ru": 188,
	"./ru.js": 188,
	"./sd": 189,
	"./sd.js": 189,
	"./se": 190,
	"./se.js": 190,
	"./si": 191,
	"./si.js": 191,
	"./sk": 192,
	"./sk.js": 192,
	"./sl": 193,
	"./sl.js": 193,
	"./sq": 194,
	"./sq.js": 194,
	"./sr": 196,
	"./sr-cyrl": 195,
	"./sr-cyrl.js": 195,
	"./sr.js": 196,
	"./ss": 197,
	"./ss.js": 197,
	"./sv": 198,
	"./sv.js": 198,
	"./sw": 199,
	"./sw.js": 199,
	"./ta": 200,
	"./ta.js": 200,
	"./te": 201,
	"./te.js": 201,
	"./tet": 202,
	"./tet.js": 202,
	"./th": 203,
	"./th.js": 203,
	"./tl-ph": 204,
	"./tl-ph.js": 204,
	"./tlh": 205,
	"./tlh.js": 205,
	"./tr": 206,
	"./tr.js": 206,
	"./tzl": 207,
	"./tzl.js": 207,
	"./tzm": 209,
	"./tzm-latn": 208,
	"./tzm-latn.js": 208,
	"./tzm.js": 209,
	"./uk": 210,
	"./uk.js": 210,
	"./ur": 211,
	"./ur.js": 211,
	"./uz": 213,
	"./uz-latn": 212,
	"./uz-latn.js": 212,
	"./uz.js": 213,
	"./vi": 214,
	"./vi.js": 214,
	"./x-pseudo": 215,
	"./x-pseudo.js": 215,
	"./yo": 216,
	"./yo.js": 216,
	"./zh-cn": 217,
	"./zh-cn.js": 217,
	"./zh-hk": 218,
	"./zh-hk.js": 218,
	"./zh-tw": 219,
	"./zh-tw.js": 219
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 368;


/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<h1>\n  Form Generator Demo\n</h1>\n<md-tab-group [(selectedIndex)]=\"selectedTab\">\n  <md-tab *ngFor=\"let page of pages\">\n    <ng-template md-tab-label>\n      <span>{{page.title}}</span>\n    </ng-template>\n    <div>&nbsp;</div>\n    <ngdg-form [page]=\"page\" (next)=\"doNext()\"></ngdg-form>\n  </md-tab>\n</md-tab-group>\n\n\n"

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(271);


/***/ })

},[646]);
//# sourceMappingURL=main.bundle.js.map