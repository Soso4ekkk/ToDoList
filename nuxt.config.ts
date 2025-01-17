// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['nuxt-icons'],
  css: [
    "@/assets/main.scss",
    "@/assets/fonts.scss",
  ],
})
