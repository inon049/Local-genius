<template>
  <section class="details-bar-container">
    <div class="details-bar">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods:{
    select(cmp){
      this.$emit('select',cmp)
    }
  }
};
</script>

<style>
</style>