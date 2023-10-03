

export default defineNuxtConfig({
  head: {
    title: 'Jessica Turner | 2023',
    charset: 'utf-8',
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/static/images/favicon.png',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@300;400;500;700&display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
        rel: 'stylesheet',
      },
    ],
    noscript: [{ innerHTML: 'Javascript is required' }],
    script: [],
  },

  devtools: { enabled: true },

  buildModules: ['@nuxt3/tailwindcss'],

  css: ['@/assets/scss/main.scss', '@/assets/scss/variables.scss'],

  tailwindcss: {
    cssPath: false,
    configPath: 'tailwind.config.js',
    jit: true, // Enable JIT mode
  },

  build: {},

  publicRuntimeConfig: {
    env: process.env.ENV,
    BASE_API_BROWSER_URL: '',
  },

  experimental: {
    payloadExtraction: false,
  },


});
