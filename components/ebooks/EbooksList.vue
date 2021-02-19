<template>
  <div class="bg-black text-white">
    <div class="section">
      <div class="section-container">
        <div class="p-2 flex-basis-16" v-for="ebook in ebooks">
          <a class="text-decoration-none text-white" :href="ebook.link" target="_blank" @click="download(ebook)">
            <div class="text-center">
              <img :src="imgEbook" />
            </div>
            <div class="text-center mt-0-5">{{ ebook.name }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgEbook from '@/assets/img/ebook.png';

export default {
  name: 'EbooksList',
  data: () => ({
    imgEbook,
  }),
  computed: {
    ebooks() {
      return this.$store.state.ebooks.group1;
    },
  },
  methods: {
    download(ebook) {
      if (window.ga) {
        ga('send', 'event', {
          eventCategory: ebook.category,
          eventAction: ebook.action,
          eventLabel: ebook.label,
        });
      }
    },
  },
};
</script>
