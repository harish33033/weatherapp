(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weather-weather-module"],{

/***/ "./src/app/weather/weather-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/weather/weather-data.service.ts ***!
  \*************************************************/
/*! exports provided: WeatherDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDataService", function() { return WeatherDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherDataService = /** @class */ (function () {
    function WeatherDataService() {
        this.weather = {
            name: '',
            country: '',
            image: '',
            description: null,
            temperature: null,
            lat: null,
            lon: null,
        };
    }
    WeatherDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WeatherDataService);
    return WeatherDataService;
}());



/***/ }),

/***/ "./src/app/weather/weather-item/weather-item.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/weather/weather-item/weather-item.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 400px;\r\n}\r\n.example-header-image {\r\n  background-size: cover;\r\n}\r\n.description {\r\n  padding-top: 10px;\r\n}\r\nagm-map {\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/weather/weather-item/weather-item.component.html":
/*!******************************************************************!*\
  !*** ./src/app/weather/weather-item/weather-item.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"weather?.name\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\">\n            <img [src]=\"weather.image\" alt=\"Weather Icon\">\n          </div>\n      <mat-card-title>{{ weather.name }}, {{ weather.country }}</mat-card-title>\n      <mat-card-subtitle>\n        {{ weather.temperature | number: '1.0-0'}} ℉\n      </mat-card-subtitle>\n    </mat-card-header>\n    <agm-map [latitude]=\"weather.lat\" [longitude]=\"weather.lon\">\n        <agm-marker [latitude]=\"weather.lat\" [longitude]=\"weather.lon\"></agm-marker>\n      </agm-map>\n    <mat-card-content class=\"description\">\n      <h3 class=\"subheading-2\">\n        Conditions:\n      </h3>\n          {{ weather.description }}\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>SAVE</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/weather/weather-item/weather-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/weather/weather-item/weather-item.component.ts ***!
  \****************************************************************/
/*! exports provided: WeatherItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherItemComponent", function() { return WeatherItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-data.service */ "./src/app/weather/weather-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherItemComponent = /** @class */ (function () {
    function WeatherItemComponent(weatherDataService) {
        this.weatherDataService = weatherDataService;
    }
    WeatherItemComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(WeatherItemComponent.prototype, "weather", {
        get: function () {
            return this.weatherDataService.weather;
        },
        enumerable: true,
        configurable: true
    });
    WeatherItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather-item',
            template: __webpack_require__(/*! ./weather-item.component.html */ "./src/app/weather/weather-item/weather-item.component.html"),
            styles: [__webpack_require__(/*! ./weather-item.component.css */ "./src/app/weather/weather-item/weather-item.component.css")]
        }),
        __metadata("design:paramtypes", [_weather_data_service__WEBPACK_IMPORTED_MODULE_1__["WeatherDataService"]])
    ], WeatherItemComponent);
    return WeatherItemComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/weather/weather-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WeatherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherRoutingModule", function() { return WeatherRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _weather_view_weather_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-view/weather-view.component */ "./src/app/weather/weather-view/weather-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        pathMatch: 'full',
        component: _weather_view_weather_view_component__WEBPACK_IMPORTED_MODULE_2__["WeatherViewComponent"]
    }];
var WeatherRoutingModule = /** @class */ (function () {
    function WeatherRoutingModule() {
    }
    WeatherRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WeatherRoutingModule);
    return WeatherRoutingModule;
}());



/***/ }),

/***/ "./src/app/weather/weather-search/weather-search.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/weather/weather-search/weather-search.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/weather/weather-search/weather-search.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/weather/weather-search/weather-search.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Search cities\"\n           name=\"query\"\n           [(ngModel)]=\"query\">\n  </mat-form-field>\n  <div class=\"button-row\" style=\"margin-left: 10px;\">\n    <button mat-raised-button\n            color=\"primary\"\n            (click)=\"search(query)\">Submit</button>\n  </div>\n</form>\n\n<div *ngIf=\"errorMessage?.message\" class=\"container\">{{errorMessage.cod }} | {{ errorMessage.message }}</div>\n\n{{ weather?.name }} | {{ weather?.temperature }} |\n{{ weather?.description }}\n"

/***/ }),

/***/ "./src/app/weather/weather-search/weather-search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/weather/weather-search/weather-search.component.ts ***!
  \********************************************************************/
/*! exports provided: WeatherSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherSearchComponent", function() { return WeatherSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather/weather.service.ts");
/* harmony import */ var _weather_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-data.service */ "./src/app/weather/weather-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherSearchComponent = /** @class */ (function () {
    function WeatherSearchComponent(weatherService, weatherDataService) {
        this.weatherService = weatherService;
        this.weatherDataService = weatherDataService;
        this.query = '';
        this.errorMessage = {};
    }
    WeatherSearchComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(WeatherSearchComponent.prototype, "weather", {
        set: function (data) {
            this.weatherDataService.weather = data;
        },
        enumerable: true,
        configurable: true
    });
    WeatherSearchComponent.prototype.search = function () {
        var _this = this;
        this.weatherService
            .searchWeatherData(this.query)
            .subscribe(function (weather) { return _this.weather = weather; }, function (error) { return _this.errorMessage = error; }, function () { return _this.query = ''; });
    };
    WeatherSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather-search',
            template: __webpack_require__(/*! ./weather-search.component.html */ "./src/app/weather/weather-search/weather-search.component.html"),
            styles: [__webpack_require__(/*! ./weather-search.component.css */ "./src/app/weather/weather-search/weather-search.component.css")]
        }),
        __metadata("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"],
            _weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"]])
    ], WeatherSearchComponent);
    return WeatherSearchComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather-view/weather-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/weather/weather-view/weather-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-top {\r\n  margin-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/weather/weather-view/weather-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/weather/weather-view/weather-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\"\n     fxLayoutAlign=\"space-around start\"\n     class=\"container-top\">\n\n  <div fxFlex=\"40%\"\n       fxFlexOffset=\"200px\">\n    <app-weather-search></app-weather-search>\n  </div>\n\n  <div fxFlex=\"50%\">\n    <app-weather-item></app-weather-item>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/weather/weather-view/weather-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/weather/weather-view/weather-view.component.ts ***!
  \****************************************************************/
/*! exports provided: WeatherViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherViewComponent", function() { return WeatherViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherViewComponent = /** @class */ (function () {
    function WeatherViewComponent() {
    }
    WeatherViewComponent.prototype.ngOnInit = function () {
    };
    WeatherViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather-view',
            template: __webpack_require__(/*! ./weather-view.component.html */ "./src/app/weather/weather-view/weather-view.component.html"),
            styles: [__webpack_require__(/*! ./weather-view.component.css */ "./src/app/weather/weather-view/weather-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherViewComponent);
    return WeatherViewComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.module.ts":
/*!*******************************************!*\
  !*** ./src/app/weather/weather.module.ts ***!
  \*******************************************/
/*! exports provided: WeatherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherModule", function() { return WeatherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _weather_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather-routing.module */ "./src/app/weather/weather-routing.module.ts");
/* harmony import */ var _weather_view_weather_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather-view/weather-view.component */ "./src/app/weather/weather-view/weather-view.component.ts");
/* harmony import */ var _weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-item/weather-item.component */ "./src/app/weather/weather-item/weather-item.component.ts");
/* harmony import */ var _weather_search_weather_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather-search/weather-search.component */ "./src/app/weather/weather-search/weather-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WeatherModule = /** @class */ (function () {
    function WeatherModule() {
    }
    WeatherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _weather_routing_module__WEBPACK_IMPORTED_MODULE_4__["WeatherRoutingModule"]
            ],
            exports: [_weather_view_weather_view_component__WEBPACK_IMPORTED_MODULE_5__["WeatherViewComponent"], _weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_6__["WeatherItemComponent"], _weather_search_weather_search_component__WEBPACK_IMPORTED_MODULE_7__["WeatherSearchComponent"]],
            declarations: [_weather_view_weather_view_component__WEBPACK_IMPORTED_MODULE_5__["WeatherViewComponent"], _weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_6__["WeatherItemComponent"], _weather_search_weather_search_component__WEBPACK_IMPORTED_MODULE_7__["WeatherSearchComponent"]]
        })
    ], WeatherModule);
    return WeatherModule;
}());



/***/ }),

/***/ "./src/app/weather/weather.service.ts":
/*!********************************************!*\
  !*** ./src/app/weather/weather.service.ts ***!
  \********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.KEY = '<YOUR_API_KEY_HERE>';
        this.IMP = '&units=imperial';
    }
    WeatherService.prototype.searchWeatherData = function (cityName) {
        var _this = this;
        return this
            .http
            .get("" + this.URL + cityName + "&APPID=" + this.KEY + this.IMP)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.transformWeatherData(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    WeatherService.prototype.transformWeatherData = function (data) {
        return {
            name: data.name,
            country: data.sys.country,
            image: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
            description: data.weather[0].description,
            temperature: data.main.temp,
            lat: data.coord.lat,
            lon: data.coord.lon
        };
    };
    WeatherService.prototype.handleError = function (res) {
        console.error(res);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(res.error || 'Server error');
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ })

}]);
//# sourceMappingURL=weather-weather-module.js.map