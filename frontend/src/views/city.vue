<template>
  <section>
    <div class="city-header-img">
      <h2 class="city-name" v-if="currCity">{{currCity.name}}'s Guides</h2>
    </div>
    <guide-list :guides="guides"></guide-list>
  </section>
</template>

<script>
import guideList from "@/components/city/guide-list";
export default {
  data() {
    return {
      currCity: "",
      guides: []
    };
  },
  computed: {},
  async created() {
    const cityId = this.$route.params._id;
    try {
      this.currCity = await this.$store.dispatch({
        type: "getCityById",
        cityId
      });
      //how can i avoid this?
      await this.$store.dispatch("loadUsers");
      this.guides = this.$store.getters.guides;
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    guideList,
  }
};
</script>

<style>
</style>