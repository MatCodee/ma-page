exports.ids = [2];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=filter-button.js.map