<template>
  <div class="header">
    <HeaderMobile />
    <HeaderDesktop />
  </div>
</template>

<script>
import HeaderMobile from './HeaderMobile.vue';
import HeaderDesktop from './HeaderDesktop.vue';

export default {
  name: 'Header',
  components: { HeaderMobile, HeaderDesktop },
};
</script>
