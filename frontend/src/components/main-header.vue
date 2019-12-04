<template>
  <div class="main-header">
    <h1 class="logo">LOCAL GENIUS</h1>
    <button v-if="location" class="back-btn">Back</button>
    <div class="nav-bar" id="nav">
      <router-link to="/">Home</router-link>
      <router-link v-if="user" to="/profile/summary">Profile</router-link>
      <router-link v-else to="/login">Login</router-link>
      <!-- <button v-else @click="logout">Logout</button> -->
    </div>
  </div>
</template>

<script>
import { eventBus } from "../services/event.bus.service";

export default {
  data() {
    return {
      isBooked: false,
      params: ""
    };
  },
  computed: {
    location() {
      if (this.params === "/guide/") return true;
      else return false;
    },
    user() {
      return this.$store.getters.loggedInUser;
    }
  },
  methods: {
    click() {
      this.isBooked = false;
    },
    logout() {
      this.$store.dispatch({ type: "logout" });
    }
  },
  created() {
    eventBus.$on("book", () => {
      this.isBooked = true;
    });
  },
  watch: {
    $route(to, from) {
      console.log("watch", to, from);
      this.params = to.path;
    }
  }
};
</script>
