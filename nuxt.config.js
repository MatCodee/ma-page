export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'growiit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Crecer tu negocio con inteligencia artificial, somos una agencia de marketing digital ' },
      { name: 'keywords', content: "Agencia, Marketing, Negocio, Publicidad, Crear"},
      { name:"author", content:"Matias Altamirano" },
      { name:"copyright", content:"Propietario del copyright" },
      { name:"robots", content:"index" },

      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: "preconnect", href:"https://fonts.gstatic.com"},
      { rel: "preconnect", href:"https://fonts.googleapis.com"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css',
    'aos/dist/aos.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos",ssr: false, mode: "client" },
  ],
  purgeCSS: {
      whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module'
    '@nuxtjs/style-resources',
    '~/modules/material-design-icons.js',
    'nuxt-gsap-module',
  ],
  gsap: {
    /* Module Options */
  },
  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss',
      '~assets/scss/global.scss'
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
