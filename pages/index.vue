<template>
  <div>
    <Header />
    <Banner />
    <About />
    <Badges />
    <Clinic />
    <Publications />
    <Videos />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';
import Badges from '@/components/Badges.vue';
import Clinic from '@/components/Clinic.vue';
import Publications from '@/components/Publications.vue';
import Videos from '@/components/Videos.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'index',
  components: { Header, Banner, About, Badges, Clinic, Publications, Videos, Footer },
};
</script>
