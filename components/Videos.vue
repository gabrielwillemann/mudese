<template>
  <div id="videos">
    <div class="section">
      <h3 class="section-title">{{ title }}</h3>
      <div class="section-container">
        <iframe
          v-for="video in videos"
          :src="video"
          class="flex-item-flexible flex-basis-25 max-width-35 p-1 height-19"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="text-center">
        <a class="btn-purple" :href="link" target="_black">
          {{ subscribe }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  computed: {
    title() {
      return this.$store.state.youtube.title;
    },
    videos() {
      return this.$store.state.youtube.videos;
    },
    subscribe() {
      return this.$store.state.youtube.subscribe;
    },
    link() {
      return this.$store.state.youtube.link;
    },
  },
};
</script>
