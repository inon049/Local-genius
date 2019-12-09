<template>
  <div class="booking-panel-container" :class="{'show-modal' : isOpen}">
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
            <h4  id="book" class="persons-header">How many people?</h4>
          </label>
          <div>
            <el-radio-group text-color="black" fill="rgba(255, 90, 95, 0.23)" v-model="booking.attendees" size="medium">
              <el-radio-button  v-for="(num,idx) in guide.attendees" :key="idx" :label="num"></el-radio-button>
            </el-radio-group>
          </div>
         
        </div>
        <div class="guide-price-rate">
          <div class="guide-price flex align-center">
            <h2>{{price}}&#36;</h2>
            <h4>For my tour</h4>
          </div>
          <div class="booking-rate">
              <h2>★</h2>
            <h3>
              {{guide.rate}}
            </h3>
          </div>
        </div>
          <img class="loading-booking" v-if="isLoading" src="../../assets/img/loading.svg">
        <transition enter-active-class="animated zoomIn">
          <img class="confirm-img" v-if="isBooking" src="../../assets/img/confirm.png" />
        </transition>
        <button @click="click" class="modal-btn" ref="bookBtn">Book</button>
         <button class="book-btn" @click="onBook" :class="{booked : isBooking}" ref="bookBtn"><a class="scroll" href="#" v-scroll-to="'#book'"></a>Book</button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../services/event.bus.service";
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
      booking: {
        byUserId: "",
        toGuideId: "",
        createdAt: "",
        at: "",
        price: "",
        attendees: 1
      },
      isOpen: false,
      isBooking: false,
      isLoading: false
    };
  },
  computed:{
    price(){
      return this.guide.price * this.booking.attendees 
    }
  },
  methods: {
    click() {
      this.isOpen = !this.isOpen;
      this.isBooking = false
    },
    onBook() {
      this.booking.createdAt = Date.now();
      this.booking.price = this.guide.price;
      this.booking.price = this.booking.attendees * this.booking.price;
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.isBooking = !this.isBooking
        if(this.$refs.bookBtn.innerText === 'Booked!'){
          this.$refs.bookBtn.innerText = 'Book';
        }else  this.$refs.bookBtn.innerText = 'Booked!';
      }, 1000);
      eventBus.$emit("book");
      this.$store.dispatch({
        type: "saveBooking",
        booking: JSON.parse(JSON.stringify(this.booking))
      });
    },
    setDate(date) {
      this.booking.at = date;
    }
  },
  created() {
    this.booking.toGuideId = this.$route.params._id;
    if(this.$store.getters.loggedInUser)
    this.booking.byUserId = this.$store.getters.loggedInUser._id;
    console.log(this.booking.byUserId);
  }
};
</script>

<style>
</style>