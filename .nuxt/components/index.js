export { default as MaterialIconAlarm } from '../..\\node_modules\\vue-material-design-icons\\Alarm.vue'
export { default as MaterialIconPhone } from '../..\\node_modules\\vue-material-design-icons\\Phone.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Loader } from '../..\\components\\Loader.vue'
export { default as Section } from '../..\\components\\Section.vue'
export { default as BaseButtonToggle } from '../..\\components\\base\\ButtonToggle.vue'
export { default as BaseProjectCard } from '../..\\components\\base\\ProjectCard.vue'
export { default as FilterButton } from '../..\\components\\filter\\FilterButton.vue'
export { default as FilterImage } from '../..\\components\\filter\\FilterImage.vue'
export { default as SectionInitial } from '../..\\components\\sectionComponent\\SectionInitial.vue'
export { default as SectionMeet } from '../..\\components\\sectionComponent\\SectionMeet.vue'
export { default as SectionService } from '../..\\components\\sectionComponent\\SectionService.vue'
export { default as SectionWork } from '../..\\components\\sectionComponent\\SectionWork.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
