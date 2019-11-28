<template>
  <section v-if="guide">
      <div class="personal-title-continer">
      <h1>{{guide.name}}</h1>
      <h3>{{guide.desc}}</h3>
    <img class="profile-img" :src="guide.profileImgUrl" />
    </div>
    <div class="guide-details" >
      <div v-for="(ans,question,idx) in guide.questions" :key="idx">
        <h1>{{question}}</h1>
        <h3>{{ans}}</h3>
        <img :src="guide.imgUrls[idx++]"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    guide: Object
  },

};
</script>

<style>

</style>