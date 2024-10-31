// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  devServer: {
    port: 8899
  },
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
      }
    }
  },


  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/icon'
  ]
})