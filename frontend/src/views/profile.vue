<template>
<section class="profile flex">
  <profile-menu></profile-menu>
  <router-view class="router"/>
</section>
</template>

<script>
import profileMenu from "../components/profile/profile-menu";
export default {
    components:{
        profileMenu
    }
};
</script>
