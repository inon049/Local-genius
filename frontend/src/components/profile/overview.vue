<template>
  <section class="overview-container">
    <div class="overview-main">
    <div class="overview-header">
    <h1>{{guide.name}}</h1>
    <img :src="guide.profileImgUrl">
    </div>
    <div class="dates-picker">
      <h2>Your Calendar</h2>
      <h5>Select dates to block them</h5>
     <v-date-picker @input="dates" mode="range" :disabled-dates="disabledDates" :value="null" color="red" is-inline />
     <button class="dates-btn" @click="saveDates">Block these dates</button>
     </div>
</div>
    <h2>Upcoming Bookings:</h2>
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
      selectedDates:[],
      guide: {},
      bookings: [],
      reviews: [],
      disabledDates:[]

    };
  },
  methods:{
    dates(dates){
      this.selectedDates = dates
    },
    saveDates(){
      this.disabledDates.push(this.selectedDates)
    }
  },
  async created() {
    let id = this.$store.getters.loggedInUser._id;
    await this.$store.dispatch({ type: "getUserById", _id: id });
    this.guide = this.$store.getters.guide;
    let filterBy = {
      _id: id,
      isGuide: true,
      upcoming: 1
    };
    await this.$store.dispatch({ type: "loadBookings", filterBy });
    this.bookings = this.$store.getters.bookings;
    let reviews = await reviewService.query(filterBy);
    this.reviews = reviews;
    this.bookings.forEach(booking => {
    this.disabledDates.push(new Date(booking.at))
    });
  }
};
</script>

<style>
</style>

 