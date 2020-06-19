<template>
  <div id="about" itemscope itemtype="http://schema.org/Person">
    <div class="section">
      <div class="section-container">
        <div class="flex-item-flexible flex-basis-30 max-width-35 px-1">
          <h3 class="section-title">{{ about.title }}</h3>
          <div itemprop="description">
            <p v-for="p in about.paragraphs">{{ p }}</p>
          </div>
        </div>
        <div class="flex-item-fixed px-1">
          <img :src="about.image" itemprop="image" />
        </div>
      </div>
    </div>
    <div hidden>
      <div itemprop="name">{{ about.author }}</div>
      <div itemprop="jobTitle">{{ about.jobTitle }}</div>
      <div itemprop="url">{{ url }}</div>
      <div itemprop="knowsAbout">{{ badges }}</div>
      <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
        <div itemprop="postalCode">{{ address.postalCode }}</div>
        <div itemprop="streetAddress">{{ address.street }}</div>
        <div itemprop="postOfficeBoxNumber">{{ address.number }} - {{ address.office }}</div>
        <div itemprop="addressLocality">{{ address.city }}</div>
        <div itemprop="addressRegion">{{ address.state }}</div>
        <div itemprop="addressCountry">{{ address.country }}</div>
        <div itemprop="telephone">{{ whatsApp.text }}</div>
        <div itemprop="productSupported">{{ about.services.join(', ') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    about() {
      return this.$store.state.about;
    },
    badges() {
      return (this.$store.state.badges.map(badge => badge.text) || []).join(', ');
    },
    address() {
      return this.$store.state.address;
    },
    whatsApp() {
      return this.$store.state.whatsApp;
    },
    url() {
      return this.$store.state.url;
    },
  },
};
</script>
