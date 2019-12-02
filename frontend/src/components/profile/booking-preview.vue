<template>
  <section class="booking-preview">
    <img :src="imgUrl" />
    <h2>
      {{booking.byUser.name}}
<<<<<<< HEAD
      Is intrested in your service
      <span :title="booking.at" >At: {{ booking.at | moment("from") }}</span>
       <span>Attendees:{{booking.attendees}}</span>
=======
      <span>{{ booking.createdAt | moment("calendar") }}</span>
      <span>Booked a tour with: {{booking.attendees}} attendees</span>
      <span :title="booking.at|moment('calendar')">{{ booking.at | moment("from")}}</span>
>>>>>>> origin/inon
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
