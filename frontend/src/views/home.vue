<template>
  <section class="home mt-10">
    <div class="hero-container flex justify-center">
      <div class="titles">
        <h2>Travel perfection made simple.</h2>
        <h3>Connecting travelers with local guides worldwide</h3>
      </div>
      <city-filter :cities="cities"></city-filter>
      <img class="hero-img" src="@/assets/img/home-bg.jpg" alt /> 
    <router-link  class="become-guide-btn" to="/guide/edit">BECOME A GUIDE</router-link>
    </div>
    <div class="container">
      <h2 class="list-title">SPOTLIGHT DESTINATIONS</h2>
      <city-list :cities="cities"></city-list>
    <hr>
    <h2 class="list-title">GUIDES OF THE MONTH</h2>
    <guide-list :guides="guides"></guide-list>
    <hr>
    </div>
  </section>
</template>

<script>
// BECOME A GUIDE WITH V-IF LOGGED IN GUIDE
import router from "@/router/index";
import cityService from "@/services/city.service";
import userService from "@/services/user.service";
import cityList from "@/components/home/city-list";
import cityFilter from "@/components/home/city-filter";
import guideList from "@/components/city/guide-list";

export default {
  router,
  name: "home",
  components: {
    cityFilter,
    cityList,
    guideList
  },
  data() {
    return {
      cities: [],
      guides:[]
    };
  },
  async created() {
    var cities = await cityService.query();
    this.cities = JSON.parse(JSON.stringify(cities));


    var guides = await userService.query();
    guides = JSON.parse(JSON.stringify(guides));
    this.guides = guides.splice(0,4)
  }
};
</script>
 <style>
 </style>