



export default defineNuxtConfig({
  app: {
    head: {
      title: "Jessica Turner | 2023",
      charset: "utf-8",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/ipng",
          href: "/static/images/favicon.png",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",

        },
        {
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap",
          rel: "stylesheet"
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@300;400;500;700&display=swap",
          rel: "stylesheet"
        },

        {
          href: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap", rel: "stylesheet"
        },

        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" },
      ],

      noscript: [{ children: "Javascript is required" }],

      script: [{
        src: "https://www.googletagmanager.com/gtag/js?id=G-FLKGD5VCNF",
        defer: "defer"

      },
      {
        src: "/static/scripts/gtm.js",
        defer: "defer",
        body: true,
      }
      ],
    },
  },

  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},

    },
  },
  css: [
    "@/assets/scss/main.scss",
    "@/assets/scss/variables.scss",
    "@/assets/scss/transitions.scss",
    '@fortawesome/fontawesome-svg-core/styles.css',

  ],
  modules: ["@nuxtjs/tailwindcss",],
  plugins: [
    { src: '~/plugins/fontawesome.ts' }
  ],

  ssr: true,
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  tailwindcss: {
    cssPath: false,
    configPath: "tailwind.config.js",

    config: {},
  },
  build: {
    transpile: ["swiper"]
  },
  runtimeConfig: {
    public: {
      env: process.env.ENV,
      BASE_API_BROWSER_URL: "https://portfolio-2023-v3.vercel.app/"
    }
  },
  experimental: {
    payloadExtraction: false,
  },

});