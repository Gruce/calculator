import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    modules: [
        MyModule,
        '@enab/systemapps',
        '@enab/utilities',
        '@enab/core',
        '@nuxt/image-edge',
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        "@nuxtjs/color-mode",
    ],
})
