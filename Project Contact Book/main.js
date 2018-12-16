(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//here you find the routes we used, but keep in mind that these are all protected by the auth.service module (if you are not logged in, you don't see anything!)
var routes = [
    {
        path: '', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] //we route per default to our main page (contact.component)
    },
    {
        path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_3__["SupportComponent"] //the email component
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<nav-bar></nav-bar>\r\n \r\n<!--Blocking the user from seeing anything if  not looged in-->\r\n  <div *ngIf=\"(authService.user) | async; else show_login\">\r\n\t\t<router-outlet></router-outlet>\r\n  </div>\r\n  \r\n  <ng-template #show_login><login></login></ng-template>\r\n\r\n\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/shared/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //the import is needed here so the router-outlet can be shown or not, if the user is logged in
var AppComponent = /** @class */ (function () {
    //email: string;
    //password: string;
    //we are creating an instance of the authService so we can use the features it is providing!
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Contact Book New';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/contact-list/contact-list.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/contact.service */ "./src/app/shared/contact.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//basic basket for getting the app running and get the form and routing online


 //used for creating the forms
 //used for making the links in the SAP appear like in a desktop app 
 //root module for bringing all the other app-modules together
//this basket is used for accessing all the necessary features from the Firebase
 //we need this to get the basic Firebase connection up and running
 //if you want to access the no-SQL database from Firebase you have use this module (used to actually save users-data)
 //the storage of the Firebase will be accessed with this one (used to upload pictures)
 //the authentication functionality will be done with the inbuild Firebase Autentication module
//you will find here the credentials for your Firebase, if you compromis your API-Key put the new one here

//basket for additional components necessary to add extra features
 //service for authenticating the user at the Firebase
 //merges the form (data-input) and the list (data-output) into one component so both could be used separatly
 //holds all the information about outputting the data from the Firebase in a human readable way
 //contains the heading for the app 
 //serves for the Navbar, in here you will also find the Logout button located
 //contains the footing for the app
 //the email-sending part can be found here
 //service where all the functions for populating the React form can be found here
 //the login-form is found here, these module is also serving as a start screen for the router-outlet if user is not authenticated
 //the input data form for filling the Firebase can be found here
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_19__["ContactFormComponent"],
                _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_12__["ContactListComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_16__["SupportComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_shared_contact_service__WEBPACK_IMPORTED_MODULE_17__["ContactService"], _shared_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"ContactPage\">\r\n  <div class=\"text-white text-center\">\r\n    <form [formGroup]=\"this.ContactService.form\">\r\n      <input type=\"hidden\" formControlName=\"$key\">\r\n      <div class=\"row\">\r\n        <div id=\"row-form\" class=\"form-group col-lg-6 col-md-6 col-sm-6\">\r\n          <label>FirstName</label>\r\n          <!-- we will add this class is-invalid with the help of [ngClass] directive \r\n                                      this class will be applied when the form is submitted and we have a validation error regarding FirstName -->\r\n          <input formControlName=\"FirstName\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.FirstName.errors}\">\r\n          <!-- now we will add an additional due to show the exact reason for the validation error so here we have the deal with this class invilid-feedback \r\n                                              only based on the same condition inside that -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.FirstName.errors\">This field is required</div>\r\n        </div>\r\n        <div class=\"form-group col-lg-6 col-md-6 col-sm-6\">\r\n          <label>LastName</label>\r\n          <!-- we will add this class is-invalid with the help of [ngClass] directive \r\n                                      this class will be applied when the form is submitted and we have a validation error regarding LastName -->\r\n          <input formControlName=\"LastName\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.LastName.errors}\">\r\n          <!-- now we will add an additional due to show the exact reason for the validation error so here we have the deal with this class invilid-feedback \r\n                                              only based on the same condition inside that -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.LastName.errors\">This field is required</div>\r\n        </div>\r\n        <div class=\"form-group col-lg-6 col-md-6 col-sm-6\">\r\n          <label>Mobile</label>\r\n          <input formControlName=\"PhoneNumber\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.PhoneNumber.errors}\">\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.PhoneNumber.errors\">\r\n            <label *ngIf=\"formControls.PhoneNumber.errors.required\">This field is required</label>\r\n            <label *ngIf=\"formControls.PhoneNumber.errors.minlength\">at least 8 numbers</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-lg-6 col-md-6 col-sm-6\">\r\n          <label>Email</label>\r\n          <!-- here we add the the invalid class based on the same condition for Email and the possible error for this Email control is due to the invalid Email address -->\r\n          <input formControlName=\"Email\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.Email.errors}\">\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.Email.errors\">\r\n            <label *ngIf=\"formControls.Email.errors.required\">This field is required</label>\r\n            <label *ngIf=\"formControls.Email.errors.email\">E-Mail is invalid</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-lg-6 col-md-6 col-sm-6\">\r\n          <label>Type</label>\r\n          <select formControlName=\"Type\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.Type.errors}\">\r\n            <option value=\"\" selected>select</option>\r\n            <option value=\"Student\" selected>Student</option>\r\n            <option value=\"Lunch-speaker\">Lunch-speaker</option>\r\n            <option value=\"Company\">Company</option>\r\n          </select>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.Type.errors\">This field is required</div>\r\n        </div>\r\n        <div class=\"form-group col-lg-6 col-md-6 col-sm-6\">\r\n           \r\n            \r\n              <label>Photo-Url</label>\r\n              <div class=\"d-flex align-items-center\">\r\n              <div id=\"left-url\">\r\n              <input id=\"photo_placeholder\" formControlName=\"Photo\" class=\"form-control\" placeholder=\"Your url goes here\" [(ngModel)]=\"photo_url\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.Photo.errors\">This field is required\r\n              </div>\r\n            </div>\r\n            <div id=\"right-btn\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"fileInput.click()\" class=\"btn btn-info mb-4\">Upload</button>\r\n              <input #fileInput type=\"file\" (change)=\"chooseFiles($event)\" style=\"display:none;\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-lg-12\">\r\n          <label>Comment</label>\r\n          <textarea class=\"form-control\" formControlName=\"Comment\" [ngClass]=\"{'is-invalid':submitted && formControls.Comment.errors}\" rows=\"1\"></textarea>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.Comment.errors\">This field is required</div>\r\n        </div>\r\n        <!--MAKE A CHECKBOX HERE WITH USER OR ADMIN ROLE\r\n            This is only for sign-up\r\n             <button (click)=\"signup()\" [disabled]=\"!email || !password\">\r\n               Signup\r\n            </button>\r\n            -->\r\n        <div id=\"btn\">\r\n          <input type=\"submit\" class=\"btn btn-success  mx-1\" value=\"Save\" (click)=\"onSubmit()\"><!-- the value of the formControlName must match the name that we provided inside FormGroup in PhonebookService class -->\r\n          <input type=\"button\" class=\"btn btn-danger mx-1\" value=\"Cancel\" (click)=\"onCancel()\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"alert alert-info\" *ngIf=\"showSuccessMessage\">\r\n      submitted successfully.\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ContactPage {\n  background: #cacaca;\n  border-radius: 5px;\n  margin-bottom: 80px;\n  height: auto;\n  background: rgba(0, 0, 0, 0.9);\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px; }\n\nlabel {\n  margin-bottom: 3px; }\n\n#left-url {\n  width: 80%; }\n\n#right-btn {\n  height: 39.986px; }\n\n#btn {\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 2px;\n  padding-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/contact.service */ "./src/app/shared/contact.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactFormComponent = /** @class */ (function () {
    //make two objects from each class
    function ContactFormComponent(ContactService, storage) {
        this.ContactService = ContactService;
        this.storage = storage;
        this.formControls = this.ContactService.form.controls;
        this.photo_url = '';
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true; //set the property to tru
        //insert or update a contact
        if (this.ContactService.form.valid) {
            if (this.ContactService.form.get("$key").value == null) {
                this.ContactService.insertContact(this.ContactService.form.value);
            }
            else {
                this.ContactService.updateContact(this.ContactService.form.value);
            } //show message for 3sec  and reset 
            this.showSuccessMessage = true;
            setTimeout(function () { return _this.showSuccessMessage = false; }, 3000);
            this.submitted = false;
            this.ContactService.form.reset();
            this.ContactService.toggleForm();
        }
    };
    //hide the form and reset the values
    ContactFormComponent.prototype.onCancel = function () {
        this.ContactService.toggleForm();
        this.ContactService.form.reset();
    };
    //use this function to choose an image to upload
    ContactFormComponent.prototype.chooseFiles = function (event) {
        this.selectedFiles = event.target.files;
        if (this.selectedFiles.item(0))
            this.uploadpic();
    };
    //upload an image to the storage
    ContactFormComponent.prototype.uploadpic = function () {
        var _this = this;
        var file = this.selectedFiles.item(0);
        var uniqkey = 'pic' + Math.floor(Math.random() * 1000000); //give unique key for every element
        var pathFile = '/angfire2store/' + uniqkey; //save the path of the file
        var uploadTask = this.storage.upload(pathFile, file).then(function () {
            var ref = _this.storage.ref(pathFile);
            var downloadURL = ref.getDownloadURL().subscribe(function (url) {
                _this.photo_url = url;
                alert('Photo with URL uploaded: ' + _this.photo_url);
            });
        });
    };
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.sass */ "./src/app/contact-form/contact-form.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/contact-list/contact-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form class=\"form-line\">\r\n       <input id=\"select\" type=\"radio\" name=\"Check\" (click)=\"searchTextFirst=''\" checked=\"true\">All\r\n       <input id=\"select\" type=\"radio\" name=\"Check\" (click)=\"searchTextFirst='Student'\">Student\r\n       <input id=\"select\" type=\"radio\" name=\"Check\" (click)=\"searchTextFirst='Company'\">Company\r\n       <input id=\"select\" type=\"radio\" name=\"Check\" (click)=\"searchTextFirst='Lunch-speaker'\">Lunchspeaker\r\n</form>\r\n<div class=\"container\">\r\n<form class=\"form-inline row\">\r\n        <input id=\"search\" name=\"searchInput\" class=\"col-lg-10 col-md-10 col-sm-8 form-control\" placeholder=\"Search\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\">\r\n        <button id=\"btn\" class=\"col-lg-1 col-md-1 col-sm-2 btn btn-outline-success\" (click)=\"searchText=''\">Reset</button>\r\n</form>\r\n</div>\r\n<div class=\"container\">\r\n<div class=\"d-flex justify-content-between row\" >\r\n<button class=\" btn btn-success btn-sm my-2 col-lg-2 col-md-2 col-sm-3\" (click)=\"onShowForm()\">Add contact</button>    \r\n      \r\n</div>\r\n</div>\r\n<div id=\"table\" class=\"p-1 table-responsive\">\r\n        <table  class=\"table table-sm table-hover table-dark\">\r\n                <thead>\r\n                        <th id=\"text\">Photo</th>\r\n                        <th>Name</th>\r\n                        <th>Mobile</th>\r\n                        <th>Email</th>\r\n                        <th id=\"text\">Type</th>\r\n                        <th id=\"text\">Comment</th> \r\n\r\n                        <th></th>\r\n                </thead>\r\n                <tbody>\r\n                        <ng-container  *ngFor=\"let Contact of ContactArray\">\r\n                               \r\n                                <tr id=\"t-row\" *ngIf=\"filterConditionFirst(Contact) && filterCondition(Contact)\">\r\n                                        <td id=\"text\" class=\"align-middle\"><img class=\"img-thumbnail\" style=\"height: auto; width: 90px;\" src=\"{{Contact.Photo}}\" alt=\"your picture\"></td>\r\n                                        <td class=\"align-middle\">{{Contact.FirstName}} {{Contact.LastName}}</td>\r\n                                        <td class=\"align-middle\">{{Contact.PhoneNumber}}</td>\r\n                                        <td class=\"align-middle\">{{Contact.Email}}</td>\r\n                                        <td  id=\"text\"class=\"align-middle\">{{Contact.Type}}</td>\r\n                                        <td  id=\"text\"class=\"align-middle\">{{Contact.Comment}}</td>\r\n                                        <td class=\"align-middle\">\r\n                                            <div id=\"btn-list\" class=\"btn-group\">\r\n                                                <button class=\"btn btn-sm btn-info\" (click)=\"ContactService.populateForm(Contact)\" (click)=\"onShowForm('edit')\">Edit</button>\r\n                                                <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete(Contact.$key)\">Delete</button>\r\n                                            </div>\r\n                                        </td>\r\n                                </tr>\r\n                        </ng-container>\r\n                </tbody>\r\n        </table>\r\n\r\n<div class=\"alert alert-danger\" *ngIf=\"showDeletedMessage\">Deleted successfully</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* button\n\tmargin-left: 2px\n\tmargin-right: 2px */\n#t-row {\n  background: #2E2E2E;\n  color: white; }\n#btn-list {\n  margin-top: 5px; }\n#select {\n  cursor: pointer; }\n#table {\n  width: 100%; }\n@media only screen and (max-width: 576px) {\n  #text {\n    display: none; }\n  /* #t-row\n\t\toverflow: scroll */\n  #btn-list {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10%; }\n  #table {\n    font-size: 1vw; }\n  td {\n    font-size: 3vw; }\n  th {\n    font-size: 3vw; } }\n@media only screen and (min-width: 577px) and (max-width: 768px) {\n  td {\n    font-size: 2vw; }\n  th {\n    font-size: 2vw; }\n  #text {\n    display: none; } }\n@media only screen and (min-width: 769px) and (max-width: 992px) {\n  td {\n    font-size: 1em; }\n  th {\n    font-size: 1em; }\n  #text {\n    display: none; } }\n@media only screen and (min-width: 993px) and (max-width: 1200px) {\n  td {\n    font-size: 1em; }\n  th {\n    font-size: 1em; } }\n"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/contact.service */ "./src/app/shared/contact.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //import the ContactComponent to use it's components.
var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(ContactService) {
        this.ContactService = ContactService;
        //define properties for the Form elements from the conact-list.component.html 
        this.ContactArray = [];
        this.searchText = "";
        this.searchTextFirst = "";
    } //create an object of the ContactService class
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ContactService.getContacts().subscribe(function (list) {
            _this.ContactArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
        ;
    };
    ContactListComponent.prototype.onDelete = function ($key) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) { //ask for confirmation from the user
            this.ContactService.deleteContact($key);
            this.showDeletedMessage = true; //sshow the delete-message
            setTimeout(function () { return _this.showDeletedMessage = false; }, 3000); //make it visible for 3sec
        }
    };
    ContactListComponent.prototype.filterConditionFirst = function (Contact) {
        return Contact.Type.toLowerCase().indexOf(this.searchTextFirst.toLowerCase()) != -1;
    };
    ;
    ContactListComponent.prototype.filterCondition = function (Contact) {
        return Contact.FirstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
            Contact.LastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
            Contact.PhoneNumber.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
            Contact.Email.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    };
    ContactListComponent.prototype.onShowForm = function (check) {
        this.ContactService.toggleForm(check);
    };
    ContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.sass */ "./src/app/contact-list/contact-list.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\t<div id=\"container\" class=\"container\">\r\n  \t\t<h2>\r\n\t\t\tCF contact book\r\n\t\t</h2>\r\n  <div  class=\"row\">\r\n    <div id=\"contact-form-container\" class=\"col-lg-10 offset-lg-1 col-md-10 col-sm-10\">\r\n      <app-contact-form></app-contact-form>\r\n    </div>\r\n    <div id=\"test\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n      <app-contact-list></app-contact-list>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.sass":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  position: relative; }\n\n#contact-form-container {\n  position: absolute;\n  top: 5vw;\n  z-index: 100; }\n\n#test {\n  position: relative; }\n\n@media only screen and (max-width: 576px) {\n  #contact-form-container {\n    margin-right: auto;\n    margin-left: auto; } }\n\n#wrapper {\n  background: #EBEBEB;\n  overflow: auto;\n  height: 100%;\n  margin-right: auto;\n  margin-left: auto; }\n\n#container {\n  height: auto; }\n\nh2 {\n  color: #D58121;\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\nh3 {\n  color: #4F4F4F; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/contact.service */ "./src/app/shared/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //import the ContactService to use it'S components
var ContactComponent = /** @class */ (function () {
    function ContactComponent(ContactService) {
        this.ContactService = ContactService;
    } //create an object of the ContactService class
    ContactComponent.prototype.ngOnInit = function () {
        this.ContactService.toggleForm(); //call the function to hide out the Form when the App is loaded 
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.sass */ "./src/app/contact/contact.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\r\n\t<h4 class=\"text-center\">\r\n\t\tContact Book New\r\n\t</h4>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.sass":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  position: relative; }\n\n#contact-form-container {\n  position: absolute;\n  top: 5vw;\n  z-index: 100; }\n\n#test {\n  position: relative; }\n\n@media only screen and (max-width: 576px) {\n  #contact-form-container {\n    margin-right: auto;\n    margin-left: auto; } }\n\n#footer {\n  background: #212121;\n  color: white;\n  height: 100px; }\n\nh4 {\n  padding-top: 30px;\n  padding-bottom: 30px; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/footer/footer.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\r\n\t<div class=\"container\">\r\n\t\t<span class=\"py-3 \">\r\n\t\t\t{{title}}\r\n\t\t</span>\r\n\t\t<span id=\"new\">{{title2}}</span>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.sass":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  position: relative; }\n\n#contact-form-container {\n  position: absolute;\n  top: 5vw;\n  z-index: 100; }\n\n#test {\n  position: relative; }\n\n@media only screen and (max-width: 576px) {\n  #contact-form-container {\n    margin-right: auto;\n    margin-left: auto; } }\n\n#header {\n  background: #D58121;\n  color: white;\n  height: 80px; }\n\nspan {\n  font-size: 3em; }\n\n@media only screen and (max-width: 576px) {\n  #new {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        //give valu for them
        this.title = "Contact Book";
        this.title2 = "New";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/header/header.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login-container\">\r\n    <div id=\"login_box\" class=\"d-flex flex-column\">\r\n    \t<div class=\"d-flex flex-column align-items-center my-auto\">\r\n\t    \t<!--Authentication starts here with fetching the data from the form (email and password-->\r\n\t    \t<input type=\"text\" [(ngModel)]=\"email\" placeholder=\"email\">\r\n\t    \t<input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\">\r\n\t\t\t<!--With click on login the two fields are passed to the login function inside auth.service.ts-->\r\n\t     \t<button (click)=\"login()\" [disabled]=\"!email || !password\">Login</button>\r\n\t     </div>\r\n\t</div>\r\n \r\n\r\n<!-- Modal CAREFUL with commenting that back in, this code is not working at the moment!!! See documentation why that is!\r\n\t<div *ngIf=\"!(authService.user | async); else test_temp\" class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" data-backdrop=\"static\" data-keyboard=\"false\">\r\n\t  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n\t    <div class=\"modal-content\">\r\n\t      <div class=\"modal-header text-center\">\r\n\t        <h5 class=\"modal-title col-12 text-center\" id=\"exampleModalLabel\">Login</h5>\r\n\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t          <span aria-hidden=\"true\">&times;</span>\r\n\t        </button>\r\n\t      </div>\r\n\t      <div class=\"modal-body\">\r\n\r\n        <div class=\"d-flex flex-column\">\r\n\t\t    <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"email\">\r\n\t\t    <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\">\r\n\r\n\t\t    <button (click)=\"closeModal()\" (click)=\"login()\" [disabled]=\"!email || !password\">\r\n\t\t      Login\r\n\t\t    </button>\r\n\t\t</div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #test_temp></ng-template>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.sass":
/*!********************************************!*\
  !*** ./src/app/login/login.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-container {\n  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.6)), url(\"/./../assets/harry.jpg\");\n  background-size: cover !important;\n  height: 66vh; }\n\n#login_box {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/auth.service */ "./src/app/shared/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //needs to be imported so we can verify if the user trying to login is allowed to authenticate
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //passes the provided email and password to the authService login() function so it can be checked there
    LoginComponent.prototype.login = function () {
        this.authService.login(this.email, this.password);
        this.email = this.password = '';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"navbar navbar-expand-md navbar-dark \">\r\n  <div class=\"container\">\r\n\r\n      <a routerLink=\"/\"  class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-laptop-code\"></i></a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExample04\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          \r\n          <li class=\"nav-item\">\r\n            <a routerLink = \"/\" class=\"nav-link\" [class.active]=\"currentUrl == '/'\">Contact</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a routerLink = \"/support\" class=\"nav-link \" [class.active]=\"currentUrl == '/support'\">support</a>\r\n          </li>\r\n          \r\n          <button class=\"btn btn-outline-warning\" (click)=\"logout()\" *ngIf=\"authService.user | async\">\r\n          Logout\r\n          </button>\r\n\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-md-0\">\r\n          \r\n        </form>\r\n      </div>\r\n        </div>\r\n    </nav>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.sass":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\n  background: #212121; }\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    //Create two object of both class
    function NavBarComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _this.router.url; });
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.sass */ "./src/app/nav-bar/nav-bar.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
    }
    //calling the sign-up function from firebase
    AuthService.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password) //email and password will be send to firebase for creating a new user
            .then(function (value) {
            console.log('Login User created!', value);
        })
            .catch(function (err) {
            console.log('Signup went wrong:', err.message);
        });
    };
    //calling the inbuild login function from firebase
    AuthService.prototype.login = function (email, password) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password) //email and password will be send to firebase for authentication
            .then(function (value) {
            console.log('Login sucessful!');
        })
            .catch(function (err) {
            alert('Login went wrong: ' + err.message);
        });
    };
    //calling the inbuild logout function from firebase
    AuthService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/contact.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/contact.service.ts ***!
  \*******************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(firebase) {
        this.firebase = firebase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ContactService.prototype.getContacts = function () {
        this.ContactList = this.firebase.list('Contacts');
        return this.ContactList.snapshotChanges();
    };
    ContactService.prototype.insertContact = function (Contact) {
        this.ContactList.push({
            FirstName: Contact.FirstName,
            LastName: Contact.LastName,
            PhoneNumber: Contact.PhoneNumber,
            Email: Contact.Email,
            Type: Contact.Type,
            Comment: Contact.Comment,
            Photo: Contact.Photo
        });
    };
    ContactService.prototype.populateForm = function (Contact) {
        this.form.setValue(Contact);
    };
    ContactService.prototype.updateContact = function (Contact) {
        this.ContactList.update(Contact.$key, {
            FirstName: Contact.FirstName,
            LastName: Contact.LastName,
            PhoneNumber: Contact.PhoneNumber,
            Email: Contact.Email,
            Type: Contact.Type,
            Comment: Contact.Comment,
            Photo: Contact.Photo
        });
    };
    ContactService.prototype.deleteContact = function ($key) {
        this.ContactList.remove($key);
    };
    ContactService.prototype.toggleForm = function (check) {
        if (check === void 0) { check = false; }
        if (check) {
            if ($('#contact-form-container').is(':visible')) {
                //do nothing if container is visible
            }
            else {
                $('#contact-form-container').toggle();
            }
        }
        else {
            $('#contact-form-container').toggle();
        }
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container-sup\" class=\"container\">\r\n  <h3>\r\n    Contact form\r\n  </h3>\r\n  <form action=\"nab.php\" method=\"post\">\r\n    <div class=\"form-group\">\r\n      \r\n      <input id=\"name\" type=\"name\" class=\"form-control\" placeholder=\"Put your Name\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" name=\"name\">\r\n     <p class=\"help-block text-danger\"></p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      \r\n      <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" name=\"email\">\r\n      <p class=\"help-block text-danger\"></p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n    \r\n    <textarea id=\"message\" class=\"form-control\" rows=\"7\" placeholder=\"put your problem\" [(ngModel)]=\"message\" [ngModelOptions]=\"{standalone: true}\" name=\"message\"></textarea>\r\n    <p class=\"help-block text-danger\"></p>\r\n  </div>\r\n    \r\n    <button id=\"sendMessageButton\" type=\"submit\" class=\"btn btn-outline-secondary mx-1\" value=\"Submit\" name=\"btn\" (click)=\"processForm()\">Send</button>\r\n    <button type=\"submit\" class=\"btn btn-outline-secondary mx-1\" value=\"Submit\">Reset</button>\r\n  </form>\r\n  <div class=\"alert alert-info\" *ngIf=\"showSuccessMessage\">\r\n      Sent!! you will soon be contacted via email\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/support/support.component.sass":
/*!************************************************!*\
  !*** ./src/app/support/support.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container-sup {\n  height: 70%;\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
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

var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent.prototype.processForm = function () {
        var allInfo = "My name is " + this.name + ". My email is " + this.email + ". My message is " + this.message;
        alert(allInfo);
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.sass */ "./src/app/support/support.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
// Connect the Firebase database  with the infos we get from the Firebase
// Must change the Api-key when you want to upload it to GitHub, otwherwise it will be comprimised
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyB14CsNighS4wNpya3KALW80FFPXb3JEw8",
        authDomain: "contactbook-new.firebaseapp.com",
        databaseURL: "https://contactbook-new.firebaseio.com",
        projectId: "contactbook-new",
        storageBucket: "contactbook-new.appspot.com",
        messagingSenderId: "494926399176"
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nab\Desktop\CodeFactory\Projects\Project Contact Book\Project\Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map