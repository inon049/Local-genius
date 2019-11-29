<template>
  <div class="booking-panel-container">
    <div class="booking-panel flex col">
      <h1>Pick a date</h1>
      <calander />
      <div class="booking-price-rate flex space-around">
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
      <div class="persons flex space-around">
      <label for="persons"><h4>How many people?</h4></label>
      <select id="persons">
        <option></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      </div>
    <button @click="click"  class="book-btn" :class="{booked : isClick}">Book</button>
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
   data(){
    return{
      isClick : false
    }
  },
    methods:{
    click(){
      this.isClick = !this.isClick
    }
  },
};
</script>

<style>
</style>