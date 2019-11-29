<template>
  <div class="booking-panel-container">
    <div class="booking-panel">
      <h1>Pick a date</h1>
      <calander />
      <h2>PRICE: {{guide.price}} </h2>
    </div>
  </div>
</template>

<script>
import calander from "./calander";
export default {
    props:{
        guide : Object
    },
  components: {
    calander
  }
};
</script>

<style>
</style>