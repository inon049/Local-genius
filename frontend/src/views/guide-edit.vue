<template>
  <div class="edit-guide-container">
    <h1>Submit your profile</h1>
      <detailsBar/>
      <router-view/>
  </div>
</template>

<script>
import detailsBar from "../components/guide-edit/details-bar";
export default {
  components: {
    detailsBar
  },
  created(){
    console.log('AAA');
  }
};
</script>

<style>
</style>