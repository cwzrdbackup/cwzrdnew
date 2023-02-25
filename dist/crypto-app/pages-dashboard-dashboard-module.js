(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/angular-weather-widget/angular-weather-widget.module.js":
/*!******************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/angular-weather-widget.module.js ***!
  \******************************************************************************/
/*! exports provided: apiServiceFactory, forRoot, AngularWeatherWidgetModule, WeatherApiName, WeatherSettings, ForecastMode, TemperatureScale, WeatherLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiServiceFactory", function() { return apiServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forRoot", function() { return forRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularWeatherWidgetModule", function() { return AngularWeatherWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_api_weather_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api/weather.api.service */ "./node_modules/angular-weather-widget/services/api/weather.api.service.js");
/* harmony import */ var _services_poling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/poling.service */ "./node_modules/angular-weather-widget/services/poling.service.js");
/* harmony import */ var _weather_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.container */ "./node_modules/angular-weather-widget/weather.container.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/weather-icon/weather-icon.component */ "./node_modules/angular-weather-widget/components/weather-icon/weather-icon.component.js");
/* harmony import */ var _components_weather_current_description_weather_current_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/weather-current-description/weather-current-description.component */ "./node_modules/angular-weather-widget/components/weather-current-description/weather-current-description.component.js");
/* harmony import */ var _components_weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/weather-current-temperature/current-temperature.component */ "./node_modules/angular-weather-widget/components/weather-current-temperature/current-temperature.component.js");
/* harmony import */ var _components_weather_actions_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/weather-actions/actions.component */ "./node_modules/angular-weather-widget/components/weather-actions/actions.component.js");
/* harmony import */ var _components_weather_location_weather_location_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/weather-location/weather-location.component */ "./node_modules/angular-weather-widget/components/weather-location/weather-location.component.js");
/* harmony import */ var _components_weather_current_wind_weather_current_wind_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/weather-current-wind/weather-current-wind.component */ "./node_modules/angular-weather-widget/components/weather-current-wind/weather-current-wind.component.js");
/* harmony import */ var _services_api_open_weather_map_open_weather_map_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/api/open-weather-map/open-weather-map.api.service */ "./node_modules/angular-weather-widget/services/api/open-weather-map/open-weather-map.api.service.js");
/* harmony import */ var _components_weather_current_details_weather_current_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/weather-current-details/weather-current-details.component */ "./node_modules/angular-weather-widget/components/weather-current-details/weather-current-details.component.js");
/* harmony import */ var _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/weather-forecast/weather-forecast.component */ "./node_modules/angular-weather-widget/components/weather-forecast/weather-forecast.component.js");
/* harmony import */ var _components_weather_forecast_forecast_simple_grid_forecast_simple_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/weather-forecast/forecast-simple-grid/forecast-simple-grid.component */ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-simple-grid/forecast-simple-grid.component.js");
/* harmony import */ var _components_weather_forecast_forecast_simple_grid_weather_forecast_grid_day_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/weather-forecast/forecast-simple-grid/weather-forecast-grid-day.component */ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-simple-grid/weather-forecast-grid-day.component.js");
/* harmony import */ var _components_weather_forecast_forecast_detailed_forecast_detailed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/weather-forecast/forecast-detailed/forecast-detailed.component */ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-detailed/forecast-detailed.component.js");
/* harmony import */ var _components_weather_forecast_forecast_detailed_forecast_detailed_day_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/weather-forecast/forecast-detailed/forecast-detailed-day.component */ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-detailed/forecast-detailed-day.component.js");
/* harmony import */ var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/chart/chart.component */ "./node_modules/angular-weather-widget/components/chart/chart.component.js");
/* harmony import */ var _components_weather_forecast_forecast_simple_grid_forecast_chart_wide_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/weather-forecast/forecast-simple-grid/forecast-chart-wide.component */ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-simple-grid/forecast-chart-wide.component.js");
/* harmony import */ var _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/weather-helpers.service */ "./node_modules/angular-weather-widget/services/weather-helpers.service.js");
/* harmony import */ var _weather_interfaces__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./weather.interfaces */ "./node_modules/angular-weather-widget/weather.interfaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherSettings", function() { return _weather_interfaces__WEBPACK_IMPORTED_MODULE_22__["WeatherSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForecastMode", function() { return _weather_interfaces__WEBPACK_IMPORTED_MODULE_22__["ForecastMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemperatureScale", function() { return _weather_interfaces__WEBPACK_IMPORTED_MODULE_22__["TemperatureScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherLayout", function() { return _weather_interfaces__WEBPACK_IMPORTED_MODULE_22__["WeatherLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherApiName", function() { return _services_api_weather_api_service__WEBPACK_IMPORTED_MODULE_2__["WeatherApiName"]; });























function apiServiceFactory(http, pooling, openWeather) {
    switch (openWeather.name) {
        case _services_api_weather_api_service__WEBPACK_IMPORTED_MODULE_2__["WeatherApiName"].OPEN_WEATHER_MAP:
            return new _services_api_open_weather_map_open_weather_map_api_service__WEBPACK_IMPORTED_MODULE_12__["OpenWeatherMapApiService"](http, pooling, openWeather);
        default:
            return new _services_api_open_weather_map_open_weather_map_api_service__WEBPACK_IMPORTED_MODULE_12__["OpenWeatherMapApiService"](http, pooling, openWeather);
    }
}
function forRoot(config) {
    return {
        ngModule: AngularWeatherWidgetModule,
        providers: [
            _services_poling_service__WEBPACK_IMPORTED_MODULE_3__["PoolingService"],
            _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_21__["WeatherHelpersService"],
            {
                provide: _services_api_weather_api_service__WEBPACK_IMPORTED_MODULE_2__["WeatherApiService"],
                useFactory: apiServiceFactory,
                deps: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_poling_service__WEBPACK_IMPORTED_MODULE_3__["PoolingService"], 'WEATHER_CONFIG']
            },
            { provide: 'WEATHER_CONFIG', useValue: config }
        ]
    };
}
var AngularWeatherWidgetModule = (function () {
    function AngularWeatherWidgetModule() {
    }
    AngularWeatherWidgetModule.forRoot = forRoot;
    AngularWeatherWidgetModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]],
                    declarations: [
                        _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_19__["ChartComponent"],
                        _weather_container__WEBPACK_IMPORTED_MODULE_4__["WeatherContainer"],
                        _components_weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_8__["WeatherCurrentTempComponent"],
                        _components_weather_actions_actions_component__WEBPACK_IMPORTED_MODULE_9__["WeatherActionsComponent"],
                        _components_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_6__["WeatherIconComponent"],
                        _components_weather_current_description_weather_current_description_component__WEBPACK_IMPORTED_MODULE_7__["WeatherCurrentDescriptionComponent"],
                        _components_weather_location_weather_location_component__WEBPACK_IMPORTED_MODULE_10__["WeatherLocationComponent"],
                        _components_weather_current_wind_weather_current_wind_component__WEBPACK_IMPORTED_MODULE_11__["WeatherCurrentWindComponent"],
                        _components_weather_current_details_weather_current_details_component__WEBPACK_IMPORTED_MODULE_13__["WeatherCurrentDetailsComponent"],
                        _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_14__["WeatherForecastComponent"],
                        _components_weather_forecast_forecast_simple_grid_weather_forecast_grid_day_component__WEBPACK_IMPORTED_MODULE_16__["WeatherForecastGridDayComponent"],
                        _components_weather_forecast_forecast_simple_grid_forecast_simple_grid_component__WEBPACK_IMPORTED_MODULE_15__["WeatherForecastSimpleGridComponent"],
                        _components_weather_forecast_forecast_detailed_forecast_detailed_component__WEBPACK_IMPORTED_MODULE_17__["WeatherForecastDetailedComponent"],
                        _components_weather_forecast_forecast_detailed_forecast_detailed_day_component__WEBPACK_IMPORTED_MODULE_18__["WeatherForecastDetailDayComponent"],
                        _components_weather_forecast_forecast_simple_grid_forecast_chart_wide_component__WEBPACK_IMPORTED_MODULE_20__["WeatherForecastChartWideComponent"]
                    ],
                    exports: [_weather_container__WEBPACK_IMPORTED_MODULE_4__["WeatherContainer"]]
                },] },
    ];
    /** @nocollapse */
    AngularWeatherWidgetModule.ctorParameters = function () { return []; };
    return AngularWeatherWidgetModule;
}());



//# sourceMappingURL=angular-weather-widget.module.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/chart/chart.component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/chart/chart.component.js ***!
  \*********************************************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);


var ChartComponent = (function () {
    function ChartComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.elementRef.nativeElement.querySelector('canvas'), {
            type: this.type,
            data: this.data,
            options: this.options
        });
    };
    ChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.chart && changes['data']) {
            var currentValue_1 = changes['data'].currentValue;
            ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(function (property) {
                _this.chart.data[property] = currentValue_1[property];
            });
            this.chart.update();
        }
    };
    ChartComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-chart',
                    template: '<canvas></canvas>',
                    styles: [':host { display: block; }']
                },] },
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ChartComponent.propDecorators = {
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'data': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'options': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ChartComponent;
}());

//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-actions/actions.component.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-actions/actions.component.js ***!
  \*********************************************************************************************/
/*! exports provided: WeatherActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherActionsComponent", function() { return WeatherActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WeatherActionsComponent = (function () {
    function WeatherActionsComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WeatherActionsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-actions',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n    button {\n      border: none;\n      background: transparent;\n      cursor: pointer;\n      font-size: 1.6em;\n      border-radius: 50%;\n      color: inherit;\n    }\n    button:hover {\n      background: rgba(0,0,0, 0.1);\n    }\n  "
                    ],
                    template: "\n    <button (click)=\"update.emit()\"><i class=\"wi wi-refresh\"></i></button>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherActionsComponent.ctorParameters = function () { return []; };
    WeatherActionsComponent.propDecorators = {
        'update': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return WeatherActionsComponent;
}());

//# sourceMappingURL=actions.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-current-description/weather-current-description.component.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-current-description/weather-current-description.component.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: WeatherCurrentDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCurrentDescriptionComponent", function() { return WeatherCurrentDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WeatherCurrentDescriptionComponent = (function () {
    function WeatherCurrentDescriptionComponent() {
    }
    WeatherCurrentDescriptionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-current-description',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n           :host {\n             display: block;\n             text-align: center;\n           }\n           "
                    ],
                    template: "\n    {{ descripion | uppercase}}\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherCurrentDescriptionComponent.ctorParameters = function () { return []; };
    WeatherCurrentDescriptionComponent.propDecorators = {
        'descripion': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherCurrentDescriptionComponent;
}());

//# sourceMappingURL=weather-current-description.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-current-details/weather-current-details.component.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-current-details/weather-current-details.component.js ***!
  \*********************************************************************************************************************/
/*! exports provided: WeatherCurrentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCurrentDetailsComponent", function() { return WeatherCurrentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WeatherCurrentDetailsComponent = (function () {
    function WeatherCurrentDetailsComponent() {
    }
    WeatherCurrentDetailsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-current-details',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n    :host {\n      font-size: 0.8em;\n      text-align: center;\n      margin-top: 1em;\n    }\n    .row {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center;\n    }\n    .row span {\n      margin: 0 0.3em;\n    }\n    .wi {\n      margin-right: 0.3em;\n    }\n  "
                    ],
                    template: "\n    <div class=\"row\">\n      <i class=\"wi wi-thermometer\"></i>\n      <span>\n          <span>Min: {{minTemp}}&deg;</span>\n          <span>Max: {{maxTemp}}&deg;</span>\n      </span>\n\n    </div>\n    <div class=\"row\">\n      <span><i class=\"wi wi-barometer\"></i>Pressure: {{pressure}}</span>\n      <span><i class=\"wi wi-humidity\"></i>Humidity: {{humidity}}%</span>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherCurrentDetailsComponent.ctorParameters = function () { return []; };
    WeatherCurrentDetailsComponent.propDecorators = {
        'maxTemp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'minTemp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pressure': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'humidity': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherCurrentDetailsComponent;
}());

//# sourceMappingURL=weather-current-details.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-current-temperature/current-temperature.component.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-current-temperature/current-temperature.component.js ***!
  \*********************************************************************************************************************/
/*! exports provided: WeatherCurrentTempComponent, TemperatureScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCurrentTempComponent", function() { return WeatherCurrentTempComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureScale", function() { return TemperatureScale; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WeatherCurrentTempComponent = (function () {
    function WeatherCurrentTempComponent() {
        this._deg = TemperatureScale.CELCIUS;
    }
    Object.defineProperty(WeatherCurrentTempComponent.prototype, "deg", {
        get: function () {
            return this._deg;
        },
        set: function (value) {
            this._deg = value;
            switch (value) {
                case TemperatureScale.CELCIUS:
                    this.unitSymbol = 'C';
                    break;
                case TemperatureScale.FAHRENHEIT:
                    this.unitSymbol = 'F';
                    break;
                case TemperatureScale.KELVIN:
                    this.unitSymbol = 'K';
                    break;
                default:
                    this.unitSymbol = 'C';
            }
        },
        enumerable: true,
        configurable: true
    });
    WeatherCurrentTempComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-current-temperature',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n  :host {\n    display: block;\n    line-height: 1.1em;\n  }\n    .deg {\n      letter-spacing: -0.13em;\n      position: relative;\n      left: -0.2em;\n    }\n  "
                    ],
                    template: "\n      {{ temp?.toFixed() }} <span *ngIf=\"temp\" class=\"deg\">&deg; {{ unitSymbol }}</span>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherCurrentTempComponent.ctorParameters = function () { return []; };
    WeatherCurrentTempComponent.propDecorators = {
        'temp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'deg': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherCurrentTempComponent;
}());

var TemperatureScale;
(function (TemperatureScale) {
    TemperatureScale[TemperatureScale["CELCIUS"] = 'celcius'] = "CELCIUS";
    TemperatureScale[TemperatureScale["KELVIN"] = 'kelvin'] = "KELVIN";
    TemperatureScale[TemperatureScale["FAHRENHEIT"] = 'fahrenheit'] = "FAHRENHEIT";
})(TemperatureScale || (TemperatureScale = {}));
//# sourceMappingURL=current-temperature.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-current-wind/weather-current-wind.component.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-current-wind/weather-current-wind.component.js ***!
  \***************************************************************************************************************/
/*! exports provided: WeatherCurrentWindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCurrentWindComponent", function() { return WeatherCurrentWindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-current-temperature/current-temperature.component */ "./node_modules/angular-weather-widget/components/weather-current-temperature/current-temperature.component.js");


var WeatherCurrentWindComponent = (function () {
    function WeatherCurrentWindComponent() {
    }
    Object.defineProperty(WeatherCurrentWindComponent.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (value) {
            this._scale = value;
            this.unit = this.mapScaleToText(this._scale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeatherCurrentWindComponent.prototype, "deg", {
        get: function () {
            return this._deg;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._deg = value;
            this.windIcon = "wi wi-wind from-" + this._deg + "-deg";
        },
        enumerable: true,
        configurable: true
    });
    WeatherCurrentWindComponent.prototype.mapScaleToText = function (scale) {
        switch (scale) {
            case _weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_1__["TemperatureScale"].CELCIUS:
            case _weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_1__["TemperatureScale"].KELVIN:
                return 'm/s';
            case _weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_1__["TemperatureScale"].FAHRENHEIT:
                return 'mil/h';
            default:
                return '';
        }
    };
    WeatherCurrentWindComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-current-wind',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n    :host {\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      font-size: 0.8em;\n      min-height: 1.3em;\n    }\n    i {\n      margin-left: 0.3em;\n      font-size: 1.6em;\n    }\n  "
                    ],
                    template: "\n    <span>Wind {{ speed }} {{ unit }}</span>\n   <i [class]=\"windIcon\"></i>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherCurrentWindComponent.ctorParameters = function () { return []; };
    WeatherCurrentWindComponent.propDecorators = {
        'scale': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'deg': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'speed': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherCurrentWindComponent;
}());

//# sourceMappingURL=weather-current-wind.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-detailed/forecast-detailed-day.component.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-forecast/forecast-detailed/forecast-detailed-day.component.js ***!
  \******************************************************************************************************************************/
/*! exports provided: WeatherForecastDetailDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastDetailDayComponent", function() { return WeatherForecastDetailDayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/weather-helpers.service */ "./node_modules/angular-weather-widget/services/weather-helpers.service.js");


var WeatherForecastDetailDayComponent = (function () {
    function WeatherForecastDetailDayComponent(weatherHelpers) {
        this.weatherHelpers = weatherHelpers;
    }
    Object.defineProperty(WeatherForecastDetailDayComponent.prototype, "forecast", {
        get: function () {
            return this._forecast;
        },
        set: function (value) {
            this._forecast = value;
        },
        enumerable: true,
        configurable: true
    });
    WeatherForecastDetailDayComponent.prototype.ngOnChanges = function (change) {
        if (this.settings && change['forecast']) {
            this.updateChartOptions();
            this.chartData = this.weatherHelpers.mapForecastToCharts(this._forecast, this.settings.color);
        }
    };
    WeatherForecastDetailDayComponent.prototype.updateChartOptions = function () {
        this.chartOptions = {
            scales: {
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            unit: 'hour',
                            isoWeekday: true,
                            displayFormats: {
                                hour: 'hA'
                            },
                            tooltipFormat: 'LLL'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: true,
                            fontColor: this.settings && this.settings.color
                                ? this.weatherHelpers.hexToRgbA(this.settings.color, '0.8')
                                : 'white',
                            fontSize: 9,
                            maxTicksLimit: 3
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: this.settings && this.settings.color
                                ? this.weatherHelpers.hexToRgbA(this.settings.color, '0.8')
                                : 'white',
                            fontSize: 9,
                            autoSkip: true,
                            labelOffset: 0,
                            mirror: false,
                            maxTicksLimit: 3,
                            callback: function (value, index, values) {
                                return value;
                            }
                        }
                    }
                ]
            },
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            },
            title: {
                display: false
            }
        };
    };
    WeatherForecastDetailDayComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-forecast-detail-day',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n             :host {\n               display: flex;\n               align-items: center;\n               padding: 0.1em 0;\n               font-size: 1em;\n               box-sizing: border-box;\n               justify-content: flex-start;\n               width: 100%;\n\n             }\n             :host > * {\n               padding: 0 0.4em;\n             }\n             .left {\n               flex-grow: 0;\n             }\n             weather-chart {\n               height: 80px;\n               width: 80%;\n               flex: 1 1;\n             }\n\n             weather-icon {\n               margin-top: 0.3em;\n               font-size: 1.4em;\n               display: block;\n             }\n           "
                    ],
                    template: "\n    <div class=\"left\">\n      {{forecast[0]?.data | date:'EEE' }}\n      <weather-icon [iconClass]=\"forecast[0]?.iconClass\"></weather-icon>\n    </div>\n    <weather-chart\n      [type]=\"'line'\"\n      [data]=\"chartData\"\n      [options]=\"chartOptions\"\n    ></weather-chart>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastDetailDayComponent.ctorParameters = function () { return [
        { type: _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_1__["WeatherHelpersService"], },
    ]; };
    WeatherForecastDetailDayComponent.propDecorators = {
        'settings': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'forecast': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherForecastDetailDayComponent;
}());

//# sourceMappingURL=forecast-detailed-day.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-detailed/forecast-detailed.component.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-forecast/forecast-detailed/forecast-detailed.component.js ***!
  \**************************************************************************************************************************/
/*! exports provided: WeatherForecastDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastDetailedComponent", function() { return WeatherForecastDetailedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/weather-helpers.service */ "./node_modules/angular-weather-widget/services/weather-helpers.service.js");


var WeatherForecastDetailedComponent = (function () {
    function WeatherForecastDetailedComponent(weatherHelpers) {
        this.weatherHelpers = weatherHelpers;
        this.forecastPerDay = [];
    }
    Object.defineProperty(WeatherForecastDetailedComponent.prototype, "forecast", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._forecast = value;
            this.forecastPerDay = this.weatherHelpers.groupForecastsByDay(value);
        },
        enumerable: true,
        configurable: true
    });
    WeatherForecastDetailedComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-forecast-detailed',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [""],
                    template: "\n    <ng-container *ngFor=\"let forecast of forecastPerDay\">\n      <weather-forecast-detail-day\n        [settings]=\"settings\"\n        [forecast]=\"forecast\"></weather-forecast-detail-day>\n    </ng-container>\n\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastDetailedComponent.ctorParameters = function () { return [
        { type: _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_1__["WeatherHelpersService"], },
    ]; };
    WeatherForecastDetailedComponent.propDecorators = {
        'forecast': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'settings': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherForecastDetailedComponent;
}());

//# sourceMappingURL=forecast-detailed.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-simple-grid/forecast-chart-wide.component.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-forecast/forecast-simple-grid/forecast-chart-wide.component.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: WeatherForecastChartWideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastChartWideComponent", function() { return WeatherForecastChartWideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/weather-helpers.service */ "./node_modules/angular-weather-widget/services/weather-helpers.service.js");


var WeatherForecastChartWideComponent = (function () {
    function WeatherForecastChartWideComponent(helpers) {
        this.helpers = helpers;
    }
    WeatherForecastChartWideComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-forecast-chart-wide',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n           "
                    ],
                    template: "\n    <div>\n\n    </div>\n\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastChartWideComponent.ctorParameters = function () { return [
        { type: _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_1__["WeatherHelpersService"], },
    ]; };
    WeatherForecastChartWideComponent.propDecorators = {
        'forecast': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherForecastChartWideComponent;
}());

//# sourceMappingURL=forecast-chart-wide.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-simple-grid/forecast-simple-grid.component.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-forecast/forecast-simple-grid/forecast-simple-grid.component.js ***!
  \********************************************************************************************************************************/
/*! exports provided: WeatherForecastSimpleGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastSimpleGridComponent", function() { return WeatherForecastSimpleGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/weather-helpers.service */ "./node_modules/angular-weather-widget/services/weather-helpers.service.js");


var WeatherForecastSimpleGridComponent = (function () {
    function WeatherForecastSimpleGridComponent(weatherHelpers) {
        this.weatherHelpers = weatherHelpers;
    }
    Object.defineProperty(WeatherForecastSimpleGridComponent.prototype, "forecast", {
        get: function () {
            return this._forecast;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._forecast = value;
            this.forecastPerDay = this.weatherHelpers.reduceToAveragePerDay(this._forecast);
        },
        enumerable: true,
        configurable: true
    });
    WeatherForecastSimpleGridComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-forecast-simple-grid',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n           :host {\n             display: flex;\n             width: 100%;\n             justify-content: space-between;\n           }\n           weather-forecast-grid-day {\n             margin: 0 0.4em;\n           }\n           "
                    ],
                    template: "\n    <ng-container *ngFor=\"let forecast of forecastPerDay\">\n      <weather-forecast-grid-day [forecast]=\"forecast\"></weather-forecast-grid-day>\n    </ng-container>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastSimpleGridComponent.ctorParameters = function () { return [
        { type: _services_weather_helpers_service__WEBPACK_IMPORTED_MODULE_1__["WeatherHelpersService"], },
    ]; };
    WeatherForecastSimpleGridComponent.propDecorators = {
        'forecast': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherForecastSimpleGridComponent;
}());

//# sourceMappingURL=forecast-simple-grid.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-forecast/forecast-simple-grid/weather-forecast-grid-day.component.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-forecast/forecast-simple-grid/weather-forecast-grid-day.component.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: WeatherForecastGridDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastGridDayComponent", function() { return WeatherForecastGridDayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WeatherForecastGridDayComponent = (function () {
    function WeatherForecastGridDayComponent() {
    }
    WeatherForecastGridDayComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-forecast-grid-day',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n   :host {\n     display: flex;\n     flex-direction: column;\n     justify-content: center;\n     align-items: center;\n     font-size: 1.2em;\n   }\n   weather-icon {\n     font-size: 1.4em;\n   }\n   .day {\n     font-size: 0.8em\n   }\n "
                    ],
                    template: "\n      <weather-icon [iconClass]=\"forecast?.iconClass\"></weather-icon>\n      <weather-current-temperature [temp]=\"forecast?.temp\"></weather-current-temperature>\n      <div class=\"day\">{{forecast?.data | date:'EEE' }}</div>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastGridDayComponent.ctorParameters = function () { return []; };
    WeatherForecastGridDayComponent.propDecorators = {
        'forecast': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherForecastGridDayComponent;
}());

//# sourceMappingURL=weather-forecast-grid-day.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-forecast/weather-forecast.component.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-forecast/weather-forecast.component.js ***!
  \*******************************************************************************************************/
/*! exports provided: WeatherForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastComponent", function() { return WeatherForecastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../weather.interfaces */ "./node_modules/angular-weather-widget/weather.interfaces.js");


var WeatherForecastComponent = (function () {
    function WeatherForecastComponent() {
        this.isGridForecast = true;
    }
    Object.defineProperty(WeatherForecastComponent.prototype, "mode", {
        set: function (value) {
            if (!value) {
                return;
            }
            switch (value) {
                case _weather_interfaces__WEBPACK_IMPORTED_MODULE_1__["ForecastMode"].GRID:
                    this.isGridForecast = true;
                    break;
                case _weather_interfaces__WEBPACK_IMPORTED_MODULE_1__["ForecastMode"].DETAILED:
                    this.isGridForecast = false;
                    break;
                default:
                    this.isGridForecast = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeatherForecastComponent.prototype, "forecast", {
        get: function () {
            return this._forecast;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._forecast = value;
        },
        enumerable: true,
        configurable: true
    });
    WeatherForecastComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-forecast',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n             :host {\n               margin-top: 1em;\n               display: block;\n               width: 100%;\n               box-sizing: border-box;\n             }\n           "
                    ],
                    template: "\n    <weather-forecast-simple-grid\n      *ngIf=\"isGridForecast\"\n      [forecast]=\"forecast\"></weather-forecast-simple-grid>\n    <weather-forecast-detailed\n      *ngIf=\"!isGridForecast\"\n      [settings]=\"settings\"\n      [forecast]=\"forecast\"></weather-forecast-detailed>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastComponent.ctorParameters = function () { return []; };
    WeatherForecastComponent.propDecorators = {
        'mode': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'settings': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'forecast': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherForecastComponent;
}());

//# sourceMappingURL=weather-forecast.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-icon/weather-icon.component.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-icon/weather-icon.component.js ***!
  \***********************************************************************************************/
/*! exports provided: WeatherIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherIconComponent", function() { return WeatherIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WeatherIconComponent = (function () {
    function WeatherIconComponent() {
    }
    WeatherIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-icon',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [""],
                    template: "\n    <i *ngIf=\"iconClass\" [class]=\"iconClass\"></i>\n    <img *ngIf=\"iconImageUrl && !iconClass\" [src]=\"iconImageUrl\">\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherIconComponent.ctorParameters = function () { return []; };
    WeatherIconComponent.propDecorators = {
        'iconClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'iconImageUrl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'title': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherIconComponent;
}());

//# sourceMappingURL=weather-icon.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/components/weather-location/weather-location.component.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/components/weather-location/weather-location.component.js ***!
  \*******************************************************************************************************/
/*! exports provided: WeatherLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherLocationComponent", function() { return WeatherLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WeatherLocationComponent = (function () {
    function WeatherLocationComponent() {
    }
    WeatherLocationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-location',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [
                        "\n    :host {\n      margin-top: 1em;\n      font-size: 1em;\n    }\n  "
                    ],
                    template: "\n    {{ place }}\n\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherLocationComponent.ctorParameters = function () { return []; };
    WeatherLocationComponent.propDecorators = {
        'place': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WeatherLocationComponent;
}());

//# sourceMappingURL=weather-location.component.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/index.js":
/*!******************************************************!*\
  !*** ./node_modules/angular-weather-widget/index.js ***!
  \******************************************************/
/*! exports provided: apiServiceFactory, forRoot, AngularWeatherWidgetModule, WeatherApiName, WeatherSettings, ForecastMode, TemperatureScale, WeatherLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_weather_widget_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-weather-widget.module */ "./node_modules/angular-weather-widget/angular-weather-widget.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apiServiceFactory", function() { return _angular_weather_widget_module__WEBPACK_IMPORTED_MODULE_0__["apiServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forRoot", function() { return _angular_weather_widget_module__WEBPACK_IMPORTED_MODULE_0__["forRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularWeatherWidgetModule", function() { return _angular_weather_widget_module__WEBPACK_IMPORTED_MODULE_0__["AngularWeatherWidgetModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherApiName", function() { return _angular_weather_widget_module__WEBPACK_IMPORTED_MODULE_0__["WeatherApiName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherSettings", function() { return _angular_weather_widget_module__WEBPACK_IMPORTED_MODULE_0__["WeatherSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForecastMode", function() { return _angular_weather_widget_module__WEBPACK_IMPORTED_MODULE_0__["ForecastMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemperatureScale", function() { return _angular_weather_widget_module__WEBPACK_IMPORTED_MODULE_0__["TemperatureScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherLayout", function() { return _angular_weather_widget_module__WEBPACK_IMPORTED_MODULE_0__["WeatherLayout"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/services/api/open-weather-map/open-weather-map-to-weather-icons.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/services/api/open-weather-map/open-weather-map-to-weather-icons.js ***!
  \****************************************************************************************************************/
/*! exports provided: iconCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconCodes", function() { return iconCodes; });
var iconCodes = {
    '200': {
        label: 'thunderstorm with light rain',
        icon: 'storm-showers'
    },
    '201': {
        label: 'thunderstorm with rain',
        icon: 'storm-showers'
    },
    '202': {
        label: 'thunderstorm with heavy rain',
        icon: 'storm-showers'
    },
    '210': {
        label: 'light thunderstorm',
        icon: 'storm-showers'
    },
    '211': {
        label: 'thunderstorm',
        icon: 'thunderstorm'
    },
    '212': {
        label: 'heavy thunderstorm',
        icon: 'thunderstorm'
    },
    '221': {
        label: 'ragged thunderstorm',
        icon: 'thunderstorm'
    },
    '230': {
        label: 'thunderstorm with light drizzle',
        icon: 'storm-showers'
    },
    '231': {
        label: 'thunderstorm with drizzle',
        icon: 'storm-showers'
    },
    '232': {
        label: 'thunderstorm with heavy drizzle',
        icon: 'storm-showers'
    },
    '300': {
        label: 'light intensity drizzle',
        icon: 'sprinkle'
    },
    '301': {
        label: 'drizzle',
        icon: 'sprinkle'
    },
    '302': {
        label: 'heavy intensity drizzle',
        icon: 'sprinkle'
    },
    '310': {
        label: 'light intensity drizzle rain',
        icon: 'sprinkle'
    },
    '311': {
        label: 'drizzle rain',
        icon: 'sprinkle'
    },
    '312': {
        label: 'heavy intensity drizzle rain',
        icon: 'sprinkle'
    },
    '313': {
        label: 'shower rain and drizzle',
        icon: 'sprinkle'
    },
    '314': {
        label: 'heavy shower rain and drizzle',
        icon: 'sprinkle'
    },
    '321': {
        label: 'shower drizzle',
        icon: 'sprinkle'
    },
    '500': {
        label: 'light rain',
        icon: 'rain'
    },
    '501': {
        label: 'moderate rain',
        icon: 'rain'
    },
    '502': {
        label: 'heavy intensity rain',
        icon: 'rain'
    },
    '503': {
        label: 'very heavy rain',
        icon: 'rain'
    },
    '504': {
        label: 'extreme rain',
        icon: 'rain'
    },
    '511': {
        label: 'freezing rain',
        icon: 'rain-mix'
    },
    '520': {
        label: 'light intensity shower rain',
        icon: 'showers'
    },
    '521': {
        label: 'shower rain',
        icon: 'showers'
    },
    '522': {
        label: 'heavy intensity shower rain',
        icon: 'showers'
    },
    '531': {
        label: 'ragged shower rain',
        icon: 'showers'
    },
    '600': {
        label: 'light snow',
        icon: 'snow'
    },
    '601': {
        label: 'snow',
        icon: 'snow'
    },
    '602': {
        label: 'heavy snow',
        icon: 'snow'
    },
    '611': {
        label: 'sleet',
        icon: 'sleet'
    },
    '612': {
        label: 'shower sleet',
        icon: 'sleet'
    },
    '615': {
        label: 'light rain and snow',
        icon: 'rain-mix'
    },
    '616': {
        label: 'rain and snow',
        icon: 'rain-mix'
    },
    '620': {
        label: 'light shower snow',
        icon: 'rain-mix'
    },
    '621': {
        label: 'shower snow',
        icon: 'rain-mix'
    },
    '622': {
        label: 'heavy shower snow',
        icon: 'rain-mix'
    },
    '701': {
        label: 'mist',
        icon: 'sprinkle'
    },
    '711': {
        label: 'smoke',
        icon: 'smoke'
    },
    '721': {
        label: 'haze',
        icon: 'day-haze'
    },
    '731': {
        label: 'sand, dust whirls',
        icon: 'cloudy-gusts'
    },
    '741': {
        label: 'fog',
        icon: 'fog'
    },
    '751': {
        label: 'sand',
        icon: 'cloudy-gusts'
    },
    '761': {
        label: 'dust',
        icon: 'dust'
    },
    '762': {
        label: 'volcanic ash',
        icon: 'smog'
    },
    '771': {
        label: 'squalls',
        icon: 'day-windy'
    },
    '781': {
        label: 'tornado',
        icon: 'tornado'
    },
    '800': {
        label: 'clear sky',
        icon: 'sunny'
    },
    '801': {
        label: 'few clouds',
        icon: 'cloudy'
    },
    '802': {
        label: 'scattered clouds',
        icon: 'cloudy'
    },
    '803': {
        label: 'broken clouds',
        icon: 'cloudy'
    },
    '804': {
        label: 'overcast clouds',
        icon: 'cloudy'
    },
    '900': {
        label: 'tornado',
        icon: 'tornado'
    },
    '901': {
        label: 'tropical storm',
        icon: 'hurricane'
    },
    '902': {
        label: 'hurricane',
        icon: 'hurricane'
    },
    '903': {
        label: 'cold',
        icon: 'snowflake-cold'
    },
    '904': {
        label: 'hot',
        icon: 'hot'
    },
    '905': {
        label: 'windy',
        icon: 'windy'
    },
    '906': {
        label: 'hail',
        icon: 'hail'
    },
    '951': {
        label: 'calm',
        icon: 'sunny'
    },
    '952': {
        label: 'light breeze',
        icon: 'cloudy-gusts'
    },
    '953': {
        label: 'gentle breeze',
        icon: 'cloudy-gusts'
    },
    '954': {
        label: 'moderate breeze',
        icon: 'cloudy-gusts'
    },
    '955': {
        label: 'fresh breeze',
        icon: 'cloudy-gusts'
    },
    '956': {
        label: 'strong breeze',
        icon: 'cloudy-gusts'
    },
    '957': {
        label: 'high wind, near gale',
        icon: 'cloudy-gusts'
    },
    '958': {
        label: 'gale',
        icon: 'cloudy-gusts'
    },
    '959': {
        label: 'severe gale',
        icon: 'cloudy-gusts'
    },
    '960': {
        label: 'storm',
        icon: 'thunderstorm'
    },
    '961': {
        label: 'violent storm',
        icon: 'thunderstorm'
    },
    '962': {
        label: 'hurricane',
        icon: 'cloudy-gusts'
    }
};
//# sourceMappingURL=open-weather-map-to-weather-icons.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/services/api/open-weather-map/open-weather-map.api.service.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/services/api/open-weather-map/open-weather-map.api.service.js ***!
  \***********************************************************************************************************/
/*! exports provided: OpenWeatherMapApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWeatherMapApiService", function() { return OpenWeatherMapApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/weather-current-temperature/current-temperature.component */ "./node_modules/angular-weather-widget/components/weather-current-temperature/current-temperature.component.js");
/* harmony import */ var _poling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../poling.service */ "./node_modules/angular-weather-widget/services/poling.service.js");
/* harmony import */ var _weather_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../weather.api.service */ "./node_modules/angular-weather-widget/services/api/weather.api.service.js");
/* harmony import */ var _open_weather_map_to_weather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-weather-map-to-weather-icons */ "./node_modules/angular-weather-widget/services/api/open-weather-map/open-weather-map-to-weather-icons.js");







var OpenWeatherMapApiService = (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OpenWeatherMapApiService, _super);
    function OpenWeatherMapApiService(http, poolingService, apiConfig) {
        var _this = _super.call(this, http, poolingService, apiConfig) || this;
        _this.http = http;
        _this.poolingService = poolingService;
        _this.apiConfig = apiConfig;
        _this.iconCodes = _open_weather_map_to_weather_icons__WEBPACK_IMPORTED_MODULE_6__["iconCodes"];
        return _this;
    }
    OpenWeatherMapApiService.prototype.mapQueryParams = function (params) {
        var mapped = {
            id: params.cityId,
            q: params.cityName,
            lat: params.latLng ? params.latLng.lat : undefined,
            lon: params.latLng ? params.latLng.lng : undefined,
            zip: params.zipCode,
            units: params.units ? this.mapUnits(params.units) : undefined,
            lang: params.lang
        };
        return mapped;
    };
    OpenWeatherMapApiService.prototype.mapCurrentWeatherResponse = function (response) {
        if (!response) {
            return {};
        }
        var weather = {
            temp: response.main.temp,
            pressure: response.main ? response.main.pressure : undefined,
            humidity: response.main ? response.main.humidity : undefined,
            minTemp: response.main && response.main.temp
                ? response.main.temp_min
                : undefined,
            maxTemp: response.main && response.main.temp
                ? response.main.temp_max
                : undefined,
            sunrise: response.sys ? response.sys.sunrise : undefined,
            sunset: response.sys ? response.sys.sunset : undefined,
            location: response.name,
            iconUrl: this.mapResponseToIconUrl(response),
            iconClass: this.mapResponseToIconClass(response),
            description: response.weather[0].description,
            wind: {
                deg: response.wind.deg,
                speed: response.wind.speed
            }
        };
        return weather;
    };
    OpenWeatherMapApiService.prototype.mapForecastResponse = function (response) {
        var _this = this;
        if (!response) {
            return [];
        }
        var city = response.city;
        return response.list.map(function (el) {
            var forecast = {
                temp: el.main.temp,
                pressure: el.main.pressure,
                humidity: el.main.humidity,
                minTemp: el.main.temp_min,
                maxTemp: el.main.temp_max,
                location: city.name,
                iconClass: _this.mapResponseToIconClass(el),
                description: el.weather[0].description,
                data: new Date(el.dt * 1000),
                wind: {
                    deg: el.wind.deg,
                    speed: el.wind.speed
                }
            };
            return forecast;
        });
    };
    OpenWeatherMapApiService.prototype.mapResponseToIconUrl = function (response) {
        return "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    };
    OpenWeatherMapApiService.prototype.mapResponseToIconClass = function (response) {
        var code = response.weather[0].id;
        var prefix = 'wi wi-';
        var icon = _open_weather_map_to_weather_icons__WEBPACK_IMPORTED_MODULE_6__["iconCodes"][code].icon;
        // If we are not in the ranges mentioned above, add a day/night prefix.
        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
        }
        icon = prefix + icon;
        return icon;
    };
    OpenWeatherMapApiService.prototype.setTokenKey = function () {
        return 'APPID';
    };
    OpenWeatherMapApiService.prototype.mapUnits = function (unit) {
        switch (unit) {
            case _components_weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_3__["TemperatureScale"].CELCIUS:
                return 'metric';
            case _components_weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_3__["TemperatureScale"].FAHRENHEIT:
                return 'imperial';
            case _components_weather_current_temperature_current_temperature_component__WEBPACK_IMPORTED_MODULE_3__["TemperatureScale"].KELVIN:
                return;
            default:
                return 'metric';
        }
    };
    OpenWeatherMapApiService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    OpenWeatherMapApiService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], },
        { type: _poling_service__WEBPACK_IMPORTED_MODULE_4__["PoolingService"], },
        { type: _weather_api_service__WEBPACK_IMPORTED_MODULE_5__["WeatherApiConfig"], },
    ]; };
    return OpenWeatherMapApiService;
}(_weather_api_service__WEBPACK_IMPORTED_MODULE_5__["WeatherApiService"]));

//# sourceMappingURL=open-weather-map.api.service.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/services/api/weather.api.service.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/services/api/weather.api.service.js ***!
  \*********************************************************************************/
/*! exports provided: WeatherApiService, WeatherApiConfig, WeatherApiName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherApiService", function() { return WeatherApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherApiConfig", function() { return WeatherApiConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherApiName", function() { return WeatherApiName; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _poling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../poling.service */ "./node_modules/angular-weather-widget/services/poling.service.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_first__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/first */ "./node_modules/rxjs-compat/_esm5/add/operator/first.js");







var WeatherApiService = (function () {
    function WeatherApiService(http, poolingService, apiConfig) {
        this.http = http;
        this.poolingService = poolingService;
        this.apiConfig = apiConfig;
        this.poollingInterval = 60000 * 60;
    }
    WeatherApiService.prototype.currentWeather = function (queryParams) {
        return this.callApi(queryParams, '/weather').map(this.mapCurrentWeatherResponse.bind(this));
    };
    WeatherApiService.prototype.forecast = function (queryParams) {
        return this.callApi(queryParams, '/forecast').map(this.mapForecastResponse.bind(this));
    };
    WeatherApiService.prototype.callApi = function (queryParams, endpoint) {
        var params = this.mapQueryParams(queryParams);
        var requestOptions = this.getRequestOptions(params);
        var apiCall = this.http
            .get(this.apiConfig.baseUrl + "/" + endpoint, requestOptions)
            .map(function (resp) { return resp.json(); })
            .filter(function (el) { return !!el; });
        return this.wrapWithPoll(apiCall);
    };
    WeatherApiService.prototype.setTokenKey = function () {
        // Implement it in child service
        return '';
    };
    WeatherApiService.prototype.mapQueryParams = function (params) {
        // Implement it in child service
        return;
    };
    WeatherApiService.prototype.mapCurrentWeatherResponse = function (response) {
        // Implement it in child service
        return {};
    };
    WeatherApiService.prototype.mapForecastResponse = function (response) {
        // Implement it in child service
        return [];
    };
    WeatherApiService.prototype.mapResponseToIconUrl = function (response) {
        return '';
    };
    WeatherApiService.prototype.mapResponseToIconClass = function (response) {
        return '';
    };
    WeatherApiService.prototype.wrapWithPoll = function (apiCall) {
        return this.poolingService.execute(function () { return apiCall; }, this.poollingInterval);
    };
    WeatherApiService.prototype.getRequestOptions = function (queryParams) {
        return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"](),
            params: this.getQueryParams(queryParams)
        });
    };
    WeatherApiService.prototype.getQueryParams = function (obj) {
        var queryParams = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        queryParams.set(this.setTokenKey(), this.apiConfig.key);
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                queryParams.set(key.toString(), obj[key]);
            }
        }
        return queryParams;
    };
    WeatherApiService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    WeatherApiService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], },
        { type: _poling_service__WEBPACK_IMPORTED_MODULE_2__["PoolingService"], },
        { type: WeatherApiConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['WEATHER_CONFIG',] },] },
    ]; };
    return WeatherApiService;
}());

var WeatherApiConfig = (function () {
    function WeatherApiConfig() {
        this.name = WeatherApiName.OPEN_WEATHER_MAP;
        this.key = 'provide secret key';
        this.baseUrl = 'http://api.openweathermap.org/data/2.5';
    }
    return WeatherApiConfig;
}());

var WeatherApiName;
(function (WeatherApiName) {
    WeatherApiName[WeatherApiName["OPEN_WEATHER_MAP"] = 'Open Weather Map'] = "OPEN_WEATHER_MAP";
})(WeatherApiName || (WeatherApiName = {}));
//# sourceMappingURL=weather.api.service.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/services/poling.service.js":
/*!************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/services/poling.service.js ***!
  \************************************************************************/
/*! exports provided: PoolingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolingService", function() { return PoolingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var rxjs_add_operator_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/merge */ "./node_modules/rxjs-compat/_esm5/add/operator/merge.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_multicast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/multicast */ "./node_modules/rxjs-compat/_esm5/add/operator/multicast.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");







var PoolingService = (function () {
    function PoolingService(zone) {
        this.zone = zone;
    }
    // NOTE: Running the interval outside Angular ensures that e2e tests will not hang.
    PoolingService.prototype.execute = function (operation, frequency) {
        var _this = this;
        if (frequency === void 0) { frequency = 1000; }
        var subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        var source = rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
            var sub;
            _this.zone.runOutsideAngular(function () {
                var zone = _this.zone;
                sub = rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].interval(frequency).mergeMap(operation).subscribe({
                    next: function (result) {
                        zone.run(function () {
                            observer.next(result);
                        });
                    },
                    error: function (err) {
                        zone.run(function () {
                            observer.error(err);
                        });
                    }
                });
            });
            return function () {
                if (sub) {
                    sub.unsubscribe();
                }
            };
        });
        return source.multicast(subject).refCount().merge(operation());
    };
    PoolingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PoolingService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PoolingService;
}());

//# sourceMappingURL=poling.service.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/services/weather-helpers.service.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular-weather-widget/services/weather-helpers.service.js ***!
  \*********************************************************************************/
/*! exports provided: WeatherHelpersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherHelpersService", function() { return WeatherHelpersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WeatherHelpersService = (function () {
    function WeatherHelpersService() {
    }
    WeatherHelpersService.prototype.groupForecastsByDay = function (list) {
        var map = {};
        var result = [];
        list.forEach(function (el) {
            var day = el.data.getUTCDate();
            if (!map[day]) {
                map[day] = [el];
            }
            else {
                map[day].push(el);
            }
        });
        result = Object.keys(map).map(function (key) { return map[key]; });
        return result;
    };
    // Fixme: This function generates wrong icon for average day weather.
    // Weather icon is taken from first day measurement
    WeatherHelpersService.prototype.reduceToAveragePerDay = function (list) {
        return list.reduce(function (prev, curr) {
            if (curr && !curr.data) {
                prev.push(curr);
                return prev;
            }
            var lastElement = function () {
                return prev[prev.length - 1];
            };
            var prevDay = lastElement()
                ? prev[prev.length - 1].data.getDay()
                : null;
            var currDay = curr.data.getDay();
            if (currDay === prevDay) {
                var result = lastElement();
                result.temp = (result.temp + curr.temp) / 2;
                if (result.wind && curr.wind) {
                    result.wind = {
                        speed: (result.wind.speed + curr.wind.speed) / 2,
                        deg: (result.wind.deg + curr.wind.deg) / 2
                    };
                }
                if (result.humidity && curr.humidity) {
                    result.humidity = (result.humidity + curr.humidity) / 2;
                }
                if (result.pressure && curr.pressure) {
                    result.pressure = (result.pressure + curr.pressure) / 2;
                }
                prev[prev.length - 1] = result;
                return prev;
            }
            else {
                prev.push(curr);
                return prev;
            }
        }, []);
    };
    WeatherHelpersService.prototype.mapForecastToCharts = function (forecast, borderColor) {
        if (borderColor === void 0) { borderColor = '#aaa'; }
        return forecast.reduce(function (prev, curr) {
            if (prev.labels) {
                prev.labels.push(curr.data.toISOString());
            }
            if (prev.datasets && prev.datasets[0] && prev.datasets[0].data) {
                var data = prev.datasets[0].data;
                data.push(curr.temp);
            }
            return prev;
        }, {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: ['rgba(0, 0, 0, 0.1)'],
                    borderColor: [borderColor],
                    borderWidth: 1
                }
            ]
        });
    };
    WeatherHelpersService.prototype.hexToRgbA = function (hex, opacity) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + "," + opacity + ")";
        }
    };
    WeatherHelpersService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    WeatherHelpersService.ctorParameters = function () { return []; };
    return WeatherHelpersService;
}());

//# sourceMappingURL=weather-helpers.service.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/weather.container.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular-weather-widget/weather.container.js ***!
  \******************************************************************/
/*! exports provided: WeatherContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherContainer", function() { return WeatherContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_weather_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api/weather.api.service */ "./node_modules/angular-weather-widget/services/api/weather.api.service.js");
/* harmony import */ var _weather_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.interfaces */ "./node_modules/angular-weather-widget/weather.interfaces.js");



var WeatherContainer = (function () {
    function WeatherContainer(weatherApi, changeDetectorRef, renderer, element) {
        this.weatherApi = weatherApi;
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.element = element;
        this.width = 'auto';
        this.height = 'auto';
        this.isWideLayout = false;
    }
    Object.defineProperty(WeatherContainer.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._settings = value;
            this.background = this._settings.backgroundColor || 'white';
            this.color = this._settings.color || 'black';
            this.width = this._settings.width;
            this.height = this._settings.height;
            if (this.weatherApi.apiConfig.name && this.weatherApi.apiConfig.key) {
                this.getWeather();
            }
            if (this._settings.layout) {
                this.isWideLayout = this._settings.layout === _weather_interfaces__WEBPACK_IMPORTED_MODULE_2__["WeatherLayout"].WIDE;
            }
        },
        enumerable: true,
        configurable: true
    });
    WeatherContainer.prototype.ngOnDestroy = function () {
        if (this.subscriptionCurrentWeather) {
            this.subscriptionCurrentWeather.unsubscribe();
        }
        if (this.subscriptionForecast) {
            this.subscriptionForecast.unsubscribe();
        }
    };
    WeatherContainer.prototype.onMouseEnter = function () {
        this.renderer.addClass(this.element.nativeElement, 'active');
        this.isMouseOn = true;
    };
    WeatherContainer.prototype.onMouseLeave = function () {
        this.renderer.removeClass(this.element.nativeElement, 'active');
        this.isMouseOn = false;
    };
    WeatherContainer.prototype.getWeather = function () {
        var _this = this;
        if (this.subscriptionCurrentWeather) {
            this.subscriptionCurrentWeather.unsubscribe();
        }
        if (this.subscriptionForecast) {
            this.subscriptionForecast.unsubscribe();
        }
        this.currentWeather$ = this.currentWeatherCall();
        this.forecast$ = this.forecastCall();
        this.subscriptionCurrentWeather = this.currentWeather$.subscribe(function (data) {
            _this.currentWeather = data;
            _this.changeDetectorRef.markForCheck();
        });
        this.subscriptionForecast = this.forecast$.subscribe(function (data) {
            _this.forecast = data;
            _this.changeDetectorRef.markForCheck();
        });
    };
    WeatherContainer.prototype.currentWeatherCall = function () {
        var params = Object.assign({}, this.settings.location, { units: this.settings.scale }, { lang: this.settings.language });
        return this.weatherApi.currentWeather(params);
    };
    WeatherContainer.prototype.forecastCall = function () {
        var params = Object.assign({}, this.settings.location, { units: this.settings.scale }, { lang: this.settings.language });
        return this.weatherApi.forecast(params);
    };
    WeatherContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'weather-widget',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                    styles: [
                        "\n             :host {\n               display: flex;\n               position: relative;\n               padding: 1em;\n               box-sizing: border-box;\n             }\n             .info {\n               display: flex;\n               flex-direction: column;\n               align-items: center;\n               justify-content: center;\n               width: 100%;\n             }\n             .info.wide {\n               flex-direction: row;\n             }\n             .wide .current {\n               flex-grow: 0;\n             }\n             .wide .forecast {\n               flex-grow: 1;\n               overflow-y: auto;\n               height: 100%;\n             }\n             .current {\n               display: flex;\n               flex-direction: column;\n               align-items: center;\n               justify-content: center;\n               min-width: 140px;\n             }\n             .forecast {\n               min-width: 200px;\n               width: 100%;\n               overflow-y: auto;\n             }\n             .current, .forecast {\n               padding: 0.5em;\n             }\n             weather-actions {\n               display: block;\n               position: absolute;\n               top: 10px;\n               right: 10px;\n             }\n             weather-current-temperature.big {\n               font-size: 3em;\n             }\n             weather-icon.big {\n               font-size: 6em;\n               padding: 0.15em;\n             }\n             .empty {\n               flex-direction: row;\n             }\n             .empty i {\n               font-size: 3em;\n               margin-right: 0.3em;\n             }\n\n           "
                    ],
                    template: "\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons.min.css\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons-wind.min.css\">\n    <div *ngIf=\"currentWeather\" class=\"info\" [class.wide]=\"isWideLayout\">\n      <div class=\"current\">\n        <weather-icon\n          class=\"big\"\n          [iconImageUrl]=\"currentWeather?.iconUrl\"\n          [iconClass]=\"currentWeather?.iconClass\"></weather-icon>\n        <weather-current-description\n          [descripion]=\"currentWeather?.description\"></weather-current-description>\n        <weather-current-wind\n          *ngIf=\"settings.showWind\"\n          [scale]=\"settings.scale\"\n          [deg]=\"currentWeather?.wind.deg\"\n          [speed]=\"currentWeather?.wind.speed\"></weather-current-wind>\n        <weather-location [place]=\"currentWeather?.location\"></weather-location>\n        <weather-current-temperature\n          class=\"big\"\n          [temp]=\"currentWeather?.temp\"\n          [deg]=\"settings.scale\"></weather-current-temperature>\n        <weather-current-details\n          *ngIf=\"settings.showDetails\"\n          [maxTemp]=\"currentWeather?.maxTemp\"\n          [minTemp]=\"currentWeather?.minTemp\"\n          [pressure]=\"currentWeather?.pressure\"\n          [humidity]=\"currentWeather?.humidity\"></weather-current-details>\n      </div>\n      <div class=\"forecast\" *ngIf=\"settings.showForecast\">\n        <weather-forecast\n          [forecast]=\"forecast\"\n          [settings]=\"settings\"\n          [mode]=\"settings.forecastMode\"></weather-forecast>\n      </div>\n    </div>\n    <div *ngIf=\"!currentWeather\" class=\"info empty\">\n      <i class=\"wi wi-sunrise\"></i>\n      No weather data...\n    </div>\n    <weather-actions *ngIf=\"isMouseOn\" (update)=\"getWeather()\"></weather-actions>\n\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherContainer.ctorParameters = function () { return [
        { type: _services_api_weather_api_service__WEBPACK_IMPORTED_MODULE_1__["WeatherApiService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    WeatherContainer.propDecorators = {
        'background': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.background',] },],
        'color': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.color',] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] },],
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] },],
        'forecast': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'currentWeather': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'settings': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'onMouseEnter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] },],
        'onMouseLeave': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] },],
    };
    return WeatherContainer;
}());

//# sourceMappingURL=weather.container.js.map

/***/ }),

/***/ "./node_modules/angular-weather-widget/weather.interfaces.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-weather-widget/weather.interfaces.js ***!
  \*******************************************************************/
/*! exports provided: WeatherSettings, ForecastMode, TemperatureScale, WeatherLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherSettings", function() { return WeatherSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastMode", function() { return ForecastMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureScale", function() { return TemperatureScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherLayout", function() { return WeatherLayout; });
var WeatherSettings = (function () {
    function WeatherSettings() {
        this.location = { cityName: 'Szczecin' };
        this.scale = TemperatureScale.CELCIUS;
        this.backgroundColor = 'white';
        this.color = 'black';
        this.layout = WeatherLayout.NARROW;
    }
    return WeatherSettings;
}());

var ForecastMode;
(function (ForecastMode) {
    ForecastMode[ForecastMode["GRID"] = 'GRID'] = "GRID";
    ForecastMode[ForecastMode["DETAILED"] = 'DETAILED'] = "DETAILED";
})(ForecastMode || (ForecastMode = {}));
var TemperatureScale;
(function (TemperatureScale) {
    TemperatureScale[TemperatureScale["CELCIUS"] = 'celcius'] = "CELCIUS";
    TemperatureScale[TemperatureScale["KELVIN"] = 'kelvin'] = "KELVIN";
    TemperatureScale[TemperatureScale["FAHRENHEIT"] = 'fahrenheit'] = "FAHRENHEIT";
})(TemperatureScale || (TemperatureScale = {}));
var WeatherLayout;
(function (WeatherLayout) {
    WeatherLayout[WeatherLayout["WIDE"] = 'wide'] = "WIDE";
    WeatherLayout[WeatherLayout["NARROW"] = 'narrow'] = "NARROW";
})(WeatherLayout || (WeatherLayout = {}));
//# sourceMappingURL=weather.interfaces.js.map

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify-string.js":
/*!******************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify-string.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _linkify = __webpack_require__(/*! ./linkify */ "./node_modules/linkifyjs/lib/linkify.js");

var linkify = _interopRequireWildcard(_linkify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tokenize = linkify.tokenize,
    options = linkify.options; /**
                               	Convert strings of text into linkable HTML text
                               */

var Options = options.Options;


function escapeText(text) {
	return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(href) {
	return href.replace(/"/g, '&quot;');
}

function attributesToString(attributes) {
	if (!attributes) {
		return '';
	}
	var result = [];

	for (var attr in attributes) {
		var val = attributes[attr] + '';
		result.push(attr + '="' + escapeAttr(val) + '"');
	}
	return result.join(' ');
}

function linkifyStr(str) {
	var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	opts = new Options(opts);

	var tokens = tokenize(str);
	var result = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === 'nl' && opts.nl2br) {
			result.push('<br>\n');
			continue;
		} else if (!token.isLink || !opts.check(token)) {
			result.push(escapeText(token.toString()));
			continue;
		}

		var _opts$resolve = opts.resolve(token),
		    formatted = _opts$resolve.formatted,
		    formattedHref = _opts$resolve.formattedHref,
		    tagName = _opts$resolve.tagName,
		    className = _opts$resolve.className,
		    target = _opts$resolve.target,
		    attributes = _opts$resolve.attributes;

		var link = '<' + tagName + ' href="' + escapeAttr(formattedHref) + '"';

		if (className) {
			link += ' class="' + escapeAttr(className) + '"';
		}

		if (target) {
			link += ' target="' + escapeAttr(target) + '"';
		}

		if (attributes) {
			link += ' ' + attributesToString(attributes);
		}

		link += '>' + escapeText(formatted) + '</' + tagName + '>';
		result.push(link);
	}

	return result.join('');
}

if (!String.prototype.linkify) {
	try {
		Object.defineProperty(String.prototype, 'linkify', {
			set: function set() {},
			get: function get() {
				return function linkify(opts) {
					return linkifyStr(this, opts);
				};
			}
		});
	} catch (e) {
		// IE 8 doesn't like Object.defineProperty on non-DOM objects
		if (!String.prototype.linkify) {
			String.prototype.linkify = function (opts) {
				return linkifyStr(this, opts);
			};
		}
	}
}

exports.default = linkifyStr;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify.js":
/*!***********************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.tokenize = exports.test = exports.scanner = exports.parser = exports.options = exports.inherits = exports.find = undefined;

var _class = __webpack_require__(/*! ./linkify/utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _options = __webpack_require__(/*! ./linkify/utils/options */ "./node_modules/linkifyjs/lib/linkify/utils/options.js");

var options = _interopRequireWildcard(_options);

var _scanner = __webpack_require__(/*! ./linkify/core/scanner */ "./node_modules/linkifyjs/lib/linkify/core/scanner.js");

var scanner = _interopRequireWildcard(_scanner);

var _parser = __webpack_require__(/*! ./linkify/core/parser */ "./node_modules/linkifyjs/lib/linkify/core/parser.js");

var parser = _interopRequireWildcard(_parser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (!Array.isArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

/**
	Converts a string into tokens that represent linkable and non-linkable bits
	@method tokenize
	@param {String} str
	@return {Array} tokens
*/
var tokenize = function tokenize(str) {
	return parser.run(scanner.run(str));
};

/**
	Returns a list of linkable items in the given string.
*/
var find = function find(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	var filtered = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		if (token.isLink && (!type || token.type === type)) {
			filtered.push(token.toObject());
		}
	}

	return filtered;
};

/**
	Is the given string valid linkable text of some sort
	Note that this does not trim the text for you.

	Optionally pass in a second `type` param, which is the type of link to test
	for.

	For example,

		test(str, 'email');

	Will return `true` if str is a valid email.
*/
var test = function test(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
};

// Scanner and parser provide states and tokens for the lexicographic stage
// (will be used to add additional link types)
exports.find = find;
exports.inherits = _class.inherits;
exports.options = options;
exports.parser = parser;
exports.scanner = scanner;
exports.test = test;
exports.tokenize = tokenize;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/parser.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/parser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _multi = __webpack_require__(/*! ./tokens/multi */ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js");

var MULTI_TOKENS = _interopRequireWildcard(_multi);

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	Not exactly parser, more like the second-stage scanner (although we can
	theoretically hotswap the code here with a real parser in the future... but
	for a little URL-finding utility abstract syntax trees may be a little
	overkill).

	URL format: http://en.wikipedia.org/wiki/URI_scheme
	Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
	reference)

	@module linkify
	@submodule parser
	@main parser
*/

var makeState = function makeState(tokenClass) {
	return new _state.TokenState(tokenClass);
};

// The universal starting state.
var S_START = makeState();

// Intermediate states for URLs. Note that domains that begin with a protocol
// are treated slighly differently from those that don't.
var S_PROTOCOL = makeState(); // e.g., 'http:'
var S_MAILTO = makeState(); // 'mailto:'
var S_PROTOCOL_SLASH = makeState(); // e.g., '/', 'http:/''
var S_PROTOCOL_SLASH_SLASH = makeState(); // e.g., '//', 'http://'
var S_DOMAIN = makeState(); // parsed string ends with a potential domain name (A)
var S_DOMAIN_DOT = makeState(); // (A) domain followed by DOT
var S_TLD = makeState(_multi.URL); // (A) Simplest possible URL with no query string
var S_TLD_COLON = makeState(); // (A) URL followed by colon (potential port number here)
var S_TLD_PORT = makeState(_multi.URL); // TLD followed by a port number
var S_URL = makeState(_multi.URL); // Long URL with optional port and maybe query string
var S_URL_NON_ACCEPTING = makeState(); // URL followed by some symbols (will not be part of the final URL)
var S_URL_OPENBRACE = makeState(); // URL followed by {
var S_URL_OPENBRACKET = makeState(); // URL followed by [
var S_URL_OPENANGLEBRACKET = makeState(); // URL followed by <
var S_URL_OPENPAREN = makeState(); // URL followed by (
var S_URL_OPENBRACE_Q = makeState(_multi.URL); // URL followed by { and some symbols that the URL can end it
var S_URL_OPENBRACKET_Q = makeState(_multi.URL); // URL followed by [ and some symbols that the URL can end it
var S_URL_OPENANGLEBRACKET_Q = makeState(_multi.URL); // URL followed by < and some symbols that the URL can end it
var S_URL_OPENPAREN_Q = makeState(_multi.URL); // URL followed by ( and some symbols that the URL can end it
var S_URL_OPENBRACE_SYMS = makeState(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
var S_URL_OPENBRACKET_SYMS = makeState(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENANGLEBRACKET_SYMS = makeState(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENPAREN_SYMS = makeState(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
var S_EMAIL_DOMAIN = makeState(); // parsed string starts with local email info + @ with a potential domain name (C)
var S_EMAIL_DOMAIN_DOT = makeState(); // (C) domain followed by DOT
var S_EMAIL = makeState(_multi.EMAIL); // (C) Possible email address (could have more tlds)
var S_EMAIL_COLON = makeState(); // (C) URL followed by colon (potential port number here)
var S_EMAIL_PORT = makeState(_multi.EMAIL); // (C) Email address with a port
var S_MAILTO_EMAIL = makeState(_multi.MAILTOEMAIL); // Email that begins with the mailto prefix (D)
var S_MAILTO_EMAIL_NON_ACCEPTING = makeState(); // (D) Followed by some non-query string chars
var S_LOCALPART = makeState(); // Local part of the email address
var S_LOCALPART_AT = makeState(); // Local part of the email address plus @
var S_LOCALPART_DOT = makeState(); // Local part of the email address plus '.' (localpart cannot end in .)
var S_NL = makeState(_multi.NL); // single new line

// Make path from start to protocol (with '//')
S_START.on(_text.NL, S_NL).on(_text.PROTOCOL, S_PROTOCOL).on(_text.MAILTO, S_MAILTO).on(_text.SLASH, S_PROTOCOL_SLASH);

S_PROTOCOL.on(_text.SLASH, S_PROTOCOL_SLASH);
S_PROTOCOL_SLASH.on(_text.SLASH, S_PROTOCOL_SLASH_SLASH);

// The very first potential domain name
S_START.on(_text.TLD, S_DOMAIN).on(_text.DOMAIN, S_DOMAIN).on(_text.LOCALHOST, S_TLD).on(_text.NUM, S_DOMAIN);

// Force URL for protocol followed by anything sane
S_PROTOCOL_SLASH_SLASH.on(_text.TLD, S_URL).on(_text.DOMAIN, S_URL).on(_text.NUM, S_URL).on(_text.LOCALHOST, S_URL);

// Account for dots and hyphens
// hyphens are usually parts of domain names
S_DOMAIN.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL_DOMAIN.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Hyphen can jump back to a domain name

// After the first domain and a dot, we can find either a URL or another domain
S_DOMAIN_DOT.on(_text.TLD, S_TLD).on(_text.DOMAIN, S_DOMAIN).on(_text.NUM, S_DOMAIN).on(_text.LOCALHOST, S_DOMAIN);

S_EMAIL_DOMAIN_DOT.on(_text.TLD, S_EMAIL).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.NUM, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL_DOMAIN);

// S_TLD accepts! But the URL could be longer, try to find a match greedily
// The `run` function should be able to "rollback" to the accepting state
S_TLD.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Become real URLs after `SLASH` or `COLON NUM SLASH`
// Here PSS and non-PSS converge
S_TLD.on(_text.COLON, S_TLD_COLON).on(_text.SLASH, S_URL);
S_TLD_COLON.on(_text.NUM, S_TLD_PORT);
S_TLD_PORT.on(_text.SLASH, S_URL);
S_EMAIL.on(_text.COLON, S_EMAIL_COLON);
S_EMAIL_COLON.on(_text.NUM, S_EMAIL_PORT);

// Types of characters the URL can definitely end in
var qsAccepting = [_text.DOMAIN, _text.AT, _text.LOCALHOST, _text.NUM, _text.PLUS, _text.POUND, _text.PROTOCOL, _text.SLASH, _text.TLD, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND];

// Types of tokens that can follow a URL and be part of the query string
// but cannot be the very last characters
// Characters that cannot appear in the URL at all should be excluded
var qsNonAccepting = [_text.COLON, _text.DOT, _text.QUERY, _text.PUNCTUATION, _text.CLOSEBRACE, _text.CLOSEBRACKET, _text.CLOSEANGLEBRACKET, _text.CLOSEPAREN, _text.OPENBRACE, _text.OPENBRACKET, _text.OPENANGLEBRACKET, _text.OPENPAREN];

// These states are responsible primarily for determining whether or not to
// include the final round bracket.

// URL, followed by an opening bracket
S_URL.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// URL with extra symbols at the end, followed by an opening bracket
S_URL_NON_ACCEPTING.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// Closing bracket component. This character WILL be included in the URL
S_URL_OPENBRACE.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_Q.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_Q.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_Q.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_Q.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_SYMS.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_SYMS.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_SYMS.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_SYMS.on(_text.CLOSEPAREN, S_URL);

// URL that beings with an opening bracket, followed by a symbols.
// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
// has a single opening bracket for some reason).
S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// URL that begins with an opening bracket, followed by some symbols
S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// Account for the query string
S_URL.on(qsAccepting, S_URL);
S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

// Email address-specific state definitions
// Note: We are not allowing '/' in email addresses since this would interfere
// with real URLs

// For addresses with the mailto prefix
// 'mailto:' followed by anything sane is a valid email
S_MAILTO.on(_text.TLD, S_MAILTO_EMAIL).on(_text.DOMAIN, S_MAILTO_EMAIL).on(_text.NUM, S_MAILTO_EMAIL).on(_text.LOCALHOST, S_MAILTO_EMAIL);

// Greedily get more potential valid email values
S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

// For addresses without the mailto prefix
// Tokens allowed in the localpart of the email
var localpartAccepting = [_text.DOMAIN, _text.NUM, _text.PLUS, _text.POUND, _text.QUERY, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND, _text.TLD];

// Some of the tokens in `localpartAccepting` are already accounted for here and
// will not be overwritten (don't worry)
S_DOMAIN.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_TLD.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

// Okay we're on a localpart. Now what?
// TODO: IP addresses and what if the email starts with numbers?
S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT) // close to an email address now
.on(_text.DOT, S_LOCALPART_DOT);
S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
S_LOCALPART_AT.on(_text.TLD, S_EMAIL_DOMAIN).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL);
// States following `@` defined above

var run = function run(tokens) {
	var len = tokens.length;
	var cursor = 0;
	var multis = [];
	var textTokens = [];

	while (cursor < len) {
		var state = S_START;
		var secondState = null;
		var nextState = null;
		var multiLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
			// Starting tokens with nowhere to jump to.
			// Consider these to be just plain text
			textTokens.push(tokens[cursor++]);
		}

		while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

			// Get the next state
			secondState = null;
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			cursor++;
			multiLength++;
		}

		if (sinceAccepts < 0) {

			// No accepting state was found, part of a regular text token
			// Add all the tokens we looked at to the text tokens array
			for (var i = cursor - multiLength; i < cursor; i++) {
				textTokens.push(tokens[i]);
			}
		} else {

			// Accepting state!

			// First close off the textTokens (if available)
			if (textTokens.length > 0) {
				multis.push(new _multi.TEXT(textTokens));
				textTokens = [];
			}

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			multiLength -= sinceAccepts;

			// Create a new multitoken
			var MULTI = latestAccepting.emit();
			multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
		}
	}

	// Finally close off the textTokens (if available)
	if (textTokens.length > 0) {
		multis.push(new _multi.TEXT(textTokens));
	}

	return multis;
};

exports.State = _state.TokenState;
exports.TOKENS = MULTI_TOKENS;
exports.run = run;
exports.start = S_START;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/scanner.js":
/*!************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/scanner.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

var TOKENS = _interopRequireWildcard(_text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tlds = 'aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

/**
	The scanner provides an interface that takes a string of text as input, and
	outputs an array of tokens instances that can be used for easy URL parsing.

	@module linkify
	@submodule scanner
	@main scanner
*/

var NUMBERS = '0123456789'.split('');
var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
var makeState = function makeState(tokenClass) {
	return new _state.CharacterState(tokenClass);
};

// Frequently used states
var S_START = makeState();
var S_NUM = makeState(_text.NUM);
var S_DOMAIN = makeState(_text.DOMAIN);
var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
var S_WS = makeState(_text.WS);

// States for special URL symbols
S_START.on('@', makeState(_text.AT)).on('.', makeState(_text.DOT)).on('+', makeState(_text.PLUS)).on('#', makeState(_text.POUND)).on('?', makeState(_text.QUERY)).on('/', makeState(_text.SLASH)).on('_', makeState(_text.UNDERSCORE)).on(':', makeState(_text.COLON)).on('{', makeState(_text.OPENBRACE)).on('[', makeState(_text.OPENBRACKET)).on('<', makeState(_text.OPENANGLEBRACKET)).on('(', makeState(_text.OPENPAREN)).on('}', makeState(_text.CLOSEBRACE)).on(']', makeState(_text.CLOSEBRACKET)).on('>', makeState(_text.CLOSEANGLEBRACKET)).on(')', makeState(_text.CLOSEPAREN)).on('&', makeState(_text.AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(_text.PUNCTUATION));

// Whitespace jumps
// Tokens of only non-newline whitespace are arbitrarily long
S_START.on('\n', makeState(_text.NL)).on(WHITESPACE, S_WS);

// If any whitespace except newline, more whitespace!
S_WS.on(WHITESPACE, S_WS);

// Generates states for top-level domains
// Note that this is most accurate when tlds are in alphabetical order
for (var i = 0; i < tlds.length; i++) {
	var newStates = (0, _state.stateify)(tlds[i], S_START, _text.TLD, _text.DOMAIN);
	domainStates.push.apply(domainStates, newStates);
}

// Collect the states generated by different protocls
var partialProtocolFileStates = (0, _state.stateify)('file', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolFtpStates = (0, _state.stateify)('ftp', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolHttpStates = (0, _state.stateify)('http', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolMailtoStates = (0, _state.stateify)('mailto', S_START, _text.DOMAIN, _text.DOMAIN);

// Add the states to the array of DOMAINeric states
domainStates.push.apply(domainStates, partialProtocolFileStates);
domainStates.push.apply(domainStates, partialProtocolFtpStates);
domainStates.push.apply(domainStates, partialProtocolHttpStates);
domainStates.push.apply(domainStates, partialProtocolMailtoStates);

// Protocol states
var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
var S_MAILTO = partialProtocolMailtoStates.pop();
var S_PROTOCOL_SECURE = makeState(_text.DOMAIN);
var S_FULL_PROTOCOL = makeState(_text.PROTOCOL); // Full protocol ends with COLON
var S_FULL_MAILTO = makeState(_text.MAILTO); // Mailto ends with COLON

// Secure protocols (end with 's')
S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

domainStates.push(S_PROTOCOL_SECURE);

// Become protocol tokens after a COLON
S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
S_MAILTO.on(':', S_FULL_MAILTO);

// Localhost
var partialLocalhostStates = (0, _state.stateify)('localhost', S_START, _text.LOCALHOST, _text.DOMAIN);
domainStates.push.apply(domainStates, partialLocalhostStates);

// Everything else
// DOMAINs make more DOMAINs
// Number and character transitions
S_START.on(NUMBERS, S_NUM);
S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

// All the generated states should have a jump to DOMAIN
for (var _i = 0; _i < domainStates.length; _i++) {
	domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
}

S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

// Set default transition
S_START.defaultTransition = makeState(_text.SYM);

/**
	Given a string, returns an array of TOKEN instances representing the
	composition of that string.

	@method run
	@param {String} str Input string to scan
	@return {Array} Array of TOKEN instances
*/
var run = function run(str) {

	// The state machine only looks at lowercase strings.
	// This selective `toLowerCase` is used because lowercasing the entire
	// string causes the length and character position to vary in some in some
	// non-English strings. This happens only on V8-based runtimes.
	var lowerStr = str.replace(/[A-Z]/g, function (c) {
		return c.toLowerCase();
	});
	var len = str.length;
	var tokens = []; // return value

	var cursor = 0;

	// Tokenize the string
	while (cursor < len) {
		var state = S_START;
		var nextState = null;
		var tokenLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			tokenLength++;
			cursor++;
		}

		if (sinceAccepts < 0) {
			continue;
		} // Should never happen

		// Roll back to the latest accepting state
		cursor -= sinceAccepts;
		tokenLength -= sinceAccepts;

		// Get the class for the new token
		var TOKEN = latestAccepting.emit(); // Current token class

		// No more jumps, just make a new token
		tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
	}

	return tokens;
};

var start = S_START;
exports.State = _state.CharacterState;
exports.TOKENS = TOKENS;
exports.run = run;
exports.start = start;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/state.js":
/*!**********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stateify = exports.TokenState = exports.CharacterState = undefined;

var _class = __webpack_require__(/*! ../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

function createStateClass() {
	return function (tClass) {
		this.j = [];
		this.T = tClass || null;
	};
}

/**
	A simple state machine that can emit token classes

	The `j` property in this class refers to state jumps. It's a
	multidimensional array where for each element:

	* index [0] is a symbol or class of symbols to transition to.
	* index [1] is a State instance which matches

	The type of symbol will depend on the target implementation for this class.
	In Linkify, we have a two-stage scanner. Each stage uses this state machine
	but with a slighly different (polymorphic) implementation.

	The `T` property refers to the token class.

	TODO: Can the `on` and `next` methods be combined?

	@class BaseState
*/
var BaseState = createStateClass();
BaseState.prototype = {
	defaultTransition: false,

	/**
 	@method constructor
 	@param {Class} tClass Pass in the kind of token to emit if there are
 		no jumps after this state and the state is accepting.
 */

	/**
 	On the given symbol(s), this machine should go to the given state
 		@method on
 	@param {Array|Mixed} symbol
 	@param {BaseState} state Note that the type of this state should be the
 		same as the current instance (i.e., don't pass in a different
 		subclass)
 */
	on: function on(symbol, state) {
		if (symbol instanceof Array) {
			for (var i = 0; i < symbol.length; i++) {
				this.j.push([symbol[i], state]);
			}
			return this;
		}
		this.j.push([symbol, state]);
		return this;
	},


	/**
 	Given the next item, returns next state for that item
 	@method next
 	@param {Mixed} item Should be an instance of the symbols handled by
 		this particular machine.
 	@return {State} state Returns false if no jumps are available
 */
	next: function next(item) {
		for (var i = 0; i < this.j.length; i++) {
			var jump = this.j[i];
			var symbol = jump[0]; // Next item to check for
			var state = jump[1]; // State to jump to if items match

			// compare item with symbol
			if (this.test(item, symbol)) {
				return state;
			}
		}

		// Nowhere left to jump!
		return this.defaultTransition;
	},


	/**
 	Does this state accept?
 	`true` only of `this.T` exists
 		@method accepts
 	@return {Boolean}
 */
	accepts: function accepts() {
		return !!this.T;
	},


	/**
 	Determine whether a given item "symbolizes" the symbol, where symbol is
 	a class of items handled by this state machine.
 		This method should be overriden in extended classes.
 		@method test
 	@param {Mixed} item Does this item match the given symbol?
 	@param {Mixed} symbol
 	@return {Boolean}
 */
	test: function test(item, symbol) {
		return item === symbol;
	},


	/**
 	Emit the token for this State (just return it in this case)
 	If this emits a token, this instance is an accepting state
 	@method emit
 	@return {Class} T
 */
	emit: function emit() {
		return this.T;
	}
};

/**
	State machine for string-based input

	@class CharacterState
	@extends BaseState
*/
var CharacterState = (0, _class.inherits)(BaseState, createStateClass(), {
	/**
 	Does the given character match the given character or regular
 	expression?
 		@method test
 	@param {String} char
 	@param {String|RegExp} charOrRegExp
 	@return {Boolean}
 */
	test: function test(character, charOrRegExp) {
		return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
	}
});

/**
	State machine for input in the form of TextTokens

	@class TokenState
	@extends BaseState
*/
var TokenState = (0, _class.inherits)(BaseState, createStateClass(), {

	/**
  * Similar to `on`, but returns the state the results in the transition from
  * the given item
  * @method jump
  * @param {Mixed} item
  * @param {Token} [token]
  * @return state
  */
	jump: function jump(token) {
		var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var state = this.next(new token('')); // dummy temp token
		if (state === this.defaultTransition) {
			// Make a new state!
			state = new this.constructor(tClass);
			this.on(token, state);
		} else if (tClass) {
			state.T = tClass;
		}
		return state;
	},


	/**
 	Is the given token an instance of the given token class?
 		@method test
 	@param {TextToken} token
 	@param {Class} tokenClass
 	@return {Boolean}
 */
	test: function test(token, tokenClass) {
		return token instanceof tokenClass;
	}
});

/**
	Given a non-empty target string, generates states (if required) for each
	consecutive substring of characters in str starting from the beginning of
	the string. The final state will have a special value, as specified in
	options. All other "in between" substrings will have a default end state.

	This turns the state machine into a Trie-like data structure (rather than a
	intelligently-designed DFA).

	Note that I haven't really tried these with any strings other than
	DOMAIN.

	@param {String} str
	@param {CharacterState} start State to jump from the first character
	@param {Class} endToken Token class to emit when the given string has been
		matched and no more jumps exist.
	@param {Class} defaultToken "Filler token", or which token type to emit when
		we don't have a full match
	@return {Array} list of newly-created states
*/
function stateify(str, start, endToken, defaultToken) {
	var i = 0,
	    len = str.length,
	    state = start,
	    newStates = [],
	    nextState = void 0;

	// Find the next state without a jump to the next character
	while (i < len && (nextState = state.next(str[i]))) {
		state = nextState;
		i++;
	}

	if (i >= len) {
		return [];
	} // no new tokens were added

	while (i < len - 1) {
		nextState = new CharacterState(defaultToken);
		newStates.push(nextState);
		state.on(str[i], nextState);
		state = nextState;
		i++;
	}

	nextState = new CharacterState(endToken);
	newStates.push(nextState);
	state.on(str[len - 1], nextState);

	return newStates;
}

exports.CharacterState = CharacterState;
exports.TokenState = TokenState;
exports.stateify = stateify;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js":
/*!******************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createTokenClass() {
	return function (value) {
		if (value) {
			this.v = value;
		}
	};
}

exports.createTokenClass = createTokenClass;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js":
/*!*****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.URL = exports.TEXT = exports.NL = exports.EMAIL = exports.MAILTOEMAIL = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _text = __webpack_require__(/*! ./text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

/******************************************************************************
	Multi-Tokens
	Tokens composed of arrays of TextTokens
******************************************************************************/

// Is the given token a valid domain token?
// Should nums be included here?
function isDomainToken(token) {
	return token instanceof _text.DOMAIN || token instanceof _text.TLD;
}

/**
	Abstract class used for manufacturing tokens of text tokens. That is rather
	than the value for a token being a small string of text, it's value an array
	of text tokens.

	Used for grouping together URLs, emails, hashtags, and other potential
	creations.

	@class MultiToken
	@abstract
*/
var MultiToken = (0, _createTokenClass.createTokenClass)();

MultiToken.prototype = {
	/**
 	String representing the type for this token
 	@property type
 	@default 'TOKEN'
 */
	type: 'token',

	/**
 	Is this multitoken a link?
 	@property isLink
 	@default false
 */
	isLink: false,

	/**
 	Return the string this token represents.
 	@method toString
 	@return {String}
 */
	toString: function toString() {
		var result = [];
		for (var i = 0; i < this.v.length; i++) {
			result.push(this.v[i].toString());
		}
		return result.join('');
	},


	/**
 	What should the value for this token be in the `href` HTML attribute?
 	Returns the `.toString` value by default.
 		@method toHref
 	@return {String}
 */
	toHref: function toHref() {
		return this.toString();
	},


	/**
 	Returns a hash of relevant values for this token, which includes keys
 	* type - Kind of token ('url', 'email', etc.)
 	* value - Original text
 	* href - The value that should be added to the anchor tag's href
 		attribute
 		@method toObject
 	@param {String} [protocol] `'http'` by default
 	@return {Object}
 */
	toObject: function toObject() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		return {
			type: this.type,
			value: this.toString(),
			href: this.toHref(protocol)
		};
	}
};

/**
	Represents an arbitrarily mailto email address with the prefix included
	@class MAILTO
	@extends MultiToken
*/
var MAILTOEMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true
});

/**
	Represents a list of tokens making up a valid email address
	@class EMAIL
	@extends MultiToken
*/
var EMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true,
	toHref: function toHref() {
		return 'mailto:' + this.toString();
	}
});

/**
	Represents some plain text
	@class TEXT
	@extends MultiToken
*/
var TEXT = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'text' });

/**
	Multi-linebreak token - represents a line break
	@class NL
	@extends MultiToken
*/
var NL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'nl' });

/**
	Represents a list of tokens making up a valid URL
	@class URL
	@extends MultiToken
*/
var URL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'url',
	isLink: true,

	/**
 	Lowercases relevant parts of the domain and adds the protocol if
 	required. Note that this will not escape unsafe HTML characters in the
 	URL.
 		@method href
 	@param {String} protocol
 	@return {String}
 */
	toHref: function toHref() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		var hasProtocol = false;
		var hasSlashSlash = false;
		var tokens = this.v;
		var result = [];
		var i = 0;

		// Make the first part of the domain lowercase
		// Lowercase protocol
		while (tokens[i] instanceof _text.PROTOCOL) {
			hasProtocol = true;
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Skip slash-slash
		while (tokens[i] instanceof _text.SLASH) {
			hasSlashSlash = true;
			result.push(tokens[i].toString());
			i++;
		}

		// Lowercase all other characters in the domain
		while (isDomainToken(tokens[i])) {
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Leave all other characters as they were written
		for (; i < tokens.length; i++) {
			result.push(tokens[i].toString());
		}

		result = result.join('');

		if (!(hasProtocol || hasSlashSlash)) {
			result = protocol + '://' + result;
		}

		return result;
	},
	hasProtocol: function hasProtocol() {
		return this.v[0] instanceof _text.PROTOCOL;
	}
});

exports.Base = MultiToken;
exports.MAILTOEMAIL = MAILTOEMAIL;
exports.EMAIL = EMAIL;
exports.NL = NL;
exports.TEXT = TEXT;
exports.URL = URL;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js":
/*!****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/text.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AMPERSAND = exports.CLOSEPAREN = exports.CLOSEANGLEBRACKET = exports.CLOSEBRACKET = exports.CLOSEBRACE = exports.OPENPAREN = exports.OPENANGLEBRACKET = exports.OPENBRACKET = exports.OPENBRACE = exports.WS = exports.TLD = exports.SYM = exports.UNDERSCORE = exports.SLASH = exports.MAILTO = exports.PROTOCOL = exports.QUERY = exports.POUND = exports.PLUS = exports.NUM = exports.NL = exports.LOCALHOST = exports.PUNCTUATION = exports.DOT = exports.COLON = exports.AT = exports.DOMAIN = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

/******************************************************************************
	Text Tokens
	Tokens composed of strings
******************************************************************************/

/**
	Abstract class used for manufacturing text tokens.
	Pass in the value this token represents

	@class TextToken
	@abstract
*/
var TextToken = (0, _createTokenClass.createTokenClass)();
TextToken.prototype = {
	toString: function toString() {
		return this.v + '';
	}
};

function inheritsToken(value) {
	var props = value ? { v: value } : {};
	return (0, _class.inherits)(TextToken, (0, _createTokenClass.createTokenClass)(), props);
}

/**
	A valid domain token
	@class DOMAIN
	@extends TextToken
*/
var DOMAIN = inheritsToken();

/**
	@class AT
	@extends TextToken
*/
var AT = inheritsToken('@');

/**
	Represents a single colon `:` character

	@class COLON
	@extends TextToken
*/
var COLON = inheritsToken(':');

/**
	@class DOT
	@extends TextToken
*/
var DOT = inheritsToken('.');

/**
	A character class that can surround the URL, but which the URL cannot begin
	or end with. Does not include certain English punctuation like parentheses.

	@class PUNCTUATION
	@extends TextToken
*/
var PUNCTUATION = inheritsToken();

/**
	The word localhost (by itself)
	@class LOCALHOST
	@extends TextToken
*/
var LOCALHOST = inheritsToken();

/**
	Newline token
	@class NL
	@extends TextToken
*/
var NL = inheritsToken('\n');

/**
	@class NUM
	@extends TextToken
*/
var NUM = inheritsToken();

/**
	@class PLUS
	@extends TextToken
*/
var PLUS = inheritsToken('+');

/**
	@class POUND
	@extends TextToken
*/
var POUND = inheritsToken('#');

/**
	Represents a web URL protocol. Supported types include

	* `http:`
	* `https:`
	* `ftp:`
	* `ftps:`

	@class PROTOCOL
	@extends TextToken
*/
var PROTOCOL = inheritsToken();

/**
	Represents the start of the email URI protocol

	@class MAILTO
	@extends TextToken
*/
var MAILTO = inheritsToken('mailto:');

/**
	@class QUERY
	@extends TextToken
*/
var QUERY = inheritsToken('?');

/**
	@class SLASH
	@extends TextToken
*/
var SLASH = inheritsToken('/');

/**
	@class UNDERSCORE
	@extends TextToken
*/
var UNDERSCORE = inheritsToken('_');

/**
	One ore more non-whitespace symbol.
	@class SYM
	@extends TextToken
*/
var SYM = inheritsToken();

/**
	@class TLD
	@extends TextToken
*/
var TLD = inheritsToken();

/**
	Represents a string of consecutive whitespace characters

	@class WS
	@extends TextToken
*/
var WS = inheritsToken();

/**
	Opening/closing bracket classes
*/

var OPENBRACE = inheritsToken('{');
var OPENBRACKET = inheritsToken('[');
var OPENANGLEBRACKET = inheritsToken('<');
var OPENPAREN = inheritsToken('(');
var CLOSEBRACE = inheritsToken('}');
var CLOSEBRACKET = inheritsToken(']');
var CLOSEANGLEBRACKET = inheritsToken('>');
var CLOSEPAREN = inheritsToken(')');

var AMPERSAND = inheritsToken('&');

exports.Base = TextToken;
exports.DOMAIN = DOMAIN;
exports.AT = AT;
exports.COLON = COLON;
exports.DOT = DOT;
exports.PUNCTUATION = PUNCTUATION;
exports.LOCALHOST = LOCALHOST;
exports.NL = NL;
exports.NUM = NUM;
exports.PLUS = PLUS;
exports.POUND = POUND;
exports.QUERY = QUERY;
exports.PROTOCOL = PROTOCOL;
exports.MAILTO = MAILTO;
exports.SLASH = SLASH;
exports.UNDERSCORE = UNDERSCORE;
exports.SYM = SYM;
exports.TLD = TLD;
exports.WS = WS;
exports.OPENBRACE = OPENBRACE;
exports.OPENBRACKET = OPENBRACKET;
exports.OPENANGLEBRACKET = OPENANGLEBRACKET;
exports.OPENPAREN = OPENPAREN;
exports.CLOSEBRACE = CLOSEBRACE;
exports.CLOSEBRACKET = CLOSEBRACKET;
exports.CLOSEANGLEBRACKET = CLOSEANGLEBRACKET;
exports.CLOSEPAREN = CLOSEPAREN;
exports.AMPERSAND = AMPERSAND;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/class.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/class.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inherits = inherits;
function inherits(parent, child) {
	var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var extended = Object.create(parent.prototype);
	for (var p in props) {
		extended[p] = props[p];
	}
	extended.constructor = child;
	child.prototype = extended;
	return child;
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/options.js":
/*!*************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/options.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var defaults = {
	defaultProtocol: 'http',
	events: null,
	format: noop,
	formatHref: noop,
	nl2br: false,
	tagName: 'a',
	target: typeToTarget,
	validate: true,
	ignoreTags: [],
	attributes: null,
	className: 'linkified' // Deprecated value - no default class will be provided in the future
};

exports.defaults = defaults;
exports.Options = Options;
exports.contains = contains;


function Options(opts) {
	opts = opts || {};

	this.defaultProtocol = opts.hasOwnProperty('defaultProtocol') ? opts.defaultProtocol : defaults.defaultProtocol;
	this.events = opts.hasOwnProperty('events') ? opts.events : defaults.events;
	this.format = opts.hasOwnProperty('format') ? opts.format : defaults.format;
	this.formatHref = opts.hasOwnProperty('formatHref') ? opts.formatHref : defaults.formatHref;
	this.nl2br = opts.hasOwnProperty('nl2br') ? opts.nl2br : defaults.nl2br;
	this.tagName = opts.hasOwnProperty('tagName') ? opts.tagName : defaults.tagName;
	this.target = opts.hasOwnProperty('target') ? opts.target : defaults.target;
	this.validate = opts.hasOwnProperty('validate') ? opts.validate : defaults.validate;
	this.ignoreTags = [];

	// linkAttributes and linkClass is deprecated
	this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
	this.className = opts.hasOwnProperty('className') ? opts.className : opts.linkClass || defaults.className;

	// Make all tags names upper case
	var ignoredTags = opts.hasOwnProperty('ignoreTags') ? opts.ignoreTags : defaults.ignoreTags;
	for (var i = 0; i < ignoredTags.length; i++) {
		this.ignoreTags.push(ignoredTags[i].toUpperCase());
	}
}

Options.prototype = {
	/**
  * Given the token, return all options for how it should be displayed
  */
	resolve: function resolve(token) {
		var href = token.toHref(this.defaultProtocol);
		return {
			formatted: this.get('format', token.toString(), token),
			formattedHref: this.get('formatHref', href, token),
			tagName: this.get('tagName', href, token),
			className: this.get('className', href, token),
			target: this.get('target', href, token),
			events: this.getObject('events', href, token),
			attributes: this.getObject('attributes', href, token)
		};
	},


	/**
  * Returns true or false based on whether a token should be displayed as a
  * link based on the user options. By default,
  */
	check: function check(token) {
		return this.get('validate', token.toString(), token);
	},


	// Private methods

	/**
  * Resolve an option's value based on the value of the option and the given
  * params.
  * @param {String} key Name of option to use
  * @param operator will be passed to the target option if it's method
  * @param {MultiToken} token The token from linkify.tokenize
  */
	get: function get(key, operator, token) {
		var optionValue = void 0,
		    option = this[key];
		if (!option) {
			return option;
		}

		switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
			case 'function':
				return option(operator, token.type);
			case 'object':
				optionValue = option.hasOwnProperty(token.type) ? option[token.type] : defaults[key];
				return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
		}

		return option;
	},
	getObject: function getObject(key, operator, token) {
		var option = this[key];
		return typeof option === 'function' ? option(operator, token.type) : option;
	}
};

/**
 * Quick indexOf replacement for checking the ignoreTags option
 */
function contains(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}

function noop(val) {
	return val;
}

function typeToTarget(href, type) {
	return type === 'url' ? '_blank' : null;
}

/***/ }),

/***/ "./node_modules/linkifyjs/string.js":
/*!******************************************!*\
  !*** ./node_modules/linkifyjs/string.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/linkify-string */ "./node_modules/linkifyjs/lib/linkify-string.js").default;


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/Subject.js":
/*!***************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Subject.js ***!
  \***************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]; });


//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/interval.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].interval = rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"];
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/catch.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/catch */ "./node_modules/rxjs-compat/_esm5/operator/catch.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/filter.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/filter */ "./node_modules/rxjs-compat/_esm5/operator/filter.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"];
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/first.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/first.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_first__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/first */ "./node_modules/rxjs-compat/_esm5/operator/first.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.first = _operator_first__WEBPACK_IMPORTED_MODULE_1__["first"];
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/map.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/map.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm5/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/merge.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/merge.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/merge */ "./node_modules/rxjs-compat/_esm5/operator/merge.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.merge = _operator_merge__WEBPACK_IMPORTED_MODULE_1__["merge"];
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/operator/mergeMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.mergeMap = _operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__["mergeMap"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.flatMap = _operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__["mergeMap"];
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/multicast.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/multicast.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/multicast */ "./node_modules/rxjs-compat/_esm5/operator/multicast.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.multicast = _operator_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"];
//# sourceMappingURL=multicast.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/catch.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/catch.js ***!
  \**********************************************************/
/*! exports provided: _catch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_catch", function() { return _catch; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function _catch(selector) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(selector)(this);
}
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/filter.js ***!
  \***********************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function filter(predicate, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(predicate, thisArg)(this);
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/first.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/first.js ***!
  \**********************************************************/
/*! exports provided: first */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function first() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"].apply(void 0, args)(this);
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/map.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/map.js ***!
  \********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/merge.js ***!
  \**********************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return this.lift.call(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"].apply(void 0, [this].concat(observables)));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/mergeMap.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/mergeMap.js ***!
  \*************************************************************/
/*! exports provided: mergeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function mergeMap(project, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(project, concurrent)(this);
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/multicast.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/multicast.js ***!
  \**************************************************************/
/*! exports provided: multicast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function multicast(subjectOrSubjectFactory, selector) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["multicast"])(subjectOrSubjectFactory, selector)(this);
}
//# sourceMappingURL=multicast.js.map

/***/ }),

/***/ "./src/app/pages/dashboard/add-event/add-event.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/add-event/add-event.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card class=\"card-position\">\r\n  <nb-card-header class=\"d-flex justify-content-between\">\r\n    Add Event\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"eventForm\">\r\n      <div class=\"px-3\">\r\n        <input nbInput [nbDatepicker]=\"datepicker\" placeholder=\"Set date\" formControlName=\"date\" tabindex=\"-1\" class=\"input-bg-3\">\r\n        <nb-datepicker #datepicker [min]=\"minDate\"></nb-datepicker>\r\n      </div>\r\n      <div class=\"p-3\"> \r\n        <input type=\"text\" nbInput placeholder=\"Set event\" formControlName=\"event\" tabindex=\"-1\" class=\"input-bg-3\">\r\n      </div>\r\n      <div class=\"p-3\">\r\n        <button nbButton outline status=\"primary\" size=\"xsmall\" class=\"f-w\" (click)=\"add()\" tabindex=\"1\"\r\n          [disabled]=\"eventForm.invalid\">ADD</button>\r\n      </div>\r\n      <div class=\"px-3\">\r\n        <button nbButton outline status=\"danger\" size=\"xsmall\" class=\"f-w\" (click)=\"reset()\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/dashboard/add-event/add-event.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/add-event/add-event.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host .input-bg-3 {\n  background-color: #2f2879; }\n@media only screen and (max-width: 600px) {\n  .card-position {\n    position: absolute;\n    top: 8%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9fdGhlbWluZy5zY3NzIiwiL1VzZXJzL29zY2FyL0Rvd25sb2Fkcy9Gcm9udGVuZF9WMy9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX21peGlucy5zY3NzIiwiL1VzZXJzL29zY2FyL0Rvd25sb2Fkcy9Gcm9udGVuZF9WMy9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX2Z1bmN0aW9ucy5zY3NzIiwiL1VzZXJzL29zY2FyL0Rvd25sb2Fkcy9Gcm9udGVuZF9WMy9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fY29zbWljLnNjc3MiLCIvVXNlcnMvb3NjYXIvRG93bmxvYWRzL0Zyb250ZW5kX1YzL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19kZWZhdWx0LnNjc3MiLCIvVXNlcnMvb3NjYXIvRG93bmxvYWRzL0Zyb250ZW5kX1YzL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2FkZC1ldmVudC9hZGQtZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdIOztHQUVHO0FDVEg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FDdlRGOzs7O0dBSUc7QUNKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBR3ZURjs7OztHQUlHO0FGSkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRHJNRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBQW5CRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBS2pJRjtFQUNGLDBCRlNtQixFRVJuQjtBQUdFO0VBREo7SUFHUSxtQkFBa0I7SUFDbEIsUUFBTztJQUNQLFVBQVM7SUFDVCxtQ0FBMEI7WUFBMUIsMkJBQTBCLEVBRWpDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvYWRkLWV2ZW50L2FkZC1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuXG4vKipcbiAqIFRoaXMgaXMgYSBzdGFydGluZyBwb2ludCB3aGVyZSB3ZSBkZWNsYXJlIHRoZSBtYXBzIG9mIHRoZW1lcyBhbmQgZ2xvYmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9ucy9taXhpbnNcbiAqL1xuXG5AaW1wb3J0ICdjb3JlL21peGlucyc7XG5AaW1wb3J0ICdjb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICdjb3JlL2JyZWFraW5nLW5vdGljZSc7XG5cbiRuYi1lbmFibGVkLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi1lbmFibGUtY3NzLXZhcmlhYmxlczogZmFsc2UgIWdsb2JhbDtcblxuJG5iLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXMtZXhwb3J0OiAoKSAhZ2xvYmFsO1xuXG5AZnVuY3Rpb24gbmItdGhlbWUoJGtleSkge1xuICBAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLCAka2V5KTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkge1xuICBAaWYgKHR5cGUtb2YoJHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICR0bXA6IG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpO1xuXG4gICAgQGlmICgkdG1wICE9IG51bGwpIHtcbiAgICAgIEByZXR1cm4gbmItZ2V0LXZhbHVlKCR0aGVtZSwgJHZhbHVlLCAkdG1wKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLCAka2V5KTtcbn1cblxuQGZ1bmN0aW9uIGNvbnZlcnQtdG8tY3NzLXZhcmlhYmxlcygkdmFyaWFibGVzKSB7XG4gICRyZXN1bHQ6ICgpO1xuICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHZhcmlhYmxlcyB7XG4gICAgJHJlc3VsdDogbWFwLXNldCgkcmVzdWx0LCAkdmFyLCAnLS12YXIoI3skdmFyfSknKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuQGZ1bmN0aW9uIHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKSB7XG4gICR0aGVtZTogJHRoZW1lICFnbG9iYWw7XG4gICR0aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLXZhcmlhYmxlcykge1xuICAgICR0aGVtZTogY29udmVydC10by1jc3MtdmFyaWFibGVzKCR0aGVtZSkgIWdsb2JhbDtcbiAgfVxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRkZWZhdWx0OiBudWxsKSB7XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG5cbiAgQGlmICgkZGVmYXVsdCAhPSBudWxsKSB7XG5cbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJGRlZmF1bHQpLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgJGRlZmF1bHQpKSAhZ2xvYmFsO1xuXG4gIH0gQGVsc2Uge1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgbnVsbCkpICFnbG9iYWw7XG4gIH1cblxuICAkdGhlbWUtcGFyc2VkOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHRoZW1lLXBhcnNlZDogbWFwLXNldCgkdGhlbWUtcGFyc2VkLCAka2V5LCBuYi1nZXQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuXG4gIC8vIGVuYWJsZSByaWdodCBhd2F5IHdoZW4gaW5zdGFsbGVkXG4gICR0aGVtZS1wYXJzZWQ6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUtcGFyc2VkLCAkbmFtZSk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLCAkbmFtZSwgJHRoZW1lLXBhcnNlZCk7XG59XG5cbkBmdW5jdGlvbiBnZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICR0aGVtZXMtdG8taW5zdGFsbDogKCk7XG5cbiAgQGlmIChsZW5ndGgoJG5iLWVuYWJsZWQtdGhlbWVzKSA+IDApIHtcbiAgICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkbmItZW5hYmxlZC10aGVtZXMge1xuICAgICAgJHRoZW1lcy10by1pbnN0YWxsOiBtYXAtc2V0KCR0aGVtZXMtdG8taW5zdGFsbCwgJHRoZW1lLW5hbWUsIG1hcC1nZXQoJG5iLXRoZW1lcywgJHRoZW1lLW5hbWUpKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0aGVtZXMtdG8taW5zdGFsbDogJG5iLXRoZW1lcztcbiAgfVxuXG4gIEByZXR1cm4gJHRoZW1lcy10by1pbnN0YWxsO1xufVxuXG5AbWl4aW4gaW5zdGFsbC1jc3MtdmFyaWFibGVzKCR0aGVtZS1uYW1lLCAkdmFyaWFibGVzKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJpYWJsZXMge1xuICAgICAgLS0jeyR2YXJ9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgJHRoZW1lcy10by1pbnN0YWxsOiBnZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICR0aGVtZXMtdG8taW5zdGFsbCB7XG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IDpob3N0IHtcbiAgICAgICR0aGVtZTogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIEFkZCBjb250ZW50IGZvciB0aGVtZSBpbnRvIGEgbGlzdCBvZiB0aGVtZXNcbkBtaXhpbiBuYi1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIEFkZCBjb250ZW50IGV4Y2VwdCBmb3IgdGhlbWUgaW50byBhIGxpc3Qgb2YgdGhlbWVzXG5AbWl4aW4gbmItZXhjZXB0LWZvci10aGVtZXMoJG5hbWVzLi4uKSB7XG4gIEBlYWNoICRuYW1lIGluICRuYW1lcyB7XG4gICAgQGluY2x1ZGUgbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzogYW5vdGhlciBtaXhpbmcgZm9yIHRoZSBhbG1vc3Qgc2FtZSB0aGluZ1xuQG1peGluIG5iLWluc3RhbGwtcm9vdC1jb21wb25lbnQoKSB7XG4gIEB3YXJuICdgbmItaW5zdGFsbC1yb290LWNvbXBvbmVudGAgaXMgZGVwcmljYXRlZCwgcmVwbGFjZSB3aXRoIGBuYi1pbnN0YWxsLWNvbXBvbmVudGAsIGFzIGBib2R5YCBpcyByb290IGVsZW1lbnQgbm93JztcblxuICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwoKSB7XG4gICR0aGVtZXMtdG8taW5zdGFsbDogZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUsICR0aGVtZSBpbiAkdGhlbWVzLXRvLWluc3RhbGwge1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgICAkdGhlbWU6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gICR0ZW1wOiBuYi1icmVha2luZy1ub3RpY2Utc2hvdygkdGhlbWUpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItc2Nyb2xsYmFycygkZmcsICRiZywgJHNpemUsICRib3JkZXItcmFkaXVzOiAkc2l6ZSAvIDIpIHtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShzY3JvbGxiYXItY2lyY2xlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShzY3JvbGxiYXItYmFja2dyb3VuZCk7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItcmFkaWFsLWdyYWRpZW50KCRjb2xvci0xLCAkY29sb3ItMiwgJGNvbG9yLTMpIHtcbiAgYmFja2dyb3VuZDogJGNvbG9yLTI7IC8qIE9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChib3R0b20sIGVsbGlwc2UgY292ZXIsICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoYm90dG9tLCBlbGxpcHNlIGNvdmVyLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgZmlsdGVyOiBwcm9naWQ6ZHhpbWFnZXRyYW5zZm9ybS5taWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJGNvbG9yLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRDb2xvcnN0cj0nJGNvbG9yLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmFkaWVudFR5cGU9MSk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbn1cblxuQG1peGluIG5iLXJpZ2h0LWdyYWRpZW50KCRsZWZ0LWNvbG9yLCAkcmlnaHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbGVmdC1jb2xvciwgJHJpZ2h0LWNvbG9yKTtcbn1cblxuQG1peGluIG5iLWhlYWRpbmdzKCRmcm9tOiAxLCAkdG86IDYpIHtcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcbiAgICBoI3skaX0ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKSB7XG4gICRwbGFjZWhvbGRlci1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJ1xuICAgICc6Oi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1zLWlucHV0LXBsYWNlaG9sZGVyJ1xuICApO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpO1xuICB9XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICRwbGFjZWhvbGRlci1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlci1mb2N1cygpIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGUuLi4pIHtcbiAgJG1heDogbGVuZ3RoKCRhbmltYXRlKTtcbiAgJGFuaW1hdGlvbnM6ICcnO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heCB7XG4gICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyBudGgoJGFuaW1hdGUsICRpKX07XG5cbiAgICBAaWYgJGkgPCAkbWF4IHtcbiAgICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgJywgJ307XG4gICAgfVxuICB9XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9ucztcbiAgLW1vei1hbmltYXRpb246ICAgICRhbmltYXRpb25zO1xuICAtby1hbmltYXRpb246ICAgICAgJGFuaW1hdGlvbnM7XG4gIGFuaW1hdGlvbjogICAgICAgICAkYW5pbWF0aW9ucztcbn1cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uTmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuQG1peGluIGJ0bi1wdWxzZSgkbmFtZSwgJGNvbG9yKSB7XG4gICYuYnRuLXB1bHNlIHtcbiAgICBAaW5jbHVkZSBhbmltYXRpb24oYnRuLSN7JG5hbWV9LXB1bHNlIDEuNXMgaW5maW5pdGUpO1xuICB9XG5cbiAgQGluY2x1ZGUga2V5ZnJhbWVzKGJ0bi0jeyRuYW1lfS1wdWxzZSkge1xuICAgIDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAwICRjb2xvcjtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgfVxufVxuXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG5cbkBtaXhpbiBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCRzZWxlY3RvciwgJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICAjeyRzZWxlY3Rvcn0gJiB7XG4gICAgQGlmICRwcm9wICE9IG51bGwge1xuICAgICAgI3skcHJvcH06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItbHRyKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1sdHJdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1ydGwoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPXJ0bF0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbi8vLyBTbGlnaHRseSBsaWdodGVuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHRpbnRcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXG4vLy8gQHJldHVybiB7Q29sb3J9XG5AZnVuY3Rpb24gdGludCgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KHdoaXRlLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuLy8vIFNsaWdodGx5IGRhcmtlbiBhIGNvbG9yXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byBzaGFkZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiBzaGFkZSgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KGJsYWNrLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuQGZ1bmN0aW9uIG1hcC1zZXQoJG1hcCwgJGtleSwgJHZhbHVlOiBudWxsKSB7XG4gICRuZXc6ICgka2V5OiAkdmFsdWUpO1xuICBAcmV0dXJuIG1hcC1tZXJnZSgkbWFwLCAkbmV3KTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuIEBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbiBAaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG4gQGltcG9ydCAnZGVmYXVsdCc7XG4gXG4gLy8gZGVmYXVsdCB0aGUgYmFzZSB0aGVtZVxuICR0aGVtZTogKFxuIFxuICAgY2FyZC1jb2xvcjogIzNkMzc4MCxcbiAgIGNpcmNsZS1iZzogIzJmMjg3OSxcbiAgIGJvdHRvbS1jYXJkLXRleHQ6ICMzYjM2N2YsXG4gICBsaWdodC10ZXh0OiAjZDFkMWZmLFxuICAgbGlnaHQtdGV4dC0yOiAjYTFhMWU1LFxuICAgbGluZS1jb2xvcjogIzM0MmU3MyxcbiAgIHVwY29taW5nLWNhcmQtY29sb3I6ICM5MTRmZWYsXG4gICBub3Rlcy1oZWFkZXI6ICM3NjU5ZmYsXG4gICBub3RpZmljYXRpb25zLWJnOiAjMjkyNDVjLFxuICAgbm90aWZpY2F0aW9uLWhlYWRlcjogIzFjMTk0MCxcbiAgIG5vdGlmaWNhdGlvbi1zaGFkb3c6ICM4MzZiZmYsXG4gICBwYWdlLWJnOiAjMmYyOTZiLFxuICAgdHJhZGVycy1odWItdGV4dDogI2MxOThmYixcbiAgIHNjcm9sbGJhci1iYWNrZ3JvdW5kOiAjMzMyZTczLFxuICAgc2Nyb2xsYmFyLWNpcmNsZTogIzU1NGRiMyxcbiAgIGJnLWNvbG9yLXRhYnNldDogIzBkZmY5MixcbiAgIHNoYWRlLXdoaXRlLTE6ICNmZmYsXG4gICBjYWxlbmRhci1yb3ctMjogIzU4NTk4ZSxcbiAgIHRyYWRlci1jaGFydC1zaWRlOiAjMmEyNjVkLFxuICAgc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSg0MCwgMzcsIDg5LCAwLjYpLFxuICAvLyAgLy8gYmFja2dyb3VuZC1pbWc6IHVybChcIi4vLi4vLi4vLi4vLi5cIiksXG4gXG4gICAvLzMwXG4gIC8vICBjYXJkLWNvbG9yOiAjMmM1YzY2LFxuICAvLyAgY2lyY2xlLWJnOiAjMjQ0YzU1LFxuICAvLyAgYm90dG9tLWNhcmQtdGV4dDogIzM0NzE3ZCxcbiAgLy8gIGxpZ2h0LXRleHQ6ICM1ZmNiZTIsXG4gIC8vICBsaWdodC10ZXh0LTI6ICNhNGRhZTYsXG4gIC8vICBsaW5lLWNvbG9yOiAjMjA1MzVlLFxuICAvLyAgdXBjb21pbmctY2FyZC1jb2xvcjogIzQ2OTNhMyxcbiAgLy8gIG5vdGVzLWhlYWRlcjogIzRkODc5MyxcbiAgLy8gIG5vdGlmaWNhdGlvbnMtYmc6ICMxNTJjMzEsXG4gIC8vICBub3RpZmljYXRpb24taGVhZGVyOiAjMTYyZTMzLFxuICAvLyAgbm90aWZpY2F0aW9uLXNoYWRvdzogIzY0OTZhMCwgIFxuICAvLyAgcGFnZS1iZzogIzIwNDM0YixcbiAgLy8gIHRyYWRlcnMtaHViLXRleHQ6ICMzMjZkNzksXG4gIC8vICBzY3JvbGxiYXItYmFja2dyb3VuZDogIzM0NzE3ZCxcbiAgLy8gIHNjcm9sbGJhci1jaXJjbGU6ICMzMjZkNzksXG4gIC8vICBiZy1jb2xvci10YWJzZXQ6ICMwZGZmOTIsXG4gIC8vICBzaGFkZS13aGl0ZS0xOiAjZmZmLFxuICAvLyAgY2FsZW5kYXItcm93LTI6ICMzNDYyNmIsXG4gIC8vICB0cmFkZXItY2hhcnQtc2lkZTogIzFmNDA0NyxcbiAgLy8gIHNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoMjIsIDQ1LCA1MCwgLjYpLFxuICAvLyAgYmFja2dyb3VuZC1pbWc6IHVybCguLy4uLy4uLy4uLy4uL3NyYy9hc3NldHMvdGhlbWVzX2ltYWdlcy8zMC5qcGcpLFxuICAvLyAgYmFja2dyb3VuZC1pbWctMjogdXJsKC4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzMwLmpwZyksXG4gICBcbiAgIC8vMzFcbiAgLy8gIGNhcmQtY29sb3I6ICMzMDE1MjMsXG4gIC8vICBjaXJjbGUtYmc6ICMyOTEyMWUsXG4gIC8vICBib3R0b20tY2FyZC10ZXh0OiAjNmMyZjRmLFxuICAvLyAgbGlnaHQtdGV4dDogI2NiOGNhZCxcbiAgLy8gIGxpbmUtY29sb3I6ICMyNDEwMWEsXG4gIC8vICB1cGNvbWluZy1jYXJkLWNvbG9yOiAjOWI0NTcyLFxuICAvLyAgbm90ZXMtaGVhZGVyOiAjNmQzMTUwLFxuIFxuICAvLyAgbm90aWZpY2F0aW9ucy1iZzogIzE5MGIxMixcbiAgLy8gIHBhZ2UtYmc6ICMyNTEwMWIsXG4gIC8vICB0cmFkZXJzLWh1Yi10ZXh0OiAjNjkyZTRkLFxuICAvLyAgc2Nyb2xsYmFyLWJhY2tncm91bmQ6ICM2YzJmNGYsXG4gIC8vICBjYWxlbmRhci1yb3ctMjogIzM4MWUyYyxcbiAgLy8gIGxpZ2h0LXRleHQtMjogI2RhYmJjYixcbiAgLy8gIG5vdGlmaWNhdGlvbi1zaGFkb3c6ICM3ZjRjNjcsXG4gIC8vICBub3RpZmljYXRpb24taGVhZGVyOiAjMTkwYjEyLFxuICAvLyAgdHJhZGVyLWNoYXJ0LXNpZGU6ICMyMjBmMTgsXG4gIC8vICBzaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDI0LCAxMCwgMTcsIC42KSxcbiAgLy8gIHNjcm9sbGJhci1jaXJjbGU6ICM2OTJlNGQsXG4gIC8vICBiZy1jb2xvci10YWJzZXQ6ICMwZGZmOTIsXG4gIC8vICBzaGFkZS13aGl0ZS0xOiAjZmZmLFxuICAvLyAgYmFja2dyb3VuZC1pbWc6IHVybCguLy4uLy4uLy4uLy4uL3NyYy9hc3NldHMvdGhlbWVzX2ltYWdlcy8zMS5qcGcpLFxuICAvLyAgYmFja2dyb3VuZC1pbWctMjogdXJsKC4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzMxLmpwZyksXG4gXG4gICAvLzMyXG4gICAvLyBjYXJkLWNvbG9yOiAjOGI0YTM0LFxuICAgLy8gY2lyY2xlLWJnOiAjNzg0MDJkLFxuICAgLy8gYm90dG9tLWNhcmQtdGV4dDogI2FiNTczYixcbiAgIC8vIGxpZ2h0LXRleHQ6ICNmMWFlOTcsXG4gICAvLyBsaW5lLWNvbG9yOiAjNzUzZTJjLFxuICAgLy8gdXBjb21pbmctY2FyZC1jb2xvcjogI2Q1NmQ0YSxcbiAgIC8vIG5vdGVzLWhlYWRlcjogI2FhNTgzZCxcbiBcbiAgIC8vIG5vdGlmaWNhdGlvbnMtYmc6ICM0NzI1MWEsXG4gICAvLyBwYWdlLWJnOiAjNmIzOTI4LFxuICAgLy8gdHJhZGVycy1odWItdGV4dDogI2E2NTQzOSxcbiAgIC8vIHNjcm9sbGJhci1iYWNrZ3JvdW5kOiAjYWI1NzNiLFxuICAgLy8gY2FsZW5kYXItcm93LTI6ICM4ZTUxM2MsXG4gICAvLyBsaWdodC10ZXh0LTI6ICNlZGNjYzAsXG4gICAvLyBub3RpZmljYXRpb24tc2hhZG93OiAjYjM2ZTU3LFxuICAgLy8gbm90aWZpY2F0aW9uLWhlYWRlcjogIzQ4MjYxYixcbiAgIC8vIHRyYWRlci1jaGFydC1zaWRlOiAjNjEzNDI0LFxuICAgLy8gc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSg2OCwgMzYsIDI1LCAuNiksXG4gICAvLyBzY3JvbGxiYXItY2lyY2xlOiAjYTY1NDM5LFxuICAgLy8gYmctY29sb3ItdGFic2V0OiAjMGRmZjkyLFxuICAgLy8gc2hhZGUtd2hpdGUtMTogI2ZmZixcbiAgIC8vIGJhY2tncm91bmQtaW1nOiB1cmwoLi8uLi8uLi8uLi8uLi9zcmMvYXNzZXRzL3RoZW1lc19pbWFnZXMvMzIuanBnKSxcbiAgIC8vIGJhY2tncm91bmQtaW1nLTI6IHVybCguLy4uLy4uL3NyYy9hc3NldHMvdGhlbWVzX2ltYWdlcy8zMi5qcGcpLFxuIFxuICAgLy8zM1xuICAgLy8gY2FyZC1jb2xvcjogIzI4MjgyOCxcbiAgIC8vIGNpcmNsZS1iZzogIzIwMjAyMCxcbiAgIC8vIGJvdHRvbS1jYXJkLXRleHQ6ICM1MjUyNTIsXG4gICAvLyBsaWdodC10ZXh0OiAjYWZhZWFlLFxuICAgLy8gbGluZS1jb2xvcjogIzIxMjEyMSxcbiAgIC8vIHVwY29taW5nLWNhcmQtY29sb3I6ICM4ZDhjOGMsXG4gICAvLyBub3Rlcy1oZWFkZXI6ICM2MzYxNjEsXG4gXG4gICAvLyBub3RpZmljYXRpb25zLWJnOiAjMTMxMzEzLFxuICAgLy8gcGFnZS1iZzogIzFjMWMxYyxcbiAgIC8vIHRyYWRlcnMtaHViLXRleHQ6ICM0ZjRmNGYsXG4gICAvLyBzY3JvbGxiYXItYmFja2dyb3VuZDogIzUyNTI1MixcbiAgIC8vIGNhbGVuZGFyLXJvdy0yOiAjMzAzMDMwLFxuICAgLy8gbGlnaHQtdGV4dC0yOiAjY2NjY2NjLFxuICAgLy8gbm90aWZpY2F0aW9uLXNoYWRvdzogIzc3NzU3NSxcbiAgIC8vIG5vdGlmaWNhdGlvbi1oZWFkZXI6ICMxMzEzMTMsXG4gICAvLyB0cmFkZXItY2hhcnQtc2lkZTogIzFjMWMxYyxcbiAgIC8vIHNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoMjAsIDIwLCAyMCwgLjYpLFxuICAgLy8gc2Nyb2xsYmFyLWNpcmNsZTogIzRmNGY0ZixcbiAgIC8vIGJnLWNvbG9yLXRhYnNldDogIzBkZmY5MixcbiAgIC8vIHNoYWRlLXdoaXRlLTE6ICNmZmYsXG4gICAvLyBiYWNrZ3JvdW5kLWltZzogdXJsKC4vLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzMzLmpwZyksXG4gICAvLyBiYWNrZ3JvdW5kLWltZy0yOiB1cmwoLi8uLi8uLi9zcmMvYXNzZXRzL3RoZW1lc19pbWFnZXMvMzMuanBnKSxcbiBcbiAgIC8vMzRcbiAgIC8vIGNhcmQtY29sb3I6ICM2NjVjNDUsXG4gICAvLyBjaXJjbGUtYmc6ICM1NjRkMzksXG4gICAvLyBib3R0b20tY2FyZC10ZXh0OiAjNGU0NjMzLFxuICAgLy8gbGlnaHQtdGV4dDogI2M3YjQ4OSxcbiAgIC8vIGxpbmUtY29sb3I6ICM0YTQyMzEsXG4gICAvLyB1cGNvbWluZy1jYXJkLWNvbG9yOiAjYWU5YTZjLFxuICAgLy8gbm90ZXMtaGVhZGVyOiAjODQ3ODVjLFxuIFxuICAgLy8gbm90aWZpY2F0aW9ucy1iZzogIzMzMmMyMSxcbiAgIC8vIHBhZ2UtYmc6ICM0ZDQ0MzMsXG4gICAvLyB0cmFkZXJzLWh1Yi10ZXh0OiAjNGM0NDMxLFxuICAgLy8gc2Nyb2xsYmFyLWJhY2tncm91bmQ6ICM0ZTQ2MzMsXG4gICAvLyBjYWxlbmRhci1yb3ctMjogIzZiNjI0YyxcbiAgIC8vIGxpZ2h0LXRleHQtMjogI2Q4Y2ZiOSxcbiAgIC8vIG5vdGlmaWNhdGlvbi1zaGFkb3c6ICM5Mzg5NzEsXG4gICAvLyBub3RpZmljYXRpb24taGVhZGVyOiAjMzQyZTIyLFxuICAgLy8gdHJhZGVyLWNoYXJ0LXNpZGU6ICM0NzQwMzAsXG4gICAvLyBzaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDUwLCA0NSwgMzQsIC42KSxcbiAgIC8vIHNjcm9sbGJhci1jaXJjbGU6ICM0YzQ0MzEsXG4gICAvLyBiZy1jb2xvci10YWJzZXQ6ICMwZGZmOTIsXG4gICAvLyBzaGFkZS13aGl0ZS0xOiAjZmZmLFxuICAgLy8gYmFja2dyb3VuZC1pbWc6IHVybCguLy4uLy4uLy4uLy4uL3NyYy9hc3NldHMvdGhlbWVzX2ltYWdlcy8zNC5qcGcpLFxuICAgLy8gYmFja2dyb3VuZC1pbWctMjogdXJsKC4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzM0LmpwZyksXG4gXG4gICAvLzM1XG4gICAvLyBjYXJkLWNvbG9yOiAjMTEyOTQwLFxuICAgLy8gY2lyY2xlLWJnOiAjMGYyNDM4LFxuICAgLy8gYm90dG9tLWNhcmQtdGV4dDogIzJjNDg2NCxcbiAgIC8vIGxpZ2h0LXRleHQ6ICM4NGE5Y2QsXG4gICAvLyBsaW5lLWNvbG9yOiAjMGUyMTMzLFxuICAgLy8gdXBjb21pbmctY2FyZC1jb2xvcjogIzNmNjg5MCxcbiAgIC8vIG5vdGVzLWhlYWRlcjogIzI1NDQ2MixcbiBcbiAgIC8vIG5vdGlmaWNhdGlvbnMtYmc6ICMwOTE1MjAsXG4gICAvLyBwYWdlLWJnOiAjMGQyMDMyLFxuICAgLy8gdHJhZGVycy1odWItdGV4dDogIzJiNDY2MSxcbiAgIC8vIHNjcm9sbGJhci1iYWNrZ3JvdW5kOiAjMmM0ODY0LFxuICAgLy8gY2FsZW5kYXItcm93LTI6ICMxYTMxNDcsXG4gICAvLyBsaWdodC10ZXh0LTI6ICNiN2M5ZGIsXG4gICAvLyBub3RpZmljYXRpb24tc2hhZG93OiAjNDI1ZDc2LFxuICAgLy8gbm90aWZpY2F0aW9uLWhlYWRlcjogIzA5MTYyMixcbiAgIC8vIHRyYWRlci1jaGFydC1zaWRlOiAjMGMxZDJkLFxuICAgLy8gc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSg4LCAyMCwgMzEsIC42KSxcbiAgIC8vIHNjcm9sbGJhci1jaXJjbGU6ICMyYjQ2NjEsXG4gICAvLyBiZy1jb2xvci10YWJzZXQ6ICMwZGZmOTIsXG4gICAvLyBzaGFkZS13aGl0ZS0xOiAjZmZmLFxuICAgLy8gYmFja2dyb3VuZC1pbWc6IHVybCguLy4uLy4uLy4uLy4uL3NyYy9hc3NldHMvdGhlbWVzX2ltYWdlcy8zNS5qcGcpLFxuICAgLy8gYmFja2dyb3VuZC1pbWctMjogdXJsKC4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzM1LmpwZyksXG4gXG4gIC8vICBDaHJpc3RtYXNcbiAgLy8gIGNhcmQtY29sb3I6ICNhODQwMzUsXG4gIC8vICBjaXJjbGUtYmc6ICNiZDU2NGMsXG4gIC8vICBib3R0b20tY2FyZC10ZXh0OiAjYmEzYzJmLFxuICAvLyAgbGlnaHQtdGV4dDogI2Y2OTQ4YSxcbiAgLy8gIGxpbmUtY29sb3I6ICM4MjMwMjcsXG4gIC8vICB1cGNvbWluZy1jYXJkLWNvbG9yOiAjZWE0NjM0LFxuICAvLyAgbm90ZXMtaGVhZGVyOiAjYjM1ZDU0LFxuIFxuICAvLyAgbm90aWZpY2F0aW9ucy1iZzogI2EyMzIyYyxcbiAgLy8gIHBhZ2UtYmc6ICNiNjRjNDMsXG4gIC8vICB0cmFkZXJzLWh1Yi10ZXh0OiAjYjQzYTJlLFxuICAvLyAgc2Nyb2xsYmFyLWJhY2tncm91bmQ6ICNiYTNjMmYsXG4gIC8vICBjYWxlbmRhci1yb3ctMjogI2FhNDczZCxcbiAgLy8gIGxpZ2h0LXRleHQtMjogI2VmYmZiYSxcbiAgLy8gIG5vdGlmaWNhdGlvbi1zaGFkb3c6ICNiYjcyNmEsXG4gIC8vICBub3RpZmljYXRpb24taGVhZGVyOiAjNzEzNDJlLFxuICAvLyAgdHJhZGVyLWNoYXJ0LXNpZGU6ICM3NTJkMjUsXG4gIC8vICBzaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDExNywgNDUsIDM3LCAuNiksXG4gIC8vICBzY3JvbGxiYXItY2lyY2xlOiAjYjQzYTJlLFxuICAvLyAgYmctY29sb3ItdGFic2V0OiAjMGRmZjkyLFxuICAvLyAgc2hhZGUtd2hpdGUtMTogI2ZmZixcbiAgLy8gIGJhY2tncm91bmQtaW1nOiB1cmwoaHR0cHM6Ly9kMzA4ZmFrYnFlYms3Yy5jbG91ZGZyb250Lm5ldC93aXptYXNfYmcuanBnKSxcbiAgLy8gIGJhY2tncm91bmQtaW1nLTI6IHVybChodHRwczovL2QzMDhmYWticWViazdjLmNsb3VkZnJvbnQubmV0L3dpem1hc19iZy5qcGcpLFxuICAgXG4gICBjb2xvci1iZy0yOiAjM2MzNThjLFxuICAgY29sb3ItYmctMzogI2EyMzIyYyxcbiAgIGNvbG9yLWJnLTQ6ICM1NTRkYjMsXG4gICBjb2xvci1iZy01OiAjMzczMTdhLFxuICAgY29sb3ItYmctNjogIzU1NGRiMyxcbiAgIGNvbG9yLWJnLTc6ICM5MTRmZWYsXG4gICBcbiAgIHJhZGl1czogMC41cmVtLFxuIFxuICAgY29sb3ItYmc6ICMzZDM3ODAsXG4gICBjb2xvci1iZy1hY3RpdmU6ICM0OTQyOTksXG4gICBjb2xvci1mZzogI2ExYTFlNSxcbiAgIGNvbG9yLWZnLWhlYWRpbmc6ICNmZmZmZmYsXG4gICBjb2xvci1mZy10ZXh0OiAjZDFkMWZmLFxuICAgY29sb3ItZmctaGlnaGxpZ2h0OiAjMDBmOWE2LFxuIFxuICAgY29sb3ItZ3JheTogcmdiYSg4MSwgMTEzLCAxNjUsIDAuMTUpLFxuICAgY29sb3ItbmV1dHJhbDogdHJhbnNwYXJlbnQsXG4gICBjb2xvci13aGl0ZTogI2ZmZmZmZixcbiAgIGNvbG9yLWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gXG4gICBjb2xvci1wcmltYXJ5OiAjNzY1OWZmLFxuICAgY29sb3Itc3VjY2VzczogIzBkZmY5MixcbiAgIGNvbG9yLWluZm86ICMwMDg4ZmYsXG4gICBjb2xvci13YXJuaW5nOiAjZmZhMTAwLFxuICAgY29sb3ItZGFuZ2VyOiAjZmYzODZhLFxuIFxuICAgbGluay1jb2xvcjogIzAwZjlhNixcbiAgIGxpbmstY29sb3ItaG92ZXI6ICMxNGZmYmUsXG4gXG4gICBzZXBhcmF0b3I6ICMzNDJlNzMsICBcbiBcbiAgIGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gICBsYXlvdXQtYmc6ICMyZjI5NmIsXG4gICBcbiBcbiAgIHNjcm9sbGJhci1mZzogIzU1NGRiMyxcbiAgIHNjcm9sbGJhci1iZzogIzMzMmU3MyxcbiBcbiAgIHJhZGlhbC1ncmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNTAlLCAjNDIzZjhjLCAjMzAyYzZlKSxcbiAgIGxpbmVhci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTcxNzQ5LCAjNDEzNzg5KSxcbiBcbiAgIHNpZGViYXItZmc6IGNvbG9yLXNlY29uZGFyeSxcbiAgIHNpZGViYXItYmc6IGNvbG9yLWJnLFxuIFxuICAgaGVhZGVyLWZnOiBjb2xvci13aGl0ZSxcbiAgIGhlYWRlci1iZzogY2FyZC1jb2xvcixcbiBcbiAgIGZvb3Rlci1mZzogY29sb3ItZmcsXG4gICBmb290ZXItYmc6IGNvbG9yLWJnLFxuIFxuICAgYWN0aW9ucy1mZzogY29sb3ItZmcsXG4gICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcbiBcbiAgIHVzZXItZmc6IGNvbG9yLWJnLFxuICAgdXNlci1iZzogY29sb3ItZmcsXG4gICB1c2VyLWZnLWhpZ2hsaWdodDogY29sb3ItZmctaGlnaGxpZ2h0LFxuIFxuICAgcG9wb3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gICBwb3BvdmVyLXNoYWRvdzogc2hhZG93LFxuIFxuICAgY29udGV4dC1tZW51LWFjdGl2ZS1iZzogY29sb3ItcHJpbWFyeSxcbiAgIGNvbnRleHQtbWVudS1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gXG4gICBmb290ZXItaGVpZ2h0OiBoZWFkZXItaGVpZ2h0LFxuIFxuICAgc2lkZWJhci13aWR0aDogMTYuMjVyZW0sXG4gICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNDVyZW0sXG4gXG4gICBtZW51LWZnOiBjb2xvci1mZyxcbiAgIG1lbnUtYmc6IGNvbG9yLWJnLFxuICAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLXdoaXRlLFxuICAgbWVudS1ncm91cC1mZzogY29sb3Itd2hpdGUsXG4gICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gICBtZW51LWFjdGl2ZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICAgbWVudS1zdWJtZW51LWJnOiBsYXlvdXQtYmcsXG4gICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLFxuICAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgIG1lbnUtc3VibWVudS1hY3RpdmUtYmc6IHJnYmEoMCwgMjU1LCAxNzAsIDAuMjUpLFxuICAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiAwIDJweCAxMnB4IDAgcmdiYSgwLCAyNTUsIDE3MCwgMC4yNSksXG4gICBtZW51LWl0ZW0tcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtLFxuICAgbWVudS1pdGVtLXNlcGFyYXRvcjogdHJhbnNwYXJlbnQsXG4gXG4gICBidG4taGVyby1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDMzLCA3LCA3NywgMC41KSxcbiAgIGJ0bi1oZXJvLXRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuICAgYnRuLWhlcm8tYmV2ZWwtc2l6ZTogMCAzcHggMCAwLFxuICAgYnRuLWhlcm8tZ2xvdy1zaXplOiAwIDJweCA4cHggMCxcbiAgIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gICBidG4taGVyby1zdWNjZXNzLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gICBidG4taGVyby1kYW5nZXItZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgIGJ0bi1vdXRsaW5lLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICAgYnRuLW91dGxpbmUtaG92ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gICBidG4tb3V0bGluZS1mb2N1cy1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgIGJ0bi1ncm91cC1iZzogIzM3MzI3MyxcbiAgIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICMzMTJjNjYsXG4gXG4gICBmb3JtLWNvbnRyb2wtYmc6ICMzNzMxN2EsXG4gICBmb3JtLWNvbnRyb2wtZm9jdXMtYmc6IHNlcGFyYXRvcixcbiAgIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgIGZvcm0tY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG4gXG4gICBjaGVja2JveC1iZzogdHJhbnNwYXJlbnQsXG4gICBjaGVja2JveC1zaXplOiAxLjI1cmVtLFxuICAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgIGNoZWNrYm94LWJvcmRlci1jb2xvcjogY29sb3ItbGlnaHQtMixcbiAgIGNoZWNrYm94LWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG4gXG4gICBjaGVja2JveC1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgIGNoZWNrYm94LWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICAgY2hlY2tib3gtY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG4gXG4gICBjaGVja2JveC1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gICBjaGVja2JveC1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgIGNoZWNrYm94LWRpc2FibGVkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcbiBcbiAgIHNlYXJjaC1iZzogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTcxNzQ5LCAjNDEzNzg5KSxcbiBcbiAgIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gICBzbWFydC10YWJsZS1iZy1ldmVuOiAjM2EzNDdhLFxuICAgc21hcnQtdGFibGUtYmctYWN0aXZlOiBjb2xvci1iZy1hY3RpdmUsXG4gXG4gICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogMnB4LFxuICAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogY29sb3ItZmctaGVhZGluZyxcbiAgIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG4gICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiBcbiAgIGJhZGdlLWZnLXRleHQ6IGNvbG9yLXdoaXRlLFxuICAgYmFkZ2UtcHJpbWFyeS1iZy1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gICBiYWRnZS1pbmZvLWJnLWNvbG9yOiBjb2xvci1pbmZvLFxuICAgYmFkZ2Utd2FybmluZy1iZy1jb2xvcjogY29sb3Itd2FybmluZyxcbiAgIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuIFxuICAgc3Bpbm5lci1iZzogY29sb3ItYmcsXG4gICBzdGVwcGVyLWFjY2VudC1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiBcbiAgIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICAgdGFicy1zZWxlY3RlZC1kZWdyZWVzOiAyMGRlZyxcbiBcbiAgIGNhbGVuZGFyLWFjdGl2ZS1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICAgY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjNGU0MDk1LFxuICAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogIzM1MmY2ZSxcbiBcbiAgIHNlbGVjdC1vcHRpb24tZGlzYWJsZWQtYmc6ICMzMTJlNzUsXG4gXG4gICB0b2FzdHItY29sb3ItZmc6IGNvbG9yLXdoaXRlLFxuICAgdG9hc3RyLXBhZGRpbmc6IDEuMjVyZW0sXG4gICB0b2FzdHItYm9yZGVyOiAwLFxuICAgdG9hc3RyLWRlZmF1bHQtYmFja2dyb3VuZDogI2JjYzNjYyxcbiBcbiAgIHRvb2x0aXAtZmc6IGNvbG9yLWJnLFxuICAgdG9vbHRpcC1zdGF0dXMtZmc6IGNvbG9yLXdoaXRlLFxuIFxuICAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gICBkYXRlcGlja2VyLXNoYWRvdzogc2hhZG93LFxuIFxuICAgcmFkaW8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG4gICByYWRpby1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItcHJpbWFyeSxcbiAgIFxuICAgY2FsZW5kYXItcm93LWJnOiAjZmZmLFxuICAgY2FsZW5kYXItbGFyZ2Utd2lkdGg6IDEwMCUsXG4gICBjYWxlbmRhci1sYXJnZS1ib2R5LWhlaWdodDogMjcuNzVyZW0sXG4gICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aDogMTAwJSxcbiAgIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogNS41cmVtLFxuICAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNC4yNXJlbSxcbiAgIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuICk7XG4gLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4gJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRlZmF1bHQpO1xuICIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuXG4kdGhlbWU6IChcblxuICBcblxuICBjb2xvci1iZy0yOiAjM2MzNzgwLFxuICBjb2xvci1iZy0zOiAjMzMyZTczLFxuICAgIFxuICBcbiAgY29sb3ItQ2FsLVRpdGxlOiAjNDBmZmE5LFxuICBcbiAgY2FsZW5kYXJSb3c6ICM1ODU5OGUsXG4gIFxuICBjb2xvci1mZy10ZXh0LTI6ICMzYjM2N2YsXG4gIGNvbG9yLWZnLXRleHQtMzogI2QxZDFmZixcbiAgY29sb3ItZmctdGV4dC00OiAjYzE5OGZiLFxuICBcbiAgY29sb3ItbGlnaHQtMjogI2QxZDFmZixcbiAgXG4gIGZvbnQtbWFpbjogdW5xdW90ZSgnXCJFeG9cIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYnKSxcbiAgZm9udC1zZWNvbmRhcnk6IGZvbnQtbWFpbixcblxuICBmb250LXdlaWdodC10aGluOiAyMDAsXG4gIGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDAsXG4gIGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwLFxuICBmb250LXdlaWdodC1ib2xkZXI6IDUwMCxcbiAgZm9udC13ZWlnaHQtYm9sZDogNjAwLFxuICBmb250LXdlaWdodC11bHRyYS1ib2xkOiA4MDAsXG5cbiAgLy8gVE9ETzogdXNlIGl0IGFzIGEgZGVmYXVsdCBmb250LXNpemVcbiAgYmFzZS1mb250LXNpemU6IDE2cHgsXG5cbiAgZm9udC1zaXplLXhsZzogMS4yNXJlbSxcbiAgZm9udC1zaXplLWxnOiAxLjEyNXJlbSxcbiAgZm9udC1zaXplOiAxcmVtLFxuICBmb250LXNpemUtc206IDAuODc1cmVtLFxuICBmb250LXNpemUteHM6IDAuNzVyZW0sXG5cbiAgcmFkaXVzOiAwLjM3NXJlbSxcbiAgcGFkZGluZzogMS4yNXJlbSxcbiAgbWFyZ2luOiAxLjVyZW0sXG4gIGxpbmUtaGVpZ2h0OiAxLjI1LFxuXG4gIGNvbG9yLWJnOiAjZmZmZmZmLFxuICBjb2xvci1iZy1hY3RpdmU6ICNlOWVkZjIsXG4gIGNvbG9yLWZnOiAjYTRhYmIzLFxuICBjb2xvci1mZy1oZWFkaW5nOiAjMmEyYTJhLFxuICBjb2xvci1mZy10ZXh0OiAjNGI0YjRiLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6ICM0MGRjN2UsXG5cbiAgc2VwYXJhdG9yOiAjZWJlZWYyLFxuXG4gIGNvbG9yLWdyYXk6IHJnYmEoODEsIDExMywgMTY1LCAwLjE1KSxcbiAgY29sb3ItbmV1dHJhbDogdHJhbnNwYXJlbnQsXG4gIGNvbG9yLXdoaXRlOiAjZmZmZmZmLFxuICBjb2xvci1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM4YTdmZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICMwZGZmOTIsXG4gIGNvbG9yLWluZm86ICM0Y2E2ZmYsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmExMDAsXG4gIGNvbG9yLWRhbmdlcjogI2ZmNGM2YSxcblxuICAvLyBUT0RPOiBtb3ZlIHRvIGNvbnN0YW50c1xuICBzb2NpYWwtY29sb3ItZmFjZWJvb2s6ICMzYjU5OTgsXG4gIHNvY2lhbC1jb2xvci10d2l0dGVyOiAjNTVhY2VlLFxuICBzb2NpYWwtY29sb3ItZ29vZ2xlOiAjZGQ0YjM5LFxuICBzb2NpYWwtY29sb3ItbGlua2VkaW46ICMwMTc3YjUsXG4gIHNvY2lhbC1jb2xvci1naXRodWI6ICM2YjZiNmIsXG4gIHNvY2lhbC1jb2xvci1zdGFja292ZXJmbG93OiAjMmY5NmU4LFxuICBzb2NpYWwtY29sb3ItZHJpYmJsZTogI2YyNjc5OCxcbiAgc29jaWFsLWNvbG9yLWJlaGFuY2U6ICMwMDkzZmEsXG5cbiAgYm9yZGVyLWNvbG9yOiBjb2xvci1ncmF5LFxuICBzaGFkb3c6IDAgMnB4IDEycHggMCAjZGZlM2ViLFxuXG4gIGxpbmstY29sb3I6ICMzZGNjNmQsXG4gIGxpbmstY29sb3ItaG92ZXI6ICMyZWU1NmIsXG4gIGxpbmstY29sb3ItdmlzaXRlZDogbGluay1jb2xvcixcblxuICBzY3JvbGxiYXItZmc6ICNkYWRhZGEsXG4gIHNjcm9sbGJhci1iZzogI2YyZjJmMixcbiAgc2Nyb2xsYmFyLXdpZHRoOiA1cHgsXG4gIHNjcm9sbGJhci10aHVtYi1yYWRpdXM6IDIuNXB4LFxuXG4gIHJhZGlhbC1ncmFkaWVudDogbm9uZSxcbiAgbGluZWFyLWdyYWRpZW50OiBub25lLFxuXG4gIGNhcmQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGNhcmQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBjYXJkLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGNhcmQtZmc6IGNvbG9yLWZnLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGNhcmQtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1iZzogY29sb3ItYmcsXG4gIGNhcmQtaGVpZ2h0LXh4c21hbGw6IDk2cHgsXG4gIGNhcmQtaGVpZ2h0LXhzbWFsbDogMjE2cHgsXG4gIGNhcmQtaGVpZ2h0LXNtYWxsOiAzMzZweCxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiA0NTZweCxcbiAgY2FyZC1oZWlnaHQtbGFyZ2U6IDU3NnB4LFxuICBjYXJkLWhlaWdodC14bGFyZ2U6IDY5NnB4LFxuICBjYXJkLWhlaWdodC14eGxhcmdlOiA4MTZweCxcbiAgY2FyZC1zaGFkb3c6IHNoYWRvdyxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDAsXG4gIGNhcmQtYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBjYXJkLWJvcmRlci1jb2xvcjogY29sb3ItYmcsXG4gIGNhcmQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjYXJkLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGNhcmQtbWFyZ2luOiBtYXJnaW4sXG4gIGNhcmQtaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgY2FyZC1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBjYXJkLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBjYXJkLWhlYWRlci1mZzogY29sb3ItZmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtaGVhZGVyLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNhcmQtaGVhZGVyLWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGNhcmQtaGVhZGVyLWFjdGl2ZS1mZzogY29sb3ItYmcsXG4gIGNhcmQtaGVhZGVyLWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgY2FyZC1oZWFkZXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FyZC1oZWFkZXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgY2FyZC1oZWFkZXItc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2FyZC1oZWFkZXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgY2FyZC1oZWFkZXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBjYXJkLWhlYWRlci1ib3JkZXItdHlwZTogc29saWQsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci1jb2xvcjogY2FyZC1zZXBhcmF0b3IsXG5cbiAgaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBoZWFkZXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBoZWFkZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGhlYWRlci1iZzogY29sb3ItYmcsXG4gIGhlYWRlci1oZWlnaHQ6IDQuNzVyZW0sXG4gIGhlYWRlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBoZWFkZXItc2hhZG93OiBzaGFkb3csXG5cbiAgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sXG4gIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBmb290ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGZvb3Rlci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGZvb3Rlci1iZzogY29sb3ItYmcsXG4gIGZvb3Rlci1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgZm9vdGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGxheW91dC1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBsYXlvdXQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGxheW91dC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGxheW91dC1mZzogY29sb3ItZmcsXG4gIGxheW91dC1iZzogI2ViZWZmNSxcbiAgbGF5b3V0LW1pbi1oZWlnaHQ6IDEwMHZoLFxuICBsYXlvdXQtY29udGVudC13aWR0aDogOTAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1taW4td2lkdGg6IDMwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWF4LXdpZHRoOiAxOTIwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1iZzogbGF5b3V0LWJnLFxuICBsYXlvdXQtd2luZG93LW1vZGUtcGFkZGluZy10b3A6IDQuNzVyZW0sXG4gIGxheW91dC13aW5kb3ctc2hhZG93OiBzaGFkb3csXG4gIGxheW91dC1wYWRkaW5nOiAyLjI1cmVtIDIuMjVyZW0gMC43NXJlbSxcbiAgbGF5b3V0LW1lZGl1bS1wYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAuNXJlbSxcbiAgbGF5b3V0LXNtYWxsLXBhZGRpbmc6IDFyZW0gMXJlbSAwLFxuXG4gIHNpZGViYXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNpZGViYXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBzaWRlYmFyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzaWRlYmFyLWJnOiBjb2xvci1iZyxcbiAgc2lkZWJhci1oZWlnaHQ6IDEwMHZoLFxuICBzaWRlYmFyLXdpZHRoOiAxNnJlbSxcbiAgc2lkZWJhci13aWR0aC1jb21wYWN0OiAzLjVyZW0sXG4gIHNpZGViYXItcGFkZGluZzogcGFkZGluZyxcbiAgc2lkZWJhci1oZWFkZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItZm9vdGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLXNoYWRvdzogc2hhZG93LFxuXG4gIG1lbnUtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBtZW51LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1hY3RpdmUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcblxuICBtZW51LXN1Ym1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYmc6IGNvbG9yLWJnLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGlnaGxpZ2h0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLXNoYWRvdzogbm9uZSxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWZnOiBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItYmc6IG1lbnUtc3VibWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tY29udGFpbmVyLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAuNXJlbSxcblxuICBtZW51LWdyb3VwLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZ3JvdXAtZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgbWVudS1ncm91cC1mZzogY29sb3ItZmcsXG4gIG1lbnUtZ3JvdXAtcGFkZGluZzogMXJlbSAxLjI1cmVtLFxuICBtZW51LWl0ZW0tcGFkZGluZzogMC42NzVyZW0gMC43NXJlbSxcbiAgbWVudS1pdGVtLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBtZW51LWljb24tZm9udC1zaXplOiAyLjVyZW0sXG4gIG1lbnUtaWNvbi1tYXJnaW46IDAgMC4yNXJlbSAwLFxuICBtZW51LWljb24tY29sb3I6IGNvbG9yLWZnLFxuICBtZW51LWljb24tYWN0aXZlLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIHRhYnMtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICB0YWJzLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICB0YWJzLWNvbnRlbnQtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgdGFicy1jb250ZW50LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICB0YWJzLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQsXG4gIHRhYnMtYWN0aXZlLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgdGFicy1jb250ZW50LXBhZGRpbmc6IDAsXG4gIHRhYnMtaGVhZGVyLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgdGFicy1mZzogY29sb3ItZmcsXG4gIHRhYnMtZmctZGlzYWJsZWQ6IHRhYnMtZmcsXG4gIHRhYnMtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICB0YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtZGVncmVlczogMCxcbiAgdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICByb3V0ZS10YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgcm91dGUtdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgcm91dGUtdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHJvdXRlLXRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgcm91dGUtdGFicy1oZWFkZXItYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICByb3V0ZS10YWJzLWZnOiBjb2xvci1mZyxcbiAgcm91dGUtdGFicy1mZy1kaXNhYmxlZDogcm91dGUtdGFicy1mZyxcbiAgcm91dGUtdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICByb3V0ZS10YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgcm91dGUtdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICB1c2VyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICB1c2VyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgdXNlci1iZzogY29sb3ItYmcsXG4gIHVzZXItZmc6IGNvbG9yLWZnLFxuICB1c2VyLWZnLWhpZ2hsaWdodDogI2JjYzNjYyxcbiAgdXNlci1mb250LWZhbWlseS1zZWNvbmRhcnk6IGZvbnQtc2Vjb25kYXJ5LFxuICB1c2VyLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgdXNlci1zaXplLW1lZGl1bTogMi41cmVtLFxuICB1c2VyLXNpemUtbGFyZ2U6IDMuMjVyZW0sXG4gIHVzZXItc2l6ZS14bGFyZ2U6IDRyZW0sXG5cbiAgcG9wb3Zlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgcG9wb3Zlci1iZzogY29sb3ItYmcsXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgcG9wb3Zlci1zaGFkb3c6IG5vbmUsXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICBjb250ZXh0LW1lbnUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNvbnRleHQtbWVudS1iZzogY29sb3ItYmcsXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtZmc6IGNvbG9yLXdoaXRlLFxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBub25lLFxuICBjb250ZXh0LW1lbnUtYXJyb3ctc2l6ZTogMTFweCxcblxuICBhY3Rpb25zLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY3Rpb25zLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYWN0aW9ucy1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcbiAgYWN0aW9ucy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWN0aW9ucy1wYWRkaW5nOiBwYWRkaW5nLFxuICBhY3Rpb25zLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgYWN0aW9ucy1zaXplLW1lZGl1bTogMi4yNXJlbSxcbiAgYWN0aW9ucy1zaXplLWxhcmdlOiAzLjVyZW0sXG5cbiAgc2VhcmNoLWJ0bi1vcGVuLWZnOiBjb2xvci1mZyxcbiAgc2VhcmNoLWJ0bi1jbG9zZS1mZzpcdGNvbG9yLWZnLFxuICBzZWFyY2gtYmc6IGxheW91dC1iZyxcbiAgc2VhcmNoLWJnLXNlY29uZGFyeTogY29sb3ItZmcsXG4gIHNlYXJjaC10ZXh0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBzZWFyY2gtaW5mbzogY29sb3ItZmcsXG4gIHNlYXJjaC1kYXNoOiBjb2xvci1mZyxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyOiBjb2xvci1mZyxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGNvbG9yLWJnLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHNtYXJ0LXRhYmxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1iZzogY29sb3ItYmcsXG5cbiAgc21hcnQtdGFibGUtYmctZXZlbjogI2Y1ZjdmYyxcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiBjb2xvci1mZyxcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiAjZTZmM2ZmLFxuICBzbWFydC10YWJsZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuICBzbWFydC10YWJsZS1maWx0ZXItcGFkZGluZzogMC4zNzVyZW0gMC41cmVtLFxuICBzbWFydC10YWJsZS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogMXB4LFxuICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiAjZmZmZmZmLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1zdWNjZXNzLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4wNSksXG5cbiAgdG9hc3RyLWJnOiBjb2xvci1iZyxcbiAgdG9hc3RyLXBhZGRpbmc6IDEuMTI1cmVtLFxuICB0b2FzdHItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvYXN0ci1ib3JkZXI6IDAuMTI1cmVtIHNvbGlkLFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICB0b2FzdHItYm9yZGVyLWNvbG9yOiAjYmNjM2NjLFxuICB0b2FzdHItaWNvbi1yYWRpdXM6IDAuMjVyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICBidG4tZmc6IGNvbG9yLXdoaXRlLFxuICBidG4tZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBidG4tbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBidG4tZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBidG4tY3Vyc29yOiBkZWZhdWx0LFxuXG4gIGJ0bi1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBidG4tc2Vjb25kYXJ5LWJnOiB0cmFuc3BhcmVudCxcbiAgYnRuLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGJ0bi1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBidG4td2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgYnRuLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAjZGFkZmU2LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlci13aWR0aDogMnB4LFxuXG4gIGJ0bi1wYWRkaW5nLXktbGc6IDAuODc1cmVtLFxuICBidG4tcGFkZGluZy14LWxnOiAxLjc1cmVtLFxuICBidG4tZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG5cbiAgLy8gZGVmYXVsdCBzaXplXG4gIGJ0bi1wYWRkaW5nLXktbWQ6IDAuNzVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtbWQ6IDEuNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1tZDogMXJlbSxcblxuICBidG4tcGFkZGluZy15LXNtOiAwLjYyNXJlbSxcbiAgYnRuLXBhZGRpbmcteC1zbTogMS41cmVtLFxuICBidG4tZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcblxuICBidG4tcGFkZGluZy15LXhzOiAwLjVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgteHM6IDEuMjVyZW0sXG4gIGJ0bi1mb250LXNpemUteHM6IDAuNzVyZW0sXG5cbiAgYnRuLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYnRuLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuICBidG4tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidG4tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ0bi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IG5vbmUsXG4gIGJ0bi1oZXJvLWJldmVsLXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRlZ3JlZTogMjBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiAxMGRlZyxcbiAgYnRuLWhlcm8taW5mby1kZWdyZWU6IC0xMGRlZyxcbiAgYnRuLWhlcm8tZGFuZ2VyLWRlZ3JlZTogLTIwZGVnLFxuICBidG4taGVyby1zZWNvbmRhcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcblxuICBidG4tb3V0bGluZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtaG92ZXItZmc6ICNmZmZmZmYsXG4gIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGJ0bi1ncm91cC1iZzogbGF5b3V0LWJnLFxuICBidG4tZ3JvdXAtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICNkYWRmZTYsXG5cbiAgZm9ybS1jb250cm9sLXRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgZm9ybS1jb250cm9sLWJnOiBjb2xvci1iZyxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBjb2xvci1iZyxcblxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHgsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItdHlwZTogc29saWQsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGZvcm0tY29udHJvbC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGZvcm0tY29udHJvbC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6ICNkYWRmZTYsXG4gIGZvcm0tY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG5cbiAgZm9ybS1jb250cm9sLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLFxuICBmb3JtLWNvbnRyb2wtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGZvcm0tY29udHJvbC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXIsXG4gIGZvcm0tY29udHJvbC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZyxcblxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3I6IGNvbG9yLWZnLFxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItZm9udC1zaXplOiAxcmVtLFxuXG4gIGZvcm0tY29udHJvbC1mb250LXNpemU6IDFyZW0sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nOiAwLjc1cmVtIDEuMTI1cmVtLFxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nLXNtOiAwLjM3NXJlbSAxLjEyNXJlbSxcbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZy1sZzogMS4xMjVyZW0sXG5cbiAgZm9ybS1jb250cm9sLWxhYmVsLWZvbnQtd2VpZ2h0OiA0MDAsXG5cbiAgZm9ybS1jb250cm9sLWZlZWRiYWNrLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIGZvcm0tY29udHJvbC1mZWVkYmFjay1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuXG4gIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBjb2xvci1saWdodC0yLFxuICBjaGVja2JveC1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuXG4gIGNoZWNrYm94LWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoZWNrYm94LWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGNoZWNrYm94LWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgbW9kYWwtZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1vZGFsLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgbW9kYWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1vZGFsLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1vZGFsLWJnOiBjb2xvci1iZyxcbiAgbW9kYWwtYm9yZGVyOiB0cmFuc3BhcmVudCxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtb2RhbC1wYWRkaW5nOiBwYWRkaW5nLFxuICBtb2RhbC1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBtb2RhbC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbW9kYWwtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBtb2RhbC1ib2R5LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIG1vZGFsLWJvZHktZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtYm9keS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbW9kYWwtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG5cbiAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gIGJhZGdlLXByaW1hcnktYmctY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gIGJhZGdlLXdhcm5pbmctYmctY29sb3I6IGNvbG9yLXdhcm5pbmcsXG4gIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuXG4gIHByb2dyZXNzLWJhci1oZWlnaHQteGxnOiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LWxnOiAxLjVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXNtOiAxLjI1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXhzOiAxcmVtLFxuICBwcm9ncmVzcy1iYXItYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS14bGc6IGZvbnQtc2l6ZS14bGcsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUteHM6IGZvbnQtc2l6ZS14cyxcbiAgcHJvZ3Jlc3MtYmFyLXJhZGl1czogcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItYmc6IGxheW91dC1iZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtY29sb3I6IGNvbG9yLXdoaXRlLFxuICBwcm9ncmVzcy1iYXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIHByb2dyZXNzLWJhci1kZWZhdWx0LWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHByb2dyZXNzLWJhci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGFsZXJ0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhbGVydC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFsZXJ0LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFsZXJ0LWZnOiBjb2xvci13aGl0ZSxcbiAgYWxlcnQtb3V0bGluZS1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LWJnOiBjb2xvci1iZyxcbiAgYWxlcnQtYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgYWxlcnQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBhbGVydC1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGFsZXJ0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGFsZXJ0LXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGFsZXJ0LXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGFsZXJ0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBhbGVydC1oZWlnaHQteHhzbWFsbDogNTJweCxcbiAgYWxlcnQtaGVpZ2h0LXhzbWFsbDogNzJweCxcbiAgYWxlcnQtaGVpZ2h0LXNtYWxsOiA5MnB4LFxuICBhbGVydC1oZWlnaHQtbWVkaXVtOiAxMTJweCxcbiAgYWxlcnQtaGVpZ2h0LWxhcmdlOiAxMzJweCxcbiAgYWxlcnQtaGVpZ2h0LXhsYXJnZTogMTUycHgsXG4gIGFsZXJ0LWhlaWdodC14eGxhcmdlOiAxNzJweCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LWNsb3NhYmxlLXBhZGRpbmc6IDNyZW0sXG4gIGFsZXJ0LWJ1dHRvbi1wYWRkaW5nOiAzcmVtLFxuICBhbGVydC1tYXJnaW46IG1hcmdpbixcblxuICBjaGF0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjaGF0LWZnOiBjb2xvci13aGl0ZSxcbiAgY2hhdC1iZzogY29sb3ItYmcsXG4gIGNoYXQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjaGF0LWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtaGVpZ2h0LXh4c21hbGw6IDk2cHgsXG4gIGNoYXQtaGVpZ2h0LXhzbWFsbDogMjE2cHgsXG4gIGNoYXQtaGVpZ2h0LXNtYWxsOiAzMzZweCxcbiAgY2hhdC1oZWlnaHQtbWVkaXVtOiA0NTZweCxcbiAgY2hhdC1oZWlnaHQtbGFyZ2U6IDU3NnB4LFxuICBjaGF0LWhlaWdodC14bGFyZ2U6IDY5NnB4LFxuICBjaGF0LWhlaWdodC14eGxhcmdlOiA4MTZweCxcbiAgY2hhdC1ib3JkZXI6IGJvcmRlcixcbiAgY2hhdC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBjaGF0LW1lc3NhZ2UtZmc6IGNvbG9yLXdoaXRlLFxuICBjaGF0LW1lc3NhZ2UtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjYTZmZiwgIzU5YmZmZiksXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktZmc6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtbWVzc2FnZS1hdmF0YXItYmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2Utc2VuZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoYXQtZm9ybS1ib3JkZXI6IHNlcGFyYXRvcixcbiAgY2hhdC1mb3JtLXBsYWNlaG9sZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1mb3JtLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWZnLFxuICBjaGF0LWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGNoYXQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBjaGF0LWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBjaGF0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNoYXQtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2hhdC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBjaGF0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIHNwaW5uZXItYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MyksXG4gIHNwaW5uZXItY2lyY2xlLWJnOiBjb2xvci1iZy0yLFxuICBzcGlubmVyLWZnOiBjb2xvci1mZy10ZXh0LFxuICBzcGlubmVyLWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIHNwaW5uZXItZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBzcGlubmVyLWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgc3Bpbm5lci1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBzcGlubmVyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIHNwaW5uZXItc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgc3Bpbm5lci13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBzcGlubmVyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBzcGlubmVyLXh4c21hbGw6IDEuMjVyZW0sXG4gIHNwaW5uZXIteHNtYWxsOiAxLjVyZW0sXG4gIHNwaW5uZXItc21hbGw6IDEuNzVyZW0sXG4gIHNwaW5uZXItbWVkaXVtOiAycmVtLFxuICBzcGlubmVyLWxhcmdlOiAyLjI1cmVtLFxuICBzcGlubmVyLXhsYXJnZTogMi41cmVtLFxuICBzcGlubmVyLXh4bGFyZ2U6IDNyZW0sXG5cbiAgc3RlcHBlci1pbmRleC1zaXplOiAycmVtLFxuICBzdGVwcGVyLWxhYmVsLWZvbnQtc2l6ZTogZm9udC1zaXplLXNtLFxuICBzdGVwcGVyLWxhYmVsLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIHN0ZXBwZXItYWNjZW50LWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBzdGVwcGVyLWNvbXBsZXRlZC1mZzogY29sb3Itd2hpdGUsXG4gIHN0ZXBwZXItZmc6IGNvbG9yLWZnLFxuICBzdGVwcGVyLWNvbXBsZXRlZC1pY29uLXNpemU6IDEuNXJlbSxcbiAgc3RlcHBlci1jb21wbGV0ZWQtaWNvbi13ZWlnaHQ6IGZvbnQtd2VpZ2h0LXVsdHJhLWJvbGQsXG4gIHN0ZXBwZXItc3RlcC1wYWRkaW5nOiBwYWRkaW5nLFxuXG4gIGFjY29yZGlvbi1wYWRkaW5nOiBwYWRkaW5nLFxuICBhY2NvcmRpb24tc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBhY2NvcmRpb24taGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBhY2NvcmRpb24taGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFjY29yZGlvbi1oZWFkZXItZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1jb2xvcjogYWNjb3JkaW9uLXNlcGFyYXRvcixcbiAgYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYWNjb3JkaW9uLWl0ZW0tYmc6IGNvbG9yLWJnLFxuICBhY2NvcmRpb24taXRlbS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWl0ZW0tZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWNjb3JkaW9uLWl0ZW0tZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgYWNjb3JkaW9uLWl0ZW0tZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgYWNjb3JkaW9uLWl0ZW0tc2hhZG93OiBzaGFkb3csXG5cbiAgbGlzdC1pdGVtLWJvcmRlci1jb2xvcjogdGFicy1zZXBhcmF0b3IsXG4gIGxpc3QtaXRlbS1wYWRkaW5nOiAxcmVtLFxuXG4gIGNhbGVuZGFyLXdpZHRoOiAyMS44NzVyZW0sXG4gIGNhbGVuZGFyLWJvZHktaGVpZ2h0OiAyNS42MjVyZW0sXG4gIGNhbGVuZGFyLWhlYWRlci10aXRsZS1mb250LXNpemU6IGZvbnQtc2l6ZS14bGcsXG4gIGNhbGVuZGFyLWhlYWRlci10aXRsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgY2FsZW5kYXItaGVhZGVyLXN1Yi10aXRsZS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItaGVhZGVyLXN1Yi10aXRsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtdGhpbixcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi1idXR0b24td2lkdGg6IDEwcmVtLFxuICBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjYWxlbmRhci1ob3Zlci1pdGVtLWJnOiBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnLFxuICBjYWxlbmRhci10b2RheS1pdGVtLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNhbGVuZGFyLWFjdGl2ZS1pdGVtLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjYWxlbmRhci1mZzogY29sb3ItZmctdGV4dCxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtZmc6IGNvbG9yLXdoaXRlLFxuICBjYWxlbmRhci10b2RheS1mZzogY2FsZW5kYXItZmcsXG4gIGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoOiAyLjYyNXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0OiAyLjYyNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aDogNC4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQ6IDIuMzc1cmVtLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci1pbmFjdGl2ZS1vcGFjaXR5OiAwLjUsXG4gIGNhbGVuZGFyLWRpc2FibGVkLW9wYWNpdHk6IDAuMyxcbiAgY2FsZW5kYXItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjYWxlbmRhci13ZWVrZGF5LXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC13aWR0aCxcbiAgY2FsZW5kYXItd2Vla2RheS1oZWlnaHQ6IDEuNzVyZW0sXG4gIGNhbGVuZGFyLXdlZWtkYXktZm9udC1zaXplOiBmb250LXNpemUteHMsXG4gIGNhbGVuZGFyLXdlZWtkYXktZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgY2FsZW5kYXItd2Vla2RheS1mZzogY29sb3ItZmcsXG4gIGNhbGVuZGFyLXdlZWtkYXktaG9saWRheS1mZzogY29sb3ItZGFuZ2VyLFxuICBjYWxlbmRhci1yYW5nZS1iZy1pbi1yYW5nZTogI2ViZmJmMixcblxuICBjYWxlbmRhci1sYXJnZS13aWR0aDogMTAwJSxcbiAgY2FsZW5kYXItbGFyZ2UtYm9keS1oZWlnaHQ6IDI3Ljc1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aDogMTAwJSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0OiA1LjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDQuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcblxuICBvdmVybGF5LWJhY2tkcm9wLWJnOiByZ2JhKDAsIDAsIDAsIDAuMjg4KSxcblxuICB0b29sdGlwLWJnOiBjb2xvci1mZy10ZXh0LFxuICB0b29sdGlwLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHRvb2x0aXAtaW5mby1iZzogY29sb3ItaW5mbyxcbiAgdG9vbHRpcC1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICB0b29sdGlwLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHRvb2x0aXAtZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIHRvb2x0aXAtZmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgdG9vbHRpcC1zdGF0dXMtZmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgdG9vbHRpcC1zaGFkb3c6IHNoYWRvdyxcbiAgdG9vbHRpcC1mb250LXNpemU6IGZvbnQtc2l6ZSxcblxuICBzZWxlY3QtYm9yZGVyLXdpZHRoOiAycHgsXG4gIHNlbGVjdC1tYXgtaGVpZ2h0OiAyMHJlbSxcbiAgc2VsZWN0LWJnOiBjb2xvci1iZyxcblxuICBzZWxlY3QtY2hlY2tib3gtY29sb3I6IGNoZWNrYm94LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LWNoZWNrbWFyay1jb2xvcjogY2hlY2tib3gtYm9yZGVyLWNvbG9yLFxuXG4gIHNlbGVjdC1vcHRpb24tZGlzYWJsZWQtYmc6ICNmMmY0ZjcsXG4gIHNlbGVjdC1vcHRpb24tZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBzZWxlY3Qtb3B0aW9uLXBhZGRpbmc6IDAuNzVyZW0gMS41cmVtLFxuXG4gIGRhdGVwaWNrZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGRhdGVwaWNrZXItYmc6IGNvbG9yLWJnLFxuICBkYXRlcGlja2VyLWJvcmRlcjogY29sb3Itc3VjY2VzcyxcbiAgZGF0ZXBpY2tlci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGRhdGVwaWNrZXItc2hhZG93OiBub25lLFxuICBkYXRlcGlja2VyLWFycm93LXNpemU6IDExcHgsXG5cbiAgcmFkaW8tYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1mZzogY29sb3ItZmctdGV4dCxcbiAgcmFkaW8tc2l6ZTogMS4yNXJlbSxcbiAgcmFkaW8tYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tYm9yZGVyLWNvbG9yOiBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICByYWRpby1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuICByYWRpby1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICByYWRpby1jaGVja2VkLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICByYWRpby1jaGVja2VkLWNoZWNrbWFyazogY29sb3Itc3VjY2VzcyxcbiAgcmFkaW8tZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICByYWRpby1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHJhZGlvLWJvcmRlci1jb2xvcixcbiAgcmFkaW8tZGlzYWJsZWQtY2hlY2ttYXJrOiByYWRpby1jaGVja21hcmssXG5cbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1jb2xvcjogc2VwYXJhdG9yLFxuICB0cmVlLWdyaWQtcm93LW1pbi1oZWlnaHQ6IDJyZW0sXG4gIHRyZWUtZ3JpZC1jZWxsLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tYm9yZGVyOiBub25lLFxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLXBhZGRpbmc6IDAsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tZm9udC13ZWlnaHQ6IGJvbGQsXG4gIHRyZWUtZ3JpZC1oZWFkZXItYmc6IGNvbG9yLWJnLFxuICB0cmVlLWdyaWQtZm9vdGVyLWJnOiBjb2xvci1iZyxcbiAgdHJlZS1ncmlkLXJvdy1iZzogY29sb3ItYmcsXG4gIHRyZWUtZ3JpZC1yb3ctYmctZXZlbjogY29sb3ItYmcsXG4gIHRyZWUtZ3JpZC1yb3ctaG92ZXItYmc6IGNvbG9yLWJnLFxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWNvbG9yOiBjb2xvci1mZy10ZXh0LFxuICB0cmVlLWdyaWQtaWNvbi1jb2xvcjogY29sb3ItZmctdGV4dCxcbik7XG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgZGVmYXVsdCk7XG4iLCJAaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1pbmcnO1xuQGltcG9ydCAnfkBuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvY29zbWljJztcblxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQge1xuICAgIC5pbnB1dC1iZy0zIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjaXJjbGUtYmcpO1xuXHR9XG59XG4uY2FyZC1wb3NpdGlvbntcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxuICAgIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDglO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/add-event/add-event.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/add-event/add-event.component.ts ***!
  \******************************************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(ref) {
        this.ref = ref;
        this.minDate = new Date();
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            event: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    AddEventComponent.prototype.ngOnInit = function () {
    };
    AddEventComponent.prototype.add = function () {
        this.ref.close(this.eventForm.value);
    };
    AddEventComponent.prototype.reset = function () {
        this.eventForm.reset();
        this.ref.close();
    };
    AddEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__(/*! ./add-event.component.html */ "./src/app/pages/dashboard/add-event/add-event.component.html"),
            styles: [__webpack_require__(/*! ./add-event.component.scss */ "./src/app/pages/dashboard/add-event/add-event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogRef"]])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/change-country/change-country.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/change-country/change-country.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nb-card style=\"max-height: 75vh;max-width: 75vw;\">\n    <nb-card-header class=\"text-center\">\n        Change Password\n    </nb-card-header>\n    <nb-card-body [nbSpinner]=\"isSaving\" class=\"d-flex flex-wrap\">\n        <div *ngFor=\"let cast of themeOptions\" class=\"col-4 col-md-3 col-lg-2 avatar-spacer\">\n            <div class=\"mb-3 profile-image\" [ngStyle]=\"{'background-image': 'url(' + cast.img + ')'}\"\n                 [ngClass]=\"{'selected': selected === cast.id}\" (click)=\"changeTheme(cast.theme) \">\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n\n<div class=\"text-center float-btn\">\n    <button nbButton status=\"success\" (click)=\"apply()\">Apply</button>\n</div> -->\n\n<nb-card>\n    <nb-card-header>\n        Change Country\n    </nb-card-header>\n    <nb-card-body>\n                <form [formGroup]=\"changeLocationForm\" class=\"d-flex flex-column center-items\">\n                    <div class=\"my-0 location-select mb-3\">\n                        <nb-select size=\"xsmall\" name=\"country\" placeholder=\"Country\" required formControlName=\"location\"  >\n                            <nb-option *ngFor=\"let location of locations\" [value]=\"location\">{{location}}</nb-option>\n                        </nb-select>\n                    </div>\n                    <div class=\"f-w mb-3\">\n                        <button nbButton outline status=\"primary\" (click)=\"changeLocationSubmit()\" size=\"xsmall\" class=\"f-w\"  tabindex=\"1\"\n                        >Submit</button>\n                    </div>\n                    <div class=\"f-w mb-3\">\n                        <button nbButton outline status=\"danger\" size=\"xsmall\" class=\"f-w\"  (click)=\"close()\">Cancel</button>\n                    </div>\n                </form>\n    </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/dashboard/change-country/change-country.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/change-country/change-country.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin: auto;\n  height: 120px;\n  width: 120px;\n  background-position: center;\n  background-size: cover;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  border: 3px solid white; }\n\n.profile-image:active {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.selected {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.avatar-spacer {\n  margin-bottom: 30px; }\n\n.avatar-spacer:last-child {\n  margin-bottom: 0; }\n\n.float-btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.center-items {\n  -webkit-box-align: center;\n          align-items: center; }\n\nnb-select button {\n  max-width: unset !important; }\n\nnb-card-body {\n  min-width: 247px; }\n\n.location-select {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2hhbmdlLWNvdW50cnkvY2hhbmdlLWNvdW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLGFBQVk7RUFFWiw0QkFBMkI7RUFDM0IsdUJBQXNCO0VBQ3RCLDZCQUFvQjtFQUFwQixxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osOEJBQXFCO1VBQXJCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWiw4QkFBcUI7VUFBckIsc0JBQXFCLEVBQ3RCOztBQUNEO0VBQ0Msb0JBQW1CLEVBQ25COztBQUNEO0VBQ0MsaUJBQWdCLEVBQ2hCOztBQUNEO0VBQ0UsMkJBQWtCO0VBQWxCLHdCQUFrQjtFQUFsQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxvQ0FBMkI7VUFBM0IsNEJBQTJCLEVBQzVCOztBQUNEO0VBQ0UsMEJBQW1CO1VBQW5CLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLDRCQUEyQixFQUM1Qjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jaGFuZ2UtY291bnRyeS9jaGFuZ2UtY291bnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltYWdlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2U6YWN0aXZlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuLmF2YXRhci1zcGFjZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmF2YXRhci1zcGFjZXI6bGFzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uZmxvYXQtYnRuIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLmNlbnRlci1pdGVtcyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5uYi1zZWxlY3QgYnV0dG9uIHtcclxuICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxubmItY2FyZC1ib2R5IHtcclxuICBtaW4td2lkdGg6IDI0N3B4O1xyXG59XHJcbi5sb2NhdGlvbi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/change-country/change-country.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/change-country/change-country.component.ts ***!
  \****************************************************************************/
/*! exports provided: changeCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCountryComponent", function() { return changeCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_coutries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/coutries.service */ "./src/app/services/coutries.service.ts");









var changeCountryComponent = /** @class */ (function () {
    function changeCountryComponent(ref, _dataservice, _router, router, route, _passingDataservice, toastrService, _configuration, themeService, country) {
        this.ref = ref;
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this._passingDataservice = _passingDataservice;
        this.toastrService = toastrService;
        this._configuration = _configuration;
        this.themeService = themeService;
        this.country = country;
        this.isSaving = false;
        this.images = [];
        this.themeOptions = [];
        // images = [
        //     '/assets/Avatars/1.png',
        //     '/assets/Avatars/2.png',
        //     '/assets/Avatars/3.png',
        //     '/assets/Avatars/4.png',
        //     '/assets/Avatars/5.png',
        //     '/assets/Avatars/6.png',
        //     '/assets/Avatars/7.png',
        //     '/assets/Avatars/8.png',
        //     '/assets/Avatars/9.png',
        //     '/assets/Avatars/10.png',
        //     '/assets/Avatars/11.png',
        //     '/assets/Avatars/12.png',
        //     '/assets/Avatars/13.png',
        //     '/assets/Avatars/14.png',
        //     '/assets/Avatars/15.png',
        //     '/assets/Avatars/16.png',
        //     '/assets/Avatars/17.png',
        //     '/assets/Avatars/18.png',
        //     '/assets/Avatars/19.png',
        //     '/assets/Avatars/20.png',
        //     '/assets/Avatars/21.png',
        //     '/assets/Avatars/22.png',
        // ];
        this.selected = '';
        this.changeLocationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.isSubmit = 'SUBMIT';
        this.countryCode = '+1';
    }
    changeCountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countries = this.country.getCountries();
        this.countries = this.countries.countries;
        this.locations = this.countries.map(function (c) {
            return c.name;
        });
        this._dataservice
            .postCall(this._configuration.GetUserApi, {})
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                //this.loading = false;
            }
            console.log(resp);
            _this.userDetails = resp.user;
            _this.location = _this.userDetails.country;
            _this.changeLocationForm.controls['location'].setValue(_this.location);
            //this.is_2fa = (resp.user.is_2fa===0)?false:true;
            //this.twoFAType = resp.user.twofa_type;
            // if (this.twoFAType != null) {
            //     console.log(this.twoFAType);
            //     this.showOutsideBtn = false;
            // }
            if (resp.user.country_code) {
                _this.countryCode = resp.user.country_code;
            }
            else {
                _this.countryCode = (_this.countries.filter(function (c) { return c.name === _this.location; }))[0].code;
            }
            // this.phoneNumber = resp.user.phone_number;
            // this.is_loader = true;
            // this.gender = (this.userDetails.gender === 0 || this.userDetails.gender === 2) ? 2 : 1;
            // this.theme_id = resp.user.theme_id;
            // this.profileImg = resp.user.profile_pic;
            // this.profileHeaderImg = resp.user.profile_header_pic;
            // this.loading = false;
        }, function (error) {
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            // this.is_loader = true;
            // this.loading = false;
        }, function () {
            // this.is_loader = true;
            // this.loading = false;
        });
        this.themeOptions = [
            { theme: "Far_Above", img: "../assets/theme_tn/30.jpg", id: 30 },
            { theme: "Vortex", img: "../assets/theme_tn/31.jpg", id: 31 },
            { theme: "Smiley", img: "../assets/theme_tn/53.jpg", id: 53 },
            { theme: "Fireball", img: "../assets/theme_tn/32.jpg", id: 32 },
            { theme: "Purging", img: "../assets/theme_tn/81.jpg", id: 81 },
            //{theme: "Hex_World", img: "../assets/theme_tn/33.jpg"},            
            { theme: "Connection", img: "../assets/theme_tn/35.jpg", id: 35 },
            { theme: "Enchanted_Dream", img: "../assets/theme_tn/41.jpg", id: 41 },
            { theme: "Infinity", img: "../assets/theme_tn/42.jpg", id: 42 },
            //{theme: "Pirate", img: "../assets/theme_tn/43.jpg"},            
            // {theme: "Uncovering_Secrets", img: "../assets/theme_tn/45.jpg"},
            { theme: "United_Colours", img: "../assets/theme_tn/46.jpg", id: 46 },
            //{theme: "Palm_Trees", img: "../assets/theme_tn/47.jpg"},
            //{theme: "Analyst", img: "../assets/theme_tn/48.jpg"},
            { theme: "Voltage", img: "../assets/theme_tn/49.jpg", id: 49 },
            { theme: "Overload", img: "../assets/theme_tn/52.jpg", id: 52 },
            { theme: "Internal_Traces", img: "../assets/theme_tn/54.jpg", id: 54 },
            { theme: "Isolated", img: "../assets/theme_tn/55.jpg", id: 55 },
            { theme: "Land_of_Promises", img: "../assets/theme_tn/56.jpg", id: 56 },
            { theme: "Towers_of_Wizardry", img: "../assets/theme_tn/64.jpg", id: 64 },
            { theme: "Tron", img: "../assets/theme_tn/44.jpg", id: 44 },
            { theme: "Planets", img: "../assets/theme_tn/69.jpg", id: 69 },
            { theme: "Formula_of_Life", img: "../assets/theme_tn/34.jpg", id: 34 },
            //{theme: "Bloodline", img: "../assets/theme_tn/70.jpg"},
            //{theme: "Ghost_Town", img: "../assets/theme_tn/71.jpg"},
            { theme: "Meteor", img: "../assets/theme_tn/73.jpg", id: 73 },
            { theme: "Predator", img: "../assets/theme_tn/82.jpg", id: 82 },
            { theme: "Lava", img: "../assets/theme_tn/83.jpg", id: 83 },
            { theme: "Witches", img: "../assets/theme_tn/85.jpg", id: 85 },
            { theme: "Candy", img: "../assets/theme_tn/90.jpg", id: 90 },
            { theme: "Mother_Nature", img: "../assets/theme_tn/91.jpg", id: 91 },
            { theme: "Mystic", img: "../assets/theme_tn/92.jpg", id: 92 },
        ];
    };
    changeCountryComponent.prototype.changeTheme = function (themeKey) {
        //this.currentTheme = this.currentTheme === 'default' ? 'cosmic' : 'default';
        this.themeService.changeTheme(themeKey);
        console.log(themeKey);
    };
    changeCountryComponent.prototype.getPurchasedAvatars = function () {
        var _this = this;
        this._dataservice.getAll('userPurchase/getAvatars').subscribe(function (resp) {
            if (resp['status'] === _this._configuration.ResponseStatusError) {
                alert(resp['message']);
                return;
            }
            _this.images = resp['avatars'];
        });
    };
    changeCountryComponent.prototype.apply = function () {
        var _this = this;
        this.isSaving = true;
        var _dataModel = JSON.stringify({ theme_id: this.selected /*, userId: this._passingDataservice._currentUser.userId*/ });
        this._dataservice
            .postCall(this._configuration.SaveUserProfileApi, _dataModel)
            .subscribe(function (resp) {
            console.log(resp);
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.isSaving = false;
                _this.toastrService.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            setTimeout(function () {
                _this.isSaving = false;
                _this._router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
                _this._router.onSameUrlNavigation = 'reload';
                _this._router.navigate(['/dashboard']).then();
                _this.ref.close(_this.selected);
                console.log(_this.selected);
            }, 1000);
        }, function (error) {
            console.log(error);
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.isSaving = false;
        }, function () {
        });
    };
    changeCountryComponent.prototype.changeLocationSubmit = function () {
        var _this = this;
        if (this.changeLocationForm.controls['location'].value) {
            this._dataservice
                .postCall(this._configuration.UpdateNameValueApi, {
                name: 'country',
                value: this.changeLocationForm.controls['location'].value
            })
                .subscribe(function (resp) {
                if (resp.status === 'SUCCESS') {
                    _this.location = _this.changeLocationForm.controls['location'].value;
                    _this.countryCode = (_this.countries.filter(function (c) { return c.name === _this.location; }))[0].code;
                    // this.isShowLocation = false;
                    close();
                    return;
                }
                _this.isError = resp.message;
                return;
            }, function (error) {
                _this.isError = 'An error occured while fetching the result.';
            }, function () {
            });
        }
        else {
            this.isError = 'Please enter location';
        }
    };
    changeCountryComponent.prototype.close = function () {
        this.ref.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], changeCountryComponent.prototype, "selected", void 0);
    changeCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-change-country',
            template: __webpack_require__(/*! ./change-country.component.html */ "./src/app/pages/dashboard/change-country/change-country.component.html"),
            styles: [__webpack_require__(/*! ./change-country.component.scss */ "./src/app/pages/dashboard/change-country/change-country.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"], _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__["Configuration"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"],
            _services_coutries_service__WEBPACK_IMPORTED_MODULE_8__["CoutriesService"]])
    ], changeCountryComponent);
    return changeCountryComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/change-password/change-password.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/change-password/change-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nb-card style=\"max-height: 75vh;max-width: 75vw;\">\n    <nb-card-header class=\"text-center\">\n        Change Password\n    </nb-card-header>\n    <nb-card-body [nbSpinner]=\"isSaving\" class=\"d-flex flex-wrap\">\n        <div *ngFor=\"let cast of themeOptions\" class=\"col-4 col-md-3 col-lg-2 avatar-spacer\">\n            <div class=\"mb-3 profile-image\" [ngStyle]=\"{'background-image': 'url(' + cast.img + ')'}\"\n                 [ngClass]=\"{'selected': selected === cast.id}\" (click)=\"changeTheme(cast.theme) \">\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n\n<div class=\"text-center float-btn\">\n    <button nbButton status=\"success\" (click)=\"apply()\">Apply</button>\n</div> -->\n\n<nb-card>\n    <nb-card-header>\n        <div class=\"new-beginnings-title\">Change Password</div>\n    </nb-card-header>\n    <nb-card-body>\n        <form [formGroup]=\"changePassForm\" class=\"d-flex flex-column\">\n        <input class=\"mb-3\" type=\"text\" id=\"current-password\" type=\"password\" nbInput placeholder=\"Current Password\" formControlName=\"currentPassword\">\n        <input class=\"mb-3\" type=\"text\" id=\"new-password\" type=\"password\" nbInput placeholder=\"New Password\" formControlName=\"newPassword\">\n        <button nbButton status=\"primary\" outline size=\"xsmall\" class=\"mb-3 submit-btn\" (click)=\"changePasswordSubmit()\">SUBMIT</button>\n        <button nbButton status=\"danger\" outline size=\"xsmall\" class=\"cancel-btn\" (click)=\"close()\" >CANCEL</button>\n        </form>\n    </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/dashboard/change-password/change-password.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/change-password/change-password.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin: auto;\n  height: 120px;\n  width: 120px;\n  background-position: center;\n  background-size: cover;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  border: 3px solid white; }\n\n.profile-image:active {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.selected {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.avatar-spacer {\n  margin-bottom: 30px; }\n\n.avatar-spacer:last-child {\n  margin-bottom: 0; }\n\n.float-btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.submit-btn {\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsYUFBWTtFQUVaLDRCQUEyQjtFQUMzQix1QkFBc0I7RUFDdEIsNkJBQW9CO0VBQXBCLHFCQUFvQjtFQUNwQixnQkFBZTtFQUNmLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWiw4QkFBcUI7VUFBckIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLDhCQUFxQjtVQUFyQixzQkFBcUIsRUFDdEI7O0FBQ0Q7RUFDQyxvQkFBbUIsRUFDbkI7O0FBQ0Q7RUFDQyxpQkFBZ0IsRUFDaEI7O0FBQ0Q7RUFDRSwyQkFBa0I7RUFBbEIsd0JBQWtCO0VBQWxCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsVUFBUztFQUNULG9DQUEyQjtVQUEzQiw0QkFBMkIsRUFDNUI7O0FBQ0Q7RUFDRSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltYWdlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2U6YWN0aXZlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuLmF2YXRhci1zcGFjZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmF2YXRhci1zcGFjZXI6bGFzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uZmxvYXQtYnRuIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLnN1Ym1pdC1idG4ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/change-password/change-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/change-password/change-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: changePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordComponent", function() { return changePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var changePasswordComponent = /** @class */ (function () {
    function changePasswordComponent(ref, _dataservice, _router, router, route, _passingDataservice, toastrService, _configuration, themeService) {
        this.ref = ref;
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this._passingDataservice = _passingDataservice;
        this.toastrService = toastrService;
        this._configuration = _configuration;
        this.themeService = themeService;
        this.isSaving = false;
        this.images = [];
        this.themeOptions = [];
        // images = [
        //     '/assets/Avatars/1.png',
        //     '/assets/Avatars/2.png',
        //     '/assets/Avatars/3.png',
        //     '/assets/Avatars/4.png',
        //     '/assets/Avatars/5.png',
        //     '/assets/Avatars/6.png',
        //     '/assets/Avatars/7.png',
        //     '/assets/Avatars/8.png',
        //     '/assets/Avatars/9.png',
        //     '/assets/Avatars/10.png',
        //     '/assets/Avatars/11.png',
        //     '/assets/Avatars/12.png',
        //     '/assets/Avatars/13.png',
        //     '/assets/Avatars/14.png',
        //     '/assets/Avatars/15.png',
        //     '/assets/Avatars/16.png',
        //     '/assets/Avatars/17.png',
        //     '/assets/Avatars/18.png',
        //     '/assets/Avatars/19.png',
        //     '/assets/Avatars/20.png',
        //     '/assets/Avatars/21.png',
        //     '/assets/Avatars/22.png',
        // ];
        this.selected = '';
        this.changePassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
        });
        this.isSubmit = 'SUBMIT';
    }
    changePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPurchasedAvatars();
        this._dataservice
            .postCall(this._configuration.GetUserApi, {})
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                //this.loading = false;
            }
            console.log(resp);
            _this.userDetails = resp.user;
            //this.location = this.userDetails.country;
            //this.changeLocationForm.controls['location'].setValue(this.location);
            //this.is_2fa = (resp.user.is_2fa===0)?false:true;
            //this.twoFAType = resp.user.twofa_type;
            // if (this.twoFAType != null) {
            //     console.log(this.twoFAType);
            //     this.showOutsideBtn = false;
            // }
            // if (resp.user.country_code) {
            //     this.countryCode = resp.user.country_code;
            // } else {
            //     this.countryCode = (this.countries.filter( c => c.name === this.location ))[0].code;
            // }
            // this.phoneNumber = resp.user.phone_number;
            // this.is_loader = true;
            // this.gender = (this.userDetails.gender === 0 || this.userDetails.gender === 2) ? 2 : 1;
            // this.theme_id = resp.user.theme_id;
            // this.profileImg = resp.user.profile_pic;
            // this.profileHeaderImg = resp.user.profile_header_pic;
            // this.loading = false;
        }, function (error) {
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            // this.is_loader = true;
            // this.loading = false;
        }, function () {
            // this.is_loader = true;
            // this.loading = false;
        });
        this.themeOptions = [
            { theme: "Far_Above", img: "../assets/theme_tn/30.jpg", id: 30 },
            { theme: "Vortex", img: "../assets/theme_tn/31.jpg", id: 31 },
            { theme: "Smiley", img: "../assets/theme_tn/53.jpg", id: 53 },
            { theme: "Fireball", img: "../assets/theme_tn/32.jpg", id: 32 },
            { theme: "Purging", img: "../assets/theme_tn/81.jpg", id: 81 },
            //{theme: "Hex_World", img: "../assets/theme_tn/33.jpg"},            
            { theme: "Connection", img: "../assets/theme_tn/35.jpg", id: 35 },
            { theme: "Enchanted_Dream", img: "../assets/theme_tn/41.jpg", id: 41 },
            { theme: "Infinity", img: "../assets/theme_tn/42.jpg", id: 42 },
            //{theme: "Pirate", img: "../assets/theme_tn/43.jpg"},            
            // {theme: "Uncovering_Secrets", img: "../assets/theme_tn/45.jpg"},
            { theme: "United_Colours", img: "../assets/theme_tn/46.jpg", id: 46 },
            //{theme: "Palm_Trees", img: "../assets/theme_tn/47.jpg"},
            //{theme: "Analyst", img: "../assets/theme_tn/48.jpg"},
            { theme: "Voltage", img: "../assets/theme_tn/49.jpg", id: 49 },
            { theme: "Overload", img: "../assets/theme_tn/52.jpg", id: 52 },
            { theme: "Internal_Traces", img: "../assets/theme_tn/54.jpg", id: 54 },
            { theme: "Isolated", img: "../assets/theme_tn/55.jpg", id: 55 },
            { theme: "Land_of_Promises", img: "../assets/theme_tn/56.jpg", id: 56 },
            { theme: "Towers_of_Wizardry", img: "../assets/theme_tn/64.jpg", id: 64 },
            { theme: "Tron", img: "../assets/theme_tn/44.jpg", id: 44 },
            { theme: "Planets", img: "../assets/theme_tn/69.jpg", id: 69 },
            { theme: "Formula_of_Life", img: "../assets/theme_tn/34.jpg", id: 34 },
            //{theme: "Bloodline", img: "../assets/theme_tn/70.jpg"},
            //{theme: "Ghost_Town", img: "../assets/theme_tn/71.jpg"},
            { theme: "Meteor", img: "../assets/theme_tn/73.jpg", id: 73 },
            { theme: "Predator", img: "../assets/theme_tn/82.jpg", id: 82 },
            { theme: "Lava", img: "../assets/theme_tn/83.jpg", id: 83 },
            { theme: "Witches", img: "../assets/theme_tn/85.jpg", id: 85 },
            { theme: "Candy", img: "../assets/theme_tn/90.jpg", id: 90 },
            { theme: "Mother_Nature", img: "../assets/theme_tn/91.jpg", id: 91 },
            { theme: "Mystic", img: "../assets/theme_tn/92.jpg", id: 92 },
        ];
    };
    changePasswordComponent.prototype.changeTheme = function (themeKey) {
        //this.currentTheme = this.currentTheme === 'default' ? 'cosmic' : 'default';
        this.themeService.changeTheme(themeKey);
        console.log(themeKey);
    };
    changePasswordComponent.prototype.getPurchasedAvatars = function () {
        var _this = this;
        this._dataservice.getAll('userPurchase/getAvatars').subscribe(function (resp) {
            if (resp['status'] === _this._configuration.ResponseStatusError) {
                alert(resp['message']);
                return;
            }
            _this.images = resp['avatars'];
        });
    };
    changePasswordComponent.prototype.apply = function () {
        var _this = this;
        this.isSaving = true;
        var _dataModel = JSON.stringify({ theme_id: this.selected /*, userId: this._passingDataservice._currentUser.userId*/ });
        this._dataservice
            .postCall(this._configuration.SaveUserProfileApi, _dataModel)
            .subscribe(function (resp) {
            console.log(resp);
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.isSaving = false;
                _this.toastrService.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            setTimeout(function () {
                _this.isSaving = false;
                _this._router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
                _this._router.onSameUrlNavigation = 'reload';
                _this._router.navigate(['/dashboard']).then();
                _this.ref.close(_this.selected);
                console.log(_this.selected);
            }, 1000);
        }, function (error) {
            console.log(error);
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.isSaving = false;
        }, function () {
        });
    };
    changePasswordComponent.prototype.changePasswordSubmit = function () {
        var _this = this;
        //this.isSubmit = 'Loading...';
        //console.log(this.changePassForm.controls['currentPassword'].value);
        if (this.changePassForm.controls['currentPassword'].value && this.changePassForm.controls['newPassword'].value) {
            this._dataservice
                .postCall(this._configuration.ChangePasswordApi, {
                newPassword: this.changePassForm.controls['newPassword'].value,
                currentPassword: this.changePassForm.controls['currentPassword'].value,
                email: this.userDetails.email
            })
                .subscribe(function (resp) {
                if (resp.status === 'SUCCESS') {
                    _this.isSubmit = 'SUBMIT';
                    _this.router.navigateByUrl('/login');
                    return;
                }
                _this.isSubmit = 'SUBMIT';
                _this.isError = resp.message;
                return;
            }, function (error) {
                _this.isSubmit = 'SUBMIT';
                alert('An error occured while fetching the result.');
            }, function () {
            });
        }
        else {
            this.isSubmit = 'SUBMIT';
            this.isError = "All field is required";
        }
    };
    changePasswordComponent.prototype.close = function () {
        this.ref.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], changePasswordComponent.prototype, "selected", void 0);
    changePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/pages/dashboard/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/pages/dashboard/change-password/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"], _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__["Configuration"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"]])
    ], changePasswordComponent);
    return changePasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/choose-header-img/choose-header-img.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/choose-header-img/choose-header-img.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card style=\"max-height: 75vh;width: 75vw;\">\n  <nb-card-header class=\"text-center\">\n    CHOOSE HEADER IMAGE\n  </nb-card-header>\n  <nb-card-body class=\"d-flex flex-wrap p-0 py-3\">\n    <div *ngFor=\"let img of images\" class=\"col-12 col-lg-6\">\n      <div class=\"mb-3 image w-100\" [ngStyle]=\"{'background-image': 'url(' + img.name + ')'}\"\n        [class.selected]=\"selected === img.name\" (click)=\"selected = img.name\">\n        <div class=\"w-100 h-100 locked d-flex justify-content-center align-items-center\" *ngIf=\"level < img.level\">\n          <i class=\"nb-locked\"></i>\n        </div>\n      </div>\n\n    </div>\t\n  </nb-card-body>\n<nb-card-footer>\n<div class=\"text-center float-btn\">\n  <button nbButton status=\"success\" (click)=\"apply()\">Apply</button>\n</div>\n</nb-card-footer>\n</nb-card>\n\n<div class=\"modal fade\" id=\"alertModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content alert-modal-content\">\n          <div class=\"modal-body text-center\">\n              <button  type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <div class=\"pt-5 pb-5\">\n                  <div>\n                      {{alertModalMessage}}\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/choose-header-img/choose-header-img.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/choose-header-img/choose-header-img.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  border-radius: 8px;\n  border: 3px solid white;\n  height: 160px;\n  background-position: center;\n  background-size: cover;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  position: relative; }\n\n.image:active {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.selected {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.locked {\n  background: #212121a0;\n  position: absolute;\n  border-radius: 8px;\n  left: 0; }\n\n.locked i {\n    font-size: 2rem;\n    color: white; }\n\n.float-btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2hvb3NlLWhlYWRlci1pbWcvY2hvb3NlLWhlYWRlci1pbWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLGNBQWE7RUFDYiw0QkFBMkI7RUFDM0IsdUJBQXNCO0VBQ3RCLDZCQUFvQjtFQUFwQixxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osOEJBQXFCO1VBQXJCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWiw4QkFBcUI7VUFBckIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsUUFBTyxFQUtSOztBQVREO0lBTUksZ0JBQWU7SUFDZixhQUFZLEVBQ2I7O0FBRUg7RUFDRSwyQkFBa0I7RUFBbEIsd0JBQWtCO0VBQWxCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsVUFBUztFQUNULG9DQUEyQjtVQUEzQiw0QkFBMkIsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2hvb3NlLWhlYWRlci1pbWcvY2hvb3NlLWhlYWRlci1pbWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZTphY3RpdmUge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufVxyXG5cclxuLmxvY2tlZCB7XHJcbiAgYmFja2dyb3VuZDogIzIxMjEyMWEwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbGVmdDogMDtcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuLmZsb2F0LWJ0biB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/choose-header-img/choose-header-img.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/choose-header-img/choose-header-img.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChooseHeaderImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseHeaderImgComponent", function() { return ChooseHeaderImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");







var ChooseHeaderImgComponent = /** @class */ (function () {
    // images = [
    //     {url: '/assets/Headers/1.jpg', level: 1},
    //     {url: '/assets/Headers/2.jpg', level: 1},
    //     {url: '/assets/Headers/3.jpg', level: 1},
    //     {url: '/assets/Headers/4.jpg', level: 1},
    //     {url: '/assets/Headers/5.jpg', level: 1},
    //     {url: '/assets/Headers/6.jpg', level: 1},
    //     {url: '/assets/Headers/7.jpg', level: 1},
    //     {url: '/assets/Headers/8.jpg', level: 1},
    //     {url: '/assets/Headers/9.jpg', level: 1},
    //     {url: '/assets/Headers/10.jpg', level: 1},
    // ];
    function ChooseHeaderImgComponent(ref, _dataservice, _router, router, route, _passingDataservice, toastrService, _configuration) {
        this.ref = ref;
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this._passingDataservice = _passingDataservice;
        this.toastrService = toastrService;
        this._configuration = _configuration;
        this.selected = '';
        this.level = 1;
        this.isSaving = false;
        this.images = [];
        this.alertModalMessage = '';
    }
    ChooseHeaderImgComponent.prototype.ngOnInit = function () {
        this.getPurchasedHeaders();
    };
    ChooseHeaderImgComponent.prototype.apply = function () {
        var _this = this;
        this.isSaving = true;
        var _dataModel = JSON.stringify({ profile_header_pic: this.selected /*, userId: this._passingDataservice._currentUser.userId*/ });
        this._dataservice
            .postCall(this._configuration.SaveUserProfileApi, _dataModel)
            .subscribe(function (resp) {
            console.log(resp);
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.isSaving = false;
                _this.alertModalMessage = resp.message;
                $('#alertModal').modal('show');
                return;
            }
            setTimeout(function () {
                _this.isSaving = false;
                _this._router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
                _this._router.onSameUrlNavigation = 'reload';
                _this._router.navigate(['/dashboard']).then();
                _this.ref.close(_this.selected);
                console.log(_this.selected);
            }, 1000);
        }, function (error) {
            console.log(error);
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.isSaving = false;
        }, function () {
        });
    };
    ChooseHeaderImgComponent.prototype.getPurchasedHeaders = function () {
        var _this = this;
        this._dataservice.getAll('userPurchase/getHeaders').subscribe(function (resp) {
            if (resp['status'] === _this._configuration.ResponseStatusError) {
                _this.alertModalMessage = resp['message'];
                $('#alertModal').modal('show');
                return;
            }
            _this.images = resp['headers'];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChooseHeaderImgComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChooseHeaderImgComponent.prototype, "level", void 0);
    ChooseHeaderImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-choose-header-img',
            template: __webpack_require__(/*! ./choose-header-img.component.html */ "./src/app/pages/dashboard/choose-header-img/choose-header-img.component.html"),
            styles: [__webpack_require__(/*! ./choose-header-img.component.scss */ "./src/app/pages/dashboard/choose-header-img/choose-header-img.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"], _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__["Configuration"]])
    ], ChooseHeaderImgComponent);
    return ChooseHeaderImgComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card style=\"max-height: 75vh;max-width: 75vw;\">\n    <nb-card-header class=\"text-center\">\n        Choose profile image\n    </nb-card-header>\n    <nb-card-body [nbSpinner]=\"isSaving\" class=\"d-flex flex-wrap\">\n        <div *ngFor=\"let img of images\" class=\"col-12 col-md-6 col-lg-4 avatar-spacer\">\n            <div class=\"mb-3 profile-image\" [ngStyle]=\"{'background-image': 'url(' + img.name + ')'}\"\n                 [ngClass]=\"{'selected': selected === img.name}\" (click)=\"selected = img.name\"> <!--; selectedImageSet(img)-->\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n\n<div class=\"text-center float-btn\">\n    <button nbButton status=\"success\" (click)=\"apply()\">Apply</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin: auto;\n  height: 120px;\n  width: 120px;\n  border-radius: 50%;\n  background-position: center;\n  background-size: cover;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  border: 3px solid white; }\n\n.profile-image:active {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.selected {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.avatar-spacer {\n  margin-bottom: 30px; }\n\n.avatar-spacer:last-child {\n  margin-bottom: 0; }\n\n.float-btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2hvb3NlLXByb2ZpbGUtaW1nL2Nob29zZS1wcm9maWxlLWltZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQiw0QkFBMkI7RUFDM0IsdUJBQXNCO0VBQ3RCLDZCQUFvQjtFQUFwQixxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osOEJBQXFCO1VBQXJCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWiw4QkFBcUI7VUFBckIsc0JBQXFCLEVBQ3RCOztBQUNEO0VBQ0Msb0JBQW1CLEVBQ25COztBQUNEO0VBQ0MsaUJBQWdCLEVBQ2hCOztBQUNEO0VBQ0UsMkJBQWtCO0VBQWxCLHdCQUFrQjtFQUFsQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxvQ0FBMkI7VUFBM0IsNEJBQTJCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Nob29zZS1wcm9maWxlLWltZy9jaG9vc2UtcHJvZmlsZS1pbWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWFnZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlOmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcbi5hdmF0YXItc3BhY2VyIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5hdmF0YXItc3BhY2VyOmxhc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmZsb2F0LWJ0biB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChooseProfileImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseProfileImgComponent", function() { return ChooseProfileImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");







var ChooseProfileImgComponent = /** @class */ (function () {
    function ChooseProfileImgComponent(ref, _dataservice, _router, router, route, _passingDataservice, toastrService, _configuration) {
        this.ref = ref;
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this._passingDataservice = _passingDataservice;
        this.toastrService = toastrService;
        this._configuration = _configuration;
        this.isSaving = false;
        this.images = [];
        // images = [
        //     '/assets/Avatars/1.png',
        //     '/assets/Avatars/2.png',
        //     '/assets/Avatars/3.png',
        //     '/assets/Avatars/4.png',
        //     '/assets/Avatars/5.png',
        //     '/assets/Avatars/6.png',
        //     '/assets/Avatars/7.png',
        //     '/assets/Avatars/8.png',
        //     '/assets/Avatars/9.png',
        //     '/assets/Avatars/10.png',
        //     '/assets/Avatars/11.png',
        //     '/assets/Avatars/12.png',
        //     '/assets/Avatars/13.png',
        //     '/assets/Avatars/14.png',
        //     '/assets/Avatars/15.png',
        //     '/assets/Avatars/16.png',
        //     '/assets/Avatars/17.png',
        //     '/assets/Avatars/18.png',
        //     '/assets/Avatars/19.png',
        //     '/assets/Avatars/20.png',
        //     '/assets/Avatars/21.png',
        //     '/assets/Avatars/22.png',
        // ];
        this.selected = '';
    }
    ChooseProfileImgComponent.prototype.ngOnInit = function () {
        this.getPurchasedAvatars();
    };
    ChooseProfileImgComponent.prototype.getPurchasedAvatars = function () {
        var _this = this;
        this._dataservice.getAll('userPurchase/getAvatars').subscribe(function (resp) {
            if (resp['status'] === _this._configuration.ResponseStatusError) {
                alert(resp['message']);
                return;
            }
            _this.images = resp['avatars'];
        });
    };
    ChooseProfileImgComponent.prototype.apply = function () {
        var _this = this;
        this.isSaving = true;
        var _dataModel = JSON.stringify({ profile_pic: this.selected /*, userId: this._passingDataservice._currentUser.userId*/ });
        this._dataservice
            .postCall(this._configuration.SaveUserProfileApi, _dataModel)
            .subscribe(function (resp) {
            console.log(resp);
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.isSaving = false;
                _this.toastrService.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            setTimeout(function () {
                _this.isSaving = false;
                _this._router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
                _this._router.onSameUrlNavigation = 'reload';
                _this._router.navigate(['/dashboard']).then();
                _this.ref.close(_this.selected);
                console.log(_this.selected);
            }, 1000);
        }, function (error) {
            console.log(error);
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.isSaving = false;
        }, function () {
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChooseProfileImgComponent.prototype, "selected", void 0);
    ChooseProfileImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-choose-profile-img',
            template: __webpack_require__(/*! ./choose-profile-img.component.html */ "./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.html"),
            styles: [__webpack_require__(/*! ./choose-profile-img.component.scss */ "./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"], _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__["Configuration"]])
    ], ChooseProfileImgComponent);
    return ChooseProfileImgComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card style=\"max-height: 75vh;max-width: 75vw;\">\n    <nb-card-header class=\"text-center\">\n        Choose Theme\n    </nb-card-header>\n    <nb-card-body [nbSpinner]=\"isSaving\" class=\"d-flex flex-wrap\">\n        <div *ngFor=\"let cast of themeOptions\" class=\"col-4 col-md-3 col-lg-2 avatar-spacer\">\n            <div class=\"mb-3 profile-image\" [ngStyle]=\"{'background-image': 'url(' + cast.img + ')'}\"\n                 [ngClass]=\"{'selected': selected === cast.id}\" (click)=\"changeTheme(cast.theme) \"> <!--; selectedImageSet(img)-->\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n\n<div class=\"text-center float-btn\">\n    <button nbButton status=\"success\" (click)=\"apply()\">Apply</button>\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin: auto;\n  height: 120px;\n  width: 120px;\n  background-position: center;\n  background-size: cover;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  border: 3px solid white; }\n\n.profile-image:active {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.selected {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.avatar-spacer {\n  margin-bottom: 30px; }\n\n.avatar-spacer:last-child {\n  margin-bottom: 0; }\n\n.float-btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2hvb3NlLXByb2ZpbGUtdGhlbWUvY2hvb3NlLXByb2ZpbGUtdGhlbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLGFBQVk7RUFFWiw0QkFBMkI7RUFDM0IsdUJBQXNCO0VBQ3RCLDZCQUFvQjtFQUFwQixxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osOEJBQXFCO1VBQXJCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWiw4QkFBcUI7VUFBckIsc0JBQXFCLEVBQ3RCOztBQUNEO0VBQ0Msb0JBQW1CLEVBQ25COztBQUNEO0VBQ0MsaUJBQWdCLEVBQ2hCOztBQUNEO0VBQ0UsMkJBQWtCO0VBQWxCLHdCQUFrQjtFQUFsQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxvQ0FBMkI7VUFBM0IsNEJBQTJCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Nob29zZS1wcm9maWxlLXRoZW1lL2Nob29zZS1wcm9maWxlLXRoZW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1hZ2Uge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZTphY3RpdmUge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufVxyXG4uYXZhdGFyLXNwYWNlciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uYXZhdGFyLXNwYWNlcjpsYXN0LWNoaWxkIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5mbG9hdC1idG4ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ChooseProfileThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseProfileThemeComponent", function() { return ChooseProfileThemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");







var ChooseProfileThemeComponent = /** @class */ (function () {
    function ChooseProfileThemeComponent(ref, _dataservice, _router, router, route, _passingDataservice, toastrService, _configuration, themeService) {
        this.ref = ref;
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this._passingDataservice = _passingDataservice;
        this.toastrService = toastrService;
        this._configuration = _configuration;
        this.themeService = themeService;
        this.isSaving = false;
        this.images = [];
        this.themeOptions = [];
        // images = [
        //     '/assets/Avatars/1.png',
        //     '/assets/Avatars/2.png',
        //     '/assets/Avatars/3.png',
        //     '/assets/Avatars/4.png',
        //     '/assets/Avatars/5.png',
        //     '/assets/Avatars/6.png',
        //     '/assets/Avatars/7.png',
        //     '/assets/Avatars/8.png',
        //     '/assets/Avatars/9.png',
        //     '/assets/Avatars/10.png',
        //     '/assets/Avatars/11.png',
        //     '/assets/Avatars/12.png',
        //     '/assets/Avatars/13.png',
        //     '/assets/Avatars/14.png',
        //     '/assets/Avatars/15.png',
        //     '/assets/Avatars/16.png',
        //     '/assets/Avatars/17.png',
        //     '/assets/Avatars/18.png',
        //     '/assets/Avatars/19.png',
        //     '/assets/Avatars/20.png',
        //     '/assets/Avatars/21.png',
        //     '/assets/Avatars/22.png',
        // ];
        this.selected = '';
    }
    ChooseProfileThemeComponent.prototype.ngOnInit = function () {
        this.getPurchasedAvatars();
        // this.themeOptions = [
        //     {theme: "Far_Above", img: "../assets/theme_tn/30.jpg", id: 30},
        //     {theme: "Vortex", img: "../assets/theme_tn/31.jpg", id: 31},
        //     {theme: "Smiley", img: "../assets/theme_tn/53.jpg", id: 53},
        //     {theme: "Fireball", img: "../assets/theme_tn/32.jpg", id: 32},
        //     {theme: "Purging", img: "../assets/theme_tn/81.jpg", id: 81},
        //     //{theme: "Hex_World", img: "../assets/theme_tn/33.jpg"},            
        //     {theme: "Connection", img: "../assets/theme_tn/35.jpg", id: 35},
        //     {theme: "Enchanted_Dream", img: "../assets/theme_tn/41.jpg", id: 41},
        //     {theme: "Infinity", img: "../assets/theme_tn/42.jpg", id: 42},
        //     //{theme: "Pirate", img: "../assets/theme_tn/43.jpg"},            
        //     // {theme: "Uncovering_Secrets", img: "../assets/theme_tn/45.jpg"},
        //     {theme: "United_Colours", img: "../assets/theme_tn/46.jpg", id: 46},
        //     //{theme: "Palm_Trees", img: "../assets/theme_tn/47.jpg"},
        //     //{theme: "Analyst", img: "../assets/theme_tn/48.jpg"},
        //     {theme: "Voltage", img: "../assets/theme_tn/49.jpg", id: 49},
        //     {theme: "Overload", img: "../assets/theme_tn/52.jpg", id: 52},
        //     {theme: "Internal_Traces", img: "../assets/theme_tn/54.jpg", id: 54},
        //     {theme: "Isolated", img: "../assets/theme_tn/55.jpg", id: 55},
        //     {theme: "Land_of_Promises", img: "../assets/theme_tn/56.jpg", id: 56},
        //     {theme: "Towers_of_Wizardry", img: "../assets/theme_tn/64.jpg", id: 64},
        //     {theme: "Tron", img: "../assets/theme_tn/44.jpg", id: 44},
        //     {theme: "Planets", img: "../assets/theme_tn/69.jpg", id: 69},
        //     {theme: "Formula_of_Life", img: "../assets/theme_tn/34.jpg", id: 34},
        //     //{theme: "Bloodline", img: "../assets/theme_tn/70.jpg"},
        //     //{theme: "Ghost_Town", img: "../assets/theme_tn/71.jpg"},
        //     {theme: "Meteor", img: "../assets/theme_tn/73.jpg", id: 73},
        //     {theme: "Predator", img: "../assets/theme_tn/82.jpg", id: 82},
        //     {theme: "Lava", img: "../assets/theme_tn/83.jpg", id: 83},
        //     {theme: "Witches", img: "../assets/theme_tn/85.jpg", id: 85},
        //     {theme: "Candy", img: "../assets/theme_tn/90.jpg", id: 90},
        //     {theme: "Mother_Nature", img: "../assets/theme_tn/91.jpg", id: 91},
        //     {theme: "Mystic", img: "../assets/theme_tn/92.jpg", id: 92},
        // ]
        this.themeOptions = [
            { theme: "Far_Above", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/30.jpg", id: 30 },
            { theme: "Vortex", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/31.jpg", id: 31 },
            { theme: "Smiley", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/53.jpg", id: 53 },
            { theme: "Fireball", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/32.jpg", id: 32 },
            { theme: "Purging", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/81.jpg", id: 81 },
            //{theme: "Hex_World", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/33.jpg"},            
            { theme: "Connection", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/35.jpg", id: 35 },
            { theme: "Enchanted_Dream", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/41.jpg", id: 41 },
            { theme: "Infinity", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/42.jpg", id: 42 },
            //{theme: "Pirate", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/43.jpg"},            
            // {theme: "Uncovering_Secrets", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/45.jpg"},
            { theme: "United_Colours", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/46.jpg", id: 46 },
            //{theme: "Palm_Trees", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/47.jpg"},
            //{theme: "Analyst", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/48.jpg"},
            { theme: "Voltage", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/49.jpg", id: 49 },
            { theme: "Overload", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/52.jpg", id: 52 },
            { theme: "Internal_Traces", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/54.jpg", id: 54 },
            { theme: "Isolated", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/55.jpg", id: 55 },
            { theme: "Land_of_Promises", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/56.jpg", id: 56 },
            { theme: "Towers_of_Wizardry", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/64.jpg", id: 64 },
            { theme: "Tron", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/44.jpg", id: 44 },
            { theme: "Planets", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/69.jpg", id: 69 },
            { theme: "Formula_of_Life", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/34.jpg", id: 34 },
            //{theme: "Bloodline", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/70.jpg"},
            //{theme: "Ghost_Town", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/71.jpg"},
            { theme: "Meteor", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/73.jpg", id: 73 },
            { theme: "Predator", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/82.jpg", id: 82 },
            { theme: "Lava", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/83.jpg", id: 83 },
            { theme: "Witches", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/85.jpg", id: 85 },
            { theme: "Candy", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/90.jpg", id: 90 },
            { theme: "Mother_Nature", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/91.jpg", id: 91 },
            { theme: "Mystic", img: "https://d308fakbqebk7c.cloudfront.net/theme_thumbnails/92.jpg", id: 92 },
        ];
    };
    ChooseProfileThemeComponent.prototype.changeTheme = function (themeKey) {
        //this.currentTheme = this.currentTheme === 'default' ? 'cosmic' : 'default';
        this.themeService.changeTheme(themeKey);
        console.log(themeKey);
        localStorage.setItem(this._configuration.ProfileTheme, themeKey);
        this.selected = themeKey;
        console.log(this.selected);
    };
    ChooseProfileThemeComponent.prototype.getPurchasedAvatars = function () {
        var _this = this;
        this._dataservice.getAll('userPurchase/getAvatars').subscribe(function (resp) {
            if (resp['status'] === _this._configuration.ResponseStatusError) {
                alert(resp['message']);
                return;
            }
            _this.images = resp['avatars'];
        });
    };
    ChooseProfileThemeComponent.prototype.apply = function () {
        // this.isSaving = true;
        var _this = this;
        // const _dataModel = JSON.stringify({theme_id: 31/*, userId: this._passingDataservice._currentUser.userId*/});
        // this._dataservice
        //     .postCall<any>(this._configuration.SaveUserProfileApi, _dataModel)
        //     .subscribe(resp => { console.log(resp);
        //             if (resp.status === this._configuration.ResponseStatusError) {
        //                 this.isSaving = false;
        //                 this.toastrService.show(this._configuration.ErrorFetchingContent, '',
        //                 {
        //                     status: this._configuration.ToasterStatusError,
        //                     duration: this._configuration.ToasterDuration,
        //                     position: this._configuration.ToasterPosition
        //                 });
        //                 return;
        //             }
        //             setTimeout(() => { // console.log(resp);
        //                 this.isSaving = false;
        //                 this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        //                 this._router.onSameUrlNavigation = 'reload';
        //                 this._router.navigate(['/dashboard']).then();
        //                 this.ref.close(this.selected); console.log(this.selected);
        //             }, 1000);
        //         },
        //         error => {
        //             console.log(error);
        //             this.toastrService.show(this._configuration.ErrorFetchingResult, '',
        //             {
        //                 status: this._configuration.ToasterStatusError,
        //                 duration: this._configuration.ToasterDuration,
        //                 position: this._configuration.ToasterPosition
        //             });
        //             this.isSaving = false;
        //         },
        //         () => {
        //         });
        this.themeNumber = this.themeOptions.filter(function (x) { return x.theme === _this.selected; })[0].id;
        if (this.selected) {
            this._dataservice
                .postCall(this._configuration.UpdateNameValueApi, {
                name: 'theme_id',
                value: this.selected
            })
                .subscribe(function (resp) {
                if (resp.status === 'SUCCESS') {
                    return;
                }
            }, function (error) {
            }, function () {
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChooseProfileThemeComponent.prototype, "selected", void 0);
    ChooseProfileThemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-choose-profile-theme',
            template: __webpack_require__(/*! ./choose-profile-theme.component.html */ "./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.html"),
            styles: [__webpack_require__(/*! ./choose-profile-theme.component.scss */ "./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"], _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__["Configuration"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"]])
    ], ChooseProfileThemeComponent);
    return ChooseProfileThemeComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <div>{{ parseDate(date).day }}</div>\n  <div [ngStyle]=\"{'backgroundColor': parseDate(date).event ? '#00d977': ''}\" style=\"display: inline-block;height: 9px; width: 9px;border-radius: 50%;\"></div>\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL2N1c3RvbS1kYXktY2VsbC9jdXN0b20tZGF5LWNlbGwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CustomDayCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDayCellComponent", function() { return CustomDayCellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");



var CustomDayCellComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomDayCellComponent, _super);
    function CustomDayCellComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDayCellComponent_1 = CustomDayCellComponent;
    CustomDayCellComponent.prototype.parseDate = function (date) {
        return CustomDayCellComponent_1.checkDate(date);
    };
    CustomDayCellComponent.checkDate = function (date) {
        var index = this.dates.findIndex(function (d) { return d.toDateString() === date.toDateString(); });
        if (index >= 0) {
            return {
                day: date.getDate(),
                event: true
            };
        }
        else {
            return {
                day: date.getDate(),
                event: false
            };
        }
    };
    CustomDayCellComponent.prototype.ngOnInit = function () {
    };
    CustomDayCellComponent.setDates = function (dates) {
        // console.log("CUSTOM COPM: ", dates);
        // this.dates.push(...dates);
        this.dates = [];
        this.dates = dates;
    };
    var CustomDayCellComponent_1;
    CustomDayCellComponent.dates = [];
    CustomDayCellComponent = CustomDayCellComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-day-cell',
            template: __webpack_require__(/*! ./custom-day-cell.component.html */ "./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.html"),
            host: { '(click)': 'onClick()', 'class': 'day-cell' },
            styles: [__webpack_require__(/*! ./custom-day-cell.component.scss */ "./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.scss")]
        })
    ], CustomDayCellComponent);
    return CustomDayCellComponent;
}(_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCalendarDayCellComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showWelcome\" class=\"wizardOverlay\" style=\"z-index: 999999;\"  #welcomePage>\r\n  <div class=\"wzrdOverlayTitle\">\r\n    WELCOME TO THE WZRD PLATFORM\r\n  </div>         \r\n  <div class=\"wzrdOverlayTitleSpan\">\r\n    Your new home for everything Crypto</div>\r\n  <div class=\"welcome-text\">    \r\n  <div>\r\n    Congratulations on becoming a WZRD, your journey starts here.\r\n  </div>  \r\n  <br/>\r\n  <div>\r\n    The WZRD Platform contains over 100 features and has taken 8 months to build.. however it does not stop here. \r\n  </div> \r\n  <br/> \r\n  <div>\r\n    Introducing Evolve by WZRD Group, the WZRD Platform has been designed to never age, it’ll be forever upgrading with new educational content, strategies and features. \r\n  </div> \r\n  <br/> \r\n  <div>\r\n    In order to fully utilise your Platform you must enter required information within the Journal \t&amp; Portfolio\r\n  </div> \r\n  <br/> \r\n  <div>\r\n    Thank you &amp; don’t forget to get your WZRD Hoodie!\r\n  </div> \r\n  <br/>     \r\n  <div>WZRD GROUP</div>\r\n</div>\r\n  <img class=\"wzrdIcon\" src=\"https://d308fakbqebk7c.cloudfront.net/dashboard_images/wzrd_introduction.png\"/>\r\n  <button nbButton class=\"nextButton\" (click)=\"closeWelcome()\">Close</button>\r\n</div>\r\n<nb-layout class=\"layout-container\">\r\n\r\n    <nb-layout-header class=\"flex flexCenter platformHeader\">\r\n      <app-header></app-header>\r\n    </nb-layout-header>\r\n  \r\n    <nb-layout-column class=\"flex fix-overflow p-0 p-md-3\" [nbSpinner]=\"userEventLoading\" nbSpinnerMessage=\"\" nbSpinnerStatus=\"success\">\r\n      <!-- <div class=\"wizardOverlay\" style=\"z-index: 999999;\">\r\n        <div class=\"wzrdOverlayTitle\">\r\n          WELCOME TO YOUR DASHBOARD\r\n        </div>                    \r\n        <img class=\"wzrdIcon\" src=\"./assets/wzrd_introduction.png\"/> \r\n        <button nbButton class=\"nextButton\">Next</button>\r\n      </div> -->\r\n  \r\n      <div class=\"col-12 col-xl-9 p-0\">\r\n  \r\n        <div class=\"flex\">\r\n  \r\n          <ng-template [ngIf]=\"!isXsScreen\" [ngIfElse]=\"slider\">\r\n  \r\n              <div class=\"col-12 col-md-4 col-xl-4\">\r\n                <nb-card class=\"relativeContainer\">\r\n                  <!-- <div class=\"weatherContainer\" *ngIf=\"userLocation\">\r\n                    <weather-widget [settings]=\"settings\"></weather-widget>\r\n                  </div>                 -->\r\n                  <div class=\"weatherContainer\">\r\n                    <img *ngIf=\"todaysQuote\" [src]=\"'https://d308fakbqebk7c.cloudfront.net/quote_image/' + todaysQuote.imageNumber + '.jpg'\" class=\"card-img backgroundCard1\">\r\n                    <img src=\"https://d308fakbqebk7c.cloudfront.net/dashboard_images/Continue.png\" alt=\"summer\" class=\"card-img sizingImage\">\r\n                    <div class=\"padding80\"></div>\r\n                    <div class=\"dateContainer\">\r\n                      <div class=\"card1Day\">{{(today | date:'EEEE d')}}{{( today | date: \"d\") | dateSuffix}}</div>\r\n                      <div class=\"card1Month\">{{today | date:'MMMM'}}</div>\r\n                    </div>\r\n                    <div class=\"timeContainer\">{{realTime | date:'hh:mm:ss a'}}</div>\r\n                    <div class=\"motivationalQuote\" *ngIf=\"todaysQuote\">\r\n                      \"{{ todaysQuote.quote }}\"\r\n                    </div>\r\n                  </div>\r\n                </nb-card>\r\n              </div>\r\n      \r\n              <div class=\"col-12 col-md-4 col-xl-4\">\r\n                <nb-card>\r\n                  <a *ngIf=\"nextUncompleteLesson\" class=\"color-text-2\" href=\"course/chapter/{{nextUncompleteLesson.ChapterId}}/lesson/{{nextUncompleteLesson.LessonId}}\"><img src=\"https://d308fakbqebk7c.cloudfront.net/dashboard_images/Continue.png\" alt=\"continue lesson\" class=\"card-img\"></a>\r\n                  <div class=\"card-bottom flex flexCenter\">\r\n                    \r\n      \r\n                    <a *ngIf=\"nextUncompleteLesson\" class=\"color-text-2\" href=\"course/chapter/{{nextUncompleteLesson.ChapterId}}/lesson/{{nextUncompleteLesson.LessonId}}\">\r\n                      {{nextUncompleteLesson.ChapterName}}\r\n                    </a>\r\n                  </div>\r\n                </nb-card>\r\n            </div>\r\n  \r\n            <div class=\"col-12 col-md-4 col-xl-4\">\r\n              <nb-card>\r\n                <img src=\"https://d308fakbqebk7c.cloudfront.net/dashboard_images/statictv.png\" alt=\"static\" class=\"card-img\" routerLink=\"./livepage\"\r\n                  style=\"cursor: pointer\">\r\n                <div class=\"card-bottom flex flexCenter\">\r\n                  <ng-container *ngIf=\"vimeoBroadcastInfo.isLive; else vimeoNotLive\">\r\n                      <span class=\"live-status\"></span>\r\n                      <div class=\"statusText color-text-2\" routerLink=\"./livepage\" style=\"cursor: pointer\">STATUS: LIVE\r\n                      </div>\r\n                  </ng-container>\r\n                  <ng-template #vimeoNotLive>\r\n                      <span class=\"not-live-status\"></span>\r\n                      <div class=\"statusText color-text-2\" routerLink=\"./livepage\" style=\"cursor: pointer\">STATUS: NOT LIVE\r\n                      </div>\r\n                  </ng-template>\r\n                </div>\r\n              </nb-card>\r\n            </div>\r\n  \r\n          </ng-template>\r\n          <!-- start el carousel -->\r\n          <ng-template #slider>\r\n            <div class=\"slider-pw adjustWidthCarousel mt-3  mb-2\">\r\n              <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                <ol class=\"carousel-indicators\">\r\n                  <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\r\n                  <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\r\n                  <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\r\n                </ol>\r\n                <div class=\"carousel-inner\" role=\"listbox\">\r\n                  <div class=\"carousel-item active\">\r\n                    <div class=\"col-12 col-xl-4\">\r\n                      <nb-card class=\"relativeContainer\">\r\n                        <!-- <div class=\"weatherContainer\" *ngIf=\"userLocation\">\r\n                          <weather-widget [settings]=\"settings\"></weather-widget>\r\n                        </div>                 -->\r\n                        <div class=\"weatherContainer\" ngClass=\"{'hide-opacity': todoLoading}\" [nbSpinner]=\"todoLoading\">\r\n                          <img [src]=\"'https://d308fakbqebk7c.cloudfront.net/quote_image/' + todaysQuote.imageNumber + '.jpg'\" class=\"card-img backgroundCard1\">\r\n                          <img src=\"https://d308fakbqebk7c.cloudfront.net/dashboard_images/Continue.png\" alt=\"summer\" class=\"card-img sizingImage\">\r\n                          <div class=\"padding80\"></div>\r\n                          <div class=\"dateContainer\">\r\n                            <div class=\"card1Day\">{{(today | date:'EEEE d')}}{{( today | date: \"d\") | dateSuffix}}</div>\r\n                            <div class=\"card1Month\">{{today | date:'MMMM'}}</div>\r\n                          </div>\r\n                          <div class=\"timeContainer\">{{realTime | date:'hh:mm:ss a'}}</div>\r\n                          <div class=\"motivationalQuote\">\r\n                            \"{{ todaysQuote.quote }}\"\r\n                          </div>\r\n                        </div>\r\n                      </nb-card>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"carousel-item\">\r\n                    <div class=\"col-12 col-md-6 col-xl-4\">\r\n                      <nb-card>\r\n                        <a class=\"color-text-2\" href=\"course/chapter/{{nextUncompleteLesson.ChapterId}}/lesson/{{nextUncompleteLesson.LessonId}}\"><img src=\"https://d308fakbqebk7c.cloudfront.net/dashboard_images/Continue.png\" alt=\"continue lesson\" class=\"card-img\"></a>\r\n                        <div class=\"card-bottom flex flexCenter\">\r\n                          \r\n            \r\n                          <a class=\"color-text-2\" href=\"course/chapter/{{nextUncompleteLesson.ChapterId}}/lesson/{{nextUncompleteLesson.LessonId}}\">\r\n                            {{nextUncompleteLesson.ChapterName}}\r\n                          </a>\r\n                        </div>\r\n                      </nb-card>\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class=\"carousel-item\">\r\n                    <div class=\"col-12 col-md-6 col-xl-4\">\r\n                      <nb-card>\r\n                        <img src=\"https://d308fakbqebk7c.cloudfront.net/dashboard_images/statictv.png\" alt=\"static\" class=\"card-img\" routerLink=\"./livepage\"\r\n                          style=\"cursor: pointer\">\r\n                        <div class=\"card-bottom flex flexCenter\">\r\n                            <ng-container *ngIf=\"vimeoBroadcastInfo.isLive; else vimeoNotLive\">\r\n                                <span class=\"live-status\"></span>\r\n                                <div class=\"statusText color-text-2\" routerLink=\"./livepage\" style=\"cursor: pointer\">STATUS: LIVE\r\n                                </div>\r\n                            </ng-container>\r\n                            <ng-template #vimeoNotLive>\r\n                                <span class=\"not-live-status\"></span>\r\n                                <div class=\"statusText color-text-2\" routerLink=\"./livepage\" style=\"cursor: pointer\">STATUS: NOT LIVE\r\n                                </div>\r\n                            </ng-template>\r\n                        </div>\r\n                      </nb-card>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a class=\"carousel-control-prev\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\"> <span\r\n                    class=\"sr-only\">Previous</span></a> <a class=\"carousel-control-next\" href=\"#carousel-example-generic\"\r\n                  role=\"button\" data-slide=\"next\"> <span class=\"sr-only\">Next</span></a>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n  \r\n          <!-- end el carousel -->\r\n        </div>\r\n  \r\n        <nb-reveal-card class=\"mx-3\" style=\"margin-bottom: 25px\">\r\n          <nb-card-front>\r\n            <nb-card>\r\n              <nb-card-header>\r\n                Your progress <button nbTooltip=\"Displays your overall lifetime progress as a percent in the 3 educational areas on the platform.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button>\r\n              </nb-card-header>\r\n              <!-- *ngFor=\"let sec of ['Course', 'WZRD Book', 'Exams']\" -->\r\n              <div *ngIf=\"loadingProgress === 0\" class=\"flex p-1 p-md-6 color-text-3\">\r\n                <div class=\"col-4 col-md-4\">\r\n                  <div>\r\n                    <svg viewBox=\"0 0 36 36\" class=\"circular-chart\" routerLink=\"/course/chapter/{{nextUncompleteLesson.ChapterId}}/lesson/{{nextUncompleteLesson.LessonId}}\">\r\n                      \r\n                      <linearGradient id=\"green-stroke\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\r\n                        <stop offset=\"0%\" stop-color=\"#37ffe7\" />\r\n                        <stop offset=\"100%\" stop-color=\"#a2ffb4\" />\r\n                      </linearGradient>\r\n                      <path class=\"circle-bg\" d=\"M18 2.0845\r\n                          a 15.9155 15.9155 0 0 1 0 31.831\r\n                          a 15.9155 15.9155 0 0 1 0 -31.831\" />\r\n                      <path class=\"circle\" [attr.stroke]=\"getCircularChartStroke('green-stroke')\"\r\n                        [ngStyle]=\"{'stroke-dasharray': coursePercentage + ' 100'}\" d=\"M18 2.0845\r\n                          a 15.9155 15.9155 0 0 1 0 31.831\r\n                          a 15.9155 15.9155 0 0 1 0 -31.831\" />\r\n                <text x=\"18\" y=\"20.35\" class=\"percentage\">{{coursePercentage}}%</text>\r\n              </svg>\r\n            </div>\r\n            <div class=\"text-center p-1 p-md-2\">\r\n              <span style=\"cursor: pointer\" class=\"font-size-1\" routerLink=\"/course/chapter/{{nextUncompleteLesson.ChapterId}}/lesson/{{nextUncompleteLesson.LessonId}}\">Course</span>\r\n            </div>\r\n          </div>\r\n  \r\n                <div class=\"col-4 col-md-4\">\r\n                  <div>\r\n                    <svg viewBox=\"0 0 36 36\" class=\"circular-chart\" routerLink=\"/library\">\r\n                      <linearGradient id=\"blue-stroke\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\r\n                        <stop offset=\"0%\" stop-color=\"#fb8097\" />\r\n                        <stop offset=\"100%\" stop-color=\"#f627b9\" />\r\n                      </linearGradient>\r\n                      <path class=\"circle-bg\" d=\"M18 2.0845\r\n                            a 15.9155 15.9155 0 0 1 0 31.831\r\n                            a 15.9155 15.9155 0 0 1 0 -31.831\" />\r\n                      <path class=\"circle\" [attr.stroke]=\"getCircularChartStroke('blue-stroke')\"\r\n                        [ngStyle]=\"{'stroke-dasharray': bookPercent + ' 100'}\" d=\"M18 2.0845\r\n                            a 15.9155 15.9155 0 0 1 0 31.831\r\n                            a 15.9155 15.9155 0 0 1 0 -31.831\" />\r\n                      <text x=\"18\" y=\"20.35\" class=\"percentage\">{{bookPercent}}%</text>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"text-center p-1 p-md-2\">\r\n                    <span style=\"cursor: pointer\" class=\"font-size-1\" routerLink=\"/library\">WZRD Book</span>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"col-4 col-md-4\">\r\n                  <div>\r\n                    <svg viewBox=\"0 0 36 36\" class=\"circular-chart\" (click) = \"routeToCurrentExamination()\">\r\n                      <linearGradient id=\"orange-stroke\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\r\n                        <stop offset=\"0%\" stop-color=\"#f8a327\" />\r\n                        <stop offset=\"100%\" stop-color=\"#f86327\" />\r\n                      </linearGradient>\r\n                      <path class=\"circle-bg\" d=\"M18 2.0845\r\n                              a 15.9155 15.9155 0 0 1 0 31.831\r\n                              a 15.9155 15.9155 0 0 1 0 -31.831\" />\r\n                      <path class=\"circle\" [ngStyle]=\"{'stroke-dasharray': examPercentage + ' 100'}\"\r\n                        [attr.stroke]=\"getCircularChartStroke('orange-stroke')\" d=\"M18 2.0845\r\n                              a 15.9155 15.9155 0 0 1 0 31.831\r\n                              a 15.9155 15.9155 0 0 1 0 -31.831\" />\r\n                      <text x=\"18\" y=\"20.35\" class=\"percentage\">{{examPercentage | number:'1.0-0'}}%</text>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"text-center p-1 p-md-2\">\r\n                    <span style=\"cursor: pointer\" class=\"font-size-1\" (click) = \"routeToCurrentExamination()\">Examinations</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n            </nb-card>\r\n          </nb-card-front>\r\n          <nb-card-back>\r\n  \r\n            <nb-card class=\"learningReport-H\">\r\n              <nb-card-header>\r\n                Learning Report <button nbTooltip=\"Displays your progress as a percent in each of the 3 sections that you've completed in the last 7 days.\" nbTooltipStatus=\"primary\" class=\"fal fa-question-circle ml-1 nbButtonIcon\"></button>\r\n              </nb-card-header>\r\n              <nb-card-body class=\"p-0 chart-card\">\r\n                <app-learningReport style=\"width: 100%\" class=\"learningReport\" [usefulProgress]=\"progress\">\r\n                </app-learningReport>\r\n              </nb-card-body>\r\n            </nb-card>\r\n  \r\n          </nb-card-back>\r\n        </nb-reveal-card>\r\n  \r\n        <div class=\"flex\">\r\n  \r\n          <div class=\"col-12 col-md-6\">\r\n            <nb-card class=\"text-center p-2 pb-3 p-md-3 twitter-container\">\r\n              <nb-card-body class=\"p-3 p-md-3\">\r\n                <img src=\"https://d308fakbqebk7c.cloudfront.net/dashboard_images/twitter.svg\" alt=\"twitter logo\" class=\"m-3 twitter-icon\">\r\n                <br>\r\n                <span [innerHTML]=\"transform(twitter_feed)\" class=\"white font-size-1\"></span>\r\n                <br>\r\n              </nb-card-body>\r\n              <div class=\"tweet-time light-color-2 font-size-1\"><a class=\"time-twitter\" target=\"_blank\"\r\n                  href=\"https://twitter.com/cryptoWZRD_/status/{{twitter_link}}\">{{formatTime(time)}}</a></div>\r\n            </nb-card>\r\n          </div>\r\n  \r\n          <div class=\"col-12 col-md-6\">\r\n            <nb-card class=\"text-center p-2 pb-3 p-md-3 twitter-container\">\r\n              <nb-card-body class=\"p-3 p-md-3\">\r\n                <img src=\"https://d308fakbqebk7c.cloudfront.net/dashboard_images/news.svg\" alt=\"article logo\" class=\"m-3 news-icon\">\r\n                <br>\r\n                <span *ngIf=\"article\" [innerHTML]=\"transform(article.title)\" class=\"white font-size-1\"></span>\r\n                <br>\r\n              </nb-card-body>\r\n              <a *ngIf=\"article\" href=\"/news/{{article.id}}\"><i class=\"arrow-news nb-arrow-right\"></i></a>\r\n            </nb-card>\r\n          </div>\r\n        </div>\r\n  \r\n        <ng-template [ngIf]=\"!isXsScreen\">\r\n          <div class=\"mx-3 mb-4 desktopHide\" style=\"position: relative;\" [nbSpinner]=\"userEventLoading\" *ngIf=\"!(userEventLoading || upcomingLoading); else spinner\">\r\n            <span class=\"add\">\r\n              <button nbButton outline size=\"xsmall\" status=\"primary\" class=\"to-do-plus\" (click)=\"addEvent()\">+</button>\r\n            </span>\r\n            <nb-calendar [nbSpinner]=\"userEventLoading\" nbSpinnerMessage=\"\" nbSpinnerStatus=\"success\" [(date)]=\"date\"\r\n              [dayCellComponent]=\"dayCellComponent\" size=\"large\" (dateChange)=\"dateSelected($event)\"></nb-calendar>\r\n  \r\n          </div>\r\n          <!-- <ng-template #spinner>\r\n            <nb-spinner></nb-spinner>\r\n          </ng-template> -->\r\n        </ng-template>\r\n  \r\n      </div>\r\n  \r\n      <div class=\"col-12 col-xl-3 flex p-0\" style=\"align-content: start;\">\r\n  \r\n        <div class=\"col-12 col-md-6 col-xl-12\">\r\n          <nb-card>\r\n            <nb-card-header>\r\n              Cryptowzrd New Beginning\r\n            </nb-card-header>\r\n            <!--<nb-card-body [nbSpinner]=\"upcomingLoading\" nbSpinnerMessage=\"\" nbSpinnerStatus=\"success\" class=\"p-0\">-->\r\n  \r\n                <nb-list class=\"px-2\">\r\n                  <nb-list-item>\r\n                    Take a look around we have an abundance of new features. Head over to the WZRD chat to begin seeing new calls and analysis.\r\n                  </nb-list-item>\r\n                </nb-list>\r\n            <nb-list>\r\n              <!-- <nb-list-item *ngIf=\"upcomingLoading\" class=\"spinnerHolder\" style=\"text-align:center;\">\r\n                    <div class=\"spinner\" ></div>\r\n                  </nb-list-item> -->\r\n              <nb-list-item *ngFor=\"let item of upcomingEvents; let i = index\" class=\"flex\" [ngClass]=\"{'hidden':i > 2}\">\r\n                <div class=\"w-25\">\r\n                  <div class=\"small-cal\">\r\n                    <div class=\"text-center flex flexCenter small-cal-month\">\r\n                      {{getMonth(item.eventDate)}}\r\n                      <!-- {{item.eventDate}} -->\r\n                    </div>\r\n                    <div class=\"text-center flex flexCenter small-cal-bg\">\r\n                      <div class=\"color-text-2\">\r\n                        <p class=\"small-cal-date\">\r\n                          {{getDayNumber(item.eventDate)}}\r\n                        </p>\r\n                        <p class=\"small-cal-day\">{{getDayName(item.eventDate)}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-3 small-cal-data\" style=\"width: 70%\">\r\n                  <p class=\"upcomingTime\">{{item.startTime}}-{{item.endTime}}</p>\r\n                  <!-- <p>10:30AM - 12:00PM</p> -->\r\n                  <p class=\"upcomingEvent\">{{item.location}}</p>\r\n                  <p class=\"upcomingDescription\">{{item.title}}</p>\r\n                </div>\r\n              </nb-list-item>\r\n            </nb-list>\r\n            <!--</nb-card-body>-->\r\n          </nb-card>\r\n        </div>\r\n  \r\n        <div class=\"col-12 col-md-6 col-xl-12\">\r\n  \r\n          <nb-card>\r\n            <nb-card-header>\r\n              To do list            \r\n            </nb-card-header>\r\n            \r\n            <nb-card-body [nbSpinner]=\"todoLoading\" nbSpinnerMessage=\"\" nbSpinnerStatus=\"success\" style=\"padding: 0\">\r\n  \r\n  \r\n              <div class=\"p-2 flex-vertical\">\r\n                <input type=\"text\" id=\"todo-input\" nbInput placeholder=\"Task to do...\"\r\n                  class=\"col-10 input-bg-3 light-color-2 input-md input-rectangle\" #note\r\n                  (keydown.enter)=\"onKeydown($event, note.value); note.value = '';\">\r\n                <div class=\"col-2\" style=\"display: inline-flex; justify-content: center;\">\r\n                  <button nbButton outline size=\"xsmall\" status=\"primary\" class=\"to-do-plus\" style=\"font-size: large;\"\r\n                    (click)=\"addNote(note.value); note.value = '';\">+</button>\r\n                </div>\r\n              </div>\r\n  \r\n              <nb-list style=\"max-height: 80vh;\" class=\"pt-2 px-2\">\r\n                <!-- <nb-list-item *ngIf=\"todoLoading\" class=\"spinnerHolder\" style=\"text-align:center;\">\r\n                    <div class=\"spinner\" ></div>\r\n                  </nb-list-item> -->\r\n                <nb-list-item *ngFor=\"let note of todolist; let i = index;\" class=\"flex flex-vertical listitemContainer p-0 pt-2 pb-2 color-text-3\">\r\n                  <div class=\"col-10 flex-vertical\" style=\"2px solid transparent\">\r\n                      <nb-checkbox [value]=\"note.isDone===1?true:false\" (change)=\"toggle($event, note)\" status=\"success\" class=\"col-1 p-0\"></nb-checkbox>\r\n                      <div class=\"col-11 font-size-1\">{{note.description}}</div>\r\n                  </div>                                                \r\n                    <div class=\"col-2 x-button p-0\">\r\n                        <div *ngIf=\"!note.selected\" class='to-do-delete-outer-circle'\r\n                          (click) = \"note.selected =!note.selected; checkAllTodosSelected()\" \r\n                          >\r\n                        </div>    \r\n                        <div *ngIf=\"note.selected\" class=\"to-do-delete-inner-circle\" (click) = \"note.selected =!note.selected; checkAllTodosSelected()\" ></div>\r\n                      \r\n                    </div>                \r\n                \r\n              </nb-list-item>\r\n            </nb-list>\r\n            \r\n          </nb-card-body>\r\n            <nb-card-footer>\r\n              <div class='to-do-bottom'>\r\n                  <button *ngIf=\"(todoSelected || allTodosSelected) && this.todolist && this.todolist.length > 0\" nbButton outline size=\"xsmall\" status=\"primary\" class=\"col-5 col-md-5 \"\r\n                      (click)=\"deselectAllSelectedNotes(todolist);\"\r\n                      \r\n                      >Delete Selected </button>\r\n                  <button *ngIf=\"!allTodosSelected && this.todolist && this.todolist.length > 0\" nbButton outline size=\"xsmall\" status=\"primary\" class=\"col-5 col-md-5 \"\r\n                      (click)=\"selectAllNotes();\"\r\n                      \r\n                      >Select All </button>\r\n                    \r\n                    <button *ngIf=\"allTodosSelected && this.todolist && this.todolist.length > 0\" nbButton outline size=\"xsmall\" status=\"primary\" class=\"col-5 col-md-5 \"\r\n                      (click)=\"deselectAllNotes();\"\r\n                      \r\n                      >Deselect All </button>\r\n                    </div>\r\n            </nb-card-footer>\r\n          </nb-card>\r\n\r\n          <nb-card>\r\n              <nb-card-header class=\"d-flex\">\r\n                <span class=\"new-rel\">Quick Access</span>\r\n                <i class=\"fal fa-external-link-square align-right\" routerLink=\"/profile\"></i>\r\n                <div class=\"new-label-slant\">NEW</div>\r\n              </nb-card-header>\r\n              <nb-card-body>\r\n                <div (click)=\"isXsScreen ? chooseHeaderImg():null\" [ngStyle]=\"{'background-image': 'url(' + headerImg + ')'}\"  class=\"d-flex justify-content-end align-items-end\" id=\"header\">\r\n                    <i (click)=\"!isXsScreen ? chooseHeaderImg():null\" class=\"nb-edit\" size=\"large\"></i>\r\n                </div>\r\n                <div [ngStyle]=\"{'background-image': 'url('+ profileImg +')'}\" id=\"profile-image\">\r\n                    <div (click)=\"chooseProfileImg()\" class=\"align-items-center justify-content-center\" id=\"edit-profile-image\">\r\n                        <i class=\"nb-edit\" size=\"large\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"name text-center\">\r\n                  {{name| titlecase}}\r\n                </div>\r\n                <div class=\"name text-center email-address\">\r\n                  {{userEmail}}\r\n                </div>\r\n                <div class=\"name text-center mb-4 country-text\">\r\n                  {{userCountry}}\r\n                </div>\r\n                <!-- <div class=\"d-flex mb-4\">\r\n                  <button size=\"xsmall\" nbButton (click)=\"changePassword()\" class=\"mx-auto\">Change Password</button>\r\n                  <button size=\"xsmall\" nbButton (click)=\"changeCountry()\" class=\"mx-auto\">Change Country</button>\r\n                </div> -->\r\n                <button size=\"xsmall\" nbButton (click)=\"changePassword()\" class=\"mx-auto mb-3\">Change Password</button>\r\n                <button size=\"xsmall\" nbButton (click)=\"chooseProfileTheme()\" class=\"mx-auto\">Change Theme</button>\r\n                <div class=\"theme-name text-center mt-3\">\r\n                  <!-- <span>Current theme: </span> <span>{{}}</span> -->\r\n                </div>\r\n              </nb-card-body>\r\n          </nb-card>\r\n          <ng-template [ngIf]=\"isXsScreen\">\r\n            <div class=\"mb-3 desktopHide\" style=\"position: relative;\" [nbSpinner]=\"userEventLoading\" *ngIf=\"!(userEventLoading || upcomingLoading)\">\r\n              <span class=\"add\">\r\n                <button nbButton outline size=\"xsmall\" status=\"primary\" class=\"to-do-plus\" (click)=\"addEvent()\">+</button>\r\n              </span>\r\n              <nb-calendar [nbSpinner]=\"userEventLoading\" nbSpinnerMessage=\"\" nbSpinnerStatus=\"success\" [(date)]=\"date\"\r\n                [dayCellComponent]=\"dayCellComponent\" size=\"large\" (dateChange)=\"dateSelected($event)\"></nb-calendar>\r\n  \r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n  \r\n  \r\n      </div>\r\n  \r\n    </nb-layout-column>\r\n  \r\n    <nb-layout-footer class=\"footer-main\" [ngClass]=\"{'hide': userEventLoading || upcomingLoading}\">\r\n      &copy; 2021 Powered by <a target=\"_blank\" class=\"wzrdgroup-link\" href=\"http://wzrdgroup.com/\">WZRD Group</a>\r\n    </nb-layout-footer>\r\n  \r\n  </nb-layout>\r\n\r\n<div class=\"modal fade\" id=\"alertModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content alert-modal-content\">\r\n            <div class=\"modal-body text-center\">\r\n                <button  type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <div class=\"pt-5 pb-5\">\r\n                    <div>\r\n                        {{alertModalMessage}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #deleteDialog let-data let-ref=\"dialogRef\">\r\n  <nb-card>\r\n    <nb-card-header class=\"d-flex, justify-content-between\">Delete Journal Log</nb-card-header>\r\n    <nb-card-body class=\"confirm-dialoge\">\r\n      <div class=\"px-3\">\r\n        <span> Are you sure you want to delete all selected todos</span>\r\n      </div>\r\n      <div class=\"p-6 button-container\">\r\n        <button nbButton outline status=\"primary\" size=\"xsmall\" class=\"f-w\" (click)=\"ref.close('yes')\" tabindex=\"1\"\r\n          >Delete</button>\r\n        <button nbButton outline status=\"danger\" size=\"xsmall\" class=\"f-w\" (click)=\"ref.close('no')\">Cancel</button>\r\n      </div>\r\n    </nb-card-body>\r\n  </nb-card>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _components_custom_day_cell_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/custom-day-cell/custom-day-cell.component */ "./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.ts");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");
/* harmony import */ var _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-event/add-event.component */ "./src/app/pages/dashboard/add-event/add-event.component.ts");
/* harmony import */ var _edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-event/edit-event.component */ "./src/app/pages/dashboard/edit-event/edit-event.component.ts");
/* harmony import */ var _choose_profile_img_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./choose-profile-img/choose-profile-img.component */ "./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.ts");
/* harmony import */ var _choose_header_img_choose_header_img_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./choose-header-img/choose-header-img.component */ "./src/app/pages/dashboard/choose-header-img/choose-header-img.component.ts");
/* harmony import */ var _choose_profile_theme_choose_profile_theme_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./choose-profile-theme/choose-profile-theme.component */ "./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/pages/dashboard/change-password/change-password.component.ts");
/* harmony import */ var _change_country_change_country_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./change-country/change-country.component */ "./src/app/pages/dashboard/change-country/change-country.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var linkifyjs_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! linkifyjs/string */ "./node_modules/linkifyjs/string.js");
/* harmony import */ var linkifyjs_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _learning_report_learning_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./learning-report/learning-report.component */ "./src/app/pages/dashboard/learning-report/learning-report.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_weather_widget__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-weather-widget */ "./node_modules/angular-weather-widget/index.js");





















var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(toast, sidebar, _dataservice, _router, router, route, http, _passingDataservice, dialog, _configuration, themeService) {
        this.toast = toast;
        this.sidebar = sidebar;
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this.http = http;
        this._passingDataservice = _passingDataservice;
        this.dialog = dialog;
        this._configuration = _configuration;
        this.themeService = themeService;
        this.profileImg = '';
        this.headerImg = '';
        this.userEmail = '';
        this.userCountry = '';
        this.alertModalMessage = '';
        this.addEventLoading = true;
        this.userEventLoading = true;
        this.vimeoBroadcastInfo = {
            url: '',
            isLive: 0,
        };
        this.date = new Date();
        this.dayCellComponent = _components_custom_day_cell_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_5__["CustomDayCellComponent"];
        this.upcomingEvents = [];
        this.allTodosSelected = false;
        this.todoSelected = false;
        this.userLocation = false;
        this.dates = [];
        this.userEvents = [];
        this.today = Date.now();
        this.loadingProgress = 3;
        this.settings = {
            location: {
                cityName: 'London',
            },
            scale: angular_weather_widget__WEBPACK_IMPORTED_MODULE_19__["TemperatureScale"].CELCIUS,
        };
        this.showWelcome = false;
        this.userEventsLoaded = false;
        this.eventsloaded = false;
        this.quotesLoading = false;
        this.showNew = false;
    }
    DashboardComponent.prototype.transform = function (str) {
        return str ? linkifyjs_string__WEBPACK_IMPORTED_MODULE_16___default()(str, { target: '_system' }) : str;
    };
    DashboardComponent.prototype.changeTheme = function (themeKey) {
        //this.currentTheme = this.currentTheme === 'default' ? 'cosmic' : 'default';
        this.themeService.changeTheme(themeKey);
        console.log(themeKey);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeOptions = [
            { theme: "Far_Above", img: "../assets/theme_tn/30.jpg", id: 30 },
            { theme: "Vortex", img: "../assets/theme_tn/31.jpg", id: 31 },
            { theme: "Smiley", img: "../assets/theme_tn/53.jpg", id: 53 },
            { theme: "Fireball", img: "../assets/theme_tn/32.jpg", id: 32 },
            { theme: "Purging", img: "../assets/theme_tn/81.jpg", id: 81 },
            //{theme: "Hex_World", img: "../assets/theme_tn/33.jpg"},            
            { theme: "Connection", img: "../assets/theme_tn/35.jpg", id: 35 },
            { theme: "Enchanted_Dream", img: "../assets/theme_tn/41.jpg", id: 41 },
            { theme: "Infinity", img: "../assets/theme_tn/42.jpg", id: 42 },
            //{theme: "Pirate", img: "../assets/theme_tn/43.jpg"},            
            // {theme: "Uncovering_Secrets", img: "../assets/theme_tn/45.jpg"},
            { theme: "United_Colours", img: "../assets/theme_tn/46.jpg", id: 46 },
            //{theme: "Palm_Trees", img: "../assets/theme_tn/47.jpg"},
            //{theme: "Analyst", img: "../assets/theme_tn/48.jpg"},
            { theme: "Voltage", img: "../assets/theme_tn/49.jpg", id: 49 },
            { theme: "Overload", img: "../assets/theme_tn/52.jpg", id: 52 },
            { theme: "Internal_Traces", img: "../assets/theme_tn/54.jpg", id: 54 },
            { theme: "Isolated", img: "../assets/theme_tn/55.jpg", id: 55 },
            { theme: "Land_of_Promises", img: "../assets/theme_tn/56.jpg", id: 56 },
            { theme: "Towers_of_Wizardry", img: "../assets/theme_tn/64.jpg", id: 64 },
            { theme: "Tron", img: "../assets/theme_tn/44.jpg", id: 44 },
            { theme: "Planets", img: "../assets/theme_tn/69.jpg", id: 69 },
            { theme: "Formula_of_Life", img: "../assets/theme_tn/34.jpg", id: 34 },
            //{theme: "Bloodline", img: "../assets/theme_tn/70.jpg"},
            //{theme: "Ghost_Town", img: "../assets/theme_tn/71.jpg"},
            { theme: "Meteor", img: "../assets/theme_tn/73.jpg", id: 73 },
            { theme: "Predator", img: "../assets/theme_tn/82.jpg", id: 82 },
            { theme: "Lava", img: "../assets/theme_tn/83.jpg", id: 83 },
            { theme: "Witches", img: "../assets/theme_tn/85.jpg", id: 85 },
            { theme: "Candy", img: "../assets/theme_tn/90.jpg", id: 90 },
            { theme: "Mother_Nature", img: "../assets/theme_tn/91.jpg", id: 91 },
            { theme: "Mystic", img: "../assets/theme_tn/92.jpg", id: 92 },
        ];
        // let item = localStorage.getItem(this._configuration.NameKey);
        // this.name = item;
        // let themeName = localStorage.getItem(this._configuration.ProfileTheme);
        // console.log(themeName);
        // this.themeService.changeTheme(themeName);
        var p_img = localStorage.getItem(this._configuration.ProfileImageKey);
        p_img ? this.profileImg = p_img : '';
        var h_img = localStorage.getItem(this._configuration.HeaderImageKey);
        h_img ? this.headerImg = h_img : '';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var longitude = position.coords.longitude;
                var latitude = position.coords.latitude;
                _this.settings = {
                    location: {
                        // cityName: 'London',
                        latLng: {
                            lat: latitude,
                            lng: longitude
                        }
                    },
                    backgroundColor: '#3d3780',
                    color: '#ffffff',
                    width: 'auto',
                    height: 'auto',
                    showWind: false,
                    scale: angular_weather_widget__WEBPACK_IMPORTED_MODULE_19__["TemperatureScale"].CELCIUS,
                    forecastMode: angular_weather_widget__WEBPACK_IMPORTED_MODULE_19__["ForecastMode"].DETAILED,
                    showDetails: false,
                    showForecast: true,
                    layout: angular_weather_widget__WEBPACK_IMPORTED_MODULE_19__["WeatherLayout"].WIDE,
                    language: 'en'
                };
                _this.userLocation = true;
            }, function (err) { return console.log(err); });
        }
        else {
            console.log("No support for geolocation");
        }
        realTime: new Date();
        this.windowWidth = window.innerWidth;
        this.addEventLoading = true;
        this.showWelcome = localStorage.getItem(this._configuration.ShowWelcomeKey) ? false : true;
        localStorage.setItem(this._configuration.ShowWelcomeKey, 'false');
        //this.showNew = localStorage.getItem(this._configuration.showBadgeTKey2) ? false : true;
        //localStorage.setItem(this._configuration.showBadgeTKey2, 'false');
        console.log(localStorage.getItem(this._configuration.showBadgeTKey2));
        setInterval(function () {
            _this.realTime = new Date();
        }, 1000);
        this.quotesLoading = true;
        this._dataservice
            .getAll(this._configuration.GetTodaysQuote)
            .subscribe(function (resp) {
            // console.log("USER LOCATION: ", resp)
            _this.quotesLoading = false;
            if (resp.status === _this._configuration.ResponseStatusError) {
                // alert("There was a problem fetching the content");
                return;
            }
            _this.todaysQuote = resp.currentQuoteData;
            _this.loading = false;
        }, function (error) {
            // alert("An error occured while geting user location");
            _this.todoLoading = false;
        }, function () {
        });
        this.width = window.innerWidth;
        this.loading = true;
        this.upcomingLoading = true;
        this.todoLoading = true;
        this._dataservice
            .postCall(this._configuration.GetTodoListApi, {})
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.todoLoading = false;
                // alert("There was a problem fetching the content");
                return;
            }
            setTimeout(function () {
                _this.todolist = resp.todos;
                _this.todolist = _this.todolist.map(function (todo) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todo, { selected: false });
                });
                _this.todoLoading = false;
            }, 1000);
        }, function (error) {
            console.log(error);
            // alert(this._configuration.ErrorFetchingResult);
            _this.todoLoading = false;
        }, function () {
        });
        //  
        this._dataservice
            .postCall(this._configuration.GetUserApi, {})
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.loading = false;
            }
            console.log(resp);
            _this.theme_id = resp.user.theme_id;
            _this.profileImg = resp.user.profile_pic;
            _this.userEmail = resp.user.email;
            _this.userCountry = resp.user.country;
            _this.headerImg = resp.user.profile_header_pic;
            _this.loading = false;
            _this.themeName = _this.themeOptions.filter(function (x) { return x.id === _this.theme_id; })[0].theme;
            _this.themeService.changeTheme(_this.themeName);
        }, function (error) {
            // this.toastrService.show(this._configuration.ErrorFetchingResult, '',
            // {
            //     status: this._configuration.ToasterStatusError,
            //     duration: this._configuration.ToasterDuration,
            //     position: this._configuration.ToasterPosition
            // });
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
        this._dataservice
            .postCall(this._configuration.GetUserBookProgress, { bookId: 1 })
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                // alert("There was a problem fetching the content");
                _this.loadingProgress--;
                return;
            }
            _this.bookPercent = resp.userBookPageProgressList.length == 0 ? 0 :
                Math.round((resp.userBookPageProgressList.filter(function (x) { return x.isCompleted === true; }).length / resp.userBookPageProgressList.length) * 100);
            _this.loadingProgress--;
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.todoLoading = false;
            _this.loadingProgress--;
        }, function () {
        });
        this._dataservice
            .postCall(this._configuration.GetChaptersList, { pageNo: 1 })
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                //alert("There was a problem fetching the content");
                _this.loadingProgress--;
                return;
            }
            _this.coursePercentage = parseFloat(resp.courseAverage);
            // needed timeout as circular svg was not rendering properly.
            setTimeout(function () {
                _this.loadingProgress--;
            }, 1500);
        }, function (error) {
            console.log(error);
            //alert(this._configuration.ErrorFetchingResult);
            _this.loadingProgress--;
            _this.todoLoading = false;
        }, function () {
        });
        this._dataservice
            .getAll(this._configuration.GetExaminationsListApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                //alert("There was a problem fetching the content");
                _this.loadingProgress--;
                return;
            }
            _this.examPercentage = resp.average || 0;
            _this.loadingProgress--;
        }, function (error) {
            console.log(error);
            //alert(this._configuration.ErrorFetchingResult);
            _this.todoLoading = false;
            _this.loadingProgress--;
        }, function () {
        });
        //Get Twitter Feed
        this._dataservice
            .getAll(this._configuration.GetTwitterPostApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                console.log("error twitter");
                // alert("There was a problem fetching the content");
                return;
            }
            console.log("resp");
            console.log(resp);
            _this.twitter_feed = resp.sent[0].data;
            _this.twitter_link = resp.sent[0].link;
            _this.time = resp.sent[0].created_at;
            console.log(_this.twitter_feed);
        }, function (error) {
            console.log(error);
            //alert(this._configuration.ErrorFetchingResult);
            _this.todoLoading = false;
        }, function () {
        });
        // Get Upcoming Events List
        this._dataservice
            .getAll(this._configuration.GetEventsListApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.upcomingLoading = false;
                //alert("There was a problem fetching the content");
                return;
            }
            console.log('events', resp.events);
            _this.upcomingEvents = resp.events;
            _this.addUpcomingEventsToCal();
            _this.upcomingLoading = false;
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.upcomingLoading = false;
        }, function () {
        });
        // Get User Events List
        var currentMonth = moment__WEBPACK_IMPORTED_MODULE_15___default()(new Date()).format('MM');
        var currentYear = moment__WEBPACK_IMPORTED_MODULE_15___default()(new Date).format("YYYY");
        this.userEventLoading = true;
        this._dataservice
            .postCall(this._configuration.GetUserEventsListApi, JSON.stringify({ month: currentMonth, year: currentYear }))
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.userEventLoading = false;
                _this.toast.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            _this.userEvents = resp.userEvents;
            _this.performDateUpdate();
            // (async () => {
            //   await this.performDateUpdate();
            // })();
            // this.performDateUpdate();
            _this.dayCellComponent.setDates(_this.dates);
            // this.dayCellComponent.
            _this.userEventLoading = false;
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.userEventLoading = false;
        }, function () {
        });
        // GET Article
        this._dataservice
            .postCall(this._configuration.GetShopifyArticlesApi, JSON.stringify({
            pageNo: 1,
            since_id: null
        }))
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.loading = false;
                _this.toast.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            console.log(resp.articles[0]);
            _this.article = resp.articles[0];
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.loading = false;
        }, function () {
        });
        // GET Lesson
        //  chapter/getLesson
        this._dataservice
            .getAll(this._configuration.GetChapterLessonApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.loading = false;
                _this.toast.show(_this._configuration.ErrorLoadingLessons, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            _this.lesson = resp.lesson == null ? { ChapterName: "Chapter 01", LessonId: 100011, ChapterId: 100001 } : resp.lesson;
            // console.log(this.lesson)
            // console.log('lessoned')
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.loading = false;
        }, function () {
        });
        // GET getNextUncompleteLesson
        // chapter/getNextUncompleteLesson
        this._dataservice
            .getAll(this._configuration.GetNextUncompleteLessonApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.loading = false;
                _this.toast.show(_this._configuration.ErrorLoadingLessons, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            _this.nextUncompleteLesson = resp.lesson == null ? { ChapterName: "Chapter 01", LessonId: 100011, ChapterId: 100001 } : resp.lesson;
            console.log("lesson", _this.nextUncompleteLesson);
            // console.log(this.nextUncompleteLesson)
            // console.log('getNextUncompleteLesson')
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.loading = false;
        }, function () {
        });
        this._dataservice
            .getAll(this._configuration.GetProgressByLastSevenDaysApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.userEventLoading = false;
                _this.toast.show(_this._configuration.ErrorLoadingData, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            _this.progress = {
                course: resp.course.length == 0 ? [{
                        dayName: "Wednesday",
                        progress: 0
                    }] : resp.course, book: resp.book.length == 0 ? [{
                        dayName: "Wednesday",
                        progress: 0
                    }] : resp.book, exam: resp.exam == 0 ? [{
                        dayName: "Wednesday",
                        progress: 0
                    }] : resp.exam
            };
            //  this.child.makeFix();
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.userEventLoading = false;
        }, function () {
        });
        this._dataservice
            .getAll(this._configuration.GetVimeoBroadcastInfoApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                return;
            }
            _this.vimeoBroadcastInfo = resp.vimeoInfo;
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.userEventLoading = false;
        }, function () {
        });
        this._dataservice
            .getAll("dashboard/getVimeoBroadcastInfo")
            .subscribe(function (resp) {
            if (resp.status === 'ERROR') {
                return;
            }
            _this.vimeoBroadcastInfo = resp.vimeoInfo;
        }, function (error) {
            console.log(error);
            // this.toast.show("An error occured while fetching the result.", '',
            //   {
            //     status: this._configuration.ToasterStatusError,
            //     duration: this._configuration.ToasterDuration,
            //    position: this._configuration.ToasterPosition
            //   });
            //  this.userEventLoading = false;
        }, function () {
        });
        // Perform Today 
        //
        //  this._dataservice
        //   .getAllOutside<any>("https://samples.openweathermap.org/data/2.5/weather?q=London&appid=9c69759a6d8c6cb2fb6bfd02141ae440")
        //   .subscribe(resp => {
        //     console.log(resp)
        //     if(resp.status===this._configuration.ResponseStatusError)
        //     {
        //       this.loading=false;
        //       alert("There was a problem fetching the content");
        //       return;
        //     }
        //     console.log(resp)
        //   },
        //    error => {
        //      console.log(error);
        //      alert(this._configuration.ErrorFetchingResult);
        //      this.loading=false;
        //    },
        //    () => {
        //  });
        this.date = new Date();
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_15___default()(this.date).format('YYYY-MM');
        this._today = moment__WEBPACK_IMPORTED_MODULE_15___default()(this.date).format('dddd');
        console.log(this._today.substring(0, 3));
        console.log('today');
    };
    DashboardComponent.prototype.addUpcomingEventsToCal = function () {
        var eventsUser = this.userEvents.slice();
        Array.prototype.push.apply(eventsUser, this.upcomingEvents);
        var newUpdatedEvents = eventsUser;
        this.dates = [];
        var newDates = [];
        for (var i = 0; i < newUpdatedEvents.length; i++) {
            var m = moment__WEBPACK_IMPORTED_MODULE_15___default()(newUpdatedEvents[i].eventDate).format('MM/DD/YYYY');
            var isExists = this.isInArray(newDates, new Date(m));
            if (!isExists) {
                newDates.push(new Date(m));
            }
        }
        this.dates = newDates;
        this.dayCellComponent.setDates(this.dates);
    };
    DashboardComponent.prototype.getChapter = function () {
        console.log(this.lesson);
        return 'chapter' + this.lesson.ChapterId.substring(5, 6);
    };
    DashboardComponent.prototype.isInArray = function (array, value) {
        return !!array.find(function (item) { return item.getTime() == value.getTime(); });
    };
    DashboardComponent.prototype.performDateUpdate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, m, isExists;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                for (i = 0; i < this.userEvents.length; i++) {
                    m = moment__WEBPACK_IMPORTED_MODULE_15___default()(this.userEvents[i].eventDate).format('MM/DD/YYYY');
                    isExists = this.isInArray(this.dates, new Date(m));
                    if (!isExists) {
                        console.log('updated dates', m);
                        this.dates.push(new Date(m));
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent.prototype.performDateUpdateAdmin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, m, isExists;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                for (i = 0; i < this.userEvents.length; i++) {
                    m = moment__WEBPACK_IMPORTED_MODULE_15___default()(this.userEvents[i].eventDate).format('MM/DD/YYYY');
                    isExists = this.isInArray(this.dates, new Date(m));
                    if (!isExists) {
                        this.dates.push(new Date(m));
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent.prototype.getMonth = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_15___default()(date).format('MMM');
    };
    DashboardComponent.prototype.getDayNumber = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_15___default()(date).format("DD");
    };
    DashboardComponent.prototype.getDayName = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_15___default()(date).format("dddd").substring(0, 3);
    };
    // dateSelected(e: Date) {
    //   const idx = this.dates.findIndex(d => d.toDateString() === e.toDateString());
    //   if (idx >= 0) {
    //     this.toast.info(this.userEvents[idx].title, "Event");
    //   }
    // }
    DashboardComponent.prototype.formatTime = function (time, format) {
        if (format === void 0) { format = 'MMMM Do YYYY, h:mm:ss a'; }
        return moment__WEBPACK_IMPORTED_MODULE_15___default()(time).fromNow();
        // return moment.utc(time).format(format);
    };
    DashboardComponent.prototype.dateSelected = function (e) {
        var _this = this;
        var results = this.userEvents.filter(function (entry) { return moment__WEBPACK_IMPORTED_MODULE_15___default()(entry.eventDate).format('DD/MM/YYYY') === moment__WEBPACK_IMPORTED_MODULE_15___default()(e).format('DD/MM/YYYY'); });
        results.forEach(function (item, index) {
            var location = item.location == 'N/A' ? 'Event' : item.location;
            _this.toast.info(item.title, moment__WEBPACK_IMPORTED_MODULE_15___default()(item.eventDate).format('DD/MM/YYYY'), { icon: 'calendar-toastr-icon' });
            var toast = document.querySelector("nb-toast:last-child");
            if (!moment__WEBPACK_IMPORTED_MODULE_15___default()(e).isBefore(moment__WEBPACK_IMPORTED_MODULE_15___default()(), 'day')) {
                var edit = document.createElement("i");
                edit.classList.add("nb-edit", "edit");
                toast.appendChild(edit);
                edit.onclick = function () {
                    // this.editEvent(this.dates[index], item, index)
                    console.log(item);
                    _this.editEvent(item.eventDate, item, index);
                };
            }
        });
        var resultsAdmin = this.upcomingEvents.filter(function (entry) { return moment__WEBPACK_IMPORTED_MODULE_15___default()(entry.eventDate).format('DD/MM/YYYY') === moment__WEBPACK_IMPORTED_MODULE_15___default()(e).format('DD/MM/YYYY'); });
        resultsAdmin.forEach(function (item, index) {
            var location = item.location == 'N/A' ? 'Event' : item.location;
            _this.toast.info(item.title, location, { icon: 'calendar-toastr-icon' });
        });
        // if (this.currentDate === moment(e).format('YYYY-MM')) {
        //   var results = this.userEvents.filter(function (entry) { return moment(entry.eventDate).format('YYYY-MM-DD') === moment(e).format('YYYY-MM-DD'); });
        //   results.forEach((item, index) => {
        //     const location = item.location == 'N/A' ? 'Event' : item.location;
        //     this.toast.info(item.title, location, { icon: 'calendar-toastr-icon' });;
        //     console.log('item', item);
        //     const toast = document.querySelector("nb-toast:last-child");
        //     if (!moment(e).isBefore(moment(), 'day')) {
        //       const edit = document.createElement("i");
        //       edit.classList.add("nb-edit", "edit");
        //       toast.appendChild(edit);
        //       edit.onclick = () => {
        //         // this.editEvent(this.dates[index], item, index)
        //         this.editEvent(item.eventDate, item, index)
        //       };
        //     }
        //   });
        //   let resultsAdmin = this.upcomingEvents.filter(function (entry) { return moment(entry.eventDate).format('YYYY-MM-DD') === moment(e).format('YYYY-MM-DD'); });
        //   resultsAdmin.forEach((item, index) => {
        //     const location = item.location == 'N/A' ? 'Event' : item.location;
        //     this.toast.info(item.title, location, { icon: 'calendar-toastr-icon' });
        //   });
        //   return;
        // }
        // console.log('again dates');
        // // Get User Events List
        // var currentMonth = moment(e).format('MM');
        // var currentYear = moment(e).format("YYYY");
        // // this.userEventLoading = true;
        // this._dataservice
        //   // .getAll<any>("userEvent/list")
        //   .postCall<any>("userEvent/list", JSON.stringify({ month: currentMonth, year: currentYear }))
        //   .subscribe(resp => {
        //     if (resp.status === this._configuration.ResponseStatusError && resp.message !== 'No user event found in database.') {
        //       this.userEventLoading = false;
        //       alert("There was a problem fetching the content");
        //       return;
        //     }
        //     this.userEvents = resp.userEvents;
        //     this.userEventLoading = false;
        //     this.performDateUpdate();
        //     // (async () => {
        //     //   await this.performDateUpdate();
        //     // })();
        //     // this.performDateUpdate();
        //     this.dayCellComponent.setDates(this.dates);
        //   },
        //     error => {
        //       console.log(error);
        //       alert(this._configuration.ErrorFetchingResult);
        //       this.userEventLoading = false;
        //     },
        //     () => {
        //     });
        // this.date = e;
        // this.currentDate = moment(e).format('YYYY-MM');
    };
    DashboardComponent.prototype.toggle = function (checked, note) {
        var _this = this;
        //note.isDone=note.isDone===1?0:1;
        var isDone = note.isDone === 1 ? 0 : 1;
        this.todoLoading = true;
        this._dataservice
            .postCall(this._configuration.UpdateTodoApi, JSON.stringify({ id: note.id, value: isDone }))
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.todoLoading = false;
                _this.toast.show(_this._configuration.ErrorMakingNotes, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            setTimeout(function () {
                note.isDone = note.isDone === 1 ? 0 : 1;
                _this.todoLoading = false;
            }, 1000);
            if (resp.achievement) {
                for (var i = 0; i < resp.achievement; i++) {
                    _this.toast.info(resp.achievement[i].achievement, "Achievement");
                }
            }
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.todoLoading = false;
        }, function () {
        });
    };
    DashboardComponent.prototype.addNote = function (note) {
        // this.toDo.unshift(note);
        this.onKeydown('s', note);
    };
    DashboardComponent.prototype.deleteNote = function (note) {
        var _this = this;
        this.todoLoading = true;
        this._dataservice
            .postCall(this._configuration.DeleteTodoApi, JSON.stringify({ id: note.id }))
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.todoLoading = false;
                _this.alertModalMessage = 'There was a problem deleting the note.';
                $('#alertModal').modal('show');
                return;
            }
            setTimeout(function () {
                _this.todolist = _this.todolist.filter(function (n) { return n !== note; });
                _this.checkAllTodosSelected();
                _this.todoLoading = false;
            }, 1000);
            if (resp.achievement) {
                for (var i = 0; i < resp.achievement; i++) {
                    _this.toast.info(resp.achievement[i].achievement, "Achievement");
                }
            }
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorWorkingOnRequest, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.todoLoading = false;
        }, function () {
        });
    };
    DashboardComponent.prototype.selectAllNotes = function () {
        this.todolist.forEach(function (element) {
            element.selected = true;
        });
        this.allTodosSelected = true;
    };
    DashboardComponent.prototype.deselectAllNotes = function () {
        this.todolist.forEach(function (element) {
            element.selected = false;
        });
        this.allTodosSelected = false;
        this.todoSelected = false;
    };
    DashboardComponent.prototype.checkAllTodosSelected = function () {
        var unselectedTodos = this.todolist.filter(function (todo) {
            return todo.selected === false;
        });
        if (unselectedTodos && unselectedTodos.length > 0) {
            this.allTodosSelected = false;
        }
        else {
            this.allTodosSelected = true;
        }
        if (unselectedTodos.length === this.todolist.length) {
            this.todoSelected = false;
        }
        else {
            this.todoSelected = true;
        }
    };
    DashboardComponent.prototype.deselectAllSelectedNotes = function (note) {
        var todosToDelete = note.filter(function (a) { return a.selected === true; });
        if (todosToDelete.length === 0) {
            this.alertModalMessage = 'Please select a note to delete.';
            $('#alertModal').modal('show');
        }
        this.openConfirmation(this.deleteDialog, note, todosToDelete);
    };
    DashboardComponent.prototype.openConfirmation = function (dialog, note, todosToDelete) {
        var _this = this;
        this.dialog.open(dialog, { context: '' })
            .onClose.subscribe(function (result) {
            if (result === 'yes') {
                _this.deleteAllNotes(note, todosToDelete);
            }
            ;
        });
    };
    DashboardComponent.prototype.deleteAllNotes = function (note, todosToDelete) {
        var _this = this;
        this.todoLoading = true;
        var todosToDeleteIds = todosToDelete.map(function (todo) {
            return todo.id;
        });
        var todosDeleteObj = {};
        todosDeleteObj = { id: todosToDeleteIds };
        this._dataservice
            .postCall(this._configuration.DeleteAllTodoApi, todosDeleteObj)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.todoLoading = false;
                _this.alertModalMessage = 'There was a problem deleting the notes.';
                $('#alertModal').modal('show');
                return;
            }
            _this._dataservice
                .postCall(_this._configuration.GetTodoListApi, {})
                .subscribe(function (resp) {
                if (resp.status === _this._configuration.ResponseStatusError) {
                    _this.todoLoading = false;
                    _this.toast.show(_this._configuration.ErrorFetchingContent, '', {
                        status: _this._configuration.ToasterStatusError,
                        duration: _this._configuration.ToasterDuration,
                        position: _this._configuration.ToasterPosition
                    });
                    return;
                }
                setTimeout(function () {
                    _this.todolist = resp.todos;
                    _this.todolist = _this.todolist.map(function (todo) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todo, { selected: false });
                    });
                    _this.allTodosSelected = false;
                    _this.todoSelected = false;
                    _this.todoLoading = false;
                }, 1000);
            }, function (error) {
                console.log(error);
                alert(_this._configuration.ErrorFetchingResult);
                _this.todoLoading = false;
            }, function () {
            });
            setTimeout(function () {
                _this.todolist = _this.todolist.filter(function (n) { return n !== note; });
                _this.todoLoading = false;
            }, 1000);
            if (resp.achievement) {
                for (var i = 0; i < resp.achievement; i++) {
                    _this.toast.info(resp.achievement[i].achievement, "Achievement");
                }
            }
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorWorkingOnRequest, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.todoLoading = false;
        }, function () {
        });
    };
    DashboardComponent.prototype.goTo = function () {
        this.sidebar.toggle(false, 'right');
    };
    DashboardComponent.prototype.onKeydown = function (down, val) {
        var _this = this;
        // alert("It needs a bit of work.")
        // console.log(val);
        if (val != '') {
            this.todoLoading = true;
            this._dataservice
                .postCall(this._configuration.AddNewTodoApi, JSON.stringify({ description: val }))
                .subscribe(function (resp) {
                if (resp.status === _this._configuration.ResponseStatusError) {
                    _this.todoLoading = false;
                    _this.alertModalMessage = 'There was a problem deleting the note.';
                    $('#alertModal').modal('show');
                    return;
                }
                resp.todo.selected = false;
                _this.todolist.unshift(resp.todo);
                _this.checkAllTodosSelected();
                _this.todoLoading = false;
                if (resp.achievement) {
                    for (var i = 0; i < resp.achievement; i++) {
                        _this.toast.info(resp.achievement[i].achievement, "Achievement");
                    }
                }
            }, function (error) {
                console.log(error);
                _this.toast.show(_this._configuration.ErrorWorkingOnRequest, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                _this.todoLoading = false;
            }, function () {
            });
        }
        else {
            this.alertModalMessage = 'Please enter some text to add an item in your to do list.';
            $('#alertModal').modal('show');
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var input = document.getElementById("todo-input");
        var func = function (e) { return _this.keyUp(e); };
        input.onfocus = function () {
            window.addEventListener("keyup", func, true);
        };
        input.onblur = function () {
            window.removeEventListener("keyup", func, true);
        };
        var title = document.querySelector(".title");
        title.addEventListener("click", function () {
            _this.date = new Date();
        });
    };
    DashboardComponent.prototype.keyUp = function (e) {
        if (e.keyCode === 13) {
            document.getElementById("todo-button").click();
        }
    };
    DashboardComponent.prototype.addEvent = function () {
        var _this = this;
        var ref = this.dialog.open(_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_8__["AddEventComponent"], {});
        ref.onClose.subscribe(function (res) {
            if (res) {
                var date = res.date;
                var eventDate = moment__WEBPACK_IMPORTED_MODULE_15___default()(res.date).format('YYYY-MM-DD');
                console.log(eventDate);
                _this.userEventLoading = true;
                _this._dataservice
                    .postCall(_this._configuration.AddNewUserEventApi, JSON.stringify({
                    eventDate: eventDate,
                    startTime: "05:00",
                    endTime: "06:00",
                    title: res.event,
                    location: "N/A"
                }))
                    .subscribe(function (resp) {
                    if (resp.status === _this._configuration.ResponseStatusError) {
                        _this.userEventLoading = false;
                        // alert("There was a problem adding event");
                        _this.alertModalMessage = resp.message;
                        $('#alertModal').modal('show');
                        return;
                    }
                    var day = moment__WEBPACK_IMPORTED_MODULE_15___default()(resp.event.eventDate).format('DD');
                    var month = moment__WEBPACK_IMPORTED_MODULE_15___default()(resp.event.eventDate).format('MM');
                    var year = moment__WEBPACK_IMPORTED_MODULE_15___default()(resp.event.eventDate).format('YYYY');
                    var m = new Date(month + "/" + day + "/" + year);
                    var isExists = _this.isInArray(_this.dates, new Date(m));
                    if (!isExists) {
                        _this.dates.push(new Date(m));
                    }
                    _this.userEvents.push(resp.event);
                    _this.addUpcomingEventsToCal();
                    _this.date = new Date();
                    _this.userEventLoading = false;
                    if (resp.achievement) {
                        for (var i = 0; i < resp.achievement; i++) {
                            _this.toast.info(resp.achievement[i].achievement, "Achievement");
                        }
                    }
                    // this.dates.push(new Date(date));
                    // this.events.push(res.event);
                    // this.dayCellComponent.setDates(this.dates);
                    // this.date = new Date();
                }, function (error) {
                    console.log(error);
                    _this.toast.show(_this._configuration.ErrorWorkingOnRequest, '', {
                        status: _this._configuration.ToasterStatusError,
                        duration: _this._configuration.ToasterDuration,
                        position: _this._configuration.ToasterPosition
                    });
                    _this.userEventLoading = false;
                }, function () {
                });
                // this.dates.push(new Date(date));
                // this.events.push(res.event);
                // this.dayCellComponent.setDates(this.dates);
                // this.date = new Date();
            }
            _this.toast.info(res.event, moment__WEBPACK_IMPORTED_MODULE_15___default()(res.date).format('DD/MM/YYYY'), { icon: 'calendar-toastr-icon' });
            var toast = document.querySelector("nb-toast");
        });
    };
    DashboardComponent.prototype.editEvent = function (date, ev, idx) {
        var _this = this;
        var ref = this.dialog.open(_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_9__["EditEventComponent"], {
            context: {
                date: date,
                event: ev.title
            }
        });
        ref.onClose.subscribe(function (res) {
            if (res) {
                // for(var i=0;i<this.userEvents.length;i++)
                // {
                //   console.log(moment(this.userEvents[i].eventDate).format('YYYY-MM-DD'))
                // }
                // let event = this.userEvents.filter((e,i)=>moment(e.eventDate).format('YYYY-MM-DD')===moment(date).format('YYYY-MM-DD'))[0];
                var event_1 = ev;
                if (res.type === "save") {
                    // this.dates[idx] = res.date;
                    // this.events[idx] = res.event;
                    _this.userEventLoading = true;
                    _this._dataservice
                        .postCall(_this._configuration.UpdateUserEventApi, JSON.stringify({
                        id: event_1.id,
                        title: res.event, location: event_1.location, eventDate: moment__WEBPACK_IMPORTED_MODULE_15___default()(res.date).format('DD/MM/YYYY')
                    }))
                        .subscribe(function (resp) {
                        if (resp.status === _this._configuration.ResponseStatusError) {
                            _this.userEventLoading = false;
                            _this.alertModalMessage = 'There was a problem updating the event.';
                            $('#alertModal').modal('show');
                            return;
                        }
                        _this.userEventLoading = false;
                        _this.userEvents = _this.userEvents.filter(function (x) { return x !== event_1; });
                        var day = moment__WEBPACK_IMPORTED_MODULE_15___default()(res.date).format('DD');
                        var month = moment__WEBPACK_IMPORTED_MODULE_15___default()(res.date).format('MM');
                        var year = moment__WEBPACK_IMPORTED_MODULE_15___default()(res.date).format('YYYY');
                        event_1.eventDate = year + "-" + month + "-" + day + "T00:00:00.000Z";
                        event_1.title = res.event;
                        _this.dates = _this.dates.filter(function (d, i) { return i !== idx; });
                        _this.userEvents.push(event_1);
                        // this.dates.push(new Date(month+"/"+day+"/"+year));
                        var m = new Date(month + "/" + day + "/" + year);
                        // let isExists = this.dates.includes(new Date(m));
                        var isExists = _this.isInArray(_this.dates, new Date(m));
                        if (!isExists) {
                            _this.dates.push(new Date(m));
                        }
                        //this.date = new Date();
                        _this.dayCellComponent.setDates(_this.dates);
                        _this.addUpcomingEventsToCal();
                        if (resp.achievement)
                            _this.toast.info(resp.achievement, "Achievement");
                    }, function (error) {
                        console.log(error);
                        _this.toast.show(_this._configuration.ErrorWorkingOnRequest, '', {
                            status: _this._configuration.ToasterStatusError,
                            duration: _this._configuration.ToasterDuration,
                            position: _this._configuration.ToasterPosition
                        });
                        _this.userEventLoading = false;
                    }, function () {
                    });
                }
                if (res.type === "delete") {
                    // console.log(event.eventDate);
                    // return false;
                    _this.userEventLoading = true;
                    _this._dataservice
                        .postCall(_this._configuration.DeleteUserEventApi, JSON.stringify({ id: event_1.id }))
                        .subscribe(function (resp) {
                        if (resp.status === _this._configuration.ResponseStatusError) {
                            _this.userEventLoading = false;
                            _this.alertModalMessage = 'There was a problem deleting the event.';
                            $('#alertModal').modal('show');
                            return;
                        }
                        // this.userEvents.splice(event);
                        var newUpdatedEvents = _this.userEvents.filter(function (x) { return x !== event_1; });
                        _this.userEvents = newUpdatedEvents;
                        // this.dates = this.dates.filter((d, i) => i !== idx);
                        _this.dates = [];
                        var newDates = [];
                        for (var i = 0; i < newUpdatedEvents.length; i++) {
                            var m = moment__WEBPACK_IMPORTED_MODULE_15___default()(newUpdatedEvents[i].eventDate).format('DD/MM/YYYY');
                            var isExists = _this.isInArray(newDates, new Date(m));
                            if (!isExists) {
                                newDates.push(new Date(m));
                            }
                        }
                        _this.dayCellComponent.setDates(newDates);
                        _this.addUpcomingEventsToCal();
                        _this.userEventLoading = false;
                        _this.date = new Date();
                        if (resp.achievement) {
                            for (var i = 0; i < resp.achievement; i++) {
                                _this.toast.info(resp.achievement[i].achievement, "Achievement");
                            }
                        }
                    }, function (error) {
                        console.log(error);
                        _this.toast.show(_this._configuration.ErrorWorkingOnRequest, '', {
                            status: _this._configuration.ToasterStatusError,
                            duration: _this._configuration.ToasterDuration,
                            position: _this._configuration.ToasterPosition
                        });
                        _this.userEventLoading = false;
                    }, function () {
                    });
                    // this.dates = this.dates.filter((d, i) => i !== idx);
                    // this.events = this.events.filter((e, i) => i !== idx);
                }
            }
        });
    };
    DashboardComponent.prototype.onResize = function (event) {
        this.windowWidth = window.innerWidth;
    };
    Object.defineProperty(DashboardComponent.prototype, "isXsScreen", {
        get: function () {
            return this.windowWidth < 768;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.getCircularChartStroke = function (strokeColor) {
        return "url(" + window.location.href + "#" + strokeColor + ")";
    };
    DashboardComponent.prototype.routeToCurrentExamination = function () {
        var _this = this;
        this._dataservice
            .getAll(this._configuration.GetCurrentExamApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.toast.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            if (resp.currentExamId > 0 && !resp.completed) {
                _this.router.navigateByUrl("/examination/" + resp.currentExamId);
            }
            else {
                _this.router.navigateByUrl("/examination");
            }
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
        }, function () {
        });
    };
    DashboardComponent.prototype.saveImage = function (key, url) {
        localStorage.setItem(key, url);
    };
    DashboardComponent.prototype.chooseHeaderImg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dialog, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = this.dialog.open(_choose_header_img_choose_header_img_component__WEBPACK_IMPORTED_MODULE_11__["ChooseHeaderImgComponent"], {
                            context: {
                                selected: this.headerImg,
                                level: 1
                            }
                        });
                        return [4 /*yield*/, dialog.onClose.toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.headerImg = res;
                            this.saveImage('header-image', res);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.chooseProfileImg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dialog, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = this.dialog.open(_choose_profile_img_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_10__["ChooseProfileImgComponent"], {
                            context: {
                                selected: this.profileImg
                            }
                        });
                        return [4 /*yield*/, dialog.onClose.toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.profileImg = res;
                            this.saveImage('profile-image', res);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.chooseProfileTheme = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dialog, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = this.dialog.open(_choose_profile_theme_choose_profile_theme_component__WEBPACK_IMPORTED_MODULE_12__["ChooseProfileThemeComponent"], {
                            context: {
                                selected: this.theme_id
                            }
                        });
                        return [4 /*yield*/, dialog.onClose.toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.theme_id = res;
                            this.saveImage('themeId', res);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.changePassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dialog, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = this.dialog.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["changePasswordComponent"], {
                            context: {
                                selected: this.theme_id
                            }
                        });
                        return [4 /*yield*/, dialog.onClose.toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.theme_id = res;
                            this.saveImage('themeId', res);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.changeCountry = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dialog, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = this.dialog.open(_change_country_change_country_component__WEBPACK_IMPORTED_MODULE_14__["changeCountryComponent"], {
                            context: {
                                selected: this.theme_id
                            }
                        });
                        return [4 /*yield*/, dialog.onClose.toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.theme_id = res;
                            this.saveImage('themeId', res);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.closeWelcome = function () {
        this.welcomePage.nativeElement.className = 'display-none';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_learning_report_learning_report_component__WEBPACK_IMPORTED_MODULE_17__["LearningReportComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _learning_report_learning_report_component__WEBPACK_IMPORTED_MODULE_17__["LearningReportComponent"])
    ], DashboardComponent.prototype, "child", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('deleteDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], DashboardComponent.prototype, "deleteDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('welcomePage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], DashboardComponent.prototype, "welcomePage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DashboardComponent.prototype, "onResize", null);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({ name: 'linkify' }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            entryComponents: [_components_custom_day_cell_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_5__["CustomDayCellComponent"]],
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarService"],
            _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_7__["DataService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__["Configuration"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_custom_day_cell_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/custom-day-cell/custom-day-cell.component */ "./src/app/pages/dashboard/components/custom-day-cell/custom-day-cell.component.ts");
/* harmony import */ var _choose_profile_img_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./choose-profile-img/choose-profile-img.component */ "./src/app/pages/dashboard/choose-profile-img/choose-profile-img.component.ts");
/* harmony import */ var _choose_header_img_choose_header_img_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./choose-header-img/choose-header-img.component */ "./src/app/pages/dashboard/choose-header-img/choose-header-img.component.ts");
/* harmony import */ var _choose_profile_theme_choose_profile_theme_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./choose-profile-theme/choose-profile-theme.component */ "./src/app/pages/dashboard/choose-profile-theme/choose-profile-theme.component.ts");
/* harmony import */ var _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-event/add-event.component */ "./src/app/pages/dashboard/add-event/add-event.component.ts");
/* harmony import */ var _edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-event/edit-event.component */ "./src/app/pages/dashboard/edit-event/edit-event.component.ts");
/* harmony import */ var _livepage_livepage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./livepage/livepage.component */ "./src/app/pages/dashboard/livepage/livepage.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/pages/dashboard/change-password/change-password.component.ts");
/* harmony import */ var _change_country_change_country_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./change-country/change-country.component */ "./src/app/pages/dashboard/change-country/change-country.component.ts");
/* harmony import */ var _learning_report_learning_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./learning-report/learning-report.component */ "./src/app/pages/dashboard/learning-report/learning-report.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../header/header.module */ "./src/app/pages/header/header.module.ts");
/* harmony import */ var _liveHeader_liveHeader_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../liveHeader/liveHeader.module */ "./src/app/pages/liveHeader/liveHeader.module.ts");
/* harmony import */ var _datePipe_datePipe_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./datePipe/datePipe.pipe */ "./src/app/pages/dashboard/datePipe/datePipe.pipe.ts");
/* harmony import */ var element_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! element-angular */ "./node_modules/element-angular/release/element-angular.module.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_weather_widget__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-weather-widget */ "./node_modules/angular-weather-widget/index.js");
























var OPEN_WEATHER_MAP_API_KEY = "9c69759a6d8c6cb2fb6bfd02141ae440";
var OPEN_WEATHER_MAP_BASE_URL = "https://api.openweathermap.org/data/2.5";
var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'livepage', component: _livepage_livepage_component__WEBPACK_IMPORTED_MODULE_14__["livepageComponent"] },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _components_custom_day_cell_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_8__["CustomDayCellComponent"], _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_12__["AddEventComponent"], _livepage_livepage_component__WEBPACK_IMPORTED_MODULE_14__["livepageComponent"], _edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_13__["EditEventComponent"], _learning_report_learning_report_component__WEBPACK_IMPORTED_MODULE_17__["LearningReportComponent"], _datePipe_datePipe_pipe__WEBPACK_IMPORTED_MODULE_20__["DateSuffix"], _choose_profile_img_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_9__["ChooseProfileImgComponent"], _choose_header_img_choose_header_img_component__WEBPACK_IMPORTED_MODULE_10__["ChooseHeaderImgComponent"], _choose_profile_theme_choose_profile_theme_component__WEBPACK_IMPORTED_MODULE_11__["ChooseProfileThemeComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["changePasswordComponent"], _change_country_change_country_component__WEBPACK_IMPORTED_MODULE_16__["changeCountryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCalendarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrModule"].forRoot({ destroyByClick: true, duration: 5000, position: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalLogicalPosition"].BOTTOM_END }),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"].forChild(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"].forRoot(),
                _header_header_module__WEBPACK_IMPORTED_MODULE_18__["HeaderModule"],
                _liveHeader_liveHeader_module__WEBPACK_IMPORTED_MODULE_19__["liveHeaderModule"],
                element_angular__WEBPACK_IMPORTED_MODULE_21__["ElChildModules"].ElCarouselModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                angular_weather_widget__WEBPACK_IMPORTED_MODULE_23__["AngularWeatherWidgetModule"].forRoot({
                    key: OPEN_WEATHER_MAP_API_KEY,
                    name: angular_weather_widget__WEBPACK_IMPORTED_MODULE_23__["WeatherApiName"].OPEN_WEATHER_MAP,
                    baseUrl: OPEN_WEATHER_MAP_BASE_URL
                })
            ],
            entryComponents: [_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_12__["AddEventComponent"], _edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_13__["EditEventComponent"], _choose_profile_img_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_9__["ChooseProfileImgComponent"], _choose_header_img_choose_header_img_component__WEBPACK_IMPORTED_MODULE_10__["ChooseHeaderImgComponent"], _choose_profile_theme_choose_profile_theme_component__WEBPACK_IMPORTED_MODULE_11__["ChooseProfileThemeComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["changePasswordComponent"], _change_country_change_country_component__WEBPACK_IMPORTED_MODULE_16__["changeCountryComponent"]],
            providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DashboardComponent } from './dashboard.component';
// import { NbCardModule, NbListModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbCalendarModule, 
//   NbToastrModule, NbGlobalLogicalPosition, NbLayoutModule, NbActionsModule, NbSidebarModule,
//    NbDialogModule,
//    NbSpinnerModule,
//    NbDatepickerModule } from '@nebular/theme';
// import { RouterModule, Routes } from '@angular/router';
// import { CustomDayCellComponent } from './components/custom-day-cell/custom-day-cell.component';
// import { AddEventComponent } from './add-event/add-event.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { EditEventComponent } from './edit-event/edit-event.component';
// // import { HeaderModule } from '../header/header.module';
// const routes: Routes = [
//   {path: '', component: DashboardComponent}
// ]
// @NgModule({
//   declarations: [DashboardComponent, CustomDayCellComponent, AddEventComponent, EditEventComponent], 
//   imports: [
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     RouterModule.forChild(routes),
//     NbLayoutModule,
//     NbCardModule,
//     NbListModule,
//     NbInputModule,
//     NbSpinnerModule,
//     NbButtonModule,
//     NbCheckboxModule,
//     NbCalendarModule,
//     NbActionsModule,
//     NbSidebarModule,
//     NbDialogModule.forChild(),
//     NbDatepickerModule.forRoot(),
//     NbToastrModule.forRoot({ destroyByClick: true, duration: 3000, position: NbGlobalLogicalPosition.BOTTOM_END }),
//     // HeaderModule
//   ],
//   entryComponents: [AddEventComponent, EditEventComponent]
// })
// export class DashboardModule { }


/***/ }),

/***/ "./src/app/pages/dashboard/datePipe/datePipe.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/datePipe/datePipe.pipe.ts ***!
  \***********************************************************/
/*! exports provided: DateSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateSuffix", function() { return DateSuffix; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateSuffix = /** @class */ (function () {
    function DateSuffix() {
    }
    DateSuffix.prototype.transform = function (value) {
        var suffix = 'th', day = value;
        if (day === '1' || day === '21' || day === '31') {
            suffix = 'st';
        }
        else if (day === '2' || day === '22') {
            suffix = 'nd';
        }
        else if (day === '3' || day === '23') {
            suffix = 'rd';
        }
        return suffix;
    };
    DateSuffix = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'dateSuffix' })
    ], DateSuffix);
    return DateSuffix;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/edit-event/edit-event.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/edit-event/edit-event.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header class=\"d-flex justify-content-between\">\r\n    Edit Event\r\n    <i class=\"nb-trash link\" style=\"font-size: 1.5rem\" (click)=\"delete()\"></i>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"p-3\"> \r\n      <small *ngIf=\"!canEdit\" class=\"d-block text-danger mb-3\">You can't Edit this event due to the <br> event date is\r\n        passed !</small>\r\n      <input nbInput [nbDatepicker]=\"datepicker\" placeholder=\"Set date\" [(ngModel)]=\"editdate\" [disabled]=\"!canEdit\"\r\n        tabindex=\"-1\">\r\n      <nb-datepicker #datepicker [min]=\"todayDate\"></nb-datepicker>\r\n    </div>\r\n    <div class=\"p-3\">\r\n      <input type=\"text\" nbInput placeholder=\"Set event\" [(ngModel)]=\"event\" [disabled]=\"!canEdit\" tabindex=\"-1\">\r\n    </div>\r\n    <div class=\"p-3\">\r\n      <button nbButton outline status=\"primary\" size=\"xsmall\" class=\"f-w\" (click)=\"save()\"\r\n        [disabled]=\"!canEdit\">SAVE</button>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/edit-event/edit-event.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/edit-event/edit-event.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9lZGl0LWV2ZW50L2VkaXQtZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/edit-event/edit-event.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/edit-event/edit-event.component.ts ***!
  \********************************************************************/
/*! exports provided: EditEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventComponent", function() { return EditEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");



var EditEventComponent = /** @class */ (function () {
    function EditEventComponent(ref) {
        this.ref = ref;
        this.todayDate = new Date();
        this.canEdit = false;
    }
    EditEventComponent.prototype.ngOnInit = function () {
        this.editdate = new Date(this.date);
        var eventDate = new Date(this.date);
        if (eventDate.getDate() >= this.todayDate.getDate() &&
            eventDate.getMonth() >= this.todayDate.getMonth() &&
            eventDate.getFullYear() >= this.todayDate.getFullYear()) {
            this.canEdit = true;
        }
        else {
            this.canEdit = false;
        }
        console.log('Date', this.date, this.canEdit);
    };
    EditEventComponent.prototype.save = function () {
        this.ref.close({
            type: 'save',
            date: this.editdate,
            event: this.event
        });
    };
    EditEventComponent.prototype.delete = function () {
        this.ref.close({
            type: 'delete'
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], EditEventComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditEventComponent.prototype, "event", void 0);
    EditEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-event',
            template: __webpack_require__(/*! ./edit-event.component.html */ "./src/app/pages/dashboard/edit-event/edit-event.component.html"),
            styles: [__webpack_require__(/*! ./edit-event.component.scss */ "./src/app/pages/dashboard/edit-event/edit-event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogRef"]])
    ], EditEventComponent);
    return EditEventComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/learning-report/learning-report.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/learning-report/learning-report.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card-body class=\"p-0 chart-card\">\n  <div echarts [options]=\"chartOption\" class=\"chart\"></div>"

/***/ }),

/***/ "./src/app/pages/dashboard/learning-report/learning-report.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/learning-report/learning-report.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".f-h {\n  height: 100% !important;\n  min-height: 530px; }\n\n.chart {\n  height: 150px;\n  width: 100%; }\n\n@media (min-width: 768px) {\n    .chart {\n      height: 270px; } }\n\n.second-card-container {\n  height: 250px; }\n\n@media (min-width: 768px) {\n    .second-card-container {\n      height: auto; } }\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .chart {\n    height: 142px !important; } }\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .chart {\n    height: 190px !important; } }\n\n@media (min-width: 768px) and (max-width: 1023px) {\n  .chart {\n    height: 251px !important; } }\n\n@media (min-width: 637px) and (max-width: 767px) {\n  .chart {\n    height: 215px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvbGVhcm5pbmctcmVwb3J0L2xlYXJuaW5nLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHdCQUFzQjtFQUN0QixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDQyxjQUFhO0VBQ2IsWUFBVyxFQUlYOztBQzhDRztJRHBESjtNQUlFLGNBQWEsRUFFZCxFQUFBOztBQUNEO0VBQ0MsY0FBYSxFQUliOztBQ3dDRztJRDdDSjtNQUdFLGFBQVksRUFFYixFQUFBOztBQUVEO0VBRUM7SUFDQyx5QkFBd0IsRUFDeEIsRUFBQTs7QUFHRDtFQUNDO0lBQ0MseUJBQXVCLEVBQ3ZCLEVBQUE7O0FBR0g7RUFDQztJQUNDLHlCQUF1QixFQUN2QixFQUFBOztBQUVGO0VBQ0M7SUFDQyx5QkFBdUIsRUFDdkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9sZWFybmluZy1yZXBvcnQvbGVhcm5pbmctcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnMuc2Nzcyc7XG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MnO1xuXG4uZi1oIHtcbiAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNTMwcHg7XG59XG4uY2hhcnQge1xuXHRoZWlnaHQ6IDE1MHB4O1xuXHR3aWR0aDogMTAwJTtcblx0QGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuXHRcdGhlaWdodDogMjcwcHg7XG5cdH1cdFxufVxuLnNlY29uZC1jYXJkLWNvbnRhaW5lciB7XG5cdGhlaWdodDogMjUwcHg7XG5cdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cdFxufVxuXG5AbWVkaWEobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDo0ODBweCkge1xuXG5cdC5jaGFydCB7XG5cdFx0aGVpZ2h0OiAxNDJweCAhaW1wb3J0YW50O1xuXHR9XG59XG5cblx0QG1lZGlhKG1pbi13aWR0aDo0ODFweCkgYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcblx0XHQuY2hhcnQge1xuXHRcdFx0aGVpZ2h0OiAxOTBweCFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG5cbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCkge1xuXHQuY2hhcnQge1xuXHRcdGhlaWdodDogMjUxcHghaW1wb3J0YW50O1xuXHR9XG59XG5AbWVkaWEobWluLXdpZHRoOjYzN3B4KSBhbmQgKG1heC13aWR0aDo3NjdweCl7XG5cdC5jaGFydCB7XG5cdFx0aGVpZ2h0OiAyMTVweCFpbXBvcnRhbnQ7XG5cdH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/learning-report/learning-report.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/learning-report/learning-report.component.ts ***!
  \******************************************************************************/
/*! exports provided: LearningReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningReportComponent", function() { return LearningReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);



var LearningReportComponent = /** @class */ (function () {
    function LearningReportComponent() {
        var _this = this;
        this.data1 = [];
        this.data2 = [];
        this.data3 = [];
        this.data4 = [];
        this.data5 = [];
        this.makeFix = function (data, dd) {
            for (var i = 0; i < _this.data5.length; i++) {
                var _obj = dd.filter(function (x) { return x.dayName == _this.data5[i]; })[0];
                if (_obj) {
                    // let index = this.progress.course.indexOf(_obj);
                    data[i] = _obj.progress;
                }
            }
            _this.setOption(_this.data1, _this.data2, _this.data3, _this.data5, true);
        };
    }
    LearningReportComponent.prototype.ngOnInit = function () {
        this.windowWidth = window.innerWidth;
        this.data1 = [0, 0, 0, 0, 0, 0, 0];
        this.data2 = [0, 0, 0, 0, 0, 0, 0];
        this.data3 = [0, 0, 0, 0, 0, 0, 0];
        this.data5 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        //this.setOption(this.data1, this.data2, this.data3, this.data5, true);
    };
    LearningReportComponent.prototype.ngOnChanges = function () {
        //console.log("phrase equals: ", this.usefulProgress); // logs correct data, yay!
        if (this.usefulProgress) {
            this.progress = this.usefulProgress;
            this.progress.course.forEach(function (item) {
                item.progress = item.progress.toFixed(2);
            });
            this.progress.book.forEach(function (item) {
                item.progress = item.progress.toFixed(2);
            });
            this.progress.exam.forEach(function (item) {
                item.progress = item.progress.toFixed(2);
            });
            this.makeFix(this.data1, this.progress.course);
            this.makeFix(this.data2, this.progress.book);
            this.makeFix(this.data3, this.progress.exam);
        }
    };
    Object.defineProperty(LearningReportComponent.prototype, "isXsScreen", {
        get: function () {
            return this.windowWidth < 768;
        },
        enumerable: true,
        configurable: true
    });
    LearningReportComponent.prototype.onResize = function (event) {
        this.windowWidth = window.innerWidth;
    };
    LearningReportComponent.prototype.setOption = function (data1, data2, data3, data5, animation) {
        this.chartOption = {
            animation: animation,
            legend: {
                show: true,
                z: 500,
                data: [{
                        // compulsorily set icon as a circle
                        icon: 'circle',
                        // set up the text in red
                        textStyle: {
                            color: 'red'
                        }
                    }]
            },
            grid: {
                top: 20,
                bottom: 50,
                left: 40,
                right: 20
            },
            tooltip: {
                show: true,
                trigger: "axis",
                padding: 5,
                position: function (pos, params, dom, rect, size) {
                    if (window.innerWidth < 768 && pos[0] > (size.viewSize[0] / 7) * 5) {
                        pos[0] = (size.viewSize[0] / 7) * 5;
                    }
                    return window.innerWidth < 768 ? [pos[0], '2%'] : [pos[0], '30%'];
                },
                formatter: '{b}<br /> <div style=\"width: 8px;  height: 8px; background-color: #68da9b; border-radius: 50%; margin-bottom: 1px; margin-right: 2px; display: inline-block; line-height: 12px\"></div> {a0}: {c0}%<br /> <div style=\"width: 8px; height: 8px; background-color: #9e74fd; border-radius: 50%; margin-bottom: 1px; margin-right: 2px; display: inline-block; line-height: 12px\"></div> {a1}: {c1}% <br/> <div style=\"width: 8px; height: 8px; background-color: #f7ec74; border-radius: 50%; margin-right: 2px; margin-bottom: 1px; display: inline-block; line-height: 12px;\"></div> {a2}: {c2}% '
            },
            xAxis: [
                {
                    type: "category",
                    show: true,
                    z: 100,
                    boundaryGap: false,
                    scale: true,
                    splitNumber: 1,
                    minInterval: 7,
                    //		  interval: 1,
                    axisPointer: {
                        z: -1,
                        show: true,
                        lineStyle: {
                            color: "#5350ad",
                            type: "solid",
                            width: 2,
                        },
                        label: {
                            show: true,
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#a0a1df",
                            width: 2,
                        },
                    },
                    axisLabel: {
                        color: "#fff",
                        show: this.isXsScreen ? true : false,
                    },
                    data: data5,
                }
            ],
            yAxis: [
                {
                    type: "value",
                    z: 500,
                    show: false,
                    splitNumber: 14,
                    min: 0,
                    max: 100,
                    splitLine: {
                        show: false,
                        lineStyle: {}
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#a0a1df",
                            width: 5
                        },
                    },
                    axisPointer: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: "#fff",
                        formatter: function (v) { return v / 1000000000 + "B"; }
                    },
                    position: "left"
                },
                {
                    type: "value",
                    splitNumber: 6,
                    min: 0,
                    max: 100,
                    z: 300,
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: "dashed"
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#a0a1df",
                            width: 2,
                        }
                    },
                    axisPointer: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: "#fff",
                        formatter: function (v) { return v; }
                    },
                    position: "left"
                }
            ],
            series: [
                {
                    type: 'line',
                    stack: true,
                    id: "one",
                    name: "Course",
                    smooth: .3,
                    itemStyle: {
                        normal: {
                            opacity: 0,
                        },
                        emphasis: {
                            color: '#68da9b',
                            borderColor: "#68da9b",
                            borderWidth: 3,
                            opacity: 1,
                        },
                    },
                    areaStyle: {
                        color: '#367368',
                        opacity: 0.7,
                    },
                    symbolSize: 9,
                    lineStyle: {
                        color: new echarts__WEBPACK_IMPORTED_MODULE_2__["graphic"].LinearGradient(0, 1, 1, 0, [
                            {
                                offset: 0,
                                color: '#68da9b'
                            },
                            {
                                offset: 1,
                                color: '#68da9b'
                            }
                        ]),
                        width: 5,
                        curveness: 1,
                        opacity: 1,
                    },
                    data: data1,
                },
                {
                    type: 'line',
                    id: "two",
                    name: "Library",
                    smooth: .3,
                    itemStyle: {
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            color: '#9e74fd',
                            borderColor: "#9e74fd",
                            borderWidth: 3,
                            opacity: 1,
                        },
                    },
                    areaStyle: {
                        color: '#7a81d2',
                        opacity: .7,
                    },
                    symbolSize: 9,
                    yAxisIndex: 1,
                    lineStyle: {
                        color: new echarts__WEBPACK_IMPORTED_MODULE_2__["graphic"].LinearGradient(0, 1, 1, 0, [
                            {
                                offset: 0,
                                color: '#9e74fd'
                            },
                            {
                                offset: 1,
                                color: '#9e74fd'
                            }
                        ]),
                        width: 5,
                        curveness: 1,
                    },
                    data: data2,
                },
                {
                    type: 'line',
                    id: "three",
                    name: "Exams",
                    smooth: .3,
                    itemStyle: {
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            color: '#f7ec74',
                            borderColor: "#f7ec74",
                            borderWidth: 3,
                            opacity: 1,
                        },
                    },
                    areaStyle: {
                        color: '#f6f0aa',
                        opacity: .7,
                    },
                    symbolSize: 9,
                    yAxisIndex: 1,
                    lineStyle: {
                        color: new echarts__WEBPACK_IMPORTED_MODULE_2__["graphic"].LinearGradient(0, 1, 1, 0, [
                            {
                                offset: 0,
                                color: '#f7ec74'
                            },
                            {
                                offset: 1,
                                color: '#f7ec74'
                            }
                        ]),
                        width: 5,
                        curveness: 1,
                        shadowColor: "#f6ed8e",
                        shadowBlur: 10,
                    },
                    data: data3,
                }
            ]
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LearningReportComponent.prototype, "usefulProgress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LearningReportComponent.prototype, "onResize", null);
    LearningReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-learningReport',
            template: __webpack_require__(/*! ./learning-report.component.html */ "./src/app/pages/dashboard/learning-report/learning-report.component.html"),
            styles: [__webpack_require__(/*! ./learning-report.component.scss */ "./src/app/pages/dashboard/learning-report/learning-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LearningReportComponent);
    return LearningReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/livepage/livepage.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/livepage/livepage.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout [ngClass]=\"{'not-live-background': !vimeoBroadcastInfo.isLive, 'live-background': vimeoBroadcastInfo.isLive}\">\n  <nb-layout-header class=\"flex flexCenter platformHeader\">\n    <app-header class=\"live-header\"></app-header>\n  </nb-layout-header>\n\n\n  <nb-layout-column class=\"liveVideoPage p-0\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\">\n    <div class=\"flex col-xl-8 py-0 px-0 px-md-3\" style=\"margin: 0 auto;\">\n      <nb-card class=\"f-w live-card\" *ngIf=\"vimeoBroadcastInfo.isLive\">\n        <nb-card-body class=\"p-0 p-md-3 videoContainerWidth\">\n          <div style=\"padding:56.25% 0 0 0;position:relative;\">\n            <iframe [src]=\"vimeoBroadcastInfo.url\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" frameborder=\"0\"\n              allow=\"autoplay; fullscreen\" allowfullscreen></iframe>\n          </div>\n          <!--<script src=\"https://player.vimeo.com/api/player.js\"></script>-->\n\n          <!--mobile header-->\n\n          <!--end mobile header-->\n        </nb-card-body>\n      </nb-card>\n    </div>\n  </nb-layout-column>\n\n  <nb-layout-footer class=\"footer-main platformHeader\">\n    &copy; 2021 Powered by <a target=\"_blank\" class=\"wzrdgroup-link\" href=\"http://wzrdgroup.com/\">WZRD Group</a>\n  </nb-layout-footer>\n</nb-layout>"

/***/ }),

/***/ "./src/app/pages/dashboard/livepage/livepage.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/livepage/livepage.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host ::ng-deep .live-header .flexCenter {\n  background: rgba(0, 0, 0, 0.3) !important; }\n.nb-theme-default :host .flexCenter {\n  background: rgba(0, 0, 0, 0.3) !important; }\n.nb-theme-default :host ::ng-deep nb-sidebar {\n  background: transparent !important;\n  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.6) !important; }\n.nb-theme-default :host ::ng-deep nb-sidebar .main-container {\n  background-color: #292929 !important; }\n.nb-theme-default :host ::ng-deep nb-list-item {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-default :host ::ng-deep .dropdown-content {\n  background: rgba(0, 0, 0, 0.3) !important;\n  border: 2px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-default :host ::ng-deep .logo-dashboard {\n  background: url(https://d308fakbqebk7c.cloudfront.net/dashboard_images/wzrd_live.png) !important;\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important; }\n.nb-theme-default :host ::ng-deep .dropdown-content .link {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-default :host ::ng-deep nb-actions nb-action {\n  border-left: 1px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-default :host ::ng-deep .dropdown-arrow-up {\n  border-bottom: 10px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-default :host .live-header ::ng-deep .flexCenter {\n  background: rgba(0, 0, 0, 0.3) !important; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host ::ng-deep .live-header .flexCenter {\n  background: rgba(0, 0, 0, 0.3) !important; }\n.nb-theme-cosmic :host .flexCenter {\n  background: rgba(0, 0, 0, 0.3) !important; }\n.nb-theme-cosmic :host ::ng-deep nb-sidebar {\n  background: transparent !important;\n  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.6) !important; }\n.nb-theme-cosmic :host ::ng-deep nb-sidebar .main-container {\n  background-color: #292929 !important; }\n.nb-theme-cosmic :host ::ng-deep nb-list-item {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-cosmic :host ::ng-deep .dropdown-content {\n  background: rgba(0, 0, 0, 0.3) !important;\n  border: 2px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-cosmic :host ::ng-deep .logo-dashboard {\n  background: url(https://d308fakbqebk7c.cloudfront.net/dashboard_images/wzrd_live.png) !important;\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important; }\n.nb-theme-cosmic :host ::ng-deep .dropdown-content .link {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-cosmic :host ::ng-deep nb-actions nb-action {\n  border-left: 1px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-cosmic :host ::ng-deep .dropdown-arrow-up {\n  border-bottom: 10px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-cosmic :host .live-header ::ng-deep .flexCenter {\n  background: rgba(0, 0, 0, 0.3) !important; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host ::ng-deep .live-header .flexCenter {\n  background: rgba(0, 0, 0, 0.3) !important; }\n.nb-theme-corporate :host .flexCenter {\n  background: rgba(0, 0, 0, 0.3) !important; }\n.nb-theme-corporate :host ::ng-deep nb-sidebar {\n  background: transparent !important;\n  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.6) !important; }\n.nb-theme-corporate :host ::ng-deep nb-sidebar .main-container {\n  background-color: #292929 !important; }\n.nb-theme-corporate :host ::ng-deep nb-list-item {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-corporate :host ::ng-deep .dropdown-content {\n  background: rgba(0, 0, 0, 0.3) !important;\n  border: 2px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-corporate :host ::ng-deep .logo-dashboard {\n  background: url(https://d308fakbqebk7c.cloudfront.net/dashboard_images/wzrd_live.png) !important;\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important; }\n.nb-theme-corporate :host ::ng-deep .dropdown-content .link {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-corporate :host ::ng-deep nb-actions nb-action {\n  border-left: 1px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-corporate :host ::ng-deep .dropdown-arrow-up {\n  border-bottom: 10px solid rgba(255, 255, 255, 0.5) !important; }\n.nb-theme-corporate :host .live-header ::ng-deep .flexCenter {\n  background: rgba(0, 0, 0, 0.3) !important; }\nsection:nth-child(1) > div {\n  width: 100%; }\nsection:nth-child(1) > div > div {\n  width: 90px;\n  height: 90px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: lightgoldenrodyellow;\n  padding: 16px; }\nsection:nth-child(1) > div > div img {\n    width: 80%; }\n.platformHeader {\n  background: rgba(0, 0, 0, 0.3); }\nsection:nth-child(1) > span {\n  height: 90px;\n  width: 4px;\n  margin: 8px; }\n@media (min-width: 756px) {\n  section:nth-child(1) > div {\n    width: 20%; }\n  section:nth-child(1) > span {\n    height: 4px;\n    width: 20%;\n    margin: 8px; } }\nsection:nth-of-type(1) {\n  margin: 32px auto; }\nsection:nth-of-type(2) {\n  margin: 32px auto; }\n.refer-page-headers {\n  font-size: 1.65rem;\n  font-weight: 600; }\n.refer-page-subheaders {\n  font-size: 1rem;\n  font-weight: 500; }\n.border-two {\n  border: 2px dashed #FF0000; }\n.border-five:before {\n  content: \"\";\n  position: absolute;\n  border: 5px dashed #FF0000;\n  top: -3px;\n  bottom: -3px;\n  left: -3px;\n  right: -3px; }\n.border-ten:before {\n  content: \"\";\n  position: absolute;\n  border: 10px dashed #FF0000;\n  top: -8px;\n  bottom: -8px;\n  left: -8px;\n  right: -8px; }\n.border-odd:before {\n  left: 0;\n  right: 0;\n  border-radius: 60px; }\n.border-main {\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  padding: 10px;\n  margin-bottom: 20px; }\n.relative-spacer {\n  position: relative; }\n.green-spacer {\n  position: absolute;\n  width: 25% !important;\n  left: 17.8%;\n  top: 17%; }\n.green-spacer-two {\n  position: absolute;\n  width: 25% !important;\n  left: 57.25%;\n  top: 17%; }\n.live-status {\n  height: 10px;\n  width: 10px;\n  line-height: 10px;\n  content: \"\";\n  background-color: #f10000;\n  border-radius: 50%;\n  margin-right: 5px;\n  display: inline-block;\n  margin-bottom: 2px;\n  z-index: 999999; }\n@media (min-width: 768px) {\n    .live-status {\n      height: 20px;\n      width: 20px;\n      line-height: 20px; } }\n.liveStatusContainer {\n  width: 100%;\n  color: #fff;\n  margin-top: 30px; }\n.webinarImg {\n  width: 100%; }\n@-webkit-keyframes status {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes status {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.live-status {\n  -webkit-animation: status 2s infinite;\n  /* Safari 4+ */\n  /* Fx 5+ */\n  /* Opera 12+ */\n  animation: status 2s infinite;\n  /* IE 10+, Fx 29+ */ }\n.flex-vertical {\n  -webkit-box-pack: center;\n          justify-content: center; }\n.statusTextinner {\n  display: inline-block;\n  font-size: 14px;\n  margin-left: .25rem;\n  z-index: 9999999; }\n@media (min-width: 768px) {\n    .statusTextinner {\n      font-size: 2rem; } }\nvideo {\n  pointer-events: none; }\nvideo::-webkit-media-controls-start-playback-button {\n  display: none; }\nvideo::-webkit-media-controls {\n  display: none; }\n/* Could Use thise as well for Individual Controls */\n.webinarVid {\n  position: relative; }\n.liveStatusAbs {\n  position: absolute;\n  left: 35px;\n  top: 75px;\n  color: white; }\n.liveVideoContainer {\n  background: #eee;\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n  position: relative; }\nvideo {\n  box-sizing: border-box;\n  height: 56.25vw;\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  width: 177.77777778vh; }\n.flexCenter {\n  z-index: 99999; }\n.liveContainer {\n  display: block;\n  position: relative;\n  width: 80%;\n  background: #000;\n  margin: auto auto; }\n.hideDesktop {\n  display: block; }\n@media (min-width: 768px) {\n    .hideDesktop {\n      display: none; } }\n.showDesktop {\n  display: none; }\n@media (min-width: 768px) {\n    .showDesktop {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 100%; } }\n::ng-deep .not-live-background .scrollable-container .layout {\n  background: url(\"https://d308fakbqebk7c.cloudfront.net/static_gif.f79b9771f6435acc3abd.gif\") !important;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n::ng-deep .live-background .scrollable-container .layout {\n  background: url(\"https://d308fakbqebk7c.cloudfront.net/liveBackground.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n.liveVideoPage {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center; }\n::ng-deep .platformHeader {\n  background: rgba(0, 0, 0, 0.3); }\n::ng-deep .platformHeader nav {\n    background: none !important;\n    box-shadow: none !important; }\n.live-card {\n  background: none;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9fdGhlbWluZy5zY3NzIiwiL1VzZXJzL29zY2FyL0Rvd25sb2Fkcy9Gcm9udGVuZF9WMy9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX21peGlucy5zY3NzIiwiL1VzZXJzL29zY2FyL0Rvd25sb2Fkcy9Gcm9udGVuZF9WMy9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX2Z1bmN0aW9ucy5zY3NzIiwiL1VzZXJzL29zY2FyL0Rvd25sb2Fkcy9Gcm9udGVuZF9WMy9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fZGVmYXVsdC5zY3NzIiwiL1VzZXJzL29zY2FyL0Rvd25sb2Fkcy9Gcm9udGVuZF9WMy9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fY29zbWljLnNjc3MiLCIvVXNlcnMvb3NjYXIvRG93bmxvYWRzL0Zyb250ZW5kX1YzL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3Jwb3JhdGUuc2NzcyIsIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvbGl2ZXBhZ2UvbGl2ZXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvb3NjYXIvRG93bmxvYWRzL0Zyb250ZW5kX1YzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdIOztHQUVHO0FDVEg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FDdlRGOzs7O0dBSUc7QUNKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBR3ZURjs7OztHQUlHO0FGSkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRXZURjs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBSXZURjs7OztHQUlHO0FISkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRXZURjs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRHJNRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBTTNITDtFQUNDLDBDQUF5QyxFQUN4QztBQUNEO0VBQ0UsMENBQXlDLEVBQzFDO0FBQ0Y7RUFDRyxtQ0FBa0M7RUFDcEMsdURBQXNELEVBQ3REO0FBQ0Q7RUFDQyxxQ0FBb0MsRUFDcEM7QUFDRDtFQUNDLDZEQUE0RCxFQUM1RDtBQUNEO0VBQ0csMENBQXlDO0VBQzNDLHNEQUFxRCxFQUNyRDtBQUNEO0VBQ0MsaUdBQWdHO0VBQ2hHLG9DQUFtQztFQUNoQyx3Q0FBdUM7RUFDdkMsdUNBQXNDLEVBQ3pDO0FBQ0Q7RUFDQyw2REFBNEQsRUFDNUQ7QUFDRDtFQUNDLDJEQUEwRCxFQUMxRDtBQUNEO0VBQ0MsOERBQTZELEVBQzVEO0FBQ0Q7RUFDQSwwQ0FBeUMsRUFDekM7QU5tRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QU0zSEw7RUFDQywwQ0FBeUMsRUFDeEM7QUFDRDtFQUNFLDBDQUF5QyxFQUMxQztBQUNGO0VBQ0csbUNBQWtDO0VBQ3BDLHVEQUFzRCxFQUN0RDtBQUNEO0VBQ0MscUNBQW9DLEVBQ3BDO0FBQ0Q7RUFDQyw2REFBNEQsRUFDNUQ7QUFDRDtFQUNHLDBDQUF5QztFQUMzQyxzREFBcUQsRUFDckQ7QUFDRDtFQUNDLGlHQUFnRztFQUNoRyxvQ0FBbUM7RUFDaEMsd0NBQXVDO0VBQ3ZDLHVDQUFzQyxFQUN6QztBQUNEO0VBQ0MsNkRBQTRELEVBQzVEO0FBQ0Q7RUFDQywyREFBMEQsRUFDMUQ7QUFDRDtFQUNDLDhEQUE2RCxFQUM1RDtBQUNEO0VBQ0EsMENBQXlDLEVBQ3pDO0FObUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbUJFO0FNM0hMO0VBQ0MsMENBQXlDLEVBQ3hDO0FBQ0Q7RUFDRSwwQ0FBeUMsRUFDMUM7QUFDRjtFQUNHLG1DQUFrQztFQUNwQyx1REFBc0QsRUFDdEQ7QUFDRDtFQUNDLHFDQUFvQyxFQUNwQztBQUNEO0VBQ0MsNkRBQTRELEVBQzVEO0FBQ0Q7RUFDRywwQ0FBeUM7RUFDM0Msc0RBQXFELEVBQ3JEO0FBQ0Q7RUFDQyxpR0FBZ0c7RUFDaEcsb0NBQW1DO0VBQ2hDLHdDQUF1QztFQUN2Qyx1Q0FBc0MsRUFDekM7QUFDRDtFQUNDLDZEQUE0RCxFQUM1RDtBQUNEO0VBQ0MsMkRBQTBELEVBQzFEO0FBQ0Q7RUFDQyw4REFBNkQsRUFDNUQ7QUFDRDtFQUNBLDBDQUF5QyxFQUN6QztBQUdGO0VBQ0UsWUFBVyxFQUNaO0FBRUQ7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsaUNBQWdDO0VBQ2hDLGNBQWEsRUFLZDtBQVhEO0lBU0ksV0FBVSxFQUNYO0FBR0g7RUFDRSwrQkFBNkIsRUFDOUI7QUFFRDtFQUNFLGFBQVk7RUFDWixXQUFVO0VBQ1YsWUFBVyxFQUNaO0FBRUQ7RUFDRTtJQUNFLFdBQVUsRUFDWDtFQUVEO0lBQ0UsWUFBVztJQUNYLFdBQVU7SUFDVixZQUFXLEVBQ1osRUFBQTtBQUdIO0VBQ0Usa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSwyQkFDRixFQUFDO0FBRUQ7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLDJCQUEwQjtFQUMxQixVQUFTO0VBQ1QsYUFBWTtFQUNaLFdBQVU7RUFDVixZQUFXLEVBQ1o7QUFFRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsNEJBQTJCO0VBQzNCLFVBQVM7RUFDVCxhQUFZO0VBQ1osV0FBVTtFQUNWLFlBQVcsRUFDWjtBQUVEO0VBQ0UsUUFBTztFQUNQLFNBQVE7RUFDUixvQkFDRixFQUFDO0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBR2xCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCO0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsWUFBVztFQUNYLFNBQVEsRUFDVDtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixhQUFZO0VBQ1osU0FBUSxFQUNUO0FBRUQ7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixnQkFBZSxFQU9oQjtBQzFIRztJRHlHSjtNQWFJLGFBQVk7TUFDWixZQUFXO01BQ1gsa0JBQWlCLEVBRXBCLEVBQUE7QUFFRDtFQUNFLFlBQVc7RUFDWCxZQUFXO0VBQ1gsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSxZQUFXLEVBQ1o7QUFFRDtFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBR1o7SUFDRSxXQUFVLEVBQUE7RUFHWjtJQUNFLFdBQVUsRUFBQSxFQUFBO0FBZ0NkO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFHWjtJQUNFLFdBQVUsRUFBQTtFQUdaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7QUFJZDtFQUNFLHNDQUFxQztFQUNyQyxlQUFlO0VBRWYsV0FBVztFQUVYLGVBQWU7RUFDZiw4QkFBNkI7RUFDN0Isb0JBQW9CLEVBQ3JCO0FBRUQ7RUFDRSx5QkFBdUI7VUFBdkIsd0JBQXVCLEVBQ3hCO0FBRUQ7RUFDRSxzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBS2pCO0FDdE5HO0lENk1KO01BT0ksZ0JBQWUsRUFFbEIsRUFBQTtBQUVEO0VBQ0UscUJBQW9CLEVBQ3JCO0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7QUFFRDtFQUNFLGNBQWEsRUFDZDtBQUVELHFEQUFxRDtBQVdyRDtFQUNFLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixVQUFTO0VBQ1QsYUFBWSxFQUNiO0FBSUQ7RUFDRSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixXQUFVO0VBQ1YsbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSx1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YseUNBQWdDO1VBQWhDLGlDQUFnQztFQUNoQyxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLHNCQUFxQixFQUN0QjtBQUVEO0VBQ0UsZUFBYyxFQUNmO0FBRUQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSxlQUFjLEVBS2Y7QUNsU0c7SUQ0Uko7TUFJSSxjQUFhLEVBRWhCLEVBQUE7QUFFRDtFQUNFLGNBQWEsRUFPZDtBQzVTRztJRG9TSjtNQUlJLHFCQUFhO01BQWIsY0FBYTtNQUNiLDBCQUFtQjtjQUFuQixvQkFBbUI7TUFDbkIsWUFBVyxFQUVkLEVBQUE7QUFFRDtFQUdNLHdHQUF1RztFQUN2Ryw2QkFBNEI7RUFDNUIsdUJBQXNCO0VBQ3RCLDRCQUEyQixFQUM1QjtBQUlMO0VBR00sNEVBQTJFO0VBQzNFLDZCQUE0QjtFQUM1Qix1QkFBc0I7RUFDdEIsNEJBQTJCLEVBQzVCO0FBSUw7RUFDRSxxQkFBYTtFQUFiLGNBQWE7RUFDYiw2QkFBc0I7RUFBdEIsOEJBQXNCO1VBQXRCLHVCQUFzQjtFQUN0Qix5QkFBdUI7VUFBdkIsd0JBQXVCLEVBQ3hCO0FBRUQ7RUFDRSwrQkFBMEIsRUFLM0I7QUFORDtJQUdJLDRCQUEyQjtJQUMzQiw0QkFBMkIsRUFDNUI7QUFHSDtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvbGl2ZXBhZ2UvbGl2ZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cblxuLyoqXG4gKiBUaGlzIGlzIGEgc3RhcnRpbmcgcG9pbnQgd2hlcmUgd2UgZGVjbGFyZSB0aGUgbWFwcyBvZiB0aGVtZXMgYW5kIGdsb2JhbGx5IGF2YWlsYWJsZSBmdW5jdGlvbnMvbWl4aW5zXG4gKi9cblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnY29yZS9icmVha2luZy1ub3RpY2UnO1xuXG4kbmItZW5hYmxlZC10aGVtZXM6ICgpICFnbG9iYWw7XG4kbmItZW5hYmxlLWNzcy12YXJpYWJsZXM6IGZhbHNlICFnbG9iYWw7XG5cbiRuYi10aGVtZXM6ICgpICFnbG9iYWw7XG4kbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQ6ICgpICFnbG9iYWw7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGZ1bmN0aW9uIG5iLXRoZW1lKCRrZXkpIHtcbiAgQHJldHVybiBtYXAtZ2V0KCR0aGVtZSwgJGtleSk7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpIHtcbiAgQGlmICh0eXBlLW9mKCR2YWx1ZSkgPT0gJ3N0cmluZycpIHtcbiAgICAkdG1wOiBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKTtcblxuICAgIEBpZiAoJHRtcCAhPSBudWxsKSB7XG4gICAgICBAcmV0dXJuIG5iLWdldC12YWx1ZSgkdGhlbWUsICR2YWx1ZSwgJHRtcCk7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBtYXAtZ2V0KCR0aGVtZSwgJGtleSk7XG59XG5cbkBmdW5jdGlvbiBjb252ZXJ0LXRvLWNzcy12YXJpYWJsZXMoJHZhcmlhYmxlcykge1xuICAkcmVzdWx0OiAoKTtcbiAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJpYWJsZXMge1xuICAgICRyZXN1bHQ6IG1hcC1zZXQoJHJlc3VsdCwgJHZhciwgJy0tdmFyKCN7JHZhcn0pJyk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbkBmdW5jdGlvbiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSkge1xuICAkdGhlbWU6ICR0aGVtZSAhZ2xvYmFsO1xuICAkdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgQGlmICgkbmItZW5hYmxlLWNzcy12YXJpYWJsZXMpIHtcbiAgICAkdGhlbWU6IGNvbnZlcnQtdG8tY3NzLXZhcmlhYmxlcygkdGhlbWUpICFnbG9iYWw7XG4gIH1cbiAgQHJldHVybiAkdGhlbWU7XG59XG5cbkBmdW5jdGlvbiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsICRuYW1lLCAkZGVmYXVsdDogbnVsbCkge1xuXG4gICR0aGVtZS1kYXRhOiAoKTtcblxuXG4gIEBpZiAoJGRlZmF1bHQgIT0gbnVsbCkge1xuXG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UobWFwLWdldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRkZWZhdWx0KSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkLCAkbmFtZSwgJHRoZW1lKSAhZ2xvYmFsO1xuXG4gICAgJHRoZW1lLWRhdGE6IG1hcC1zZXQoJHRoZW1lLWRhdGEsIGRhdGEsICR0aGVtZSk7XG4gICAgJG5iLXRoZW1lcy1leHBvcnQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1leHBvcnQsICRuYW1lLCBtYXAtc2V0KCR0aGVtZS1kYXRhLCBwYXJlbnQsICRkZWZhdWx0KSkgIWdsb2JhbDtcblxuICB9IEBlbHNlIHtcbiAgICAkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkLCAkbmFtZSwgJHRoZW1lKSAhZ2xvYmFsO1xuXG4gICAgJHRoZW1lLWRhdGE6IG1hcC1zZXQoJHRoZW1lLWRhdGEsIGRhdGEsICR0aGVtZSk7XG4gICAgJG5iLXRoZW1lcy1leHBvcnQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1leHBvcnQsICRuYW1lLCBtYXAtc2V0KCR0aGVtZS1kYXRhLCBwYXJlbnQsIG51bGwpKSAhZ2xvYmFsO1xuICB9XG5cbiAgJHRoZW1lLXBhcnNlZDogKCk7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGhlbWUge1xuICAgICR0aGVtZS1wYXJzZWQ6IG1hcC1zZXQoJHRoZW1lLXBhcnNlZCwgJGtleSwgbmItZ2V0LXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSk7XG4gIH1cblxuICAvLyBlbmFibGUgcmlnaHQgYXdheSB3aGVuIGluc3RhbGxlZFxuICAkdGhlbWUtcGFyc2VkOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLXBhcnNlZCwgJG5hbWUpO1xuICBAcmV0dXJuIG1hcC1zZXQoJG5iLXRoZW1lcywgJG5hbWUsICR0aGVtZS1wYXJzZWQpO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuICAkdGhlbWVzLXRvLWluc3RhbGw6ICgpO1xuXG4gIEBpZiAobGVuZ3RoKCRuYi1lbmFibGVkLXRoZW1lcykgPiAwKSB7XG4gICAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gJG5iLWVuYWJsZWQtdGhlbWVzIHtcbiAgICAgICR0aGVtZXMtdG8taW5zdGFsbDogbWFwLXNldCgkdGhlbWVzLXRvLWluc3RhbGwsICR0aGVtZS1uYW1lLCBtYXAtZ2V0KCRuYi10aGVtZXMsICR0aGVtZS1uYW1lKSk7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdGhlbWVzLXRvLWluc3RhbGw6ICRuYi10aGVtZXM7XG4gIH1cblxuICBAcmV0dXJuICR0aGVtZXMtdG8taW5zdGFsbDtcbn1cblxuQG1peGluIGluc3RhbGwtY3NzLXZhcmlhYmxlcygkdGhlbWUtbmFtZSwgJHZhcmlhYmxlcykge1xuICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdmFyaWFibGVzIHtcbiAgICAgIC0tI3skdmFyfTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUT0RPOiB3ZSBoaWRlIDpob3N0IGluc2lkZSBvZiBpdCB3aGljaCBpcyBub3Qgb2J2aW91c1xuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuXG4gICR0aGVtZXMtdG8taW5zdGFsbDogZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUsICR0aGVtZSBpbiAkdGhlbWVzLXRvLWluc3RhbGwge1xuICAgIC8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSA6aG9zdCB7XG4gICAgICAkdGhlbWU6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItZm9yLXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJHRoZW1lLW5hbWUgPT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBBZGQgY29udGVudCBmb3IgdGhlbWUgaW50byBhIGxpc3Qgb2YgdGhlbWVzXG5AbWl4aW4gbmItZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJHRoZW1lLW5hbWUgIT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBBZGQgY29udGVudCBleGNlcHQgZm9yIHRoZW1lIGludG8gYSBsaXN0IG9mIHRoZW1lc1xuQG1peGluIG5iLWV4Y2VwdC1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIFRPRE86IGFub3RoZXIgbWl4aW5nIGZvciB0aGUgYWxtb3N0IHNhbWUgdGhpbmdcbkBtaXhpbiBuYi1pbnN0YWxsLXJvb3QtY29tcG9uZW50KCkge1xuICBAd2FybiAnYG5iLWluc3RhbGwtcm9vdC1jb21wb25lbnRgIGlzIGRlcHJpY2F0ZWQsIHJlcGxhY2Ugd2l0aCBgbmItaW5zdGFsbC1jb21wb25lbnRgLCBhcyBgYm9keWAgaXMgcm9vdCBlbGVtZW50IG5vdyc7XG5cbiAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsKCkge1xuICAkdGhlbWVzLXRvLWluc3RhbGw6IGdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJHRoZW1lcy10by1pbnN0YWxsIHtcbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgJHRoZW1lOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSk7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cblxuICAkdGVtcDogbmItYnJlYWtpbmctbm90aWNlLXNob3coJHRoZW1lKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNjcm9sbGJhcnMoJGZnLCAkYmcsICRzaXplLCAkYm9yZGVyLXJhZGl1czogJHNpemUgLyAyKSB7XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogbmItdGhlbWUoc2Nyb2xsYmFyLWNpcmNsZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogbmItdGhlbWUoc2Nyb2xsYmFyLWJhY2tncm91bmQpO1xuICB9XG5cbiAgLy8gVE9ETzogcmVtb3ZlXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZnO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiZztcbn1cblxuQG1peGluIG5iLXJhZGlhbC1ncmFkaWVudCgkY29sb3ItMSwgJGNvbG9yLTIsICRjb2xvci0zKSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci0yOyAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoYm90dG9tLCBlbGxpcHNlIGNvdmVyLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGJvdHRvbSwgZWxsaXBzZSBjb3ZlciwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20sICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGZpbHRlcjogcHJvZ2lkOmR4aW1hZ2V0cmFuc2Zvcm0ubWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyRjb2xvci0xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ29sb3JzdHI9JyRjb2xvci0zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhZGllbnRUeXBlPTEpOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG59XG5cbkBtaXhpbiBuYi1yaWdodC1ncmFkaWVudCgkbGVmdC1jb2xvciwgJHJpZ2h0LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGxlZnQtY29sb3IsICRyaWdodC1jb2xvcik7XG59XG5cbkBtaXhpbiBuYi1oZWFkaW5ncygkZnJvbTogMSwgJHRvOiA2KSB7XG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICR0byB7XG4gICAgaCN7JGl9IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlLFxuICAmOmhvdmVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyLWhvcml6b250YWwtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBsZWZ0OiA1MCU7XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRodW1iKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItdGh1bWInXG4gICAgJzo6LW1vei1yYW5nZS10aHVtYidcbiAgICAnOjotbXMtdGh1bWInXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRyYWNrKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2snXG4gICAgJzo6LW1vei1yYW5nZS10cmFjaydcbiAgICAnOjotbXMtdHJhY2snXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKTtcbiAgfVxuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkcGxhY2Vob2xkZXItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSk7XG4gICAgfVxuXG4gICAgJjpmb2N1cyN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlci1mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXItZm9jdXMoKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uKCRhbmltYXRlLi4uKSB7XG4gICRtYXg6IGxlbmd0aCgkYW5pbWF0ZSk7XG4gICRhbmltYXRpb25zOiAnJztcblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgge1xuICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgbnRoKCRhbmltYXRlLCAkaSl9O1xuXG4gICAgQGlmICRpIDwgJG1heCB7XG4gICAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArICcsICd9O1xuICAgIH1cbiAgfVxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbnM7XG4gIC1tb3otYW5pbWF0aW9uOiAgICAkYW5pbWF0aW9ucztcbiAgLW8tYW5pbWF0aW9uOiAgICAgICRhbmltYXRpb25zO1xuICBhbmltYXRpb246ICAgICAgICAgJGFuaW1hdGlvbnM7XG59XG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbk5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbkBtaXhpbiBidG4tcHVsc2UoJG5hbWUsICRjb2xvcikge1xuICAmLmJ0bi1wdWxzZSB7XG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uKGJ0bi0jeyRuYW1lfS1wdWxzZSAxLjVzIGluZmluaXRlKTtcbiAgfVxuXG4gIEBpbmNsdWRlIGtleWZyYW1lcyhidG4tI3skbmFtZX0tcHVsc2UpIHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFyZW0gMCAkY29sb3I7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gIH1cbn1cblxuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuXG5AbWl4aW4gX3ByZXBlbmQtd2l0aC1zZWxlY3Rvcigkc2VsZWN0b3IsICRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgI3skc2VsZWN0b3J9ICYge1xuICAgIEBpZiAkcHJvcCAhPSBudWxsIHtcbiAgICAgICN7JHByb3B9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWx0cigkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9bHRyXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItcnRsKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1ydGxdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vLy8gU2xpZ2h0bHkgbGlnaHRlbiBhIGNvbG9yXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byB0aW50XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHRpbnQoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xuICBAcmV0dXJuIG1peCh3aGl0ZSwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XG59XG5cbi8vLyBTbGlnaHRseSBkYXJrZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gc2hhZGVcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXG4vLy8gQHJldHVybiB7Q29sb3J9XG5AZnVuY3Rpb24gc2hhZGUoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xuICBAcmV0dXJuIG1peChibGFjaywgJGNvbG9yLCAkcGVyY2VudGFnZSk7XG59XG5cbkBmdW5jdGlvbiBtYXAtc2V0KCRtYXAsICRrZXksICR2YWx1ZTogbnVsbCkge1xuICAkbmV3OiAoJGtleTogJHZhbHVlKTtcbiAgQHJldHVybiBtYXAtbWVyZ2UoJG1hcCwgJG5ldyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcblxuJHRoZW1lOiAoXG5cbiAgXG5cbiAgY29sb3ItYmctMjogIzNjMzc4MCxcbiAgY29sb3ItYmctMzogIzMzMmU3MyxcbiAgICBcbiAgXG4gIGNvbG9yLUNhbC1UaXRsZTogIzQwZmZhOSxcbiAgXG4gIGNhbGVuZGFyUm93OiAjNTg1OThlLFxuICBcbiAgY29sb3ItZmctdGV4dC0yOiAjM2IzNjdmLFxuICBjb2xvci1mZy10ZXh0LTM6ICNkMWQxZmYsXG4gIGNvbG9yLWZnLXRleHQtNDogI2MxOThmYixcbiAgXG4gIGNvbG9yLWxpZ2h0LTI6ICNkMWQxZmYsXG4gIFxuICBmb250LW1haW46IHVucXVvdGUoJ1wiRXhvXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtc2Vjb25kYXJ5OiBmb250LW1haW4sXG5cbiAgZm9udC13ZWlnaHQtdGhpbjogMjAwLFxuICBmb250LXdlaWdodC1saWdodDogMzAwLFxuICBmb250LXdlaWdodC1ub3JtYWw6IDQwMCxcbiAgZm9udC13ZWlnaHQtYm9sZGVyOiA1MDAsXG4gIGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCxcbiAgZm9udC13ZWlnaHQtdWx0cmEtYm9sZDogODAwLFxuXG4gIC8vIFRPRE86IHVzZSBpdCBhcyBhIGRlZmF1bHQgZm9udC1zaXplXG4gIGJhc2UtZm9udC1zaXplOiAxNnB4LFxuXG4gIGZvbnQtc2l6ZS14bGc6IDEuMjVyZW0sXG4gIGZvbnQtc2l6ZS1sZzogMS4xMjVyZW0sXG4gIGZvbnQtc2l6ZTogMXJlbSxcbiAgZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcbiAgZm9udC1zaXplLXhzOiAwLjc1cmVtLFxuXG4gIHJhZGl1czogMC4zNzVyZW0sXG4gIHBhZGRpbmc6IDEuMjVyZW0sXG4gIG1hcmdpbjogMS41cmVtLFxuICBsaW5lLWhlaWdodDogMS4yNSxcblxuICBjb2xvci1iZzogI2ZmZmZmZixcbiAgY29sb3ItYmctYWN0aXZlOiAjZTllZGYyLFxuICBjb2xvci1mZzogI2E0YWJiMyxcbiAgY29sb3ItZmctaGVhZGluZzogIzJhMmEyYSxcbiAgY29sb3ItZmctdGV4dDogIzRiNGI0YixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjNDBkYzdlLFxuXG4gIHNlcGFyYXRvcjogI2ViZWVmMixcblxuICBjb2xvci1ncmF5OiByZ2JhKDgxLCAxMTMsIDE2NSwgMC4xNSksXG4gIGNvbG9yLW5ldXRyYWw6IHRyYW5zcGFyZW50LFxuICBjb2xvci13aGl0ZTogI2ZmZmZmZixcbiAgY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcblxuICBjb2xvci1wcmltYXJ5OiAjOGE3ZmZmLFxuICBjb2xvci1zdWNjZXNzOiAjMGRmZjkyLFxuICBjb2xvci1pbmZvOiAjNGNhNmZmLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMTAwLFxuICBjb2xvci1kYW5nZXI6ICNmZjRjNmEsXG5cbiAgLy8gVE9ETzogbW92ZSB0byBjb25zdGFudHNcbiAgc29jaWFsLWNvbG9yLWZhY2Vib29rOiAjM2I1OTk4LFxuICBzb2NpYWwtY29sb3ItdHdpdHRlcjogIzU1YWNlZSxcbiAgc29jaWFsLWNvbG9yLWdvb2dsZTogI2RkNGIzOSxcbiAgc29jaWFsLWNvbG9yLWxpbmtlZGluOiAjMDE3N2I1LFxuICBzb2NpYWwtY29sb3ItZ2l0aHViOiAjNmI2YjZiLFxuICBzb2NpYWwtY29sb3Itc3RhY2tvdmVyZmxvdzogIzJmOTZlOCxcbiAgc29jaWFsLWNvbG9yLWRyaWJibGU6ICNmMjY3OTgsXG4gIHNvY2lhbC1jb2xvci1iZWhhbmNlOiAjMDA5M2ZhLFxuXG4gIGJvcmRlci1jb2xvcjogY29sb3ItZ3JheSxcbiAgc2hhZG93OiAwIDJweCAxMnB4IDAgI2RmZTNlYixcblxuICBsaW5rLWNvbG9yOiAjM2RjYzZkLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMmVlNTZiLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgc2Nyb2xsYmFyLWZnOiAjZGFkYWRhLFxuICBzY3JvbGxiYXItYmc6ICNmMmYyZjIsXG4gIHNjcm9sbGJhci13aWR0aDogNXB4LFxuICBzY3JvbGxiYXItdGh1bWItcmFkaXVzOiAyLjVweCxcblxuICByYWRpYWwtZ3JhZGllbnQ6IG5vbmUsXG4gIGxpbmVhci1ncmFkaWVudDogbm9uZSxcblxuICBjYXJkLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYXJkLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgY2FyZC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYXJkLWZnOiBjb2xvci1mZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBjYXJkLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtYmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlaWdodC14eHNtYWxsOiA5NnB4LFxuICBjYXJkLWhlaWdodC14c21hbGw6IDIxNnB4LFxuICBjYXJkLWhlaWdodC1zbWFsbDogMzM2cHgsXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogNDU2cHgsXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiA1NzZweCxcbiAgY2FyZC1oZWlnaHQteGxhcmdlOiA2OTZweCxcbiAgY2FyZC1oZWlnaHQteHhsYXJnZTogODE2cHgsXG4gIGNhcmQtc2hhZG93OiBzaGFkb3csXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLFxuICBjYXJkLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGNvbG9yLWJnLFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjYXJkLW1hcmdpbjogbWFyZ2luLFxuICBjYXJkLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGNhcmQtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBjYXJkLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgY2FyZC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgY2FyZC1oZWFkZXItZmc6IGNvbG9yLWZnLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtZmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlYWRlci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhcmQtaGVhZGVyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBjYXJkLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBjYXJkLWhlYWRlci1ib3JkZXItY29sb3I6IGNhcmQtc2VwYXJhdG9yLFxuXG4gIGhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBoZWFkZXItYmc6IGNvbG9yLWJnLFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1oZWlnaHQ6IDQuNzI1cmVtLFxuICBmb290ZXItcGFkZGluZzogMS4yNXJlbSxcbiAgZm9vdGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuICBmb290ZXItc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgbGF5b3V0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBsYXlvdXQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtZmc6IGNvbG9yLWZnLFxuICBsYXlvdXQtYmc6ICNlYmVmZjUsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmc6IGxheW91dC1iZyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcblxuICBzaWRlYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzaWRlYmFyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc2lkZWJhci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcblxuICBtZW51LWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgbWVudS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG5cbiAgbWVudS1zdWJtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IG5vbmUsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1mZzogbWVudS1zdWJtZW51LWFjdGl2ZS1mZyxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWJnOiBtZW51LXN1Ym1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aDogMC4xMjVyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWNvbnRhaW5lci1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwLjVyZW0sXG5cbiAgbWVudS1ncm91cC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWdyb3VwLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLWZnLFxuICBtZW51LWdyb3VwLXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNjc1cmVtIDAuNzVyZW0sXG4gIG1lbnUtaXRlbS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgbWVudS1pY29uLWZvbnQtc2l6ZTogMi41cmVtLFxuICBtZW51LWljb24tbWFyZ2luOiAwIDAuMjVyZW0gMCxcbiAgbWVudS1pY29uLWNvbG9yOiBjb2xvci1mZyxcbiAgbWVudS1pY29uLWFjdGl2ZS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcblxuICB0YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgdGFicy1jb250ZW50LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHRhYnMtY29udGVudC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLWFjdGl2ZS1mb250LXdlaWdodDogNzAwLFxuICB0YWJzLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHRhYnMtY29udGVudC1wYWRkaW5nOiAwLFxuICB0YWJzLWhlYWRlci1iZzogdHJhbnNwYXJlbnQsXG4gIHRhYnMtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIHRhYnMtZmc6IGNvbG9yLWZnLFxuICB0YWJzLWZnLWRpc2FibGVkOiB0YWJzLWZnLFxuICB0YWJzLWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIHRhYnMtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgdGFicy1iZzogdHJhbnNwYXJlbnQsXG4gIHRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICB0YWJzLXNlbGVjdGVkLWRlZ3JlZXM6IDAsXG4gIHRhYnMtaWNvbi1vbmx5LW1heC13aWR0aDogNTc2cHgsXG5cbiAgcm91dGUtdGFicy1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIHJvdXRlLXRhYnMtZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIHJvdXRlLXRhYnMtYWN0aXZlLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1hY3RpdmUtZm9udC13ZWlnaHQ6IGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0LFxuICByb3V0ZS10YWJzLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHJvdXRlLXRhYnMtaGVhZGVyLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgcm91dGUtdGFicy1mZzogY29sb3ItZmcsXG4gIHJvdXRlLXRhYnMtZmctZGlzYWJsZWQ6IHJvdXRlLXRhYnMtZmcsXG4gIHJvdXRlLXRhYnMtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgcm91dGUtdGFicy1iZzogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJvdXRlLXRhYnMtaWNvbi1vbmx5LW1heC13aWR0aDogNTc2cHgsXG5cbiAgdXNlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgdXNlci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHVzZXItYmc6IGNvbG9yLWJnLFxuICB1c2VyLWZnOiBjb2xvci1mZyxcbiAgdXNlci1mZy1oaWdobGlnaHQ6ICNiY2MzY2MsXG4gIHVzZXItZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBmb250LXNlY29uZGFyeSxcbiAgdXNlci1zaXplLXNtYWxsOiAxLjVyZW0sXG4gIHVzZXItc2l6ZS1tZWRpdW06IDIuNXJlbSxcbiAgdXNlci1zaXplLWxhcmdlOiAzLjI1cmVtLFxuICB1c2VyLXNpemUteGxhcmdlOiA0cmVtLFxuXG4gIHBvcG92ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHBvcG92ZXItYmc6IGNvbG9yLWJnLFxuICBwb3BvdmVyLWJvcmRlcjogY29sb3Itc3VjY2VzcyxcbiAgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIHBvcG92ZXItc2hhZG93OiBub25lLFxuICBwb3BvdmVyLWFycm93LXNpemU6IDExcHgsXG5cbiAgY29udGV4dC1tZW51LWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjb250ZXh0LW1lbnUtYmc6IGNvbG9yLWJnLFxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWZnOiBjb2xvci13aGl0ZSxcbiAgY29udGV4dC1tZW51LWFjdGl2ZS1iZzogY29sb3Itc3VjY2VzcyxcbiAgY29udGV4dC1tZW51LWJvcmRlcjogY29sb3Itc3VjY2VzcyxcbiAgY29udGV4dC1tZW51LWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY29udGV4dC1tZW51LXNoYWRvdzogbm9uZSxcbiAgY29udGV4dC1tZW51LWFycm93LXNpemU6IDExcHgsXG5cbiAgYWN0aW9ucy1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGFjdGlvbnMtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBhY3Rpb25zLWZnOiBjb2xvci1mZyxcbiAgYWN0aW9ucy1iZzogY29sb3ItYmcsXG4gIGFjdGlvbnMtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGFjdGlvbnMtcGFkZGluZzogcGFkZGluZyxcbiAgYWN0aW9ucy1zaXplLXNtYWxsOiAxLjVyZW0sXG4gIGFjdGlvbnMtc2l6ZS1tZWRpdW06IDIuMjVyZW0sXG4gIGFjdGlvbnMtc2l6ZS1sYXJnZTogMy41cmVtLFxuXG4gIHNlYXJjaC1idG4tb3Blbi1mZzogY29sb3ItZmcsXG4gIHNlYXJjaC1idG4tY2xvc2UtZmc6XHRjb2xvci1mZyxcbiAgc2VhcmNoLWJnOiBsYXlvdXQtYmcsXG4gIHNlYXJjaC1iZy1zZWNvbmRhcnk6IGNvbG9yLWZnLFxuICBzZWFyY2gtdGV4dDogY29sb3ItZmctaGVhZGluZyxcbiAgc2VhcmNoLWluZm86IGNvbG9yLWZnLFxuICBzZWFyY2gtZGFzaDogY29sb3ItZmcsXG4gIHNlYXJjaC1wbGFjZWhvbGRlcjogY29sb3ItZmcsXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBjb2xvci1iZyxcblxuICBzbWFydC10YWJsZS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBzbWFydC10YWJsZS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgc21hcnQtdGFibGUtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc21hcnQtdGFibGUtYmc6IGNvbG9yLWJnLFxuXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46ICNmNWY3ZmMsXG4gIHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeTogY29sb3ItZmcsXG4gIHNtYXJ0LXRhYmxlLWJnLWFjdGl2ZTogI2U2ZjNmZixcbiAgc21hcnQtdGFibGUtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcbiAgc21hcnQtdGFibGUtZmlsdGVyLXBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbSxcbiAgc21hcnQtdGFibGUtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIHNtYXJ0LXRhYmxlLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcblxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yOiBzZXBhcmF0b3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IDFweCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogI2ZmZmZmZixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3Itc3VjY2VzcyxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuXG4gIHRvYXN0ci1iZzogY29sb3ItYmcsXG4gIHRvYXN0ci1wYWRkaW5nOiAxLjEyNXJlbSxcbiAgdG9hc3RyLWZnOiBjb2xvci1mZy10ZXh0LFxuICB0b2FzdHItYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCxcbiAgdG9hc3RyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgdG9hc3RyLWJvcmRlci1jb2xvcjogI2JjYzNjYyxcbiAgdG9hc3RyLWljb24tcmFkaXVzOiAwLjI1cmVtLFxuICB0b2FzdHItc2hhZG93OiBzaGFkb3csXG5cbiAgYnRuLWZnOiBjb2xvci13aGl0ZSxcbiAgYnRuLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYnRuLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgYnRuLWRpc2FibGVkLW9wYWNpdHk6IDAuMyxcbiAgYnRuLWN1cnNvcjogZGVmYXVsdCxcblxuICBidG4tcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgYnRuLXNlY29uZGFyeS1iZzogdHJhbnNwYXJlbnQsXG4gIGJ0bi1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBidG4tc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgYnRuLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGJ0bi1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcblxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogI2RhZGZlNixcbiAgYnRuLXNlY29uZGFyeS1ib3JkZXItd2lkdGg6IDJweCxcblxuICBidG4tcGFkZGluZy15LWxnOiAwLjg3NXJlbSxcbiAgYnRuLXBhZGRpbmcteC1sZzogMS43NXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuXG4gIC8vIGRlZmF1bHQgc2l6ZVxuICBidG4tcGFkZGluZy15LW1kOiAwLjc1cmVtLFxuICBidG4tcGFkZGluZy14LW1kOiAxLjVyZW0sXG4gIGJ0bi1mb250LXNpemUtbWQ6IDFyZW0sXG5cbiAgYnRuLXBhZGRpbmcteS1zbTogMC42MjVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtc206IDEuNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1zbTogMC44NzVyZW0sXG5cbiAgYnRuLXBhZGRpbmcteS14czogMC41cmVtLFxuICBidG4tcGFkZGluZy14LXhzOiAxLjI1cmVtLFxuICBidG4tZm9udC1zaXplLXhzOiAwLjc1cmVtLFxuXG4gIGJ0bi1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGJ0bi1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcbiAgYnRuLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgYnRuLXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBidG4taGVyby1zaGFkb3c6IG5vbmUsXG4gIGJ0bi1oZXJvLXRleHQtc2hhZG93OiBub25lLFxuICBidG4taGVyby1iZXZlbC1zaXplOiAwIDAgMCAwLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1kZWdyZWU6IDIwZGVnLFxuICBidG4taGVyby1wcmltYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1zdWNjZXNzLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby13YXJuaW5nLWRlZ3JlZTogMTBkZWcsXG4gIGJ0bi1oZXJvLWluZm8tZGVncmVlOiAtMTBkZWcsXG4gIGJ0bi1oZXJvLWRhbmdlci1kZWdyZWU6IC0yMGRlZyxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG5cbiAgYnRuLW91dGxpbmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWhvdmVyLWZnOiAjZmZmZmZmLFxuICBidG4tb3V0bGluZS1mb2N1cy1mZzogY29sb3ItZmctaGVhZGluZyxcblxuICBidG4tZ3JvdXAtYmc6IGxheW91dC1iZyxcbiAgYnRuLWdyb3VwLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tZ3JvdXAtc2VwYXJhdG9yOiAjZGFkZmU2LFxuXG4gIGZvcm0tY29udHJvbC10ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGZvcm0tY29udHJvbC1iZzogY29sb3ItYmcsXG4gIGZvcm0tY29udHJvbC1mb2N1cy1iZzogY29sb3ItYmcsXG5cbiAgZm9ybS1jb250cm9sLWJvcmRlci13aWR0aDogMnB4LFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBmb3JtLWNvbnRyb2wtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBmb3JtLWNvbnRyb2wtcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjZGFkZmU2LFxuICBmb3JtLWNvbnRyb2wtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuXG4gIGZvcm0tY29udHJvbC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mbyxcbiAgZm9ybS1jb250cm9sLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBmb3JtLWNvbnRyb2wtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLFxuICBmb3JtLWNvbnRyb2wtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmcsXG5cbiAgZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yOiBjb2xvci1mZyxcbiAgZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMXJlbSxcblxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplOiAxcmVtLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZzogMC43NXJlbSAxLjEyNXJlbSxcbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZS1zbTogZm9udC1zaXplLXNtLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZy1zbTogMC4zNzVyZW0gMS4xMjVyZW0sXG4gIGZvcm0tY29udHJvbC1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcbiAgZm9ybS1jb250cm9sLXBhZGRpbmctbGc6IDEuMTI1cmVtLFxuXG4gIGZvcm0tY29udHJvbC1sYWJlbC1mb250LXdlaWdodDogNDAwLFxuXG4gIGZvcm0tY29udHJvbC1mZWVkYmFjay1mb250LXNpemU6IDAuODc1cmVtLFxuICBmb3JtLWNvbnRyb2wtZmVlZGJhY2stZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcblxuICBjaGVja2JveC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWJvcmRlci1jb2xvcjogY29sb3ItbGlnaHQtMixcbiAgY2hlY2tib3gtY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcblxuICBjaGVja2JveC1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBjaGVja2JveC1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBjaGVja2JveC1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgY2hlY2tib3gtZGlzYWJsZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIG1vZGFsLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBtb2RhbC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIG1vZGFsLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1vZGFsLWZnOiBjb2xvci1mZy10ZXh0LFxuICBtb2RhbC1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtb2RhbC1iZzogY29sb3ItYmcsXG4gIG1vZGFsLWJvcmRlcjogdHJhbnNwYXJlbnQsXG4gIG1vZGFsLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbW9kYWwtcGFkZGluZzogcGFkZGluZyxcbiAgbW9kYWwtaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgbW9kYWwtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1vZGFsLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgbW9kYWwtYm9keS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBtb2RhbC1ib2R5LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1vZGFsLWJvZHktZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1vZGFsLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuXG4gIGJhZGdlLWZnLXRleHQ6IGNvbG9yLXdoaXRlLFxuICBiYWRnZS1wcmltYXJ5LWJnLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBiYWRnZS1zdWNjZXNzLWJnLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBiYWRnZS1pbmZvLWJnLWNvbG9yOiBjb2xvci1pbmZvLFxuICBiYWRnZS13YXJuaW5nLWJnLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuICBiYWRnZS1kYW5nZXItYmctY29sb3I6IGNvbG9yLWRhbmdlcixcblxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXhsZzogMS43NXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC1sZzogMS41cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0OiAxLjM3NXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC1zbTogMS4yNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC14czogMXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUteGxnOiBmb250LXNpemUteGxnLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS1zbTogZm9udC1zaXplLXNtLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXhzOiBmb250LXNpemUteHMsXG4gIHByb2dyZXNzLWJhci1yYWRpdXM6IHJhZGl1cyxcbiAgcHJvZ3Jlc3MtYmFyLWJnOiBsYXlvdXQtYmcsXG4gIHByb2dyZXNzLWJhci1mb250LWNvbG9yOiBjb2xvci13aGl0ZSxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBwcm9ncmVzcy1iYXItZGVmYXVsdC1iZzogY29sb3ItaW5mbyxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBwcm9ncmVzcy1iYXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcblxuICBhbGVydC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgYWxlcnQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBhbGVydC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhbGVydC1mZzogY29sb3Itd2hpdGUsXG4gIGFsZXJ0LW91dGxpbmUtZmc6IGNvbG9yLWZnLFxuICBhbGVydC1iZzogY29sb3ItYmcsXG4gIGFsZXJ0LWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGFsZXJ0LWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgYWxlcnQtZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBhbGVydC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBhbGVydC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBhbGVydC1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBhbGVydC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBhbGVydC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgYWxlcnQtaGVpZ2h0LXh4c21hbGw6IDUycHgsXG4gIGFsZXJ0LWhlaWdodC14c21hbGw6IDcycHgsXG4gIGFsZXJ0LWhlaWdodC1zbWFsbDogOTJweCxcbiAgYWxlcnQtaGVpZ2h0LW1lZGl1bTogMTEycHgsXG4gIGFsZXJ0LWhlaWdodC1sYXJnZTogMTMycHgsXG4gIGFsZXJ0LWhlaWdodC14bGFyZ2U6IDE1MnB4LFxuICBhbGVydC1oZWlnaHQteHhsYXJnZTogMTcycHgsXG4gIGFsZXJ0LXNoYWRvdzogbm9uZSxcbiAgYWxlcnQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBhbGVydC1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1jbG9zYWJsZS1wYWRkaW5nOiAzcmVtLFxuICBhbGVydC1idXR0b24tcGFkZGluZzogM3JlbSxcbiAgYWxlcnQtbWFyZ2luOiBtYXJnaW4sXG5cbiAgY2hhdC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgY2hhdC1mZzogY29sb3Itd2hpdGUsXG4gIGNoYXQtYmc6IGNvbG9yLWJnLFxuICBjaGF0LWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2hhdC1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBjaGF0LWhlaWdodC14eHNtYWxsOiA5NnB4LFxuICBjaGF0LWhlaWdodC14c21hbGw6IDIxNnB4LFxuICBjaGF0LWhlaWdodC1zbWFsbDogMzM2cHgsXG4gIGNoYXQtaGVpZ2h0LW1lZGl1bTogNDU2cHgsXG4gIGNoYXQtaGVpZ2h0LWxhcmdlOiA1NzZweCxcbiAgY2hhdC1oZWlnaHQteGxhcmdlOiA2OTZweCxcbiAgY2hhdC1oZWlnaHQteHhsYXJnZTogODE2cHgsXG4gIGNoYXQtYm9yZGVyOiBib3JkZXIsXG4gIGNoYXQtcGFkZGluZzogcGFkZGluZyxcbiAgY2hhdC1zaGFkb3c6IHNoYWRvdyxcbiAgY2hhdC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgY2hhdC1tZXNzYWdlLWZnOiBjb2xvci13aGl0ZSxcbiAgY2hhdC1tZXNzYWdlLWJnOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2E2ZmYsICM1OWJmZmYpLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LWZnOiBjb2xvci1mZy10ZXh0LFxuICBjaGF0LW1lc3NhZ2UtYXZhdGFyLWJnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXNlbmRlci1mZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1mZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS1mZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hhdC1mb3JtLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hhdC1mb3JtLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGF0LWZvcm0tYm9yZGVyOiBzZXBhcmF0b3IsXG4gIGNoYXQtZm9ybS1wbGFjZWhvbGRlci1mZzogY29sb3ItZmcsXG4gIGNoYXQtZm9ybS1hY3RpdmUtYm9yZGVyOiBjb2xvci1mZyxcbiAgY2hhdC1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBjaGF0LWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgY2hhdC1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGNoYXQtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2hhdC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBjaGF0LXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoYXQtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgY2hhdC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcblxuICBzcGlubmVyLWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODMpLFxuICBzcGlubmVyLWNpcmNsZS1iZzogY29sb3ItYmctMixcbiAgc3Bpbm5lci1mZzogY29sb3ItZmctdGV4dCxcbiAgc3Bpbm5lci1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBzcGlubmVyLWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgc3Bpbm5lci1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIHNwaW5uZXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgc3Bpbm5lci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBzcGlubmVyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHNwaW5uZXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgc3Bpbm5lci1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgc3Bpbm5lci14eHNtYWxsOiAxLjI1cmVtLFxuICBzcGlubmVyLXhzbWFsbDogMS41cmVtLFxuICBzcGlubmVyLXNtYWxsOiAxLjc1cmVtLFxuICBzcGlubmVyLW1lZGl1bTogMnJlbSxcbiAgc3Bpbm5lci1sYXJnZTogMi4yNXJlbSxcbiAgc3Bpbm5lci14bGFyZ2U6IDIuNXJlbSxcbiAgc3Bpbm5lci14eGxhcmdlOiAzcmVtLFxuXG4gIHN0ZXBwZXItaW5kZXgtc2l6ZTogMnJlbSxcbiAgc3RlcHBlci1sYWJlbC1mb250LXNpemU6IGZvbnQtc2l6ZS1zbSxcbiAgc3RlcHBlci1sYWJlbC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBzdGVwcGVyLWFjY2VudC1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgc3RlcHBlci1jb21wbGV0ZWQtZmc6IGNvbG9yLXdoaXRlLFxuICBzdGVwcGVyLWZnOiBjb2xvci1mZyxcbiAgc3RlcHBlci1jb21wbGV0ZWQtaWNvbi1zaXplOiAxLjVyZW0sXG4gIHN0ZXBwZXItY29tcGxldGVkLWljb24td2VpZ2h0OiBmb250LXdlaWdodC11bHRyYS1ib2xkLFxuICBzdGVwcGVyLXN0ZXAtcGFkZGluZzogcGFkZGluZyxcblxuICBhY2NvcmRpb24tcGFkZGluZzogcGFkZGluZyxcbiAgYWNjb3JkaW9uLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBhY2NvcmRpb24taGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhY2NvcmRpb24taGVhZGVyLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItY29sb3I6IGFjY29yZGlvbi1zZXBhcmF0b3IsXG4gIGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGFjY29yZGlvbi1pdGVtLWJnOiBjb2xvci1iZyxcbiAgYWNjb3JkaW9uLWl0ZW0tZm9udC1zaXplOiBmb250LXNpemUsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIGFjY29yZGlvbi1pdGVtLWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGFjY29yZGlvbi1pdGVtLXNoYWRvdzogc2hhZG93LFxuXG4gIGxpc3QtaXRlbS1ib3JkZXItY29sb3I6IHRhYnMtc2VwYXJhdG9yLFxuICBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSxcblxuICBjYWxlbmRhci13aWR0aDogMjEuODc1cmVtLFxuICBjYWxlbmRhci1ib2R5LWhlaWdodDogMjUuNjI1cmVtLFxuICBjYWxlbmRhci1oZWFkZXItdGl0bGUtZm9udC1zaXplOiBmb250LXNpemUteGxnLFxuICBjYWxlbmRhci1oZWFkZXItdGl0bGUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIGNhbGVuZGFyLWhlYWRlci1zdWItdGl0bGUtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGNhbGVuZGFyLWhlYWRlci1zdWItdGl0bGUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LXRoaW4sXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tYnV0dG9uLXdpZHRoOiAxMHJlbSxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2FsZW5kYXItaG92ZXItaXRlbS1iZzogY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZyxcbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2FsZW5kYXItZmc6IGNvbG9yLWZnLXRleHQsXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWZnOiBjb2xvci13aGl0ZSxcbiAgY2FsZW5kYXItdG9kYXktZmc6IGNhbGVuZGFyLWZnLFxuICBjYWxlbmRhci1kYXktY2VsbC13aWR0aDogMi42MjVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodDogMi42MjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGg6IDQuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgY2FsZW5kYXIteWVhci1jZWxsLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcbiAgY2FsZW5kYXItaW5hY3RpdmUtb3BhY2l0eTogMC41LFxuICBjYWxlbmRhci1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIGNhbGVuZGFyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2FsZW5kYXItd2Vla2RheS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0OiAxLjc1cmVtLFxuICBjYWxlbmRhci13ZWVrZGF5LWZvbnQtc2l6ZTogZm9udC1zaXplLXhzLFxuICBjYWxlbmRhci13ZWVrZGF5LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGNhbGVuZGFyLXdlZWtkYXktZmc6IGNvbG9yLWZnLFxuICBjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktZmc6IGNvbG9yLWRhbmdlcixcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICNlYmZiZjIsXG5cbiAgY2FsZW5kYXItbGFyZ2Utd2lkdGg6IDEwMCUsXG4gIGNhbGVuZGFyLWxhcmdlLWJvZHktaGVpZ2h0OiAyNy43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDEwMCUsXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogNS41cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG5cbiAgb3ZlcmxheS1iYWNrZHJvcC1iZzogcmdiYSgwLCAwLCAwLCAwLjI4OCksXG5cbiAgdG9vbHRpcC1iZzogY29sb3ItZmctdGV4dCxcbiAgdG9vbHRpcC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICB0b29sdGlwLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIHRvb2x0aXAtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgdG9vbHRpcC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICB0b29sdGlwLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICB0b29sdGlwLWZnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHRvb2x0aXAtc3RhdHVzLWZnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csXG4gIHRvb2x0aXAtZm9udC1zaXplOiBmb250LXNpemUsXG5cbiAgc2VsZWN0LWJvcmRlci13aWR0aDogMnB4LFxuICBzZWxlY3QtbWF4LWhlaWdodDogMjByZW0sXG4gIHNlbGVjdC1iZzogY29sb3ItYmcsXG5cbiAgc2VsZWN0LWNoZWNrYm94LWNvbG9yOiBjaGVja2JveC1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1jaGVja21hcmstY29sb3I6IGNoZWNrYm94LWJvcmRlci1jb2xvcixcblxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLWJnOiAjZjJmNGY3LFxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLW9wYWNpdHk6IDAuMyxcbiAgc2VsZWN0LW9wdGlvbi1wYWRkaW5nOiAwLjc1cmVtIDEuNXJlbSxcblxuICBkYXRlcGlja2VyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBkYXRlcGlja2VyLWJnOiBjb2xvci1iZyxcbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBkYXRlcGlja2VyLXNoYWRvdzogbm9uZSxcbiAgZGF0ZXBpY2tlci1hcnJvdy1zaXplOiAxMXB4LFxuXG4gIHJhZGlvLWJnOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZmc6IGNvbG9yLWZnLXRleHQsXG4gIHJhZGlvLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWJvcmRlci1jb2xvcjogZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcixcbiAgcmFkaW8tY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgcmFkaW8tY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJhZGlvLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgcmFkaW8tZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiByYWRpby1ib3JkZXItY29sb3IsXG4gIHJhZGlvLWRpc2FibGVkLWNoZWNrbWFyazogcmFkaW8tY2hlY2ttYXJrLFxuXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci13aWR0aDogMXB4LFxuICB0cmVlLWdyaWQtY2VsbC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICB0cmVlLWdyaWQtY2VsbC1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgdHJlZS1ncmlkLXJvdy1taW4taGVpZ2h0OiAycmVtLFxuICB0cmVlLWdyaWQtY2VsbC1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50LFxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWJvcmRlcjogbm9uZSxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1wYWRkaW5nOiAwLFxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWZvbnQtd2VpZ2h0OiBib2xkLFxuICB0cmVlLWdyaWQtaGVhZGVyLWJnOiBjb2xvci1iZyxcbiAgdHJlZS1ncmlkLWZvb3Rlci1iZzogY29sb3ItYmcsXG4gIHRyZWUtZ3JpZC1yb3ctYmc6IGNvbG9yLWJnLFxuICB0cmVlLWdyaWQtcm93LWJnLWV2ZW46IGNvbG9yLWJnLFxuICB0cmVlLWdyaWQtcm93LWhvdmVyLWJnOiBjb2xvci1iZyxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1jb2xvcjogY29sb3ItZmctdGV4dCxcbiAgdHJlZS1ncmlkLWljb24tY29sb3I6IGNvbG9yLWZnLXRleHQsXG4pO1xuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4gQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuIEBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbiBAaW1wb3J0ICdkZWZhdWx0JztcbiBcbiAvLyBkZWZhdWx0IHRoZSBiYXNlIHRoZW1lXG4gJHRoZW1lOiAoXG4gXG4gICBjYXJkLWNvbG9yOiAjM2QzNzgwLFxuICAgY2lyY2xlLWJnOiAjMmYyODc5LFxuICAgYm90dG9tLWNhcmQtdGV4dDogIzNiMzY3ZixcbiAgIGxpZ2h0LXRleHQ6ICNkMWQxZmYsXG4gICBsaWdodC10ZXh0LTI6ICNhMWExZTUsXG4gICBsaW5lLWNvbG9yOiAjMzQyZTczLFxuICAgdXBjb21pbmctY2FyZC1jb2xvcjogIzkxNGZlZixcbiAgIG5vdGVzLWhlYWRlcjogIzc2NTlmZixcbiAgIG5vdGlmaWNhdGlvbnMtYmc6ICMyOTI0NWMsXG4gICBub3RpZmljYXRpb24taGVhZGVyOiAjMWMxOTQwLFxuICAgbm90aWZpY2F0aW9uLXNoYWRvdzogIzgzNmJmZixcbiAgIHBhZ2UtYmc6ICMyZjI5NmIsXG4gICB0cmFkZXJzLWh1Yi10ZXh0OiAjYzE5OGZiLFxuICAgc2Nyb2xsYmFyLWJhY2tncm91bmQ6ICMzMzJlNzMsXG4gICBzY3JvbGxiYXItY2lyY2xlOiAjNTU0ZGIzLFxuICAgYmctY29sb3ItdGFic2V0OiAjMGRmZjkyLFxuICAgc2hhZGUtd2hpdGUtMTogI2ZmZixcbiAgIGNhbGVuZGFyLXJvdy0yOiAjNTg1OThlLFxuICAgdHJhZGVyLWNoYXJ0LXNpZGU6ICMyYTI2NWQsXG4gICBzaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDQwLCAzNywgODksIDAuNiksXG4gIC8vICAvLyBiYWNrZ3JvdW5kLWltZzogdXJsKFwiLi8uLi8uLi8uLi8uLlwiKSxcbiBcbiAgIC8vMzBcbiAgLy8gIGNhcmQtY29sb3I6ICMyYzVjNjYsXG4gIC8vICBjaXJjbGUtYmc6ICMyNDRjNTUsXG4gIC8vICBib3R0b20tY2FyZC10ZXh0OiAjMzQ3MTdkLFxuICAvLyAgbGlnaHQtdGV4dDogIzVmY2JlMixcbiAgLy8gIGxpZ2h0LXRleHQtMjogI2E0ZGFlNixcbiAgLy8gIGxpbmUtY29sb3I6ICMyMDUzNWUsXG4gIC8vICB1cGNvbWluZy1jYXJkLWNvbG9yOiAjNDY5M2EzLFxuICAvLyAgbm90ZXMtaGVhZGVyOiAjNGQ4NzkzLFxuICAvLyAgbm90aWZpY2F0aW9ucy1iZzogIzE1MmMzMSxcbiAgLy8gIG5vdGlmaWNhdGlvbi1oZWFkZXI6ICMxNjJlMzMsXG4gIC8vICBub3RpZmljYXRpb24tc2hhZG93OiAjNjQ5NmEwLCAgXG4gIC8vICBwYWdlLWJnOiAjMjA0MzRiLFxuICAvLyAgdHJhZGVycy1odWItdGV4dDogIzMyNmQ3OSxcbiAgLy8gIHNjcm9sbGJhci1iYWNrZ3JvdW5kOiAjMzQ3MTdkLFxuICAvLyAgc2Nyb2xsYmFyLWNpcmNsZTogIzMyNmQ3OSxcbiAgLy8gIGJnLWNvbG9yLXRhYnNldDogIzBkZmY5MixcbiAgLy8gIHNoYWRlLXdoaXRlLTE6ICNmZmYsXG4gIC8vICBjYWxlbmRhci1yb3ctMjogIzM0NjI2YixcbiAgLy8gIHRyYWRlci1jaGFydC1zaWRlOiAjMWY0MDQ3LFxuICAvLyAgc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSgyMiwgNDUsIDUwLCAuNiksXG4gIC8vICBiYWNrZ3JvdW5kLWltZzogdXJsKC4vLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzMwLmpwZyksXG4gIC8vICBiYWNrZ3JvdW5kLWltZy0yOiB1cmwoLi8uLi8uLi9zcmMvYXNzZXRzL3RoZW1lc19pbWFnZXMvMzAuanBnKSxcbiAgIFxuICAgLy8zMVxuICAvLyAgY2FyZC1jb2xvcjogIzMwMTUyMyxcbiAgLy8gIGNpcmNsZS1iZzogIzI5MTIxZSxcbiAgLy8gIGJvdHRvbS1jYXJkLXRleHQ6ICM2YzJmNGYsXG4gIC8vICBsaWdodC10ZXh0OiAjY2I4Y2FkLFxuICAvLyAgbGluZS1jb2xvcjogIzI0MTAxYSxcbiAgLy8gIHVwY29taW5nLWNhcmQtY29sb3I6ICM5YjQ1NzIsXG4gIC8vICBub3Rlcy1oZWFkZXI6ICM2ZDMxNTAsXG4gXG4gIC8vICBub3RpZmljYXRpb25zLWJnOiAjMTkwYjEyLFxuICAvLyAgcGFnZS1iZzogIzI1MTAxYixcbiAgLy8gIHRyYWRlcnMtaHViLXRleHQ6ICM2OTJlNGQsXG4gIC8vICBzY3JvbGxiYXItYmFja2dyb3VuZDogIzZjMmY0ZixcbiAgLy8gIGNhbGVuZGFyLXJvdy0yOiAjMzgxZTJjLFxuICAvLyAgbGlnaHQtdGV4dC0yOiAjZGFiYmNiLFxuICAvLyAgbm90aWZpY2F0aW9uLXNoYWRvdzogIzdmNGM2NyxcbiAgLy8gIG5vdGlmaWNhdGlvbi1oZWFkZXI6ICMxOTBiMTIsXG4gIC8vICB0cmFkZXItY2hhcnQtc2lkZTogIzIyMGYxOCxcbiAgLy8gIHNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoMjQsIDEwLCAxNywgLjYpLFxuICAvLyAgc2Nyb2xsYmFyLWNpcmNsZTogIzY5MmU0ZCxcbiAgLy8gIGJnLWNvbG9yLXRhYnNldDogIzBkZmY5MixcbiAgLy8gIHNoYWRlLXdoaXRlLTE6ICNmZmYsXG4gIC8vICBiYWNrZ3JvdW5kLWltZzogdXJsKC4vLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzMxLmpwZyksXG4gIC8vICBiYWNrZ3JvdW5kLWltZy0yOiB1cmwoLi8uLi8uLi9zcmMvYXNzZXRzL3RoZW1lc19pbWFnZXMvMzEuanBnKSxcbiBcbiAgIC8vMzJcbiAgIC8vIGNhcmQtY29sb3I6ICM4YjRhMzQsXG4gICAvLyBjaXJjbGUtYmc6ICM3ODQwMmQsXG4gICAvLyBib3R0b20tY2FyZC10ZXh0OiAjYWI1NzNiLFxuICAgLy8gbGlnaHQtdGV4dDogI2YxYWU5NyxcbiAgIC8vIGxpbmUtY29sb3I6ICM3NTNlMmMsXG4gICAvLyB1cGNvbWluZy1jYXJkLWNvbG9yOiAjZDU2ZDRhLFxuICAgLy8gbm90ZXMtaGVhZGVyOiAjYWE1ODNkLFxuIFxuICAgLy8gbm90aWZpY2F0aW9ucy1iZzogIzQ3MjUxYSxcbiAgIC8vIHBhZ2UtYmc6ICM2YjM5MjgsXG4gICAvLyB0cmFkZXJzLWh1Yi10ZXh0OiAjYTY1NDM5LFxuICAgLy8gc2Nyb2xsYmFyLWJhY2tncm91bmQ6ICNhYjU3M2IsXG4gICAvLyBjYWxlbmRhci1yb3ctMjogIzhlNTEzYyxcbiAgIC8vIGxpZ2h0LXRleHQtMjogI2VkY2NjMCxcbiAgIC8vIG5vdGlmaWNhdGlvbi1zaGFkb3c6ICNiMzZlNTcsXG4gICAvLyBub3RpZmljYXRpb24taGVhZGVyOiAjNDgyNjFiLFxuICAgLy8gdHJhZGVyLWNoYXJ0LXNpZGU6ICM2MTM0MjQsXG4gICAvLyBzaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDY4LCAzNiwgMjUsIC42KSxcbiAgIC8vIHNjcm9sbGJhci1jaXJjbGU6ICNhNjU0MzksXG4gICAvLyBiZy1jb2xvci10YWJzZXQ6ICMwZGZmOTIsXG4gICAvLyBzaGFkZS13aGl0ZS0xOiAjZmZmLFxuICAgLy8gYmFja2dyb3VuZC1pbWc6IHVybCguLy4uLy4uLy4uLy4uL3NyYy9hc3NldHMvdGhlbWVzX2ltYWdlcy8zMi5qcGcpLFxuICAgLy8gYmFja2dyb3VuZC1pbWctMjogdXJsKC4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzMyLmpwZyksXG4gXG4gICAvLzMzXG4gICAvLyBjYXJkLWNvbG9yOiAjMjgyODI4LFxuICAgLy8gY2lyY2xlLWJnOiAjMjAyMDIwLFxuICAgLy8gYm90dG9tLWNhcmQtdGV4dDogIzUyNTI1MixcbiAgIC8vIGxpZ2h0LXRleHQ6ICNhZmFlYWUsXG4gICAvLyBsaW5lLWNvbG9yOiAjMjEyMTIxLFxuICAgLy8gdXBjb21pbmctY2FyZC1jb2xvcjogIzhkOGM4YyxcbiAgIC8vIG5vdGVzLWhlYWRlcjogIzYzNjE2MSxcbiBcbiAgIC8vIG5vdGlmaWNhdGlvbnMtYmc6ICMxMzEzMTMsXG4gICAvLyBwYWdlLWJnOiAjMWMxYzFjLFxuICAgLy8gdHJhZGVycy1odWItdGV4dDogIzRmNGY0ZixcbiAgIC8vIHNjcm9sbGJhci1iYWNrZ3JvdW5kOiAjNTI1MjUyLFxuICAgLy8gY2FsZW5kYXItcm93LTI6ICMzMDMwMzAsXG4gICAvLyBsaWdodC10ZXh0LTI6ICNjY2NjY2MsXG4gICAvLyBub3RpZmljYXRpb24tc2hhZG93OiAjNzc3NTc1LFxuICAgLy8gbm90aWZpY2F0aW9uLWhlYWRlcjogIzEzMTMxMyxcbiAgIC8vIHRyYWRlci1jaGFydC1zaWRlOiAjMWMxYzFjLFxuICAgLy8gc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSgyMCwgMjAsIDIwLCAuNiksXG4gICAvLyBzY3JvbGxiYXItY2lyY2xlOiAjNGY0ZjRmLFxuICAgLy8gYmctY29sb3ItdGFic2V0OiAjMGRmZjkyLFxuICAgLy8gc2hhZGUtd2hpdGUtMTogI2ZmZixcbiAgIC8vIGJhY2tncm91bmQtaW1nOiB1cmwoLi8uLi8uLi8uLi8uLi9zcmMvYXNzZXRzL3RoZW1lc19pbWFnZXMvMzMuanBnKSxcbiAgIC8vIGJhY2tncm91bmQtaW1nLTI6IHVybCguLy4uLy4uL3NyYy9hc3NldHMvdGhlbWVzX2ltYWdlcy8zMy5qcGcpLFxuIFxuICAgLy8zNFxuICAgLy8gY2FyZC1jb2xvcjogIzY2NWM0NSxcbiAgIC8vIGNpcmNsZS1iZzogIzU2NGQzOSxcbiAgIC8vIGJvdHRvbS1jYXJkLXRleHQ6ICM0ZTQ2MzMsXG4gICAvLyBsaWdodC10ZXh0OiAjYzdiNDg5LFxuICAgLy8gbGluZS1jb2xvcjogIzRhNDIzMSxcbiAgIC8vIHVwY29taW5nLWNhcmQtY29sb3I6ICNhZTlhNmMsXG4gICAvLyBub3Rlcy1oZWFkZXI6ICM4NDc4NWMsXG4gXG4gICAvLyBub3RpZmljYXRpb25zLWJnOiAjMzMyYzIxLFxuICAgLy8gcGFnZS1iZzogIzRkNDQzMyxcbiAgIC8vIHRyYWRlcnMtaHViLXRleHQ6ICM0YzQ0MzEsXG4gICAvLyBzY3JvbGxiYXItYmFja2dyb3VuZDogIzRlNDYzMyxcbiAgIC8vIGNhbGVuZGFyLXJvdy0yOiAjNmI2MjRjLFxuICAgLy8gbGlnaHQtdGV4dC0yOiAjZDhjZmI5LFxuICAgLy8gbm90aWZpY2F0aW9uLXNoYWRvdzogIzkzODk3MSxcbiAgIC8vIG5vdGlmaWNhdGlvbi1oZWFkZXI6ICMzNDJlMjIsXG4gICAvLyB0cmFkZXItY2hhcnQtc2lkZTogIzQ3NDAzMCxcbiAgIC8vIHNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoNTAsIDQ1LCAzNCwgLjYpLFxuICAgLy8gc2Nyb2xsYmFyLWNpcmNsZTogIzRjNDQzMSxcbiAgIC8vIGJnLWNvbG9yLXRhYnNldDogIzBkZmY5MixcbiAgIC8vIHNoYWRlLXdoaXRlLTE6ICNmZmYsXG4gICAvLyBiYWNrZ3JvdW5kLWltZzogdXJsKC4vLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzM0LmpwZyksXG4gICAvLyBiYWNrZ3JvdW5kLWltZy0yOiB1cmwoLi8uLi8uLi9zcmMvYXNzZXRzL3RoZW1lc19pbWFnZXMvMzQuanBnKSxcbiBcbiAgIC8vMzVcbiAgIC8vIGNhcmQtY29sb3I6ICMxMTI5NDAsXG4gICAvLyBjaXJjbGUtYmc6ICMwZjI0MzgsXG4gICAvLyBib3R0b20tY2FyZC10ZXh0OiAjMmM0ODY0LFxuICAgLy8gbGlnaHQtdGV4dDogIzg0YTljZCxcbiAgIC8vIGxpbmUtY29sb3I6ICMwZTIxMzMsXG4gICAvLyB1cGNvbWluZy1jYXJkLWNvbG9yOiAjM2Y2ODkwLFxuICAgLy8gbm90ZXMtaGVhZGVyOiAjMjU0NDYyLFxuIFxuICAgLy8gbm90aWZpY2F0aW9ucy1iZzogIzA5MTUyMCxcbiAgIC8vIHBhZ2UtYmc6ICMwZDIwMzIsXG4gICAvLyB0cmFkZXJzLWh1Yi10ZXh0OiAjMmI0NjYxLFxuICAgLy8gc2Nyb2xsYmFyLWJhY2tncm91bmQ6ICMyYzQ4NjQsXG4gICAvLyBjYWxlbmRhci1yb3ctMjogIzFhMzE0NyxcbiAgIC8vIGxpZ2h0LXRleHQtMjogI2I3YzlkYixcbiAgIC8vIG5vdGlmaWNhdGlvbi1zaGFkb3c6ICM0MjVkNzYsXG4gICAvLyBub3RpZmljYXRpb24taGVhZGVyOiAjMDkxNjIyLFxuICAgLy8gdHJhZGVyLWNoYXJ0LXNpZGU6ICMwYzFkMmQsXG4gICAvLyBzaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDgsIDIwLCAzMSwgLjYpLFxuICAgLy8gc2Nyb2xsYmFyLWNpcmNsZTogIzJiNDY2MSxcbiAgIC8vIGJnLWNvbG9yLXRhYnNldDogIzBkZmY5MixcbiAgIC8vIHNoYWRlLXdoaXRlLTE6ICNmZmYsXG4gICAvLyBiYWNrZ3JvdW5kLWltZzogdXJsKC4vLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy90aGVtZXNfaW1hZ2VzLzM1LmpwZyksXG4gICAvLyBiYWNrZ3JvdW5kLWltZy0yOiB1cmwoLi8uLi8uLi9zcmMvYXNzZXRzL3RoZW1lc19pbWFnZXMvMzUuanBnKSxcbiBcbiAgLy8gIENocmlzdG1hc1xuICAvLyAgY2FyZC1jb2xvcjogI2E4NDAzNSxcbiAgLy8gIGNpcmNsZS1iZzogI2JkNTY0YyxcbiAgLy8gIGJvdHRvbS1jYXJkLXRleHQ6ICNiYTNjMmYsXG4gIC8vICBsaWdodC10ZXh0OiAjZjY5NDhhLFxuICAvLyAgbGluZS1jb2xvcjogIzgyMzAyNyxcbiAgLy8gIHVwY29taW5nLWNhcmQtY29sb3I6ICNlYTQ2MzQsXG4gIC8vICBub3Rlcy1oZWFkZXI6ICNiMzVkNTQsXG4gXG4gIC8vICBub3RpZmljYXRpb25zLWJnOiAjYTIzMjJjLFxuICAvLyAgcGFnZS1iZzogI2I2NGM0MyxcbiAgLy8gIHRyYWRlcnMtaHViLXRleHQ6ICNiNDNhMmUsXG4gIC8vICBzY3JvbGxiYXItYmFja2dyb3VuZDogI2JhM2MyZixcbiAgLy8gIGNhbGVuZGFyLXJvdy0yOiAjYWE0NzNkLFxuICAvLyAgbGlnaHQtdGV4dC0yOiAjZWZiZmJhLFxuICAvLyAgbm90aWZpY2F0aW9uLXNoYWRvdzogI2JiNzI2YSxcbiAgLy8gIG5vdGlmaWNhdGlvbi1oZWFkZXI6ICM3MTM0MmUsXG4gIC8vICB0cmFkZXItY2hhcnQtc2lkZTogIzc1MmQyNSxcbiAgLy8gIHNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoMTE3LCA0NSwgMzcsIC42KSxcbiAgLy8gIHNjcm9sbGJhci1jaXJjbGU6ICNiNDNhMmUsXG4gIC8vICBiZy1jb2xvci10YWJzZXQ6ICMwZGZmOTIsXG4gIC8vICBzaGFkZS13aGl0ZS0xOiAjZmZmLFxuICAvLyAgYmFja2dyb3VuZC1pbWc6IHVybChodHRwczovL2QzMDhmYWticWViazdjLmNsb3VkZnJvbnQubmV0L3dpem1hc19iZy5qcGcpLFxuICAvLyAgYmFja2dyb3VuZC1pbWctMjogdXJsKGh0dHBzOi8vZDMwOGZha2JxZWJrN2MuY2xvdWRmcm9udC5uZXQvd2l6bWFzX2JnLmpwZyksXG4gICBcbiAgIGNvbG9yLWJnLTI6ICMzYzM1OGMsXG4gICBjb2xvci1iZy0zOiAjYTIzMjJjLFxuICAgY29sb3ItYmctNDogIzU1NGRiMyxcbiAgIGNvbG9yLWJnLTU6ICMzNzMxN2EsXG4gICBjb2xvci1iZy02OiAjNTU0ZGIzLFxuICAgY29sb3ItYmctNzogIzkxNGZlZixcbiAgIFxuICAgcmFkaXVzOiAwLjVyZW0sXG4gXG4gICBjb2xvci1iZzogIzNkMzc4MCxcbiAgIGNvbG9yLWJnLWFjdGl2ZTogIzQ5NDI5OSxcbiAgIGNvbG9yLWZnOiAjYTFhMWU1LFxuICAgY29sb3ItZmctaGVhZGluZzogI2ZmZmZmZixcbiAgIGNvbG9yLWZnLXRleHQ6ICNkMWQxZmYsXG4gICBjb2xvci1mZy1oaWdobGlnaHQ6ICMwMGY5YTYsXG4gXG4gICBjb2xvci1ncmF5OiByZ2JhKDgxLCAxMTMsIDE2NSwgMC4xNSksXG4gICBjb2xvci1uZXV0cmFsOiB0cmFuc3BhcmVudCxcbiAgIGNvbG9yLXdoaXRlOiAjZmZmZmZmLFxuICAgY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiBcbiAgIGNvbG9yLXByaW1hcnk6ICM3NjU5ZmYsXG4gICBjb2xvci1zdWNjZXNzOiAjMGRmZjkyLFxuICAgY29sb3ItaW5mbzogIzAwODhmZixcbiAgIGNvbG9yLXdhcm5pbmc6ICNmZmExMDAsXG4gICBjb2xvci1kYW5nZXI6ICNmZjM4NmEsXG4gXG4gICBsaW5rLWNvbG9yOiAjMDBmOWE2LFxuICAgbGluay1jb2xvci1ob3ZlcjogIzE0ZmZiZSxcbiBcbiAgIHNlcGFyYXRvcjogIzM0MmU3MywgIFxuIFxuICAgY2FyZC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgIGxheW91dC1iZzogIzJmMjk2YixcbiAgIFxuIFxuICAgc2Nyb2xsYmFyLWZnOiAjNTU0ZGIzLFxuICAgc2Nyb2xsYmFyLWJnOiAjMzMyZTczLFxuIFxuICAgcmFkaWFsLWdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDUwJSA1MCUsICM0MjNmOGMsICMzMDJjNmUpLFxuICAgbGluZWFyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNzE3NDksICM0MTM3ODkpLFxuIFxuICAgc2lkZWJhci1mZzogY29sb3Itc2Vjb25kYXJ5LFxuICAgc2lkZWJhci1iZzogY29sb3ItYmcsXG4gXG4gICBoZWFkZXItZmc6IGNvbG9yLXdoaXRlLFxuICAgaGVhZGVyLWJnOiBjYXJkLWNvbG9yLFxuIFxuICAgZm9vdGVyLWZnOiBjb2xvci1mZyxcbiAgIGZvb3Rlci1iZzogY29sb3ItYmcsXG4gXG4gICBhY3Rpb25zLWZnOiBjb2xvci1mZyxcbiAgIGFjdGlvbnMtYmc6IGNvbG9yLWJnLFxuIFxuICAgdXNlci1mZzogY29sb3ItYmcsXG4gICB1c2VyLWJnOiBjb2xvci1mZyxcbiAgIHVzZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oaWdobGlnaHQsXG4gXG4gICBwb3BvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgIHBvcG92ZXItc2hhZG93OiBzaGFkb3csXG4gXG4gICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1wcmltYXJ5LFxuICAgY29udGV4dC1tZW51LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiBcbiAgIGZvb3Rlci1oZWlnaHQ6IGhlYWRlci1oZWlnaHQsXG4gXG4gICBzaWRlYmFyLXdpZHRoOiAxNi4yNXJlbSxcbiAgIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy40NXJlbSxcbiBcbiAgIG1lbnUtZmc6IGNvbG9yLWZnLFxuICAgbWVudS1iZzogY29sb3ItYmcsXG4gICBtZW51LWFjdGl2ZS1mZzogY29sb3Itd2hpdGUsXG4gICBtZW51LWdyb3VwLWZnOiBjb2xvci13aGl0ZSxcbiAgIG1lbnUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgIG1lbnUtYWN0aXZlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gICBtZW51LXN1Ym1lbnUtYmc6IGxheW91dC1iZyxcbiAgIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmcsXG4gICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogcmdiYSgwLCAyNTUsIDE3MCwgMC4yNSksXG4gICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGlnaGxpZ2h0LFxuICAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IDAgMnB4IDEycHggMCByZ2JhKDAsIDI1NSwgMTcwLCAwLjI1KSxcbiAgIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW0sXG4gICBtZW51LWl0ZW0tc2VwYXJhdG9yOiB0cmFuc3BhcmVudCxcbiBcbiAgIGJ0bi1oZXJvLXNoYWRvdzogMCA0cHggMTBweCAwIHJnYmEoMzMsIDcsIDc3LCAwLjUpLFxuICAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyksXG4gICBidG4taGVyby1iZXZlbC1zaXplOiAwIDNweCAwIDAsXG4gICBidG4taGVyby1nbG93LXNpemU6IDAgMnB4IDhweCAwLFxuICAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gICBidG4taGVyby13YXJuaW5nLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgIGJ0bi1oZXJvLXNlY29uZGFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICAgYnRuLW91dGxpbmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gICBidG4tb3V0bGluZS1ob3Zlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICAgYnRuLWdyb3VwLWJnOiAjMzczMjczLFxuICAgYnRuLWdyb3VwLXNlcGFyYXRvcjogIzMxMmM2NixcbiBcbiAgIGZvcm0tY29udHJvbC1iZzogIzM3MzE3YSxcbiAgIGZvcm0tY29udHJvbC1mb2N1cy1iZzogc2VwYXJhdG9yLFxuICAgZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcjogc2VwYXJhdG9yLFxuICAgZm9ybS1jb250cm9sLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiBcbiAgIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgIGNoZWNrYm94LXNpemU6IDEuMjVyZW0sXG4gICBjaGVja2JveC1ib3JkZXItc2l6ZTogMnB4LFxuICAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBjb2xvci1saWdodC0yLFxuICAgY2hlY2tib3gtY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcbiBcbiAgIGNoZWNrYm94LWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICAgY2hlY2tib3gtY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gICBjaGVja2JveC1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcbiBcbiAgIGNoZWNrYm94LWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgIGNoZWNrYm94LWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICAgY2hlY2tib3gtZGlzYWJsZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuIFxuICAgc2VhcmNoLWJnOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNzE3NDksICM0MTM3ODkpLFxuIFxuICAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgIHNtYXJ0LXRhYmxlLWJnLWV2ZW46ICMzYTM0N2EsXG4gICBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGNvbG9yLWJnLWFjdGl2ZSxcbiBcbiAgIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG4gICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLXdpZHRoOiAycHgsXG4gICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiBjb2xvci1mZy1oZWFkaW5nLFxuICAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeSxcbiAgIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjIpLFxuIFxuICAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gICBiYWRnZS1wcmltYXJ5LWJnLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICAgYmFkZ2Utc3VjY2Vzcy1iZy1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gICBiYWRnZS13YXJuaW5nLWJnLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuICAgYmFkZ2UtZGFuZ2VyLWJnLWNvbG9yOiBjb2xvci1kYW5nZXIsXG4gXG4gICBzcGlubmVyLWJnOiBjb2xvci1iZyxcbiAgIHN0ZXBwZXItYWNjZW50LWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuIFxuICAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gICB0YWJzLXNlbGVjdGVkLWRlZ3JlZXM6IDIwZGVnLFxuIFxuICAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gICBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICM0ZTQwOTUsXG4gICBjYWxlbmRhci10b2RheS1pdGVtLWJnOiAjMzUyZjZlLFxuIFxuICAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogIzMxMmU3NSxcbiBcbiAgIHRvYXN0ci1jb2xvci1mZzogY29sb3Itd2hpdGUsXG4gICB0b2FzdHItcGFkZGluZzogMS4yNXJlbSxcbiAgIHRvYXN0ci1ib3JkZXI6IDAsXG4gICB0b2FzdHItZGVmYXVsdC1iYWNrZ3JvdW5kOiAjYmNjM2NjLFxuIFxuICAgdG9vbHRpcC1mZzogY29sb3ItYmcsXG4gICB0b29sdGlwLXN0YXR1cy1mZzogY29sb3Itd2hpdGUsXG4gXG4gICBkYXRlcGlja2VyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgIGRhdGVwaWNrZXItc2hhZG93OiBzaGFkb3csXG4gXG4gICByYWRpby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgIHJhZGlvLWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1wcmltYXJ5LFxuICAgXG4gICBjYWxlbmRhci1yb3ctYmc6ICNmZmYsXG4gICBjYWxlbmRhci1sYXJnZS13aWR0aDogMTAwJSxcbiAgIGNhbGVuZGFyLWxhcmdlLWJvZHktaGVpZ2h0OiAyNy43NXJlbSxcbiAgIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoOiAxMDAlLFxuICAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0OiA1LjVyZW0sXG4gICBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoOiA0LjI1cmVtLFxuICAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IDIuMzc1cmVtLFxuICAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG4gKTtcbiAvLyByZWdpc3RlciB0aGUgdGhlbWVcbiAkbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvc21pYywgZGVmYXVsdCk7XG4gIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuLy8gZGVmYXVsdCB0aGUgYmFzZSB0aGVtZVxuJHRoZW1lOiAoXG5cbiAgY29sb3ItYmctMjogIzc3YjFmZixcbiAgXG4gIGhlYWRlci1mZzogI2Y3ZmFmYixcbiAgaGVhZGVyLWJnOiAjMTExMjE4LFxuXG4gIGxheW91dC1iZzogI2YxZjVmOCxcblxuICBjb2xvci1mZy1oZWFkaW5nOiAjMTgxODE4LFxuICBjb2xvci1mZy10ZXh0OiAjNGI0YjRiLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLFxuXG4gIHNlcGFyYXRvcjogI2NkZDVkYyxcblxuICByYWRpdXM6IDAuMTdyZW0sXG5cbiAgc2Nyb2xsYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM3M2ExZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICM1ZGNmZTMsXG4gIGNvbG9yLWluZm86ICNiYTdmZWMsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmEzNmIsXG4gIGNvbG9yLWRhbmdlcjogI2ZmNmI4MyxcblxuICBidG4tc2Vjb25kYXJ5LWJnOiAjZWRmMmY1LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogI2VkZjJmNSxcblxuICBhY3Rpb25zLWZnOiAjZDNkYmU1LFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcblxuICBzaWRlYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGJvcmRlci1jb2xvcjogI2Q1ZGJlMCxcblxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtYmc6ICNlM2U5ZWUsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LWFjdGl2ZS1iZzogbWVudS1iZyxcblxuICBtZW51LXN1Ym1lbnUtYmc6IG1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogI2NkZDVkYyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1hY3RpdmUtYmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiBub25lLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItZmc6IG1lbnUtc3VibWVudS1hY3RpdmUtZmcsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1iZzogbWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tY29udGFpbmVyLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAuNXJlbSxcblxuICBidG4tYm9yZGVyLXJhZGl1czogYnRuLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1cyxcblxuICBidG4taGVyby1kZWdyZWU6IDBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWluZm8tZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWRhbmdlci1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogYnRuLWJvcmRlci1yYWRpdXMsXG4gIFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItbGlnaHQtMixcblxuICBjYXJkLXNoYWRvdzogbm9uZSxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDAsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItY29sb3IsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci13aWR0aDogMCxcblxuICBsaW5rLWNvbG9yOiAjNWRjZmUzLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjN2RjZmUzLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgYWN0aW9ucy1zZXBhcmF0b3I6ICNmMWY0ZjUsXG5cbiAgbW9kYWwtc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHRhYnMtc2VwYXJhdG9yOiAjZWJlY2VlLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG5cbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcblxuICBwb3BvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcblxuICBmb290ZXItc2hhZG93OiBub25lLFxuICBmb290ZXItc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG4gIGZvb3Rlci1mZy1oaWdobGlnaHQ6ICMyYTJhMmEsXG5cbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogI2EyYjJjNyxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZTNlY2ZlLFxuICBjYWxlbmRhci10b2RheS1mZzogY29sb3Itd2hpdGUsXG5cbiAgdG9hc3RyLWljb24tcmFkaXVzOiByYWRpdXMsXG5cbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIFxuICBjYWxlbmRhci1sYXJnZS13aWR0aDogMTAwJSxcbiAgY2FsZW5kYXItbGFyZ2UtYm9keS1oZWlnaHQ6IDI3Ljc1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aDogMTAwJSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0OiA1LjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDQuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3Jwb3JhdGUsIGRlZmF1bHQpO1xuIiwiQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnMuc2Nzcyc7XHJcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MnO1xyXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzJztcclxuXHJcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWluZyc7XHJcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL2RlZmF1bHQnO1xyXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9jb3NtaWMnO1xyXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9jb3Jwb3JhdGUnO1xyXG5cclxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQge1xyXG5cdDo6bmctZGVlcCAubGl2ZS1oZWFkZXIgLmZsZXhDZW50ZXIge1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mbGV4Q2VudGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHQ6Om5nLWRlZXAgbmItc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cdFx0Ym94LXNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQ6Om5nLWRlZXAgbmItc2lkZWJhciAubWFpbi1jb250YWluZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQ6Om5nLWRlZXAgbmItbGlzdC1pdGVtIHtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcclxuXHR9XHJcblx0OjpuZy1kZWVwIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdDo6bmctZGVlcCAubG9nby1kYXNoYm9hcmQge1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZDMwOGZha2JxZWJrN2MuY2xvdWRmcm9udC5uZXQvZGFzaGJvYXJkX2ltYWdlcy93enJkX2xpdmUucG5nKSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgICBcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdDo6bmctZGVlcCAuZHJvcGRvd24tY29udGVudCAubGluayB7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdDo6bmctZGVlcCBuYi1hY3Rpb25zIG5iLWFjdGlvbiB7XHJcblx0XHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQ6Om5nLWRlZXAgLmRyb3Bkb3duLWFycm93LXVwIHtcclxuXHRcdGJvcmRlci1ib3R0b206IDEwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5saXZlLWhlYWRlciA6Om5nLWRlZXAgLmZsZXhDZW50ZXIge1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5zZWN0aW9uOm50aC1jaGlsZCgxKT5kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5zZWN0aW9uOm50aC1jaGlsZCgxKT5kaXY+ZGl2IHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XHJcbiAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4ucGxhdGZvcm1IZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG59XHJcblxyXG5zZWN0aW9uOm50aC1jaGlsZCgxKT5zcGFuIHtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgd2lkdGg6IDRweDtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc1NnB4KSB7XHJcbiAgc2VjdGlvbjpudGgtY2hpbGQoMSk+ZGl2IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uOm50aC1jaGlsZCgxKT5zcGFuIHtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgbWFyZ2luOiAzMnB4IGF1dG87XHJcbn1cclxuXHJcbnNlY3Rpb246bnRoLW9mLXR5cGUoMikge1xyXG4gIG1hcmdpbjogMzJweCBhdXRvO1xyXG59XHJcblxyXG4ucmVmZXItcGFnZS1oZWFkZXJzIHtcclxuICBmb250LXNpemU6IDEuNjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnJlZmVyLXBhZ2Utc3ViaGVhZGVycyB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ib3JkZXItdHdvIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI0ZGMDAwMFxyXG59XHJcblxyXG4uYm9yZGVyLWZpdmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IDVweCBkYXNoZWQgI0ZGMDAwMDtcclxuICB0b3A6IC0zcHg7XHJcbiAgYm90dG9tOiAtM3B4O1xyXG4gIGxlZnQ6IC0zcHg7XHJcbiAgcmlnaHQ6IC0zcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItdGVuOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAxMHB4IGRhc2hlZCAjRkYwMDAwO1xyXG4gIHRvcDogLThweDtcclxuICBib3R0b206IC04cHg7XHJcbiAgbGVmdDogLThweDtcclxuICByaWdodDogLThweDtcclxufVxyXG5cclxuLmJvcmRlci1vZGQ6YmVmb3JlIHtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHhcclxufVxyXG5cclxuLmJvcmRlci1tYWluIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZS1zcGFjZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdyZWVuLXNwYWNlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICBsZWZ0OiAxNy44JTtcclxuICB0b3A6IDE3JTtcclxufVxyXG5cclxuLmdyZWVuLXNwYWNlci10d28ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogNTcuMjUlO1xyXG4gIHRvcDogMTclO1xyXG59XHJcblxyXG4ubGl2ZS1zdGF0dXMge1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxpdmVTdGF0dXNDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi53ZWJpbmFySW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHN0YXR1cyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHN0YXR1cyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBzdGF0dXMge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3RhdHVzIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubGl2ZS1zdGF0dXMge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzdGF0dXMgMnMgaW5maW5pdGU7XHJcbiAgLyogU2FmYXJpIDQrICovXHJcbiAgLW1vei1hbmltYXRpb246IHN0YXR1cyAycyBpbmZpbml0ZTtcclxuICAvKiBGeCA1KyAqL1xyXG4gIC1vLWFuaW1hdGlvbjogc3RhdHVzIDJzIGluZmluaXRlO1xyXG4gIC8qIE9wZXJhIDEyKyAqL1xyXG4gIGFuaW1hdGlvbjogc3RhdHVzIDJzIGluZmluaXRlO1xyXG4gIC8qIElFIDEwKywgRnggMjkrICovXHJcbn1cclxuXHJcbi5mbGV4LXZlcnRpY2FsIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXR1c1RleHRpbm5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xyXG4gIHotaW5kZXg6IDk5OTk5OTk7XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxudmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtc3RhcnQtcGxheWJhY2stYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG52aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogQ291bGQgVXNlIHRoaXNlIGFzIHdlbGwgZm9yIEluZGl2aWR1YWwgQ29udHJvbHMgKi9cclxudmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGxheS1idXR0b24ge31cclxuXHJcbnZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXZvbHVtZS1zbGlkZXIge31cclxuXHJcbnZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLW11dGUtYnV0dG9uIHt9XHJcblxyXG52aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy10aW1lbGluZSB7fVxyXG5cclxudmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtY3VycmVudC10aW1lLWRpc3BsYXkge31cclxuXHJcbi53ZWJpbmFyVmlkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5saXZlU3RhdHVzQWJzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzVweDtcclxuICB0b3A6IDc1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGl2ZVZpZGVvUGFnZSB7fVxyXG5cclxuLmxpdmVWaWRlb0NvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxudmlkZW8ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiA1Ni4yNXZ3O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDE3Ny43Nzc3Nzc3OHZoO1xyXG59XHJcblxyXG4uZmxleENlbnRlciB7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuXHJcbi5saXZlQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG59XHJcblxyXG4uaGlkZURlc2t0b3Age1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNob3dEZXNrdG9wIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5ub3QtbGl2ZS1iYWNrZ3JvdW5kIHtcclxuICAuc2Nyb2xsYWJsZS1jb250YWluZXIge1xyXG4gICAgLmxheW91dCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9kMzA4ZmFrYnFlYms3Yy5jbG91ZGZyb250Lm5ldC9zdGF0aWNfZ2lmLmY3OWI5NzcxZjY0MzVhY2MzYWJkLmdpZicpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubGl2ZS1iYWNrZ3JvdW5kIHtcclxuICAuc2Nyb2xsYWJsZS1jb250YWluZXIge1xyXG4gICAgLmxheW91dCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9kMzA4ZmFrYnFlYms3Yy5jbG91ZGZyb250Lm5ldC9saXZlQmFja2dyb3VuZC5qcGcnKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxpdmVWaWRlb1BhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wbGF0Zm9ybUhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMyk7XHJcbiAgbmF2IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5saXZlLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/livepage/livepage.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/livepage/livepage.component.ts ***!
  \****************************************************************/
/*! exports provided: livepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "livepageComponent", function() { return livepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var livepageComponent = /** @class */ (function () {
    function livepageComponent(_dataservice, toast, _configuration, sanitizer) {
        this._dataservice = _dataservice;
        this.toast = toast;
        this._configuration = _configuration;
        this.sanitizer = sanitizer;
        this.vimeoBroadcastInfo = {
            url: '',
            isLive: 0,
        };
        this.loading = true;
    }
    livepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataservice
            .getAll(this._configuration.GetVimeoBroadcastInfoApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                return;
            }
            _this.vimeoBroadcastInfo = resp.vimeoInfo;
            _this.vimeoBroadcastInfo.url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.vimeoBroadcastInfo.url);
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.loading = false;
        }, function () {
        });
    };
    livepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-livepage',
            template: __webpack_require__(/*! ./livepage.component.html */ "./src/app/pages/dashboard/livepage/livepage.component.html"),
            styles: [__webpack_require__(/*! ./livepage.component.scss */ "./src/app/pages/dashboard/livepage/livepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_4__["Configuration"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], livepageComponent);
    return livepageComponent;
}());



/***/ }),

/***/ "./src/app/pages/liveHeader/liveHeader.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/liveHeader/liveHeader.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flexCenter liveHeader\">\n\n\t\t<img routerLink=\"/dashboard\" src=\"./assets/wzrd_live.png\" class=\"logo-dashboard\">\n\t\t<span style=\"flex: 1 auto;\"></span>\n\t\t<nb-actions size=\"large\" *ngIf=\"isLargeScreen\">\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/dashboard\">Dashboard</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/course\">Course</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/library\">Library</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/examination\">Examinations</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/traders-hub\">Trader's Hub</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/charts\">Charts</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/portfolio\">Portfolio</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/journal\">Journal</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/position-size-calculator\">Calculator</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/technicals\">Technicals</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/WZRD-wednesdays\">WZRD Wednesdays</nb-action>\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/podcasts\">Podcasts</nb-action>\t\t\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/news\">News</nb-action>\n\t\t\t<!--<nb-action class=\"header-link whiteColor cap\">WizMe</nb-action>-->\n\t\t\t<nb-action class=\"header-link whiteColor cap\" routerLink=\"/battle-of-wzrds\">Battle of WZRDs</nb-action>\n\t\t\t<!-- <nb-action class=\"header-link whiteColor cap\">WZRD Marketplace</nb-action> -->\n\t\t\t<nb-action class=\"header-link whiteColor cap\"><a class=\"header-link\" href=\"https://wzrd.store\"\n\t\t\t\t\ttarget=\"_blank\">WZRD Store</a></nb-action>\n\t\t\t<!-- <nb-action class=\"header-link whiteColor cap notification\">\n\t\t\t\t<app-notifications></app-notifications>\n\t\t\t</nb-action> -->\n\t\t\t<nb-action class=\"whiteColor dropdown\" routerLink=\"/profile\"><span\n\t\t\t\t\tclass=\"dropbtn\">{{name| titlecase}}</span><span><img class=\"profile-header\"\n\t\t\t\t\t\tsrc=\"{{profileImage}}\"></span>\n\t\t\t\t<div class=\"dropdown-overlay\"></div>\n\t\t\t\t<div class=\"dropdown-arrow-up\"></div>\n\t\t\t\t<div class=\"dropdown-content\">\n\t\t\t\t\t<nb-action routerLink=\"/profile\" class=\"link whiteColor\">Profile</nb-action>\n\t\t\t\t\t<nb-action routerLink=\"/settings\" class=\"link whiteColor text-center\">Settings</nb-action>\n\t\t\t\t\t<nb-action routerLink=\"/\" class=\"link whiteColor text-center\">Log Out</nb-action>\n\t\t\t\t</div>\n\t\t\t</nb-action>\n\t\t</nb-actions>\n\t\t<nb-actions size=\"medium\" *ngIf=\"!isLargeScreen\">\n\t\t\t<nb-action (click)=\"toogleSidebar()\" icon=\"nb-menu\" style=\"padding: 0;\"></nb-action>\n\t\t</nb-actions>\n\t</div>\n\t\n\t<nb-sidebar right fixed tag=\"right\" state=\"collapsed\" *ngIf=\"!isLargeScreen\">\n\t\t<nb-actions size=\"medium\" class=\"py-2\">\n\t\t\t<nb-action (click)=\"toogleSidebar()\" icon=\"nb-close\" class=\"p-0\"></nb-action>\n\t\t</nb-actions>\n\t\t<nb-list>\n\t\t\t<nb-list-item class=\"link whiteColor cap\" routerLink=\"/dashboard\">Dashboard</nb-list-item>\n\t\t\t\n\t\t\t<nb-list-item class=\"link whiteColor cap subMenuHeader\" (click)=\"toggleSubMenu('education')\" >Education <span [ngClass]=\"educationSubMenu ? 'fal fa-angle-up': 'fal fa-angle-down' \"></span> </nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"educationSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/course\">Course</nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"educationSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/library\">Library</nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"educationSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/examination\">Examinations</nb-list-item>\n\t\t\t\n\t\t\t<nb-list-item class=\"link whiteColor cap subMenuHeader\" (click)=\"toggleSubMenu('trader')\" >Traders Essentials <span [ngClass]=\"traderSubMenu ? 'fal fa-angle-up': 'fal fa-angle-down' \"></span> </nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"traders-hub\">Trader's Hub</nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/charts\">Charts</nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/portfolio\">Portfolio</nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/journal\">Journal</nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"traderSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/position-size-calculator\">Calculator</nb-list-item>\n\t\t\t\n\t\t\t<nb-list-item class=\"link whiteColor cap subMenuHeader\" (click)=\"toggleSubMenu('material')\" >Materials <span [ngClass]=\"materialSubMenu ? 'fal fa-angle-up': 'fal fa-angle-down' \"></span> </nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"materialSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/technicals\">Technicals</nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"materialSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/WZRD-wednesdays\">WZRD Wednesdays</nb-list-item>\n\t\t\t\t<nb-list-item *ngIf=\"materialSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/podcasts\">Podcast</nb-list-item>\n\t\t\t\t<nb-list-item class=\"link whiteColor cap\" routerLink=\"/news\">News</nb-list-item>\n\t\t\t\t<!-- <nb-list-item *ngIf=\"materialSubMenu\" class=\"link whiteColor cap subMenu\" routerLink=\"/news\">News</nb-list-item> -->\n\t\n\t\t\t<!--<nb-list-item class=\"link whiteColor cap\">WizMe</nb-list-item>-->\n\t\t\t<nb-list-item class=\"link whiteColor cap\" routerLink=\"/battle-of-wzrds\">Battle of WZRDs</nb-list-item>\n\t\n\t\t\t<!-- <nb-list-item class=\"link whiteColor cap subMenuHeader\" (click)=\"toggleSubMenu('wzrd')\" >WZRD Marketplace  <span [ngClass]=\"wzrdMarketPlaceSubMenu ? 'fal fa-angle-up': 'fal fa-angle-down' \"></span> </nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >New</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Popular</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Trending</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >News</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Avatars</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Headers</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >WizCoins</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >Order History</nb-list-item>\n\t\t\t<nb-list-item *ngIf=\"wzrdMarketPlaceSubMenu\" class=\"link whiteColor cap subMenu\" >My Account</nb-list-item> -->\n\t\n\t\t\t<!-- <nb-list-item class=\"link whiteColor cap\"><a href=\"https://wzrd.store\" target=\"_blank\">WZRD Store</a></nb-list-item> -->\n\t\t\t<nb-list-item class=\"link whiteColor cap\" routerLink=\"/profile\">Profile</nb-list-item>\n\t\t\t<nb-list-item class=\"link whiteColor cap\" style=\"margin-bottom: 150px\" routerLink=\"/\">Logout</nb-list-item>\n\t\t\t<!-- <nb-list-item><span class=\"usernameBottom\">{{name| titlecase}}</span><span><img class=\"profile-header-bottom\" src=\"./assets/profile/cryptowzrd_logo.png\"></span></nb-list-item> -->\n\t\t</nb-list>\n\t</nb-sidebar>\n\t\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/liveHeader/liveHeader.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/liveHeader/liveHeader.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/pages/liveHeader/liveHeader.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/liveHeader/liveHeader.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebar, router, _configuration) {
        this.sidebar = sidebar;
        this.router = router;
        this._configuration = _configuration;
        this.isLargeScreen = false;
        this.links = [
            { link: 'dashboard', title: 'Dashboard' },
            { link: 'course', title: 'Course' },
            { link: 'library', title: 'Library' },
            { link: 'examinations', title: 'Examinations' },
            { link: 'traders-hub', title: 'Trader\'s Hub' },
            { link: 'tradingview', title: 'Charts' },
            { link: 'portfolio', title: 'Portfolio' },
            { link: 'journal', title: 'Journal' },
            { link: 'technicals', title: 'Technicals' },
            { link: 'WZRD-wednesdays', title: 'WZRD Wednesdays' },
            { link: 'podcasts', title: 'Podcasts' },
            // { link: 'news', title: 'News' },		
            //{ link: 'WizMe', title: 'WizMe' },	
            //{ link: 'WZRD-book', title: 'WZRD Book' },  
            { link: 'battle-of-wzrds', title: 'Battle of WZRDs' },
        ];
        this.title = "";
        this.profileImage = '';
        this.profileImage = localStorage.getItem(this._configuration.ProfileImageKey) ? localStorage.getItem(this._configuration.ProfileImageKey) : './assets/profile/cryptowzrd_logo.png';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var item;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setScreen(window.innerWidth);
                this.url = this.router.url.split("/");
                this.title = this.url[this.url.length - 1].replace("-", " ");
                item = localStorage.getItem(this._configuration.NameKey);
                this.name = item;
                return [2 /*return*/];
            });
        });
    };
    HeaderComponent.prototype.toogleSidebar = function () {
        this.sidebar.toggle(false, 'right');
    };
    HeaderComponent.prototype.backLink = function () {
        var link = this.url[this.url.length - 2];
        return link ? "/" + link : '/dashboard';
    };
    HeaderComponent.prototype.resize = function (e) {
        this.setScreen(e.innerWidth);
    };
    HeaderComponent.prototype.setScreen = function (width) {
        this.isLargeScreen = width >= 1366 ? true : false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "resize", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-live',
            template: __webpack_require__(/*! ./liveHeader.component.html */ "./src/app/pages/liveHeader/liveHeader.component.html"),
            styles: [__webpack_require__(/*! ./liveHeader.component.scss */ "./src/app/pages/liveHeader/liveHeader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/liveHeader/liveHeader.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/liveHeader/liveHeader.module.ts ***!
  \*******************************************************/
/*! exports provided: liveHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveHeaderModule", function() { return liveHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _liveHeader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liveHeader.component */ "./src/app/pages/liveHeader/liveHeader.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var liveHeaderModule = /** @class */ (function () {
    function liveHeaderModule() {
    }
    liveHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_liveHeader_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbPopoverModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"]
            ],
            exports: [_liveHeader_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarService"]]
        })
    ], liveHeaderModule);
    return liveHeaderModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map