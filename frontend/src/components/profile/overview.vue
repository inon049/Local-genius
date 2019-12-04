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
     <v-date-picker :attributes="attrs" @input="dates" mode="range" :disabled-dates="disabledDates" :value="null" color="red" is-inline />
     <button class="dates-btn" @click="saveDates">Block these dates</button>
     </div>
</div>
    <h2 class="overview-headers">Upcoming Bookings:</h2>
    <booking-carousel :bookings="bookings"></booking-carousel>
    <h2 class="overview-headers">Recent Reviews:</h2>
     <review-details v-for="(review,idx) in reviews" :key="idx" :review="review"></review-details>
  </section>
</template>

<script>
//SERVICES
import bookingService from "@/services/booking.service";
import reviewService from "@/services/review.service";
//COMPONENTS
import bookingCarousel from "../profile/booking-carousel";
import reviewDetails from "../profile/review-details";

export default {
  components: {
    bookingCarousel,
    reviewDetails
  },
  data() {
    return {
        attrs: [
        {
          key: 'today',
          dot: true,
          dates: [new Date(2019, 11, 5)]
        },
      ],
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
      // recent: 1
    };
    await this.$store.dispatch({ type: "loadBookings", filterBy });
    this.bookings = this.$store.getters.bookings;
    this.bookings.forEach(booking => {
    this.attrs[0].dates.push(new Date(booking.at))
    });
    let reviews = await reviewService.query(filterBy);
    this.reviews = reviews;
    console.log(this.attrs[0]);
    // this.attrs[0].dates = this.disabledDates
  }
};
</script>

<style>
</style>

 