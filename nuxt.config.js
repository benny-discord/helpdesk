const { join } = require('path');

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Benny Helpdesk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Got questions about Benny? The answers are here' },
      { hid: 'og:description', name: 'og:description', content: 'Got questions about Benny? The answers are here' },
      { hid: 'og:title', name: 'og:title', content: 'Benny Helpdesk' },
      { name: 'og:site_name', content: 'Benny Helpdesk' },
      { name: 'og:image', content: 'https://cdn.benny.sh/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Benny Helpdesk',
      short_name: 'Benny FAQ',
      display: 'standalone',
      background_color: '#282828',
      theme_color: '#40C9DD',
      description: 'Got questions about Benny? The answers are here',
      lang: 'en'
    },
    icon: {
      source: join(process.cwd(), 'static', 'icon.png')
    },
    workbox: {
      cleanupOutdatedCaches: true,
      offline: true
    }
  },

  server: {
    host: '0.0.0.0',
    port: 9000
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
