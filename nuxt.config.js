export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: {
    port: 8080,
  },
  loading: { color: '#fff' },
  css: ['@/assets/css/index.css', '@/assets/css/components.css', '@/assets/css/utilities.css'],
  plugins: [],
  buildModules: [['@nuxtjs/google-analytics', { id: 'XX-00000-0' }], '@nuxtjs/sitemap'],
  modules: [],
  build: {
    extend(config, ctx) {},
  },
  sitemap: {
    hostname: 'https://mudese.com.br',
  },
};
