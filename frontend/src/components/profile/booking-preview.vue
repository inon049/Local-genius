<template>
  <section class="booking-preview">
    <div class="booking-top flex space-between">
    <h3>Booked by {{booking.byUser.name}} </h3>
    <p class="date">{{ booking.createdAt | moment("calendar") }}</p>
    </div>
    <div class="booking-details flex">
      <div class="booking-img">
    <img :src="imgUrl"/>
      </div>
    <div class="booking-info flex">
      <ul>
      <li>For {{booking.attendees}} attendees</li>
      <li :title="booking.at|moment('calendar')">The tour is {{ booking.at | moment("from")}}</li>
      <li>({{date}})</li>
      </ul>
    <button @click="goToMsg">Send message</button>
      </div>
      </div>
  </section>
</template>

<script>
import {eventBus} from '../../services/event.bus.service'
export default {
  props: {
    booking: Object
  },
  methods:{
    goToMsg(){
    eventBus.$emit('goMsg')
    }
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
    },
  },

};
</script>
