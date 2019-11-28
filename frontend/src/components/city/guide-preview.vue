<template>
  <li class="guide-preview">
    <div class="ratio-card-guide">
      <img :src="guide.profileImgUrl" />
    </div>
    <div class="guide-top-data">
      <div class="guide-name">
        <router-link :to="'/guide/' + guide._id">{{guide.name}}</router-link>(
        <p v-for="(lang,idx) in guide.langs" :key="idx">{{lang}}</p>)
      </div>
      <div class="rating"></div>
    </div>
    <div class="guide-short-desc">
      <p>"{{guide.desc}}"</p>
    </div>
    <ul class="guide-interests-list">
      <li
        v-for="(interest,idx) in guide.interests"
        :key="idx"
        class="guide-interest"
        :class="interest"
      >
        {{interest.toUpperCase()}}
        <img
          :src="require('@/assets/img/interests/' + interest + '.png')"
        />
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    guide: Object
  },
  computed: {
    currIcon() {}
  }
};
</script>

<style>
</style>