<template>
  <section class="booking-carousel">
    <carousel paginationActiveColor="#a0aec0" :perPage="1" :perPageCustom="[[850, 2], [1300, 3]]">
      <slide v-for="booking in bookings" :key="booking.id">
        <booking-preview :booking="booking"></booking-preview>
      </slide>
    </carousel>
  </section>
</template>
<script>
import bookingPreview from "./booking-preview";
export default {
  components: {
    bookingPreview
  },
  props: {
    bookings: Array
  },

};
</script>
<style scoped lang="scss">
.VueCarousel-pagination {
  position: absolute;
  width: 100%;
  bottom: 65px;
  text-align: center;
}
</style>
