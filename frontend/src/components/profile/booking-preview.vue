<template>
  <section class="booking-preview">
    <img :src="imgUrl" />
    <h2>
      {{booking.byUser.name}}
      <span>{{ booking.createdAt | moment("calendar") }}</span>
      <span>Booked a tour with: {{booking.attendees}} attendees</span>
      <span :title="booking.at|moment('calendar')">{{ booking.at | moment("from")}}</span>
    </h2>
    <button>Send messege</button>
  </section>
</template>

<script>
export default {
  props: {
    booking: Object
  },
  computed: {
    imgUrl() {
      let imgUrl = this.booking.byUser.imgUrl
        ? this.booking.byUser.imgUrl
        : "https://srpc.ukzn.ac.za/wp-content/uploads/2018/05/profile-placeholder.png";
      return imgUrl;
    }
  }

};
</script>
