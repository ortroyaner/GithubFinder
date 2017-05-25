webpackJsonp([0],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(268);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '' };
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/ortroyaner/ionicStart/gitget/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content" padding>\n  <div class="login-box">\n\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ortroyaner/ionicStart/gitget/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map