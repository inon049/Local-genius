<template>
  <section class="guide-details-container mt-10">
    <guide-personal-info :guide="guide"></guide-personal-info>
    <review-panel :filter="filter" :guide="guide" v-if="guide"></review-panel>
  </section>
</template>

<script>
import guidePersonalInfo from "../components/guide-details/guide-personal-info";
import reviewPanel from "@/components/guide-details/review-panel";

export default {
  data(){
    return {
      filter:null
    }
  },
  computed: {
    guide() {
      return this.$store.getters.guide;
    }
  },
  async created() {
    const guideId = this.$route.params._id;
    try {
      await this.$store.dispatch({ type: "getUserById", _id: guideId });
    } catch (err) {
      console.log(err);
    }
    window.scrollTo(0, 0);
    const filterBy = {
      _id: this.guide._id,
      isGuide: true,
      recent: 1
    };
    this.filter = filterBy;
    await this.$store.dispatch({
      type: "loadReviews",
      filterBy
    });
  },
  components: {
    guidePersonalInfo,
    reviewPanel
  }
};
</script>
