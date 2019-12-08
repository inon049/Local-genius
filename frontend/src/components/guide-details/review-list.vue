<template>
  <div class="review-preview-container">
    <div class="reviews-header">
      <h2>Reviews <span>({{reviews.length}})</span>:</h2>
    </div>
    <reviewDetails @removeReview="removeReview" :loggedInUser="loggedInUser" v-for="(review,idx) in reviews" :key="idx" :review="review"></reviewDetails>
  </div>
</template>

<script>
import reviewDetails from "../../components/profile/review-details";
export default {
  props: {
    reviews: Array,
    loggedInUser:{
      type: Object,
    } 
  },
  methods:{
    removeReview(reviewId) {
      this.$emit('removeReview',reviewId)
    }
  },
  components: {
    reviewDetails
  },
  created() {    
  },
};
</script>

<style>
</style>