<template>
  <section class="guide-details-container mt-10">
    <guide-personal-info :guide="guide"></guide-personal-info>
    <review-panel :guide="guide" v-if="guide"></review-panel>
  </section>
</template>

<script>
import guidePersonalInfo from "../components/guide-details/guide-personal-info";
import reviewPanel from "@/components/guide-details/review-panel";

export default {
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
  },
  components: {
    guidePersonalInfo,
    reviewPanel
  }
};
</script>
