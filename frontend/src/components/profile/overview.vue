<template>
  <section class="overview-container">
    <div class="overview-main">
      <div class="overview-header">
        <h1>{{guide.name}}</h1>
        <img :src="guide.profileImgUrl"/>
      </div>
      <div class="dates-picker">
        <h2>Your Calendar</h2>
        <h5>Select dates to block them</h5>
        <div v-if="isLoading">
        <img src="@/assets/img/loading.svg" alt="loading" />
        </div>
        <v-date-picker v-else
          :attributes="attrs"
          @input="selectDates"
          mode="range"
          :disabled-dates="disabledDates"
          :value="null"
          color="red"
          is-inline
        />
        <button class="dates-btn" @click="saveDates">Block these dates</button>
      </div>
    </div>
  <h2 v-if="notifications" class="overview-headers">Notifications</h2>
  <div class="overview-notifs-list">
    <notif-preview v-for="(notification,idx) in notifications" @click.native="notifClicked(notification)" :key="idx" :notification="notification"></notif-preview>
  </div>
    <h2 class="overview-headers">Upcoming Bookings:</h2>
    <div class="overview-booking-list">
      <booking-preview v-for="(booking,idx) in bookings" :key="idx" :booking="booking"></booking-preview>
    </div>
    <h2 class="overview-headers">Recent Reviews:</h2>
    <div class="review-details-list">
      <review-details
        :loggedInUser="loggedInUser"
        v-for="(review,idx) in reviews"
        :key="idx"
        :review="review"
      ></review-details>
    </div>
  </section>
</template>

<script>
//SERVICES
import bookingService from "@/services/booking.service";
import reviewService from "@/services/review.service";
//COMPONENTS
import reviewDetails from "../profile/review-details";
import bookingPreview from "../profile/booking-preview";
import notifPreview from "../profile/notif-preview";

export default {
  components: {
    reviewDetails,
    bookingPreview,
    notifPreview
  },
  data() {
    return {
      isLoading : false,
      attrs: [
        {
          bar: true,
          popover: {
            label: "Tour!"
          },
          dates: []
        }
      ],
      selectedDates: [],
      guide: {},
      bookings: [],
      reviews: [],
      disabledDates: [],
    };
  },
  methods:{
    selectDates(selected) {
      this.selectedDates = selected;
    },
    dates(dates){
      this.selectedDates = dates
    },
    saveDates(){
      this.disabledDates.push(this.selectedDates)
    },
    notifClicked(notif){
      notif=JSON.parse(JSON.stringify(notif))
      notif.isRead=true
      this.$store.dispatch({type:'updateNotif',notif})
      // if(notif.type==='msg')
    }
  },
  computed: {
     notifications(){
   return this.$store.getters.userNotifs
 },
    loggedInUser() {
      const loggedInUser = this.$store.getters.loggedInUser;
      if (loggedInUser) return this.$store.getters.loggedInUser;
      else return { _id: "" };
    },
  },
  async created() {
    this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    let id = this.$store.getters.loggedInUser._id;
    await this.$store.dispatch({ type: "getUserById", _id: id });
    this.guide = this.$store.getters.guide;
    let filterBy = {
      _id: id,
      isGuide: true,
      recent: 1
    };
    await this.$store.dispatch({ type: "loadBookings", filterBy });
    this.bookings = this.$store.getters.bookings;
    this.bookings.forEach(booking => {
      this.attrs[0].dates.push(new Date(booking.at));
    });
    let reviews = await reviewService.query(filterBy);
    this.reviews = reviews;
  },

};
</script>

<style>
</style>

 