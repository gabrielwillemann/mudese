<template>
  <div id="publications" class="bg-gray">
    <div class="section">
      <h3 class="section-title">{{ title }}</h3>
      <div class="section-container">
        <div class="p-1" v-for="item in list">
          <a :href="item.link" target="_blank">
            <img :src="item.image" />
          </a>
        </div>
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
    list() {
      return this.$store.state.publications.list;
    },
  },
};
</script>
