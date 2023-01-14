exports.ids = [8];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3ce64c44", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSI0ODBweCIgaGVpZ2h0PSI0ODBweCI+ICAgIDxwYXRoIGQ9Ik0gOS45OTgwNDY5IDMgQyA2LjEzOTA0NjkgMyAzIDYuMTQxOTUzMSAzIDEwLjAwMTk1MyBMIDMgMjAuMDAxOTUzIEMgMyAyMy44NjA5NTMgNi4xNDE5NTMxIDI3IDEwLjAwMTk1MyAyNyBMIDIwLjAwMTk1MyAyNyBDIDIzLjg2MDk1MyAyNyAyNyAyMy44NTgwNDcgMjcgMTkuOTk4MDQ3IEwgMjcgOS45OTgwNDY5IEMgMjcgNi4xMzkwNDY5IDIzLjg1ODA0NyAzIDE5Ljk5ODA0NyAzIEwgOS45OTgwNDY5IDMgeiBNIDIyIDcgQyAyMi41NTIgNyAyMyA3LjQ0OCAyMyA4IEMgMjMgOC41NTIgMjIuNTUyIDkgMjIgOSBDIDIxLjQ0OCA5IDIxIDguNTUyIDIxIDggQyAyMSA3LjQ0OCAyMS40NDggNyAyMiA3IHogTSAxNSA5IEMgMTguMzA5IDkgMjEgMTEuNjkxIDIxIDE1IEMgMjEgMTguMzA5IDE4LjMwOSAyMSAxNSAyMSBDIDExLjY5MSAyMSA5IDE4LjMwOSA5IDE1IEMgOSAxMS42OTEgMTEuNjkxIDkgMTUgOSB6IE0gMTUgMTEgQSA0IDQgMCAwIDAgMTEgMTUgQSA0IDQgMCAwIDAgMTUgMTkgQSA0IDQgMCAwIDAgMTkgMTUgQSA0IDQgMCAwIDAgMTUgMTEgeiIvPjwvc3ZnPg=="

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSI0ODBweCIgaGVpZ2h0PSI0ODBweCI+ICAgIDxwYXRoIGQ9Ik0yOCw2LjkzN2MtMC45NTcsMC40MjUtMS45ODUsMC43MTEtMy4wNjQsMC44NGMxLjEwMi0wLjY2LDEuOTQ3LTEuNzA1LDIuMzQ1LTIuOTUxYy0xLjAzLDAuNjExLTIuMTcyLDEuMDU1LTMuMzg4LDEuMjk1IGMtMC45NzMtMS4wMzctMi4zNTktMS42ODUtMy44OTMtMS42ODVjLTIuOTQ2LDAtNS4zMzQsMi4zODktNS4zMzQsNS4zMzRjMCwwLjQxOCwwLjA0OCwwLjgyNiwwLjEzOCwxLjIxNSBjLTQuNDMzLTAuMjIyLTguMzYzLTIuMzQ2LTEwLjk5NS01LjU3NEMzLjM1MSw2LjE5OSwzLjA4OCw3LjExNSwzLjA4OCw4LjA5NGMwLDEuODUsMC45NDEsMy40ODMsMi4zNzIsNC40MzkgYy0wLjg3NC0wLjAyOC0xLjY5Ny0wLjI2OC0yLjQxNi0wLjY2N2MwLDAuMDIzLDAsMC4wNDQsMCwwLjA2N2MwLDIuNTg1LDEuODM4LDQuNzQxLDQuMjc5LDUuMjMgYy0wLjQ0NywwLjEyMi0wLjkxOSwwLjE4Ny0xLjQwNiwwLjE4N2MtMC4zNDMsMC0wLjY3OC0wLjAzNC0xLjAwMy0wLjA5NWMwLjY3OSwyLjExOSwyLjY0OSwzLjY2Miw0Ljk4MywzLjcwNSBjLTEuODI1LDEuNDMxLTQuMTI1LDIuMjg0LTYuNjI1LDIuMjg0Yy0wLjQzLDAtMC44NTUtMC4wMjUtMS4yNzMtMC4wNzVjMi4zNjEsMS41MTMsNS4xNjQsMi4zOTYsOC4xNzcsMi4zOTYgYzkuODEyLDAsMTUuMTc2LTguMTI4LDE1LjE3Ni0xNS4xNzdjMC0wLjIzMS0wLjAwNS0wLjQ2MS0wLjAxNS0wLjY5QzI2LjM4LDguOTQ1LDI3LjI4NSw4LjAwNiwyOCw2LjkzN3oiLz48L3N2Zz4="

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MDBweCIgaGVpZ2h0PSI1MDBweCI+PHBhdGggZD0iTSA0NC44OTg0MzggMTQuNSBDIDQ0LjUgMTIuMzAwNzgxIDQyLjYwMTU2MyAxMC42OTkyMTkgNDAuMzk4NDM4IDEwLjE5OTIxOSBDIDM3LjEwMTU2MyA5LjUgMzEgOSAyNC4zOTg0MzggOSBDIDE3LjgwMDc4MSA5IDExLjYwMTU2MyA5LjUgOC4zMDA3ODEgMTAuMTk5MjE5IEMgNi4xMDE1NjMgMTAuNjk5MjE5IDQuMTk5MjE5IDEyLjE5OTIxOSAzLjgwMDc4MSAxNC41IEMgMy4zOTg0MzggMTcgMyAyMC41IDMgMjUgQyAzIDI5LjUgMy4zOTg0MzggMzMgMy44OTg0MzggMzUuNSBDIDQuMzAwNzgxIDM3LjY5OTIxOSA2LjE5OTIxOSAzOS4zMDA3ODEgOC4zOTg0MzggMzkuODAwNzgxIEMgMTEuODk4NDM4IDQwLjUgMTcuODk4NDM4IDQxIDI0LjUgNDEgQyAzMS4xMDE1NjMgNDEgMzcuMTAxNTYzIDQwLjUgNDAuNjAxNTYzIDM5LjgwMDc4MSBDIDQyLjgwMDc4MSAzOS4zMDA3ODEgNDQuNjk5MjE5IDM3LjgwMDc4MSA0NS4xMDE1NjMgMzUuNSBDIDQ1LjUgMzMgNDYgMjkuMzk4NDM4IDQ2LjEwMTU2MyAyNSBDIDQ1Ljg5ODQzOCAyMC41IDQ1LjM5ODQzOCAxNyA0NC44OTg0MzggMTQuNSBaIE0gMTkgMzIgTCAxOSAxOCBMIDMxLjE5OTIxOSAyNSBaIi8+PC9zdmc+"

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fondo4.4706967.jpg";

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionInitial_vue_vue_type_style_index_0_id_5f4033c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionInitial_vue_vue_type_style_index_0_id_5f4033c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionInitial_vue_vue_type_style_index_0_id_5f4033c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionInitial_vue_vue_type_style_index_0_id_5f4033c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionInitial_vue_vue_type_style_index_0_id_5f4033c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-5f4033c4]{margin:0;padding:0;box-sizing:border-box;font-family:\"Poppins\",sans-serif}img[data-v-5f4033c4]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.material-design-icon.icon-2x[data-v-5f4033c4],.material-design-icon.icon-2x>.material-design-icon__svg[data-v-5f4033c4]{height:2em;width:2em}.global-container[data-v-5f4033c4]{width:90%;max-width:1800px;margin:auto}@media screen and (max-width:1424px){.global-container[data-v-5f4033c4]{width:95%}}@media screen and (max-width:1024px){.global-container[data-v-5f4033c4]{width:95%}}.m-bottom[data-v-5f4033c4]{margin-bottom:100px}.mlg-bottom[data-v-5f4033c4]{margin-bottom:200px}.btn-primary[data-v-5f4033c4]{padding:15px 40px;background-color:#3d6deb;color:#fff;text-decoration:none;font-weight:600;border-radius:50px;font-size:1rem;transition:background-color 1s ease;border:none;cursor:pointer}.btn-primary[data-v-5f4033c4]:hover{background-color:#5a89ff}.container-pres[data-v-5f4033c4]{position:relative;width:100%;max-width:2000px;height:90vh;margin:auto;z-index:-1}.container-pres .background-element[data-v-5f4033c4]{position:absolute;width:159%;height:135%;background:#f1f1f1;background:linear-gradient(90deg,var(--bg-s),var(--bg-p));top:-136%;left:-110%;transform:rotate(45deg);border-radius:200px;z-index:-1}.container-pres .container-content[data-v-5f4033c4]{height:100%;display:grid;grid-gap:20px;gap:20px;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(3,1fr);grid-template-areas:\"icons title title title images images images\" \"icons title title title images images images\" \"icons title title title images images images\"}.container-pres .container-content .item1[data-v-5f4033c4]{grid-area:icons}.container-pres .container-content .item1 .content-icons[data-v-5f4033c4]{width:100%;height:100%;flex-direction:column;display:flex;grid-gap:30px;gap:30px;justify-content:center;align-items:flex-start;margin-left:10%;padding-bottom:100px}.container-pres .container-content .item1 .content-icons img[data-v-5f4033c4]{width:50px;height:50px;cursor:pointer}.container-pres .container-content .item2[data-v-5f4033c4]{grid-area:title}.container-pres .container-content .item2 .content-title[data-v-5f4033c4]{width:100%;height:100%;flex-direction:column;display:flex;justify-content:center;align-items:flex-start}.container-pres .container-content .item2 .content-title h1[data-v-5f4033c4]{font-size:6rem;color:var(--font-color-e)}.container-pres .container-content .item2 .content-title p[data-v-5f4033c4]{font-size:1.8rem;margin-bottom:20px;color:var(--font-color-e-light)}.container-pres .container-content .item3[data-v-5f4033c4]{grid-area:images}.container-pres .container-content .item3 img[data-v-5f4033c4]{border-radius:100px}@media screen and (max-width:1000px){.container-pres[data-v-5f4033c4]{width:90%}.container-pres .background-element[data-v-5f4033c4]{display:none}.container-pres .container-content[data-v-5f4033c4]{grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(3,1fr);grid-template-areas:\"icons title title title\" \"icons title title title\" \"icons title title title\"}.container-pres .container-content .item2 .content-title h1[data-v-5f4033c4]{font-size:3rem;color:var(--font-color-e)}.container-pres .container-content .item2 .content-title p[data-v-5f4033c4]{font-size:1.5rem;margin-bottom:20px;color:var(--font-color-e-light)}.container-pres .container-content .item3[data-v-5f4033c4]{display:none}}@media screen and (max-width:600px){.container-pres .container-content[data-v-5f4033c4]{grid-template-columns:repeat(1,1fr);grid-template-rows:repeat(2,1fr);grid-template-areas:\"title\" \"icons\"}.container-pres .container-content .item1 .content-icons[data-v-5f4033c4]{display:flex;width:100%;height:100%;grid-gap:30px;gap:30px;flex-direction:row;align-items:flex-start;justify-content:center;margin-left:0;padding-bottom:100px;padding-top:20px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sectionComponent/SectionInitial.vue?vue&type=template&id=5f4033c4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-pres"
  }, [_vm._ssrNode("<div class=\"container-content\" data-v-5f4033c4><div class=\"item1\" data-v-5f4033c4><div class=\"content-icons\" data-v-5f4033c4><img" + _vm._ssrAttr("src", __webpack_require__(51)) + " alt class=\"img1\" data-v-5f4033c4> <img" + _vm._ssrAttr("src", __webpack_require__(52)) + " alt class=\"img2\" data-v-5f4033c4> <img" + _vm._ssrAttr("src", __webpack_require__(53)) + " alt class=\"img3\" data-v-5f4033c4></div></div> <div class=\"item2\" data-v-5f4033c4><div class=\"content-title\" data-v-5f4033c4><h1 class=\"title\" data-v-5f4033c4> Aumentas tus ventas </h1> <p class=\"subtitle\" data-v-5f4033c4> Ayudamos a las empresas a alcanzar su máximo potencial a través del uso de las últimas tecnologías y estrategias de marketing innovadoras.</p> <a href=\"#\" class=\"btn-primary btn-animation\" data-v-5f4033c4>Comenzar</a></div></div> <div class=\"item3\" data-v-5f4033c4><img" + _vm._ssrAttr("src", __webpack_require__(54)) + " alt=\"Imagen de personas de la empresa de agencia de marketing\" class=\"mov-img\" data-v-5f4033c4></div></div> <div class=\"background-element\" data-v-5f4033c4></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sectionComponent/SectionInitial.vue?vue&type=template&id=5f4033c4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sectionComponent/SectionInitial.vue?vue&type=script&lang=js&
/* harmony default export */ var SectionInitialvue_type_script_lang_js_ = ({
  mounted() {
    this.animationContent();
  },
  methods: {
    animationContent() {
      this.$gsap.from(".container-pres", {
        duration: 2,
        x: "-100%",
        ease: "power2.inOut"
      });
      //this.$gsap.set(['.title', '.subtitle', '.image', '.subtitle', '.btn-animation'], { autoAlpha: 0 });
      const tl = this.$gsap.timeline({
        defaults: {
          ease: 'power3.inOut'
        }
      });
      tl.from('.title', {
        duration: 2.5,
        y: '-=50',
        autoAlpha: 0
      }).from('.subtitle', {
        duration: 2.5,
        y: '-=50',
        autoAlpha: 0
      }, '-=1.25').from('.mov-img', {
        duration: 2.5,
        y: 200,
        autoAlpha: 0
      }, '-=1.25').from('.btn-animation', {
        duration: 2.5,
        y: '+=50',
        autoAlpha: 0
      }, '-=1.25').from('.img1', {
        duration: 1.5,
        x: '-=50',
        autoAlpha: 0
      }, '-=1.25').from('.img2', {
        duration: 1.56,
        x: '-=50',
        autoAlpha: 0
      }, '-=1.25').from('.img3', {
        duration: 1.57,
        x: '-=50',
        autoAlpha: 0
      }, '-=1.25');
      this.$gsap.from('.background-element', {
        duration: 3.5,
        y: 2000,
        x: 2000,
        autoAlpha: 0
      });
    }
  }
});
// CONCATENATED MODULE: ./components/sectionComponent/SectionInitial.vue?vue&type=script&lang=js&
 /* harmony default export */ var sectionComponent_SectionInitialvue_type_script_lang_js_ = (SectionInitialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sectionComponent/SectionInitial.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sectionComponent_SectionInitialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f4033c4",
  "5825732d"
  
)

/* harmony default export */ var SectionInitial = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=section-initial.js.map