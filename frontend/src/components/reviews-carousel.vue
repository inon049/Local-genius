<template>
  <section class="reviews-carousel">
    <carousel paginationActiveColor="#a0aec0" :perPage="1" :perPageCustom="[[850, 2], [1100, 3]]">
      <slide v-for="review in reviews" :key="review._id">
        <review-details :review="review"></review-details>
      </slide>
    </carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import reviewDetails from "../components/review-details";
export default {
  components: {
    Carousel,
    Slide,
    reviewDetails
  },

  props: {
    reviews: Array
  }
};
</script>
