<template>
  <section class="reviews-carousel">
    <carousel :perPage="1" :perPageCustom="[[1100, 2], [1400, 4]]">
      <slide v-for="review in reviews" :key="review._id">
        <review-details :review="review"></review-details>
      </slide>
    </carousel>
  </section>
</template>

<script>
// paginationActiveColor
// The fill color of the active pagination dot. Any valid CSS color is accepted.

// Type: String
// Default: #000000
// paginationColor
// The fill color of pagination dots. Any valid CSS color is accepted.

// Type: String
// Default: #efefef

import { Carousel, Slide } from "vue-carousel";
import reviewDetails from "../components/review-details";
export default {
  components: {
    Carousel,
    Slide,
    reviewDetails
  },
  data() {
    return {
      reviews: [
        {
          byUserName: "shimi",
          createdAt: 1575202911766,
          title: "Had a greate time",
          txt: "we went somewhere and all that bullshit",
          rate: 5
        },
        {
          byUserName: "puki",
          createdAt: 1575202911766,
          title: "Had a greate time",
          txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates iure aliquam quod, iusto eius maiores.",
          rate: 4
        },
        {
          byUserName: "muki",
          createdAt: 1575202911766,
          title: "This Guys sucks",
          txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates iure aliquam quod, iusto eius maiores.",
          rate: 1
        }
      ]
    };
  }
  //   props: {
  //   reviews: Array,
  //   }
};
</script>
