<template>
  <section>
      {{guide}}
  </section>
</template>

<script>
export default {
  computed:{
      guide(){
         return  this.$store.getters.guide;
      }
  },
  async created() {
    const guideId = this.$route.params._id;
    try {
      const guide  = await this.$store.dispatch({
        type: "getGuideById",
        guideId
      });
      this.guide = guide;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
