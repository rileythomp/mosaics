(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rileythompson/github/mosaics/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/images.service */ "lA0O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.color1 = '123456';
        this.color2 = 'ffffff';
        this.distance = 'euclidean';
        this.distanceAlgos = [
            'Euclidean',
            'Manhattan',
            'Chebyshev'
        ];
        this.sites = 100;
        this.lines = true;
        this.voronoi = 'voronoi';
        this.splits = 3;
        this.fractal = 'fractal';
        this.imgWarning = '';
    }
    ngOnInit() {
        document.getElementById('video').style.display = 'none';
        this.hideControls();
        this.getVoronoiImage('voronoi');
        document.getElementById('voronoi-controls').style.display = 'inline-block';
    }
    changeImageControls() {
        this.hideControls();
        let ctrl = document.getElementById('image-type').value;
        if (ctrl == 'voronoi' || ctrl == 'moving') {
            document.getElementById('voronoi-controls').style.display = 'inline-block';
            this.getVoronoiImage();
        }
        else if (ctrl == 'fractal' || ctrl == 'htree' || ctrl == 'tsquare') {
            document.getElementById('fractal-controls').style.display = 'inline-block';
            this.getFractalImage();
        }
        else if (ctrl == 'stainedglass2' || ctrl == 'quadimage' || ctrl == 'circles') {
            document.getElementById('input-controls').style.display = 'inline-block';
            this.getStainglassImage();
        }
    }
    getVoronoiImage(type) {
        this.distance = document.getElementById('distance-algo').value;
        this.sites = Number(document.getElementById('regions').value);
        this.color1 = document.getElementById('color1').value.substring(1);
        this.color2 = document.getElementById('color2').value.substring(1);
        this.lines = document.getElementById('lines').checked;
        this.voronoi = type || document.getElementById('image-type').value || 'voronoi';
        if (this.voronoi == 'moving') {
            document.getElementById('loading').style.display = 'block';
        }
        this.imageService.getVoronoiImage(this.voronoi, this.lines, this.sites, this.distance, this.color1, this.color2).subscribe((res) => {
            var imgUrl = URL.createObjectURL(res);
            this.showMedia(this.voronoi, imgUrl);
            document.getElementById('loading').style.display = 'none';
        });
    }
    getFractalImage() {
        this.splits = Number(document.getElementById('splits').value);
        this.fractal = document.getElementById('image-type').value;
        this.imageService.getFractalImage(this.fractal, this.splits).subscribe((res) => {
            var imgUrl = URL.createObjectURL(res);
            this.showMedia(this.fractal, imgUrl);
        });
    }
    getStainglassImage() {
        let file = document.getElementById('image-file').files[0];
        if (file == undefined || file == null) {
            this.imgWarning = 'Must select an image';
            setTimeout(() => {
                this.imgWarning = '';
            }, 2000);
            return;
        }
        this.distance = document.getElementById('sg-dist-algo').value;
        this.sites = Number(document.getElementById('sites').value);
        this.lines = document.getElementById('sg-lines').checked;
        let stainglass = document.getElementById('image-type').value;
        document.getElementById('sg-loading').style.display = 'block';
        this.imageService.getStainglassImage(stainglass, this.lines, this.sites, this.distance, file).subscribe((res) => {
            var imgUrl = URL.createObjectURL(res);
            this.showMedia(stainglass, imgUrl);
            document.getElementById('sg-loading').style.display = 'none';
        });
    }
    showMedia(type, imgUrl) {
        if (type == 'moving') {
            document.getElementById('image').style.display = 'none';
            document.getElementById('video').style.display = 'block';
            document.getElementById('video').src = imgUrl;
        }
        else {
            document.getElementById('video').style.display = 'none';
            document.getElementById('image').style.display = 'block';
            document.getElementById('image').src = imgUrl;
        }
    }
    hideControls() {
        let controls = document.getElementsByClassName('image-control');
        for (let i = 0; i < controls.length; i++) {
            controls[i].style.display = 'none';
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 96, vars: 1, consts: [["id", "app"], [1, "app-panel"], ["id", "image-select"], ["name", "", "id", "image-type", 3, "change"], ["value", "stainedglass2"], ["value", "quadimage"], ["value", "circles"], ["value", "voronoi", "selected", ""], ["value", "fractal"], ["value", "htree"], ["value", "tsquare"], ["id", "media"], ["id", "image", "src", "", "alt", "", 2, "border", "1px solid black"], ["controls", "", "autoplay", "", "loop", "", "id", "video", "type", "video/mp4", "src", "", "alt", "", 2, "border", "1px solid black"], ["id", "image-controls", 1, "app-panel"], ["id", "voronoi-controls", 1, "image-control"], [1, "control"], ["id", "color1", "type", "color", "value", "#123456", 3, "change"], [2, "display", "inline"], ["id", "color2", "type", "color", "value", "#ffffff", 3, "change"], ["id", "distance-algo", 3, "change"], ["selected", "", "value", "euclidean"], ["value", "manhattan"], ["value", "chebyshev"], ["id", "regions", "type", "number", "min", "1", "max", "500", "value", "100", 3, "change"], ["id", "lines", "checked", "", "type", "checkbox", 3, "change"], [3, "click"], ["id", "loading"], [1, "loader"], ["id", "fractal-controls", 1, "image-control"], ["id", "splits", "type", "number", "min", "0", "max", "7", "value", "3", 3, "change"], ["id", "input-controls", 1, "image-control"], ["id", "image-file", "type", "file", "accept", ".png, .jpg, .jpeg", 3, "change"], ["id", "sg-dist-algo", 3, "change"], ["id", "sites", "type", "number", "min", "1", "max", "500", "value", "100", 3, "change"], ["id", "sg-lines", "checked", "", "type", "checkbox", 3, "change"], ["id", "sg-loading"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select an image type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_5_listener() { return ctx.changeImageControls(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mosaics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quad Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Circle Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Voronoi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fractal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "H Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "T Square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "video", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select color gradient: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_29_listener() { return ctx.getVoronoiImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_32_listener() { return ctx.getVoronoiImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Distance Algorithm: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_36_listener() { return ctx.getVoronoiImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Euclidean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Manhattan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Chebyshev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Splits (1 - 500): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_46_listener() { return ctx.getVoronoiImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lines: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_50_listener() { return ctx.getVoronoiImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_52_listener() { return ctx.getVoronoiImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Generate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Please be patient, generating the video may take up to a minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Splits (0 - 7): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_62_listener() { return ctx.getFractalImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Select an image: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_67_listener() { return ctx.getStainglassImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Distance Algorithm: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_71_listener() { return ctx.getStainglassImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Euclidean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Manhattan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Chebyshev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Splits (1 - 500): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_81_listener() { return ctx.getStainglassImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Lines: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_85_listener() { return ctx.getStainglassImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_87_listener() { return ctx.getStainglassImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Generate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Please be patient, generating the image may take a few seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.imgWarning);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#app[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  margin-top: 5em;\n}\n#app[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n#app[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.25em 0.5em;\n}\n#app[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.25em;\n}\n#app[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  padding: 0.25m;\n}\n#app[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  zoom: 1.5;\n  transform: scale(1.5);\n  transform-origin: 0 0;\n}\n#app[_ngcontent-%COMP%]   .app-panel[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  margin: 0 1em;\n  padding: 2em;\n}\n#app[_ngcontent-%COMP%]   .image-control[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n#app[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #123456;\n  width: 20px;\n  height: 20px;\n  \n  animation: spin 2s linear infinite;\n  \n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n#app[_ngcontent-%COMP%]   #image-select[_ngcontent-%COMP%] {\n  float: right;\n}\n#app[_ngcontent-%COMP%]   #image-controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n#app[_ngcontent-%COMP%]   #image-controls[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 10em;\n  display: inline-block;\n}\n#app[_ngcontent-%COMP%]   #loading[_ngcontent-%COMP%], #app[_ngcontent-%COMP%]   #sg-loading[_ngcontent-%COMP%] {\n  display: none;\n}\n#app[_ngcontent-%COMP%]   #media[_ngcontent-%COMP%] {\n  min-width: 512px;\n}\n#app[_ngcontent-%COMP%]   #media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 800px;\n  max-height: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JpbGV5dGhvbXBzb24vZ2l0aHViL21vc2FpY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FETEE7RUFPTSxpQkFBQTtBQ0NOO0FEUkE7RUFXRSxxQkFBQTtBQ0FGO0FEWEE7RUFlRSxlQUFBO0FDREY7QURkQTtFQW1CRSxjQUFBO0FDRkY7QURqQkE7RUF1QkUsU0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNIRjtBRHRCQTtFQTZCRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDSkY7QUQzQkE7RUFtQ00scUJBQUE7QUNMTjtBRDlCQTtFQXVDUSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQ0xOLFdBQVc7RURPTCxrQ0FBQTtFQ0xOLFdBQVc7QUFDYjtBRFdRO0VBQ0w7SUFBSyx1QkFBQTtFQ0FOO0VEQ0M7SUFBTyx5QkFBQTtFQ0VSO0FBQ0Y7QUR6REE7RUEyREksWUFBQTtBQ0NKO0FENURBO0VBb0VZLGtCQUFBO0FDTFo7QUQvREE7RUF5RVksZUFBQTtFQUNBLHFCQUFBO0FDUFo7QURuRUE7O0VBZ0ZRLGFBQUE7QUNUUjtBRHZFQTtFQW9GTSxnQkFBQTtBQ1ZOO0FEMUVBO0VBdUZRLGNBQUE7RUFDQSxnQkFBQTtFQUNOLGlCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjsgXG4gICAgbWFyZ2luLXRvcDogNWVtO1xuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICB9XG5cblx0YnV0dG9uIHtcblx0XHRwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG5cdH1cblxuXHRzZWxlY3Qge1xuXHRcdHBhZGRpbmc6IDAuMjVlbTtcblx0fVxuXG5cdGlucHV0W3R5cGU9bnVtYmVyXSB7XG5cdFx0cGFkZGluZzogMC4yNW07XG5cdH1cblxuXHRpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG5cdFx0em9vbTogMS41O1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS41KTtcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG5cdH1cblxuXHQuYXBwLXBhbmVsIHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0XHRtYXJnaW46IDAgMWVtO1xuXHRcdHBhZGRpbmc6IDJlbTtcblx0fVxuXG4gICAgLmltYWdlLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5sb2FkZXIge1xuICAgICAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMxMjM0NTY7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIC8qIFNhZmFyaSAqL1xuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG5cdFx0XHQwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cblx0XHRcdDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcblx0XHRcdDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cblx0XHRcdDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICBcdH1cbiAgICB9XG5cbiAgI2ltYWdlLXNlbGVjdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cblx0Ly8gI2ltYWdlLXR5cGUge1xuICAvLyAgIGZsb2F0OiByaWdodDtcbiAgLy8gfVxuXG4gICAgI2ltYWdlLWNvbnRyb2xzIHtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjbG9hZGluZywgI3NnLWxvYWRpbmcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNtZWRpYSB7XG4gICAgICBtaW4td2lkdGg6IDUxMnB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcblx0XHRtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICAgIH1cbiAgICB9XG59XG4iLCIjYXBwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuI2FwcCBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG4jYXBwIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbn1cbiNhcHAgc2VsZWN0IHtcbiAgcGFkZGluZzogMC4yNWVtO1xufVxuI2FwcCBpbnB1dFt0eXBlPW51bWJlcl0ge1xuICBwYWRkaW5nOiAwLjI1bTtcbn1cbiNhcHAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB6b29tOiAxLjU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xufVxuI2FwcCAuYXBwLXBhbmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbjogMCAxZW07XG4gIHBhZGRpbmc6IDJlbTtcbn1cbiNhcHAgLmltYWdlLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jYXBwIC5sb2FkZXIge1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMxMjM0NTY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLyogU2FmYXJpICovXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC8qIFNhZmFyaSAqL1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4jYXBwICNpbWFnZS1zZWxlY3Qge1xuICBmbG9hdDogcmlnaHQ7XG59XG4jYXBwICNpbWFnZS1jb250cm9scyBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4jYXBwICNpbWFnZS1jb250cm9scyAuY29udHJvbCBzcGFuIHtcbiAgbWluLXdpZHRoOiAxMGVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jYXBwICNsb2FkaW5nLFxuI2FwcCAjc2ctbG9hZGluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jYXBwICNtZWRpYSB7XG4gIG1pbi13aWR0aDogNTEycHg7XG59XG4jYXBwICNtZWRpYSBpbWcge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogODAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _services_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lA0O":
/*!********************************************!*\
  !*** ./src/app/services/images.service.ts ***!
  \********************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ImagesService {
    constructor(http) {
        this.http = http;
        this.host = 'https://voronoi-api.herokuapp.com';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'image/png'
            }),
            responseType: 'blob' // wtf?? https://stackoverflow.com/questions/50798592/angular-6-how-to-set-response-type-as-text-while-making-http-call
        };
    }
    getVoronoiImage(type, lines, sites, dist, c1, c2) {
        return this.http.get(`${this.host}/${type}?lines=${lines ? 't' : 'f'}&sites=${sites}&distance=${dist}&color1=${c1}&color2=${c2}`, this.httpOptions);
    }
    getFractalImage(type, splits) {
        return this.http.get(`${this.host}/${type}?splits=${splits}`, this.httpOptions);
    }
    getStainglassImage(type, lines, sites, dist, img) {
        return this.http.post(`${this.host}/${type}?lines=${lines ? 't' : 'f'}&sites=${sites}&distance=${dist}`, img, this.httpOptions);
    }
}
ImagesService.ɵfac = function ImagesService_Factory(t) { return new (t || ImagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImagesService, factory: ImagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map