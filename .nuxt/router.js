import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52c5ba0d = () => interopDefault(import('..\\pages\\nosotros.vue' /* webpackChunkName: "pages/nosotros" */))
const _39f7ee77 = () => interopDefault(import('..\\pages\\portafolio.vue' /* webpackChunkName: "pages/portafolio" */))
const _7603e702 = () => interopDefault(import('..\\pages\\servicios.vue' /* webpackChunkName: "pages/servicios" */))
const _76567d74 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/nosotros",
    component: _52c5ba0d,
    name: "nosotros"
  }, {
    path: "/portafolio",
    component: _39f7ee77,
    name: "portafolio"
  }, {
    path: "/servicios",
    component: _7603e702,
    name: "servicios"
  }, {
    path: "/",
    component: _76567d74,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
