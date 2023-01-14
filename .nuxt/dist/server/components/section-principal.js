exports.ids = [10];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sectionComponent/SectionPrincipal.vue?vue&type=template&id=8e9adab8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-element"
  }, [_vm._ssrNode("<div class=\"container-grid mlg-bottom\" data-v-8e9adab8><div data-aos=\"fade-right\" data-aos-delay=\"300\" data-aos-duration=\"1000\" class=\"item\" data-v-8e9adab8><h1 data-v-8e9adab8>Crecemos tu negocio con nuestra agencia de Marketing</h1> <p data-v-8e9adab8>\n        Sabemos que tu negocio te es importante para ti, asi que tu negocio es nuestro negocio\n      </p> <div class=\"container-contact-quick\" data-v-8e9adab8><div class=\"input-container\" data-v-8e9adab8><input type=\"text\" placeholder=\"Digite el Correo\" data-v-8e9adab8></div> <a href=\"#\" class=\"btn-primary\" data-v-8e9adab8>Comenzar</a></div></div> <div class=\"item\" data-v-8e9adab8><img" + _vm._ssrAttr("src", __webpack_require__(92)) + " alt=\"Imagen de personas de la empresa de agencia de marketing\" class=\"mov-img\" data-v-8e9adab8></div></div> <div class=\"card-layout box-dinamic1 pos-1\" data-v-8e9adab8><img" + _vm._ssrAttr("src", __webpack_require__(93)) + " alt=\"imagen de icono growiit\" data-v-8e9adab8></div> <div class=\"card-layout box-dinamic2 pos-2\" data-v-8e9adab8><img" + _vm._ssrAttr("src", __webpack_require__(94)) + " alt=\"imagen de icono growiit\" data-v-8e9adab8></div> <div class=\"card-layout box-dinamic1 pos-3\" data-v-8e9adab8><img" + _vm._ssrAttr("src", __webpack_require__(95)) + " alt=\"imagen de icono growiit\" data-v-8e9adab8></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sectionComponent/SectionPrincipal.vue?vue&type=template&id=8e9adab8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sectionComponent/SectionPrincipal.vue?vue&type=script&lang=js&
/* harmony default export */ var SectionPrincipalvue_type_script_lang_js_ = ({
  data() {
    return {};
  },
  mounted() {
    this.animateAll();
  },
  components: {},
  methods: {
    animateAll() {
      this.$gsap.to(".mov-img", {
        duration: 3,
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      this.$gsap.to(".box-dinamic1", {
        duration: 1.5,
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      this.$gsap.to(".box-dinamic2", {
        duration: 1.5,
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }
});
// CONCATENATED MODULE: ./components/sectionComponent/SectionPrincipal.vue?vue&type=script&lang=js&
 /* harmony default export */ var sectionComponent_SectionPrincipalvue_type_script_lang_js_ = (SectionPrincipalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sectionComponent/SectionPrincipal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sectionComponent_SectionPrincipalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8e9adab8",
  "82cb1252"
  
)

/* harmony default export */ var SectionPrincipal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("989b5624", content, true, context)
};

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/group1.fad30a0.png";

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon1.b009e64.png";

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon2.4cc3c9c.png";

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon3.c7d2b01.png";

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPrincipal_vue_vue_type_style_index_0_id_8e9adab8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPrincipal_vue_vue_type_style_index_0_id_8e9adab8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPrincipal_vue_vue_type_style_index_0_id_8e9adab8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPrincipal_vue_vue_type_style_index_0_id_8e9adab8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPrincipal_vue_vue_type_style_index_0_id_8e9adab8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-8e9adab8]{margin:0;padding:0;box-sizing:border-box;font-family:\"Poppins\",sans-serif}img[data-v-8e9adab8]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.material-design-icon.icon-2x[data-v-8e9adab8],.material-design-icon.icon-2x>.material-design-icon__svg[data-v-8e9adab8]{height:2em;width:2em}.global-container[data-v-8e9adab8]{width:90%;max-width:1800px;margin:auto}@media screen and (max-width:1424px){.global-container[data-v-8e9adab8]{width:95%}}@media screen and (max-width:1024px){.global-container[data-v-8e9adab8]{width:95%}}.m-bottom[data-v-8e9adab8]{margin-bottom:100px}.mlg-bottom[data-v-8e9adab8]{margin-bottom:200px}.btn-primary[data-v-8e9adab8]{padding:15px 40px;background-color:#3d6deb;color:#fff;text-decoration:none;font-weight:600;border-radius:50px;font-size:1rem;transition:background-color 1s ease;border:none;cursor:pointer}.btn-primary[data-v-8e9adab8]:hover{background-color:#5a89ff}.content-element[data-v-8e9adab8]{position:relative}.container-grid[data-v-8e9adab8]{display:grid;grid-template-columns:repeat(2,minmax(300px,1fr));grid-gap:10px;gap:10px}.container-grid .item h1[data-v-8e9adab8]{font-size:4rem;font-weight:700;margin-bottom:20px}.container-grid .item p[data-v-8e9adab8]{color:#969696;margin-bottom:30px}.container-grid .item img[data-v-8e9adab8]{transform:perspective(1500px) rotateY(-15deg);border-radius:1rem}.container-grid .item .container-contact-quick[data-v-8e9adab8]{display:flex;align-content:center;position:relative}.container-grid .item .container-contact-quick .input-container[data-v-8e9adab8]{max-width:18rem;width:100%;padding:15px 20px;border-radius:50px;background-color:#f2f2f2}.container-grid .item .container-contact-quick .input-container input[data-v-8e9adab8]{font-size:1rem;font-weight:400;width:100%;outline:none;border:none;background:transparent}.container-grid .item .container-contact-quick a[data-v-8e9adab8]{position:absolute;left:30%}@media screen and (max-width:1200px){.container-grid .item .container-contact-quick a[data-v-8e9adab8]{left:40%}}@media screen and (max-width:800px){.container-grid .item .container-contact-quick a[data-v-8e9adab8]{left:50%}}@media screen and (max-width:800px){.container-grid .item h1[data-v-8e9adab8]{font-size:2.2rem}}@media screen and (max-width:800px){.container-grid[data-v-8e9adab8]{grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}}.card-layout[data-v-8e9adab8]{position:absolute;width:100px}.card-layout img[data-v-8e9adab8]{transform:perspective(1500px) rotateY(-15deg)}.pos-1[data-v-8e9adab8]{bottom:-10%;left:0}.pos-2[data-v-8e9adab8]{top:-10%;left:50%}.pos-3[data-v-8e9adab8]{bottom:30%;right:-3%}@media screen and (max-width:1555px){.pos-1[data-v-8e9adab8]{bottom:-30%;left:0}}@media screen and (max-width:1200px){.card-layout[data-v-8e9adab8]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=section-principal.js.map