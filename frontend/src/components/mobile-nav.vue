<template>
  <nav class="mobile-nav flex align-center space-around">
    <router-link class="flex col" to="/">
    <div @click="changeActiveLink(1)">
      <img  v-if="activeLink===1" src="@/assets/img/mobile-nav/houseFill.svg" />
      <img v-else src="@/assets/img/mobile-nav/house.svg" />
      </div>
    </router-link>
    <router-link class="flex col" to="/profile/summary">
    <div @click="changeActiveLink(3)">
      <img v-if="activeLink===3" src="@/assets/img/mobile-nav/avatarFill.svg" />
      <img v-else src="@/assets/img/mobile-nav/avatar.svg" />
      </div>
    </router-link>
       <router-link class="flex col" to="/">
    <div @click="changeActiveLink(2)">
      <img v-if="activeLink===2" src="@/assets/img/mobile-nav/heartFill.svg" />
      <img v-else src="@/assets/img/mobile-nav/heart.svg" />
      </div>
    </router-link>
    <router-link  class="flex col" to="/profile/summary">
    <div @click="changeActiveLink(4)">
      <img v-if="activeLink===4" src="@/assets/img/mobile-nav/notificationFill.svg"/>
      <img v-else src="@/assets/img/mobile-nav/notification.svg" />
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
      console.log('here!');
    },
  
  }
};
</script>