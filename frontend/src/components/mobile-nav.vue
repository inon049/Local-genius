<template>
  <nav class="mobile-nav flex align-center space-around">
    <router-link class="flex col" to="/" exact>
      <div @click="changeActiveLink(1)">
        <img v-if="activeLink === 1" src="@/assets/img/mobile-nav/house.svg" />
        <img v-else src="@/assets/img/mobile-nav/houseFill.svg" />
      </div>
    </router-link>
    <router-link class="flex col" to="/profile" exact>
      <div @click="changeActiveLink(2)">
        <img v-if="activeLink===2" src="@/assets/img/mobile-nav/avatar.svg" />
        <img v-else src="@/assets/img/mobile-nav/avatarFill.svg" />
      </div>
    </router-link>
    <router-link class="flex col" to="/" exact>
      <div @click="changeActiveLink(3)">
        <img v-if="activeLink===3" src="@/assets/img/mobile-nav/heart.svg" />
        <img v-else src="@/assets/img/mobile-nav/heartFill.svg" />
      </div>
    </router-link>
    <router-link class="flex col" to="/profile" exact>
      <div @click="changeActiveLink(4)">
        <img v-if="activeLink===4" src="@/assets/img/mobile-nav/notification.svg" />
        <img v-else src="@/assets/img/mobile-nav/notificationFill.svg" />
      </div>
    </router-link>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      activeLink: 1
    };
  },
  methods: {
    changeActiveLink(num) {
      this.activeLink = num;
    }
  },
  computed: {
    notifs() {
      return this.$store.getters.userNotifs;
    }
  },
  watch: {
    "$route.path"(s,x) {
      if (this.$route.path === "/") this.activeLink = 1;
      if (this.$route.path === "/profile") this.activeLink = 2;
    }
  }
};
</script>
