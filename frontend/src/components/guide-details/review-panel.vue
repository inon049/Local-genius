<template>
  <section class="review-list-container">
    <review-add
      v-if="loggedInUser.name"
      :loggedInUser="loggedInUser"
      :guide="guide"
      @saveReview="saveReview"
    ></review-add>
    <review-list @removeReview="removeReview" :loggedInUser="loggedInUser" :reviews="reviews"></review-list>
  </section>
</template>

<script>
import reviewService from "@/services/review.service";
import reviewList from "./review-list";
import reviewAdd from "./review-add";

export default {
  data() {
    return {
      filterBy: null
    };
  },
  computed: {
    guide() {
      return this.$store.getters.guide;
    },
    reviews() {
      if (!this.$store.getters.reviews) return []
      return this.$store.getters.reviews;
    },
    loggedInUser() {
      const loggedInUser = this.$store.getters.loggedInUser;
      if (loggedInUser) return this.$store.getters.loggedInUser;
      else return { _id: "" };
    }
  },
  methods: {
    async saveReview(review) {
      delete review.byUser;
      delete review.createdAt;
      review.createdAt = Date.now();
      review.byUserId = this.loggedInUser._id;
      review.aboutGuideId = this.guide._id;
      const newReview = await this.$store.dispatch({
        type: "saveReview",
        review
      });
      await this.$store.dispatch({
        type: "loadReviews",
        filterBy: JSON.parse(JSON.stringify(this.filterBy))
      });
    },
    async removeReview(reviewId) {
      await this.$store.dispatch({
        type: "removeReview",
        reviewId
      });
      await this.$store.dispatch({
        type: "loadReviews",
        filterBy: JSON.parse(JSON.stringify(this.filterBy))
      });
    }
  },
  async created() {
    const filterBy = {
      _id: this.guide._id,
      isGuide: true,
      recent: 1
    };
    this.filterBy = filterBy;
    await this.$store.dispatch({
      type: "loadReviews",
      filterBy
    });
  },
  components: {
    reviewList,
    reviewAdd
  }
};
</script>

<style>
</style>