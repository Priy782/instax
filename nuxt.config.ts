// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
/*   redirectOptions: {
    login: '/index',
    callback: '/confirm',
    include: undefined,
    exclude: [],
    cookieRedirect: false,
  }, */
  supabase: {
    redirect: false
    },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  css: ['~/assets/css/main.css'],

})