exports.ids = [11];
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f6da3048", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/group2.8ee5b37.jpg";

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionService_vue_vue_type_style_index_0_id_6b547961_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionService_vue_vue_type_style_index_0_id_6b547961_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionService_vue_vue_type_style_index_0_id_6b547961_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionService_vue_vue_type_style_index_0_id_6b547961_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionService_vue_vue_type_style_index_0_id_6b547961_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6b547961]{margin:0;padding:0;box-sizing:border-box;font-family:\"Poppins\",sans-serif}img[data-v-6b547961]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.material-design-icon.icon-2x[data-v-6b547961],.material-design-icon.icon-2x>.material-design-icon__svg[data-v-6b547961]{height:2em;width:2em}.global-container[data-v-6b547961]{width:90%;max-width:1800px;margin:auto}@media screen and (max-width:1424px){.global-container[data-v-6b547961]{width:95%}}@media screen and (max-width:1024px){.global-container[data-v-6b547961]{width:95%}}.m-bottom[data-v-6b547961]{margin-bottom:100px}.mlg-bottom[data-v-6b547961]{margin-bottom:200px}.btn-primary[data-v-6b547961]{padding:15px 40px;background-color:#3d6deb;color:#fff;text-decoration:none;font-weight:600;border-radius:50px;font-size:1rem;transition:background-color 1s ease;border:none;cursor:pointer}.btn-primary[data-v-6b547961]:hover{background-color:#5a89ff}.container-grid[data-v-6b547961]{display:grid;align-items:center;grid-template-columns:repeat(2,minmax(300px,1fr));grid-gap:20px;gap:20px}.container-grid .item h2[data-v-6b547961]{font-size:3rem;font-weight:700;margin-bottom:20px}.container-grid .item p[data-v-6b547961]{color:#969696;font-size:1.4rem;margin-bottom:30px}.container-grid .item .container-contact-quick[data-v-6b547961]{display:flex;align-content:center}@media screen and (max-width:800px){.container-grid .item h2[data-v-6b547961]{font-size:2rem}.container-grid .item p[data-v-6b547961]{font-size:.9rem}}@media screen and (max-width:1024px){.container-grid[data-v-6b547961]{text-align:center;grid-template-columns:repeat(1,minmax(300px,1fr))}.item h2[data-v-6b547961]{font-size:2rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sectionComponent/SectionService.vue?vue&type=template&id=6b547961&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-grid mlg-bottom"
  }, [_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"100\" data-aos-duration=\"2000\" class=\"item\" data-v-6b547961><img" + _vm._ssrAttr("src", __webpack_require__(57)) + " alt=\"Imagen de servicios de la agencia de marketing\" data-v-6b547961></div> <div data-aos=\"fade-up\" data-aos-delay=\"100\" data-aos-duration=\"2000\" class=\"item\" data-v-6b547961><h2 data-v-6b547961> Nuestro Servicio </h2> <p data-v-6b547961> Ofrecemos una amplia gama de servicios de marketing, incluyendo publicidad en línea, marketing automatizado, inteligencia artificial, marketing de contenidos, SEO, y estrategias de email marketing. Además, ofrecemos servicios de análisis y medición de resultados para ayudar a nuestros clientes a medir el éxito de sus campañas. </p> <a href=\"#\" class=\"btn-primary\" data-v-6b547961>Comenzar</a></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sectionComponent/SectionService.vue?vue&type=template&id=6b547961&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sectionComponent/SectionService.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b547961",
  "c89e7bc4"
  
)

/* harmony default export */ var SectionService = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=section-service.js.map