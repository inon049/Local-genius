<template>
  <div class="review-preview-container">
    <reviewDetails v-for="(review,idx) in reviews" :key="idx" :review="review"></reviewDetails>
  </div>
</template>

<script>
import reviewDetails from "../../components/profile/review-details";
export default {
  props: {
    reviews: Array
  },
  components: {
    reviewDetails
  },

};
</script>

<style>
</style>