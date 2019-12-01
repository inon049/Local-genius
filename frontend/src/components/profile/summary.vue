<template>
  <section class="summary">
      <h2>
          My bookings:
      </h2>
      <booking-list></booking-list>
       <h2>
          My Reviews:
      </h2>
      <reviews-carousel></reviews-carousel>
  </section>
</template>

<script>
import bookingList from "../profile/booking-list";
import reviewsCarousel from "../reviews-carousel";
export default {
  components: {
    reviewsCarousel,
    bookingList
  }
};

</script>

<style>
</style>

 