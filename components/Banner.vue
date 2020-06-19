<template>
  <div id="banner">
    <div class="banner">
      <div class="banner-container">
        <div class="font-size-3">{{ mainText }}</div>
        <div class="font-size-1-5">{{ subText }}</div>
        <div class="mt-1-5">
          <a v-for="social in socials" class="btn-purple" :href="social.link" target="_blank">
            {{ social.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  computed: {
    socials() {
      return [this.$store.state.instagram, this.$store.state.facebook, this.$store.state.youtube];
    },
    mainText() {
      return (this.$store.state.mainText || '').toUpperCase();
    },
    subText() {
      return this.$store.state.subText;
    },
  },
};
</script>
