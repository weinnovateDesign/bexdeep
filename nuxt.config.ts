export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image", "@nuxthq/studio"],
  routeRules: {
    '/': { prerender: true }
  },
  css: ["~/assets/css/main.css"],
  postcss: {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
},
})