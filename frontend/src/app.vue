<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/guide/:_id">Guide</router-link>
    </div>
    <section class="container">
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch({ type: "loadUsers" });
  }
};
</script>
