"use strict";
(self["webpackChunkcajun"] = self["webpackChunkcajun"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookbook/cookbook.component */ 8641);
/* harmony import */ var _shared_layout_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/layout/error-page/error-page.component */ 6634);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ 341);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes/recipes.component */ 5735);
/* harmony import */ var _cookbook_recipes_show_recipes_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookbook/recipes/show/recipes-show.component */ 1251);
/* harmony import */ var _cookbook_recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cookbook/recipes/form/recipes-form.component */ 8755);
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-reset/password-reset.component */ 1480);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ 570);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6839);













const routes = [{
  path: 'cookbook/:userId',
  component: _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_0__.CookBookComponent,
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'landing',
  component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__.LandingComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
}, {
  path: 'password_reset',
  component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__.PasswordResetComponent
}, {
  path: 'cookbook/:userId/recipe/new',
  component: _cookbook_recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_6__.RecipeFormComponent,
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'recipes',
  component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_4__.RecipesComponent
}, {
  path: 'cookbook/:userId/recipe/:recipeId',
  component: _cookbook_recipes_show_recipes_show_component__WEBPACK_IMPORTED_MODULE_5__.RecipeShowComponent
}, {
  path: 'cookbook/:userId/recipe/:recipeId/edit',
  component: _cookbook_recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_6__.RecipeFormComponent,
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'signup',
  component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__.SignupComponent
}, {
  path: 'error/:error',
  component: _shared_layout_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_1__.ErrorPageComponent
}, {
  path: '',
  redirectTo: 'landing',
  pathMatch: 'full'
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'error/404'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);






function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  constructor(store, router) {
    this.store = store;
    this.router = router;
    this.title = 'cajun';
  }
  ngOnInit() {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
    // Cache store
    this.store.subscribe(store => {
      console.log(store);
    });
  }
  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
  routerEvents() {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart:
          {
            this.isLoader = true;
            break;
          }
        case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd:
          {
            this.isLoader = false;
            break;
          }
      }
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 1,
  consts: [["class", "loader", 4, "ngIf"], [1, "loader"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/effects */ 2847);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 1827);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _state_app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/app.reducer */ 5103);
/* harmony import */ var _state_app_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/app.effects */ 6061);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookbook/cookbook.component */ 8641);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ 341);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _cookbook_recipes_show_recipes_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cookbook/recipes/show/recipes-show.component */ 1251);
/* harmony import */ var _cookbook_recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cookbook/recipes/form/recipes-form.component */ 8755);
/* harmony import */ var _login_reset_password_modal_reset_password_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/reset-password-modal/reset-password-modal.component */ 5960);
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./password-reset/password-reset.component */ 1480);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ 570);
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipes/recipes.component */ 5735);
/* harmony import */ var _core_http_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/http.interceptor */ 5275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 6839);




























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [{
        id: _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_16__.FacebookLoginProvider.PROVIDER_ID,
        provider: new _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_16__.FacebookLoginProvider('765683692014853')
      }],
      onError: err => {
        console.error(err);
      }
    }
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__.HashLocationStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
    useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_14__.CustomHttpInterceptor,
    multi: true
  }],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_16__.SocialLoginModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_22__.StoreModule.forRoot({
    app: _state_app_reducer__WEBPACK_IMPORTED_MODULE_2__.appReducer
  }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__.EffectsModule.forRoot([_state_app_effects__WEBPACK_IMPORTED_MODULE_3__.AppEffects])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_5__.CookBookComponent, _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__.LandingComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent, _cookbook_recipes_show_recipes_show_component__WEBPACK_IMPORTED_MODULE_8__.RecipeShowComponent, _cookbook_recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_9__.RecipeFormComponent, _login_reset_password_modal_reset_password_modal_component__WEBPACK_IMPORTED_MODULE_10__.ResetPasswordModalComponent, _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_11__.PasswordResetComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__.SignupComponent, _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_13__.RecipesComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_16__.SocialLoginModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_22__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__.EffectsRootModule]
  });
})();

/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(next, state) {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/landing']);
      return false;
    }
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3765);





class AuthService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  login(credentials) {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('currentUser', JSON.stringify(response.user));
      this.router.navigate([`/cookbook/${response.user.id}`]);
    }));
  }
  fbLogin(accessToken) {
    return this.http.post(`${this.baseUrl}/fblogin`, {
      access_token: accessToken
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      console.log(response);
      //localStorage.setItem('token', response.token);
      //localStorage.setItem('currentUser', JSON.stringify(response.user));
      //this.router.navigate([`/cookbook/${response.user.id}`]);
    }));
  }

  signUp(user) {
    return this.http.post(`${this.baseUrl}/create`, {
      user: user
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('currentUser', JSON.stringify(response.user));
      this.router.navigate([`/cookbook/${response.user.id}`]);
    }));
    ;
  }
  logout() {
    //window.FB.logout();
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/landing']);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }
  isAuthenticated() {
    const token = this.getToken();
    return token ? true : false;
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 8641:
/*!************************************************!*\
  !*** ./src/app/cookbook/cookbook.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookBookComponent": () => (/* binding */ CookBookComponent)
/* harmony export */ });
/* harmony import */ var _state_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/app.actions */ 7527);
/* harmony import */ var _state_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/app.selector */ 6614);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/text-filter/text-filter.component */ 5089);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/layout/primary-layout/primary-layout.component */ 8119);











function CookBookComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r0.user$)) == null ? null : tmp_0_0.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function CookBookComponent_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 19);
  }
}
function CookBookComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CookBookComponent_div_13_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 1, ctx_r2.user$)) == null ? null : tmp_0_0.image_url) ? "Replace Image" : "Add image", " ");
  }
}
function CookBookComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CookBookComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.goCreateRecipe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Add Recipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CookBookComponent_div_36_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 34);
  }
  if (rf & 2) {
    const recipe_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", recipe_r9.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function CookBookComponent_div_36_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 35);
  }
}
function CookBookComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CookBookComponent_div_36_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const recipe_r9 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.goRecipe(recipe_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CookBookComponent_div_36_img_3_Template, 1, 1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CookBookComponent_div_36_img_4_Template, 1, 0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 31)(6, "h4", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const recipe_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", recipe_r9.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !recipe_r9.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](recipe_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", recipe_r9.description, " ");
  }
}
class CookBookComponent {
  constructor(http, auth, store, router, route) {
    this.http = http;
    this.auth = auth;
    this.store = store;
    this.router = router;
    this.route = route;
    this.user$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_1__.selectUser);
    this.recipes$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_1__.selectRecipes);
    this.filteredRecipes$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_1__.selectFilteredUserRecipes);
    this.userId = this.route.snapshot.params['userId'];
  }
  ngOnInit() {
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUser({
      userId: this.userId
    }));
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUserRecipes({
      userId: this.userId
    }));
  }
  ngOnDestroy() {
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.AppFiltering.resetFilters());
  }
  goCreateRecipe() {
    this.router.navigate([`/cookbook/${this.userId}/recipe/new`]);
  }
  goRecipe(recipe) {
    this.router.navigate([`/cookbook/${this.userId}/recipe/${recipe.id}`]);
  }
  onFileSelected(event) {
    this.image = event.target.files[0];
    this.saveRecipe();
  }
  saveRecipe() {
    const formData = new FormData();
    formData.append('user[image]', this.image);
    this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}/users/${this.userId}`, formData).subscribe(response => {
      this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUser({
        userId: this.userId
      }));
      this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUserRecipes({
        userId: this.userId
      }));
    });
  }
  get isOwner() {
    var _a;
    return !!(((_a = this.auth.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.id) == this.userId);
  }
}
CookBookComponent.ɵfac = function CookBookComponent_Factory(t) {
  return new (t || CookBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
CookBookComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CookBookComponent,
  selectors: [["ng-component"]],
  decls: 38,
  vars: 26,
  consts: [[1, "section", "section-gray", "text-center"], [1, "title-uppercase", "cookbook-title", "text-primary"], [1, "section", "profile-content", "text-center"], [1, "container"], [1, "owner"], [1, "avatar"], ["alt", "Circle Image", "class", "img-circle img-no-padding img-responsive", 3, "src", 4, "ngIf"], ["src", "/assets/images/no-image.png", "alt", "Circle Image", "class", "img-circle img-no-padding img-responsive", 4, "ngIf"], ["class", "text-primary", 4, "ngIf"], [1, "name"], [1, "title"], [1, "description"], [1, "row"], [1, "col-md-6", "offset-md-3", "text-center"], ["class", "btn btn-outline-primary btn-round mb-3", 3, "click", 4, "ngIf"], [1, "main", "text-center"], [1, "title", "text-primary"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["alt", "Circle Image", 1, "img-circle", "img-no-padding", "img-responsive", 3, "src"], ["src", "/assets/images/no-image.png", "alt", "Circle Image", 1, "img-circle", "img-no-padding", "img-responsive"], [1, "text-primary"], ["for", "file-upload"], [1, "fa", "fa-camera"], ["id", "file-upload", "accept", ".png, .jpg, .jpeg", "type", "file", 2, "display", "none", 3, "change"], [1, "btn", "btn-outline-primary", "btn-round", "mb-3", 3, "click"], [1, "fa", "fa-cog"], [1, "col-md-4"], [1, "card", "card-plain", "pointer", 3, "click"], [1, "card-image"], ["class", "img-thumbnail img-responsive", 3, "src", 4, "ngIf"], ["class", "img-thumbnail img-responsive", "src", "/assets/images/no-image.png", 4, "ngIf"], [1, "card-block"], [1, "card-title", "text-primary"], [1, "card-description", "text-center"], [1, "img-thumbnail", "img-responsive", 3, "src"], ["src", "/assets/images/no-image.png", 1, "img-thumbnail", "img-responsive"]],
  template: function CookBookComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0)(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CookBookComponent_img_9_Template, 2, 3, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CookBookComponent_img_11_Template, 1, 0, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CookBookComponent_div_13_Template, 6, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9)(15, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h6", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 12)(24, "div", 13)(25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, CookBookComponent_button_29_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "app-text-filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 15)(32, "div", 3)(33, "h2", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "My Recipes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, CookBookComponent_div_36_Template, 10, 4, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.isOwner ? "My" : ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 10, ctx.user$)) == null ? null : tmp_0_0.first) + "'s", " Cookbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 12, ctx.user$)) == null ? null : tmp_1_0.image_url);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 14, ctx.user$)) == null ? null : tmp_2_0.image_url));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isOwner);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 16, ctx.user$)) == null ? null : tmp_4_0.first, " ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 18, ctx.user$)) == null ? null : tmp_4_0.last, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 20, ctx.user$)) == null ? null : tmp_5_0.location);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 22, ctx.user$)) == null ? null : tmp_6_0.bio);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isOwner);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 24, ctx.filteredRecipes$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_4__.TextFilterComponent, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_5__.PrimaryLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: [".avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  object-fit: cover;\n}\n\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 135px;\n  height: 135px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  margin-bottom: -25px;\n}\n\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.owner[_ngcontent-%COMP%] {\n  margin-top: -75px;\n}\n\n.cookbook-title[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29va2Jvb2svY29va2Jvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIGltZywgLmNhcmQgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDEzNXB4O1xufVxuXG4uYXZhdGFyIHtcbiAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XG59XG5cbi5jYXJkLWltYWdlIGltZyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5vd25lcntcbiAgbWFyZ2luLXRvcDogLTc1cHg7XG59XG5cbi5jb29rYm9vay10aXRsZSB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 8755:
/*!*****************************************************************!*\
  !*** ./src/app/cookbook/recipes/form/recipes-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeFormComponent": () => (/* binding */ RecipeFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var src_app_shared_components_action_modal_action_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/action-modal/action-modal.component */ 1724);
/* harmony import */ var _state_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state/app.actions */ 7527);
/* harmony import */ var _state_app_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../state/app.selector */ 6614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/layout/primary-layout/primary-layout.component */ 8119);












function RecipeFormComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecipeFormComponent_div_31_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteRecipe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete Recipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class RecipeFormComponent {
  constructor(modalService, store, formBuilder, router, route) {
    this.modalService = modalService;
    this.store = store;
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.recipe$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_2__.selectRecipe);
    this.userId = this.route.snapshot.params['userId'];
    this.recipeId = this.route.snapshot.params['recipeId'];
    this.recipe = {};
  }
  ngOnInit() {
    if (this.route.snapshot.params['recipeId']) {
      this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_1__.RecipeActions.getRecipe({
        userId: this.userId,
        recipeId: this.recipeId
      }));
      this.isEdit = true;
    }
    this.recipeSub = this.recipe$.subscribe(recipe => {
      if (recipe.id) {
        this.recipe = recipe;
      }
      this.form = this.formBuilder.group({
        id: [this.recipe.id || null],
        name: [this.recipe.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        description: [this.recipe.description || ''],
        ingredients: [this.recipe.ingredients || ''],
        directions: [this.recipe.directions || ''],
        user_id: this.userId
      });
    });
  }
  ngOnDestroy() {
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_1__.AppFiltering.resetFilters());
    if (this.recipeSub) {
      this.recipeSub.unsubscribe();
    }
  }
  saveRecipe() {
    if (this.isEdit) {
      this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_1__.RecipeActions.updateRecipe({
        recipe: this.form.getRawValue(),
        userId: this.userId,
        recipeId: this.recipe.id
      }));
    } else {
      this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_1__.RecipeActions.createRecipe({
        recipe: this.form.getRawValue(),
        userId: this.userId
      }));
    }
    this.router.navigate([`/cookbook/${this.userId}`]);
  }
  deleteRecipe() {
    const modal = this.modalService.open(src_app_shared_components_action_modal_action_modal_component__WEBPACK_IMPORTED_MODULE_0__.ActionModalComponent);
    let schema = {
      icon: 'fas fa-trash-alt',
      content: `Are you sure you want to delete <strong>${this.recipe.name}</strong>?`,
      theme: 'primary',
      action: 'Delete'
    };
    modal.componentInstance.name = this.recipe.name;
    modal.componentInstance.schema = schema;
    modal.result.then(result => {
      if (result.action == 'confirm') {
        this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_1__.RecipeActions.deleteRecipe({
          userId: this.userId,
          recipeId: this.recipeId
        }));
      }
      this.router.navigate([`/cookbook/${this.userId}`]);
    });
  }
  cancel() {
    if (this.isEdit) {
      this.router.navigate([`/cookbook/${this.userId}/recipe/${this.recipe.id}`]);
    } else {
      this.router.navigate([`/cookbook/${this.userId}`]);
    }
  }
  get formInvalid() {
    return !!this.form.invalid;
  }
}
RecipeFormComponent.ɵfac = function RecipeFormComponent_Factory(t) {
  return new (t || RecipeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
};
RecipeFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RecipeFormComponent,
  selectors: [["ng-component"]],
  decls: 36,
  vars: 6,
  consts: [[1, "container", "section", "px-3"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-md-12"], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control", 3, "maxlength"], ["type", "text", "placeholder", "Write a small description of what this recipe is, its origin, or what it means to you.", "formControlName", "description", 1, "form-control", 3, "maxlength"], ["rows", "6", "placeholder", "Ingredients", "formControlName", "ingredients", 1, "form-control", 3, "maxlength"], ["rows", "6", "placeholder", "Directions", "formControlName", "directions", 1, "form-control", 3, "maxlength"], [1, "d-flex", "justify-content-center", "mt-3"], [1, "btn", "btn-outline-primary", "btn-round", 3, "click"], [1, "fa", "fa-cog"], ["class", "d-flex justify-content-center mt-5", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "text-primary", "pointer", 3, "click"], [1, "fas", "fa-times-circle"], [1, "fas", "fa-trash-alt"]],
  template: function RecipeFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0)(2, "form", 1)(3, "div", 2)(4, "div", 3)(5, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Ingredients");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div")(18, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Directions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div")(25, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 8)(28, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecipeFormComponent_Template_button_click_28_listener() {
        return ctx.saveRecipe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Save Recipe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, RecipeFormComponent_div_31_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 12)(33, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecipeFormComponent_Template_div_click_33_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxlength", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxlength", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxlength", 5000);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxlength", 5000);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEdit);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_3__.PrimaryLayoutComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1251:
/*!*****************************************************************!*\
  !*** ./src/app/cookbook/recipes/show/recipes-show.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeShowComponent": () => (/* binding */ RecipeShowComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _state_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/app.actions */ 7527);
/* harmony import */ var _state_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state/app.selector */ 6614);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 3556);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/layout/primary-layout/primary-layout.component */ 8119);














function RecipeShowComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22)(1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RecipeShowComponent_span_11_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 1, ctx_r0.recipe$)) == null ? null : tmp_0_0.image_url) ? "Replace Image" : "Add image", " ");
  }
}
function RecipeShowComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipeShowComponent_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.goEditRecipe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Edit Recipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RecipeShowComponent_ng_container_57_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipeShowComponent_ng_container_57_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.goUser(comment_r8.user));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", comment_r8.user_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function RecipeShowComponent_ng_container_57_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipeShowComponent_ng_container_57_img_5_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.goUser(comment_r8.user));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RecipeShowComponent_ng_container_57_span_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipeShowComponent_ng_container_57_span_12_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.deleteComment(comment_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RecipeShowComponent_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li", 37)(2, "div", 38)(3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RecipeShowComponent_ng_container_57_img_4_Template, 1, 1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, RecipeShowComponent_ng_container_57_img_5_Template, 1, 0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipeShowComponent_ng_container_57_Template_h6_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const comment_r8 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.goUser(comment_r8.user));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 43)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RecipeShowComponent_ng_container_57_span_12_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const comment_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", comment_r8.user_image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !comment_r8.user_image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", comment_r8.user.first, " ", comment_r8.user.last, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](comment_r8.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isCommentOwner(comment_r8));
  }
}
function RecipeShowComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div")(2, "textarea", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RecipeShowComponent_ng_container_63_Template_textarea_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.comment = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipeShowComponent_ng_container_63_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.addComment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Add Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r3.comment);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "text-primary pointer": a0,
    "fa": a1,
    "far": a2
  };
};
class RecipeShowComponent {
  constructor(auth, formBuilder, http, store, router, route, modal) {
    this.auth = auth;
    this.formBuilder = formBuilder;
    this.http = http;
    this.store = store;
    this.router = router;
    this.route = route;
    this.modal = modal;
    this.recipe$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_1__.selectRecipe);
    this.userId = this.route.snapshot.params['userId'];
    this.recipeId = this.route.snapshot.params['recipeId'];
    this.comment = '';
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipe({
      userId: this.userId,
      recipeId: this.recipeId
    }));
  }
  onFileSelected(event) {
    this.image = event.target.files[0];
    this.saveRecipe();
  }
  saveRecipe() {
    const formData = new FormData();
    formData.append('recipe[user_id]', this.userId.toString());
    formData.append('recipe[image]', this.image);
    this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL}/users/${this.userId}/recipes/${this.recipeId}`, formData).subscribe(response => {
      this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipe({
        userId: this.userId,
        recipeId: this.recipeId
      }));
    });
  }
  goEditRecipe() {
    this.router.navigate([`cookbook/${this.userId}/recipe/${this.recipeId}/edit`]);
  }
  toggleLike() {
    this.recipe$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(recipe => {
      this.recipe = recipe;
      if (!this.isOwner(recipe)) {
        if (this.alreadyLiked(recipe)) {
          this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.unlikeRecipe({
            userId: this.userId,
            recipeId: this.recipeId
          }));
        } else {
          this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.likeRecipe({
            userId: this.userId,
            recipeId: this.recipeId
          }));
        }
      }
    });
  }
  addComment() {
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.addComment({
      userId: this.userId,
      recipeId: this.recipeId,
      content: this.comment
    }));
    this.comment = '';
  }
  goUser(user) {}
  deleteComment(comment) {
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.deleteComment({
      userId: this.userId,
      recipeId: this.recipeId,
      commentId: comment.id
    }));
  }
  goBack() {
    this.router.navigate([`cookbook/${this.userId}`]);
  }
  alreadyLiked(recipe) {
    var _a, _b;
    return !!((_a = recipe === null || recipe === void 0 ? void 0 : recipe.liking_users_ids) === null || _a === void 0 ? void 0 : _a.includes((_b = this.auth.getCurrentUser()) === null || _b === void 0 ? void 0 : _b.id));
  }
  isOwner(recipe) {
    var _a;
    return !!(((_a = this.auth.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.id) == (recipe === null || recipe === void 0 ? void 0 : recipe.user_id) && this.auth.isAuthenticated());
  }
  isCommentOwner(comment) {
    var _a;
    return !!(((_a = this.auth.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.id) == (comment === null || comment === void 0 ? void 0 : comment.user_id) && this.auth.isAuthenticated());
  }
}
RecipeShowComponent.ɵfac = function RecipeShowComponent_Factory(t) {
  return new (t || RecipeShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal));
};
RecipeShowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: RecipeShowComponent,
  selectors: [["ng-component"]],
  decls: 64,
  vars: 57,
  consts: [[1, "wrapper"], [1, "page-header", "page-header-xs"], [1, "filter"], [1, "btn", "btn-outline-white", "btn-round", "back-button", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "mt-3"], [1, "container"], ["class", "text-primary", 4, "ngIf"], [1, "like-icon", "like", "float-end", 3, "ngbTooltip"], [1, "fa-thumbs-up", 3, "ngClass", "click"], [1, "owner"], [1, "name"], [1, "title", "text-primary"], [1, "row", "mb-5"], [1, "col-md-2"], [1, "col-md-8", "ml-auto", "mr-auto", "text-center"], ["class", "btn btn-outline-primary btn-round", 3, "click", 4, "ngIf"], [1, "border-bottom"], [1, "row", "mt-5"], [1, "col-md-12"], [1, "row"], [1, "col-md-5"], [1, "text-primary"], [1, "pre", 3, "innerHtml"], [1, "col-md-7"], [1, "row", "following"], [1, "col-md-12", "text-center"], [1, "text-primary", "mb-3"], [1, "list-unstyled"], [4, "ngFor", "ngForOf"], ["label", "Total Comments", 3, "records", "filteredRecords", "page", "pageSize", "pageChanged"], [4, "ngIf"], ["for", "file-upload"], [1, "fa", "fa-camera"], ["id", "file-upload", "accept", ".png, .jpg, .jpeg", "type", "file", 2, "display", "none", 3, "change"], [1, "btn", "btn-outline-primary", "btn-round", 3, "click"], [1, "fa", "fa-cog"], [1, "border-bottom", "mb-3"], [1, "row", "align-items-center"], [1, "col-md-2", "col-sm-2", "ml-auto", "mr-auto"], ["class", "img-circle img-no-padding img-responsive pointer", "alt", "Recipe Image", "width", "100", "height", "70", 3, "src", "click", 4, "ngIf"], ["class", "img-circle img-no-padding img-responsive pointer", "src", "/assets/images/no-image.png", "alt", "No Image", "width", "100", "height", "70", 3, "click", 4, "ngIf"], [1, "text-primary", "pointer", 3, "click"], [1, "col-md-8", "col-sm-4", "ml-auto"], ["class", "text-primary pointer", 3, "click", 4, "ngIf"], ["alt", "Recipe Image", "width", "100", "height", "70", 1, "img-circle", "img-no-padding", "img-responsive", "pointer", 3, "src", "click"], ["src", "/assets/images/no-image.png", "alt", "No Image", "width", "100", "height", "70", 1, "img-circle", "img-no-padding", "img-responsive", "pointer", 3, "click"], ["maxlength", "1000", 1, "form-control", "mb-3", 2, "min-height", "100px", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-outline-primary", "btn-round", "mb-3", 3, "disabled", "click"], [1, "fa-solid", "fa-comment"]],
  template: function RecipeShowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipeShowComponent_Template_button_click_6_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, RecipeShowComponent_span_11_Template, 6, 3, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipeShowComponent_Template_i_click_15_listener() {
        return ctx.toggleLike();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 10)(23, "div", 11)(24, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 15)(31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, RecipeShowComponent_button_35_Template, 3, 0, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 18)(40, "div", 19)(41, "div", 20)(42, "div", 21)(43, "h5", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Ingredients:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 24)(48, "h5", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Directions:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](51, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 25)(53, "div", 26)(54, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "ul", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, RecipeShowComponent_ng_container_57_Template, 13, 6, "ng-container", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](58, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](59, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "pagination", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChanged", function RecipeShowComponent_Template_pagination_pageChanged_60_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](61, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](62, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, RecipeShowComponent_ng_container_63_Template, 7, 2, "ng-container", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_2_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-image", "url(" + (((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 17, ctx.recipe$)) == null ? null : tmp_0_0.image_url) ? (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 19, ctx.recipe$)) == null ? null : tmp_0_0.image_url : "/assets/images/no-image.png") + ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isOwner(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 21, ctx.recipe$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("ngbTooltip", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 23, ctx.recipe$)) == null ? null : tmp_2_0.liking_users_names);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](53, _c0, !ctx.isOwner(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 25, ctx.recipe$)), ctx.alreadyLiked(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 27, ctx.recipe$)), !ctx.alreadyLiked(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 29, ctx.recipe$))));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 31, ctx.recipe$)) == null ? null : tmp_4_0.like_count, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 33, ctx.recipe$)) == null ? null : tmp_5_0.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 35, ctx.recipe$)) == null ? null : tmp_6_0.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isOwner(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 37, ctx.recipe$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 39, ctx.recipe$)) == null ? null : tmp_8_0.ingredients, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](51, 41, ctx.recipe$)) == null ? null : tmp_9_0.directions, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](58, 43, (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](59, 47, ctx.recipe$)) == null ? null : tmp_10_0.comments, (ctx.page - 1) * ctx.pageSize, ctx.page * ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("records", (tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](61, 49, ctx.recipe$)) == null ? null : tmp_11_0.comments)("filteredRecords", (tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](62, 51, ctx.recipe$)) == null ? null : tmp_12_0.comments)("page", ctx.page)("pageSize", ctx.pageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated());
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltip, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_5__.PrimaryLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe],
  styles: [".recipe-img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  text-align: left;\n}\n\n.like[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29va2Jvb2svcmVjaXBlcy9zaG93L3JlY2lwZXMtc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjaXBlLWltZyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5wcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5saWtlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmFjay1idXR0b24ge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 5275:
/*!******************************************!*\
  !*** ./src/app/core/http.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomHttpInterceptor": () => (/* binding */ CustomHttpInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 4307);






class CustomHttpInterceptor {
  constructor(auth, router, store) {
    this.auth = auth;
    this.router = router;
    this.store = store;
  }
  intercept(req, next) {
    const token = localStorage.getItem('token');
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
        withCredentials: true
      });
      return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
        if (error.status == 401) {
          this.auth.logout();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('Session not valid.'));
        } else {
          this.router.navigate([`error/${error.status}`]);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('An error has occured; please try again later.'));
        }
      }));
    } else {
      return next.handle(req);
    }
  }
}
CustomHttpInterceptor.ɵfac = function CustomHttpInterceptor_Factory(t) {
  return new (t || CustomHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};
CustomHttpInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CustomHttpInterceptor,
  factory: CustomHttpInterceptor.ɵfac
});


/***/ }),

/***/ 341:
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _state_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/app.actions */ 7527);
/* harmony import */ var _state_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/app.selector */ 6614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layout/primary-layout/primary-layout.component */ 8119);









const _c0 = function () {
  return ["/login"];
};
function LandingComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Create Your Cookbook ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
  }
}
function LandingComponent_div_19_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 44);
  }
  if (rf & 2) {
    const recipe_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", recipe_r7.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function LandingComponent_div_19_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 45);
  }
}
function LandingComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_div_19_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const recipe_r7 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.goRecipe(recipe_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LandingComponent_div_19_img_3_Template, 1, 1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LandingComponent_div_19_img_4_Template, 1, 0, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 40)(6, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 43)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const recipe_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", recipe_r7.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !recipe_r7.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](recipe_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", recipe_r7.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Contributor: ", recipe_r7.user == null ? null : recipe_r7.user.first, " ", recipe_r7.user == null ? null : recipe_r7.user.last, "");
  }
}
function LandingComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LandingComponent_a_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LandingComponent_a_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LandingComponent_a_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LandingComponent_a_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class LandingComponent {
  constructor(auth, store, router, route) {
    this.auth = auth;
    this.store = store;
    this.router = router;
    this.route = route;
    this.recipes$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_1__.selectRecipes);
    this.filteredRecipes$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_1__.selectFilteredRecipes);
  }
  ngOnInit() {
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipes());
  }
  goRecipe(recipe) {
    this.router.navigate([`/cookbook/${recipe.user_id}/recipe/${recipe.id}`]);
  }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
};
LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-landing"]],
  decls: 96,
  vars: 13,
  consts: [[1, "page-header", 2, "background-image", "url('./assets/images/pasta2.png')"], [1, "filter"], [1, "container"], [1, "motto", "text-center"], ["type", "button", 1, "btn", "btn-outline-neutral", "btn-round"], ["type", "button", "class", "btn btn-outline-neutral btn-round", 3, "routerLink", 4, "ngIf"], [1, "main"], [1, "section", "text-center"], [1, "title", "text-primary"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "section", "section-nude", "text-center"], [1, "row", "align-items-center"], [1, "col-md-12"], [1, "title"], [1, "description"], ["class", "btn btn-primary btn-round", 4, "ngIf"], [1, "col-md-3"], [1, "info"], [1, "info-title"], ["class", "btn btn-link btn-danger", 4, "ngIf"], [1, "section", "landing-section"], [1, "text-center"], [1, "contact-form"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "placeholder", "Name", 1, "form-control"], [1, "fa", "fa-envelope"], ["type", "text", "placeholder", "Email", 1, "form-control"], ["rows", "4", "placeholder", "Whats on your mind?", 1, "form-control"], [1, "col-md-4", "mr-auto", "ml-auto"], [1, "btn", "btn-primary", "btn-lg", "btn-fill"], ["type", "button", 1, "btn", "btn-outline-neutral", "btn-round", 3, "routerLink"], [1, "col-md-4"], [1, "card", "card-plain", "pointer", 3, "click"], [1, "card-image"], ["class", "img-thumbnail img-responsive", 3, "src", 4, "ngIf"], ["class", "img-thumbnail img-responsive", "src", "/assets/images/no-image.png", 4, "ngIf"], [1, "card-block"], [1, "card-title", "text-primary"], [1, "card-description", "text-center"], [1, "card-footer", "text-center"], [1, "img-thumbnail", "img-responsive", 3, "src"], ["src", "/assets/images/no-image.png", 1, "img-thumbnail", "img-responsive"], [1, "btn", "btn-primary", "btn-round"], [1, "btn", "btn-link", "btn-danger"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Cajun Cookbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Discover the Finest Recipes from Louisiana - Cajun, Creole, and Southern Cuisine");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Search Recipes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, LandingComponent_button_12_Template, 2, 2, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "div", 7)(15, "div", 2)(16, "h2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Featured Recipes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, LandingComponent_div_19_Template, 13, 6, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 11)(23, "div", 2)(24, "div", 12)(25, "div", 13)(26, "h2", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Your Personal Recipe Book");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h5", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Welcome to Cajun Cookbook, the perfect place to share and discover new recipes. Create your very own recipe book, with the ability to rate and comment on other users' recipes. Whether you're looking for a classic jambalaya or a unique seafood gumbo, our community of passionate Cajuns has got you covered. Join us today and let's cook up some Cajun magic together! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, LandingComponent_button_31_Template, 2, 0, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "br")(33, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 9)(35, "div", 17)(36, "div", 18)(37, "div", 15)(38, "h4", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Build Your Own Cookbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Create and customize your own cookbook filled with your favorite recipes. Save, organize, and access your recipes anytime, anywhere.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, LandingComponent_a_42_Template, 2, 0, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 17)(44, "div", 18)(45, "div", 15)(46, "h4", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Share Your Recipes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Share your recipes with a community of fellow cajun food enthusiasts. Get feedback, comments, and ratings on your recipes from other users. Discover new recipes and tips from other cajun cooks.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, LandingComponent_a_50_Template, 2, 0, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 17)(52, "div", 18)(53, "div", 15)(54, "h4", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Discover Authentic Cajun Flavors");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Explore a collection of authentic cajun recipes, from classic dishes to new and innovative creations. Filter and search recipes by ingredients, cuisine type, and dietary restrictions to find the perfect recipe for your taste.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, LandingComponent_a_58_Template, 2, 0, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 17)(60, "div", 18)(61, "div", 15)(62, "h4", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Connect with Others");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Join a community of cajun food lovers who share the same passion for this delicious cuisine. Get inspired, share stories, and make new friends who share your love for cajun cooking.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, LandingComponent_a_66_Template, 2, 0, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 21)(68, "div", 2)(69, "div", 9)(70, "div", 13)(71, "h2", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Questions, comments or feedback?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "form", 23)(74, "div", 9)(75, "div", 24)(76, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 25)(79, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 24)(83, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 25)(86, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "textarea", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 9)(93, "div", 32)(94, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](20, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 11, ctx.filteredRecipes$), 0, 6));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_3__.PrimaryLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe],
  styles: [".card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltYWdlIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 1827);
/* harmony import */ var _reset_password_modal_reset_password_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-modal/reset-password-modal.component */ 5960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/layout/primary-layout/primary-layout.component */ 8119);











function LoginComponent_ngb_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
class LoginComponent {
  constructor(auth, store, formBuilder, modalService, socialAuthService) {
    this.auth = auth;
    this.store = store;
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.socialAuthService = socialAuthService;
  }
  ngOnInit() {
    this.socialAuthService.authState.subscribe(user => {
      console.log(user);
    });
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
  signInWithFB() {
    this.socialAuthService.signIn(_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_4__.FacebookLoginProvider.PROVIDER_ID).then(user => {
      console.log('Logged in with Facebook:', user);
      // Perform further actions with the user data
    }).catch(error => {
      console.error('Error logging in with Facebook:', error);
    });
  }
  signOut() {
    this.socialAuthService.signOut();
  }
  login() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.auth.login(this.form.getRawValue())).then(response => {}, error => {
      this.errorMessage = error.error.error_message;
    });
  }
  forgotPassword() {
    let modal = this.modalService.open(_reset_password_modal_reset_password_modal_component__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordModalComponent, {
      centered: true
    });
    modal.result.then(result => {
      if (result.action == 'confirm') {
        //this.router
        //this.store.dispatch(AppAuth.forgotPassword({ email: result.email}));
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_4__.SocialAuthService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["ng-component"]],
  decls: 21,
  vars: 2,
  consts: [[1, "page-header", 2, "background-image", "url('./assets/images/pasta2.png')"], [1, "filter"], [1, "card", "card-register"], [1, "title"], [1, "btn", 3, "click"], [1, "register-form", 3, "formGroup"], [1, "text-primary"], ["type", "text", "placeholder", "Email", "type", "email", "formControlName", "email", 1, "form-control"], ["type", "text", "placeholder", "Password", "type", "password", "formControlName", "password", 1, "form-control"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "btn", "btn-primary", "btn-block", "btn-round", 3, "click"], [1, "forgot"], [1, "btn", "btn-link", "btn-primary", 3, "click"], ["type", "danger", 3, "dismissible"], [1, "container"], [1, "fa", "fa-bell"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_6_listener() {
        return ctx.signInWithFB();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Login with Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 5)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LoginComponent_ngb_alert_15_Template, 5, 2, "ngb-alert", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_19_listener() {
        return ctx.forgotPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Forgot password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAlert, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_2__.PrimaryLayoutComponent],
  styles: [".card[_ngcontent-%COMP%] {\n  min-width: 350px;\n}\n\n.fa-bell[_ngcontent-%COMP%] {\n  font-size: 15px;\n  vertical-align: text-top;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG59XG5cbi5mYS1iZWxsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjp0ZXh0LXRvcDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 5960:
/*!******************************************************************************!*\
  !*** ./src/app/login/reset-password-modal/reset-password-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordModalComponent": () => (/* binding */ ResetPasswordModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);




function ResetPasswordModalComponent_ngb_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
class ResetPasswordModalComponent {
  constructor(modal, formBuilder) {
    this.modal = modal;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['']
    });
  }
  confirm() {
    this.modal.close({
      action: 'confirm'
    });
  }
  cancel() {
    this.modal.close({
      action: 'cancel'
    });
  }
}
ResetPasswordModalComponent.ɵfac = function ResetPasswordModalComponent_Factory(t) {
  return new (t || ResetPasswordModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
ResetPasswordModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ResetPasswordModalComponent,
  selectors: [["ng-component"]],
  decls: 14,
  vars: 2,
  consts: [[1, "modal-body", "px-md-5"], [1, "fa", "fa-times", 3, "click"], [1, "content", "mt-4"], [1, "row", "text-primary"], [1, "content", "text-center"], [1, "register-form", 3, "formGroup"], [1, "text-primary"], ["type", "text", "placeholder", "Email", "type", "email", "formControlName", "email", 1, "form-control"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mb-3"], ["type", "button", 1, "btn", "btn-primary", "btn-round", 3, "click"], ["type", "danger", 3, "dismissible"], [1, "container"], [1, "fa", "fa-bell"]],
  template: function ResetPasswordModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordModalComponent_Template_i_click_1_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResetPasswordModalComponent_ngb_alert_10_Template, 5, 2, "ngb-alert", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordModalComponent_Template_button_click_12_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Reset Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAlert],
  encapsulation: 2
});


/***/ }),

/***/ 1480:
/*!************************************************************!*\
  !*** ./src/app/password-reset/password-reset.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetComponent": () => (/* binding */ PasswordResetComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/layout/primary-layout/primary-layout.component */ 8119);








function PasswordResetComponent_ngb_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
class PasswordResetComponent {
  constructor(router, auth, formBuilder) {
    this.router = router;
    this.auth = auth;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      password: [''],
      password_confirmation: ['']
    });
  }
  signUp() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(this.auth.signUp(this.form.getRawValue())).then(response => {}, error => {
      this.errorMessage = error.error.error_message;
    });
  }
}
PasswordResetComponent.ɵfac = function PasswordResetComponent_Factory(t) {
  return new (t || PasswordResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
PasswordResetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PasswordResetComponent,
  selectors: [["ng-component"]],
  decls: 18,
  vars: 2,
  consts: [[1, "page-header", 2, "background-image", "url('./assets/images/pasta2.png')"], [1, "filter"], [1, "card", "card-register"], [1, "title"], [1, "register-form", 3, "formGroup"], [1, "text-primary"], ["type", "text", "placeholder", "Password", "type", "password", "formControlName", "password", 1, "form-control"], ["type", "text", "placeholder", "Password Confirmation", "type", "password", "formControlName", "password_confirmation", 1, "form-control"], [1, "text-black"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "btn", "btn-primary", "btn-block", "btn-round", 3, "click"], ["type", "danger", 3, "dismissible"], [1, "container"], [1, "fa", "fa-bell"]],
  template: function PasswordResetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Reset Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4)(7, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Password Confirmation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Password must be at least 6 characters long and contain at least one letter and one digit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PasswordResetComponent_ngb_alert_15_Template, 5, 2, "ngb-alert", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordResetComponent_Template_button_click_16_listener() {
        return ctx.signUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Sign Up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_1__.PrimaryLayoutComponent],
  styles: [".card[_ngcontent-%COMP%] {\n  min-width: 350px;\n}\n\n.fa-bell[_ngcontent-%COMP%] {\n  font-size: 15px;\n  vertical-align: text-top;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG59XG5cbi5mYS1iZWxsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjp0ZXh0LXRvcDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 5735:
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesComponent": () => (/* binding */ RecipesComponent)
/* harmony export */ });
/* harmony import */ var _state_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/app.actions */ 7527);
/* harmony import */ var _state_app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/app.selector */ 6614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/pagination/pagination.component */ 3556);
/* harmony import */ var _shared_components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/text-filter/text-filter.component */ 5089);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/layout/primary-layout/primary-layout.component */ 8119);











function RecipesComponent_ng_container_13_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipesComponent_ng_container_13_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.goRecipe(recipe_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", recipe_r1.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function RecipesComponent_ng_container_13_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipesComponent_ng_container_13_img_5_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.goRecipe(recipe_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RecipesComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipesComponent_ng_container_13_Template_ng_container_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const recipe_r1 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.goRecipe(recipe_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li", 13)(2, "div", 2)(3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RecipesComponent_ng_container_13_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, RecipesComponent_ng_container_13_img_5_Template, 1, 0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 17)(7, "h6")(8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipesComponent_ng_container_13_Template_span_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const recipe_r1 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.goRecipe(recipe_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14)(18, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipesComponent_ng_container_13_Template_h6_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const recipe_r1 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.goUser(recipe_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Contributor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", recipe_r1.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !recipe_r1.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", recipe_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](recipe_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("ngbTooltip", recipe_r1.liking_users_names);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", recipe_r1.like_count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", recipe_r1.user == null ? null : recipe_r1.user.first, " ", recipe_r1.user == null ? null : recipe_r1.user.last, " ");
  }
}
class RecipesComponent {
  constructor(auth, store, router, route) {
    this.auth = auth;
    this.store = store;
    this.router = router;
    this.route = route;
    this.recipes$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_1__.selectRecipes);
    this.filteredRecipes$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_1__.selectFilteredRecipes);
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipes());
  }
  goUser(recipe) {
    this.router.navigate([`/cookbook/${recipe.user_id}`]);
  }
  goRecipe(recipe) {
    this.router.navigate([`/cookbook/${recipe.user_id}/recipe/${recipe.id}`]);
  }
}
RecipesComponent.ɵfac = function RecipesComponent_Factory(t) {
  return new (t || RecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
};
RecipesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: RecipesComponent,
  selectors: [["ng-component"]],
  decls: 18,
  vars: 11,
  consts: [[1, "header", "section", "section-gray", "text-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-6", "offset-md-3", "text-center"], [1, "title-uppercase", "cookbook-title", "text-primary"], [1, "section"], [1, "row", "following"], [1, "col-md-12", "text-center"], [1, "list-unstyled"], [3, "click", 4, "ngFor", "ngForOf"], [1, "ms-4"], ["label", "Total Recipes", 3, "records", "filteredRecords", "page", "pageSize", "pageChanged"], [3, "click"], [1, "border-bottom", "mb-3"], [1, "col-md-2", "col-sm-2", "ml-auto", "mr-auto"], ["class", "card-img-table img-thumbnail img-no-padding img-responsive pointer", "alt", "Recipe Image", "width", "100", "height", "70", 3, "src", "click", 4, "ngIf"], ["class", "card-img-table img-thumbnail img-no-padding img-responsive pointer", "src", "/assets/images/no-image.png", "alt", "No Image", "width", "100", "height", "70", 3, "click", 4, "ngIf"], [1, "col-md-8", "col-sm-4", "ml-auto"], [1, "text-primary", "pointer", 3, "click"], [1, "like-icon", "like", 3, "ngbTooltip"], [1, "fa", "fa-thumbs-up"], ["alt", "Recipe Image", "width", "100", "height", "70", 1, "card-img-table", "img-thumbnail", "img-no-padding", "img-responsive", "pointer", 3, "src", "click"], ["src", "/assets/images/no-image.png", "alt", "No Image", "width", "100", "height", "70", 1, "card-img-table", "img-thumbnail", "img-no-padding", "img-responsive", "pointer", 3, "click"]],
  template: function RecipesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Search Recipes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-text-filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "div", 1)(10, "div", 6)(11, "div", 7)(12, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RecipesComponent_ng_container_13_Template, 22, 8, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 10)(17, "pagination", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChanged", function RecipesComponent_Template_pagination_pageChanged_17_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](14, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 9, ctx.filteredRecipes$), (ctx.page - 1) * ctx.pageSize, ctx.page * ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("records", ctx.recipes$)("filteredRecords", ctx.filteredRecipes$)("page", ctx.page)("pageSize", ctx.pageSize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent, _shared_components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_4__.TextFilterComponent, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_5__.PrimaryLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
  styles: [".header[_ngcontent-%COMP%] {\n  margin-top: -45px;\n}\n\n.card-img-table[_ngcontent-%COMP%] {\n  height: 65px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xufVxuXG4uY2FyZC1pbWctdGFibGUge1xuICBoZWlnaHQ6IDY1cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 1724:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/action-modal/action-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionModalComponent": () => (/* binding */ ActionModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



function ActionModalComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.schema.subText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
class ActionModalComponent {
  constructor(modal) {
    this.modal = modal;
  }
  confirm() {
    this.modal.close({
      action: 'confirm'
    });
  }
  cancel() {
    this.modal.close({
      action: 'cancel'
    });
  }
}
ActionModalComponent.ɵfac = function ActionModalComponent_Factory(t) {
  return new (t || ActionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
};
ActionModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ActionModalComponent,
  selectors: [["action-modal"]],
  inputs: {
    name: "name",
    schema: "schema"
  },
  decls: 10,
  vars: 12,
  consts: [[1, "modal-body", "px-md-5"], [1, "fa", "fa-times", 3, "click"], [1, "content", "mt-4"], [1, "content", "text-center", 3, "innerHtml"], ["class", "content text-center pt-3", 3, "innerHtml", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mb-3"], ["type", "button", 3, "click"], [1, "content", "text-center", "pt-3", 3, "innerHtml"]],
  template: function ActionModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionModalComponent_Template_i_click_1_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActionModalComponent_p_5_Template, 1, 1, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionModalComponent_Template_button_click_7_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("row text-", ctx.schema.theme, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.schema.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.subText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-", ctx.schema.theme, " btn-round");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.schema.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.schema.action, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  font-size: 18px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWN0aW9uLW1vZGFsL2FjdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXRpbWVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 312:
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

const _c0 = [[["", "modal-header", ""]], [["", "modal-body", ""]], [["", "modal-secondary-actions", ""]], [["", "modal-primary-actions", ""]]];
const _c1 = ["[modal-header]", "[modal-body]", "[modal-secondary-actions]", "[modal-primary-actions]"];
class ModalComponent {}
ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || ModalComponent)();
};
ModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModalComponent,
  selectors: [["modal"]],
  ngContentSelectors: _c1,
  decls: 10,
  vars: 0,
  consts: [[1, "modal"], [1, "modal-header"], [1, "modal-body"], [1, "modal-footer", "justify-content-between"], [1, "modal-secondary-actions"], [1, "modal-primary-actions"]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  min-height: 55px !important;\n  padding: 10px !important;\n}\n.modal[_ngcontent-%COMP%]   .modal-hero[_ngcontent-%COMP%]   .modal-hero-icon[_ngcontent-%COMP%] {\n  top: 0;\n  font-size: 50px;\n  display: block;\n  margin: 0 auto;\n}\n.modal[_ngcontent-%COMP%]   .modal-hero[_ngcontent-%COMP%]   .modal-hero-text[_ngcontent-%COMP%] {\n  min-height: 80px;\n  margin-top: 10px;\n  padding: 0 20px;\n  display: block;\n}\n.modal[_ngcontent-%COMP%]   .modal-hero[_ngcontent-%COMP%]   .modal-hero-header[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  line-height: 23px;\n  margin-bottom: 20px;\n}\n.modal[_ngcontent-%COMP%]   .modal-hero[_ngcontent-%COMP%]   .modal-hero-detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFJSTtFQUNFLE1BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFGTjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRk47QUFJSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUZOO0FBSUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRk4iLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgbWluLWhlaWdodDogNTVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tb2RhbC1oZXJvIHtcblxuICAgIC5tb2RhbC1oZXJvLWljb24ge1xuICAgICAgdG9wOiAwO1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLm1vZGFsLWhlcm8tdGV4dCB7XG4gICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubW9kYWwtaGVyby1oZWFkZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDoyM3B4O1xuICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIH1cbiAgICAubW9kYWwtaGVyby1kZXRhaWwge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 3556:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function PaginationComponent_div_0_ng_template_4_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaginationComponent_div_0_ng_template_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaginationComponent_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationComponent_div_0_ng_template_4_a_0_Template, 2, 0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_div_0_ng_template_4_span_1_Template, 2, 0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.page != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.page == 1);
  }
}
function PaginationComponent_div_0_ng_template_5_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaginationComponent_div_0_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaginationComponent_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationComponent_div_0_ng_template_5_a_0_Template, 2, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_div_0_ng_template_5_span_1_Template, 2, 0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.upper != ctx_r2.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.upper == ctx_r2.total);
  }
}
function PaginationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-pagination", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_div_0_Template_ngb_pagination_pageChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.page = $event);
    })("pageChange", function PaginationComponent_div_0_Template_ngb_pagination_pageChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.pageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_div_0_ng_template_4_Template, 2, 2, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_div_0_ng_template_5_Template, 2, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.collectionSize, " ", ctx_r0.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx_r0.page)("pageSize", ctx_r0.pageSize)("collectionSize", ctx_r0.collectionSize);
  }
}
class PaginationComponent {
  constructor() {
    this.page = 1;
    this.pageSize = 10;
    this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.recordsSub = this.records.subscribe(records => {
      this.total = records.length;
    });
    this.recordsSub.add(this.filteredRecords.subscribe(records => {
      this.collectionSize = records.length;
    }));
  }
  ngDoCheck() {
    this.updateRangeValues();
  }
  ngOnDestroy() {
    if (this.recordsSub) {
      this.recordsSub.unsubscribe();
    }
  }
  pageChange() {
    this.pageChanged.emit(this.page);
    this.updateRangeValues();
  }
  updateRangeValues() {
    this.lower = (this.page - 1) * this.pageSize + 1;
    this.upper = Math.min(this.page * this.pageSize, this.collectionSize);
    this.total = this.collectionSize;
  }
  get recordLength() {
    return this.records.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(records => {
      return records.length;
    }));
  }
  get hasFilteredRecord() {
    return this.filteredRecords.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(records => {
      return records.length > 0;
    }));
  }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
  return new (t || PaginationComponent)();
};
PaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PaginationComponent,
  selectors: [["pagination"]],
  inputs: {
    records: "records",
    filteredRecords: "filteredRecords",
    page: "page",
    pageSize: "pageSize",
    label: "label"
  },
  outputs: {
    pageChanged: "pageChanged"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "pagination-wrapper nav-pills-primary", 4, "ngIf"], [1, "pagination-wrapper", "nav-pills-primary"], [1, "pagination-count"], [1, "pagination", "d-flex", "justify-content-center", 3, "page", "pageSize", "collectionSize", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["href", "", "class", "pagination-link prev-link", 4, "ngIf"], ["class", "pagination-link prev-link disabled", 4, "ngIf"], ["href", "", 1, "pagination-link", "prev-link"], [1, "fa", "fa-chevron-left"], [1, "pagination-link", "prev-link", "disabled"], ["href", "", "class", "pagination-link next-link", 4, "ngIf"], ["class", "pagination-link next-link disabled", 4, "ngIf"], ["href", "", 1, "pagination-link", "next-link"], [1, "fa", "fa-chevron-right"], [1, "pagination-link", "next-link", "disabled"]],
  template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationComponent_div_0_Template, 6, 5, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectionSize > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPaginationPrevious],
  styles: [".next-link[_ngcontent-%COMP%], .prev-link[_ngcontent-%COMP%] {\n  color: #a51c30;\n}\n\n.next-link.disabled[_ngcontent-%COMP%], .prev-link.disabled[_ngcontent-%COMP%] {\n  color: #ccc;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGNBQUE7QUFDRjs7QUFFQTs7RUFFRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5leHQtbGluayxcbi5wcmV2LWxpbmsge1xuICBjb2xvcjogI2E1MWMzMDtcbn1cblxuLm5leHQtbGluay5kaXNhYmxlZCxcbi5wcmV2LWxpbmsuZGlzYWJsZWQge1xuICBjb2xvcjogI2NjYztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 5089:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/text-filter/text-filter.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextFilterComponent": () => (/* binding */ TextFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/app.actions */ 7527);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);





class TextFilterComponent {
  constructor(store) {
    this.store = store;
    this.filterStore = true;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  set() {
    if (this.filterStore) {
      this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.AppFiltering.search({
        text: this.text
      }));
    } else {
      this.onChange.emit(this.text);
    }
  }
  change() {
    this.set();
  }
  clear() {
    this.text = '';
    this.set();
  }
}
TextFilterComponent.ɵfac = function TextFilterComponent_Factory(t) {
  return new (t || TextFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
TextFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TextFilterComponent,
  selectors: [["app-text-filter"]],
  inputs: {
    placeholder: "placeholder",
    tooltip: "tooltip",
    tooltipPlacement: "tooltipPlacement",
    text: "text",
    filterStore: "filterStore"
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 7,
  vars: 4,
  consts: [[1, "text-filter"], [1, "form-group", "position-relative"], ["autocomplete", "off", "type", "text", "id", "search-input", 1, "form-control", "mb-3", 3, "ngModel", "placeholder", "ngModelChange"], [1, "form-control-feedback", 3, "hidden"], [1, "fa", "fa-search"], [1, "form-control-feedback", "text-filter-clear", 3, "hidden", "click"], [1, "cancel", "mb-1", "fa", "fa-times"]],
  template: function TextFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TextFilterComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.text = $event;
      })("ngModelChange", function TextFilterComponent_Template_input_ngModelChange_2_listener() {
        return ctx.change();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextFilterComponent_Template_span_click_5_listener() {
        return ctx.clear();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder || "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.text);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".text-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 38px;\n}\n.text-filter[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  margin-top: -27px;\n  color: #a51c30;\n}\n.text-filter[_ngcontent-%COMP%]   .text-filter-clear[_ngcontent-%COMP%] {\n  cursor: pointer;\n  pointer-events: auto !important;\n  margin-top: -45px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1maWx0ZXIvdGV4dC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxZQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZmlsdGVyIHtcblxuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0yN3B4O1xuICAgIGNvbG9yOiAjYTUxYzMwO1xuICB9XG5cbiAgLnRleHQtZmlsdGVyLWNsZWFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtNDVweCAhaW1wb3J0YW50O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 6634:
/*!******************************************************************!*\
  !*** ./src/app/shared/layout/error-page/error-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": () => (/* binding */ ErrorPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primary-layout/primary-layout.component */ 8119);




function ErrorPageComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sorry, the server cannot process that request.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sorry, you do not have permission to view that page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sorry, you do not have permission to view that page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The page you are looking for does not exist. Please check the URL and try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The record you're looking for has been deleted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "An unexpected error has occured.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "An unexpected error has occured.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sorry, the site is down for maintenance.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_h6_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "400: Bad Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_h6_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "401: Unauthorized");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_h6_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "403: Forbidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_h6_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "404: Page Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_h6_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "410: Gone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_h6_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "422: Unprocessable Entity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_h6_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "500: Internal Server Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ErrorPageComponent_h6_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "503: Service Unavailable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ErrorPageComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) {
  return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ErrorPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ErrorPageComponent,
  selectors: [["ng-component"]],
  decls: 23,
  vars: 18,
  consts: [[1, "container", "mb-5", "text-center"], [1, "inline-icon"], [1, "fas", "fa-exclamation-triangle", "me-3", "text-primary"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
  template: function ErrorPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0)(2, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ErrorPageComponent_span_5_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ErrorPageComponent_span_6_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ErrorPageComponent_span_7_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ErrorPageComponent_span_8_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ErrorPageComponent_span_9_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ErrorPageComponent_span_10_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ErrorPageComponent_span_11_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ErrorPageComponent_span_12_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div")(14, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ErrorPageComponent_h6_15_Template, 2, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ErrorPageComponent_h6_16_Template, 2, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ErrorPageComponent_h6_17_Template, 2, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ErrorPageComponent_h6_18_Template, 2, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ErrorPageComponent_h6_19_Template, 2, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ErrorPageComponent_h6_20_Template, 2, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ErrorPageComponent_h6_21_Template, 2, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ErrorPageComponent_h6_22_Template, 2, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.route.snapshot.params["error"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "400");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "401");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "403");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "410");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "422");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "503");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.route.snapshot.params["error"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "400");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "401");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "403");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "410");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "422");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "503");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_0__.PrimaryLayoutComponent],
  encapsulation: 2
});


/***/ }),

/***/ 1070:
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


class FooterComponent {
  constructor() {
    this.test = new Date();
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 15,
  vars: 4,
  consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "footer-nav", "col-md-10"], [1, "credits", "col-md-2"], [1, "copyright"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "nav", 3)(4, "ul")(5, "li")(6, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Terms");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 1, ctx.test, "yyyy"), ", version 1.0 ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8489:
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/navbar/navbar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function NavbarComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 9)(2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 9)(7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Instagram");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 17)(12, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function (a0) {
  return [a0];
};
function NavbarComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 9)(2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "My Cookbook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 21)(7, "div", 22)(8, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 25)(13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_container_17_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, "/cookbook/" + ((tmp_0_0 = ctx_r1.auth.getCurrentUser()) == null ? null : tmp_0_0.id)));
  }
}
const _c1 = function () {
  return ["/login"];
};
const _c2 = function () {
  return ["/signup"];
};
function NavbarComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 9)(2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 9)(5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
  }
}
const _c3 = function () {
  return ["/landing"];
};
const _c4 = function () {
  return ["/recipes"];
};
class NavbarComponent {
  constructor(location, element, auth) {
    this.location = location;
    this.element = element;
    this.auth = auth;
    this.sidebarVisible = false;
  }
  ngOnInit() {
    const navbar = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');
    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  logout() {
    this.auth.logout();
  }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 19,
  vars: 7,
  consts: [[1, "navbar", "navbar-expand-lg", "fixed-top"], [1, "container"], [1, "navbar-translate"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", 1, "navbar-toggler", "navbar-burger", 3, "click"], [1, "navbar-toggler-bar"], [1, "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "ml-auto"], [4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "fa", "fa-search"], ["rel", "tooltip", "title", "Like us on Facebook", "href", "https://www.facebook.com", "target", "_blank", 1, "nav-link"], [1, "fa-brands", "fa-facebook-square"], [1, "d-lg-none"], ["rel", "tooltip", "title", "Follow us on Instagram", "href", "https://www.instagram.com", "target", "_blank", 1, "nav-link"], [1, "fa-brands", "fa-instagram"], [1, "nav-item", "me-5"], ["rel", "tooltip", "title", "Star on GitHub", "href", "https://www.github.com", "target", "_blank", 1, "nav-link"], [1, "fa-brands", "fa-github"], [1, "fa", "fa-book"], [1, "nav-item", "pointer", "profile-nav-item"], ["ngbDropdown", "", 1, "d-inline-block", "dropdown"], ["ngbDropdownToggle", "", 1, "nav-link"], [1, "fa", "fa-user"], ["ngbDropdownMenu", "", 1, "dropdown-primary"], ["ngbDropdownItem", ""], ["ngbDropdownItem", "", 3, "click"], [1, "btn", "btn-primary", "btn-round", 3, "routerLink"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cajun Cookbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_5_listener() {
        return ctx.sidebarToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 5)(7, "span", 5)(8, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NavbarComponent_ng_container_11_Template, 16, 0, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 9)(13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Search Recipes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavbarComponent_ng_container_17_Template, 17, 3, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NavbarComponent_ng_container_18_Template, 7, 4, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavbar],
  styles: [".nav-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n\n@media screen and (max-width: 991px) {\n  .profile-nav-item[_ngcontent-%COMP%] {\n    margin-top: -10px;\n    margin-left: -14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsbUJBQUE7QUFESjs7QUFLQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQUZGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXYtaXRlbSB7XG4gIHAge1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xuICAucHJvZmlsZS1uYXYtaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 8119:
/*!**************************************************************************!*\
  !*** ./src/app/shared/layout/primary-layout/primary-layout.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryLayoutComponent": () => (/* binding */ PrimaryLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 8489);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 1070);









const _c0 = ["*"];
class PrimaryLayoutComponent {
  constructor(renderer, router, document, element, location) {
    this.renderer = renderer;
    this.router = router;
    this.document = document;
    this.element = element;
    this.location = location;
  }
  ngOnInit() {
    var navbar = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(event => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      } else {
        if (window.document.activeElement) {
          window.document.activeElement.scrollTop = 0;
        }
      }
      this.navbar.sidebarClose();
    });
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    var version = 0;
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    if (version) {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('ie-background');
    }
  }
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === 'signup' || titlee === 'nucleoicons') {
      return false;
    } else {
      return true;
    }
  }
}
PrimaryLayoutComponent.ɵfac = function PrimaryLayoutComponent_Factory(t) {
  return new (t || PrimaryLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location));
};
PrimaryLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PrimaryLayoutComponent,
  selectors: [["app-primary-layout"]],
  viewQuery: function PrimaryLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
    }
  },
  ngContentSelectors: _c0,
  decls: 5,
  vars: 0,
  consts: [[1, "app-primary-layout"], [1, "main-content"]],
  template: function PrimaryLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: [".app-primary-layout[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xheW91dC9wcmltYXJ5LWxheW91dC9wcmltYXJ5LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXByaW1hcnktbGF5b3V0IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 9845:
/*!**************************************************************************!*\
  !*** ./src/app/shared/layout/trowser-layout/trowser-layout.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrowserLayoutComponent": () => (/* binding */ TrowserLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);



const _c0 = [[["", "content", ""]], [["", "actions", ""]]];
const _c1 = ["[content]", "[actions]"];
class TrowserLayoutComponent {
  constructor() {
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  cancelOut() {
    this.cancel.emit();
  }
}
TrowserLayoutComponent.ɵfac = function TrowserLayoutComponent_Factory(t) {
  return new (t || TrowserLayoutComponent)();
};
TrowserLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TrowserLayoutComponent,
  selectors: [["app-trowser-layout"]],
  inputs: {
    header: "header"
  },
  outputs: {
    cancel: "cancel"
  },
  ngContentSelectors: _c1,
  decls: 10,
  vars: 1,
  consts: [[1, "navbar", "fixed-top", "navbar-expand-lg"], [1, "container-fluid"], [1, "cancel", "fa", "fa-times", 3, "click"], [1, "container", "py-5", "mt-5", "mb-5"], [1, "navbar", "fixed-bottom"]],
  template: function TrowserLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrowserLayoutComponent_Template_i_click_4_listener() {
        return ctx.cancelOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 4)(8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavbar],
  styles: [".cancel[_ngcontent-%COMP%] {\n  font-size: 25px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xheW91dC90cm93c2VyLWxheW91dC90cm93c2VyLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FuY2VsIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 5964:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/search-filter.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFilterPipe": () => (/* binding */ SearchFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

/*
 * Filter array by text
*/
class SearchFilterPipe {
  transform(text, items, keys, nestedArrayKey, nestedKeys) {
    // Return all items on empty search
    if (!text) {
      return items;
    }
    // If keys not set use all keys
    if (!keys) {
      keys = Object.keys(items[0]);
    }
    // Init empty filtered array
    let filtered = [];
    // Lowercase search text
    let search = text.toLowerCase();
    for (let item of items) {
      for (let k of keys) {
        // Next if item key is null or item is already in filtered array
        if (!item[k] || filtered.indexOf(item) != -1) {
          continue;
        }
        var key = item[k].toString().toLowerCase();
        // Add item to filter if search match
        if (key.indexOf(search) != -1) {
          filtered.push(item);
        }
      }
      // Handle nested search
      if (nestedKeys) {
        for (let nestedItem of item[nestedArrayKey]) {
          for (let k of nestedKeys) {
            // Next if item key is null or item is already in filtered array
            if (!item[k] || filtered.indexOf(item) != -1) {
              continue;
            }
            var key = nestedItem[k].toString().toLowerCase();
            // Add item to filter if search match
            if (key.indexOf(search) != -1) {
              filtered.push(item);
            }
          }
        }
      }
    }
    // Return filtered array
    return filtered;
  }
}
SearchFilterPipe.ɵfac = function SearchFilterPipe_Factory(t) {
  return new (t || SearchFilterPipe)();
};
SearchFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "searchFilter",
  type: SearchFilterPipe,
  pure: true
});


/***/ }),

/***/ 4422:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/whitelist-keys.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhitelistKeysPipe": () => (/* binding */ WhitelistKeysPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

/*
 * Remove all key values pairs except for provided keys ['foo', 'bar']
*/
class WhitelistKeysPipe {
  transform(object, keys) {
    let ob = Object.assign({}, object);
    Object.keys(ob).forEach(k => {
      if (!keys.includes(k)) {
        delete ob[k];
      }
    });
    return ob;
  }
}
WhitelistKeysPipe.ɵfac = function WhitelistKeysPipe_Factory(t) {
  return new (t || WhitelistKeysPipe)();
};
WhitelistKeysPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "whitelistKeys",
  type: WhitelistKeysPipe,
  pure: true
});


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _layout_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/error-page/error-page.component */ 6634);
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ 8489);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/footer/footer.component */ 1070);
/* harmony import */ var _layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/primary-layout/primary-layout.component */ 8119);
/* harmony import */ var _layout_trowser_layout_trowser_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/trowser-layout/trowser-layout.component */ 9845);
/* harmony import */ var _components_action_modal_action_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/action-modal/action-modal.component */ 1724);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal/modal.component */ 312);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 3556);
/* harmony import */ var _components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/text-filter/text-filter.component */ 5089);
/* harmony import */ var _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/search-filter.pipe */ 5964);
/* harmony import */ var _pipes_whitelist_keys_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/whitelist-keys.pipe */ 4422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 6839);
















const components = [_layout_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__.ErrorPageComponent, _components_action_modal_action_modal_component__WEBPACK_IMPORTED_MODULE_5__.ActionModalComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent, _components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_8__.TextFilterComponent, _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_3__.PrimaryLayoutComponent, _layout_trowser_layout_trowser_layout_component__WEBPACK_IMPORTED_MODULE_4__.TrowserLayoutComponent];
const pipes = [_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__.SearchFilterPipe, _pipes_whitelist_keys_pipe__WEBPACK_IMPORTED_MODULE_10__.WhitelistKeysPipe];
class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_layout_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__.ErrorPageComponent, _components_action_modal_action_modal_component__WEBPACK_IMPORTED_MODULE_5__.ActionModalComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent, _components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_8__.TextFilterComponent, _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_3__.PrimaryLayoutComponent, _layout_trowser_layout_trowser_layout_component__WEBPACK_IMPORTED_MODULE_4__.TrowserLayoutComponent, _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__.SearchFilterPipe, _pipes_whitelist_keys_pipe__WEBPACK_IMPORTED_MODULE_10__.WhitelistKeysPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule],
    exports: [_layout_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__.ErrorPageComponent, _components_action_modal_action_modal_component__WEBPACK_IMPORTED_MODULE_5__.ActionModalComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent, _components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_8__.TextFilterComponent, _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_3__.PrimaryLayoutComponent, _layout_trowser_layout_trowser_layout_component__WEBPACK_IMPORTED_MODULE_4__.TrowserLayoutComponent, _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__.SearchFilterPipe, _pipes_whitelist_keys_pipe__WEBPACK_IMPORTED_MODULE_10__.WhitelistKeysPipe]
  });
})();

/***/ }),

/***/ 570:
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/layout/primary-layout/primary-layout.component */ 8119);








function SignupComponent_ngb_alert_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
class SignupComponent {
  constructor(router, auth, formBuilder) {
    this.router = router;
    this.auth = auth;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      first: [''],
      last: [''],
      location: [''],
      email: [''],
      password: [''],
      password_confirmation: ['']
    });
  }
  signUp() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(this.auth.signUp(this.form.getRawValue())).then(response => {}, error => {
      this.errorMessage = error.error.error_message;
    });
  }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) {
  return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
SignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SignupComponent,
  selectors: [["ng-component"]],
  decls: 30,
  vars: 2,
  consts: [[1, "page-header", 2, "background-image", "url('./assets/images/pasta2.png')"], [1, "filter"], [1, "card", "card-register"], [1, "title"], [1, "register-form", 3, "formGroup"], [1, "text-primary"], ["type", "text", "placeholder", "First Name", "type", "text", "formControlName", "first", 1, "form-control"], ["type", "text", "placeholder", "Last Name", "type", "text", "formControlName", "last", 1, "form-control"], ["type", "text", "placeholder", "EX: Houma, La", "type", "text", "formControlName", "location", 1, "form-control"], ["type", "text", "placeholder", "Email", "type", "email", "formControlName", "email", 1, "form-control"], ["type", "text", "placeholder", "Password", "type", "password", "formControlName", "password", 1, "form-control"], ["type", "text", "placeholder", "Password Confirmation", "type", "password", "formControlName", "password_confirmation", 1, "form-control"], [1, "text-black"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "btn", "btn-primary", "btn-block", "btn-round", 3, "click"], ["type", "danger", 3, "dismissible"], [1, "container"], [1, "fa", "fa-bell"]],
  template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4)(7, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Home Town");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Password Confirmation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "small", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Password must be at least 6 characters long and contain at least one letter and one digit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SignupComponent_ngb_alert_27_Template, 5, 2, "ngb-alert", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_28_listener() {
        return ctx.signUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Sign Up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_1__.PrimaryLayoutComponent],
  styles: [".card[_ngcontent-%COMP%] {\n  min-width: 350px;\n}\n\n.fa-bell[_ngcontent-%COMP%] {\n  font-size: 15px;\n  vertical-align: text-top;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxuLmZhLWJlbGwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOnRleHQtdG9wO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7527:
/*!**************************************!*\
  !*** ./src/app/state/app.actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppAuth": () => (/* binding */ AppAuth),
/* harmony export */   "AppFiltering": () => (/* binding */ AppFiltering),
/* harmony export */   "RecipeActions": () => (/* binding */ RecipeActions),
/* harmony export */   "UserActions": () => (/* binding */ UserActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 4307);

const AppAuth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: '[App Auth]',
  events: {
    'Login': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Login Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'FB Login': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'FB Login Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Login Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Logout': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Logout Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Create Session': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Create Session Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Destroy Session': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Forgot Password': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Forgot Password Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Reset Password': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Reset Password Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()
  }
});
const AppFiltering = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: '[App Filter]',
  events: {
    'Sort': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Search': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Reset Filters': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)()
  }
});
const UserActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: '[Users API]',
  events: {
    'Get User': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get User Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get User Recipes': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get User Recipes Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()
  }
});
const RecipeActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: '[Recipes API]',
  events: {
    'Get Recipes': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Get Recipes Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get Recipe': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get Recipe Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Update Recipe': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Update Pnp Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get Updated Recipe': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get Updated Recipe Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Create Recipe': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Create Recipe Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Delete Recipe': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Delete Recipe Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Add Comment': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Add Comment Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Delete Comment': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Delete Comment Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Like Recipe': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Like Recipe Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Unlike Recipe': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Unlike Recipe Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)()
  }
});

/***/ }),

/***/ 6061:
/*!**************************************!*\
  !*** ./src/app/state/app.effects.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppEffects": () => (/* binding */ AppEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 2847);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ 7527);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3765);









class AppEffects {
  constructor(router, actions$, store, http) {
    this.router = router;
    this.actions$ = actions$;
    this.store = store;
    this.http = http;
    this.recipesURl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL + '/recipes';
    this.usersURl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL + '/users';
    this.getRecipes$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => {
      return this.http.get(this.recipesURl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(recipes => {
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipesSuccess({
          recipes
        });
      }));
    })));
    this.getUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => {
      return this.http.get(`${this.usersURl}/${action.userId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUserSuccess({
          user
        });
      }));
    })));
    this.forgotPassword$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.AppAuth.forgotPassword), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL}/password_resets`, {
        email: action.email
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
        this.router.navigate([`/password_reset`]);
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.AppAuth.forgotPasswordSuccess({
          response
        });
      }));
    })));
    this.resetPassword$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.AppAuth.resetPassword), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL}/password_resets/${action.resetToken}`, {
        password: action.password,
        password_confirmation: action.confirmPassword
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.AppAuth.resetPasswordSuccess({
          response
        });
      }));
    })));
    this.getUserRecipes$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUserRecipes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => {
      return this.http.get(`${this.usersURl}/${action.userId}/recipes`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(recipes => {
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUserRecipesSuccess({
          recipes
        });
      }));
    })));
    this.getRecipe$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipe), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      return this.http.get(`${this.usersURl}/${action.userId}/recipes/${action.recipeId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(recipe => {
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipeSuccess({
          recipe
        });
      }));
    })));
    this.createRecipe$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.createRecipe), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      this.router.navigate(['/landing']);
      return this.http.post(`${this.usersURl}/${action.userId}/recipes`, {
        recipe: action.recipe
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(recipe => {
        this.store.dispatch(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipes());
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.createRecipeSuccess({
          recipe
        });
      }));
    })));
    this.updateRecipe$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.updateRecipe), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      this.router.navigate([`/recipe/${action.recipeId}`]);
      return this.http.put(`${this.usersURl}/${action.userId}/recipes/${action.recipeId}`, {
        recipe: action.recipe
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(recipe => {
        this.store.dispatch(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getUpdatedRecipe({
          recipe
        }));
        this.store.dispatch(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipes());
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getUpdatedRecipeSuccess({
          recipe
        });
      }));
    })));
    this.deleteRecipe$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.deleteRecipe), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      this.router.navigate(['/landing']);
      return this.http.delete(`${this.usersURl}/${action.userId}/recipes/${action.recipeId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => {
        this.store.dispatch(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipes());
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.deleteRecipeSuccess();
      }));
    })));
    this.addComment$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.addComment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      return this.http.post(`${this.usersURl}/${action.userId}/recipes/${action.recipeId}/comments`, {
        userId: action.userId,
        recipeId: action.recipeId,
        content: action.content
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
        this.store.dispatch(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipe({
          userId: action.userId,
          recipeId: action.recipeId
        }));
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.addCommentSuccess();
      }));
    })));
    this.deleteComment$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.deleteComment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      return this.http.delete(`${this.usersURl}/${action.userId}/recipes/${action.recipeId}/comments/${action.commentId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
        this.store.dispatch(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipe({
          userId: action.userId,
          recipeId: action.recipeId
        }));
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.deleteCommentSuccess();
      }));
    })));
    this.likeRecipe$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.likeRecipe), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      return this.http.post(`${this.usersURl}/${action.userId}/recipes/${action.recipeId}/like`, {
        recipeId: action.recipeId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
        this.store.dispatch(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipe({
          userId: action.userId,
          recipeId: action.recipeId
        }));
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.likeRecipeSuccess();
      }));
    })));
    this.unlikeRecipe$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.unlikeRecipe), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
      return this.http.delete(`${this.usersURl}/${action.userId}/recipes/${action.recipeId}/unlike`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
        this.store.dispatch(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipe({
          userId: action.userId,
          recipeId: action.recipeId
        }));
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.unlikeRecipeSuccess();
      }));
    })));
  }
}
AppEffects.ɵfac = function AppEffects_Factory(t) {
  return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient));
};
AppEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AppEffects,
  factory: AppEffects.ɵfac
});


/***/ }),

/***/ 5103:
/*!**************************************!*\
  !*** ./src/app/state/app.reducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducer": () => (/* binding */ appReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ 7527);


const initialState = {
  user: {},
  userRecipes: [],
  recipes: [],
  recipe: {},
  sort: {
    key: '',
    dir: ''
  },
  search: ''
};
const appReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.AppFiltering.search, (state, {
  text
}) => {
  let search = state.search;
  search = text;
  return Object.assign(Object.assign({}, state), {
    search: search
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.AppFiltering.resetFilters, state => {
  return Object.assign(Object.assign({}, state), {
    search: ''
  });
}),
// Users
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUserSuccess, (state, {
  user
}) => {
  return Object.assign(Object.assign({}, state), {
    user: Object.assign({}, user)
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions.getUserRecipesSuccess, (state, {
  recipes
}) => {
  return Object.assign(Object.assign({}, state), {
    userRecipes: recipes
  });
}),
// Recipes
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipe, (state, {
  recipeId
}) => {
  let recipe = state.recipes.filter(r => {
    return r.id == recipeId;
  })[0] || {};
  return Object.assign(Object.assign({}, state), {
    recipe: Object.assign({}, recipe)
  });
}),
// Recipes
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipe, (state, {
  recipeId
}) => {
  let recipe = state.recipes.filter(r => {
    return r.id == recipeId;
  })[0] || {};
  return Object.assign(Object.assign({}, state), {
    recipe: Object.assign({}, recipe)
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipeSuccess, (state, {
  recipe
}) => {
  return Object.assign(Object.assign({}, state), {
    recipe: recipe
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getUpdatedRecipe, (state, {
  recipe
}) => {
  return Object.assign(Object.assign({}, state), {
    recipe: Object.assign({}, recipe)
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipesSuccess, (state, {
  recipes
}) => {
  return Object.assign(Object.assign({}, state), {
    recipes: recipes
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.createRecipe, (state, {
  recipe
}) => {
  return Object.assign(Object.assign({}, state), {
    recipes: [...state.recipes, recipe]
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.updateRecipe, (state, {
  recipe,
  recipeId
}) => {
  return Object.assign(Object.assign({}, state), {
    pnps: state.recipes.map(r => r.id == recipeId ? recipe : r),
    recipe: recipe
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.deleteRecipe, (state, {
  recipeId
}) => {
  return Object.assign(Object.assign({}, state), {
    recipes: state.recipes.map(r => {
      return r.id === recipeId ? Object.assign(Object.assign({}, r), {
        id: 0
      }) : r;
    })
  });
}));

/***/ }),

/***/ 6614:
/*!***************************************!*\
  !*** ./src/app/state/app.selector.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appSelector": () => (/* binding */ appSelector),
/* harmony export */   "selectFilteredRecipes": () => (/* binding */ selectFilteredRecipes),
/* harmony export */   "selectFilteredUserRecipes": () => (/* binding */ selectFilteredUserRecipes),
/* harmony export */   "selectRecipe": () => (/* binding */ selectRecipe),
/* harmony export */   "selectRecipes": () => (/* binding */ selectRecipes),
/* harmony export */   "selectUser": () => (/* binding */ selectUser),
/* harmony export */   "selectUserRecipes": () => (/* binding */ selectUserRecipes)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var src_app_shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/pipes/search-filter.pipe */ 5964);


const appSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('app');
const selectUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(appSelector, state => {
  return state.user;
});
const selectUserRecipes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(appSelector, state => {
  return state.userRecipes;
});
const selectFilteredUserRecipes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(appSelector, state => {
  let filtered = [...state.userRecipes];
  // search
  filtered = new src_app_shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.SearchFilterPipe().transform(state.search, filtered);
  return filtered;
});
const selectRecipe = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(appSelector, state => {
  return state.recipe;
});
const selectRecipes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(appSelector, state => {
  return state.recipes;
});
const selectFilteredRecipes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(appSelector, state => {
  let filtered = [...state.recipes];
  // search
  filtered = new src_app_shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.SearchFilterPipe().transform(state.search, filtered);
  return filtered;
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  API_URL: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/// <reference types="@angular/localize" />




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3716), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map