<template>
  <div id="clinic">
    <div class="section">
      <h3 class="section-title">{{ title }}</h3>
      <div class="section-container">
        <img v-for="image in images" class="p-1" :src="image" />
      </div>
      <div class="section-container flex-align-center pt-2">
        <img :src="iconAddress" />
        <div class="font-size-1-5">
          <div class="text-center">{{ address }}</div>
          <div class="text-center">{{ city }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clinic',
  computed: {
    title() {
      return this.$store.state.clinic.title;
    },
    iconAddress() {
      return this.$store.state.clinic.iconAddress;
    },
    images() {
      return this.$store.state.clinic.images;
    },
    address() {
      let street = this.$store.state.address.street;
      let number = this.$store.state.address.number;
      let office = this.$store.state.address.office;
      return `${street}, ${number} - ${office}`;
    },
    city() {
      let city = this.$store.state.address.city;
      let state = this.$store.state.address.state;
      return `${city} - ${state}`;
    },
  },
};
</script>
