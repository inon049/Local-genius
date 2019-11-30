<template>
  <div class="booking-panel-container"  :class="{'show-modal' : isBooking}">
    <div class="booking-panel flex">
      <div class="booking-desktop">
        <div class="booking-modal">
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
        <button @click="click" class="book-btn">Book</button>
      </div>
    </div>
  </div>
</template>

<script>
import calander from "./calander";
import bookingPicker from "./booking-picker";
export default {
  props: {
    guide: Object
  },
  components: {
    bookingPicker,
    calander
  },
  data() {
    return {
      isBooking: false
    };
  },
  methods: {
    click() {
      this.isBooking = !this.isBooking;
      console.log("pp");
    }
  }
};
</script>

<style>
</style>