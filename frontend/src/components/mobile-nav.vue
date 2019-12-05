<template>
  <nav class="mobile-nav flex align-center space-around">
    <router-link class="flex col" to="/">
    <div @click="changeActiveLink(1)">
      <img v-if="activeLink===1" src="@/assets/img/mobile-nav/house.svg" />
      <img  v-else src="@/assets/img/mobile-nav/houseFill.svg" />
      </div>
    </router-link>
    <router-link class="flex col" to="/profile/summary">
    <div @click="changeActiveLink(2)">
      <img  v-if="activeLink===2"  src="@/assets/img/mobile-nav/avatar.svg" />
      <img v-else src="@/assets/img/mobile-nav/avatarFill.svg" />
      </div>
    </router-link>
       <router-link class="flex col" to="/">
    <div @click="changeActiveLink(3)">
      <img v-if="activeLink===3" src="@/assets/img/mobile-nav/heart.svg" />
      <img  v-else  src="@/assets/img/mobile-nav/heartFill.svg" />
      </div>
    </router-link>
    <router-link  class="flex col" to="/profile/summary">
    <div @click="changeActiveLink(4)">
      <img v-if="activeLink===4" src="@/assets/img/mobile-nav/notification.svg" />
      <img v-else src="@/assets/img/mobile-nav/notificationFill.svg"/>
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
    },
  
  },
  computed:{
    notifs(){
      return this.$store.getters.userNotifs
    }
  }
};
</script>
<style lang="scss" scoped>
@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}
</style>