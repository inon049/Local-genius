<template>
  <section class="summary">
    <h2>Recent Bookings:</h2>
    <booking-carousel :bookings="bookings"></booking-carousel>
    <h2>Recent Reviews:</h2>
    <reviews-carousel></reviews-carousel>
  </section>
</template>

<script>
//SERVICES
import bookingService from "@/services/booking.service";
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
      bookings:[]
    };
  },
  async created() {
    let id = this.$store.getters.loggedInUser._id
    let bookings = await bookingService.getGuideBookings(id);
    this.bookings=bookings
  }
};
</script>

<style>
</style>

 