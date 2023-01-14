exports.ids = [17];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/servicios.vue?vue&type=template&id=60182f70&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "global-container"
  }, [_vm._ssrNode("<div class=\"container-title\" data-v-60182f70><h2 data-v-60182f70>Servicios</h2></div> <div class=\"container-card\" data-v-60182f70>" + _vm._ssrList(_vm.services, function (item) {
    return "<div class=\"card\" data-v-60182f70><h3 data-v-60182f70>" + _vm._ssrEscape(_vm._s(item.title)) + "</h3> <p data-v-60182f70>" + _vm._ssrEscape(" " + _vm._s(item.description)) + "</p></div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/servicios.vue?vue&type=template&id=60182f70&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/servicios.vue?vue&type=script&lang=js&
/* harmony default export */ var serviciosvue_type_script_lang_js_ = ({
  data() {
    return {
      services: [{
        id: 1,
        title: 'SEO y Optimizacion Web',
        description: 'Dale un mejor visibilidad a tu sitio y atrae realmente a los clientes que tu negocio'
      }, {
        id: 2,
        title: 'Desarrollo Web',
        description: 'Creamos tu proyecto a medida y encocado en las necesidad de tu uruaio objetivo'
      }, {
        id: 3,
        title: 'Creacion de Contenido',
        description: 'Creamos contenido para crecer de forma organica y generar trafico para tu negocio'
      }, {
        id: 4,
        title: 'Diseño',
        description: 'Mejoramos el diseño de tu negocio para que dar la mejor experiencia y atencion a tu usuario'
      }]
    };
  },
  methods: {
    animaion_card() {
      const tl = this.$gsap.timeline({
        defaults: {
          ease: 'power3.inOut'
        }
      });
      tl.from('.container-title', {
        duration: 2.5,
        y: '+=50',
        autoAlpha: 0
      }), tl.from('.card', {
        duration: 1,
        y: '+=50',
        autoAlpha: 0
      });
    }
  },
  mounted() {
    this.animaion_card();
  }
});
// CONCATENATED MODULE: ./pages/servicios.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_serviciosvue_type_script_lang_js_ = (serviciosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/servicios.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_serviciosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "60182f70",
  "9cd15df6"
  
)

/* harmony default export */ var servicios = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("8f5ff180", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_servicios_vue_vue_type_style_index_0_id_60182f70_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_servicios_vue_vue_type_style_index_0_id_60182f70_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_servicios_vue_vue_type_style_index_0_id_60182f70_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_servicios_vue_vue_type_style_index_0_id_60182f70_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_servicios_vue_vue_type_style_index_0_id_60182f70_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-60182f70]{margin:0;padding:0;box-sizing:border-box;font-family:\"Poppins\",sans-serif}img[data-v-60182f70]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.material-design-icon.icon-2x[data-v-60182f70],.material-design-icon.icon-2x>.material-design-icon__svg[data-v-60182f70]{height:2em;width:2em}.global-container[data-v-60182f70]{width:90%;max-width:1800px;margin:auto}@media screen and (max-width:1424px){.global-container[data-v-60182f70]{width:95%}}@media screen and (max-width:1024px){.global-container[data-v-60182f70]{width:95%}}.m-bottom[data-v-60182f70]{margin-bottom:100px}.mlg-bottom[data-v-60182f70]{margin-bottom:200px}.btn-primary[data-v-60182f70]{padding:15px 40px;background-color:#3d6deb;color:#fff;text-decoration:none;font-weight:600;border-radius:50px;font-size:1rem;transition:background-color 1s ease;border:none;cursor:pointer}.btn-primary[data-v-60182f70]:hover{background-color:#5a89ff}.container-title[data-v-60182f70]{margin-top:100px;text-align:center;margin-bottom:100px}.container-title h2[data-v-60182f70]{font-size:2rem}.container-card[data-v-60182f70]{display:flex;margin-top:30px;margin-bottom:40px;flex-wrap:wrap;justify-content:center;grid-gap:30px;gap:30px}.container-card .card[data-v-60182f70]{max-width:600px;background-color:#fff;padding:60px;box-shadow:0 8px 24px rgba(255,247,0,.2),0 8px 24px rgba(255,14,207,.51),0 8px 24px #fff;border-radius:30px}.container-card .card h3[data-v-60182f70]{margin-bottom:30px;font-size:2rem}.container-card .card p[data-v-60182f70]{font-size:1.3rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=servicios.js.map