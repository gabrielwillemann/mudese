<template>
  <div class="bg-black text-white">
    <div class="section">
      <div class="section-container">
        <div class="p-2 flex-basis-16" v-for="badge in badges">
          <div class="text-center">
            <img :src="badge.image" />
          </div>
          <div class="text-center">{{ badge.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Badges',
  computed: {
    badges() {
      return this.$store.state.badges;
    }
  }
};
</script>
