<template>
  <section class="city-preview flex center">
      <h2 class="city-prev-title">{{city.name}}</h2>
      <img :src="city.imgUrl" class="ratio-card" />
  </section>
</template>

<script>
export default {
  props: {
    city: Object
  }
};
</script>