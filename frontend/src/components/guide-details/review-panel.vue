<template>
  <section>
    <review-add @saveReview="saveReview"></review-add>
    <h2>reviews:</h2>
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
      reviews: []
    };
  },
  computed: {
    guide() {
      return this.$store.getters.guide;
    }
  },
  methods: {
    async saveReview(review) {      
      var loggedInUser = JSON.parse(
        JSON.stringify(this.$store.getters.loggedInUser)
      );
      review.createdAt = Date.now();
      review.byUserId = loggedInUser._id; //LATER THIS WILL HAPPEN IN THE BACKEND
      review.byGuideId = this.guide._id;
      const newReview = await this.$store.dispatch({
        type: "saveReview",
        review
      });
    }
  },
  async created() {
    const filterBy = {
      _id: this.guide._id,
      isGuide: true
    };
    const reviews = await this.$store.dispatch({
      type: "loadReviews",
      filterBy
    });
    this.reviews = reviews;
  },
  components: {
    reviewList,
    reviewAdd
  }
};
</script>

<style>
</style>