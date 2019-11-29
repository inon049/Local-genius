<template>
  <section>
    <div class="city-header-img city-header-container">
      <h2 class="city-name" v-if="currCity">{{currCity.name}}'s Guides</h2>
      <guide-filter @filtered="setFilter"></guide-filter>
    </div>
    <guide-list :guides="guidesToShow"></guide-list>
  </section>
</template>

<script>
import guideList from "@/components/city/guide-list";
import guideFilter from "@/components/city/guide-filter";
export default {
  data() {
    return {
      currCity: "",
      guides: [],
      filterBy: null
    };
  },
  methods: {
    setFilter(filterBy) {
      //later maybe server side
      //now if any of the selections exists it shoes, can switch to every
      this.filterBy = filterBy;
    }
  },
  computed: {
    guidesToShow() {
      if (!this.filterBy || this.filterBy.interests.length === 0)
        return this.guides;
      else {
        const filteredGuides = this.guides.filter(guide => {
          const guides = guide.interests.some(
            interest => this.filterBy.interests.indexOf(interest) !== -1
          );
          return guides;
        });
        return filteredGuides;
      }
    }
  },
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
    guideFilter
  }
};
</script>

<style>
</style>