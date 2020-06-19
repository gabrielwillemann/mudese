<template>
  <div class="bg-black text-white">
    <div class="section">
      <div class="section-container line-height-1-6">
        <div class="pl-0-5 py-1 col-md-3 lg-visible border-sizing">
          <img src="~@/assets/img/mudese-logo.png" />
        </div>
        <div class="pl-0-5 py-1 col-sm-12 col-md-3 border-sizing">
          <div class="font-size-1-2">{{ navigation }}</div>
          <div class=" mt-0-5">
            <div v-for="option in menuOptions">
              <a :href="option.link" class="text-gray text-decoration-none">{{ option.text }}</a>
            </div>
          </div>
        </div>
        <div class="pl-0-5 py-1 col-sm-12 col-md-3 border-sizing">
          <div class="font-size-1-2">{{ links }}</div>
          <div class="text-gray mt-0-5">
            <div v-for="item in linksList">
              <a class="text-gray text-decoration-none" :href="item.link" target="_blank">
                <img height="15" width="15" :src="item.image" />
                <span class="pl-0-5">{{ item.text }}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="pl-0-5 py-1 col-sm-12 col-md-3 border-sizing">
          <div class="font-size-1-2">{{ address }}</div>
          <div class="text-gray mt-0-5">
            <div>{{ street }}</div>
            <div>{{ number }}</div>
            <div>{{ city }}</div>
            <div>{{ postalCode }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    menuOptions() {
      return [this.$store.state.home, ...this.$store.state.menuOptions];
    },
    navigation() {
      return this.$store.state.footer.navigation;
    },
    links() {
      return this.$store.state.footer.links;
    },
    linksList() {
      return [
        this.$store.state.whatsApp,
        this.$store.state.instagram,
        this.$store.state.facebook,
        this.$store.state.youtube,
        this.$store.state.lattes,
      ];
    },
    address() {
      return this.$store.state.footer.address;
    },
    street() {
      return this.$store.state.address.street;
    },
    number() {
      let number = this.$store.state.address.number;
      let office = this.$store.state.address.office;
      return `N° ${number} - ${office}`;
    },
    city() {
      let city = this.$store.state.address.city;
      let state = this.$store.state.address.state;
      return `${city} - ${state}`;
    },
    postalCode() {
      return this.$store.state.address.postalCode;
    },
  },
};
</script>

<style></style>
