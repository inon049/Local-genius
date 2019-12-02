<template>
  <div class="booking-panel-container"  :class="{'show-modal' : isOpen}">
    <div class="booking-panel flex">
      <div class="booking-desktop">
        <div class="booking-modal">
          <span class="close-btn" v-if="isOpen" @click="click">&#x2716;</span>
          <h1>Pick a date</h1>
          <calander @datePicked="setDate" :disabledDates="disabledDates" />
        </div>
        </div>
      <div class="booking-price-rate flex">
         <div class="persons flex space-around">
            <label for="persons">
              <h4>How many people?</h4>
            </label>
            <select  v-model="booking.attendees" id="persons">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        <div>
          <div class="guide-price flex align-center">
            <h2>{{guide.price}}&#36;</h2>
            <h4>For my tour</h4>
          </div>
          <div class="booking-rate">
            <p>
              <span>★</span>
              {{guide.rate}}
            </p>
          </div>
        </div>
        <transition enter-active-class="animated zoomIn"><img class="confirm-img" v-if="isBooking" src="../../assets/img/confirm.png">
        </transition>
        <button @click="click" class="modal-btn" ref="bookBtn">Book</button>
        <button class="book-btn" @click="onBook" :class="{booked : isBooking}" ref="bookBtn">Book</button>
      </div>
    </div>
  </div>
</template>

<script>
import calander from "./calander";
export default {
  props: {
    guide: Object
  },
  components: {
    calander
  },
  data() {
    return {
      disabledDates: [],
      booking:{
        byUserId:'',
        toGuideId:'',
        createdAt:'',
        at:'',
        price:'',
        attendees:''
      },
      isOpen: false,
      isBooking : false
    };
  },
  methods: {
    click() {
      this.isOpen = !this.isOpen;
    },
    onBook(){
      this.booking.createdAt = Date.now()
      this.booking.price =  this.guide.price
      this.booking.price = this.booking.attendees * this.booking.price
      this.isBooking = !this.isBooking
      this.$store.dispatch({type: 'saveBooking', booking : JSON.parse(JSON.stringify(this.booking))})
    },
    setDate(date){
      this.booking.at = date
    },

  },
    created(){
      this.booking.toGuideId = this.$route.params._id
      this.booking.byUserId = this.$store.getters.loggedInUser._id;
    }
};
</script>

<style>
</style>