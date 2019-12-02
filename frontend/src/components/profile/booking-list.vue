<template>
  <section class="booking-list">
      <book-preview v-for="book in bookings" :key="book.id" :book="book"></book-preview>
  </section>
</template>

<script>
import bookPreview from './booking-preview'
export default {
// props:{
//     bookings:Array
// }
}
</script>

<style>

</style>