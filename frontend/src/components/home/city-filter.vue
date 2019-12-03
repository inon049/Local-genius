<template>
  <section class="city-filter">
    <input list="cities" type="text" placeholder="Where do you wanna go?" />
    <datalist id="cities">
      <option v-for="city in cities" :key="city.id" :value="city.name"></option>
    </datalist>
  </section>
</template>

<script>
export default {
  props: {
    cities: Array
  }
};
</script>
