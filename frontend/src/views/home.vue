<template>
  <section class="home">
    <div class="flex justify-center">
      <div class="titles">
        <h2>Travel perfection made simple.</h2>
        <h3>Find yourself a local genius in more then 100 cities</h3>
      </div>
      <city-filter :cities="cities"></city-filter>
      <img class="hero-img" src="@/assets/img/home-bg.jpg" alt />
    </div>
    <div class="container">
      <city-list :cities="cities"></city-list>
    </div>
  </section>
</template>

<script>
import router from "@/router/index";
import cityService from "@/services/city.service";
import cityList from "@/components/home/city-list";
import cityFilter from "@/components/home/city-filter";

export default {
  router,
  name: "home",
  components: {
    cityFilter,
    cityList
  },
  data() {
    return {
      cities: []
    };
  },
  async created() {
    var cities = await cityService.query();
    this.cities = JSON.parse(JSON.stringify(cities));
  }
};
</script>
