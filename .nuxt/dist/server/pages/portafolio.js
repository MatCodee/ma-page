exports.ids = [16,2,3];
exports.modules = {

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a69600fa", content, true, context)
};

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterImage_vue_vue_type_style_index_0_id_244e7be0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterImage_vue_vue_type_style_index_0_id_244e7be0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterImage_vue_vue_type_style_index_0_id_244e7be0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterImage_vue_vue_type_style_index_0_id_244e7be0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterImage_vue_vue_type_style_index_0_id_244e7be0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-244e7be0]{margin:0;padding:0;box-sizing:border-box;font-family:\"Poppins\",sans-serif}img[data-v-244e7be0]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.material-design-icon.icon-2x[data-v-244e7be0],.material-design-icon.icon-2x>.material-design-icon__svg[data-v-244e7be0]{height:2em;width:2em}.global-container[data-v-244e7be0]{width:90%;max-width:1800px;margin:auto}@media screen and (max-width:1424px){.global-container[data-v-244e7be0]{width:95%}}@media screen and (max-width:1024px){.global-container[data-v-244e7be0]{width:95%}}.m-bottom[data-v-244e7be0]{margin-bottom:100px}.mlg-bottom[data-v-244e7be0]{margin-bottom:200px}.btn-primary[data-v-244e7be0]{padding:15px 40px;background-color:#3d6deb;color:#fff;text-decoration:none;font-weight:600;border-radius:50px;font-size:1rem;transition:background-color 1s ease;border:none;cursor:pointer}.btn-primary[data-v-244e7be0]:hover{background-color:#5a89ff}.img-responsive[data-v-244e7be0]{width:600px;height:400px;-o-object-fit:cover;object-fit:cover;border-radius:30px;box-shadow:0 8px 24px rgba(255,247,0,.2),0 8px 24px rgba(255,14,207,.51),0 8px 24px #fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/filter/FilterButton.vue?vue&type=template&id=ba88d938&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    ref: "button",
    staticClass: "btn-primary filter-button",
    class: {
      'active': _vm.selected
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.buttonText)))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/filter/FilterButton.vue?vue&type=template&id=ba88d938&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(5);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/filter/FilterButton.vue?vue&type=script&lang=js&


/* harmony default export */ var FilterButtonvue_type_script_lang_js_ = ({
  name: 'FilterButton',
  props: {
    buttonText: String,
    filterValue: String
  },
  setup(props, context) {
    const selected = Object(external_vue_["ref"])(false);
    function handleClick() {
      context.emit('filter', props.filterValue);
      selected.value = !selected.value;
    }
    return {
      handleClick,
      selected
    };
  },
  mounted() {
    external_gsap_["gsap"].from(this.$refs.button, {
      duration: 1,
      x: -100,
      opacity: 0
    });
  },
  updated() {
    if (this.selected) {
      external_gsap_["gsap"].to(this.$refs.button, {
        duration: 3,
        scale: 1.1,
        yoyo: true,
        repeat: -1,
        ease: 'bounce'
      });
    } else {
      external_gsap_["gsap"].killTweensOf(this.$refs.button);
      external_gsap_["gsap"].set(this.$refs.button, {
        scale: 1
      });
    }
  }
});
// CONCATENATED MODULE: ./components/filter/FilterButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var filter_FilterButtonvue_type_script_lang_js_ = (FilterButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/filter/FilterButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  filter_FilterButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ea736c10"
  
)

/* harmony default export */ var FilterButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/filter/FilterImage.vue?vue&type=template&id=244e7be0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('img', {
    ref: "image",
    staticClass: "img-responsive",
    attrs: {
      "src": _vm.imgSrc,
      "alt": _vm.imgAlt
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/filter/FilterImage.vue?vue&type=template&id=244e7be0&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/filter/FilterImage.vue?vue&type=script&lang=js&

/* harmony default export */ var FilterImagevue_type_script_lang_js_ = ({
  name: 'FilterImage',
  props: {
    imgSrc: String,
    imgAlt: String
  },
  mounted() {
    this.$gsap.from(this.$refs.image, {
      duration: 1,
      opacity: 0,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.5
      }
    });
  },
  setup(props) {
    const visible = Object(external_vue_["ref"])(false);
    return {
      visible
    };
  }
});
// CONCATENATED MODULE: ./components/filter/FilterImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var filter_FilterImagevue_type_script_lang_js_ = (FilterImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/filter/FilterImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  filter_FilterImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "244e7be0",
  "2a37ff85"
  
)

/* harmony default export */ var FilterImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("320d487e", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/proyecto1.3693ca0.jpg";

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/proyecto2.d4fe2a0.jpg";

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/desing1.60c4d97.jpg";

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portafolio_vue_vue_type_style_index_0_id_713fb08d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portafolio_vue_vue_type_style_index_0_id_713fb08d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portafolio_vue_vue_type_style_index_0_id_713fb08d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portafolio_vue_vue_type_style_index_0_id_713fb08d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portafolio_vue_vue_type_style_index_0_id_713fb08d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-713fb08d]{margin:0;padding:0;box-sizing:border-box;font-family:\"Poppins\",sans-serif}img[data-v-713fb08d]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.material-design-icon.icon-2x[data-v-713fb08d],.material-design-icon.icon-2x>.material-design-icon__svg[data-v-713fb08d]{height:2em;width:2em}.global-container[data-v-713fb08d]{width:90%;max-width:1800px;margin:auto}@media screen and (max-width:1424px){.global-container[data-v-713fb08d]{width:95%}}@media screen and (max-width:1024px){.global-container[data-v-713fb08d]{width:95%}}.m-bottom[data-v-713fb08d]{margin-bottom:100px}.mlg-bottom[data-v-713fb08d]{margin-bottom:200px}.btn-primary[data-v-713fb08d]{padding:15px 40px;background-color:#3d6deb;color:#fff;text-decoration:none;font-weight:600;border-radius:50px;font-size:1rem;transition:background-color 1s ease;border:none;cursor:pointer}.btn-primary[data-v-713fb08d]:hover{background-color:#5a89ff}.container-element-filter[data-v-713fb08d]{width:100%;max-width:1800px;margin:auto;text-align:center}.container-element-filter h2[data-v-713fb08d]{margin-top:40px;font-size:2rem;font-weight:600}.container-element-filter .group-btn[data-v-713fb08d]{display:flex;align-items:center;grid-gap:40px;gap:40px;justify-content:center;margin-top:100px;margin-bottom:100px}.container-element-filter .group-images[data-v-713fb08d]{width:100%;display:flex;flex-wrap:wrap;align-items:center;grid-gap:20px;gap:20px;justify-content:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portafolio.vue?vue&type=template&id=713fb08d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-element-filter"
  }, [_vm._ssrNode("<h2 data-v-713fb08d>Nuestros Proyectos</h2> "), _vm._ssrNode("<div class=\"group-btn\" data-v-713fb08d>", "</div>", _vm._l(_vm.filters, function (filter) {
    return _c('FilterButton', {
      key: filter.value,
      attrs: {
        "buttonText": filter.text,
        "filterValue": filter.value
      },
      on: {
        "filter": _vm.handleFilter
      }
    });
  }), 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"group-images\" data-v-713fb08d>", "</div>", _vm._l(_vm.filteredItems, function (item) {
    return _c('FilterImage', {
      key: item.id,
      attrs: {
        "imgSrc": item.src,
        "imgAlt": item.alt,
        "visible": item.visible
      }
    });
  }), 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/portafolio.vue?vue&type=template&id=713fb08d&scoped=true&

// EXTERNAL MODULE: ./components/filter/FilterButton.vue + 4 modules
var FilterButton = __webpack_require__(77);

// EXTERNAL MODULE: ./components/filter/FilterImage.vue + 4 modules
var FilterImage = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portafolio.vue?vue&type=script&lang=js&


/* harmony default export */ var portafoliovue_type_script_lang_js_ = ({
  components: {
    FilterButton: FilterButton["default"],
    FilterImage: FilterImage["default"]
  },
  data() {
    return {
      filters: [{
        text: "Desarrollo Web",
        value: "Web"
      }, {
        text: "Diseño",
        value: "desing"
      }, {
        text: "Resultados Analitica",
        value: "results"
      }],
      items: [{
        id: 1,
        src: __webpack_require__(83),
        alt: "image1",
        filter: "Web",
        visible: true
      }, {
        id: 2,
        src: __webpack_require__(84),
        alt: "image2",
        filter: "Web",
        visible: true
      }, {
        id: 3,
        src: __webpack_require__(85),
        alt: "image3",
        filter: "desing",
        visible: true
      }],
      filteredItems: []
    };
  },
  mounted() {
    this.filteredItems = this.items;
  },
  methods: {
    handleFilter(filter) {
      this.filteredItems = this.items.filter(item => item.filter === filter);
    }
  }
});
// CONCATENATED MODULE: ./pages/portafolio.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_portafoliovue_type_script_lang_js_ = (portafoliovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/portafolio.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_portafoliovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "713fb08d",
  "3ef18a9e"
  
)

/* harmony default export */ var portafolio = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FilterButton: __webpack_require__(77).default,FilterImage: __webpack_require__(78).default})


/***/ })

};;
//# sourceMappingURL=portafolio.js.map