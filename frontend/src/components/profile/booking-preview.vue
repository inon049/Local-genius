<template>
  <section class="booking-preview">
    <div class="flex space-between">
    <h3>Booked by {{booking.byUser.name}} </h3>
    <p class="date">{{ booking.createdAt | moment("calendar") }}</p>
    </div>
    <div class="flex space-between">
    <img :src="imgUrl"/>
    <div class="flex col space-around">
      <ul>
      <li>For {{booking.attendees}} attendees</li>
      <li :title="booking.at|moment('calendar')">The tour is {{ booking.at | moment("from")}}</li>
      <li>({{date}})</li>
      </ul>
    <button>Send messege</button>
      </div>
      </div>
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
    },
    date(){
      var date = new Date(this.booking.at)
     return date.toLocaleDateString()
    }
  },


};
</script>
