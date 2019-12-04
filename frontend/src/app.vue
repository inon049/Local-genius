<template>
  <div id="app">
   <main-header :class="{scroll : isScroll}" @scroll.native="handleScroll"></main-header>
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
  data(){
    return{
      isScroll : false
    }
  },
 async created() {
   this.$store.dispatch({type:'createUserSocket'})
     await this.$store.dispatch({ type: "loadUsers" });
     await this.$store.dispatch({ type: "loadCities" });
    window.addEventListener('scroll', this.handleScroll);

  },
    methods: {
    handleScroll (event) {
      this.isScroll = true;
    }
  },
  components:{
    mainHeader,
    mobileNav
  },
   destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};


</script>
