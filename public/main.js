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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing/landing.component */ 341);
/* harmony import */ var _landing_landing_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.resolver */ 6275);
/* harmony import */ var _recipes_show_recipes_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes/show/recipes-show.component */ 6905);
/* harmony import */ var _recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/form/recipes-form.component */ 3486);
/* harmony import */ var _recipes_show_recipes_show_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes/show/recipes-show.resolver */ 7280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








const routes = [{
  path: 'landing',
  component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent,
  resolve: {
    recipes: _landing_landing_resolver__WEBPACK_IMPORTED_MODULE_1__.LandingResolver
  }
}, {
  path: 'recipe/new',
  component: _recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_3__.RecipeFormComponent
}, {
  path: 'recipe/:id',
  component: _recipes_show_recipes_show_component__WEBPACK_IMPORTED_MODULE_2__.RecipeShowComponent,
  resolve: {
    recipe: _recipes_show_recipes_show_resolver__WEBPACK_IMPORTED_MODULE_4__.RecipeShowResolver
  }
}, {
  path: 'recipe/:id/edit',
  component: _recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_3__.RecipeFormComponent,
  resolve: {
    recipe: _recipes_show_recipes_show_resolver__WEBPACK_IMPORTED_MODULE_4__.RecipeShowResolver
  }
}, {
  path: '',
  redirectTo: 'landing',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
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
    this.storeSub = this.store.subscribe(store => {
      console.log(store);
      //localStorage.setItem('app-store', JSON.stringify(store));
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _state_app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/app.reducer */ 5103);
/* harmony import */ var _state_app_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/app.effects */ 6061);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ 341);
/* harmony import */ var _recipes_show_recipes_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/show/recipes-show.component */ 6905);
/* harmony import */ var _recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/form/recipes-form.component */ 3486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreModule.forRoot({
    app: _state_app_reducer__WEBPACK_IMPORTED_MODULE_2__.appReducer
  }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__.EffectsModule.forRoot([_state_app_effects__WEBPACK_IMPORTED_MODULE_3__.RecipeEffects])]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__.LandingComponent, _recipes_show_recipes_show_component__WEBPACK_IMPORTED_MODULE_6__.RecipeShowComponent, _recipes_form_recipes_form_component__WEBPACK_IMPORTED_MODULE_7__.RecipeFormComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__.EffectsRootModule]
  });
})();

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/layout/primary-layout/primary-layout.component */ 8119);
/* harmony import */ var _shared_components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/text-filter/text-filter.component */ 5089);








function LandingComponent_div_12_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", recipe_r1.img_src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function LandingComponent_div_12_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 20);
  }
}
function LandingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_div_12_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const recipe_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.goRecipe(recipe_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LandingComponent_div_12_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LandingComponent_div_12_img_4_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14)(6, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 17)(11, "div", 18)(12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", recipe_r1.img_src);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !recipe_r1.img_src);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](recipe_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](recipe_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Contributor: ", recipe_r1.user.username, "");
  }
}
//import { SessionService } from 'src/app/core/services/session.service';
class LandingComponent {
  //isLoggedIn: boolean = false;
  //username!: string;
  constructor(store, router, route) {
    this.store = store;
    this.router = router;
    this.route = route;
    this.recipes$ = this.store.select(_state_app_selector__WEBPACK_IMPORTED_MODULE_1__.selectRecipes);
    this.textSearch = '';
  }
  ngOnInit() {
    this.store.dispatch(_state_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipes());
    //this.isLoggedIn = !!this.session.valid;
    //
    //if (this.isLoggedIn) {
    //  const user = this.session.user();
    //
    //  this.username = user.username;
    //}
  }

  search(text) {
    this.textSearch = text;
    this.applyFilters();
  }
  applyFilters() {
    //let filtered = this.allRecipes || [];
    //filtered = new SearchFilterPipe().transform(this.textSearch, filtered);
    //this.recipes = filtered;
  }
  goAddRecipe() {
    this.router.navigate([`recipe/new`]);
  }
  goRecipe(recipe) {
    this.router.navigate([`/recipe/${recipe.id}`]);
  }
  logout() {
    //this.session.signOut();
    //window.location.reload();
  }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
};
LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-landing"]],
  decls: 14,
  vars: 4,
  consts: [[1, "text-center"], [1, "row", "py-5"], [1, "col-lg-6", "col-md-8", "mx-auto"], [1, "fw-light", "app-primary"], [1, "lead", "text-muted", "app-primary"], ["placeholder", "Search Recipes", 3, "text", "onChange"], [1, "btn", "btn-primary", "mt-3", 3, "click"], [1, "row", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-md-4", "g-4"], ["class", "col", "class", "py-5 bg-light", 4, "ngFor", "ngForOf"], [1, "py-5", "bg-light"], [1, "card", "shadow-sm", "h-100", 3, "click"], [1, "square-image-wrapper"], ["class", "card-img-top square-image", 3, "src", 4, "ngIf"], ["class", "card-img-top square-image", "src", "/assets/images/no-image.png", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "card-img-top", "square-image", 3, "src"], ["src", "/assets/images/no-image.png", 1, "card-img-top", "square-image"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-primary-layout")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "CajunCookbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Louisiana\u2019s Best Recipes-Cajun, Creole, and Southern");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-text-filter", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function LandingComponent_Template_app_text_filter_onChange_8_listener($event) {
        return ctx.search($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_9_listener() {
        return ctx.goAddRecipe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Add New Recipe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, LandingComponent_div_12_Template, 14, 5, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", ctx.textSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 2, ctx.recipes$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_2__.PrimaryLayoutComponent, _shared_components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_3__.TextFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  height: 250px;\n  width: auto;\n}\n\n.square-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding-top: 100%; \n}\n\n.square-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover; \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQSxFQUFBLDBGQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQSxFQUFBLHNHQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtaW1nLXRvcCB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uc3F1YXJlLWltYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAxMDAlOyAvKiBUaGUgYXNwZWN0IHJhdGlvIG9mIGEgc3F1YXJlIGlzIDE6MSwgc28gdGhpcyBzZXRzIHRoZSBoZWlnaHQgdG8gYmUgZXF1YWwgdG8gdGhlIHdpZHRoICovXG59XG5cbi5zcXVhcmUtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7IC8qIFNjYWxlcyB0aGUgaW1hZ2Ugd2hpbGUgbWFpbnRhaW5pbmcgaXRzIGFzcGVjdCByYXRpbyB0byBjb21wbGV0ZWx5IGNvdmVyIHRoZSBlbGVtZW50J3MgY29udGVudCBib3ggKi9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 6275:
/*!*********************************************!*\
  !*** ./src/app/landing/landing.resolver.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingResolver": () => (/* binding */ LandingResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _recipes_recipes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipes/recipes.service */ 8174);


class LandingResolver {
  constructor(recipeService) {
    this.recipeService = recipeService;
  }
  resolve(route, state) {
    return this.recipeService.getRecipes();
  }
}
LandingResolver.ɵfac = function LandingResolver_Factory(t) {
  return new (t || LandingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_recipes_recipes_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService));
};
LandingResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LandingResolver,
  factory: LandingResolver.ɵfac,
  providedIn: "root"
});


/***/ }),

/***/ 3486:
/*!********************************************************!*\
  !*** ./src/app/recipes/form/recipes-form.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeFormComponent": () => (/* binding */ RecipeFormComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/layout/primary-layout/primary-layout.component */ 8119);






class RecipeFormComponent {
  constructor(formBuilder, http, router, route) {
    this.formBuilder = formBuilder;
    this.http = http;
    this.router = router;
    this.route = route;
    this.recipesURl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + '/recipes';
  }
  ngOnInit() {
    if (this.route.snapshot.data['recipe']) {
      this.recipe = this.route.snapshot.data['recipe'];
      this.isEdit = true;
    } else {
      this.recipe = {};
    }
    this.recipeForm = this.formBuilder.group({
      id: [this.recipe.id || null],
      name: [this.recipe.name || ''],
      description: [this.recipe.description || ''],
      ingredients: [this.recipe.ingredients || ''],
      directions: [this.recipe.directions || ''],
      user_id: 1
    });
  }
  onFileSelected(event) {
    this.image = event.target.files[0];
  }
  saveRecipe() {
    var _a, _b, _c, _d, _e;
    const formData = new FormData();
    formData.append('recipe[name]', (_a = this.recipeForm.get('name')) === null || _a === void 0 ? void 0 : _a.value);
    formData.append('recipe[description]', (_b = this.recipeForm.get('description')) === null || _b === void 0 ? void 0 : _b.value);
    formData.append('recipe[ingredients]', (_c = this.recipeForm.get('ingredients')) === null || _c === void 0 ? void 0 : _c.value);
    formData.append('recipe[directions]', (_d = this.recipeForm.get('directions')) === null || _d === void 0 ? void 0 : _d.value);
    formData.append('recipe[user_id]', (_e = this.recipeForm.get('user_id')) === null || _e === void 0 ? void 0 : _e.value);
    if (this.image) {
      formData.append('recipe[image]', this.image);
    }
    if (this.isEdit) {
      this.http.put(this.recipesURl + `/${this.recipe.id}`, formData).subscribe(response => {
        this.router.navigate([`recipe/${this.recipe.id}`]);
      });
    } else {
      this.http.post(this.recipesURl, formData).subscribe(response => {
        this.router.navigate([`landing`]);
      });
    }
  }
}
RecipeFormComponent.ɵfac = function RecipeFormComponent_Factory(t) {
  return new (t || RecipeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
};
RecipeFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RecipeFormComponent,
  selectors: [["ng-component"]],
  decls: 28,
  vars: 4,
  consts: [[3, "formGroup"], [1, "mb-3"], ["for", "image", 1, "form-label"], ["type", "file", "id", "image", 1, "form-control-file", 3, "change"], [1, "form-label"], ["type", "text", "name", "name", "formControlName", "name", 1, "form-control"], ["type", "text", "name", "description", "formControlName", "description", 1, "form-control", 3, "maxlength"], [1, "form-text"], ["type", "text", "name", "ingredients", "formControlName", "ingredients", "rows", "10", 1, "form-control", 3, "maxlength"], ["type", "text", "name", "directions", "formControlName", "directions", "rows", "10", 1, "form-control", 3, "maxlength"], [1, "btn", "btn-primary", 3, "click"]],
  template: function RecipeFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-primary-layout")(1, "form", 0)(2, "div", 1)(3, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RecipeFormComponent_Template_input_change_5_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1)(7, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1)(11, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Write a small description of what this recipe is, its origin, or what it means to you.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 1)(17, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Ingredients");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1)(22, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Directions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "textarea", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeFormComponent_Template_button_click_26_listener() {
        return ctx.saveRecipe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.recipeForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maxlength", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maxlength", 5000);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maxlength", 5000);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_1__.PrimaryLayoutComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8174:
/*!********************************************!*\
  !*** ./src/app/recipes/recipes.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeService": () => (/* binding */ RecipeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);






class RecipeService {
  constructor(http) {
    this.http = http;
    this.recipesURl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + '/recipes';
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  getRecipes() {
    return this.http.get(`${this.recipesURl}`);
  }
  /** GET Recipe by id. Return `undefined` when id not found */
  getRecipeNo404(id) {
    const url = `${this.recipesURl}/?id=${id}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(heroes => heroes[0]),
    // returns a {0|1} element array
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(h => {
      const outcome = h ? 'fetched' : 'did not find';
      this.log(`${outcome} hero id=${id}`);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError(`getRecipe id=${id}`)));
  }
  /** GET Recipe by id. Will 404 if id not found */
  getRecipe(id) {
    const url = `${this.recipesURl}/${id}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => this.log(`fetched recipe id=${id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError(`getRecipe id=${id}`)));
  }
  /* GET Recipes whose name contains search term */
  searchRecipes(term) {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    }
    return this.http.get(`${this.recipesURl}/?name=${term}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(x => x.length ? this.log(`found Recipes matching "${term}"`) : this.log(`no Recipes matching "${term}"`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('searchRecipes', [])));
  }
  //////// Save methods //////////
  /** POST: add a new Recipe to the server */
  addRecipe(recipe) {
    return this.http.post(this.recipesURl, recipe, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(newRecipe => this.log(`added Recipe w/ id=${newRecipe.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('addRecipe')));
  }
  /** DELETE: delete the Recipe from the server */
  deleteRecipe(id) {
    return this.http.delete(`${this.recipesURl}/${id}`, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => this.log(`deleted Recipe id=${id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('deleteRecipe')));
  }
  /** PUT: update the Recipe on the server */
  updateRecipe(recipe) {
    return this.http.put(`${this.recipesURl}/${recipe.id}`, recipe, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => this.log(`updated Recipe id=${recipe.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError('updateRecipe')));
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError(operation = 'operation', result) {
    return error => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result);
    };
  }
  /** Log a RecipeService message with the MessageService */
  log(message) {
    console.log(`RecipeService: ${message}`);
  }
}
RecipeService.ɵfac = function RecipeService_Factory(t) {
  return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
RecipeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: RecipeService,
  factory: RecipeService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6905:
/*!********************************************************!*\
  !*** ./src/app/recipes/show/recipes-show.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeShowComponent": () => (/* binding */ RecipeShowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/layout/primary-layout/primary-layout.component */ 8119);




function RecipeShowComponent_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.recipe.img_src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function RecipeShowComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
  }
}
class RecipeShowComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    var _a, _b;
    this.recipe = this.route.snapshot.data['recipe'];
    if (this.recipe.image) {
      this.image = this.recipe.image;
      this.recipe.img_src = `data:${(_a = this.recipe.image) === null || _a === void 0 ? void 0 : _a.content_type};base64,${(_b = this.recipe.image) === null || _b === void 0 ? void 0 : _b.data}`;
    }
  }
  goEditRecipe() {
    this.router.navigate([`recipe/${this.recipe.id}/edit`]);
  }
}
RecipeShowComponent.ɵfac = function RecipeShowComponent_Factory(t) {
  return new (t || RecipeShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
RecipeShowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RecipeShowComponent,
  selectors: [["ng-component"]],
  decls: 30,
  vars: 10,
  consts: [[1, "card", "shadow-sm"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "card-body"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-4", "card-row"], [1, "recipe-img-container"], ["class", "recipe-img", 3, "src", 4, "ngIf"], ["class", "recipe-img", "src", "/assets/images/no-image.png", 4, "ngIf"], [3, "innerHtml"], [1, "card-footer"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted"], [1, "card-text"], [1, "recipe-img", 3, "src"], ["src", "/assets/images/no-image.png", 1, "recipe-img"]],
  template: function RecipeShowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-primary-layout")(1, "div", 0)(2, "div", 1)(3, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeShowComponent_Template_button_click_5_listener() {
        return ctx.goEditRecipe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Edit Recipe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RecipeShowComponent_img_11_Template, 1, 1, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RecipeShowComponent_img_12_Template, 1, 0, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Ingredients:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6)(18, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Directions:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11)(22, "div", 12)(23, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.recipe.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recipe.img_src);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.recipe.img_src);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx.recipe.ingredients, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx.recipe.directions, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Contributor: ", ctx.recipe.user.username, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.recipe.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 8, ctx.recipe));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_0__.PrimaryLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
  styles: [".recipe-img-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.recipe-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card-row[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVjaXBlcy9zaG93L3JlY2lwZXMtc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZS1pbWctY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJlY2lwZS1pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQtcm93IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxucCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 7280:
/*!*******************************************************!*\
  !*** ./src/app/recipes/show/recipes-show.resolver.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeShowResolver": () => (/* binding */ RecipeShowResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _recipes_recipes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../recipes/recipes.service */ 8174);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



class RecipeShowResolver {
  constructor(recipeService, route) {
    this.recipeService = recipeService;
    this.route = route;
  }
  resolve(route, state) {
    return this.recipeService.getRecipe(route.params['id']);
  }
}
RecipeShowResolver.ɵfac = function RecipeShowResolver_Factory(t) {
  return new (t || RecipeShowResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_recipes_recipes_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
RecipeShowResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RecipeShowResolver,
  factory: RecipeShowResolver.ɵfac,
  providedIn: "root"
});


/***/ }),

/***/ 7502:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/checkbox-select/checkbox-select.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxSelectComponent": () => (/* binding */ CheckboxSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/pipes/search-filter.pipe */ 5964);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-filter/text-filter.component */ 5089);





function CheckboxSelectComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckboxSelectComponent_li_10_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const record_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.set(record_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 4)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const record_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", record_r1.$selected && "glyphicon-check" || "glyphicon-unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r1[ctx_r0.key]);
  }
}
class CheckboxSelectComponent {
  constructor() {
    this.setRecords = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {
    console.log(this.collection);
    this.all = Object.assign({}, this.collection);
  }
  set(record) {
    record.$selected = !record.$selected;
    this.setRecords.emit();
  }
  toggleAll() {
    this.collection.toggleSelectAll();
    this.setRecords.emit();
  }
  search(text) {
    this.textSearch = text;
    this.applyFilters();
  }
  applyFilters() {
    let filtered = this.all.records || [];
    filtered = new src_app_shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.SearchFilterPipe().transform(this.textSearch, filtered, [this.key]);
    this.collection.set(filtered);
  }
  trackByFn(index, obj) {
    return obj.id;
  }
}
CheckboxSelectComponent.ɵfac = function CheckboxSelectComponent_Factory(t) {
  return new (t || CheckboxSelectComponent)();
};
CheckboxSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CheckboxSelectComponent,
  selectors: [["checkbox-select"]],
  inputs: {
    collection: "collection",
    label: "label",
    key: "key"
  },
  outputs: {
    setRecords: "setRecords"
  },
  decls: 12,
  vars: 4,
  consts: [[1, "checkbox-select-component"], [1, "search-container"], [3, "onChange"], [3, "click"], [1, "dropdown-item"], [3, "ngClass"], ["translate", "", 1, "text-muted"], [1, "dropdown-divider"], [3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["translate", ""]],
  template: function CheckboxSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "span", 1)(2, "app-text-filter", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function CheckboxSelectComponent_Template_app_text_filter_onChange_2_listener($event) {
        return ctx.search($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckboxSelectComponent_Template_li_click_3_listener() {
        return ctx.toggleAll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span")(7, "em", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CheckboxSelectComponent_li_10_Template, 6, 2, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.collection.allSelected && "glyphicon-check" || "glyphicon-unchecked");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.collection.records)("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_1__.TextFilterComponent],
  styles: [".checkbox-select-component[_ngcontent-%COMP%]   .text-filter[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hlY2tib3gtc2VsZWN0L2NoZWNrYm94LXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveC1zZWxlY3QtY29tcG9uZW50IHtcbiAgLnRleHQtZmlsdGVyIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 9542);



class TextFilterComponent {
  constructor() {
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  emit() {
    this.onChange.emit(this.text);
  }
  change() {
    this.emit();
  }
  clear() {
    this.text = '';
    this.emit();
  }
}
TextFilterComponent.ɵfac = function TextFilterComponent_Factory(t) {
  return new (t || TextFilterComponent)();
};
TextFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TextFilterComponent,
  selectors: [["app-text-filter"]],
  inputs: {
    placeholder: "placeholder",
    tooltip: "tooltip",
    tooltipPlacement: "tooltipPlacement",
    text: "text"
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 2,
  vars: 2,
  consts: [[1, "form-group", "position-relative"], ["autocomplete", "off", "type", "text", "id", "search-input", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"]],
  template: function TextFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextFilterComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.text = $event;
      })("ngModelChange", function TextFilterComponent_Template_input_ngModelChange_1_listener() {
        return ctx.change();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder || "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
  styles: [".text-filter[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.text-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1maWx0ZXIvdGV4dC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1maWx0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgaW5wdXQge1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 15,
  vars: 0,
  consts: [[1, "text-muted", "py-5"], [1, "container"], [1, "float-end", "mb-1"], ["href", "#"], [1, "mb-1"], [1, "mb-0"], ["href", "/"], ["href", "../getting-started/introduction/"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "p", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to top");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Album example is \u00A9 Bootstrap, but please download and customize it for yourself!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New to Bootstrap? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Visit the homepage");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " or read our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "getting started guide");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


const _c0 = function () {
  return ["/"];
};
const _c1 = function () {
  return ["/signup"];
};
const _c2 = function () {
  return ["/login"];
};
const _c3 = function () {
  return ["/profile"];
};
class NavbarComponent {}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 43,
  vars: 8,
  consts: [[1, "navbar-component"], ["id", "navbarHeader", 1, "collapse"], [1, "container"], [1, "row"], [1, "col-sm-8", "col-md-7", "py-4"], [1, "col-sm-4", "offset-md-1", "py-4"], [1, "list-unstyled"], ["href", "#"], [1, "navbar", "shadow-sm"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarHeader", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "logo", 3, "routerLink"], [1, "fas", "fa-book"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "far", "fa-user"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item", 3, "routerLink"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 6)(13, "li")(14, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Follow on Twitter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Like on Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8)(23, "div", 2)(24, "span")(25, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "CajunCookbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 15)(34, "li")(35, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".navbar-component[_ngcontent-%COMP%] {\n  color: white;\n}\n.navbar-component[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-left: 20px;\n}\n.navbar-component[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n.navbar-component[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.navbar-component[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0Usa0JBQUE7QUFFTjtBQUdJO0VBQ0UsZUFBQTtBQUROO0FBR0k7RUFDRSxhQUFBO0FBRE4iLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWNvbXBvbmVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAubG9nbyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAudXNlci1kcm9wZG93biB7XG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 8489);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 1070);



const _c0 = ["*"];
class PrimaryLayoutComponent {}
PrimaryLayoutComponent.ɵfac = function PrimaryLayoutComponent_Factory(t) {
  return new (t || PrimaryLayoutComponent)();
};
PrimaryLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PrimaryLayoutComponent,
  selectors: [["app-primary-layout"]],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 0,
  consts: [[1, "container", "py-5"]],
  template: function PrimaryLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    }
  },
  dependencies: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ 8489);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/footer/footer.component */ 1070);
/* harmony import */ var _layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/primary-layout/primary-layout.component */ 8119);
/* harmony import */ var _components_checkbox_select_checkbox_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkbox-select/checkbox-select.component */ 7502);
/* harmony import */ var _components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/text-filter/text-filter.component */ 5089);
/* harmony import */ var _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/search-filter.pipe */ 5964);
/* harmony import */ var _pipes_whitelist_keys_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/whitelist-keys.pipe */ 4422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);











const components = [_components_checkbox_select_checkbox_select_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxSelectComponent, _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_2__.PrimaryLayoutComponent, _components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_4__.TextFilterComponent];
const pipes = [_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__.SearchFilterPipe, _pipes_whitelist_keys_pipe__WEBPACK_IMPORTED_MODULE_6__.WhitelistKeysPipe];
class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_checkbox_select_checkbox_select_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxSelectComponent, _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_2__.PrimaryLayoutComponent, _components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_4__.TextFilterComponent, _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__.SearchFilterPipe, _pipes_whitelist_keys_pipe__WEBPACK_IMPORTED_MODULE_6__.WhitelistKeysPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_components_checkbox_select_checkbox_select_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxSelectComponent, _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _layout_primary_layout_primary_layout_component__WEBPACK_IMPORTED_MODULE_2__.PrimaryLayoutComponent, _components_text_filter_text_filter_component__WEBPACK_IMPORTED_MODULE_4__.TextFilterComponent, _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__.SearchFilterPipe, _pipes_whitelist_keys_pipe__WEBPACK_IMPORTED_MODULE_6__.WhitelistKeysPipe]
  });
})();

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
/* harmony export */   "RecipeActions": () => (/* binding */ RecipeActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const AppAuth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: '[App Auth]',
  events: {
    'Login': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Login Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Login Error': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Logout': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Logout Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Create Session': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Create Session Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Destroy Session': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)()
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
    'Delete Recipe Success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)()
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
/* harmony export */   "RecipeEffects": () => (/* binding */ RecipeEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ 7527);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3765);









class RecipeEffects {
  constructor(router, actions$, store, http) {
    this.router = router;
    this.actions$ = actions$;
    this.store = store;
    this.http = http;
    this.recipesURl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL + '/recipes';
    this.getRecipes$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => {
      return this.http.get(this.recipesURl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(recipes => {
        return _app_actions__WEBPACK_IMPORTED_MODULE_0__.RecipeActions.getRecipesSuccess({
          recipes
        });
      }));
    })));
  }
}
RecipeEffects.ɵfac = function RecipeEffects_Factory(t) {
  return new (t || RecipeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
};
RecipeEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: RecipeEffects,
  factory: RecipeEffects.ɵfac
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ 7527);


const initialState = {
  recipes: []
};
const appReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState,
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
    recipe: Object.assign({}, recipe)
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
  const updatedRecipes = recipes.map(recipe => {
    var _a, _b;
    if (recipe.image) {
      return Object.assign(Object.assign({}, recipe), {
        img_src: `data:${(_a = recipe.image) === null || _a === void 0 ? void 0 : _a.content_type};base64,${(_b = recipe.image) === null || _b === void 0 ? void 0 : _b.data}`
      });
    } else {
      return recipe;
    }
  });
  return Object.assign(Object.assign({}, state), {
    recipes: updatedRecipes
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
/* harmony export */   "recipeSelector": () => (/* binding */ recipeSelector),
/* harmony export */   "selectRecipe": () => (/* binding */ selectRecipe),
/* harmony export */   "selectRecipes": () => (/* binding */ selectRecipes)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const recipeSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('app');
const selectRecipe = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(recipeSelector, state => {
  return state.recipe;
});
const selectRecipes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(recipeSelector, state => {
  return state.recipes;
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map