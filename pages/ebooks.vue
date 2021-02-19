<template>
  <div>
    <Header />
    <EbooksIntroduction />
    <EbooksList />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import EbooksIntroduction from '@/components/ebooks/EbooksIntroduction.vue';
import EbooksList from '@/components/ebooks/EbooksList.vue';

export default {
  name: 'ebooks',
  components: {
    Header,
    EbooksIntroduction,
    EbooksList,
  },
};
</script>

<style></style>
