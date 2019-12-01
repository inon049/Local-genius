<template>
  <div class="booking-panel-container"  :class="{'show-modal' : isOpen}">
    <div class="booking-panel flex">
      <div class="booking-desktop">
        <div class="booking-modal">
          <span class="close-btn" v-if="isOpen" @click="click">&#x2716;</span>
          <h1>Pick a date</h1>
          <calander />
        </div>
        </div>
      <div class="booking-price-rate flex">
         <div class="persons flex space-around">
            <label for="persons">
              <h4>How many people?</h4>
            </label>
            <select id="persons">
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
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
      isOpen: false,
      isBooking : false
    };
  },
  methods: {
    click() {
      this.isOpen = !this.isOpen;
      console.log('pp');
    },
    onBook(){
      this.isBooking = !this.isBooking
    }
  }
};
</script>

<style>
</style>