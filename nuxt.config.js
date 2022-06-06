export default {
  head: {
    title: 'orgStr',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    './assets/css/main.css',
    './assets/css/fonts.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/postcss8'],

  modules: [],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
