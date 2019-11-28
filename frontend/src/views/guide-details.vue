<template>
  <section>
     <h1 v-if="guide">{{guide.name}}</h1>
  </section>
</template>

<script>
export default {
  computed:{
      guide(){
         return this.$store.getters.guide;
      }
  },
  async created() {
    const guideId = this.$route.params._id;
    try {
      await this.$store.dispatch({type: "getGuideById", guideId});
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
