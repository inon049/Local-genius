<template>
  <section class="review-list-container">
    <review-add :guide="guide" @saveReview="saveReview"></review-add>
    <review-list :reviews="reviews"></review-list>
  </section>
</template>

<script>
import reviewService from "@/services/review.service";
import reviewList from "./review-list";
import reviewAdd from "./review-add";

export default {
  data() {
    return {
      filterBy:null
    };
  },
  computed: {
    guide() {
      return this.$store.getters.guide;
    },
    reviews(){
      return this.$store.getters.reviews
    }
  },
  methods: {
    async saveReview(review) {
      var loggedInUser = JSON.parse(
        JSON.stringify(this.$store.getters.loggedInUser)
      );
      review.createdAt = Date.now();
      review.byUserId = loggedInUser._id; 
      review.byGuideId = this.guide._id;
      const newReview = await this.$store.dispatch({
        type: "saveReview",
        review
      });
       await this.$store.dispatch({
      type: "loadReviews",
      filterBy : JSON.parse(JSON.stringify(this.filterBy))
    });
    }
  },
  async created() {
    const filterBy = {
      _id: this.guide._id,
      isGuide: true
    };
    this.filterBy = filterBy
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