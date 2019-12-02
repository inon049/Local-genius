<template>
  <section class="guide-details-container mt-10">
    <guide-personal-info :guide="guide"></guide-personal-info>
  </section>
</template>

<script>
import guidePersonalInfo from '../components/guide-details/guide-personal-info'
export default {
  computed:{
      guide(){
         return this.$store.getters.guide;
      }
  },
  async created() {
    const guideId = this.$route.params._id;
    try {
      await this.$store.dispatch({type: "getUserById", _id : guideId});
    } catch (err) {
      console.log(err);
    }
  },
  components:{
    guidePersonalInfo
  }
};
</script>
