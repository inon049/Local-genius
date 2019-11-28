<template>
  <section>
     <h1 v-if="guide">{{guide.name}}</h1>
     <h1>aaa</h1>
     <h2>pp</h2>
     <h3>aaaa</h3>
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
