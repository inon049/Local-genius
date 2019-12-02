<template>
  <div id="app">
   <main-header></main-header>
    <section class="main">
      <router-view />
    </section>
    <mobile-nav></mobile-nav>
  </div>
</template>

<script>
import mainHeader from './components/main-header'
import mobileNav from './components/mobile-nav'
export default {
 async created() {
     await this.$store.dispatch({ type: "loadUsers" });
     await this.$store.dispatch({ type: "loadCities" });
  },
  components:{
    mainHeader,
    mobileNav
  }
};
</script>
