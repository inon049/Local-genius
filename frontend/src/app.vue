<template>
  <div id="app">
   <main-header></main-header>
    <section class="main-link">
      <router-view />
    </section>
  </div>
</template>

<script>
import mainHeader from './components/main-header'
export default {
  async created() {
    await this.$store.dispatch({ type: "loadUsers" });
  },
  components:{
    mainHeader
  }
};
</script>

<style >

</style>
