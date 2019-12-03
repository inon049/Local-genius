<template>
  <ul>
    <li v-for="review in reviews" :key="review._id">{{review.txt}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    reviews: Array
  }
};
</script>

<style>
</style>