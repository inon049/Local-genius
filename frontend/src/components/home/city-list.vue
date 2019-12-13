<template>
  <section class="city-list">
    <section class="flex-list">
      <city-preview v-for="city in citiesToWhow" :key="city._id" :city="city"></city-preview>
    </section>

  </section>
</template>


<script>
//COMPONENTS
import cityPreview from "./city-preview";
export default {
  props: {
    cities: Array
  },
  components: {
    cityPreview,
  },
  computed: {
    citiesToWhow() {
        return JSON.parse(JSON.stringify(this.cities)).splice(0, 8);
    }
  },
};
</script>