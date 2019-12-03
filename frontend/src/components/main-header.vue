<template>
  <div class="main-header">
    <img class="logo" src="../assets/img/start-logo.png" />
    <button v-if="location" class="back-btn">Back</button>
    <div class="nav-bar" id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/profile/summary">Profile<img @click="click" class="notif-img" v-if="isBooked" src="../assets/img/notification.png" ></router-link>
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
    }
  },
  methods: {
    click() {
      this.isBooked = false;
    }
  },
  created() {
    eventBus.$on("book", () => {
      this.isBooked = true;
    });
  },
  watch: {
    $route(to, from) {
      console.log("watch",to,from);
      this.params = to.path;
    }
  }
};
</script>
