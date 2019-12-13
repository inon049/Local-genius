<template>
  <li class="guide-preview">
    <div class="ratio-card-guide">
      <vue-tiny-slider
        ref="tinySlider"
        :mouse-drag="true"
        :loop="true"
        items="1"
        :nav="false"
        :controlsText="['&#10094;','&#10095;']"
        :rewind="true"
      >
        <div class="ratio-guide-img">
          <img :src="guide.profileImgUrl" @click="showGuideProfile(guide._id)" />
        </div>
        <div class="ratio-guide-img" v-for="(imgUrl,idx) in guide.imgUrls" :key="idx">
          <img :src="imgUrl" @click="showGuideProfile(guide._id)" />
        </div>
      </vue-tiny-slider>
    </div>
    <div class="guide-top-data">
      <div class="guide-name">
        <router-link :to="'/guide/' + guide._id">{{guide.name}}</router-link>
        <div class='guide-langs'>
          (<p v-for="(lang,idx) in guide.langs" :key="idx">{{lang}}</p>)
        </div>
      </div>
      <div class="rating">
        <p>
          <span>★</span>
          {{guide.rate}}
        </p>
      </div>
    </div>
    <div class="guide-short-desc">
      <p>{{guide.desc}}</p>
    </div>
    <div class="guide-city">
      <p>From: {{guide.city}}</p>
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
import VueTinySlider from "vue-tiny-slider";
export default {
  props: {
    guide: Object
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    "vue-tiny-slider": VueTinySlider
  },
  methods: {
    showGuideProfile(id) {
      this.$router.push(`/guide/${id}`);
    },
  
  },

};
</script>

<style>
</style>