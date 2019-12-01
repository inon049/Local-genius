<template>
<section class="profile flex">
  <profile-menu></profile-menu>
  <reviews-carousel></reviews-carousel>
  <router-view class="router"/>
</section>
</template>

<script>
import profileMenu from "../components/profile/profile-menu";
import reviewsCarousel from "../components/reviews-carousel";
export default {
    components:{
        profileMenu,
        reviewsCarousel
    }
};
</script>
