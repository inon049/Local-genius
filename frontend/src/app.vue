<template>
  <div id="app">
    <main-header></main-header>
    <section class="main">
      <router-view />
      <a class="scroll-up" href="#" v-scroll-to="'#app'">
        <img class="arrow-up" src="../src/assets/img/arrow-up.png" />
      </a>
    </section>
    <mobile-nav></mobile-nav>
  </div>
</template>

<script>
import mainHeader from "./components/main-header";
import mobileNav from "./components/mobile-nav";
export default {
  data() {
    return {
      isScroll: false
    };
  },
  async created() {
    if (this.$store.getters.loggedInUser)
      this.$store.dispatch({ type: "createUserSocket" });
    await this.$store.dispatch({ type: "loadUsers" });
    await this.$store.dispatch({ type: "loadCities" });
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    mainHeader,
    mobileNav
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
