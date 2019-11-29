<template>
    <section class="guide-container flex col" v-if="guide">
      <div class="personal-title-continer flex space-between">
        <div class="personal-txt flex col">
          <h1>{{guide.name}}</h1>
          <h2>{{guide.desc}}</h2>
        </div>
        <img class="profile-img" :src="guide.profileImgUrl" />
      </div>
        <div class="flex row">
      <div class="container flex col">
        <div class="main-quest flex col">
        <h1>TELL US A LITTLE BIT ABOUT YOURSELF</h1>
        <h2>{{guide.about}}</h2>
        </div>
        <div class="giude-details">
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

import bookingPanel from './booking-panel'
export default {
  props: {
    guide: Object
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
  components: {

    bookingPanel
  }
};
</script>

<style>
</style>
