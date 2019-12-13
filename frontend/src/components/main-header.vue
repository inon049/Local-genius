<template>
  <div class="main-header">
    <h1 class="logo" @click="goToHome">Local Genius</h1>
    <div class="nav-bar" id="nav">
      <router-link to="/">Home</router-link>
      <template v-if="user">
        <router-link  style="position:relative;" to="/profile">
        <template  v-if="notifs" >
          <p class="notifs-count">{{notifs}}</p>
          <img src="@/assets/img/notiff.png" class="notifs-bubble" />
        </template>
          Profile
        </router-link>
        <button @click="logout">Logout</button>
      </template>
      <router-link v-else to="/login">Login</router-link>
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
    },
    notifs() {
      return (this.$store.getters.unReadNotifs.length);
    }
  },
  methods: {
    click() {
      this.isBooked = false;
    },
    async logout() {
      await this.$store.dispatch({ type: "logout" });
      location.reload();
    },
    goToHome() {
      this.$router.replace("/");
    },

  },
  created() {
    eventBus.$on("book", () => {
      this.isBooked = true;
    });
  }
};
</script>
