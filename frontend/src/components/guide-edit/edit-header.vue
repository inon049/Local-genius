<template>
  <div class="edit-header-container">
    <button  @click="start" class="start-btn">Let's go</button>
    <video class="video" autoplay loop muted playsinline>
      <source
        src="https://a0.muscache.com/v/76/07/76078ccb-c33d-4d25-aa9e-4fc4c7886633/bdcbe89cac105172b0faee8a2a064c76_8000k_1.mp4"
        type="video/mp4"
      />
    </video>
    <div class="video-header">
      <h1>Do what you love</h1>
      <h3>An activity that goes beyond the typical tour or class, designed and led by locals all over the world. Show off your city, craft, cause, or culture by show us what you love. Turn your passion into profit</h3>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$emit("start");
    }
  }
};
</script>

<style>
</style>