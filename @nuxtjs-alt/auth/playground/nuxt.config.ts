import Module from "..";

export default defineNuxtConfig({
    modules: [Module, "@innodata/nuxtjs-alt-http", "@pinia/nuxt"],
    auth: {
        enableMiddleware: false,
    },
});
