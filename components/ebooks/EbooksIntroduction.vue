<template>
  <div class="section">
    <div class="section-container">
      <div class="flex-item-flexible flex-basis-30 max-width-35 px-1">
        <h3 class="section-title">Seja Forte Emocionalmente!</h3>
        <p v-for="p in paragraphs">
          {{ p }}
        </p>
      </div>
      <div class="flex-item-fixed px-1">
        <img :src="imgPerson" />
      </div>
    </div>
  </div>
</template>

<script>
import imgPerson from '@/assets/img/natanna.png';

export default {
  name: 'EbooksIntroduction',
  data: () => ({
    imgPerson,
  }),
  computed: {
    paragraphs() {
      return this.$store.state.ebooks.paragraphs;
    },
  },  
};
</script>
