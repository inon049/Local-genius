<template>
  <section class="summary">
    <h2>Recent Bookings:</h2>
    <booking-carousel :bookings="bookings"></booking-carousel>
    <h2>Recent Reviews:</h2>
    <reviews-carousel :reviews="reviews"></reviews-carousel>
  </section>
</template>

<script>
//SERVICES
import bookingService from "@/services/booking.service";
import reviewService from "@/services/review.service";
//COMPONENTS
import bookingCarousel from "../profile/booking-carousel";
import reviewsCarousel from "../reviews-carousel";
export default {
  components: {
    reviewsCarousel,
    bookingCarousel
  },
  data() {
    return {
      bookings: [],
      reviews: []
    };
  },
  async created() {
    let id = this.$store.getters.loggedInUser._id;
    let filterBy = {
      _id: id,
      isGuide: true,
      recent: 1
    };
    let bookings = await bookingService.query(filterBy);
    this.bookings = bookings;
    let reviews = await reviewService.query(filterBy);
    this.reviews = reviews;
  }
};
</script>

<style>
</style>

 