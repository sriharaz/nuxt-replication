// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true },
//   ssr: false,
//   modules: [
//     '@nuxt/eslint'
//   ],
//   nitro: {
//     preset: 'aws-amplify',
//     logLevel: 5,
//     awsAmplify: {
//       // Set to true so Lambda doesn't try to serve static files from filesystem
//       catchAllStaticFallback: true
//     },
//     routeRules: {
//       '/api/**': { cors: true },
//       '/': { ssr: false },
//       '/static-test': { prerender: true }
//     }
//   },
//   css: [
//     'vuetify/styles',
//     '@mdi/font/css/materialdesignicons.css'
//   ],
//   build: {
//     transpile: ['vuetify']
//   },
//   runtimeConfig: {
//     public: {}
//   }
// })

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,  // ← Disable SSR (SPA mode)
  modules: [
    '@nuxt/eslint'
  ],
  // Remove or simplify nitro config
  nitro: {
    preset: 'static',  // ← Use static preset
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  runtimeConfig: {
    public: {}
  }
})