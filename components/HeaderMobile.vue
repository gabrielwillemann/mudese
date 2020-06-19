<template>
  <div class="xs-visible">
    <div class="header-container px-1">
      <div class="header-item cursor-pointer">
        <a class="text-white text-decoration-none" href="#" @click.prevent="changeDrawer">
          <span class="material-icons">menu</span>
        </a>
      </div>
      <div class="spacer"></div>
      <div class="header-item">
        <a :href="home.link">
          <img class="vertical-middle" :src="home.image" />
        </a>
      </div>
      <div class="spacer"></div>
    </div>
    <div class="overlay" v-if="showDrawer" @click="changeDrawer"></div>
    <transition name="drawer">
      <div v-if="showDrawer" class="drawer bg-purple text-white p-0-5">
        <ul class="menu">
          <a
            v-for="option in options"
            class="text-white text-decoration-none"
            :href="option.link"
            @click="changeDrawer"
          >
            <li class="menu-option-vertical p-1">{{ option.text }}</li>
          </a>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HeaderMobile',
  data: () => ({
    showDrawer: false,
  }),
  computed: {
    options() {
      return [this.home, ...this.$store.state.menuOptions];
    },
    home() {
      return this.$store.state.home;
    },
  },
  methods: {
    changeDrawer() {
      this.showDrawer = !this.showDrawer;
    },
  },
};
</script>
