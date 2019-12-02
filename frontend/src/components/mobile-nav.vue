<template>
  <nav class="mobile-nav flex align-center space-between">
    <router-link class="flex col" to="/">
      <span class="img-by-line">Home</span>
      <img src="@/assets/img/mobile-nav/house.svg" />
    </router-link >
    <router-link class="flex col" to="/">
      <span class="img-by-line">Wishlist</span>
      <img src="@/assets/img/mobile-nav/heart.svg" />
    </router-link>
    <router-link class="flex col" to="/profile/summary">
      <span class="img-by-line">Profile</span>
      <img src="@/assets/img/mobile-nav/avatar.svg" />
    </router-link>
    <router-link class="flex col" to="/profile/summary">
      <span class="img-by-line">Notifications</span>
      <img src="@/assets/img/mobile-nav/notification.svg" />
    </router-link>
  </nav>
</template>
<script>
export default {};
</script>