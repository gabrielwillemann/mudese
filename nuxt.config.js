export default {
  mode: 'universal',
  head: {
    htmlAttrs: { lang: 'pt-BR' },
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Natanna Taynara Schütz - Psicóloga Clínica em Rio do Sul, SC',
      },
      { name: 'theme-color', content: '#5b4f9c' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://mudese.com.br' },
    ],
  },
  server: {
    port: 8080,
  },
  loading: { color: '#fff' },
  css: ['@/assets/css/index.css', '@/assets/css/components.css', '@/assets/css/utilities.css'],
  plugins: [],
  buildModules: [['@nuxtjs/google-analytics', { id: 'UA-173150488-1' }], '@nuxtjs/sitemap'],
  modules: [],
  build: {
    extend(config, ctx) {},
  },
  sitemap: {
    hostname: 'https://mudese.com.br',
  },
};
