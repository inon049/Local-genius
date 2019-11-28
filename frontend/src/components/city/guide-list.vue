<template>
  <section class="guide-list-container">
    <ul class="guide-list guide-list-grid guides-container">
      <guide-preview v-for="guide in guides" :key="guide.id" :guide="guide"></guide-preview>
    </ul>
  </section>
</template>

<script>
import guidePreview from "@/components/city/guide-preview";

export default {
  props: {
    guides: Array
  },
  components: {
    guidePreview
  }
};
</script>

<style>
</style>