<template>
  <div class="main-header">
   <h1 class="logo">Local Genius</h1>
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

};
</script>
