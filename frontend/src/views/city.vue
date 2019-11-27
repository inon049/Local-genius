<template>
  <section>
    <h2 v-if="currCity">{{currCity.name}}'s Guides</h2>
    <ul>
      <li v-for="guide in guides" :key="guide.id">{{guide.name}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currCity: "",
      guides: []
    };
  },
  async created() {
    const cityId = this.$route.params._id;
    try {
      const currCity = await this.$store.dispatch({
        type: "getCityById",
        cityId
      });
      this.currCity = currCity;
    } catch (err) {
      console.log(err);
    }
    this.guides = this.$store.getters.guides;
  }
};
</script>
