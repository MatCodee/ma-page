export const MaterialIconAlarm = () => import('../..\\node_modules\\vue-material-design-icons\\Alarm.vue' /* webpackChunkName: "components/material-icon-alarm" */).then(c => wrapFunctional(c.default || c))
export const MaterialIconPhone = () => import('../..\\node_modules\\vue-material-design-icons\\Phone.vue' /* webpackChunkName: "components/material-icon-phone" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Loader = () => import('../..\\components\\Loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c))
export const Section = () => import('../..\\components\\Section.vue' /* webpackChunkName: "components/section" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const BaseButtonToggle = () => import('../..\\components\\base\\ButtonToggle.vue' /* webpackChunkName: "components/base-button-toggle" */).then(c => wrapFunctional(c.default || c))
export const BaseProjectCard = () => import('../..\\components\\base\\ProjectCard.vue' /* webpackChunkName: "components/base-project-card" */).then(c => wrapFunctional(c.default || c))
export const FilterButton = () => import('../..\\components\\filter\\FilterButton.vue' /* webpackChunkName: "components/filter-button" */).then(c => wrapFunctional(c.default || c))
export const FilterImage = () => import('../..\\components\\filter\\FilterImage.vue' /* webpackChunkName: "components/filter-image" */).then(c => wrapFunctional(c.default || c))
export const SectionInitial = () => import('../..\\components\\sectionComponent\\SectionInitial.vue' /* webpackChunkName: "components/section-initial" */).then(c => wrapFunctional(c.default || c))
export const SectionMeet = () => import('../..\\components\\sectionComponent\\SectionMeet.vue' /* webpackChunkName: "components/section-meet" */).then(c => wrapFunctional(c.default || c))
export const SectionPrincipal = () => import('../..\\components\\sectionComponent\\SectionPrincipal.vue' /* webpackChunkName: "components/section-principal" */).then(c => wrapFunctional(c.default || c))
export const SectionService = () => import('../..\\components\\sectionComponent\\SectionService.vue' /* webpackChunkName: "components/section-service" */).then(c => wrapFunctional(c.default || c))
export const SectionWork = () => import('../..\\components\\sectionComponent\\SectionWork.vue' /* webpackChunkName: "components/section-work" */).then(c => wrapFunctional(c.default || c))

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
