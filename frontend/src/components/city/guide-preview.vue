<template>
  <li class="guide-preview">
    <div class="ratio-card-guide">
      <img :src="guide.profileImgUrl" />
    </div>
    <div class="guide-name">
      <h3>{{guide.name}}</h3>
      <p>Malasian,Japanese</p>
    </div>
    <ul class="guide-interests-list">
      <li v-for="(interest,idx) in guide.interests" :key="idx" class="guide-interest" :class="interest">
        {{interest}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    guide: Object
  }
};
</script>

<style>
</style>