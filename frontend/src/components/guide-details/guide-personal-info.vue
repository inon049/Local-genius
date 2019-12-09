<template>
  <section class="guide-container flex col" v-if="guide">
    <button @click="back" class="back-btn">Back</button>
    <div class="personal-title-container flex space-between">
      <div class="personal-txt flex col">
        <h1>{{guide.name}}</h1>
        <h2>{{guide.desc}}</h2>
        <ul class="guide-interests-list">
          <li
            v-for="(interest,idx) in guide.interests"
            :key="idx"
            class="guide-interest"
            :class="interest"
          >
            <p>{{interest.toUpperCase()}}</p>
            <img
              :src="require('@/assets/img/interests/' + interest + '.png')"
            />
          </li>
        </ul>
      </div>
      <img class="profile-img" :src="guide.profileImgUrl" />
    </div>
    <div class="details-banner">
      <p class="from-p">I'm from: {{guide.city}}</p>
      <p class="langs-p">Languages: <span v-for="(lang,idx) in guide.langs" :key="idx">{{lang}}</span></p>
      <img src="@/assets/img/banner2.jpg">
    </div>
    <div class="flex row">
      <div class="questions-container container flex col">
        <div class="main-quest flex col">
          <h1>TELL US A LITTLE BIT ABOUT YOURSELF</h1>
          <h2>{{guide.about}}</h2>
        </div>
        <div class="guide-details">
          <div v-for="(ans,question,idx) in guide.questions" :key="idx">
            <h1>{{question}}</h1>
            <h3>{{ans}}</h3>
            <img v-if="guide.imgUrls[idx]" :src="guide.imgUrls[idx++]" />
          </div>
        </div>
      </div>
      <bookingPanel :guide="guide"></bookingPanel>
    </div>
  </section>
</template>

<script>
import bookingPanel from "./booking-panel";
export default {
  props: {
    guide: Object
  },
  data() {
    return {};
  },
  components: {
    bookingPanel
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
