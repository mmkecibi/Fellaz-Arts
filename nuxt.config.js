let dynamicRoutes = () => {
  let data = require('./static/storedata.json');
  return new Promise(resolve => {
    resolve(data.map(el => `product/${el.id}`))
  })
}

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    script: [{ src: 'https://js.stripe.com/v3/' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:300,600|PT+Serif&display=swap'
      }
    ]
  },
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
 //css: ['normalize.css', { src: '~/assets/main.scss', lang: 'sass' }],

 /*css: [
  'normalize.css', 
  '~/assets/main.scss',
  '@/assets/css/icons.css',
  '@/assets/css/bootstrap.min.css',
  '@/assets/css/animate.min.css',
  '@/assets/css/datepicker.css',
  '@/assets/css/font-awesome.min.css',
  '@/assets/css/icofont.css',
  '@/assets/css/magnific-popup.css',
  '@/assets/css/nice-select.css',
  '@/assets/css/owl-carousel.css',
  '@/assets/css/responsive.css',
  '@/assets/css/slicknav.min.css',
  '@/assets/style.css',
],*/

css: [
  'normalize.css', { src: '~/assets/main.scss', lang: 'sass' },
  '@/assets/css/icons.css',
  '@/assets/css/bootstrap.min.css',
  '@/assets/css/animate.min.css',
  '@/assets/css/datepicker.css',
  '@/assets/css/font-awesome.min.css',
  '@/assets/css/icofont.css',
  '@/assets/css/magnific-popup.css',
  '@/assets/css/nice-select.css',
  '@/assets/css/owl-carousel.css',
  '@/assets/css/responsive.css',
  '@/assets/css/slicknav.min.css',
  '@/assets/style.css',
  '@/assets/css/alga.css',
  '@/assets/css/alga.min.css',
  '@/assets/css/normalize.css',
  '@/assets/css/alga-animate.css',
  '@/assets/css/alga-animate.min.css',

],


 /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    `~/plugins/currency-filter.js`,
    {src: '~/plugins/input_mask', ssr: false},
    {src: '~/plugins/vue-upload-multiple-image', ssr: false},
    {src: '~/plugins/vuelidate'},
    {src: '~/plugins/filters'},
    {src: '~/plugins/integrations'},
    {src: '~/plugins/components'},
    {src: '~/plugins/tooltip'},
    {src: '~/plugins/vue-gallery.client.js'},
    {src: '~/plugins/toasted', ssr: false},
    {src: '~/plugins/paginate', ssr: false},
    {src: '~/plugins/vue-datepicker', ssr: false},
    {src: '~/plugins/vue-datetime', ssr: false},
    {src: '~/plugins/vue-slide-bar', ssr: false},
    {src: '~/plugins/vue-textarea-autosize', ssr: false},
    {src: '~/plugins/vowlCarousel', ssr: false},
    {src: '~/plugins/vueslickcarousel', ssr: false},
    {src: '~/plugins/currency-filter', ssr: false},

  ],
  /*
   ** Nuxt.js modules
   */
   modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/vuetify',
    'portal-vue/nuxt',
    '@nuxtjs/style-resources',
    'vue-web-cam/nuxt',
    ['nuxt-gmaps', {
      key: 'AIzaSyCQFKwVLvTw3-ovzOWm1UUAHeIVyDkW2t4',

      // lumen google map  key :   AIzaSyDNdb4rXW1qZMH9AZH9h3JdKatsBTx7xoo
      //you can use libraries: ['places']
    }],
    'nuxt-i18n',
    '@nuxt/content',
    'nuxt-session',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.json'
      },
      {
        code: 'ar',
        file: 'ar.json',
        dir: 'rtl',        // that will be passed to your app
        name: 'عربي',
      },
    ],
    lazy: true,
    langDir: 'Ressource/',
    defaultLocale: 'en',
    routes: {},
    vueI18n: {
      fallbackLocale: 'en',
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    baseURL: process.env.BASE_URL || 'http://localhost:8080'
  },
  proxy: {
    '/api/': { target: 'http://localhost:8080/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },
  serverMiddleware:[
    '~/server/routes/index'
  ],


  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
