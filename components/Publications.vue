<template>
  <div id="publications" class="bg-gray">
    <div class="section">
      <h3 class="section-title">{{ title }}</h3>
      <div class="section-container">
        <img v-for="image in images" class="p-1" :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Publications',
  computed: {
    title() {
      return this.$store.state.publications.title;
    },
    images() {
      return this.$store.state.publications.images;
    },
  },
};
</script>
