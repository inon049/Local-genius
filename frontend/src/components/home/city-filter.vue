<template>
  <section class="city-filter">
    <input @change="goToCity" list="cities" type="text" placeholder="Where do you wanna go?" />
    <datalist id="cities">
      <option style="width:100%" v-for="city in cities" :key="city._id" :value="city.name"></option>
    </datalist>
    <button class="btn">Search</button>
  </section>
</template>

<script>
export default {
  props: {
    cities: Array
  },

  methods: {
    goToCity(ev) {
      let idx = this.cities.findIndex(city=>{
        return city.name===ev.target.value
      })
      this.$router.push(`/city/${this.cities[idx]._id}`)
    }
  }
};
</script>
