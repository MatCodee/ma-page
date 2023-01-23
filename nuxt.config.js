export default {
  loading: {
    continuous: true,
    rtl: false,
    css: false,
    loader: '@/components/Loader.vue'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Agencia de Marketing - Growiit',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Agencia de Marketing Digital especializada en SEO, PPC, análisis y diseño web. Mejoramos tu visibilidad y rendimiento en línea. Consulta gratis.' },
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
    '~assets/css/variab.css',
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
    '@nuxtjs/color-mode',
  ],
  gsap: {
    /* Module Options */
  },
  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss',
      '~assets/scss/global.scss',
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://growiit.com',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: [
    ]
  },
  robots: {
    UserAgent: '*',
    Disallow: ''
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: false
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
