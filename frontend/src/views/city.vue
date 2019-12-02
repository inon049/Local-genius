<template>
  <section class="mt-10">
    <div class="city-header-img city-header-container">
      <h2 class="city-name" v-if="currCity">{{currCity.name}}'s Guides</h2>
      <div class="filter-panel">
        <h4>
          Find your guides, get their insight on the city, and enjoy {{currCity.name}}
          like it was your second home!
        </h4>
        <button @click="toggleFilter">Find the guide for me</button>
      </div>
      <guide-filter @filtered="setFilter" :isOpen="isFilterOpen">
        <button @click="toggleFilter" class="filter-close-btn">x</button>
      </guide-filter>
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
      filterBy: null,
      isFilterOpen: false
    };
  },
  methods: {
    setFilter(filterBy) {
      //later maybe server side
      //now if any of the selections exists it shows, can switch to every
      this.filterBy = filterBy;
      this.isFilterOpen = false;
    },
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
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