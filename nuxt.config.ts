export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image", "@nuxthq/studio"],
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