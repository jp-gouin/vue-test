export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'codenito - We build, secure and publish your apps for you.',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Codenito is a SaaS solution to ease the deployment of code. We handle the deployment of your code for you and provide a secure exposition. We support running multiple apps and provide you an easy way to bind your apps' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    'nuxt-cookie-control',
  ],
  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: 'Default Cookies'
        },
        //else
        name:  'Default Cookies',
        //if multilanguage
        description: {
          en:  'Store your preference on the website to a smooth navigation'
        },
        //else
        description:  'Store your preference on the website to a smooth navigation',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name:  'Google Analitycs',
        //if you don't set identifier, slugified name will be used
        identifier: 'ga',
        //if multilanguage
        description: {
          en:  'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. We use data only to measure traffic on the website and nothing else'
        },
        //else
        description:  'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. We use data only to measure traffic on the website and nothing else',
  
        initialState: true,
        async:  true,
        cookies: ['_ga', '_gat', '_gid'],
        src:  'https://www.googletagmanager.com/gtag/js?id='+process.env.GOOGLE_ANALYTICS_ID,
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', process.env.GOOGLE_ANALYTICS_ID);
      },
      declined: () => {
      },
      }
    ]
  },
  publicRuntimeConfig: {
    //reCaptcha module configuration
    recaptcha: {
      //   hideBadge: Boolean, // Hide badge element (v3 & v2 via size=invisible)
      //   language: String,   // Recaptcha language (v2)
      //   mode: String,       // Mode: 'base', 'enterprise'
      siteKey: process.env.RECAPTCHA_KEY,    // Site key for requests
      version: "2",    // Version
      //   size: String        // Size: 'compact', 'normal', 'invisible' (v2)
      },
    },
  
    //reCaptcha module configuration
  recaptcha: {
    //   hideBadge: Boolean, // Hide badge element (v3 & v2 via size=invisible)
    //   language: String,   // Recaptcha language (v2)
    //   mode: String,       // Mode: 'base', 'enterprise'
    siteKey: process.env.RECAPTCHA_KEY, // Use as fallback if no runtime config is provided
    version: "2",    // Version
    //   size: String        // Size: 'compact', 'normal', 'invisible' (v2)
  },
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcssOptions: {
      plugins:{
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-custom-properties": false
      },
    },
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      });
    },
  }
}
