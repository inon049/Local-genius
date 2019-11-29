<template>
<section class="profile flex">
  <profile-menu></profile-menu>
  <router-view/>
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
