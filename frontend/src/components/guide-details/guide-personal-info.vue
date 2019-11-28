<template>
    <section class="guide-container" v-if="guide">
      <div class="personal-title-continer">
        <div class="personal-txt">
          <h1>{{guide.name}}</h1>
          <h3>{{guide.about}}</h3>
        </div>
        <img class="profile-img" :src="guide.profileImgUrl" />
      </div>
      <hr />
      <div class="guide-details-container container">
        <div class="giude-details">
        <div v-for="(ans,question,idx) in guide.questions" :key="idx">
            <h1>{{question}}</h1>
            <h3>{{ans}}</h3>
          <img v-if="guide.imgUrls[idx]" :src="guide.imgUrls[idx++]" />
        </div>
        </div>
         <aside @click="click" class="side-bar" :class="{booked : isClick}">
           <h2>BOOK NOW</h2>
        </aside>
      </div>
    </section>
</template>

<script>
import calander from "./calander";
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
    calander
  }
};
</script>

<style>
</style>
