<template>
  <section class="booking-carousel">
    <carousel :perPage="1" :perPageCustom="[[1100, 2], [1400, 3]]">
      <slide v-for="booking in bookings" :key="booking.id">
        <booking-preview  :booking="booking"></booking-preview>
      </slide>
    </carousel>
  </section>
</template>
<script>
import bookingPreview from './booking-preview'
export default {
  components:{
    bookingPreview
  },
props:{
    bookings:Array
}
}
</script>
