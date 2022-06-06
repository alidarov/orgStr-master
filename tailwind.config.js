module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#EBEBEB',
        reg: '#333333',
        mainCol: '#014743',
        drop: '#F7F7F7',
        lightBack: 'rgba(1, 71, 67, 0.15)',
      },
      boxShadow: {
        head: '0px 6px 18px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
