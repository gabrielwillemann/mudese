<template>
  <div class="lg-visible">
    <div class="header-container px-2">
      <div class="header-item">
        <a :href="home.link">
          <img class="vertical-middle" :src="home.image" />
        </a>
      </div>
      <div class="spacer"></div>
      <div class="header-item">
        <ul class="menu">
          <a v-for="option in options" class="text-decoration-none text-white" :href="option.link">
            <li class="menu-option-horizontal">
              {{ option.text }}
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderDesktop',
  computed: {
    options() {
      return this.$store.state.menuOptions;
    },
    home() {
      return this.$store.state.home;
    },
  },
};
</script>
